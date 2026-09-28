import type { Metadata } from "next";
import Link from "next/link";
import { LandingFooter } from "@/components/first-lead-campaign/landing-footer";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

export const metadata: Metadata = {
  title: `Product notes · ${firstLeadCampaign.name}`,
  description:
    "What The First Lead Campaign Kit includes, how files are delivered, and what the purchase does not promise.",
  alternates: { canonical: firstLeadCampaign.policiesPath },
  robots: { index: false, follow: false },
};

export default function FirstLeadCampaignPoliciesPage() {
  return (
    <div className="min-h-screen bg-white text-[#141413]">
      <header className="border-b border-[#e4e1db]">
        <div className="mx-auto flex h-[4.25rem] w-full max-w-3xl items-center px-5 sm:px-8">
          <Link href={firstLeadCampaign.path} className="text-base font-semibold tracking-tight">
            {firstLeadCampaign.author}
          </Link>
        </div>
      </header>
      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Product notes</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{firstLeadCampaign.name}</h1>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-[#3f3c38]">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#141413]">Who you are buying from</h2>
              <p className="mt-3">
                {firstLeadCampaign.author}, {firstLeadCampaign.publisher}. Questions about the files:{" "}
                <a className="font-medium text-[#141413] underline underline-offset-4" href={`mailto:${firstLeadCampaign.email}`}>
                  {firstLeadCampaign.email}
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#141413]">What you receive</h2>
              <p className="mt-3">
                A PDF guide and an Excel workbook for building and submitting one Meta Ads lead
                campaign that uses an Instant Form. The price is {firstLeadCampaign.priceLabel}, paid
                once. Open the PDF first. The workbook opens in Excel and in Google Sheets.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#141413]">Payment and delivery</h2>
              <p className="mt-3">
                Card payment and the file download are handled by the checkout provider linked from
                the sales page. This site does not store your card number. The receipt email is how
                you get the files again. Read the refund terms on the checkout page before you pay.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#141413]">What the kit does not do</h2>
              <p className="mt-3">
                It does not approve your ads, manage your ad account, or promise leads, customers,
                or profit. Meta reviews the campaign after you submit it. The example business in
                the guide is fictional.
              </p>
            </section>
          </div>
          <p className="mt-12">
            <Link href={firstLeadCampaign.path} className="text-sm font-semibold underline underline-offset-4">
              Back to the kit
            </Link>
          </p>
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
