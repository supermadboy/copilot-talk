/**
 * Formatiert eine Dauer in Minuten als "7h 30m".
 * Volle Stunden werden ohne Minutenteil ausgegeben.
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (rest === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${rest}m`;
}

/**
 * Formatiert ein ISO-Datum als "Mo, 03.08."
 */
export function formatDate(iso: string): string {
  const date = new Date(iso);
  const weekday = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${weekday}, ${day}.${month}.`;
}
