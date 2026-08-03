<!-- .slide: class="center-text" -->

<p class="kicker">Block 2 · das Kernstück</p>

## So arbeite ich

Note:
Zeit: 0:09 — ab hier 18 Minuten. Das ist der Grund, warum die Leute zuhören.

Ansage: "Ich mache eine echte Aufgabe in einem kleinen Repo, so wie ich das
tatsächlich mache."

---

## Die Basics, in 60 Sekunden

| | |
| --- | --- |
| `/plan` | Plan vor der Umsetzung |
| `/init` | Instructions erzeugen |
| `/compact` `/fork` | langen Chat kürzen, abzweigen |
| `/explain` `/fix` `/tests` | die Klassiker |
| `#file` `#codebase` `#fetch` | Kontext mitgeben |
| `Strg+Alt+I` · `Strg+N` · `Strg+I` | Chat · neu · inline |

<p class="quelle">VS Code Docs · <em>AI features cheat sheet</em> — Link kommt in den Chat</p>

Note:
Zeit: 0:09 — **60 Sekunden, nicht mehr. Nicht vorlesen.**

Das ist die Vokabelfolie, damit gleich niemand aussteigt.

Nur auf die drei Zeilen zeigen, die heute noch vorkommen: `/plan`, `/init`,
`#fetch`.

Satz dazu: "Wenn ihr davon nichts kennt — das ist der Link, den ihr euch
speichert. Alles andere heute baut darauf auf."

**Link jetzt in den Chat**, nicht abtippen lassen.

Die Seite ist offiziell und wird gepflegt — deshalb Link statt Foliensammlung.

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

## Regeln für alle Repos auf einmal

```text
projekt/
├── .github/copilot-instructions.md   ← gilt für alle drei
├── frontend/
├── backend/
└── shared/
```

```json
"chat.useCustomizationsInParentRepositories": true
```

<p class="quelle">VS Code Docs · <em>Use custom instructions in VS Code</em></p>

Note:
Zeit: 0:11

**So funktioniert es:** Copilot sucht Instructions normalerweise nur in dem
Repo, in dem die Datei liegt, an der du gerade arbeitest. Mit der Einstellung
schaut er zusätzlich **eine Ebene höher** — in den Ordner, in dem deine Repos
nebeneinander liegen. Eine gemeinsame `.github/copilot-instructions.md` dort
gilt dann in allen Repos darunter.

**Einschalten:** `Strg+,` → oben `useCustomizationsInParentRepositories`
suchen → Haken setzen. Zwei Sekunden, live zeigen.

Wörtlich in der Doku: "In a monorepo, enable
`chat.useCustomizationsInParentRepositories` to discover instructions from the
parent repository root."

**Wenn jemand nach Submodulen oder verschachtelten Repos fragt:** die Doku sagt
nur "parent repository root" und definiert nicht genauer, was als Elternteil
zählt. Ehrliche Antwort: "weiß ich nicht, steht so nicht in der Doku."

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

## Vier Hebel, die wirklich sparen

- **Neuer Chat bei neuem Thema** — sonst zahlt ihr den alten Kram mit
- **`/compact`**, wenn ein Chat lang wird, ihr aber dranbleiben wollt
- **Tools abschalten**, die ihr nicht braucht — *Configure Tools*
- **Generierte Dateien ausschließen** — `.gitignore`, `files.exclude`

<p class="quelle">VS Code Docs · <em>Optimize AI credit usage</em></p>

Note:
Zeit: 0:14 — **zwanzig Sekunden, nicht ausbreiten.** Wer mehr will, kriegt den
Link.

Zu Punkt 1: alles in einer Unterhaltung heißt, der ganze Verlauf geht bei jeder
Anfrage nochmal mit.

Zu Punkt 4: sonst indiziert er euren `dist`-Ordner mit.

**Für harte 30 Minuten: diese Folie streichen.**

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

<p class="quelle">Madiraju &amp; Madiraju · <em>RigorBench</em> · arXiv 2606.22678, Juni 2026</p>

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
Beim Tippen kurz drauf zeigen, du kommst bei 0:26 darauf zurück.

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

**DIE ANTWORT** (falls du sie brauchst — hier noch NICHT sagen):

- `/memories/session/plan.md` — Session-Memory
- Liegt **lokal**, nicht im Projektbaum. Also nicht im Repo, nicht im Git
- Sichtbar über Command Palette → *Chat: Show Memory Files*
- Nach Ende der Conversation **weg**

Kurz halten, 30 Sekunden. Ein bis zwei Antworten vorlesen.

Die meisten tippen auf eine Datei im Repo. Das ist die Pointe der nächsten
Folie — **hier nicht auflösen.**

---

## Drei Arten von Gedächtnis

- **Session** — der Plan von eben. Nach dem Chat weg
- **Repository** — wie *dieses* Projekt gebaut und getestet wird
- **User** — wie *ihr* arbeitet, gilt in allen Projekten
- Davon werden die **ersten 200 Zeilen in jeden Chat geladen**

<p class="stand">VS Code 1.129.1</p>

Note:
Zeit: 0:19 — DEMO 5.

**Auflösung der Raten-Folie:** `/memories/session/plan.md`, Session-Memory,
liegt lokal außerhalb des Repos. Nach dem Chat weg.

**Wie kommt da was rein? Ihr sagt es ihm, in normaler Sprache.**
"Merk dir das" reicht. Er entscheidet selbst, auf welche Ebene es gehört, und
legt die Datei an oder ergänzt sie. Kein Pfad, keine Datei von Hand.

Faustregel, was wo landet:
- Repository → Build- und Testbefehle, Projektkonventionen
- User → deine Vorlieben, wiederkehrende Befehle, Arbeitsmuster

**Memory ist mehr als der Plan.** Der Plan ist nur der Fall, den sie gerade
gesehen haben — den legt der Agent von selbst in die Session-Ebene. Die anderen
beiden Ebenen befüllt ihr bewusst.

Command Palette → **Chat: Show Memory Files** → alle drei Ebenen zeigen.

**Wenn Zeit ist, live machen:** "merk dir, dass ich Tests immer selbst
ausführe" → dann *Chat: Show Memory Files* → neue Zeile zeigen. Das ist der
Moment, in dem es greifbar wird.

Zwei Einschränkungen nennen: Preview, und einzelne Einträge sind nicht
löschbar — nur alles auf einmal mit *Chat: Clear All Memory Files*.

Memory ist bei uns **freigeschaltet** (03.08.2026), der Block läuft vollständig.

**Vorher:** eigene User-Memory-Datei durchsehen, die landet auf dem Share.

Quelle: VS Code Docs, *Memory in VS Code agents*

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

## Und wenn er trotzdem Mist baut

- Vor **jedem** Chat-Request ein Snapshot der betroffenen Dateien
- Im Chat über den Request hovern → **Restore Checkpoint**
- Dateien zurück, Request weg aus dem Verlauf — **Redo** geht
- Einschalten: `chat.checkpoints.enabled`

<p class="quelle">VS Code Docs · <em>Checkpoints</em></p>

Note:
Zeit: 0:23 — kennt kaum jemand, rettet genau dann, wenn es schiefgeht.

**Kein Ersatz für Git.** Wörtlich in der Doku: "Checkpoints are designed for
quick iteration within a chat session and are temporary. They complement Git
but don't replace it."

Der praktische Nutzen, und das ist der Satz, der hängen bleiben soll:

> "Ihr könnt den Agenten mutiger laufen lassen. Ihr habt einen Rückwärtsgang,
> der schneller ist als `git checkout`."

Passt inhaltlich direkt zum Schlusssatz des Vortrags — der Agent schreibt
schneller, als ihr prüfen könnt. Das hier ist die eingebaute Antwort darauf.

**Vor dem Vortrag prüfen:** ist `chat.checkpoints.enabled` bei dir an? Wenn ja,
kannst du es an der laufenden Demo zeigen, statt nur davon zu erzählen.

---

<p class="kicker">Entscheidung 3</p>

## Kontext gezielt geben

- `#file` `#selection` — genau die Stelle, nicht das Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo es steht
- `#changes` `#problems` — der Diff und die Fehlerliste
- `#fetch <url>` — die aktuelle Doku statt Trainingswissen

Note:
Zeit: 0:25 — DEMO 6 (`#fetch`).

Für harte 30 Minuten: diesen Block auf genau diese vier Referenzen kürzen.

Kernsatz aus der VS-Code-Doku: **was nicht im Kontext ist, existiert für das
Modell nicht.**

`#fetch` live zeigen — das kennen die wenigsten. Es löst das Problem, dass das
Modell eine API-Version von vor zwei Jahren kennt. "Ihr werft ihm die Doku-Seite
hin, und er benutzt die."

Häufigster Fehler in die andere Richtung: alles reinwerfen. Das große
Kontextfenster vollzumachen kostet Geld und macht die Antwort schlechter.

**Falls die Frage kommt "ich hänge Dateien lieber per Knopf an, ist das
schlechter?" — nein.** Was zählt, ist *was* im Kontext landet, nicht wie es
dahin kommt. Die Doku beschreibt nur die `#`-Variante, sagt aber nirgends, dass
Anhängen schlechter wäre.

Der Vorteil von `#` ist Tempo — und dass es Dinge gibt, für die es keinen Knopf
gibt: `#fetch`, `#problems`, `#changes`. Genau die drei lohnen sich zu lernen,
der Rest ist Geschmackssache.

**Ein Satz Vorsicht zu `#fetch`, direkt nach der Demo:**

> "Was von einer fremden Seite reinkommt, ist Text, den ihr nicht kontrolliert.
> Steht da 'ignoriere alle vorherigen Anweisungen', liest der Agent das mit.
> Heißt nicht: lasst es bleiben. Heißt: holt Doku und nicht irgendwas."

Quelle: VS Code Docs, *Security* — Prompt Injection über Tool-Ausgaben.
**Ein Satz. Kein Sicherheitsvortrag.**

---

## Vier Sachen zum Prompt

1. **Konkret sein** — Sprache, Framework, Rahmenbedingungen
2. **Zerlegen** — kein ganzes Feature am Stück
3. **Sagen, wie das Ergebnis aussehen soll**
4. **Rückfragen einfordern** statt raten lassen

<p class="quelle">VS Code Docs · <em>Prompt engineering for Copilot Chat</em></p>

Note:
Zeit: 0:26

Nicht "mach das besser", sondern "reduzier die Komplexität" oder "füg
Null-Prüfungen hinzu".

Punkt drei ist der wichtigste. Nächste Folie zeigt denselben Wunsch zweimal.

---

## Derselbe Wunsch, zweimal

<div class="cols">
<div class="card bad">

### So nicht

```text
Mach die Validierung
besser.
```

</div>
<div class="card good">

### So

```text
Schreib eine TypeScript-Funktion,
die E-Mail-Adressen validiert.
true für gültige, sonst false.
Kein Regex.

Testfälle:
"a@b.de" → true
"a@"     → false
""       → false
```

</div>
</div>

Note:
Zeit: 0:26

**Rechts stehen alle vier Punkte drin:**

- konkret — Sprache und Rückgabewert benannt
- eine Aufgabe, nicht drei
- erwartetes Ergebnis als Testfälle
- eine Rahmenbedingung ("kein Regex")

Links steht nichts davon. Deshalb rät das Modell, und ihr diskutiert danach
zwei Runden über etwas, das ihr vorher in einem Satz hättet festlegen können.

Der eigentliche Punkt ist nicht "schreib mehr". Es ist: **die Testfälle sind
die Abnahme.** Damit kann er selbst prüfen, ob er fertig ist.

---

## Der eine Satz, der am meisten bringt

<p class="big">Akzeptanzkriterien<br />gehören in den Prompt.</p>

<p class="quelle">VS Code Docs · <em>Prompt engineering for Copilot Chat</em></p>

Note:
Zeit: 0:27

Wörtlich sagt die Doku: Testfälle, erwartete Ergebnisse oder
Akzeptanzkriterien mitgeben sei "one of the highest-leverage things you can
do" — weil das Modell seine eigene Arbeit damit prüfen kann.

Zurückbinden an die Demo: "Bestehende Tests müssen grün bleiben" stand vorhin
schon im Plan-Prompt. Darauf zeigen.

Übergang zu Block 3: "Kriterien, die *immer* gelten, tippt man nicht jedes Mal.
Die gehören ins Repo."
