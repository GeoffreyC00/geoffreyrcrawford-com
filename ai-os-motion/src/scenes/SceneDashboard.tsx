import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors } from "../design";
import { AmbientGlow, GlassCard, fadeOut, fadeRise } from "../components/Primitives";

const KPIS = [
  { label: "Weekly spend", value: "$48.2K", delta: "+4.2%" },
  { label: "Attributed revenue", value: "$156K", delta: "+11%" },
  { label: "Blended ROAS", value: "3.2×", delta: "+0.3" },
  { label: "New customers", value: "842", delta: "+6%" },
] as const;

const BARS = [42, 55, 48, 62, 70, 58, 74, 80, 72, 86, 90, 84];

const RECS = [
  { priority: "High", text: "Pause underperforming Meta prospecting set" },
  { priority: "Medium", text: "Scale Google brand — ROAS above threshold" },
  { priority: "Watch", text: "Refresh top 3 creatives this week" },
] as const;

/** Scene 5 — Executive dashboard reveal with demo data */
export const SceneDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const title = fadeRise(frame, 4, 22, 12);
  const out = fadeOut(frame, 185, 24);

  const shellOpacity = interpolate(frame, [12, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: out }}>
      <AmbientGlow intensity={0.9} />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: title.opacity,
          translate: title.translate,
        }}
      >
        <p
          style={{
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.accent,
            margin: 0,
            marginBottom: 16,
            fontWeight: 500,
          }}
        >
          Output
        </p>
        <p
          style={{
            fontSize: 46,
            fontWeight: 300,
            letterSpacing: "-0.028em",
            color: colors.fg,
            margin: 0,
          }}
        >
          Executive Dashboard
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: 320,
          left: 56,
          right: 56,
          opacity: shellOpacity,
        }}
      >
        {/* Chrome */}
        <div
          style={{
            borderRadius: 24,
            border: `1px solid ${colors.cardBorder}`,
            background: "rgba(12,12,14,0.92)",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 22px",
              borderBottom: `1px solid ${colors.cardBorder}`,
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#333" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#333" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#333" }} />
            <span
              style={{
                marginLeft: 12,
                fontSize: 14,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.dim,
              }}
            >
              Marketing OS · demo data
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 14,
                color: "#6EE7A8",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#6EE7A8",
                }}
              />
              Live sync
            </span>
          </div>

          <div style={{ padding: 22 }}>
            {/* KPIs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {KPIS.map((kpi, i) => {
                const delay = 28 + i * 6;
                const opacity = interpolate(frame, [delay, delay + 18], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                return (
                  <div
                    key={kpi.label}
                    style={{
                      opacity,
                      borderRadius: 16,
                      border: `1px solid ${colors.cardBorder}`,
                      background: colors.card,
                      padding: "18px 20px",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: 16, color: colors.dim }}>{kpi.label}</p>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontSize: 36,
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {kpi.value}
                    </p>
                    <p style={{ margin: "6px 0 0", fontSize: 16, color: "#6EE7A8" }}>
                      {kpi.delta} vs prior week
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Chart */}
            <div
              style={{
                marginTop: 14,
                borderRadius: 16,
                border: `1px solid ${colors.cardBorder}`,
                background: colors.card,
                padding: "18px 20px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: colors.dim,
                }}
              >
                Spend vs plan
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 8,
                  height: 140,
                  marginTop: 16,
                }}
              >
                {BARS.map((h, i) => {
                  const delay = 50 + i * 3;
                  const heightPct = interpolate(frame, [delay, delay + 20], [0, h], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  });
                  return (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${heightPct}%`,
                        borderRadius: 6,
                        background: `linear-gradient(180deg, rgba(200,182,255,0.75), rgba(200,182,255,0.25))`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {RECS.map((rec, i) => {
                const delay = 80 + i * 8;
                const opacity = interpolate(frame, [delay, delay + 18], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                return (
                  <GlassCard
                    key={rec.text}
                    style={{
                      opacity,
                      padding: "16px 18px",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color:
                          rec.priority === "High"
                            ? "#F87171"
                            : rec.priority === "Medium"
                              ? "#FBBF24"
                              : colors.accent,
                        paddingTop: 4,
                        flexShrink: 0,
                        width: 72,
                      }}
                    >
                      {rec.priority}
                    </span>
                    <span style={{ fontSize: 22, lineHeight: 1.35, color: colors.muted }}>
                      {rec.text}
                    </span>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
