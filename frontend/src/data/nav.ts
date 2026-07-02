import type { NavLink } from '../types/nav';
import { socialLinks } from './contact';

const githubHref =
  socialLinks.find((link) => link.label === 'GitHub')?.href ??
  'https://github.com/BrettConetta';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'GitHub',
    href: githubHref,
    external: true,
  },
];
