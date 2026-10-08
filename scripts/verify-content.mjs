import { CURRICULUM_DATA } from '../src/data/curriculum.js';
import { LESSON_01_DATA } from '../src/data/lesson01Data.js';
import { PAST_PAPER_QUESTIONS } from '../src/data/pastPapersData.js';
import { ALL_LESSONS_DATA } from '../src/data/allLessonsData.js';
import { decodeSriLankanNIC } from '../src/utils/nicDecoder.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

console.log("=== RUNNING RIGOROUS ICT O/L PLATFORM VERIFICATION ===");

// 1. Curriculum test
assert(CURRICULUM_DATA.length === 15, `Curriculum has exactly 15 units (found ${CURRICULUM_DATA.length})`);
const g10Lessons = CURRICULUM_DATA.filter(l => l.grade === '10');
const g11Lessons = CURRICULUM_DATA.filter(l => l.grade === '11');
assert(g10Lessons.length === 9, `Grade 10 has exactly 9 units`);
assert(g11Lessons.length === 6, `Grade 11 has exactly 6 units`);

// 2. Full Coverage Test: EVERY curriculum unit must have dedicated dual-medium lesson data
const allCurriculumIds = CURRICULUM_DATA.map(l => l.id);
allCurriculumIds.forEach(id => {
  if (id === 'g10-u1') {
    assert(LESSON_01_DATA && LESSON_01_DATA.subtopics.length >= 7, `Unit g10-u1 has dedicated lesson data with >= 7 subtopics`);
  } else {
    const lesson = ALL_LESSONS_DATA[id];
    assert(!!lesson, `Curriculum unit ${id} is present in ALL_LESSONS_DATA`);
    if (lesson) {
      assert(lesson.subtopics.length > 0, `Unit ${id} (${lesson.titleEn}) has at least one subtopic`);
      assert(lesson.pastPaperQuestions.length > 0, `Unit ${id} has past paper questions`);
      lesson.subtopics.forEach(st => {
        assert(st.blocks.length > 0, `Subtopic ${st.number} in ${id} has text blocks`);
        st.blocks.forEach(b => {
          assert(b.en && b.en.length > 5, `Block ${b.id} in ${id} has English content`);
          assert(b.si && b.si.length > 5, `Block ${b.id} in ${id} has Sinhala content`);
        });
        if (st.checkpointQuiz) {
          assert(!!st.checkpointQuiz.questionEn && !!st.checkpointQuiz.questionSi, `Quiz in ${st.id} is bilingual`);
          assert(st.checkpointQuiz.options.length >= 2, `Quiz in ${st.id} has valid options`);
          assert(!!st.checkpointQuiz.correctOptionId, `Quiz in ${st.id} has a correctOptionId`);
        }
      });
    }
  }
});

// 3. Lesson 01 subtopic test
assert(LESSON_01_DATA.subtopics.length === 7, `Lesson 01 has 7 verbatim subtopics`);
const subtopicNumbers = LESSON_01_DATA.subtopics.map(s => s.number);
['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7'].forEach(num => {
  assert(subtopicNumbers.includes(num), `Subtopic ${num} is present`);
});

// 4. Past papers coverage test: 2020 to 2025
const allQuestions = [
  ...PAST_PAPER_QUESTIONS,
  ...Object.values(ALL_LESSONS_DATA).flatMap(l => l.pastPaperQuestions)
];

assert(PAST_PAPER_QUESTIONS.length >= 10, `Lesson 01 past papers dataset has ${PAST_PAPER_QUESTIONS.length} questions`);
const yearsCovered = new Set(PAST_PAPER_QUESTIONS.map(q => q.year));
[2020, 2021, 2022, 2023, 2024, 2025].forEach(yr => {
  assert(yearsCovered.has(yr), `Past paper year ${yr} is covered in Lesson 01 questions`);
});

// Overall past papers integrity check
allQuestions.forEach(q => {
  assert(!!q.questionEn && !!q.questionSi, `Question ${q.badgeText || q.id} is dual-medium`);
  if (q.type === 'mcq') {
    assert(q.options && q.options.length === 4, `MCQ ${q.badgeText} has 4 options`);
    assert(!!q.correctOptionId, `MCQ ${q.badgeText} has correctOptionId`);
  } else {
    assert(!!q.sampleAnswerEn && !!q.sampleAnswerSi, `Structured ${q.badgeText} has model answers in both languages`);
  }
});

// 5. Real NIC Decoder Function Test using src/utils/nicDecoder.ts
const dec1 = decodeSriLankanNIC('853410123V');
assert(!dec1.error && !!dec1.result, '853410123V decoded without error');
if (dec1.result) {
  assert(dec1.result.birthYear === 1985, '853410123V birth year is 1985');
  assert(dec1.result.gender.startsWith('Male'), '853410123V gender is Male');
  assert(dec1.result.birthMonth === 'December', '853410123V birth month is December');
  assert(dec1.result.birthDay === 6, '853410123V birth day is 6');
  assert(dec1.result.isOldFormat === true, '853410123V is detected as old format');
}

const dec2 = decodeSriLankanNIC('927561234V');
assert(!dec2.error && !!dec2.result, '927561234V decoded without error');
if (dec2.result) {
  assert(dec2.result.birthYear === 1992, '927561234V birth year is 1992');
  assert(dec2.result.gender.startsWith('Female'), '927561234V gender is Female');
  assert(dec2.result.birthMonth === 'September', '927561234V birth month is September');
  assert(dec2.result.birthDay === 12, '927561234V birth day is 12');
}

const dec3 = decodeSriLankanNIC('200552301980');
assert(!dec3.error && !!dec3.result, '200552301980 decoded without error');
if (dec3.result) {
  assert(dec3.result.birthYear === 2005, '200552301980 birth year is 2005');
  assert(dec3.result.gender.startsWith('Female'), '200552301980 gender is Female');
  assert(dec3.result.birthMonth === 'January', '200552301980 birth month is January');
  assert(dec3.result.birthDay === 23, '200552301980 birth day is 23');
  assert(dec3.result.isOldFormat === false, '200552301980 is detected as new format');
}

// Error cases
const invalidFormat = decodeSriLankanNIC('ABC12345');
assert(!!invalidFormat.error, 'Invalid NIC string yields error');

const invalidDay = decodeSriLankanNIC('854990123V'); // day 499 male is > 366
assert(!!invalidDay.error, 'Invalid day sequence (499 > 366) yields error');

console.log(`\n========================================`);
console.log(`Verification Complete! Total Passed: ${passed}, Total Failed: ${failed}`);
console.log(`========================================`);
if (failed > 0) process.exit(1);
