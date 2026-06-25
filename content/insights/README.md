# Insights content

Each `.mdx` file in this folder is one published piece in the knowledge base.

## Publish a new piece

1. Create `your-slug.mdx` here.
2. Add frontmatter (below). `title`, `description`, and `publishedAt` are required.
3. Write the body in Markdown/MDX. That's it — it appears in the index, sitemap,
   and RSS, with a canonical URL, JSON-LD, and a generated OG image.

```mdx
---
title: "Your Title"
description: "One-sentence summary used on cards and in search results."
type: "article"            # article | case-study | tutorial | experiment | breakdown
publishedAt: "2026-07-01"  # ISO date (required)
updatedAt: "2026-07-05"    # optional
tags: ["Paid Media", "GA4"]
featured: false            # spotlight on the index
draft: false               # true = hidden in production
cover: "/images/cover.png" # optional; overrides the auto-generated OG image
---

Your content here.

## A section heading

Body text, **bold**, [links](/work), lists, and code work out of the box.

<Callout type="tip">
Use callouts for key takeaways. type = note | tip | warning.
</Callout>
```

The URL is `/insights/your-slug` (derived from the filename). Slugs should be
lowercase, hyphenated, and stable once published (they're canonical URLs).
