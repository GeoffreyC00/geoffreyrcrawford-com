import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors } from "../design";
import { AmbientGlow, fadeRise } from "../components/Primitives";

/** Scene 6 — Final message */
export const SceneCloser: React.FC = () => {
  const frame = useCurrentFrame();

  const line1 = fadeRise(frame, 8, 28, 18);
  const line1Out = interpolate(frame, [55, 72], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const line2 = fadeRise(frame, 78, 28, 18);
  const brand = fadeRise(frame, 125, 30, 14);

  const showLine1 = frame < 78;
  const showLine2 = frame >= 70 && frame < 150;
  const showBrand = frame >= 120;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AmbientGlow intensity={showBrand ? 1.1 : 0.7} />

      {showLine1 && (
        <div
          style={{
            position: "absolute",
            opacity: line1.opacity * line1Out,
            translate: line1.translate,
            textAlign: "center",
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <p
            style={{
              fontSize: 58,
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: colors.fg,
              margin: 0,
            }}
          >
            Stop building dashboards.
          </p>
        </div>
      )}

      {showLine2 && (
        <div
          style={{
            position: "absolute",
            opacity: line2.opacity * interpolate(frame, [140, 160], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: line2.translate,
            textAlign: "center",
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <p
            style={{
              fontSize: 64,
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: colors.accent,
              margin: 0,
            }}
          >
            Build systems.
          </p>
        </div>
      )}

      {showBrand && (
        <div
          style={{
            position: "absolute",
            opacity: brand.opacity,
            translate: brand.translate,
            textAlign: "center",
            paddingLeft: 72,
            paddingRight: 72,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <p
            style={{
              fontSize: 16,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: colors.accent,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Product
          </p>
          <p
            style={{
              fontSize: 52,
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: colors.fg,
              margin: 0,
              maxWidth: 860,
            }}
          >
            AI Marketing Operating System
          </p>
          <p
            style={{
              fontSize: 28,
              color: colors.muted,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            GeoffreyRCrawford.com
          </p>
        </div>
      )}
    </AbsoluteFill>
  );
};
