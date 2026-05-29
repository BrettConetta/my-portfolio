export function isExternalUrl(href: string): boolean {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:')
  );
}

export function linkOpensExternally(href: string, external?: boolean): boolean {
  return external ?? isExternalUrl(href);
}

export function shouldUseRouterLink(href: string, opensInNewTab: boolean): boolean {
  if (opensInNewTab) return false;
  if (isExternalUrl(href)) return false;
  return href.startsWith('/');
}
