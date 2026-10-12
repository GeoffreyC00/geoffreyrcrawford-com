import type { Metadata } from "next";
import { SalesPage } from "@/components/first-lead-campaign/sales-page";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

export const metadata: Metadata = {
  title: firstLeadCampaign.name,
  description:
    "A free PDF field guide and Excel workbook for owners of an established service business who want to plan one Meta Ads lead campaign with an Instant Form.",
  alternates: { canonical: firstLeadCampaign.path },
  robots: { index: false, follow: false },
};

export default function FirstLeadCampaignPage() {
  return <SalesPage />;
}
