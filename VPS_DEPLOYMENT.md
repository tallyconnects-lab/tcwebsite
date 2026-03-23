# VPS Deployment Details

## Server
- **IP:** 13.127.176.233
- **SSH Key:** `D:\TC website AWS keypaire\TC_websites.pem`
- **User:** ubuntu
- **Domain:** exceltotallyprime.com
- **DNS:** Managed at domain registrar (A record → 13.127.176.233)

## SSH Command
```bash
ssh -i "D:/TC website AWS keypaire/TC_websites.pem" ubuntu@13.127.176.233
```

## App Details
- **Web Root:** `/var/www/exceltotallyprime.com`
- **Framework:** Next.js 16.1.6
- **Node.js:** v20.20.1
- **PM2 Process Name:** `exceltotallyprime`
- **App Port:** 3003
- **SSL:** Let's Encrypt (auto-managed by Certbot)

## Server Stack
- **Web Server:** Nginx (reverse proxy → localhost:3003)
- **PHP:** 8.3-FPM (for other sites on same server)
- **Database:** MariaDB
- **Process Manager:** PM2 v6.0.14

## Deploy Updates
```bash
# 1. Build locally (optional - or build on server)
npm run build

# 2. Upload files to server
scp -i "D:/TC website AWS keypaire/TC_websites.pem" -r app components public next.config.ts package.json package-lock.json postcss.config.mjs tsconfig.json ubuntu@13.127.176.233:/var/www/exceltotallyprime.com/

# 3. SSH in, install & rebuild
ssh -i "D:/TC website AWS keypaire/TC_websites.pem" ubuntu@13.127.176.233 "cd /var/www/exceltotallyprime.com && npm install && npm run build && pm2 restart exceltotallyprime"
```

## PM2 Commands
```bash
pm2 status                        # Check status
pm2 restart exceltotallyprime     # Restart app
pm2 logs exceltotallyprime        # View logs
pm2 stop exceltotallyprime        # Stop app
```

## Nginx Config
- **Location:** `/etc/nginx/sites-enabled/exceltotallyprime.com`
- **Test:** `sudo nginx -t`
- **Reload:** `sudo systemctl reload nginx`

## Other Sites on Same Server
excceltotallypirme.com, excel-tally.com, preciseca.com, preciseint.com, tallyconnector.in, tallyconnects.com, wtconnects.com
