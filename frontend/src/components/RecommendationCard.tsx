import type { Recommendation } from '../types/recommendation';

type RecommendationCardProps = {
  recommendation: Recommendation;
};

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const { quote, name, jobTitle, company, context } = recommendation;

  return (
    <article className="flex h-full flex-col rounded-md border border-slate-700 bg-slate-900/95 p-4">
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-4 border-t border-slate-700 pt-4">
        <cite className="not-italic">
          <div className="font-semibold text-white">{name}</div>
          <div className="mt-1 text-sm text-slate-400">
            {jobTitle} · {company}
          </div>
          {context ? <p className="mt-1 text-xs text-slate-500">{context}</p> : null}
        </cite>
      </footer>
    </article>
  );
};

export default RecommendationCard;
