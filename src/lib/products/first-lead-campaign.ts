import { siteConfig } from "@/lib/site-config";

/** Server-only. Leave unset until the real Gumroad checkout URL exists. */
export const FIRST_LEAD_CAMPAIGN_CHECKOUT_ENV = "FIRST_LEAD_CAMPAIGN_CHECKOUT_URL";

export const firstLeadCampaign = {
  name: "The First Lead Campaign Kit",
  price: 47,
  priceLabel: "$47",
  publisher: "Crawford Creative Ventures",
  author: siteConfig.name,
  email: siteConfig.email,
  path: "/first-lead-campaign",
  policiesPath: "/first-lead-campaign/policies",
} as const;

const BLOCKED_HOSTS = new Set(["localhost", "example.com", "example.org", "example.net"]);

/**
 * Returns the Gumroad checkout URL only when it is a real https link.
 * Placeholder, localhost, and empty values keep the purchase button off.
 */
export function getFirstLeadCampaignCheckoutUrl(): string | null {
  const raw = process.env[FIRST_LEAD_CAMPAIGN_CHECKOUT_ENV]?.trim() ?? "";
  if (!raw) return null;

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return null;
  }

  if (parsed.protocol !== "https:") return null;

  const host = parsed.hostname.toLowerCase();
  if (BLOCKED_HOSTS.has(host) || host.endsWith(".local") || host.endsWith(".example")) {
    return null;
  }

  if (/placeholder|your-?link|changeme|todo|xxxx/i.test(`${parsed.hostname}${parsed.pathname}`)) {
    return null;
  }

  return parsed.toString();
}

export const kitStages = [
  {
    n: "01",
    title: "One offer",
    detail: "Choose the single service this campaign is allowed to ask about.",
  },
  {
    n: "02",
    title: "Customer and service area",
    detail: "Name who the ad is for and the area you can actually serve.",
  },
  {
    n: "03",
    title: "Two ad concepts",
    detail: "Write two ways to open the same offer. Not two campaigns.",
  },
  {
    n: "04",
    title: "Copy and creative",
    detail: "Prepare the text and the image or video you will upload.",
  },
  {
    n: "05",
    title: "Campaign setup",
    detail: "Build one Leads campaign, one ad set, and two ads in Ads Manager.",
  },
  {
    n: "06",
    title: "Instant Form",
    detail: "Add a few qualifying questions and a thank-you screen that is true.",
  },
  {
    n: "07",
    title: "Notifications and follow-up",
    detail: "Decide who hears about a new lead and what they say first.",
  },
  {
    n: "08",
    title: "Pre-launch checks",
    detail: "Match the offer, the ads, the area, and the form before you submit.",
  },
  {
    n: "09",
    title: "After you submit",
    detail: "Read the review status and record what the first leads actually are.",
  },
] as const;

export const included = [
  {
    title: "The guide",
    body: "A PDF you read in order. Each stage has plain steps, one fictional example, mistakes to avoid, and a done-when line.",
  },
  {
    title: "The workbook",
    body: "An Excel file. Open it in Excel, or upload it to Google Drive and open it with Google Sheets. Your decisions go here.",
  },
  {
    title: "Short AI prompts",
    body: "Paste-ready prompts inside the stages where a draft helps. You edit the result before it goes into an ad.",
  },
] as const;

export const dayPlan = [
  {
    when: "First",
    title: "Decide",
    body: "Lock one offer, one customer, and one service area. Draft two ad concepts from that offer.",
  },
  {
    when: "Then",
    title: "Build",
    body: "Prepare the copy and creative. Set up the campaign, the Instant Form, and the lead alert.",
  },
  {
    when: "Last",
    title: "Submit",
    body: "Run the checklist, submit the campaign, and use the workbook to record what Meta and the leads actually do.",
  },
] as const;

export const notIncluded = [
  "A promise that Meta will approve the ads",
  "A promised number of leads, customers, or profit",
  "Pixel setup or a website funnel",
  "A second campaign, a community, or ad management",
  "Done-for-you access to your ad account",
] as const;

export const faqs = [
  {
    q: "Is this a course?",
    a: "No. It is a guide and a workbook for one campaign. The work is set up so you can finish it in one focused day if you already have the service, the Meta access, and a way to answer leads.",
  },
  {
    q: "Do I need a website or a pixel?",
    a: "No. The Instant Form collects the lead on Facebook and Instagram. Meta still asks for a privacy-policy link the form can open. This kit does not install a pixel or build a landing page.",
  },
  {
    q: "Will my campaign be approved?",
    a: "Meta reviews the ads after you submit them. This kit cannot approve a campaign, and it does not tell you that the ads will run.",
  },
  {
    q: "How many leads will I get?",
    a: "None are promised. The kit helps you build and submit one campaign, then record spend, leads, and whether those leads match the job you asked for.",
  },
  {
    q: "What do I need before I start?",
    a: "An established service you can deliver, access to that business’s Facebook Page and ad account, a payment method on the ad account, a privacy-policy URL, and a person who will respond to new leads.",
  },
  {
    q: "What files will I receive?",
    a: "A PDF guide and an Excel workbook. Open the PDF first. The workbook works in Excel and in Google Sheets.",
  },
  {
    q: "Can I advertise more than one service?",
    a: "Not in this campaign. The steps keep you on one offer. A second offer is a different campaign, and it is outside this kit.",
  },
  {
    q: "Do you build the campaign for me?",
    a: "No. You build it in your own Ads Manager. Questions about the files can go to the contact address in the footer.",
  },
  {
    q: "How do I get the files again?",
    a: "The checkout receipt delivers them. Use that email when you need the download again. Read the refund terms on the checkout page before you pay.",
  },
] as const;
