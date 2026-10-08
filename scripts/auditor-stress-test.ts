import { computeHeartRecharge, computeDailyStreak, MAX_HEARTS, HEART_RECHARGE_MS } from '../src/lib/heartMath';
import { useGameStore } from '../src/lib/store';
import { LEVEL_NODES, getLevelNode, getNextNodeId } from '../src/data/levelNodes';

console.log('=== FORENSIC ADVERSARIAL STRESS TEST SUITE ===\n');

let passCount = 0;
let failCount = 0;

function assert(name: string, condition: boolean, extra?: any) {
  if (condition) {
    passCount++;
    console.log(`✅ PASS: ${name}`);
  } else {
    failCount++;
    console.error(`❌ FAIL: ${name}`, extra || '');
  }
}

// 1. Clock skew backward (lastHeartLossTime in the future)
const skew = computeHeartRecharge(3, 100000, 90000);
assert('Clock skew backward returns current hearts and full recharge countdown', skew.reconciledHearts === 3 && skew.secondsUntilNextHeart === 1800, skew);

// 2. Corrupted hearts (< 0 or > 5)
const under = computeHeartRecharge(-2, 100000, 100000);
assert('Negative hearts clamped to 0', under.reconciledHearts === 0, under);

const over = computeHeartRecharge(10, 100000, 200000);
assert('Overflow hearts clamped to MAX_HEARTS (5) with timer disabled', over.reconciledHearts === 5 && over.secondsUntilNextHeart === 0, over);

// 3. Exact boundary: 1799999ms vs 1800000ms vs 1800001ms
const t0 = 1000000;
const r1799 = computeHeartRecharge(2, t0, t0 + 1799999);
const r1800 = computeHeartRecharge(2, t0, t0 + 1800000);
const r1801 = computeHeartRecharge(2, t0, t0 + 1800001);
assert('Boundary 1799999ms gives 2 hearts with 1s remaining', r1799.reconciledHearts === 2 && r1799.secondsUntilNextHeart === 1, r1799);
assert('Boundary 1800000ms awards 3rd heart and resets timer to 1800s', r1800.reconciledHearts === 3 && r1800.secondsUntilNextHeart === 1800, r1800);
assert('Boundary 1800001ms awards 3rd heart with 1800s remaining', r1801.reconciledHearts === 3 && r1801.secondsUntilNextHeart === 1800, r1801);

// 4. Multiple cycles: 5400000ms (exactly 3 cycles of 1800s)
const rMulti = computeHeartRecharge(1, t0, t0 + 3 * 1800000);
assert('Multi-cycle recovery awards 3 hearts (1 -> 4) and resets timer', rMulti.reconciledHearts === 4 && rMulti.secondsUntilNextHeart === 1800, rMulti);

// 5. Huge offline duration: 100,000,000ms (caps at 5 hearts)
const rHuge = computeHeartRecharge(0, t0, t0 + 100000000);
assert('Huge offline duration caps at MAX_HEARTS and clears timestamp', rHuge.reconciledHearts === 5 && rHuge.updatedLastHeartLossTime === null && rHuge.secondsUntilNextHeart === 0, rHuge);

// 6. Calendar leap year & month/year rollover
const leapStreak = computeDailyStreak(5, '2024-02-28', '2024-02-29');
assert('Leap year streak increment (Feb 28 -> Feb 29)', leapStreak.newStreak === 6, leapStreak);

const monthStreak = computeDailyStreak(5, '2026-02-28', '2026-03-01');
assert('Month rollover streak increment (Feb 28 -> Mar 1)', monthStreak.newStreak === 6, monthStreak);

const yearStreak = computeDailyStreak(10, '2026-12-31', '2027-01-01');
assert('Year rollover streak increment (Dec 31 -> Jan 1)', yearStreak.newStreak === 11, yearStreak);

const sameDayStreak = computeDailyStreak(7, '2026-10-08', '2026-10-08');
assert('Same day study preserves streak without duplicate increment', sameDayStreak.newStreak === 7, sameDayStreak);

const brokenStreak = computeDailyStreak(14, '2026-10-01', '2026-10-08');
assert('Broken streak resets to 1 after multi-day gap', brokenStreak.newStreak === 1, brokenStreak);

// 7. Store Actions Stress Test
useGameStore.getState().refillHearts();
assert('Refill sets 5 hearts', useGameStore.getState().hearts === 5);

// Deduct 5 times
useGameStore.getState().deductHeart(); // 4
useGameStore.getState().deductHeart(); // 3
useGameStore.getState().deductHeart(); // 2
useGameStore.getState().deductHeart(); // 1
const d5 = useGameStore.getState().deductHeart(); // 0
assert('Deducting to 0 returns false', d5 === false && useGameStore.getState().hearts === 0);

// Deduct at 0
const d6 = useGameStore.getState().deductHeart();
assert('Deducting at 0 returns false and does not go negative', d6 === false && useGameStore.getState().hearts === 0);

// Record study session at 0 hearts rewards +1 heart
useGameStore.getState().recordStudySession('g10-u1-s1');
assert('Studying with 0 hearts awards +1 life', useGameStore.getState().hearts === 1);

// 8. Level Completion Star Accuracy Tiers
const res100 = useGameStore.getState().completeNode('g10-u1-s1', 100);
assert('100% accuracy awards 3 stars and 125 XP', res100.stars === 3 && res100.xpAwarded === 125);

const res90 = useGameStore.getState().completeNode('g10-u1-s2', 90);
assert('90% accuracy awards 3 stars and 125 XP', res90.stars === 3 && res90.xpAwarded === 125);

const res89 = useGameStore.getState().completeNode('g10-u1-s3', 89.9);
assert('89.9% accuracy awards 2 stars and 100 XP', res89.stars === 2 && res89.xpAwarded === 100);

const res70 = useGameStore.getState().completeNode('g10-u1-s3', 70);
assert('70% accuracy awards 2 stars and 100 XP', res70.stars === 2 && res70.xpAwarded === 100);

const res69 = useGameStore.getState().completeNode('g10-u2-s1', 69.9);
assert('69.9% accuracy awards 1 star and 75 XP', res69.stars === 1 && res69.xpAwarded === 75);

const res50 = useGameStore.getState().completeNode('g10-u2-s2', 50);
assert('50% accuracy awards 1 star and 75 XP', res50.stars === 1 && res50.xpAwarded === 75);

// 9. Full Curriculum Dataset Schema Integrity across all 22 nodes
let nodesChecked = 0;
let cardsChecked = 0;
let questionsChecked = 0;
const schemaErrors: string[] = [];

for (const [key, node] of Object.entries(LEVEL_NODES)) {
  nodesChecked++;
  if (!node.id || !node.unitId || !node.title?.en || !node.title?.si) {
    schemaErrors.push(`${key}: Missing top-level identity fields`);
  }
  if (!node.theoryCards || node.theoryCards.length === 0) {
    schemaErrors.push(`${key}: Missing theory cards`);
  }
  for (const c of node.theoryCards) {
    cardsChecked++;
    if (!c.id || !c.title?.en || !c.title?.si) schemaErrors.push(`${key} card: missing id/title`);
    if (!c.keyTakeaway?.en || !c.keyTakeaway?.si) schemaErrors.push(`${key} card: missing keyTakeaway`);
    if (!c.bulletPoints || c.bulletPoints.length === 0) schemaErrors.push(`${key} card: missing bulletPoints`);
    for (const bp of c.bulletPoints) {
      if (!bp.en || !bp.si) schemaErrors.push(`${key} card bulletPoint: missing bilingual text`);
    }
  }
  if (!node.quizQuestions || node.quizQuestions.length === 0) {
    schemaErrors.push(`${key}: Missing quiz questions`);
  }
  for (const q of node.quizQuestions) {
    questionsChecked++;
    if (!q.id || !q.prompt?.en || !q.prompt?.si) schemaErrors.push(`${key} question: missing id/prompt`);
    if (!q.options || q.options.length !== 4) schemaErrors.push(`${key} question: options count !== 4`);
    if (q.correctIndex < 0 || q.correctIndex > 3) schemaErrors.push(`${key} question: correctIndex out of [0, 3]`);
    if (!q.explanation?.en || !q.explanation?.si) schemaErrors.push(`${key} question: missing explanation`);
    for (const opt of q.options) {
      if (!opt.en || !opt.si) schemaErrors.push(`${key} question option: missing bilingual text`);
    }
  }
}

assert('All 22 curriculum quest nodes loaded and valid', nodesChecked === 22);
assert('All theory cards valid and bilingual', cardsChecked > 0 && schemaErrors.length === 0, schemaErrors);
assert('All quiz questions valid 4-option MCQs with valid correctIndex', questionsChecked > 0 && schemaErrors.length === 0, schemaErrors);

// 10. getLevelNode and getNextNodeId progression
const n1 = getLevelNode('g10-u1-s1');
assert('getLevelNode retrieves valid node', n1 !== undefined && n1.id === 'g10-u1-s1');

const next1 = getNextNodeId('g10-u1-s1');
assert('getNextNodeId advances to g10-u1-s2', next1 === 'g10-u1-s2');

const finalNext = getNextNodeId('g11-u4-boss');
assert('getNextNodeId on final curriculum node returns null without error', finalNext === null);

console.log(`\n==================================================`);
console.log(`ADVERSARIAL STRESS TEST SUMMARY:`);
console.log(`  Passed: ${passCount}`);
console.log(`  Failed: ${failCount}`);
console.log(`  Total Nodes Audited: ${nodesChecked}`);
console.log(`  Total Theory Cards Audited: ${cardsChecked}`);
console.log(`  Total Quiz Questions Audited: ${questionsChecked}`);
console.log(`==================================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
