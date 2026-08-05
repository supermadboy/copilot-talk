<!-- .slide: class="center-text" -->

<p class="kicker">Block 1</p>

## Was gerade passiert

<p class="big muted">Drei Wochen. Fünf Releases.</p>

Note:
Zeit: 0:06 — Block 1 läuft bis 0:09.

**Kurz und locker halten. Das ist Aufwärmen, nicht der Inhalt.**
Für harte 30 Minuten: auf zwei Sätze eindampfen.

Einstieg: "Ganz kurz zur Einordnung, warum ich den Vortrag überhaupt halte und
nicht einfach einen Link schicke."

---

## Das Tempo

| Version | Datum |
| --- | --- |
| 1.128 | 08.07.2026 |
| 1.129 | 15.07.2026 |
| 1.129.1 | 17.07.2026 |
| 1.130 | 22.07.2026 |
| **1.131** | **29.07.2026** |

<p class="stand">Stand: 05.08.2026</p>

Note:
Zeit: 0:06

Nicht die Versionsnummern vorlesen. Der Satz dazu:

"Ich sag das nicht, um mich abzusichern — sondern weil es ehrlich gesagt
schwierig ist, da hinterherzukommen. Ich schau da auch nicht jede Woche rein.
Deshalb: was ich euch zeige, ist der Stand von heute."

Locker bleiben. Kein Haftungsausschluss-Ton.

Wenn du einen Aufhänger brauchst: **die letzte Zeile ist eine Woche alt.**
"Und die unterste Zeile ist von letzter Woche" reicht völlig — das sitzt
besser als jede Zahl.

**Refresh-Pass ist erledigt — am Vortragstag selbst, 05.08.2026.** 1.131 ist
die aktuelle Version, 1.132 war zu dem Zeitpunkt noch nicht draußen. Die
Tabelle stimmt also.

Falls doch jemand mit 1.132 kommt: ehrlich sagen "dann ist sie heute
erschienen" — das macht den Punkt der Folie eher stärker als schwächer.

Quelle: `code.visualstudio.com/updates` und `github.com/microsoft/vscode/releases`.

---

## Drei Sachen, die was bringen

- **Vision** — gerade gesehen
- **Browser-Tools** — er testet die Web-App selbst
- **Parallele Chats** — Implementierung und Review getrennt

<p class="stand">VS Code 1.131</p>

Note:
Zeit: 0:07

Vision nur benennen, nicht wiederholen.

Browser-Tools: "Der Agent bekommt einen echten Browser in VS Code — er klickt,
tippt, liest Konsolen-Fehler, macht Screenshots. Also: er ändert was am CSS,
lädt die Seite selbst, schaut nach, korrigiert nach. Ohne euch."

Die erste Frage, die immer kommt, gleich vorwegnehmen: **eure offenen Tabs
sind privat.** Der Agent kommt an eine Seite, die ihr selbst geöffnet habt,
erst wenn ihr auf *Share with Agent* klickt.

Quelle: VS Code Docs, *Build and test web apps with browser agent tools*

Parallele Chats: mehrere Unterhaltungen in einer Session — Implementierung im
einen, Review im anderen. Jeder mit eigener History und eigenem Modell.

Abbinder: "So, das war der Neuigkeiten-Teil. Jetzt zum eigentlichen Thema."

--

## Browser-Tools: was der Agent kann

- Klicken, tippen, Dialoge wegklicken
- Konsolen-Fehler lesen, Screenshots machen
- Playwright-Code für längere Abläufe
- Eure Tabs bleiben privat bis *Share with Agent*

<p class="stand">VS Code 1.131</p>

Note:
Vertiefung. Nur bei Nachfrage.

Setting: `workbench.browser.enableChatTools`, dazu Browser-Tools im
Tools-Picker aktivieren.

Admins können Browser-Tools per Policy abschalten oder auf Domains beschränken
— **vor dem Vortrag prüfen, ob es bei uns überhaupt an ist.**
