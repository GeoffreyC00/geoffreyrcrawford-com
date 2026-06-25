# Architecture

This site is the long-term headquarters for Geoffrey R. Crawford's professional
brand — not a throwaway portfolio. It's built to grow (articles, case studies,
tutorials, products, resources) without redesigns. This doc is the map for
humans and AI coding assistants working in the codebase.

## Stack

- **Next.js (App Router)** + **TypeScript** — static-first, SEO-friendly.
- **Tailwind CSS** + `@tailwindcss/typography` — design system + long-form prose.
- **Framer Motion** — scroll-reveal micro-animations (`src/components/shared/reveal.tsx`).
- **MDX** via `next-mdx-remote/rsc` + `gray-matter` — file-based content.
- **Resend** — contact form + newsletter (Resend Audiences).

## Folder map

```
content/
  insights/*.mdx            # The knowledge base. One file = one published piece.
src/
  app/                      # Routes (App Router).
    api/contact/            # Contact form endpoint (Resend).
    api/subscribe/          # Newsletter endpoint (Resend Audiences + inbox fallback).
    insights/               # Knowledge base index, pagination, RSS, [slug] detail + OG image.
    sitemap.ts, robots.ts   # SEO, generated from data + content layer.
  components/
    content/                # Insight cards, list, pagination, MDX renderers, detail view.
    newsletter/             # Reusable newsletter form + card (lead magnets, launches).
    seo/                    # JsonLd helper.
    shared/, ui/, layout/, work/, resume/, analytics/
  lib/
    content/                # Content layer: types.ts (taxonomy) + insights.ts (loader).
    data/                   # Structured site data (case-studies, services, insights topics).
    seo.ts                  # absoluteUrl(), OG image URL helpers.
    site-config.ts          # Single source of truth for brand, nav, IA, newsletter copy.
```

## Content layer (the important part)

The Insights section is a **knowledge base**, modeled as typed content with a
`type` discriminator: `article | case-study | tutorial | experiment | breakdown`
(see `src/lib/content/types.ts`). Adding a content type is a two-line change there.

**Publishing = dropping a file.** Create `content/insights/<slug>.mdx` with
frontmatter; it automatically appears in the index, sitemap, RSS, and gets a
canonical URL, JSON-LD, and a generated OG image. No code changes needed.

```mdx
---
title: "Your Title"
description: "One-sentence summary for cards + SEO."
type: "tutorial"            # optional, defaults to "article"
publishedAt: "2026-07-01"   # required (ISO date)
tags: ["Analytics", "GA4"]  # optional
featured: false             # optional
draft: false                # optional — drafts hidden in production
cover: "/images/x.png"      # optional — overrides generated OG image
---

Markdown / MDX body. Use `<Callout type="tip">…</Callout>` for callouts.
```

The loader (`src/lib/content/insights.ts`) reads, validates, normalizes, sorts,
filters drafts, computes reading time, and exposes typed getters:
`getAllInsightMeta`, `getInsightBySlug`, `getPaginatedInsights`, `getAllTags`,
`getFeaturedInsights`, `getInsightSlugs`. All are server-only.

## SEO

Every piece of content ships with: structured metadata + canonical URL
(`generateMetadata`), JSON-LD (`BlogPosting`; `Person`/`WebSite` on home),
dynamic OG image (`insights/[slug]/opengraph-image.tsx`), dynamic sitemap,
and an RSS feed (`/insights/rss.xml`). Pagination is path-based
(`/insights`, `/insights/page/N`) with per-page canonicals.

## Newsletter

`NewsletterForm` (`src/components/newsletter/`) posts to `/api/subscribe`, which
adds contacts to a Resend Audience (`RESEND_AUDIENCE_ID`). Without an audience
configured, signups are emailed to the inbox so none are lost. Pass a `source`
(and optional `audienceId`) per placement to support lead magnets, gated
resources, and product launches. `NewsletterCard` is the styled block version.

## Adding a new content collection (e.g. resources, templates)

The Insights content layer is the template. To add a parallel collection:

1. Add MDX files under `content/<collection>/`.
2. Copy `src/lib/content/insights.ts` → `<collection>.ts`, adjust `CONTENT_DIR`.
3. Add routes under `src/app/<collection>/` mirroring the insights routes.
4. Register URLs in `sitemap.ts`.

Structured page data (offers, dashboards, speaking) lives in `src/lib/data/*` as
typed arrays — add an entry, render with existing components. No redesign required.

## Conventions

- Strong TypeScript types; no `any`. Content shapes live in `lib/content/types.ts`.
- Server Components by default; `"use client"` only for interactivity.
- Brand/nav/IA changes go through `site-config.ts`, not scattered literals.
- Descriptive names; one component per file; reuse `ui/` primitives.

## Local commands

```bash
npm run dev     # local dev
npm run build   # production build (also type-checks + lints)
npm run lint    # eslint
```

## Environment variables

See `.env.example`. Key ones: `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`,
`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
