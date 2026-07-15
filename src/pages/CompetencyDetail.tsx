import { useParams } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { ArtifactList } from '@/components/portfolio/ArtifactList';
import { ArtifactRow } from '@/components/portfolio/ArtifactRow';
import { CategoryGroup } from '@/components/portfolio/CategoryGroup';
import { NotFound } from '@/pages/NotFound';
import { usePageMeta } from '@/lib/usePageMeta';
import { competencies } from '@/content/competencies';

// Generic competency page — looks up its data by :slug and renders whichever
// of the three DESIGN.md §4 patterns that competency uses.
export function CompetencyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const competency = competencies.find((c) => c.slug === slug);

  usePageMeta(
    competency?.pageHeading ?? 'Not Found',
    competency?.cardDescription ?? 'The page you requested could not be found.',
  );

  if (!competency) {
    return <NotFound />;
  }

  return (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">
          {competency.pageHeading}
        </h1>

        {competency.artifactLayout !== 'category' && (
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[22.5px] font-bold leading-[29.25px] text-sage-label">
              {competency.categoryLabel}
            </p>
            <ul className="list-disc pl-6">
              {competency.competencyItems.map((item) => (
                <li key={item} className="font-sans text-[20px] leading-[36px] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {competency.artifactLayout === 'list' && (
          <ArtifactList slug={competency.slug} artifacts={competency.artifacts} />
        )}
        {competency.artifactLayout === 'row' && (
          <ArtifactRow slug={competency.slug} artifacts={competency.artifacts} />
        )}
        {competency.artifactLayout === 'category' && (
          <CategoryGroup slug={competency.slug} groups={competency.requirementGroups} />
        )}
      </div>
    </PageContainer>
  );
}
