<!-- .slide: class="center-text" -->

<p class="kicker">Teil 1</p>

## Was sich gerade ändert

<p class="big muted">Neun Tage. Drei Releases.</p>

Note:
Zeit: 0:05

Überleitung: "Alles, was ich euch gleich zeige, kann in vier Wochen anders
aussehen. Das ist kein Haftungsausschluss, das ist der Punkt."

---

## Das Tempo

| Version | Datum |
| --- | --- |
| 1.128 | 08.07.2026 |
| 1.129 | 15.07.2026 |
| 1.129.1 | 17.07.2026 |

<p class="stand">Stand: 31.07.2026</p>

Note:
Zeit: 0:06

Die eigentliche Aussage: **wer einmal im Jahr in die Release Notes schaut,
verpasst das meiste.** Nicht die Versionsnummern vorlesen.

Wenn zwischen heute und dem Vortrag 1.130 erschienen ist: Zeile ergänzen.
Sonst kippt genau hier die Glaubwürdigkeit.

---

## Drei Sachen, die den Alltag ändern

- **Copilot Vision** — Bilder und PDFs in den Chat *(GA)*
- **Browser-Tools** — der Agent testet die Web-App selbst *(GA)*
- **Parallele Chats** — Implementierung, Review und Tests getrennt

<p class="stand">Stand: 31.07.2026 · VS Code 1.129.1</p>

Note:
Zeit: 0:07

Vision ist schon gezeigt — nur kurz benennen, nicht wiederholen.

Browser-Tools: der Agent bekommt einen echten Browser in VS Code. Er kann
klicken, tippen, Konsolen-Fehler lesen, Screenshots machen. Der Loop
"ändern → selbst nachsehen → korrigieren" schließt sich ohne dich.
Wichtig: deine offenen Tabs sind privat, der Agent kommt erst über
*Share with Agent* ran.

Parallele Chats: mehrere Unterhaltungen in einer Session, jede mit eigener
History und eigenem Modell.

--

## Browser-Tools: was der Agent kann

- Seiten öffnen, klicken, tippen, Dialoge wegklicken
- Konsolen-Fehler lesen, Screenshots machen
- Playwright-Code ausführen für längere Abläufe
- Eure Tabs bleiben privat bis *Share with Agent*

<p class="stand">Stand: 31.07.2026 · VS Code 1.129.1</p>

Note:
Vertiefung. Setting: `workbench.browser.enableChatTools`, dazu Browser-Tools
im Tools-Picker aktivieren.

Admins können Browser-Tools per Policy abschalten oder auf Domains beschränken
— vor dem Vortrag prüfen, ob es bei uns überhaupt an ist.

---

## Und das hier kostet jetzt Geld

- Abrechnung seit 01.06.2026 **tokenbasiert** (AI Credits)
- 1 Credit = 0,01 $ · Business: 30 $ pro Monat
- Neu: **Gesamtkosten pro Session** statt pro Request
- Verbrauch je Subagent sichtbar

<p class="stand">Stand: 31.07.2026</p>

Note:
Zeit: 0:09

Das ist die Brücke zu Teil 2. Kernsatz:

**"Modellwahl war früher eine Qualitätsfrage. Jetzt ist sie auch eine
Geldfrage."**

Nicht moralisieren, nicht zum Sparen erziehen. Nur: ihr könnt jetzt sehen,
was ihr verbraucht, und das ändert die Entscheidung.

Zahlen zur Vertragslage nur nennen, soweit sie stimmen — 30 $ Business,
aufstockbar.
