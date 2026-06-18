import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { roles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Geoffrey R. Crawford — Growth Marketing Strategist, Paid Media Expert, and AI Consultant based in Los Angeles, CA.",
};

const expertise = [
  "Digital marketing",
  "Paid media",
  "Content strategy",
  "Analytics & reporting",
  "Web development",
  "AI systems & automation",
];

const platforms = [
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "Amazon Ads",
  "Microsoft Ads",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
              <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
                Operator, strategist, and builder.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                I help businesses grow through a combination of paid media strategy, data-driven
                decision making, and the technology systems that make marketing scale.
              </p>
            </div>
            <ProfilePortrait
              variant="light"
              className="mx-auto aspect-[4/5] w-full max-w-xs lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Geoffrey R. Crawford — a Growth Marketing Strategist based in Los
                Angeles, CA, originally from Buffalo, NY.
              </p>
              <p>
                Over the past 7+ years, I&apos;ve managed paid media budgets up to $200K+ monthly
                across Google, Meta, YouTube, Amazon, and Microsoft Ads. I&apos;ve worked with
                ecommerce brands doing $1M+ quarterly revenue, B2B companies generating qualified
                leads at scale, and digital product businesses in the creator economy.
              </p>
              <p>
                My work sits at the intersection of marketing and technology. I don&apos;t just
                optimize campaigns — I build the dashboards, funnels, landing pages, and AI
                workflows that make marketing teams faster and more effective.
              </p>
              <p>
                Whether I&apos;m architecting a Google Ads account structure, designing a lead
                generation funnel, or building an AI-powered reporting system, the goal is the
                same: help businesses grow revenue with clarity and precision.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">What I Do</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <Badge key={role} variant="secondary">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight">Background</h2>
                <ul className="mt-4 space-y-3">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight">Platforms</h2>
                <ul className="mt-4 space-y-3">
                  {platforms.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <SectionHeader
            title="Built for operators, not observers."
            description="I bring hands-on experience managing real budgets, building real systems, and driving real revenue — not just strategy decks."
            align="center"
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
