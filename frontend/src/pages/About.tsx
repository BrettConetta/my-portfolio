import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../components/Button';
import Recommendations from '../components/Recommendations';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';
import {
  bioParagraphs,
  education,
  experience,
  quickFacts,
  skillGroups,
} from '../data/about';
import { contactEmail, socialLinks } from '../data/contact';

const About = () => {
  return (
    <div className="space-y-12">
      <SectionHeader
        titleId="about-heading"
        title="About"
        className="max-w-2xl"
        description="A bit about my background, how I work, and what I focus on when building software."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-10">
          <section aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="text-lg font-semibold text-heading">
              Background
            </h2>
            <div className="mt-4 max-w-3xl space-y-4">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-lg font-semibold text-heading">
              Experience
            </h2>
            <ul className="mt-4 space-y-4">
              {experience.map((entry) => (
                <li key={`${entry.period}-${entry.company}`}>
                  <article className="rounded-md border border-border bg-surface/95 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-heading">
                        {entry.role}
                        <span className="font-normal text-muted"> · {entry.company}</span>
                      </h3>
                      <time
                        dateTime={entry.period}
                        className="shrink-0 text-sm text-subtle"
                      >
                        {entry.period}
                      </time>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted italic">
                      {entry.summary}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-lg font-semibold text-heading">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {education.map((entry) => (
                <li key={`${entry.period}-${entry.school}`}>
                  <article className="rounded-md border border-border bg-surface/95 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-heading">
                        {entry.degree}
                        <span className="font-normal text-muted"> · {entry.school}</span>
                      </h3>
                      <time
                        dateTime={entry.period}
                        className="shrink-0 text-sm text-subtle"
                      >
                        {entry.period}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <section
            aria-labelledby="quick-facts-heading"
            className="rounded-md border border-border bg-surface/95 p-4"
          >
            <h2 id="quick-facts-heading" className="text-lg font-semibold text-heading">
              At a glance
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-medium text-heading">{fact.label}</dt>
                  <dd className="mt-1 text-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="about-links-heading"
            className="rounded-md border border-border bg-surface/95 p-4"
          >
            <h2 id="about-links-heading" className="text-lg font-semibold text-heading">
              Links
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
                    {link.label === 'LinkedIn' ? (
                      <FaLinkedin className="h-4 w-4" aria-hidden />
                    ) : (
                      <FaGithub className="h-4 w-4" aria-hidden />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-heading"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  {contactEmail}
                </a>
              </li>
              <li>
                <Button
                  variant="secondary"
                  href="/resume.pdf"
                  openInNewTab
                  className="w-full"
                  aria-label="Resume (opens in new tab)"
                >
                  Resume
                </Button>
              </li>
            </ul>
          </section>
        </aside>
      </div>

      <section aria-labelledby="skills-heading">
        <SectionHeader
          titleId="skills-heading"
          title="Skills & tools"
          description="Technologies and practices I use regularly across backend, frontend, and delivery."
        />
        <ul className="mt-6 grid items-start gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.title}>
              <article className="rounded-md border border-border bg-surface/95 p-4">
                <h3 className="text-lg font-semibold text-heading">{group.title}</h3>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${group.title} technologies`}
                >
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <Recommendations />

      <section aria-labelledby="about-cta-heading">
        <SectionHeader
          titleId="about-cta-heading"
          title="Let's connect"
          className="max-w-2xl"
          description="Open to full-time roles and contract work. Happy to chat about fit, scope, and timing."
        />
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="primary" href="/contact">
            Contact me
          </Button>
          <Button variant="secondary" href="/projects">
            View projects
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
