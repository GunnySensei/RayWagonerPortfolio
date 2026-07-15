import { useEffect } from 'react';
import { site } from '@/content/site';

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(path: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', `${site.url}${path}`);
}

// Per-route document title, meta description, and canonical URL — see
// assets/ARCHITECTURE.md §6 "Per-Route Document Title". Note this only helps
// crawlers that execute JS (Google does); it does not affect social-preview
// unfurling (Slack/X/iMessage link cards), which reads the static tags in
// index.html without running JS — a real limitation of a client-rendered SPA
// with no SSR/prerendering (see ARCHITECTURE.md §10 Non-Goals).
export function usePageMeta(pageTitle: string, description: string) {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    document.title = `${pageTitle} — ${site.title}`;
    setMetaTag('description', description);
    setCanonical(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageTitle, description, path]);
}
