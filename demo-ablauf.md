# Demo-Ablauf

Begleitdokument zu `vortrag-skript.md`. Hier steht, **was du bei jeder Demo
tatsächlich tust** — Klicks, Prompts, erwartetes Ergebnis, Fallback.

Das Skript bleibt die Quelle für das, was du *sagst*. Wenn sich hier und dort
etwas widerspricht, gewinnt das Skript und dieses Dokument wird nachgezogen.

**Lesehilfe:** `▸` = das tust du. Prompts in Codeblöcken sind zum Kopieren,
wörtlich so gemeint.

---

## Vorab: Stand des Demo-Repos

`demo-repo/` ist ein **npm-Workspace** des Vortrags-Repos — ein `npm install`
im Wurzelverzeichnis reicht für Folien und Demo zusammen. Geprüft:

```bash
npm install
npm run demo:test    # 2 Tests grün
npm run demo:build   # geht durch
npm run demo         # http://localhost:5173
```

Der eingebaute Bug ist sichtbar: die Woche hat 30h bei 40h Soll, im roten Badge
steht **`Überstunden: -10h`**. `calc()` in `src/timesheet.ts` rechnet
`total - WEEKLY_TARGET_MINUTES` ohne Untergrenze.

**Absichtlich noch nicht da:** eine `.github/copilot-instructions.md`. Die
erzeugt `/init` in Demo 7 live. Die überarbeitete Fassung, die du danebenlegst,
liegt in `demo-vorlagen/copilot-instructions-final.md`.

**Das README verrät nichts mehr.** Es stand dort ein Abschnitt "Hinweis für den
Vortrag", der den Bug in `calc()` beim Namen nannte und ankündigte, dass die
Instructions per `/init` entstehen. Beides hätte Copilot mitgelesen: bei Demo 1
hätte er die Antwort aus dem README statt aus dem Screenshot holen können, und
bei Demo 7 hätte `/init` eine Anleitung für sich selbst vorgefunden.
**Der Abschnitt ist raus.** Was das Repo absichtlich falsch macht, steht nur
noch hier.

**Voraussetzung für den Reset:** der Ausgangszustand muss committet sein.
Siehe Reset-Karte unten.

---

## Die Demos auf einen Blick

| #   | Zeit | Was                            | Repo nötig | Risiko  | Fallback              |
| --- | ---- | ------------------------------ | ---------- | ------- | --------------------- |
| 1   | 0:03 | Vision: Screenshot in den Chat | ja         | **hoch**| Screenshot + erzählen |
| 2   | 0:10 | Multi-Repo-Workspace           | nein       | niedrig | Screenshot            |
| 3   | 0:13 | Session-Kosten einblenden      | nein       | niedrig | Screenshot            |
| 4   | 0:16 | `/plan` auf echter Aufgabe     | ja         | mittel  | vorbereiteter Plan    |
| 5   | 0:19 | Chat: Show Memory Files        | nein       | niedrig | Screenshot            |
| 6   | 0:25 | `#fetch` mit URL               | nein       | mittel  | Screenshot            |
| 7   | 0:31 | `/init` erzeugt Instructions   | ja         | mittel  | fertige Datei zeigen  |
| 8   | 0:42 | awesome-copilot + ECC          | nein       | niedrig | Screenshot            |

Demo 1, 4 und 7 sind die, die den Vortrag tragen. 2, 3, 5, 8 sind Zeigen-und-
Weiter, 30 Sekunden. **Alle Demos bleiben** — gekürzt wird bei den Blöcken
ohne Demo (Teil 4, Prompt-Tipps, Credit-Hebel, Custom Agents).

---

## Demo 1 — Vision, der Hook · 0:03

> **Harte Grenze: 90 Sekunden.** Das ist der Einstieg, nicht der Inhalt.

**Was du zeigen willst:** Du beschreibst den Fehler nicht in Worten. Du ziehst
ein Bild rein und er findet die Datei.

### Ausgangszustand

- Demo-Repo läuft im Dev-Server, Seite im Browser offen
- Der Überstunden-Badge zeigt **`Überstunden: -10h`** — das ist der Bug:
  `calc()` in `src/timesheet.ts` rechnet `total - WEEKLY_TARGET_MINUTES` ohne
  Untergrenze, bei 1800 von 2400 Minuten kommt −600 raus
- Screenshot der kaputten Ansicht liegt **schon fertig** auf dem Desktop —
  nicht live abfotografieren, das kostet dich 20 der 90 Sekunden

### Ablauf

▸ Screenshot per Drag & Drop in den Chat ziehen.
▸ Prompt:

```
Was ist hier kaputt und in welcher Datei?
```

▸ Antwort abwarten. Sie sollte auf `timesheet.ts` / `calc` zeigen.
▸ Fix übernehmen, Browser neu laden, Badge zeigt jetzt `0h` oder gar nichts.

**Dein Satz danach:** Vision, seit Anfang Juli allgemein verfügbar. Der Schritt
"Fehler in Worte fassen und hoffen, dass er richtig rät" fällt weg.

### Was schiefgehen kann

| Problem                            | Reaktion                                    |
| ---------------------------------- | ------------------------------------------- |
| Er nennt die falsche Datei         | Nicht nachbessern. "Trifft nicht immer." Weiter. |
| Drag & Drop nimmt das Bild nicht an| Zweiter Versuch, dann Fallback              |
| Antwort dauert > 45 s              | Weiterreden, nicht schweigend warten        |
| Fix macht die Seite kaputt         | Nicht reparieren. Fallback-Screenshot, weiter. |

▸ **Fallback:** Screenshot aus `images/` zeigen und erzählen, was passiert wäre.

### Status

**Getestet, läuft — bleibt im Vortrag.** Die Fallback-Zeile in der Tabelle oben
gilt trotzdem: wenn es live hakt, nicht reparieren wollen.

---

## Demo 2 — Der Workspace · 0:10

**Was du zeigen willst:** Nicht Bequemlichkeit — der Agent sieht mit
`#codebase` alle Repos auf einmal.

### Ablauf

▸ **Dein eigener Arbeits-Workspace**, kein präpariertes Repo. Öffnen, Explorer
aufklappen, damit man die Repos nebeneinander sieht.

▸ Settings kurz zeigen: `chat.useCustomizationsInParentRepositories`

**Kein Prompt nötig.** Das ist eine Zeige-Demo, 30 Sekunden.

▸ Weil es ein echtes Projekt ist: vorher einmal drüberschauen, was auf dem
Share sichtbar wird — offene Tabs, Branch-Name, Git-Status.

---

## Demo 3 — Session-Kosten · 0:13

**Was du zeigen willst:** Modellwahl ist heute auch eine Geldfrage — und man
kann sie nachrechnen.

### Ablauf

▸ Kostenanzeige für die laufende Session einblenden. Neu seit Juni: Gesamtkosten
über den ganzen Chat, nicht nur pro Request, aufgeschlüsselt nach Subagent.

▸ Zahl **nicht** vorlesen als wäre sie repräsentativ — du hast bis hier erst
einen Prompt abgesetzt. Der Punkt ist, dass es die Anzeige gibt.

▸ Modellnamen nicht vorlesen. Die sind in vier Wochen falsch.

**Vor dem Vortrag prüfen:** Wo genau sitzt die Anzeige in der aktuellen
VS-Code-Version? Das hat sich zuletzt bewegt — nicht auf dem Share danach
suchen müssen.

---

## Demo 4 — `/plan` · 0:16 bis 0:19

> **Das ist die wichtigste Demo des Vortrags.** Wenn du eine probst, dann die.

**Was du zeigen willst:** Der Agent plant nicht von selbst. Und der Plan ist
zum *Korrigieren* da, nicht zum Durchwinken.

### Ausgangszustand

```bash
npm run demo:reset
```

▸ **Aus dem Wurzelverzeichnis des Vortrags-Repos**, nicht aus `demo-repo/`.
Alles liegt in einem Git-Repo, deshalb ist der Reset auf den Pfad beschränkt —
ein `git reset --hard` würde den Vortrag mit zurückwerfen.

**Entscheidung:** Nach Demo 1 ist der Overtime-Bug gefixt. Ich würde den Fix
**stehen lassen** — ein Reset vor laufendem Publikum wirft die Frage auf, was
du gerade weggeworfen hast. Reset nur, wenn Demo 1 den Stand kaputt gemacht
hat. Vor dem Vortrag einmal beides durchspielen und dich festlegen.

### Der Prompt

```
/plan Gruppiere die Einträge nach Projekt und zeige pro Projekt
eine Summe an.

Bestehende Tests müssen grün bleiben.
Keine neue Abhängigkeit.
```

Die beiden letzten Zeilen sind kein Beiwerk — das sind die Akzeptanzkriterien,
auf die du in Teil 2 bei den Prompt-Regeln zurückkommst ("Punkt drei ist der
wichtigste"). Beim Tippen kurz drauf zeigen.

### Ablauf

1. ▸ Prompt absetzen. Er geht durch den Code, stellt teilweise Rückfragen.
2. ▸ **Plan wirklich lesen und laut mitkommentieren.** Nicht scrollen und
   "sieht gut aus" sagen — dann ist die Demo wertlos.
3. ▸ **Per Folge-Prompt korrigieren** — nicht `plan.md` editieren:
   `Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary. Pass den Plan an.`
4. ▸ Erst danach implementieren lassen.

**Dein Satz dabei:** Ich korrigiere hier eine Zeile. Denselben Fehler nach der
Implementierung zu finden kostet mich zwanzig Minuten und einen Diff, den ich
nicht mehr auseinanderklamüsern will.

### Wo du korrigierst — vorher aussuchen

Der Plan sieht jedes Mal anders aus, deshalb keine feste Zeile. Realistische
Kandidaten in diesem Repo:

- Er will `calc()` umbauen statt eine zweite Funktion daneben zu setzen →
  "nein, `calc` bleibt wie es ist, die Gruppierung kommt daneben"
- Er will die Gruppierung in `main.ts` inline machen → "nach `timesheet.ts`,
  neben `projectsOf`"
- Er plant keinen Test für die neue Funktion → "Test dazu, in `format.test.ts`
  gibt es ein Muster"

▸ Beim Proben notieren, was er typischerweise vorschlägt, dann weißt du am
Vortragstag, wo du zugreifst.

**Beobachtung aus dem Probelauf (03.08.2026):** angefasst wurden `main.ts`,
`timesheet.ts` und `styles.css` — 65 Zeilen. `format.ts`, `format.test.ts` und
`package.json` blieben unberührt, beide Akzeptanzkriterien also eingehalten.

**`types.ts` war nicht dabei.** Der neue Typ landete lokal statt bei `Entry`
und `WeekSummary`. Das ist die Korrekturstelle mit dem besten Anschluss:

> "Er kann das nicht wissen — es steht nirgends. Genau dafür kommt gleich die
> `copilot-instructions.md`."

▸ Die Regel steht in `demo-vorlagen/copilot-instructions-final.md` unter
*Regeln*. Damit greift Demo 7 die Korrektur aus Demo 4 wieder auf.

### Was schiefgehen kann

| Problem                          | Reaktion                                        |
| -------------------------------- | ----------------------------------------------- |
| Er stellt drei Rückfragen        | Kurz beantworten — das ist gutes Material, nicht Störung |
| Plan ist sehr lang               | Nicht alles vorlesen. Zusammenfassung + Schritte + Prüfteil |
| Implementierung bricht die Tests | **Perfekt.** Genau hier zeigst du "ich führe die Tests selbst aus" (0:21) |
| Implementierung dauert zu lang   | Abbrechen, Ergebnis erzählen, weiter zu Memory   |

▸ **Fallback:** Vorbereiteten Plan als Markdown-Datei offen halten und den
zeigen. Der Plan-Text ist das, was die Leute sehen sollen, nicht der Weg dahin.

### Wichtig für 0:19

Nach der Demo kommt der Memory-Block, und der hängt an dieser Demo dran: *"Der
Plan von eben liegt nicht im Repo."* Also **nicht** vorher den Chat schließen.

---

## Demo 5 — Memory Files · 0:19

**Was du zeigen willst:** Drei Ebenen, und von der User-Ebene werden die ersten
200 Zeilen in jeden Chat geladen.

### Ablauf

▸ Command Palette → **Chat: Show Memory Files**
▸ Alle drei Ebenen zeigen. Session enthält den Plan von Demo 4
(`/memories/session/plan.md`) — deshalb der Chat von eben noch offen.

▸ Dazusagen: Preview, standardmäßig **aus**, einzelne Einträge nicht löschbar
(nur alles auf einmal mit *Chat: Clear All Memory Files*).

### Vor dem Vortrag

Memory ist bei uns **freigeschaltet** (bestätigt 03.08.2026) — die Demo läuft
über alle drei Ebenen, kein Vorbehalt nötig.

- [ ] **User-Memory-Datei vorher durchsehen.** Da steht möglicherweise Zeug aus
      echten Projekten drin, das auf dem Share landet

---

## Demo 6 — `#fetch` · 0:25

**Was du zeigen willst:** Das kennen die wenigsten. Löst das Problem, dass das
Modell eine API-Version von vor zwei Jahren kennt.

### Ablauf

▸ Prompt mit `#fetch` und einer URL auf eine Doku-Seite, die neuer ist als
jedes Trainingswissen. Naheliegend: die VS Code Release Notes zur aktuellen
Version.

```
#fetch https://code.visualstudio.com/updates
Was ist in dieser Version neu, in drei Stichpunkten?
```

Das ist gleichzeitig ein netter Rückbezug auf Teil 1 — du hast dort behauptet,
dass alles schnell veraltet, und holst es hier live rein.

▸ **URL vorher testen.** `#fetch` scheitert an Seiten, die viel JavaScript
brauchen oder Bot-Schutz haben.

▸ **Fallback:** Screenshot.

---

## Demo 7 — `/init` · 0:31 bis 0:33

> Nach `/plan` die zweitwichtigste Demo. Sie ist der Beweis für "ihr müsst das
> nicht von Hand schreiben" — und gleichzeitig für "der Entwurf reicht nicht".

**Was du zeigen willst:** Zwei Dinge nacheinander. Erst: es geht automatisch.
Dann: und trotzdem musst du ran. Der Kontrast ist die Demo, nicht der Befehl.

### Ausgangszustand

Das Demo-Repo hat im Ausgangszustand **noch keine**
`.github/copilot-instructions.md` — sonst gibt es nichts zu erzeugen.

Was du daneben brauchst: **deine überarbeitete Fassung**. Die liegt fertig in
`demo-vorlagen/copilot-instructions-final.md` — bewusst **außerhalb** von
`demo-repo/`, damit `/init` sie nicht sieht und daraus abschreibt.

▸ Vorher lesen und auf dein Empfinden anpassen. Das ist dein Beispiel, nicht
meins.

### Ablauf

▸ Im Chat:

```
/init
```

▸ Laufen lassen, entstandene Datei aufmachen, **kurz durchscrollen**. Nicht
vorlesen.

**Dein Satz:** Er hat den Code gelesen. Stack, Struktur, Konventionen — das,
was man sehen kann.

▸ **Jetzt die vorbereitete Fassung daneben aufmachen.** Split-View, beide
sichtbar.

**Dein Satz:** Und das ist, was daraus geworden ist. Der Unterschied sind zwei
Sachen, die er nicht wissen konnte: die Begründungen, und die Stolpersteine
beim Bauen.

▸ **Auf genau zwei Stellen zeigen**, nicht auf alle:

1. eine Regel **mit Begründung** ("…, weil sich Rundungsfehler aufsummieren")
2. die Zeile **"führe Tests und Linter nicht selbst aus"** — die ist der
   Rückbezug auf Teil 2 und die kennt `/init` garantiert nicht

### Was schiefgehen kann

| Problem                             | Reaktion                                     |
| ----------------------------------- | -------------------------------------------- |
| `/init` dauert lang                 | Weiterreden — die vier Blöcke aus 0:31 passen genau in die Wartezeit |
| Ergebnis ist erstaunlich gut        | Umso besser: "und trotzdem fehlen die Begründungen" |
| Ergebnis ist Müll                   | Auch gut: "deshalb Entwurf, nicht Ergebnis"   |
| `/init` gibt es nicht mehr / heißt anders | Beim Refresh-Pass prüfen. Alternative: `/create-instructions` |

▸ **Fallback:** Beide Dateien nebeneinander zeigen und erzählen. Die
Gegenüberstellung ist der Inhalt, das Erzeugen nur die Verpackung.

### Zweitdemo, wenn Zeit ist

`/create-instructions` mit einer Beschreibung — für den Fall, dass man **eine
bestimmte** Regel will statt des Rundumschlags. 20 Sekunden. Vorher testen.

### Vor dem Vortrag testen

- [ ] Was macht `/init`, wenn die Datei **schon existiert**? Die Doku sagt es
      nicht, Blogs behaupten "wird angepasst" — selbst ausprobieren
- [ ] Wie lange dauert es im Demo-Repo?
- [ ] Überarbeitete Fassung schreiben (das ist gleichzeitig das
      Anschauungsbeispiel aus `CLAUDE.md`)

---

## Demo 8 — awesome-copilot und ECC · 0:42

**Was du zeigen willst:** Zwei Extreme, dieselbe Botschaft — lesen, nicht
übernehmen.

### Ablauf

▸ **Nicht** die Sammlungen als Ganzes zeigen. Das erschlägt und danach macht
niemand was.

**`github/awesome-copilot`** — zwei bis drei konkrete Beispiele, die zu unserem
Stack passen, direkt aufmachen. Auf das *Wie geschrieben* zeigen, nicht auf die
Menge.

- [ ] Beispiel 1: ______
- [ ] Beispiel 2: ______
- [ ] Beispiel 3: ______

**`affaan-m/ECC`** — direkt in `.github/copilot-instructions.md` und
`.github/prompts/` springen. Da liegen fertige `/plan`, `/tdd`,
`/security-review`, `/build-fix`, `/refactor`.

▸ **Als Tabs vorher öffnen**, jeweils schon auf der richtigen Datei. Nicht auf
dem Share durch zwei fremde Repos navigieren.

▸ Zahlen (67 Agents, 281 Skills, 94 Commands, ~237k Sterne) sind **Stand
03.08.2026** — am Vortag neu ablesen.

### Offen

- [ ] Fällt der Satz zur Hackathon-Herkunft? Siehe
      `research/ecc-hackathon-repo.md` — die Geschichte ist nur über Blogs
      belegt, und das Repo ist nach einem Tool benannt, das wir nicht benutzen
      dürfen. Der Copilot-Teil des Repos ist davon unberührt und zeigbar.

---

## Reset-Karte

Für zwischendurch, wenn eine Demo den Stand zerlegt hat:

```bash
npm run demo:reset
```

▸ **Aus dem Repo-Wurzelverzeichnis.** Terminal-Tab dafür **vorher offen**
haben, im richtigen Verzeichnis. Sonst tippst du das vor Publikum.

▸ Dahinter steckt `git checkout HEAD -- demo-repo && git clean -fd demo-repo`.
Ohne `-x` bleibt `node_modules/` stehen — der Dev-Server läuft weiter, kein
`npm install` nötig.

▸ **Voraussetzung:** der Demo-Ausgangszustand muss committet sein. Kein Tag
nötig — der Reset geht gegen den letzten Commit. Also vor dem Vortrag einmal
committen und danach in `demo-repo/` nichts mehr committen, sonst wandert der
Rücksetzpunkt mit.

---

## Vorbereitung am Vortragstag

**Setup**

- [ ] Auto-Update im Demo-Profil aus — 1.132 darf nicht dazwischenkommen
- [ ] Schriftgrößen in VS Code hochgedreht (Editor **und** Terminal **und** Chat)
- [ ] Screensharing-Modus festgelegt: Fenster-Share von VS Code oder
      Desktop-Share mit Alt+Tab. **Nicht am Vortragstag entscheiden.**
- [ ] Benachrichtigungen aus, Chat-Fenster mit Teams-Antworten auf Monitor 2
- [ ] Dev-Server läuft, Browser-Tab offen und auf der richtigen Seite

**Sauberkeit auf dem Share** — das ist der Punkt, der remote am ehesten weh tut

- [ ] Keine internen Repos in der Recent-Liste
- [ ] Keine internen Tabs offen
- [ ] User-Memory-Datei durchgesehen (siehe Demo 5)
- [ ] Browser: nur die Tabs, die du brauchst

**Fallbacks in `images/`**

- [ ] Demo 1: kaputte Ansicht + Antwort von Copilot
- [ ] Demo 2: Workspace mit drei Repos
- [ ] Demo 3: Kostenanzeige
- [ ] Demo 4: fertiger Plan
- [ ] Demo 5: Memory-Files-Übersicht
- [ ] Demo 6: `#fetch`-Ergebnis
- [ ] Demo 7: `/init`-Ergebnis und überarbeitete Fassung nebeneinander

---

## Probelauf am 04.08.2026 — drei Sachen gezielt testen

> ✅ **Erledigt am 04.08.2026. Alle drei bestanden, eine Anpassung nötig.**
>
> - **Test 1 · Plan per Folge-Prompt:** lief sauber, er hat nur den Plan
>   geändert. Kein „implementiere noch nicht" nötig.
> - **Test 2 · `/init`:** funktioniert **nicht** mit `/init` allein. Der
>   funktionierende Prompt steht in `vortragstag.md`, 0:29 — er muss aufs
>   `demo-repo` gezeigt bekommen und `copilot-instructions-final.md`
>   ausdrücklich ignorieren.
> - **Test 3 · Memory:** landet wie behauptet auf User-Ebene, Folie stimmt.
> - Nebenbei: `chat.checkpoints.enabled` ist an und funktioniert, die
>   Kostenanzeige ist gefunden, `#fetch` auf `code.visualstudio.com/updates`
>   läuft.
>
> Der Rest dieses Abschnitts bleibt als Protokoll stehen — was geprüft wurde
> und warum.

Alle drei sind Stellen, an denen auf den Folien etwas behauptet wird, das noch
nicht überprüft ist. Wenn eine davon nicht so funktioniert, muss die Folie
geändert werden — nicht die Erzählung.

> ⚠️ **Vorher committen.** `demo-repo/README.md` wurde gerade geändert (siehe
> unten). Der Ausgangszustand für `npm run demo:reset` ist der letzte Commit.

### Test 1 · Plan per Folge-Prompt anpassen

1. `/plan`-Prompt absetzen wie in Demo 4
2. Warten, bis der Plan steht
3. Folge-Prompt schicken:

```
Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary.
Pass den Plan an.
```

**Worauf du achtest:**

- [ ] Ändert er den **Plan** — oder fängt er direkt an zu implementieren?
      Das ist der kritische Punkt. Wenn er losläuft, ist die Demo kaputt und du
      brauchst eine andere Formulierung, z.B. "Ändere nur den Plan, implementiere
      noch nicht."
- [ ] Wie lange dauert die Anpassung? Über 30 Sekunden wird es live zäh
- [ ] Sieht man die Änderung gut genug, um im Share darauf zu zeigen?
- [ ] Bleibt der restliche Plan stehen, oder schreibt er alles neu?

▸ Die funktionierende Formulierung danach in `vortragstag.md` eintragen.

### Test 2 · `/init`

```
/init
```

**Worauf du achtest:**

- [ ] Wie lange dauert es? Über eine Minute wird live zäh — dann brauchst du
      einen Satz zum Überbrücken (die vier Blöcke aus 0:33 passen genau dahin)
- [ ] Stellt er Rückfragen, oder schreibt er einfach los?
- [ ] Legt er die Datei unter `.github/copilot-instructions.md` an, oder woanders?
- [ ] **Der kritische Punkt:** wie gut ist das Ergebnis wirklich? Die Folie
      danach behauptet *"Er kennt eure Begründungen nicht und die Stolpersteine
      beim Bauen auch nicht."* Wenn er die Build-Befehle sauber aus der
      `package.json` zieht und noch Begründungen dazuerfindet, trägt der
      Kontrast nicht mehr — dann muss ich die Folie umformulieren auf das, was
      tatsächlich fehlt
- [ ] Erwähnt er den Bug in `calc()` oder die fehlenden Tests? Das wäre ein
      hübscher Nebeneffekt zum Mitnehmen

▸ **Ergebnis aufheben.** Kopier die erzeugte Datei nach
`demo-vorlagen/init-ergebnis-probelauf.md`, dann haben wir sie zum Vergleichen
und als Fallback, falls es live schiefgeht.

▸ **Danach `.github/copilot-instructions.md` wieder löschen** — beim Vortrag
muss sie weg sein, sonst gibt es nichts zu erzeugen. `npm run demo:reset`
entfernt sie mit, weil sie nicht committet ist.

### Test 3 · Memory befüllen

Im Chat:

```
Merk dir, dass ich Tests immer selbst ausführe.
```

Dann Command Palette → **Chat: Show Memory Files**.

**Worauf du achtest:**

- [ ] Wird überhaupt eine Datei angelegt oder ergänzt?
- [ ] **Auf welcher Ebene?** Das ist der interessante Teil. Die Folie behauptet:
      *Repository* = wie dieses Projekt gebaut wird, *User* = wie du arbeitest.
      "Ich führe Tests immer selbst aus" ist eine Arbeitsweise, müsste also in
      **User** landen. Wenn er es ins Repository legt, stimmt die Aufteilung auf
      der Folie so nicht und ich formuliere sie um
- [ ] Was schreibt er wörtlich rein? Wenn der Eintrag gut lesbar ist, ist das
      dein bester Moment — dann zeigst du ihn live statt davon zu erzählen
- [ ] Sagt er im Chat, dass er es sich gemerkt hat, oder passiert es stumm?

▸ **Danach aufräumen nicht vergessen.** Wenn du den Eintrag vor dem Vortrag
nicht drin haben willst: einzeln löschen geht nicht, nur
*Chat: Clear All Memory Files* — das wirft alles weg.

▸ **Und:** wenn du den Eintrag stehen lässt, ist er beim Vortrag schon da. Dann
kannst du ihn nicht mehr live entstehen lassen. Überleg dir vorher, was du
zeigen willst.

---

## Probelauf

Einmal komplett, mit Uhr, ohne Anhalten. Dabei mitschreiben:

1. Wo warst du zeitlich bei Demo 4? (Skript sagt 0:15 — wenn du bei 0:21
   bist, muss Teil 1 kürzer)
2. Welche Demo hat länger gedauert als geplant?
3. Was hat Copilot bei `/plan` vorgeschlagen? → Korrekturstelle festlegen
4. Lief alles? Demo 1 ist bereits als laufend bestätigt

---

## Offene Punkte

Stehen gesammelt in [`todo.md`](todo.md). Die demo-spezifischen Prüfpunkte
findest du oben bei der jeweiligen Demo und im Abschnitt
*Probelauf am 04.08.2026*.
