import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/hire-me/resume",
        "/poc-apogp",
        "/first-lead-campaign",
        "/chatgpt-workbook",
        "/first-5-chatgpt-tasks",
      ],
    },
    sitemap: "https://geoffreyrcrawford.com/sitemap.xml",
  };
}
