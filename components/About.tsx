import { MapPin, GraduationCap, BriefcaseBusiness, Microscope } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <h2 className="section-title">About Me</h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
            <p>
              Aeraf Khan is a Regulatory Affairs graduate student at Northeastern University (MS, Regulatory Affairs — GPA 3.9/4.0) with a Bachelor of Pharmacy from India. He combines deep pharmaceutical science knowledge with hands-on regulatory strategy experience across medical devices and drug products.
            </p>
            <p>
              His expertise spans FDA submission pathways (510(k), PMA, De Novo), quality system regulations (21 CFR 820, ISO 13485), and global regulatory frameworks including Health Canada and EU MDR. With experience in quality assurance, regulatory documentation, and cross-functional collaboration at ZIM Laboratories, Aeraf brings a detail-oriented, compliance-first approach to every project.
            </p>
            <p>
              Currently seeking co-op and full-time opportunities in regulatory affairs, quality assurance, and clinical operations within the pharmaceutical and medical device industries.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-2">
          <div className="glass-card rounded-2xl p-5">
            <div className="mb-3 inline-flex rounded-xl border border-cyan-400/35 bg-cyan-500/10 p-2 text-cyan-200">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Education</h3>
            <p className="mt-2 text-sm text-slate-300">Northeastern University (MS, Regulatory Affairs — GPA 3.9/4.0)</p>
            <p className="mt-1 text-sm text-slate-400">Bachelor of Pharmacy from India</p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <div className="mb-3 inline-flex rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-2 text-emerald-200">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Location</h3>
            <p className="mt-2 text-sm text-slate-300">Boston, MA</p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <div className="mb-3 inline-flex rounded-xl border border-cyan-400/35 bg-cyan-500/10 p-2 text-cyan-200">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Currently Seeking</h3>
            <p className="mt-2 text-sm text-slate-300">Co-op / Full-time roles</p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <div className="mb-3 inline-flex rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-2 text-emerald-200">
              <Microscope className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Key Interests</h3>
            <p className="mt-2 text-sm text-slate-300">Medical Devices, FDA Strategy, Quality Systems</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
