/**
 * Master Question Banks Data Module
 * Separated from index.ts to eliminate circular dependency with unifiedPastPapers.ts.
 */

import { IngestedQuestion } from '../../../scripts/ingest-master-banks';
export type { IngestedQuestion };

import g10_u1 from './g10-u1.json';
import g10_u2 from './g10-u2.json';
import g10_u3 from './g10-u3.json';
import g10_u4 from './g10-u4.json';
import g10_u5 from './g10-u5.json';
import g10_u6 from './g10-u6.json';
import g10_u7 from './g10-u7.json';
import g10_u8 from './g10-u8.json';
import g10_u9 from './g10-u9.json';
import g11_u1 from './g11-u1.json';
import g11_u2 from './g11-u2.json';
import g11_u3 from './g11-u3.json';
import g11_u4 from './g11-u4.json';
import g11_u5 from './g11-u5.json';
import g11_u6 from './g11-u6.json';

import { UNIT_9_FALLBACK_QUESTIONS } from './unit9Adapter';

export const MASTER_QUESTION_BANKS: Record<string, IngestedQuestion[]> = {
  'g10-u1': g10_u1 as IngestedQuestion[],
  'g10-u2': g10_u2 as IngestedQuestion[],
  'g10-u3': g10_u3 as IngestedQuestion[],
  'g10-u4': g10_u4 as IngestedQuestion[],
  'g10-u5': g10_u5 as IngestedQuestion[],
  'g10-u6': g10_u6 as IngestedQuestion[],
  'g10-u7': g10_u7 as IngestedQuestion[],
  'g10-u8': g10_u8 as IngestedQuestion[],
  'g10-u9': g10_u9 as IngestedQuestion[],
  'g11-u1': g11_u1 as IngestedQuestion[],
  'g11-u2': g11_u2 as IngestedQuestion[],
  'g11-u3': g11_u3 as IngestedQuestion[],
  'g11-u4': g11_u4 as IngestedQuestion[],
  'g11-u5': g11_u5 as IngestedQuestion[],
  'g11-u6': g11_u6 as IngestedQuestion[],
};

export function getAllIngestedQuestions(): Array<{ question: IngestedQuestion; unitId: string }> {
  const result: Array<{ question: IngestedQuestion; unitId: string }> = [];
  for (const [unitId, questions] of Object.entries(MASTER_QUESTION_BANKS)) {
    for (const q of questions) {
      result.push({ question: q, unitId });
    }
  }
  return result;
}
