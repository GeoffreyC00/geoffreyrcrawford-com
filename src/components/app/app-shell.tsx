import Link from "next/link";
import { LayoutGrid, LogOut, Wrench } from "lucide-react";
import { liveTools } from "@/lib/tools/registry";

/**
 * Workspace chrome: a calm left rail (navigation + live tools + account) and a
 * content column. Deliberately minimal — software-first, not dashboard-loud.
 */
export function AppShell({
  userEmail,
  children,
}: {
  userEmail?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="container-wide section-padding !py-12">
      <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">Workspace</p>

          <nav className="mt-6 space-y-1">
            <Link
              href="/app"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
            >
              <LayoutGrid className="h-4 w-4" />
              Dashboard
            </Link>
          </nav>

          <div className="mt-8">
            <p className="px-3 text-xs uppercase tracking-editorial text-muted-foreground">
              Tools
            </p>
            <nav className="mt-3 space-y-1">
              {liveTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Wrench className="h-4 w-4" />
                  {tool.name}
                </Link>
              ))}
            </nav>
          </div>

          {userEmail && (
            <div className="mt-10 border-t border-hairline pt-6">
              <p className="truncate px-3 text-xs text-muted-foreground" title={userEmail}>
                {userEmail}
              </p>
              <form action="/auth/signout" method="post" className="mt-2">
                <button
                  type="submit"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </form>
            </div>
          )}
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
