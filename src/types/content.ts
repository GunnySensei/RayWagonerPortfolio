// Content model — see assets/ARCHITECTURE.md §4 for the full rationale and the
// confirmed page → artifactLayout mapping.

export interface ArtifactFile {
  /** Display name, e.g. "710 CoLeadership Reflection" */
  label: string;
  /** Relative to public/artifacts/<slug>/. Absent for plain-text/no-file list items. */
  filename?: string;
}

export interface Artifact {
  /** e.g. "Group Counseling Course Leadership Reflection" */
  title: string;
  /** Expanded competency letters, e.g. ["A","B","C"]. Absent for background/experience entries with no competency mapping. */
  meets?: string[];
  /** Short description. Real copy or the "Description coming soon." placeholder — see ARCHITECTURE.md §4 Content Import Process. */
  description?: string;
  /** 0, 1, or many. Entries may themselves lack `filename` (plain text, no document). */
  files: ArtifactFile[];
}

export type EvidenceItem =
  | { kind: 'file'; label: string; filename: string }
  | { kind: 'citation'; text: string }
  | { kind: 'note'; text: string };

export interface RequirementGroup {
  /** e.g. "Membership in Professional Counseling Organizations" */
  heading: string;
  items: EvidenceItem[];
}

interface CompetencyBase {
  /** e.g. "teaching" — also the /public/artifacts subfolder name */
  slug: string;
  /** e.g. "Teaching Competency" — nav dropdown label */
  navLabel: string;
  /** e.g. "Teaching Competency Portfolio" — hub card title */
  cardTitle: string;
  /** Hub-card one-liner */
  cardDescription: string;
  /** e.g. "Teaching Competencies" — the detail page's real <h1> */
  pageHeading: string;
}

export type Competency =
  | (CompetencyBase & {
      artifactLayout: 'list' | 'row';
      /** e.g. "CACREP Doctoral Competencies (2024)" */
      categoryLabel: string;
      /** This page's own lettered statements — never shared across competencies */
      competencyItems: string[];
      artifacts: Artifact[];
    })
  | (CompetencyBase & {
      artifactLayout: 'category';
      requirementGroups: RequirementGroup[];
    });
