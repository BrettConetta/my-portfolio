import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import Recommendations from '../components/Recommendations';
import SectionHeader from '../components/SectionHeader';
import TechnicalHighlights from '../components/TechnicalHighlights';
import { getFeaturedProjects, projects } from '../data/projects';

const Home = () => {
    const featuredProjects = getFeaturedProjects(projects);

    return (
        <div className="space-y-12">
            <section className="pt-6 sm:pt-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold text-heading">Brett Conetta</h1>
                    <p className="mt-2 text-2xl text-secondary">Full Stack Software Engineer</p>
                    <p className="mt-4 text-lg text-secondary">Building production-ready systems across Java, Spring Boot, React, and AWS. Five years of experience shipping real software, leading teams, and caring about the craft.</p>
                    <p className="mt-4 text-base text-muted">
                        Based near Princeton, NJ. I prefer remote work and am open to hybrid or onsite roles
                        for the right fit.
                    </p>
                    <p className="mt-2 text-base text-muted">
                        Open to full-time roles and contract work—happy to connect by email or for a quick
                        call.
                    </p>
                </div>
                <div className="mt-6 flex w-full max-w-full flex-wrap items-center gap-4 sm:mt-8">
                <nav
                    aria-label="Primary actions"
                    className="flex flex-wrap items-center gap-4"
                >
                    <Button variant="primary" href="/contact">
                        Contact me
                    </Button>
                    <Button
                        variant="secondary"
                        href="/resume.pdf"
                        openInNewTab
                        aria-label="Resume (opens in new tab)"
                    >
                        Resume
                    </Button>
                </nav>
                <nav
                    aria-label="Social links"
                    className="flex shrink-0 items-center gap-4"
                >
                    <a
                        href="https://github.com/BrettConetta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex h-8 w-8 shrink-0 items-center justify-center text-nav transition-colors hover:text-heading"
                    >
                        <span
                            className="pointer-events-none absolute inset-0 rounded-full bg-interactive opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                        />
                        <FaGithub className="relative z-10 h-8 w-8" aria-hidden />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brett-conetta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex h-8 -ml-0.5 shrink-0 items-center justify-center text-nav transition-colors hover:text-heading"
                    >
                        <span
                            className="pointer-events-none absolute inset-[2px] rounded-sm bg-interactive opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                        />
                        <FaLinkedin className="relative z-10 h-8 w-auto" aria-hidden />
                    </a>
                </nav>
            </div>
            </section>

            <section id="featured-projects" aria-labelledby="featured-projects-heading">
                <div className="space-y-4">
                    <SectionHeader
                        titleId="featured-projects-heading"
                        title="Featured projects"
                        description="Selected projects that show how I approach shipping reliable software."
                    />
                    <Button variant="secondary" href="/projects">
                        View all projects
                    </Button>
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
            <Recommendations />

            <section id="get-in-touch" aria-labelledby="get-in-touch-heading">
                <SectionHeader
                    titleId="get-in-touch-heading"
                    title="Get in touch"
                    className="max-w-2xl"
                    description={
                        <>
                            <p>
                                I&apos;m open to full-time positions and contract engagements. Whether
                                you&apos;re hiring for a team role or need help on a defined project,
                                I&apos;d like to hear from you.
                            </p>
                            <p>
                                I&apos;m glad to set up a phone or video call to talk through fit, scope,
                                and timing — no pressure, just a conversation.
                            </p>
                        </>
                    }
                />
                <Button variant="primary" href="/contact" className="mt-6">
                    Contact me
                </Button>
            </section>
        </div>
    )
};
  
export default Home;
