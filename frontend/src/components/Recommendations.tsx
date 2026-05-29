import RecommendationCard from './RecommendationCard';
import SectionHeader from './SectionHeader';
import { recommendations } from '../data/recommendations';

const Recommendations = () => {
  return (
    <section id="recommendations" aria-labelledby="recommendations-heading">
      <SectionHeader
        titleId="recommendations-heading"
        title="Recommendations"
        description="Excerpts from LinkedIn recommendations."
      />
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
