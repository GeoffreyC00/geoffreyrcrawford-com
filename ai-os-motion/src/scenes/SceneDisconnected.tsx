import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors, SOURCE_CARDS } from "../design";
import { AmbientGlow, GlassCard, fadeOut, fadeRise } from "../components/Primitives";

/** Scattered positions for disconnected source cards (relative to center). */
const POSITIONS: Array<{ x: number; y: number; rot: number }> = [
  { x: -260, y: -420, rot: -8 },
  { x: 220, y: -380, rot: 6 },
  { x: -300, y: -120, rot: -4 },
  { x: 40, y: -80, rot: 2 },
  { x: 280, y: -40, rot: 7 },
  { x: -180, y: 200, rot: -6 },
  { x: 200, y: 260, rot: 5 },
];

/** Scene 2 — Floating disconnected cards */
export const SceneDisconnected: React.FC = () => {
  const frame = useCurrentFrame();
  const title = fadeRise(frame, 8, 28, 16);
  const out = fadeOut(frame, 140, 24);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        opacity: out,
      }}
    >
      <AmbientGlow intensity={0.85} />

      <div
        style={{
          position: "absolute",
          top: 160,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: title.opacity,
          translate: title.translate,
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <p
          style={{
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.accent,
            margin: 0,
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          The problem
        </p>
        <p
          style={{
            fontSize: 48,
            fontWeight: 300,
            letterSpacing: "-0.028em",
            lineHeight: 1.2,
            color: colors.fg,
            margin: 0,
          }}
        >
          Everything is disconnected.
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {SOURCE_CARDS.map((label, i) => {
          const pos = POSITIONS[i];
          const delay = 18 + i * 8;
          const opacity = interpolate(frame, [delay, delay + 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          const drift = Math.sin((frame + i * 17) / 28) * 6;
          const enterY = interpolate(frame, [delay, delay + 28], [40, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          return (
            <div
              key={label}
              style={{
                position: "absolute",
                opacity,
                translate: `${pos.x}px ${pos.y + enterY + drift}px`,
                rotate: `${pos.rot}deg`,
              }}
            >
              <GlassCard
                style={{
                  padding: "18px 26px",
                  fontSize: 28,
                  fontWeight: 450,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </GlassCard>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
