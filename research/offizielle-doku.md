# Offizielle Doku: VS Code + GitHub

Stand: 31.07.2026

## Die Entscheidungstabelle – "wann nehme ich was"

Quelle: <https://code.visualstudio.com/docs/agents/concepts/customization>
("Customization options at a glance")

| Ziel                                    | Mittel                     | Wann es greift                         |
| --------------------------------------- | -------------------------- | -------------------------------------- |
| Gleiche Standards für allen Code        | Always-on Instructions     | in jedem Request                       |
| Andere Regeln je Dateityp               | File-based Instructions    | wenn Dateien zum Glob/zur Beschreibung passen |
| Mehrschritt-Workflow, der Skripte braucht | **Agent Skills**         | wenn der Task zur Skill-Description passt |
| Rolle mit eingeschränkten Tools         | **Custom Agents**          | wenn du ihn wählst oder delegiert wird |
| Zugriff auf externe API/DB              | MCP                        | wenn der Task zur Tool-Description passt |
| Befehl automatisch im Agent-Loop        | Hooks                      | bei passendem Lifecycle-Event          |
| Wiederholbare Aufgabe auf Abruf         | Prompt Files               | per Slash-Command                      |

**Offizielle Empfehlungsreihenfolge:** erst Custom Instructions für projektweite
Standards, dann Agent Skills für wiederholbare Mehrschritt-Tasks, MCP nur wenn
externe Daten gebraucht werden, Custom Agents für spezialisierte Rollen, Agent
Plugins um mehrere Typen zu bündeln.

> Diese Tabelle ist als Folie in Teil 3 vorgesehen. Nicht neu erfinden.

## Custom Instructions

Quelle: <https://code.visualstudio.com/docs/agent-customization/custom-instructions>

### Dateitypen und Orte

**Immer aktiv:**

- `.github/copilot-instructions.md` – eine Datei pro Workspace, wird automatisch
  gefunden
- `AGENTS.md` – Workspace-Root oder Unterordner (verschachtelt: experimentell),
  Setting `chat.useAgentsMdFile`
- `CLAUDE.md` – Root, `.claude/` oder `~/.claude/`, Setting `chat.useClaudeMdFile`
- Organisations-Instructions – Setting
  `github.copilot.chat.organizationInstructions.enabled`

**Bedingt aktiv:**

- `*.instructions.md` in `.github/instructions/` (Workspace) oder
  `~/.copilot/instructions` (User). Setting: `chat.instructionsFilesLocations`

### Frontmatter

```yaml
---
name: 'Anzeigename'
description: 'Kurzbeschreibung, erscheint beim Hover in der Chat-View'
applyTo: '**/*.py'
---
```

`applyTo` ist das Glob-Muster, das entscheidet, wann die Instructions greifen.
(Im `.claude/rules`-Format heißt die Eigenschaft `paths` statt `applyTo`.)

### Priorität bei Konflikten

1. Persönliche Instructions (User-Ebene) – höchste Priorität
2. Repository-Instructions (`.github/copilot-instructions.md` / `AGENTS.md`)
3. Organisations-Instructions – niedrigste

Bei mehreren Instruction-Dateien werden alle kombiniert, **eine Reihenfolge ist
nicht garantiert**.

### Wichtige Einschränkung

> "Custom instructions are not taken into account for inline suggestions as you
> type in the editor."

Also: Instructions wirken im Chat und im Agent, **nicht** bei den Inline-
Vorschlägen. Das ist ein häufiges Missverständnis und gehört auf eine Folie.

### Offizielle Schreib-Regeln

- kurz und in sich geschlossen halten
- die **Begründung** hinter einer Regel mitgeben
- bevorzugte und zu vermeidende Muster mit konkreten Code-Beispielen zeigen
- auf **nicht-offensichtliche** Regeln konzentrieren
- mehrere `*.instructions.md` nach Themen statt einer Riesendatei
- ins Versionskontrollsystem, damit das Team sie teilt

**Was nicht reingehört:** alles, was Linter oder Formatter schon durchsetzen.

### Monorepo

`chat.useCustomizationsInParentRepositories` aktivieren, damit Instructions aus
Eltern-Repositories gefunden werden.

## Agent Skills

Quelle: <https://code.visualstudio.com/docs/agent-customization/agent-skills>

Ein Skill ist ein **Ordner** mit einer `SKILL.md` plus Skripten, Beispielen,
Templates und Referenzdokumenten.

### Frontmatter

Pflicht:

- `name` – Kleinbuchstaben, Ziffern, Bindestriche, max. 64 Zeichen, **muss dem
  Ordnernamen entsprechen**
- `description` – was der Skill tut **und wann er zu benutzen ist**, max. 1024
  Zeichen

Optional: `argument-hint`, `user-invocable`, `disable-model-invocation`,
`context: fork` (läuft im eigenen Subagent).

### Orte

- Projekt: `.github/skills/`, `.claude/skills/`, `.agents/skills/`
- Persönlich: `~/.copilot/skills/`, `~/.claude/skills/`, `~/.agents/skills/`
- Zusätzlich über `chat.agentSkillsLocations`

### Progressive Disclosure (der eigentliche Trick)

Drei Stufen, damit viele Skills den Kontext nicht sprengen:

1. **Discovery** – nur Frontmatter (name/description) wird gelesen
2. **Instructions** – der Body wird erst geladen, wenn der Skill greift
3. **Resources** – referenzierte Dateien erst, wenn die Instructions sie brauchen

### Skills vs. der Rest

| Kriterium   | Agent Skills                     | Custom Instructions      | Prompt Files      | Custom Agents        |
| ----------- | -------------------------------- | ------------------------ | ----------------- | -------------------- |
| Portabilität | VS Code, Copilot CLI, Cloud-Agent | VS Code, GitHub.com      | **nur VS Code**   | projektspezifisch    |
| Inhalt      | Instructions + Skripte + Dateien | nur Text                 | wiederverwendbare Prompts | ganze Agent-Definition |
| Reichweite  | task-spezifisch, on demand       | immer oder per Muster    | eine Konversation | eigenes Reasoning    |

> ⚠️ **Diese Portabilitäts-Zeile ist für unseren Vortrag unbrauchbar.**
> Copilot CLI und Cloud-Agent dürfen in der Firma nicht benutzt werden und
> werden deshalb nicht erwähnt. Das Argument für Skills ist bei uns die
> **dreistufige Ladung** (Tokenersparnis, siehe oben) und dass Skills Skripte
> und Dateien mitbringen können.

### Steuerung der Auslösung

| Konfiguration                    | im `/`-Menü | lädt automatisch | wofür               |
| -------------------------------- | ----------- | ---------------- | ------------------- |
| Default                          | ja          | ja               | Allzweck            |
| `user-invocable: false`          | nein        | ja               | Hintergrundwissen   |
| `disable-model-invocation: true` | ja          | nein             | nur auf Abruf       |

## Custom Agents

Quelle: <https://code.visualstudio.com/docs/agent-customization/custom-agents>

**Hießen früher Chat Modes.** Migration: `.chatmode.md` → `.agent.md` umbenennen.

### Frontmatter

| Feld                       | Zweck                                              |
| -------------------------- | -------------------------------------------------- |
| `name`                     | Bezeichner, sonst Dateiname                        |
| `description`              | Platzhaltertext im Chat-Input                      |
| `tools`                    | erlaubte Tools (built-in, MCP, Extension)          |
| `model`                    | Modell, String oder priorisierte Liste             |
| `agents`                   | verfügbare Subagents, `*` für alle, `[]` für keine |
| `user-invocable`           | im Dropdown sichtbar (Default true)                |
| `disable-model-invocation` | verhindert Aufruf als Subagent (Default false)     |
| `handoffs`                 | geführte Übergaben an andere Agents                |

Im Body: Markdown-Instructions, Tools referenzierbar über `#tool:<tool-name>`.

### Orte

- Workspace: `.github/agents/`
- Workspace (Claude-Format): `.claude/agents/`
- User: `~/.copilot/agents/`
- Zusätzlich über `chat.agentFilesLocations`

### Wann lohnt sich das

Laut Doku: wenn du **Tool-Beschränkungen je Rolle** brauchst. Beispiel aus der
Doku: ein Planungs-Agent bekommt nur Lese-Tools, damit er nicht versehentlich
Code ändert. Prinzip der geringsten Rechte.

Weitere Gründe: konsistente Spezial-Instructions über Sessions hinweg,
mehrstufige Workflows über `handoffs`, Wiederverwendung als Subagent.

### Handoffs

```yaml
handoffs:
  - label: "Button-Text"
    agent: ziel-agent-name
    prompt: "Text, der gesendet wird"
    send: false
```

Beispiel-Workflow aus der Doku: Planning → Implementation → Code Review.

## Plan-Agent

Quelle: <https://code.visualstudio.com/docs/agents/planning>

- Aufruf: Plan im Agents-Dropdown, oder `/plan <Aufgabe>` im Chat
- Erzeugt: High-Level-Zusammenfassung, Implementierungsschritte,
  Verifikationsschritte
- Der Plan landet in **Session-Memory**: `/memories/session/plan.md`, sichtbar
  über den Command **Chat: Show Memory Files**
- **Gotcha:** "Session memory is cleared when the conversation ends" – der Plan
  ist nach der Session weg. Perfekter Demo-Moment.
- Danach: iterieren per Folge-Prompts, dann Implementierung starten – wahlweise
  in derselben Session oder über eine neue Copilot-CLI-Session im Hintergrund
  (legt einen Git-Worktree an)
- Anpassbar: eigene Planungs-Agents, Default-Modell per Setting, zusätzliche
  Tools (experimentell)

## Kontext

Quelle: <https://code.visualstudio.com/docs/agents/concepts/context>

Kontext wird aus sieben Schichten zusammengesetzt:

1. System-Instructions
2. Customizations (Agents, Skills, Instructions)
3. deine Nachricht
4. Konversationsverlauf
5. impliziter Kontext (aktive Datei, Selektion, Fehler, Git-Status)
6. explizite Referenzen (`#`)
7. Tool-Ausgaben

> "Everything outside of it is invisible to the model."

**#-Referenzen:** `#file`, `#selection`, `#codebase`, `#changes`,
`#terminalSelection`, `#problems`, `#fetch <url>`

**Sessions:** "Each session starts fresh, so don't reuse a single conversation
for unrelated tasks." Für Regeln, die überdauern sollen, Custom Instructions
benutzen statt sie in den Chat zu schreiben – sie sind in jedem Request dabei.

**Bedienung:** `#` im Eingabefeld tippt die Liste auf. Im Kontext-Picker hält
die Pfeil-rechts-Taste den Picker offen, während man Kontext anhängt. Im Editor:
Rechtsklick auf Selektion → Copilot → Add Selection to Chat.

## Prompting

Quelle: <https://code.visualstudio.com/docs/copilot/chat/prompt-crafting>

- **Konkret sein** bei Input, Output und Constraints. Sprache, Frameworks,
  Libraries nennen. Beispiel aus der Doku: "Write a TypeScript function that
  validates email addresses. Return true for valid addresses, false otherwise.
  Don't use regex."
- **Aufgaben zerlegen** statt ein ganzes Feature am Stück zu verlangen
- **Erwartetes Ergebnis mitgeben** – Testfälle, erwartete Resultate,
  Akzeptanzkriterien. Wörtlich:

  > "Provide test cases, expected results, or acceptance criteria so the AI can
  > verify its own work. This step is one of the highest-leverage things you can
  > do."

- **Vage Sprache vermeiden.** Nicht "mach das besser", sondern "reduziere die
  Zeitkomplexität" oder "füge Null-Prüfungen hinzu"
- **Nachsteuern statt neu schreiben** – Folge-Prompt, wenn die Richtung nicht
  stimmt
- **Rückfragen einfordern:** dem Modell sagen, es soll bei Unklarheit nachfragen
  statt zu raten
- **Parallelisieren**, z.B. bei unabhängigen Recherchen

## GitHub Best Practices

Quelle: <https://docs.github.com/en/copilot/get-started/best-practices>

Wofür Copilot gut ist: Tests und repetitiver Code, Debugging und Syntaxfehler,
Code erklären und kommentieren, reguläre Ausdrücke.

Wofür nicht: Nicht-Coding-Fragen, und als Ersatz für die eigene Expertise –
"you are in charge, and Copilot is a powerful tool at your service".

**Inline-Vorschläge** für: Snippets, Variablennamen und Funktionen beim
Schreiben, repetitiven Code, Code aus Kommentaren, TDD.
**Chat** für: Fragen zum Code, größere Codeabschnitte plus Iteration,
Code-Reviews.

Output validieren: Code verstehen, bevor man ihn übernimmt (Erklärung anfordern);
auf Funktion, Sicherheit, Lesbarkeit und Wartbarkeit prüfen; Linting, Code
Scanning und IP Scanning einsetzen.

Bessere Antworten: relevante Dateien offen, irrelevante zu; unbrauchbare
Requests löschen oder neu anfangen; umformulieren; mehrere Vorschläge ansehen;
Feedback per Daumen geben.

## Fertige Beispiele

<https://github.com/github/awesome-copilot> – community-kuratierte Sammlung von
Agents, Instructions, Skills, Hooks, Workflows und Plugins. ~37k Sterne.
Kategorien: Agents (mit MCP-Anbindung), Instructions (nach Dateimuster),
Skills, Plugins, Cookbook. Installation über die Copilot CLI:

```
copilot plugin install <plugin-name>@awesome-copilot
```

Website mit Volltextsuche und Learning Hub: awesome-copilot.github.com

> Guter Startpunkt-Verweis für Teil 3, damit niemand bei null anfängt.
