import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { getPublicSupabaseEnv } from "@/lib/supabase/env";

/**
 * Refreshes the Supabase session on each request and guards /app.
 *
 * When Supabase isn't configured this is a no-op pass-through, so the public
 * site (and the free Campaign Builder) behaves exactly as before. When it is
 * configured, unauthenticated visits to /app are redirected to /login.
 */
export async function updateSession(request: NextRequest): Promise<NextResponse> {
  const env = getPublicSupabaseEnv();
  if (!env) return NextResponse.next({ request });

  let response = NextResponse.next({ request });

  const supabase = createServerClient(env.url, env.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAppRoute = request.nextUrl.pathname.startsWith("/app");
  if (isAppRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return response;
}
