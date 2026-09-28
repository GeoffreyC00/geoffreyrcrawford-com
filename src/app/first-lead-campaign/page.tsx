import type { Metadata } from "next";
import { SalesPage } from "@/components/first-lead-campaign/sales-page";
import {
  firstLeadCampaign,
  getFirstLeadCampaignCheckoutUrl,
} from "@/lib/products/first-lead-campaign";

export const metadata: Metadata = {
  title: firstLeadCampaign.name,
  description:
    "A $47 guide and workbook for owners of an established service business who want to build and submit one Meta Ads lead campaign with an Instant Form.",
  alternates: { canonical: firstLeadCampaign.path },
  robots: { index: false, follow: false },
};

export default function FirstLeadCampaignPage() {
  const checkoutUrl = getFirstLeadCampaignCheckoutUrl();
  return <SalesPage checkoutUrl={checkoutUrl} />;
}
