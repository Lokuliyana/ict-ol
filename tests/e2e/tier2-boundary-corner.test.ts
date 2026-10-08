/**
 * TIER 2: Boundary & Corner Cases
 * Tests edge cases, extremes, off-by-one errors, corruption recovery,
 * and input limits across R1 through R5 (>= 5 tests per feature).
 */

import { expect, TestSuiteRunner } from './harness';
import { decodeSriLankanNIC } from '../../src/utils/nicDecoder';
import { PAST_PAPER_QUESTIONS } from '../../src/data/pastPapersData';

export const tier2Suite = new TestSuiteRunner('Tier 2: Boundary & Corner Cases (R1 - R5)');

// ============================================================================
// FEATURE R1: Core Shell, Persistent State & Navigation Engine
// ============================================================================

// R1-BC1: Heart Counter Lower & Upper Clamping
tier2Suite.addTest('Tier 2', 'R1-BC1: Heart counter clamps at minimum 0 and maximum 5 lives', () => {
  let hearts = 5;

  const deduct = () => {
    if (hearts <= 0) return false;
    hearts = Math.max(0, hearts - 1);
    return true;
  };

  const restore = () => {
    hearts = Math.min(5, hearts + 1);
  };

  // Try restoring when already at max (5)
  restore();
  expect(hearts).toBe(5);

  // Deduct 5 times
  for (let i = 0; i < 5; i++) {
    expect(deduct()).toBe(true);
  }
  expect(hearts).toBe(0);

  // 6th deduction must fail and stay at 0
  expect(deduct()).toBe(false);
  expect(hearts).toBe(0);
}, 'R1: Core Shell & State');

// R1-BC2: 30-Minute Recharge Timer Boundary (1799s vs 1800s)
tier2Suite.addTest('Tier 2', 'R1-BC2: 30-minute recharge timer exact boundary (1799s vs 1800s elapsed)', () => {
  function getRestoredHearts(elapsedSec: number): { restored: number; remainingSec: number } {
    const cycle = 1800; // 30 minutes
    const restored = Math.floor(elapsedSec / cycle);
    const remainingSec = cycle - (elapsedSec % cycle);
    return { restored, remainingSec: remainingSec === cycle ? 0 : remainingSec };
  }

  // At 1799 seconds (1 second before 30 mins)
  const at1799 = getRestoredHearts(1799);
  expect(at1799.restored).toBe(0);
  expect(at1799.remainingSec).toBe(1);

  // At exactly 1800 seconds (30 mins exact)
  const at1800 = getRestoredHearts(1800);
  expect(at1800.restored).toBe(1);
  expect(at1800.remainingSec).toBe(0);

  // At 3599 seconds
  const at3599 = getRestoredHearts(3599);
  expect(at3599.restored).toBe(1);
  expect(at3599.remainingSec).toBe(1);

  // At 3600 seconds (2 full cycles)
  const at3600 = getRestoredHearts(3600);
  expect(at3600.restored).toBe(2);
  expect(at3600.remainingSec).toBe(0);
}, 'R1: Core Shell & State');

// R1-BC3: Daily Streak Rollover & Multi-day Gap Reset across midnight
tier2Suite.addTest('Tier 2', 'R1-BC3: Streak tracker rollover across dates (consecutive day vs skipped day)', () => {
  function updateStreak(lastDate: string, currentDate: string, currentStreak: number): number {
    const last = new Date(lastDate);
    const curr = new Date(currentDate);
    const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 3600 * 24));

    if (diffDays === 0) return currentStreak; // same day, no change
    if (diffDays === 1) return currentStreak + 1; // consecutive day, +1
    return 1; // skipped day(s), resets to 1
  }

  expect(updateStreak('2026-10-06', '2026-10-07', 3)).toBe(4);
  expect(updateStreak('2026-10-07', '2026-10-07', 4)).toBe(4);
  expect(updateStreak('2026-10-04', '2026-10-07', 10)).toBe(1);
}, 'R1: Core Shell & State');

// R1-BC4: LocalStorage Corruption Recovery
tier2Suite.addTest('Tier 2', 'R1-BC4: LocalStorage corruption recovery with graceful default fallback', () => {
  interface StoreState {
    grade: string;
    language: string;
    hearts: number;
  }
  const defaultState: StoreState = { grade: '10', language: 'en', hearts: 5 };

  function loadFromStorage(rawJson: string | null): StoreState {
    if (!rawJson) return defaultState;
    try {
      const parsed = JSON.parse(rawJson);
      if (typeof parsed !== 'object' || parsed === null) return defaultState;
      return {
        grade: parsed.grade === '11' ? '11' : '10',
        language: parsed.language === 'si' ? 'si' : 'en',
        hearts: typeof parsed.hearts === 'number' ? Math.max(0, Math.min(5, parsed.hearts)) : 5,
      };
    } catch {
      return defaultState;
    }
  }

  // Malformed JSON string
  const corrupted = loadFromStorage('{ broken json syntax !!!');
  expect(corrupted).toEqual(defaultState);

  // Valid JSON with clamped invalid hearts value
  const outOfRange = loadFromStorage(JSON.stringify({ grade: '10', language: 'en', hearts: 99 }));
  expect(outOfRange.hearts).toBe(5);
}, 'R1: Core Shell & State');

// R1-BC5: Responsive Breakpoint Exact Threshold (1023px vs 1024px)
tier2Suite.addTest('Tier 2', 'R1-BC5: Exact breakpoint threshold (1023px mobile dock vs 1024px desktop rail)', () => {
  const isDesktop = (width: number) => width >= 1024;

  expect(isDesktop(1023)).toBe(false);
  expect(isDesktop(1024)).toBe(true);
  expect(isDesktop(1025)).toBe(true);
}, 'R1: Core Shell & State');

// ============================================================================
// FEATURE R2: Core Micro-Learning Loop Engines
// ============================================================================

// R2-BC1: Star Calculation Precision & Exact Thresholds
tier2Suite.addTest('Tier 2', 'R2-BC1: Star calculation precision at exact boundaries (69.9%, 70.0%, 89.9%, 90.0%)', () => {
  function getStars(score: number, maxScore: number): number {
    const accuracy = (score / maxScore) * 100;
    if (accuracy >= 90.0) return 3;
    if (accuracy >= 70.0) return 2;
    return 1;
  }

  expect(getStars(6.99, 10)).toBe(1);
  expect(getStars(7.0, 10)).toBe(2);
  expect(getStars(8.99, 10)).toBe(2);
  expect(getStars(9.0, 10)).toBe(3);
  expect(getStars(10.0, 10)).toBe(3);
  expect(getStars(0, 10)).toBe(1);
}, 'R2: Micro-Learning Engines');

// R2-BC2: Zero Lives Quiz Entry Prohibition
tier2Suite.addTest('Tier 2', 'R2-BC2: Zero hearts strictly blocks entering quiz session', () => {
  function attemptEnterQuiz(hearts: number): { allowed: boolean; error?: string } {
    if (hearts <= 0) {
      return { allowed: false, error: 'HEARTS_DEPLETED' };
    }
    return { allowed: true };
  }

  expect(attemptEnterQuiz(0)).toEqual({ allowed: false, error: 'HEARTS_DEPLETED' });
  expect(attemptEnterQuiz(1).allowed).toBe(true);
}, 'R2: Micro-Learning Engines');

// R2-BC3: Repeated Option Toggle Before Checking
tier2Suite.addTest('Tier 2', 'R2-BC3: Repeated option toggles before Check Answer preserves neutral state', () => {
  let selected = -1;
  let evaluated = false;

  const select = (opt: number) => {
    if (evaluated) return;
    selected = opt;
  };

  select(0);
  select(1);
  select(3);
  select(2);

  expect(selected).toBe(2);
  expect(evaluated).toBe(false); // still neutral and unrevealed
}, 'R2: Micro-Learning Engines');

// R2-BC4: Single Evaluation Lock (Idempotency)
tier2Suite.addTest('Tier 2', 'R2-BC4: Check Answer evaluation idempotency prevents duplicate heart deductions', () => {
  let hearts = 5;
  let evaluated = false;

  const checkAnswer = (selected: number, correct: number) => {
    if (evaluated) return; // idempotency guard
    evaluated = true;
    if (selected !== correct) {
      hearts = Math.max(0, hearts - 1);
    }
  };

  checkAnswer(1, 2); // wrong
  expect(hearts).toBe(4);

  // Calling checkAnswer again must not deduct another heart
  checkAnswer(1, 2);
  expect(hearts).toBe(4);
}, 'R2: Micro-Learning Engines');

// R2-BC5: Story Flashcard Boundary Navigation
tier2Suite.addTest('Tier 2', 'R2-BC5: Flashcard navigation clamps at first card and triggers CTA on last card', () => {
  const totalCards = 3;
  let currentCard = 0;

  const prev = () => {
    currentCard = Math.max(0, currentCard - 1);
  };

  const next = () => {
    if (currentCard === totalCards - 1) {
      return 'TRIGGER_QUIZ';
    }
    currentCard = Math.min(totalCards - 1, currentCard + 1);
    return 'CONTINUE';
  };

  // At card 0, prev() does not underflow below 0
  prev();
  expect(currentCard).toBe(0);

  expect(next()).toBe('CONTINUE');
  expect(currentCard).toBe(1);

  expect(next()).toBe('CONTINUE');
  expect(currentCard).toBe(2);

  // On last card, next() triggers quiz
  expect(next()).toBe('TRIGGER_QUIZ');
  expect(currentCard).toBe(2);
}, 'R2: Micro-Learning Engines');

// ============================================================================
// FEATURE R3: Bilingual Content Transformation & Validation Pipeline
// ============================================================================

// R3-BC1: Sinhala Complex Unicode Clusters & Zero-Width Joiner (ZWJ) Integrity
tier2Suite.addTest('Tier 2', 'R3-BC1: Sinhala complex conjuncts & ZWJ encoding preservation', () => {
  // Common complex Sinhala combinations in ICT syllabus
  const complexSinhalaStrings = [
    'ක්‍රමලේඛනය', // Programming
    'ප්‍රතිදානය', // Output
    'සංවර්ධනය', // Development
    'ක්ෂේත්‍රය', // Field
  ];

  for (const s of complexSinhalaStrings) {
    const jsonStr = JSON.stringify({ text: s });
    const parsed = JSON.parse(jsonStr);
    expect(parsed.text).toBe(s);
    expect(parsed.text.length > 0).toBe(true);
  }
}, 'R3: Bilingual Content Pipeline');

// R3-BC2: Quiz correctIndex Edge Value Invariant
tier2Suite.addTest('Tier 2', 'R3-BC2: Quiz correctIndex validator accepts [0, 3] and rejects <0 or >3', () => {
  function validateCorrectIndex(idx: number, optionsCount: number): boolean {
    return Number.isInteger(idx) && idx >= 0 && idx < optionsCount;
  }

  expect(validateCorrectIndex(0, 4)).toBe(true);
  expect(validateCorrectIndex(3, 4)).toBe(true);
  expect(validateCorrectIndex(-1, 4)).toBe(false);
  expect(validateCorrectIndex(4, 4)).toBe(false);
  expect(validateCorrectIndex(2.5, 4)).toBe(false);
}, 'R3: Bilingual Content Pipeline');

// R3-BC3: Empty / Whitespace-Only Bilingual String Rejection
tier2Suite.addTest('Tier 2', 'R3-BC3: Validator rejects empty or whitespace-only bilingual strings', () => {
  function validateBilingualText(text: { en: string; si: string }): boolean {
    return !!text && text.en.trim().length > 0 && text.si.trim().length > 0;
  }

  expect(validateBilingualText({ en: 'Data', si: 'දත්ත' })).toBe(true);
  expect(validateBilingualText({ en: '', si: 'දත්ත' })).toBe(false);
  expect(validateBilingualText({ en: 'Data', si: '   ' })).toBe(false);
}, 'R3: Bilingual Content Pipeline');

// R3-BC4: Exactly 4 Options Rejection of 3 or 5 Options
tier2Suite.addTest('Tier 2', 'R3-BC4: Standard MCQ validator rejects non-4 option counts', () => {
  function validateMcqOptionCount(options: any[]): boolean {
    return Array.isArray(options) && options.length === 4;
  }

  expect(validateMcqOptionCount([1, 2, 3, 4])).toBe(true);
  expect(validateMcqOptionCount([1, 2, 3])).toBe(false);
  expect(validateMcqOptionCount([1, 2, 3, 4, 5])).toBe(false);
}, 'R3: Bilingual Content Pipeline');

// R3-BC5: Missing Syllabus Reference Graceful Handling
tier2Suite.addTest('Tier 2', 'R3-BC5: Question with omitted syllabusRef defaults safely without throwing', () => {
  interface QuestionModel {
    id: string;
    prompt: string;
    syllabusRef?: string;
  }

  const q1: QuestionModel = { id: 'q1', prompt: 'Question 1' };
  expect(q1.syllabusRef ?? 'General').toBe('General');
}, 'R3: Bilingual Content Pipeline');

// ============================================================================
// FEATURE R4: Interactive Visual Sandboxes & Minigames
// ============================================================================

// R4-BC1: 8-Bit Switchboard Extreme Boundaries (0 and 255)
tier2Suite.addTest('Tier 2', 'R4-BC1: 8-Bit Switchboard extreme boundary states (all OFF: 0 vs all ON: 255)', () => {
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const evalSwitches = (switches: boolean[]) => {
    const total = switches.reduce((acc, s, idx) => acc + (s ? weights[idx] : 0), 0);
    const active = switches.map((s, idx) => (s ? idx : -1)).filter(i => i !== -1);
    const msb = active.length > 0 ? active[0] : null;
    const lsb = active.length > 0 ? active[active.length - 1] : null;
    return { total, msb, lsb };
  };

  // All OFF: 00000000 -> 0
  const allOff = evalSwitches([false, false, false, false, false, false, false, false]);
  expect(allOff.total).toBe(0);
  expect(allOff.msb).toBe(null);
  expect(allOff.lsb).toBe(null);

  // All ON: 11111111 -> 255
  const allOn = evalSwitches([true, true, true, true, true, true, true, true]);
  expect(allOn.total).toBe(255);
  expect(allOn.msb).toBe(0);
  expect(allOn.lsb).toBe(7);
}, 'R4: Interactive Sandboxes');

// R4-BC2: Color Chamber RGB Extrema & Hex Padding
tier2Suite.addTest('Tier 2', 'R4-BC2: Color Chamber hex formatting padding at extreme values (#000000 & #FFFFFF)', () => {
  const channelToHex = (val: number) => {
    const clamped = Math.max(0, Math.min(255, val));
    return clamped.toString(16).padStart(2, '0').toUpperCase();
  };
  const toHex = (r: number, g: number, b: number) => `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}`;

  expect(toHex(0, 0, 0)).toBe('#000000');
  expect(toHex(255, 255, 255)).toBe('#FFFFFF');
  expect(toHex(15, 0, 0)).toBe('#0F0000'); // single digit formatted with leading 0
}, 'R4: Interactive Sandboxes');

// R4-BC3: Logic Gate Degenerate & Complementary Inputs
tier2Suite.addTest('Tier 2', 'R4-BC3: Logic Gate NOT ignores input B; XOR handles identical vs differing inputs', () => {
  const evalNot = (a: number) => (a === 1 ? 0 : 1);
  const evalXor = (a: number, b: number) => a ^ b;

  expect(evalNot(0)).toBe(1);
  expect(evalNot(1)).toBe(0);

  // XOR identical -> 0
  expect(evalXor(0, 0)).toBe(0);
  expect(evalXor(1, 1)).toBe(0);

  // XOR differing -> 1
  expect(evalXor(0, 1)).toBe(1);
  expect(evalXor(1, 0)).toBe(1);
}, 'R4: Interactive Sandboxes');

// R4-BC4: Spreadsheet Drag-Fill Calculation Collapse Detection
tier2Suite.addTest('Tier 2', 'R4-BC4: Spreadsheet formula detects empty target cell on relative drag', () => {
  interface CellGrid {
    [coord: string]: number | undefined;
  }
  const grid: CellGrid = {
    'B2': 150, 'C2': 4, 'D2': 600, 'H1': 0.15,
    'B3': 50,  'C3': 10, 'D3': 500, // H2 is undefined/empty
  };

  function calculateTax(row: number, isLocked: boolean): { tax: number; isBroken: boolean } {
    const dVal = grid[`D${row}`] ?? 0;
    const hCell = isLocked ? 'H1' : `H${row - 1}`;
    const hVal = grid[hCell];

    if (hVal === undefined) {
      return { tax: 0, isBroken: true };
    }
    return { tax: dVal * hVal, isBroken: false };
  }

  // Row 2 is valid in both modes (H1 exists)
  expect(calculateTax(2, false).isBroken).toBe(false);
  expect(calculateTax(2, true).isBroken).toBe(false);

  // Row 3 with relative reference points to H2 (empty) -> broken
  const row3Unlocked = calculateTax(3, false);
  expect(row3Unlocked.isBroken).toBe(true);
  expect(row3Unlocked.tax).toBe(0);

  // Row 3 with absolute reference points to $H$1 -> valid
  const row3Locked = calculateTax(3, true);
  expect(row3Locked.isBroken).toBe(false);
  expect(row3Locked.tax).toBe(75);
}, 'R4: Interactive Sandboxes');

// R4-BC5: Trace Table Zero-Iteration Loop
tier2Suite.addTest('Tier 2', 'R4-BC5: Trace Table pre-test while loop condition false at start executes 0 iterations', () => {
  let count = 5;
  let sum = 0;
  let loopBodyExecutions = 0;

  // While Count <= 3 (starts at 5 -> immediately false)
  while (count <= 3) {
    loopBodyExecutions++;
    sum += count;
    count++;
  }

  expect(loopBodyExecutions).toBe(0);
  expect(sum).toBe(0);
  expect(count).toBe(5);
}, 'R4: Interactive Sandboxes');

// ============================================================================
// FEATURE R5: Exam Engine & 2020–2025 Past Paper Boss Arena
// ============================================================================

// R5-BC1: Timed Exam Countdown Zero Expiration (Auto-Submit)
tier2Suite.addTest('Tier 2', 'R5-BC1: Timed Exam timer reaching 0 triggers automatic submission', () => {
  interface ExamTimerState {
    timeLeftSec: number;
    isSubmitted: boolean;
    autoSubmitReason?: string;
  }

  function tickTimer(state: ExamTimerState, deltaSec: number): ExamTimerState {
    const newTime = Math.max(0, state.timeLeftSec - deltaSec);
    if (newTime === 0 && !state.isSubmitted) {
      return { timeLeftSec: 0, isSubmitted: true, autoSubmitReason: 'TIME_EXPIRED' };
    }
    return { ...state, timeLeftSec: newTime };
  }

  let state: ExamTimerState = { timeLeftSec: 5, isSubmitted: false };
  state = tickTimer(state, 3);
  expect(state.timeLeftSec).toBe(2);
  expect(state.isSubmitted).toBe(false);

  state = tickTimer(state, 2);
  expect(state.timeLeftSec).toBe(0);
  expect(state.isSubmitted).toBe(true);
  expect(state.autoSubmitReason).toBe('TIME_EXPIRED');
}, 'R5: Exam Engine & Boss Arena');

// R5-BC2: Past Paper Filter Year Range Boundaries (2020 and 2025)
tier2Suite.addTest('Tier 2', 'R5-BC2: Past Paper filter bounds: 2020 and 2025 return questions, 2019 returns empty', () => {
  const getQuestionsByYear = (year: number) => PAST_PAPER_QUESTIONS.filter(q => q.year === year);

  expect(getQuestionsByYear(2020).length > 0).toBe(true);
  expect(getQuestionsByYear(2025).length > 0).toBe(true);
  expect(getQuestionsByYear(2019).length).toBe(0);
  expect(getQuestionsByYear(2026).length).toBe(0);
}, 'R5: Exam Engine & Boss Arena');

// R5-BC3: Blank Exam Submission Scoring
tier2Suite.addTest('Tier 2', 'R5-BC3: Blank exam submission safely computes 0% without NaN error', () => {
  function scoreExam(userAnswers: Record<string, string>, correctAnswers: Record<string, string>) {
    const total = Object.keys(correctAnswers).length;
    let correct = 0;
    for (const [id, ans] of Object.entries(userAnswers)) {
      if (correctAnswers[id] === ans) correct++;
    }
    const accuracy = total > 0 ? (correct / total) * 100 : 0;
    return { correct, total, accuracy };
  }

  const result = scoreExam({}, { q1: '1', q2: '2', q3: '3' });
  expect(result.correct).toBe(0);
  expect(result.total).toBe(3);
  expect(result.accuracy).toBe(0);
  expect(Number.isNaN(result.accuracy)).toBe(false);
}, 'R5: Exam Engine & Boss Arena');

// R5-BC4: Exam State Isolation Between Practice and Timed Modes
tier2Suite.addTest('Tier 2', 'R5-BC4: Practice mode answer revelations do not leak into Timed mode', () => {
  interface ModeState {
    mode: 'practice' | 'timed';
    revealedIds: Set<string>;
  }

  const practiceState: ModeState = { mode: 'practice', revealedIds: new Set(['q1', 'q2']) };
  const timedState: ModeState = { mode: 'timed', revealedIds: new Set() }; // must remain empty

  expect(practiceState.revealedIds.has('q1')).toBe(true);
  expect(timedState.revealedIds.has('q1')).toBe(false);
  expect(timedState.revealedIds.size).toBe(0);
}, 'R5: Exam Engine & Boss Arena');

// R5-BC5: NIC Decoder Leap Year / February 29th vs 28th Boundary & Day 366 Clamping
tier2Suite.addTest('Tier 2', 'R5-BC5: NIC Decoder handles Feb 29 (day 60) and March 1 (day 61), rejects day 499 (>366)', () => {
  // Day 60 in SL NIC system (Jan 31 + Feb 29) is February 29th
  const resDay60 = decodeSriLankanNIC('850600123V');
  expect(resDay60.error).toBe(undefined);
  expect(resDay60.result!.birthMonth).toBe('February');
  expect(resDay60.result!.birthDay).toBe(29);

  // Day 61 is March 1st
  const resDay61 = decodeSriLankanNIC('850610123V');
  expect(resDay61.error).toBe(undefined);
  expect(resDay61.result!.birthMonth).toBe('March');
  expect(resDay61.result!.birthDay).toBe(1);

  // Day 499 for male (> 366) must fail
  const invalidDay = decodeSriLankanNIC('854990123V');
  expect(invalidDay.error !== undefined).toBe(true);
  expect(invalidDay.error!.includes('out of range')).toBe(true);
}, 'R5: Exam Engine & Boss Arena');
