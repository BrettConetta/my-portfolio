import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        titleId="projects-heading"
        title="Projects"
        description="Work across web apps, CLI tools, and developer tooling. Each project includes a short summary, tech stack, and links to source or demos where available."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
