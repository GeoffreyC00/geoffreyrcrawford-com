/** Shared design tokens for the AI OS motion graphic. */
export const colors = {
  bg: "#0A0A0A",
  fg: "#F4F2EE",
  muted: "rgba(244, 242, 238, 0.52)",
  dim: "rgba(244, 242, 238, 0.28)",
  accent: "#C8B6FF",
  accentSoft: "rgba(200, 182, 255, 0.12)",
  accentBorder: "rgba(200, 182, 255, 0.35)",
  card: "rgba(255, 255, 255, 0.04)",
  cardBorder: "rgba(255, 255, 255, 0.1)",
};

export const FPS = 30;
export const DURATION_SECONDS = 30;
export const DURATION = FPS * DURATION_SECONDS; // 900
export const WIDTH = 1080;
export const HEIGHT = 1920;

/** Scene timing (frames) — cinematic pacing across 30s */
export const scenes = {
  hook: { start: 0, end: 120 }, // 0–4s
  disconnected: { start: 105, end: 270 }, // ~3.5–9s (overlap fade)
  unify: { start: 240, end: 405 }, // 8–13.5s
  aiEngine: { start: 375, end: 555 }, // 12.5–18.5s
  dashboard: { start: 525, end: 735 }, // 17.5–24.5s
  closer: { start: 705, end: 900 }, // 23.5–30s
} as const;

export const SOURCE_CARDS = [
  "Google Ads",
  "Meta Ads",
  "CRM",
  "Revenue",
  "Analytics",
  "Email",
  "Attribution",
] as const;

export const AI_MODULES = [
  "Executive Briefings",
  "Performance Alerts",
  "Forecasting",
  "Growth Opportunities",
  "Attribution Analysis",
] as const;
