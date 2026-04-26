// Explorer Config — DealRoom (Mobile variant)
// Clones DEALROOM_CONFIG and flips formFactor to 'mobile' so the same content
// renders through the locked mobile CSS (explorer-mobile.css) at 430x932 portrait.
// Tablet DealRoom remains untouched at `configs/dealroom.ts`.

import type { ExplorerConfig } from '../types';
import { DEALROOM_CONFIG } from './dealroom';

export const DEALROOM_MOBILE_CONFIG: ExplorerConfig = {
  ...DEALROOM_CONFIG,
  id: 'dealroom-mobile',
  name: 'DealRoom Explorer (Mobile)',
  formFactor: 'mobile',
  updatedAt: '2026-04-26T00:00:00.000Z',
};
