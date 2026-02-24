# Aeraf Khan Regulatory Affairs Portfolio

Production-ready single-page portfolio built with Next.js App Router, Tailwind CSS v4, Framer Motion, and Lucide React.

## Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS 4
- Framer Motion
- Lucide React
- TypeScript

## Features

- Single-page, smooth-scroll architecture
- Sticky glassmorphism navigation with active section highlighting
- Hero with typed subtitle animation and animated bento stats
- About, Experience timeline, Projects showcase with modal details, Skills bento grid, Contact section
- Cursor glow effect (desktop pointer devices)
- Accessibility-focused semantics, keyboard interactions, reduced-motion handling
- SEO metadata + Open Graph tags
- JSON-LD structured data for Person schema
- Static export compatibility for Vercel/Netlify (`output: export`)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run start
```

## Deployment

This project is configured for static export.

- Build output is generated in `out/` after `npm run build`.
- Deploy `out/` to static hosts such as Netlify.
- Vercel can also deploy directly from this repository.

## Resume Asset

The resume download button links to:

- `public/Aeraf_Khan_Resume.pdf`

Replace this file with the latest finalized resume as needed.
