/** Base URL for API requests. Empty in local dev so Vite proxies `/api` to the backend. */
export function apiUrl(path: string): string {
  const base = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
