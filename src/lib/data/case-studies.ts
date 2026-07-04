export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  image?: { src: string; alt: string };
  tags: string[];
  summary: string;
  challenge: string;
  role: string;
  strategy: string[];
  platforms: string[];
  skills: string[];
  outcomes: string[];
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-ecommerce-growth",
    title: "Enterprise Ecommerce Growth",
    subtitle: "Multi-channel paid media architecture for a high-volume retailer",
    category: "eCommerce",
    featured: true,
    image: {
      src: "/images/photography/collaboration-mastermind.jpg",
      alt: "Geoffrey R. Crawford reviewing strategy in a working session",
    },
    tags: ["Google Ads", "Amazon Ads", "Microsoft Ads", "ROAS", "Shopping"],
    summary:
      "Built and scaled cross-platform paid acquisition for a large ecommerce retailer — designing campaign architecture across Search, Shopping, and marketplace channels that supported millions in annual revenue.",
    challenge:
      "A high-volume ecommerce business needed a paid media program that could scale efficiently across seasonal demand swings — without ballooning wasted spend or losing visibility into what was actually driving revenue. Campaigns were fragmented across platforms with inconsistent structure and limited attribution.",
    role:
      "I owned paid media strategy and execution end-to-end — account architecture, budget allocation, bidding strategy, and the reporting layer that connected spend to revenue across Google, Amazon, and Microsoft.",
    strategy: [
      "Rebuilt account structure around product margin and intent — Search, Shopping, and Performance Max mapped to clear priorities",
      "Developed a cross-channel budget allocation model based on marginal return, not flat splits",
      "Layered Amazon Sponsored Products and Brands to capture marketplace demand alongside owned site traffic",
      "Added Microsoft Ads for incremental, lower-CPC search coverage",
      "Built revenue-connected reporting so spend decisions were tied to outcomes, not platform vanity metrics",
    ],
    platforms: ["Google Ads", "Amazon Ads", "Microsoft Ads", "Google Shopping", "GA4", "Looker Studio"],
    skills: [
      "Campaign architecture",
      "Budget allocation",
      "ROAS optimization",
      "Marketplace advertising",
      "Analytics & reporting",
    ],
    outcomes: [
      "Supported millions in annual ecommerce revenue through paid channels",
      "Managed six-figure quarterly advertising budgets across platforms",
      "Built scalable account structures that held up through seasonal peaks",
      "Improved spend efficiency by reducing overlap and wasted budget",
    ],
    metrics: [
      { value: "$1M+", label: "Quarterly revenue supported" },
      { value: "3", label: "Ad platforms unified" },
      { value: "Seasonal", label: "Scaling without efficiency loss" },
    ],
  },
  {
    slug: "scaling-creator-businesses",
    title: "Scaling Creator & Education Businesses",
    subtitle: "Paid acquisition for digital products, webinars, and live events",
    category: "Creator Economy & Digital Products",
    featured: true,
    image: {
      src: "/images/photography/speaking-whiteboard.jpg",
      alt: "Geoffrey R. Crawford teaching marketing strategy at a whiteboard",
    },
    tags: ["YouTube Ads", "Meta Ads", "Funnels", "Webinars", "Creative Testing"],
    summary:
      "Drove paid acquisition for a leading creator-led education brand — scaling webinar registrations, digital product sales, and live event attendance through YouTube and Meta with a high-velocity creative testing system.",
    challenge:
      "A creator-led education business needed to scale paid acquisition across a complex offer stack — webinars, digital products, and live events — without sacrificing efficiency. Creative burned out fast, and the team needed a system that could keep testing and learning at pace.",
    role:
      "I led paid media across YouTube and Meta — campaign strategy, audience structure, and the creative testing framework that fed the funnel, working closely with the creative and content teams.",
    strategy: [
      "Structured YouTube and Meta campaigns across cold, warm, and retargeting stages mapped to the funnel",
      "Built a creative testing framework to iterate on hooks, formats, and angles at high velocity",
      "Optimized webinar and product funnels from ad click through registration and purchase",
      "Connected ad spend to downstream revenue and LTV for clearer scaling decisions",
      "Partnered with creative teams to turn performance data into the next round of concepts",
    ],
    platforms: ["YouTube Ads", "Meta Ads", "GA4", "Landing page tooling", "Google Tag Manager"],
    skills: [
      "Full-funnel paid media",
      "Creative strategy & testing",
      "Funnel optimization",
      "Cross-functional collaboration",
      "Performance reporting",
    ],
    outcomes: [
      "Scaled lead volume for webinars and digital product launches",
      "Increased creative testing velocity and iteration speed",
      "Improved funnel visibility from ad click through conversion",
      "Supported launches and live events with reliable paid demand",
    ],
    metrics: [
      { value: "YouTube + Meta", label: "Primary growth channels" },
      { value: "High-velocity", label: "Creative testing system" },
      { value: "Full-funnel", label: "Acquisition to conversion" },
    ],
  },
  {
    slug: "b2b-lead-generation",
    title: "B2B Lead Generation & Demand",
    subtitle: "Long-term paid search program balancing leads and ecommerce",
    category: "B2B",
    featured: true,
    image: {
      src: "/images/photography/collaboration-meeting.jpg",
      alt: "Geoffrey R. Crawford in a client working session",
    },
    tags: ["Google Ads", "Microsoft Ads", "Lead Gen", "Attribution", "Reporting"],
    summary:
      "Ran a sustained B2B paid search program for a specialized supplier — generating qualified leads while supporting ecommerce revenue, with the reporting and account management to back long-term strategic decisions.",
    challenge:
      "A B2B supplier needed a paid search program that could generate qualified leads and support ecommerce revenue at the same time — with transparent reporting a stakeholder could actually act on, sustained over a multi-year relationship.",
    role:
      "I served as the paid media lead and strategic partner — managing Google and Microsoft Ads, building conversion tracking, and delivering the reporting cadence that guided budget and strategy decisions.",
    strategy: [
      "Structured Google Ads across Search, Shopping, and Display for both lead-gen and ecommerce goals",
      "Built Microsoft Ads campaigns for incremental B2B search volume at efficient CPCs",
      "Implemented conversion tracking and attribution to separate qualified leads from noise",
      "Delivered a regular reporting cadence with clear, actionable recommendations",
      "Managed budgets at the portfolio level, reallocating toward what produced pipeline",
    ],
    platforms: ["Google Ads", "Microsoft Ads", "GA4", "Google Tag Manager", "CRM integration"],
    skills: [
      "B2B demand generation",
      "Attribution & tracking",
      "Strategic account management",
      "Performance reporting",
      "Budget optimization",
    ],
    outcomes: [
      "Generated qualified B2B leads through optimized search programs",
      "Balanced lead-gen and ecommerce objectives in one account structure",
      "Improved attribution visibility into what produced pipeline",
      "Sustained a multi-year partnership built on transparent reporting",
    ],
    metrics: [
      { value: "Multi-year", label: "Strategic engagement" },
      { value: "B2B + eComm", label: "Dual objectives" },
      { value: "Clear", label: "Attribution & reporting" },
    ],
  },
  {
    slug: "ai-marketing-systems",
    title: "AI Marketing Intelligence Platform",
    subtitle: "An AI-powered marketing operating system — dashboards, automation, and executive intelligence",
    category: "Analytics & Automation",
    featured: true,
    image: {
      src: "/images/photography/production-camera.jpg",
      alt: "Geoffrey R. Crawford operating a cinema camera on set",
    },
    tags: ["GA4", "Looker Studio", "Automation", "AI Workflows", "Reporting"],
    summary:
      "Built the reporting systems, dashboards, and AI-assisted workflows that make marketing faster — turning scattered platform data into decisions and reducing the manual work between spend and insight.",
    challenge:
      "Marketing data lived in too many places. Pulling a clear answer to \"what's working?\" took days of manual exporting and spreadsheet wrangling — slowing decisions and hiding where budget was being wasted.",
    role:
      "I designed and built the analytics and automation layer — reporting dashboards, data connections, and AI-assisted workflows that compressed reporting time and surfaced the metrics that actually drive decisions.",
    strategy: [
      "Centralized cross-platform spend and performance data into clear, revenue-connected dashboards",
      "Automated recurring reporting pulls to eliminate manual exports",
      "Built AI-assisted workflows for summarizing performance and drafting recommendations",
      "Standardized naming and tracking so attribution stayed clean as accounts scaled",
      "Designed reporting around the questions stakeholders actually ask",
    ],
    platforms: ["GA4", "Looker Studio", "Google Tag Manager", "Google Sheets API", "Next.js", "AI tooling"],
    skills: [
      "Marketing analytics",
      "Dashboard design",
      "Marketing automation",
      "AI workflow development",
      "Attribution",
    ],
    outcomes: [
      "Built scalable reporting systems used to guide spend decisions",
      "Reduced manual reporting time through automation",
      "Improved attribution visibility across channels",
      "Created repeatable systems the work could scale on",
    ],
    metrics: [
      { value: "Hours → minutes", label: "Reporting time reduced" },
      { value: "Unified", label: "Cross-platform data" },
      { value: "AI-assisted", label: "Insight workflows" },
    ],
  },
  {
    slug: "performance-creative-video",
    title: "Performance Creative & Video Marketing",
    subtitle: "Creative strategy and video built to perform, not just look good",
    category: "Creative & Video",
    featured: false,
    tags: ["YouTube", "Creative Testing", "Video Strategy", "Packaging"],
    summary:
      "Developed performance-focused creative and video strategy — from ad concepts and testing frameworks to content packaging that grew audiences and improved paid social and YouTube results.",
    challenge:
      "On YouTube and paid social, creative is the lever — but most creative is made on instinct, not feedback. The need was a repeatable way to produce, test, and learn from creative that actually moved performance.",
    role:
      "I owned creative strategy for performance — defining testing frameworks, advising on packaging and hooks, and translating performance data into the next round of concepts.",
    strategy: [
      "Built testing frameworks for hooks, formats, and messaging tied to performance data",
      "Advised on video packaging — titles, thumbnails, and openings optimized for retention and click-through",
      "Developed storytelling structures for serial content and audience growth",
      "Used analytics to inform creative direction and publishing cadence",
      "Closed the loop between performance and the next creative iteration",
    ],
    platforms: ["YouTube", "Meta Ads", "YouTube Analytics", "Creative tooling"],
    skills: [
      "Creative strategy",
      "Video marketing",
      "Creative testing",
      "Audience growth",
      "Content packaging",
    ],
    outcomes: [
      "Grew audiences through strategic content and packaging",
      "Improved paid social and video creative performance",
      "Built repeatable frameworks for creative ideation and testing",
      "Strengthened the link between creative quality and results",
    ],
    metrics: [
      { value: "Data-driven", label: "Creative testing" },
      { value: "Retention-first", label: "Video packaging" },
      { value: "Repeatable", label: "Ideation frameworks" },
    ],
  },
  {
    slug: "full-funnel-web-cro",
    title: "Full-Funnel Web & Conversion Systems",
    subtitle: "Websites and landing pages designed to convert",
    category: "Web & CRO",
    featured: false,
    tags: ["Web Design", "CRO", "Landing Pages", "UX", "Launch"],
    summary:
      "Designed and shipped websites and landing pages built around conversion — clear structure, mobile-first UX, and a direct path from visitor to contact, taken from concept through launch.",
    challenge:
      "A business needed a professional web presence that worked flawlessly on mobile and made it effortless for visitors to take the next step — not a template that looked fine but converted poorly.",
    role:
      "I led the project end-to-end — information architecture, design, content structure, and launch — with conversion as the guiding constraint at every step.",
    strategy: [
      "Designed a mobile-first site with a clear content hierarchy and conversion path",
      "Structured content around how visitors actually decide and what they need to see",
      "Optimized UX for contact, inquiry, and conversion actions",
      "Built a clean, maintainable structure that could scale with the business",
      "Managed the project from concept through launch and deployment",
    ],
    platforms: ["Next.js / Web", "Responsive design", "Landing page tooling", "Analytics"],
    skills: [
      "Conversion optimization",
      "Web design & UX",
      "Information architecture",
      "Project management",
      "Launch & deployment",
    ],
    outcomes: [
      "Launched polished, mobile-optimized web experiences",
      "Improved the path from visitor to contact",
      "Delivered complete projects from strategy through launch",
      "Built maintainable structures that scale with the business",
    ],
    metrics: [
      { value: "Mobile-first", label: "Designed for how people browse" },
      { value: "Concept → launch", label: "Owned end-to-end" },
      { value: "Conversion-led", label: "Every decision" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((s) => s.featured);
export const supportingCaseStudies = caseStudies.filter((s) => !s.featured);
