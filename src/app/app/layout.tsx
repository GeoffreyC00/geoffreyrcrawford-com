import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/app/app-shell";
import { WorkspaceComingSoon } from "@/components/app/workspace-coming-soon";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getCurrentUser } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Workspace",
  robots: { index: false },
};

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // Dormant by default — clean "coming soon" instead of any error.
  if (!isSupabaseConfigured()) {
    return <WorkspaceComingSoon />;
  }

  // Middleware guards /app, but double-check on render.
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/app");

  return <AppShell userEmail={user.email}>{children}</AppShell>;
}
