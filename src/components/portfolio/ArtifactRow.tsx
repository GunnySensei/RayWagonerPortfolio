import type { Artifact } from '@/types/content';
import { Button } from '@/components/ui/button';
import { artifactUrl } from '@/lib/artifacts';

// See assets/DESIGN.md §4 "Artifact Row (single-file pattern)"
export function ArtifactRow({ slug, artifacts }: { slug: string; artifacts: Artifact[] }) {
  return (
    <div className="flex flex-col">
      {artifacts.map((artifact) => {
        const file = artifact.files[0];
        return (
          <div
            key={artifact.title}
            className="flex flex-col items-start justify-between gap-4 border-b border-row-divider bg-row-tint p-8 md:flex-row md:items-center"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-[22px] font-bold leading-[1.3] text-ink">
                {artifact.title}
                {artifact.meets && artifact.meets.length > 0 && (
                  <span className="font-normal text-muted-ink"> - Meets {artifact.meets.join(', ')}</span>
                )}
              </h3>
              {artifact.description && (
                <p className="font-sans text-[20px] text-ink">{artifact.description}</p>
              )}
            </div>

            {file?.filename && (
              <Button asChild variant="filled" className="shrink-0">
                <a
                  href={artifactUrl(slug, file.filename)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Access artifact: ${artifact.title}`}
                >
                  Access Artifact
                </a>
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
