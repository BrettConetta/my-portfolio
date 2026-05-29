import RecommendationCard from './RecommendationCard';
import { recommendations } from '../data/recommendations';

const Recommendations = () => {
  return (
    <section id="recommendations" aria-labelledby="recommendations-heading">
      <div className="space-y-1">
        <h2 id="recommendations-heading" className="text-2xl font-semibold text-white">
          Recommendations
        </h2>
        <p className="text-slate-400">Excerpts from LinkedIn recommendations.</p>
      </div>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <RecommendationCard recommendation={recommendation} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recommendations;
