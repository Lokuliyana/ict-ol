/**
 * src/data/unifiedPastPapers.ts
 * Unified aggregation of authentic G.C.E. O/L past paper questions (2020-2025).
 * Combines Unit 1 past paper dataset with syllabus units from ALL_LESSONS_DATA.
 */

import { PAST_PAPER_QUESTIONS, PastPaperQuestion } from './pastPapersData';
import { ALL_LESSONS_DATA, GeneralLessonData } from './allLessonsData';

export interface UnifiedPastPaperQuestion {
  id: string;
  year: number;
  paperType: 'Paper I' | 'Paper II';
  grade: '10' | '11';
  unitId: string;
  unitNumber: number;
  unitTitleEn: string;
  unitTitleSi: string;
  type: 'mcq' | 'structured' | 'essay';
  badgeText: string;
  questionEn: string;
  questionSi: string;
  contextEn?: string;
  contextSi?: string;
  options?: { id: string; en: string; si: string }[];
  correctOptionId?: string;
  sampleAnswerEn?: string;
  sampleAnswerSi?: string;
  markingRubricEn?: string[];
  markingRubricSi?: string[];
  explanationEn: string;
  explanationSi: string;
}

function buildUnifiedPastPapers(): UnifiedPastPaperQuestion[] {
  const result: UnifiedPastPaperQuestion[] = [];
  const seenIds = new Set<string>();

  // 1. Ingest Grade 10 Unit 1 questions from PAST_PAPER_QUESTIONS
  for (const q of PAST_PAPER_QUESTIONS) {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      result.push({
        id: q.id,
        year: q.year,
        paperType: q.paperType,
        grade: '10',
        unitId: 'g10-u1',
        unitNumber: 1,
        unitTitleEn: 'Introduction to ICT',
        unitTitleSi: 'තොරතුරු හා සන්නිවේදන තාක්ෂණය හැඳින්වීම',
        type: q.type,
        badgeText: q.badgeText,
        questionEn: q.questionEn,
        questionSi: q.questionSi,
        contextEn: q.contextEn,
        contextSi: q.contextSi,
        options: q.options,
        correctOptionId: q.correctOptionId,
        sampleAnswerEn: q.sampleAnswerEn,
        sampleAnswerSi: q.sampleAnswerSi,
        markingRubricEn: q.markingRubricEn || (q.sampleAnswerEn ? [q.sampleAnswerEn] : []),
        markingRubricSi: q.markingRubricSi || (q.sampleAnswerSi ? [q.sampleAnswerSi] : []),
        explanationEn: q.explanationEn,
        explanationSi: q.explanationSi,
      });
    }
  }

  // 2. Ingest questions from ALL_LESSONS_DATA
  for (const [unitId, lesson] of Object.entries(ALL_LESSONS_DATA)) {
    if (!Array.isArray(lesson.pastPaperQuestions)) continue;

    for (const q of lesson.pastPaperQuestions) {
      if (!seenIds.has(q.id)) {
        seenIds.add(q.id);
        result.push({
          id: q.id,
          year: q.year,
          paperType: q.paperType,
          grade: lesson.grade,
          unitId: lesson.id,
          unitNumber: lesson.unitNumber,
          unitTitleEn: lesson.titleEn,
          unitTitleSi: lesson.titleSi,
          type: q.type,
          badgeText: q.badgeText,
          questionEn: q.questionEn,
          questionSi: q.questionSi,
          options: q.options,
          correctOptionId: q.correctOptionId,
          sampleAnswerEn: q.sampleAnswerEn,
          sampleAnswerSi: q.sampleAnswerSi,
          markingRubricEn: q.sampleAnswerEn ? [q.sampleAnswerEn] : [],
          markingRubricSi: q.sampleAnswerSi ? [q.sampleAnswerSi] : [],
          explanationEn: q.explanationEn,
          explanationSi: q.explanationSi,
        });
      }
    }
  }

  return result;
}

export const UNIFIED_PAST_PAPERS: UnifiedPastPaperQuestion[] = buildUnifiedPastPapers();

// 3. Ingest ALL 842 Question Bank items as searchable exam/drill items
import { getAllIngestedQuestions } from './questionBanks/masterBanks';

export interface CurriculumSourceType {
  sourceType: 'past_paper' | 'question_bank';
}

function buildFullCurriculumQuestions(): UnifiedPastPaperQuestion[] {
  const result: UnifiedPastPaperQuestion[] = [...UNIFIED_PAST_PAPERS];
  const allMaster = getAllIngestedQuestions();

  for (const item of allMaster) {
    const q = item.question;
    const isG11 = item.unitId.startsWith('g11');
    const grade = isG11 ? '11' : '10';
    const unitMatch = item.unitId.match(/u(\d+)/);
    const unitNum = unitMatch ? parseInt(unitMatch[1]) : 1;

    result.push({
      id: `qb-${q.id}`,
      year: 2025, // Practice benchmark year
      paperType: 'Paper I',
      grade: grade as '10' | '11',
      unitId: item.unitId,
      unitNumber: unitNum,
      unitTitleEn: `Unit ${unitNum} Comprehensive Bank`,
      unitTitleSi: `ඒකකය 0${unitNum} සම්පූර්ණ ප්‍රශ්නාවලිය`,
      type: 'mcq',
      badgeText: `Syllabus Bank Q#${q.questionNumber || '01'}`,
      questionEn: q.promptEn,
      questionSi: q.promptSi,
      options: q.options.map(o => ({
        id: o.id,
        en: `(${o.key}) ${o.en}`,
        si: o.si || ''
      })),
      correctOptionId: q.correctOptionId,
      sampleAnswerEn: q.options.find(o => o.id === q.correctOptionId)?.en,
      sampleAnswerSi: q.options.find(o => o.id === q.correctOptionId)?.si,
      markingRubricEn: [q.explanationEn],
      markingRubricSi: q.explanationSi ? [q.explanationSi] : [],
      explanationEn: q.explanationEn,
      explanationSi: q.explanationSi,
    });
  }

  return result;
}

export const ALL_CURRICULUM_QUESTIONS: UnifiedPastPaperQuestion[] = buildFullCurriculumQuestions();

export function getAllCurriculumQuestions(): UnifiedPastPaperQuestion[] {
  return ALL_CURRICULUM_QUESTIONS;
}

export interface FilterPastPaperOptions {
  year?: string; // 'all' | '2020' | '2021' | ...
  paperType?: string; // 'all' | 'Paper I' | 'Paper II'
  grade?: string; // 'all' | '10' | '11'
  unitId?: string; // 'all' | 'g10-u1' | ...
  searchQuery?: string;
  sourceScope?: 'past_papers_only' | 'all_question_banks';
}

export function filterPastPapers(filters: FilterPastPaperOptions = {}): UnifiedPastPaperQuestion[] {
  const { year, paperType, grade, unitId, searchQuery, sourceScope = 'past_papers_only' } = filters;
  const pool = sourceScope === 'all_question_banks' ? getAllCurriculumQuestions() : UNIFIED_PAST_PAPERS;

  return pool.filter((q) => {
    if (year && year !== 'all' && String(q.year) !== String(year)) {
      return false;
    }
    if (paperType && paperType !== 'all' && q.paperType !== paperType) {
      return false;
    }
    if (grade && grade !== 'all' && q.grade !== grade) {
      return false;
    }
    if (unitId && unitId !== 'all' && q.unitId !== unitId) {
      return false;
    }
    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const matchesText =
        q.questionEn.toLowerCase().includes(query) ||
        q.questionSi.toLowerCase().includes(query) ||
        q.badgeText.toLowerCase().includes(query) ||
        q.unitTitleEn.toLowerCase().includes(query) ||
        (q.explanationEn && q.explanationEn.toLowerCase().includes(query));
      if (!matchesText) return false;
    }
    return true;
  });
}
