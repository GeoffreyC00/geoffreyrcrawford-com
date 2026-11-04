"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Standalone product and POC routes render without the main site header and
 * footer, so a campaign page can stay focused on one action.
 */
const STANDALONE_PREFIXES = ["/poc-apogp", "/first-lead-campaign", "/first-5-chatgpt-tasks"];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isStandalone) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
