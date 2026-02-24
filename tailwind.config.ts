import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1a",
        surface: "rgba(30, 41, 59, 0.7)",
        accent: "#06b6d4",
        emerald: "#10b981",
        text: "#f1f5f9",
        muted: "#94a3b8"
      },
      boxShadow: {
        glow: "0 0 80px rgba(6, 182, 212, 0.15)"
      }
    }
  }
};

export default config;
