import type { NavLink } from '../types/nav';

export async function fetchNavLinks(): Promise<NavLink[]> {
  const response = await fetch('/api/nav');
  if (!response.ok) {
    throw new Error('Failed to fetch navigation links');
  }
  return response.json();
}
