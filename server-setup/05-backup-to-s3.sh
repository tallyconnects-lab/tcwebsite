#!/bin/bash
# ==============================================================
# Step 5: Daily Backup to S3
# Usage: ./05-backup-to-s3.sh <s3-bucket-name>
# Requires: aws cli configured with IAM credentials
# ==============================================================
set -euo pipefail

S3_BUCKET="${1:?Usage: $0 <s3-bucket-name>}"

# Install AWS CLI if not present
if ! command -v aws &>/dev/null; then
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "/tmp/awscliv2.zip"
  unzip -q /tmp/awscliv2.zip -d /tmp
  /tmp/aws/install
  rm -rf /tmp/aws /tmp/awscliv2.zip
fi

# Create backup script
cat > /usr/local/bin/wp-backup.sh << 'BACKUP'
#!/bin/bash
set -euo pipefail
BACKUP_DIR="/tmp/wp-backups"
S3_BUCKET="__S3_BUCKET__"
DATE=$(date +%Y-%m-%d)
MYSQL_ROOT_PASS=$(cat /root/.db_credentials | grep 'root password' | cut -d' ' -f4)

mkdir -p "${BACKUP_DIR}"

# Backup each WordPress site
for SITE_DIR in /var/www/*/wp-config.php; do
  [ -f "$SITE_DIR" ] || continue
  WEB_ROOT=$(dirname "$SITE_DIR")
  DOMAIN=$(basename "$WEB_ROOT")
  DB_NAME=$(grep "DB_NAME" "$SITE_DIR" | cut -d"'" -f4)

  echo "Backing up ${DOMAIN}..."

  # Database dump
  mysqldump -u root -p"${MYSQL_ROOT_PASS}" "${DB_NAME}" | gzip > "${BACKUP_DIR}/${DOMAIN}-db-${DATE}.sql.gz"

  # Files (wp-content only — core can be reinstalled)
  tar czf "${BACKUP_DIR}/${DOMAIN}-files-${DATE}.tar.gz" -C "${WEB_ROOT}" wp-content

  # Upload to S3
  aws s3 cp "${BACKUP_DIR}/${DOMAIN}-db-${DATE}.sql.gz" "s3://${S3_BUCKET}/backups/${DOMAIN}/"
  aws s3 cp "${BACKUP_DIR}/${DOMAIN}-files-${DATE}.tar.gz" "s3://${S3_BUCKET}/backups/${DOMAIN}/"

  # Cleanup local
  rm -f "${BACKUP_DIR}/${DOMAIN}-db-${DATE}.sql.gz" "${BACKUP_DIR}/${DOMAIN}-files-${DATE}.tar.gz"
done

# Delete S3 backups older than 30 days
aws s3 ls "s3://${S3_BUCKET}/backups/" --recursive | \
  awk '{print $4}' | while read -r key; do
    file_date=$(echo "$key" | grep -oP '\d{4}-\d{2}-\d{2}')
    if [ -n "$file_date" ]; then
      file_epoch=$(date -d "$file_date" +%s 2>/dev/null || echo 0)
      cutoff_epoch=$(date -d "30 days ago" +%s)
      if [ "$file_epoch" -lt "$cutoff_epoch" ] && [ "$file_epoch" -gt 0 ]; then
        aws s3 rm "s3://${S3_BUCKET}/${key}"
      fi
    fi
  done

echo "✓ Backup complete: ${DATE}"
BACKUP

sed -i "s|__S3_BUCKET__|${S3_BUCKET}|g" /usr/local/bin/wp-backup.sh
chmod +x /usr/local/bin/wp-backup.sh

# Add daily cron at 2 AM
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/wp-backup.sh >> /var/log/wp-backup.log 2>&1") | sort -u | crontab -

echo "✓ Daily backup configured → s3://${S3_BUCKET}/backups/"
