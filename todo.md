# TODO

Die eine Liste zum Abarbeiten. Stand 05.08.2026, Vortrag ca. 07.08.

Details stehen woanders und sind verlinkt — hier nur, was zu tun ist.

---

## Nur du — blockiert den Vortrag

- [ ] **Forms-Link eintragen.** Du hast ihn, er steht aber nirgends im Repo.
      Gehört an zwei Stellen: `vortragstag.md` (Zwischenablage-Zeile) und in
      `handout.html`, falls er da mit rein soll
- [ ] **Sind Browser-Tools per Policy erlaubt?** Einzige offene Frage aus den
      Firmenregeln. Betrifft eine Folie in Block 1 plus die Vertiefung dahinter
- [ ] **PDF für den SharePoint** — siehe eigenen Abschnitt unten. Neu und noch
      ungetestet

---

## Heute und morgen (05./06.08.)

- [ ] **Einmal komplett mit Uhr durchspielen.** Der Punkt mit dem größten Hebel —
      die 47 Minuten sind gerechnet, nicht gemessen
- [ ] Zwei bis drei Beispiele aus `awesome-copilot` aussuchen und als Tabs
      vorbereiten. Die drei Lücken in `vortragstag.md`, Abschnitt 0:40, füllen
- [ ] ECC-Repo öffnen, dessen `copilot-instructions.md` selbst lesen — taugt sie
      als Positiv- oder als Warnbeispiel? Beides ist brauchbar
- [ ] `demo-vorlagen/copilot-instructions-final.md` auf deinen Ton drehen — das
      ist dein Beispiel, nicht meins
- [ ] `handout.html` gegenlesen, bevor es unter deinem Namen rausgeht
- [ ] **Chat Debug View einmal selbst aufmachen** (neu, siehe unten) — der
      Klickweg muss sitzen, sonst suchst du live
- [ ] Fallback-Screenshots erzeugen (Liste in `vortragstag.md`)

---

## Neu: PDF für den SharePoint

Du willst den Foliensatz nach dem Vortrag in den SharePoint legen. Das
widerspricht der bisherigen Festlegung „kein PDF-Export, keine Print-Styles" —
die galt fürs *Vortragen*, nicht fürs Verteilen danach. `CLAUDE.md` ist
entsprechend nachgezogen.

Zu tun, aber **erst nach dem Durchlauf** — nicht jetzt daran hängenbleiben:

- [ ] `localhost:8000/index.html?print-pdf` im Browser aufmachen und **einmal
      durchscrollen**. Reveal.js kann das von Haus aus
- [ ] Prüfen, was bricht: Code-Blöcke, die über die Seite laufen, und die
      farbigen Interaktionsfolien
- [ ] Wenn es brauchbar aussieht: über den Druckdialog als PDF sichern, fertig
- [ ] Wenn nicht: **Handout statt Folien hochladen.** `handout.html` ist eine
      Seite A4 und druckt sauber — für die meisten sowieso nützlicher als
      49 Folien ohne Ton

▸ Der Upload selbst steht als Nachbereitungspunkt in `vortragstag.md`, Teil C.

---

## Neu: Chat Debug View

Das Feature, das du noch zeigen wolltest — Request anklicken und reinsehen.

- Liegt als **Vertikale** unter „Kontext gezielt geben", Block 2
- Klickweg: Chat-Menü → *Show Chat Debug View*, oder Palette →
  *Developer: Show Chat Debug View*
- Spickzettel-Eintrag: `vortragstag.md`, 0:26

Nicht zu verwechseln mit den *Agent Debug Logs* — das ist eine andere Ansicht,
Preview, eigenes Setting. Die machst du live nicht auf.

---

## Am Vortag

- [ ] Release Notes und GitHub Changelog durchgehen, Versionsnummern und
      Stand-Marker nachziehen
- [ ] ECC-Zahlen neu ablesen (67 Agents / 281 Skills / 94 Commands / ~237k)
- [ ] Auto-Update im Demo-Profil aus

---

## Am Vortragstag

▸ Eigene Datei: **`vortragstag.md`** — Aufbau, was offen sein muss, der
Spickzettel mit allen Prompts in Vortragsreihenfolge, und **Teil C:
Nachbereitung**.

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
- [x] Feedback-Folie hinter das Danke
- [x] Leak im `demo-repo/README.md` entfernt (verriet den Bug an Copilot)
- [x] **Teil 5 (Firmenregeln) inhaltlich gefüllt** — von dir, 05.08.
- [x] **Anonymes Feedback-Formular angelegt** — Link liegt bei dir

### Probelauf 04.08. — alle drei Tests bestanden

- [x] **Test 1 · Plan per Folge-Prompt anpassen.** Lief sauber, er hat nur den
      Plan geändert. Kein Zusatz wie „implementiere noch nicht" nötig
- [x] **Test 2 · `/init`.** Funktioniert nur mit Zusatz — der funktionierende
      Prompt steht in `vortragstag.md`, 0:29
- [x] **Test 3 · Memory.** Landet wie behauptet auf User-Ebene, Folie stimmt
- [x] `chat.checkpoints.enabled` ist an und funktioniert → an der laufenden
      Demo zeigen, nicht nur davon erzählen
- [x] Kostenanzeige gefunden und sichtbar
- [x] `#fetch https://code.visualstudio.com/updates` funktioniert

### Vier Entscheidungen — alle gefallen (05.08.)

- [x] **Block 4 bleibt.** Wird live übersprungen, wenn in der IDE-Umfrage
      niemand etwas anderes als VS Code nennt
- [x] **Nach Demo 1 bleibt der Fix stehen**
- [x] **Hackathon-Satz bleibt.** `CLAUDE.md` Rahmenbedingung 1 ist präzisiert:
      kein Vortrag *über* andere Tools — eine Herkunfts-Randnotiz ist davon
      nicht betroffen
- [x] **Handout-Verteilung: SharePoint.** Als Nachbereitungspunkt eingetragen

### Änderungen an den Folien (05.08.)

- [x] **Chat-Frage „Was nervt euch?" ist jetzt die erste Folie**, die
      IDE-Umfrage kommt dahinter
- [x] **IDE-Umfrage läuft über den Chat**, nicht mehr über die Reaktionsleiste.
      Die Teams-Reaktion gibt es weiterhin bei 0:27
      (`copilot-instructions.md` im Repo)
- [x] **„Anonym" ist von der Feedback-Folie runter.** Stattdessen: was eine
      Antwort braucht, kommt in den Chat, alles Größere in die nächste Session
- [x] **Chat Debug View** als Vertiefung eingebaut
