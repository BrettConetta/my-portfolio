type SectionHeaderProps = {
  title: string;
  titleId: string;
  description?: React.ReactNode;
  className?: string;
};

function joinClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const SectionHeader = ({ title, titleId, description, className }: SectionHeaderProps) => {
  return (
    <div className={joinClassNames('space-y-1', className)}>
      <h2 id={titleId} className="text-2xl font-semibold text-heading">
        {title}
      </h2>
      {description != null ? (
        typeof description === 'string' ? (
          <p className="text-muted">{description}</p>
        ) : (
          <div className="space-y-2 text-muted">{description}</div>
        )
      ) : null}
    </div>
  );
};

export default SectionHeader;
