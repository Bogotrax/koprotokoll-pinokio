module.exports = {
  version: "3.7",
  title: "Koprotokoll",
  description: "Lokaler Meeting-Assistent: Transkription, Sprechererkennung und Zusammenfassung – komplett lokal, auf Deutsch.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      link: info.running("link.js"),
      models: info.running("models.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installiere …",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Oberfläche öffnen",
            href: local.url,
          }, {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Aktualisiere …",
          href: "update.js",
        }]
      } else if (running.models) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Lade Modelle …",
          href: "models.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Setze zurück …",
          href: "reset.js",
        }]
      } else if (running.link) {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Optimiere Speicher …",
          href: "link.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Starten",
          href: "start.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Aktualisieren",
          href: "update.js",
        }, {
          icon: "fa-solid fa-brain",
          text: "Modelle vorab laden",
          href: "models.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Neu installieren",
          href: "install.js",
        }, {
          icon: "fa-solid fa-file-zipper",
          text: "<div><strong>Speicherplatz sparen</strong><div>Duplizierte Bibliotheksdateien deduplizieren</div></div>",
          href: "link.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Zurücksetzen</strong><div>Entfernt die App (Daten bleiben erhalten)</div></div>",
          href: "reset.js",
          confirm: "App wirklich zurücksetzen? Gespeicherte Aufnahmen und Transkripte bleiben erhalten."
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installieren",
        href: "install.js",
      }]
    }
  }
}
