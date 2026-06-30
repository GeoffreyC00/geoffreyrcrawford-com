import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/app/login-form";
import { WorkspaceComingSoon } from "@/components/app/workspace-coming-soon";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getCurrentUser } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  if (!isSupabaseConfigured()) {
    return <WorkspaceComingSoon />;
  }

  // Already signed in → go straight to the workspace.
  const user = await getCurrentUser();
  const { next } = await searchParams;
  const dest = next ?? "/app";
  if (user) redirect(dest);

  return (
    <section className="section-padding flex min-h-[80vh] items-center">
      <div className="mx-auto w-full max-w-sm">
        <div className="mb-10 text-center">
          <p className="kicker">Workspace</p>
          <h1 className="mt-5 font-serif text-display-md font-light">Sign in</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
            Save your campaigns and access every AI marketing tool in one place.
          </p>
        </div>
        <LoginForm next={dest} />
      </div>
    </section>
  );
}
