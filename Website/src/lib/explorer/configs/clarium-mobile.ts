// Explorer Config — Clarium Health (Mobile variant)
// Clones CLARIUM_CONFIG and flips formFactor to 'mobile' so the same content
// renders through the locked mobile CSS (explorer-mobile.css) at 430x932 portrait.
// Tablet Clarium remains untouched at `configs/clarium.ts`.

import type { ExplorerConfig } from '../types';
import { CLARIUM_CONFIG } from './clarium';

export const CLARIUM_MOBILE_CONFIG: ExplorerConfig = {
  ...CLARIUM_CONFIG,
  id: 'clarium-mobile',
  name: 'Clarium Health Explorer (Mobile)',
  formFactor: 'mobile',
  updatedAt: '2026-04-23T00:00:00.000Z',
};
