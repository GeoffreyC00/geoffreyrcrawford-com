#!/usr/bin/env bash
# Create a dated source backup of geoffreyrcrawford.com (no node_modules / .next)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BACKUPS_DIR="$(cd "$ROOT/.." && pwd)/backups"
DATE="$(date +%Y-%m-%d)"
ARCHIVE="$BACKUPS_DIR/geoffreyrcrawford-com-$DATE.tar.gz"

mkdir -p "$BACKUPS_DIR"

tar \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  -czf "$ARCHIVE" \
  -C "$ROOT" .

echo "Backup created: $ARCHIVE"
ls -lh "$ARCHIVE"
