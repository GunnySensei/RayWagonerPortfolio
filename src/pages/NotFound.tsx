import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/lib/usePageMeta';

// Catch-all 404 — styled consistently with the rest of the site, not a bare
// browser error page. See assets/ARCHITECTURE.md §6 Site Map & Routing.
export function NotFound() {
  usePageMeta('Not Found', 'The page you requested could not be found.');

  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">
          Page Not Found
        </h1>
        <p className="font-sans text-[20px] text-ink">
          The page you're looking for doesn't exist.
        </p>
        <div>
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
