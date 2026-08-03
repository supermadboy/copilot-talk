# VS Code: Best Practices — Abgleich mit dem Vortrag

Stand: 03.08.2026

Primärquelle: <https://code.visualstudio.com/docs/agents/best-practices>
Dazu durchgegangen: die weiterführenden Seiten, die für uns relevant sind.

---

## 1. Was der Vortrag schon abdeckt

Die Seite bestätigt die Kernaussagen — gut als zusätzlicher Beleg:

| Vortragsaussage | Bestätigt durch Abschnitt |
| --- | --- |
| Erst Plan, dann Code | *Plan First, Then Implement* |
| Akzeptanzkriterien in den Prompt | *Write Effective Prompts* — "Include expected output for verification." |
| Instructions kurz halten | *Optimize Your Project* — "Keep instruction files concise. They load on every chat interaction." |
| `applyTo` je Dateityp | *Optimize Your Project* |
| Kontext gezielt geben, `#fetch` | *Provide the Right Context* |
| Modell bewusst wählen | *Choose the Right Model* |
| Bilder in den Chat (Vision) | *Provide the Right Context* — "Add images/screenshots" |
| Workspace über mehrere Repos | *Work with Large Codebases* — "Use multi-root workspaces for clarity" |
| Neue Session bei neuem Thema | *Manage Context and Sessions* |

Der Workspace-Tipp ist damit nicht mehr nur Markus' Erfahrung, sondern offiziell
empfohlen. **Gehört auf die Folie.**

## 2. Lücken — das fehlt im Vortrag

### 2.1 Checkpoints (die wichtigste Lücke)

Quelle: <https://code.visualstudio.com/docs/chat/chat-checkpoints>

- Automatische Snapshots der betroffenen Dateien **vor jedem Chat-Request**
- Einschalten: `chat.checkpoints.enabled`
- Benutzen: im Chat über einen Request hovern → **Restore Checkpoint**
- Wiederhergestellt werden **Dateien**; der Chat-Request verschwindet dabei aus
  dem Verlauf. Danach ist **Redo** möglich
- Wörtlich: "Checkpoints are designed for quick iteration within a chat session
  and are temporary. They complement Git but don't replace it."

**Warum das in den Vortrag gehört:** Markus' Schlusssatz ist "der Agent schreibt
schneller, als ihr prüfen könnt". Checkpoints sind die eingebaute Antwort auf
genau das — und die Rückfallebene, wenn eine Demo entgleist.

### 2.2 Cheat-Sheet-Folie

Quelle: <https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet>

**`CLAUDE.md` fordert eine Cheat-Sheet-Folie — der Foliensatz hat keine.**
Es gibt eine offizielle Seite, die genau das ist.

Für uns relevante Kurzbefehle:

| Befehl | Wofür |
| --- | --- |
| `/plan` | Implementierungsplan |
| `/init` | Workspace-Instructions erzeugen |
| `/compact` | langen Verlauf zusammenfassen |
| `/fork` | Session abzweigen |
| `/clear` | neue Session |
| `/explain` `/fix` `/tests` `/doc` | die klassischen Einzelaufgaben |
| `/instructions` `/skills` `/agents` | Anpassungen konfigurieren |

Tastenkürzel (Windows/Linux):

| Aktion | Kürzel |
| --- | --- |
| Chat öffnen | `Strg+Alt+I` |
| Neue Session | `Strg+N` |
| Inline-Chat | `Strg+I` |
| Modell-Picker | `Strg+Alt+.` |
| Umbenennen mit KI | `F2` |

> ✅ **Geklärt (Markus, 03.08.2026): `/create-instructions`, mit `s`.**
> Die Cheat-Sheet-Seite nennt fälschlich `/create-instruction` im Singular —
> das ist ein Fehler in der Doku. Im Vortrag und im Handout steht der Plural.

### 2.3 Credits sparen — konkrete Hebel

Quelle: <https://code.visualstudio.com/docs/agents/guides/optimize-usage>

Der Vortrag sagt "es kostet jetzt", nennt aber keine Hebel. Diese hier sind
konkret genug für eine Folie:

- **Neue Session bei Themenwechsel** (`Strg+N`) statt alles in einen Chat
- **`/compact`** fasst einen langen Verlauf zusammen und gibt Kontextfenster frei
- **`/fork`** zweigt ab, statt neu anzufangen — Verlauf bleibt erhalten
- **Nicht gebrauchte Tools abschalten** über *Configure Tools* im Chat-Eingabefeld
- **`.gitignore`, `files.exclude`, `search.exclude`** halten generierte Dateien
  und Build-Ausgaben aus dem Index
- **Thinking Effort auf Default lassen** — adaptives Reasoning ist standardmäßig an
- **Kosten sehen:** über eine Antwort hovern → Kosten pro Request. Context-Window-
  Anzeige im Eingabefeld → Kosten der ganzen Session

### 2.4 Sandbox — direkt relevant, weil wir unter WSL entwickeln

Quelle: <https://code.visualstudio.com/docs/agents/security>

Wörtlich: "On macOS and Linux, including WSL2 environments, enable
`chat.agent.sandbox.enabled` … to restrict file system and network access for
agent-executed commands."

**Nicht übernommen.** Markus hat die Sandbox selbst deaktiviert (03.08.2026) —
also weder als Empfehlung im Vortrag noch im Handout. Wenn jemand fragt:
"gibt's, hab ich aus."

### 2.5 Prompt Injection

Quelle: <https://code.visualstudio.com/docs/agents/security>

- Risiko: "malicious content in tool outputs influences the AI's behavior" —
  eine abgerufene Seite enthält z.B. `IGNORE PREVIOUS INSTRUCTIONS`
- **Betrifft `#fetch` direkt**, und das zeigt Markus live in Demo 6
- Weitere Empfehlungen: fremde Projekte im Restricted Mode öffnen (Agents sind
  dort aus), Änderungen im Diff-Editor prüfen, Auto-Approval für sensible
  Dateien wie `.env` per Glob ausschließen, Rechte **je Session** vergeben statt
  je Workspace, MCP-Server vor dem Vertrauen prüfen

Ein Satz bei `#fetch` reicht. Nicht zum eigenen Block aufblasen.

## 3. Bewusst nicht übernommen

- **Background- und Cloud-Agents**, Copilot CLI — in der Firma nicht erlaubt
  (Rahmenbedingung 1)
- **BYOK** — dito
- **`/chronicle:cost-tips`** — sieht nach einem plugin-spezifischen Befehl aus,
  nicht nach Kernfunktionalität. Vor Erwähnung selbst prüfen
- **Subagents, Hooks, MCP-Details** — würden den Rahmen sprengen, stehen schon
  als Zeile in der Landkarten-Tabelle

## 4. Offene Prüfpunkte

- [ ] `/create-instruction` oder `/create-instructions`? Selbst testen
- [ ] Ist `chat.checkpoints.enabled` standardmäßig an oder aus?
- [ ] `chat.agent.sandbox.enabled` unter unserer WSL-Einrichtung ausprobieren
- [ ] Sitzt die Kostenanzeige da, wo die Doku sie beschreibt?
