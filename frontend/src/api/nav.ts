import type { NavLink } from '../types/nav';
import { apiUrl } from './baseUrl';

export async function fetchNavLinks(): Promise<NavLink[]> {
  const response = await fetch(apiUrl('/api/nav'));
  if (!response.ok) {
    throw new Error('Failed to fetch navigation links');
  }
  return response.json();
}
