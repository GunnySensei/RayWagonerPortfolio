import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { site } from '@/content/site';

// Simplest option from assets/ARCHITECTURE.md §7 — a mailto link. Swapping to a
// third-party form endpoint (Formspree/Web3Forms) is still an open decision
// (§11); this page only needs its button target changed if that's picked instead.
export function Contact() {
  useDocumentTitle('Contact');

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
        <div>
          <Button asChild variant="outline">
            <a href={`mailto:${site.contactEmail}`}>Send an Email</a>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
