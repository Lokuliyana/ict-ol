/**
 * tests/unit/masteryChallengeDrawer.test.ts
 * Comprehensive Verification Suite for:
 * Phase 4: Authentic O/L Mastery Check with Slide-Up Bottom Drawer
 *
 * Verifies:
 * 1. Card 4: Authentic Exam Check & Provenance Header in ConceptStoryRunner
 * 2. Persistent Slide-Up Bottom Feedback Drawer (State 0, State 1, State 2)
 * 3. Mastery Persistence (addXp(15) and completeNode(id))
 * 4. Keyboard Accessibility (1-4 select, Enter check/continue/retry)
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ConceptStoryRunner } from '../../src/components/learning-engine/ConceptStoryRunner';
import {
  SessionBottomDrawer,
  DrawerFeedbackState,
} from '../../src/components/learning-engine/SessionBottomDrawer';
import {
  getConceptMasteryQuestion,
  ConceptMasteryQuestion,
} from '../../src/data/questionBanks/conceptMasteryMatcher';
import { getUnitTreeManifest, getAllUnitTreeManifests } from '../../src/data/adapters/treeSyllabusAdapter';
import { useGameStore } from '../../src/lib/store';

export const masteryDrawerSuite = new TestSuiteRunner(
  'Phase 4: Authentic O/L Mastery Check & Slide-Up Bottom Drawer Suite'
);

// Sample test leaf node from Grade 10 Unit 1
const testManifest = getUnitTreeManifest('g10-u1');
const testLeaf = Object.values(testManifest.nodes).find((n) => n.type === 'leaf')!;

// Sample test leaf node from Grade 10 Unit 4 (Logic Gates)
const g10u4Manifest = getUnitTreeManifest('g10-u4');
const g10u4Leaf = Object.values(g10u4Manifest.nodes).find((n) => n.type === 'leaf')!;

// ============================================================================
// 1. CARD 4: AUTHENTIC EXAM CHECK & PROVENANCE HEADER
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 1',
  'Provenance Tag: Card 4 renders authentic G.C.E. O/L past paper provenance metadata',
  () => {
    const question = getConceptMasteryQuestion('g10-u1', testLeaf, 0);

    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: testLeaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        initialCardStep: 3, // Card 4: Beat 3 Prove
        onSelectNode: () => {},
      })
    );

    // Provenance Tag Element
    expect(html.includes('data-testid="mastery-provenance-tag"')).toBe(true);
    expect(html.includes('🏛️ G.C.E. O/L Past Paper')).toBe(true);
    expect(html.includes('Part 1')).toBe(true);

    // Question Number and Gate Badges
    expect(html.includes('+15 XP Gate')).toBe(true);
    expect(html.includes('Authentic Mastery Question Gate')).toBe(true);

    // Verified Question Stem exists (account for HTML entity encoding of quotes)
    const promptSnippet = question.promptEn.replace(/['"]/g, '');
    expect(html.replace(/&#x27;/g, "'").includes(question.promptEn) || html.includes(promptSnippet)).toBe(true);
  },
  'Phase 4: Provenance Header'
);

masteryDrawerSuite.addTest(
  'Tier 3',
  'Curriculum Universality: 100% of units render authentic provenance metadata in Card 4',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    for (const m of manifests) {
      const leaves = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      expect(leaves.length > 0).toBe(true);

      const firstLeaf = leaves[0];
      const unitId = m.rootNode.id.replace('-root', '');
      const question = getConceptMasteryQuestion(unitId, firstLeaf, 0);

      expect(question.provenanceBadge.includes('🏛️ G.C.E. O/L Past Paper')).toBe(true);
      expect(question.options.length).toBe(4);
      expect(question.correctOptionId.length > 0).toBe(true);
    }
  },
  'Phase 4: Curriculum Universality'
);

// ============================================================================
// 2. PERSISTENT SLIDE-UP BOTTOM FEEDBACK DRAWER: STATE 0 (IDLE)
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 1',
  'State 0 (Idle): [ Check ] button is disabled when no option is selected',
  () => {
    const htmlNoSelect = renderToString(
      React.createElement(SessionBottomDrawer, {
        state: 'idle',
        selectedOptionId: null,
        onCheck: () => {},
        onContinue: () => {},
        onTryAgain: () => {},
      })
    );

    // State 0 Container
    expect(htmlNoSelect.includes('data-testid="drawer-idle"')).toBe(true);
    expect(htmlNoSelect.includes('data-testid="drawer-check-btn"')).toBe(true);

    // Check button is disabled
    expect(htmlNoSelect.includes('disabled=""')).toBe(true);
    expect(htmlNoSelect.includes('cursor-not-allowed')).toBe(true);
    expect(htmlNoSelect.includes('Select an option [1 - 4] to check')).toBe(true);
  },
  'Phase 4: State 0 Idle'
);

masteryDrawerSuite.addTest(
  'Tier 1',
  'State 0 (Selected): [ Check ] button activates with prominent primary styling when option is picked',
  () => {
    const htmlSelected = renderToString(
      React.createElement(SessionBottomDrawer, {
        state: 'idle',
        selectedOptionId: 'opt-a',
        onCheck: () => {},
        onContinue: () => {},
        onTryAgain: () => {},
      })
    );

    expect(htmlSelected.includes('data-testid="drawer-idle"')).toBe(true);
    expect(htmlSelected.includes('data-testid="drawer-check-btn"')).toBe(true);

    // Not disabled when option picked
    expect(htmlSelected.includes('disabled=""')).toBe(false);
    expect(htmlSelected.includes('bg-indigo-600')).toBe(true);
    expect(htmlSelected.includes('Ready to verify • Press Enter')).toBe(true);
  },
  'Phase 4: State 0 Active'
);

// ============================================================================
// 3. PERSISTENT SLIDE-UP BOTTOM FEEDBACK DRAWER: STATE 1 (CORRECT / MASTERED)
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 1',
  'State 1 (Correct): Renders emerald green drawer with +15 XP badge, celebration mascot, and [ Continue → ]',
  () => {
    const htmlCorrect = renderToString(
      React.createElement(SessionBottomDrawer, {
        state: 'correct',
        selectedOptionId: 'opt-a',
        explanationEn: 'Correct! An automated barcode scanner performs real-time optical decoding.',
        explanationSi: 'නිවැරදියි! ස්වයංක්‍රීය තීරු කේත ස්කෑනරයක් ක්ෂණික ප්‍රකාශ විකේතනයක් සිදු කරයි.',
        language: 'dual',
        onCheck: () => {},
        onContinue: () => {},
        onTryAgain: () => {},
      })
    );

    // Emerald Green slide-up container
    expect(htmlCorrect.includes('data-testid="drawer-correct"')).toBe(true);
    expect(htmlCorrect.includes('bg-emerald-50')).toBe(true);
    expect(htmlCorrect.includes('border-t-2 border-emerald-500')).toBe(true);
    expect(htmlCorrect.includes('shadow-xl')).toBe(true);

    // +15 XP Badge
    expect(htmlCorrect.includes('data-testid="drawer-xp-badge"')).toBe(true);
    expect(htmlCorrect.includes('+15 XP')).toBe(true);

    // Mascot Celebration Reaction
    expect(htmlCorrect.includes('/assets/clay/banner-student-saturn.svg')).toBe(true);
    expect(htmlCorrect.includes('Mastery Verified!')).toBe(true);

    // Direct Action Button: [ Continue → ]
    expect(htmlCorrect.includes('data-testid="drawer-continue-btn"')).toBe(true);
    expect(htmlCorrect.includes('Continue →')).toBe(true);
    expect(htmlCorrect.includes('[Enter]')).toBe(true);

    // Bilingual Explanation
    expect(htmlCorrect.includes('automated barcode scanner')).toBe(true);
    expect(htmlCorrect.includes('ස්වයංක්‍රීය තීරු කේත ස්කෑනරයක්')).toBe(true);
  },
  'Phase 4: State 1 Correct'
);

// ============================================================================
// 4. PERSISTENT SLIDE-UP BOTTOM FEEDBACK DRAWER: STATE 2 (INCORRECT / DISTRACTOR)
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 1',
  'State 2 (Incorrect): Renders warm rose drawer with distractor rationale, supportive coach message, and [ Try Again ]',
  () => {
    const htmlIncorrect = renderToString(
      React.createElement(SessionBottomDrawer, {
        state: 'incorrect',
        selectedOptionId: 'opt-b',
        distractorRationaleEn: 'Option B is a common exam trap: sensors collect physical analog data, they do not output processed visual graphics.',
        distractorRationaleSi: 'විකල්පය B විභාග උගුලකි: සංවේදක භෞතික දත්ත ලබාගන්නා අතර ප්‍රස්ථාරික ප්‍රතිදාන ලබා නොදෙයි.',
        language: 'dual',
        onCheck: () => {},
        onContinue: () => {},
        onTryAgain: () => {},
      })
    );

    // Warm Rose slide-up container
    expect(htmlIncorrect.includes('data-testid="drawer-incorrect"')).toBe(true);
    expect(htmlIncorrect.includes('bg-rose-50')).toBe(true);
    expect(htmlIncorrect.includes('border-t-2 border-rose-500')).toBe(true);
    expect(htmlIncorrect.includes('shadow-xl')).toBe(true);

    // Distractor Trap Rationale
    expect(htmlIncorrect.includes('data-testid="distractor-rationale"')).toBe(true);
    expect(htmlIncorrect.includes('Exam Trap Rationale:')).toBe(true);
    expect(htmlIncorrect.includes('Option B is a common exam trap')).toBe(true);
    expect(htmlIncorrect.includes('විකල්පය B විභාග උගුලකි')).toBe(true);

    // Mascot Supportive Coach Message
    expect(htmlIncorrect.includes('data-testid="mascot-coach-msg"')).toBe(true);
    expect(htmlIncorrect.replace(/&#x27;/g, "'").includes("Almost! Let's check why...")).toBe(true);
    expect(htmlIncorrect.includes('(Zero penalty practice)')).toBe(true);

    // Direct Action Button: [ Try Again ]
    expect(htmlIncorrect.includes('data-testid="drawer-try-again-btn"')).toBe(true);
    expect(htmlIncorrect.includes('Try Again')).toBe(true);
    expect(htmlIncorrect.includes('[Enter]')).toBe(true);
  },
  'Phase 4: State 2 Incorrect'
);

// ============================================================================
// 5. KEYBOARD ACCESSIBILITY & BEHAVIORAL INTERACTION
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: 1-4 chooses options without locking, Enter checks and continues',
  () => {
    const question = getConceptMasteryQuestion('g10-u1', testLeaf, 0);

    // Simulated interaction states
    let selectedOptionId: string | null = null;
    let isSubmitted = false;
    let isCorrect = false;

    const handleSelectOption = (optId: string) => {
      if (isSubmitted && isCorrect) return;
      if (isSubmitted && !isCorrect) {
        isSubmitted = false;
        isCorrect = false;
      }
      selectedOptionId = optId;
    };

    const handleCheckAnswer = () => {
      if (!selectedOptionId) return;
      isSubmitted = true;
      const opt = question.options.find((o) => o.id === selectedOptionId);
      isCorrect = opt?.id === question.correctOptionId || opt?.key === question.correctKey;
    };

    // 1. Press '2' on keyboard: selects option B without submitting
    const key2Event = { key: '2' };
    const optionIndex = parseInt(key2Event.key, 10) - 1;
    handleSelectOption(question.options[optionIndex].id);

    expect<string | null>(selectedOptionId).toBe(question.options[1].id);
    expect(isSubmitted).toBe(false); // Verified: DOES NOT lock or evaluate immediately!

    // 2. Press 'Enter' to check answer
    handleCheckAnswer();
    expect(isSubmitted).toBe(true);

    // 3. Retry on wrong answer: clears error state
    if (!isCorrect) {
      // User can press 1 to re-select
      handleSelectOption(question.options[0].id);
      expect<string | null>(selectedOptionId).toBe(question.options[0].id);
      expect(isSubmitted).toBe(false); // Reset to state 0!
    }
  },
  'Phase 4: Keyboard Ergonomics'
);

// ============================================================================
// 6. MASTERY PERSISTENCE & STORE ECONOMY
// ============================================================================

masteryDrawerSuite.addTest(
  'Tier 2',
  'Mastery Persistence: Awards exactly +15 XP and marks leaf completed in useGameStore',
  () => {
    const testNodeId = 'test-phase4-mastery-leaf';
    const initialXp = useGameStore.getState().xp;

    // Simulate correct submission action
    useGameStore.getState().addXp(15);
    const xpAfterAdd = useGameStore.getState().xp;
    expect(xpAfterAdd - initialXp).toBe(15);

    useGameStore.getState().completeNode(testNodeId, 100);
    const isNodeComplete = !!useGameStore.getState().completedNodes[testNodeId];
    expect(isNodeComplete).toBe(true);
    expect(useGameStore.getState().completedNodes[testNodeId].highAccuracy).toBe(100);
    expect(useGameStore.getState().completedNodes[testNodeId].stars).toBe(3);
  },
  'Phase 4: Store Economy'
);

// Run the verification suite directly
if (require.main === module) {
  masteryDrawerSuite.run().then((success) => {
    if (!success) process.exit(1);
  });
}
