-- ============================================================================
-- Migration 0001 — tool_runs
-- ----------------------------------------------------------------------------
-- The single, polymorphic table that backs the entire workspace. Every AI tool
-- (current and future) writes one row per generated result, keyed by `tool`.
-- The dashboard lists runs across all tools; new tools need NO schema change.
--
-- Run this in the Supabase SQL editor (or via `supabase db push`) once your
-- project exists. Safe to re-run: guarded with IF NOT EXISTS / OR REPLACE.
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.tool_runs (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users (id) on delete cascade,
  tool          text not null,                 -- e.g. 'ai-campaign-builder'
  title         text not null default 'Untitled',
  summary       text,
  input         jsonb not null,                -- the tool's input payload
  output        jsonb not null,                -- the generated result
  generated_by  text not null default 'rules', -- 'rules' | 'ai'
  starred       boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists tool_runs_user_id_idx on public.tool_runs (user_id);
create index if not exists tool_runs_user_tool_idx on public.tool_runs (user_id, tool);
create index if not exists tool_runs_created_at_idx on public.tool_runs (created_at desc);

-- Keep updated_at fresh on edits.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists tool_runs_set_updated_at on public.tool_runs;
create trigger tool_runs_set_updated_at
  before update on public.tool_runs
  for each row execute function public.set_updated_at();

-- ----------------------------------------------------------------------------
-- Row Level Security — every row is private to its owner.
-- ----------------------------------------------------------------------------
alter table public.tool_runs enable row level security;

drop policy if exists "tool_runs_select_own" on public.tool_runs;
create policy "tool_runs_select_own"
  on public.tool_runs for select
  using (auth.uid() = user_id);

drop policy if exists "tool_runs_insert_own" on public.tool_runs;
create policy "tool_runs_insert_own"
  on public.tool_runs for insert
  with check (auth.uid() = user_id);

drop policy if exists "tool_runs_update_own" on public.tool_runs;
create policy "tool_runs_update_own"
  on public.tool_runs for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "tool_runs_delete_own" on public.tool_runs;
create policy "tool_runs_delete_own"
  on public.tool_runs for delete
  using (auth.uid() = user_id);
