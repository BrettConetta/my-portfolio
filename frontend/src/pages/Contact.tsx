import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";
import { contactEmail, socialLinks } from "../data/contact";

const Contact = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        titleId="contact-heading"
        title="Contact"
        className="max-w-2xl"
        description={
          <>
            <p>
              I&apos;m open to full-time positions and contract engagements. Send a
              message below, or reach out directly by email or LinkedIn.
            </p>
            <p>
              I&apos;m glad to set up a phone or video call to talk through fit,
              scope, and timing — no pressure, just a conversation.
            </p>
          </>
        }
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
        <section
          aria-labelledby="contact-form-heading"
          className="rounded-md border border-border bg-surface/95 p-6"
        >
          <h2 id="contact-form-heading" className="text-lg font-semibold text-heading">
            Send a message
          </h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>

        <aside className="space-y-4">
          <section
            aria-labelledby="direct-contact-heading"
            className="rounded-md border border-border bg-surface/95 p-4"
          >
            <h2
              id="direct-contact-heading"
              className="text-lg font-semibold text-heading"
            >
              Direct contact
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-heading">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-link transition-colors hover:text-heading"
                  >
                    {contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-heading">Location</dt>
                <dd className="mt-1 text-muted">Near Princeton, NJ · Remote-friendly</dd>
              </div>
            </dl>
          </section>

          <section
            aria-labelledby="social-links-heading"
            className="rounded-md border border-border bg-surface/95 p-4"
          >
            <h2
              id="social-links-heading"
              className="text-lg font-semibold text-heading"
            >
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-heading"
                  >
                    {link.label === "LinkedIn" ? (
                      <FaLinkedin className="h-4 w-4" aria-hidden />
                    ) : (
                      <FaGithub className="h-4 w-4" aria-hidden />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
