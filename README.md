# GeoffreyRCrawford.com V2

Personal brand and consulting website for Geoffrey R. Crawford.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-style components

## Quick Start

```bash
cd geoffrey-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | Background & story |
| `/services` | Consulting services |
| `/work` | Case studies |
| `/work/[slug]` | Individual case study |
| `/contact` | Contact form |
| `/insights` | Future articles framework |

## Deploy to Vercel

1. Push this folder to its own GitHub repo (or deploy from monorepo root with root directory set to `geoffrey-portfolio`)
2. Import project in Vercel
3. Add domain `geoffreyrcrawford.com`
4. Update DNS at DreamHost (move nameservers from Squarespace first)

## DNS Cutover

1. Change nameservers from Squarespace to DreamHost
2. Add Vercel DNS records per Vercel dashboard
3. Verify SSL
4. Cancel Squarespace
