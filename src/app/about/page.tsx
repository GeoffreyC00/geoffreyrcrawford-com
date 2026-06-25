import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { Badge } from "@/components/ui/badge";
import { roles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Geoffrey R. Crawford — growth marketing operator based in Los Angeles. Paid media, AI systems, analytics, and conversion optimization.",
};

const expertise = [
  "Paid media strategy & execution",
  "AI workflows & marketing automation",
  "Analytics, dashboards & reporting",
  "Web development & landing pages",
  "Content strategy & funnel optimization",
  "Conversion systems & lead generation",
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
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
              <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
                Operator, strategist, builder.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                I build marketing systems that combine paid media, AI, analytics, websites,
                automation, and content strategy — so businesses can grow with clarity, not chaos.
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
                I&apos;m Geoffrey R. Crawford — originally from Buffalo, NY, now based in Los
                Angeles. For 7+ years I&apos;ve been inside the work: managing paid media budgets
                up to $200K+ monthly, building reporting systems, optimizing funnels, and shipping
                websites and automations that make marketing teams faster.
              </p>
              <p>
                I&apos;ve worked with ecommerce brands doing $1M+ quarterly revenue, B2B companies
                generating qualified leads at scale, creator-led education brands like Think Media,
                and local businesses that needed a real web presence — not just a template.
              </p>
              <p>
                I&apos;m not an agency. I&apos;m the person you bring in when you need someone who
                can think strategically, execute directly, and build the systems that connect
                marketing spend to revenue.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">How I position</h2>
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
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
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
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
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

      <CtaSection />
    </>
  );
}
