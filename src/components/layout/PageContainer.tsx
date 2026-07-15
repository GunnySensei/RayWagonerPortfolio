import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Shared content width/gutter, matching Nav's own max-width so page content
// lines up with the nav above it. See assets/DESIGN.md §5 Layout Principles.
export function PageContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn('mx-auto max-w-[1280px] px-6 py-12 md:px-10 focus:outline-none', className)}
    >
      {children}
    </main>
  );
}
