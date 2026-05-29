import type { Recommendation } from '../types/recommendation';

type RecommendationCardProps = {
  recommendation: Recommendation;
};

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const { quote, name, jobTitle, company, context } = recommendation;

  return (
    <article className="flex h-full flex-col rounded-md border border-border bg-surface/95 p-4">
      <blockquote className="flex-1 text-sm leading-relaxed text-secondary">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-4 border-t border-border pt-4">
        <cite className="not-italic">
          <div className="font-semibold text-heading">{name}</div>
          <div className="mt-1 text-sm text-muted">
            {jobTitle} · {company}
          </div>
          {context ? <p className="mt-1 text-xs text-subtle">{context}</p> : null}
        </cite>
      </footer>
    </article>
  );
};

export default RecommendationCard;
