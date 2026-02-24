"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { timeline } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience & Education</h2>
        <div className="relative mt-10">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-cyan-400/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((entry, index) => {
              const isEven = index % 2 === 0;
              const Icon = entry.icon;
              return (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className="relative md:grid md:grid-cols-2"
                >
                  <div className={`pl-16 md:pl-0 ${isEven ? "md:pr-10" : "md:order-2 md:pl-10"}`}>
                    <div className="glass-card rounded-2xl p-5 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">{entry.date}</p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-100">{entry.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{entry.location}</p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                        {entry.details.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-5 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/50 bg-slate-900 text-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.35)] md:left-1/2">
                    <Icon className="h-4 w-4" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
