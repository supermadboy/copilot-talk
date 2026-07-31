<!-- .slide: class="interaction" data-interaction="Teams-Reaktion" data-background-color="#1d523d" -->

## 👍 Daumen hoch

wer eine `copilot-instructions.md` im Repo hat.

<p class="muted">Reaktionsleiste in Teams — nicht in den Chat.</p>

Note:
Zeit: 0:26

**Explizit sagen, welche Reaktion gemeint ist**, sonst passiert remote nichts.
"Daumen hoch, oben in der Reaktionsleiste."

10 Sekunden warten, dann laut auszählen: "vier von zwanzig." Das entlastet
alle anderen — und liefert dir die Überleitung.

---

<p class="kicker">Teil 3</p>

## Was brauche ich im Repo?

<p class="big">Sieben Möglichkeiten.<br />Ihr braucht zwei.</p>

Note:
Zeit: 0:27 — 8 Minuten.

Die Ansage ist wichtig: das Ökosystem sieht überwältigend aus, ist es aber
nicht. Für 90 % reichen Instructions und Skills.

---

## Die offizielle Entscheidungstabelle

| Ziel | Mittel |
| --- | --- |
| Gleiche Standards für allen Code | Always-on Instructions |
| Andere Regeln je Dateityp | Instructions mit `applyTo` |
| Mehrschritt-Ablauf mit Skripten | Agent Skills |
| Rolle mit weniger Tools | Custom Agents |
| Externe API oder Datenbank | MCP |
| Befehl im Agent-Loop | Hooks |
| Aufgabe auf Abruf | Prompt Files |

<p class="stand">Quelle: VS Code Docs · Stand 31.07.2026</p>

Note:
Zeit: 0:28

Nicht durchgehen. Der Satz dazu:

**"Das ist nicht meine Meinung, das ist die offizielle Tabelle. Und die
empfohlene Reihenfolge steht auch drin: erst Instructions, dann Skills,
MCP nur bei externen Daten, Custom Agents für Rollen."**

Screenshot-Link für die Nachlese ansagen.

---

## `.github/copilot-instructions.md`

<div class="cols">
<div class="card good">
<h3>Rein</h3>
<ul>
<li>Nicht-Offensichtliches</li>
<li>Der eine Test-Befehl</li>
<li>Begründungen</li>
<li>Verbote mit Beispiel</li>
</ul>
</div>
<div class="card bad">
<h3>Raus</h3>
<ul>
<li>Was der Linter schon prüft</li>
<li>Formatierungsregeln</li>
<li>Allgemeinplätze</li>
<li>Alles über ~1 Seite</li>
</ul>
</div>
</div>

Note:
Zeit: 0:29

Die rechte Spalte ist der eigentliche Inhalt. Fast alle schreiben zu viel rein.

Offizielle Empfehlung wörtlich: kurz und in sich geschlossen halten, die
Begründung mitgeben, auf nicht-offensichtliche Regeln konzentrieren.

**Wichtige Einschränkung nennen:** Instructions wirken im Chat und im Agent —
**nicht** bei den Inline-Vorschlägen beim Tippen. Das ist ein verbreitetes
Missverständnis.

---

## So sieht eine gute aus

```markdown
# Projektkontext

Zeiterfassung, TypeScript + Vite. Tests mit vitest.

## Verifikation
`npm test` muss grün sein. Ein Befehl, mehr braucht es nicht.

## Regeln
- Geldbeträge und Dauern immer als ganze Minuten (number),
  nie als Float. Rundungsfehler summieren sich über die Woche.
- Keine neuen Abhängigkeiten ohne Rückfrage.

## Was schon der Linter macht
Formatierung, Quotes, Semikolons — nicht erwähnen.
```

Note:
Zeit: 0:30

Kurz auf die Begründung bei der Minuten-Regel zeigen: "Rundungsfehler
summieren sich" — genau das macht den Unterschied zwischen einer Regel, die
befolgt wird, und einer, die umgangen wird.

---

## Und für einzelne Dateitypen

```markdown
---
name: 'Tests'
description: 'Konventionen für Testdateien'
applyTo: '**/*.test.ts'
---

- Ein `describe` pro exportierter Funktion
- Testnamen auf Deutsch, beschreiben das Verhalten
- Keine Snapshots
```

<p class="muted">Liegt in <code>.github/instructions/</code></p>

Note:
Zeit: 0:31

`applyTo` ist der ganze Trick: das Glob entscheidet, wann die Regeln greifen.
So bleibt die Hauptdatei kurz.

Mehrere kleine Dateien nach Thema schlagen eine große — steht auch so in der
Doku.

---

## Skills statt Prompt Files

| | Prompt Files | Skills |
| --- | --- | --- |
| VS Code | ✅ | ✅ |
| Copilot CLI | ❌ | ✅ |
| Cloud-Agent | ❌ | ✅ |
| Skripte, Dateien dabei | ❌ | ✅ |

<p class="stand">Stand: 31.07.2026 · VS Code 1.129.1</p>

Note:
Zeit: 0:32

**Der "das wusstet ihr noch nicht"-Punkt für die Vielnutzer.**

Wer Prompt Files gebaut hat, hat sie an VS Code gekettet. Skills laufen überall.

VS Code hat seit 1.129 eine Migration eingebaut:
`chat.customizations.promptMigration.enabled` — experimentell, aber sie
existiert.

Zweite Umbenennung im selben Atemzug: `.chatmode.md` heißt jetzt `.agent.md`.
Wer noch Chat Modes hat: umbenennen, fertig.

--

## Wie ein Skill aussieht

```markdown
---
name: release-notes
description: Erzeugt Release Notes aus den Commits
  seit dem letzten Tag. Nutzen, wenn ein Release
  vorbereitet wird.
---

1. `git log <letzter-tag>..HEAD --oneline` ausführen
2. Nach Feature / Fix / Intern gruppieren
3. Vorlage aus ./template.md befüllen
```

Note:
Vertiefung.

Ein Skill ist ein **Ordner** mit `SKILL.md` plus Skripten und Vorlagen.

Der Clou ist die dreistufige Ladung: erst nur name und description, dann der
Body wenn es passt, dann erst die referenzierten Dateien. Deshalb kosten
viele installierte Skills fast keinen Kontext.

Die `description` ist das Wichtigste: sie muss sagen, **wann** der Skill
benutzt werden soll — daran entscheidet das Modell.

---

## Custom Agents: wann überhaupt?

- Wenn eine Rolle **weniger** Tools haben soll
- Klassiker: Planer mit **Nur-Lese-Rechten**
- Definiert in `.agent.md`
- Für die meisten Teams: **später**

Note:
Zeit: 0:33

Ehrlich bleiben: Custom Agents sind das, was am meisten nach Fortschritt
aussieht und am wenigsten bringt, wenn die Instructions noch nicht stehen.

Das offizielle Beispiel ist gut: ein Planungs-Agent bekommt nur Lese-Tools,
damit er beim Planen nichts ändert. Prinzip der geringsten Rechte.

---

## Nicht bei null anfangen

<p class="big">github/awesome-copilot</p>

<p class="muted">Fertige Instructions, Skills und Agents zum Abschauen</p>

Note:
Zeit: 0:34

Link in den Chat posten.

Ansage: nicht blind installieren — reinlesen. Aber als Vorlage, wie so eine
Datei aussieht, spart es einen Nachmittag.
