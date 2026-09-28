import Image from "next/image";
import { LandingFooter } from "@/components/first-lead-campaign/landing-footer";
import { LandingHeader } from "@/components/first-lead-campaign/landing-header";
import { PurchaseCta } from "@/components/first-lead-campaign/purchase-cta";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

const facts = [
  { label: "Who it’s for", value: "Owners of an established service business" },
  { label: "What you’ll build", value: "One Meta lead campaign with an Instant Form" },
  { label: "What you get", value: "A guided PDF and an editable workbook" },
] as const;

const steps = [
  {
    n: "1",
    title: "Choose one offer",
    body: "Pick the single service this campaign is allowed to ask about, who it is for, and the area you can actually serve.",
  },
  {
    n: "2",
    title: "Create two ads and an Instant Form",
    body: "Write two ways to open that same offer, then build one form with a few qualifying questions.",
  },
  {
    n: "3",
    title: "Check the campaign",
    body: "Match the offer, the ads, the service area, and the form. Then submit it for Meta’s review.",
  },
  {
    n: "4",
    title: "Prepare to follow up",
    body: "Decide who sees a new lead, and write the reply before the first one arrives.",
  },
] as const;

const ready = [
  "A service you already sell and can deliver",
  "Access to the business Facebook Page and ad account",
  "A payment method on that ad account",
  "A public privacy-policy link the form can open",
  "A person who will answer new leads",
] as const;

const forWhom = [
  "You already sell a service and can deliver it",
  "You will build and submit one Meta lead campaign yourself",
  "You will read the guide in order and write your answers in the workbook",
] as const;

const faqs = [
  {
    q: "How long does it take?",
    a: "Plan on one focused day if you already have the service, the Meta access, and someone who can respond to leads.",
  },
  {
    q: "What experience do I need?",
    a: "You do not need to have run Meta ads before. You do need to be able to get into the business Page and ad account, and to follow the steps in order.",
  },
  {
    q: "What files do I receive?",
    a: "A PDF guide and an Excel workbook. Open the PDF first. The workbook opens in Excel, or you can upload it to Google Drive and open it with Google Sheets.",
  },
  {
    q: "How does delivery work?",
    a: "After you pay, the checkout receipt delivers both files. Use that email when you need the download again. Read the refund terms on the checkout page before you pay.",
  },
  {
    q: "What does the kit not promise?",
    a: "It does not promise that Meta will approve the ads. It does not promise a number of leads, customers, or profit. The example business in the files is fictional.",
  },
] as const;

const workbookRows = [
  ["Service this campaign is for", "Your answer", "Central air replacement estimates for homeowners."],
  ["Offer sentence", "Your answer", "If your air conditioner is failing, request a replacement estimate. We reply to schedule a visit."],
  ["Who it is for", "Your answer", "Homeowners in the service area whose central air is failing."],
  ["What this campaign will not take", "Your answer", "Commercial rooftop bids, new construction, and overnight emergency calls."],
] as const;

export function SalesPage({ checkoutUrl }: { checkoutUrl: string | null }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#141413]" style={{ colorScheme: "light" }}>
      <LandingHeader checkoutUrl={checkoutUrl} />

      <main>
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">
                A $47 implementation kit
              </p>
              <h1 className="mt-4 max-w-xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Build your first Meta lead campaign.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3f3c38] sm:text-xl">
                For an owner of an established service business. You will set up one campaign in
                Ads Manager: two ads and an Instant Form. The kit is a guided PDF and a workbook
                you fill in as you go.
              </p>
              <dl className="mt-8 divide-y divide-[#e4e1db] border-y border-[#e4e1db]">
                {facts.map((fact) => (
                  <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                    <dt className="text-sm font-medium text-[#6b645c]">{fact.label}</dt>
                    <dd className="text-base font-medium leading-snug">{fact.value}</dd>
                  </div>
                ))}
                <div className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <dt className="text-sm font-medium text-[#6b645c]">Price</dt>
                  <dd className="text-base font-medium">{firstLeadCampaign.priceLabel}, paid once</dd>
                </div>
              </dl>
              <div className="mt-8">
                <PurchaseCta checkoutUrl={checkoutUrl} showStatus />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:items-end">
              <Image
                src="/images/photography/portrait-standing.jpg"
                alt="Geoffrey R. Crawford standing in a daylit studio"
                width={740}
                height={1024}
                priority
                className="h-auto w-full rounded-3xl object-cover object-top"
              />
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-2xl border border-[#e4e1db] bg-[#f6f5f2] shadow-[0_16px_40px_-24px_rgba(20,20,19,0.45)]">
                  <Image
                    src="/images/first-lead-campaign/guide-cover.png"
                    alt="Cover of The First Lead Campaign Kit PDF"
                    width={1041}
                    height={1347}
                    className="h-auto w-full"
                  />
                </figure>
                <p className="text-sm leading-relaxed text-[#5c564e]">
                  The guide you open first, next to the workbook you fill in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">The product</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A PDF you read. A workbook you complete.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3f3c38]">
              Open the guide and keep the workbook beside it. Each stage tells you what to do.
              The matching sheet is where you write your own offer, ads, form, and follow-up.
              Northline Heating &amp; Air, shown in the files, is a fictional example.
            </p>

            <div className="mt-10 grid min-w-0 gap-10">
              <figure className="min-w-0">
                <div className="mb-4 rounded-2xl border border-[#e4e1db] bg-white p-6 lg:hidden">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b645c]">From the guide</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">Work in order. Write as you go.</p>
                  <p className="mt-3 text-base leading-relaxed text-[#3f3c38]">
                    Keep this guide open beside the workbook. Each stage tells you what to do, shows
                    one fictional example, and ends with a line you can check off. Type your version
                    in the workbook column labeled Your answer.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#e4e1db] bg-white shadow-[0_18px_50px_-28px_rgba(20,20,19,0.5)]">
                  <Image
                    src="/images/first-lead-campaign/guide-how-to.png"
                    alt="Opening page of the guide: work in order and write in the workbook"
                    width={1469}
                    height={1293}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-[#3f3c38]">
                  Guide · how the PDF and workbook work together
                </figcaption>
              </figure>
              <figure className="min-w-0">
                <div className="mb-4 rounded-2xl border border-[#e4e1db] bg-white p-6 lg:hidden">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b645c]">From the guide</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">Check it, then submit.</p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-[#3f3c38]">
                    <li>The offer sentence matches the ad text, the image, and the form intro.</li>
                    <li>Both ads use the same Instant Form.</li>
                    <li>A person will see new-lead alerts.</li>
                    <li>The reply scripts are written.</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#e4e1db] bg-white shadow-[0_18px_50px_-28px_rgba(20,20,19,0.5)]">
                  <Image
                    src="/images/first-lead-campaign/guide-checks.png"
                    alt="Guide page with the checklist you complete before submitting the campaign"
                    width={1469}
                    height={1369}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-[#3f3c38]">
                  Guide · check the campaign, then submit
                </figcaption>
              </figure>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-[#e4e1db] bg-white">
              <div className="border-b border-[#e4e1db] px-5 py-5 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">
                  Workbook · sheet 01 Offer
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#3f3c38]">
                  You type in the middle column. The right column shows the fictional example so
                  you can see a finished decision before you write yours.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
                  <thead className="bg-[#141413] text-white">
                    <tr>
                      <th className="px-5 py-3 font-semibold sm:px-6">Field</th>
                      <th className="px-5 py-3 font-semibold sm:px-6">Your answer</th>
                      <th className="px-5 py-3 font-semibold sm:px-6">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workbookRows.map((row) => (
                      <tr key={row[0]} className="border-t border-[#e4e1db]">
                        <th className="px-5 py-4 align-top font-semibold sm:px-6">{row[0]}</th>
                        <td className="bg-[#fffdf8] px-5 py-4 align-top text-[#6b645c] sm:px-6">{row[1]}</td>
                        <td className="px-5 py-4 align-top leading-relaxed text-[#3f3c38] sm:px-6">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">The day</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Four steps. Then you submit.
            </h2>
            <ol className="mt-10 divide-y divide-[#e4e1db] border-y border-[#e4e1db]">
              {steps.map((step) => (
                <li key={step.n} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8">
                  <p className="text-3xl font-semibold tracking-tight text-[#141413]">{step.n}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[#3f3c38]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Who it’s for</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                You already sell the service.
              </h2>
              <ul className="mt-6 space-y-3 text-lg leading-snug">
                {forWhom.map((item) => (
                  <li key={item} className="border-t border-[#e4e1db] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[#3f3c38]">
                It is not a course, a community, or done-for-you ads. It stays on one service, and
                it does not set up a pixel or a website funnel.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Have this ready</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Before you start the day.
              </h2>
              <ul className="mt-6 space-y-3 text-lg leading-snug">
                {ready.map((item) => (
                  <li key={item} className="border-t border-[#e4e1db] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <Image
              src="/images/geoffrey-light.png"
              alt="Geoffrey R. Crawford"
              width={500}
              height={500}
              className="h-auto w-full max-w-xs rounded-3xl lg:max-w-none"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Meet Geoffrey</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {firstLeadCampaign.author}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-[#3f3c38]">
                <p>
                  Geoffrey is a growth marketing strategist with 8+ years in paid media, including
                  Meta Ads. He is the founder of {firstLeadCampaign.publisher} and holds Meta
                  Blueprint certification.
                </p>
                <p>
                  This kit is his setup guide for one local-service lead campaign. It is not an
                  endorsement by any client or employer. The example inside the files is fictional,
                  and it is not a report of results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Before you buy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A few direct answers</h2>
            <div className="mt-8 divide-y divide-[#e4e1db] border-y border-[#e4e1db]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      {item.q}
                      <span aria-hidden className="text-[#6b645c] group-open:hidden">
                        +
                      </span>
                      <span aria-hidden className="hidden text-[#6b645c] group-open:inline">
                        –
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3f3c38]">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-10">
              <PurchaseCta checkoutUrl={checkoutUrl} showStatus />
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4e1db] bg-white px-4 py-3 sm:hidden">
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
