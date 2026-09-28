import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";
import { PurchaseCta } from "@/components/first-lead-campaign/purchase-cta";

export function LandingHeader({ checkoutUrl }: { checkoutUrl: string | null }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4e1db] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold tracking-tight text-[#141413]">
            {firstLeadCampaign.author}
          </p>
          <p className="truncate text-xs text-[#5c564e]">{firstLeadCampaign.publisher}</p>
        </div>
        <PurchaseCta checkoutUrl={checkoutUrl} className="hidden sm:inline-flex" />
        <p className="text-base font-semibold text-[#141413] sm:hidden">{firstLeadCampaign.priceLabel}</p>
      </div>
    </header>
  );
}
