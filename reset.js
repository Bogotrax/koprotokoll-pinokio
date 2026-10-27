module.exports = {
  run: [
    // Entfernt den App-Ordner (Code + venv). Gespeicherte Daten liegen in
    // "koprotokoll-data/" daneben und bleiben erhalten.
    {
      method: "fs.rm",
      params: {
        path: "app"
      }
    }
  ]
}
