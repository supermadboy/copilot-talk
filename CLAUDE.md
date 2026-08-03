# Projekt: Präsentation "GitHub Copilot in VS Code – Tips und Tricks"

## Kontext

Interner Vortrag für Arbeitskollegen. GitHub Copilot ist das einzige KI-Coding-
Tool, das in der Firma erlaubt ist. Entwickelt wird unter WSL.

- **Vortragstag:** ca. 07.08.2026 (eine Woche nach Projektstart 31.07.2026)
- **Format:** **remote** (Teams o.ä.) – kein Raum, keine Handzeichen
- **Slot:** 60 min verfügbar, mindestens 30 werden gefüllt. Markus entscheidet
  **live**, wie weit er geht – der Aufbau muss das tragen
- **Publikum:** gemischt – von "noch nie Custom Instructions gesehen" bis
  "nutzt es täglich"
- **Sprache:** Deutsch
- **Copilot-Plan:** Business, Budget 30 $/User/Monat in AI Credits, aufstockbar
- **VS Code:** immer die aktuellste Version

## Harte Rahmenbedingungen

Diese vier Punkte überschreiben im Zweifel jede andere Entscheidung.

1. **Nur GitHub Copilot in VS Code.** Keine Inhalte zu Claude Code, Codex-CLI,
   Cursor, BYOK-Modellen oder der Ollama-Extension – auch nicht als Vergleich.
   **Auch Copilot CLI und Cloud-Agent nicht erwähnen** – beides ist in der Firma
   nicht erlaubt. Das betrifft besonders die Skills-Argumentation: der Vorteil
   von Skills ist hier **nicht** die Portabilität zu CLI und Cloud-Agent,
   sondern die dreistufige Ladung (Tokenersparnis) und mitgelieferte Skripte.
2. **Keine Firmen-Interna erfinden.** Alles zu internen Regeln, Policies,
   Lizenzverträgen oder konkreten Projekten kommt ausschließlich von Markus.
   Im Zweifel nachfragen statt plausibel klingende Beispiele generieren.
3. **Remote.** Jede Interaktion muss über Chat oder Teams-Reaktionen
   funktionieren. Handzeichen und Zuruf gibt es nicht.
4. **Aktualität ist ein Kernversprechen des Vortrags** – eigener Abschnitt unten.

## Technik

- reveal.js, `npm start` (Live-Reload auf localhost:8000). Server läuft in WSL,
  Browser auf der Windows-Seite: mit `--no-open` starten, Markus öffnet selbst
- Folien als **Markdown** (`data-markdown`), nicht als rohes HTML
- Code-Beispiele mit Syntax-Highlighting, jeweils auf eigener Folie
- Speaker Notes: pro Folie **kumulative Uhrzeit** ("hier bist du bei 0:18"),
  nicht nur die Dauer des Abschnitts. Markus entscheidet live über die Länge und
  muss jederzeit sehen, wo er steht
- **Kein PDF-Export.** Markus trägt aus dem laufenden `npm start` vor. Nichts
  in `?print-pdf` investieren, keine Print-Styles pflegen

## Arbeitsweise: Skript zuerst

**`vortrag-skript.md` im Repo-Root ist die Quelle.** Dort steht ausformuliert,
was Markus sagt. Folien und Demo-Repo werden **daraus** abgeleitet, nie
umgekehrt. Was nicht im Skript steht, kommt auch nicht auf eine Folie.

Reihenfolge bei jeder inhaltlichen Änderung: erst Skript anpassen, mit Markus
durchgehen, dann Folien nachziehen.

## Aufbau

Der **horizontale** Fluss ist das Kernprogramm und muss für sich alleine
stehen. **Vertikale** Slides darunter sind optionale Vertiefungen.
Nie Folien in den Kernfluss einbauen, die übersprungen werden müssen.

### Kern

| Teil                                      | Zeit   |
| ----------------------------------------- | ------ |
| 0 – Einstieg: Chat-Frage + Live-Hook      | 5 min  |
| 1 – Was sich gerade ändert                | 5 min  |
| 2 – Der Arbeitsablauf, live               | 12 min |
| 3 – Was brauche ich im Repo?              | 8 min  |
| 4 – VS Code vs. IntelliJ                  | 3 min  |
| 5 – Firmenregeln                          | 3 min  |
| 6 – Q&A aus den Chat-Antworten von Teil 0 | Rest   |

Für harte 30 min: Teil 1 auf 3 min und Teil 4 auf 2 min kürzen. Nichts anderes
anfassen – Teil 2 und 3 sind der Grund, warum die Leute zuhören.

**Teil 2 – Der Arbeitsablauf** ist das Kernstück und läuft an **einer echten
Aufgabe** live durch, nicht als Feature-Liste:

1. Modell wählen (3 min) – `Auto` vs. bewusst, Task→Modell, Reasoning vs. Fast.
   Bei Token-Abrechnung ist das eine **Kostenentscheidung**
2. Erst Plan, dann Code (5 min) – `/plan`, Plan lesen und korrigieren, dann
   implementieren lassen
3. Kontext gezielt geben (4 min) – `#file` `#selection` `#codebase` `#changes`
   `#fetch` `#problems`, plus Akzeptanzkriterien direkt in den Prompt

### Optionale Module (dehnen auf 60 min)

- Mitmach-Übung: alle schreiben eine `copilot-instructions.md` (8 min)
- "Gebt mir eine echte Aufgabe von heute" – live lösen (10 min)
- Session-Hygiene: wann neuer Chat, Context Rot (5 min)
- Harness-Denke: Instructions + Linter + Tests als Regelkreis (5 min)

## Interaktionspunkte

Brauchen eine **visuell klar abgesetzte Folie** (eigene Hintergrundfarbe, großer
Text), damit beim Vortragen sofort erkennbar ist, dass jetzt etwas vom
Vortragenden kommen muss. Alle drei müssen **remote** funktionieren:

1. **Chat-Frage ganz am Anfang:** "Schreibt mir eine Sache in den Chat, die euch
   an Copilot nervt." Liefert Material für Teil 6 und zeigt sofort das Level.
2. **Teams-Reaktion statt Handzeichen:** z.B. "Daumen hoch, wer eine
   `copilot-instructions.md` im Repo hat." Auf der Folie muss stehen, *welche*
   Reaktion gemeint ist – sonst passiert remote nichts.
3. **Raten-Folie:** Prompt zeigen, Publikum in den Chat raten lassen, was
   rauskommt, dann live ausführen.

## Aktualität

Markus' wichtigster inhaltlicher Anspruch: der Vortrag muss **am Vortragstag
aktuell** sein. VS Code liefert derzeit im Wochenrhythmus (1.128 am 08.07.2026,
1.129 am 15.07.2026, 1.129.1 am 17.07.2026).

Daraus folgen harte Regeln:

- **Stand-Marker.** Jede Folie mit Versions- oder Feature-Aussagen trägt sichtbar
  "Stand: <Datum>, VS Code <Version>".
- **Refresh-Pass am Vortag.** Release Notes und GitHub Changelog gegenchecken,
  Teil 1 nachziehen. Fester Arbeitsschritt, kein Optional.
- **Auto-Update im Demo-Profil aus.** 1.130 kann vor dem Vortrag landen und die
  eingeübte Demo verändern.
- **Nie aus dem Gedächtnis über Features schreiben.** Copilot-Features ändern
  sich schneller, als Modell-Wissen mithält. Vor UI-Beschreibungen, Settingnamen
  und Screenshots gegen die Primärquellen prüfen – siehe `research/`.

## Inhaltliche Leitlinien

Jeder Tipp wird **doppelt** gebaut: eine Grundversion für Einsteiger und ein
Dreh, den auch Vielnutzer nicht kennen.

Basics nicht durchsprechen, sondern als **eine Cheat-Sheet-Folie** zeigen,
60 Sekunden drüber, Link zum Nachlesen.

Inhaltliche Schwerpunkte (höchster Hebel zuerst):

1. **Erst Plan, dann Code.** Der Plan-Agent ist ein eingebautes Feature, kein
   Prompting-Trick. Gotcha für die Demo: der Plan liegt in Session-Memory
   (`/memories/session/plan.md`, sichtbar über *Chat: Show Memory Files*) und ist
   nach Ende der Conversation **weg**.
2. **Instructions richtig schneiden.** `.github/copilot-instructions.md` für
   Repo-weites, `.instructions.md` mit `applyTo`-Glob für Dateityp-spezifisches.
   Kurz halten, nur Nicht-Offensichtliches, keine Regeln, die schon der Linter
   durchsetzt, Begründung mitgeben.
3. **Skills, wenn Text nicht reicht.** Argument ist die **dreistufige Ladung**
   (Name/Description → Body → Dateien): viele Skills kosten fast nichts, solange
   sie nicht greifen, Instructions sind dagegen immer im Kontext. Nicht mit
   CLI-/Cloud-Portabilität argumentieren (siehe Rahmenbedingung 1).
   Nebenbei: `.chatmode.md` heißt jetzt `.agent.md`.
4. **Memory richtig nutzen.** Drei Ebenen – Session, Repository, User. Von der
   User-Ebene werden die **ersten 200 Zeilen in jeden Chat geladen**, in jedem
   Projekt. Preview, standardmäßig aus, einzelne Einträge nicht löschbar.
5. **Tests und Linter selbst ausführen**, nicht den Agenten. Verhindert
   Endlosschleifen und falsch gelesene Testausgaben, spart Tokens. Gehört als
   begründete Regel in die Instructions.
6. **Modellwahl.** Markus' Position weicht bewusst von der offiziellen ab:
   `Auto` greift zu oft zu schwachen Modellen, er arbeitet bewusst mit einem
   starken. Beide Sichten nennen. Seit 01.06.2026 tokenbasierte AI Credits.
7. **Kontext-Referenzen und Prompt-Regeln** im Chat.

Für "wann nehme ich was" gibt es eine **offizielle Entscheidungstabelle** von
VS Code (Ziel → Mittel → wann es greift, siehe `research/offizielle-doku.md`).
Die wird als Folie übernommen, nicht neu erfunden. Offizielle Reihenfolge: erst
Instructions, dann Skills, MCP nur bei externen Daten, Custom Agents für Rollen.

**VS Code vs. IntelliJ** – ehrliche Botschaft, nicht Werbung: JetBrains hat 2026
stark aufgeholt (Custom Agents, Subagents, Plan-Agent GA; AGENTS.md/CLAUDE.md;
Skills in Preview; Copilot CLI). VS Code bleibt vorne bei Erstzugang zu neuen
Features, Agents Window, Browser-Tools und Next Edit Suggestions.

## Live-Demo

Markus will **viel live** zeigen. Remote + live ist die riskanteste Kombination,
deshalb abgesichert:

- **Screensharing-Modus vorher festlegen und proben** (Fenster-Share von VS Code
  vs. Desktop-Share mit Alt+Tab). Umschalten kostet remote immer Sekunden.
- **Für jede Demo ein Fallback-Screenshot** in `./images/`, damit ein Fehlschlag
  den Fluss nicht killt.
- **Demo-Repo startet in einem definierten Zustand.** Git-Tag zum Zurücksetzen,
  damit nach einer misslungenen Demo nicht im kaputten Stand weitergearbeitet
  wird.
- Schriftgrößen in VS Code vorher hochdrehen – remote wird mitkomprimiert.

## Beispielrepo

Liegt in `./demo-repo`. Kleines, realistisches Projekt mit absichtlichen
Schwachstellen: fehlende Tests, unklar benannte Funktion, ein kleiner Bug.
Enthält eine `.github/copilot-instructions.md` als Anschauungsbeispiel. Muss am
Ende als ZIP zum Verteilen exportierbar sein.

## Folien-Konventionen

- Maximal 4 Stichpunkte pro Folie
- Code immer auf eigener Folie
- Kein Fließtext auf Folien
- Screenshots aus VS Code kommen in `./images/`

## Recherche

Alle Rechercheergebnisse und Primärquellen liegen in **`research/`**. Vor
inhaltlichen Aussagen dort nachsehen statt neu zu suchen – und bei Feature-
Aussagen die dort verlinkte Primärquelle gegenchecken. `research/README.md`
erklärt den Aufbau und den Refresh-Ablauf.

## Reihenfolge der Arbeit (eine Woche)

1. ~~Grundgerüst + Ordnerstruktur~~ (steht)
2. ~~Struktur/Folienaufteilung festlegen~~ (steht, siehe "Aufbau")
3. ~~Recherche~~ (steht, siehe `research/`)
4. **`vortrag-skript.md` mit Markus durchgehen, bis es sitzt** ← hier stehen wir
5. Teil 5 (Firmenregeln) von Markus befüllen lassen
6. Folien aus dem fertigen Skript ableiten
7. Demo-Repo auf die im Skript festgelegte Aufgabe zuschneiden
8. Demo einmal komplett durchspielen, Fallback-Screenshots erzeugen
9. Optionale Module, nur wenn Zeit bleibt
10. Am Vortag: Refresh-Pass auf Aktualität (siehe oben)

Die Folien in `slides/` sind ein **Vorgriff** und werden aus dem Skript neu
abgeleitet, sobald es steht. Nicht daran feilen, solange Schritt 4 läuft.
