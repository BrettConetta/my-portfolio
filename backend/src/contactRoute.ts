import { Router, type Request, type Response } from "express";
import { sendContactEmail } from "./mail.js";

const router = Router();

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function validateContactBody(body: ContactBody) {
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return { ok: false as const, silent: true };
  }

  if (!isNonEmptyString(body.name, 100)) {
    return { ok: false as const, error: "Please enter your name." };
  }

  if (!isNonEmptyString(body.email, 254) || !EMAIL_PATTERN.test(body.email.trim())) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (!isNonEmptyString(body.message, 5000)) {
    return { ok: false as const, error: "Please enter a message." };
  }

  return {
    ok: true as const,
    data: {
      name: body.name.trim(),
      email: body.email.trim(),
      message: body.message.trim(),
    },
  };
}

router.post("/", async (req: Request, res: Response) => {
  const result = validateContactBody(req.body);

  if (!result.ok) {
    if ("silent" in result && result.silent) {
      res.json({ ok: true });
      return;
    }

    res.status(400).json({ error: result.error });
    return;
  }

  try {
    await sendContactEmail(result.data);
    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    res.status(503).json({
      error: "Unable to send your message right now. Please try again later.",
    });
  }
});

export default router;
