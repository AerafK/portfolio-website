import { Linkedin } from "lucide-react";

const quickLinks = ["home", "about", "experience", "projects", "skills", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Designed & Built by Aeraf Khan · 2026</p>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-4">
          {quickLinks.map((link) => (
            <a key={link} href={`#${link}`} className="underline-link capitalize text-slate-300">
              {link}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/aerafkhan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 transition hover:text-cyan-200"
            aria-label="Aeraf Khan on LinkedIn"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
