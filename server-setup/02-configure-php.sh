#!/bin/bash
# ============================================
# Step 2: PHP & MariaDB Configuration
# ============================================
set -e

echo "=== Configuring PHP 8.3-FPM ==="

# PHP-FPM pool config
cat > /etc/php/8.3/fpm/pool.d/www.conf << 'EOF'
[www]
user = www-data
group = www-data
listen = /run/php/php8.3-fpm.sock
listen.owner = www-data
listen.group = www-data

pm = dynamic
pm.max_children = 20
pm.start_servers = 5
pm.min_spare_servers = 3
pm.max_spare_servers = 10
pm.max_requests = 500

; Security
php_admin_value[disable_functions] = exec,passthru,shell_exec,system,proc_open,popen
php_admin_flag[allow_url_fopen] = on
EOF

# PHP.ini optimizations
PHP_INI="/etc/php/8.3/fpm/php.ini"

sed -i 's/upload_max_filesize = .*/upload_max_filesize = 256M/' $PHP_INI
sed -i 's/post_max_size = .*/post_max_size = 256M/' $PHP_INI
sed -i 's/memory_limit = .*/memory_limit = 512M/' $PHP_INI
sed -i 's/max_execution_time = .*/max_execution_time = 300/' $PHP_INI
sed -i 's/max_input_time = .*/max_input_time = 300/' $PHP_INI
sed -i 's/max_input_vars = .*/max_input_vars = 5000/' $PHP_INI

# OPcache configuration
cat > /etc/php/8.3/fpm/conf.d/10-opcache-custom.ini << 'EOF'
opcache.enable=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=10000
opcache.revalidate_freq=60
opcache.save_comments=1
opcache.enable_file_override=1
EOF

systemctl restart php8.3-fpm

echo "=== Securing MariaDB ==="
# Set root password and secure installation
MYSQL_ROOT_PASS=$(openssl rand -base64 24)
echo "MariaDB root password: $MYSQL_ROOT_PASS" > /root/.db_credentials
chmod 600 /root/.db_credentials

mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASS}';"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "DELETE FROM mysql.user WHERE User='';"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "DROP DATABASE IF EXISTS test;"
mysql -u root -p"${MYSQL_ROOT_PASS}" -e "FLUSH PRIVILEGES;"

echo "=== Creating WordPress databases ==="
WP_TC_PASS=$(openssl rand -base64 16)
WP_ETP_PASS=$(openssl rand -base64 16)

mysql -u root -p"${MYSQL_ROOT_PASS}" << EOSQL
CREATE DATABASE wp_tallyconnects CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wp_tc'@'localhost' IDENTIFIED BY '${WP_TC_PASS}';
GRANT ALL PRIVILEGES ON wp_tallyconnects.* TO 'wp_tc'@'localhost';

CREATE DATABASE wp_exceltotallyprime CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wp_etp'@'localhost' IDENTIFIED BY '${WP_ETP_PASS}';
GRANT ALL PRIVILEGES ON wp_exceltotallyprime.* TO 'wp_etp'@'localhost';

FLUSH PRIVILEGES;
EOSQL

# Save credentials
cat >> /root/.db_credentials << EOF

--- WordPress Database Credentials ---
tallyconnects.com:
  DB: wp_tallyconnects
  User: wp_tc
  Pass: ${WP_TC_PASS}

exceltotallyprime.com:
  DB: wp_exceltotallyprime
  User: wp_etp
  Pass: ${WP_ETP_PASS}
EOF

echo "=== Configuring Redis ==="
sed -i 's/# maxmemory .*/maxmemory 256mb/' /etc/redis/redis.conf
sed -i 's/# maxmemory-policy .*/maxmemory-policy allkeys-lru/' /etc/redis/redis.conf
systemctl restart redis-server

echo "=== Step 2 Complete ==="
echo "DB credentials saved to /root/.db_credentials"
echo "Next: Run 03-configure-nginx.sh"
