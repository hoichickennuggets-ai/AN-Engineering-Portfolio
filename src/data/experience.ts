import type { ProjectImage, ProjectSection } from '../types/project'

export interface IndustryExperience {
  slug: string
  organization: string
  shortName?: string
  role: string
  period: string
  summary: string
  tags: string[]
  sections?: ProjectSection[]
  heroImage?: ProjectImage
}

// EDIT INDUSTRY EXPERIENCE TEXT HERE. mediaFolder connects each chapter to src/assets/.
// Optional mediaOverrides use exact filenames, just like project chapters.
export const experiences: IndustryExperience[] = [
  {
    slug: "agentic-innovations",
    organization: "Agentic Innovations",
    role: "AI Engineering Intern",
    period: "May 2026 – August 2026",
    summary: "Co-developed agentic AI applications for patent analysis and engineering BOM sourcing, with supplier validation and evidence-backed reporting.",
    tags: [
      "Codex",
      "CrewAI",
      "RAG",
      "Semantic Search",
      "USPTO API"
    ],
    sections: [
      {
        type: "chapter",
        eyebrow: "01",
        title: "Workflow / Problem",
        mediaFolder: "experience-media/agentic-innovations/01-workflow",
        body: [
          "At Agentic Innovations, I worked on agentic tools for patent analysis and engineering BOM sourcing.",
          "The patent-analysis workflow searched and verified patent information before comparing technical features and possible overlap.",
          "CASE worked on a different problem: taking engineering BOM requirements and figuring out which suppliers could actually meet them based on manufacturing capability, material availability, and the evidence available."
        ]
      },
      {
        type: "chapter",
        eyebrow: "02",
        title: "Development & Validation",
        mediaFolder: "experience-media/agentic-innovations/02-development",
        body: [
          "I used Codex to help build CASE's system architecture and workflow.",
          "The system took BOM information, turned it into structured engineering requirements, and compared those requirements against supplier information.",
          "I also worked on validation test cases to check supplier capability and refine the sourcing criteria before results were returned for engineer review."
        ]
      },
      {
        type: "chapter",
        eyebrow: "03",
        title: "Engineering Review / Outcome",
        mediaFolder: "experience-media/agentic-innovations/03-validation",
        body: [
          "Our team was selected from roughly 10 teams to present CASE to engineers from Toyota, NVIDIA, Apple, and the NSA.",
          "We walked through how the system handled engineering requirements, supplier validation, and the evidence used to support its sourcing recommendations."
        ]
      }
    ]
  },
  {
    slug: "encotech-engineering-consultants",
    organization: "Encotech Engineering Consultants, Inc.",
    shortName: "Encotech Engineering Consultants",
    role: "MEP Intern",
    period: "June 2022 – August 2022",
    summary: "Early MEP internship supporting building layouts and engineering drawing review.",
    tags: [
      "Autodesk Revit",
      "Electrical Layouts",
      "Engineering Drawings",
      "Plumbing BOMs",
      "HVAC Exposure"
    ],
    sections: [
      {
        type: "chapter",
        title: "Building Layouts & Drawing Review",
        mediaFolder: "experience-media/encotech",
        body: [
          "At Encotech, I worked in Autodesk Revit on electrical outlet layouts and interior floor plans, checking the layouts against existing engineering drawings.",
          "I also reviewed plumbing BOMs and spent time shadowing engineers while they worked through HVAC system design."
        ]
      }
    ]
  }
]

export const experienceHref = (experience: IndustryExperience) => experience.sections?.length
  ? `/experience/${experience.slug}`
  : `/experience#${experience.slug}`
