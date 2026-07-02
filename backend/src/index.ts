import "dotenv/config";
import cors from "cors";
import express, { type Request, type Response } from "express";
import contactRoute from "./contactRoute.js";

const app = express();

// CORS only needed for local dev (Vite on :5173 → API on :3001)
if (!process.env.VERCEL) {
  app.use(cors({ origin: "http://localhost:5173" }));
}

app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRoute);

export default app;

// Local dev only — Vercel imports the app and never calls listen()
if (!process.env.VERCEL) {
  const PORT = process.env.PORT ?? 3001;
  app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
  });
}
