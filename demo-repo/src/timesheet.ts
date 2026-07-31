import type { Entry, WeekSummary } from './types';

/** Regelarbeitszeit pro Woche in Minuten. */
export const WEEKLY_TARGET_MINUTES = 40 * 60;

/**
 * Fasst die Einträge einer Woche zusammen.
 */
export function calc(entries: Entry[]): WeekSummary {
  let total = 0;

  for (const entry of entries) {
    total += entry.minutes;
  }

  return {
    totalMinutes: total,
    overtimeMinutes: total - WEEKLY_TARGET_MINUTES,
  };
}

/**
 * Liefert alle Projekte, die in den Einträgen vorkommen.
 */
export function projectsOf(entries: Entry[]): string[] {
  const seen = new Set<string>();
  for (const entry of entries) {
    seen.add(entry.project);
  }
  return [...seen].sort();
}
