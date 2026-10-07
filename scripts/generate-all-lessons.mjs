import fs from 'fs';
import path from 'path';
import { parseSectionA, parseSectionB } from './parser-core.mjs';

const LESSON_CONFIGS = [
  {
    key: 'g10-u2',
    exportVar: 'G10_U2_DATA',
    fileName: 'g10u2.ts',
    grade: '10',
    unitNumber: 2,
    titleEn: 'The Computer System & System Components',
    titleSi: 'පරිගණක පද්ධතිය සහ පද්ධති සංරචක',
    files: ['grade10-lesson02-study-guide-v2.md'],
    widgetSubtopics: { '2.1': 'system-diagram' }
  },
  {
    key: 'g10-u3',
    exportVar: 'G10_U3_DATA',
    fileName: 'g10u3.ts',
    grade: '10',
    unitNumber: 3,
    titleEn: 'Data Representation & Logic Gates',
    titleSi: 'දත්ත නිරූපණය සහ ලොජික් ද්වාර',
    files: ['grade10-lesson03-study-guide-v2 (1).md', 'grade10-lesson04-study-guide-v2.md'],
    widgetSubtopics: { '3.5': 'number-converter', '4.2': 'logic-gate' }
  },
  {
    key: 'g10-u4',
    exportVar: 'G10_U4_DATA',
    fileName: 'g10u4.ts',
    grade: '10',
    unitNumber: 4,
    titleEn: 'Operating Systems',
    titleSi: 'මෙහෙයුම් පද්ධති',
    files: ['grade10-lesson05-study-guide-v2.md']
  },
  {
    key: 'g10-u5',
    exportVar: 'G10_U5_DATA',
    fileName: 'g10u5.ts',
    grade: '10',
    unitNumber: 5,
    titleEn: 'Word Processing',
    titleSi: 'වචන සකසුම්',
    files: ['grade10-lesson06-study-guide.md']
  },
  {
    key: 'g10-u6',
    exportVar: 'G10_U6_DATA',
    fileName: 'g10u6.ts',
    grade: '10',
    unitNumber: 6,
    titleEn: 'Electronic Spreadsheets',
    titleSi: 'ඉලෙක්ට්‍රොනික පැතුරුම්පත්',
    files: ['grade10-lesson07-study-guide.md']
  },
  {
    key: 'g10-u7',
    exportVar: 'G10_U7_DATA',
    fileName: 'g10u7.ts',
    grade: '10',
    unitNumber: 7,
    titleEn: 'Electronic Presentations',
    titleSi: 'ඉලෙක්ට්‍රොනික සමර්පණ',
    files: ['grade10-lesson08-presentation-study-guide.md']
  },
  {
    key: 'g10-u8',
    exportVar: 'G10_U8_DATA',
    fileName: 'g10u8.ts',
    grade: '10',
    unitNumber: 8,
    titleEn: 'Database Management',
    titleSi: 'දත්ත සමුදා කළමනාකරණය',
    files: ['grade10-lesson08-study-guide.md']
  },
  {
    key: 'g11-u1',
    exportVar: 'G11_U1_DATA',
    fileName: 'g11u1.ts',
    grade: '11',
    unitNumber: 1,
    titleEn: 'Programming, Algorithms & Problem Solving',
    titleSi: 'ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම',
    files: ['grade11-lesson01-study-guide-v2.md']
  },
  {
    key: 'g11-u2',
    exportVar: 'G11_U2_DATA',
    fileName: 'g11u2.ts',
    grade: '11',
    unitNumber: 2,
    titleEn: 'System Development Life Cycle (SDLC)',
    titleSi: 'පද්ධති සංවර්ධන ජීවන චක්‍රය',
    files: ['grade11-lesson02-study-guide-v2.md']
  },
  {
    key: 'g11-u3',
    exportVar: 'G11_U3_DATA',
    fileName: 'g11u3.ts',
    grade: '11',
    unitNumber: 3,
    titleEn: 'The Internet and Electronic Mail',
    titleSi: 'අන්තර්ජාලය සහ විද්‍යුත් තැපෑල',
    files: ['grade11-lesson03-study-guide-v2.md']
  },
  {
    key: 'g11-u4',
    exportVar: 'G11_U4_DATA',
    fileName: 'g11u4.ts',
    grade: '11',
    unitNumber: 4,
    titleEn: 'Use of Multimedia Technologies',
    titleSi: 'බහුමාධ්‍ය භාවිතය',
    files: ['grade11-lesson04-study-guide.md']
  },
  {
    key: 'g11-u5',
    exportVar: 'G11_U5_DATA',
    fileName: 'g11u5.ts',
    grade: '11',
    unitNumber: 5,
    titleEn: 'Web Designing using HTML & CSS',
    titleSi: 'HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය',
    files: ['grade11-lesson05-study-guide.md']
  },
  {
    key: 'g11-u6',
    exportVar: 'G11_U6_DATA',
    fileName: 'g11u6.ts',
    grade: '11',
    unitNumber: 6,
    titleEn: 'ICT and Society, Ethics & Legal Issues',
    titleSi: 'තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය',
    files: ['grade11-lesson06-study-guide.md']
  }
];

const lessonsDir = path.resolve('src/data/lessons');
if (!fs.existsSync(lessonsDir)) {
  fs.mkdirSync(lessonsDir, { recursive: true });
}

console.log('Generating modular lesson TypeScript files...');

for (const cfg of LESSON_CONFIGS) {
  let allSubtopics = [];
  let allQuestions = [];

  for (const f of cfg.files) {
    const rawContent = fs.readFileSync(path.join('public/lessons', f), 'utf8');
    const prefixMatch = f.match(/lesson0?(\d+)/i);
    const prefix = prefixMatch ? (cfg.grade === '11' ? `11.${prefixMatch[1]}` : prefixMatch[1]) : `${cfg.unitNumber}`;

    const subtopics = parseSectionA(rawContent, prefix);
    const questions = parseSectionB(rawContent, cfg.key);

    // Attach widgets if specified
    if (cfg.widgetSubtopics) {
      subtopics.forEach(st => {
        const widget = cfg.widgetSubtopics[st.number] || cfg.widgetSubtopics[st.id];
        if (widget) {
          if (!st.examples) st.examples = [];
          st.examples.unshift({
            id: `ex-widget-${st.id}`,
            titleEn: `Interactive Tool`,
            titleSi: `අන්තර්ක්‍රියාකාරී මෙවලම`,
            isInteractiveWidget: widget
          });
        }
      });
    }

    allSubtopics.push(...subtopics);
    allQuestions.push(...questions);
  }

  // Ensure unique IDs for subtopics and blocks
  allSubtopics = allSubtopics.map((st, sIdx) => ({
    ...st,
    id: `${cfg.key}-st-${sIdx + 1}`,
    blocks: st.blocks.map((b, bIdx) => ({
      ...b,
      id: `b-${cfg.key}-${sIdx + 1}-${bIdx + 1}`
    })),
    checkpointQuiz: st.checkpointQuiz ? {
      ...st.checkpointQuiz,
      id: `q-${cfg.key}-${sIdx + 1}`
    } : undefined
  }));

  // Ensure unique IDs for questions
  allQuestions = allQuestions.map((q, qIdx) => ({
    ...q,
    id: `pp-${cfg.key}-${q.year}-${qIdx + 1}`
  }));

  const lessonObj = {
    id: cfg.key,
    grade: cfg.grade,
    unitNumber: cfg.unitNumber,
    titleEn: cfg.titleEn,
    titleSi: cfg.titleSi,
    subtopics: allSubtopics,
    pastPaperQuestions: allQuestions
  };

  const tsContent = `// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const ${cfg.exportVar}: GeneralLessonData = ${JSON.stringify(lessonObj, null, 2)};
`;

  const outPath = path.join(lessonsDir, cfg.fileName);
  fs.writeFileSync(outPath, tsContent, 'utf8');
  console.log(`Generated ${cfg.fileName}: ${allSubtopics.length} subtopics, ${allQuestions.length} past papers.`);
}

console.log('All 13 modular lesson files generated successfully!');
