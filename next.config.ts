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
      { source: "/work/poolsupplies", destination: "/work/pool-supplies", permanent: true },
      { source: "/work/omegagreed", destination: "/work/omega-greed", permanent: true },
      {
        source: "/work/geoffreyrcrawford-com",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
