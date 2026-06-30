import { createClient } from "@/lib/supabase/server";

/**
 * Data access for `tool_runs` — the polymorphic store behind every tool.
 *
 * All queries go through the request-scoped server client, so Row Level
 * Security enforces ownership; we still pass `user_id` explicitly on writes.
 * Every function degrades to a safe empty/null result when Supabase isn't
 * configured, so nothing throws on an unconfigured deployment.
 */

export type ToolRun = {
  id: string;
  user_id: string;
  tool: string;
  title: string;
  summary: string | null;
  input: unknown;
  output: unknown;
  generated_by: "rules" | "ai";
  starred: boolean;
  created_at: string;
  updated_at: string;
};

export type NewToolRun = {
  tool: string;
  title: string;
  summary?: string;
  input: unknown;
  output: unknown;
  generated_by?: "rules" | "ai";
};

export async function listToolRuns(): Promise<ToolRun[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("tool_runs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listToolRuns:", error.message);
    return [];
  }
  return (data ?? []) as ToolRun[];
}

export async function getToolRun(id: string): Promise<ToolRun | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("tool_runs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("getToolRun:", error.message);
    return null;
  }
  return (data as ToolRun) ?? null;
}

export async function createToolRun(run: NewToolRun): Promise<ToolRun | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("tool_runs")
    .insert({
      user_id: user.id,
      tool: run.tool,
      title: run.title,
      summary: run.summary ?? null,
      input: run.input,
      output: run.output,
      generated_by: run.generated_by ?? "rules",
    })
    .select("*")
    .single();

  if (error) {
    console.error("createToolRun:", error.message);
    return null;
  }
  return data as ToolRun;
}

export async function updateToolRun(
  id: string,
  patch: Partial<Pick<ToolRun, "title" | "summary" | "input" | "output" | "starred">>
): Promise<ToolRun | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("tool_runs")
    .update(patch)
    .eq("id", id)
    .select("*")
    .maybeSingle();

  if (error) {
    console.error("updateToolRun:", error.message);
    return null;
  }
  return (data as ToolRun) ?? null;
}

export async function deleteToolRun(id: string): Promise<boolean> {
  const supabase = await createClient();
  if (!supabase) return false;

  const { error } = await supabase.from("tool_runs").delete().eq("id", id);
  if (error) {
    console.error("deleteToolRun:", error.message);
    return false;
  }
  return true;
}
