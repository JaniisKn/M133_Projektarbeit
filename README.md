# Dorfladen Ufhusen Onlineshop
M133 Projekt von Janis Kneubühler

## Voraussetzungen
- Aktuellste Version von Deno ist vorhanden --> (https://deno.land/#installation)
- Dieses git Repository wurde geklont --> (https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) 

## Webserver starten
Folgende Commands müssen im Terminal ausgeführt werden, um den Webserver zu starten:

```
deno run --allow-read --allow-write --unstable ./tools/builder.ts --> buildet .js Files <br>
deno run --allow-net --allow-read ./src/webserver.ts --> startet den Webserver
```

## Webserver öffnen
Ist der Webserver gestartet, muss im Browser http://localhost:8000 aufgerufen werden.
