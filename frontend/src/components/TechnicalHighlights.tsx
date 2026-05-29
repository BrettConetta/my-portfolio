type Highlight = {
  title: string;
  summary: string;
  items: string[];
};

const highlights: Highlight[] = [
  {
    title: 'Backend engineering',
    summary: 'Build dependable APIs and services with maintainable architecture.',
    items: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
  },
  {
    title: 'Frontend experience',
    summary: 'Ship responsive interfaces with clear UX and practical performance.',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Cloud and delivery',
    summary: 'Own deployment workflows and operational reliability from code to production.',
    items: ['AWS', 'Docker', 'CI/CD', 'Monitoring', 'Railway'],
  },
];

const TechnicalHighlights = () => {
  return (
    <section id="technical-highlights" aria-labelledby="technical-highlights-heading">
      <div className="space-y-1">
        <h2 id="technical-highlights-heading" className="text-2xl font-semibold text-white">
          Technical highlights
        </h2>
        <p className="text-slate-400">
          Core areas I focus on when delivering production-ready software.
        </p>
      </div>
      <ul className="mt-6 grid gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <li key={highlight.title}>
            <article className="h-full rounded-md border border-slate-700 bg-slate-900/95 p-4">
              <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{highlight.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${highlight.title} technologies`}>
                {highlight.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300"
                  >
                    {item}
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
