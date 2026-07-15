# Architecture — Raymond Wagoner, PhD Candidacy Portfolio

## 1. Overview

A static, informational portfolio web app. No auth, no database, no user accounts, no server-side logic — the entire "backend" is a folder of artifact files (PDFs, PowerPoint decks, etc.) served as static files. The app is a client-rendered React SPA that presents a home page, an about page, a competency-hub grid, six competency detail pages (each listing CACREP competency statements plus the supporting artifacts that satisfy them), and a contact page.

Hosting target is intentionally undecided (domain TBD, may run purely locally for now). The architecture is written to be **host-agnostic**: the build output is a static `dist/` folder that runs identically via `vite preview` on a laptop, a plain nginx box, or any static host (Netlify, Vercel, GitHub Pages, S3, etc.) once a domain is chosen. Nothing in the app depends on where it's deployed.

## 2. Tech Stack

Adopted as specified:

| Layer | Library | Version |
|---|---|---|
| Framework | React | 18.x |
| Language | TypeScript | 5.x |
| Bundler | Vite | 5.x |
| Styling | Tailwind CSS | 4.x |
| Class merging | clsx + tailwind-merge | — |
| Server state | React Query | 5.x |
| Charts | Tremor | 3.x |
| UI primitives | shadcn/ui | — |
| Radix UI | @radix-ui/* | latest |
| Variant styling | class-variance-authority | 0.7.x |

**One addition, not in the source table:** `react-router-dom` — required for a multi-page site (Home / About / Portfolio hub / 6 competency pages / Contact) to have real, linkable, bookmarkable URLs. Flagging it explicitly since it wasn't in the original list.

**Fit notes for this specific project:**
- **React Query** has no real job on day one — there's no API, and content is static. Install it per stack consistency, but don't wire it up until there's an actual async data source (e.g., if artifact files move to a CMS or object-storage listing endpoint later). Don't invent a fetch layer just to use it.
- **Tremor** (charts) likewise has nothing to chart yet. Keep it available for a plausible future need (a CV timeline, a publication-count chart on the Research page) rather than treating it as required scaffolding now.
- **shadcn/ui + Radix + CVA + clsx/tailwind-merge** are the actual workhorses here — they cover Button (outlined/filled variants from `DESIGN.md`), Card, NavigationMenu, and Badge, which is nearly the full component inventory this site needs.

## 3. Directory Layout

```
/
├── public/
│   └── artifacts/                 # folder names mirror the source Wix media folders exactly (kebab-cased)
│       ├── teaching/
│       ├── supervision/
│       ├── research-and-scholarship/
│       ├── professional-identity/
│       ├── leadership-and-advocacy/
│       └── counseling/
├── src/
│   ├── main.tsx
│   ├── App.tsx                    # router setup
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── PortfolioHub.tsx       # 6-card grid, maps over content/competencies.ts
│   │   ├── CompetencyDetail.tsx   # generic — driven by :slug param + content data
│   │   └── Contact.tsx
│   ├── content/                   # build-time content, no runtime fetching
│   │   ├── competencies.ts        # the 6 Competency objects (see §4)
│   │   └── site.ts                # nav links, site title, contact info
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives (button, card, badge, navigation-menu)
│   │   ├── layout/                # Nav, Footer, PageContainer
│   │   └── portfolio/             # CompetencyCard, ArtifactList, ArtifactRow
│   ├── lib/
│   │   ├── utils.ts               # cn() = clsx + tailwind-merge
│   │   └── artifacts.ts           # artifactUrl(slug, filename) helper
│   ├── types/
│   │   └── content.ts             # Competency, Artifact, ArtifactFile types
│   └── styles/
│       └── globals.css            # Tailwind entry + DESIGN.md tokens as CSS variables
├── assets/                        # design reference docs — not part of the app bundle
│   ├── DESIGN.md
│   └── ARCHITECTURE.md
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 4. Content Model

All page copy and the artifact manifest live in one typed source of truth (`src/content/competencies.ts`), not scattered across JSX. The hub page maps over it to render cards; the detail page looks up one entry by route slug and renders its artifacts in whichever of the two layouts (see `DESIGN.md` §4, "Competency Detail Page") that competency uses.

Real source content (see `assets/example/Teaching Competencies.rtf`, delivered per-competency alongside a Wix media folder of files) confirms the shape needed:
- An artifact's title is freeform text, often carrying a course-code prefix (`"710 CoLeadership Reflection"`)
- The competencies an artifact satisfies are expressed as letter ranges/lists (`"A, B, C"`, `"A-G"`, `"A - D, F - H"`) and should be normalized to an expanded `string[]` of letters at authoring time, not stored as raw range text — that's what makes "show everything that satisfies competency H" possible later
- An artifact can have **zero, one, or many** associated files (the raw manifest includes entries like `"Teaching Internship COUC 970, 14-week online course (Fall 2025) (no file)"` — a real experience entry with nothing to link)
- Files are not all PDFs — the manifest includes at least one `_ppt` (PowerPoint) file alongside PDFs, so the content model and hosting strategy must be file-type-agnostic, not "pdf-only"

```ts
// src/types/content.ts
interface ArtifactFile {
  label: string;        // display name, e.g. "710 CoLeadership Reflection"
  filename: string;      // e.g. "710-coleadership-reflection.pdf" — kebab-case, extension preserved
}

interface Artifact {
  title: string;              // e.g. "Group Counseling Course Leadership Reflection"
  meets: string[];             // expanded competency letters, e.g. ["A","B","C","D","E","F","G","H","J","L"]
  description?: string;        // short description; may be absent for raw "experience" entries
  files: ArtifactFile[];       // 0, 1, or many — an empty array is valid (e.g. a listed teaching experience with no file)
}

interface Competency {
  slug: string;                 // "teaching" — also the /public/artifacts subfolder name (matches source Wix folder name, kebab-cased)
  navLabel: string;              // "Teaching Competency"
  cardTitle: string;             // "Teaching Competency Portfolio"
  cardDescription: string;       // hub-card one-liner
  categoryLabel: string;         // "CACREP Doctoral Competencies (2024)"
  competencyItems: string[];     // the A–M bulleted statements
  artifactLayout: 'list' | 'row'; // which of the two DESIGN.md artifact patterns this page uses — fixed per competency, applied to every artifact on that page
  artifacts: Artifact[];
}
```

**A `'row'`-layout competency (e.g. Counseling) is expected to have exactly one file per artifact** — that's the pattern's whole premise (one "Access Artifact" button per row). If real content for a `'row'` page ever includes a multi-file artifact, that's a signal the page should be `'list'` layout instead, not a case to special-case around.

Adding a new artifact is: drop its file(s) in `public/artifacts/<slug>/`, add one `Artifact` entry to that competency's `artifacts` array. No component code changes required — the two layout components render whatever's in `artifacts`.

## 5. Artifact File Hosting Strategy

Source content is mixed file types (PDF, PowerPoint at minimum — the real Teaching manifest includes a `_ppt` file), not PDF-only, so the strategy is written generically as "artifact files."

- Files live in `public/artifacts/<competency-slug>/<filename>.<ext>`. Vite copies `public/` verbatim into the build root, so every file is served at `/artifacts/<slug>/<filename>.<ext>` — identical path locally (`vite preview`) and on whatever domain is eventually chosen. No CDN, storage bucket, or backend needed for v1.
- A single helper resolves URLs so nothing hardcodes the `/artifacts/` prefix in components:
  ```ts
  // src/lib/artifacts.ts
  export const artifactUrl = (slug: string, filename: string) => `/artifacts/${slug}/${filename}`;
  ```
- Links render as plain `<a href={artifactUrl(...)} target="_blank" rel="noopener">` — the browser (or OS, for non-PDF types like `.pptx`) handles display/download natively. No embedded viewer component for any file type; that's unnecessary complexity for "click to view/download."
- Keep filenames kebab-case with the original extension preserved, lowercase, to avoid URL-encoding surprises. Source filenames from the Wix export (e.g. `"710 CoLeadership Reflection.pdf"`, spaces and mixed case) will need a rename pass on import — `Artifact.files[].label` keeps the human-readable original name for display regardless of the sanitized `filename`.
- If Vite is ever deployed under a subpath (e.g. a GitHub Pages project page instead of a root domain), set `base` in `vite.config.ts` accordingly — `artifactUrl()` should build off `import.meta.env.BASE_URL` rather than a hardcoded `/artifacts/` root once that's known, so it isn't a rewrite later.
- **Repo size:** commit artifact files directly to the repo (simplest — no backend means the repo *is* the content store). If any individual file exceeds ~10MB, switch that file to Git LFS rather than letting the repo balloon; revisit this once real files are in hand.

### Content Import Process

When a competency's asset folder arrives (an RTF manifest like `Teaching Competencies.rtf` plus its associated files, mirroring the Wix media-folder structure already seen for all six competencies):
1. Drop the raw delivered folder under `assets/` (git-ignored, same as the existing `assets/example/` mockups) so the source manifest is available for reference without bloating the repo
2. Rename/copy the actual artifact files into `public/artifacts/<slug>/` with sanitized filenames
3. Hand-transcribe the RTF's title / "Meets" / file-list structure into one `Competency.artifacts` array in `src/content/competencies.ts`, expanding any letter ranges (`"A-G"`) into full arrays (`["A","B","C","D","E","F","G"]`)
4. Pick `artifactLayout: 'list'` or `'row'` for that competency based on whether its artifacts are typically multi-file or single-file (see `DESIGN.md` §4) — this is a per-page decision made once, not per-artifact

This is a manual transcription step, not an automated RTF parser — six competencies with a few dozen artifacts each doesn't justify building a parser, and the raw manifest format isn't consistent enough (mixed "no file" annotations, inconsistent range notation) to parse reliably without human judgment anyway.

## 6. Site Map & Routing

```
/                           Home — short intro + CTA into Portfolio
/about                      About Me — full bio, education history, headshot
/portfolio                  Portfolio Hub (6-card grid, links out to each competency)
├── /portfolio/teaching
├── /portfolio/supervision
├── /portfolio/research-and-scholarship
├── /portfolio/professional-identity
├── /portfolio/leadership-and-advocacy
└── /portfolio/counseling
/contact                    Contact
```

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Me |
| `/portfolio` | Portfolio hub (6 competency cards) |
| `/portfolio/:slug` | Competency detail (generic component + `content/competencies.ts` lookup) |
| `/contact` | Contact |

Client-side routing via `react-router-dom`, browser (history) router. A multi-page Vite build (separate `.html` entries per route) was considered as a simpler, more SEO-native alternative, but for ~10 pages sharing one nav/footer/layout, a single SPA build is easier to maintain and deploy as one unit. Revisit only if search-engine indexing of individual competency pages becomes a real requirement — at that point, a prerendering step (e.g. `vite-plugin-ssg`) is a smaller change than switching frameworks.

### Nav Structure — Hybrid Dropdown

The top-level nav bar shows exactly four items: **Home / About Me / Portfolio / Contact**. "Portfolio" is a dropdown (mega-menu) trigger, not a plain link — hovering/clicking it exposes all 6 competency links (Teaching, Supervision, Research and Scholarship, Professional Identity, Leadership and Advocacy, Counseling) without requiring a visit to `/portfolio` first. This was chosen over a flat 9-item nav (which the raw Wix mockup implied) to keep the nav bar uncluttered, and over a hub-only nav (no dropdown) to keep every competency one hover away rather than two clicks away.

Implementation: shadcn/ui's `NavigationMenu` (built on `@radix-ui/react-navigation-menu`, already in the stack) is the natural fit — it handles the dropdown/trigger/keyboard-nav mechanics; only the visual styling needs to follow `DESIGN.md`'s flat, square-corner system (see `DESIGN.md` §4 "Navigation" for the dropdown-panel spec).

## 7. Contact Page

No backend, so no custom form-handling server. Two options, pick one when building the page:
- **Simplest:** a `mailto:` link.
- **If a real in-page form is wanted:** point the form at a third-party static-form endpoint (e.g. Formspree, Web3Forms) — these accept a POST from a plain `<form>` with no server code and no auth, consistent with the "no backend" constraint.

## 8. Styling Integration

`assets/DESIGN.md` tokens map directly into `tailwind.config.ts` as theme extensions rather than living as inline hex values in components:

```ts
colors: {
  ink: '#142426',
  forest: '#2F5F48',
  'sage-label': '#638673',
  'card-sage': '#BDD7D4',
  canvas: '#FFFDF7',
},
fontFamily: {
  serif: ['Fraunces', 'Georgia', 'serif'],
  sans: ['"Wix Madefor Text"', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
},
borderRadius: {
  DEFAULT: '0px', // square corners is the system's signature — see DESIGN.md §5
}
```

shadcn/ui components default to rounded corners and a neutral gray palette — both need overriding at the theme level (not per-component) so every generated primitive inherits square corners and the five-color palette automatically.

## 9. Build & Deploy

- `npm run dev` — local Vite dev server
- `npm run build` — static output to `dist/`
- `npm run preview` — serve the production build locally, useful while no domain is chosen
- No environment secrets required beyond an optional `VITE_CONTACT_FORM_ENDPOINT` if a third-party form service is used
- Once a domain/host is picked, deployment is: point that host at `dist/` (or its native build command, e.g. `npm run build` on Netlify/Vercel) — nothing else in this architecture changes

## 10. Explicit Non-Goals

- No authentication, no user accounts, no sessions
- No database — content lives in versioned TypeScript/artifact-file pairs
- No server-side rendering for v1 — a client-rendered SPA is sufficient for a personal portfolio; SSG/prerendering is a future option, not a current requirement
- No CMS — adding/editing content means editing `src/content/competencies.ts` and committing artifact files, which is appropriate at this scale (one author, infrequent updates)

## 11. Open Decisions (deferred, not blocking)

- Final hosting domain/provider — architecture doesn't depend on this choice
- Whether the Contact page uses a bare `mailto:` or a third-party form endpoint
- Whether individual artifact files will need Git LFS (depends on actual file sizes once gathered)
