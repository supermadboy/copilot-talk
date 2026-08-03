# Instructions: `/init` und was inhaltlich reingehört

Stand: 03.08.2026

Ergänzt den Instructions-Abschnitt in [offizielle-doku.md](offizielle-doku.md).
Dort steht das Formale (Dateiorte, Frontmatter, Priorität). Hier steht, **wie
man so eine Datei erzeugt und was inhaltlich drin stehen soll**.

---

## 1. Instructions generieren lassen

Quelle (primär):
<https://code.visualstudio.com/docs/agent-customization/custom-instructions>

Drei Wege, wörtlich aus der Doku:

| Weg                       | Was es tut                                                        |
| ------------------------- | ----------------------------------------------------------------- |
| `/init`                   | "Type `/init` in the chat input box and press Enter" — erzeugt workspace-weite Always-on-Instructions |
| `/create-instructions`    | "Type `/create-instructions`, followed by a description of the instructions you want to generate" — gezielt, für eine bestimmte Regel |
| Agent Customizations Editor | "In the Agent Customizations editor, select **Generate Instructions** from the dropdown" |

Was `/init` laut Doku macht: "analyze your workspace and generate always-on
custom instructions that match your coding practices and project structure."

### Was die Doku *nicht* sagt

- Ob `/init` sich anpassen lässt (eine `init.prompt.md` wird in Sekundärquellen
  erwähnt, **steht nicht in der offiziellen Doku** — nicht auf eine Folie)
- Was genau passiert, wenn schon eine `copilot-instructions.md` existiert.
  Sekundärquelle behauptet "reviewt und passt an" — **vor der Demo selbst
  ausprobieren**, nicht behaupten.

▸ Sekundärquelle für beides:
<https://bartwullems.blogspot.com/2026/02/vscodefinetune-your-ai-instructions.html>
(Blog, kein Faktenbeleg für eine Folie)

### Einordnung für den Vortrag

`/init` ist ein **Rohentwurf**, kein fertiges Ergebnis. Es sieht den Code, aber
es kennt weder eure Begründungen noch die Fallstricke beim Bauen. Genau daraus
lässt sich die Demo bauen: erst generieren lassen, dann die veredelte Fassung
danebenlegen.

---

## 2. Was inhaltlich reingehört

### GitHub-Doku: die drei Blöcke

Quelle (primär):
<https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions>

1. **Repository-Überblick** — was das Repo tut, Größe, Projekttyp, Sprachen,
   Frameworks, Ziel-Runtimes
2. **Bauen und Verifizieren** — "the sequence of steps to take to run it
   successfully" für Bootstrap, Build, Test, Run, Lint. Beispielformulierung aus
   der Doku: "always run npm install before building". Dazu ausdrücklich:
   **unerwartete Build-Probleme und ihre Workarounds dokumentieren**
3. **Aufbau und Architektur** — die wichtigsten Architekturelemente mit
   **relativen Pfaden**, plus wo die Konfigurationen für Linting, Compilation
   und Tests liegen

Harte Regel von derselben Seite: **"Instructions must not be task specific."**

Formales: natürliche Sprache in Markdown. "Whitespace between instructions is
ignored."

### VS-Code-Doku: Themen und Schreibregeln

Quelle (primär):
<https://code.visualstudio.com/docs/agent-customization/custom-instructions>

Passende Themen laut Doku: Coding-Stil und Namenskonventionen · Tech-Stack und
bevorzugte Bibliotheken · Architekturmuster · Security-Anforderungen und
Fehlerbehandlung · Dokumentationsstandards · sprachspezifische Regeln ·
Framework-Muster.

Schreibregeln, wörtlich:

> "Keep your instructions short and self-contained. Each instruction should be
> a single, simple statement"

> "Include the reasoning behind rules. When instructions explain _why_ a
> convention exists, the AI makes better decisions in edge cases"

> "Show preferred and avoided patterns with concrete code examples. The AI
> responds more effectively to examples than to abstract rules"

> "Focus on non-obvious rules. Skip conventions that standard linters or
> formatters already enforce"

Beispielstruktur aus der Doku:

```markdown
---
applyTo: "**"
---
# Project general coding standards

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Error Handling
- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information
```

---

## 3. Länge und Form

> ⚠️ **Scope beachten.** Die beiden folgenden Quellen behandeln Instructions
> **für Copilot Code Review**. Die Aussagen sind plausibel übertragbar, aber
> die Doku macht sie nicht allgemein. Auf einer Folie entsprechend einordnen
> oder weglassen.

Quellen:
<https://github.blog/ai-and-ml/github-copilot/unlocking-the-full-power-of-copilot-code-review-master-your-instructions-files/>
· <https://docs.github.com/en/copilot/tutorials/use-custom-instructions>

- "Start small and iterate. Even a single line can help guide Copilot."
- "long instructions files (over ~1,000 lines) can lead to inconsistent
  behavior" · "Limit any single instruction file to a maximum of about 1,000
  lines"
- "Shorter instruction files are more likely to be fully processed by Copilot"
- "Short, imperative rules are more effective than long paragraphs."
- Was hilft: klare Überschriften, Bullet-Listen statt Absätze, Code-Blöcke,
  explizite Direktiven ("Prefer X over Y")

### Was laut diesen Quellen nicht funktioniert

- Formatierung oder Darstellung der Antwort steuern
- vage Direktiven wie "Be more accurate" oder "Don't miss any issues"
- **externe Links** — werden nicht verfolgt
- dichte Absätze statt Listen

### Gutes/schlechtes Beispielpaar aus der GitHub-Doku

Schlecht (vage, als Fließtext):

> "When you're reviewing code, it would be good if you could try to look for
> situations where developers might have accidentally left in sensitive
> information like passwords or API keys, and also check for security issues."

Gut (knapp, strukturiert):

```markdown
## Security Critical Issues

- Check for hardcoded secrets, API keys, or credentials
- Look for SQL injection and XSS vulnerabilities
```

Und als Code-Beispielpaar:

```ts
// Prefer
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);

// Avoid
const d = new Date();
const x = users.filter(u => u.active);
```

---

## 4. Kurzfassung für die Folie

**Rein:**

1. Was das Projekt ist — Stack **mit Versionen**
2. Die Befehle zum Bauen, Testen, Linten — inklusive der Stolpersteine
3. Wo was liegt — relative Pfade zu Konfigurationen und Kernmodulen
4. Die Regeln, die man dem Code nicht ansieht — **mit Begründung und
   Code-Beispiel**

**Raus:**

1. Alles, was Linter oder Formatter schon durchsetzen
2. Taskspezifisches ("Instructions must not be task specific")
3. Vages ("sei gründlicher")
4. Externe Links

---

## Vor dem Vortrag prüfen

- [ ] `/init` im Demo-Repo einmal laufen lassen — was kommt tatsächlich raus?
- [ ] Verhalten von `/init` bei **bereits vorhandener** Instructions-Datei
      selbst testen
- [ ] `/create-instructions` einmal ausprobieren — lohnt es als Zweitdemo?
- [ ] Prüfen, ob "Agent Customizations editor" in der aktuellen Version so heißt
