import { BriefcaseBusiness, FileSpreadsheet, FlaskConical, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "regulatory",
    title: "Regulatory Affairs",
    icon: ShieldCheck,
    items: [
      "FDA Submissions (510(k), PMA, De Novo)",
      "Health Canada Regulations",
      "EU MDR/IVDR",
      "ISO 13485",
      "FDA QSR (21 CFR 820)",
      "Medical Device Classification",
      "Product Labeling Review",
      "Regulatory Documentation",
      "Q-Submissions",
      "Global Regulatory Strategy"
    ]
  },
  {
    id: "quality",
    title: "Quality Systems",
    icon: FileSpreadsheet,
    items: [
      "Design Controls (21 CFR 820.30)",
      "CAPA",
      "Risk Management (ISO 14971)",
      "Quality System Auditing",
      "Document Control",
      "DHF/DMR/DHR",
      "Process Validation (IQ/OQ/PQ)"
    ]
  },
  {
    id: "technical",
    title: "Technical",
    icon: Workflow,
    items: [
      "Technical Writing",
      "Advanced MS Office Suite",
      "Database Management",
      "Regulatory Tracking Systems",
      "Quality System Documentation"
    ]
  },
  {
    id: "standards",
    title: "Standards & Frameworks",
    icon: FlaskConical,
    items: [
      "IEC 62304 (Software Lifecycle)",
      "IEC 60601-1 (Electrical Safety)",
      "IEC 62366-1 (Usability)",
      "ISO 10993 (Biocompatibility)",
      "ISO 11608 (Pen Injectors)",
      "ISO 15223-1 (Symbols)",
      "ICH-GCP"
    ]
  },
  {
    id: "professional",
    title: "Professional",
    icon: BriefcaseBusiness,
    items: [
      "Cross-functional Collaboration",
      "Regulatory Strategy Development",
      "Clinical Trial Ethics",
      "Informed Consent",
      "Project Management",
      "Professional Presentations"
    ]
  }
];
