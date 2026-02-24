"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export default function CountUpStat({ value, suffix = "", label, decimals = 0 }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1400;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [inView, value]);

  const formatted = count.toFixed(decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="font-heading text-3xl font-bold text-slate-100 md:text-4xl">
        {formatted}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}
