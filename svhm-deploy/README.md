# Schulverein Haseldorfer Marsch – Raus in die Welt

## Konfigurieren

erzeuge .env Datei

und setze die folgenden Variablen

## Starten

docker compose up

## Restore from backup

um backup zu kopieren

docker cp backup.tar.gz svhm-strapi:/opt/app

docker exec -it svhm-strapi bash

yarn strapi import --force -f backup.tar.gz
