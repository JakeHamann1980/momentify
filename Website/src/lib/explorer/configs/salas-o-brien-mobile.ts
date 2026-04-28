// Explorer Config — Salas O'Brien (Mobile variant)
// Clones SALAS_OBRIEN_CONFIG and flips formFactor to 'mobile' so the same content
// renders through the locked mobile CSS (explorer-mobile.css) at 430x932 portrait.
// Tablet Salas O'Brien remains untouched at `configs/salas-o-brien.ts`.

import type { ExplorerConfig } from '../types';
import { SALAS_OBRIEN_CONFIG } from './salas-o-brien';

export const SALAS_OBRIEN_MOBILE_CONFIG: ExplorerConfig = {
  ...SALAS_OBRIEN_CONFIG,
  id: 'salas-o-brien-mobile',
  name: "Salas O'Brien Explorer (Mobile)",
  formFactor: 'mobile',
  updatedAt: '2026-04-28T00:00:00.000Z',
};
