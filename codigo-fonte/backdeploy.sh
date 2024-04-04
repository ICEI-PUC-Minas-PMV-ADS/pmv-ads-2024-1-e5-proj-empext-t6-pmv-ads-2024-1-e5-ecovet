#!/bin/sh
echo ">>> Preparing back deploy"

git pull

mkdir ~/Documentos/deploy_temp/

echo ">>> Cloning repo"

(cd ~/Documentos/deploy_temp/ && git clone git@github.com:ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet.git)

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && git checkout back-deploy)

echo ">>> Clearing folder"

# (cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && rm -rf apresentacao && rm -rf atas && rm -rf codigo-fonte && rm -rf proex && rm -rf README.md && rm -rf documentos)

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && rm -rf Application.Tests && rm -rf Application && rm -rf DbAdapter && rm -rf Domain && rm -rf back-app && rm -rf back-app.sln)

echo ">>> Copying files"

cp -r ./back-app/* ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet

echo ">>> Clearing trash files"

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet/back-app && rm -rf 'back-app - Backup.csproj')

current_date_time=$(date) 
echo ">>> Deploying... $current_date_time"

(cd ~/Documentos/deploy_temp/pmv-ads-2024-1-e5-proj-empext-t6-pmv-ads-2024-1-e5-ecovet && git add . && git commit -m "Deploying at $current_date_time" && git push)

rm -rf ~/Documentos/deploy_temp/

heroku logs --tail --app=ecovet-api