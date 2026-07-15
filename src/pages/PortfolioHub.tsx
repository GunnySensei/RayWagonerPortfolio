import { PageContainer } from '@/components/layout/PageContainer';
import { CompetencyCard } from '@/components/portfolio/CompetencyCard';
import { usePageMeta } from '@/lib/usePageMeta';
import { competencies } from '@/content/competencies';

// 3-column x 2-row competency card grid — see assets/DESIGN.md §4 Cards
// and assets/ARCHITECTURE.md §6 Site Map.
export function PortfolioHub() {
  usePageMeta(
    'Portfolio',
    "Browse Raymond Wagoner's CACREP doctoral candidacy portfolio by competency area: teaching, supervision, research and scholarship, professional identity, leadership and advocacy, and counseling.",
  );

  return (
    <PageContainer>
      <h1 className="mb-10 font-serif text-[60px] font-bold leading-[57px] text-ink">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {competencies.map((c) => (
          <CompetencyCard key={c.slug} competency={c} />
        ))}
      </div>
    </PageContainer>
  );
}
