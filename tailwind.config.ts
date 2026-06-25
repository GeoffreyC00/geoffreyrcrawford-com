import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#4F46E5",
          foreground: "#FFFFFF",
          muted: "rgba(79, 70, 229, 0.12)",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A1A1AA",
        },
        border: "rgba(255, 255, 255, 0.08)",
        ring: "#4F46E5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(79, 70, 229, 0.35)",
        card: "0 0 0 1px rgba(255, 255, 255, 0.06) inset",
        "card-hover":
          "0 0 0 1px rgba(79, 70, 229, 0.25) inset, 0 0 40px -12px rgba(79, 70, 229, 0.2)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0A0A0A 80%), radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.15), transparent 50%)",
        "accent-gradient": "linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #4338CA 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
