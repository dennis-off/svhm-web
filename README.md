# Schulverein Haseldorfer Marsch – Deine digitale Plattform

![LaunchPad](./svhm.jpg)

Willkommen an Bord! **Schulverein Haseldorfer Marsch**, die offizielle Plattform des Schulvereins, bringt alle Informationen, Dokumente und Links an einem Ort zusammen.

Dieses Repository enthält:

- Ein Strapi-Projekt mit vorgefertigten Inhalten und Daten
- Eine Next.js-Anwendung, die Inhalte direkt aus Strapi bezieht und dir bereitstellt

## 1. Das Projekt klonen

Klone das Repo mit folgendem Befehl:

```
git clone https://github.com/dennis-off/svhm-web.git
```

- Navigate to your project folder by running `cd svhm-web`.

## 🌟 2. Konfiguration erstellen

Leg los! Du kannst die Plattform entweder lokal einrichten, indem du die unten stehenden Anweisungen befolgst, oder du schaust dir die [Webseite live in Aktion an](https://www.schulverein-haseldorfer-marsch.de/).

Stelle sicher, dass du die richtigen Umgebungsvariablen für jeden Teil geladen hast:

Strapi (Beispiel in `./svhm-strapi/.env.example`):

- `STRAPI_ADMIN_CLIENT_URL=<url-von-nextjs>`
- `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<ein-zufallstoken>`

- Erstelle eine `./svhm-strapi/.env`-Datei mit diesen Variablen.

Next.js (Beispiel in `./svhm-app/.env.sample`):

- `NEXT_PUBLIC_API_URL=<url-von-strapi>` (Pflicht)
- `PREVIEW_SECRET=<dasselbe-zufallstoken-wie-für-strapi>`

- Erstelle eine `./svhm-app/.env`-Datei mit diesen Variablen.

## 2. Strapi starten

Atme tief durch. Es ist Zeit, die Strapi-Motoren hochzufahren. Navigiere zum `./my-projects/launchpad/strapi`-Ordner, indem du den folgenden Befehl ausführst:

Navigiere zu deinem `./my-projects/launchpad/strapi`-Ordner mit `cd strapi` in der Kommandozeile.

- Führe folgenden Befehl im `./svhm-web/svhm-strapi`-Ordner aus:

```
yarn && yarn seed && yarn develop
```

Dies installiert die Abhängigkeiten, fügt die initialien Daten hinzu und startet den Server. (Du kannst die Befehle auch einzeln ausführen, aber warum nicht effizient sein?)

## 3. Next.js starten

Wir sind fast bereit zum Abheben! Next.js ist deine schlanke, futuristische Schnittstelle, um all den großartigen Inhalt in die Welt zu bringen. 🚀

Navigiere zum `./my-projects/launchpad/next`-Ordner, indem du den folgenden Befehl ausführst:

Navigiere zu deinem `./my-projects/launchpad/next`-Ordner mit `cd next` in der Kommandozeile.

- Führe folgenden Befehl im `./launchpad/next`-Ordner aus:

```
yarn && yarn build && yarn start
```

Dies installiert die Abhängigkeiten, baut dein Projekt und startet den Server. Du bist jetzt bereit!

## Überblick über die Funktionen ✨

### Benutzer

<br />

**An intuitive, minimal editor** The editor allows you to pull in dynamic blocks of content. It’s 100% open-source, and it’s fully extensible.<br />

### Global

<br />

[Customizable API](https://strapi.io/features/customizable-api): Automatically build out the schema, models, controllers for your API from the editor. Get REST or GraphQL API out of the box without writing a single line of code.<br />

## Resources

[Docs](https://docs.strapi.io)

## Todo

- [ ] Shop

## Customization

- Die Strapi-Anwendung enthält eine benutzerdefinierte Middleware, um mehr Daten zu befüllen als standardmäßig vorgesehen. Du findest sie in der Datei `./strapi/src/middlewares/deepPopulate.ts`.

- Die Strapi-Anwendung enthält ein Postinstall-Skript, das eine UUID für das Projekt neu generiert, um anonyme Nutzungsinformationen für diese Demo zu sammeln. Du kannst es deaktivieren, indem du die UUID in der Datei `./strapi/packages.json` entfernst.

- Die Strapi-Anwendung enthält einen Patch für das Paket @strapi/admin. Dies ist nur für die gehosteten Demos notwendig, da wir automatisch Super-Admin-Benutzer für diese erstellen, wenn sie diese Demo auf unserer Website anfordern.
