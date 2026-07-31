<!--
  VORLAGE / SPIELWIESE

  Diese Datei ist keine Vortragsfolie, sondern zeigt alle Bausteine, die
  gebraucht werden. Sie kann am Ende einfach aus index.html ausgehängt werden.

  Trenner (jeweils allein auf einer Zeile, mit Leerzeile davor und danach):
    drei Bindestriche  -> neue horizontale Folie (Kernprogramm)
    zwei Bindestriche  -> neue vertikale Folie   (optionale Vertiefung)
  Alles ab einer Zeile "Note:" wird zur Speaker Note.
-->

## Vorlage: normale Folie

- Maximal vier Stichpunkte
- Kein Fließtext
- Vertiefungen kommen nach unten, nicht in den Kernfluss
- Dateipfade als `.github/copilot-instructions.md`

Note:
Zeit: 0 min – Vorlage, wird nicht vorgetragen.

--

## Vertikale Folie

Erreichbar mit Pfeil nach unten – optionale Vertiefung.

Note:
Nur zeigen, wenn Zeit oder Nachfrage da ist.

---

## Vorlage: Code-Folie

```markdown
# Projektkontext

- Node.js, TypeScript, ESM
- Tests mit vitest, keine Snapshots
- Fehler immer als Result-Typ, nie werfen
```

Note:
Code immer auf eigener Folie, nie zusammen mit Stichpunkten.

---

<!-- .slide: class="interaction" data-interaction="Handzeichen" data-background-color="#7b1f2b" -->

## Wer hat eine `copilot-instructions.md` im Repo?

Handzeichen, kurz warten.

Note:
Vorlage für einen Interaktionspunkt: eigene Hintergrundfarbe plus Marker oben,
damit beim Vortragen sofort klar ist, dass jetzt etwas vom Vortragenden kommt.

---

## Vorlage: Screenshot

<!-- Screenshots liegen in ./images/ -->

![Platzhalter](images/.gitkeep)

Note:
Screenshots vor dem Erstellen gegen die aktuellen VS Code Release Notes prüfen.
Die Live-Demo läuft in einem echten VS-Code-Fenster, nicht in den Folien.

---

## Fragmente

- Erscheint sofort
- Erscheint später <!-- .element: class="fragment" -->
- Und noch später <!-- .element: class="fragment" -->

Note:
Sparsam einsetzen.
