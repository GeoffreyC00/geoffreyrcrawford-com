import type { Metadata } from "next";
import { AiMarketingSystemsContent } from "@/components/work/ai-marketing-systems-content";

export const metadata: Metadata = {
  title: "AI Marketing Systems",
  description:
    "Portfolio case study: AI-powered marketing dashboards, attribution reporting, customer intelligence, and executive decision systems — built with anonymized sample data.",
  alternates: { canonical: "/work/ai-marketing-systems" },
};

export default function AiMarketingSystemsPage() {
  return <AiMarketingSystemsContent />;
}
