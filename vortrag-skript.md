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

**Zeitplan:** Kern 42 Minuten bis zum Schlusssatz.
Für harte 30: Teil 4 komplett streichen, in Teil 2 die Prompt-Tipps und in
Teil 3 die Custom Agents raus.

---

## Teil 0 — Einstieg · 0:00 bis 0:05

### 0:00 Begrüßung

▸ Screensharing prüfen, kurz in den Chat schauen lassen.

Hi zusammen. Ich zeige euch in der nächsten halben Stunde, wie ich mit Copilot
arbeite. Nicht welche Features es gibt — das könnt ihr nachlesen — sondern wie
mein Ablauf aussieht, wenn ich morgens eine echte Aufgabe habe.

Mein Ziel ist, dass ihr danach eure eigenen Repos vernünftig aufsetzen könnt.
Am Ende kriegt ihr eine Checkliste, da steht alles drauf.

Zwei Sachen vorweg: ich mache viel live, und wenn was schiefgeht, gehe ich
einfach weiter. Und schreibt Fragen jederzeit in den Chat, ich sammle die ein.

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

---

## Teil 1 — Was gerade passiert · 0:05 bis 0:08

> Kurz und locker halten. Das ist Aufwärmen, nicht der Inhalt.
> Für 30 Minuten: auf zwei Sätze eindampfen.

### 0:05 Das Tempo

Ganz kurz zur Einordnung, warum ich den Vortrag überhaupt halte und nicht
einfach einen Link schicke.

VS Code hat am achten Juli 1.128 released. Am fünfzehnten 1.129. Am
siebzehnten nochmal einen Fix hinterher. Drei Releases in neun Tagen.

Ich sag das nicht, um mich abzusichern — sondern weil es ehrlich gesagt
schwierig ist, da hinterherzukommen. Ich schau da auch nicht jede Woche rein.
Deshalb: was ich euch zeige, ist der Stand von heute.

▸ Wenn zwischen heute und dem Vortrag 1.130 erschienen ist: Zeile ergänzen.

### 0:06 Drei Sachen, die was ändern

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

## Teil 2 — So arbeite ich · 0:08 bis 0:26

> **Das Kernstück.** Hier ist alles drin, was die Leute mitnehmen sollen.

### 0:08 Rahmen

Jetzt der eigentliche Teil. Ich mache eine echte Aufgabe in einem kleinen Repo,
so wie ich das tatsächlich mache.

Und ich fange nicht bei der Aufgabe an, sondern eine Stufe davor: beim Setup.

### 0:09 Setup — ein Workspace für alles

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

Dazu: Instructions können auch aus dem Eltern-Verzeichnis gezogen werden, wenn
ihr `chat.useCustomizationsInParentRepositories` einschaltet. Damit gelten eure
gemeinsamen Regeln in allen Repos, ohne dass ihr sie dreimal pflegt.

▸ Quelle: VS Code Docs, *Use custom instructions in VS Code*

Die Aufgabe für gleich: die Einträge sollen nach Projekt gruppiert werden, mit
einer Summe pro Projekt.

▸ Vorher prüfen: `git reset --hard start && git clean -fd`

### 0:11 Entscheidung 1 — welches Modell

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

▸ Modellnamen nicht vorlesen — die sind in vier Wochen falsch.

### 0:14 Entscheidung 2 — erst Plan, dann Code

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

▸ **Den Plan wirklich lesen und laut kommentieren. Eine Zeile korrigieren.**

Und das ist der ganze Punkt. Ich korrigiere hier eine Zeile. Wenn ich denselben
Fehler erst nach der Implementierung finde, kostet er mich zwanzig Minuten und
einen Diff, den ich nicht mehr auseinanderklamüsern will.

▸ Erst danach implementieren lassen.

### 0:18 Memory — was der Agent sich merkt

Der Plan von eben liegt übrigens nicht im Repo. Und das führt zu einer Sache,
die deutlich nützlicher ist, als sie klingt.

Copilot hat drei Arten von Gedächtnis:

- **Session** — der Plan von eben. Nach dem Chat weg.
- **Repository** — gilt in diesem Projekt, überlebt den Chat.
- **User** — gilt in *allen* euren Projekten.

Und jetzt der Teil, der es interessant macht: **von der User-Ebene werden die
ersten 200 Zeilen automatisch in jeden Chat geladen.** In jedem Projekt, ohne
dass ihr etwas tut.

▸ Quelle: VS Code Docs, *Memory in VS Code agents*

Das heißt praktisch: wenn ihr rausgefunden habt, wie ihr etwas gerne hättet —
sagt dem Agenten "merk dir das". Er legt es selbst an der richtigen Stelle ab.
Beim nächsten Projekt weiß er es noch.

▸ Command Palette → **Chat: Show Memory Files** → alle drei Ebenen zeigen.

Zwei Einschränkungen, die ihr kennen solltet: das Ganze ist noch Preview, und
ihr könnt einzelne Einträge nicht löschen — nur alles auf einmal, mit
*Chat: Clear All Memory Files*. Und es ist standardmäßig **aus**.

▸ **Vor dem Vortrag prüfen, ob Memory bei uns überhaupt freigeschaltet ist** —
das hängt an den Copilot-Einstellungen. Wenn nicht: den Block auf die
Session-Ebene kürzen und den Rest weglassen.

### 0:21 Tests und Linter lasse ich nicht laufen

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

▸ Das ist die Brücke zu Teil 3.

### 0:23 Kontext und Prompts

> Für 30 Minuten: diesen Block auf die vier `#`-Referenzen kürzen.

Letzte Sache zum Ablauf. Der Satz aus der VS-Code-Doku dazu ist ziemlich
eindeutig: **was nicht im Kontext ist, existiert für das Modell nicht.**

Die Referenzen, die ich täglich benutze:

- `#file` und `#selection` — genau die Stelle, nicht das ganze Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo es steht
- `#changes` und `#problems` — der Diff und die Fehlerliste
- `#fetch` mit einer URL — holt die aktuelle Doku rein statt Trainingswissen

▸ `#fetch` live zeigen. Das kennen die wenigsten.

`#fetch` löst das Problem, dass das Modell eine API-Version von vor zwei Jahren
kennt. Ihr werft ihm die Doku-Seite hin, und er benutzt die.

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

Punkt drei ist der wichtigste. Die Doku nennt das sinngemäß mit das
Wirkungsvollste, was man überhaupt tun kann — weil das Modell damit seine
eigene Arbeit prüfen kann. Ihr habt das vorhin schon gesehen: in meinem
Plan-Prompt stand "bestehende Tests müssen grün bleiben".

Und damit sind wir bei der Überleitung: Kriterien, die *immer* gelten, tippt man
nicht jedes Mal. Die gehören ins Repo.

---

## Teil 3 — Euer Repo aufsetzen · 0:26 bis 0:36

> Der "geht nach Hause und macht das"-Teil. Alles hier landet auf der
> Checkliste am Ende.

### 0:26 Teams-Reaktion

▸ **Explizit sagen, welche Reaktion.**

Kurze Umfrage über die Reaktionsleiste oben, nicht über den Chat: Daumen hoch,
wer eine `copilot-instructions.md` im Repo hat.

▸ 10 Sekunden warten, dann **laut auszählen**: "vier von zwanzig."

### 0:27 Die Landkarte

Wenn ihr euch damit beschäftigt, findet ihr sieben Möglichkeiten, Copilot
anzupassen: Instructions, Skills, Custom Agents, MCP, Hooks, Prompt Files,
Plugins. Sieht überwältigend aus.

Gute Nachricht: für neunzig Prozent braucht ihr zwei davon.

VS Code hat dafür eine offizielle Tabelle — Ziel, Mittel, wann es greift. Und
die empfohlene Reihenfolge steht auch drin: **erst Instructions, dann Skills.**
MCP nur, wenn ihr an externe Daten müsst. Custom Agents für Rollen.

▸ Quelle: VS Code Docs, *Customization options at a glance*

### 0:28 Instructions — und was NICHT reingehört

`.github/copilot-instructions.md` im Repo, gilt für alle Anfragen. Das ist das
Minimum, das jeder haben sollte.

Und jetzt der Teil, den fast alle falsch machen: nicht was reingehört ist das
Problem, sondern was raus muss.

**Raus muss alles, was der Linter schon prüft.** Formatierung, Quotes,
Semikolons. Ihr verbrennt Kontext für Regeln, die sowieso automatisch
durchgesetzt werden.

**Rein gehört das Nicht-Offensichtliche** — und die Begründung dazu.

▸ Beispiel-Folie zeigen.

Der Unterschied ist: "Dauern immer als ganze Minuten" wird umgangen. "Dauern
immer als ganze Minuten, **weil** sich Rundungsfehler über die Woche
aufsummieren" wird befolgt. Bei Menschen ist das genauso.

▸ Quelle: VS Code Docs, *Use custom instructions* — kurz halten, Begründung
mitgeben, auf Nicht-Offensichtliches konzentrieren

Und rein gehört das, was ich euch vorhin erzählt habe: **dass er Tests und
Linter nicht selbst ausführen soll.** Bei mir steht da sinngemäß "führe keine
Tests aus, ich mache das und gebe dir die Ausgabe" — mit der Begründung, dass
er sich sonst festfrisst. Das ist genau so eine Regel, die man dem Code nicht
ansieht und die ohne Begründung ignoriert wird.

### 0:31 Die Stolperfalle

Eine Sache, die viele nicht wissen und die für Verwirrung sorgt:

**Instructions wirken nicht bei den Inline-Vorschlägen beim Tippen.** Nur im
Chat und im Agenten.

▸ Quelle: VS Code Docs, *Use custom instructions* — wörtlich: "not taken into
account for inline suggestions as you type"

Wenn ihr euch also wundert, warum die Autovervollständigung eure schönen Regeln
komplett ignoriert — daran liegt's. Das ist kein Bug bei euch.

### 0:32 Pro Dateityp

Wenn die Hauptdatei zu lang wird, zieht ihr Themen raus. Eine
`.instructions.md` mit einem `applyTo`-Glob gilt nur für die Dateien, die zum
Muster passen — Testkonventionen zum Beispiel nur in Testdateien.

▸ Code-Folie mit `applyTo: '**/*.test.ts'`.

Mehrere kleine Dateien nach Thema schlagen eine große. Steht auch so in der Doku.

### 0:33 Skills — wenn Regeln nicht reichen

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

### 0:35 Custom Agents — ehrlich gesagt

Custom Agents nur kurz, und ich bin da ehrlich: **ich hatte welche und habe sie
wieder abgeschaltet.**

Ich hatte einen für TypeScript-Review und einen für Java-Review. Klang gut. In
der Praxis haben sie ordentlich Tokens gekostet und mir wenig gebracht, was ein
normaler Review-Prompt nicht auch gebracht hätte.

Der eine Fall, wo sie sich wirklich lohnen: wenn eine Rolle **weniger** können
soll. Der offizielle Planungs-Agent hat genau drei Tools — lesen, suchen,
schreiben. Er *kann* nichts ausführen. Das ist ein echter Grund.

Für die meisten von uns: erst mal die Instructions richtig hinkriegen.

### 0:36 Nicht bei null anfangen

Fangt nicht mit einem leeren Blatt an. Es gibt ein Repo, `github/awesome-copilot`,
mit fertigen Instructions, Skills und Agents.

▸ Zwei bis drei konkrete Beispiele daraus zeigen, die zu uns passen.
▸ **Am Wochenende auswählen.** Nicht die Sammlung als Ganzes zeigen — das
erschlägt und niemand macht danach was.

Nicht alles übernehmen, das ist viel zu viel. Sucht euch zwei Sachen raus, die
zu eurem Stack passen, und schaut euch an, *wie* die geschrieben sind.

---

## Teil 4 — VS Code vs. IntelliJ · 0:36 bis 0:38

> Markus überlegt noch, ob der Teil ganz rausfliegt.
> **Für 30 Minuten: streichen.**

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

## Teil 5 — Firmenregeln · 0:38 bis 0:41

> **Schreibt Markus selbst.** Nichts hier wird generiert.

▸ Kandidaten, die sich aus dem Vortrag ergeben:
- Nur Copilot ist freigegeben — was heißt das konkret
- Was darf in einen Prompt und was nicht
- Wer erhöht das Credit-Budget, und wie fragt man an
- Sind Browser-Tools, MCP und Memory freigegeben oder gesperrt
- Wer ist ansprechbar bei Problemen

▸ Bei Unklarheit: "weiß ich nicht, ich kläre das". Nicht raten.

### 0:41 Der Schlusssatz

Eine Sache zum Mitnehmen, wenn ihr den Rest vergesst:

**Der Agent schreibt schneller, als ihr prüfen könnt.**

Plan vorher lesen, Akzeptanzkriterien mitgeben, Regeln ins Repo — das sind
keine drei getrennten Tipps. Das ist dreimal dieselbe Antwort auf dieses eine
Problem.

▸ Checkliste einblenden und Link in den Chat.

Und hier ist die Checkliste. Das ist das, was ich meine mit "morgen früh
anders machen".

---

## Teil 6 — Fragen und Feedback · ab 0:42

▸ Die Chat-Antworten von ganz am Anfang jetzt aufgreifen.

Am Anfang habt ihr mir geschrieben, was euch nervt. Ich gehe ein paar davon
durch.

▸ **Zwei bis drei laut vorlesen und beantworten**, auch wenn niemand nachfragt.
Das füllt die erste Stille.

### Feedback einsammeln

▸ **Wichtig: Markus hält denselben Vortrag eine Woche später nochmal.**

Zwei Sachen noch, bevor ihr geht.

Erstens: schreibt mir in den Chat, was gefehlt hat. Ich baue daraus das Handout
— dann steht da drin, was ihr wirklich braucht, und nicht nur, was ich für
wichtig halte.

Zweitens, und da bin ich ehrlich eigennützig: ich halte den Vortrag nächste
Woche nochmal. Wenn euch was zu lang, zu kurz oder zu oberflächlich war —
sagt's mir. Auch gern hinterher per Nachricht.

▸ **Konkret fragen, nicht "gibt's Feedback".** Zum Beispiel:
- Was war zu schnell?
- Was hättet ihr lieber ausführlicher gehabt?
- Was fehlt auf der Checkliste?

▸ Antworten wegspeichern, bevor das Meeting zugeht.

### Zum Schluss

Die Links kommen in den Chat. Der wichtigste ist der auf die Release Notes —
alles andere aus diesem Vortrag veraltet.

Danke fürs Zuhören.

---

## Das Handout

Muss vor dem Vortrag stehen, wird am Ende verlinkt. Eine Seite, zum Abarbeiten:

1. `.github/copilot-instructions.md` anlegen — kurz, mit Begründungen
2. Rein: der eine Test-Befehl, fachliche Regeln, "führe Tests nicht selbst aus"
3. Raus: alles, was der Linter prüft
4. Bei Bedarf `.instructions.md` mit `applyTo` je Dateityp
5. Workspace über alle Repos eines Projekts
6. `chat.useCustomizationsInParentRepositories` einschalten
7. Memory prüfen und einschalten, User-Ebene für Dauerhaftes nutzen
8. Modell bewusst wählen statt Auto
9. `/plan` vor allem, was mehr als eine Datei anfasst
10. Links: VS Code Docs, awesome-copilot, Release Notes

---

## Offene Punkte

- [ ] **Hook vorher testen** — läuft die Vision-Demo zuverlässig? Sonst streichen
- [ ] Teil 5 inhaltlich füllen (nur Markus)
- [ ] Prüfen: ist Copilot Memory bei uns freigeschaltet?
- [ ] Prüfen: sind Browser-Tools per Policy erlaubt?
- [ ] Am Wochenende: zwei bis drei konkrete Beispiele aus `awesome-copilot`
      aussuchen
- [ ] Entscheiden, ob Teil 4 bleibt
- [ ] Handout schreiben und verlinkbar ablegen
- [ ] Demo-Repo auf die Aufgabe zuschneiden
- [ ] Fallback-Screenshots für beide Demos
- [ ] Am Vortag: Release Notes checken, Versionsnummern nachziehen
