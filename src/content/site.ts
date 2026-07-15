export const site = {
  title: 'Raymond Wagoner, PhD Candidacy Portfolio',
  // Custom domain — see assets/ARCHITECTURE.md §9 Build & Deploy. Used for canonical URLs
  // and sitemap.xml; no trailing slash.
  url: 'https://raymondwagonerphd.com',
  // TODO: replace with Ray's real contact address — not present in any delivered asset yet.
  contactEmail: 'contact@example.com',
  nav: {
    home: 'Home',
    about: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
} as const;
