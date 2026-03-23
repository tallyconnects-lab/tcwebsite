# WordPress Server — Setup Details

## Server
- **IP:** 13.127.176.233
- **Region:** ap-south-1 (Mumbai)
- **Instance:** t3.medium (2 vCPU, 4GB RAM)
- **OS:** Ubuntu 24.04 LTS
- **SSH Key:** `D:\TC website AWS keypaire\TC_websites.pem`
- **SSH Command:** `ssh -i "D:\TC website AWS keypaire\TC_websites.pem" ubuntu@13.127.176.233`

## Stack Installed
- Nginx (mainline) with FastCGI cache
- PHP 8.3-FPM with OPcache
- MariaDB 11
- Redis (128MB, LRU eviction)
- WP-CLI
- Certbot (Let's Encrypt)
- UFW Firewall (22, 80, 443)
- Fail2ban (SSH + WordPress login)

## Site 1: exceltotallyprime.com
- **URL:** https://exceltotallyprime.com
- **WP Admin:** https://exceltotallyprime.com/wp-admin
- **Admin User:** admin
- **Admin Pass:** LMyBWZmRdzsv7UPEwBZsZQ==
- **Web Root:** /var/www/exceltotallyprime.com
- **DB Name:** wp_exceltotallyprime_com
- **DB User:** wp_exceltotally
- **DB Pass:** Y86v0xCvpHgks7LeKlEYuk6S
- **SSL:** Let's Encrypt (expires 2026-06-02, auto-renew enabled)
- **DNS:** A record → 13.127.176.233

### Plugins Installed
- Elementor
- RankMath SEO
- Redis Object Cache
- WPForms Lite
- WPCode (Insert Headers & Footers)
- WebP Converter for Media

## Site 2: tallyconnects.com
- **URL:** https://tallyconnects.com (DNS not pointed yet)
- **WP Admin:** https://tallyconnects.com/wp-admin
- **Admin User:** admin
- **Admin Pass:** UwW4Sh4s83hLP+zqd+p/YQ==
- **Web Root:** /var/www/tallyconnects.com
- **DB Name:** wp_tallyconnects_com
- **DB User:** wp_tallyconnect
- **DB Pass:** Y0RR/KEJby36/0toHBh0py4q
- **SSL:** Pending (need DNS pointed first)

### Plugins Installed
- Elementor
- RankMath SEO
- Redis Object Cache
- WPForms Lite
- WPCode (Insert Headers & Footers)
- WebP Converter for Media

## MariaDB Root
- **Password:** kJbIZwM6i2m8FfQPJEZ7RAlTpZAsuyAz
- Also saved on server at `/root/.db_credentials`

## Server Configuration
- PHP upload limit: 64MB
- PHP memory: 256MB
- PHP-FPM: dynamic, max 20 children
- Nginx: FastCGI cache (60min), Gzip compression
- WordPress cron: disabled (system cron every 5 min)
- Post revisions: limited to 5
- File editing: disabled in wp-admin

## Security
- UFW: only ports 22, 80, 443
- Fail2ban: SSH (5 attempts/10min), WP login (3 attempts/5min)
- XML-RPC: blocked
- Server tokens: hidden
- Sensitive files (.ht, .git, .env): blocked

## Adding New Sites
```bash
ssh -i "D:\TC website AWS keypaire\TC_websites.pem" ubuntu@13.127.176.233
sudo bash ~/03-create-wp-site.sh newdomain.com "Site Title" admin@newdomain.com
# Point DNS, then:
sudo bash ~/04-ssl-setup.sh newdomain.com admin@newdomain.com
```

## Setup Date
2026-03-04
