import type { RequirementGroup } from '@/types/content';
import { artifactUrl } from '@/lib/artifacts';
import { cn } from '@/lib/utils';

// See assets/DESIGN.md §4 "Category Groups (grouped-requirement pattern)"
export function CategoryGroup({ slug, groups }: { slug: string; groups: RequirementGroup[] }) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <div key={group.heading} className="flex flex-col gap-2">
          <h2 className="font-sans text-[22px] font-bold leading-[1.3] text-ink">
            {group.heading}
          </h2>
          <ul className="list-disc pl-6">
            {group.items.map((item, i) => (
              <li
                key={i}
                className={cn(
                  'font-sans text-[20px] leading-[36px]',
                  item.kind === 'note' ? 'text-muted-ink' : 'text-ink',
                )}
              >
                {item.kind === 'file' && (
                  <a
                    href={artifactUrl(slug, item.filename)}
                    target="_blank"
                    rel="noopener"
                    className="underline underline-offset-4"
                  >
                    {item.label}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                )}
                {item.kind === 'citation' && item.text}
                {item.kind === 'note' && item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
