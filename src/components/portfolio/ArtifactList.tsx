import type { Artifact } from '@/types/content';
import { artifactUrl } from '@/lib/artifacts';

// See assets/DESIGN.md §4 "Artifact List (multi-file pattern)"
export function ArtifactList({ slug, artifacts }: { slug: string; artifacts: Artifact[] }) {
  return (
    <div className="flex flex-col gap-10">
      {artifacts.map((artifact) => (
        <div key={artifact.title} className="flex flex-col gap-2">
          <h2 className="font-sans text-[22px] font-bold leading-[1.3] text-ink">
            {artifact.title}
          </h2>

          {artifact.meets && artifact.meets.length > 0 && (
            <p className="font-sans text-[16px] leading-[1.4] text-muted-ink">
              Meets {artifact.meets.join(', ')}
            </p>
          )}

          {artifact.description && (
            <p className="font-sans text-[20px] text-ink">{artifact.description}</p>
          )}

          {artifact.files.length > 0 && (
            <div className="mt-1">
              <p className="font-sans text-[20px] font-bold text-ink">Files:</p>
              <ul className="list-disc pl-6">
                {artifact.files.map((file) => (
                  <li
                    key={file.label}
                    className="font-sans text-[20px] leading-[36px] text-ink"
                  >
                    {file.filename ? (
                      <a
                        href={artifactUrl(slug, file.filename)}
                        target="_blank"
                        rel="noopener"
                        className="underline underline-offset-4"
                      >
                        {file.label}
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    ) : (
                      file.label
                    )}
                    {file.description && (
                      <span className="text-muted-ink"> — {file.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
