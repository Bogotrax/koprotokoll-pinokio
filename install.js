module.exports = {
  run: [
    // Quellcode aus unserem Fork laden (Standard-Branch: main).
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Bogotrax/Koprotokoll app"
        ]
      }
    },
    // Python-Abhängigkeiten und den Browser für den Meeting-Bot installieren.
    {
      method: "shell.run",
      params: {
        venv_python: "3.11",
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "playwright install chromium"
        ]
      }
    }
  ]
}
