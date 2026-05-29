import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { linkOpensExternally, shouldUseRouterLink } from '../lib/links';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  variant: ButtonVariant;
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  showExternalIcon?: boolean;
  className?: string;
  'aria-label'?: string;
};

const baseClassName =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400';

const variantClassNames: Record<ButtonVariant, string> = {
  primary: 'bg-cyan-700 text-white hover:bg-cyan-600',
  secondary:
    'border border-slate-700 bg-slate-900/95 text-white hover:bg-slate-700',
};

function joinClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const Button = ({
  variant,
  href,
  children,
  openInNewTab,
  showExternalIcon,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) => {
  const opensInNewTab = linkOpensExternally(href, openInNewTab);
  const showIcon = showExternalIcon ?? opensInNewTab;
  const combinedClassName = joinClassNames(baseClassName, variantClassNames[variant], className);

  const content = (
    <>
      {children}
      {showIcon ? (
        <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" aria-hidden />
      ) : null}
    </>
  );

  if (shouldUseRouterLink(href, opensInNewTab)) {
    return (
      <Link to={href} className={combinedClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClassName}
      aria-label={ariaLabel}
      {...(opensInNewTab
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
    >
      {content}
    </a>
  );
};

export default Button;
