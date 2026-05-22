import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1016",
        mist: "#d8e4ef",
        steel: "#1d2834",
        pulse: "#93c5fd",
        acid: "#60a5fa",
        haze: "#91a5ba",
        accent: "var(--accent)",
        surface: "var(--surface)",
        base: "var(--base)",
        onAccent: "var(--on-accent)"
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(147, 197, 253, 0.14), 0 18px 80px rgba(8, 12, 24, 0.55)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(147, 197, 253, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(96, 165, 250, 0.12), transparent 20%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 40%)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
