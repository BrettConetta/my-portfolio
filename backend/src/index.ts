import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3001;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
].filter((origin): origin is string => Boolean(origin));

app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/api/nav", (_req: Request, res: Response) => {
  res.json([
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    {
      label: "GitHub",
      href: "https://github.com/BrettConetta",
      external: true,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
