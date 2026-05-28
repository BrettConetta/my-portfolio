import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import TechnicalHighlights from '../components/TechnicalHighlights';
import { getFeaturedProjects, projects } from '../data/projects';

const Home = () => {
    const featuredProjects = getFeaturedProjects(projects);

    return (
        <div className="space-y-12">
            <section className="pt-6 pb-10 sm:pt-10 sm:pb-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold text-white">Brett Conetta</h1>
                    <p className="mt-2 text-2xl text-slate-300">Full Stack Software Engineer</p>
                    <p className="mt-4 text-lg text-slate-300">Building production-ready systems across Java, Spring Boot, React, and AWS. Five years of experience shipping real software, leading teams, and caring about the craft.</p>
                </div>
                <div className="mt-6 flex w-full max-w-full flex-wrap items-center gap-4 sm:mt-8">
                <nav
                    aria-label="Primary actions"
                    className="flex flex-wrap items-center gap-4"
                >
                    <Link
                        to="/contact"
                        className="shrink-0 bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Contact me
                    </Link>
                </nav>
                <nav
                    aria-label="Social links"
                    className="flex shrink-0 items-center gap-4"
                >
                    <a
                        href="https://github.com/BrettConetta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex h-8 w-8 shrink-0 items-center justify-center text-slate-200 transition-colors hover:text-white"
                    >
                        <span
                            className="pointer-events-none absolute inset-0 rounded-full bg-slate-700 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                        />
                        <FaGithub className="relative z-10 h-8 w-8" aria-hidden />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brett-conetta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex h-8 -ml-0.5 shrink-0 items-center justify-center text-slate-200 transition-colors hover:text-white"
                    >
                        <span
                            className="pointer-events-none absolute inset-[2px] rounded-sm bg-slate-700 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                        />
                        <FaLinkedin className="relative z-10 h-8 w-auto" aria-hidden />
                    </a>
                </nav>
            </div>
            </section>

            <section id="featured-projects" aria-labelledby="featured-projects-heading">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h2 id="featured-projects-heading" className="text-2xl font-semibold text-white">
                            Featured projects
                        </h2>
                        <p className="text-slate-400">
                            Selected projects that show how I approach shipping reliable software.
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="inline-flex border border-slate-700 bg-slate-900/95 px-4 py-2 text-white rounded-md transition-colors hover:bg-slate-700"
                    >
                        View all projects
                    </Link>
                </div>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            </section>
            <TechnicalHighlights />
        </div>
    )
};
  
export default Home;