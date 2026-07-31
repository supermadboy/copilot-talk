# Modelle und Kosten

Stand: 31.07.2026

Primärquellen:
- <https://docs.github.com/en/copilot/reference/ai-models/choosing-the-right-ai-model-for-your-task>
- <https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>

## Abrechnung: tokenbasierte AI Credits

**Seit 01.06.2026** sind die meisten Nutzer auf tokenbasierte **AI Credits**
umgestellt. Vorher: "Premium Requests" mit Modell-Multiplikatoren.

- **1 AI Credit = 0,01 $**
- Abgerechnet wird nach tatsächlichem Tokenverbrauch: Input, Output, gecachte
  Tokens
- Begründung von GitHub: agentische Workflows verbrauchen ungleich mehr
  Inferenz als klassischer Chat, das alte Request-Modell trug das nicht mehr

### Inklusiv-Budget

**Business: 30 $/User/Monat, aufstockbar.** Von Markus bestätigt (31.07.2026) –
das ist der reguläre Business-Preis, kein befristeter Aktionspreis.

> Ältere Sekundärquellen nennen für Business teils 19 $ regulär mit einer
> Aktion auf 30 $. Das ist überholt. Im Zweifel gilt, was Markus sagt – die
> Vertragslage der Firma wird nicht aus Webquellen abgeleitet.

### Altes Modell (nur noch Restbestand)

Multiplikatoren wie 27× für Claude Opus und 9× für Claude Sonnet gelten nur noch
für Copilot Pro und Pro+ mit **bestehendem Jahresvertrag**, die nach dem
01.06.2026 im alten Request-Modell geblieben sind. Für Business/Enterprise
irrelevant – nicht auf die Folie, sonst verwirrt es nur.

## Verfügbare Modelle

**OpenAI:** GPT-5 mini, GPT-5.3-Codex, GPT-5.4, GPT-5.4 mini, GPT-5.5,
GPT-5.6 Luna, GPT-5.6 Sol, GPT-5.6 Terra

**Anthropic:** Claude Fable 5, Claude Haiku 4.5, Claude Opus 4.7, Claude Opus
4.8, Claude Opus 4.8 (Fast Mode, Preview), Claude Opus 5, Claude Sonnet 4.5,
Claude Sonnet 4.6, Claude Sonnet 5

**Google:** Gemini 2.5 Pro, Gemini 3 Flash, Gemini 3.1 Pro, Gemini 3.5 Flash,
Gemini 3.6 Flash

**Weitere:** MAI-Code-1-Flash, Grok 4.5, Qwen2.5, Raptor mini, Kimi K2.7 Code

> Diese Liste ändert sich laufend. Vor dem Vortrag gegenchecken – aber nicht als
> Liste auf eine Folie packen. Die Aussage ist die Zuordnung, nicht die Aufzählung.

## Task → Modell (offizielle Empfehlung)

| Aufgabe                              | Empfohlen                                            |
| ------------------------------------ | ---------------------------------------------------- |
| Allzweck Coding und Schreiben        | GPT-5 mini, GPT-5.3-Codex, MAI-Code-1-Flash, Raptor mini |
| Schnelle, einfache, repetitive Tasks | Claude Haiku 4.5, Gemini-3-Flash-Varianten, MAI-Code-1-Flash |
| Tiefes Reasoning und Debugging       | GPT-5.5, Claude Sonnet 4.6, Claude-Opus-Modelle, Gemini 3.1 Pro |
| Lange autonome Arbeit                | Claude Fable 5                                       |
| Visuelle Eingaben (Diagramme, Screenshots) | GPT-5 mini, Claude Sonnet 4.6, Gemini 3.1 Pro   |

## `Auto`

Die Doku empfiehlt die **Auto**-Option: wählt automatisch das für die Aufgabe
passende Modell und bringt bei zahlenden Plänen einen **Rabatt** mit.

Das ist die praktische Kernaussage für Teil 2.1:

- **Auto** als Default – günstig und für das meiste gut genug
- **bewusst umschalten**, wenn die Aufgabe es rechtfertigt: schweres Debugging
  hoch, stumpfe Fleißarbeit runter
- Bei Tokenabrechnung ist jedes Hochschalten eine **Geldentscheidung**, nicht nur
  eine Qualitätsentscheidung

## Wo man den Verbrauch sieht (seit Juni 2026)

- Gesamtkosten über einen ganzen Chat, nicht nur pro Request
- GitHub-Copilot-Status-Dashboard
- Credit-Verbrauch je Subagent-Abschnitt bei delegierter Arbeit

> Diese drei Stellen live zeigen. Das ist der Punkt, an dem die Modellwahl von
> abstrakt zu konkret wird.

## Kostentreiber (Ableitung, nicht aus der Doku zitiert)

Ergibt sich aus der Tokenabrechnung – als Faustregeln formulieren, nicht als
Zahlen behaupten:

- großes Kontextfenster vollmachen kostet, auch wenn nichts passiert
- lange Sessions schleppen die ganze History mit
- parallele Agents multiplizieren den Verbrauch
- Reasoning-Modelle erzeugen mehr Output-Tokens
- gecachte Tokens sind billiger – ein Argument für stabile Instructions statt
  wechselnder Prompt-Präambeln
