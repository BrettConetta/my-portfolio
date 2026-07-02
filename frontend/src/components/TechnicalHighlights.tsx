import SectionHeader from "./SectionHeader";
import Tag from "./Tag";

type Highlight = {
  title: string;
  summary: string;
  items: string[];
};

const highlights: Highlight[] = [
  {
    title: "Backend engineering",
    summary:
      "Build dependable APIs and services with maintainable architecture.",
    items: ["Java", "Spring Boot", "REST APIs", "SQL"],
  },
  {
    title: "Frontend experience",
    summary:
      "Ship responsive interfaces with clear UX and practical performance.",
    items: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    title: "Cloud and delivery",
    summary:
      "Own deployment workflows and operational reliability from code to production.",
    items: ["AWS", "Docker", "CI/CD", "Monitoring", "Railway", "Vercel"],
  },
];

const TechnicalHighlights = () => {
  return (
    <section
      id="technical-highlights"
      aria-labelledby="technical-highlights-heading"
    >
      <SectionHeader
        titleId="technical-highlights-heading"
        title="Technical highlights"
        description="Core areas I focus on when delivering production-ready software."
      />
      <ul className="mt-6 grid gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <li key={highlight.title}>
            <article className="h-full rounded-md border border-border bg-surface/95 p-4">
              <h3 className="text-lg font-semibold text-heading">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {highlight.summary}
              </p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={`${highlight.title} technologies`}
              >
                {highlight.items.map((item) => (
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
  );
};

export default TechnicalHighlights;
