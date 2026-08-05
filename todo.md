# TODO — Vortragstag

**Der Vortrag ist heute, 05.08.2026.** Diese Liste ist nach Wichtigkeit
sortiert, nicht nach Reihenfolge. Wenn die Zeit nicht reicht: von oben
abarbeiten und den Rest bewusst weglassen.

▸ Aufbau, Spickzettel und Nachbereitung stehen in **`vortragstag.md`**.

---

## Noch offen

- [ ] **Alte Copilot-Sessions heraussuchen und offen haben.** Das ist dein
      Fallback statt Screenshots — vor allem für Demo 1. Live danach suchen
      dauert länger als der Fehlschlag. **Und vorher reinschauen, was sonst
      noch in der Session steht** — sie geht auf den Share
- [ ] **Die drei Lücken bei 0:40** — `awesome-copilot`-Beispiele. Wenn du das
      wie ECC live machst: mindestens den Tab vorher öffnen, damit du nicht vor
      der Sammlung stehst
- [ ] **Browser-Tools: den Ehrlichkeitssatz auf der Zunge haben.** "Bei uns
      anscheinend erlaubt, selbst noch nicht ausprobiert." Steht in den
      Speaker Notes von Block 1. **Nicht live vorführen**
- [ ] **Aufbau 60 Minuten vorher** — Schriftgrößen, Screensharing-Modus,
      Benachrichtigungen, User-Memory-Datei durchsehen.
      Vollständig in `vortragstag.md`, Teil A

---

## Entscheidest du live

- **Block 4 (VS Code vs. IntelliJ)**: hängt an der IDE-Umfrage bei 0:02. Nennt
  niemand etwas anderes als VS Code, fällt der Block weg
- **Opencode auf der Firmenregeln-Folie**: dein Punkt, deine Formulierung.
  Rechne mit einer Nachfrage
- **ECC-Zahlen** live ablesen — oder rund sagen, wenn es hakt

---

## Nach dem Vortrag

▸ Vollständig in **`vortragstag.md`, Teil C**. Die vier Sachen, die du sonst
vergisst:

1. **Chat-Antworten wegspeichern**, bevor das Meeting zugeht
2. **Alle Links gesammelt in den Chat**, Feedback-Formular nochmal dazu
3. **Handout verteilen**
4. **Folien als PDF in den SharePoint** — `?print-pdf` ist ungetestet. Wenn es
   zerfällt, lade `handout.html` hoch, das druckt sauber

---

## Erledigt

### Refresh-Pass Aktualität (05.08.2026) ✅

- [x] Release Notes und GitHub Changelog gegengecheckt. **Aktuell ist 1.131**
      (29.07.2026), 1.132 ist noch nicht erschienen
- [x] Tempo-Tabelle in Block 1 auf fünf Zeilen erweitert (1.130 am 22.07.,
      1.131 am 29.07.), Aufhänger auf „Drei Wochen. Fünf Releases."
- [x] **Alle Stand-Marker auf `VS Code 1.131`** — sechs Folien plus Handout
- [x] Feature-Inhalte bewusst **nicht** angefasst. Was in 1.130/1.131 dazukam,
      steht als ungeprüfte Notiz in `research/neue-features-2026.md` und kommt
      heute nicht auf eine Folie
- [ ] ECC-Zahlen neu ablesen (67 Agents / 281 Skills / 94 Commands / ~237k) —
      nur wenn du ohnehin im Repo bist, sonst „gut zweihunderttausend" sagen

### Vorbereitung am Vortragstag ✅

- [x] Auto-Update in VS Code aus
- [x] Forms-Link liegt auf dem Präsentiergerät bereit
- [x] Demo-Repo zurückgesetzt, keine `.github/copilot-instructions.md` drin
- [x] **Einmal komplett mit Uhr durchgegangen** — Timing passt
- [x] Chat Debug View getestet, Klickweg sitzt
- [x] `demo-vorlagen/copilot-instructions-final.md` gegengelesen
- [x] **Keine Fallback-Screenshots** — bewusste Entscheidung, Ersatz sind alte
      Copilot-Sessions
- [x] **ECC-Zahlen** werden live abgelesen statt vorher nachgetragen

### Inhalt

- [x] Skript steht und ist durchgesprochen
- [x] Folien abgeleitet, kondensiert (49 Folien + Chat Debug View)
- [x] Demo-Repo lauffähig, Bug sichtbar, als npm-Workspace eingebunden
- [x] `handout.html` — eine Seite A4
- [x] **Teil 5 (Firmenregeln) gefüllt** — von dir, 05.08.
- [x] **Feedback-Formular angelegt**, Link liegt bei dir
- [x] Memory-Freigabe geklärt · Sandbox deaktiviert · `/create-instructions`
- [x] Leak im `demo-repo/README.md` entfernt (verriet den Bug an Copilot)

### Probelauf 04.08. — alle drei Tests bestanden

- [x] **Test 1 · Plan per Folge-Prompt.** Er ändert nur den Plan, kein
      „implementiere noch nicht" nötig
- [x] **Test 2 · `/init`.** Braucht einen Zusatz — der funktionierende Prompt
      steht in `vortragstag.md`, 0:29
- [x] **Test 3 · Memory.** Landet auf User-Ebene, Folie stimmt
- [x] `chat.checkpoints.enabled` an · Kostenanzeige gefunden · `#fetch` läuft

### Entscheidungen (05.08.)

- [x] **Block 4 bleibt**, wird live übersprungen, wenn niemand IntelliJ nennt
- [x] **Nach Demo 1 bleibt der Fix stehen**
- [x] **Hackathon-Satz bleibt** — `CLAUDE.md` Rahmenbedingung 1 präzisiert
- [x] **Handout-Verteilung über SharePoint**

### Folienänderungen (05.08.)

- [x] „Was nervt euch?" ist die **erste** Folie, IDE-Umfrage dahinter
- [x] IDE-Umfrage läuft über den **Chat**. Teams-Reaktion bleibt bei 0:27
- [x] **„Anonym" runter** von der Feedback-Folie — stattdessen: was eine
      Antwort braucht, kommt in den Chat, Größeres in die nächste Session
- [x] **Chat Debug View** als Vertiefung bei 0:26
