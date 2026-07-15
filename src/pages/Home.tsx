import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/lib/usePageMeta';
import { site } from '@/content/site';

// Per assets/ARCHITECTURE.md §6: Home carries a short intro + one CTA into the
// Portfolio hub; the fuller bio lives on About. The site title is the one
// nav-bar element allowed to double as this page's real <h1> — see
// assets/DESIGN.md §3 semantic-heading note.
export function Home() {
  usePageMeta(
    'Home',
    'A CACREP doctoral candidacy portfolio in counselor education for Raymond Wagoner, organized by competency area — teaching, supervision, research and scholarship, professional identity, leadership and advocacy, and counseling.',
  );

  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">
          {site.title}
        </h1>
        {/* TODO: replace with Ray's real intro copy — placeholder pending real content. */}
        <p className="max-w-[640px] font-sans text-[20px] text-ink">
          A CACREP doctoral candidacy portfolio in counselor education, organized by
          competency area — teaching, supervision, research and scholarship,
          professional identity, leadership and advocacy, and counseling.
        </p>
        <div>
          <Button asChild variant="outline">
            <Link to="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
