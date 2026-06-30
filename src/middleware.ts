import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Refreshes the auth session and guards /app routes. No-op when Supabase
 * isn't configured (see updateSession), so the public site is unaffected.
 */
export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  // Only run on app routes + auth callback; skip static assets and the public
  // marketing pages entirely for performance.
  matcher: ["/app/:path*", "/auth/:path*"],
};
