import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: "/resume", destination: "/hire-me", permanent: true },
      { source: "/work/think-media", destination: "/work/scaling-creator-businesses", permanent: true },
      { source: "/work/poolsupplies", destination: "/work/enterprise-ecommerce-growth", permanent: true },
      { source: "/work/pool-supplies", destination: "/work/enterprise-ecommerce-growth", permanent: true },
      { source: "/work/voip-supply", destination: "/work/b2b-lead-generation", permanent: true },
      { source: "/work/omegagreed", destination: "/work/performance-creative-video", permanent: true },
      { source: "/work/omega-greed", destination: "/work/performance-creative-video", permanent: true },
      { source: "/work/the-food-experience", destination: "/work/full-funnel-web-cro", permanent: true },
      {
        source: "/work/geoffreyrcrawford-com",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
