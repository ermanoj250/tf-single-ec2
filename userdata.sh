#!/bin/bash

apt update -y

apt install -y \
python3 \
python3-pip \
nodejs \
npm \
nginx \
git

cd /home/ubuntu

# Clone repo (replace with your GitHub repo)
git clone https://github.com/ermanoj250/tf-single-ec2.git app

cd app

#########################
# Flask Backend
#########################
cd aws_backend
pip3 install -r requirements.txt

nohup python3 app.py > flask.log 2>&1 &

cd ..

#########################
# Express Frontend
#########################
cd aws_frontend
npm install

nohup node server.js > frontend.log 2>&1 &

cd ..

#########################
# Nginx Reverse Proxy
#########################

cat <<EOF > /etc/nginx/sites-available/default
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }

    location /api/ {
        proxy_pass http://localhost:5000/;
    }
}
EOF

systemctl restart nginx
systemctl enable nginx