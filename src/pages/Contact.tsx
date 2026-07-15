import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/lib/usePageMeta';
import { site } from '@/content/site';

// Simplest option from assets/ARCHITECTURE.md §7 — a mailto link. Swapping to a
// third-party form endpoint (Formspree/Web3Forms) is still an open decision
// (§11); this page only needs its button target changed if that's picked instead.
export function Contact() {
  usePageMeta('Contact', 'Get in touch with Raymond Wagoner.');

  return (
    <PageContainer>
      <div className="flex max-w-[640px] flex-col gap-6">
        <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">Contact</h1>
        <p className="font-sans text-[20px] text-ink">
          Get in touch at{' '}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-forest underline underline-offset-4"
          >
            {site.contactEmail}
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <a href={`mailto:${site.contactEmail}`}>Send an Email</a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.linkedinUrl} target="_blank" rel="noopener">
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
