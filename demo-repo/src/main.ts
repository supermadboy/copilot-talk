import './styles.css';
import { sampleEntries } from './data';
import { calc, projectsOf } from './timesheet';
import { formatDate, formatDuration } from './format';
import type { Entry } from './types';

const entries: Entry[] = [...sampleEntries];

function renderEntries(): string {
  return entries
    .map(
      (entry) => `
      <li class="entry">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <span class="entry-project">${entry.project}</span>
        <span class="entry-duration">${formatDuration(entry.minutes)}</span>
      </li>`,
    )
    .join('');
}

function render(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  const summary = calc(entries);

  app.innerHTML = `
    <h1>Zeiterfassung</h1>
    <p class="subline">Kalenderwoche 32 · ${projectsOf(entries).length} Projekte</p>

    <ul class="entries">${renderEntries()}</ul>

    <div class="summary">
      <span class="summary-label">Gesamt</span>
      <span class="summary-value">${formatDuration(summary.totalMinutes)}</span>
      <span class="badge">Überstunden: ${formatDuration(summary.overtimeMinutes)}</span>
    </div>

    <form id="add-form" class="add-form">
      <input name="project" placeholder="Projekt" required />
      <input name="minutes" type="number" placeholder="Minuten" min="1" required />
      <button type="submit">Eintrag hinzufügen</button>
    </form>
  `;

  const form = app.querySelector<HTMLFormElement>('#add-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    entries.push({
      date: new Date().toISOString().slice(0, 10),
      project: String(data.get('project')),
      minutes: Number(data.get('minutes')),
    });
    render();
  });
}

render();
