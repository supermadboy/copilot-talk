# ECC / "Everything Claude Code" — das Hackathon-Repo

Stand: 03.08.2026

Zweites Beispiel neben `awesome-copilot` in Teil 3. Angefragt von Markus.

---

## ⚠️ Konflikt mit Rahmenbedingung 1 — und wie er sich auflöst

`CLAUDE.md` verbietet Inhalte zu Claude Code, Codex und Cursor, auch als
Vergleich. Das Repo heißt nach Claude Code und unterstützt genau diese Tools.

**Auflösung:** Das Repo enthält eine **fertige, echte
`.github/copilot-instructions.md` plus `.github/prompts/` für GitHub Copilot.**
Genau die kann Markus zeigen — als Copilot-Artefakt, ohne über Claude Code als
Werkzeug zu reden. Die Herkunftsgeschichte ("hat einen Anthropic-Hackathon
gewonnen") ist dann eine Einordnung in einem Satz, kein Toolvergleich.

▸ **Markus entscheidet**, ob dieser eine Satz fällt. Wenn ja, gehört
Rahmenbedingung 1 in `CLAUDE.md` um eine Ausnahme ergänzt, sonst widerspricht
sich das Projekt selbst.

---

## Was belegt ist

### Primärquelle: das Repo

<https://github.com/affaan-m/ECC> (auch erreichbar über
`/affaan-m/everything-claude-code`)

Stand 03.08.2026, direkt aus dem README:

| Fakt      | Wert                     |
| --------- | ------------------------ |
| Sterne    | ~237.000                 |
| Lizenz    | MIT                      |
| Agents    | 67                       |
| Skills    | 281                      |
| Commands  | 94                       |

**Der Copilot-Teil, wörtlich aus dem README:**

> "GitHub Copilot support is already included in this repository.
> `.github/copilot-instructions.md` provides the instruction layer,
> `.github/prompts/` contains the reusable `/plan`, `/tdd`, `/security-review`,
> `/build-fix`, and `/refactor` prompts, and `.vscode/settings.json` enables
> `chat.promptFiles`."

Die Plattform-Tabelle im README führt GitHub Copilot als unterstütztes Harness
mit "Checked-in instruction layer" — ohne Hook-Runtime.

### Nur Sekundärquellen: die Hackathon-Geschichte

Autor ist **Affaan Mustafa**. Berichtet wird: Sieg beim Anthropic × Forum
Ventures Hackathon in NYC, in acht Stunden gebaut, 15.000 $ in API-Credits,
später unter MIT veröffentlicht.

▸ Quellen: <https://medium.com/@joe.njenga/everything-claude-code-the-repo-that-won-anthropic-hackathon-33b040ba62f3>
· <https://eu.36kr.com/en/p/3823966768943239>

**Das steht so nicht im Repo und nicht auf einer Anthropic-Seite.** Wenn Markus
es erwähnt, dann als "soweit ich weiß" — nicht als belegter Fakt auf einer
Folie.

---

## Achtung bei den Zahlen

Die Zahlen wandern schnell und die Blogs sind alle veraltet:

| Quelle                    | Sterne | Agents | Skills | Commands |
| ------------------------- | ------ | ------ | ------ | -------- |
| Blogs Jan–Jul 2026        | 100k–177k | 47–48 | 181–183 | 79    |
| Repo-README am 03.08.2026 | ~237k  | 67     | 281    | 94       |

▸ **Beim Refresh-Pass am Vortag neu ablesen.** Und: das ist selbst ein netter
Beleg für Teil 1 — jede Zahl aus einem halben Jahr alten Blogpost ist falsch.

---

## Wie es in den Vortrag passt

Als **Kontrastpaar** zu `awesome-copilot` in Teil 3:

- `awesome-copilot` — kuratierte Einzelteile zum Rauspicken
- ECC — ein durchgebautes Gesamtsystem, an dem man sieht, wie weit man treiben
  *kann*

Die Pointe für unser Publikum ist nicht "installiert das". Es ist: **schaut in
die `.github/copilot-instructions.md` und die `.github/prompts/` rein und lest,
wie die geschrieben sind.** Und dann nehmt zwei Zeilen davon mit, nicht 281.

Das trägt gleichzeitig Markus' Kernbotschaft: nicht alles übernehmen, sondern
das Muster verstehen.

---

## Vor dem Vortrag prüfen

- [ ] Repo öffnen und die `.github/copilot-instructions.md` **selbst lesen** —
      taugt sie als Positivbeispiel oder ist sie zu lang für unsere eigene
      "kurz halten"-Regel? (Bei 281 Skills gut möglich, dass sie das Gegenteil
      belegt — dann als Warnbeispiel verwenden, das ist genauso brauchbar)
- [ ] Sterne und Zahlen neu ablesen
- [ ] Entscheiden, ob die Hackathon-Herkunft überhaupt erwähnt wird
