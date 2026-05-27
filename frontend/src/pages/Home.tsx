import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Home = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-white">Brett Conetta</h1>
            <p className="text-2xl mt-2 text-slate-300">Full Stack Software Engineer</p>
            <p className="text-lg mt-2 text-slate-300">Building production-ready systems across Java, Spring Boot, React, and AWS. Five years of experience shipping real software, leading teams, and caring about the craft.</p>
            <div className="mt-2 flex w-full max-w-full flex-wrap items-center gap-4">
                <nav
                    aria-label="Primary actions"
                    className="flex flex-wrap items-center gap-4"
                >
                    <Link
                        to="/projects"
                        className="shrink-0 bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
                    > 
                        View my work
                    </Link>
                    <Link
                        to="/contact"
                        className="shrink-0 border border-slate-700 bg-slate-900/95 px-4 py-2 text-white rounded-md transition-colors hover:bg-slate-700"
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
        </div>
    )
};
  
export default Home;