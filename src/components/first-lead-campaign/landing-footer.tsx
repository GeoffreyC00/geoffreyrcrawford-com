import Link from "next/link";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

export function LandingFooter({ clearance = false }: { clearance?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e4e1db] bg-white">
      <div
        className={
          clearance
            ? "mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-28 pt-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-8"
            : "mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        }
      >
        <p className="text-sm text-[#5c564e]">
          © {year} {firstLeadCampaign.author}
          <span className="px-1.5">·</span>
          {firstLeadCampaign.publisher}
        </p>
        <nav className="flex gap-6 text-sm font-medium">
          <a href={`mailto:${firstLeadCampaign.email}`} className="text-[#141413] underline-offset-4 hover:underline">
            Contact
          </a>
          <Link href={firstLeadCampaign.policiesPath} className="text-[#141413] underline-offset-4 hover:underline">
            Product notes
          </Link>
        </nav>
      </div>
    </footer>
  );
}
