// See assets/ARCHITECTURE.md §5 — files are served straight out of public/artifacts/,
// identical path locally and on whatever domain is eventually chosen.
export const artifactUrl = (slug: string, filename: string) =>
  `${import.meta.env.BASE_URL}artifacts/${slug}/${filename}`;
