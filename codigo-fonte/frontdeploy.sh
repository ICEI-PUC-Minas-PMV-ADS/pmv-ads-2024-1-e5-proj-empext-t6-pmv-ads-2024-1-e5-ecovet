#!/bin/sh
echo ">>> Preparing front deploy"

git pull

mkdir ~/Documentos/deploy_temp/

echo ">>> Cloning repo"

(cd ~/Documentos/deploy_temp/ && git clone git@github.com:ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet.git)

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && git checkout front-deploy)

echo ">>> Clearing folder"

# Não pode apagar pasta Script e aquivo Procfile
(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && rm -rf public && rm -rf src && rm -rf tsconfig.json)

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && rm -rf README.md && rm -rf package-lock.json && rm -rf package.json)

echo ">>> Copying files"

cp -r ./front-app/* ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet

echo ">>> Clearing trash files"

current_date_time=$(date) 
echo ">>> Deploying... $current_date_time"

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && git add . && git commit -m "Deploying at $current_date_time" && git push)

rm -rf ~/Documentos/deploy_temp/

echo ">>> Deployed ..."

heroku logs --tail --app=ecovet