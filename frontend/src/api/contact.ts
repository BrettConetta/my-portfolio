import { apiUrl } from "./baseUrl";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(apiUrl("/api/contact"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(body?.error ?? "Failed to send message");
  }
}
