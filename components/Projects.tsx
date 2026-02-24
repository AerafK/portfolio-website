"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <SectionWrapper id="projects">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Regulatory Projects</h2>
          <p className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
            Real-world regulatory strategy, FDA submissions, and quality system documentation
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="glass-card rounded-3xl p-6 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_56px_rgba(6,182,212,0.22)]"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-cyan-400/35 bg-cyan-500/10 p-3 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">{project.date}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.affiliation}</p>
                  <p className="mt-4 leading-relaxed text-slate-300">{project.shortDescription}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/35 bg-cyan-900/20 px-2.5 py-1 font-mono text-xs text-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-7 inline-flex rounded-lg border border-cyan-400/45 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/12 hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}
