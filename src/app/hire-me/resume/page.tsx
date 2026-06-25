import Link from "next/link";
import { ResumePrintButton } from "@/components/resume/resume-print-button";
import { ResumePrintTrigger } from "@/components/resume/resume-print-trigger";
import {
  coreSkills,
  experienceHighlights,
  platforms,
  professionalSummary,
  targetRoles,
} from "@/lib/data/resume";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Resume",
  robots: { index: false },
};

export default function ResumePage() {
  return (
    <>
      <ResumePrintTrigger />
      <div className="resume-page mx-auto max-w-3xl bg-white px-8 py-12 text-black print:px-0 print:py-0">
        <div className="no-print mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
          <Link href="/hire-me" className="text-sm text-zinc-600 hover:text-black">
            ← Back to Hire Me
          </Link>
          <ResumePrintButton />
        </div>

        <header className="border-b border-zinc-300 pb-6">
          <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
          <p className="mt-1 text-lg text-zinc-700">Growth Marketing Strategist & Marketing Operator</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600">
            <span>{siteConfig.location}</span>
            <span>{siteConfig.email}</span>
            <span>geoffreyrcrawford.com</span>
            <span>linkedin.com/in/geoffreyrcrawford</span>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-800">{professionalSummary}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Target Roles
          </h2>
          <p className="mt-2 text-sm text-zinc-800">{targetRoles.join(" · ")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Experience</h2>
          <div className="mt-3 space-y-4">
            {experienceHighlights.map((item) => (
              <div key={item.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-zinc-900">{item.company}</h3>
                  <span className="text-xs text-zinc-500">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-zinc-700">{item.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Core Skills</h2>
            <ul className="mt-2 space-y-1 text-sm text-zinc-800">
              {coreSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Platforms</h2>
            <ul className="mt-2 space-y-1 text-sm text-zinc-800">
              {platforms.map((platform) => (
                <li key={platform}>• {platform}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 border-t border-zinc-200 pt-4">
          <p className="text-xs text-zinc-500">
            7+ years digital marketing · Up to $200K+ monthly ad spend managed · Portfolio:
            geoffreyrcrawford.com/work
          </p>
        </section>
      </div>
    </>
  );
}
