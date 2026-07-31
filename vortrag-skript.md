# Vortragsskript

**Das hier ist die Quelle.** Folien und Demo-Repo werden aus diesem Text
gebaut, nicht umgekehrt. Was hier nicht drinsteht, kommt auch nicht auf eine
Folie.

**Lesehilfe**

- Normaler Text = das, was du sagst. Gesprochene Sprache, nicht vorlesen —
  als Gerüst benutzen und frei formulieren.
- Zeilen mit `▸` = Regieanweisung. Was du **tust**, nicht sagst.
- Zeitangaben sind **kumulativ**: "0:12" heißt "hier bist du zwölf Minuten drin".

**Zeitplan:** Der Kern läuft in dieser Fassung **42 Minuten** bis zum
Schlusssatz, nicht 36 wie ursprünglich geplant. Teil 2 ist beim Ausschreiben
länger geworden — 15 statt 12 Minuten — weil die Plan-Demo mehr Luft braucht.

Für harte 30 Minuten reicht Kürzen an Teil 1 und 4 damit **nicht mehr aus**.
Dann zusätzlich: die Raten-Folie streichen, Teil 3 auf Instructions und Skills
eindampfen (Custom Agents und awesome-copilot raus), Teil 4 auf zwei Sätze.

---

## Teil 0 — Einstieg · 0:00 bis 0:05

### 0:00 Begrüßung

▸ Screensharing prüfen, kurz in den Chat schauen, ob alle die Folien sehen.

Hi zusammen. Ich zeige euch in der nächsten halben Stunde, wie ich mit
Copilot arbeite. Nicht welche Features es gibt — das könnt ihr nachlesen —
sondern wie der Ablauf aussieht, wenn ich morgens eine echte Aufgabe habe.

Zwei Sachen vorweg. Erstens: ich mache viel live. Wenn was schiefgeht, gehe
ich weiter, das ist kein Drama. Zweitens: schreibt Fragen jederzeit in den
Chat, ich sammle die ein und gehe am Ende drauf ein.

### 0:01 Die Chat-Frage

▸ Interaktionsfolie. **Hier passiert nichts von alleine.**

Bevor ich anfange, brauche ich was von euch. Schreibt mir bitte eine Sache in
den Chat, die euch an Copilot nervt. Eine reicht. Kann eine Kleinigkeit sein.

▸ **45 bis 60 Sekunden warten. Wirklich schweigen.** Remote fühlt sich das
länger an, als es ist. Sobald die ersten zwei, drei Antworten da sind, laut
vorlesen — das löst die Blockade bei den anderen.

▸ Antworten auf dem zweiten Monitor offen lassen. Du brauchst sie in Teil 6.

Gut, danke. Ich komme am Ende darauf zurück.

▸ Nebeneffekt: du siehst jetzt, ob das eher Einsteiger oder Vielnutzer sind.
Teil 2 entsprechend flacher oder tiefer fahren.

### 0:03 Der Hook — Live-Demo 1

Eine Sache vorweg, die die meisten noch nicht gesehen haben.

▸ **DEMO, harte Grenze 90 Sekunden.**
▸ Screenshot der kaputten Ansicht per Drag & Drop in den Chat.
▸ Prompt: "Was ist hier kaputt und in welcher Datei?"

Ich beschreibe den Fehler nicht. Ich ziehe einen Screenshot rein.

▸ Antwort abwarten, Fix übernehmen, Browser zeigen.

Das ist Copilot Vision, seit Anfang Juli allgemein verfügbar. Bilder und PDFs
direkt in den Chat. Der ganze Schritt "Fehler in Worte fassen und hoffen, dass
das Modell richtig rät" fällt weg.

▸ **Fallback bei Fehlschlag:** Screenshot aus `images/` zeigen und erzählen.
Nicht reparieren wollen. Der Punkt ist die Idee, nicht der Beweis.

Und das ist ein gutes Beispiel für das, worum es in den nächsten fünf Minuten
geht.

---

## Teil 1 — Was sich gerade ändert · 0:05 bis 0:10

> Für 30 Minuten: diesen Teil auf 3 Minuten kürzen. Das Tempo und die Kosten
> behalten, die drei Features nur nennen statt erklären.

### 0:05 Das Tempo

Kurze Einordnung, warum ich diesen Vortrag überhaupt halte.

VS Code hat am achten Juli 1.128 released. Am fünfzehnten 1.129. Am
siebzehnten nochmal einen Fix hinterher. Drei Releases in neun Tagen.

Das heißt: alles, was ich euch heute zeige, kann in vier Wochen anders
aussehen. Das ist kein Haftungsausschluss, das ist der eigentliche Punkt. Wer
einmal im Jahr in die Release Notes schaut, verpasst das meiste.

▸ Wenn zwischen heute und dem Vortrag 1.130 erschienen ist: **Zeile ergänzen.**
Sonst kippt genau hier die Glaubwürdigkeit.

### 0:07 Drei Sachen, die den Alltag ändern

Drei Sachen aus den letzten Wochen, die tatsächlich was ändern.

**Erstens Vision** — habt ihr gerade gesehen, sage ich nichts mehr zu.

**Zweitens Browser-Tools.** Der Agent bekommt einen echten Browser in VS Code.
Er kann klicken, tippen, Konsolen-Fehler lesen, Screenshots machen. Das heißt:
er ändert was am CSS, lädt die Seite selbst, schaut nach, ob es jetzt stimmt,
und korrigiert nach. Ohne euch. Der Loop schließt sich.

Und weil das die erste Frage ist: eure offenen Tabs sind privat. Der Agent
kommt an eine Seite, die ihr selbst geöffnet habt, erst wenn ihr auf "Share
with Agent" klickt. Dann allerdings mit eurer echten Session, also inklusive
Login — das ist praktisch, wenn hinter einer Anmeldung getestet werden soll.

**Drittens parallele Chats.** Ihr könnt mehrere Unterhaltungen in einer
Session laufen lassen. Implementierung in dem einen, Review im anderen, Tests
im dritten. Jeder mit eigener History und eigenem Modell.

### 0:09 Und das kostet jetzt Geld

Eine Sache, die untergegangen ist: die Abrechnung hat sich zum ersten Juni
geändert. Vorher wurden Requests gezählt. Jetzt wird nach Tokens abgerechnet,
in AI Credits, ein Credit ist ein Cent. Wir haben dreißig Dollar im Monat.

▸ **Nur sagen, was stimmt.** Nichts über die Vertragslage behaupten, was nicht
verifiziert ist.

Dazu ist neu, dass ihr die Kosten überhaupt sehen könnt: was eine ganze
Session gekostet hat, nicht nur ein einzelner Request. Und wenn Arbeit an
Subagents delegiert wurde, seht ihr das aufgeschlüsselt.

Warum ich das erzähle: Modellwahl war früher eine Qualitätsfrage. Jetzt ist es
auch eine Geldfrage. Und damit sind wir mitten im nächsten Teil.

---

## Teil 2 — Der Arbeitsablauf · 0:10 bis 0:25

> **Das Kernstück. Hier nicht kürzen.**

### 0:10 Rahmen setzen

Jetzt der eigentliche Teil. Ich mache eine echte Aufgabe in einem kleinen
Repo. Nicht Feature für Feature, sondern so, wie ich das tatsächlich mache.

Dabei treffe ich drei Entscheidungen, und die drei sind der ganze Trick:
welches Modell, mache ich erst einen Plan, und welchen Kontext gebe ich mit.

▸ Demo-Repo zeigen, 20 Sekunden. Nicht den Code durchgehen — nur zeigen, dass
es klein und echt ist.

▸ **Vorher prüfen:** `git reset --hard start && git clean -fd`, damit nichts
von der Probe übrig ist.

Die Aufgabe: die Einträge sollen nach Projekt gruppiert werden, mit einer
Summe pro Projekt.

### 0:12 Entscheidung 1 — welches Modell

Erste Entscheidung, und die treffen die meisten einmal und nie wieder.

▸ Model-Picker öffnen. Hover-Card auf einem Modell zeigen.

Der häufigste Fehler ist, dass man irgendwann das teuerste Modell eingestellt
hat und es seitdem für alles benutzt. Auch für "benenn mir diese Variable um".

Meine Faustregel: **Auto ist der richtige Default.** Das wählt selbst aus und
ist obendrein günstiger. Bewusst umschalten lohnt sich an zwei Stellen — nach
oben bei echtem Debugging und bei Architekturfragen, nach unten bei stumpfer
Fleißarbeit.

Und der Punkt, den ich vorhin schon angedeutet habe: Reasoning-Modelle denken
länger, produzieren mehr Tokens, kosten mehr. Bei Tokenabrechnung ist jedes
Hochschalten eine Geldentscheidung.

▸ Session-Kosten einblenden. **Das ist der Moment, wo es klickt.**

▸ Modellnamen bewusst nicht vorlesen — die sind in vier Wochen falsch. Wenn
jemand fragt: auf die GitHub-Doku verweisen, "choosing the right AI model for
your task".

### 0:15 Entscheidung 2 — erst Plan, dann Code

Wenn ihr heute nur eine Sache mitnehmt, dann die hier.

Und ich rede nicht von einem Prompting-Trick, wo man "denk erst nach"
davorschreibt. Das ist ein eingebautes Feature.

▸ **DEMO.** In den Chat:

```
/plan Gruppiere die Einträge nach Projekt und zeige pro Projekt
eine Summe an.

Bestehende Tests müssen grün bleiben.
Keine neue Abhängigkeit.
```

Der Plan-Agent geht durch den Code, stellt teilweise Rückfragen, und schreibt
dann einen Plan: Zusammenfassung, Implementierungsschritte, und — das ist der
wichtige Teil — wie man hinterher prüft, ob es funktioniert hat.

▸ **Den Plan wirklich lesen und laut kommentieren.** Eine Zeile korrigieren.

Und genau das ist der Punkt. Ich korrigiere hier eine Zeile. Wenn ich den
Fehler erst nach der Implementierung finde, kostet er mich zwanzig Minuten und
einen kaputten Diff.

▸ Erst danach implementieren lassen.

### 0:19 Raten-Folie

▸ **Interaktionsfolie. 30 Sekunden, nicht mehr.**

Kurze Frage in den Chat: wo, glaubt ihr, speichert Copilot diesen Plan?

▸ Ein, zwei Antworten vorlesen. **Nicht auflösen** — das ist die Pointe der
nächsten Folie. Die meisten tippen auf eine Datei im Repo.

### 0:20 Die Auflösung

Nicht im Repo. Der Plan liegt im Session-Memory, unter
`/memories/session/plan.md`.

▸ Command Palette → **Chat: Show Memory Files** → `plan.md` öffnen.

Ihr kommt da ran, über "Chat: Show Memory Files". Aber — und das ist der
Haken — Session-Memory wird gelöscht, wenn die Conversation endet. Der Plan
ist dann weg.

Praktisch heißt das: wenn ihr an einem Plan zu zweit arbeiten wollt, oder ihn
morgen noch braucht, kopiert ihr ihn raus und legt ihn ins Repo. Sonst ist er
Wegwerfware.

▸ Kurz wirken lassen. Das ist der stärkste "das wusste ich nicht"-Moment für
die Vielnutzer im Publikum.

### 0:22 Entscheidung 3 — Kontext

Dritte Entscheidung. Und da ist der Satz aus der VS-Code-Doku ziemlich
brutal: **was nicht im Kontext ist, existiert für das Modell nicht.**

Die wichtigsten Referenzen:

- `#file` und `#selection` — genau die Stelle, nicht das ganze Projekt
- `#codebase` — wenn ihr selbst nicht wisst, wo es steht
- `#changes` und `#problems` — der Diff und die Fehlerliste
- `#fetch` mit einer URL — holt die aktuelle Doku rein statt Trainingswissen

▸ `#fetch` live zeigen. Das kennen die wenigsten.

`#fetch` ist der, den ich am meisten unterschätzt gesehen habe. Damit löst ihr
das Problem, dass das Modell eine API-Version von vor zwei Jahren kennt.

Und der häufigste Fehler in die andere Richtung: alles reinwerfen. Das große
Kontextfenster vollzumachen kostet Geld und macht die Antwort schlechter, nicht
besser.

### 0:24 Der eine Satz

Wenn ich das alles auf einen Satz eindampfe, dann diesen:
**Akzeptanzkriterien gehören in den Prompt.**

Die VS-Code-Doku formuliert das ungewöhnlich deutlich — Testfälle, erwartete
Ergebnisse oder Akzeptanzkriterien mitzugeben sei, ich zitiere sinngemäß, mit
das Wirkungsvollste, was man überhaupt tun kann. Weil das Modell damit seine
eigene Arbeit prüfen kann.

Ihr habt das vorhin schon gesehen — in meinem Plan-Prompt stand "bestehende
Tests müssen grün bleiben". Das ist genau so ein Kriterium.

Und das ist die Überleitung: Kriterien, die *immer* gelten, schreibt man nicht
jedes Mal in den Prompt. Die gehören ins Repo.

---

## Teil 3 — Was brauche ich im Repo? · 0:25 bis 0:34

### 0:25 Teams-Reaktion

▸ **Interaktionsfolie. Explizit sagen, welche Reaktion.**

Kurze Umfrage, und zwar über die Reaktionsleiste oben, nicht über den Chat:
Daumen hoch, wer eine `copilot-instructions.md` im Repo hat.

▸ 10 Sekunden warten, dann **laut auszählen**: "vier von zwanzig."

Gut. Damit seid ihr in guter Gesellschaft, und genau darum geht es jetzt.

### 0:27 Die Landkarte

Wenn ihr anfangt, euch damit zu beschäftigen, findet ihr sieben verschiedene
Möglichkeiten, Copilot anzupassen. Instructions, Skills, Custom Agents, MCP,
Hooks, Prompt Files, Plugins. Das sieht erstmal überwältigend aus.

Die gute Nachricht: für neunzig Prozent braucht ihr zwei davon.

VS Code hat dafür inzwischen eine offizielle Tabelle — Ziel, Mittel, wann es
greift. Das ist nicht meine Meinung, das steht so in der Doku. Und die
empfohlene Reihenfolge steht auch drin: **erst Instructions, dann Skills.** MCP
nur, wenn ihr an externe Daten müsst. Custom Agents für Rollen.

### 0:29 Instructions — und was NICHT reingehört

Fangen wir mit dem an, was jeder braucht: `.github/copilot-instructions.md`
im Repo, gilt für alle Anfragen.

Und jetzt der Teil, den fast alle falsch machen. Nicht was reingehört ist das
Problem, sondern was rausgehört.

**Raus muss alles, was der Linter schon prüft.** Formatierung, Quotes,
Semikolons. Ihr verbrennt Kontext für Regeln, die sowieso automatisch
durchgesetzt werden.

**Rein gehört das Nicht-Offensichtliche.** Der eine Befehl, mit dem man prüft,
ob es funktioniert. Fachliche Regeln, die man dem Code nicht ansieht. Und —
das ist der Trick — **die Begründung dazu.**

▸ Beispiel-Folie mit der Minuten-Regel zeigen.

Der Unterschied ist: "Dauern immer als ganze Minuten" wird umgangen.
"Dauern immer als ganze Minuten, weil sich Rundungsfehler über die Woche
aufsummieren" wird befolgt. Bei Menschen übrigens genauso.

Zweite Sache, die viele nicht wissen: **Instructions wirken nicht bei den
Inline-Vorschlägen beim Tippen.** Nur im Chat und im Agent. Wenn ihr euch
wundert, warum die Autovervollständigung eure Regeln ignoriert — deshalb.

### 0:31 Pro Dateityp

Wenn die Hauptdatei zu lang wird, zieht ihr Themen raus. Eine
`.instructions.md` mit einem `applyTo`-Glob im Frontmatter gilt nur für die
Dateien, die zum Muster passen.

▸ Code-Folie mit `applyTo: '**/*.test.ts'`.

Testkonventionen greifen nur in Testdateien. Die Hauptdatei bleibt kurz.

### 0:32 Skills statt Prompt Files

Jetzt der Punkt für die, die schon länger dabei sind.

Wer von euch Prompt Files gebaut hat: die laufen nur in VS Code. Skills laufen
in VS Code, in der Copilot CLI und im Cloud-Agent. Und Skills können Skripte
und Dateien mitbringen, Prompt Files nicht.

VS Code hat in 1.129 eine Migration eingebaut, mit der ihr eure Prompt Files
zu Skills konvertieren könnt. Noch experimentell, hinter einem Setting, aber
sie existiert. Die Richtung ist damit ziemlich klar.

Und im selben Atemzug: `.chatmode.md` heißt inzwischen `.agent.md`. Wenn ihr
noch Chat Modes rumliegen habt — umbenennen, fertig.

### 0:33 Custom Agents — ehrlich

Custom Agents nur kurz, weil sie am meisten nach Fortschritt aussehen und am
wenigsten bringen, solange die Instructions noch nicht stehen.

Der eine Fall, wo sie sich sofort lohnen: wenn eine Rolle **weniger** können
soll. Das offizielle Beispiel ist ein Planungs-Agent mit reinen Lese-Rechten,
damit er beim Planen nichts kaputtmacht.

Für die meisten von uns: später.

### 0:34 Nicht bei null anfangen

Letzter Punkt zu dem Block: fangt nicht mit einem leeren Blatt an. Es gibt ein
Repo, `github/awesome-copilot`, mit fertigen Instructions, Skills und Agents.

▸ Link in den Chat posten.

Nicht blind installieren — reinlesen. Aber als Vorlage, wie sowas aussieht,
spart es einen Nachmittag.

---

## Teil 4 — VS Code vs. IntelliJ · 0:34 bis 0:38

> Für 30 Minuten: auf 2 Minuten kürzen. Die JetBrains-Tabelle weglassen, nur
> die erste und die letzte Aussage bringen.

### 0:34 Die Antwort zuerst

Die Frage kommt sowieso, deshalb beantworte ich sie vorweg: nein, ihr müsst
nicht zu VS Code wechseln.

JetBrains hat 2026 massiv aufgeholt. Agent Mode ist GA. Custom Agents,
Subagents und der Plan-Agent, den ich euch gerade gezeigt habe, sind da auch
GA. `AGENTS.md` wird gelesen. Skills sind in Preview. Die Copilot CLI gibt es
seit Juni.

Das war vor einem Jahr ein Graben. Heute ist es ein zeitlicher Versatz von
vielleicht drei bis sechs Monaten.

### 0:37 Wo VS Code vorne bleibt

Wo VS Code vorne bleibt, ist eigentlich nur ein Punkt: **neue Sachen kommen
zuerst hier an.** Im Wochenrhythmus. Browser-Tools, das Agents-Window mit
parallelen Sessions, Next Edit Suggestions — das sind Beispiele dafür, nicht
eigene Argumente.

Nicht "besser". Früher dran.

### 0:38 Der Payoff

Und das ist der Grund, warum der letzte Block auch für die IntelliJ-Leute
relevant war:

**Instructions, `AGENTS.md` und Skills sind portabel.** Die Arbeit, die ihr
ins Repo steckt, ist nicht an eine IDE gebunden. Die Arbeit, die ihr in Prompt
Files steckt, schon.

---

## Teil 5 — Firmenregeln · 0:38 bis 0:41

> **Diesen Abschnitt schreibt Markus selbst.** Nichts hier wird generiert.

▸ Kandidaten, die sich aus dem Vortrag ergeben:
- Nur Copilot ist freigegeben — was heißt das konkret für den Model-Picker
- Was darf in einen Prompt und was nicht
- Wer erhöht das Credit-Budget, und wie fragt man das an
- Sind Browser-Tools und MCP freigegeben oder per Policy gesperrt
- Wer ist ansprechbar bei Problemen

▸ Bei Unklarheit: "weiß ich nicht, ich kläre das" sagen. Nicht raten. Das
Publikum merkt den Unterschied sofort.

### 0:41 Der Schlusssatz

Eine Sache zum Mitnehmen, wenn ihr den Rest vergesst:

**Der Agent schreibt schneller, als ihr prüfen könnt.**

Plan vorher lesen, Akzeptanzkriterien mitgeben, Regeln ins Repo schreiben —
das sind keine drei getrennten Tipps. Das ist dreimal dieselbe Antwort auf
dieses eine Problem.

▸ **Wenn du bei 30 Minuten aufhören musst: hier aufhören** und in die Fragen
gehen.

---

## Teil 6 — Fragen · ab 0:42

▸ Die Chat-Antworten von ganz am Anfang jetzt aufgreifen.

Am Anfang habt ihr mir geschrieben, was euch nervt. Ich gehe ein paar davon
durch.

▸ **Zwei bis drei laut vorlesen und beantworten, auch wenn niemand nachfragt.**
Das füllt die erste Stille, und die kommt remote garantiert.

▸ Wenn viel Zeit übrig ist, hier abzweigen:
- Mitmach-Übung: alle schreiben eine `copilot-instructions.md` (8 min)
- "Gebt mir eine echte Aufgabe von heute" und live lösen (10 min)
- Session-Hygiene: wann neuer Chat, Context Rot (5 min)
- Harness-Denke: Instructions, Linter und Tests als Regelkreis (5 min)

### Zum Schluss

Links kommen in den Chat. Der wichtigste ist der letzte: wer selbst aktuell
bleiben will, liest die Release Notes. Alles andere aus diesem Vortrag
veraltet.

Danke fürs Zuhören.

---

## Offene Punkte

- [ ] Teil 5 inhaltlich füllen (nur Markus)
- [ ] Demo-Aufgabe final festlegen, dann Demo-Repo darauf zuschneiden
- [ ] Fallback-Screenshots für Demo 1 (Vision) und Demo 2 (Plan) erzeugen
- [ ] Prüfen, ob Browser-Tools bei uns per Policy erlaubt sind
- [ ] Am Vortag: Release Notes checken, Versionsnummern nachziehen
