import { ImageResponse } from "next/og";
import { getInsightBySlug, getInsightSlugs } from "@/lib/content/insights";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;
export const alt = "Insight cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

/** Dynamically generated Open Graph card for each insight. */
export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  const title = insight?.meta.title ?? siteConfig.name;
  const typeLabel = insight?.meta.typeLabel ?? "Insights";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "80px",
          backgroundImage:
            "radial-gradient(circle at 75% 10%, rgba(79,70,229,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8b8bf5",
              fontWeight: 600,
            }}
          >
            {typeLabel}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 68,
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#FFFFFF",
              maxWidth: 1000,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#A1A1AA",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", color: "#FFFFFF", fontWeight: 600 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex" }}>geoffreyrcrawford.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
