"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative scroll-mt-24 py-20 md:py-28 ${className ?? ""}`}
    >
      {children}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
    </motion.section>
  );
}
