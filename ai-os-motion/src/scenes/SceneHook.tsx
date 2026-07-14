import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../design";
import { AmbientGlow, fadeOut, fadeRise } from "../components/Primitives";

/** Scene 1 — Hook text on black */
export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = fadeRise(frame, 12, 36, 20);
  const out = fadeOut(frame, 95, 24);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        opacity: out,
      }}
    >
      <AmbientGlow intensity={0.6} />
      <div
        style={{
          opacity: enter.opacity,
          translate: enter.translate,
          paddingLeft: 96,
          paddingRight: 96,
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        <p
          style={{
            fontSize: 64,
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: colors.fg,
            margin: 0,
          }}
        >
          Marketing shouldn&apos;t require{" "}
          <span style={{ color: colors.accent }}>12 different tools.</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
