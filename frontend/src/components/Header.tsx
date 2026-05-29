import { useQuery } from '@tanstack/react-query';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { fetchNavLinks } from '../api/nav';
import type { NavLink as NavLinkItem } from '../types/nav';

const navLinkClassName =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400';

const resumeButtonClassName =
  'inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/95 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400';

const defaultNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'GitHub',
    href: 'https://github.com/BrettConetta',
    external: true,
  },
];

function isExternalLink(link: NavLinkItem) {
  return (
    link.external ?? (link.href.startsWith('http') || link.href.startsWith('mailto:'))
  );
}

function NavButton({ link }: { link: NavLinkItem }) {
  if (isExternalLink(link)) {
    return (
      <a
        href={link.href}
        className={navLinkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  }

  return (
    <NavLink
      to={link.href}
      end={link.href === '/'}
      className={({ isActive }) =>
        `${navLinkClassName}${isActive ? ' bg-slate-700 text-white' : ''}`
      }
    >
      {link.label}
    </NavLink>
  );
}

const Header = () => {
  const { data: navLinks = defaultNavLinks, isError } = useQuery({
    queryKey: ['nav'],
    queryFn: fetchNavLinks,
    placeholderData: defaultNavLinks,
  });

  const links = isError ? defaultNavLinks : navLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-cyan-300"
        >
          Brett Conetta
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {links.map((link) => (
              <NavButton key={link.label} link={link} />
            ))}
          </nav>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume (opens in new tab)"
            className={resumeButtonClassName}
          >
            Resume
            <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
