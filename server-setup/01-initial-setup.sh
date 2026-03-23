#!/bin/bash
# ==============================================================
# Step 1: Initial Server Setup for Multi-WordPress EC2 Instance
# Run as root or with sudo on fresh Ubuntu 24.04 LTS
# ==============================================================
set -euo pipefail

echo "========================================="
echo "  WordPress Multi-Site Server Setup"
echo "========================================="

# Update system
apt update && apt upgrade -y

# Install essential tools
apt install -y \
  curl wget git unzip software-properties-common \
  htop ncdu tree ufw fail2ban

# ---- Nginx (mainline) ----
curl -fsSL https://nginx.org/keys/nginx_signing.key | gpg --dearmor -o /usr/share/keyrings/nginx-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/mainline/ubuntu $(lsb_release -cs) nginx" \
  > /etc/apt/sources.list.d/nginx.list
apt update && apt install -y nginx

# ---- PHP 8.3 ----
add-apt-repository -y ppa:ondrej/php
apt update
apt install -y \
  php8.3-fpm php8.3-mysql php8.3-curl php8.3-gd php8.3-mbstring \
  php8.3-xml php8.3-zip php8.3-intl php8.3-soap php8.3-imagick \
  php8.3-redis php8.3-bcmath php8.3-opcache

# ---- MariaDB 11 ----
curl -fsSL https://mariadb.org/mariadb_release_signing_key.pgp | gpg --dearmor -o /usr/share/keyrings/mariadb-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb-archive-keyring.gpg] https://mirror.mariadb.org/repo/11.4/ubuntu $(lsb_release -cs) main" \
  > /etc/apt/sources.list.d/mariadb.list
apt update && apt install -y mariadb-server

# ---- Redis ----
apt install -y redis-server
systemctl enable redis-server

# ---- Certbot (Let's Encrypt) ----
apt install -y certbot python3-certbot-nginx

# ---- WP-CLI ----
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

# ---- WebP support for image optimization ----
apt install -y libwebp-dev webp

echo ""
echo "✓ All packages installed successfully"
echo "  Next: Run 02-configure-server.sh"
