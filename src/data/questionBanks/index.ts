import { IngestedQuestion, IngestedOption } from '../../../scripts/ingest-master-banks';
export type { IngestedQuestion, IngestedOption };

import { MASTER_QUESTION_BANKS } from './masterBanks';
export { MASTER_QUESTION_BANKS };

import { ALL_LESSONS_DATA } from '../allLessonsData';
import { UNIFIED_PAST_PAPERS } from '../unifiedPastPapers';

export function getLessonQuestions(lessonId: string): IngestedQuestion[] {
  const bank = MASTER_QUESTION_BANKS[lessonId];
  if (bank && bank.length > 0) {
    return bank;
  }

  // Tier 2 fallback: ALL_LESSONS_DATA subtopics checkpointQuiz
  const lessonData = ALL_LESSONS_DATA[lessonId];
  if (lessonData?.subtopics && lessonData.subtopics.length > 0) {
    const subtopicQuestions: IngestedQuestion[] = [];
    const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    let qNum = 1;

    for (const st of lessonData.subtopics) {
      if (st.checkpointQuiz) {
        const cp = st.checkpointQuiz;
        const options: IngestedOption[] = (cp.options || []).map((opt, idx) => ({
          id: opt.id,
          key: keys[idx % 4],
          en: opt.en,
          si: opt.si,
        }));
        const correctOpt = options.find((o) => o.id === cp.correctOptionId) || options[0];
        if (options.length >= 4 && correctOpt) {
          subtopicQuestions.push({
            id: cp.id,
            lessonId,
            questionNumber: qNum++,
            promptEn: cp.questionEn,
            promptSi: cp.questionSi,
            options,
            correctKey: correctOpt.key,
            correctOptionId: correctOpt.id,
            explanationEn: cp.explanationEn || '',
            explanationSi: cp.explanationSi || '',
          });
        }
      }
    }

    if (subtopicQuestions.length > 0) {
      return subtopicQuestions;
    }
  }

  // Tier 3 fallback: UNIFIED_PAST_PAPERS
  const pastPapers = UNIFIED_PAST_PAPERS.filter(
    (q) => q.unitId === lessonId && q.type === 'mcq'
  );
  if (pastPapers.length > 0) {
    const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    return pastPapers.map((q, idx) => {
      const options: IngestedOption[] = (q.options || []).map((opt, oIdx) => ({
        id: opt.id,
        key: keys[oIdx % 4],
        en: opt.en,
        si: opt.si,
      }));
      const correctOpt = options.find((o) => o.id === q.correctOptionId) || options[0];
      return {
        id: q.id,
        lessonId,
        questionNumber: idx + 1,
        promptEn: q.questionEn,
        promptSi: q.questionSi,
        options,
        correctKey: correctOpt ? correctOpt.key : 'A',
        correctOptionId: q.correctOptionId || (options[0]?.id ?? 'opt1'),
        explanationEn: q.explanationEn || '',
        explanationSi: q.explanationSi || '',
      };
    });
  }

  return [];
}
