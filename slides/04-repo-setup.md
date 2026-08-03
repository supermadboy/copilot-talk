<!-- .slide: class="interaction" data-interaction="Teams-Reaktion" data-background-color="#1d523d" -->

## 👍 Daumen hoch

wer eine `copilot-instructions.md` im Repo hat.

<p>Reaktionsleiste in Teams — nicht in den Chat.</p>

Note:
Zeit: 0:29

**Explizit sagen, welche Reaktion gemeint ist**, sonst passiert remote nichts.
"Daumen hoch, oben in der Reaktionsleiste."

10 Sekunden warten, dann laut auszählen: "vier von zwanzig." Das entlastet
alle anderen — und liefert dir die Überleitung.

---

<!-- .slide: class="center-text" -->

<p class="kicker">Block 3</p>

## Euer Repo aufsetzen

<p class="big">Sieben Möglichkeiten.<br />Ihr braucht zwei.</p>

Note:
Zeit: 0:29 — Block 3 läuft bis 0:43. Der "geht nach Hause und macht das"-Teil.

**Die sieben Möglichkeiten aufzählen:**

- Instructions
- Skills
- Custom Agents
- MCP
- Hooks
- Prompt Files
- Plugins

**Dann sofort entlasten:** "Sieht überwältigend aus. Für neunzig Prozent
braucht ihr zwei davon."

**Optional:** Fahrplan-Folie von 0:05 kurz nochmal einblenden — hier schaltet
es von "wie ich arbeite" auf "was ihr tut" um.

---

## Die offizielle Landkarte

| Ziel | Mittel |
| --- | --- |
| Standards für allen Code | Instructions |
| Regeln je Dateityp | Instructions mit `applyTo` |
| Ablauf mit Skripten | Skills |
| Rolle mit weniger Tools | Custom Agents |
| Externe Daten | MCP |

<p class="quelle">VS Code Docs · <em>Customization options at a glance</em></p>

Note:
Zeit: 0:30

**Diese Tabelle ist offiziell — nicht neu erfunden.** Nicht vorlesen, auf die
zwei oberen Zeilen zeigen.

Die empfohlene Reihenfolge steht auch in der Doku: **erst Instructions, dann
Skills.** MCP nur, wenn ihr an externe Daten müsst. Custom Agents für Rollen.

---

<!-- .slide: class="demo center-text" -->

## Ihr müsst das nicht tippen

<p class="big"><code>/init</code></p>

<p>Copilot liest das Repo und schreibt die Datei selbst.</p>

<p class="stand">VS Code 1.129.1</p>

Note:
Zeit: 0:31 — DEMO 7, zwei Minuten. Nach `/plan` die wichtigste Demo.

`/init` in den Chat, laufen lassen, entstandene Datei aufmachen und **kurz
durchscrollen**. Nicht vorlesen.

Satz: "Er hat den Code gelesen. Stack, Struktur, Konventionen — das, was man
sehen kann."

Quelle: VS Code Docs, *Use custom instructions in VS Code* — "analyze your
workspace and generate always-on custom instructions".

Zwei Geschwister erwähnen:
- `/create-instructions` (**mit s**, geprüft) — wenn ihr **eine bestimmte**
  Regel wollt statt des Rundumschlags
- derselbe Knopf im Agent-Customizations-Editor, für Klicker

Dann die vorbereitete überarbeitete Fassung daneben aufmachen (Split-View).

Details: demo-ablauf.md, Demo 7.

---

## Der Entwurf ist nicht das Ergebnis

<p class="big">Er kennt eure Begründungen nicht.<br />Und die Stolpersteine beim Bauen auch nicht.</p>

Note:
Zeit: 0:32

Das ist die Pointe der Demo. Auf **genau zwei Stellen** in der überarbeiteten
Fassung zeigen:

1. eine Regel **mit Begründung**
2. die Zeile **"führe Tests und Linter nicht selbst aus"** — der Rückbezug auf
   Block 2, die kennt `/init` garantiert nicht

Nicht mehr. Nicht die ganze Datei durchgehen.

---

## Was reingehört

1. **Was das Projekt ist** — Stack mit Versionen
2. **Build, Test, Lint** — Befehle *und* Stolpersteine
3. **Wo was liegt** — relative Pfade
4. **Das Nicht-Offensichtliche** — mit Begründung

<p class="quelle">GitHub Docs · <em>Adding repository custom instructions</em></p>

Note:
Zeit: 0:33 — drei Minuten. Das ist der Teil mit dem meisten Mitnehm-Wert.

Zu 1: "Angular 20", nicht "Angular". Der Unterschied zwischen Code, der bei
euch läuft, und Code aus einem drei Jahre alten Blogpost.

Zu 2: **Das ist der Block, den fast niemand schreibt.** Die GitHub-Doku hebt
ihn extra hervor — inklusive unerwarteter Build-Probleme und ihrer Workarounds.
Beispiel aus der Doku: "always run npm install before building".
Formulierung für uns: "ihr dokumentiert hier die Sachen, die einen neuen
Kollegen am ersten Tag zwei Stunden kosten."

Zu 3: damit das Suchen aufhört.

Zu 4: nächste zwei Folien.

---

## Die Begründung entscheidet

<div class="cols">
<div class="card bad">

### Wird umgangen

Dauern immer als ganze Minuten.

</div>
<div class="card good">

### Wird befolgt

Dauern immer als ganze Minuten, **weil** sich Rundungsfehler über die Woche
aufsummieren.

</div>
</div>

Note:
Zeit: 0:34

Die Doku sagt das genauso: mit der Begründung entscheidet das Modell in den
Fällen richtig, die ihr nicht aufgeschrieben habt.

"Bei Menschen ist das übrigens dasselbe."

---

## Beispiele schlagen Regeln

```ts
// Prefer
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);

// Avoid
const d = new Date();
const x = users.filter(u => u.active);
```

<p class="quelle">GitHub Docs · <em>Use custom instructions</em></p>

Note:
Zeit: 0:35

Wörtlich aus der VS-Code-Doku: das Modell reagiert besser auf Beispiele als
auf abstrakte Regeln.

Also nicht "sprechende Namen benutzen", sondern zwei Zeilen — so ja, so nicht.

Und dann der Rückbezug: rein gehört auch **"führe Tests und Linter nicht
selbst aus"**, mit der Begründung, dass er sich sonst festfrisst. Genau so
eine Regel: sieht man dem Code nicht an, wird ohne Begründung ignoriert.

---

## Was raus muss

- Was **Linter oder Formatter** schon prüfen
- Taskspezifisches — es geht ums Projekt, nicht ums Ticket
- Vages — "sei gründlicher" tut nichts
- Externe Links — werden nicht verfolgt

<p class="quelle">GitHub Docs · <em>Adding repository custom instructions</em></p>

Note:
Zeit: 0:36

"Nicht was reingehört ist das Problem, sondern was raus muss."

Zu Punkt 1: ihr verbrennt Kontext für Regeln, die sowieso automatisch
durchgesetzt werden.

Zu Punkt 2: "Das ist eine Datei über euer Projekt, nicht über das Ticket von
heute."

**Und haltet die Datei kurz.** GitHub schreibt, dass Instructions-Dateien
jenseits von ungefähr tausend Zeilen zu inkonsistentem Verhalten führen.
Fangt klein an — eine einzige Zeile hilft schon.

⚠️ Der Längen-Hinweis stammt aus dem Kontext *Copilot Code Review*. Als
Faustregel brauchbar, aber nicht als allgemeine Doku-Aussage verkaufen.
Quelle: GitHub Blog, *Master your instructions files*.

---

## Die Stolperfalle

<p class="big">Instructions wirken nicht<br />bei den Inline-Vorschlägen.</p>

<p>Nur im Chat und im Agenten.</p>

<p class="quelle">VS Code Docs · <em>Use custom instructions</em></p>

Note:
Zeit: 0:37

Wörtlich aus der Doku: "not taken into account for inline suggestions as you
type".

"Wenn ihr euch also wundert, warum die Autovervollständigung eure schönen
Regeln komplett ignoriert — daran liegt's. Das ist kein Bug bei euch."

Das ist ein häufiges Missverständnis und ein guter "aha"-Moment.

---

## Pro Dateityp

```markdown
---
applyTo: '**/*.test.ts'
---

- Testdaten inline, keine Fixture-Dateien
- Ein Verhalten pro Test, kein Setup-Sharing
```

<p>Mehrere kleine Dateien nach Thema schlagen eine große.</p>

Note:
Zeit: 0:38

Wenn die Hauptdatei zu lang wird, zieht ihr Themen raus. Eine
`.instructions.md` mit `applyTo`-Glob gilt nur für passende Dateien.

Liegt in `.github/instructions/`.

Steht auch so in der Doku: mehrere kleine nach Themen statt einer Riesendatei.

**Für harte 30 Minuten: diese Folie streichen.**

---

## Skills — wenn Text nicht reicht

- Ein Ordner mit `SKILL.md` plus Skripten
- Geladen in **drei Stufen**: Name → Inhalt → Dateien
- Zwanzig Skills kosten nichts, solange sie nicht greifen
- Instructions sind **immer** dabei

<p class="quelle">VS Code Docs · <em>Use Agent Skills in VS Code</em></p>

Note:
Zeit: 0:39

Der eigentliche Vorteil ist die dreistufige Ladung — und der ist für uns mit
begrenztem Budget der relevante.

Erst nur Name und Beschreibung. Erst wenn die Aufgabe passt, der Inhalt. Und
die mitgelieferten Dateien erst, wenn er sie wirklich braucht.

Kreis schließen: "mein 'so führst du die Tests aus'-Ablauf ist genau so ein
Kandidat. Einmal aufschreiben lassen, als Skill ablegen, fertig."

Nebenbei: falls ihr noch `.chatmode.md`-Dateien rumliegen habt — die heißen
inzwischen `.agent.md`. Umbenennen, fertig.

---

## Custom Agents — ehrlich gesagt

- Ich hatte welche für TS- und Java-Review
- Wieder **abgeschaltet**: viel Tokens, wenig Mehrwert
- Guter Grund: eine Rolle soll **weniger** können
- Sonst: erst mal die Instructions richtig hinkriegen

Note:
Zeit: 0:40

Ehrlich bleiben, nicht verkaufen. "Klang gut. In der Praxis haben sie ordentlich
Tokens gekostet und mir wenig gebracht, was ein normaler Review-Prompt nicht
auch gebracht hätte."

Der eine echte Grund: der offizielle Planungs-Agent hat genau drei Tools —
lesen, suchen, schreiben. Er *kann* nichts ausführen. Prinzip der geringsten
Rechte.

**Für harte 30 Minuten: diese Folie streichen.**

---

## Nicht bei null anfangen

<div class="cols">
<div class="card">

### `github/awesome-copilot`

Kuratierte Einzelteile zum Rauspicken

</div>
<div class="card">

### `affaan-m/ECC`

Ein durchgebautes Gesamtsystem<br />
67 Agents · 281 Skills · 94 Commands

</div>
</div>

<p class="big">Nicht übernehmen — lesen, wie die geschrieben sind.</p>

Note:
Zeit: 0:41 — DEMO 8.

**Beide Repos als Tabs vorher öffnen, jeweils schon auf der richtigen Datei.**
Nicht auf dem Share durch zwei fremde Repos navigieren.

awesome-copilot: zwei bis drei konkrete Beispiele, die zu unserem Stack passen.
Am Wochenende auswählen. **Nicht die Sammlung als Ganzes zeigen** — das
erschlägt und niemand macht danach was.

ECC: direkt in `.github/copilot-instructions.md` und `.github/prompts/`
springen. Da liegen fertige `/plan`, `/tdd`, `/security-review`, `/build-fix`,
`/refactor`. MIT-Lizenz, gut zweihunderttausend Sterne.

**Die Randnotiz, ein Satz:** "Das ist aus einem Hackathon entstanden, den der
Autor gewonnen hat — und danach hat er sein komplettes Setup unter MIT
rausgegeben."

Nur über Blogs belegt, also "soweit ich weiß" sagen, nicht als Fakt verkaufen.
Ein Satz, dann weiter. Siehe research/ecc-hackathon-repo.md.

**Zahlen sind Stand 03.08.2026** — beim Refresh-Pass am Vortag neu ablesen.

Falls jemand fragt, warum 281 Skills kein Widerspruch zur "kurz halten"-Regel
sind: Skills werden dreistufig geladen, Instructions nicht.

Botschaft: "Sucht euch zwei Sachen raus, die zu eurem Stack passen. Nicht
zweihunderteinundachtzig."
