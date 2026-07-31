import type { Entry } from './types';

/** Beispielwoche. In einer echten Anwendung käme das aus einer API. */
export const sampleEntries: Entry[] = [
  { date: '2026-08-03', project: 'Migration Kundenportal Phase 2', minutes: 480 },
  { date: '2026-08-04', project: 'Wartung', minutes: 375 },
  { date: '2026-08-05', project: 'Migration Kundenportal Phase 2', minutes: 510 },
  { date: '2026-08-06', project: 'Support', minutes: 240 },
  { date: '2026-08-07', project: 'Wartung', minutes: 195 },
];
