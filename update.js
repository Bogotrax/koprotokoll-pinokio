module.exports = {
  run: [
    // Launcher-Skripte aktualisieren.
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    // Quellcode von Koprotokoll aktualisieren.
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    // Abhängigkeiten nachziehen (falls sich requirements.txt geändert hat).
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: "uv pip install -r requirements.txt"
      }
    }
  ]
}
