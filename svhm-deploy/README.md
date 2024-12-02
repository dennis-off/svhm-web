# Schulverein Haseldorfer Marsch – Raus in die Welt

## Raspberry vorbereiten



## Starten

cd svhm-strapi

erzeuge .env Datei
und setze die folgenden Variablen

docker compose -f docker-compose.yml -p svhm-backend up -d

## Restore from backup

um backup zu kopieren

docker cp backup.tar.gz svhm-strapi:/opt/app

docker exec -it svhm-strapi /bin/sh

yarn strapi import --force -f backup.tar.gz

exit

cd ..

## Frontend

cd svhm-app

erzeuge .env Datei
und setze die folgenden Variablen

docker compose -f docker-compose.yml -p svhm-frontend up -d