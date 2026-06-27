import Link from "next/link";
import { ResumePrintButton } from "@/components/resume/resume-print-button";
import { ResumePrintTrigger } from "@/components/resume/resume-print-trigger";
import {
  certifications,
  coreExpertise,
  earlierExperience,
  education,
  resumeExperience,
  resumeSpecialties,
  resumeSummary,
  resumeTitle,
} from "@/lib/data/resume";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Resume",
  robots: { index: false },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">{children}</p>
  );
}

export default function ResumePage() {
  return (
    <>
      <ResumePrintTrigger />

      {/* Dark backdrop frames the white sheet like a downloadable PDF preview. */}
      <div className="resume-page min-h-screen bg-zinc-950 px-4 py-10 print:bg-white print:p-0">
        <div className="no-print mx-auto mb-8 flex max-w-[8.5in] items-center justify-between">
          <Link href="/hire-me" className="text-sm text-zinc-400 transition-colors hover:text-white">
            ← Back
          </Link>
          <ResumePrintButton />
        </div>

        <article className="resume-sheet mx-auto flex w-[8.5in] min-h-[11in] flex-col bg-white px-[0.7in] py-[0.62in] text-zinc-900 shadow-2xl shadow-black/40 print:shadow-none">
          {/* Masthead */}
          <header className="flex items-end justify-between gap-8 border-b border-zinc-200 pb-6">
            <div>
              <h1 className="font-serif text-[34px] font-light leading-[1.02] tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="mt-2 text-[12.5px] text-zinc-700">{resumeTitle}</p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                {resumeSpecialties}
              </p>
            </div>
            <div className="shrink-0 text-right text-[10px] leading-[1.7] text-zinc-500">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.phone}</p>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-zinc-900">
                info@GeoffreyRCrawford.com
              </a>
              <a href={siteConfig.url} className="block hover:text-zinc-900">
                GeoffreyRCrawford.com
              </a>
              <a href={siteConfig.linkedin} className="block hover:text-zinc-900">
                LinkedIn
              </a>
            </div>
          </header>

          {/* Body — editorial two-column rhythm */}
          <div className="mt-7 grid flex-1 grid-cols-[1.72fr_1fr] gap-x-[0.6in]">
            {/* Main column */}
            <div>
              <section>
                <SectionLabel>Profile</SectionLabel>
                <p className="mt-3 text-[10.5px] leading-[1.55] text-zinc-600">{resumeSummary}</p>
              </section>

              <section className="mt-7">
                <SectionLabel>Experience</SectionLabel>
                <div className="mt-4 space-y-[18px]">
                  {resumeExperience.map((job) => (
                    <div key={job.company} className="resume-entry">
                      <div className="flex items-baseline justify-between gap-4">
                        <h2 className="font-serif text-[14.5px] font-normal leading-tight text-zinc-900">
                          {job.company}
                        </h2>
                        <span className="shrink-0 font-mono text-[8.5px] uppercase tracking-[0.16em] text-zinc-400">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10.5px] font-medium text-zinc-500">{job.role}</p>
                      <p className="mt-2 text-[10.5px] leading-[1.5] text-zinc-600">{job.summary}</p>
                      {job.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1.5">
                          {job.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="relative pl-3.5 text-[10.5px] leading-[1.5] text-zinc-600 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2 before:bg-zinc-300"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  <p className="text-[10px] italic leading-[1.5] text-zinc-400">
                    {earlierExperience}
                  </p>
                </div>
              </section>
            </div>

            {/* Side rail */}
            <div className="border-l border-zinc-200 pl-[0.4in]">
              <section>
                <SectionLabel>Core Expertise</SectionLabel>
                <ul className="mt-3 grid grid-cols-1 gap-y-[5px] text-[10px] text-zinc-600">
                  {coreExpertise.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-7">
                <SectionLabel>Certifications</SectionLabel>
                <ul className="mt-3 space-y-[5px] text-[10px] text-zinc-600">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-7">
                <SectionLabel>Education</SectionLabel>
                <p className="mt-3 text-[10.5px] leading-snug text-zinc-700">{education.degree}</p>
                <p className="text-[10px] text-zinc-500">{education.school}</p>
              </section>
            </div>
          </div>

          {/* Editorial footnote */}
          <footer className="mt-8 flex items-baseline justify-between border-t border-zinc-200 pt-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
              Selected Work
            </p>
            <p className="font-serif text-[12px] font-light italic text-zinc-700">
              GeoffreyRCrawford.com
            </p>
          </footer>
        </article>
      </div>
    </>
  );
}
