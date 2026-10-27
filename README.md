# Koprotokoll – Pinokio-Installer

Ein-Klick-Installation für **[Koprotokoll](https://github.com/Bogotrax/Koprotokoll)** – den lokalen
Meeting-Assistenten (Aufnahme → Transkription mit NVIDIA Parakeet → Sprechererkennung →
Zusammenfassung), komplett lokal und auf Deutsch. Keine Cloud nötig.

Diese Repo enthält nur die Pinokio-Rezeptdateien. Die eigentliche Anwendung wird beim
Installieren aus [`Bogotrax/Koprotokoll`](https://github.com/Bogotrax/Koprotokoll) (Branch `main`) geladen.

## Installation in Pinokio

1. Pinokio öffnen → **Install from URL**.
2. Diese Repo-URL einfügen: `https://github.com/Bogotrax/koprotokoll-pinokio`
3. **Installieren** klicken. Pinokio lädt automatisch den Koprotokoll-Code, installiert die
   Python-Abhängigkeiten und den Browser für den Meeting-Bot.
4. **Starten** klicken und über **Oberfläche öffnen** die Weboberfläche im Browser aufrufen
   (Standard: `http://127.0.0.1:8000`).

## Menü

| Aktion | Was sie tut |
|---|---|
| **Starten** | startet den Koprotokoll-Server |
| **Oberfläche öffnen** | öffnet die Weboberfläche im Browser |
| **Aktualisieren** | holt die neueste Version von Koprotokoll |
| **Modelle vorab laden** | lädt die Sprachmodelle (~700 MB) herunter |
| **Neu installieren** | installiert die Abhängigkeiten neu |
| **Speicherplatz sparen** | dedupliziert Bibliotheksdateien |
| **Zurücksetzen** | entfernt die App-Dateien – **Daten bleiben erhalten** |

## Hinweise

- **Daten** (Aufnahmen, Transkripte, Datenbank, Modelle) liegen im Ordner `koprotokoll-data/`
  **neben** dem App-Ordner. Sie bleiben bei *Aktualisieren* und *Zurücksetzen* erhalten.
- **Voraussetzung:** `ffmpeg` muss auf dem System installiert sein (für die Audio-Konvertierung).
  Der Meeting-Bot benötigt zusätzlich Chromium – das wird bei der Installation mitgeladen.
- **Optionales LLM:** Für die automatische Zusammenfassung lokal einen OpenAI-kompatiblen Dienst
  betreiben (z. B. [Ollama](https://ollama.com)), Standard `http://localhost:11434/v1`, Modell
  `qwen2.5:7b-instruct`. Ohne LLM nutzt Koprotokoll eine Offline-Heuristik.
- Ausführliche Einrichtung (Google/Microsoft-Integration, Bot-Login, MCP):
  [`docs/einrichtung.md`](https://github.com/Bogotrax/Koprotokoll/blob/main/docs/einrichtung.md).

## Manuell testen

1. Pinokio → **Install from URL** → diese Repo-URL → **Installieren**.
2. Prüfen: im Terminal-Log darf keine Fehlermeldung stehen; `app/` wurde geklont und `app/env/` existiert.
3. **Starten** → im Log erscheint `Uvicorn running on http://127.0.0.1:8000`, danach steht
   **Oberfläche öffnen** bereit.
4. Oberfläche öffnen und z. B. die „Übersicht"-Seite laden – ohne Fehler in der Browser-Konsole.
5. **Aktualisieren** und **Zurücksetzen** einmal durchspielen und prüfen, dass `koprotokoll-data/`
   erhalten bleibt.

> **Nicht automatisch testbar:** Echte Meeting-Beitritte (Google Meet, Teams) und der Ton-Mitschnitt
> lassen sich in CI nicht testen – sie wurden manuell geprüft bzw. sind offen.

## Aufbau (Rezeptdateien)

| Datei | Zweck |
|---|---|
| `pinokio.js` | Metadaten + Menü |
| `install.js` | klont die App, baut das venv, installiert Pakete + Chromium |
| `start.js` | startet den Server als Daemon und setzt die Web-URL |
| `update.js` | aktualisiert Launcher + App + Abhängigkeiten |
| `reset.js` | entfernt den App-Ordner (Daten bleiben erhalten) |
| `models.js` | lädt die Sprachmodelle vorab |
| `link.js` | spart Plattenplatz (venv-Deduplizierung) |
