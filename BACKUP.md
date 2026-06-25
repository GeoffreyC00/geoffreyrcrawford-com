# Backup & restore — geoffreyrcrawford.com

## Live site

| | URL |
|---|-----|
| **Production** | https://www.geoffreyrcrawford.com |
| **Root (redirects to www)** | https://geoffreyrcrawford.com |
| **Vercel preview** | https://geoffreyrcrawford-com.vercel.app |

## GitHub (primary backup)

**Repo:** https://github.com/GeoffreyC00/geoffreyrcrawford-com

Every push to `main` auto-deploys on Vercel.

```bash
git clone https://github.com/GeoffreyC00/geoffreyrcrawford-com.git
cd geoffreyrcrawford-com
npm install
npm run dev
```

## Local project path

```
~/Desktop/KEEP -ThinkMediaReporting -KEEP /geoffrey-portfolio/
```

## Local archive backups

Dated snapshots live in the parent workspace:

```
~/Desktop/KEEP -ThinkMediaReporting -KEEP /backups/
  geoffreyrcrawford-com-YYYY-MM-DD.tar.gz
  SESSION-SNAPSHOT-GEOFFREYRCRAWFORD-YYYY-MM-DD.md
```

### Create a new backup

```bash
cd geoffrey-portfolio
chmod +x scripts/backup.sh   # once
./scripts/backup.sh
```

### Restore from archive

```bash
mkdir geoffreyrcrawford-restore && cd geoffreyrcrawford-restore
tar -xzf ../backups/geoffreyrcrawford-com-2026-06-17.tar.gz
npm install
npm run dev
```

## DNS & hosting

| Service | Role |
|---------|------|
| **Vercel** | Website hosting + SSL |
| **Squarespace Domains** | DNS (Vercel preset) + Google Workspace MX |
| **GitHub** | Source control |

## Environment variables (Vercel)

Add these in **Vercel → Project → Settings → Environment Variables**:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Contact form email delivery ([resend.com](https://resend.com)) |
| `CONTACT_TO_EMAIL` | Where form submissions go (`info@geoffreyrcrawford.com`) |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend (use your domain once verified) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |

Copy `.env.example` locally for development. Without `RESEND_API_KEY`, the contact form falls back to `mailto:`.

## Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://www.geoffreyrcrawford.com`
3. Verify via DNS TXT record in Squarespace Domains (or HTML tag in Vercel)
4. Submit sitemap: `https://www.geoffreyrcrawford.com/sitemap.xml` (add later if needed)

## Cancel Squarespace website

Your site is live on Vercel. You can cancel **Squarespace website hosting** — keep **Squarespace Domains** for DNS and Google Workspace email.

1. Squarespace → Settings → Billing → cancel website plan
2. Keep domain + DNS (Vercel preset + Google Workspace MX records)
3. Do **not** delete Google Workspace MX records

