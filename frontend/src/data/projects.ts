import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'my-portfolio',
    title: 'Portfolio website',
    summary:
      'Personal portfolio with intro, featured and full project listings, an about page, and contact, plus source links for deeper review.',
    kind: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    links: {
      primary: {
        label: 'View on GitHub',
        href: 'https://github.com/BrettConetta/my-portfolio',
      },
    },
  },
  {
    id: 'project-generator',
    title: 'Project generator',
    summary:
      'Bash CLI that scaffolds consistent project layouts so new repos start with the same structure, scripts, and conventions.',
    kind: 'cli',
    tags: ['Bash', 'CLI', 'Developer tooling'],
    featured: true,
    links: {
      primary: {
        label: 'View on GitHub',
        href: 'https://github.com/BrettConetta/project-generator',
      },
    },
  },
];

export function getFeaturedProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => project.featured);
}
