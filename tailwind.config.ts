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
        foreground: "#F4F2EE",
        card: {
          DEFAULT: "#0F0F0F",
          foreground: "#F4F2EE",
        },
        accent: {
          DEFAULT: "#C8B6FF",
          foreground: "#0A0A0A",
          muted: "rgba(200, 182, 255, 0.10)",
        },
        muted: {
          DEFAULT: "#161616",
          foreground: "#8A867E",
        },
        border: "rgba(244, 242, 238, 0.10)",
        hairline: "rgba(244, 242, 238, 0.07)",
        ring: "#C8B6FF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.65rem, 2.6vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        editorial: "0.22em",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(244, 242, 238, 0.06) inset",
        "card-hover": "0 0 0 1px rgba(244, 242, 238, 0.14) inset",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #D7C9FF 0%, #C8B6FF 50%, #A892F5 100%)",
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
