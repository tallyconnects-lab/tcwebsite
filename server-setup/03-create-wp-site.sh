#!/bin/bash
# ==============================================================
# Step 3: Create a new WordPress site
# Usage: ./03-create-wp-site.sh <domain> <site_title> <admin_email>
# Example: ./03-create-wp-site.sh tallyconnects.com "TallyConnects" admin@tallyconnects.com
# ==============================================================
set -euo pipefail

DOMAIN="${1:?Usage: $0 <domain> <site_title> <admin_email>}"
SITE_TITLE="${2:?Provide site title}"
ADMIN_EMAIL="${3:?Provide admin email}"
WEB_ROOT="/var/www/${DOMAIN}"
DB_NAME="wp_$(echo $DOMAIN | tr '.' '_' | tr '-' '_')"
DB_USER="wp_$(echo $DOMAIN | cut -d. -f1 | head -c 12)"
DB_PASS=$(openssl rand -base64 18)
WP_ADMIN_PASS=$(openssl rand -base64 16)
MYSQL_ROOT_PASS=$(cat /root/.db_credentials | grep 'root password' | cut -d' ' -f4)

echo "========================================="
echo "  Setting up WordPress: ${DOMAIN}"
echo "========================================="

# ---- Create Database ----
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "
  CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
  GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'localhost';
  FLUSH PRIVILEGES;
"

# ---- Download & Install WordPress ----
mkdir -p "${WEB_ROOT}"
cd "${WEB_ROOT}"
wp core download --allow-root
wp config create --dbname="${DB_NAME}" --dbuser="${DB_USER}" --dbpass="${DB_PASS}" --dbhost="localhost" --allow-root

# Extra wp-config settings
wp config set WP_CACHE true --raw --allow-root
wp config set DISABLE_WP_CRON true --raw --allow-root
wp config set WP_POST_REVISIONS 5 --raw --allow-root
wp config set AUTOSAVE_INTERVAL 300 --raw --allow-root
wp config set WP_MEMORY_LIMIT '256M' --allow-root
wp config set WP_MAX_MEMORY_LIMIT '512M' --allow-root
wp config set DISALLOW_FILE_EDIT true --raw --allow-root

wp core install \
  --url="https://${DOMAIN}" \
  --title="${SITE_TITLE}" \
  --admin_user="admin" \
  --admin_password="${WP_ADMIN_PASS}" \
  --admin_email="${ADMIN_EMAIL}" \
  --allow-root

# ---- Permalink structure ----
wp rewrite structure '/%postname%/' --allow-root
wp rewrite flush --allow-root

# ---- Install essential plugins ----
wp plugin install elementor --activate --allow-root
wp plugin install wordpress-seo --activate --allow-root  # Yoast as fallback if RankMath unavailable via CLI
wp plugin install redis-cache --activate --allow-root
wp plugin install wpforms-lite --activate --allow-root
wp plugin install insert-headers-and-footers --activate --allow-root
wp plugin install webp-converter-for-media --activate --allow-root

# Enable Redis object cache
wp redis enable --allow-root 2>/dev/null || true

# ---- Install RankMath (if available) ----
wp plugin install seo-by-rank-math --activate --allow-root 2>/dev/null && \
  wp plugin deactivate wordpress-seo --allow-root 2>/dev/null || true

# ---- Remove default plugins & themes ----
wp plugin delete hello --allow-root 2>/dev/null || true
wp plugin delete akismet --allow-root 2>/dev/null || true
wp theme delete twentytwentythree --allow-root 2>/dev/null || true
wp theme delete twentytwentytwo --allow-root 2>/dev/null || true

# ---- Disable XML-RPC ----
cat > "${WEB_ROOT}/xmlrpc-block.php" << 'XMLRPC'
<?php
// Block XML-RPC
add_filter('xmlrpc_enabled', '__return_false');
add_filter('wp_headers', function($headers) {
    unset($headers['X-Pingback']);
    return $headers;
});
XMLRPC

# ---- Set permissions ----
chown -R www-data:www-data "${WEB_ROOT}"
find "${WEB_ROOT}" -type d -exec chmod 755 {} \;
find "${WEB_ROOT}" -type f -exec chmod 644 {} \;

# ---- Create Nginx vhost ----
cat > "/etc/nginx/sites-available/${DOMAIN}" << VHOST
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    root ${WEB_ROOT};
    index index.php index.html;

    access_log /var/log/nginx/${DOMAIN}.access.log;
    error_log /var/log/nginx/${DOMAIN}.error.log;

    # FastCGI cache skip conditions
    set \$skip_cache 0;
    if (\$request_method = POST) { set \$skip_cache 1; }
    if (\$query_string != "") { set \$skip_cache 1; }
    if (\$request_uri ~* "/wp-admin/|/wp-json/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
        set \$skip_cache 1;
    }
    if (\$http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in") {
        set \$skip_cache 1;
    }

    # Static file caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Block XML-RPC
    location = /xmlrpc.php { deny all; }

    # Rate limit wp-login
    location = /wp-login.php {
        limit_req zone=wp_login burst=3 nodelay;
        include fastcgi_params;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
    }

    # WordPress permalinks
    location / {
        try_files \$uri \$uri/ /index.php?\$args;
    }

    # PHP handling with FastCGI cache
    location ~ \.php$ {
        try_files \$uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;

        # FastCGI Cache
        fastcgi_cache WORDPRESS;
        fastcgi_cache_valid 200 60m;
        fastcgi_cache_bypass \$skip_cache;
        fastcgi_no_cache \$skip_cache;
        add_header X-Cache \$upstream_cache_status;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # Block access to sensitive files
    location ~ /\.(ht|git|env) { deny all; }
    location ~* /(?:uploads|files)/.*\.php$ { deny all; }

    # Robots.txt
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }
}
VHOST

ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
nginx -t && systemctl reload nginx

# ---- Add WP-Cron to system cron ----
(crontab -l 2>/dev/null; echo "*/5 * * * * cd ${WEB_ROOT} && /usr/local/bin/wp cron event run --due-now --allow-root > /dev/null 2>&1") | crontab -

# ---- Save credentials ----
cat >> /root/.db_credentials << CREDS

--- ${DOMAIN} ---
DB Name: ${DB_NAME}
DB User: ${DB_USER}
DB Pass: ${DB_PASS}
WP Admin: admin
WP Admin Pass: ${WP_ADMIN_PASS}
WP Admin Email: ${ADMIN_EMAIL}
Web Root: ${WEB_ROOT}
CREDS

echo ""
echo "========================================="
echo "  ✓ WordPress installed: ${DOMAIN}"
echo "========================================="
echo "  URL: https://${DOMAIN}"
echo "  Admin: https://${DOMAIN}/wp-admin"
echo "  User: admin"
echo "  Pass: ${WP_ADMIN_PASS}"
echo ""
echo "  Next steps:"
echo "  1. Point DNS A record to this server IP"
echo "  2. Run: certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo "  3. Install your theme via wp-admin"
echo "========================================="
