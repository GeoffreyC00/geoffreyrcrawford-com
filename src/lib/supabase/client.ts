"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getPublicSupabaseEnv } from "@/lib/supabase/env";

/**
 * Browser Supabase client. Returns `null` when Supabase isn't configured so
 * callers can degrade gracefully instead of throwing. Only ever uses the
 * public anon key.
 */
export function createClient() {
  const env = getPublicSupabaseEnv();
  if (!env) return null;
  return createBrowserClient(env.url, env.anonKey);
}
