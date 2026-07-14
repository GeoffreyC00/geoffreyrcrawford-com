import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors, AI_MODULES } from "../design";
import { AmbientGlow, GlassCard, fadeOut, fadeRise } from "../components/Primitives";

/** Scene 4 — AI Intelligence Engine modules */
export const SceneAIEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const title = fadeRise(frame, 6, 26, 16);
  const out = fadeOut(frame, 155, 24);

  const coreOpacity = interpolate(frame, [10, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const coreScale = interpolate(frame, [10, 40], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: out }}>
      <AmbientGlow intensity={1.2} />

      <div
        style={{
          position: "absolute",
          top: 150,
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
            marginBottom: 18,
            fontWeight: 500,
          }}
        >
          Core
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
          AI Intelligence Engine
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: 420,
          left: 90,
          right: 90,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          opacity: coreOpacity,
          scale: coreScale,
        }}
      >
        <GlassCard accent style={{ padding: "28px 32px", textAlign: "center", marginBottom: 12 }}>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 450, letterSpacing: "-0.015em" }}>
            Intelligence embedded in the workflow
          </p>
        </GlassCard>

        {AI_MODULES.map((mod, i) => {
          const delay = 42 + i * 10;
          const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          const x = interpolate(frame, [delay, delay + 24], [36, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          return (
            <div key={mod} style={{ opacity, translate: `${x}px 0px` }}>
              <GlassCard
                style={{
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: colors.accent,
                    boxShadow: "0 0 12px rgba(200,182,255,0.6)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {mod}
                </span>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
