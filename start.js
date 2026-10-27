module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        // Daten liegen außerhalb des App-Ordners und ueberleben Update/Zuruecksetzen.
        env: { KOPROTOKOLL_DATA: "../koprotokoll-data" },
        path: "app",
        message: [ "python -m koprotokoll" ],
        on: [{
          "event": "/http://\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: { url: "{{input.event[0]}}" }
    }
  ]
}
