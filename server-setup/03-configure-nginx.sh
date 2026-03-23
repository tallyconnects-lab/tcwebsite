#!/bin/bash
# ============================================
# Step 3: Nginx Configuration
# ============================================
set -e

echo "=== Creating Nginx main config ==="
cat > /etc/nginx/nginx.conf << 'EOF'
user www-data;
worker_processes auto;
pid /run/nginx.pid;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}

http {
    # Basic
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 30;
    types_hash_max_size 2048;
    server_tokens off;
    client_max_body_size 256m;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 1000;

    # FastCGI Cache
    fastcgi_cache_path /tmp/nginx-cache levels=1:2 keys_zone=WORDPRESS:100m inactive=60m max_size=512m;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    fastcgi_cache_use_stale error timeout invalid_header http_500;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=wp_login:10m rate=1r/s;

    # Include site configs
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
EOF

echo "=== Creating FastCGI params ==="
cat > /etc/nginx/fastcgi-wp.conf << 'EOF'
fastcgi_pass unix:/run/php/php8.3-fpm.sock;
fastcgi_index index.php;
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;

# Cache settings
fastcgi_cache WORDPRESS;
fastcgi_cache_valid 200 60m;
fastcgi_cache_valid 404 1m;
fastcgi_cache_bypass $skip_cache;
fastcgi_no_cache $skip_cache;
add_header X-Cache $upstream_cache_status;
EOF

echo "=== Creating WordPress Nginx vhost template ==="
mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled

# Remove default
rm -f /etc/nginx/sites-enabled/default /etc/nginx/conf.d/default.conf

echo "=== Creating tallyconnects.com vhost ==="
cat > /etc/nginx/sites-available/tallyconnects.com << 'VHOST'
server {
    listen 80;
    server_name tallyconnects.com www.tallyconnects.com;
    root /var/www/tallyconnects.com/public_html;
    index index.php index.html;

    access_log /var/log/nginx/tallyconnects.com-access.log;
    error_log /var/log/nginx/tallyconnects.com-error.log;

    # Cache skip conditions
    set $skip_cache 0;
    if ($request_method = POST) { set $skip_cache 1; }
    if ($query_string != "") { set $skip_cache 1; }
    if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|^/feed/*|/tag/.*/feed/*|index.php|sitemap(_index)?.xml") {
        set $skip_cache 1;
    }
    if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in") {
        set $skip_cache 1;
    }

    # WordPress permalinks
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    # PHP handling with FastCGI cache
    location ~ \.php$ {
        try_files $uri =404;
        include /etc/nginx/fastcgi-wp.conf;
    }

    # Static asset caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|avif|woff|woff2|ttf|svg|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Security
    location ~ /\.ht { deny all; }
    location = /xmlrpc.php { deny all; }
    location ~* /wp-config.php { deny all; }
    location ~* /wp-includes/.*\.php$ { deny all; }
    location ~* /wp-content/uploads/.*\.php$ { deny all; }

    # Rate limit wp-login
    location = /wp-login.php {
        limit_req zone=wp_login burst=3 nodelay;
        include /etc/nginx/fastcgi-wp.conf;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # Robots.txt
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }
}
VHOST

echo "=== Creating exceltotallyprime.com vhost ==="
sed 's/tallyconnects\.com/exceltotallyprime.com/g; s/tallyconnects/exceltotallyprime/g' \
    /etc/nginx/sites-available/tallyconnects.com > /etc/nginx/sites-available/exceltotallyprime.com

echo "=== Enabling sites ==="
ln -sf /etc/nginx/sites-available/tallyconnects.com /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/exceltotallyprime.com /etc/nginx/sites-enabled/

nginx -t && systemctl restart nginx

echo "=== Step 3 Complete ==="
echo "Next: Run 04-install-wordpress.sh"
