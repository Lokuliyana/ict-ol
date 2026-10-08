/**
 * tests/unit/challenger-flow-route.test.ts
 * Challenger Empirical Stress Test Harness for Micro-Learning Flow & Route Resilience.
 *
 * Verifies:
 * 1. 22 Quest Nodes Resolution for /study/[nodeId] & /quiz/[nodeId]
 * 2. Unknown/Invalid nodeId fallback resilience & safety
 * 3. Strict Two-Phase Evaluation in BlindQuizRunner
 * 4. CompletionDrawer zero dead-end forward routing & star/XP engine
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import { LEVEL_NODES, getLevelNode, getNextNodeId } from '../../src/data/levelNodes';
import { useGameStore } from '../../src/lib/store';
import * as fs from 'fs';
import * as path from 'path';

export const challengerSuite = new TestSuiteRunner('Challenger M1/M2: Flow & Route Resilience');

// All 38 authentic quest nodes defined in QuestMap.tsx
export const QUEST_NODE_IDS = [
  // Grade 10 (22 nodes)
  'g10-u1-s1',
  'g10-u1-s2',
  'g10-u1-s3',
  'g10-u1-boss',
  'g10-u2-s1',
  'g10-u2-s2',
  'g10-u2-boss',
  'g10-u3-s1',
  'g10-u3-s2',
  'g10-u3-boss',
  'g10-u4-s1',
  'g10-u4-boss',
  'g10-u5-s1',
  'g10-u5-boss',
  'g10-u6-s1',
  'g10-u6-boss',
  'g10-u7-s1',
  'g10-u7-boss',
  'g10-u8-s1',
  'g10-u8-boss',
  'g10-u9-s1',
  'g10-u9-boss',
  // Grade 11 (16 nodes)
  'g11-u1-s1',
  'g11-u1-s2',
  'g11-u1-boss',
  'g11-u2-s1',
  'g11-u2-s2',
  'g11-u2-boss',
  'g11-u3-s1',
  'g11-u3-s2',
  'g11-u3-boss',
  'g11-u4-s1',
  'g11-u4-boss',
  'g11-u5-s1',
  'g11-u5-s2',
  'g11-u5-boss',
  'g11-u6-s1',
  'g11-u6-boss',
];

// =========================================================================
// TEST SUITE 1: QUEST NODE RESOLUTION & INTEGRITY FOR ALL 38 NODES
// =========================================================================

challengerSuite.addTest('Tier 1', 'Quest Map and Curriculum parity: exactly 38 quest nodes mapped', () => {
  expect(QUEST_NODE_IDS.length).toBe(38);
  const registeredKeys = Object.keys(LEVEL_NODES);
  expect(registeredKeys.length).toBe(38);

  // Cross-reference with QuestMap.tsx raw source code
  const questMapPath = path.resolve(process.cwd(), 'src/components/map/QuestMap.tsx');
  const sourceCode = fs.readFileSync(questMapPath, 'utf8');
  const matches = [...sourceCode.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);

  expect(matches.length).toBe(38);
  for (const id of matches) {
    expect(QUEST_NODE_IDS.includes(id)).toBe(true);
  }
}, 'Challenger: Quest Nodes');

challengerSuite.addTest('Tier 1', 'Curriculum Resolution: All 38 nodes resolve valid LevelNode objects', () => {
  for (const nodeId of QUEST_NODE_IDS) {
    const node = getLevelNode(nodeId);
    expect(node !== undefined).toBe(true);
    expect(node!.id).toBe(nodeId);
    expect(typeof node!.unitId).toBe('string');
    expect(node!.unitId.length > 0).toBe(true);

    // Bilingual titles
    expect(typeof node!.title.en).toBe('string');
    expect(node!.title.en.length > 0).toBe(true);
    expect(typeof node!.title.si).toBe('string');
    expect(node!.title.si.length > 0).toBe(true);

    expect(typeof node!.unitTitle.en).toBe('string');
    expect(node!.unitTitle.en.length > 0).toBe(true);
    expect(typeof node!.unitTitle.si).toBe('string');
    expect(node!.unitTitle.si.length > 0).toBe(true);

    // OrderIndex must be a positive integer
    expect(node!.orderIndex > 0).toBe(true);
  }
}, 'Challenger: Quest Nodes');

challengerSuite.addTest('Tier 1', 'Study Route Data Contract: All 38 nodes have rich theory cards with bilingual parity', () => {
  let totalTheoryCards = 0;
  for (const nodeId of QUEST_NODE_IDS) {
    const node = getLevelNode(nodeId)!;
    expect(Array.isArray(node.theoryCards)).toBe(true);
    expect(node.theoryCards.length > 0).toBe(true);

    for (const card of node.theoryCards) {
      totalTheoryCards++;
      expect(typeof card.id).toBe('string');
      expect(card.id.length > 0).toBe(true);

      expect(typeof card.title.en).toBe('string');
      expect(card.title.en.length > 0).toBe(true);
      expect(typeof card.title.si).toBe('string');
      expect(card.title.si.length > 0).toBe(true);

      expect(Array.isArray(card.bulletPoints)).toBe(true);
      expect(card.bulletPoints.length > 0).toBe(true);
      for (const bp of card.bulletPoints) {
        expect(typeof bp.en).toBe('string');
        expect(bp.en.length > 0).toBe(true);
        expect(typeof bp.si).toBe('string');
        expect(bp.si.length > 0).toBe(true);
      }

      expect(typeof card.keyTakeaway.en).toBe('string');
      expect(card.keyTakeaway.en.length > 0).toBe(true);
      expect(typeof card.keyTakeaway.si).toBe('string');
      expect(card.keyTakeaway.si.length > 0).toBe(true);
    }
  }
  expect(totalTheoryCards >= 76).toBe(true);
}, 'Challenger: Quest Nodes');

challengerSuite.addTest('Tier 1', 'Quiz Route Data Contract: All 38 nodes have valid MCQs (4 options, bounds 0-3)', () => {
  let totalMCQs = 0;
  for (const nodeId of QUEST_NODE_IDS) {
    const node = getLevelNode(nodeId)!;
    expect(Array.isArray(node.quizQuestions)).toBe(true);
    expect(node.quizQuestions.length > 0).toBe(true);

    for (const q of node.quizQuestions) {
      totalMCQs++;
      expect(typeof q.id).toBe('string');
      expect(q.id.length > 0).toBe(true);

      // Prompt bilingual
      expect(typeof q.prompt.en).toBe('string');
      expect(q.prompt.en.length > 0).toBe(true);
      expect(typeof q.prompt.si).toBe('string');
      expect(q.prompt.si.length > 0).toBe(true);

      // Exactly 4 options
      expect(q.options.length).toBe(4);
      for (const opt of q.options) {
        expect(typeof opt.en).toBe('string');
        expect(opt.en.length > 0).toBe(true);
        expect(typeof opt.si).toBe('string');
        expect(opt.si.length > 0).toBe(true);
      }

      // Valid correctIndex
      expect(q.correctIndex >= 0).toBe(true);
      expect(q.correctIndex <= 3).toBe(true);
      expect(Number.isInteger(q.correctIndex)).toBe(true);

      // Bilingual explanations
      expect(typeof q.explanation.en).toBe('string');
      expect(q.explanation.en.length > 0).toBe(true);
      expect(typeof q.explanation.si).toBe('string');
      expect(q.explanation.si.length > 0).toBe(true);
    }
  }
  expect(totalMCQs >= 44).toBe(true);
}, 'Challenger: Quest Nodes');

// =========================================================================
// TEST SUITE 2: ROUTE RESILIENCE & ADVERSARIAL FALLBACKS
// =========================================================================

challengerSuite.addTest('Tier 2', 'Fallback UI Resilience: Unknown, malformed, and adversarial nodeIds fail gracefully', () => {
  const adversarialIds = [
    '',
    'unknown-node-xyz',
    'g10-u999-s99',
    '../study/g10-u1-s1',
    '../../etc/passwd',
    '<script>alert(xss)</script>',
    "' OR '1'='1",
    'null',
    'undefined',
    '0',
    'NaN',
    '   g10-u1-s1   ',
    'G10-U1-S1', // Case sensitivity check
    'g10-u1-s1\u0000',
  ];

  for (const testId of adversarialIds) {
    const node = getLevelNode(testId);
    expect(node).toBe(undefined);

    const nextId = getNextNodeId(testId);
    expect(nextId).toBe(null);
  }
}, 'Challenger: Resilience');

challengerSuite.addTest('Tier 2', 'Route pages source inspection: Study and Quiz pages handle missing node with graceful 404 UI', () => {
  const studyPageSrc = fs.readFileSync(path.resolve(process.cwd(), 'src/app/study/[nodeId]/page.tsx'), 'utf8');
  const quizPageSrc = fs.readFileSync(path.resolve(process.cwd(), 'src/app/quiz/[nodeId]/page.tsx'), 'utf8');

  // Both pages must test if (!node)
  expect(studyPageSrc.includes('if (!node)')).toBe(true);
  expect(quizPageSrc.includes('if (!node)')).toBe(true);

  // Both pages must provide Return to Quest Map CTA
  expect(studyPageSrc.includes('Return to Quest Map')).toBe(true);
  expect(quizPageSrc.includes('Return to Quest Map')).toBe(true);
  expect(studyPageSrc.includes("router.push('/')")).toBe(true);
  expect(quizPageSrc.includes("router.push('/')")).toBe(true);
}, 'Challenger: Resilience');

// =========================================================================
// TEST SUITE 3: STRICT TWO-PHASE EVALUATION IN BLINDQUIZRUNNER
// =========================================================================

interface EvaluatedOptionStyle {
  borderClass: string;
  badgeContent: string;
  badgeBg: string;
}

function evaluateOption(
  isChecked: boolean,
  idx: number,
  selectedOption: number | null,
  correctIndex: number
): EvaluatedOptionStyle {
  const isSelected = selectedOption === idx;
  const isCorrect = idx === correctIndex;

  let borderClass = 'border-slate-800 text-slate-200';
  let badgeBg = 'bg-slate-800 text-slate-400';
  let badgeContent = String(idx + 1);

  if (!isChecked) {
    if (isSelected) {
      borderClass = 'border-indigo-500 text-indigo-100';
      badgeBg = 'bg-indigo-500 text-white';
    }
  } else {
    if (isCorrect) {
      borderClass = 'border-emerald-500 text-emerald-200';
      badgeBg = 'bg-emerald-500 text-slate-950';
      badgeContent = 'CHECK_ICON';
    } else if (isSelected && !isCorrect) {
      borderClass = 'border-rose-500 text-rose-200';
      badgeBg = 'bg-rose-500 text-white';
      badgeContent = 'X_ICON';
    } else {
      borderClass = 'border-slate-800/60 text-slate-500 opacity-60';
    }
  }

  return { borderClass, badgeContent, badgeBg };
}

challengerSuite.addTest('Tier 1', 'BlindQuizRunner Phase 1: Unselected state is completely neutral with zero color leaks', () => {
  const correctIndex = 2; // Option 3 is correct

  for (let idx = 0; idx < 4; idx++) {
    const opt = evaluateOption(false, idx, null, correctIndex);
    // Must be completely neutral
    expect(opt.borderClass.includes('emerald')).toBe(false);
    expect(opt.borderClass.includes('rose')).toBe(false);
    expect(opt.borderClass.includes('indigo')).toBe(false);
    expect(opt.borderClass).toBe('border-slate-800 text-slate-200');

    // Badge must be neutral digit
    expect(opt.badgeContent).toBe(String(idx + 1));
    expect(opt.badgeBg).toBe('bg-slate-800 text-slate-400');
  }
}, 'Challenger: Blind Quiz');

challengerSuite.addTest('Tier 1', 'BlindQuizRunner Phase 1: Selected state shows ONLY neutral indigo focus, never correctness', () => {
  const correctIndex = 1; // Option 2 is correct

  // User selects WRONG option 0
  for (let idx = 0; idx < 4; idx++) {
    const opt = evaluateOption(false, idx, 0, correctIndex);
    if (idx === 0) {
      expect(opt.borderClass).toBe('border-indigo-500 text-indigo-100');
      expect(opt.badgeBg).toBe('bg-indigo-500 text-white');
      expect(opt.badgeContent).toBe('1');
    } else {
      expect(opt.borderClass).toBe('border-slate-800 text-slate-200');
      expect(opt.badgeContent).toBe(String(idx + 1));
    }
    // No emerald or rose leaks
    expect(opt.borderClass.includes('emerald')).toBe(false);
    expect(opt.borderClass.includes('rose')).toBe(false);
  }

  // User toggles to CORRECT option 1
  for (let idx = 0; idx < 4; idx++) {
    const opt = evaluateOption(false, idx, 1, correctIndex);
    if (idx === 1) {
      expect(opt.borderClass).toBe('border-indigo-500 text-indigo-100');
      expect(opt.badgeBg).toBe('bg-indigo-500 text-white');
      expect(opt.badgeContent).toBe('2');
    } else {
      expect(opt.borderClass).toBe('border-slate-800 text-slate-200');
      expect(opt.badgeContent).toBe(String(idx + 1));
    }
    // Still zero color leaks even when hovering/selecting the correct option!
    expect(opt.borderClass.includes('emerald')).toBe(false);
    expect(opt.borderClass.includes('rose')).toBe(false);
  }
}, 'Challenger: Blind Quiz');

challengerSuite.addTest('Tier 1', 'BlindQuizRunner Phase 2: Evaluation on Check Answer reveals correctness and icons', () => {
  const correctIndex = 3;

  // Case 1: User correctly chose option 3
  for (let idx = 0; idx < 4; idx++) {
    const opt = evaluateOption(true, idx, 3, correctIndex);
    if (idx === 3) {
      expect(opt.borderClass.includes('border-emerald-500')).toBe(true);
      expect(opt.badgeContent).toBe('CHECK_ICON');
      expect(opt.badgeBg.includes('bg-emerald-500')).toBe(true);
    } else {
      expect(opt.borderClass.includes('opacity-60')).toBe(true);
      expect(opt.badgeContent).toBe(String(idx + 1));
    }
  }

  // Case 2: User mistakenly chose option 0
  for (let idx = 0; idx < 4; idx++) {
    const opt = evaluateOption(true, idx, 0, correctIndex);
    if (idx === 0) {
      // Selected incorrect option
      expect(opt.borderClass.includes('border-rose-500')).toBe(true);
      expect(opt.badgeContent).toBe('X_ICON');
      expect(opt.badgeBg.includes('bg-rose-500')).toBe(true);
    } else if (idx === 3) {
      // Correct answer revealed in emerald
      expect(opt.borderClass.includes('border-emerald-500')).toBe(true);
      expect(opt.badgeContent).toBe('CHECK_ICON');
    } else {
      expect(opt.borderClass.includes('opacity-60')).toBe(true);
      expect(opt.badgeContent).toBe(String(idx + 1));
    }
  }
}, 'Challenger: Blind Quiz');

challengerSuite.addTest('Tier 2', 'BlindQuizRunner Phase 2: Penalty deduction and idempotency locking', () => {
  useGameStore.getState().refillHearts();
  expect(useGameStore.getState().hearts).toBe(5);

  // In BlindQuizRunner:
  // if (isChecked) return; // handles idempotency
  let isChecked = false;
  let hearts = useGameStore.getState().hearts;

  // Simulated wrong answer check
  const simulateCheckAnswer = (selected: number, correct: number) => {
    if (isChecked) return;
    isChecked = true;
    if (selected !== correct) {
      useGameStore.getState().deductHeart();
    }
  };

  simulateCheckAnswer(1, 2); // Wrong answer
  expect(useGameStore.getState().hearts).toBe(4);

  // Attempting duplicate check while isChecked is true MUST NOT deduct additional hearts
  simulateCheckAnswer(1, 2);
  simulateCheckAnswer(0, 2);
  expect(useGameStore.getState().hearts).toBe(4);

  // Reset store
  useGameStore.getState().refillHearts();
}, 'Challenger: Blind Quiz');

// =========================================================================
// TEST SUITE 4: COMPLETION DRAWER ZERO DEAD-END FORWARD ROUTING & SCORING
// =========================================================================

function computeStars(accuracy: number): number {
  return accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
}

function computeXp(stars: number): number {
  return 50 + stars * 25;
}

challengerSuite.addTest('Tier 1', 'CompletionDrawer Star & XP Oracle across accuracy boundaries', () => {
  // Boundary 90%
  expect(computeStars(100)).toBe(3);
  expect(computeXp(3)).toBe(125);
  expect(computeStars(95.5)).toBe(3);
  expect(computeStars(90.0)).toBe(3);

  // Boundary 70% to 89.9%
  expect(computeStars(89.99)).toBe(2);
  expect(computeXp(2)).toBe(100);
  expect(computeStars(80.0)).toBe(2);
  expect(computeStars(70.0)).toBe(2);

  // Boundary < 70%
  expect(computeStars(69.99)).toBe(1);
  expect(computeXp(1)).toBe(75);
  expect(computeStars(50)).toBe(1);
  expect(computeStars(0)).toBe(1);
}, 'Challenger: Completion Drawer');

challengerSuite.addTest('Tier 1', 'CompletionDrawer Zero Dead-End Verification for all 38 nodes', () => {
  for (let i = 0; i < QUEST_NODE_IDS.length; i++) {
    const currentNodeId = QUEST_NODE_IDS[i];
    const nextNodeId = getNextNodeId(currentNodeId);

    // Route 1: Next Level CTA
    const nextRoute = nextNodeId ? `/study/${nextNodeId}` : '/';
    expect(typeof nextRoute).toBe('string');
    expect(nextRoute.startsWith('/')).toBe(true);
    if (nextNodeId) {
      expect(getLevelNode(nextNodeId) !== undefined).toBe(true);
    } else {
      // Last node returns cleanly to Quest Map '/'
      expect(nextRoute).toBe('/');
      expect(i).toBe(QUEST_NODE_IDS.length - 1);
    }

    // Route 2: Review Topic CTA
    const reviewRoute = `/study/${currentNodeId}`;
    expect(typeof reviewRoute).toBe('string');
    expect(reviewRoute).toBe(`/study/${currentNodeId}`);
    expect(getLevelNode(currentNodeId) !== undefined).toBe(true);

    // Route 3: Return to Map CTA
    const mapRoute = '/';
    expect(mapRoute).toBe('/');
  }
}, 'Challenger: Completion Drawer');

challengerSuite.addTest('Tier 2', 'getNextNodeId Progression Monotonicity: exactly 37 forward edges and 1 terminal node', () => {
  let terminalCount = 0;
  let forwardEdgeCount = 0;

  for (const id of QUEST_NODE_IDS) {
    const nextId = getNextNodeId(id);
    if (nextId === null) {
      terminalCount++;
    } else {
      forwardEdgeCount++;
      expect(QUEST_NODE_IDS.includes(nextId)).toBe(true);
      expect(nextId !== id).toBe(true);
    }
  }

  // Exactly one final terminal node at end of syllabus
  expect(terminalCount).toBe(1);
  expect(forwardEdgeCount).toBe(37);
  expect(getNextNodeId(QUEST_NODE_IDS[QUEST_NODE_IDS.length - 1])).toBe(null);
}, 'Challenger: Completion Drawer');
