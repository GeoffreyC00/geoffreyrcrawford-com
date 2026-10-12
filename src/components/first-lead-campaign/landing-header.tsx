import { GetFreeKitButton } from "@/components/first-lead-campaign/opt-in-form";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4e1db] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold tracking-tight text-[#141413]">
            {firstLeadCampaign.author}
          </p>
          <p className="truncate text-xs text-[#5c564e]">{firstLeadCampaign.publisher}</p>
        </div>
        <GetFreeKitButton className="inline-flex h-11 items-center justify-center rounded-full bg-[#1B2B4B] px-5 text-sm font-semibold text-white">
          Get the free kit
        </GetFreeKitButton>
      </div>
    </header>
  );
}
