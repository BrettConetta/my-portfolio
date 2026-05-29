export type ProjectKind = 'web' | 'cli';

export type ProjectLink = {
  label: string;
  href: string;
  /** Defaults to true when href is http(s) or mailto */
  external?: boolean;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  kind: ProjectKind;
  tags: string[];
  /** Shown on the home page featured section */
  featured?: boolean;
  /** Web projects only — omit for CLI or to use the default placeholder */
  imageUrl?: string;
  imageAlt?: string;
  links: {
    primary: ProjectLink;
    secondary?: ProjectLink[];
  };
};
