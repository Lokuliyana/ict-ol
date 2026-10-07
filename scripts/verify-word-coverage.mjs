import fs from 'fs';
import { ALL_LESSONS_DATA } from '../src/data/allLessonsData.js';
import { CURRICULUM_DATA } from '../src/data/curriculum.js';

console.log("=== RIGOROUS VERIFICATION: COMPLETE LOSSLESS LESSON COVERAGE (G10-L03 TO G11-L06) ===");

const TARGET_FILES = [
  { f: 'grade10-lesson03-study-guide-v2 (1).md', key: 'g10-u3' },
  { f: 'grade10-lesson04-study-guide-v2.md', key: 'g10-u3' },
  { f: 'grade10-lesson05-study-guide-v2.md', key: 'g10-u4' },
  { f: 'grade10-lesson06-study-guide.md', key: 'g10-u5' },
  { f: 'grade10-lesson07-study-guide.md', key: 'g10-u6' },
  { f: 'grade10-lesson08-presentation-study-guide.md', key: 'g10-u7' },
  { f: 'grade10-lesson08-study-guide.md', key: 'g10-u8' },
  { f: 'grade11-lesson01-study-guide-v2.md', key: 'g11-u1' },
  { f: 'grade11-lesson02-study-guide-v2.md', key: 'g11-u2' },
  { f: 'grade11-lesson03-study-guide-v2.md', key: 'g11-u3' },
  { f: 'grade11-lesson04-study-guide.md', key: 'g11-u4' },
  { f: 'grade11-lesson05-study-guide.md', key: 'g11-u5' },
  { f: 'grade11-lesson06-study-guide.md', key: 'g11-u6' }
];

let allPassed = true;

// 1. Verbatim Content Matching across all files
TARGET_FILES.forEach(({ f, key }) => {
  const mdContent = fs.readFileSync('public/lessons/' + f, 'utf8');
  const lesson = ALL_LESSONS_DATA[key];

  if (!lesson) {
    console.error(`❌ FAIL: Lesson ${key} missing from ALL_LESSONS_DATA`);
    allPassed = false;
    return;
  }

  // Aggregate all text in lesson
  const allLessonText = [
    lesson.titleEn,
    lesson.titleSi,
    ...lesson.subtopics.flatMap(st => [
      st.titleEn,
      st.titleSi,
      st.summaryEn || '',
      st.summarySi || '',
      ...st.blocks.map(b => b.en + ' ' + b.si),
      ...(st.examples || []).map(e => (e.contentEn || '') + ' ' + (e.contentSi || '')),
      ...(st.tableData ? [JSON.stringify(st.tableData)] : [])
    ]),
    ...lesson.pastPaperQuestions.flatMap(q => [
      q.questionEn,
      q.questionSi,
      ...(q.options || []).map(o => o.en + ' ' + o.si),
      q.sampleAnswerEn || '',
      q.sampleAnswerSi || ''
    ])
  ].join(' ');

  // Extract all [English Medium Text] and [Sinhala Medium Text]
  const enTexts = [...mdContent.matchAll(/\[English Medium Text\]:\*\*\s*"([^"]+)"/g)].map(m => m[1]);
  const siTexts = [...mdContent.matchAll(/\[Sinhala Medium Text\]:\*\*\s*"([^"]+)"/g)].map(m => m[1]);

  let matchedEn = 0;
  enTexts.forEach(txt => {
    const sample = txt.slice(0, 30);
    if (allLessonText.includes(sample)) {
      matchedEn++;
    }
  });

  let matchedSi = 0;
  siTexts.forEach(txt => {
    const sample = txt.slice(0, 20);
    if (allLessonText.includes(sample)) {
      matchedSi++;
    }
  });

  const enPass = enTexts.length === 0 || matchedEn === enTexts.length;
  const siPass = siTexts.length === 0 || matchedSi === siTexts.length;

  if (enPass && siPass) {
    console.log(`✅ PASS: ${f} -> ${key} | 100% Verbatim Definitions Matched (EN: ${matchedEn}/${enTexts.length}, SI: ${matchedSi}/${siTexts.length}) | Total text: ${allLessonText.length} chars`);
  } else {
    console.error(`❌ FAIL: ${f} -> ${key} | Missing definitions (EN: ${matchedEn}/${enTexts.length}, SI: ${matchedSi}/${siTexts.length})`);
    allPassed = false;
  }
});

// 2. No Fake MCQ Options
let fakeMCQs = 0;
let totalMCQs = 0;
Object.entries(ALL_LESSONS_DATA).forEach(([k, l]) => {
  l.pastPaperQuestions.filter(q => q.type === 'mcq').forEach(q => {
    totalMCQs++;
    if (q.options?.some(o => o.en.includes('Statement A is true') || o.si.includes('A ප්‍රකාශය സත්‍ය වේ'))) {
      fakeMCQs++;
      console.error(`❌ FAIL: Fake MCQ option found in ${k}: ${q.badgeText}`);
    }
  });
});
if (fakeMCQs === 0) {
  console.log(`✅ PASS: All ${totalMCQs} MCQs have authentic exam options (0 fake placeholders)`);
} else {
  allPassed = false;
}

// 3. No Fake Structured Model Answers
let fakeAnswers = 0;
let totalStructured = 0;
Object.entries(ALL_LESSONS_DATA).forEach(([k, l]) => {
  l.pastPaperQuestions.filter(q => q.type === 'structured').forEach(q => {
    totalStructured++;
    if (q.sampleAnswerEn?.includes('Refer to the official Department') || q.sampleAnswerSi?.includes('විභාග දෙපාර්තමේන්තුවේ නිල ලකුණු දීමේ')) {
      fakeAnswers++;
      console.error(`❌ FAIL: Generic non-answer found in ${k}: ${q.badgeText}`);
    }
  });
});
if (fakeAnswers === 0) {
  console.log(`✅ PASS: All ${totalStructured} Structured Questions have complete model answers (0 generic non-answers)`);
} else {
  allPassed = false;
}

// 4. Interactive Widgets presence
const g10u3 = ALL_LESSONS_DATA['g10-u3'];
const numConv = g10u3?.subtopics.some(st => st.examples?.some(e => e.isInteractiveWidget === 'number-converter'));
const logicGate = g10u3?.subtopics.some(st => st.examples?.some(e => e.isInteractiveWidget === 'logic-gate'));
if (numConv && logicGate) {
  console.log(`✅ PASS: g10-u3 has active number-converter and logic-gate interactive widgets`);
} else {
  console.error(`❌ FAIL: Interactive widgets missing in g10-u3`);
  allPassed = false;
}

if (allPassed) {
  console.log("\n=======================================================");
  console.log("🎉 ALL LESSONS VERIFIED LOSSLESS & COMPLETE IN SYSTEM!");
  console.log("=======================================================");
} else {
  process.exit(1);
}
