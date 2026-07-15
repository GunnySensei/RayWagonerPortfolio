import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import type { Competency } from '@/types/content';

// See assets/DESIGN.md §4 Cards — "Competency Card (hub-page grid)"
export function CompetencyCard({ competency }: { competency: Competency }) {
  return (
    <div className="flex flex-col gap-4 bg-card-sage p-8">
      <h2 className="font-serif text-[27.5px] font-bold leading-[30.25px] text-ink">
        {competency.cardTitle}
      </h2>
      <p className="font-sans text-[20px] text-ink">{competency.cardDescription}</p>
      <div>
        <Button asChild variant="outline">
          <Link
            to={`/portfolio/${competency.slug}`}
            aria-label={`View ${competency.cardTitle}`}
          >
            View Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
