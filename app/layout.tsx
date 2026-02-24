import type { Metadata } from "next";
import { Inter, Sora, Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteTitle = "Aeraf Khan — Regulatory Affairs Professional";
const siteDescription =
  "Regulatory Affairs portfolio of Aeraf Khan, featuring FDA submissions, 510(k) strategy, quality systems, and global regulatory pathway projects in medical devices and pharmaceuticals.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Aeraf Khan Portfolio",
  keywords: [
    "Aeraf Khan",
    "Regulatory Affairs",
    "Medical Devices",
    "Pharmaceuticals",
    "510(k)",
    "FDA Submissions",
    "Quality Systems",
    "ISO 13485",
    "21 CFR 820"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Aeraf Khan Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${robotoMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
