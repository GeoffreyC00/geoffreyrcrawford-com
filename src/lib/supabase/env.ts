/**
 * Supabase environment detection.
 *
 * The entire workspace/auth layer is dormant-by-default: if these public env
 * vars are absent, the app renders a clean "Workspace coming soon" state and
 * the public Campaign Builder keeps working untouched. Nothing here references
 * the service-role key — that is server-only and read exclusively in
 * `server.ts` / admin paths, never shipped to the client.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True only when both public Supabase vars are present and non-empty. */
export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

/** Narrowing helper for code paths that require configured credentials. */
export function getPublicSupabaseEnv(): { url: string; anonKey: string } | null {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  return { url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY };
}
