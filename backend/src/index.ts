import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import contactRoute from "./contactRoute.js";

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

app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
