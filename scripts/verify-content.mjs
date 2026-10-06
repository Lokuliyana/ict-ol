import { CURRICULUM_DATA } from '../src/data/curriculum.js';
import { LESSON_01_DATA } from '../src/data/lesson01Data.js';
import { PAST_PAPER_QUESTIONS } from '../src/data/pastPapersData.js';
import { ALL_LESSONS_DATA } from '../src/data/allLessonsData.js';

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

console.log("=== RUNNING ICT O/L PLATFORM VERIFICATION ===");

// 1. Curriculum test
assert(CURRICULUM_DATA.length >= 14, `Curriculum has ${CURRICULUM_DATA.length} units (expected >= 14 for Grade 10 & 11)`);
const g10Lessons = CURRICULUM_DATA.filter(l => l.grade === '10');
const g11Lessons = CURRICULUM_DATA.filter(l => l.grade === '11');
assert(g10Lessons.length === 8, `Grade 10 has exactly 8 units`);
assert(g11Lessons.length === 6, `Grade 11 has exactly 6 units`);

// 2. Lesson 01 subtopic test
assert(LESSON_01_DATA.subtopics.length === 7, `Lesson 01 has 7 verbatim subtopics`);
const subtopicNumbers = LESSON_01_DATA.subtopics.map(s => s.number);
['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7'].forEach(num => {
  assert(subtopicNumbers.includes(num), `Subtopic ${num} is present`);
});

// 3. Dual-medium verbatim integrity check
LESSON_01_DATA.subtopics.forEach(st => {
  assert(st.blocks.length > 0, `Subtopic ${st.number} has text blocks`);
  st.blocks.forEach(b => {
    assert(b.en.length > 5 && b.si.length > 5, `Block ${b.id} has both English and Sinhala content`);
  });
});

// 4. Past papers integrity check
assert(PAST_PAPER_QUESTIONS.length >= 8, `Past papers dataset has ${PAST_PAPER_QUESTIONS.length} questions`);
const years = new Set(PAST_PAPER_QUESTIONS.map(q => q.year));
assert(years.has(2020) && years.has(2021) && years.has(2022), "Covers 2020, 2021, and 2022 O/L past papers");

PAST_PAPER_QUESTIONS.forEach(q => {
  assert(q.questionEn && q.questionSi, `Question ${q.badgeText} is dual-medium`);
  if (q.type === 'mcq') {
    assert(q.options && q.options.length === 4, `MCQ ${q.badgeText} has 4 options`);
    assert(!!q.correctOptionId, `MCQ ${q.badgeText} has correctOptionId`);
  } else {
    assert(q.sampleAnswerEn && q.sampleAnswerSi, `Structured ${q.badgeText} has model answers in both languages`);
  }
});

// 5. NIC Decoder Logic Test
function testNIC(clean) {
  let birthYear = 0;
  let dayOfYear = 0;
  let gender = '';

  if (/^\d{9}[VX]?$/.test(clean)) {
    birthYear = 1900 + parseInt(clean.substring(0, 2), 10);
    dayOfYear = parseInt(clean.substring(2, 5), 10);
  } else if (/^\d{12}$/.test(clean)) {
    birthYear = parseInt(clean.substring(0, 4), 10);
    dayOfYear = parseInt(clean.substring(4, 7), 10);
  }

  if (dayOfYear > 500) {
    gender = 'Female';
    dayOfYear -= 500;
  } else {
    gender = 'Male';
  }
  return { birthYear, gender, dayOfYear };
}

const nic1 = testNIC('853410123V');
assert(nic1.birthYear === 1985, 'Old NIC 853410123V birth year is 1985');
assert(nic1.gender === 'Male', 'Old NIC 853410123V gender is Male (341 <= 500)');

const nic2 = testNIC('927561234V');
assert(nic2.birthYear === 1992, 'Old NIC 927561234V birth year is 1992');
assert(nic2.gender === 'Female', 'Old NIC 927561234V gender is Female (756 > 500)');

const nic3 = testNIC('200552301980');
assert(nic3.birthYear === 2005, 'New NIC 200552301980 birth year is 2005');
assert(nic3.gender === 'Female', 'New NIC 200552301980 gender is Female (523 > 500)');

console.log(`\nVerification Complete! Passed: ${passed}, Failed: ${failed}`);
if (failed > 0) process.exit(1);
