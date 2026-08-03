# Zeiterfassung

Kleines Demo-Projekt für den Vortrag *GitHub Copilot in VS Code – Tips und
Tricks*. Zeigt eine Wochenübersicht mit Einträgen, Gesamtsumme und
Überstunden.

## Loslegen

```bash
npm install     # einmal im Wurzelverzeichnis des Vortrags-Repos
npm run dev
```

Läuft auf <http://localhost:5173>.

> Unter WSL: der Server läuft in WSL, der Browser auf der Windows-Seite.
> `localhost` funktioniert dafür in der Regel direkt.

## Befehle

Dieses Projekt ist ein npm-Workspace des Vortrags-Repos. Alle Befehle gehen
von beiden Orten aus.

| Hier in `demo-repo/` | Aus dem Wurzelverzeichnis |
| -------------------- | ------------------------- |
| `npm run dev`        | `npm run demo`            |
| `npm test`           | `npm run demo:test`       |
| `npm run build`      | `npm run demo:build`      |
| `npm run typecheck`  | —                         |

Ein `npm install` im Wurzelverzeichnis reicht für beides — Folien und Demo.

## Aufbau

| Datei              | Inhalt                                          |
| ------------------ | ----------------------------------------------- |
| `src/main.ts`      | Rendering und Formular                          |
| `src/timesheet.ts` | Auswertung der Woche                            |
| `src/format.ts`    | Formatierung von Dauern und Datum               |
| `src/data.ts`      | Beispielwoche                                   |
| `src/types.ts`     | `Entry` und `WeekSummary`                       |

## Zurücksetzen

Aus dem Wurzelverzeichnis, setzt nur `demo-repo/` zurück:

```bash
npm run demo:reset
```

Dahinter steckt `git checkout HEAD -- demo-repo && git clean -fd demo-repo` —
zurück auf den letzten Commit. Ohne `-x` bleibt `node_modules/` stehen, ein
erneutes `npm install` ist also nicht nötig.

## Zum Verteilen

Für den ZIP-Export reicht dieser Ordner. Die `package.json` bringt ihre
Abhängigkeiten selbst mit, ein `npm install` im entpackten Ordner genügt —
eine Lockdatei liegt allerdings nur im Wurzelverzeichnis des Vortrags-Repos.
