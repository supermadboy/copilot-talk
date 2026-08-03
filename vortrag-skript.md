# Vortragsskript

**Das hier ist die Quelle.** Folien und Demo-Repo werden aus diesem Text
gebaut, nicht umgekehrt.

**Lesehilfe**

- Normaler Text = das, was du sagst. Gerüst, nicht zum Vorlesen.
- `▸` = Regieanweisung. Was du **tust**, nicht sagst.
- `▸ Quelle:` = Beleg für die Aussage davor. Gehört auf die Folie.
- Zeiten sind **kumulativ**: "0:12" heißt "hier bist du zwölf Minuten drin".

**Leitgedanke:** Die Leute sollen mit etwas Handfestem rausgehen und ihre
Repos danach selbst vernünftig aufsetzen können. Jeder Abschnitt muss auf die
Frage einzahlen: *was mache ich morgen früh anders?*

**Zeitplan:** Kern 47 Minuten bis zum Schlusssatz.
Für harte 30: Teil 4 komplett streichen, Teil 1 auf zwei Sätze, in Teil 2 die
Prompt-Tipps und die Credit-Hebel raus, in Teil 3 die Custom Agents und
`.instructions.md`. Der `/init`-Block und die Checkpoints bleiben — das ist das
Handfeste.

---

## Teil 0 — Einstieg · 0:00 bis 0:06

### 0:00 Begrüßung

▸ Screensharing prüfen, kurz in den Chat schauen lassen.

Hi zusammen. Ich zeige euch in der nächsten halben Stunde, wie ich mit Copilot
arbeite. Nicht welche Features es gibt — das könnt ihr nachlesen — sondern wie
mein Ablauf aussieht, wenn ich morgens eine echte Aufgabe habe.

Mein Ziel ist, dass ihr danach eure eigenen Repos vernünftig aufsetzen könnt.
Am Ende kriegt ihr eine Checkliste, da steht alles drauf.

Zwei Sachen vorweg: ich mache viel live, und wenn was schiefgeht, gehe ich
einfach weiter. Und schreibt Fragen jederzeit in den Chat, ich sammle die ein.

### 0:01 Wer arbeitet womit?

▸ Interaktionsfolie, Reaktionsleiste. **Zwanzig Sekunden, zwei Runden.**

Ganz kurz, damit ich weiß, mit wem ich es zu tun habe. Daumen hoch, wer VS Code
benutzt.

▸ Auszählen, laut sagen.

Und jetzt Daumen hoch, wer mit was anderem arbeitet — IntelliJ, Rider, was auch
immer.

▸ Auszählen, laut sagen.

▸ **Das Ergebnis merken, du brauchst es zweimal:** einmal, um Teil 2 flacher
oder tiefer zu fahren, und einmal in Teil 4, wo du darauf zurückkommst statt
nochmal zu fragen.

▸ Bewusst die leichte Frage zuerst — ein Daumen kostet nichts. Danach sitzt die
Chat-Frage lockerer.

### 0:01 Die Chat-Frage

▸ Interaktionsfolie. **Hier passiert nichts von alleine.**

Bevor ich anfange, brauche ich was von euch. Schreibt mir bitte eine Sache in
den Chat, die euch an Copilot nervt. Eine reicht.

▸ **45 bis 60 Sekunden warten. Wirklich schweigen.** Sobald die ersten zwei,
drei Antworten da sind, laut vorlesen — das löst die Blockade bei den anderen.

▸ Antworten auf dem zweiten Monitor offen lassen, du brauchst sie in Teil 6.

Gut, danke. Ich komme am Ende darauf zurück.

▸ Du siehst jetzt, ob das eher Einsteiger oder Vielnutzer sind. Teil 2
entsprechend flacher oder tiefer fahren.

### 0:03 Der Hook — Live-Demo 1

Eine Sache vorweg, die die meisten noch nicht gesehen haben.

▸ **DEMO, harte Grenze 90 Sekunden.**
▸ **Vorher zu Hause einmal durchspielen** — die Demo ist stark, aber nur wenn
sie sitzt. Wenn sie beim Proben nicht zuverlässig läuft: ersatzlos streichen
und mit Teil 1 anfangen.
▸ Screenshot der kaputten Ansicht per Drag & Drop in den Chat.
▸ Prompt: "Was ist hier kaputt und in welcher Datei?"

Ich beschreibe den Fehler nicht. Ich ziehe einen Screenshot rein.

▸ Antwort abwarten, Fix übernehmen, Browser zeigen.

Das ist Copilot Vision, seit Anfang Juli allgemein verfügbar. Der ganze Schritt
"Fehler in Worte fassen und hoffen, dass das Modell richtig rät" fällt weg.

▸ **Fallback:** Screenshot aus `images/` zeigen und erzählen. Nicht reparieren
wollen.

### 0:05 Der Fahrplan

▸ Inhaltsfolie. Vier Blöcke, nicht sechs Teile — die Leute sollen sich das
merken können, nicht mitlesen.

Kurz, wo wir hinlaufen. Vier Blöcke:

1. **Was gerade neu ist** — fünf Minuten, damit ihr wisst, worüber wir reden
2. **Wie ich arbeite** — eine echte Aufgabe, von vorne bis fertig
3. **Was ihr in euer Repo legt** — damit das bei euch morgen auch so läuft
4. **Regeln bei uns, und dann eure Fragen**

Block zwei und drei sind der eigentliche Vortrag. Der Rest ist Rahmen. Wenn ihr
zwischendurch rausfallt, steigt spätestens da wieder ein.

Und das Versprechen für den Schluss: ihr geht mit einer Checkliste raus, die ihr
abarbeiten könnt. Ihr müsst also nicht mitschreiben.

▸ Nicht länger als eine Minute. Das ist Orientierung, kein Inhalt.

▸ **Optional:** dieselbe Folie vor Teil 3 nochmal kurz einblenden — das ist der
Punkt, an dem der Vortrag von "wie Markus arbeitet" auf "was ihr tut"
umschaltet. Kostet zehn Sekunden. Wenn du in Zeitnot bist, weglassen.

---

## Teil 1 — Was gerade passiert · 0:06 bis 0:09

> Kurz und locker halten. Das ist Aufwärmen, nicht der Inhalt.
> Für 30 Minuten: auf zwei Sätze eindampfen.

### 0:06 Das Tempo

Ganz kurz zur Einordnung, warum ich den Vortrag überhaupt halte und nicht
einfach einen Link schicke.

VS Code hat am achten Juli 1.128 released. Am fünfzehnten 1.129. Am
siebzehnten nochmal einen Fix hinterher. Drei Releases in neun Tagen.

Ich sag das nicht, um mich abzusichern — sondern weil es ehrlich gesagt
schwierig ist, da hinterherzukommen. Ich schau da auch nicht jede Woche rein.
Deshalb: was ich euch zeige, ist der Stand von heute.

▸ Wenn zwischen heute und dem Vortrag 1.130 erschienen ist: Zeile ergänzen.

### 0:07 Drei Sachen, die was ändern

Drei Sachen aus den letzten Wochen, die tatsächlich was bringen.

**Vision** habt ihr gerade gesehen.

**Browser-Tools.** Der Agent bekommt einen echten Browser in VS Code — er
klickt, tippt, liest Konsolen-Fehler, macht Screenshots. Also: er ändert was am
CSS, lädt die Seite selbst, schaut nach, korrigiert nach. Ohne euch.

Und die erste Frage, die immer kommt: eure offenen Tabs sind privat. Der Agent
kommt an eine Seite, die ihr selbst geöffnet habt, erst wenn ihr auf "Share
with Agent" klickt.

▸ Quelle: VS Code Docs, *Build and test web apps with browser agent tools*

**Parallele Chats.** Mehrere Unterhaltungen in einer Session — Implementierung
im einen, Review im anderen. Jeder mit eigener History und eigenem Modell.

So, das war der Neuigkeiten-Teil. Jetzt zum eigentlichen Thema.

---

## Teil 2 — So arbeite ich · 0:09 bis 0:27

> **Das Kernstück.** Hier ist alles drin, was die Leute mitnehmen sollen.

### 0:09 Rahmen und die Basics

Jetzt der eigentliche Teil. Ich mache eine echte Aufgabe in einem kleinen Repo,
so wie ich das tatsächlich mache.

Ganz kurz vorweg das Vokabular, damit gleich niemand aussteigt. Ich gehe das
nicht durch, ich zeige es nur — den Link schicke ich in den Chat.

▸ **Cheat-Sheet-Folie. 60 Sekunden, nicht mehr.** Nicht vorlesen.
Die Folie zeigt bewusst nur, was später **nicht** mehr vorkommt — `/plan`,
`/init` und die `#`-Referenzen kriegen eigene Folien.

▸ Quelle: VS Code Docs, *AI features cheat sheet* — die Seite ist offiziell und
wird gepflegt, deshalb kommt sie als Link statt als Foliensammlung.

Wenn ihr davon nichts kennt: das ist der Link, den ihr euch speichert. Alles
Weitere steht auch im Handout.

### 0:10 Setup — ein Workspace für alles

Und ich fange nicht bei der Aufgabe an, sondern eine Stufe davor: beim Setup.

Das ist der unspektakulärste Tipp des Vortrags und trotzdem der, der bei mir am
meisten gebracht hat.

▸ VS Code Workspace zeigen, in dem mehrere Repos eines Projekts liegen.

Wenn ein Projekt aus mehreren Repos besteht — Frontend, Backend, geteilte
Bibliothek — dann macht nicht drei Fenster auf. Macht einen Workspace, in dem
alle drin sind.

Der Unterschied ist nicht Bequemlichkeit. Der Agent sieht mit `#codebase` alle
Repos auf einmal. Er findet, dass das Feld im Backend anders heißt als im
Frontend. In drei getrennten Fenstern findet er das nie, und ihr erklärt es ihm
jedes Mal neu.

Dazu gibt es eine Einstellung, die genau dafür gebaut ist:
`chat.useCustomizationsInParentRepositories`.

Was die macht: normalerweise sucht Copilot Instructions nur im Repo, in dem die
Datei liegt, an der ihr gerade arbeitet. Mit der Einstellung schaut er
zusätzlich **eine Ebene höher** — in den übergeordneten Ordner, in dem eure
Repos nebeneinander liegen. Legt ihr dort eine gemeinsame
`.github/copilot-instructions.md` hin, gilt die in allen Repos darunter. Einmal
gepflegt statt dreimal.

▸ Einschalten: `Strg+,`, oben `useCustomizationsInParentRepositories` suchen,
Haken setzen. **Live zeigen, das ist ein Zweisekünder.**

▸ Quelle: VS Code Docs, *Use custom instructions in VS Code* — wörtlich: "In a
monorepo, enable `chat.useCustomizationsInParentRepositories` to discover
instructions from the parent repository root."

▸ **Ehrlich bleiben:** die Doku sagt nur "parent repository root" und definiert
nicht genauer, was als Elternteil zählt. Wenn jemand nach Submodulen oder
verschachtelten Repos fragt: "weiß ich nicht, das steht so nicht in der Doku."

Die Aufgabe für gleich: die Einträge sollen nach Projekt gruppiert werden, mit
einer Summe pro Projekt.

▸ Vorher prüfen: `npm run demo:reset` (aus dem Repo-Wurzelverzeichnis)

### 0:12 Entscheidung 1 — welches Modell

Erste Entscheidung. Und da bin ich anderer Meinung als die offizielle
Empfehlung, deshalb sage ich beides.

**Die offizielle Empfehlung ist "Auto".** Das wählt automatisch aus und ist
laut GitHub obendrein günstiger.

▸ Quelle: GitHub Docs, *Choosing the right AI model for your task*

**Meine Erfahrung ist eine andere.** Ich arbeite praktisch nur mit Codex. Auto
greift mir zu oft zu den günstigen Modellen, und die sind bei allem, was über
eine Handvoll Zeilen hinausgeht, schlicht nicht gut genug. Sie machen nicht
das, was sie sollen, ich merke es erst nach zwei Runden, und dann habe ich mehr
Zeit verloren als ich an Credits gespart habe.

Deshalb mein Rat: **stellt bewusst ein Modell ein und bleibt dabei, bis ihr
einen Grund habt zu wechseln.** Wechselt nach unten für echte Fleißarbeit —
Umbenennen, Boilerplate, Formatkram. Nach oben braucht ihr selten zu gehen,
weil ihr schon oben seid.

Was ihr wissen müsst, wenn ihr das so macht: es kostet. Seit dem ersten Juni
wird nach Tokens abgerechnet, in AI Credits, ein Credit ist ein Cent. Wir haben
dreißig Dollar im Monat.

▸ **Nur sagen, was verifiziert ist.** Nichts über die Vertragslage behaupten.

Und das ist der Punkt, den ich euch mitgeben will: Modellwahl war früher eine
Qualitätsfrage, heute ist sie auch eine Geldfrage — aber die Rechnung geht
meistens trotzdem zugunsten des besseren Modells aus. Ein Modell, das die
Aufgabe beim ersten Mal richtig macht, ist billiger als drei Anläufe mit dem
günstigen.

▸ Session-Kosten einblenden. Neu seit Juni: Gesamtkosten über einen ganzen
Chat, nicht nur pro Request. Und aufgeschlüsselt nach Subagent.

Und weil die Frage sofort kommt — vier Hebel, die wirklich etwas bringen:

- **Neuer Chat bei neuem Thema.** Alles in einer Unterhaltung heißt, ihr bezahlt
  den alten Kram bei jeder Anfrage mit
- **`/compact`**, wenn ein Chat lang geworden ist, aber ihr dranbleiben wollt —
  fasst den Verlauf zusammen und gibt Kontextfenster frei
- **Tools abschalten**, die ihr nicht braucht, über *Configure Tools* im
  Eingabefeld
- **Generierte Dateien ausschließen** über `.gitignore`, `files.exclude` und
  `search.exclude` — sonst indiziert er euren `dist`-Ordner mit

▸ Quelle: VS Code Docs, *Optimize AI credit usage*

▸ **Nicht ausbreiten, das ist eine Aufzählung von zwanzig Sekunden.** Wer mehr
will, kriegt den Link.

▸ Modellnamen nicht vorlesen — die sind in vier Wochen falsch.

### 0:15 Entscheidung 2 — erst Plan, dann Code

Wenn ihr heute nur eine Sache mitnehmt, dann die.

Und ich rede nicht von einem Prompting-Trick, wo man "denk erst nach"
davorschreibt. Das ist ein eingebautes Feature — und es gibt Zahlen dazu.

**Erstens: die Hersteller haben es eingebaut.** VS Code hat einen Plan-Agenten,
und GitHub liefert in seiner offiziellen Bibliothek einen fertigen
`implementation-planner` mit — bezeichnenderweise mit nur drei Tools: lesen,
suchen, schreiben. Kein Ausführen.

▸ Quelle: VS Code Docs, *Planning with agents* · GitHub Docs,
*Customization library → implementation-planner*

**Zweitens: es ist gemessen.** Es gibt seit Juni einen Benchmark, RigorBench,
der nicht misst *ob* der Code funktioniert, sondern *wie* Agenten arbeiten. Das
Ergebnis: strukturiertes Vorgehen hebt die Prozessqualität um durchschnittlich
41 Prozent — und, das ist die Zahl, die zählt, die **Korrektheit des Ergebnisses
um 17 Prozent**.

Und der interessanteste Befund daraus: Agenten planen von sich aus praktisch
nie. Sie können es, aber sie tun es nur, wenn man sie explizit dazu auffordert.

▸ Quelle: Madiraju & Madiraju, *RigorBench: Benchmarking Engineering Process
Discipline in Autonomous AI Coding Agents*, arXiv 2606.22678, Juni 2026

Also: der Agent macht es nicht von selbst. Ihr müsst `/plan` tippen.

▸ **DEMO.** In den Chat:

```
/plan Gruppiere die Einträge nach Projekt und zeige pro Projekt
eine Summe an.

Bestehende Tests müssen grün bleiben.
Keine neue Abhängigkeit.
```

Er geht durch den Code, stellt teilweise Rückfragen, und schreibt dann einen
Plan: Zusammenfassung, Schritte, und wie man hinterher prüft, ob es geklappt
hat.

▸ **Den Plan wirklich lesen und laut kommentieren.**

Hier steht, dass der neue Typ in `timesheet.ts` angelegt wird. Bei uns liegen
gemeinsame Typen aber in `types.ts`. Das ändere ich.

▸ **Korrigiert wird per Folge-Prompt im Chat**, nicht durch Editieren einer
Datei. Genau so:

```
Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary.
Pass den Plan an.
```

▸ Quelle: VS Code Docs, *Planning with agents* — "Review the plan draft and
submit follow-up prompts to iterate on the plan until it meets your
requirements."

▸ **Nicht in `plan.md` herumtippen.** Die Datei liegt zwar in der
Session-Memory und lässt sich über *Chat: Show Memory Files* öffnen — ob eine
Handänderung dort vom Agenten übernommen wird, steht nirgends. Live nicht
riskieren.

Und das ist der ganze Punkt — und zwar der einzige, den ich euch heute wirklich
beweisen kann. **Diese Korrektur kostet mich gerade eine Zeile.** Wenn ich
denselben Fehler erst im fertigen Diff finde, sitze ich zwanzig Minuten dran und
muss durch fünfundsechzig geänderte Zeilen, um die eine zu finden.

Der Plan ist die Stelle, an der ein Missverständnis noch billig ist.

▸ Erst danach implementieren lassen.

### 0:18 Warum überhaupt planen — was du dazu sagst

> **Markus' Frage: muss ich nicht zeigen, dass es mit Plan besser wird?**
> Nein — und der Versuch würde nach hinten losgehen. Ein Durchlauf ist kein
> Beweis, und das weiß jeder im Publikum. Sag stattdessen das hier.

Ich kann euch in vier Minuten nicht beweisen, dass das Ergebnis besser wird.
Dafür bräuchte ich hundert Durchläufe, nicht einen.

Was ich euch zeigen kann, ist etwas anderes, und das reicht mir: **ich habe den
Fehler gesehen, bevor er Code war.** Ohne Plan hätte ich jetzt fünfundsechzig
geänderte Zeilen vor mir und müsste raten, wo das Missverständnis steckt.

Für die Behauptung, dass auch das *Ergebnis* besser wird, verlasse ich mich
nicht auf mein Bauchgefühl, sondern auf die Zahlen von vorhin — siebzehn Prozent
mehr Korrektheit. Und darauf, dass beide Hersteller das Feature eingebaut haben.

▸ **Drei Sätze, dann weiter.** Nicht rechtfertigen, nicht ausweiten.

▸ **Wenn jemand nachbohrt** ("kann man das nicht einfach nachträglich
korrigieren?"): "Klar. Nur ist Nachbessern im fertigen Diff die teuerste Stelle
im ganzen Ablauf. Genau das ist der Punkt."

▸ **Optionaler A/B-Vergleich, nur wenn zu Hause vorbereitet.** Denselben Prompt
einmal *ohne* `/plan` laufen lassen, beide `git diff --stat` als Screenshot
nebeneinander. Wirkt stark, **wenn** der Unterschied deutlich ist — mehr
angefasste Dateien, `format.ts` mit drin, oder eine neue Abhängigkeit.
> ⚠️ Kommt ohne Plan zufällig dasselbe raus: **Screenshot wegwerfen, nicht
> zeigen.** Und wenn du ihn zeigst, sag dazu, dass es ein Durchlauf ist und kein
> Beweis. Sonst zerlegt dir die erste Nachfrage die Glaubwürdigkeit.

### 0:19 Raten-Folie — wo liegt der Plan?

▸ Interaktionsfolie. **30 Sekunden, nicht mehr.**

Kurze Frage in den Chat, bevor ich weitermache: wo speichert Copilot den Plan,
den ihr gerade gesehen habt?

▸ Ein bis zwei Antworten vorlesen. **Hier nicht auflösen** — die meisten tippen
auf eine Datei im Repo, und genau das ist die Pointe des nächsten Blocks.

▸ **Die Antwort, falls du sie brauchst:** in der Session-Memory unter
`/memories/session/plan.md`. Nicht im Projektbaum — die Memory-Dateien liegen
lokal außerhalb des Repos. Sichtbar über *Chat: Show Memory Files*. Und nach
Ende der Conversation weg.

### 0:19 Memory — was der Agent sich merkt

Der Plan von eben liegt nämlich nicht im Repo. Und das führt zu einer Sache,
die deutlich nützlicher ist, als sie klingt.

Copilot hat drei Arten von Gedächtnis:

- **Session** — der Plan von eben. Nach dem Chat weg.
- **Repository** — gilt in diesem Projekt, überlebt den Chat.
- **User** — gilt in *allen* euren Projekten.

Und jetzt der Teil, der es interessant macht: **von der User-Ebene werden die
ersten 200 Zeilen automatisch in jeden Chat geladen.** In jedem Projekt, ohne
dass ihr etwas tut.

▸ Quelle: VS Code Docs, *Memory in VS Code agents*

Und wie kommt da was rein? **Ihr sagt es ihm, in normaler Sprache.** "Merk dir
das" reicht. Er entscheidet dann selbst, auf welche Ebene es gehört, und legt
die Datei an oder ergänzt sie. Ihr müsst weder einen Pfad kennen noch eine
Datei anlegen.

Als Faustregel, was wo landet:

- **Repository** — wie *dieses* Projekt gebaut und getestet wird, Konventionen
- **User** — wie *ihr* arbeitet: Vorlieben, wiederkehrende Befehle, Muster

Der Plan von eben ist übrigens Session-Memory — der Agent legt den selbst dort
ab, ohne dass ihr etwas sagt. Memory ist also mehr als der Plan; der Plan ist
nur der eine Fall, in dem ihr es schon gesehen habt.

Das heißt praktisch: wenn ihr rausgefunden habt, wie ihr etwas gerne hättet —
sagt "merk dir das". Beim nächsten Projekt weiß er es noch.

▸ **Live zeigen, wenn die Zeit reicht:** "merk dir, dass ich Tests immer selbst
ausführe" — dann *Chat: Show Memory Files* und die neue Zeile zeigen. Das ist
der Moment, in dem es für die Zuhörer greifbar wird.

▸ Command Palette → **Chat: Show Memory Files** → alle drei Ebenen zeigen.

Zwei Einschränkungen, die ihr kennen solltet: das Ganze ist noch Preview, und
ihr könnt einzelne Einträge nicht löschen — nur alles auf einmal, mit
*Chat: Clear All Memory Files*. Und es ist standardmäßig **aus**.

▸ **Bei uns freigeschaltet** (bestätigt 03.08.2026) — der Block läuft
vollständig, kein Vorbehalt nötig.

▸ **Eigene User-Memory-Datei vorher durchsehen.** Die zeigst du live auf dem
Share, und da landet gern Zeug aus echten Projekten drin.

### 0:22 Tests und Linter lasse ich nicht laufen

Jetzt ein Punkt aus der Praxis, der gegen das läuft, was überall empfohlen wird.

Ich lasse den Agenten **Tests und Linter nicht selbst ausführen.** Ich mache das
selbst und gebe ihm das Ergebnis.

Zwei Gründe. Erstens dreht er sich sonst im Kreis: Test läuft rot, er ändert
was, läuft wieder, immer noch rot, ändert wieder — und ihr schaut zu, wie
Credits verbrennen. Zweitens liest er Testausgaben oft schlicht falsch aus und
zieht dann die falschen Schlüsse.

Mein Ablauf ist: er schreibt, ich führe aus, ich kippe das Ergebnis in den Chat.
Das kostet mich zehn Sekunden und spart eine Menge Tokens.

Und der Dreh dabei, den ich euch empfehle: **wenn er es einmal richtig gemacht
hat, lasst ihn aufschreiben, wie.** Als Skill oder in die Instructions. Dann
macht er es beim nächsten Mal ohne die drei Fehlversuche davor.

### 0:23 Und wenn er trotzdem Mist baut: Checkpoints

Eine Sache, die kaum jemand kennt und die genau dann rettet, wenn es schiefgeht.

VS Code macht **vor jedem Chat-Request einen Snapshot der Dateien**, die
angefasst werden. Wenn der Agent in die falsche Richtung läuft, geht ihr im Chat
auf den Request zurück, an dem es noch gut war, und klickt **Restore
Checkpoint**. Die Dateien sind wieder wie vorher.

▸ Einschalten: `chat.checkpoints.enabled`.
▸ Bedienen: im Chat über einen Request hovern → *Restore Checkpoint*.

Zwei Sachen dazu, die ihr wissen müsst: der Request verschwindet dabei aus dem
Verlauf — ihr könnt aber **Redo** drücken, wenn ihr es euch anders überlegt. Und
das ist **kein Ersatz für Git.** Steht wörtlich so in der Doku: Checkpoints sind
für schnelles Ausprobieren innerhalb einer Session gedacht und temporär.

▸ Quelle: VS Code Docs, *Checkpoints*

Der praktische Nutzen ist der: ihr könnt den Agenten mutiger laufen lassen. Ihr
habt einen Rückwärtsgang, der schneller ist als `git checkout`.

▸ Das ist die Brücke zu Teil 3.

### 0:24 Kontext und Prompts

> Für 30 Minuten: diesen Block auf die vier `#`-Referenzen kürzen.

Letzte Sache zum Ablauf. Der Satz aus der VS-Code-Doku dazu ist ziemlich
eindeutig: **was nicht im Kontext ist, existiert für das Modell nicht.**

Die Referenzen, die ich täglich benutze:

- `#file` und `#selection` — genau die Stelle, nicht das ganze Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo es steht
- `#changes` und `#problems` — der Diff und die Fehlerliste
- `#fetch` mit einer URL — holt die aktuelle Doku rein statt Trainingswissen

▸ **Wenn jemand fragt "ich hänge Dateien lieber per Knopf an, ist das
schlechter?" — nein.** Was zählt, ist *was* im Kontext landet, nicht wie ihr es
hinbekommt. Die Doku beschreibt nur die `#`-Variante, sagt aber nirgends, dass
Anhängen schlechter wäre. Der Vorteil von `#` ist Tempo, und dass es Sachen
gibt, für die es keinen Knopf gibt: `#fetch`, `#problems`, `#changes`.

▸ `#fetch` live zeigen. Das kennen die wenigsten.

`#fetch` löst das Problem, dass das Modell eine API-Version von vor zwei Jahren
kennt. Ihr werft ihm die Doku-Seite hin, und er benutzt die.

Ein Satz Vorsicht dazu, weil es zu `#fetch` gehört: was von einer fremden Seite
reinkommt, ist Text, den ihr nicht kontrolliert. Steht da "ignoriere alle
vorherigen Anweisungen", liest der Agent das mit. Das heißt nicht, lasst es
bleiben — es heißt, holt Doku und nicht irgendwas.

▸ Quelle: VS Code Docs, *Security* — Prompt Injection über Tool-Ausgaben.
▸ **Ein Satz. Kein Sicherheitsvortrag.**

Und der häufigste Fehler in die andere Richtung: alles reinwerfen. Das große
Kontextfenster vollzumachen kostet Geld und macht die Antwort schlechter, nicht
besser.

**Vier Sachen zum Prompt selbst**, die laut Doku am meisten bringen:

1. **Konkret sein** — Sprache, Framework, Rahmenbedingungen nennen. Nicht
   "mach das besser", sondern "reduzier die Komplexität" oder "füg
   Null-Prüfungen hinzu".
2. **Zerlegen** — kein ganzes Feature am Stück.
3. **Sagen, wie das Ergebnis aussehen soll** — Testfälle, erwartete Werte,
   Akzeptanzkriterien.
4. **Rückfragen einfordern** — "frag nach, wenn was unklar ist" statt raten
   lassen.

▸ Quelle: VS Code Docs, *Prompt engineering for Copilot Chat*

▸ **Gegenüberstellung zeigen.** Derselbe Wunsch, zweimal formuliert:

```
Mach die Validierung besser.
```

```
Schreib eine TypeScript-Funktion, die E-Mail-Adressen validiert.
Gibt true für gültige zurück, sonst false. Kein Regex.
Testfälle: "a@b.de" → true, "a@" → false, "" → false.
```

Unten stehen alle vier Punkte drin: konkret, eine Aufgabe, erwartetes Ergebnis
als Testfälle, und eine Rahmenbedingung. Oben steht nichts davon — deshalb rät
das Modell, und ihr diskutiert danach zwei Runden über etwas, das ihr vorher in
einem Satz hättet festlegen können.

Punkt drei ist der wichtigste. Die Doku nennt das sinngemäß mit das
Wirkungsvollste, was man überhaupt tun kann — weil das Modell damit seine
eigene Arbeit prüfen kann. Ihr habt das vorhin schon gesehen: in meinem
Plan-Prompt stand "bestehende Tests müssen grün bleiben".

Und damit sind wir bei der Überleitung: Kriterien, die *immer* gelten, tippt man
nicht jedes Mal. Die gehören ins Repo.

---

## Teil 3 — Euer Repo aufsetzen · 0:27 bis 0:41

> Der "geht nach Hause und macht das"-Teil. Alles hier landet auf der
> Checkliste am Ende.

### 0:27 Teams-Reaktion

▸ **Explizit sagen, welche Reaktion.**

Kurze Umfrage über die Reaktionsleiste oben, nicht über den Chat: Daumen hoch,
wer eine `copilot-instructions.md` im Repo hat.

▸ 10 Sekunden warten, dann **laut auszählen**: "vier von zwanzig."

### 0:28 Die Landkarte

Wenn ihr euch damit beschäftigt, findet ihr sieben Möglichkeiten, Copilot
anzupassen: Instructions, Skills, Custom Agents, MCP, Hooks, Prompt Files,
Plugins. Sieht überwältigend aus.

Gute Nachricht: für neunzig Prozent braucht ihr zwei davon.

VS Code hat dafür eine offizielle Tabelle — Ziel, Mittel, wann es greift. Und
die empfohlene Reihenfolge steht auch drin: **erst Instructions, dann Skills.**
MCP nur, wenn ihr an externe Daten müsst. Custom Agents für Rollen.

▸ Quelle: VS Code Docs, *Customization options at a glance*

### 0:29 Den ersten Entwurf schreiben lassen — `/init`

`.github/copilot-instructions.md` im Repo, gilt für alle Anfragen. Das ist das
Minimum, das jeder haben sollte.

Und die gute Nachricht zuerst: ihr müsst die nicht von Hand schreiben.

▸ **DEMO.** Im Demo-Repo in den Chat:

```
/init
```

Er liest sich durch das Repo und schreibt die Datei selbst. Stack, Struktur,
Konventionen — das, was er im Code sehen kann.

▸ Quelle: VS Code Docs, *Use custom instructions in VS Code* — "analyze your
workspace and generate always-on custom instructions"

Es gibt noch zwei Geschwister davon: **`/create-instructions`**, wenn ihr eine
ganz bestimmte Regel wollt statt des Rundumschlags. Und dasselbe nochmal als
Knopf im Agent-Customizations-Editor, falls ihr lieber klickt.

Und jetzt der wichtige Teil — **das Ergebnis ist ein Rohentwurf, kein
Ergebnis.** Er hat den Code gelesen. Er weiß nicht, warum ihr etwas so macht,
und er kennt die Stolpersteine beim Bauen nicht. Genau die zwei Sachen sind
aber das, was die Datei wertvoll macht.

▸ **Generierte Fassung und meine überarbeitete nebeneinander zeigen.**

### 0:31 Was reingehört

Vier Blöcke. Wenn die drin sind, habt ihr neunzig Prozent.

**Erstens: was das Projekt überhaupt ist.** Zwei, drei Sätze. Stack **mit
Versionen** — "Angular 20", nicht "Angular". Das ist der Unterschied zwischen
Code, der bei euch läuft, und Code aus einem drei Jahre alten Blogpost.

**Zweitens: wie man das Ding baut, testet und lintet.** Die exakten Befehle.
Und — das ist der Punkt, den die GitHub-Doku extra hervorhebt — **die
Stolpersteine dazu.** Wenn bei euch der Build ohne ein vorheriges `npm install`
scheitert, dann schreibt genau das rein. Ihr dokumentiert hier die Sachen, die
einen neuen Kollegen am ersten Tag zwei Stunden kosten.

**Drittens: wo was liegt.** Die wichtigsten Verzeichnisse mit relativen Pfaden,
und wo die Konfigurationen für Tests und Linter stehen. Damit hört das Suchen
auf.

**Viertens: die Regeln, die man dem Code nicht ansieht.** Und die bitte mit
Begründung und einem Code-Beispiel.

▸ Quelle: GitHub Docs, *Adding repository custom instructions* · VS Code Docs,
*Use custom instructions in VS Code*

Zu Block vier zwei Sachen, die richtig was ausmachen.

**Die Begründung.** "Dauern immer als ganze Minuten" wird umgangen. "Dauern
immer als ganze Minuten, **weil** sich Rundungsfehler über die Woche
aufsummieren" wird befolgt. Die Doku sagt das genauso: mit der Begründung
entscheidet das Modell in den Fällen richtig, die ihr nicht aufgeschrieben habt.
Bei Menschen ist das übrigens dasselbe.

**Das Code-Beispiel.** Wörtlich aus der Doku: das Modell reagiert besser auf
Beispiele als auf abstrakte Regeln. Also nicht "sprechende Namen benutzen",
sondern zwei Zeilen — so ja, so nicht.

▸ Code-Folie mit dem Prefer/Avoid-Paar.

Und rein gehört das, was ich euch vorhin erzählt habe: **dass er Tests und
Linter nicht selbst ausführen soll.** Bei mir steht da sinngemäß "führe keine
Tests aus, ich mache das und gebe dir die Ausgabe" — mit der Begründung, dass
er sich sonst festfrisst. Genau so eine Regel: sieht man dem Code nicht an,
wird ohne Begründung ignoriert.

### 0:34 Was raus muss

Und jetzt der Teil, den fast alle falsch machen: nicht was reingehört ist das
Problem, sondern was raus muss.

**Raus muss alles, was der Linter schon prüft.** Formatierung, Quotes,
Semikolons. Ihr verbrennt Kontext für Regeln, die sowieso automatisch
durchgesetzt werden.

**Raus muss Taskspezifisches.** Die Doku ist da ungewöhnlich direkt:
*"Instructions must not be task specific."* Das ist eine Datei über euer
Projekt, nicht über das Ticket von heute.

**Raus muss alles Vage.** "Sei gründlicher", "achte auf Qualität" — das tut
nichts. Kostet nur Platz.

**Und haltet die Datei kurz.** GitHub schreibt, dass Instructions-Dateien
jenseits von ungefähr tausend Zeilen zu inkonsistentem Verhalten führen. Fangt
klein an — eine einzige Zeile hilft schon.

▸ Quelle: GitHub Docs, *Adding repository custom instructions* · GitHub Blog,
*Master your instructions files* — der Längen-Hinweis stammt aus dem Kontext
Copilot Code Review

### 0:35 Die Stolperfalle

Eine Sache, die viele nicht wissen und die für Verwirrung sorgt:

**Instructions wirken nicht bei den Inline-Vorschlägen beim Tippen.** Nur im
Chat und im Agenten.

▸ Quelle: VS Code Docs, *Use custom instructions* — wörtlich: "not taken into
account for inline suggestions as you type"

Wenn ihr euch also wundert, warum die Autovervollständigung eure schönen Regeln
komplett ignoriert — daran liegt's. Das ist kein Bug bei euch.

### 0:36 Pro Dateityp

Wenn die Hauptdatei zu lang wird, zieht ihr Themen raus. Eine
`.instructions.md` mit einem `applyTo`-Glob gilt nur für die Dateien, die zum
Muster passen — Testkonventionen zum Beispiel nur in Testdateien.

▸ Code-Folie mit `applyTo: '**/*.test.ts'`.

Mehrere kleine Dateien nach Thema schlagen eine große. Steht auch so in der Doku.

### 0:37 Skills — wenn Regeln nicht reichen

Instructions sind Text. Wenn ihr einen Ablauf habt, der aus mehreren Schritten
besteht und vielleicht noch ein Skript oder eine Vorlage braucht, dann ist das
ein **Skill**.

Ein Skill ist ein Ordner mit einer `SKILL.md` drin, plus was ihr sonst noch
braucht.

Der eigentliche Vorteil ist aber ein anderer, und der ist für uns mit
begrenztem Budget relevant: **Skills werden in drei Stufen geladen.** Erst nur
Name und Beschreibung. Erst wenn die Aufgabe passt, der eigentliche Inhalt.
Und die mitgelieferten Dateien erst, wenn er sie wirklich braucht.

Heißt: ihr könnt zwanzig Skills im Repo haben, und die kosten euch fast nichts,
solange sie nicht greifen. Instructions sind dagegen *immer* dabei.

▸ Quelle: VS Code Docs, *Use Agent Skills in VS Code*

Und da schließt sich der Kreis zu vorhin: mein "so führst du die Tests aus"-
Ablauf ist genau so ein Kandidat. Einmal aufschreiben lassen, als Skill ablegen,
fertig.

Übrigens: falls ihr noch `.chatmode.md`-Dateien rumliegen habt — die heißen
inzwischen `.agent.md`. Umbenennen, fertig.

### 0:39 Custom Agents — ehrlich gesagt

Custom Agents nur kurz, und ich bin da ehrlich: **ich hatte welche und habe sie
wieder abgeschaltet.**

Ich hatte einen für TypeScript-Review und einen für Java-Review. Klang gut. In
der Praxis haben sie ordentlich Tokens gekostet und mir wenig gebracht, was ein
normaler Review-Prompt nicht auch gebracht hätte.

Der eine Fall, wo sie sich wirklich lohnen: wenn eine Rolle **weniger** können
soll. Der offizielle Planungs-Agent hat genau drei Tools — lesen, suchen,
schreiben. Er *kann* nichts ausführen. Das ist ein echter Grund.

Für die meisten von uns: erst mal die Instructions richtig hinkriegen.

### 0:40 Fremde Bausteine — abschauen statt erfinden

`/init` schreibt euch den Entwurf. Für alles darüber hinaus müsst ihr auch nicht
bei null anfangen — schaut euch an, wie andere das machen.

**Erstens: `github/awesome-copilot`.** Fertige Instructions, Skills und Agents
zum Rauspicken.

▸ Zwei bis drei konkrete Beispiele daraus zeigen, die zu uns passen.
▸ **Am Wochenende auswählen.** Nicht die Sammlung als Ganzes zeigen — das
erschlägt und niemand macht danach was.

**Zweitens, das andere Extrem: ein Repo namens ECC.** Das ist keine Sammlung
zum Rauspicken, sondern ein einziges durchgebautes Setup — 67 Agents, 281
Skills, 94 Commands, MIT-Lizenz, gut zweihunderttausend Sterne. Da hat jemand
zu Ende gedacht, wie weit man das treiben *kann*.

▸ Quelle: <https://github.com/affaan-m/ECC> · **Stand: 03.08.2026** — Zahlen am
Vortag neu ablesen, die wandern schnell

▸ **Direkt in `.github/copilot-instructions.md` und `.github/prompts/` springen.**
Nicht auf der Startseite bleiben.

Und für uns ist genau das interessant: da liegt eine echte
`copilot-instructions.md` drin, und daneben fertige Prompt-Dateien — `/plan`,
`/tdd`, `/security-review`, `/build-fix`, `/refactor`.

Kleine Randnotiz, weil sie erklärt, warum das Ding so aussieht: das ist aus
einem Hackathon entstanden, den der Autor gewonnen hat — und danach hat er sein
komplettes Setup unter MIT rausgegeben.

▸ **Ein Satz, dann weiter.** Die Geschichte ist nur über Blogs belegt, also
nicht als Fakt verkaufen — "soweit ich weiß" reicht.

Bei beiden gilt dasselbe und das ist die eigentliche Botschaft: **nicht
übernehmen — lesen, wie die geschrieben sind.** Sucht euch zwei Sachen raus,
die zu eurem Stack passen. Nicht zweihunderteinundachtzig.

▸ 281 Skills sind auch ein guter Aufhänger zurück zur "kurz halten"-Regel von
vorhin — falls jemand fragt, warum das kein Widerspruch ist: Skills werden
dreistufig geladen, Instructions nicht.

---

## Teil 4 — VS Code vs. IntelliJ · 0:41 bis 0:43

> Markus überlegt noch, ob der Teil ganz rausfliegt.
> **Für 30 Minuten: streichen.**

▸ **Nicht nochmal fragen** — die Umfrage lief bei 0:01. Stattdessen darauf
zurückkommen: "Am Anfang haben ein paar von euch gesagt, sie arbeiten mit was
anderem. Für die ist der nächste Punkt."

▸ Danach richtet sich die Länge: bei überwiegend IntelliJ auf die Portabilität
gehen, bei überwiegend VS Code noch kürzer machen oder ganz überspringen.

Die Frage kommt sowieso, deshalb kurz: nein, ihr müsst nicht wechseln.

JetBrains hat 2026 aufgeholt. Agent Mode ist GA, Custom Agents, Subagents und
der Plan-Agent auch, `AGENTS.md` wird gelesen, Skills sind in Preview. Das war
vor einem Jahr ein Graben, heute sind es vielleicht drei bis sechs Monate
Versatz.

Wo VS Code vorne bleibt, ist eigentlich nur ein Punkt: neue Sachen kommen
zuerst hier an. Nicht "besser" — früher dran.

Und das ist der Grund, warum der letzte Block auch für die IntelliJ-Leute
relevant war: **Instructions, `AGENTS.md` und Skills sind portabel.** Die
Arbeit, die ihr ins Repo steckt, ist nicht an eine IDE gebunden.

---

## Teil 5 — Firmenregeln · 0:43 bis 0:46

> **Schreibt Markus selbst.** Nichts hier wird generiert.

▸ Kandidaten, die sich aus dem Vortrag ergeben:
- Nur Copilot ist freigegeben — was heißt das konkret
- Was darf in einen Prompt und was nicht
- Wer erhöht das Credit-Budget, und wie fragt man an
- Sind Browser-Tools und MCP freigegeben oder gesperrt (Memory ist frei)
- Wer ist ansprechbar bei Problemen

▸ **Sandbox nicht empfehlen.** `chat.agent.sandbox.enabled` gibt es zwar und es
läuft unter WSL2 — Markus hat es aber bewusst abgeschaltet. Also nicht als
Empfehlung verkaufen. Wenn jemand danach fragt: "gibt's, hab ich aus, war mir
im Weg."

▸ Bei Unklarheit: "weiß ich nicht, ich kläre das". Nicht raten.

### 0:46 Der Schlusssatz

Eine Sache zum Mitnehmen, wenn ihr den Rest vergesst:

**Der Agent schreibt schneller, als ihr prüfen könnt.**

Plan vorher lesen, Akzeptanzkriterien mitgeben, Regeln ins Repo — das sind
keine drei getrennten Tipps. Das ist dreimal dieselbe Antwort auf dieses eine
Problem.

▸ Checkliste einblenden und Link in den Chat.

Und hier ist die Checkliste. Das ist das, was ich meine mit "morgen früh
anders machen".

---

## Teil 6 — Fragen und Feedback · ab 0:47

▸ Die Chat-Antworten von ganz am Anfang jetzt aufgreifen.

Am Anfang habt ihr mir geschrieben, was euch nervt. Ich gehe ein paar davon
durch.

▸ **Zwei bis drei laut vorlesen und beantworten**, auch wenn niemand nachfragt.
Das füllt die erste Stille.

Und wenn sonst noch was offen ist — raus damit.

▸ Danach allgemein offene Fragen aufnehmen, so lange es trägt. Erst wenn nichts
mehr kommt, weiter zu den Links.

### Zum Schluss

Die Links kommen in den Chat. Der wichtigste ist der auf die Release Notes —
alles andere aus diesem Vortrag veraltet.

Danke fürs Zuhören.

### Und dann, nach dem Danke: Feedback

▸ **Reihenfolge ist Absicht.** Erst die Fragen vom Anfang, dann offene Fragen
allgemein, dann das Danke — und *danach* die Feedback-Folie. Wer gehen will,
ist beim Danke raus; wer bleibt, gibt dir brauchbares Feedback.

▸ **Wichtig: Markus hält denselben Vortrag eine Woche später nochmal.**

Eine Sache noch, bevor ihr geht.

Ich hab euch gerade einen Link in den Chat gestellt. Der ist **anonym** und
dauert zwei Minuten.

Warum ich das will, sage ich ehrlich: ich halte denselben Vortrag nächste Woche
nochmal, und ich baue aus euren Antworten das Handout. Dann steht da drin, was
ihr wirklich braucht, und nicht nur, was ich für wichtig halte.

Der Link bleibt offen — ihr könnt das auch heute Abend noch machen.

▸ **Link vorher vorbereiten und beim Anzeigen der Folie in den Chat posten.**
Nicht erst suchen.

▸ **Anonym ist der Punkt.** In einer internen Runde schreibt niemand
"war zu oberflächlich" mit seinem Namen dran. Das ansagen, sonst nimmt es
niemand als Einladung wahr.

▸ Die drei Fragen im Formular — konkret, nicht "gibt's Feedback":
- Was war zu schnell?
- Was hättet ihr lieber ausführlicher gehabt?
- Was fehlt auf der Checkliste?

▸ Ein Freitextfeld reicht sonst. **Keine Pflichtfelder** — jedes Pflichtfeld
kostet Antworten.

▸ Chat-Antworten trotzdem wegspeichern, bevor das Meeting zugeht.

---

## Das Handout

**Liegt als `handout.html` im Repo-Root.** Eine Seite A4, zweispaltig, zum
Ausdrucken oder als PDF verschicken (Browser → Drucken → *Als PDF speichern*).

Inhalt: die fünf Schritte für morgen früh · rein/raus für die
`copilot-instructions.md` · Befehle · `#`-Referenzen · Prompt-Regeln ·
Checkpoints · Credits sparen · Einstellungen · Tastenkürzel · Memory · die drei
Merksätze · awesome-copilot und ECC · Links.

▸ **Vor dem Verteilen einmal selbst lesen** — es ist dein Handout.
▸ `/create-instructions` steht bewusst **nicht** drauf, solange die
Schreibweise nicht geprüft ist (siehe offene Punkte).

Der Ablauf im Vortrag zum Abarbeiten:

1. `/init` laufen lassen — erzeugt `.github/copilot-instructions.md`
2. Entwurf überarbeiten. Rein gehören vier Blöcke:
   Projekt und Stack **mit Versionen** · Befehle für Build/Test/Lint samt
   Stolpersteinen · wo was liegt (relative Pfade) · die nicht-offensichtlichen
   Regeln **mit Begründung und Code-Beispiel**
3. Rein gehört außerdem: "führe Tests und Linter nicht selbst aus"
4. Raus: was der Linter prüft · Taskspezifisches · Vages · externe Links
5. Kurz halten. Jenseits ~1.000 Zeilen wird es inkonsistent
6. Bei Bedarf `.instructions.md` mit `applyTo` je Dateityp
7. Workspace über alle Repos eines Projekts
8. `chat.useCustomizationsInParentRepositories` einschalten
9. Memory prüfen und einschalten, User-Ebene für Dauerhaftes nutzen
10. Modell bewusst wählen statt Auto
11. `/plan` vor allem, was mehr als eine Datei anfasst
12. Links: VS Code Docs, awesome-copilot, Release Notes

---

## Offene Punkte

**Die Arbeitsliste steht in [`todo.md`](todo.md)** — dort sortiert nach
morgen, Wochenende, Vortag und Vortragstag.

Was am Vortragstag zu tun ist: [`vortragstag.md`](vortragstag.md).
Demo-Details und Prüfpunkte: [`demo-ablauf.md`](demo-ablauf.md).
