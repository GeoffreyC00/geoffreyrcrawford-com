import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getPublicSupabaseEnv } from "@/lib/supabase/env";

/**
 * Server Supabase client bound to the request cookies. Returns `null` when
 * Supabase isn't configured. Uses the public anon key; Row Level Security
 * scopes every query to the signed-in user.
 *
 * Note: in Next 15 `cookies()` is async, so this is an async factory.
 */
export async function createClient() {
  const env = getPublicSupabaseEnv();
  if (!env) return null;

  const cookieStore = await cookies();

  return createServerClient(env.url, env.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component — cookie writes are handled by
          // middleware instead. Safe to ignore here.
        }
      },
    },
  });
}

/** Convenience: the current user (or null), without throwing when unconfigured. */
export async function getCurrentUser() {
  const supabase = await createClient();
  if (!supabase) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
