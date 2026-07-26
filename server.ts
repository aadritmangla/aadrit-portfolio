import express from "express";
import path from "path";
import "dotenv/config";
import { createServer as createViteServer } from "vite";

function reportMissingKeys(expressApp: any) {
  return expressApp;
}

async function startServer() {
  const app = reportMissingKeys(express());
  const PORT = 3000;

  app.use(express.json());

// Inquiry API route
  app.post("/api/inquiry", async (req, res) => {
    const { name, agency, email, phone, projectType, message } = req.body;

    try {
      // Forward to Forminit
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

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error handling inquiry:', error);
      res.status(500).json({ success: false, error: 'Failed to process inquiry' });
    }
  });

  // Instagram DP API route (fallback - returns null)
  app.get("/api/instagram-dp", async (req, res) => {
    res.status(200).json({ url: null });
  });

  // Serve local assets from Desktop/assets
  const assetsPath = path.join('C:\\Users\\QEnic\\Desktop\\assets');
  app.use('/assets', express.static(assetsPath));

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
    app.use('/assets', express.static(assetsPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
