<!--
  DEMO-REQUISITE für Demo 7 (`/init`).

  Das ist die überarbeitete Fassung, die Markus im Split-View NEBEN das
  Ergebnis von `/init` legt. Sie liegt bewusst NICHT in demo-repo/, damit
  `/init` sie nicht sieht und daraus abschreibt.

  Am Vortragstag: Inhalt kopieren, im Split-View neben der generierten
  .github/copilot-instructions.md öffnen.
-->

# Zeiterfassung

Wochenweise Erfassung von Arbeitszeiten. Kleine Single-Page-App ohne Backend,
die Beispieldaten kommen aus `src/data.ts`.

**Stack:** TypeScript 5.9, Vite 7, Vitest 3. Kein Framework, kein State-Management,
bewusst Vanilla-DOM.

## Bauen und prüfen

```bash
npm install     # muss einmal laufen, bevor irgendetwas anderes geht
npm test        # vitest, einmaliger Durchlauf
npm run typecheck
```

**Führe Tests und Linter nicht selbst aus.** Ich führe sie aus und gebe dir die
Ausgabe. Grund: bei rotem Test änderst du sonst mehrfach hintereinander etwas,
ohne die Ausgabe richtig zu lesen — das kostet Tokens und führt selten zum Ziel.

`npm run build` läuft `tsc --noEmit` mit, ein Build schlägt also auch bei reinen
Typfehlern fehl. Das ist Absicht.

## Wo was liegt

| Pfad               | Inhalt                                    |
| ------------------ | ----------------------------------------- |
| `src/main.ts`      | Rendering und Formular, kein State außerhalb |
| `src/timesheet.ts` | Auswertung einer Woche                    |
| `src/format.ts`    | Formatierung von Dauern und Datum         |
| `src/types.ts`     | `Entry`, `WeekSummary`                    |
| `src/format.test.ts` | Tests, direkt neben dem Modul           |

Tests liegen neben dem Modul, nicht in einem `__tests__`-Ordner.

## Regeln

**Dauern werden intern immer in ganzen Minuten gerechnet**, nie in Stunden als
Kommazahl. Grund: bei Nachkommastellen summieren sich Rundungsfehler über eine
Woche zu sichtbar falschen Summen auf.

**Formatierung passiert nur in `format.ts`**, nie inline im Rendering. Grund:
sonst driften die Darstellungen zwischen Liste und Summenzeile auseinander.

**Gemeinsam genutzte Typen liegen in `src/types.ts`**, nicht lokal im Modul.
Grund: `Entry` und `WeekSummary` werden von mehreren Dateien importiert, und
sobald Typen verstreut liegen, wandern Felder auseinander statt an einer Stelle
gepflegt zu werden.

**Neue Abhängigkeiten nur nach Rückfrage.** Das Projekt kommt absichtlich mit
drei Dev-Dependencies aus.

Wenn etwas unklar ist, frag nach, statt zu raten.

## Beispiele

```ts
// Prefer
const activeEntries = entries.filter((entry) => entry.minutes > 0);
export function summarizeWeek(entries: Entry[]): WeekSummary { /* … */ }

// Avoid
const x = entries.filter((e) => e.minutes > 0);
export function calc(e: Entry[]) { /* … */ }
```
