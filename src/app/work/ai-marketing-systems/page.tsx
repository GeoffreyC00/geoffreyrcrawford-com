import type { Metadata } from "next";
import { PlatformCaseStudyContent } from "@/components/product/platform-case-study-content";
import { caseStudyHero } from "@/lib/data/platform-case-study";

export const metadata: Metadata = {
  title: "AI Marketing Intelligence Platform",
  description:
    "Product case study: AI-powered marketing operating system with unified attribution, executive reporting, automation, and decision support — built with fictional demo data.",
  alternates: { canonical: "/work/ai-marketing-systems" },
  openGraph: {
    title: `${caseStudyHero.headline} | Geoffrey R. Crawford`,
    description: caseStudyHero.subheadline,
  },
};

export default function AiMarketingSystemsPage() {
  return <PlatformCaseStudyContent />;
}
