import { PageContainer } from '@/components/layout/PageContainer';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

// Full bio/education history — see assets/ARCHITECTURE.md §6 for the Home/About split.
export function About() {
  useDocumentTitle('About Me');

  return (
    <PageContainer>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <img
          src="/images/ray-wagoner-about.jpg"
          alt="Raymond Wagoner standing in a suit in front of a window overlooking a snowy landscape"
          width={1200}
          height={1600}
          className="w-full max-w-xs shrink-0 object-cover md:max-w-sm"
        />
        <div className="flex max-w-[640px] flex-col gap-6">
          <h1 className="font-serif text-[60px] font-bold leading-[57px] text-ink">About Me</h1>
          {/* TODO: replace with Ray's real bio and education history — placeholder pending real content. */}
          <p className="font-sans text-[20px] text-ink">Bio coming soon.</p>
        </div>
      </div>
    </PageContainer>
  );
}
