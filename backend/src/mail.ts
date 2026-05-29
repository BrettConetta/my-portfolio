import nodemailer from "nodemailer";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP is not configured");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user, pass },
  });
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<void> {
  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER;

  if (!to) {
    throw new Error("CONTACT_TO is not configured");
  }

  const fromAddress = process.env.SMTP_USER;
  if (!fromAddress) {
    throw new Error("SMTP is not configured");
  }

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Portfolio contact form" <${fromAddress}>`,
    to,
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
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
