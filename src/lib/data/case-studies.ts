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
  platforms: string[];
  skills: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "think-media",
    title: "Think Media",
    subtitle: "Paid media for a leading YouTube education brand",
    category: "Digital Products",
    featured: true,
    tags: ["YouTube Ads", "Meta Ads", "Funnels", "Webinars", "Creative Testing"],
    summary:
      "Paid acquisition across YouTube and Meta for one of the largest creator-led education brands — driving webinar registrations, digital product sales, and live event attendance through rigorous funnel and creative optimization.",
    challenge:
      "Think Media needed scalable paid acquisition across YouTube and Meta without sacrificing efficiency — supporting webinars, digital products, live events, and a fast-moving creative pipeline across multiple funnel stages.",
    approach: [
      "Built and managed YouTube and Meta campaigns across cold, warm, and retargeting audiences",
      "Developed creative testing frameworks for hooks, formats, and messaging at high velocity",
      "Optimized webinar and product funnels from ad click through registration and purchase",
      "Connected ad spend to downstream revenue through reporting and LTV visibility",
      "Collaborated on landing page strategy and conversion path refinement",
    ],
    results: [
      "Managed significant monthly budgets across YouTube and Meta",
      "Drove consistent lead volume for webinars and digital product launches",
      "Increased creative testing velocity and campaign iteration speed",
      "Improved internal visibility into funnel performance and ROAS",
    ],
    platforms: ["YouTube Ads", "Meta Ads", "Google Analytics", "Landing page tools"],
    skills: [
      "Paid media strategy",
      "Creative testing",
      "Funnel optimization",
      "Lead generation",
      "Performance reporting",
    ],
  },
  {
    slug: "pool-supplies",
    title: "PoolSupplies.com",
    subtitle: "Multi-channel ecommerce growth at scale",
    category: "eCommerce",
    featured: true,
    tags: ["Google Ads", "Amazon Ads", "Microsoft Ads", "ROAS", "eCommerce"],
    summary:
      "End-to-end paid media for a major pool supplies retailer — architecting campaigns across Google, Amazon, and Microsoft Ads with budgets from $1K to $50K+ monthly per channel and quarterly revenue exceeding $1M.",
    challenge:
      "PoolSupplies.com needed sophisticated campaign architecture across search, shopping, and marketplace channels — optimizing ROAS through seasonal peaks while supporting $1M+ quarterly revenue targets.",
    approach: [
      "Designed Google Shopping, Search, and Performance Max campaign structures",
      "Managed Amazon Sponsored Products and Brands for marketplace growth",
      "Built Microsoft Ads campaigns for incremental search coverage",
      "Developed budget allocation frameworks based on marginal ROAS by channel",
      "Implemented granular revenue attribution and campaign-level reporting",
    ],
    results: [
      "Supported quarterly revenue exceeding $1M through paid channels",
      "Managed budgets ranging from $1K to $50K+ monthly across platforms",
      "Improved ROAS through continuous campaign architecture refinement",
      "Built scalable structures for seasonal demand and peak periods",
    ],
    platforms: ["Google Ads", "Amazon Ads", "Microsoft Ads", "Google Analytics"],
    skills: [
      "Campaign architecture",
      "ROAS optimization",
      "Budget allocation",
      "eCommerce growth",
      "Marketplace advertising",
    ],
  },
  {
    slug: "voip-supply",
    title: "VoIP Supply",
    subtitle: "Long-term B2B paid media partnership",
    category: "B2B",
    featured: true,
    tags: ["Google Ads", "Microsoft Ads", "B2B", "Lead Generation", "eCommerce"],
    summary:
      "Sustained consulting engagement managing Google and Microsoft Ads for a B2B telecommunications supplier — balancing qualified lead generation with ecommerce revenue and strategic account growth.",
    challenge:
      "VoIP Supply needed a trusted operator to manage complex B2B paid media accounts — driving qualified leads and ecommerce revenue while delivering transparent reporting and strategic guidance over the long term.",
    approach: [
      "Managed Google Ads across Search, Shopping, and Display for B2B and ecommerce goals",
      "Built and optimized Microsoft Ads for incremental B2B lead volume",
      "Developed lead gen systems with clear conversion tracking and attribution",
      "Delivered regular performance reporting with actionable recommendations",
      "Provided ongoing account management and portfolio-level budget optimization",
    ],
    results: [
      "Maintained a multi-year consulting relationship with consistent growth",
      "Drove qualified B2B leads through optimized search campaigns",
      "Balanced lead gen and ecommerce objectives within unified structures",
      "Established a transparent reporting cadence for strategic decisions",
    ],
    platforms: ["Google Ads", "Microsoft Ads", "Google Analytics", "CRM integrations"],
    skills: [
      "B2B lead generation",
      "Strategic account management",
      "Performance reporting",
      "Ecommerce campaigns",
      "Long-term consulting",
    ],
  },
  {
    slug: "omega-greed",
    title: "OmegaGreed",
    subtitle: "Personal brand & YouTube growth",
    category: "Creator Economy",
    featured: false,
    tags: ["YouTube", "Content Strategy", "Thumbnails", "Storytelling"],
    summary:
      "Content strategy and YouTube growth for a gaming and entertainment personal brand — audience building, storytelling, and video packaging that compounds over time.",
    challenge:
      "OmegaGreed needed to grow a personal brand on YouTube with compelling packaging, consistent storytelling, and a content direction that could scale beyond individual videos.",
    approach: [
      "Developed content strategy aligned with audience interests and platform trends",
      "Advised on video packaging — titles, thumbnails, and hooks for click-through",
      "Built storytelling frameworks for serial content and retention",
      "Used performance data to inform content direction and publishing cadence",
      "Supported channel growth through strategic planning and iteration",
    ],
    results: [
      "Grew YouTube audience through strategic content and packaging",
      "Improved content consistency and brand positioning",
      "Created repeatable frameworks for ideation and production",
      "Strengthened audience engagement and community building",
    ],
    platforms: ["YouTube", "YouTube Analytics", "Content planning tools"],
    skills: [
      "Content strategy",
      "YouTube growth",
      "Video packaging",
      "Storytelling",
      "Audience building",
    ],
  },
  {
    slug: "the-food-experience",
    title: "The Food Experience",
    subtitle: "Local business web presence from concept to launch",
    category: "Local Business",
    featured: false,
    tags: ["Web Design", "Branding", "UX", "Mobile", "Launch"],
    summary:
      "End-to-end website design and launch for a Buffalo, NY catering business — brand positioning, content structure, mobile optimization, and a polished local web presence.",
    challenge:
      "The Food Experience needed a professional site that reflected their catering quality, worked flawlessly on mobile, and made it easy for potential clients to explore menus and request quotes.",
    approach: [
      "Designed and built a mobile-first website with clear content hierarchy",
      "Developed brand-aligned visual design and typography",
      "Structured catering menu content for easy browsing",
      "Optimized UX for quote requests and contact conversion",
      "Managed the project from concept through launch and deployment",
    ],
    results: [
      "Launched a polished, mobile-optimized catering website",
      "Established clear brand presence for a local food business",
      "Created scalable content structure for menu updates",
      "Delivered a complete digital experience from strategy to deployment",
    ],
    platforms: ["HTML/CSS", "Squarespace embed", "Mobile-first design"],
    skills: [
      "Website design",
      "Small business branding",
      "UX",
      "Content structure",
      "Project management",
      "Launch & deployment",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((s) => s.featured);
export const supportingCaseStudies = caseStudies.filter((s) => !s.featured);
