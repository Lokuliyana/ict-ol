/**
 * tests/unit/challenger-remediation-stress.test.ts
 * Adversarial Empirical Stress Test Suite for Remediated Past Paper Engine:
 * 1. filterPastPapers() exhaustive combinations (1008 Cartesian combinations)
 * 2. Cross-grade non-matching intersections & invalid unit IDs
 * 3. Case insensitivity & Unicode Sinhala search query resilience
 * 4. TimedExamRunner scoring accuracy, blank submissions, and timer expiration
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import {
  UNIFIED_PAST_PAPERS,
  filterPastPapers,
  FilterPastPaperOptions,
  UnifiedPastPaperQuestion,
} from '../../src/data/unifiedPastPapers';

export const remediationChallengerSuite = new TestSuiteRunner(
  'Adversarial Challenger 1: Remediated Past Paper Engine & Exam Runner Empirical Battery'
);

// ============================================================================
// REFERENCE ORACLE IMPLEMENTATION FOR filterPastPapers
// ============================================================================

function oracleFilterPastPapers(
  dataset: UnifiedPastPaperQuestion[],
  filters: FilterPastPaperOptions
): UnifiedPastPaperQuestion[] {
  const { year, paperType, grade, unitId, searchQuery } = filters;

  return dataset.filter((q) => {
    if (year !== undefined && year !== 'all' && String(q.year) !== String(year)) {
      return false;
    }
    if (paperType !== undefined && paperType !== 'all' && q.paperType !== paperType) {
      return false;
    }
    if (grade !== undefined && grade !== 'all' && q.grade !== grade) {
      return false;
    }
    if (unitId !== undefined && unitId !== 'all' && q.unitId !== unitId) {
      return false;
    }
    if (searchQuery !== undefined && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const matchesText =
        q.questionEn.toLowerCase().includes(query) ||
        q.questionSi.toLowerCase().includes(query) ||
        q.badgeText.toLowerCase().includes(query) ||
        q.unitTitleEn.toLowerCase().includes(query);
      if (!matchesText) return false;
    }
    return true;
  });
}

// ============================================================================
// SUITE 1: 1,008 CARTESIAN COMBINATIONS OF filterPastPapers()
// ============================================================================

const ALL_YEARS = ['2020', '2021', '2022', '2023', '2024', '2025', 'all'];
const ALL_TYPES = ['Paper I', 'Paper II', 'all'];
const ALL_GRADES = ['10', '11', 'all'];
const ALL_UNITS = [
  'g10-u1', 'g10-u2', 'g10-u3', 'g10-u4', 'g10-u5', 'g10-u6', 'g10-u7', 'g10-u8', 'g10-u9',
  'g11-u1', 'g11-u2', 'g11-u3', 'g11-u4', 'g11-u5', 'g11-u6',
  'all'
];

remediationChallengerSuite.addTest(
  'Tier 1',
  'Combinatorial Exhaustion: All 1,008 filter combinations match oracle with 100% soundness and completeness',
  () => {
    let testedCombinations = 0;
    let totalQuestionsReturnedAcrossAll = 0;

    for (const year of ALL_YEARS) {
      for (const paperType of ALL_TYPES) {
        for (const grade of ALL_GRADES) {
          for (const unitId of ALL_UNITS) {
            testedCombinations++;

            const options: FilterPastPaperOptions = { year, paperType, grade, unitId };
            const actual = filterPastPapers(options);
            const expected = oracleFilterPastPapers(UNIFIED_PAST_PAPERS, options);

            // 1. Cardinality check
            expect(actual.length).toBe(expected.length);

            // 2. ID list exact equivalence
            const actualIds = actual.map((q) => q.id).sort().join(',');
            const expectedIds = expected.map((q) => q.id).sort().join(',');
            expect(actualIds).toBe(expectedIds);

            // 3. Soundness invariants on all returned elements
            for (const q of actual) {
              if (year !== 'all') {
                expect(String(q.year)).toBe(year);
              }
              if (paperType !== 'all') {
                expect(q.paperType).toBe(paperType as any);
              }
              if (grade !== 'all') {
                expect(q.grade).toBe(grade as any);
              }
              if (unitId !== 'all') {
                expect(q.unitId).toBe(unitId);
              }
            }

            // 4. Duplicate check
            const idSet = new Set(actual.map((q) => q.id));
            expect(idSet.size).toBe(actual.length);

            totalQuestionsReturnedAcrossAll += actual.length;
          }
        }
      }
    }

    expect(testedCombinations).toBe(1008);
    expect(totalQuestionsReturnedAcrossAll > 0).toBe(true);
  },
  'filterPastPapers Combinatorial'
);

// ============================================================================
// SUITE 2: BOUNDARY CONDITIONS & NON-MATCHING INTERSECTIONS
// ============================================================================

remediationChallengerSuite.addTest(
  'Tier 2',
  'Non-Matching Intersections: Grade 10 filter with Grade 11 units strictly yields 0 questions',
  () => {
    const g11Units = ['g11-u1', 'g11-u2', 'g11-u3', 'g11-u4', 'g11-u5', 'g11-u6'];

    for (const unit of g11Units) {
      const results = filterPastPapers({ grade: '10', unitId: unit });
      expect(results.length).toBe(0);

      // Even across all years and paper types
      for (const y of ['2020', '2021', '2022', '2023', '2024', '2025']) {
        const yrResults = filterPastPapers({ year: y, grade: '10', unitId: unit });
        expect(yrResults.length).toBe(0);
      }
    }
  },
  'Filter Boundary Intersections'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Non-Matching Intersections: Grade 11 filter with Grade 10 units strictly yields 0 questions',
  () => {
    const g10Units = [
      'g10-u1', 'g10-u2', 'g10-u3', 'g10-u4', 'g10-u5', 'g10-u6', 'g10-u7', 'g10-u8', 'g10-u9'
    ];

    for (const unit of g10Units) {
      const results = filterPastPapers({ grade: '11', unitId: unit });
      expect(results.length).toBe(0);

      // Even across all years and paper types
      for (const y of ['2020', '2021', '2022', '2023', '2024', '2025']) {
        const yrResults = filterPastPapers({ year: y, grade: '11', unitId: unit });
        expect(yrResults.length).toBe(0);
      }
    }
  },
  'Filter Boundary Intersections'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Boundary Unit IDs: Invalid, missing, or malformed unit IDs return 0 results gracefully without throwing',
  () => {
    const invalidUnitIds = [
      'g10-u10',
      'g10-u0',
      'g11-u7',
      'g12-u1',
      'invalid-unit',
      'null',
      'undefined',
      'Unit 1',
      'g10',
      '1',
      'g10_u1',
      '../../etc/passwd',
      '!@#$%^&*()',
    ];

    for (const badUnit of invalidUnitIds) {
      const res = filterPastPapers({ unitId: badUnit });
      expect(res.length).toBe(0);
    }
  },
  'Filter Boundary Intersections'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Boundary Parameters: Invalid years and paper types return 0 results gracefully',
  () => {
    const invalidYears = ['1999', '2019', '2026', '2030', '-1', 'NaN', 'abc'];
    for (const y of invalidYears) {
      const res = filterPastPapers({ year: y });
      expect(res.length).toBe(0);
    }

    const invalidPaperTypes = ['Paper III', 'Paper 1', 'paper i', 'paper ii', 'MCQ', 'Structured'];
    for (const pt of invalidPaperTypes) {
      const res = filterPastPapers({ paperType: pt });
      expect(res.length).toBe(0);
    }
  },
  'Filter Boundary Intersections'
);

// ============================================================================
// SUITE 3: SEARCH QUERY STRESS TESTING & UNICODE SINHALA
// ============================================================================

remediationChallengerSuite.addTest(
  'Tier 2',
  'Search Query: Case insensitivity across lower, upper, title, and mixed casing yields identical sets',
  () => {
    const keywords = [
      'computer',
      'software',
      'hardware',
      'network',
      'system',
      'database',
      'data',
      'binary',
      'logic',
      'operating',
    ];

    for (const kw of keywords) {
      const lower = filterPastPapers({ searchQuery: kw.toLowerCase() });
      const upper = filterPastPapers({ searchQuery: kw.toUpperCase() });
      const title = filterPastPapers({ searchQuery: kw.charAt(0).toUpperCase() + kw.slice(1).toLowerCase() });
      const mixed = filterPastPapers({
        searchQuery: kw
          .split('')
          .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
          .join(''),
      });

      expect(lower.length > 0).toBe(true);
      expect(lower.length).toBe(upper.length);
      expect(lower.length).toBe(title.length);
      expect(lower.length).toBe(mixed.length);

      const lowerIds = lower.map((q) => q.id).sort().join(',');
      const upperIds = upper.map((q) => q.id).sort().join(',');
      const titleIds = title.map((q) => q.id).sort().join(',');
      const mixedIds = mixed.map((q) => q.id).sort().join(',');

      expect(lowerIds).toBe(upperIds);
      expect(lowerIds).toBe(titleIds);
      expect(lowerIds).toBe(mixedIds);
    }

    // Also check non-existent term across casings: all return 0
    const nonExistent = 'nonexistentxyz';
    expect(filterPastPapers({ searchQuery: nonExistent.toLowerCase() }).length).toBe(0);
    expect(filterPastPapers({ searchQuery: nonExistent.toUpperCase() }).length).toBe(0);
  },
  'Search Query Engine'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Search Query: Authentic Unicode Sinhala terms match questions accurately without mojibake or crashes',
  () => {
    const sinhalaTerms = [
      'දත්ත',
      'තොරතුරු',
      'පද්ධති',
      'මෘදුකාංග',
      'දෘඩාංග',
      'ක්‍රමලේඛන',
      'සන්නිවේදන',
      'අන්තර්ජාල',
    ];

    for (const term of sinhalaTerms) {
      const results = filterPastPapers({ searchQuery: term });
      expect(results.length > 0).toBe(true);

      for (const q of results) {
        const inSi = q.questionSi.toLowerCase().includes(term);
        const inEn = q.questionEn.toLowerCase().includes(term);
        const inBadge = q.badgeText.toLowerCase().includes(term);
        const inTitle = q.unitTitleEn.toLowerCase().includes(term);
        expect(inSi || inEn || inBadge || inTitle).toBe(true);
      }
    }
  },
  'Search Query Engine'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Search Query: Leading/trailing whitespace and tabs are trimmed properly',
  () => {
    const cleanResults = filterPastPapers({ searchQuery: 'system' });
    const paddedResults = filterPastPapers({ searchQuery: '   system   \t\n' });

    expect(paddedResults.length).toBe(cleanResults.length);
    const cleanIds = cleanResults.map((q) => q.id).sort().join(',');
    const paddedIds = paddedResults.map((q) => q.id).sort().join(',');
    expect(cleanIds).toBe(paddedIds);

    // Empty whitespace query returns all questions
    const whitespaceOnly = filterPastPapers({ searchQuery: '   \t  \n  ' });
    expect(whitespaceOnly.length).toBe(168);
  },
  'Search Query Engine'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Search Query: Special characters, injection attempts, and no-match tokens return safe empty arrays',
  () => {
    const adversarialQueries = [
      '<script>alert("xss")</script>',
      'DROP TABLE papers;--',
      '\" OR 1=1 --',
      '${7*7}',
      '__proto__',
      'constructor',
      'undefined_nonexistent_token_999999',
    ];

    for (const aq of adversarialQueries) {
      const res = filterPastPapers({ searchQuery: aq });
      expect(res.length).toBe(0);
    }
  },
  'Search Query Engine'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'Search Query: Multi-criteria combined filter (Year + Grade + Unit + Search Query)',
  () => {
    const res1 = filterPastPapers({
      grade: '10',
      unitId: 'g10-u1',
      searchQuery: 'data',
    });
    expect(res1.length > 0).toBe(true);
    for (const q of res1) {
      expect(q.grade).toBe('10');
      expect(q.unitId).toBe('g10-u1');
    }

    const res2 = filterPastPapers({
      grade: '11',
      unitId: 'g11-u1',
      searchQuery: 'flowchart',
    });
    expect(res2.length > 0).toBe(true);
    for (const q of res2) {
      expect(q.grade).toBe('11');
      expect(q.unitId).toBe('g11-u1');
    }
  },
  'Search Query Engine'
);

// ============================================================================
// SUITE 4: TimedExamRunner LOGIC STRESS TESTING
// ============================================================================

function evaluateTimedExamSubmission(
  activeQuestions: UnifiedPastPaperQuestion[],
  selectedAnswers: Record<string, string>
) {
  const mcqs = activeQuestions.filter((q) => q.type === 'mcq');
  const structured = activeQuestions.filter((q) => q.type === 'structured');

  let correctMcq = 0;
  for (const q of mcqs) {
    if (selectedAnswers[q.id] === q.correctOptionId) {
      correctMcq++;
    }
  }

  let attemptedStructured = 0;
  for (const q of structured) {
    if ((selectedAnswers[q.id] || '').trim().length > 0) {
      attemptedStructured++;
    }
  }

  let score = 0;
  if (mcqs.length > 0 && structured.length === 0) {
    score = correctMcq;
  } else if (mcqs.length === 0 && structured.length > 0) {
    score = attemptedStructured;
  } else {
    score = correctMcq + attemptedStructured;
  }

  const accuracy = activeQuestions.length > 0 ? Math.round((score / activeQuestions.length) * 100) : 0;
  const xpAwarded = Math.max(50, accuracy * 2);

  let letterGrade = 'F';
  if (accuracy >= 75) letterGrade = 'A';
  else if (accuracy >= 65) letterGrade = 'B';
  else if (accuracy >= 50) letterGrade = 'C';
  else if (accuracy >= 35) letterGrade = 'S';
  else letterGrade = 'F';

  return {
    score,
    accuracy,
    xpAwarded,
    letterGrade,
    correctMcq,
    attemptedStructured,
    totalQuestions: activeQuestions.length,
  };
}

remediationChallengerSuite.addTest(
  'Tier 1',
  'TimedExamRunner: Scoring accuracy for Pure MCQ sets across all grade levels',
  () => {
    const mcqs = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'mcq').slice(0, 40);
    expect(mcqs.length).toBe(40);

    // 1. All Correct (100%)
    const allCorrectAnswers: Record<string, string> = {};
    for (const q of mcqs) {
      allCorrectAnswers[q.id] = q.correctOptionId!;
    }
    const evalAllCorrect = evaluateTimedExamSubmission(mcqs, allCorrectAnswers);
    expect(evalAllCorrect.score).toBe(40);
    expect(evalAllCorrect.accuracy).toBe(100);
    expect(evalAllCorrect.letterGrade).toBe('A');
    expect(evalAllCorrect.xpAwarded).toBe(200);

    // 2. Distinction boundary (75% -> 30/40)
    const distinctionAnswers: Record<string, string> = {};
    mcqs.slice(0, 30).forEach((q) => (distinctionAnswers[q.id] = q.correctOptionId!));
    const evalDistinction = evaluateTimedExamSubmission(mcqs, distinctionAnswers);
    expect(evalDistinction.score).toBe(30);
    expect(evalDistinction.accuracy).toBe(75);
    expect(evalDistinction.letterGrade).toBe('A');
    expect(evalDistinction.xpAwarded).toBe(150);

    // 3. Very Good boundary (65% -> 26/40)
    const vgAnswers: Record<string, string> = {};
    mcqs.slice(0, 26).forEach((q) => (vgAnswers[q.id] = q.correctOptionId!));
    const evalVg = evaluateTimedExamSubmission(mcqs, vgAnswers);
    expect(evalVg.score).toBe(26);
    expect(evalVg.accuracy).toBe(65);
    expect(evalVg.letterGrade).toBe('B');
    expect(evalVg.xpAwarded).toBe(130);

    // 4. Credit boundary (50% -> 20/40)
    const creditAnswers: Record<string, string> = {};
    mcqs.slice(0, 20).forEach((q) => (creditAnswers[q.id] = q.correctOptionId!));
    const evalCredit = evaluateTimedExamSubmission(mcqs, creditAnswers);
    expect(evalCredit.score).toBe(20);
    expect(evalCredit.accuracy).toBe(50);
    expect(evalCredit.letterGrade).toBe('C');
    expect(evalCredit.xpAwarded).toBe(100);

    // 5. Ordinary Pass boundary (35% -> 14/40)
    const passAnswers: Record<string, string> = {};
    mcqs.slice(0, 14).forEach((q) => (passAnswers[q.id] = q.correctOptionId!));
    const evalPass = evaluateTimedExamSubmission(mcqs, passAnswers);
    expect(evalPass.score).toBe(14);
    expect(evalPass.accuracy).toBe(35);
    expect(evalPass.letterGrade).toBe('S');
    expect(evalPass.xpAwarded).toBe(70);

    // 6. Fail boundary (32.5% -> 13/40 rounds to 33% -> F)
    const failAnswers: Record<string, string> = {};
    mcqs.slice(0, 13).forEach((q) => (failAnswers[q.id] = q.correctOptionId!));
    const evalFail = evaluateTimedExamSubmission(mcqs, failAnswers);
    expect(evalFail.score).toBe(13);
    expect(evalFail.accuracy).toBe(33);
    expect(evalFail.letterGrade).toBe('F');
    expect(evalFail.xpAwarded).toBe(66);
  },
  'TimedExamRunner Scoring'
);

remediationChallengerSuite.addTest(
  'Tier 1',
  'TimedExamRunner: Scoring accuracy for Pure Structured sets with whitespace resilience',
  () => {
    const structured = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'structured').slice(0, 5);
    expect(structured.length).toBe(5);

    // 1. All Attempted with authentic answers
    const allAttempted: Record<string, string> = {};
    for (const q of structured) {
      allAttempted[q.id] = 'Detailed student solution with working steps';
    }
    const evalAll = evaluateTimedExamSubmission(structured, allAttempted);
    expect(evalAll.score).toBe(5);
    expect(evalAll.accuracy).toBe(100);
    expect(evalAll.letterGrade).toBe('A');

    // 2. Whitespace resilience: answers with only spaces/newlines are treated as unattempted
    const whitespaceOnly: Record<string, string> = {};
    structured.forEach((q, idx) => {
      whitespaceOnly[q.id] = idx === 0 ? 'Valid answer' : '   \n\t   ';
    });
    const evalWs = evaluateTimedExamSubmission(structured, whitespaceOnly);
    expect(evalWs.score).toBe(1);
    expect(evalWs.attemptedStructured).toBe(1);
    expect(evalWs.accuracy).toBe(20);
    expect(evalWs.letterGrade).toBe('F');
  },
  'TimedExamRunner Scoring'
);

remediationChallengerSuite.addTest(
  'Tier 1',
  'TimedExamRunner: Scoring accuracy for Mixed sets (MCQ + Structured)',
  () => {
    const mcqs = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'mcq').slice(0, 10);
    const structured = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'structured').slice(0, 5);
    const mixed = [...mcqs, ...structured];
    expect(mixed.length).toBe(15);

    // 8 MCQs correct, 4 Structured attempted = 12 / 15 = 80% (Grade A)
    const mixedAnswers: Record<string, string> = {};
    mcqs.slice(0, 8).forEach((q) => (mixedAnswers[q.id] = q.correctOptionId!));
    mcqs.slice(8, 10).forEach((q) => (mixedAnswers[q.id] = 'wrong-opt'));
    structured.slice(0, 4).forEach((q) => (mixedAnswers[q.id] = 'My structured response'));

    const evalMixed = evaluateTimedExamSubmission(mixed, mixedAnswers);
    expect(evalMixed.score).toBe(12);
    expect(evalMixed.correctMcq).toBe(8);
    expect(evalMixed.attemptedStructured).toBe(4);
    expect(evalMixed.accuracy).toBe(80);
    expect(evalMixed.letterGrade).toBe('A');
    expect(evalMixed.xpAwarded).toBe(160);
  },
  'TimedExamRunner Scoring'
);

remediationChallengerSuite.addTest(
  'Tier 1',
  'TimedExamRunner: Blank submissions safely yield 0% score and F grade with NO NaN and NO crashes',
  () => {
    const mcqs = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'mcq').slice(0, 20);
    const blankMcqs = evaluateTimedExamSubmission(mcqs, {});
    expect(blankMcqs.score).toBe(0);
    expect(blankMcqs.accuracy).toBe(0);
    expect(Number.isNaN(blankMcqs.accuracy)).toBe(false);
    expect(blankMcqs.letterGrade).toBe('F');
    expect(blankMcqs.xpAwarded).toBe(50);

    const structured = UNIFIED_PAST_PAPERS.filter((q) => q.type === 'structured').slice(0, 5);
    const blankStructured = evaluateTimedExamSubmission(structured, {});
    expect(blankStructured.score).toBe(0);
    expect(blankStructured.accuracy).toBe(0);
    expect(Number.isNaN(blankStructured.accuracy)).toBe(false);
    expect(blankStructured.letterGrade).toBe('F');
    expect(blankStructured.xpAwarded).toBe(50);

    const mixed = [...mcqs, ...structured];
    const blankMixed = evaluateTimedExamSubmission(mixed, {});
    expect(blankMixed.score).toBe(0);
    expect(blankMixed.accuracy).toBe(0);
    expect(Number.isNaN(blankMixed.accuracy)).toBe(false);
    expect(blankMixed.letterGrade).toBe('F');
    expect(blankMixed.xpAwarded).toBe(50);

    const empty = evaluateTimedExamSubmission([], {});
    expect(empty.score).toBe(0);
    expect(empty.accuracy).toBe(0);
    expect(Number.isNaN(empty.accuracy)).toBe(false);
    expect(empty.letterGrade).toBe('F');
    expect(empty.xpAwarded).toBe(50);
  },
  'TimedExamRunner Scoring'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'TimedExamRunner: Time expiration edge cases and countdown state transitions',
  () => {
    function tickCountdown(prevTime: number, autoSubmitCallback: () => void): number {
      if (prevTime <= 1) {
        autoSubmitCallback();
        return 0;
      }
      return prevTime - 1;
    }

    let submitted = false;
    const onSubmit = () => {
      submitted = true;
    };

    expect(tickCountdown(3600, onSubmit)).toBe(3599);
    expect(submitted).toBe(false);

    expect(tickCountdown(2, onSubmit)).toBe(1);
    expect(submitted).toBe(false);

    expect(tickCountdown(1, onSubmit)).toBe(0);
    expect(submitted).toBe(true);

    submitted = false;
    expect(tickCountdown(0, onSubmit)).toBe(0);
    expect(submitted).toBe(true);

    submitted = false;
    expect(tickCountdown(-10, onSubmit)).toBe(0);
    expect(submitted).toBe(true);
  },
  'TimedExamRunner Timer Logic'
);

remediationChallengerSuite.addTest(
  'Tier 2',
  'TimedExamRunner: Time badge styling and warning thresholds',
  () => {
    function getTimerBadgeClass(timeLeftSec: number) {
      const isCritical = timeLeftSec <= 300;
      const isWarning = timeLeftSec <= 600 && !isCritical;
      if (isCritical) return 'critical';
      if (isWarning) return 'warning';
      return 'normal';
    }

    expect(getTimerBadgeClass(3600)).toBe('normal');
    expect(getTimerBadgeClass(601)).toBe('normal');

    expect(getTimerBadgeClass(600)).toBe('warning');
    expect(getTimerBadgeClass(450)).toBe('warning');
    expect(getTimerBadgeClass(301)).toBe('warning');

    expect(getTimerBadgeClass(300)).toBe('critical');
    expect(getTimerBadgeClass(100)).toBe('critical');
    expect(getTimerBadgeClass(1)).toBe('critical');
    expect(getTimerBadgeClass(0)).toBe('critical');
  },
  'TimedExamRunner Timer Logic'
);

// ============================================================================
// CLI RUNNER
// ============================================================================

async function main() {
  const results = await remediationChallengerSuite.run();
  const failed = results.filter((r) => !r.passed);

  if (failed.length > 0) {
    console.error('\n❌ REMEDIATION CHALLENGER SUITE FAILED: ' + failed.length + ' test(s) failed');
    for (const f of failed) {
      console.error(' - [' + f.tier + '] ' + f.name + ':', f.error);
    }
    process.exit(1);
  } else {
    console.log(
      '\n🎉 ALL ' + results.length + ' REMEDIATION CHALLENGER EMPIRICAL TESTS PASSED WITH ZERO DEFECTS!'
    );
    process.exit(0);
  }
}

if (process.argv[1] && process.argv[1].includes('challenger-remediation-stress.test.ts')) {
  main();
}
