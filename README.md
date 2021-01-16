# Dorfladen Ufhusen Onlineshop
M133 Projekt von Janis Kneubühler

## Webserver starten
Folgende Commands ausführen:

```
deno run --allow-read --allow-write --unstable ./tools/builder.ts --> buildet .js Files <br>
deno run --allow-net --allow-read ./src/webserver.ts --> startet den Webserver
```

## Webserver öffnen
Ist der Webserver gestartet, muss im Browser http://localhost:8000 aufgerufen werden.
