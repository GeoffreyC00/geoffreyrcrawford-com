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

## Contact

- Email: info@geoffreyrcrawford.com
- LinkedIn: https://www.linkedin.com/in/geoffreyrcrawford
