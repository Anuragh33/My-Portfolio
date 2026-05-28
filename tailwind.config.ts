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
        base: "var(--base)",
        panel: "var(--panel)",
        elevated: "var(--elevated)",
        surface: "var(--panel)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        onAccent: "var(--on-accent)",
        fg: "var(--text)",
        "fg-muted": "var(--text-muted)",
        "fg-dim": "var(--text-dim)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        success: "var(--success)",
        warn: "var(--warn)",
        error: "var(--error)",
        // backward-compat aliases during pivot
        ink: "var(--base)",
        mist: "var(--text)",
        steel: "var(--panel)",
        pulse: "var(--accent)",
        acid: "var(--accent-soft)",
        haze: "var(--text-muted)"
      },
      fontFamily: {
        sans: ["var(--font-mono)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
