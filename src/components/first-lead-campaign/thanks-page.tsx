"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LandingFooter } from "@/components/first-lead-campaign/landing-footer";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";
import { readKitDownloads, takeKitLead, type KitDownloads } from "@/lib/products/kit-signup-handoff";

export function ThanksPage() {
  const [downloads, setDownloads] = useState<KitDownloads | null>(null);

  useEffect(() => {
    setDownloads(readKitDownloads());
    if (takeKitLead()) window.fbq?.("track", "Lead");
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#172033]" style={{ colorScheme: "light" }}>
      <header className="border-b border-[#e4dccb] bg-[#f6f3ec]">
        <div className="mx-auto flex h-[4.25rem] w-full max-w-3xl items-center px-5 sm:px-8">
          <Link href={firstLeadCampaign.path} className="text-base font-semibold tracking-tight text-[#1B2B4B]">
            {firstLeadCampaign.author}
          </Link>
        </div>
      </header>
      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto w-full max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6232]">
            {firstLeadCampaign.name}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#1B2B4B] sm:text-5xl">
            The free kit is ready.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#3d4556] sm:text-lg">
            Check your email for the delivery message. The PDF field guide and Excel workbook are in
            that email.
          </p>
          {downloads ? (
            <div className="mt-8 flex flex-col gap-3">
              <p className="text-sm leading-relaxed text-[#3d4556]">
                You can also download the files here. These links work for 7 days.
              </p>
              <a
                href={downloads.guide}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-base font-semibold text-white"
              >
                Download the PDF
              </a>
              <a
                href={downloads.workbook}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#1B2B4B] bg-white px-6 text-base font-semibold text-[#1B2B4B]"
              >
                Download the workbook
              </a>
            </div>
          ) : (
            <p className="mt-8 text-base leading-relaxed text-[#3d4556]">
              If the email is not there yet, request the kit again from the kit page.
            </p>
          )}
          <p className="mt-8">
            <Link
              href={firstLeadCampaign.path}
              className="text-sm font-semibold text-[#1B2B4B] underline underline-offset-4"
            >
              Request a fresh email
            </Link>
          </p>
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
