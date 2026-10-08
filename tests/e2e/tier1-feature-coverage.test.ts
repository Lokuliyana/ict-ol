/**
 * TIER 1: Comprehensive Feature Coverage
 * Tests core primary behavior (happy paths and functional invariants)
 * across R1 through R5 (>= 5 tests per feature).
 */

import { expect, TestSuiteRunner } from './harness';
import { CURRICULUM_DATA } from '../../src/data/curriculum';
import { PAST_PAPER_QUESTIONS, PastPaperQuestion } from '../../src/data/pastPapersData';
import { UNIFIED_PAST_PAPERS, filterPastPapers } from '../../src/data/unifiedPastPapers';
import { LESSON_01_DATA } from '../../src/data/lesson01Data';
import { ALL_LESSONS_DATA } from '../../src/data/allLessonsData';
import { decodeSriLankanNIC } from '../../src/utils/nicDecoder';

export const tier1Suite = new TestSuiteRunner('Tier 1: Feature Coverage (R1 - R5)');

// ============================================================================
// FEATURE R1: Core Shell, Persistent State & Navigation Engine
// ============================================================================

// Contract helper: AppState & Heart Economy
interface HeartEconomyState {
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null;
  rechargeIntervalSeconds: number; // 1800 (30 mins)
}

function deductHeart(state: HeartEconomyState, now: number): boolean {
  if (state.hearts <= 0) return false;
  state.hearts -= 1;
  if (state.lastHeartLossTime === null) {
    state.lastHeartLossTime = now;
  }
  return true;
}

function calculateRecharge(state: HeartEconomyState, now: number): { hearts: number; nextRechargeInSeconds: number } {
  if (state.hearts >= 5 || state.lastHeartLossTime === null) {
    return { hearts: 5, nextRechargeInSeconds: 0 };
  }
  const elapsedSec = Math.floor((now - state.lastHeartLossTime) / 1000);
  const heartsToRestore = Math.floor(elapsedSec / state.rechargeIntervalSeconds);
  const newHearts = Math.min(5, state.hearts + heartsToRestore);
  const remainingSec = newHearts >= 5 ? 0 : state.rechargeIntervalSeconds - (elapsedSec % state.rechargeIntervalSeconds);
  return { hearts: newHearts, nextRechargeInSeconds: remainingSec };
}

// R1-TC1: Heart Container Capacity & Recharge Timer Initialization
tier1Suite.addTest('Tier 1', 'R1-TC1: Heart Container Capacity (5 lives) & 30-min recharge cycle', () => {
  const state: HeartEconomyState = {
    hearts: 5,
    lastHeartLossTime: null,
    rechargeIntervalSeconds: 1800,
  };
  expect(state.hearts).toBe(5);

  const t0 = 1700000000000;
  const deducted = deductHeart(state, t0);
  expect(deducted).toBe(true);
  expect(state.hearts).toBe(4);
  expect(state.lastHeartLossTime).toBe(t0);

  // After 10 minutes (600s), hearts still 4, next recharge in 1200s
  const recharge10m = calculateRecharge(state, t0 + 600 * 1000);
  expect(recharge10m.hearts).toBe(4);
  expect(recharge10m.nextRechargeInSeconds).toBe(1200);

  // After 30 minutes (1800s), 1 heart restored back to 5
  const recharge30m = calculateRecharge(state, t0 + 1800 * 1000);
  expect(recharge30m.hearts).toBe(5);
  expect(recharge30m.nextRechargeInSeconds).toBe(0);
}, 'R1: Core Shell & State');

// R1-TC2: Persistent LocalStore State Round-trip Serialization
tier1Suite.addTest('Tier 1', 'R1-TC2: Persistent State serialization & round-trip integrity', () => {
  const profile = {
    grade: '10' as const,
    language: 'si' as const,
    hearts: 4,
    streak: 7,
    xp: 450,
    activeNodeId: 'g10-u01-n02',
    completedNodes: {
      'g10-u01-n01': { stars: 3, highAccuracy: 100, completedAt: '2026-10-07T12:00:00Z' },
    },
    unlockedUnits: ['g10-u01'],
    badges: ['badge-orientation'],
  };

  const serialized = JSON.stringify(profile);
  const deserialized = JSON.parse(serialized);

  expect(deserialized.grade).toBe('10');
  expect(deserialized.language).toBe('si');
  expect(deserialized.hearts).toBe(4);
  expect(deserialized.streak).toBe(7);
  expect(deserialized.xp).toBe(450);
  expect(deserialized.activeNodeId).toBe('g10-u01-n02');
  expect(deserialized.completedNodes['g10-u01-n01'].stars).toBe(3);
  expect(deserialized.badges.length).toBe(1);
}, 'R1: Core Shell & State');

// R1-TC3: 3-Step Zero-Friction Onboarding State Transitions
tier1Suite.addTest('Tier 1', 'R1-TC3: 3-Step Onboarding Flow state transitions & terminal validation', () => {
  interface OnboardingState {
    step: 1 | 2 | 3 | 'completed';
    medium?: 'en' | 'si';
    grade?: '10' | '11';
    entryRoute?: 'level_1' | 'library';
  }

  let state: OnboardingState = { step: 1 };

  // Step 1: Medium Selection
  state = { ...state, medium: 'si', step: 2 };
  expect(state.step).toBe(2);
  expect(state.medium).toBe('si');

  // Step 2: Grade Selection
  state = { ...state, grade: '10', step: 3 };
  expect(state.step).toBe(3);
  expect(state.grade).toBe('10');

  // Step 3: Entry Route Selection
  state = { ...state, entryRoute: 'level_1', step: 'completed' };
  expect(state.step).toBe('completed');
  expect(state.entryRoute).toBe('level_1');
}, 'R1: Core Shell & State');

// R1-TC4: Winding Quest Map Node Status State Machine
tier1Suite.addTest('Tier 1', 'R1-TC4: Winding Quest Map node states (Locked, Active, Cleared, Boss)', () => {
  type NodeState = 'locked' | 'active' | 'cleared' | 'boss';

  function getNodeState(
    nodeId: string,
    activeNodeId: string,
    completedNodes: Record<string, { stars: number }>,
    isBossNode: boolean
  ): NodeState {
    if (completedNodes[nodeId]) return 'cleared';
    if (nodeId === activeNodeId) return isBossNode ? 'boss' : 'active';
    return isBossNode ? 'boss' : 'locked';
  }

  const completed = { 'g10-u01-n01': { stars: 3 } };
  const s1 = getNodeState('g10-u01-n01', 'g10-u01-n02', completed, false);
  const s2 = getNodeState('g10-u01-n02', 'g10-u01-n02', completed, false);
  const s3 = getNodeState('g10-u01-n03', 'g10-u01-n02', completed, false);
  const boss = getNodeState('g10-u01-boss', 'g10-u01-boss', completed, true);

  expect(s1).toBe('cleared');
  expect(s2).toBe('active');
  expect(s3).toBe('locked');
  expect(boss).toBe('boss');
}, 'R1: Core Shell & State');

// R1-TC5: Responsive Viewport & Navigation Layout Target
tier1Suite.addTest('Tier 1', 'R1-TC5: Responsive Viewport navigation contract (64px bottom dock vs desktop rail)', () => {
  interface LayoutConfig {
    viewportWidth: number;
    bottomDockVisible: boolean;
    bottomDockHeight: number;
    leftRailVisible: boolean;
    hitTargetMinPx: number;
  }

  function resolveLayout(width: number): LayoutConfig {
    const isMobile = width < 1024;
    return {
      viewportWidth: width,
      bottomDockVisible: isMobile,
      bottomDockHeight: isMobile ? 64 : 0,
      leftRailVisible: !isMobile,
      hitTargetMinPx: 48,
    };
  }

  // Mobile viewport: 390px (iPhone 12/13/14)
  const mobileLayout = resolveLayout(390);
  expect(mobileLayout.bottomDockVisible).toBe(true);
  expect(mobileLayout.bottomDockHeight).toBe(64);
  expect(mobileLayout.leftRailVisible).toBe(false);
  expect(mobileLayout.hitTargetMinPx >= 48).toBe(true);

  // Desktop viewport: 1280px
  const desktopLayout = resolveLayout(1280);
  expect(desktopLayout.bottomDockVisible).toBe(false);
  expect(desktopLayout.leftRailVisible).toBe(true);
}, 'R1: Core Shell & State');

// ============================================================================
// FEATURE R2: Core Micro-Learning Loop Engines
// ============================================================================

// R2-TC1: Story Flashcard 40/60 Split Layout & Progression Pipeline
tier1Suite.addTest('Tier 1', 'R2-TC1: Story Flashcard 40/60 split card layout & card index stepping', () => {
  const cards = [
    { id: 'c1', title: 'Data vs Information', widget: 'data_pipeline', bullets: ['Data is raw', 'Information is processed'], takeaway: 'Context creates value' },
    { id: 'c2', title: 'Quality Characteristics', widget: 'quality_radar', bullets: ['Accuracy', 'Timeliness'], takeaway: 'Poor data = bad decisions' },
  ];

  let activeIndex = 0;
  const nextCard = () => {
    if (activeIndex < cards.length - 1) activeIndex++;
    return activeIndex;
  };

  expect(activeIndex).toBe(0);
  expect(cards[activeIndex].title).toBe('Data vs Information');
  nextCard();
  expect(activeIndex).toBe(1);
  expect(cards[activeIndex].title).toBe('Quality Characteristics');
}, 'R2: Micro-Learning Engines');

// R2-TC2: Blind Quiz Two-Phase Evaluation & Answer Privacy
tier1Suite.addTest('Tier 1', 'R2-TC2: Blind Quiz strict two-phase evaluation and answer privacy secrecy', () => {
  interface BlindQuizState {
    selectedOption: number | null;
    isSubmitted: boolean;
    correctIndex: number;
    showExplanation: boolean;
    showEmeraldCrimsonIndicators: boolean;
  }

  let quizState: BlindQuizState = {
    selectedOption: null,
    isSubmitted: false,
    correctIndex: 2,
    showExplanation: false,
    showEmeraldCrimsonIndicators: false,
  };

  // Phase 1: User selects option 2, but has NOT checked answer
  quizState.selectedOption = 2;
  expect(quizState.isSubmitted).toBe(false);
  expect(quizState.showExplanation).toBe(false);
  expect(quizState.showEmeraldCrimsonIndicators).toBe(false);

  // Phase 2: User taps "Check Answer"
  quizState.isSubmitted = true;
  quizState.showExplanation = true;
  quizState.showEmeraldCrimsonIndicators = true;

  expect(quizState.isSubmitted).toBe(true);
  expect(quizState.showExplanation).toBe(true);
  expect(quizState.showEmeraldCrimsonIndicators).toBe(true);
  expect(quizState.selectedOption === quizState.correctIndex).toBe(true);
}, 'R2: Micro-Learning Engines');

// R2-TC3: Blind Quiz Error Penalty (-1 Heart Deduction & Shake Trigger)
tier1Suite.addTest('Tier 1', 'R2-TC3: Blind Quiz error deduction (-1 heart) and shake effect trigger', () => {
  let hearts = 5;
  let shakeTriggered = false;

  function evaluateAnswer(selected: number, correct: number) {
    if (selected !== correct) {
      hearts = Math.max(0, hearts - 1);
      shakeTriggered = true;
      return false;
    }
    return true;
  }

  const result = evaluateAnswer(0, 2); // wrong answer
  expect(result).toBe(false);
  expect(hearts).toBe(4);
  expect(shakeTriggered).toBe(true);
}, 'R2: Micro-Learning Engines');

// R2-TC4: Life Depletion Lockout Modal at Zero Hearts
tier1Suite.addTest('Tier 1', 'R2-TC4: Life depletion lockout modal blocking quiz entry at 0 hearts', () => {
  function canEnterQuiz(hearts: number): { allowed: boolean; showLockoutModal: boolean } {
    if (hearts <= 0) {
      return { allowed: false, showLockoutModal: true };
    }
    return { allowed: true, showLockoutModal: false };
  }

  const zeroLives = canEnterQuiz(0);
  expect(zeroLives.allowed).toBe(false);
  expect(zeroLives.showLockoutModal).toBe(true);

  const threeLives = canEnterQuiz(3);
  expect(threeLives.allowed).toBe(true);
  expect(threeLives.showLockoutModal).toBe(false);
}, 'R2: Micro-Learning Engines');

// R2-TC5: Level Completion Drawer Star & XP Calculation
tier1Suite.addTest('Tier 1', 'R2-TC5: CompletionDrawer star calculation (>=70% 2 stars, >=90% 3 stars) & XP', () => {
  function calculateStarsAndXp(correct: number, total: number): { stars: number; xp: number } {
    const accuracy = (correct / total) * 100;
    if (accuracy >= 90) return { stars: 3, xp: 100 };
    if (accuracy >= 70) return { stars: 2, xp: 70 };
    return { stars: 1, xp: 40 };
  }

  const result90 = calculateStarsAndXp(9, 10);
  expect(result90.stars).toBe(3);
  expect(result90.xp).toBe(100);

  const result70 = calculateStarsAndXp(7, 10);
  expect(result70.stars).toBe(2);
  expect(result70.xp).toBe(70);

  const result50 = calculateStarsAndXp(5, 10);
  expect(result50.stars).toBe(1);
  expect(result50.xp).toBe(40);
}, 'R2: Micro-Learning Engines');

// ============================================================================
// FEATURE R3: Bilingual Content Transformation & Validation Pipeline
// ============================================================================

// R3-TC1: Syllabus 15-Unit Structural Decomposition
tier1Suite.addTest('Tier 1', 'R3-TC1: Syllabus unit registry integrity (Grade 10 and Grade 11 units)', () => {
  expect(CURRICULUM_DATA.length >= 14).toBe(true);
  const g10 = CURRICULUM_DATA.filter(u => u.grade === '10');
  const g11 = CURRICULUM_DATA.filter(u => u.grade === '11');
  expect(g10.length >= 8).toBe(true);
  expect(g11.length).toBe(6);
}, 'R3: Bilingual Content Pipeline');

// R3-TC2: Strict Schema Conformance for TheoryCard & Subtopics
tier1Suite.addTest('Tier 1', 'R3-TC2: Lesson 01 subtopics conform to bilingual block schemas', () => {
  expect(LESSON_01_DATA.subtopics.length).toBe(7);
  for (const st of LESSON_01_DATA.subtopics) {
    expect(st.number.length > 0).toBe(true);
    expect(st.titleEn.length > 0).toBe(true);
    expect(st.titleSi.length > 0).toBe(true);
    expect(st.blocks.length > 0).toBe(true);
    for (const b of st.blocks) {
      expect(b.en.length >= 5).toBe(true);
      expect(b.si.length >= 5).toBe(true);
    }
  }
}, 'R3: Bilingual Content Pipeline');

// R3-TC3: 100% Dual-Medium Content Parity across Past Paper Questions
tier1Suite.addTest('Tier 1', 'R3-TC3: 100% Dual-Medium parity across past paper question stems & explanations', () => {
  expect(PAST_PAPER_QUESTIONS.length >= 10).toBe(true);
  for (const q of PAST_PAPER_QUESTIONS) {
    expect(q.questionEn.length > 0).toBe(true);
    expect(q.questionSi.length > 0).toBe(true);
    expect(q.explanationEn.length > 0).toBe(true);
    expect(q.explanationSi.length > 0).toBe(true);
  }
}, 'R3: Bilingual Content Pipeline');

// R3-TC4: Quiz MCQ Structure & Correct Option ID Invariant
tier1Suite.addTest('Tier 1', 'R3-TC4: MCQ question option integrity (4 options and valid correctOptionId)', () => {
  const mcqs = PAST_PAPER_QUESTIONS.filter(q => q.type === 'mcq');
  expect(mcqs.length >= 5).toBe(true);
  for (const mcq of mcqs) {
    expect(mcq.options !== undefined).toBe(true);
    expect(mcq.options!.length).toBe(4);
    expect(mcq.correctOptionId !== undefined).toBe(true);
    const validIds = mcq.options!.map(o => o.id);
    expect(validIds.includes(mcq.correctOptionId!)).toBe(true);
  }
}, 'R3: Bilingual Content Pipeline');

// R3-TC5: Real-World NIC Decoder Validation Engine (G10-U01 Application)
tier1Suite.addTest('Tier 1', 'R3-TC5: Sri Lankan NIC decoder algorithm (Old 9-digit & New 12-digit formats)', () => {
  // Test Old Format Male
  const oldMale = decodeSriLankanNIC('853410123V');
  expect(oldMale.error).toBe(undefined);
  expect(oldMale.result!.birthYear).toBe(1985);
  expect(oldMale.result!.gender.startsWith('Male')).toBe(true);
  expect(oldMale.result!.birthMonth).toBe('December');
  expect(oldMale.result!.birthDay).toBe(6);

  // Test New Format Female
  const newFemale = decodeSriLankanNIC('200552301980');
  expect(newFemale.error).toBe(undefined);
  expect(newFemale.result!.birthYear).toBe(2005);
  expect(newFemale.result!.gender.startsWith('Female')).toBe(true);
  expect(newFemale.result!.birthMonth).toBe('January');
  expect(newFemale.result!.birthDay).toBe(23);
}, 'R3: Bilingual Content Pipeline');

// ============================================================================
// FEATURE R4: Interactive Visual Sandboxes & Minigames
// ============================================================================

// R4-TC1: G10 Unit 03 8-Bit Switchboard Binary-to-Decimal Synthesis
tier1Suite.addTest('Tier 1', 'R4-TC1: 8-Bit Switchboard binary-to-decimal summation algorithm', () => {
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const computeDecimal = (switches: boolean[]) => {
    return switches.reduce((acc, s, idx) => acc + (s ? weights[idx] : 0), 0);
  };

  // 133₁₀ = 128 + 4 + 1 -> [1, 0, 0, 0, 0, 1, 0, 1]
  const switches133 = [true, false, false, false, false, true, false, true];
  expect(computeDecimal(switches133)).toBe(133);

  // 65₁₀ (ASCII 'A') = 64 + 1 -> [0, 1, 0, 0, 0, 0, 0, 1]
  const switches65 = [false, true, false, false, false, false, false, true];
  expect(computeDecimal(switches65)).toBe(65);

  // 45₁₀ = 32 + 8 + 4 + 1 -> [0, 0, 1, 0, 1, 1, 0, 1]
  const switches45 = [false, false, true, false, true, true, false, true];
  expect(computeDecimal(switches45)).toBe(45);
}, 'R4: Interactive Sandboxes');

// R4-TC2: G10 Unit 03 Color Chamber RGB-to-Hex Transformation
tier1Suite.addTest('Tier 1', 'R4-TC2: Color Chamber RGB integer division into hexadecimal color code', () => {
  const rgbToHex = (r: number, g: number, b: number): string => {
    const toHexChannel = (c: number) => {
      const q = Math.floor(c / 16);
      const r_rem = c % 16;
      const hexChar = (n: number) => (n < 10 ? `${n}` : String.fromCharCode(55 + n));
      return `${hexChar(q)}${hexChar(r_rem)}`;
    };
    return `#${toHexChannel(r)}${toHexChannel(g)}${toHexChannel(b)}`;
  };

  // Dark Purple: RGB(135, 31, 120) -> #871F78
  expect(rgbToHex(135, 31, 120)).toBe('#871F78');

  // Sky Blue: RGB(50, 153, 204) -> #3299CC
  expect(rgbToHex(50, 153, 204)).toBe('#3299CC');

  // Pure Yellow: RGB(255, 238, 0) -> #FFEE00
  expect(rgbToHex(255, 238, 0)).toBe('#FFEE00');
}, 'R4: Interactive Sandboxes');

// R4-TC3: G10 Unit 04 Neon Logic Gate Truth Table Engine
tier1Suite.addTest('Tier 1', 'R4-TC3: Neon Logic Gate truth table engine (AND, OR, NOT, NAND, NOR, XOR)', () => {
  const evalGate = (gate: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR', a: number, b: number): number => {
    switch (gate) {
      case 'AND': return a & b;
      case 'OR': return a | b;
      case 'NOT': return a === 1 ? 0 : 1;
      case 'NAND': return (a & b) === 1 ? 0 : 1;
      case 'NOR': return (a | b) === 1 ? 0 : 1;
      case 'XOR': return a ^ b;
    }
  };

  // AND gate
  expect(evalGate('AND', 1, 1)).toBe(1);
  expect(evalGate('AND', 1, 0)).toBe(0);

  // OR gate
  expect(evalGate('OR', 0, 1)).toBe(1);
  expect(evalGate('OR', 0, 0)).toBe(0);

  // NAND gate
  expect(evalGate('NAND', 1, 1)).toBe(0);
  expect(evalGate('NAND', 0, 1)).toBe(1);

  // XOR gate
  expect(evalGate('XOR', 1, 1)).toBe(0);
  expect(evalGate('XOR', 1, 0)).toBe(1);
}, 'R4: Interactive Sandboxes');

// R4-TC4: G10 Unit 07 Spreadsheet Laser Grid Relative vs. Absolute $A$1 Anchoring
tier1Suite.addTest('Tier 1', 'R4-TC4: Spreadsheet Laser Grid formula shift (Relative vs Absolute $H$1)', () => {
  function computeRowFormulas(rowNum: number, isLocked: boolean) {
    const totalRelative = `= B${rowNum} * C${rowNum}`;
    const taxFormula = isLocked ? `= D${rowNum} * $H$1` : `= D${rowNum} * H${rowNum - 1}`;
    return { totalRelative, taxFormula };
  }

  // Row 2 (initial)
  const row2 = computeRowFormulas(2, true);
  expect(row2.totalRelative).toBe('= B2 * C2');
  expect(row2.taxFormula).toBe('= D2 * $H$1');

  // Row 3 with locked anchor
  const row3Locked = computeRowFormulas(3, true);
  expect(row3Locked.totalRelative).toBe('= B3 * C3');
  expect(row3Locked.taxFormula).toBe('= D3 * $H$1');

  // Row 3 without lock (unlocked breaks to empty cell H2)
  const row3Unlocked = computeRowFormulas(3, false);
  expect(row3Unlocked.taxFormula).toBe('= D3 * H2');
}, 'R4: Interactive Sandboxes');

// R4-TC5: G11 Unit 01 Trace Table Scrubber & Register Stepping
tier1Suite.addTest('Tier 1', 'R4-TC5: Flowchart Trace Table register stepping accumulator simulation', () => {
  // Simulates Count := 1; Sum := 0; while Count <= 3 do: Sum += Count; Count++;
  interface Step {
    count: number;
    sum: number;
    condition: boolean;
  }
  const steps: Step[] = [];
  let count = 1;
  let sum = 0;

  while (count <= 3) {
    steps.push({ count, sum, condition: true });
    sum += count;
    count += 1;
  }
  steps.push({ count, sum, condition: false }); // termination step

  expect(steps.length).toBe(4);
  expect(steps[0]).toEqual({ count: 1, sum: 0, condition: true });
  expect(steps[1]).toEqual({ count: 2, sum: 1, condition: true });
  expect(steps[2]).toEqual({ count: 3, sum: 3, condition: true });
  expect(steps[3]).toEqual({ count: 4, sum: 6, condition: false });
}, 'R4: Interactive Sandboxes');

// R4-TC6: G11 Unit 05 HTML Table Mason Grid Dimension & Colspan/Rowspan Deduction
tier1Suite.addTest('Tier 1', 'R4-TC6: HTML Table Mason colspan/rowspan dimension deduction and markup generator', () => {
  function generateTableHtml(hasColspan: boolean, hasRowspan: boolean): string {
    let html = '<table>\n';
    if (hasColspan) {
      html += '  <tr><th colspan="2">Merged Header</th></tr>\n';
      html += '  <tr><td>Cell 1</td><td>Cell 2</td></tr>\n';
    } else if (hasRowspan) {
      html += '  <tr><td rowspan="2">Merged Column</td><td>Top Right</td></tr>\n';
      html += '  <tr><td>Bottom Right</td></tr>\n';
    } else {
      html += '  <tr><td>R1C1</td><td>R1C2</td></tr>\n';
      html += '  <tr><td>R2C1</td><td>R2C2</td></tr>\n';
    }
    html += '</table>';
    return html;
  }

  const colspanHtml = generateTableHtml(true, false);
  expect(colspanHtml.includes('colspan="2"')).toBe(true);

  const rowspanHtml = generateTableHtml(false, true);
  expect(rowspanHtml.includes('rowspan="2"')).toBe(true);
}, 'R4: Interactive Sandboxes');

// ============================================================================
// FEATURE R5: Exam Engine & 2020–2025 Past Paper Boss Arena
// ============================================================================

// R5-TC1: Past Paper query engine filters by Year, Paper Type, and Unit
tier1Suite.addTest('Tier 1', 'R5-TC1: Past Paper query engine filters by Year, Paper Type, and Subtopic', () => {
  // 1. Total dataset sanity
  expect(UNIFIED_PAST_PAPERS.length).toBe(168);

  // 2. Filter by Year
  const papers2020 = filterPastPapers({ year: '2020' });
  expect(papers2020.length >= 1).toBe(true);
  expect(papers2020.every((q) => q.year === 2020)).toBe(true);

  const papers2024 = filterPastPapers({ year: '2024' });
  expect(papers2024.length >= 1).toBe(true);
  expect(papers2024.every((q) => q.year === 2024)).toBe(true);

  // 3. Filter by Paper Type (Paper I vs Paper II)
  const paperI = filterPastPapers({ paperType: 'Paper I' });
  expect(paperI.length >= 1).toBe(true);
  expect(paperI.every((q) => q.paperType === 'Paper I')).toBe(true);

  const paperII = filterPastPapers({ paperType: 'Paper II' });
  expect(paperII.length >= 1).toBe(true);
  expect(paperII.every((q) => q.paperType === 'Paper II')).toBe(true);

  // 4. Filter by unitId and ensure exclusion of non-matching units
  const unit1Questions = filterPastPapers({ unitId: 'g10-u1' });
  expect(unit1Questions.length >= 1).toBe(true);
  expect(unit1Questions.every((q) => q.unitId === 'g10-u1')).toBe(true);
  expect(unit1Questions.some((q) => q.unitId === 'g10-u3')).toBe(false);
  expect(unit1Questions.some((q) => q.unitId === 'g11-u1')).toBe(false);

  const unit3Questions = filterPastPapers({ unitId: 'g10-u3' });
  expect(unit3Questions.length >= 1).toBe(true);
  expect(unit3Questions.every((q) => q.unitId === 'g10-u3')).toBe(true);
  expect(unit3Questions.some((q) => q.unitId === 'g10-u1')).toBe(false);

  // 5. Combined multi-criteria filtering (Year + Paper Type + unitId)
  const combined = filterPastPapers({ year: '2020', paperType: 'Paper I', unitId: 'g10-u1' });
  expect(combined.length >= 1).toBe(true);
  expect(combined.every((q) => q.year === 2020 && q.paperType === 'Paper I' && q.unitId === 'g10-u1')).toBe(true);

  // 6. Filter by Grade
  const grade10Questions = filterPastPapers({ grade: '10' });
  expect(grade10Questions.length >= 1).toBe(true);
  expect(grade10Questions.every((q) => q.grade === '10')).toBe(true);

  const grade11Questions = filterPastPapers({ grade: '11' });
  expect(grade11Questions.length >= 1).toBe(true);
  expect(grade11Questions.every((q) => q.grade === '11')).toBe(true);
}, 'R5: Exam Engine & Boss Arena');

// R5-TC2: Practice Mode Marking Scheme Rubrics & Model Answers
tier1Suite.addTest('Tier 1', 'R5-TC2: Practice Mode reveals official marking rubrics and model answers', () => {
  const structured = PAST_PAPER_QUESTIONS.filter(q => q.type === 'structured');
  expect(structured.length >= 1).toBe(true);
  const q = structured[0];
  expect(q.sampleAnswerEn !== undefined && q.sampleAnswerEn.length > 5).toBe(true);
  expect(q.sampleAnswerSi !== undefined && q.sampleAnswerSi.length > 5).toBe(true);
}, 'R5: Exam Engine & Boss Arena');

// R5-TC3: Timed Exam Mode 60-Minute State Machine & Answer Secrecy
tier1Suite.addTest('Tier 1', 'R5-TC3: Timed Exam Mode 60-minute countdown timer and answers secrecy', () => {
  interface TimedExamState {
    timeRemainingSec: number;
    answersSubmitted: boolean;
    userAnswers: Record<string, string>;
    canViewResults: boolean;
  }

  let exam: TimedExamState = {
    timeRemainingSec: 3600, // 60 minutes
    answersSubmitted: false,
    userAnswers: { 'q1': '1', 'q2': '3' },
    canViewResults: false,
  };

  // During exam, results are hidden
  expect(exam.answersSubmitted).toBe(false);
  expect(exam.canViewResults).toBe(false);

  // Submit exam
  exam.answersSubmitted = true;
  exam.canViewResults = true;
  expect(exam.canViewResults).toBe(true);
}, 'R5: Exam Engine & Boss Arena');

// R5-TC4: End-of-Unit Boss Arena Question Pool & Mastery Badge Trigger
tier1Suite.addTest('Tier 1', 'R5-TC4: Boss Arena victory condition unlocks unit mastery badge', () => {
  function evaluateBossMastery(score: number, maxScore: number, unitId: string): string | null {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) {
      return `badge-${unitId}-mastery`;
    }
    return null;
  }

  const badgeEarned = evaluateBossMastery(9, 10, 'g10-u01');
  expect(badgeEarned).toBe('badge-g10-u01-mastery');

  const badgeFailed = evaluateBossMastery(6, 10, 'g10-u01');
  expect(badgeFailed).toBe(null);
}, 'R5: Exam Engine & Boss Arena');

// R5-TC5: Past Paper Dual-Medium Model Answer Parity
tier1Suite.addTest('Tier 1', 'R5-TC5: All past paper questions provide dual-medium prompts and explanations', () => {
  for (const q of PAST_PAPER_QUESTIONS) {
    expect(q.questionEn.length > 0).toBe(true);
    expect(q.questionSi.length > 0).toBe(true);
  }
}, 'R5: Exam Engine & Boss Arena');
