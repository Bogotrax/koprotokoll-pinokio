module.exports = {
  run: [
    // Sprachmodelle (~700 MB) vorab laden. Sonst lädt sie die App beim ersten
    // Transkribieren automatisch herunter.
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: "python scripts/download_models.py"
      }
    }
  ]
}
