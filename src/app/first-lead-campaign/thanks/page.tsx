import type { Metadata } from "next";
import { ThanksPage } from "@/components/first-lead-campaign/thanks-page";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

export const metadata: Metadata = {
  title: `Your kit · ${firstLeadCampaign.name}`,
  description: "The free First Lead Campaign Kit is ready. Check your email for the download links.",
  alternates: { canonical: firstLeadCampaign.thanksPath },
  robots: { index: false, follow: false },
};

export default function FirstLeadCampaignThanksPage() {
  return <ThanksPage />;
}
