import express from "express";
import path from "path";
import "dotenv/config";
import { createServer as createViteServer } from "vite";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || "";

function isValidSupabaseConfig(url: string | undefined, key: string | undefined): boolean {
  if (!url || !key) return false;
  const trimmedUrl = url.trim();
  const trimmedKey = key.trim();
  if (trimmedUrl === "" || trimmedUrl.includes("YOUR_SUPABASE_URL")) return false;
  if (trimmedKey === "" || trimmedKey.includes("YOUR_SUPABASE_KEY")) return false;
  return trimmedUrl.startsWith("https://") || trimmedUrl.startsWith("http://");
}

const isSupabaseEnabled = isValidSupabaseConfig(supabaseUrl, supabaseKey);
if (!isSupabaseEnabled) {
  console.warn("⚠️ SUPABASE_URL or SUPABASE_KEY is either not set, uses placeholder details, or is empty. Database sync is disabled.");
}

const supabase = isSupabaseEnabled ? createClient(supabaseUrl, supabaseKey) : null;

async function startServer() {
  const app = reportMissingKeys(express());
  const PORT = 3000;

  function reportMissingKeys(expressApp: any) {
    return expressApp;
  }

  app.use(express.json());

// Inquiry API route
  app.post("/api/inquiry", async (req, res) => {
    const { name, agency, email, phone, projectType, message } = req.body;

    try {
      try {
        if (isSupabaseEnabled && supabase) {
          // Save to Supabase
          const { error: dbError } = await supabase
            .from("inquiries")
            .insert([
              {
                name,
                agency: agency || null,
                email,
                phone: phone || null,
                projectType,
                message,
                createdAt: Date.now(),
              }
            ]);

          if (dbError) {
            console.error("Supabase insert failed:", dbError);
          } else {
            console.log("Successfully inserted inquiry to Supabase");
          }
        } else {
          console.warn("Supabase is either bypassed or not enabled, skipping database insert");
        }
      } catch (supabaseError) {
        console.error("Supabase insert failed, continuing to email:", supabaseError);
      }

      // Forward to Forminit
      try {
        const params = new URLSearchParams();
        params.append('name', name || '');
        params.append('agency', agency || '');
        params.append('email', email || '');
        params.append('phone', phone || '');
        params.append('projectType', projectType || '');
        params.append('message', message || '');

        const forminitResponse = await fetch('https://forminit.com/hkok7of0tl5', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          },
          body: params.toString(),
        });
        if (!forminitResponse.ok) {
           console.warn("Forminit submission failed:", forminitResponse.status, forminitResponse.statusText);
        }
      } catch (forminitError) {
        console.error("Failed to send to Forminit:", forminitError);
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error handling inquiry:', error);
      res.status(500).json({ success: false, error: 'Failed to process inquiry' });
    }
  });

  // Instagram DP API route
  app.get("/api/instagram-dp", async (req, res) => {
    try {
      if (!isSupabaseEnabled || !supabase) {
        res.status(200).json({ url: null });
        return;
      }
      
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "instagram")
        .single();
        
      if (error || !data) {
        console.warn("No 'instagram' setting found in Supabase settings table, using default");
        res.status(200).json({ url: null });
        return;
      }
      
      let parsedValue = data.value;
      if (typeof parsedValue === "string") {
        try {
          parsedValue = JSON.parse(parsedValue);
        } catch (_) {}
      }

      res.status(200).json(parsedValue || { url: null });
    } catch (error) {
      console.warn("Error fetching DP from Supabase (using fallback):", error);
      res.status(200).json({ url: null });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
