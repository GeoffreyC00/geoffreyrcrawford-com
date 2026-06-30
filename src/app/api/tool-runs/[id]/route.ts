import { NextResponse } from "next/server";
import { deleteToolRun, getToolRun, updateToolRun } from "@/lib/db/tool-runs";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getCurrentUser } from "@/lib/supabase/server";

function notConfigured() {
  return NextResponse.json({ error: "Workspace not configured." }, { status: 503 });
}

async function requireUser() {
  const user = await getCurrentUser();
  return user;
}

/** GET /api/tool-runs/[id] — fetch one saved run (RLS scopes to owner). */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isSupabaseConfigured()) return notConfigured();
  if (!(await requireUser())) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });

  const { id } = await params;
  const run = await getToolRun(id);
  if (!run) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ run });
}

/** PATCH /api/tool-runs/[id] — update title/star/output on an owned run. */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isSupabaseConfigured()) return notConfigured();
  if (!(await requireUser())) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });

  const { id } = await params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const patch: { title?: string; starred?: boolean } = {};
  if (typeof b.title === "string") patch.title = b.title.slice(0, 200);
  if (typeof b.starred === "boolean") patch.starred = b.starred;

  const run = await updateToolRun(id, patch);
  if (!run) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ run });
}

/** DELETE /api/tool-runs/[id] — remove an owned run. */
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isSupabaseConfigured()) return notConfigured();
  if (!(await requireUser())) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });

  const { id } = await params;
  const ok = await deleteToolRun(id);
  if (!ok) return NextResponse.json({ error: "Could not delete." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
