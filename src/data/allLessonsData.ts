import { GlossaryTerm } from './lesson01Data';
import { G10_U2_DATA } from './lessons/g10u2';
import { G10_U3_DATA } from './lessons/g10u3';
import { G10_U4_DATA } from './lessons/g10u4';
import { G10_U5_DATA } from './lessons/g10u5';
import { G10_U6_DATA } from './lessons/g10u6';
import { G10_U7_DATA } from './lessons/g10u7';
import { G10_U8_DATA } from './lessons/g10u8';
import { G11_U1_DATA } from './lessons/g11u1';
import { G11_U2_DATA } from './lessons/g11u2';
import { G11_U3_DATA } from './lessons/g11u3';
import { G11_U4_DATA } from './lessons/g11u4';
import { G11_U5_DATA } from './lessons/g11u5';
import { G11_U6_DATA } from './lessons/g11u6';

export interface GeneralLessonData {
  id: string;
  grade: '10' | '11';
  unitNumber: number;
  titleEn: string;
  titleSi: string;
  subtopics: {
    id: string;
    number: string;
    titleEn: string;
    titleSi: string;
    summaryEn?: string;
    summarySi?: string;
    blocks: {
      id: string;
      en: string;
      si: string;
      highlightTerm?: string;
    }[];
    examples?: {
      id: string;
      titleEn: string;
      titleSi: string;
      contentEn?: string;
      contentSi?: string;
      isInteractiveWidget?: 'nic-decoder' | 'system-diagram' | 'timeline-slider' | 'number-converter' | 'logic-gate';
    }[];
    tableData?: {
      headers: { en: string; si: string }[];
      rows: { [key: string]: { en: string; si: string } }[];
    };
    checkpointQuiz?: {
      id: string;
      questionEn: string;
      questionSi: string;
      options: { id: string; en: string; si: string }[];
      correctOptionId: string;
      explanationEn: string;
      explanationSi: string;
    };
  }[];
  pastPaperQuestions: {
    id: string;
    year: number;
    paperType: 'Paper I' | 'Paper II';
    badgeText: string;
    questionEn: string;
    questionSi: string;
    type: 'mcq' | 'structured';
    options?: { id: string; en: string; si: string }[];
    correctOptionId?: string;
    sampleAnswerEn?: string;
    sampleAnswerSi?: string;
    explanationEn: string;
    explanationSi: string;
  }[];
  glossary?: GlossaryTerm[];
}

export const ALL_LESSONS_DATA: Record<string, GeneralLessonData> = {
  'g10-u2': G10_U2_DATA,
  'g10-u3': G10_U3_DATA,
  'g10-u4': G10_U4_DATA,
  'g10-u5': G10_U5_DATA,
  'g10-u6': G10_U6_DATA,
  'g10-u7': G10_U7_DATA,
  'g10-u8': G10_U8_DATA,
  'g11-u1': G11_U1_DATA,
  'g11-u2': G11_U2_DATA,
  'g11-u3': G11_U3_DATA,
  'g11-u4': G11_U4_DATA,
  'g11-u5': G11_U5_DATA,
  'g11-u6': G11_U6_DATA,
};
