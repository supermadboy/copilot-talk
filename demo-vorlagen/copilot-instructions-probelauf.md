# Copilot Instructions - Demo-Repo Zeiterfassung

## Projektkontext
- Dieses Repo ist eine kleine TypeScript/Vite-Demo fuer einen Live-Vortrag.
- Prioritaet: klarer, erklaerbarer Code statt cleverer Abkuerzungen.
- Aendere nur das, was fuer die Aufgabe wirklich noetig ist.

## Architektur und Zustaendigkeiten
- `src/types.ts`: gemeinsame Typen (`Entry`, `WeekSummary`, `ProjectSummary`).
- `src/timesheet.ts`: fachliche Logik (Berechnung und Aggregation), moeglichst pure Funktionen.
- `src/format.ts`: reine Formatierung von Dauer/Datum.
- `src/main.ts`: DOM-Rendering und Formular-Interaktion.
- Verschiebe Fachlogik aus `main.ts` in `timesheet.ts`, wenn Logik waechst.

## Code-Richtlinien
- Nutze striktes TypeScript. Kein `any`, ausser mit expliziter Begruendung.
- Halte Funktionen klein, benenne Konstanten statt Magic Numbers.
- Kommentare erklaeren das Warum, nicht das Was.
- Behalte bestehende deutsche UI-Texte bei.
- Nutzereingaben, die in HTML gerendert werden, muessen weiterhin escaped werden (`escapeHtml`).

## Tests
- Bei Bugfixes oder neuer Logik: passende Tests in `src/*.test.ts` ergaenzen oder anpassen.
- Tests sollen Verhalten pruefen, nicht Implementierungsdetails.
- Keine echten Netzwerk- oder Dateisystemzugriffe in Tests.

## Aenderungsgrenzen
- Keine neuen Dependencies ohne explizite Anforderung.
- Keine grossen, unnoetigen Refactorings quer durchs Repo.
- Bei Unsicherheit zuerst einen kurzen Plan mit Annahmen vorschlagen.

## Lokale Befehle
- Entwicklung: `npm run dev`
- Tests: `npm test`
- Typecheck: `npm run typecheck`
- Build: `npm run build`