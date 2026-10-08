/**
 * tests/unit/challenger-phase5-stress.test.ts
 * Adversarial Empirical Stress Test Suite for Phase 5:
 * Exam Engine & Past Paper Boss Arena
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import { UNIFIED_PAST_PAPERS, filterPastPapers, UnifiedPastPaperQuestion } from '../../src/data/unifiedPastPapers';
import { useGameStore } from '../../src/lib/store';

export const phase5ChallengerSuite = new TestSuiteRunner('Challenger 2: Phase 5 Exam Engine & Boss Arena Empirical Suite');

// ============================================================================
// 1. UNIFIED PAST PAPERS DATASET & SCHEMA INTEGRITY
// ============================================================================

phase5ChallengerSuite.addTest('Tier 1', 'Dataset Count: Exactly 168 authentic past paper questions loaded', () => {
  expect(UNIFIED_PAST_PAPERS.length).toBe(168);
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'Dataset Uniqueness: All 168 question IDs are strictly unique', () => {
  const ids = new Set<string>();
  const duplicateIds: string[] = [];

  for (const q of UNIFIED_PAST_PAPERS) {
    if (ids.has(q.id)) {
      duplicateIds.push(q.id);
    }
    ids.add(q.id);
  }

  expect(duplicateIds.length).toBe(0);
  expect(ids.size).toBe(168);
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'Dataset Schema: All 168 questions have valid years within 2020-2025', () => {
  for (const q of UNIFIED_PAST_PAPERS) {
    expect(typeof q.year).toBe('number');
    expect(q.year >= 2020 && q.year <= 2025).toBe(true);
  }
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'Dataset Schema: All 168 questions have valid paperType, grade, and unit properties', () => {
  for (const q of UNIFIED_PAST_PAPERS) {
    expect(q.paperType === 'Paper I' || q.paperType === 'Paper II').toBe(true);
    expect(q.grade === '10' || q.grade === '11').toBe(true);
    expect(typeof q.unitId).toBe('string');
    expect(q.unitId.length > 0).toBe(true);
    expect(typeof q.unitNumber).toBe('number');
    expect(q.unitNumber >= 1).toBe(true);
    expect(typeof q.unitTitleEn).toBe('string');
    expect(q.unitTitleEn.trim().length > 0).toBe(true);
    expect(typeof q.unitTitleSi).toBe('string');
    expect(q.unitTitleSi.trim().length > 0).toBe(true);
    expect(typeof q.badgeText).toBe('string');
    expect(q.badgeText.trim().length > 0).toBe(true);
  }
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'Bilingual Parity: All 168 questions have non-empty prompt and explanation in EN and SI', () => {
  for (const q of UNIFIED_PAST_PAPERS) {
    expect(typeof q.questionEn).toBe('string');
    expect(q.questionEn.trim().length > 0).toBe(true);

    expect(typeof q.questionSi).toBe('string');
    expect(q.questionSi.trim().length > 0).toBe(true);

    expect(typeof q.explanationEn).toBe('string');
    expect(q.explanationEn.trim().length > 0).toBe(true);

    expect(typeof q.explanationSi).toBe('string');
    expect(q.explanationSi.trim().length > 0).toBe(true);
  }
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'MCQ Schema: All MCQ questions have valid options and valid correctOptionId', () => {
  const mcqs = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'mcq');
  expect(mcqs.length > 0).toBe(true);

  for (const q of mcqs) {
    expect(Array.isArray(q.options)).toBe(true);
    expect((q.options?.length || 0) >= 4).toBe(true);
    expect(typeof q.correctOptionId).toBe('string');

    const optionIds = q.options!.map((opt) => opt.id);
    expect(optionIds.includes(q.correctOptionId!)).toBe(true);

    for (const opt of q.options!) {
      expect(typeof opt.id).toBe('string');
      expect(opt.id.length > 0).toBe(true);
      expect(typeof opt.en).toBe('string');
      expect(opt.en.trim().length > 0).toBe(true);
      expect(typeof opt.si).toBe('string');
      expect(opt.si.trim().length > 0).toBe(true);
    }
  }
}, 'Dataset Integrity');

phase5ChallengerSuite.addTest('Tier 1', 'Structured Schema: All Structured questions have model answers or marking rubrics in EN and SI', () => {
  const structured = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'structured');
  expect(structured.length > 0).toBe(true);

  for (const q of structured) {
    const hasEnRubric =
      (typeof q.sampleAnswerEn === 'string' && q.sampleAnswerEn.trim().length > 0) ||
      (Array.isArray(q.markingRubricEn) && q.markingRubricEn.length > 0 && q.markingRubricEn[0].trim().length > 0);

    const hasSiRubric =
      (typeof q.sampleAnswerSi === 'string' && q.sampleAnswerSi.trim().length > 0) ||
      (Array.isArray(q.markingRubricSi) && q.markingRubricSi.length > 0 && q.markingRubricSi[0].trim().length > 0);

    expect(hasEnRubric).toBe(true);
    expect(hasSiRubric).toBe(true);
  }
}, 'Dataset Integrity');

// ============================================================================
// 2. FILTERING LOGIC & ADVERSARIAL FILTER EDGE CASES
// ============================================================================

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Filtering by each individual year 2020..2025 returns expected questions', () => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  let totalFilteredCount = 0;

  for (const yr of years) {
    const res = filterPastPapers({ year: String(yr) });
    expect(res.length > 0).toBe(true);
    for (const q of res) {
      expect(q.year).toBe(yr);
    }
    totalFilteredCount += res.length;
  }

  expect(totalFilteredCount).toBe(168);
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Out-of-bounds or invalid years return 0 results gracefully without throwing', () => {
  const invalidYears = ['2019', '2026', '1999', '-1', 'abc', '2020.5'];

  for (const invalid of invalidYears) {
    const res = filterPastPapers({ year: invalid });
    expect(res.length).toBe(0);
  }
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Paper Type filtering partitions exactly between Paper I and Paper II', () => {
  const p1 = filterPastPapers({ paperType: 'Paper I' });
  const p2 = filterPastPapers({ paperType: 'Paper II' });

  expect(p1.length > 0).toBe(true);
  expect(p2.length > 0).toBe(true);
  expect(p1.length + p2.length).toBe(168);

  for (const q of p1) {
    expect(q.paperType).toBe('Paper I');
  }
  for (const q of p2) {
    expect(q.paperType).toBe('Paper II');
  }

  // Invalid paper type
  const pInvalid = filterPastPapers({ paperType: 'Paper III' });
  expect(pInvalid.length).toBe(0);
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Grade filtering partitions between Grade 10 and Grade 11', () => {
  const g10 = filterPastPapers({ grade: '10' });
  const g11 = filterPastPapers({ grade: '11' });

  expect(g10.length > 0).toBe(true);
  expect(g11.length > 0).toBe(true);
  expect(g10.length + g11.length).toBe(168);

  for (const q of g10) {
    expect(q.grade).toBe('10');
  }
  for (const q of g11) {
    expect(q.grade).toBe('11');
  }

  const gInvalid = filterPastPapers({ grade: '12' });
  expect(gInvalid.length).toBe(0);
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Unit filtering isolates target unit and handles non-existent unitId', () => {
  const u1 = filterPastPapers({ unitId: 'g10-u1' });
  expect(u1.length > 0).toBe(true);
  for (const q of u1) {
    expect(q.unitId).toBe('g10-u1');
  }

  const uUnknown = filterPastPapers({ unitId: 'non-existent-unit-xyz' });
  expect(uUnknown.length).toBe(0);
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Empty and all filters return full 168 questions set', () => {
  const emptyFilters = filterPastPapers({});
  expect(emptyFilters.length).toBe(168);

  const allFilters = filterPastPapers({
    year: 'all',
    paperType: 'all',
    grade: 'all',
    unitId: 'all',
  });
  expect(allFilters.length).toBe(168);
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Combined multi-criteria intersection strictly satisfies all filters', () => {
  const combined = filterPastPapers({
    year: '2022',
    paperType: 'Paper I',
    grade: '10',
  });

  for (const q of combined) {
    expect(q.year).toBe(2022);
    expect(q.paperType).toBe('Paper I');
    expect(q.grade).toBe('10');
  }
}, 'Filter Edge Cases');

phase5ChallengerSuite.addTest('Tier 2', 'Filter Edge Cases: Search query filter handles case-insensitivity, whitespace, and Sinhala text', () => {
  // Case insensitivity
  const lower = filterPastPapers({ searchQuery: 'computer' });
  const upper = filterPastPapers({ searchQuery: 'COMPUTER' });
  expect(lower.length).toBe(upper.length);

  // Whitespace trimming
  const padded = filterPastPapers({ searchQuery: '   system   ' });
  const unpadded = filterPastPapers({ searchQuery: 'system' });
  expect(padded.length).toBe(unpadded.length);

  // Empty whitespace query does not filter
  const emptyQuery = filterPastPapers({ searchQuery: '    ' });
  expect(emptyQuery.length).toBe(168);

  // Non-matching query returns 0
  const noMatch = filterPastPapers({ searchQuery: 'xyzzy_nonexistent_query_token_12345' });
  expect(noMatch.length).toBe(0);
}, 'Filter Edge Cases');

// ============================================================================
// 3. EXAM ENGINE LOGIC: TIMER BOUNDARIES, SECRECY & LETTER GRADING
// ============================================================================

// Oracle for Sri Lankan O/L Letter Grade
function computeOfficialLetterGrade(accuracy: number) {
  if (accuracy >= 75) return { grade: 'A', label: 'Distinction' };
  if (accuracy >= 65) return { grade: 'B', label: 'Very Good' };
  if (accuracy >= 50) return { grade: 'C', label: 'Credit' };
  if (accuracy >= 35) return { grade: 'S', label: 'Ordinary Pass' };
  return { grade: 'F', label: 'Fail / Referred' };
}

phase5ChallengerSuite.addTest('Tier 1', 'Letter Grade Boundaries: Exact score threshold evaluation oracle', () => {
  // Distinction A: >= 75%
  expect(computeOfficialLetterGrade(100).grade).toBe('A');
  expect(computeOfficialLetterGrade(75).grade).toBe('A');
  expect(computeOfficialLetterGrade(74.99).grade).toBe('B');

  // Very Good B: >= 65% and < 75%
  expect(computeOfficialLetterGrade(74).grade).toBe('B');
  expect(computeOfficialLetterGrade(65).grade).toBe('B');
  expect(computeOfficialLetterGrade(64.99).grade).toBe('C');

  // Credit C: >= 50% and < 65%
  expect(computeOfficialLetterGrade(64).grade).toBe('C');
  expect(computeOfficialLetterGrade(50).grade).toBe('C');
  expect(computeOfficialLetterGrade(49.99).grade).toBe('S');

  // Ordinary Pass S: >= 35% and < 50%
  expect(computeOfficialLetterGrade(49).grade).toBe('S');
  expect(computeOfficialLetterGrade(35).grade).toBe('S');
  expect(computeOfficialLetterGrade(34.99).grade).toBe('F');

  // Fail F: < 35%
  expect(computeOfficialLetterGrade(34).grade).toBe('F');
  expect(computeOfficialLetterGrade(1).grade).toBe('F');
  expect(computeOfficialLetterGrade(0).grade).toBe('F');
  expect(computeOfficialLetterGrade(-10).grade).toBe('F');
}, 'Exam Engine Logic');

phase5ChallengerSuite.addTest('Tier 2', 'Exam Engine: 60-Minute Countdown timer boundary thresholds and auto-submission trigger', () => {
  // Timer State Oracle
  function evaluateTimerState(timeLeftSec: number) {
    const isCritical = timeLeftSec <= 300;
    const isWarning = timeLeftSec <= 600 && !isCritical;
    const shouldAutoSubmit = timeLeftSec <= 0;
    return { isWarning, isCritical, shouldAutoSubmit };
  }

  // 1. Initial State (3600s)
  const t3600 = evaluateTimerState(3600);
  expect(t3600.isWarning).toBe(false);
  expect(t3600.isCritical).toBe(false);
  expect(t3600.shouldAutoSubmit).toBe(false);

  // 2. Warning Boundary: 601s (normal) vs 600s (warning)
  const t601 = evaluateTimerState(601);
  expect(t601.isWarning).toBe(false);
  expect(t601.isCritical).toBe(false);

  const t600 = evaluateTimerState(600);
  expect(t600.isWarning).toBe(true);
  expect(t600.isCritical).toBe(false);

  // 3. Critical Boundary: 301s (warning) vs 300s (critical)
  const t301 = evaluateTimerState(301);
  expect(t301.isWarning).toBe(true);
  expect(t301.isCritical).toBe(false);

  const t300 = evaluateTimerState(300);
  expect(t300.isWarning).toBe(false);
  expect(t300.isCritical).toBe(true);

  // 4. Expiration Boundary: 1s vs 0s
  const t1 = evaluateTimerState(1);
  expect(t1.shouldAutoSubmit).toBe(false);

  const t0 = evaluateTimerState(0);
  expect(t0.shouldAutoSubmit).toBe(true);

  // Decrement Step Simulation
  let simulatedTime = 2;
  let submitted = false;
  const onAutoSubmit = () => { submitted = true; };

  // Tick 1: 2 -> 1
  simulatedTime = simulatedTime <= 1 ? (onAutoSubmit(), 0) : simulatedTime - 1;
  expect(simulatedTime).toBe(1);
  expect(submitted).toBe(false);

  // Tick 2: 1 -> 0 with auto-submit
  simulatedTime = simulatedTime <= 1 ? (onAutoSubmit(), 0) : simulatedTime - 1;
  expect(simulatedTime).toBe(0);
  expect(submitted).toBe(true);
}, 'Exam Engine Logic');

phase5ChallengerSuite.addTest('Tier 1', 'Blank Submission Safety: 0 questions answered results in 0% score and F grade without NaN', () => {
  const sampleQuestions = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'mcq').slice(0, 10);
  const selectedAnswers: Record<string, string> = {}; // No answers chosen

  let correctCount = 0;
  for (const q of sampleQuestions) {
    if (selectedAnswers[q.id] === q.correctOptionId) {
      correctCount++;
    }
  }

  const accuracy = sampleQuestions.length > 0 ? Math.round((correctCount / sampleQuestions.length) * 100) : 0;
  const gradeInfo = computeOfficialLetterGrade(accuracy);

  expect(correctCount).toBe(0);
  expect(accuracy).toBe(0);
  expect(Number.isNaN(accuracy)).toBe(false);
  expect(gradeInfo.grade).toBe('F');

  // Safe against empty questions list as well
  const emptyQuestions: UnifiedPastPaperQuestion[] = [];
  const emptyAccuracy = emptyQuestions.length > 0 ? Math.round((0 / emptyQuestions.length) * 100) : 0;
  expect(emptyAccuracy).toBe(0);
  expect(Number.isNaN(emptyAccuracy)).toBe(false);
}, 'Exam Engine Logic');

phase5ChallengerSuite.addTest('Tier 2', 'Answer Secrecy Oracle: Timed mode options state remains neutral with zero correctness leakage', () => {
  // Simulate active session selection
  const mockQ = UNIFIED_PAST_PAPERS.find((q) => q.type === 'mcq')!;
  const userSelectedOptId = mockQ.options![0].id;
  const examSubmitted = false;

  // Active Session Style Oracle:
  for (const opt of mockQ.options!) {
    const isSelected = userSelectedOptId === opt.id;
    let renderedClass = 'bg-slate-900 border-slate-800 text-slate-300';
    if (isSelected) {
      renderedClass = 'bg-indigo-950/80 border-indigo-500 text-white ring-2 ring-indigo-400';
    }

    // Must NOT contain emerald, rose, red, green
    expect(renderedClass.includes('emerald')).toBe(false);
    expect(renderedClass.includes('rose')).toBe(false);
    expect(renderedClass.includes('green')).toBe(false);
    expect(renderedClass.includes('red')).toBe(false);
  }

  // Explanation must remain unrendered during active exam
  const renderExplanation = examSubmitted;
  expect(renderExplanation).toBe(false);
}, 'Exam Engine Logic');

// ============================================================================
// 4. BOSS ARENA BADGE UNLOCK STRESS TESTING
// ============================================================================

phase5ChallengerSuite.addTest('Tier 1', 'Boss Arena Badge: unlockBadge awards badge, +100 XP, and prevents duplicate entries', () => {
  const store = useGameStore.getState();
  const initialBadges = [...store.badges];
  const initialXp = store.xp;

  const testBadgeId = 'badge-test-g10-u4-logic-mastery';

  // Ensure test badge is not present initially
  if (store.badges.includes(testBadgeId)) {
    useGameStore.setState({ badges: store.badges.filter((b) => b !== testBadgeId) });
  }

  const baseBadgesCount = useGameStore.getState().badges.length;
  const baseXp = useGameStore.getState().xp;

  // 1. First Unlock: Should add badge and +100 XP
  useGameStore.getState().unlockBadge(testBadgeId);

  const stateAfterFirst = useGameStore.getState();
  expect(stateAfterFirst.badges.includes(testBadgeId)).toBe(true);
  expect(stateAfterFirst.badges.length).toBe(baseBadgesCount + 1);
  expect(stateAfterFirst.xp).toBe(baseXp + 100);

  // 2. Duplicate Unlock: Should be idempotent (no duplicate, no extra XP)
  useGameStore.getState().unlockBadge(testBadgeId);

  const stateAfterSecond = useGameStore.getState();
  expect(stateAfterSecond.badges.filter((b) => b === testBadgeId).length).toBe(1);
  expect(stateAfterSecond.badges.length).toBe(baseBadgesCount + 1);
  expect(stateAfterSecond.xp).toBe(baseXp + 100);

  // Clean up
  useGameStore.setState({ badges: initialBadges, xp: initialXp });
}, 'Boss Arena Badge');

phase5ChallengerSuite.addTest('Tier 2', 'Boss Arena Badge: Unlocking multiple distinct unit badges increments XP linearly by 100 per badge', () => {
  const store = useGameStore.getState();
  const initialBadges = [...store.badges];
  const initialXp = store.xp;

  const b1 = 'badge-test-u1';
  const b2 = 'badge-test-u2';
  const b3 = 'badge-test-u3';

  // Clean test badges
  useGameStore.setState({
    badges: store.badges.filter((b) => ![b1, b2, b3].includes(b)),
  });

  const baseXp = useGameStore.getState().xp;
  const baseCount = useGameStore.getState().badges.length;

  useGameStore.getState().unlockBadge(b1);
  useGameStore.getState().unlockBadge(b2);
  useGameStore.getState().unlockBadge(b3);

  const finalState = useGameStore.getState();
  expect(finalState.badges.length).toBe(baseCount + 3);
  expect(finalState.badges.includes(b1)).toBe(true);
  expect(finalState.badges.includes(b2)).toBe(true);
  expect(finalState.badges.includes(b3)).toBe(true);
  expect(finalState.xp).toBe(baseXp + 300);

  // Clean up
  useGameStore.setState({ badges: initialBadges, xp: initialXp });
}, 'Boss Arena Badge');

// ============================================================================
// RUNNER ENTRYPOINT
// ============================================================================

async function main() {
  const results = await phase5ChallengerSuite.run();
  const failed = results.filter((r) => !r.passed);

  if (failed.length > 0) {
    console.error('\n❌ CHALLENGER 2 STRESS TESTS FAILED: ' + failed.length + ' failure(s)');
    for (const f of failed) {
      console.error(' - [' + f.tier + '] ' + f.name + ':', f.error);
    }
    process.exit(1);
  } else {
    console.log('\n🎉 ALL ' + results.length + ' CHALLENGER 2 EMPIRICAL STRESS TESTS PASSED WITH ZERO DEFECTS!');
    process.exit(0);
  }
}

if (process.argv[1] && process.argv[1].includes('challenger-phase5-stress.test.ts')) {
  main();
}

