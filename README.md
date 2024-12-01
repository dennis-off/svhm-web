# Schulverein Haseldorfer Marsch – Deine digitale Plattform

![LaunchPad](./svhm.jpg)

Willkommen an Bord! **Schulverein Haseldorfer Marsch**, die inoffizielle Plattform des Schulvereins, bringt alle Informationen, Dokumente und Links an einem Ort zusammen.

Dieses Repository enthält:

- Ein Strapi-Projekt mit den zuletzt archivierten Inhalten und Daten
- Eine React-Anwendung, die Inhalte direkt aus Strapi bezieht und dir bereitstellt
- Ein Docker-Projekt für das Erstellen des Backend und Frontend

## 1. Das Projekt klonen

Klone das Repo mit folgendem Befehl:

```
git clone https://github.com/dennis-off/svhm-web.git
```

- Navigiere zu deinem Startpunkt mit `cd svhm-web`.

## 🌟 2. Konfiguration erstellen

Leg los! Du kannst die Plattform entweder lokal einrichten, indem du die unten stehenden Anweisungen befolgst, oder du schaust dir die [Webseite live in Aktion an](https://lucky-safe-bream.ngrok-free.app/).

Stelle sicher, dass du die richtigen Umgebungsvariablen für jeden Teil geladen hast:

Strapi (Beispiel in `./svhm-strapi/.env.example`):

- `STRAPI_ADMIN_CLIENT_URL=<url-von-nextjs>`
- `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<ein-zufallstoken>`

- Erstelle eine `./svhm-strapi/.env`-Datei mit diesen Variablen.

React (Beispiel in `./svhm-app/.env.sample`):

- `NEXT_PUBLIC_API_URL=<url-von-strapi>` (Pflicht)
- `PREVIEW_SECRET=<dasselbe-zufallstoken-wie-für-strapi>`

- Erstelle eine `./svhm-app/.env`-Datei mit diesen Variablen.

## 2. Strapi starten

Atme tief durch. Es ist Zeit, die Strapi-Motoren hochzufahren. Navigiere zum `./svhm-web/svhm-strapi`-Ordner, indem du den folgenden Befehl ausführst:

Navigiere zu deinem `./svhm-web/svhm-strapi`-Ordner mit `cd svhm-strapi` in der Kommandozeile.

- Führe folgenden Befehl im `./svhm-web/svhm-strapi`-Ordner aus:

```
yarn
yarn strapi import --force -f ../svhm-deploy/svhm-strapi/backup.tar.gz
yarn develop
```

Dies installiert die Abhängigkeiten, fügt die initialien Daten hinzu und startet den Server.

## 3. React starten

Wir sind fast da! Die `App` ist dein schlanker, minimalistischer Zugang, um all den großartigen Inhalt in die Welt zu bringen. 🚀

Navigiere zum `./svhm-web/svhm-app`-Ordner, indem du den folgenden Befehl ausführst:

Navigiere zu deinem `./svhm-web/svhm-app`-Ordner mit `cd svhm-app` in der Kommandozeile.

- Führe folgenden Befehl im `./svhm-web/svhm-app`-Ordner aus:

```
yarn && yarn build && yarn start
```

Dies installiert die Abhängigkeiten, baut dein Projekt und startet den Server. Du bist jetzt bereit!

## Resourcen

[Docs](https://docs.strapi.io)

## Todo

- [ ] Shop

## Anpassungen speziell für dieses Projekt

- Die Strapi-Anwendung enthält eine benutzerdefinierte Middleware, um mehr Daten zu befüllen als standardmäßig vorgesehen. Du findest sie in der Datei `./strapi/src/middlewares/deepPopulate.ts`.

- Die Strapi-Anwendung enthält ein Postinstall-Skript, das eine UUID für das Projekt neu generiert, um anonyme Nutzungsinformationen für diese Demo zu sammeln. Du kannst es deaktivieren, indem du die UUID in der Datei `./strapi/packages.json` entfernst.

- Die Strapi-Anwendung benutz das Documentation-PlugIn um eine API-Beschreibung zu generieren. Die App verwendet diese OpenAPI-Spezifikation um 'type-safe' die Daten von der Strapi-Anwendung zu beziehen. Dieser Prozess ist manuell anzustoßen nachdem Änderungen an den schemata der Strapi-Anwendung durchgeführt wurden.
