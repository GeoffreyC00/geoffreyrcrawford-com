import { cn } from "@/lib/utils";

const LABEL = "Get the Kit — $47";

function directCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("wanted", "true");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

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
        href={directCheckoutUrl(checkoutUrl)}
        className={cn(
          controlClass,
          onDark
            ? "bg-white text-[#1B2B4B] transition-colors hover:bg-[#f4f2ee]"
            : "bg-[#1B2B4B] text-white shadow-[0_14px_32px_-18px_rgba(27,43,75,0.85)] transition-colors hover:bg-[#243656]"
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
          "cursor-not-allowed",
          onDark
            ? "bg-white text-[#1B2B4B]"
            : "bg-[#1B2B4B] text-white shadow-[0_14px_32px_-18px_rgba(27,43,75,0.85)]"
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
