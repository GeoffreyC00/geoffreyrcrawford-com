import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { SelectedWorkProject } from "@/lib/data/selected-work";
import { selectedWorkProjects } from "@/lib/data/selected-work";
import { cn } from "@/lib/utils";

function SelectedWorkCard({ project }: { project: SelectedWorkProject }) {
  return (
    <Link
      href={project.href}
      className={cn(
        "group product-card flex h-full flex-col p-6 sm:p-8",
        project.featured && "border-accent/20 bg-accent/[0.04]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {project.featured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-editorial text-accent">
            <Sparkles className="h-3 w-3" />
            Hero project
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
            Product system
          </span>
        )}
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>

      <h3 className="mt-6 font-serif text-2xl font-light leading-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.65rem]">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
        <span className="link-underline">View project</span>
      </span>
    </Link>
  );
}

/** Three-card Selected Work grid for the homepage. */
export function SelectedWorkGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {selectedWorkProjects.map((project) => (
        <SelectedWorkCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
