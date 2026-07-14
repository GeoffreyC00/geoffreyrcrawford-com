import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors, SOURCE_CARDS } from "../design";
import { AmbientGlow, GlassCard, fadeOut, fadeRise } from "../components/Primitives";

const START: Array<{ x: number; y: number }> = [
  { x: -260, y: -320 },
  { x: 220, y: -280 },
  { x: -280, y: -80 },
  { x: 40, y: -40 },
  { x: 260, y: 0 },
  { x: -160, y: 180 },
  { x: 180, y: 220 },
];

/** Scene 3 — Cards converge into Unified Data Layer */
export const SceneUnify: React.FC = () => {
  const frame = useCurrentFrame();
  const title = fadeRise(frame, 6, 24, 14);
  const out = fadeOut(frame, 140, 24);

  const convergeStart = 30;
  const convergeDur = 55;

  const layerOpacity = interpolate(frame, [70, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const layerScale = interpolate(frame, [70, 105], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: out }}>
      <AmbientGlow intensity={1} />

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
          The pipeline
        </p>
        <p
          style={{
            fontSize: 48,
            fontWeight: 300,
            letterSpacing: "-0.028em",
            color: colors.fg,
            margin: 0,
          }}
        >
          Unified Data Layer
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
        {/* Converging mini chips */}
        {SOURCE_CARDS.map((label, i) => {
          const start = START[i];
          const progress = interpolate(frame, [convergeStart, convergeStart + convergeDur], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          });
          const x = interpolate(progress, [0, 1], [start.x, 0]);
          const y = interpolate(progress, [0, 1], [start.y, 40]);
          const scale = interpolate(progress, [0, 1], [1, 0.55]);
          const opacity = interpolate(progress, [0, 0.75, 1], [1, 0.85, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={label}
              style={{
                position: "absolute",
                opacity,
                translate: `${x}px ${y}px`,
                scale,
              }}
            >
              <GlassCard
                style={{
                  padding: "14px 20px",
                  fontSize: 22,
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </GlassCard>
            </div>
          );
        })}

        {/* Destination layer card */}
        <div
          style={{
            opacity: layerOpacity,
            scale: layerScale,
            translate: "0px 60px",
            width: 720,
          }}
        >
          <GlassCard accent style={{ padding: "36px 40px", textAlign: "center" }}>
            <p
              style={{
                fontSize: 15,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.accent,
                margin: 0,
                marginBottom: 14,
              }}
            >
              Normalized · Merged · Cleaned
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: 0,
                color: colors.fg,
              }}
            >
              Unified Data Layer
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
                marginTop: 28,
              }}
            >
              {["Normalize", "Attribution", "Customer records", "Cross-platform"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 18,
                    color: colors.muted,
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: `1px solid ${colors.cardBorder}`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AbsoluteFill>
  );
};
