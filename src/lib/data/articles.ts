export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "marketing-systems-not-campaigns",
    title: "Marketing Systems, Not Just Campaigns",
    description:
      "Why the best growth operators build infrastructure — reporting, funnels, automation — alongside paid media, and what that means for businesses hiring marketing talent.",
    category: "Marketing Systems",
    publishedAt: "2026-06-25",
    readTime: "6 min read",
    content: [
      "Most businesses don't have a paid media problem. They have a systems problem.",
      "They run campaigns. They get clicks. They might even get leads. But when someone asks \"what's actually working?\" — the answer takes three days, four spreadsheets, and a guess.",
      "That's the gap between a media buyer and a growth operator.",
      "## What a marketing system actually is",
      "A marketing system is the infrastructure that connects attention to revenue. It's not one tool or one channel. It's how your paid media, landing pages, analytics, reporting, and follow-up workflows fit together.",
      "When the system works, you can answer questions like:",
      "- Which campaigns drove revenue last month — not just clicks?",
      "- Where are people dropping off between ad click and purchase?",
      "- What creative angles are worth scaling vs. killing?",
      "- How much can we increase spend before ROAS degrades?",
      "Without a system, you're optimizing in the dark. You might hit a good month. You won't know how to repeat it.",
      "## Paid media is only one layer",
      "I've managed up to $200K+ in monthly ad spend across Google, Meta, YouTube, Amazon, and Microsoft Ads. Campaign architecture matters. Budget allocation matters. Creative testing matters.",
      "But the accounts that perform best long-term aren't the ones with the most aggressive bidding — they're the ones with the clearest feedback loops.",
      "That means:",
      "**Reporting that ties spend to outcomes.** Not vanity dashboards. Revenue-connected views that stakeholders actually use.",
      "**Funnels built for conversion.** Landing pages, offer sequencing, and lead capture designed around how people actually decide — not how slides look in a deck.",
      "**AI and automation where they save time.** Automated reporting pulls, intake workflows, creative iteration support — not AI for the sake of AI.",
      "**Content and creative that compounds.** Especially on YouTube and Meta, creative quality is the lever. Systems help you test faster and learn sooner.",
      "## What this means if you're hiring",
      "If you're a recruiter or hiring manager evaluating growth marketing candidates, look past platform certifications.",
      "Ask:",
      "- Have they built reporting that changed how a team made decisions?",
      "- Can they explain campaign structure — not just metrics?",
      "- Do they understand funnels end-to-end, or only the ad platform?",
      "- Have they worked inside real budgets with real accountability?",
      "The best growth operators aren't trying to be agencies. They're embedded problem-solvers who can think strategically and execute directly.",
      "## What this means if you're a business owner",
      "If you're a founder, creator, or operator looking for marketing help, you probably don't need another generic agency pitch.",
      "You need someone who can:",
      "- Audit where you are honestly",
      "- Fix the highest-leverage gaps first",
      "- Build systems that outlast any single campaign",
      "- Report in plain language tied to revenue",
      "That's the work I do — across brands like Think Media, PoolSupplies.com, and VoIP Supply, and with local businesses that need a real web presence, not just ads.",
      "## The bottom line",
      "Campaigns start and stop. Systems compound.",
      "If you're serious about growth, invest in the operator who builds both — paid media execution and the infrastructure that makes it sustainable.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
