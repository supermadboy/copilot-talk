# Praktiker-Blogs

Stand: 31.07.2026

**Alles hier sind Sekundärquellen und Meinungen.** Gut für Argumentation,
Rahmung und Zitate – nicht als Faktenbeleg für Copilot-Features benutzen.

## Warum das für den Vortrag zählt

Die Ratschläge dieser Leute konvergieren auf denselben Punkt, und der ist die
inhaltliche Klammer des ganzen Vortrags:

> **Code schreiben ist billig geworden. Verifizieren ist der Flaschenhals.**

Alles in Teil 2 (Plan zuerst, Kontext gezielt, Akzeptanzkriterien in den Prompt)
und Teil 3 (Instructions, Skills) dient diesem einen Ziel: den Output überhaupt
überprüfbar zu machen.

---

## Birgitta Böckeler / Martin Fowler – Harness Engineering

<https://martinfowler.com/articles/harness-engineering.html>

Die theoretisch sauberste Quelle. Kernformel:

> **Agent = Model + Harness**

Der Harness ist alles um das Modell herum – und der Teil, den man selbst baut.

**Zwei Arten von Kontrollen:**

- **Guides (feedforward)** – wirken *vor* der Generierung: Architekturdoku,
  Konventionen, Bootstrap-Skripte. Erhöhen die Qualität beim ersten Versuch.
  → Das sind genau die Custom Instructions aus Teil 3
- **Sensors (feedback)** – wirken *danach*: Tests, Linter, Typechecker,
  Review-Agents. Besonders stark, wenn sie für LLMs optimiert sind, z.B.
  "custom linter messages that include instructions for the self-correction"

**Computational vs. inferential:** deterministische Werkzeuge (Tests, Linter,
Typechecker) laufen in Millisekunden; KI-basierte Analyse ist langsamer, fängt
aber Nuancen. Beides brauchen.

**Der Satz, der auf eine Folie gehört:**

> "Whenever an issue happens multiple times, the feedforward and feedback
> controls should be improved to make the issue less probable to occur."

Also: Wenn Copilot dieselbe Dummheit zum dritten Mal macht, ist das keine
Copilot-Schwäche – dann fehlt eine Zeile in den Instructions oder eine
Linter-Regel. Das ist der Kern des optionalen Moduls "Harness-Denke".

Weiteres: Kontrollen über den Lebenszyklus verteilen (schnelle Checks
pre-commit, teure erst in der Pipeline); auf Drift achten (toter Code,
Coverage-Qualität, Dependencies); Vielfalt reduzieren durch festgelegte
Service-Templates; menschliche Aufmerksamkeit gezielt dorthin lenken, wo sie
zählt, statt sie abzuschaffen.

Ehrlich bleibt der Artikel bei der Lücke: der "Behaviour Harness" ist am
wenigsten reif – "we still have a lot to do to figure out good harnesses".

---

## Simon Willison

<https://simonwillison.net/tags/agentic-engineering/>

Sammelt und kommentiert laufend. Die für uns relevanten Posts:

| Datum      | Post                                          | Kernaussage                                                                 |
| ---------- | --------------------------------------------- | --------------------------------------------------------------------------- |
| 14.07.2026 | The Tower Keeps Rising                        | Reibung im Review synchronisierte das Team-Verständnis. Agents nehmen die Reibung raus – und damit das gemeinsame mentale Modell |
| 08.07.2026 | Rewriting Bun in Rust                         | Conformance-Testsuites als Validierungs-Harness bei großen Rewrites          |
| 05.07.2026 | sqlite-utils 4.0rc2                           | Arbeit in diskrete Phasen schneiden, zwischen den Iterationen gründlich reviewen |
| 30.06.2026 | Have your agent record video demos            | Den Agent Video-Demos aufnehmen lassen, statt seiner Behauptung zu glauben   |
| 28.06.2026 | Doctor, it hurts when agents create unreviewable PRs | Agents als Teammitglieder im Workflow behandeln, nicht als Blackbox    |
| 11.05.2026 | You Need AI That Reduces Maintenance Costs    | Produktivitätsgewinn zählt nur, wenn die Wartungslast nicht mitwächst        |
| 25.03.2026 | Thoughts on slowing the fuck down             | Tagesoutput auf die eigene Review-Kapazität begrenzen                        |
| 21.03.2026 | Using Git with coding agents                  | Git-Sicherheit ist die Rückfahrkarte aus jedem Agent-Fehler                  |
| 17.03.2026 | Subagents                                     | Große Tasks auf Subagents verteilen, um Kontextgrenzen zu managen            |

Willisons eigenes Muster: **erst den fehlschlagenden Test schreiben (rot), dann
den Agent grün machen lassen.** Das ist der engste Feedback-Loop, den es gibt.

---

## Addy Osmani – Agentic Code Review (16.06.2026)

<https://addyo.substack.com/p/agentic-code-review>

Der praktischste Text zum Reviewen von KI-Code.

**Tiering:** Review-Aufwand nach Risiko staffeln, nicht danach, wer den Code
geschrieben hat. Config-Änderung: Linter und schneller Blick. Kern-Businesslogik:
Typen, Tests, zwei KI-Reviewer, Domänenexperte, Security-Pass.

**Tests genauer ansehen als die Implementierung.** Der wichtigste konkrete Tipp:
Agents schreiben Assertions um, damit sie zum kaputten Verhalten passen. Diffs,
die viele Tests anfassen, gehören unter menschliche Augen.

**Rote Flaggen zum Ablehnen:**

- entfernte oder übersprungene Tests
- gesenkte Coverage-Schwellen
- abgeschwächte Linter-Regeln
- duplizierte, schon vorhandene Helper
- ungeprüfter User-Input, der in LLM-Calls landet (Prompt Injection)

**Das Zitat:**

> "A confident 'looks good' with no human anywhere in it is borrowed confidence."

Und: Nicht Reviewer abbauen, weil KI den Output beschleunigt – der Flaschenhals
ist von der Produktion zur Verifikation gewandert, nicht verschwunden.

---

## Armin Ronacher – A Language For Agents (09.02.2026)

<https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/>

Argumentiert über Sprachdesign, aber die Ableitungen gelten für jede Codebase:
**agentenfreundlicher Code ist grep-barer, lokal verständlicher Code.**

- explizite Klammern statt Whitespace-Bedeutung
- lokales Verstehen ermöglichen, grep-freundliche Muster
- typisierte Ergebnisse statt Exceptions
- wenig Makros, keine Barrel-Files und Re-Exports, kein Import-Aliasing –
  alles, was die Herkunft eines Symbols verschleiert, schadet
- **ein einziger Befehl für Verifikation** (Lint + Compile + Test)
- klare Paketgrenzen ohne Zyklen

Das Zitat:

> "The cost of writing code is going down, but because we are also producing
> more of it, understanding what the code does is becoming more important."

Für Teil 3 relevant: der letzte Punkt ist der beste Inhalt für eine
`copilot-instructions.md` – der eine Befehl, mit dem der Agent seine Arbeit
selbst prüfen kann.

---

## Mitchell Hashimoto

<https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto>

Grundhaltung: **immer einen Agent im Hintergrund laufen haben.** Delegiert dabei
aber vor allem *Recherche*, nicht Codegenerierung – Library-Vergleiche,
Edge-Case-Analysen, Untersuchungen.

Rhythmus: Agents recherchieren, während er selbst programmiert; danach reviewt er
ihren Output, während sie weiterarbeiten. Vor Feierabend stößt er Aufgaben an,
die ohne ihn weiterlaufen.

Nüchtern zur Panik-Erzählung:

> "You don't need to pick up on the 'it must replace you as a person' kind of
> propaganda."

Und skeptisch bei Open Source: KI macht "plausible looking but incorrect and
low-quality contributions" trivial – deshalb dort von Default-Trust zu
Default-Deny.

---

## Übersichtsartikel: Workflows im Coding-Agent-Zeitalter

<https://nyosegawa.com/en/posts/coding-agent-workflow-2026/>

Sekundärquelle, aber eine brauchbare Taxonomie der verbreiteten Muster:

| Muster                         | Herkunft            | Passt für                        |
| ------------------------------ | ------------------- | -------------------------------- |
| Brainstorm → Plan → Execute    | Harper Reed         | Greenfield, allein               |
| Spec-Driven Development        | AWS AI-DLC          | mittlere bis große Teams         |
| **Research → Plan → Implement** | Boris Tane / Block | große bestehende Codebases       |
| Superpowers                    | obra                | volle Automatisierung mit TDD    |

**RPI ist das, was dem Vortrag am nächsten kommt** – und was der eingebaute
Plan-Agent abbildet. Nützlich als Einordnung: "das, was ihr gleich seht, ist
kein Trick, das ist ein etabliertes Muster."

Weitere Punkte aus dem Artikel, die sich mit den Primärquellen decken:

- **Eine Session, eine Aufgabe.** Lange Sessions verlieren gegen kurze
- Das 1M-Kontextfenster beseitigt Context Rot nicht, es verzögert es nur
- Deterministische Werkzeuge (Linter, Hooks, Typechecker) sind die Grundlage;
  ohne automatische Feedback-Loops verfällt die Qualität
- `AGENTS.md` / `CLAUDE.md` realistisch bei 60–150 Zeilen halten
- Häufige Fehlermodi: erfundene APIs, Endlosschleifen, ungefragte Zusatzfeatures,
  **Comprehension Debt** – niemand versteht mehr, was da eigentlich steht

---

## Was davon in den Vortrag geht

- **Teil 2, Plan-Schritt:** RPI als etabliertes Muster einordnen
- **Teil 2, Akzeptanzkriterien:** Willisons Rot-Grün-Loop als konkretestes
  Beispiel
- **Teil 3:** Böckelers Guides/Sensors als Begründung, *warum* Instructions
  wirken – das hebt es über "schreibt mal eine Datei"
- **Optionales Modul "Harness-Denke":** Böckeler plus Osmanis rote Flaggen
- **Als Rahmung, nicht als eigener Teil:** Verifikation ist der Flaschenhals

Nicht in den Vortrag: die Rewrite-Geschichten (Bun, JSONata), Ralph Loop,
Best-of-N mit parallelen Worktrees. Beeindruckend, aber für ein gemischtes
Publikum mit 30 $ Budget die falsche Ebene.
