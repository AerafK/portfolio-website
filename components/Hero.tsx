"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountUpStat from "@/components/CountUpStat";

const rotatingLines = [
  "Medical Device Regulatory Strategy",
  "FDA Submissions & 510(k) Expertise",
  "Quality Systems & Compliance",
  "Global Regulatory Pathways"
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  const currentLine = useMemo(() => rotatingLines[lineIndex], [lineIndex]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display.length < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplay(currentLine.slice(0, display.length + 1));
      }, 60);
    } else if (!deleting && display.length === currentLine.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(currentLine.slice(0, display.length - 1));
      }, 38);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIndex((index) => (index + 1) % rotatingLines.length);
      }, 260);
    }

    return () => clearTimeout(timeout);
  }, [currentLine, deleting, display]);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24 pb-16 pt-20 md:pb-24 md:pt-24">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute left-[10%] top-16 h-40 w-40 rounded-full border border-cyan-400/20 bg-cyan-500/8 blur-sm"
          animate={{ y: [0, 14, -8, 0], x: [0, 8, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-1/3 h-28 w-28 rotate-12 rounded-2xl border border-emerald-300/15 bg-emerald-400/8"
          animate={{ y: [0, -16, 10, 0], rotate: [12, 4, 18, 12] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full border border-cyan-400/15 bg-cyan-500/7 blur-md"
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
                duration: 0.6
              }
            }
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300 sm:text-sm"
          >
            Regulatory Affairs Professional
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 bg-gradient-to-r from-cyan-300 via-cyan-200 to-emerald-300 bg-clip-text font-heading text-5xl font-bold text-transparent sm:text-6xl md:text-7xl"
          >
            Aeraf Khan
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mx-auto mt-5 h-8 max-w-3xl font-heading text-lg text-slate-100 sm:text-2xl"
            aria-live="polite"
          >
            {display}
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300 align-middle" aria-hidden="true" />
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Bridging science, compliance, and patient safety — navigating complex regulatory landscapes to bring medical devices and pharmaceuticals to market.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_44px_rgba(6,182,212,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              View My Work
            </a>
            <a
              href="/Aeraf_Khan_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CountUpStat value={3.9} decimals={1} label="MS Regulatory Affairs GPA" />
          <CountUpStat value={6} suffix="+" label="Regulatory Projects" />
          <CountUpStat value={3} label="Global Markets (US, Canada, EU)" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="font-mono text-2xl font-semibold text-cyan-200">FDA | ISO | QSR</div>
            <p className="mt-2 text-sm text-slate-400">Frameworks</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
