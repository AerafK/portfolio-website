"use client";

import { FormEvent, useState } from "react";
import { Copy, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("khan.ae@northeastern.edu");
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    event.currentTarget.reset();
  };

  return (
    <SectionWrapper id="contact" className="pb-12 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
          Open to co-op opportunities, full-time roles, and collaborations in regulatory affairs, quality assurance, and clinical operations.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="glass-card rounded-3xl p-6 lg:col-span-2">
            <ul className="space-y-5 text-slate-200">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:khan.ae@northeastern.edu" className="underline-link text-slate-100">
                    khan.ae@northeastern.edu
                  </a>
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-600/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-5 w-5 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/aerafkhan"
                    target="_blank"
                    rel="noreferrer"
                    className="underline-link text-slate-100"
                  >
                    www.linkedin.com/in/aerafkhan
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p>Boston, MA</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href="tel:+18574218116" className="underline-link text-slate-100">
                    (857) 421-8116
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 lg:col-span-3" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  className="rounded-lg border border-slate-600/80 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  className="rounded-lg border border-slate-600/80 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="rounded-lg border border-slate-600/80 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                placeholder="Tell me about your opportunity or collaboration."
              />
            </label>

            <div className="mt-5 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Send
              </button>
              <span className="text-xs text-emerald-300" aria-live="polite">
                {sent ? "Message prepared. Please follow up via email." : ""}
              </span>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
