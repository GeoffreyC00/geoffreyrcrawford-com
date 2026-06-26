import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialImage } from "@/components/shared/editorial-image";
import type { CaseStudy } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyFeatureProps = {
  study: CaseStudy;
  /** Flip the image to the opposite side for editorial rhythm. */
  reverse?: boolean;
};

export function CaseStudyFeature({ study, reverse = false }: CaseStudyFeatureProps) {
  const outcome = study.metrics[0];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      {study.image && (
        <div className={cn(reverse && "lg:order-2")}>
          <EditorialImage
            src={study.image.src}
            alt={study.image.alt}
            className="aspect-[4/3] w-full sm:aspect-[3/2]"
            sizes="(max-width: 1024px) 100vw, 36rem"
          />
        </div>
      )}

      <div className={cn(reverse && "lg:order-1")}>
        <h3 className="font-serif text-display-md font-light leading-[1.08] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
          {study.title}
        </h3>

        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          {study.subtitle}
        </p>

        {outcome && (
          <p className="mt-8 font-serif text-2xl font-light text-foreground">
            {outcome.value}{" "}
            <span className="text-base text-muted-foreground">{outcome.label}</span>
          </p>
        )}

        <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          <span className="link-underline">View case study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
