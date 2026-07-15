# Design System — Raymond Wagoner, PhD Candidacy Portfolio

## 1. Visual Theme & Atmosphere

This is a **quiet academic credential**, not a product or a brand storefront. The two Wix mockups in `assets/example/` (`RayWagonerPortDesignPortfolio.html` — the competency hub, `RayWagonerPortDesignTeachingCompetency.html` — a competency detail page) establish a restrained, CV-adjacent aesthetic: a warm ivory canvas (`#FFFDF7`), a single deep ink-teal for text and headings (`#142426`), one accent green for interactive elements (`#2F5F48`), and one muted sage for category labels (`#638673`). There is no multi-tier brand-color system, no gold, no gradients, and — notably — **every corner in the mockups is square** (`border-radius: 0px` confirmed via computed style on both the card fill and the buttons). That squareness is the single most distinctive signal in this system: it reads as a printed CV or an academic dossier rendered on the web, not a marketing site.

Typography carries the entire hierarchy with just two families. **Fraunces** (a warm, slightly editorial serif) is reserved exclusively for heading-role text — the site title, page H2s, and competency-card titles — always at weight 700. **Wix Madefor Text** (a plain humanist sans) carries everything else: nav links, body copy, button labels, and category-label text — at weight 400 for body and weight 700 for the sage category labels. This is a much smaller, calmer system than a typical marketing site: two typefaces, two weights, one job each, no context-switching.

**Key Characteristics:**
- Single warm-ivory canvas (`#FFFDF7`) throughout — no white/cream alternation, no color-block section banding
- One ink color for nearly all text and headings (`#142426`) — not a black/gray ladder
- One interactive green (`#2F5F48`) for button borders, button text, and filled nav CTA — no accent/highlight/uplift tiers
- One muted sage (`#638673`) reserved for category/eyebrow labels only
- Pale sage card fill (`#BDD7D4`) is the only block-color surface in the system
- **Square corners everywhere** — `border-radius: 0` on cards and buttons; this is the system's signature, doing the job a pill radius does in retail systems
- Serif (Fraunces, 700 only) for headings; sans (Wix Madefor Text, 400/700) for everything else — a two-family, two-weight system, not a three-context type-swap
- No shadows observed on cards or buttons — flat, not lifted
- Active nav state is an **underline**, not a color or weight change
- Generous line-height on body copy (`36px` on `20px` text, ≈1.8×) — gives dense competency lists room to breathe

**Page rhythm:** Ivory canvas throughout, uninterrupted — content sections are separated by whitespace and the sage card blocks, never by a change of section background color. There is no dark "feature band" or footer-color bookend in the source mockups; the whole page sits on one canvas tone.

## 2. Color Palette & Roles

**Source:** computed styles extracted directly from the two Wix mockup pages (competency hub + Teaching Competency detail page), not visual estimation.

### Primary

- **Ink** (`#142426`): The near-black deep teal used for nearly all text — site title, page headings, card titles, nav links, body copy, list text. Functions as this system's "black."
- **Forest Green** (`#2F5F48`): The single interactive accent. Used as the border + label color on outlined buttons ("View Portfolio") and as the fill on the primary nav CTA ("Contact"). There is no second or third accent green — one green does every job Starbucks-style systems split across four.
- **Sage Label** (`#638673`): Muted sage-green reserved for category/eyebrow text — e.g. "CACREP Doctoral Competencies (2024)" above a competency list. Bold weight (700), smaller than the page heading. Not used for buttons or cards.
- **Card Sage** (`#BDD7D4`): Pale sage/mint fill used exclusively as the background of competency cards on the hub page. The only block-color surface in the system.

### Surface & Background

- **Canvas Ivory** (`#FFFDF7`): The single page background color, used everywhere — behind sections, and reused again as the fill color of outlined buttons (so an outlined button reads as "canvas-colored with a green frame," not a separate white).

### Neutrals & Text

- **Muted Ink** (`rgba(20, 36, 38, 0.65)`): There is no gray ladder in the source — no distinct lighter shade was observed for secondary/metadata text. This single derived tone (Ink at 65% opacity, not a new hue) is the system's **one and only** sanctioned exception to "text stays full-strength Ink," and it's reserved narrowly for genuine metadata (e.g. the "Meets A, B, C…" caption on an artifact — see §4). It must never be used for body copy, list items, or anything a reader is meant to read as primary content — see §3 Principles for the exact line between the two.

### Contrast Validation

Every text/background pairing in this system has been checked against WCAG AA (computed relative-luminance contrast ratios, not eyeballed):

| Pairing | Ratio | AA normal (4.5:1) | AA large (3:1) |
|---|---|---|---|
| Ink on Canvas (body text) | 15.76:1 | Pass | Pass |
| Muted Ink on Canvas (metadata caption) | 5.02:1 | Pass | Pass |
| Forest Green on Canvas (button/link text) | 7.24:1 | Pass | Pass |
| Canvas on Forest Green (filled button text) | 7.24:1 | Pass | Pass |
| Sage Label on Canvas (category label) | 3.98:1 | **Fails** | Pass |
| Ink on Card Sage (card title/description) | 10.56:1 | Pass | Pass |

**Sage Label only clears AA because of how it's actually used**: always 22.5px at weight 700, which meets WCAG's "large text" bold threshold (≥18.66px bold), so the 3:1 bar applies, not 4.5:1 — and 3.98:1 clears that comfortably. **This is a hard constraint on Sage Label, not a footnote**: it must never be used below ~19px bold (or ~24px regular) — doing so would drop it into normal-text contrast requirements it doesn't meet.

### Semantic & Accent

- Not present in the source mockups (no error/warning/success states visible in a static portfolio page). If a contact form needs validation states, derive them conservatively from the existing palette rather than importing saturated red/yellow: e.g. a desaturated brick (`#8C4A3A`) for error, reusing Card Sage (`#BDD7D4`) tinted for success — keep new hues close to the sage/ink/ivory family so nothing feels bolted-on.

### What's Deliberately Absent

- No gold, no multi-tier green system, no gradients, no dark "feature band" color, no black-fill surfaces. If a future page seems to need a new color, the strong prior is: **don't** — lean on Ink, Forest Green, Sage Label, Card Sage, and Canvas Ivory before adding a sixth color.

## 3. Typography Rules

### Font Family

- **Headings:** `Fraunces, Georgia, serif` — a warm editorial serif, always weight 700 in the source. Used for: site title/logo, page H2s (competency-list page titles), competency-card titles.
- **Body / UI:** `"Wix Madefor Text", -apple-system, "Helvetica Neue", Arial, sans-serif` — a plain humanist sans. Used for: nav links, body paragraphs, list items, button labels, category labels.

Note: in the offline Wix-editor capture, Wix Madefor Text sometimes rendered as a `Times` fallback because the webfont file wasn't bundled with the saved page — the computed `font-family` property still correctly reports `wix-madefor-text-v2` as the intended font, so treat the sans-serif assignment as authoritative even where a screenshot looks serif-ish.

### Hierarchy

| Role | Size | Weight | Line Height | Font | Color | Notes |
|------|------|--------|-------------|------|-------|-------|
| Page Heading (e.g. "Teaching Competencies") | 60px | 700 | 57px | Fraunces | Ink `#142426` | Largest heading on a detail page. **Semantic `<h1>`** — see note below |
| Site Title / Logo | 30px | 700 | 28.5px | Fraunces | Ink `#142426` | Nav-bar brand mark. Not a heading element — see note below |
| Card Title (e.g. "Teaching Competency Portfolio") | 27.5px | 700 | 30.25px | Fraunces | Ink `#142426` | Hub-page competency cards |
| Category Label (e.g. "CACREP Doctoral Competencies (2024)") | 22.5px | 700 | 29.25px | Wix Madefor Text | Sage Label `#638673` | Bold sans, not serif — distinguishes "label" from "heading" |
| Artifact Title (e.g. "Group Counseling Course Leadership Reflection") | 22px | 700 | 1.3 | Wix Madefor Text | Ink `#142426` | Bold sans, not serif — see §4 Artifact List/Row patterns |
| Metadata Caption (e.g. "Meets A, B, C, D") | 16px | 400 | 1.4 | Wix Madefor Text | Muted Ink `rgba(20,36,38,0.65)` | The system's one sanctioned muted-text usage — metadata only, never body copy |
| Body / Nav Link / List Item / Button Label | 20px | 400 | 36px (list), normal (nav/button) | Wix Madefor Text | Ink `#142426` (button label: Forest Green `#2F5F48`) | Single body size across contexts |

Letter-spacing is `normal` throughout — no tight tracking, no expanded caps. This is a deliberate departure from tighter retail-type systems: the academic voice reads at native spacing.

**Semantic heading note:** the source Wix DOM marks the page-level heading ("Teaching Competencies") as an `<h2>` and reserves `<h1>` for the site title/logo in the nav — that's a Wix editor quirk, not a rule to carry into the build. A page needs exactly one `<h1>` identifying its main content for accessibility and SEO, so **the page heading gets the real `<h1>`** (visual size unchanged at 60px/700) and the nav-bar site title should render as a non-heading element (a styled link/div, not competing for the `<h1>` slot) on every page except possibly Home, where it's reasonable for the site title itself to be that page's one `<h1>`.

### Principles

- **Serif = heading role, sans = everything else.** There is no size at which body text becomes serif, and no heading that drops to sans. The rule is binary and consistent. (Artifact Titles are bold sans, not serif — they're a list-item role, same tier as Category Label, not a page/card heading.)
- **Weight, not size, marks "label" vs. "heading."** The category label (22.5px/700 sans) sits close in size to smaller headings but is legible as a label purely because it's sans + sage-colored, not serif + ink-colored.
- **Body and list copy never lightens.** Unlike systems that fade secondary text to 60–70% opacity, this system keeps body paragraphs and list items at full-strength Ink. The **one exception** is Muted Ink (`rgba(20,36,38,0.65)`), reserved strictly for metadata captions like an artifact's "Meets" line — never for content the reader is meant to treat as primary text. If you're tempted to fade something else, it's a sign that content shouldn't be styled as metadata, not a reason to reach for Muted Ink.
- **Generous list line-height (`36px` on `20px` text)** is specific to long enumerated content (the CACREP competency lists run to a dozen+ bullet items) — keep this loose spacing for any future long-list content; don't tighten it to a standard `1.5`.
- **Active nav/link state is underline only** — color and weight stay constant between active and inactive nav items.

### Note on Font Substitutes

Fraunces and Wix Madefor Text are both available as free/open fonts:
- **Fraunces** is on Google Fonts directly — no substitute needed.
- **Wix Madefor Text** is Wix's own open-source font (published on GitHub/npm as `wix-madefor-text`) and is also usable directly; if unavailable, **Inter** or **Source Sans 3** are close humanist-sans substitutes.

## 4. Component Stylings

### Buttons

**1. Outlined — "View Portfolio" (card CTA)**
- Background: `#FFFDF7` (Canvas Ivory)
- Text: `#2F5F48` (Forest Green)
- Border: `1px solid #2F5F48`
- Radius: `0px` (square)
- Padding: `10px 30px`
- Font: Wix Madefor Text, 20px, weight 400
- Shadow: none
- **Accessibility:** the visible label is "View Portfolio" on all 6 cards — identical text is indistinguishable to a screen-reader user tabbing through them. Set `aria-label="View {Card Title} Portfolio"` (e.g. `"View Teaching Competency Portfolio"`) so each button announces uniquely.

**2. Filled — "Contact" (nav CTA)**
- Background: `#2F5F48` (Forest Green)
- Text: white (reads white against the filled green in the mockup; verify against live computed value once the real site is built, as the raw extraction returned an unreliable `rgb(0,0,0)` for this node)
- Radius: `0px` (square)
- Padding: `10px 30px`
- Font: Wix Madefor Text, matches nav-link sizing
- The only filled/solid button in the system — reserved for the single highest-priority action in the nav (Contact)

~~**3. Filled — "Access Artifact" (single-file artifact CTA)**~~ — **retired.** This was the Artifact Row pattern's CTA; once real content showed every lettered competency page benefits from the List pattern (see §4 Competency Detail Page), Row had zero remaining usages and was removed along with its button. The system is back to exactly two button treatments (outlined, filled) — one filled button, reserved for Contact.

### Cards

**Competency Card (hub-page grid)**
- Background: `#BDD7D4` (Card Sage), flat fill, no gradient
- Radius: `0px` (square)
- Shadow: none
- Contents, top to bottom: Card Title (Fraunces 27.5/700, Ink) → one-line description (Wix Madefor Text 20/400, Ink) → Outlined "View Portfolio" button
- Grid: 3 columns × 2 rows on desktop (6 competency cards total), even gutters
- No hover/lift state observed in the static mockup — if one is added, keep it subtle (e.g. a 1–2px border-color shift, not a shadow-based lift, to stay consistent with the flat system)

### Navigation

**Global Nav (top bar)**
- Background: transparent — sits directly on Canvas Ivory, no separate nav-bar surface color
- Left: Fraunces 700 site title ("Raymond Wagoner, PhD. Candidacy Portfolio"), wraps to two lines in the mockup at narrower widths
- Center/right: four items only — Home, About Me, Portfolio (dropdown trigger, see below), Wix Madefor Text 20/400, Ink color
- Active link: underline in Ink, same color/weight as inactive links — no color change
- Rightmost: filled "Contact" button (Forest Green fill) — the one nav item styled as a button rather than a text link
- No shadow under the nav bar (consistent with the system's flat/no-elevation posture)

**Portfolio Dropdown (mega-menu panel)**

The raw Wix mockup put every competency page inline in the nav (Home, About Me, Portfolio Page, Teaching Competency, Supervision Competency, …) — the built site instead collapses those six into a "Portfolio" dropdown trigger, to keep the top-level nav at four items. This is a new component not directly present in the mockup; its styling extrapolates the existing system rather than inventing a new visual language:
- Trigger: "Portfolio" text link, same styling as other nav items, plus a small chevron-down glyph in Ink
- Panel: `#FFFDF7` (Canvas Ivory) background, `1px solid #2F5F48` (Forest Green) border, `0px` radius (square — matches every other surface in the system)
- No drop shadow under the panel — stay consistent with the system's flat, shadow-free posture; the border alone separates it from the page
- Contents: the 6 competency `navLabel`s stacked vertically (Teaching Competency, Supervision Competency, Research and Scholarship, Professional Identity, Leadership and Advocacy, Counseling Competency), Wix Madefor Text 20/400, Ink, each a plain link to `/portfolio/:slug`
- Item padding matches button padding (`10px 30px`) for visual rhythm with the rest of the system, no per-item background/hover-fill beyond an underline-on-hover (consistent with the "underline = interactive/active" rule used elsewhere in nav)

### Competency Detail Page (two patterns, confirmed against real content)

All six competency RTFs (`assets/PhD Portfolio/*/PDFs for Web */`, converted to markdown alongside their source files) have been read in full, and real per-file descriptions have since been supplied by Ray directly. Two things that were assumptions before are now confirmed facts:

- **Every page's CACREP competency-letter list is genuinely different** — different letters, different count, different wording. Teaching is A–M (13), Counseling is A–F (6), Leadership and Advocacy is A–N (14), Research and Scholarship is A–M (13, different wording than Teaching's), Supervision is A–L (12). Never copy one page's competency list as a template for another.
- **Professional Identity has no CACREP letter list at all.** It's organized by named requirement category (credentialing/service requirements) instead. This is a second page shape, not a variant of the first — see "Category Groups" below.

**A third pattern (Artifact Row — a filled "Access Artifact" button per single-file row) existed briefly** for Counseling and Leadership and Advocacy, back when those were assumed to be strictly single-file pages. Once real content was in hand, Ray asked for those two to match the other four instead — no button, same plain-link treatment. Retired; **every lettered competency page uses Artifact List now**, no exceptions:

| Competency | Pattern |
|---|---|
| Teaching | Artifact List |
| Supervision | Artifact List |
| Research and Scholarship | Artifact List |
| Leadership and Advocacy | Artifact List |
| Counseling | Artifact List |
| Professional Identity | Category Groups |

General page structure:
1. Page heading in Fraunces 60/700, Ink, marked up as the page's semantic `<h1>` (e.g. "Teaching Competencies" — see the semantic-heading note in §3)
2. **Artifact List pages only:** category label directly below, in Wix Madefor Text 22.5/700, Sage Label color (e.g. "CACREP Doctoral Competencies (2024)"), then a single bulleted (`disc`) list of that page's own competency statements, each item Wix Madefor Text 20/400, Ink, line-height 36px. **The Category Groups page (Professional Identity) skips this entirely** — there's no competency-letter list to show, so the page goes straight from the `<h1>` into its requirement categories.
3. Below that, the artifact/evidence section in whichever of the two patterns that page uses — **a single page commits to one pattern for everything on it**, never mixing
4. No cards, no columns, no hero imagery — a single-column text-forward layout throughout

**Artifact List (the pattern every lettered competency page uses)**

- Optional small sage eyebrow tag above the section (e.g. "Module Artifacts")
- Per artifact, stacked vertically with no card/background/divider:
  1. Artifact Title — Wix Madefor Text, 22px, weight 700, Ink (e.g. "Group Counseling Course Leadership Reflection"). Bold sans, not serif — resolves the artifact-title role as list-item-tier, same tier as Category Label, not a page/card heading (see §3 Principles)
  2. A Metadata Caption line directly below the title: "Meets A, B, C, D, E, F, G, H, J, L" in Wix Madefor Text 16/400, **Muted Ink** (`rgba(20,36,38,0.65)`) — the system's one sanctioned muted-text usage (see §2/§3). **This line is optional** — a real "Teaching Experience" entry has no Meets mapping at all (it's a background/experience note, not tied to specific competencies). Omit the line entirely rather than rendering an empty "Meets" caption.
  3. An optional artifact-level description paragraph (body-copy weight/color — Wix Madefor Text 20/400, full-strength Ink), if present — in practice, real content ended up per-file (see below) rather than one blurb per artifact, so this mostly goes unused, but the slot exists for a case that needs it
  4. If the artifact has at least one linkable file: a bold "Files:" label, then a bulleted (`disc`) list below it — one `<li>` per item:
     - Each item's **file label** is a link (underlined, full-strength Ink) if it has a file, or plain text if not (a real case — two "Three semesters of adjunct/faculty teaching" entries on the Teaching page are informational, no document exists for them and none should be implied by rendering them as links)
     - **Each item may also carry its own per-file description**, real content from Ray describing what that specific file is/demonstrates — rendered inline after the label/link, separated by an em dash, in **Muted Ink** (same token as the Meets caption — it's metadata about the file, not primary body content). This is genuinely per-file, not per-artifact: a multi-file artifact can have some files described and others not (e.g. "Qualitative Research Coding" on the Research and Scholarship page — one of its five files has a caption, the other four don't; that's real content, not a bug to fix by inventing captions for the rest)
  5. **If the artifact has zero list items entirely** (a real case — a listed teaching-experience entry with no associated document and no sub-items): omit the "Files:" label and list entirely. Title, Meets caption (if present), and description (if any) render alone — never render an empty "Files:" heading with nothing under it
- No button component in this pattern — files are plain inline text links inside the bulleted list

**Category Groups (grouped-requirement pattern — Professional Identity only)**

Used for the one page that isn't organized around CACREP competency letters at all — it lists named professional requirements (organizational memberships, licensure, publications, conference presentations, etc.) and the evidence for each.

- No competency-letter list, no Category Label eyebrow (there's nothing CACREP-shaped to label)
- Per requirement category, stacked vertically with no card/background/divider:
  1. Requirement Heading — same visual treatment as Artifact Title (Wix Madefor Text 22/700, Ink), e.g. "Membership in Professional Counseling Organizations." Reuses the Artifact Title role rather than inventing a fourth heading-tier, since it plays the same structural job (introduces a group of evidence)
  2. A bulleted (`disc`) list of evidence items below it, Wix Madefor Text 20/400. **Each item is independently one of three kinds**, and they can mix freely within one category's list:
     - **File** — underlined link, same treatment as an Artifact List file link (e.g. the four membership-card PDFs)
     - **Citation** — plain, non-linked text for evidence that's a reference rather than a document (e.g. a manuscript citation still "in progress" with no PDF yet), full-strength Ink, no special formatting beyond normal body copy
     - **Note** — a bracketed status note like "(No file — just space to write my attendance)", rendered in **Muted Ink** (same token used for the Meets caption elsewhere) to visually mark it as a placeholder rather than real evidence
- No button component in this pattern either — same "files are plain inline links" approach as Artifact List, extended to also cover citations and notes

### Inputs & Forms

Not present in the source mockups (no contact form was captured). When building the Contact page, extrapolate conservatively from the existing button/card language:
- Square corners (`0px` radius), matching the rest of the system
- Border: `1px solid #2F5F48` (reuse the button-outline treatment) rather than a gray input-border
- Label and input text in Wix Madefor Text, Ink color
- Avoid introducing a new focus-glow or colored-shadow treatment — if a focus state is needed, shift the border to a heavier weight (e.g. `2px`) rather than adding a shadow, to stay consistent with the system's flat, shadow-free posture

## 5. Layout Principles

### Grid & Container

- Hub-page competency grid: **3 columns × 2 rows**, 6 total cards, roughly even gutters (observed card width ≈ 467px within a ≈1600px max-width container in the desktop mockup)
- Detail pages: single-column, text-only, no sidebar
- Page max-width in the source mockup: ~1600px (Wix editor default desktop canvas) — treat this as a rough desktop ceiling, not a hard token; a real build should pick a more conventional content max-width (e.g. 1200–1280px) since 1600px is wider than typical reading-optimized layouts

### Spacing

The source mockups don't expose a formal spacing-token system (they're Wix visual-editor output, not hand-authored CSS). Observed concrete values:
- Button padding: `10px 30px`
- List item line-height: `36px` on 20px text

For everything else, apply a conventional 8px-based scale (8 / 16 / 24 / 32 / 48 / 64px) rather than inventing rem-anchored tokens — there's no evidence in the source for a specific scale, and an 8px grid is the safest default for a text-forward academic layout.

### Border Radius

**Every observed radius is `0px`.** This is confirmed via computed style on both the card fill layer and the button element, not a visual guess. Treat square corners as a hard rule for this system, not a default-to-be-softened.

### Whitespace Philosophy

The page canvas doesn't change color between sections — whitespace and the sage card blocks are the only tools used to separate content. There's no dark band, no divider rule, no alternating white/cream striping. Keep section transitions quiet: more vertical padding, not a background-color change.

## 6. Depth & Elevation

**No shadows were observed anywhere in the source** — not on cards, not on buttons, not on the nav bar. This is a flat system by design: square corners + no elevation is what reads "printed document" rather than "app UI." If a future component genuinely needs to signal interactivity or layering (e.g. a modal), use the lightest possible treatment — a single low-alpha shadow (`0 1px 2px rgba(20,36,38,0.12)`) — and treat it as an exception, not a pattern to extend.

## 7. Do's and Don'ts

### Do
- Use Canvas Ivory (`#FFFDF7`) as the only page background — don't alternate between white and cream
- Reserve Forest Green (`#2F5F48`) for interactive elements only (button border/text, filled nav CTA) — don't use it for headings or decoration
- Use Sage Label (`#638673`) only for category/eyebrow text, always bold, always sans, always ≥19px — never for headings or buttons, and never smaller (it only clears WCAG AA as large bold text — see §2 Contrast Validation)
- Keep every corner square (`border-radius: 0`) — this is the system's load-bearing visual signature
- Pair Fraunces-serif-bold exclusively with page/card heading roles (site title, page heading, card titles) and Wix Madefor Text with everything else, including Artifact Titles
- Keep letter-spacing at `normal` — no tight tracking
- Use underline (not color/weight) for active nav state
- Keep body/list line-height generous (~1.8×) for long enumerated content
- Keep every surface flat — no shadows, no gradients
- Give every "View Portfolio" button a unique `aria-label` naming what it links to — the visible label repeats identically across all 6 hub cards
- Mark the page-level heading as a real `<h1>` on every detail page — don't let the nav-bar site title occupy that slot

### Don't
- Don't introduce a second or third accent green — one Forest Green does every interactive job
- Don't add gold, dark feature-bands, or any brand color beyond the five documented here
- Don't round any corners "to soften things up" — square corners are intentional, not an oversight
- Don't fade body copy or list items to a lighter gray — this system keeps primary text at full-strength Ink. Muted Ink (`rgba(20,36,38,0.65)`) exists for exactly one thing — metadata captions like an artifact's "Meets" line — not general secondary text
- Don't add drop shadows or hover-lift effects to cards — the system is deliberately flat
- Don't mix Fraunces into body copy or Wix Madefor Text into headings — the serif/sans split maps strictly to heading-vs-everything-else
- Don't add tight letter-spacing or all-caps styling — nothing in the source uses either
- Don't invent a rem-anchored spacing-token scale from whole cloth — use a plain 8px grid until real values are captured from a built site
- Don't leave a page without a real `<h1>`, and don't give a page two — the site title in the nav is not a heading

## 8. Responsive Behavior

The source mockups are desktop-only Wix-editor captures (~1600px canvas) — no mobile or tablet breakpoints were observed there. The breakpoints below are still a recommendation rather than an extraction, but the mobile nav pattern itself is now built and visually verified (`src/components/layout/MobileNav.tsx`), not just proposed:

| Name | Width | Behavior |
|------|-------|--------------------|
| Mobile | < 768px (Tailwind `md`) | Nav collapses to a hamburger trigger (square, Forest Green border) opening a right-side sheet: Home / About Me / Portfolio label + all 6 competency links stacked / filled Contact CTA at the bottom. Competency grid goes to 1 column. Site title wraps at narrow widths. |
| Tablet | 768–1023px | Competency grid goes to 2 columns (`sm:grid-cols-2`) |
| Desktop | 1024px+ (Tailwind `lg`) | Full 3-column competency grid (`lg:grid-cols-3`), inline nav links + Portfolio dropdown |

**Mobile nav implementation notes:**
- Built on Radix Dialog (`@radix-ui/react-dialog`), not a hand-rolled toggle — gets focus-trap, Escape-to-close, and `aria-modal` correctly for free
- Same visual language as the desktop dropdown: Canvas Ivory panel, Forest Green border, square corners, no shadow
- The 6 competency links render flat (no nested dropdown-within-a-sheet) under a "Portfolio" label in Muted Ink — simpler to tap than reproducing the desktop mega-menu inside a mobile sheet
- Every link closes the sheet on click (`onClick={() => setOpen(false)}`), since SPA navigation doesn't trigger a natural dismiss the way a full page load would

### Touch Targets

- Button padding (`10px 30px`) with 20px text works out to ~44px total height in practice (10 + ~24 line-height + 10) — right at the WCAG target size guideline, not under it as originally estimated before a real build existed to measure.

### Route-Change Focus Management

Client-side navigation doesn't reload the page, so neither scroll position nor assistive-tech focus moves on its own the way a real page load would. `App.tsx` handles both on every route change: scrolls to top and moves focus to `#main-content` (the `<main>` landmark, given `tabIndex={-1}` specifically so it's programmatically focusable without joining the regular tab order). The same `#main-content` target is what the skip-to-content link (first focusable element on every page) jumps to.

## 9. Agent Prompt Guide

### Quick Color Reference

- Text / heading ink: "Ink (`#142426`)"
- Interactive accent: "Forest Green (`#2F5F48`)"
- Category label: "Sage Label (`#638673`)"
- Card fill: "Card Sage (`#BDD7D4`)"
- Page canvas: "Canvas Ivory (`#FFFDF7`)"

### Example Component Prompts

1. "Create a competency card: Card Sage (`#BDD7D4`) background, square corners (`0px` radius), no shadow. Card Title in Fraunces 27.5px weight 700 in Ink (`#142426`). One-line description below in Wix Madefor Text 20px weight 400 in Ink. Below that, an outlined 'View Portfolio' button: Canvas Ivory (`#FFFDF7`) background, `1px solid #2F5F48` border, Forest Green (`#2F5F48`) text, square corners, `10px 30px` padding, Wix Madefor Text 20px weight 400."

2. "Build the global nav: transparent background sitting on Canvas Ivory (`#FFFDF7`). Left: Fraunces weight-700 site title in Ink. Center/right: text nav links in Wix Madefor Text 20px weight 400, Ink color, active link shown via underline only (no color change). Rightmost: a filled 'Contact' button — Forest Green (`#2F5F48`) background, white text, square corners, `10px 30px` padding."

3. "Create a competency detail page: page heading 'Teaching Competencies' in Fraunces 60px weight 700, Ink (`#142426`). Directly below, a category label 'CACREP Doctoral Competencies (2024)' in Wix Madefor Text 22.5px weight 700, Sage Label (`#638673`). Below that, a single-column bulleted list, each item in Wix Madefor Text 20px weight 400, Ink, `36px` line-height."

4. "Lay out the portfolio hub page: a 3-column × 2-row grid of competency cards on Canvas Ivory (`#FFFDF7`) background, even gutters, no section-color banding — the whole page sits on one canvas tone."

5. "Build an Artifact List entry whose files have their own captions: bold Artifact Title (Wix Madefor Text 22px weight 700 Ink), a Muted Ink 'Meets D, F' caption below it, then a bold 'Files:' label and a bulleted list. Each list item is an underlined file-name link in full-strength Ink, optionally followed by an em dash and a per-file description in Muted Ink — e.g. '710 CoLeadership Reflection — Reflections on group leadership skills, my experience of co-leading, and myself as a leader.' Some items in the same list may have no description at all; that's expected, not a gap to fill."

6. "Build a Category Group (Professional Identity pattern): a Requirement Heading in Wix Madefor Text 22px weight 700 Ink (e.g. 'Membership in Professional Counseling Organizations'), followed by a bulleted list in Wix Madefor Text 20px weight 400. Mix three item kinds as needed: underlined file links in full-strength Ink, plain unlinked citation text in full-strength Ink, and bracketed status notes like '(No file)' in Muted Ink (`rgba(20,36,38,0.65)`)."

### Iteration Guide

When refining screens generated with this system:
1. Check corners first — anything rounded is off-system; square it
2. Check for shadows — anything with elevation is off-system; flatten it
3. Confirm serif is used only for heading-role text, never body/UI
4. Confirm only the five documented colors are in play (Ink, Forest Green, Sage Label, Card Sage, Canvas Ivory) — flag any new hue before adding it
5. Confirm letter-spacing is `normal`, not tightened

### Known Gaps

- Only two pages were visually mocked up in the Wix editor (competency hub, Teaching competency detail) — Home, About Me, Contact are not directly observed; their styling extrapolates from documented tokens, not from a screenshot. Content *structure* (as opposed to visual styling) for all 6 competency pages is confirmed — see the RTF-to-markdown conversions in `assets/PhD Portfolio/*/PDFs for Web */*.md` and the "Competency Detail Page" section above.
- No form components observed — Contact-page input styling in Section 4 is extrapolated, not extracted, and should be revisited once real form mockups exist.
- No mobile/tablet mockups exist — Section 8's breakpoints are provisional recommendations.
- The "Contact" filled-button text color returned an unreliable `rgb(0,0,0)` from computed-style extraction (likely a compositing artifact in the saved offline snapshot); confirm actual color (almost certainly white) once the real site is live.
- No hover/focus/active interaction states were observable in the static Wix-editor capture — all interaction-state guidance in this doc is inferred conservatively from the flat, shadow-free, square-corner system rather than extracted.
- ~~Artifact Row and Category Groups patterns' visual specs have never been seen built~~ — resolved and since revised: both were implemented and visually verified, but Artifact Row was then retired once real content showed every lettered competency page (including the two that briefly used Row) reads better as Artifact List. Category Groups (`src/components/portfolio/CategoryGroup.tsx`) remains the only other pattern, visually verified on Professional Identity.
- **One flagged-not-fixed content question:** Research and Scholarship's "Qualitative Research Coding" artifact has a file description reading "…quantitative statistical analysis," but the artifact is titled *Qualitative* Research Coding and its Meets list includes competency C ("Qualitative approaches to data analysis") — likely meant "qualitative." Transcribed verbatim from what Ray sent rather than silently corrected; needs his confirmation before treating as final.
