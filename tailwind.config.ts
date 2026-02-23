import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        dark: {
          DEFAULT: "#0f172a",
          darker: "#0a0a1a",
        },
        light: {
          DEFAULT: "#ffffff",
          alt: "#f1f5f9",
        },
        text: {
          light: "#f1f5f9",
          dark: "#0f172a",
          "muted-light": "#94a3b8",
          "muted-dark": "#64748b",
        },
        border: {
          light: "#e2e8f0",
          dark: "#334155",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        mono: ['"Courier New"', "monospace"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
