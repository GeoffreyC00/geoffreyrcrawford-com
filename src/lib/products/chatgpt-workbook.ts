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
    outcome: "A message you would actually send",
    detail: "Rewrite a tricky note to a neighbor, a friend, or a coworker.",
  },
  {
    n: "02",
    outcome: "A messy list, sorted",
    detail: "Turn a pile of tasks into what to do first tomorrow.",
  },
  {
    n: "03",
    outcome: "A confusing notice, in plain language",
    detail: "See what it says, and the one question to ask a person.",
  },
  {
    n: "04",
    outcome: "Questions ready for an appointment",
    detail: "Walk in with a short list instead of trying to remember.",
  },
  {
    n: "05",
    outcome: "Dinner from food you already have",
    detail: "Plan a meal without a new grocery trip.",
  },
] as const;

export const chatGptWebUrl = "https://chatgpt.com/";
export const chatGptIosUrl = "https://apps.apple.com/app/openai-chatgpt/id6448311069";
export const chatGptAndroidUrl = "https://play.google.com/store/apps/details?id=com.openai.chatgpt";

export const faqs = [
  {
    q: "What experience do I need?",
    a: "None. This is for someone who keeps hearing about ChatGPT and has not downloaded it, opened it, or typed a question.",
  },
  {
    q: "Do I need a paid account?",
    a: "No. OpenAI says ChatGPT is free to use. The free plan is for anyone who signs up for an account. This example uses ordinary text chat. Limits can change. If a chat says it is full, start a new chat and paste the example text again.",
  },
  {
    q: "Do I need the app?",
    a: "No. A phone browser is enough. Open chatgpt.com, or tap Open ChatGPT on this page. The official app is optional.",
  },
  {
    q: "What should I leave out?",
    a: "Leave out passwords, account numbers, and private medical or financial details. Read the reply before you use it. A clear reply can still be wrong.",
  },
  {
    q: "Can I buy the workbook yet?",
    a: "Not from this page. Checkout isn’t open yet. The planned price is $19, one time.",
  },
] as const;
