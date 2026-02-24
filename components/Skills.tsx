"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-5 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(6,182,212,0.2)]"
              >
                <div className="mb-4 inline-flex rounded-xl border border-cyan-400/35 bg-cyan-500/10 p-2.5 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
