import Image from "next/image";
import { photos } from "@/lib/photography";
import { cn } from "@/lib/utils";

type HeroPortraitProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Homepage hero portrait — transparent cutout, arms crossed.
 * object-contain preserves aspect ratio; never stretched or cropped.
 */
export function HeroPortrait({ className, priority = false }: HeroPortraitProps) {
  const { src, alt, width, height } = photos.headshot;

  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[18%] h-[68%] w-[88%] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />
        <div className="absolute left-1/2 top-[34%] h-[58%] w-[68%] -translate-x-1/2 rounded-full bg-foreground/[0.06] blur-[70px]" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 1024px) 80vw, 26rem"
        className="h-auto w-full object-contain object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent lg:hidden" />
    </div>
  );
}
