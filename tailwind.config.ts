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
        pulse: "#8ef9f3",
        acid: "#cbff56",
        haze: "#91a5ba",
        accent: "var(--accent)",
        surface: "var(--surface)"
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(142, 249, 243, 0.12), 0 18px 80px rgba(11, 16, 22, 0.55)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(142, 249, 243, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(203, 255, 86, 0.12), transparent 20%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 40%)"
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
