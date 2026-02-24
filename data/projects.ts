import { FileCheck2, FlaskConical, ShieldCheck, Stethoscope, Scale, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  date: string;
  affiliation: string;
  shortDescription: string;
  detailedDescription: string[];
  tags: string[];
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    id: "vascucage",
    title: "VascuCage™ IVC Filter — Regulatory Strategy & 510(k) Summary",
    date: "Sept 2025 – Jan 2026",
    affiliation: "RGA6370 — Advanced Regulatory Writing, Northeastern University",
    shortDescription:
      "Developed a comprehensive regulatory strategy and drafted a complete 510(k) summary for a novel retrievable Inferior Vena Cava filter, including global market pathway analysis across US (FDA), Canada (Health Canada Class IV), and EU (MDR Class III).",
    detailedDescription: [
      "Determined US regulatory pathway by researching FDA CDRH databases, identifying product code (DTK), device classification (Class III), and regulation number (21 CFR §870.3375)",
      "Identified predicate device (Crux® Vena Cava Filter System, K120402) and drafted a full substantial equivalence determination",
      "Authored a complete 510(k) Summary per 21 CFR 807.92, including device description, indications for use, and technological characteristics comparison",
      "Developed global regulatory strategy covering FDA PMA pathway, Health Canada Class IV Medical Device Licence (MDSAP/ISO 13485), and EU MDR Class III conformity assessment with Notified Body",
      "Analyzed competitive landscape including Cook Celect Platinum® and Crux® filter systems",
      "Key deliverables: Regulatory pathway determination, 510(k) Summary, global classification matrix, substantial equivalence analysis"
    ],
    tags: ["510(k)", "PMA", "Class III", "EU MDR", "Health Canada", "Global Strategy"],
    icon: FileCheck2
  },
  {
    id: "cardiotrack",
    title: "CardioTrack™ — FDA Q-Submission (Pre-Submission)",
    date: "Feb 2026",
    affiliation: "RGA6370 — Advanced Regulatory Writing, Northeastern University",
    shortDescription:
      "Drafted a complete FDA Q-Submission (Pre-Submission) package for a novel wearable blood pressure monitoring system, including cover letter, device overview, regulatory background, and 7 specific questions to FDA on clinical validation, cybersecurity, and predicate scope.",
    detailedDescription: [
      "Prepared full Q-Submission package for CardioTrack™ Smart Blood Pressure Monitoring System (Class II, 510(k) pathway)",
      "Device: non-invasive, wearable BP monitor with BLE connectivity, mobile app integration, and longitudinal trend analysis",
      "Drafted 7 strategic questions to FDA covering: home-use vs. clinical setting validation, post-clearance software update classification, cybersecurity risk thresholds, data drift over time, user interpretation risk (human factors), predicate scope with technology differences, and trend display claims vs. clinical decision support",
      "Addressed regulatory considerations for connected medical devices including cybersecurity risk management per FDA guidance",
      "Prepared professional cover letter to CDRH Document Control Center"
    ],
    tags: ["Q-Sub", "Pre-Submission", "510(k)", "Class II", "Cybersecurity", "FDA Guidance"],
    icon: Stethoscope
  },
  {
    id: "glucotrack",
    title: "GlucoTrack™ Smart Insulin Pen — Design Control Project",
    date: "Feb 2026",
    affiliation: "RGA 6233 — Quality System Regulation, Northeastern University",
    shortDescription:
      "Created a comprehensive design control documentation package for a connected insulin delivery device, covering the entire design control lifecycle from concept through transfer, including design inputs/outputs, verification, validation, risk management, and design reviews per 21 CFR 820.30.",
    detailedDescription: [
      "Developed full design control documentation for GlucoTrack Smart Insulin Pen (Class II, Product Code LZG, predicate: InPen K163840)",
      "Documented complete lifecycle: Concept & Feasibility → User Needs → Design Planning → Design Inputs → Design Outputs → Design Verification → Design Validation → Design Reviews → Design Transfer → Risk Management",
      "Defined 5+ design inputs with traceability (dose accuracy ±5%, wireless data transmission >99%, biocompatibility per ISO 10993, electrical safety per IEC 60601-1, cybersecurity per FDA guidance)",
      "Created design verification protocols for dose accuracy (ISO 11608-1), EMC testing, biocompatibility, software verification (IEC 62304), and cybersecurity testing",
      "Designed validation activities: human factors/usability study (45 participants, IEC 62366-1), clinical performance validation (30 patients, 14-day study), simulated use testing",
      "Established 7-stage design review schedule (DR-1 through DR-7) with cross-functional review teams",
      "Documented risk management file per ISO 14971:2019 including hazard identification, FMEA, risk controls, and residual risk evaluation",
      "Created design transfer package with DMR, DHR templates, SOPs, and production process validation (IQ/OQ/PQ)",
      "Project budget: $2.5M | Timeline: 12 months | Team: 8.75 FTE across 9 roles"
    ],
    tags: ["21 CFR 820.30", "Design Controls", "510(k)", "ISO 14971", "IEC 62304", "Risk Management"],
    icon: ShieldCheck
  },
  {
    id: "gastroshield",
    title: "GastroShield™ — Sprayable Hydrogel 510(k) Submission",
    date: "April 2025 – June 2025",
    affiliation: "Northeastern University & BioDevek (Preclinical)",
    shortDescription:
      "Assisted with the preparation of a 510(k) regulatory submission for a novel sprayable hydrogel device for post-endoscopic bleeding prevention, including international registration documentation and regulatory strategy development.",
    detailedDescription: [
      "Assisted with preparation of 510(k) regulatory submission to FDA for a preclinical-stage medical device",
      "Provided documentation support for international registrations applying global regulatory requirements",
      "Maintained internal documentation of regulatory approvals and submission status tracking",
      "Created regulatory strategy presentations using Microsoft PowerPoint"
    ],
    tags: ["510(k)", "International Registration", "Regulatory Strategy", "BioDevek"],
    icon: FlaskConical
  },
  {
    id: "sturge-weber",
    title: "Strategic Planning for Rare Disease — The Sturge-Weber Foundation",
    date: "Jan 2026 – March 2026",
    affiliation: "Northeastern University Experiential Network (INT5964)",
    shortDescription:
      "Served in the Legal & Compliance Pod for a 10-week consulting engagement with The Sturge-Weber Foundation, reviewing legal documents for compliance, conducting gap analysis, supporting grant writing, and researching AI workflow recommendations.",
    detailedDescription: [
      "Reviewed legal documents (bylaws, NDAs) for compliance, conducting gap analysis and audit recommendations",
      "Supported grant writing, developing standardized templates for nonprofit funding opportunities (LOI, Full Proposal, Grant Report)",
      "Researched AI workflow recommendations ensuring compliance with data privacy and ethical use standards",
      "Collaborated in a 9-person cross-functional team with defined pods (Legal & Compliance, Grant & Strategy)",
      "Delivered professional presentations to project sponsor (Julia Terrell, Sturge-Weber Foundation)"
    ],
    tags: ["Nonprofit Consulting", "Legal Compliance", "Grant Writing", "AI Workflows", "Cross-functional"],
    icon: Scale
  },
  {
    id: "protocol-126",
    title: "Conflict of Interest in Clinical Research — Protocol 126 Analysis",
    date: "Winter 2025",
    affiliation: "BTC 6210 — Human Experimentation, Northeastern University",
    shortDescription:
      "Co-authored a comprehensive analysis of conflicts of interest in the Fred Hutchinson Cancer Center Protocol 126 clinical trial, examining financial conflicts, IRB oversight failures, informed consent violations, and whistleblower protections.",
    detailedDescription: [
      "Analyzed the Fred Hutchinson Cancer Center Protocol 126 case (1981-1993) involving bone marrow transplant clinical trials",
      "Examined financial conflicts of interest including stock ownership ($105K–$1.8M), royalty agreements, and consulting contracts between investigators and Genetic Systems Corp.",
      "Evaluated failures in IRB oversight, lack of predefined stopping rules, and non-disclosure of adverse events to subsequent trial participants",
      "Assessed informed consent violations where patients were not informed of investigators' financial ties or previous participant deaths",
      "Developed recommendations for mandatory financial disclosure, independent IRB oversight, whistleblower protections, and standardized stopping rules",
      "Applied regulatory frameworks including 21 CFR (IRB regulations), Common Rule, and ICH-GCP principles"
    ],
    tags: ["Research Ethics", "IRB Oversight", "Informed Consent", "Human Experimentation"],
    icon: ClipboardList
  }
];
