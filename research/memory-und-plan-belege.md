# Memory und Belege für Plan-First

Stand: 31.07.2026 · nachrecherchiert nach Markus' Anmerkungen

## Memory in VS Code

Primärquelle: <https://code.visualstudio.com/docs/agents/memory>

**Das war die offene Frage: gibt es ein globales Memory-File? Ja.**

| Scope | Pfad | überlebt Session | überlebt Workspace | wofür |
| --- | --- | --- | --- | --- |
| **User** | `/memories/` | ja | **ja** | Vorlieben, Muster, häufige Befehle |
| **Repository** | `/memories/repo/` | ja | nein | Projektkonventionen, Build-Befehle |
| **Session** | `/memories/session/` | nein | nein | Task-Kontext, laufende Pläne |

**Der entscheidende Satz:** von der User-Ebene werden die **ersten 200 Zeilen
automatisch zu Beginn jeder Session in den Kontext geladen** – projektübergreifend.

### Bedienung

- Ablegen: in natürlicher Sprache "merk dir das". Der Agent wählt die Ebene
  selbst und legt die Datei an oder aktualisiert sie.
- Ansehen: Command **Chat: Show Memory Files** – listet alle Ebenen.
  Verweise auf Memory-Dateien in Antworten sind anklickbar.
- Löschen: **Chat: Clear All Memory Files** – nur alles auf einmal.

### Einschränkungen (gehören auf die Folie)

- Memory-Tool ist **Preview**
- **Einzelne Dateien lassen sich nicht löschen**, nur alle
- Standardmäßig **aus**; muss in den Copilot-Einstellungen aktiviert werden
- Dateien liegen lokal, nicht im Projektbaum

> **Vor dem Vortrag prüfen, ob Memory in unserer Organisation freigeschaltet
> ist.** Wenn nicht, schrumpft der Block auf die Session-Ebene zusammen.
> Nicht behaupten, es sei verfügbar, ohne es gesehen zu haben.

## Belege für "erst Plan, dann Code"

Markus' Frage war: gibt es dafür Quellen oder Heuristiken, oder ist das nur
Bauchgefühl? Es gibt drei Ebenen von Belegen, absteigend nach Belastbarkeit
für ein Entwicklerpublikum.

### 1. Die Hersteller haben es eingebaut (stärkstes Argument)

- VS Code hat einen **Plan-Agenten** als eigenen Modus samt `/plan`
  <https://code.visualstudio.com/docs/agents/planning>
- GitHub liefert in der offiziellen Customization Library einen fertigen
  **`implementation-planner`**-Agenten mit – bezeichnenderweise mit genau drei
  Tools: `read`, `search`, `edit`. **Kein Ausführen.**
  <https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/implementation-planner>

  Empfohlene Planstruktur laut GitHub: Overview, Technical Approach,
  Implementation Plan (phasenweise), Considerations, **Not Included**.
  Der letzte Punkt ist der unterschätzte – explizit festhalten, was *nicht*
  gemacht wird.

### 2. Gemessen: RigorBench (Juni 2026)

Madiraju & Madiraju, *RigorBench: Benchmarking Engineering Process Discipline
in Autonomous AI Coding Agents*, arXiv **2606.22678**, eingereicht 21.06.2026.

Misst nicht, *ob* der Code funktioniert, sondern *wie* Agenten arbeiten – über
fünf Dimensionen, eine davon **"Planning Fidelity"**, dazu eine Aufgabenklasse
**"Plan-Then-Build"**.

Ergebnisse:

- strukturierte Prozessdisziplin hebt die **Prozessqualität um Ø 41 %**
- und die **Korrektheit des Ergebnisses um 17 %**
- Nebenbefund, der für den Vortrag der wichtigste ist: Agenten erzeugen von
  sich aus **praktisch nie** ein explizites Plan-Artefakt. Sie können es, aber
  nur wenn man sie explizit dazu auffordert.

> Für die Folie reicht: **+17 % Korrektheit** und "Agenten planen nicht von
> selbst". Die 41 % sind Prozessqualität und erklärungsbedürftig.

### 3. Akademisch, aber nicht aus der Coding-Domäne

ADaPT (Prasad et al., Findings of NAACL 2024, arXiv 2311.05772): Trennung von
Planung und Ausführung mit dynamischer Zerlegung bringt bis zu **+33 %**
Erfolgsrate.

**Vorsicht:** gemessen auf ALFWorld (28,3 %), WebShop (27 %) und TextCraft
(33 %) – das sind Agenten-Benchmarks, **keine Programmieraufgaben**. Als
"Beweis" für Coding taugt das nur eingeschränkt. Wenn überhaupt erwähnen, dann
als "die Beobachtung ist nicht auf Programmieren beschränkt", nicht als
Hauptbeleg.

### 4. Praktiker-Konvergenz

Unabhängig voneinander bei demselben Muster gelandet – siehe
[praktiker-blogs.md](praktiker-blogs.md):

- **RPI** (Research → Plan → Implement), Boris Tane / Block
- **Spec-Driven Development**, Addy Osmani und AWS AI-DLC
- **Brainstorm → Plan → Execute**, Harper Reed
- Böckelers *Guides* als Feedforward-Kontrolle

Das ist kein Beweis, aber ein starkes Indiz: vier Leute, die den ganzen Tag
nichts anderes machen, kommen zum selben Ablauf.
