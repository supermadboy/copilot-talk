import { describe, expect, it } from 'vitest';
import { formatDuration } from './format';

describe('formatDuration', () => {
  it('gibt volle Stunden ohne Minutenteil aus', () => {
    expect(formatDuration(480)).toBe('8h');
  });

  it('gibt Stunden und Minuten aus', () => {
    expect(formatDuration(375)).toBe('6h 15m');
  });
});
