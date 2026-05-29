import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { fetchNavLinks } from '../api/nav';
import { linkOpensExternally } from '../lib/links';
import type { NavLink as NavLinkItem } from '../types/nav';
import Button from './Button';

const navLinkClassName =
  'rounded-md px-3 py-2 text-sm font-medium text-nav transition-colors hover:bg-interactive hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

const mobileNavLinkClassName =
  'block rounded-md px-4 py-3 text-base font-medium text-nav transition-colors hover:bg-interactive hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

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

function NavButton({
  link,
  className = navLinkClassName,
  onNavigate,
}: {
  link: NavLinkItem;
  className?: string;
  onNavigate?: () => void;
}) {
  if (linkOpensExternally(link.href, link.external)) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
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
        `${className}${isActive ? ' bg-interactive text-heading' : ''}`
      }
      onClick={onNavigate}
    >
      {link.label}
    </NavLink>
  );
}

const Header = () => {
  const location = useLocation();
  const [menuOpenAtPath, setMenuOpenAtPath] = useState<string | null>(null);
  const menuOpen = menuOpenAtPath === location.pathname;

  const closeMenu = () => setMenuOpenAtPath(null);
  const toggleMenu = () =>
    setMenuOpenAtPath((current) =>
      current === location.pathname ? null : location.pathname,
    );

  const { data: navLinks = defaultNavLinks, isError } = useQuery({
    queryKey: ['nav'],
    queryFn: fetchNavLinks,
    placeholderData: defaultNavLinks,
  });

  const links = isError ? defaultNavLinks : navLinks;

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <button
        type="button"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-black/40 transition-opacity duration-300 ease-out motion-reduce:transition-none nav:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <div className="relative z-50 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 nav:justify-between">
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-heading transition-colors hover:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus nav:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes className="h-5 w-5" aria-hidden />
            ) : (
              <FaBars className="h-5 w-5" aria-hidden />
            )}
          </button>

          <div className="flex-1 nav:hidden" aria-hidden="true" />

          <Link
            to="/"
            className="shrink-0 truncate text-lg font-bold tracking-tight text-heading transition-colors hover:text-accent-soft"
          >
            Brett Conetta
          </Link>

          <div className="flex-1 nav:hidden" aria-hidden="true" />

          <div className="flex shrink-0 items-center gap-3">
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 nav:flex"
            >
              {links.map((link) => (
                <NavButton key={link.label} link={link} />
              ))}
            </nav>

            <Button
              variant="secondary"
              href="/resume.pdf"
              openInNewTab
              aria-label="Resume (opens in new tab)"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full z-50 grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none nav:hidden ${
          menuOpen
            ? 'pointer-events-auto grid-rows-[1fr]'
            : 'pointer-events-none grid-rows-[0fr]'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          id="mobile-nav"
          aria-label="Main navigation"
          inert={menuOpen ? undefined : true}
          className="min-h-0 overflow-hidden border-b border-border bg-surface/95 shadow-lg backdrop-blur"
        >
          <ul
            className={`mx-auto max-w-6xl space-y-1 px-4 py-3 transition-all duration-300 ease-out motion-reduce:transition-none sm:px-6 ${
              menuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-2 opacity-0'
            }`}
          >
            {links.map((link) => (
              <li key={link.label}>
                <NavButton
                  link={link}
                  className={mobileNavLinkClassName}
                  onNavigate={closeMenu}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
