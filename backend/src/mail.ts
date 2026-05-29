import { Resend } from "resend";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

const DEFAULT_FROM = "Portfolio contact form <onboarding@resend.dev>";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<void> {
  const to = process.env.CONTACT_TO;
  if (!to) {
    throw new Error("CONTACT_TO is not configured");
  }

  const from = process.env.RESEND_FROM ?? DEFAULT_FROM;
  const resend = getResendClient();

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Portfolio message from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      payload.message,
    ].join("\n"),
    html: [
      "<p><strong>Name:</strong> " + escapeHtml(payload.name) + "</p>",
      "<p><strong>Email:</strong> " + escapeHtml(payload.email) + "</p>",
      "<p><strong>Message:</strong></p>",
      "<p>" + escapeHtml(payload.message).replace(/\n/g, "<br>") + "</p>",
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
