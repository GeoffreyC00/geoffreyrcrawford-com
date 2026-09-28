import Image from "next/image";
import { LandingFooter } from "@/components/first-lead-campaign/landing-footer";
import { LandingHeader } from "@/components/first-lead-campaign/landing-header";
import { PurchaseCta } from "@/components/first-lead-campaign/purchase-cta";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

const included = [
  {
    title: "Step-by-step guide",
    body: "A PDF that walks you through one campaign in order.",
  },
  {
    title: "Editable campaign workbook",
    body: "Write your offer, ads, form, and follow-up. Opens in Excel or Google Sheets.",
  },
  {
    title: "Practical prompts and checklists",
    body: "Short prompts where a draft helps, and a checklist before you submit.",
  },
] as const;

const steps = [
  {
    n: "1",
    title: "Choose one offer",
    body: "Pick the single service, the customer, and the area you can serve.",
  },
  {
    n: "2",
    title: "Create two ads and an Instant Form",
    body: "Write two ways to open that offer, then add a few qualifying questions.",
  },
  {
    n: "3",
    title: "Check the campaign",
    body: "Match the offer, the ads, the area, and the form. Then submit it.",
  },
  {
    n: "4",
    title: "Prepare to follow up",
    body: "Decide who sees a new lead, and write the reply before one arrives.",
  },
] as const;

const forWhom = [
  "You already sell a service and can deliver it",
  "You will build and submit this one campaign yourself",
] as const;

const ready = [
  "Access to the business Facebook Page and ad account",
  "A payment method on that ad account",
  "A public privacy-policy link",
  "A person who will answer new leads",
] as const;

const faqs = [
  {
    q: "How long does it take?",
    a: "Plan on one focused day if you already have the service, the Meta access, and someone who can respond to leads.",
  },
  {
    q: "What experience do I need?",
    a: "You do not need to have run Meta ads before. You do need to get into the business Page and ad account, and follow the steps in order.",
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
    a: "It does not promise that Meta will approve the ads, or a number of leads, customers, or profit. The example business in the files is fictional.",
  },
] as const;

export function SalesPage({ checkoutUrl }: { checkoutUrl: string | null }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#141413]" style={{ colorScheme: "light" }}>
      <LandingHeader checkoutUrl={checkoutUrl} />

      <main>
        <section className="px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">
                For service-business owners
              </p>
              <h1 className="mt-4 max-w-xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Build one Meta lead campaign.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3f3c38] sm:text-xl">
                A guided PDF and an editable workbook. You set up one campaign: two ads and an
                Instant Form.
              </p>
              <p className="mt-6 text-lg font-semibold">{firstLeadCampaign.priceLabel}, paid once</p>
              <div className="mt-6">
                <PurchaseCta checkoutUrl={checkoutUrl} showStatus />
              </div>
            </div>
            <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e4e1db] bg-[#f6f5f2] shadow-[0_20px_50px_-28px_rgba(20,20,19,0.45)]">
              <Image
                src="/images/first-lead-campaign/guide-cover.png"
                alt="Cover of The First Lead Campaign Kit"
                width={1041}
                height={1347}
                priority
                className="h-auto w-full"
              />
            </figure>
          </div>
        </section>

        <section className="bg-[#f6f5f2] px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">What’s in the kit</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {included.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#3f3c38]">{item.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
              <figure className="min-w-0">
                <div className="max-h-56 overflow-hidden rounded-2xl border border-[#e4e1db] bg-white shadow-[0_18px_40px_-28px_rgba(20,20,19,0.45)] sm:max-h-64">
                  <Image
                    src="/images/first-lead-campaign/guide-how-to.png"
                    alt="Opening of the guide: Work in order. Write as you go."
                    width={1469}
                    height={1293}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-[#3f3c38]">
                  One page from the guide
                </figcaption>
              </figure>
              <div className="rounded-2xl border border-[#e4e1db] bg-white p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">
                  Workbook preview
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Offer sentence</h3>
                <p className="mt-2 text-base text-[#6b645c]">Your answer stays blank until you write it.</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">
                  Example
                </p>
                <p className="mt-2 text-lg leading-relaxed text-[#3f3c38]">
                  If your air conditioner is failing, request a replacement estimate. We reply to
                  schedule a visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Four steps. Then you submit.</h2>
            <ol className="mt-8 divide-y divide-[#e4e1db] border-y border-[#e4e1db]">
              {steps.map((step) => (
                <li key={step.n} className="grid gap-2 py-6 sm:grid-cols-[3.5rem_1fr] sm:items-baseline sm:gap-6">
                  <p className="text-2xl font-semibold tracking-tight">{step.n}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-1 max-w-2xl text-base leading-relaxed text-[#3f3c38] sm:text-lg">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#f6f5f2] px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Who it’s for</h2>
              <ul className="mt-6 space-y-3 text-lg leading-snug">
                {forWhom.map((item) => (
                  <li key={item} className="border-t border-[#e4e1db] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-relaxed text-[#3f3c38]">
                One campaign. Not a course, and not done-for-you ads.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What to have ready</h2>
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

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10">
            <Image
              src="/images/photography/portrait-standing.jpg"
              alt="Geoffrey R. Crawford"
              width={740}
              height={1024}
              className="h-auto w-36 rounded-2xl object-cover object-top sm:w-full"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b645c]">Meet Geoffrey</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{firstLeadCampaign.author}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3f3c38]">
                Geoffrey is a growth marketing strategist with 8+ years in paid media, including Meta
                Ads, and the founder of {firstLeadCampaign.publisher}. This kit is his guide for
                building one lead campaign.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Before you buy</h2>
            <div className="mt-6 divide-y divide-[#e4e1db] border-y border-[#e4e1db]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-4">
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
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Build one lead campaign.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              A guided PDF and an editable workbook. {firstLeadCampaign.priceLabel}, paid once.
            </p>
            <div className="mt-8 flex justify-center">
              <PurchaseCta checkoutUrl={checkoutUrl} showStatus onDark />
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
