# Copilot: VS Code vs. JetBrains/IntelliJ

Stand: 31.07.2026 · Material für Teil 4 (3 min)

**Botschaft: ehrlich, nicht Werbung.** Im Publikum sitzen wahrscheinlich
IntelliJ-Nutzer. Ein "VS Code ist besser"-Vortrag verliert die sofort.

## Die Kurzfassung

JetBrains hat 2026 massiv aufgeholt. Der Abstand ist kein Graben mehr, sondern
ein **zeitlicher Versatz von etwa 3–6 Monaten**.

## Was JetBrains 2026 dazubekommen hat

Quellen (GitHub Changelog):
- <https://github.blog/changelog/2026-03-11-major-agentic-capabilities-improvements-in-github-copilot-for-jetbrains-ides/>
- <https://github.blog/changelog/2026-04-24-inline-agent-mode-in-preview-and-more-in-github-copilot-for-jetbrains-ides/>
- <https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/>

| Feature                              | Status in JetBrains       |
| ------------------------------------ | ------------------------- |
| Agent Mode                           | GA (seit März 2026)       |
| Custom Agents, Subagents, Plan-Agent | **GA**                    |
| `AGENTS.md` / `CLAUDE.md`            | unterstützt, inkl. Generierung einer initialen `AGENTS.md` |
| Agent Skills                         | Public Preview            |
| Inline Agent Mode                    | Public Preview            |
| Copilot CLI                          | seit Juni 2026            |
| MCP                                  | inkl. Auto-Approve        |
| Agent Hooks                          | Preview                   |

Der Plugin-Umfang hängt an der **Plugin-Version**, nicht an der konkreten
JetBrains-IDE. Gilt also für IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider,
CLion, DataGrip gleichermaßen.

## Wo VS Code weiter vorne liegt

- **Erstzugang.** Neue Features landen zuerst hier, und das im Wochenrhythmus
  (1.128 → 1.129 → 1.129.1 innerhalb von neun Tagen). Das ist der eigentliche
  Unterschied, nicht eine einzelne Funktion
- **Agents Window** mit parallelen Sessions, Multi-Chat und Session-Gruppierung
- **Agentic Browser Tools** (GA)
- **Next Edit Suggestions** – laut GitHub-Doku nur VS Code, Xcode und Eclipse
- **Breite der Customization-Oberfläche**: Hooks, Agent Plugins, Skills mit
  Progressive Disclosure, Prompt-File-Migration

## Was das praktisch heißt

Als Folienaussage, drei Zeilen:

1. Wer in IntelliJ arbeitet, muss **nicht** wechseln – die Kernsachen aus
   Teil 2 und 3 (Plan-Agent, Instructions, Skills, Custom Agents) gibt es dort
2. Wer neue Features früh sehen will, braucht VS Code
3. **Instructions, `AGENTS.md` und Skills sind portabel** – die Arbeit aus
   Teil 3 ist in beiden IDEs nutzbar. Prompt Files sind es nicht

Punkt 3 ist der eigentliche Payoff: Es macht Teil 3 auch für die
IntelliJ-Fraktion relevant, statt sie 8 Minuten abzuhängen.

## Nicht behaupten

- Keine Latenz- oder Qualitätsvergleiche. Dazu gibt es nur Sekundärquellen mit
  Marketing-Interesse (Vergleichsseiten von Konkurrenzprodukten)
- Nichts über JetBrains AI Assistant / Junie – das ist ein anderes Produkt und
  fällt unter die Firmenregel "nur Copilot"
- Keine Aussage darüber, was bei euch im Haus im Einsatz ist. Kommt von Markus
