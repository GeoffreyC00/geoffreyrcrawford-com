import { cn } from "@/lib/utils";

const LABEL = "Get the Kit — $47";

type PurchaseCtaProps = {
  checkoutUrl: string | null;
  className?: string;
  showStatus?: boolean;
  onDark?: boolean;
};

export function PurchaseCta({
  checkoutUrl,
  className,
  showStatus = false,
  onDark = false,
}: PurchaseCtaProps) {
  const controlClass = cn(
    "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-6 text-base font-semibold sm:h-14 sm:px-7",
    className
  );

  if (checkoutUrl) {
    return (
      <a
        href={checkoutUrl}
        className={cn(
          controlClass,
          onDark
            ? "bg-white text-[#141413] transition-colors hover:bg-[#f4f2ee]"
            : "bg-[#141413] text-white transition-colors hover:bg-[#2a2926]"
        )}
      >
        {LABEL}
      </a>
    );
  }

  return (
    <div className={onDark ? "flex flex-col items-center" : undefined}>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={cn(
          controlClass,
          "cursor-not-allowed border border-[#cfcbc4] bg-[#eceae6] text-[#8a847c]"
        )}
      >
        {LABEL}
      </button>
      {showStatus ? (
        <p className={cn("mt-3 text-sm leading-relaxed", onDark ? "text-white/75" : "text-[#5c564e]")}>
          Purchase link not connected yet.
        </p>
      ) : null}
    </div>
  );
}
