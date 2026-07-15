import { site } from '@/content/site';

// No footer was present in the source Wix mockups (assets/DESIGN.md Known Gaps) —
// this extrapolates the existing flat, canvas-on-canvas system rather than
// inventing new visual language: no new colors, no shadow, no rounded corners.
export function Footer() {
  return (
    <footer className="w-full border-t border-forest/20 bg-canvas">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 md:px-10">
        <p className="font-sans text-[16px] text-muted-ink">
          {site.title}
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="font-sans text-[16px] text-forest underline-offset-4 hover:underline"
        >
          {site.contactEmail}
        </a>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener"
          className="font-sans text-[16px] text-forest underline-offset-4 hover:underline"
        >
          LinkedIn
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </footer>
  );
}
