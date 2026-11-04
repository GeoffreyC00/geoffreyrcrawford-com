import { siteConfig } from "@/lib/site-config";

/**
 * Checkout stays disconnected while this page is under review.
 * The page does not read CHATGPT_WORKBOOK_CHECKOUT_URL and does not render a purchase link.
 * $19 is the planned one-time price. Do not add a crossed-out comparison price.
 */
export const CHATGPT_WORKBOOK_CHECKOUT_ENV = "CHATGPT_WORKBOOK_CHECKOUT_URL";

export const chatgptWorkbook = {
  name: "Your First 5 Things to Do With ChatGPT",
  priceLabel: "$19, one time",
  author: siteConfig.name,
  email: siteConfig.email,
  path: "/first-5-chatgpt-tasks",
  previousPath: "/chatgpt-workbook",
  sampleId: "sample-exercise",
} as const;

export const samplePrompt = `Rewrite this message so it is clear, polite, and short.

I am writing to my neighbor, Pat. I borrowed a ladder and cannot return it on Saturday because family is visiting. I can bring it Sunday afternoon.

Keep my facts. Do not add new offers or extra apologies. Give me one version under 60 words.

My draft:
Hey Pat — can't bring the ladder Saturday. Something came up. Maybe next week.`;

export const followUpPrompt = `Shorten that to two sentences. Keep the Sunday afternoon offer, and make the tone a little warmer.`;

export const exercises = [
  {
    n: "01",
    outcome: "Send a note you would actually send.",
    detail: "Rewrite an awkward message.",
  },
  {
    n: "02",
    outcome: "Decide what to do first tomorrow.",
    detail: "Sort a messy list.",
  },
  {
    n: "03",
    outcome: "Understand a confusing notice.",
    detail: "Get a plain-language summary and one question to ask a person.",
  },
  {
    n: "04",
    outcome: "Walk in with questions ready.",
    detail: "Prepare for an appointment.",
  },
  {
    n: "05",
    outcome: "Make dinner from food you already have.",
    detail: "Plan a simple meal.",
  },
] as const;

export const faqs = [
  {
    q: "What experience do I need?",
    a: "None. The sample is for someone who has never used ChatGPT, or who opened it and did not know what to type.",
  },
  {
    q: "What device do I need?",
    a: "A phone, tablet, or computer with a web browser. You can read the sample here and paste the prompt into ChatGPT on the same device.",
  },
  {
    q: "Do I need a paid ChatGPT account?",
    a: "No. OpenAI says the free version of ChatGPT is available to everyone. This sample uses ordinary text chat. If a chat says it is full, start a new chat and paste the prompt again.",
  },
  {
    q: "How do I open ChatGPT?",
    a: "Go to chatgpt.com, or open the official ChatGPT app, and start a new chat. This page does not sign you in.",
  },
  {
    q: "What should I leave out of the prompt?",
    a: "Leave out passwords, account numbers, and private medical or financial details. Read the reply before you send it. A clear reply can still be wrong.",
  },
] as const;
