import fs from 'fs';
import path from 'path';

export interface IngestedOption {
  id: string; // 'optA', 'optB', 'optC', 'optD'
  key: 'A' | 'B' | 'C' | 'D';
  en: string;
  si: string;
}

export interface IngestedQuestion {
  id: string;
  lessonId: string;
  questionNumber: number;
  promptEn: string;
  promptSi: string;
  options: IngestedOption[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  correctOptionId: string;
  explanationEn: string;
  explanationSi: string;
  syllabusRef?: string;
}

const FILE_TO_LESSON_MAP: Record<string, string> = {
  'grade10-lesson01-flashcard-quiz-bank.md': 'g10-u1',
  'grade10-lesson02-flashcard-quiz-bank.md': 'g10-u2',
  'grade10-lesson03-flashcard-quiz-bank.md': 'g10-u3',
  'grade10-lesson04-flashcard-quiz-bank.md': 'g10-u4',
  'grade10-lesson05-flashcard-quiz-bank.md': 'g10-u5',
  'grade10-lesson06-flashcard-quiz-bank.md': 'g10-u6',
  'grade10-lesson07-flashcard-quiz-bank.md': 'g10-u7',
  'grade10-lesson08-flashcard-quiz-bank.md': 'g10-u8',
  'grade10-lesson09-flashcard-quiz-bank.md': 'g10-u9',
  'grade11-lesson01-flashcard-quiz-bank.md': 'g11-u1',
  'grade11-lesson02-flashcard-quiz-bank.md': 'g11-u2',
  'grade11-lesson03-flashcard-quiz-bank.md': 'g11-u3',
  'grade11-lesson04-flashcard-quiz-bank.md': 'g11-u4',
  'grade11-lesson05-flashcard-quiz-bank.md': 'g11-u5',
  'grade11-lesson06-flashcard-quiz-bank.md': 'g11-u6',
};

function cleanText(str: string): string {
  if (!str) return '';
  return str
    .replace(/^[\*\-\s]+/, '')
    .replace(/[\*\-\s]+$/, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

function splitBilingual(raw: string): { en: string; si: string } {
  const parts = raw.split(/\s*(?:\/|\;)\s*/);
  if (parts.length >= 2) {
    return {
      en: cleanText(parts[0]),
      si: cleanText(parts.slice(1).join(' / '))
    };
  }
  return {
    en: cleanText(raw),
    si: cleanText(raw)
  };
}

export function parseBankFile(filePath: string, lessonId: string): IngestedQuestion[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const sections = content
    .split(/\n(?=(?:###|####)\s+(?:🎴\s+)?(?:Question\s*(?:\/\s*Flashcard)?\s*#?|Q)\d+)/i)
    .slice(1);

  const questions: IngestedQuestion[] = [];

  sections.forEach((sec, idx) => {
    const qNum = idx + 1;
    let promptEn = '';
    let promptSi = '';

    // Extract prompt variations
    const enMatch1 = sec.match(/(?:^|\n)\s*(?:\*\s*)?\*\*\[?English\]?:\*\*\s*([^\n\r]+)/i);
    const siMatch1 = sec.match(/(?:^|\n)\s*(?:\*\s*)?\*\*\[?(?:Sinhala|සිංහල)\]?:\*\*\s*([^\n\r]+)/i);
    const enMatch3 = sec.match(/\*\*Question\s*(?:\/\s*ප්‍රශ්නය)?:\*\*\s*\n([^\n\r]+)\n([^\n\r]+)/i);
    const boldHeaderMatch = sec.match(/\*\*([^*]+)\*\*\s*\n\s*\*([^*]+)\*/);

    if (enMatch3) {
      promptEn = enMatch3[1].trim();
      promptSi = enMatch3[2].trim();
    } else if (enMatch1) {
      promptEn = enMatch1[1].trim();
      if (siMatch1) promptSi = siMatch1[1].trim();
    } else if (boldHeaderMatch) {
      promptEn = boldHeaderMatch[1].trim();
      promptSi = boldHeaderMatch[2].trim();
    }

    if (!promptEn) {
      const headerQ = sec.match(/(?:###|####)\s+(?:🎴\s+)?(?:Question|Q)\d*[\.\s\:\-\|]*(.+)/i);
      if (headerQ) {
        const parts = headerQ[1].split(/\s*\/\s*/);
        promptEn = parts[0]?.trim() || '';
        promptSi = parts[1]?.trim() || '';
      }
    }

    // Extract options
    const optMatchA = sec.match(/(?:-\s*|\n\s*)\(?\*{0,2}A\*{0,2}\)?[\.\)]\s*([^\n\r]+)/i);
    const optMatchB = sec.match(/(?:-\s*|\n\s*)\(?\*{0,2}B\*{0,2}\)?[\.\)]\s*([^\n\r]+)/i);
    const optMatchC = sec.match(/(?:-\s*|\n\s*)\(?\*{0,2}C\*{0,2}\)?[\.\)]\s*([^\n\r]+)/i);
    const optMatchD = sec.match(/(?:-\s*|\n\s*)\(?\*{0,2}D\*{0,2}\)?[\.\)]\s*([^\n\r]+)/i);

    const parseOpt = (raw: string | undefined, key: 'A' | 'B' | 'C' | 'D'): IngestedOption => {
      const clean = raw ? cleanText(raw) : '';
      const { en, si } = splitBilingual(clean);
      return {
        id: `opt-${key.toLowerCase()}`,
        key,
        en: en || clean,
        si: si || clean
      };
    };

    const options: IngestedOption[] = [
      parseOpt(optMatchA ? optMatchA[1] : '', 'A'),
      parseOpt(optMatchB ? optMatchB[1] : '', 'B'),
      parseOpt(optMatchC ? optMatchC[1] : '', 'C'),
      parseOpt(optMatchD ? optMatchD[1] : '', 'D'),
    ];

    // Correct Answer
    const corrMatch = sec.match(/(?:Correct Answer|නිවැරදි පිළිතුර|Answer\s*\/\s*පිළිතුර)[\s\*:]+[\*\s]*\(?([A-D])\)?/i);
    const correctKey = (corrMatch ? corrMatch[1].toUpperCase() : 'A') as 'A' | 'B' | 'C' | 'D';

    // Explanations - search only in the tail section after Explanation or Answer
    let expEn = '';
    let expSi = '';

    const expSplitIdx = sec.search(/(?:Explanation|විස්තරය|Flashcard Back|Correct Answer|නිවැරදි පිළිතුර)/i);
    const expSec = expSplitIdx !== -1 ? sec.slice(expSplitIdx) : sec;

    const expEnMatch1 = expSec.match(/(?:^|\n)\s*[-*]\s*\*\*\[?English\]?:\*\*\s*([^\n\r]+)/i);
    const expSiMatch1 = expSec.match(/(?:^|\n)\s*[-*]\s*\*\*\[?(?:Sinhala|සිංහල)\]?:\*\*\s*([^\n\r]+)/i);
    const expEnMatch2 = expSec.match(/\*\s*\*English:\*\s*([^\n\r]+)/i);
    const expSiMatch2 = expSec.match(/\*\s*\*සිංහල:\*\s*([^\n\r]+)/i);
    const expEnMatch3 = expSec.match(/Explanation\s*\(English\):\s*\n([^\n\r]+)/i);
    const expSiMatch3 = expSec.match(/පැහැදිලි කිරීම\s*\(සිංහල\):\s*\n([^\n\r]+)/i);
    const genExp = expSec.match(/Explanation\s*\/[^\n\r]+:\s*\n([^\n\r]+)/i);

    if (expEnMatch1) expEn = expEnMatch1[1];
    else if (expEnMatch2) expEn = expEnMatch2[1];
    else if (expEnMatch3) expEn = expEnMatch3[1];
    else if (genExp) expEn = genExp[1];

    if (expSiMatch1) expSi = expSiMatch1[1];
    else if (expSiMatch2) expSi = expSiMatch2[1];
    else if (expSiMatch3) expSi = expSiMatch3[1];

    if (!expEn && !expSi) {
      expEn = `Option (${correctKey}) is the correct official syllabus answer.`;
      expSi = `(${correctKey}) යනු විෂය නිර්දේශයේ නිවැරදි පිළිතුර වේ.`;
    } else if (!expSi) {
      expSi = expEn;
    } else if (!expEn) {
      expEn = expSi;
    }

    questions.push({
      id: `${lessonId}-q${qNum}`,
      lessonId,
      questionNumber: qNum,
      promptEn: cleanText(promptEn),
      promptSi: cleanText(promptSi) || cleanText(promptEn),
      options,
      correctKey,
      correctOptionId: `opt-${correctKey.toLowerCase()}`,
      explanationEn: cleanText(expEn),
      explanationSi: cleanText(expSi),
      syllabusRef: `${lessonId.toUpperCase()}.${qNum}`
    });
  });

  return questions;
}

export function runMasterIngestion() {
  const quizDir = path.resolve(process.cwd(), 'public/quiz_flashcard');
  const outDir = path.resolve(process.cwd(), 'src/data/questionBanks');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const allManifest: Record<string, IngestedQuestion[]> = {};
  let totalCount = 0;

  for (const [fileName, lessonId] of Object.entries(FILE_TO_LESSON_MAP)) {
    const fullPath = path.join(quizDir, fileName);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      continue;
    }

    const questions = parseBankFile(fullPath, lessonId);
    allManifest[lessonId] = questions;
    totalCount += questions.length;

    // Write individual lesson JSON
    fs.writeFileSync(
      path.join(outDir, `${lessonId}.json`),
      JSON.stringify(questions, null, 2),
      'utf-8'
    );
    console.log(`✓ Ingested ${lessonId} (${fileName}): ${questions.length} questions`);
  }

  // Write master index ts file
  const indexCode = `/**
 * AUTO-GENERATED MASTER QUESTION BANK MANIFEST
 * Total Authentic Dual-Medium Questions Ingested: ${totalCount}
 */

import { IngestedQuestion, IngestedOption } from '../../../scripts/ingest-master-banks';
export type { IngestedQuestion, IngestedOption };

${Object.keys(allManifest)
  .map(id => `import ${id.replace('-', '_')} from './${id}.json';`)
  .join('\n')}

export const MASTER_QUESTION_BANKS: Record<string, IngestedQuestion[]> = {
${Object.keys(allManifest)
  .map(id => `  '${id}': ${id.replace('-', '_')} as IngestedQuestion[],`)
  .join('\n')}
};

export function getLessonQuestions(lessonId: string): IngestedQuestion[] {
  return MASTER_QUESTION_BANKS[lessonId] || [];
}
`;

  fs.writeFileSync(path.join(outDir, 'index.ts'), indexCode, 'utf-8');
  console.log(`\n🎉 MASTER QUESTION BANK READY: ${totalCount} TOTAL QUESTIONS INGESTED.`);
}

// Run if called directly
runMasterIngestion();
