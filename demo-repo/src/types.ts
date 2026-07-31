export interface Entry {
  /** ISO-Datum, z.B. "2026-08-03" */
  date: string;
  project: string;
  minutes: number;
}

export interface WeekSummary {
  totalMinutes: number;
  overtimeMinutes: number;
}
