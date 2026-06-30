# Workspace Setup (Supabase)

The marketing workspace (`/app`) — accounts, saved campaign history, and the
shared dashboard for all AI tools — is **dormant by default**. Until Supabase is
configured, the site behaves exactly as before:

- The free **AI Campaign Builder** works with no login.
- `/app` and `/login` show a clean **“Workspace coming soon”** state.
- No errors, no broken UI.

Once env vars are set and the migration is run, the workspace activates
automatically on the next deploy.

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a project (free tier is fine).
2. Wait for the database to finish provisioning.

---

## 2. Run the database migration

In the Supabase dashboard → **SQL Editor**, paste and run:

```
supabase/migrations/0001_tool_runs.sql
```

This creates:

- `public.tool_runs` — polymorphic table for every AI tool’s saved runs
- Row Level Security — each user can only read/write their own rows
- Indexes + `updated_at` trigger

Safe to re-run (uses `IF NOT EXISTS` / `OR REPLACE`).

---

## 3. Add environment variables

Copy from **Project Settings → API**:

| Variable | Where | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel + `.env.local` | Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel + `.env.local` | `anon` `public` key — safe for browser |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel + `.env.local` | **Server only.** Never commit. Never expose client-side. |

Add to **Vercel** → Project → Settings → Environment Variables (Production + Preview).

For local dev, create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
# fill in the three Supabase values
```

Restart `npm run dev` after adding local env vars.

---

## 4. Configure auth redirect URLs

In Supabase → **Authentication → URL Configuration**:

**Site URL**

```
https://geoffreyrcrawford.com
```

**Redirect URLs** (add both):

```
https://geoffreyrcrawford.com/auth/callback
http://localhost:3000/auth/callback
```

Magic links and Google OAuth return through `/auth/callback`, which exchanges
the code for a session and sends the user to `/app` (or `?next=` if provided).

---

## 5. Enable Google sign-in (optional)

Supabase → **Authentication → Providers → Google**:

1. Toggle **Enable**.
2. Add your Google OAuth client ID + secret (from Google Cloud Console).
3. Use the callback URL Supabase shows you in the Google console.

The login page already shows **“Continue with Google”**. If Google isn’t
enabled, that button will surface an inline error — email magic link still works.

---

## 6. Deploy

Push to `main` or trigger a Vercel redeploy after env vars are set.

**Activation check:** visit `/login` — you should see the sign-in form, not
“coming soon”. Visit `/app` while signed out — you should redirect to `/login`.

---

## How it works (user flow)

```
Visitor builds campaign (no account)
        ↓
Full blueprint shown (free)
        ↓
“Create my free workspace” → /login
        ↓
Magic link or Google → /auth/callback → /app
        ↓
PendingRunSync saves sessionStorage campaign to tool_runs
        ↓
Dashboard shows campaign history + tool launcher
```

**Session storage keys** (client-side, cleared after save):

| Key | Purpose |
|-----|---------|
| `acb:lastRun` | Anonymous run waiting to persist after signup |
| `acb:prefill` | Inputs for “Edit & rebuild” from a saved campaign |

---

## Routes reference

| Route | Auth | When unconfigured |
|-------|------|-------------------|
| `/tools/ai-campaign-builder` | None | Always works |
| `/login` | None | “Coming soon” |
| `/app` | Required | “Coming soon” |
| `/app/campaigns/[id]` | Required | “Coming soon” |
| `/api/tool-runs` | Required | `503` |
| `/auth/callback` | — | Redirects to `/login?error=auth` |
| `/auth/signout` | — | Signs out if configured |

---

## API overview

All `/api/tool-runs` endpoints require a signed-in user and return `503` when
Supabase isn’t configured.

| Method | Path | Action |
|--------|------|--------|
| `GET` | `/api/tool-runs` | List current user’s runs |
| `POST` | `/api/tool-runs` | Save a run (validated per tool) |
| `GET` | `/api/tool-runs/[id]` | Fetch one run |
| `PATCH` | `/api/tool-runs/[id]` | Update title / starred |
| `DELETE` | `/api/tool-runs/[id]` | Delete run |

RLS enforces ownership at the database layer; the API uses the anon key +
session cookie, not the service role.

---

## Adding a future AI tool

No schema changes needed. Each tool:

1. Registers in `src/lib/tools/registry.ts`
2. Writes one `tool_runs` row (`tool`, `input`, `output` JSON)
3. Appears automatically in the dashboard launcher + history

---

## Verification checklist

After enabling Supabase:

- [ ] Build a campaign **without** signing in — full blueprint renders
- [ ] Click **Create my free workspace** → receive magic link
- [ ] Sign in → land on `/app` → campaign auto-saved (banner confirms)
- [ ] Open saved campaign at `/app/campaigns/[id]`
- [ ] **Edit & rebuild** → wizard opens prefilled at review step
- [ ] **Delete** → run removed from history
- [ ] Second test account cannot see first account’s campaigns (RLS)
- [ ] `/tools/ai-campaign-builder` still works with no login

---

## Troubleshooting

**Still seeing “coming soon”**

- Confirm all three env vars are set in Vercel (Production).
- Redeploy after adding vars — Next.js bakes `NEXT_PUBLIC_*` at build time.

**Magic link doesn’t sign me in**

- Check redirect URLs in Supabase match exactly (including `https`).
- Confirm Site URL is `https://geoffreyrcrawford.com`.

**Campaign not saved after signup**

- Build a campaign first (populates `acb:lastRun` in sessionStorage).
- Sign in on the **same browser** — storage is per-tab/session.
- Check browser devtools → Application → Session Storage.

**`tool_runs` insert fails**

- Confirm migration `0001_tool_runs.sql` was run.
- Check Supabase → Table Editor → `tool_runs` exists with RLS enabled.

**Google sign-in error**

- Provider must be enabled in Supabase with valid OAuth credentials.
- Use email magic link as fallback.

---

## Security notes

- **Never** put `SUPABASE_SERVICE_ROLE_KEY` in client code or `NEXT_PUBLIC_*` vars.
- RLS on `tool_runs` is the primary access control — every row is scoped to `auth.uid()`.
- The free Campaign Builder has no auth requirement and no database writes until the user chooses to save.
