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

const dataRepSubtopics = G10_U3_DATA.subtopics.filter((st) => st.number.startsWith('3.'));
const logicGateSubtopics = G10_U3_DATA.subtopics.filter((st) => st.number.startsWith('4.'));

const dataRepQuestions = G10_U3_DATA.pastPaperQuestions.filter(
  (q) => !q.questionEn.toLowerCase().includes('gate') && !q.questionEn.toLowerCase().includes('truth table')
);
const logicGateQuestions = G10_U3_DATA.pastPaperQuestions.filter(
  (q) =>
    q.questionEn.toLowerCase().includes('gate') ||
    q.questionEn.toLowerCase().includes('truth table') ||
    q.questionEn.toLowerCase().includes('circuit')
);

export const G10_U3_DATA_REP: GeneralLessonData = {
  ...G10_U3_DATA,
  id: 'g10-u3',
  unitNumber: 3,
  titleEn: 'Data Representation in Computer Systems',
  titleSi: 'පරිගණක පද්ධති තුළ දත්ත නිරූපණය',
  subtopics: dataRepSubtopics.length > 0 ? dataRepSubtopics : G10_U3_DATA.subtopics,
  pastPaperQuestions: dataRepQuestions.length > 0 ? dataRepQuestions : G10_U3_DATA.pastPaperQuestions,
};

export const G10_U4_LOGIC: GeneralLessonData = {
  ...G10_U3_DATA,
  id: 'g10-u4',
  unitNumber: 4,
  titleEn: 'Fundamental Logic Gates & Boolean Logic',
  titleSi: 'මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය',
  subtopics: logicGateSubtopics.length > 0 ? logicGateSubtopics : G10_U3_DATA.subtopics,
  pastPaperQuestions: logicGateQuestions.length > 0 ? logicGateQuestions : G10_U3_DATA.pastPaperQuestions,
};

export const G10_U5_OS: GeneralLessonData = {
  ...G10_U4_DATA,
  id: 'g10-u5',
  unitNumber: 5,
};

export const G10_U6_WORD: GeneralLessonData = {
  ...G10_U5_DATA,
  id: 'g10-u6',
  unitNumber: 6,
};

export const G10_U7_SHEET: GeneralLessonData = {
  ...G10_U6_DATA,
  id: 'g10-u7',
  unitNumber: 7,
};

export const G10_U8_PRES: GeneralLessonData = {
  ...G10_U7_DATA,
  id: 'g10-u8',
  unitNumber: 8,
};

export const G10_U9_DBMS: GeneralLessonData = {
  ...G10_U8_DATA,
  id: 'g10-u9',
  unitNumber: 9,
};

export const ALL_LESSONS_DATA: Record<string, GeneralLessonData> = {
  'g10-u2': G10_U2_DATA,
  'g10-u3': G10_U3_DATA_REP,
  'g10-u4': G10_U4_LOGIC,
  'g10-u5': G10_U5_OS,
  'g10-u6': G10_U6_WORD,
  'g10-u7': G10_U7_SHEET,
  'g10-u8': G10_U8_PRES,
  'g10-u9': G10_U9_DBMS,
  'g11-u1': G11_U1_DATA,
  'g11-u2': G11_U2_DATA,
  'g11-u3': G11_U3_DATA,
  'g11-u4': G11_U4_DATA,
  'g11-u5': G11_U5_DATA,
  'g11-u6': G11_U6_DATA,
};
