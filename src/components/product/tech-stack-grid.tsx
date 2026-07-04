import type { ComponentType } from "react";
import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Database,
  Layers,
  LineChart,
  Sparkles,
  Zap,
} from "lucide-react";
import { techStackItems } from "@/lib/data/platform-case-study";
import { Reveal } from "@/components/shared/reveal";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Next.js": Layers,
  React: Code2,
  TypeScript: Code2,
  Supabase: Database,
  "Claude Code": Bot,
  OpenAI: Sparkles,
  Anthropic: Bot,
  GA4: LineChart,
  HubSpot: Cloud,
  "Google Ads": BarChart3,
  "Meta Ads": BarChart3,
  "Microsoft Ads": BarChart3,
  "Attribution APIs": Zap,
  "Commerce APIs": Database,
  "REST APIs": Cloud,
  Automation: Zap,
  "AI Agents": Bot,
  Recharts: LineChart,
};

function TechIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className="h-5 w-5 text-accent/80" />;
}

export function TechStackGrid() {
  const categories = [...new Set(techStackItems.map((t) => t.category))];

  return (
    <div className="space-y-12">
      {categories.map((category, ci) => (
        <Reveal key={category} delay={ci * 0.05}>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
              {category}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {techStackItems
                .filter((t) => t.category === category)
                .map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                  >
                    <TechIcon name={item.name} />
                    <span className="text-sm text-foreground/90">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
