import express from "express";
import path from "path";
import "dotenv/config";
import { createServer as createViteServer } from "vite";

import { ConvexHttpClient } from "convex/browser";

// Initialize Convex Client
// Make sure to define CONVEX_URL in your .env
const convexURL = process.env.VITE_CONVEX_URL || process.env.CONVEX_URL || "";

function isValidConvexUrl(url: string | undefined): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === "" || trimmed.includes("YOUR_CONVEX_URL")) return false;
  if (
    trimmed.startsWith("https://convex.dev") || 
    trimmed.startsWith("https://www.convex.dev") || 
    trimmed.startsWith("http://convex.dev") || 
    trimmed.startsWith("http://www.convex.dev")
  ) {
    return false;
  }
  return trimmed.startsWith("https://") || trimmed.startsWith("http://");
}

const isConvexEnabled = isValidConvexUrl(convexURL);
if (!isConvexEnabled) {
  console.warn("⚠️ CONVEX_URL is either not set, uses placeholder details, or is set to 'https://www.convex.dev' instead of your actual deployment URL (e.g. 'https://gorgeous-antelope-456.convex.cloud'). Database sync is disabled.");
}

const convex = isConvexEnabled ? new ConvexHttpClient(convexURL) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

// Inquiry API route
  app.post("/api/inquiry", async (req, res) => {
    const { name, agency, email, phone, projectType, message } = req.body;

    try {
      try {
        if (isConvexEnabled && convex) {
          // Save to Convex
          await convex.mutation("inquiries:create" as any, {
            name,
            agency,
            email,
            phone,
            projectType,
            message,
          });
        } else {
          console.warn("Convex is either bypassed or not enabled, skipping database insert");
        }
      } catch (convexError) {
        console.error("Convex mutation failed, continuing to email:", convexError);
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
      if (!isConvexEnabled || !convex) {
        res.status(200).json({ url: null });
        return;
      }
      
      const dpSetting = await convex.query("settings:getInstagramDp" as any);
      res.status(200).json(dpSetting);
    } catch (error) {
      console.warn("Error fetching DP from Convex (using fallback):");
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
