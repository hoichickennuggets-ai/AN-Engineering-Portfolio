export type MediaFit = 'contain' | 'cover'
export type ProjectImage = { src: string; alt: string; caption?: string; description?: string; mediaFit?: MediaFit }
export type ProjectMetric = { value: string; label: string; note?: string }
export type EngineeringStory = { title: string; body?: string[] }
export type ProjectChapter = {
  type: 'chapter'
  title: string
  eyebrow?: string
  body?: string[]
  bodyAfterMedia?: string[]
  engineeringStories?: EngineeringStory[]
  images?: ProjectImage[]
  metrics?: ProjectMetric[]
  mediaFit?: MediaFit
  // Relative to src/assets/, e.g. project-media/baja/01-design.
  mediaFolder?: string
  mediaOverrides?: Record<string, Partial<Omit<ProjectImage, 'src'>>>
  // Optional captions by alphabetical folder position, for images added later.
  // Exact filename overrides above take precedence.
  mediaSequenceOverrides?: Partial<Omit<ProjectImage, 'src'>>[]
}

export type ProjectSection =
  | ProjectChapter
  | { type: 'text'; title: string; body: string[] }
  | { type: 'bullets'; title: string; items: string[] }
  | { type: 'metrics'; title: string; items: ProjectMetric[] }
  | { type: 'image-grid'; title: string; intro?: string; images: ProjectImage[] }
  | { type: 'process'; title: string; steps: { title: string; description: string }[] }

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  subtitle: string
  organization?: string
  role: string
  date?: string
  category: string
  heroImage?: ProjectImage
  // A project-detail hero drawn from src/assets/project-media/. When set, this
  // takes precedence over heroImage on the detail page only.
  heroMediaFolder?: string
  heroPreferredBasename?: string
  summary: string
  overview?: string[]
  status?: string
  tags: string[]
  featured?: boolean
  sections: ProjectSection[]
}
