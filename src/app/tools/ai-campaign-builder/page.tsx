import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CampaignBuilderWizard } from "@/components/tools/campaign-builder-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Campaign Builder",
  description:
    "Build a practical paid media campaign structure with AI-powered strategy, budget allocation, tracking recommendations, and creative angles.",
  alternates: { canonical: "/tools/ai-campaign-builder" },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Campaign Builder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${siteConfig.url}/tools/ai-campaign-builder`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Build a practical paid media campaign structure with AI-powered strategy, budget allocation, tracking recommendations, and creative angles.",
  author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
};

export default function AiCampaignBuilderPage() {
  return (
    <>
      <JsonLd data={appJsonLd} />

      {/* Hero */}
      <section className="section-padding !pb-14 !pt-24 md:!pt-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="kicker animate-rise">Tools / AI Campaign Builder</p>
            <h1 className="animate-rise mt-7 font-serif text-display-xl font-light text-pretty [animation-delay:80ms]">
              Build a smarter campaign structure in minutes.
            </h1>
            <p className="animate-rise mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:180ms]">
              Answer a few questions and get a practical paid media plan with campaign structure,
              budget allocation, tracking notes, funnel recommendations, and creative angles.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 [animation-delay:280ms]">
              <LinkButton href="#builder" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <span className="text-sm text-muted-foreground">No login required.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Builder */}
      <section id="builder" className="section-padding border-t border-hairline !pt-16 scroll-mt-24">
        <div className="container-wide">
          <CampaignBuilderWizard />
        </div>
      </section>
    </>
  );
}
