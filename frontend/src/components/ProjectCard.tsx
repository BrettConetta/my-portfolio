import { FaTerminal } from 'react-icons/fa';
import { linkOpensExternally } from '../lib/links';
import type { Project, ProjectLink } from '../types/project';
import Button from './Button';
import Tag from './Tag';

function ProjectLinkText({ link }: { link: ProjectLink }) {
  const external = linkOpensExternally(link.href, link.external);
  const className =
    'text-sm text-slate-400 underline-offset-4 transition-colors hover:text-sky-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400';

  if (external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

function ProjectCardMedia({ project }: { project: Project }) {
  if (project.kind === 'cli') {
    return (
      <div
        className="flex aspect-video flex-col border-b border-slate-700 bg-slate-950"
        aria-hidden
      >
        <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-2">
          <Tag>CLI tool</Tag>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <FaTerminal className="h-14 w-14 text-slate-600" />
        </div>
      </div>
    );
  }

  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={project.imageAlt ?? project.title}
        className="aspect-video w-full border-b border-slate-700 object-cover"
      />
    );
  }

  return (
    <div
      className="aspect-video w-full border-b border-slate-700 bg-linear-to-br from-slate-800 to-slate-950"
      aria-hidden
    />
  );
}

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const secondaryLinks = project.links.secondary ?? [];

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-md border border-slate-700 bg-slate-900/95 ${
        project.featured ? 'ring-1 ring-cyan-700/40' : ''
      }`}
    >
      <ProjectCardMedia project={project} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {project.summary}
          </p>
        </div>
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          <Button
            variant="primary"
            href={project.links.primary.href}
            openInNewTab={linkOpensExternally(
              project.links.primary.href,
              project.links.primary.external,
            )}
          >
            {project.links.primary.label}
          </Button>
          {secondaryLinks.map((link) => (
            <ProjectLinkText key={`${link.href}-${link.label}`} link={link} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
