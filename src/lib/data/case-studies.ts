export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  tags: string[];
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
  focus: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "think-media",
    title: "Think Media",
    subtitle: "YouTube & Meta paid media for a digital education brand",
    category: "Digital Products",
    featured: true,
    tags: ["Paid Media", "YouTube Ads", "Meta Ads", "Funnels", "Lead Generation"],
    summary:
      "Paid media strategy and execution for one of the largest YouTube education brands — driving leads and revenue for digital products through multi-channel campaigns and rigorous creative testing.",
    challenge:
      "Think Media needed scalable paid acquisition across YouTube and Meta to drive webinar registrations, product sales, and funnel conversions — while maintaining efficiency across a complex offer stack and high creative velocity.",
    approach: [
      "Built and managed YouTube and Meta campaigns targeting cold and warm audiences across multiple funnel stages",
      "Developed creative testing frameworks to iterate on hooks, formats, and messaging at scale",
      "Optimized lead generation funnels from ad click through registration and purchase",
      "Implemented reporting systems to connect ad spend to downstream revenue and LTV",
      "Collaborated on landing page strategy and conversion path optimization",
    ],
    results: [
      "Managed significant monthly ad budgets across YouTube and Meta",
      "Drove consistent lead volume for webinars and digital product launches",
      "Improved creative testing velocity and campaign iteration cycles",
      "Built internal reporting visibility into funnel performance and ROAS",
    ],
    focus: [
      "Paid media",
      "YouTube ads",
      "Meta ads",
      "Creative testing",
      "Lead generation",
      "Digital products",
      "Funnels",
    ],
  },
  {
    slug: "poolsupplies",
    title: "PoolSupplies.com",
    subtitle: "Multi-channel ecommerce growth across Google, Amazon & Microsoft",
    category: "eCommerce",
    featured: true,
    tags: ["Google Ads", "Amazon Ads", "Microsoft Ads", "ROAS", "eCommerce"],
    summary:
      "End-to-end paid media management for a major pool supplies ecommerce retailer — architecting campaigns across Google, Amazon, and Microsoft Ads with budgets ranging from $1K to $50K+ monthly per channel.",
    challenge:
      "PoolSupplies.com needed sophisticated campaign architecture across multiple ad platforms to drive ecommerce revenue at scale — with quarterly revenue exceeding $1M and constant pressure to optimize ROAS across seasonal demand.",
    approach: [
      "Designed campaign structures for Google Shopping, Search, and Performance Max",
      "Managed Amazon Advertising campaigns including Sponsored Products and Brands",
      "Built and optimized Microsoft Ads campaigns for incremental search coverage",
      "Developed budget allocation frameworks across channels based on marginal ROAS",
      "Implemented granular reporting for revenue attribution and campaign-level performance",
    ],
    results: [
      "Supported quarterly revenue exceeding $1M through paid channels",
      "Managed budgets ranging from $1K to $50K+ monthly across platforms",
      "Optimized ROAS through continuous campaign architecture refinement",
      "Built scalable account structures for seasonal peak demand periods",
    ],
    focus: [
      "Google Ads",
      "Amazon Ads",
      "Microsoft Ads",
      "Ecommerce growth",
      "Campaign architecture",
      "ROAS optimization",
    ],
  },
  {
    slug: "voip-supply",
    title: "VoIP Supply",
    subtitle: "Long-term B2B paid media consulting & account management",
    category: "B2B",
    featured: true,
    tags: ["Google Ads", "Microsoft Ads", "B2B", "Lead Generation", "Reporting"],
    summary:
      "Sustained consulting partnership managing Google and Microsoft Ads for a B2B telecommunications supplier — balancing lead generation campaigns with ecommerce performance and strategic account growth.",
    challenge:
      "VoIP Supply required a trusted long-term partner to manage complex B2B paid media accounts — driving qualified leads and ecommerce revenue while providing strategic guidance and transparent performance reporting.",
    approach: [
      "Managed Google Ads campaigns across Search, Shopping, and Display for B2B and ecommerce objectives",
      "Built and optimized Microsoft Ads campaigns for incremental B2B lead volume",
      "Developed lead generation systems with clear conversion tracking and attribution",
      "Delivered regular performance reporting with actionable strategic recommendations",
      "Provided ongoing account management and budget optimization across campaign portfolios",
    ],
    results: [
      "Maintained long-term consulting relationship with consistent account growth",
      "Drove qualified B2B leads through optimized search campaigns",
      "Balanced ecommerce and lead gen objectives within unified account structures",
      "Established transparent reporting cadence for strategic decision-making",
    ],
    focus: [
      "Long-term consulting relationship",
      "Google Ads",
      "Microsoft Ads",
      "B2B lead generation",
      "Ecommerce campaigns",
      "Performance reporting",
      "Strategic account management",
    ],
  },
  {
    slug: "omegagreed",
    title: "OmegaGreed",
    subtitle: "Personal brand growth through YouTube & content strategy",
    category: "Creator Economy",
    featured: false,
    tags: ["YouTube", "Content Strategy", "Personal Brand", "Audience Building"],
    summary:
      "Content strategy and YouTube growth for a personal brand in the gaming and entertainment space — focusing on audience building, storytelling, and video packaging.",
    challenge:
      "OmegaGreed needed to grow a personal brand on YouTube with compelling content packaging, consistent storytelling, and audience development strategies that could scale beyond individual videos.",
    approach: [
      "Developed content strategy aligned with audience interests and platform trends",
      "Advised on video packaging — titles, thumbnails, and hooks optimized for click-through",
      "Built storytelling frameworks for serial content and audience retention",
      "Analyzed performance data to inform content direction and publishing cadence",
      "Supported YouTube channel growth through strategic content planning",
    ],
    results: [
      "Grew YouTube audience through strategic content and packaging",
      "Improved content consistency and brand positioning",
      "Developed repeatable frameworks for video ideation and production",
      "Strengthened audience engagement and community building",
    ],
    focus: [
      "Personal brand",
      "YouTube growth",
      "Content strategy",
      "Audience building",
      "Storytelling",
      "Video packaging",
    ],
  },
  {
    slug: "the-food-experience",
    title: "The Food Experience",
    subtitle: "Complete digital experience from concept to launch",
    category: "Web & Brand",
    featured: false,
    tags: ["Web Design", "Branding", "UX", "Mobile", "Project Management"],
    summary:
      "End-to-end website design and launch for a Buffalo, NY catering business — from brand positioning and content structure through mobile-optimized deployment.",
    challenge:
      "The Food Experience needed a professional web presence that reflected their catering quality, worked flawlessly on mobile, and made it easy for potential clients to explore menus and request quotes.",
    approach: [
      "Designed and built a mobile-first website with clear content hierarchy",
      "Developed brand-aligned visual design and typography system",
      "Structured catering menu content for easy browsing and discovery",
      "Optimized UX for quote requests and contact conversion",
      "Managed project from concept through launch and deployment",
    ],
    results: [
      "Launched a polished, mobile-optimized catering website",
      "Established clear brand presence for a local food business",
      "Created scalable content structure for menu updates",
      "Delivered complete digital experience from strategy to deployment",
    ],
    focus: [
      "Website design",
      "Small business branding",
      "UX",
      "Content structure",
      "Mobile optimization",
      "Project management",
      "Launch and deployment",
    ],
  },
  {
    slug: "geoffreyrcrawford-com",
    title: "GeoffreyRCrawford.com",
    subtitle: "Personal brand platform built for growth",
    category: "Personal Brand",
    featured: false,
    tags: ["Next.js", "Personal Brand", "Web Development", "AI Consulting"],
    summary:
      "This site — a modern personal brand platform built with Next.js to position consulting services, showcase case studies, and support future content and product expansion.",
    challenge:
      "Needed a professional web presence that positions expertise in growth marketing, paid media, and AI consulting — while supporting future case studies, insights, and product launches.",
    approach: [
      "Built with Next.js, TypeScript, and Tailwind for performance and scalability",
      "Designed executive-grade UI inspired by modern SaaS and consulting brands",
      "Structured content architecture for services, case studies, and future insights",
      "Optimized for SEO, mobile performance, and fast loading",
      "Created framework for ongoing content and portfolio expansion",
    ],
    results: [
      "Launched a fast, modern personal brand website",
      "Established clear positioning across consulting service lines",
      "Built scalable architecture for future content and products",
      "Replaced legacy Squarespace site with full developer control",
    ],
    focus: [
      "Personal brand",
      "Web development",
      "AI consulting positioning",
      "Content architecture",
      "Performance optimization",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((s) => s.featured);
export const supportingCaseStudies = caseStudies.filter((s) => !s.featured);
