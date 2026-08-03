<!-- .slide: class="center-text" -->

<p class="kicker">Block 2 · das Kernstück</p>

## So arbeite ich

<p class="big">Eine echte Aufgabe.<br />Von vorne bis fertig.</p>

Note:
Zeit: 0:09 — ab hier 18 Minuten. Das ist der Grund, warum die Leute zuhören.

Ansage: "Ich mache eine echte Aufgabe in einem kleinen Repo, so wie ich das
tatsächlich mache. Und ich fange nicht bei der Aufgabe an, sondern eine Stufe
davor: beim Setup."

---

## Ein Workspace für alles

- Ein Projekt, mehrere Repos → **ein** Workspace, nicht drei Fenster
- `#codebase` sieht dann alle Repos auf einmal
- Er findet, dass das Feld im Backend anders heißt
- Regeln einmal pflegen statt dreimal

Note:
Zeit: 0:10 — DEMO 2, dein eigener Arbeits-Workspace.

"Der unspektakulärste Tipp des Vortrags und trotzdem der, der bei mir am
meisten gebracht hat."

Der Unterschied ist nicht Bequemlichkeit: in drei getrennten Fenstern findet
er den Zusammenhang nie, und ihr erklärt ihn jedes Mal neu.

Explorer aufklappen, damit man die Repos nebeneinander sieht.

**Weil es ein echtes Projekt ist:** vorher schauen, was auf dem Share sichtbar
wird — offene Tabs, Branch-Name, Git-Status.

---

## Regeln aus dem Eltern-Verzeichnis

```json
"chat.useCustomizationsInParentRepositories": true
```

<p class="muted">Gemeinsame Instructions gelten in allen Repos — einmal gepflegt.</p>

Note:
Zeit: 0:11

Quelle: VS Code Docs, *Use custom instructions in VS Code*

Kurz zeigen, nicht ausbreiten. Der Punkt kommt in Block 3 nochmal.

Danach die Aufgabe ankündigen und ins Demo-Repo wechseln.

---

<!-- .slide: class="demo" -->

## Die Aufgabe

<p class="big">Einträge nach Projekt gruppieren<br />und Summen anzeigen</p>

Note:
Zeit: 0:11

Demo-Repo zeigen, 20 Sekunden. Nicht den Code durchgehen — nur zeigen, dass es
klein und echt ist.

**Repo-Zustand vorher prüfen:** `npm run demo:reset` (aus dem
Repo-Wurzelverzeichnis)

---

<p class="kicker">Entscheidung 1</p>

## Welches Modell?

- **Offiziell:** `Auto` wählt aus und ist günstiger
- **Meine Erfahrung:** `Auto` greift zu oft zu den schwachen
- Bewusst eins einstellen und dabeibleiben
- Runterschalten für Fleißarbeit — hoch müsst ihr selten

<p class="stand">Stand: 03.08.2026</p>

Note:
Zeit: 0:12 — hier weichst du bewusst von der offiziellen Empfehlung ab.
**Beide Sichten nennen.**

Offiziell: Quelle GitHub Docs, *Choosing the right AI model for your task*.

Deine Position: "Auto greift mir zu oft zu den günstigen Modellen, und die sind
bei allem, was über eine Handvoll Zeilen hinausgeht, schlicht nicht gut genug.
Sie machen nicht das, was sie sollen, ich merke es erst nach zwei Runden, und
dann habe ich mehr Zeit verloren als ich an Credits gespart habe."

**Modellnamen nicht vorlesen — die sind in vier Wochen falsch.**

--

## Task → Modell

| Aufgabe | Richtung |
| --- | --- |
| Allzweck, Schreiben | schnelle Allrounder |
| Repetitive Fleißarbeit | die kleinsten Modelle |
| Debugging, Architektur | Reasoning-Modelle |
| Lange autonome Arbeit | die stärksten Modelle |
| Screenshots, Diagramme | multimodale Modelle |

<p class="stand">Stand: 03.08.2026</p>

Note:
Vertiefung. Bewusst ohne Modellnamen.

Wenn jemand nach konkreten Namen fragt: auf die GitHub-Doku verweisen,
*Choosing the right AI model for your task*.

---

## Modellwahl ist jetzt auch eine Geldfrage

- Seit 01.06.2026 **tokenbasiert** — AI Credits, 1 Credit = 1 Cent
- Business: 30 $ pro Monat
- Neu: **Gesamtkosten pro Session**, aufgeschlüsselt nach Subagent
- Ein Modell, das es beim ersten Mal trifft, ist billiger als drei Anläufe

<p class="stand">Stand: 03.08.2026</p>

Note:
Zeit: 0:13 — DEMO 3, Session-Kosten einblenden.

**Nur sagen, was verifiziert ist. Nichts über die Vertragslage behaupten.**

Die Zahl nicht vorlesen, als wäre sie repräsentativ — du hast bis hier erst
einen Prompt abgesetzt. Der Punkt ist, dass es die Anzeige überhaupt gibt.

Kernsatz: "Modellwahl war früher eine Qualitätsfrage, heute ist sie auch eine
Geldfrage — aber die Rechnung geht meistens trotzdem zugunsten des besseren
Modells aus."

**Vor dem Vortrag prüfen:** wo genau sitzt die Anzeige in der aktuellen
Version? Nicht auf dem Share danach suchen müssen.

---

<p class="kicker">Entscheidung 2</p>

## Erst Plan, dann Code

<p class="big">Ein eingebautes Feature.<br />Kein Prompting-Trick.</p>

Note:
Zeit: 0:15 — der wichtigste Block des ganzen Vortrags.

"Wenn ihr heute nur eine Sache mitnehmt, dann die."

Und: "ich rede nicht von einem Prompting-Trick, wo man 'denk erst nach'
davorschreibt."

---

## Es ist gemessen

- Plan-Agent in VS Code, `implementation-planner` bei GitHub
- Der offizielle Planer hat **drei Tools**: lesen, suchen, schreiben
- Strukturiertes Vorgehen: **+41 %** Prozessqualität
- **+17 %** Korrektheit des Ergebnisses

<p class="stand">RigorBench, arXiv 2606.22678, Juni 2026</p>

Note:
Zeit: 0:15

Zwei Belege, in dieser Reihenfolge:

1. **Die Hersteller haben es eingebaut.** VS Code hat einen Plan-Agenten,
   GitHub liefert einen fertigen `implementation-planner` — bezeichnenderweise
   mit nur drei Tools. Kein Ausführen.
   Quelle: VS Code Docs *Planning with agents* · GitHub Docs
   *Customization library → implementation-planner*

2. **Es ist gemessen.** RigorBench misst nicht, *ob* der Code funktioniert,
   sondern *wie* Agenten arbeiten.
   Quelle: Madiraju & Madiraju, *RigorBench: Benchmarking Engineering Process
   Discipline in Autonomous AI Coding Agents*, arXiv 2606.22678

Der interessanteste Befund: **Agenten planen von sich aus praktisch nie.**
Sie können es, tun es aber nur, wenn man sie explizit auffordert.

Also: ihr müsst `/plan` tippen.

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
Zeit: 0:16 — LIVE, DEMO 4. Die wichtigste Demo des Vortrags.

Die beiden letzten Zeilen sind kein Beiwerk — das sind die Akzeptanzkriterien.
Beim Tippen kurz drauf zeigen, du kommst bei 0:24 darauf zurück.

Plan-Agent erzeugt: Zusammenfassung, Implementierungsschritte,
Verifikationsschritte. Er stellt teilweise Rückfragen.

**Den Plan wirklich lesen und laut kommentieren. Eine Zeile korrigieren.**
Nicht scrollen und "sieht gut aus" sagen — dann ist die Demo wertlos.

Satz dazu: "Ich korrigiere hier eine Zeile. Wenn ich denselben Fehler erst
nach der Implementierung finde, kostet er mich zwanzig Minuten und einen Diff,
den ich nicht mehr auseinanderklamüsern will."

Erst danach implementieren lassen.

Wo du korrigierst: siehe demo-ablauf.md, Demo 4 — beim Proben festlegen.

---

<!-- .slide: class="interaction" data-interaction="Ratet im Chat" data-background-color="#1d3d52" -->

## Wo liegt der Plan?

Schreibt in den Chat, wo Copilot den Plan speichert.

Note:
Zeit: 0:19

Kurz halten, 30 Sekunden. Ein bis zwei Antworten vorlesen.

Die meisten tippen auf eine Datei im Repo. Das ist die Pointe der nächsten
Folie — **hier nicht auflösen.**

---

## Drei Arten von Gedächtnis

- **Session** — der Plan von eben. Nach dem Chat weg
- **Repository** — gilt in diesem Projekt, überlebt den Chat
- **User** — gilt in *allen* euren Projekten
- Davon werden die **ersten 200 Zeilen in jeden Chat geladen**

<p class="stand">Stand: 03.08.2026 · VS Code 1.129.1</p>

Note:
Zeit: 0:19 — DEMO 5.

Auflösung der Raten-Folie: `/memories/session/plan.md`, Session-Memory.
Nach dem Chat weg.

Command Palette → **Chat: Show Memory Files** → alle drei Ebenen zeigen.

Der Teil, der es interessant macht, ist die User-Ebene: 200 Zeilen, in jedem
Projekt, ohne dass ihr was tut.

"Wenn ihr rausgefunden habt, wie ihr etwas gerne hättet — sagt dem Agenten
'merk dir das'. Er legt es selbst an der richtigen Stelle ab. Beim nächsten
Projekt weiß er es noch."

Quelle: VS Code Docs, *Memory in VS Code agents*

Zwei Einschränkungen nennen: Preview, standardmäßig **aus**, und einzelne
Einträge sind nicht löschbar — nur alles auf einmal mit
*Chat: Clear All Memory Files*.

**Vorher prüfen:** ist Memory bei uns freigeschaltet? Wenn nein, den Block auf
die Session-Ebene kürzen. Und: eigene User-Memory-Datei vorher durchsehen,
die landet auf dem Share.

---

## Tests und Linter führe ich selbst aus

- Sonst dreht er sich im Kreis und verbrennt Credits
- Er liest Testausgaben oft falsch aus
- Ablauf: er schreibt, ich führe aus, ich kippe das Ergebnis rein
- Kostet zehn Sekunden, spart eine Menge Tokens

Note:
Zeit: 0:22 — läuft gegen das, was überall empfohlen wird. Genau deshalb erzählen.

Das ist ein Punkt aus deiner Praxis, kein Doku-Zitat. Als solchen markieren.

Der Dreh für die Vielnutzer: **wenn er es einmal richtig gemacht hat, lasst ihn
aufschreiben, wie.** Als Skill oder in die Instructions. Dann macht er es beim
nächsten Mal ohne die drei Fehlversuche davor.

Das ist die Brücke zu Block 3 — dort kommt es als Instructions-Beispiel wieder.

---

<p class="kicker">Entscheidung 3</p>

## Kontext gezielt geben

- `#file` `#selection` — genau die Stelle, nicht das Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo es steht
- `#changes` `#problems` — der Diff und die Fehlerliste
- `#fetch <url>` — die aktuelle Doku statt Trainingswissen

Note:
Zeit: 0:24 — DEMO 6 (`#fetch`).

Für harte 30 Minuten: diesen Block auf genau diese vier Referenzen kürzen.

Kernsatz aus der VS-Code-Doku: **was nicht im Kontext ist, existiert für das
Modell nicht.**

`#fetch` live zeigen — das kennen die wenigsten. Es löst das Problem, dass das
Modell eine API-Version von vor zwei Jahren kennt. "Ihr werft ihm die Doku-Seite
hin, und er benutzt die."

Häufigster Fehler in die andere Richtung: alles reinwerfen. Das große
Kontextfenster vollzumachen kostet Geld und macht die Antwort schlechter.

---

## Vier Sachen zum Prompt

1. **Konkret sein** — Sprache, Framework, Rahmenbedingungen
2. **Zerlegen** — kein ganzes Feature am Stück
3. **Sagen, wie das Ergebnis aussehen soll**
4. **Rückfragen einfordern** statt raten lassen

<p class="muted">VS Code Docs · <em>Prompt engineering for Copilot Chat</em></p>

Note:
Zeit: 0:25

Nicht "mach das besser", sondern "reduzier die Komplexität" oder "füg
Null-Prüfungen hinzu".

Punkt drei ist der wichtigste — nächste Folie.

---

## Der eine Satz, der am meisten bringt

<p class="big">Akzeptanzkriterien<br />gehören in den Prompt.</p>

<p class="muted">— sinngemäß aus der offiziellen VS-Code-Doku</p>

Note:
Zeit: 0:26

Wörtlich sagt die Doku: Testfälle, erwartete Ergebnisse oder
Akzeptanzkriterien mitgeben sei "one of the highest-leverage things you can
do" — weil das Modell seine eigene Arbeit damit prüfen kann.

Zurückbinden an die Demo: "Bestehende Tests müssen grün bleiben" stand vorhin
schon im Plan-Prompt. Darauf zeigen.

Übergang zu Block 3: "Kriterien, die *immer* gelten, tippt man nicht jedes Mal.
Die gehören ins Repo."
