# TODO

Die eine Liste zum Abarbeiten. Stand 03.08.2026, Vortrag ca. 07.08.

Details stehen woanders und sind verlinkt — hier nur, was zu tun ist.

---

## Morgen (04.08.) — der Testlauf

Das Meiste davon läuft in **einer** VS-Code-Sitzung im Demo-Repo. Reihenfolge
ist Absicht: Plan zuerst, weil daraus die Implementierung fällt, die du für
`/init` sowieso brauchst.

### Vorher

- [ ] **Ausgangszustand committen.** `npm run demo:reset` setzt auf den letzten
      Commit zurück — solange nichts committet ist, hast du kein Netz
- [ ] `npm run demo:test` einmal grün gesehen

### Test 1 · Plan per Folge-Prompt anpassen

- [ ] `/plan`-Prompt absetzen, dann korrigieren mit:
      *"Der neue Typ gehört nach src/types.ts, zu Entry und WeekSummary. Pass
      den Plan an."*
- [ ] **Die kritische Frage:** ändert er nur den Plan — oder fängt er an zu
      implementieren? Wenn er losläuft, brauchst du einen Zusatz wie
      *"implementiere noch nicht"*. Die funktionierende Formulierung in
      `vortragstag.md` eintragen
- [ ] Dauer messen. Über 30 Sekunden wird es live zäh

### Test 2 · `/init`

- [ ] `/init` laufen lassen
- [ ] **Die kritische Frage:** wie gut ist der Entwurf wirklich? Die Folie
      danach behauptet, ihm fehlen Begründungen und Build-Stolpersteine. Wenn er
      die sauber liefert, muss die Folie umformuliert werden — sag mir Bescheid
- [ ] Ergebnis nach `demo-vorlagen/init-ergebnis-probelauf.md` kopieren
- [ ] Danach `.github/copilot-instructions.md` wieder löschen
- [ ] Nebenbei: was macht `/init`, wenn die Datei schon existiert?

### Test 3 · Memory

- [ ] *"Merk dir, dass ich Tests immer selbst ausführe."* → dann
      **Chat: Show Memory Files**
- [ ] **Die kritische Frage:** landet es auf **User**-Ebene? Die Folie behauptet
      das. Wenn es ins Repository geht, muss die Folie umformuliert werden
- [ ] Überlegen: mit einem Wegwerf-Eintrag testen? Was du morgen anlegst, ist am
      Vortragstag schon da — dann kannst du es nicht mehr live entstehen lassen.
      Einzeln löschen geht nicht, nur alles

### Drei Schnellchecks nebenbei

- [ ] Ist `chat.checkpoints.enabled` an? Wenn ja, an der laufenden Demo zeigen
      statt nur davon erzählen
- [ ] Wo genau sitzt die **Kostenanzeige** in deiner Version? Nicht auf dem
      Share danach suchen müssen
- [ ] `#fetch https://code.visualstudio.com/updates` — funktioniert die URL?

▸ Ablauf und alle Prüfpunkte ausführlich: `demo-ablauf.md`, Abschnitt
*Probelauf am 04.08.2026*

---

## Nur du — blockiert den Vortrag

- [ ] **Teil 5 inhaltlich füllen.** Die Folie hat noch drei Platzhalter:
      Firmenregeln, Credit-Budget, wer ansprechbar ist. Kandidaten stehen in den
      Speaker Notes
- [ ] **Sind Browser-Tools per Policy erlaubt?** Betrifft eine Folie in Block 1
      plus die Vertiefung dahinter

---

## Vier Entscheidungen

- [ ] **Bleibt Block 4** (VS Code vs. IntelliJ)? Du wolltest ihn eventuell
      kürzen oder streichen
- [ ] **Nach Demo 1 zurücksetzen oder den Fix stehen lassen?**
      Meine Empfehlung: stehen lassen
- [ ] **Rahmenbedingung 1 in `CLAUDE.md` anpassen.** Der Hackathon-Satz ist
      entschieden und in den Folien — die Regel verbietet aber jede Erwähnung
      von Claude Code. Solange das offen ist, widerspricht sich das Projekt
- [ ] **Wie verteilst du `handout.html`?** PDF in den Chat, oder hosten und
      verlinken

---

## Wochenende

- [ ] **Anonymes Feedback-Formular anlegen**, Link bereitlegen. Drei Fragen plus
      Freitext, **keine Pflichtfelder**: Was war zu schnell? · Was ausführlicher?
      · Was fehlt auf der Checkliste?
- [ ] Zwei bis drei Beispiele aus `awesome-copilot` aussuchen und als Tabs
      vorbereiten
- [ ] ECC-Repo öffnen, dessen `copilot-instructions.md` selbst lesen — taugt sie
      als Positiv- oder als Warnbeispiel? Beides ist brauchbar
- [ ] `demo-vorlagen/copilot-instructions-final.md` auf deinen Ton drehen — das
      ist dein Beispiel, nicht meins
- [ ] `handout.html` gegenlesen, bevor es unter deinem Namen rausgeht
- [ ] **Einmal komplett mit Uhr durchspielen.** Der Punkt mit dem größten Hebel —
      die 47 Minuten sind gerechnet, nicht gemessen
- [ ] Fallback-Screenshots erzeugen (Liste in `vortragstag.md`)

---

## Am Vortag

- [ ] Release Notes und GitHub Changelog durchgehen, Versionsnummern und
      Stand-Marker nachziehen
- [ ] ECC-Zahlen neu ablesen (67 Agents / 281 Skills / 94 Commands / ~237k)
- [ ] Auto-Update im Demo-Profil aus

---

## Am Vortragstag

▸ Eigene Datei: **`vortragstag.md`** — Aufbau, was offen sein muss, und der
Spickzettel mit allen Prompts in Vortragsreihenfolge.

---

## Erledigt

- [x] Skript steht und ist durchgesprochen
- [x] Folien aus dem Skript abgeleitet, kondensiert (49 Folien)
- [x] Demo-Repo lauffähig, als npm-Workspace eingebunden
- [x] Bug sichtbar: `Überstunden: -10h`
- [x] Hook getestet — Vision-Demo läuft, bleibt drin
- [x] `/plan` durchgespielt, Korrekturstelle festgelegt (`types.ts`)
- [x] Überarbeitete Instructions als Gegenstück zu `/init` geschrieben
- [x] `handout.html` — eine Seite A4
- [x] Memory-Freigabe geklärt (ist frei)
- [x] `/create-instructions` — mit `s`
- [x] Sandbox — deaktiviert, wird nicht empfohlen
- [x] Feedback-Folie hinter das Danke, mit anonymem Formular
- [x] IDE-Umfrage an den Anfang gezogen
- [x] Leak im `demo-repo/README.md` entfernt (verriet den Bug an Copilot)
