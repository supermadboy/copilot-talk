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

## Fallback-Screenshots in `images/`

- [ ] Demo 1 — kaputte Ansicht + Antwort von Copilot
- [ ] Demo 2 — Workspace mit mehreren Repos
- [ ] Demo 3 — Kostenanzeige
- [ ] Demo 4 — fertiger Plan
- [ ] Demo 5 — Memory-Files-Übersicht
- [ ] Demo 6 — `#fetch`-Ergebnis
- [ ] Demo 7 — `/init`-Ergebnis neben der überarbeiteten Fassung

---

# Teil B — Spickzettel

Alles, was du tippst oder klickst, in Reihenfolge.
**Fett** = du musst etwas tun, sonst passiert nichts.

## 0:01 · Umfrage IDE

> **Reaktionsleiste, zwei Runden, je auszählen:**
> 1. "Daumen hoch, wer VS Code benutzt."
> 2. "Und wer mit was anderem arbeitet."
>
> **Ergebnis merken** — du brauchst es in Block 2 (Tiefe) und Block 4.
> VS Code: ____   Andere: ____

## 0:01 · Chat-Frage

> **Warten. 45 bis 60 Sekunden. Wirklich schweigen.**
> Die ersten zwei, drei Antworten laut vorlesen.
> Antworten für Block 4 offen lassen.

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

## 0:27 · Teams-Reaktion

> **Explizit sagen:** "Daumen hoch, oben in der Reaktionsleiste — wer eine
> `copilot-instructions.md` im Repo hat."
> 10 Sekunden warten, **laut auszählen**.

## 0:29 · Demo 7 — `/init`

```
/init
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

> **Formular-Link in den Chat.** "Anonym, zwei Minuten, bleibt offen — geht
> auch heute Abend noch."
> Begründung dazusagen: "Ich halte den Vortrag nächste Woche nochmal und baue
> aus euren Antworten das Handout."
>
> Nicht nach dem Danke abmoderieren und schließen — es kommt noch eine Folie.
> **Chat-Antworten wegspeichern, bevor das Meeting zugeht.**

---

## Wenn etwas schiefgeht

| Situation | Reaktion |
| --- | --- |
| Demo hakt | Nicht reparieren. Fallback-Screenshot, weiter |
| Repo kaputt | `npm run demo:reset` |
| Antwort dauert lang | Weiterreden, nicht schweigend warten |
| Zeit wird knapp | Block 4, Prompt-Tipps, Credit-Hebel, Custom Agents streichen — **Demos bleiben** |
| Du bist bei 30 min durch | Nach dem Schlusssatz aufhören, in die Fragen gehen |
