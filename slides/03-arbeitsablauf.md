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
| `Strg+Alt+I` · `Strg+I` | Chat · Inline-Chat |
| `/explain` `/fix` `/tests` | Einzelaufgaben |
| `/clear` `/fork` | neue Session · abzweigen |

<p class="quelle">VS Code Docs · <em>AI features cheat sheet</em> — Link kommt in den Chat</p>

Note:
Zeit: 0:09 — **60 Sekunden, nicht mehr. Nicht vorlesen.**

Bewusst nur das, was heute **nicht** mehr vorkommt. `/plan`, `/init` und die
`#`-Referenzen kriegen später eigene Folien — hier stünden sie doppelt.

Satz dazu: "Wenn ihr davon nichts kennt — das ist der Link, den ihr euch
speichert. Alles Weitere steht auch im Handout."

**Link jetzt in den Chat**, nicht abtippen lassen.

---

## Ein Workspace für alles

- Mehrere Repos → **ein** Workspace, nicht drei Fenster
- `#codebase` sieht dann alle auf einmal
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

- **Offiziell:** `Auto` wählt aus, ist günstiger
- **Meine Erfahrung:** greift zu oft zu den schwachen
- Bewusst eins einstellen und dabeibleiben
- Runter für Fleißarbeit — hoch müsst ihr selten

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

## Modellwahl ist auch eine Geldfrage

- Seit 01.06.2026 **tokenbasiert** — 30 $ im Monat
- **Gesamtkosten pro Session** sind sichtbar
- Sparen: neuer Chat je Thema, `/compact` bei langen
- Sparen: ungenutzte Tools aus, `dist` ausschließen

<p class="quelle">VS Code Docs · <em>Optimize AI credit usage</em></p>

Note:
Zeit: 0:13 — DEMO 3, Session-Kosten einblenden. **Nicht ausbreiten.**

**Nur sagen, was verifiziert ist. Nichts über die Vertragslage behaupten.**

Die Zahl nicht vorlesen, als wäre sie repräsentativ — du hast bis hier erst
einen Prompt abgesetzt. Der Punkt ist, dass es die Anzeige überhaupt gibt.

Kernsatz: "Modellwahl war früher eine Qualitätsfrage, heute ist sie auch eine
Geldfrage — aber die Rechnung geht meistens trotzdem zugunsten des besseren
Modells aus. Ein Modell, das es beim ersten Mal trifft, ist billiger als drei
Anläufe mit dem günstigen."

Zu den Spar-Punkten: alles in einer Unterhaltung heißt, der ganze Verlauf geht
bei jeder Anfrage mit. Und ohne `files.exclude` indiziert er euren
`dist`-Ordner.

**Vor dem Vortrag prüfen:** wo genau sitzt die Anzeige in der aktuellen
Version? Nicht auf dem Share danach suchen müssen.

**Für harte 30 Minuten: die beiden Spar-Zeilen weglassen und weiter.**

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

- Beide Hersteller haben es eingebaut
- Der offizielle Planer kann **nichts ausführen**
- **+17 %** Korrektheit des Ergebnisses
- Agenten planen von sich aus **nie**

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
Beim Tippen kurz drauf zeigen, du kommst bei 0:25 darauf zurück.

Plan-Agent erzeugt: Zusammenfassung, Implementierungsschritte,
Verifikationsschritte. Er stellt teilweise Rückfragen.

**Den Plan wirklich lesen und laut kommentieren.** Nicht scrollen und "sieht
gut aus" sagen — dann ist die Demo wertlos.

**Korrigiert wird per Folge-Prompt im Chat**, nicht durch Editieren einer Datei:

> Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary.
> Pass den Plan an.

Quelle: VS Code Docs, *Planning with agents* — "submit follow-up prompts to
iterate on the plan". **Nicht in `plan.md` herumtippen** — ob eine Handänderung
dort übernommen wird, steht nirgends.

Satz dazu: "Ich korrigiere hier eine Zeile. Wenn ich denselben Fehler erst
nach der Implementierung finde, kostet er mich zwanzig Minuten und einen Diff,
den ich nicht mehr auseinanderklamüsern will."

Erst danach implementieren lassen.

**Korrekturstelle (aus dem Probelauf):** der neue Typ soll nach `src/types.ts`,
nicht lokal in `timesheet.ts`. Satz dazu: "Er kann das nicht wissen — es steht
nirgends. Genau dafür kommt gleich die `copilot-instructions.md`."

Nach der Umsetzung laut prüfen: `format.ts` und `package.json` nicht angefasst,
Tests grün. **Nicht auf die Zeilenzahl schauen.**

---

## Was der Plan wirklich bringt

<p class="big">Der Fehler kostet hier eine Zeile.<br />Im fertigen Diff kostet er zwanzig Minuten.</p>

Note:
Zeit: 0:18 — **drei Sätze, dann weiter. Nicht rechtfertigen.**

Die ehrliche Ansage zuerst, die nimmt jeder Nachfrage den Wind:

> "Ich kann euch in vier Minuten nicht beweisen, dass das Ergebnis besser wird.
> Dafür bräuchte ich hundert Durchläufe, nicht einen."

Dann das, was du **tatsächlich** gezeigt hast:

> "Was ich euch zeigen kann: ich habe den Fehler gesehen, bevor er Code war.
> Ohne Plan hätte ich jetzt fünfundsechzig geänderte Zeilen vor mir und müsste
> raten, wo das Missverständnis steckt."

Für "das Ergebnis wird besser" verweist du zurück auf die Zahlen von 0:15 —
+17 % Korrektheit — und darauf, dass beide Hersteller es eingebaut haben.
**Nicht selbst behaupten, was die Studie trägt.**

**Wenn jemand nachbohrt** ("kann man das nicht nachträglich korrigieren?"):
"Klar. Nur ist Nachbessern im fertigen Diff die teuerste Stelle im ganzen
Ablauf. Genau das ist der Punkt."

**Optional, nur wenn vorbereitet:** zwei `git diff --stat` nebeneinander, einmal
mit und einmal ohne Plan. Nur zeigen, wenn der Unterschied deutlich ist — und
dazusagen, dass ein Durchlauf kein Beweis ist.

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
- **Repository** — wie *dieses* Projekt gebaut wird
- **User** — wie *ihr* arbeitet, überall
- Davon **200 Zeilen in jedem Chat**

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
- Er schreibt, ich führe aus, ich kippe das Ergebnis rein
- Zehn Sekunden für mich, viele Tokens gespart

Note:
Zeit: 0:22 — läuft gegen das, was überall empfohlen wird. Genau deshalb erzählen.

Das ist ein Punkt aus deiner Praxis, kein Doku-Zitat. Als solchen markieren.

Der Dreh für die Vielnutzer: **wenn er es einmal richtig gemacht hat, lasst ihn
aufschreiben, wie.** Als Skill oder in die Instructions. Dann macht er es beim
nächsten Mal ohne die drei Fehlversuche davor.

Das ist die Brücke zu Block 3 — dort kommt es als Instructions-Beispiel wieder.

---

## Und wenn er trotzdem Mist baut

- Vor **jedem** Request ein Snapshot der Dateien
- Über den Request hovern → **Restore Checkpoint**
- Dateien zurück, **Redo** geht — aber kein Ersatz für Git
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

- `#file` `#selection` — die Stelle, nicht das Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo
- `#changes` `#problems` — Diff und Fehlerliste
- `#fetch <url>` — aktuelle Doku statt Trainingswissen

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

--

## Nachsehen, was er wirklich bekommen hat

- Chat-Menü → **Show Chat Debug View**
- Links jeder Request, einzeln anklickbar
- Drin: System Prompt, User Prompt, **Context**, Tool-Antworten

<p class="stand">Stand: 05.08.2026, VS Code 1.129.1</p>

Note:
Vertiefung, Vertikale unter "Kontext gezielt geben". **60 Sekunden, live.**

Das ist der Punkt, an dem "was nicht im Kontext ist, existiert für das Modell
nicht" vom Merksatz zum Nachweis wird. **Kennen auch Vielnutzer meistens nicht.**

Zwei Wege rein, beide funktionieren:
- Überlaufmenü der Chat-Ansicht → *Show Chat Debug View*
- Command Palette → *Developer: Show Chat Debug View*

Ablauf: einen der Requests von vorhin anklicken, den Abschnitt **Context**
aufklappen. Dann sieht man schwarz auf weiß, was von `#file` und `#codebase`
tatsächlich mitgegangen ist — und wie viel Text der System Prompt schon vorher
belegt.

Kernsatz: "Wenn ihr euch mal fragt, warum er etwas nicht wusste — hier steht
die Antwort. Meistens war es einfach nicht dabei."

Nicht ausbreiten. Aufklappen, zeigen, zumachen. Der System Prompt ist lang, da
verliert man sich sonst.

**Verwechslungsgefahr:** es gibt daneben noch die *Agent Debug Logs* (Preview,
eigenes Setting) mit Zeitachse und Token-Statistik. Nicht dasselbe, hier nicht
aufmachen.

Quelle: VS Code Docs, *Debug chat interactions*.

---

## Vier Sachen zum Prompt

1. **Konkret sein** — Sprache, Framework, Rahmenbedingungen
2. **Zerlegen** — kein ganzes Feature am Stück
3. **Sagen, wie das Ergebnis aussehen soll**
4. **Rückfragen einfordern** statt raten lassen

<p class="quelle">VS Code Docs · <em>Prompt engineering for Copilot Chat</em></p>

Note:
Zeit: 0:25

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

**Der Kernsatz, laut sagen:** "Die Testfälle sind die Abnahme. Damit kann er
selbst prüfen, ob er fertig ist." Die Doku nennt das "one of the
highest-leverage things you can do".

Zurückbinden an die Demo: "Bestehende Tests müssen grün bleiben" stand vorhin
schon im Plan-Prompt. Darauf zeigen.

Übergang zu Block 3: "Kriterien, die *immer* gelten, tippt man nicht jedes Mal.
Die gehören ins Repo."
