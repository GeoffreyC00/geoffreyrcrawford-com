import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors } from "../design";

export const AmbientGlow: React.FC<{ intensity?: number }> = ({ intensity = 1 }) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 40), [-1, 1], [0.7, 1]);

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "32%",
          width: 700,
          height: 700,
          marginLeft: -350,
          marginTop: -350,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(200,182,255,${0.14 * intensity * pulse}) 0%, transparent 68%)`,
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "8%",
          width: 500,
          height: 400,
          marginLeft: -250,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(200,182,255,${0.06 * intensity}) 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />
    </AbsoluteFill>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  accent?: boolean;
}> = ({ children, style, accent }) => (
  <div
    style={{
      background: accent ? colors.accentSoft : colors.card,
      border: `1px solid ${accent ? colors.accentBorder : colors.cardBorder}`,
      borderRadius: 20,
      padding: "22px 28px",
      color: colors.fg,
      boxShadow: accent
        ? "0 0 40px rgba(200,182,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
        : "inset 0 1px 0 rgba(255,255,255,0.04)",
      ...style,
    }}
  >
    {children}
  </div>
);

/** Fade + rise in from local frame 0. */
export const fadeRise = (
  frame: number,
  start: number,
  duration = 24,
  distance = 28,
) => {
  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const y = interpolate(frame, [start, start + duration], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return { opacity, translate: `0px ${y}px` as const };
};

export const fadeOut = (frame: number, start: number, duration = 18) =>
  interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
