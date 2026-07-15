import { PageContainer } from '@/components/layout/PageContainer';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

// Full bio/education history — see assets/ARCHITECTURE.md §6 for the Home/About split.
export function About() {
  useDocumentTitle('About Me');

  return (
    <PageContainer>
      <div className="flex max-w-[720px] flex-col gap-6">
        <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">About Me</h1>
        {/* TODO: replace with Ray's real bio, education history, and headshot — placeholder pending real content. */}
        <p className="font-sans text-[20px] text-ink">Bio coming soon.</p>
      </div>
    </PageContainer>
  );
}
