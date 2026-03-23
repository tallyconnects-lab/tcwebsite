#!/bin/bash
# ==============================================================
# Step 4: SSL Setup via Let's Encrypt
# Usage: ./04-ssl-setup.sh <domain> <email>
# ==============================================================
set -euo pipefail

DOMAIN="${1:?Usage: $0 <domain> <email>}"
EMAIL="${2:?Provide email for Let's Encrypt}"

echo "Setting up SSL for ${DOMAIN}..."

certbot --nginx \
  -d "${DOMAIN}" \
  -d "www.${DOMAIN}" \
  --non-interactive \
  --agree-tos \
  --email "${EMAIL}" \
  --redirect

# Auto-renewal cron (certbot usually adds this, but ensure it)
systemctl enable certbot.timer 2>/dev/null || \
  (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --deploy-hook 'systemctl reload nginx'") | sort -u | crontab -

echo "✓ SSL configured for ${DOMAIN}"
