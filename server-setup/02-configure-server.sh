#!/bin/bash
# ==============================================================
# Step 2: Configure Server (PHP, Nginx, MariaDB, Security)
# ==============================================================
set -euo pipefail

echo "========================================="
echo "  Configuring Server Components"
echo "========================================="

# ---- PHP-FPM Tuning ----
PHP_INI="/etc/php/8.3/fpm/php.ini"
sed -i 's/upload_max_filesize = .*/upload_max_filesize = 64M/' $PHP_INI
sed -i 's/post_max_size = .*/post_max_size = 64M/' $PHP_INI
sed -i 's/memory_limit = .*/memory_limit = 256M/' $PHP_INI
sed -i 's/max_execution_time = .*/max_execution_time = 300/' $PHP_INI
sed -i 's/max_input_time = .*/max_input_time = 300/' $PHP_INI
sed -i 's/;opcache.enable=.*/opcache.enable=1/' $PHP_INI
sed -i 's/;opcache.memory_consumption=.*/opcache.memory_consumption=128/' $PHP_INI
sed -i 's/;opcache.interned_strings_buffer=.*/opcache.interned_strings_buffer=16/' $PHP_INI
sed -i 's/;opcache.max_accelerated_files=.*/opcache.max_accelerated_files=10000/' $PHP_INI
sed -i 's/;opcache.revalidate_freq=.*/opcache.revalidate_freq=60/' $PHP_INI
sed -i 's/;opcache.validate_timestamps=.*/opcache.validate_timestamps=1/' $PHP_INI

# PHP-FPM pool config
PHP_POOL="/etc/php/8.3/fpm/pool.d/www.conf"
sed -i 's/pm = dynamic/pm = dynamic/' $PHP_POOL
sed -i 's/pm.max_children = .*/pm.max_children = 20/' $PHP_POOL
sed -i 's/pm.start_servers = .*/pm.start_servers = 4/' $PHP_POOL
sed -i 's/pm.min_spare_servers = .*/pm.min_spare_servers = 2/' $PHP_POOL
sed -i 's/pm.max_spare_servers = .*/pm.max_spare_servers = 6/' $PHP_POOL

systemctl restart php8.3-fpm

# ---- Nginx Global Config ----
cat > /etc/nginx/nginx.conf << 'NGINX'
user www-data;
worker_processes auto;
pid /run/nginx.pid;
worker_rlimit_nofile 65535;

events {
    worker_connections 2048;
    multi_accept on;
}

http {
    # Basic
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 30;
    types_hash_max_size 2048;
    server_tokens off;
    client_max_body_size 64M;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_types
        text/plain text/css text/xml text/javascript
        application/json application/javascript application/xml
        application/rss+xml application/atom+xml
        image/svg+xml font/woff2;

    # FastCGI Cache
    fastcgi_cache_path /var/cache/nginx levels=1:2 keys_zone=WORDPRESS:100m inactive=60m max_size=512m;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    fastcgi_cache_use_stale error timeout updating invalid_header http_500;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=wp_login:10m rate=1r/s;

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
NGINX

mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled /var/cache/nginx
rm -f /etc/nginx/conf.d/default.conf

# ---- MariaDB Security ----
systemctl start mariadb
systemctl enable mariadb

MYSQL_ROOT_PASS=$(openssl rand -base64 24)
echo "MariaDB root password: $MYSQL_ROOT_PASS" > /root/.db_credentials
chmod 600 /root/.db_credentials

mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASS}';"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "DELETE FROM mysql.user WHERE User='';"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "DROP DATABASE IF EXISTS test;"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "FLUSH PRIVILEGES;"

# ---- Redis Config ----
sed -i 's/# maxmemory .*/maxmemory 128mb/' /etc/redis/redis.conf
sed -i 's/# maxmemory-policy .*/maxmemory-policy allkeys-lru/' /etc/redis/redis.conf
systemctl restart redis-server

# ---- UFW Firewall ----
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ---- Fail2ban ----
cat > /etc/fail2ban/jail.local << 'F2B'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true

[nginx-http-auth]
enabled = true

[wordpress]
enabled = true
port = http,https
filter = wordpress
logpath = /var/log/nginx/*access.log
maxretry = 3
findtime = 300
bantime = 7200
F2B

cat > /etc/fail2ban/filter.d/wordpress.conf << 'F2BFILTER'
[Definition]
failregex = ^<HOST> .* "POST /wp-login.php
            ^<HOST> .* "POST /xmlrpc.php
ignoreregex =
F2BFILTER

systemctl restart fail2ban

# ---- System Cron for WordPress (replaces wp-cron) ----
# Will be populated per-site in site setup scripts

echo ""
echo "✓ Server configured successfully"
echo "  MariaDB credentials saved to /root/.db_credentials"
echo "  Next: Run 03-create-wp-site.sh <domain>"
