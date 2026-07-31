<!-- .slide: class="center-text" -->

<p class="kicker">Teil 2 · das Kernstück</p>

## Der Arbeitsablauf

<p class="big">Eine echte Aufgabe.<br />Drei Entscheidungen.</p>

Note:
Zeit: 0:10 — ab hier 12 Minuten, das ist der Grund, warum die Leute zuhören.

Ansage: "Ich mache jetzt eine echte Aufgabe im Demo-Repo. Nicht Feature für
Feature, sondern so, wie ich morgens tatsächlich arbeite."

Die drei Entscheidungen sind: welches Modell, erst Plan oder direkt Code,
welchen Kontext gebe ich mit.

---

<!-- .slide: class="demo" -->

## Die Aufgabe

<p class="big">Einträge nach Projekt gruppieren<br />und Summen anzeigen</p>

Note:
Zeit: 0:11

Demo-Repo zeigen, 20 Sekunden. Nicht den Code durchgehen — nur zeigen, dass es
klein und echt ist.

**Repo-Zustand prüfen: `git reset --hard start && git clean -fd`**
vor dem Vortrag einmal ausführen, damit nichts von der Probe übrig ist.

---

<p class="kicker">Entscheidung 1</p>

## Welches Modell?

- `Auto` ist der richtige Default — und günstiger
- Bewusst hochschalten bei **Debugging und Architektur**
- Bewusst runterschalten bei **Fleißarbeit**
- Reasoning-Modelle erzeugen mehr Output — mehr Tokens, mehr Geld

<p class="stand">Stand: 31.07.2026</p>

Note:
Zeit: 0:12 — 3 Minuten.

Der häufigste Fehler: einmal das teuerste Modell eingestellt und nie wieder
angefasst.

Live zeigen: Model-Picker öffnen, Hover-Card auf ein Modell.
Danach die Session-Kosten zeigen — das ist der Moment, wo es klickt.

Nicht die Modell-Liste vorlesen. Die ändert sich sowieso.

--

## Task → Modell

| Aufgabe | Richtung |
| --- | --- |
| Allzweck, Schreiben | schnelle Allrounder |
| Repetitive Fleißarbeit | die kleinsten Modelle |
| Debugging, Architektur | Reasoning-Modelle |
| Lange autonome Arbeit | die stärksten Modelle |
| Screenshots, Diagramme | multimodale Modelle |

<p class="stand">Stand: 31.07.2026</p>

Note:
Vertiefung. Bewusst ohne Modellnamen — die sind in vier Wochen falsch.

Wenn jemand nach konkreten Namen fragt: auf die GitHub-Doku verweisen,
"choosing the right AI model for your task".

---

<p class="kicker">Entscheidung 2</p>

## Erst Plan, dann Code

<p class="big">Das ist ein Feature.<br />Kein Prompting-Trick.</p>

Note:
Zeit: 0:15 — 5 Minuten, der wichtigste Block des ganzen Vortrags.

Wenn du nur eine Sache aus dem Vortrag mitnehmen lässt, dann die hier.

---

<!-- .slide: class="demo" -->

## `/plan`

```text
/plan Gruppiere die Einträge nach Projekt und
zeige pro Projekt eine Summe an.

Bestehende Tests müssen grün bleiben.
Keine neue Abhängigkeit.
```

Note:
Zeit: 0:16 — LIVE.

Plan-Agent erzeugt: Zusammenfassung, Implementierungsschritte,
Verifikationsschritte.

**Wichtig: den Plan wirklich lesen und laut kommentieren.** Eine Zeile
korrigieren, damit sichtbar wird, dass das der eigentliche Punkt ist —
Fehler kosten hier eine Zeile, nach der Implementierung kosten sie 20 Minuten.

Dann erst implementieren lassen.

---

<!-- .slide: class="interaction" data-interaction="Ratet im Chat" data-background-color="#1d3d52" -->

## Wo liegt der Plan?

Schreibt in den Chat, wo Copilot den Plan speichert.

Note:
Zeit: 0:19

Kurz halten, 30 Sekunden. Ein bis zwei Antworten vorlesen.

Die meisten tippen auf eine Datei im Repo. Das ist die Pointe der nächsten
Folie — deshalb hier nicht auflösen.

---

## Der Plan liegt nicht im Repo

- `/memories/session/plan.md` — **Session-Memory**
- Sichtbar über *Chat: Show Memory Files*
- Nach Ende der Conversation: **weg**
- Wer ihn behalten will, kopiert ihn raus

<p class="stand">Stand: 31.07.2026 · VS Code 1.129.1</p>

Note:
Zeit: 0:20

Live zeigen: Command Palette → *Chat: Show Memory Files* → plan.md.

Das ist der stärkste "das wusste ich nicht"-Moment für die Vielnutzer im
Publikum. Kurz wirken lassen.

Praktische Konsequenz: bei einem Plan, an dem mehrere arbeiten sollen,
rauskopieren und ins Repo legen.

---

<p class="kicker">Entscheidung 3</p>

## Kontext gezielt geben

- `#file` `#selection` — was genau, nicht alles
- `#codebase` — wenn du nicht weißt, wo es steht
- `#changes` `#problems` — Diff und Fehlerliste
- `#fetch <url>` — die aktuelle Doku statt Trainingswissen

Note:
Zeit: 0:22 — 4 Minuten.

Kernsatz aus der VS-Code-Doku: **was nicht im Kontext ist, existiert für das
Modell nicht.**

Häufigster Fehler: alles reinwerfen. Großes Kontextfenster füllen kostet Geld
und macht die Antwort schlechter, nicht besser.

`#fetch` live zeigen — das kennen die wenigsten und es löst das
"Modell kennt die neue API-Version nicht"-Problem.

---

## Der eine Satz, der am meisten bringt

<p class="big">Akzeptanzkriterien<br />gehören in den Prompt.</p>

<p class="muted">— sinngemäß aus der offiziellen VS-Code-Doku</p>

Note:
Zeit: 0:24

Wörtlich sagt die Doku: Testfälle, erwartete Ergebnisse oder
Akzeptanzkriterien mitgeben sei "one of the highest-leverage things you can
do" — weil das Modell seine Arbeit damit selbst prüfen kann.

Konkret an der Demo-Aufgabe: "Bestehende Tests müssen grün bleiben" stand
oben schon im Plan-Prompt. Darauf zurückkommen.

Das ist der Übergang zu Teil 3: Kriterien, die *immer* gelten, schreibt man
nicht jedes Mal in den Prompt — die gehören ins Repo.
