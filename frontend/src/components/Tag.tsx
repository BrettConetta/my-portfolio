type TagProps = {
  children: React.ReactNode;
  className?: string;
};

const tagClassName =
  'rounded-md bg-surface-muted px-2 py-0.5 text-xs font-medium text-secondary';

function joinClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const Tag = ({ children, className }: TagProps) => {
  return <span className={joinClassNames(tagClassName, className)}>{children}</span>;
};

export default Tag;
