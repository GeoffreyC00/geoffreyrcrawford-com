import Image from "next/image";
import { ExampleGenerator } from "@/components/first-lead-campaign/example-generator";
import { LandingFooter } from "@/components/first-lead-campaign/landing-footer";
import { LandingHeader } from "@/components/first-lead-campaign/landing-header";
import { PurchaseCta } from "@/components/first-lead-campaign/purchase-cta";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

const included = [
  {
    n: "01",
    title: "Step-by-step guide",
    body: "A PDF you follow in order: one offer, the area you can serve, two ads, one Instant Form, a test lead, and the reply.",
  },
  {
    n: "02",
    title: "Fill-in workbook",
    body: "Blank cells for your answers, with a fictional Northline Heating & Air example beside them. Opens in Excel or Google Sheets.",
  },
  {
    n: "03",
    title: "Prompts and a checklist",
    body: "Short prompts for the offer, the ads, and the reply, plus the checks to mark before you submit.",
  },
] as const;

const offerRows = [
  ["Service this campaign is for", "Central air replacement estimates for homeowners."],
  [
    "Offer sentence",
    "If your air conditioner is failing, request a replacement estimate. We reply to schedule a visit.",
  ],
  ["Who it is for", "Homeowners in the service area whose central air is failing."],
  [
    "What happens after they submit",
    "The office replies to schedule a visit. The form does not book the install.",
  ],
  [
    "What this campaign will not take",
    "Commercial rooftop bids, new construction, and overnight emergency calls.",
  ],
] as const;

const steps = [
  {
    n: "1",
    title: "Choose one offer",
    body: "Name the service, the customer, and the area you can actually serve.",
  },
  {
    n: "2",
    title: "Write two ads and one form",
    body: "Two ways to open that offer. Both use the same Instant Form.",
  },
  {
    n: "3",
    title: "Check it, then submit",
    body: "Match the offer, the area, the ads, and the form. Submit when the checks are yes.",
  },
  {
    n: "4",
    title: "Be ready to reply",
    body: "Decide who sees a new lead, and write the reply before one arrives.",
  },
] as const;

const forWhom = [
  "You already sell a local service and can deliver it",
  "You have not run Meta ads, and you will build this one campaign yourself",
] as const;

const ready = [
  "The business Facebook Page and ad account",
  "A payment method on that ad account",
  "A public privacy-policy link",
  "Someone who will answer new leads",
] as const;

const faqs = [
  {
    q: "How long does it take?",
    a: "Plan on one focused day if you already have the service, the Meta access, and someone who can respond to leads.",
  },
  {
    q: "What experience do I need?",
    a: "You do not need to have run Meta ads before. You do need to open the business Page and ad account, and follow the guide in order.",
  },
  {
    q: "What files do I receive?",
    a: "A PDF guide and an Excel workbook. Open the PDF first. The workbook opens in Excel, or you can upload it to Google Drive and open it in Google Sheets.",
  },
  {
    q: "How does delivery work?",
    a: "After you pay, the checkout receipt delivers both files. Use that email when you need them again. Read the refund terms on the checkout page before you pay.",
  },
  {
    q: "What does the kit not promise?",
    a: "It does not promise that Meta will approve the ads, or a number of leads, customers, or profit. Northline Heating & Air, the example in the files, is fictional.",
  },
] as const;

function HeroProducts() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-10">
      <figure className="mx-auto w-full max-w-[19rem] lg:max-w-none">
        <Image
          src="/images/first-lead-campaign/guide-first-page.png"
          alt="First page of the First Lead Campaign Kit guide"
          width={1275}
          height={1650}
          priority
          className="h-auto w-full rounded-sm shadow-[0_28px_60px_-32px_rgba(27,43,75,0.75)]"
        />
      </figure>

      <figure className="min-w-0 rounded-2xl border border-[#e4dccb] bg-white p-4 shadow-[0_18px_40px_-28px_rgba(23,32,51,0.35)] sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-sm font-semibold text-[#1B2B4B]">Workbook · 01 Offer</p>
          <p className="text-xs text-[#6b645c]">Your answers stay blank</p>
        </div>
        <ul className="mt-3 space-y-3 lg:hidden">
          {offerRows.map(([field, example]) => (
            <li key={field} className="overflow-hidden rounded-lg border border-[#e4dccb] text-sm leading-relaxed">
              <p className="bg-[#1B2B4B] px-3 py-2 font-semibold text-white">{field}</p>
              <div className="bg-[#fffaf2] px-3 py-3" aria-label="Blank. Your answer.">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a847c]">Your answer</p>
                <div className="mt-2 min-h-8" />
              </div>
              <p className="border-t border-[#e4dccb] bg-[#f3e6c8] px-3 py-3 text-[#3f3c38]">{example}</p>
            </li>
          ))}
        </ul>
        <div className="mt-3 hidden overflow-hidden rounded-lg border border-[#e4dccb] text-sm leading-relaxed lg:block">
          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(5.5rem,0.55fr)_minmax(0,1.35fr)] bg-[#1B2B4B] text-xs font-semibold text-white">
            <p className="px-3 py-2">Field</p>
            <p className="px-3 py-2">Your answer</p>
            <p className="px-3 py-2">Example — Northline, fictional</p>
          </div>
          {offerRows.map(([field, example]) => (
            <div
              key={field}
              className="grid grid-cols-[minmax(0,0.9fr)_minmax(5.5rem,0.55fr)_minmax(0,1.35fr)] border-t border-[#e4dccb]"
            >
              <p className="px-3 py-3 font-medium text-[#172033]">{field}</p>
              <p className="bg-[#fffaf2] px-3 py-3" aria-label="Blank. Your answer.">
                {"\u00a0"}
              </p>
              <p className="bg-[#f3e6c8] px-3 py-3 text-[#3f3c38]">{example}</p>
            </div>
          ))}
        </div>
      </figure>
    </div>
  );
}

export function SalesPage({ checkoutUrl }: { checkoutUrl: string | null }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f3ec] text-[#172033]" style={{ colorScheme: "light" }}>
      <LandingHeader checkoutUrl={checkoutUrl} />

      <main>
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6232]">
                For owners of an established local service business
              </p>
              <h1 className="mt-4 max-w-xl font-serif text-[2.7rem] font-medium leading-[0.98] tracking-tight text-balance text-[#1B2B4B] sm:text-6xl lg:text-7xl">
                Build one Meta lead campaign.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3d4556] sm:text-xl">
                A step-by-step playbook and a fill-in workbook. You set up one Leads campaign with
                an Instant Form.
              </p>
              <p className="mt-5 text-base font-semibold text-[#1B2B4B]">
                PDF guide + Excel workbook
                <span className="px-2 text-[#c4a36a]">·</span>
                {firstLeadCampaign.priceLabel}, paid once
              </p>
              <div className="mt-7">
                <PurchaseCta
                  checkoutUrl={checkoutUrl}
                  showStatus
                  className="w-full px-8 text-lg sm:w-auto sm:min-w-64"
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-14">
              <HeroProducts />
            </div>
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-14 text-white sm:px-8 sm:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">What’s in the kit</h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {included.map((item) => (
                <li key={item.n} className="border-t border-white/20 pt-5">
                  <p className="font-mono text-xs tracking-[0.16em] text-[#f3e6c8]">{item.n}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/80">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ExampleGenerator checkoutUrl={checkoutUrl} />

        <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:grid-cols-[14rem_1fr] sm:gap-12 lg:grid-cols-[16rem_1fr]">
            <Image
              src="/images/photography/portrait-standing.jpg"
              alt="Geoffrey R. Crawford"
              width={740}
              height={1024}
              className="h-auto w-44 rounded-2xl object-cover object-top sm:w-full"
            />
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
                I’m Geoffrey R. Crawford.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3d4556] sm:text-xl">
                For more than eight years, I’ve managed paid acquisition across Meta, Google, Amazon,
                and other platforms. My work spans lead generation and e-commerce, including
                campaigns with multimillion-dollar media budgets. I built this kit to turn that
                hands-on experience into a clear starting point for a local service business’s first
                Meta lead campaign.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="max-w-xl font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
              A look at the files
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3d4556] sm:text-lg">
              The guide’s example business is fictional. Your workbook cells stay blank until you
              write in them.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#e4dccb] bg-white p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1B2B4B]">
                  Guide · 01 Offer
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#1B2B4B]">
                  Choose one offer.
                </h3>
                <div className="mt-5 rounded-xl bg-[#f3e6c8] px-4 py-4 text-[#3f3c38]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a6232]">
                    Northline · fictional
                  </p>
                  <p className="mt-2 text-base leading-relaxed sm:text-lg">
                    If your air conditioner is failing, request a replacement estimate. We reply to
                    schedule a visit.
                  </p>
                </div>
              </article>
              <article className="rounded-2xl border border-[#e4dccb] bg-white p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1B2B4B]">
                  Guide · two ways to open it
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#1B2B4B]">
                  Same offer. Two openings.
                </h3>
                <ul className="mt-5 space-y-3 text-base leading-relaxed text-[#3d4556]">
                  <li className="rounded-xl bg-[#f6f3ec] px-4 py-3">
                    <span className="font-semibold text-[#1B2B4B]">A. </span>
                    If the upstairs is warm and the downstairs is fine, it may be time to talk about
                    a replacement.
                  </li>
                  <li className="rounded-xl bg-[#f6f3ec] px-4 py-3">
                    <span className="font-semibold text-[#1B2B4B]">B. </span>
                    Request an estimate. We reply during business hours to see if a visit makes
                    sense.
                  </li>
                </ul>
                <p className="mt-4 text-sm text-[#6b645c]">
                  Illustrations from the guide. Not results from a real campaign.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dccb] bg-white px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
              Four steps. Then you submit.
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <li key={step.n} className="rounded-2xl bg-[#f6f3ec] p-6">
                  <p className="font-serif text-3xl font-medium text-[#c4a36a]">{step.n}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#3d4556]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
                Who it’s for
              </h2>
              <ul className="mt-6 space-y-3 text-lg leading-snug">
                {forWhom.map((item) => (
                  <li key={item} className="border-t border-[#e4dccb] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-relaxed text-[#3d4556]">
                One campaign. You build it. This is not a course, and it is not done-for-you ads.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
                What to have ready
              </h2>
              <ul className="mt-6 space-y-3 text-lg leading-snug">
                {ready.map((item) => (
                  <li key={item} className="border-t border-[#e4dccb] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
              Before you buy
            </h2>
            <div className="mt-6 divide-y divide-[#e4dccb] border-y border-[#e4dccb]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      {item.q}
                      <span aria-hidden className="text-[#8a6232] group-open:hidden">
                        +
                      </span>
                      <span aria-hidden className="hidden text-[#8a6232] group-open:inline">
                        –
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3d4556]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f3e6c8]">
              {firstLeadCampaign.name}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              One campaign. A guide and a workbook.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              {firstLeadCampaign.priceLabel}, paid once. PDF and Excel file.
            </p>
            <div className="mt-8 flex justify-center">
              <PurchaseCta
                checkoutUrl={checkoutUrl}
                showStatus
                onDark
                className="min-w-64 px-8 text-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4dccb] bg-[#f6f3ec] px-4 py-3 sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">{firstLeadCampaign.priceLabel}</p>
            <p className="text-xs text-[#5c564e]">{checkoutUrl ? "PDF and workbook" : "Not connected yet"}</p>
          </div>
          <PurchaseCta checkoutUrl={checkoutUrl} />
        </div>
      </div>

      <LandingFooter clearance />
    </div>
  );
}
