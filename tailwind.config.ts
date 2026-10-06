import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: "var(--canvas)",
        "surface-primary": "var(--surface-primary)",
        "surface-secondary": "var(--surface-secondary)",
        primary: {
          DEFAULT: "#4f46e5",
          hover: "#4338ca",
          light: "#eef2ff",
          dark: "#3730a3",
        },
        accent: {
          DEFAULT: "#06b6d4",
          hover: "#0891b2",
          light: "#ecfeff",
        },
        sinhala: {
          highlight: "#10b981",
          light: "#ecfdf5",
          border: "#a7f3d0",
        },
        english: {
          highlight: "#3b82f6",
          light: "#eff6ff",
          border: "#bfdbfe",
        }
      },
      boxShadow: {
        clay: "0 4px 8px -2px rgba(67, 56, 202, 0.04), 0 16px 28px -4px rgba(99, 102, 241, 0.09), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
        "clay-hover": "0 8px 16px -2px rgba(67, 56, 202, 0.08), 0 24px 38px -4px rgba(99, 102, 241, 0.16), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
        "clay-dark": "0 4px 12px -2px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
        pill: "0 4px 12px -2px rgba(79, 70, 229, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Noto Sans Sinhala", "Sinhala Sangam MN", "sans-serif"],
        sinhala: ["Noto Sans Sinhala", "Sinhala Sangam MN", "FM Abhaya", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
