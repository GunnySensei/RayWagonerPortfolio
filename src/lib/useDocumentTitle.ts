import { useEffect } from 'react';
import { site } from '@/content/site';

// See assets/ARCHITECTURE.md §6 "Per-Route Document Title"
export function useDocumentTitle(pageTitle: string) {
  useEffect(() => {
    document.title = `${pageTitle} — ${site.title}`;
  }, [pageTitle]);
}
