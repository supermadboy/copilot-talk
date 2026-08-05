# Vortragstag

Ein Blatt für den Tag selbst. Oben was aufgebaut sein muss, unten alles, was du
tippst oder klickst — in der Reihenfolge des Vortrags.

Ausführliche Demo-Beschreibungen stehen in `demo-ablauf.md`. Hier nur das
Nötigste zum Danebenlegen.

---

# Teil A — Vorbereitung

## 60 Minuten vorher

- [ ] **Auto-Update in VS Code aus.** Ein Update mitten in der Demo ändert dir
      die Oberfläche
- [ ] **Schriftgrößen hoch:** Editor, **Terminal** und **Chat-Panel** einzeln.
      Remote wird alles kleiner, als du denkst
- [ ] **Screensharing-Modus festlegen** — Fenster-Share von VS Code oder
      Desktop-Share mit Alt+Tab. Nicht spontan entscheiden
- [ ] Zweiter Monitor: Teams-Chat, damit du die Antworten mitlesen kannst
- [ ] Benachrichtigungen aus — System, Teams, Mail
- [ ] Handy stumm

## Was offen sein muss

| Fenster | Zustand |
| --- | --- |
| **Folien** | `npm start`, Browser auf `localhost:8000/index.html` |
| **Speaker Notes** | zweites Fenster, mit `S` geöffnet |
| **VS Code — Demo-Repo** | `demo-repo/` offen, Chat-Panel sichtbar |
| **VS Code — dein Workspace** | echtes Multi-Repo-Projekt, für Demo 2 |
| **Browser — Demo-App** | `npm run demo`, Tab auf `localhost:5173` |
| **Terminal** | im Repo-Wurzelverzeichnis, für `npm run demo:reset` |
| **Browser — awesome-copilot** | Tab, schon auf einem Beispiel |
| **Browser — ECC** | Tab, schon auf `.github/copilot-instructions.md` |
| **Editor** | `demo-vorlagen/copilot-instructions-final.md` |
| **Desktop** | Screenshot der kaputten Ansicht, bereit zum Reinziehen |
| **Zwischenablage / Notiz** | Feedback-Formular-Link und Handout-Link |

## Sauberkeit auf dem Share

Der Punkt, der remote am ehesten wehtut — du zeigst echte Arbeitsumgebungen.

- [ ] **User-Memory-Datei durchgesehen.** Du machst sie in Demo 5 live auf
- [ ] Keine internen Repos in der Recent-Liste von VS Code
- [ ] Keine internen Tabs offen — Editor und Browser
- [ ] Branch-Namen und Git-Status im echten Workspace unverfänglich

## Zustand des Demo-Repos

- [ ] Ausgangszustand ist **committet** — `npm run demo:reset` setzt auf den
      letzten Commit zurück
- [ ] **Keine** `.github/copilot-instructions.md` vorhanden — die erzeugt `/init`
      in Demo 7 live
- [ ] `npm run demo:test` läuft grün
- [ ] Die App zeigt im roten Badge `Überstunden: -10h`

## Fallback: alte Copilot-Sessions

**Entschieden am 05.08.2026: keine Screenshots in `images/`.** Ersatz sind
deine eigenen, älteren Copilot-Sessions, in denen das Gezeigte schon einmal
funktioniert hat.

- [ ] **Die Sessions vorher heraussuchen und offen haben.** Live danach zu
      suchen dauert länger als der Fehlschlag selbst
- [ ] Vor allem für **Demo 1 (Vision)** — die läuft nach 90 Sekunden, da hast
      du noch keinen Puffer
- [ ] **Vorher reinschauen, was in der Session sonst noch steht.** Es ist eine
      echte Session aus deiner Arbeit, und sie geht auf den Share

---

# Teil B — Spickzettel

Alles, was du tippst oder klickst, in Reihenfolge.
**Fett** = du musst etwas tun, sonst passiert nichts.

## 0:00 · Chat-Frage — was nervt euch?

> **Warten. 45 bis 60 Sekunden. Wirklich schweigen.**
> Die ersten zwei, drei Antworten laut vorlesen.
> Antworten für Block 4 offen lassen.

## 0:02 · Umfrage IDE — auch in den Chat

> "Welche IDE benutzt ihr? Ein Wort reicht."
> Läuft parallel zur Frage davor. **Grob auszählen.**
>
> **Ergebnis merken** — du brauchst es in Block 2 (Tiefe) und Block 4.
> VS Code: ____   Andere: ____

## 0:03 · Demo 1 — Vision

1. Screenshot vom Desktop **per Drag & Drop** in den Chat
2. Prompt:

```
Was ist hier kaputt und in welcher Datei?
```

3. Fix übernehmen, Browser neu laden

> Erwartete Antwort: `calc()` in `src/timesheet.ts`, Überstunden ohne
> Untergrenze. **Harte Grenze 90 Sekunden.**

## 0:09 · Cheat-Sheet-Folie

> **Link in den Chat:**
> `code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet`
> 60 Sekunden, nicht vorlesen.

## 0:10 · Demo 2 — Workspace

- Dein echtes Multi-Repo-Projekt, Explorer aufklappen
- `Strg+,` → `useCustomizationsInParentRepositories` → Haken zeigen

## 0:13 · Demo 3 — Kosten

- Session-Kosten einblenden
- Zahl **nicht** als repräsentativ verkaufen

## 0:16 · Demo 4 — `/plan`

```
/plan Gruppiere die Einträge nach Projekt und
zeige pro Projekt eine Summe an.

Bestehende Tests müssen grün bleiben.
Keine neue Abhängigkeit.
```

> **Plan laut lesen.** Sonst ist die Demo wertlos.

Korrektur als **Folge-Prompt** (nicht `plan.md` editieren):

```
Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary.
Pass den Plan an.
```

> Satz dazu: "Er kann das nicht wissen — es steht nirgends. Genau dafür kommt
> gleich die `copilot-instructions.md`."
> Erst danach implementieren lassen.
>
> Nach der Umsetzung laut prüfen: `format.ts` und `package.json` nicht
> angefasst, Tests grün. **Nicht auf die Zeilenzahl schauen.**

**0:18 — warum überhaupt planen (drei Sätze):**

> 1. "Ich kann euch in vier Minuten nicht beweisen, dass das Ergebnis besser
>    wird. Dafür bräuchte ich hundert Durchläufe."
> 2. "Was ich zeigen kann: ich habe den Fehler gesehen, bevor er Code war."
> 3. "Für 'wird besser' verlasse ich mich auf die Zahlen von vorhin."
>
> Nachfrage „kann man das nicht nachträglich korrigieren?" →
> "Klar. Nur ist das die teuerste Stelle im ganzen Ablauf."

## 0:19 · Raten-Folie

> **Frage stellen, nicht auflösen.**
> Antwort für den Notfall: `/memories/session/plan.md`, Session-Memory, liegt
> lokal außerhalb des Repos, nach dem Chat weg.

## 0:19 · Demo 5 — Memory

1. Command Palette → **Chat: Show Memory Files**
2. Alle drei Ebenen zeigen
3. Wenn Zeit ist, live befüllen:

```
Merk dir, dass ich Tests immer selbst ausführe.
```

dann nochmal *Chat: Show Memory Files* und die neue Zeile zeigen.

## 0:23 · Checkpoints

- Im Chat über einen Request hovern → **Restore Checkpoint**
- Setting: `chat.checkpoints.enabled`

> "Ihr habt einen Rückwärtsgang, der schneller ist als `git checkout`."
> Kein Ersatz für Git.

## 0:24 · Demo 6 — `#fetch`

```
#fetch https://code.visualstudio.com/updates
Was ist in dieser Version neu, in drei Stichpunkten?
```

> Danach **ein Satz** zu Prompt Injection: was von einer fremden Seite
> reinkommt, ist Text, den du nicht kontrollierst.

## 0:26 · Chat Debug View (Vertikale, willst du zeigen)

- Chat-Menü → **Show Chat Debug View**
  (oder Palette → *Developer: Show Chat Debug View*)
- Einen Request von vorhin anklicken → Abschnitt **Context** aufklappen

> **60 Sekunden.** Aufklappen, zeigen, zumachen.
> Satz dazu: "Wenn ihr euch fragt, warum er was nicht wusste — hier steht die
> Antwort. Meistens war es einfach nicht dabei."
> **Nicht** in die *Agent Debug Logs* abbiegen, das ist etwas anderes.

## 0:27 · Teams-Reaktion

> **Explizit sagen:** "Daumen hoch, oben in der Reaktionsleiste — wer eine
> `copilot-instructions.md` im Repo hat."
> 10 Sekunden warten, **laut auszählen**.

## 0:29 · Demo 7 — `/init`

**Genau so tippen — im Probelauf am 04.08. so gefunden.** `/init` allein reicht
nicht: er muss aufs `demo-repo` gezeigt bekommen, und die fertige Vorlage muss
er explizit ignorieren, sonst schreibt er sie ab:

```
mach ein /init fuer das demo-repo
Und lese NICHT copilot-instructions-final.md diese Datei ein
```

1. Laufen lassen, erzeugte Datei aufmachen, kurz durchscrollen
2. **`demo-vorlagen/copilot-instructions-final.md` daneben** (Split-View)
3. Auf genau zwei Stellen zeigen:
   - eine Regel **mit Begründung**
   - die Zeile **"führe Tests und Linter nicht selbst aus"**

## 0:40 · Demo 8 — Fremde Bausteine

- awesome-copilot: deine Beispiele → ______, ______, ______
- ECC: `.github/copilot-instructions.md` und `.github/prompts/`
- Ein Satz zum Hackathon, dann weiter

## 0:41 · Block 4 — IDE-Vergleich

> **Nicht nochmal fragen.** Auf die Umfrage von 0:01 zurückkommen:
> "Am Anfang haben ein paar von euch gesagt, sie arbeiten mit was anderem.
> Für die ist der nächste Punkt."
> Bei überwiegend VS Code: kürzen oder überspringen.

## 0:47 · Checkliste

> **Link jetzt in den Chat posten**, nicht erst am Schluss.

## 0:48 · Q&A

> Die Chat-Antworten von 0:01 aufgreifen. **Zwei bis drei vorlesen und
> beantworten**, auch wenn niemand fragt.
> Danach allgemein offene Fragen, so lange es trägt.

## Danach, in dieser Reihenfolge

1. **Zum Nachlesen** — Links in den Chat, Handout nicht vergessen
2. **Danke** — hier ist der Vortrag zu Ende, wer gehen will, geht
3. **Was hat gefehlt?** — die Feedback-Folie kommt **hinter** dem Danke

> **Formular-Link in den Chat.** "Zwei Minuten, bleibt offen — geht auch heute
> Abend noch."
> Begründung dazusagen: "Wenn da was rauskommt, das eine Antwort braucht,
> schreibe ich es euch in den Chat. Alles Größere baue ich in die nächste
> Session ein."
>
> Nicht nach dem Danke abmoderieren und schließen — es kommt noch eine Folie.
> **Chat-Antworten wegspeichern, bevor das Meeting zugeht.**

---

## Wenn etwas schiefgeht

| Situation | Reaktion |
| --- | --- |
| Demo hakt | Nicht reparieren. Alte Session zeigen, weiter |
| Repo kaputt | `npm run demo:reset` |
| Antwort dauert lang | Weiterreden, nicht schweigend warten |
| Zeit wird knapp | Block 4, Prompt-Tipps, Credit-Hebel, Custom Agents streichen — **Demos bleiben** |
| Du bist bei 30 min durch | Nach dem Schlusssatz aufhören, in die Fragen gehen |

---

# Teil C — Nachbereitung

Direkt danach, solange das Meeting noch offen ist:

- [ ] **Chat-Antworten wegspeichern**, bevor das Meeting zugeht — sonst sind
      sie weg
- [ ] **Aufnahme stoppen**, falls aufgezeichnet wurde

Noch am selben Tag:

- [ ] **Alle Links in den Chat posten** — die vollständige Liste steht unten,
      zum Kopieren
- [ ] **Feedback-Formular nochmal posten** — mit dem Satz, dass es offen bleibt.
      Wer beim Danke schon raus war, hat den Link sonst nie gesehen
- [ ] **Handout verteilen** (`handout.html`)
- [ ] **Foliensatz als PDF in den SharePoint hochladen** und den Link in den
      Chat. Dann kann sich jeder das selbst runterladen und weitergeben

### Die Linkliste zum Kopieren

**Deins — musst du selbst eintragen:**

- Feedback-Formular: `____________________`
- Handout: `____________________`
- Folien im SharePoint: `____________________`

**Die vier von der Schluss-Folie** (die hast du schon live gepostet):

- https://code.visualstudio.com/docs/agents/best-practices
- https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet
- https://github.com/github/awesome-copilot
- https://code.visualstudio.com/updates ← der wichtigste

**Was du live gezeigt hast, aber nirgends verlinkt war:**

- https://github.com/affaan-m/ECC — das zweite Repo aus Demo 8
- https://code.visualstudio.com/docs/copilot/chat/chat-debug-view — Chat Debug
  View
- https://github.com/microsoft/vscode/releases — die Versionstabelle aus Block 1

**Die Quellen hinter den Folien** — nur posten, wenn jemand nachfragt, sonst
erschlägt es:

| Thema | Link |
| --- | --- |
| Custom Instructions (VS Code) | https://code.visualstudio.com/docs/agent-customization/custom-instructions |
| Custom Instructions (GitHub) | https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions |
| Customization im Überblick | https://code.visualstudio.com/docs/agents/concepts/customization |
| Agent Skills | https://code.visualstudio.com/docs/agent-customization/agent-skills |
| Custom Agents | https://code.visualstudio.com/docs/agent-customization/custom-agents |
| Planen mit Agents | https://code.visualstudio.com/docs/agents/planning |
| `implementation-planner` | https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/implementation-planner |
| Memory | https://code.visualstudio.com/docs/agents/memory |
| Checkpoints | https://code.visualstudio.com/docs/chat/chat-checkpoints |
| Kontext | https://code.visualstudio.com/docs/agents/concepts/context |
| Credits sparen | https://code.visualstudio.com/docs/agents/guides/optimize-usage |
| Modellwahl | https://docs.github.com/en/copilot/reference/ai-models/choosing-the-right-ai-model-for-your-task |
| Prompt-Regeln | https://code.visualstudio.com/docs/copilot/chat/prompt-crafting |
| Prompt Injection / Security | https://code.visualstudio.com/docs/agents/security |
| Instructions-Blogpost von GitHub | https://github.blog/ai-and-ml/github-copilot/unlocking-the-full-power-of-copilot-code-review-master-your-instructions-files/ |
| RigorBench (die +17 %) | https://arxiv.org/abs/2606.22678 |

> ⚠️ **Zwei Lücken, falls genau danach gefragt wird:**
> Für die **Browser-Tools-Doku** (*Build and test web apps with browser agent
> tools*) ist in `research/` keine URL hinterlegt — die müsstest du kurz
> suchen. Und die **arXiv-URL** ist aus der Nummer gebaut, die auf der Folie
> steht; geprüft ist in `research/memory-und-plan-belege.md` nur die Nummer
> selbst, nicht der Link.

In den Tagen danach:

- [ ] **Formular-Antworten durchgehen.** Was eine kurze Antwort braucht: in den
      Chat. Was größer ist: in die nächste Session einbauen
- [ ] Demo-Repo als ZIP exportieren, falls danach gefragt wurde
