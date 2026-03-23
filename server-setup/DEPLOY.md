# WordPress Server Deployment Guide

## Pre-requisites
- EC2 instance running Ubuntu 24.04 LTS (t3.medium recommended)
- Elastic IP attached
- Security group: SSH(22), HTTP(80), HTTPS(443)
- SSH key file on your local machine

## Deployment Steps

### 1. Upload scripts to server
```bash
SSH_KEY="D:\IRRIION server keypair\IRRIIONserver.pem"
SERVER_IP="<YOUR_EC2_IP>"

scp -i "$SSH_KEY" -r server-setup/ ubuntu@${SERVER_IP}:~/
ssh -i "$SSH_KEY" ubuntu@${SERVER_IP} "chmod +x ~/server-setup/*.sh"
```

### 2. Run setup (SSH into server)
```bash
ssh -i "$SSH_KEY" ubuntu@${SERVER_IP}

# Step 1: Install packages (~5 min)
sudo bash ~/server-setup/01-initial-setup.sh

# Step 2: Configure server
sudo bash ~/server-setup/02-configure-server.sh

# Step 3: Create tallyconnects.com
sudo bash ~/server-setup/03-create-wp-site.sh tallyconnects.com "TallyConnects" admin@tallyconnects.com

# Step 4: Create exceltotallyprime.com
sudo bash ~/server-setup/03-create-wp-site.sh exceltotallyprime.com "Excel to Tally Prime" admin@exceltotallyprime.com

# Step 5: SSL (after DNS is pointed)
sudo bash ~/server-setup/04-ssl-setup.sh tallyconnects.com admin@tallyconnects.com
sudo bash ~/server-setup/04-ssl-setup.sh exceltotallyprime.com admin@exceltotallyprime.com

# Step 6: Backups (optional, needs AWS CLI configured)
sudo bash ~/server-setup/05-backup-to-s3.sh my-wp-backups-bucket
```

### 3. DNS Setup
Point these A records to your server IP:
- `tallyconnects.com` → `<SERVER_IP>`
- `www.tallyconnects.com` → `<SERVER_IP>`
- `exceltotallyprime.com` → `<SERVER_IP>`
- `www.exceltotallyprime.com` → `<SERVER_IP>`

### 4. Post-install
- Login to wp-admin for each site
- Install your preferred theme
- Configure RankMath SEO
- Paste content from Content_AllPages.md into pages

## Credentials
All credentials are saved on the server at `/root/.db_credentials`

## Adding More Sites
Just run step 3 again with a new domain:
```bash
sudo bash ~/server-setup/03-create-wp-site.sh newsite.com "New Site" admin@newsite.com
```
