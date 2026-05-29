import { type FormEvent, useState } from "react";
import { submitContactForm } from "../api/contact";

const fieldClassName =
  "w-full rounded-md border border-border bg-surface/95 px-3 py-2 text-sm text-heading placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

const labelClassName = "text-sm font-medium text-heading";

const submitClassName =
  "inline-flex shrink-0 items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-heading transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-60";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactForm({ name, email, message, website });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-md border border-border bg-surface/95 p-6"
        role="status"
      >
        <p className="font-medium text-heading">Message sent</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          className={`${submitClassName} mt-4`}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <label htmlFor="contact-name" className={labelClassName}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className={labelClassName}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClassName} resize-y min-h-32`}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        className={submitClassName}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
