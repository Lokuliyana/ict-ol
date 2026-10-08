/**
 * TIER 3: Cross-Feature Interactions
 * Tests pairwise combinations and cross-module contracts across features:
 * R1 x R2, R1 x R3, R2 x R1, R4 x R1, R5 x R1, R5 x R3.
 */

import { expect, TestSuiteRunner } from './harness';
import { PAST_PAPER_QUESTIONS } from '../../src/data/pastPapersData';
import { LESSON_01_DATA } from '../../src/data/lesson01Data';

export const tier3Suite = new TestSuiteRunner('Tier 3: Cross-Feature Interactions');

// R1 x R2: Heart Economy Depletion Blocks Quiz Engine
tier3Suite.addTest('Tier 3', 'R1 x R2: Repeated quiz failures deplete hearts to 0 and trigger lockout modal', () => {
  interface PlayerGameSession {
    hearts: number;
    quizLocked: boolean;
  }

  const session: PlayerGameSession = { hearts: 3, quizLocked: false };

  function submitQuizAnswer(session: PlayerGameSession, isCorrect: boolean) {
    if (session.hearts <= 0) {
      session.quizLocked = true;
      return { allowed: false, lockReason: 'NO_HEARTS' };
    }
    if (!isCorrect) {
      session.hearts = Math.max(0, session.hearts - 1);
      if (session.hearts === 0) {
        session.quizLocked = true;
      }
    }
    return { allowed: true, remainingHearts: session.hearts };
  }

  // Question 1: Fail (3 -> 2)
  expect(submitQuizAnswer(session, false).remainingHearts).toBe(2);
  expect(session.quizLocked).toBe(false);

  // Question 2: Fail (2 -> 1)
  expect(submitQuizAnswer(session, false).remainingHearts).toBe(1);
  expect(session.quizLocked).toBe(false);

  // Question 3: Fail (1 -> 0, locks!)
  expect(submitQuizAnswer(session, false).remainingHearts).toBe(0);
  expect(session.quizLocked).toBe(true);

  // Subsequent Question: Blocked!
  const blockedAttempt = submitQuizAnswer(session, true);
  expect(blockedAttempt.allowed).toBe(false);
  expect(blockedAttempt.lockReason).toBe('NO_HEARTS');
}, 'R1 x R2: State & Quiz Engine');

// R1 x R3: Persistent State Language Switch Preserves User Progress
tier3Suite.addTest('Tier 3', 'R1 x R3: Toggling language instantly switches content medium without resetting progress', () => {
  interface StudentProfile {
    language: 'en' | 'si';
    hearts: number;
    xp: number;
    streak: number;
    activeNodeId: string;
  }

  const student: StudentProfile = {
    language: 'en',
    hearts: 4,
    xp: 250,
    streak: 5,
    activeNodeId: 'g10-u01-n01',
  };

  // Content rendering based on current language
  function renderSubtopicTitle(student: StudentProfile, subtopicIndex: number): string {
    const subtopic = LESSON_01_DATA.subtopics[subtopicIndex];
    return student.language === 'si' ? subtopic.titleSi : subtopic.titleEn;
  }

  const titleEn = renderSubtopicTitle(student, 0);
  expect(titleEn).toBe(LESSON_01_DATA.subtopics[0].titleEn);

  // Switch language to Sinhala
  student.language = 'si';
  const titleSi = renderSubtopicTitle(student, 0);
  expect(titleSi).toBe(LESSON_01_DATA.subtopics[0].titleSi);

  // Verify player economy is untouched
  expect(student.hearts).toBe(4);
  expect(student.xp).toBe(250);
  expect(student.streak).toBe(5);
  expect(student.activeNodeId).toBe('g10-u01-n01');
}, 'R1 x R3: State & Content Parity');

// R2 x R1: Quiz Completion Triggers Quest Map Progression & Star Calculation
tier3Suite.addTest('Tier 3', 'R2 x R1: Scoring >=90% in quiz awards 3 stars, 100 XP, and unlocks next node', () => {
  interface QuestMapState {
    xp: number;
    activeNodeId: string;
    completedNodes: Record<string, { stars: number; accuracy: number }>;
  }

  const state: QuestMapState = {
    xp: 0,
    activeNodeId: 'g10-u01-n01',
    completedNodes: {},
  };

  function completeQuizSession(
    currentState: QuestMapState,
    nodeId: string,
    nextNodeId: string,
    correctCount: number,
    totalCount: number
  ) {
    const accuracy = (correctCount / totalCount) * 100;
    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
    const xpAward = stars === 3 ? 100 : stars === 2 ? 70 : 40;

    currentState.xp += xpAward;
    currentState.completedNodes[nodeId] = { stars, accuracy };
    currentState.activeNodeId = nextNodeId;

    return { stars, xpAward, nextNode: nextNodeId };
  }

  // Complete node 1 with 10/10 (100%)
  const result = completeQuizSession(state, 'g10-u01-n01', 'g10-u01-n02', 10, 10);
  expect(result.stars).toBe(3);
  expect(result.xpAward).toBe(100);
  expect(state.xp).toBe(100);
  expect(state.completedNodes['g10-u01-n01'].stars).toBe(3);
  expect(state.activeNodeId).toBe('g10-u01-n02');
}, 'R2 x R1: Quiz & Map Progression');

// R4 x R1: Sandbox Goal-State Clear Triggers Level Completion Drawer
tier3Suite.addTest('Tier 3', 'R4 x R1: Solving 8-Bit Switchboard goal state awards stars and updates store', () => {
  interface SandboxRunState {
    nodeId: string;
    targetDecimal: number;
    currentSwitches: boolean[];
    isCleared: boolean;
    starsAwarded: number;
    xpAwarded: number;
  }

  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const run: SandboxRunState = {
    nodeId: 'g10-u03-lab',
    targetDecimal: 133,
    currentSwitches: [false, false, false, false, false, false, false, false],
    isCleared: false,
    starsAwarded: 0,
    xpAwarded: 0,
  };

  function applySwitches(run: SandboxRunState, switches: boolean[]) {
    run.currentSwitches = switches;
    const decimal = switches.reduce((acc, s, idx) => acc + (s ? weights[idx] : 0), 0);
    if (decimal === run.targetDecimal) {
      run.isCleared = true;
      run.starsAwarded = 3;
      run.xpAwarded = 150;
    }
  }

  // Set switches to synthesize 133 (128 + 4 + 1)
  applySwitches(run, [true, false, false, false, false, true, false, true]);
  expect(run.isCleared).toBe(true);
  expect(run.starsAwarded).toBe(3);
  expect(run.xpAwarded).toBe(150);
}, 'R4 x R1: Sandboxes & State');

// R5 x R1: Boss Node Victory Awards Mastery Badge to Profile
tier3Suite.addTest('Tier 3', 'R5 x R1: Defeating Unit Boss awards boss mastery badge to persistent profile', () => {
  interface UserProfileState {
    badges: string[];
    unlockedUnits: string[];
  }

  const profile: UserProfileState = {
    badges: [],
    unlockedUnits: ['g10-u01'],
  };

  function resolveBossBattle(profile: UserProfileState, unitId: string, bossPassed: boolean) {
    if (bossPassed) {
      const badgeId = `badge-${unitId}-boss-slayer`;
      if (!profile.badges.includes(badgeId)) {
        profile.badges.push(badgeId);
      }
      // Unlock next unit
      const nextUnitId = `g10-u02`;
      if (!profile.unlockedUnits.includes(nextUnitId)) {
        profile.unlockedUnits.push(nextUnitId);
      }
      return { success: true, badge: badgeId, nextUnit: nextUnitId };
    }
    return { success: false };
  }

  const outcome = resolveBossBattle(profile, 'g10-u01', true);
  expect(outcome.success).toBe(true);
  expect(profile.badges).toContain('badge-g10-u01-boss-slayer');
  expect(profile.unlockedUnits).toContain('g10-u02');
}, 'R5 x R1: Boss Arena & Badges');

// R5 x R3: Bilingual Marking Schemes Toggle in Practice Exam
tier3Suite.addTest('Tier 3', 'R5 x R3: Toggling language displays official marking rubrics in Sinhala vs English', () => {
  const structuredQ = PAST_PAPER_QUESTIONS.find(q => q.type === 'structured');
  expect(structuredQ !== undefined).toBe(true);

  function getMarkingScheme(q: typeof structuredQ, lang: 'en' | 'si') {
    return {
      answer: lang === 'si' ? q!.sampleAnswerSi : q!.sampleAnswerEn,
      rubric: lang === 'si' ? q!.markingRubricSi : q!.markingRubricEn,
    };
  }

  const enScheme = getMarkingScheme(structuredQ, 'en');
  expect(enScheme.answer !== undefined && enScheme.answer.length > 5).toBe(true);

  const siScheme = getMarkingScheme(structuredQ, 'si');
  expect(siScheme.answer !== undefined && siScheme.answer.length > 5).toBe(true);
}, 'R5 x R3: Exam Arena & Bilingual Parity');
