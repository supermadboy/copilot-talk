# Neue Features – Stand 31.07.2026

Aktuelle VS-Code-Version bei Recherche: **1.129.1**

## Das Release-Tempo (Material für Teil 1)

| Version | Datum      |
| ------- | ---------- |
| 1.128   | 08.07.2026 |
| 1.129   | 15.07.2026 |
| 1.129.1 | 17.07.2026 |

Der Juni-Changelog von GitHub deckt 1.123–1.127 ab. Das ist das
Aktualitätsargument des Vortrags – und der Grund, warum jede Folie mit
Feature-Aussagen einen Stand-Marker braucht.

Primärquellen:
- <https://code.visualstudio.com/updates>
- <https://github.blog/changelog/label/copilot/>
- Juni-Sammelpost: <https://github.blog/changelog/2026-07-08-github-copilot-in-visual-studio-code-june-2026-releases/>

## Was in den Vortrag gehört

Gefiltert nach: läuft mit reinem GitHub Copilot, ist ohne Setup sichtbar,
verändert den Alltag.

### Copilot Vision – GA (1.128)

Bilder und PDFs per Drag & Drop, Paste oder Kontextmenü in den Chat. Agents
können sie über Tool-Calls auswerten. Dazu Screenshot-Kontextoptionen: ganzer
Screen oder Ausschnitt direkt in den Chat.

> **Bester Hook-Kandidat.** Screenshot eines kaputten UIs rein, Fix raus.
> 60 Sekunden, remote sehr gut sichtbar, braucht keine Erklärung vorweg.

### Agentic Browser Tools – GA (Juni)

Der Agent navigiert Seiten, inspiziert Inhalte, macht Screenshots und validiert
Web-Apps direkt in VS Code. Dazu Favoriten, History, Websuche und Permissions
für Kamera/Standort/Mikrofon. Remote-Workspace-Browsing in Public Preview
(HTTP(S) über die Remote-Verbindung geproxied).

### Parallele Sessions und Multi-Chat (Juni + 1.128)

- Agent-Sessions nebeneinander laufen lassen
- **Mehrere Chats pro Session** – Implementierung, Review, Tests, Doku getrennt
  halten; jeder Chat mit eigener History und eigener Modellwahl
- Von einem früheren Turn abzweigen, um Ansätze zu vergleichen
- Sessions gruppieren und per Drag & Drop sortieren im Agents-Window
- Subagent-Transkripte (Preview) erscheinen als read-only Peer-Chats

### Kostentransparenz (Juni)

Direkt relevant, weil das Budget begrenzt ist – siehe `modelle-und-kosten.md`.

- **Gesamtkosten pro Session**, nicht nur pro Request
- Verbrauch im GitHub-Copilot-Status-Dashboard einsehbar
- **Credit-Verbrauch je Subagent-Abschnitt** bei delegierter Arbeit

### Prompt-File-Migration zu Skills (1.129, experimentell)

Setting: `chat.customizations.promptMigration.enabled`

Konvertiert `.prompt.md` zu Skills, ausdrücklich "for cross-harness
compatibility". Workspace- und User-Prompt-Files anzeigen, gezielt migrieren.

> Zusammen mit `.chatmode.md` → `.agent.md` der stärkste
> "das-wusstet-ihr-noch-nicht"-Punkt für Vielnutzer.

### Kleinere Sachen mit Alltagswirkung

- **`!`-Präfix im Chat** (1.129): Nachricht als Terminal-Befehl ausführen
- **Gutter-Feedback**: Agent-Änderungen direkt aus dem Editor-Gutter kommentieren
- **Smarte PR-Erstellung**: Titel und Beschreibung aus dem Session-Kontext
- **Session Sync / Chronicle**: Chats mit dem GitHub-Account synchronisieren,
  Coding-History über Maschinen hinweg durchsuchen
- **Model Hover Cards**: Modellinfos und direkter Sprung in die Konfiguration
- **1M-Kontextfenster** für Anthropic- und OpenAI-Modelle
- **Autopilot**: erkennt besser, wann Arbeit fertig ist, braucht weniger
  manuelles Nachsteuern
- **Language Models Editor**: Modell-Provider aus dem Marketplace finden,
  Kontextgröße und Reasoning Effort aus einem Picker einstellen
- **Copilot Code Review** mit Agent Skills und MCP-Servern: GA für Pro, Pro+,
  Business und Enterprise

### Admin-/Firmenthemen (Material für Teil 5, wenn Markus es braucht)

- **Managed Copilot Settings**: Device Management unter Windows/macOS, plus
  dateibasierte Konfiguration per JSON für nicht verwaltete Maschinen
- **OpenTelemetry-Steuerung**: Organisation kann den Collector vorgeben, ohne
  dass jeder Entwickler `OTEL_*`-Variablen setzt
- **Zwei Stunden Verzögerung** vor dem Auto-Update neu veröffentlichter
  Extensions – Sicherheitspuffer
- **Modelle**: neue GA-Modelle sind bei Business und Enterprise jetzt
  standardmäßig aktiv, kein manuelles Opt-in mehr pro Modell
- **GitHub-Enterprise-Authentifizierung** für Copilot (1.129)
- **MCP OAuth**: vorregistrierte Client-ID mit Secret Storage

## Was NICHT in den Vortrag gehört

Firmenregel: nur GitHub Copilot. Diese Neuerungen fallen damit raus:

- **Agent Host mit Claude-/Codex-Harness** – der Agent Host selbst ist neutrale
  Infrastruktur und kann den Copilot-Harness fahren, aber die
  Multi-Harness-Story ist raus. Zusätzlich: experimentell hinter
  `chat.agentHost.enabled`, für eine Live-Demo in einer Woche zu riskant
- **BYOK-Modelle** (`chat.agentHost.byokModels.enabled`,
  `chat.byokUtilityModelDefault`, eigene Sampling-Parameter)
- **Offizielle Ollama-Extension**
- **Modern UI Preview** (`workbench.experimental.modernUI`) – hübsch, aber
  thematisch daneben und lenkt in der Demo ab

## Offene Punkte zum Nachprüfen

- [ ] Ist 1.130 vor dem Vortrag erschienen? Wenn ja: Teil 1 nachziehen
- [ ] Läuft die Prompt-File-Migration in der installierten Version stabil genug
      für eine Live-Demo? Sonst nur auf der Folie zeigen
- [ ] Sind Browser-Tools in der Firmenumgebung nutzbar (Proxy, Policies)?
      Markus fragen, nicht raten
