import { Building2, GraduationCap, Pill, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TimelineEntry = {
  id: string;
  title: string;
  location: string;
  date: string;
  details: string[];
  icon: LucideIcon;
};

export const timeline: TimelineEntry[] = [
  {
    id: "neu-ms",
    title: "Northeastern University",
    location: "Boston, MA",
    date: "Sept 2024 – Dec 2026",
    details: [
      "MS in Regulatory Affairs | GPA: 3.9/4.0",
      "Relevant Coursework: Regulatory Strategy for Product Development, Legal Issues in Food/Drug/Medical Device Regulation, Human Experimentation & Clinical Trials, Advanced Regulatory Writing, Quality System Regulation in Medical Device Design"
    ],
    icon: GraduationCap
  },
  {
    id: "zim",
    title: "ZIM Laboratories — QA & Regulatory Compliance Intern",
    location: "Nagpur, India",
    date: "Jan 2024 – April 2024",
    details: [
      "Assisted with regulatory documentation preparation for submissions",
      "Supported document control processes (version control, archival, retrieval)",
      "Contributed to inspection readiness by organizing compliance documentation",
      "Collaborated cross-functionally with QA and Manufacturing teams"
    ],
    icon: Building2
  },
  {
    id: "nice-medical",
    title: "Nice Medical Store — Pharmacist",
    location: "Nagpur, India",
    date: "July 2023 – Dec 2023",
    details: [
      "Managed dispensing operations, handling 150+ prescriptions weekly",
      "Provided patient counseling with strong verbal communication",
      "Maintained documentation and record management systems"
    ],
    icon: Pill
  },
  {
    id: "taywade",
    title: "Taywade College of Pharmacy",
    location: "Nagpur, India",
    date: "Aug 2020 – May 2024",
    details: [
      "Bachelor of Pharmacy (B.Pharm) | GPA: 3.0/4.0",
      "Coursework: Pharmacology, Industrial Pharmacy, Medicinal Chemistry"
    ],
    icon: BookOpen
  }
];
