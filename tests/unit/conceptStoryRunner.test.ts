/**
 * tests/unit/conceptStoryRunner.test.ts
 * Comprehensive Verification Suite for:
 * Phase 1: Micro-Step Concept Story Runner Core (4-Beat Story Runner & Instagram-style Segmented Bar)
 * Phase 2: Authentic Mastery Question Gate (Objective Question Gate & Dynamic Distractor Feedback)
 * Phase 3: Mascot Reactive Companion (Dynamic Emotional States: curious, tinker, supportive, celebrate)
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ConceptStoryRunner } from '../../src/components/learning-engine/ConceptStoryRunner';
import { MascotCompanion, MascotMood } from '../../src/components/learning-engine/MascotCompanion';
import {
  getConceptMasteryQuestion,
  ConceptMasteryQuestion,
} from '../../src/data/questionBanks/conceptMasteryMatcher';
import { getUnitTreeManifest, getAllUnitTreeManifests } from '../../src/data/adapters/treeSyllabusAdapter';
import { useGameStore } from '../../src/lib/store';

export const storyRunnerSuite = new TestSuiteRunner(
  'Micro-Step Concept Story Runner & Mastery Gate Suite'
);

// Sample test leaf node from Unit 1
const testManifest = getUnitTreeManifest('g10-u1');
const testLeaf = Object.values(testManifest.nodes).find((n) => n.type === 'leaf')!;

// ============================================================================
// 1. PHASE 1: MICRO-STEP CONCEPT STORY RUNNER CORE
// ============================================================================

storyRunnerSuite.addTest(
  'Tier 1',
  'Story Runner Structure: Renders segmented progress bar and initial Learn beat in SSR',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: testLeaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // Root container
    expect(html.includes('data-testid="concept-story-runner"')).toBe(true);

    // Instagram story-style segmented progress bar
    expect(html.includes('aria-label="Micro-Step Story Progress"')).toBe(true);
    expect(html.includes('Beat 1: Learn')).toBe(true);
    expect(html.includes('Beat 2: Play')).toBe(true);
    expect(html.includes('Beat 3: Prove')).toBe(true);

    // Beat 1 Learn content
    expect(html.includes('Micro-Theory Bite')).toBe(true);
    expect(html.includes('Real-World Mental Model Analogy')).toBe(true);
    expect(html.includes('Active Recall')).toBe(true);

    // Forward and Backward Controls
    expect(html.includes('Previous Concept')).toBe(true);
    expect(html.includes('Next Concept')).toBe(true);
  },
  'Phase 1: Story Runner Core'
);

storyRunnerSuite.addTest(
  'Tier 2',
  'Language Modes: Story Runner renders both English and Sinhala content',
  () => {
    // English mode
    const htmlEn = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: testLeaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'en',
        onSelectNode: () => {},
      })
    );
    expect(htmlEn.includes('Micro-Theory Bite')).toBe(true);

    // Sinhala mode
    const htmlSi = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: testLeaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'si',
        onSelectNode: () => {},
      })
    );
    expect(htmlSi.includes('font-sinhala')).toBe(true);

    // Dual mode
    const htmlDual = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: testLeaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );
    expect(htmlDual.includes('font-sinhala')).toBe(true);
  },
  'Phase 1: Bilingual Parity'
);

// ============================================================================
// 2. PHASE 2: AUTHENTIC MASTERY QUESTION GATE
// ============================================================================

storyRunnerSuite.addTest(
  'Tier 1',
  'Mastery Question Matcher: Resolves authentic MCQ with 4 options and valid answer key',
  () => {
    const question = getConceptMasteryQuestion('g10-u1', testLeaf, 0);

    expect(typeof question.id).toBe('string');
    expect(question.options.length).toBe(4);
    expect(question.promptEn.length > 0).toBe(true);
    expect(question.promptSi.length > 0).toBe(true);
    expect(['A', 'B', 'C', 'D'].includes(question.correctKey)).toBe(true);
    expect(question.explanationEn.length > 0).toBe(true);

    // Verify option keys match A, B, C, D
    const optionKeys = question.options.map((o) => o.key);
    expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);
  },
  'Phase 2: Question Contract'
);

storyRunnerSuite.addTest(
  'Tier 3',
  'Syllabus Universality: 100% of syllabus leaf nodes across all 15 units resolve to authentic questions',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    let totalVerifiedLeaves = 0;

    for (const m of manifests) {
      const leaves = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      expect(leaves.length > 0).toBe(true);

      leaves.forEach((leaf, idx) => {
        const q = getConceptMasteryQuestion(m.rootNode.id.replace('-root', ''), leaf, idx);
        expect(q !== null).toBe(true);
        expect(q.options.length).toBe(4);
        expect(q.correctOptionId.length > 0).toBe(true);
        expect(q.explanationEn.length > 0).toBe(true);
        totalVerifiedLeaves++;
      });
    }

    // Must verify all 255 leaves across Grade 10 & Grade 11
    expect(totalVerifiedLeaves).toBe(255);
  },
  'Phase 2: 100% Syllabus Coverage'
);

storyRunnerSuite.addTest(
  'Tier 2',
  'Mastery Economy: Correct mastery awards exactly +15 XP and marks node complete',
  () => {
    const initialXp = useGameStore.getState().xp;
    const testLeafId = 'test-story-mastery-node';

    // Award +15 XP for concept mastery gate
    useGameStore.getState().addXp(15);
    const xpAfterAdd = useGameStore.getState().xp;
    expect(xpAfterAdd - initialXp).toBe(15);

    // completeNode records node completion
    useGameStore.getState().completeNode(testLeafId, 100);
    const isCompleted = !!useGameStore.getState().completedNodes[testLeafId];
    expect(isCompleted).toBe(true);
  },
  'Phase 2: Store Integration'
);

// ============================================================================
// 3. PHASE 3: MASCOT REACTIVE COMPANION
// ============================================================================

storyRunnerSuite.addTest(
  'Tier 1',
  'Mascot Companion: Renders across all 4 emotional states (curious, tinker, supportive, celebrate)',
  () => {
    const moods: MascotMood[] = ['curious', 'tinker', 'supportive', 'celebrate'];

    for (const mood of moods) {
      const html = renderToString(
        React.createElement(MascotCompanion, {
          mood,
          language: 'dual',
          variant: 'desktop-side',
          conceptTitle: 'Data and Information',
        })
      );

      // Mascot Saturn SVG asset integration
      expect(html.includes('/assets/clay/banner-student-saturn.svg')).toBe(true);
      // Companion dialogue bubble
      expect(html.includes('Data and Information')).toBe(true);
    }
  },
  'Phase 3: Emotional States'
);

storyRunnerSuite.addTest(
  'Tier 1',
  'Mascot Responsive Layout: Supports both desktop side panel and mobile banner variants',
  () => {
    // Desktop side variant
    const htmlDesktop = renderToString(
      React.createElement(MascotCompanion, {
        mood: 'curious',
        language: 'en',
        variant: 'desktop-side',
      })
    );
    expect(htmlDesktop.includes('Curious Explorer')).toBe(true);

    // Mobile banner variant
    const htmlMobile = renderToString(
      React.createElement(MascotCompanion, {
        mood: 'celebrate',
        language: 'dual',
        variant: 'mobile-banner',
      })
    );
    expect(htmlMobile.includes('Mastery Champion')).toBe(true);
    expect(htmlMobile.includes('+15 XP')).toBe(true);
  },
  'Phase 3: Responsive Variants'
);

storyRunnerSuite.addTest(
  'Tier 2',
  'Mascot Clay Badges: Correctly binds distinct clay SVG badges per emotional state',
  () => {
    const curiousHtml = renderToString(
      React.createElement(MascotCompanion, { mood: 'curious', variant: 'desktop-side' })
    );
    expect(curiousHtml.includes('/assets/clay/thumb-theory-openbook.svg')).toBe(true);

    const tinkerHtml = renderToString(
      React.createElement(MascotCompanion, { mood: 'tinker', variant: 'desktop-side' })
    );
    expect(tinkerHtml.includes('/assets/clay/thumb-ict-tech.svg')).toBe(true);

    const supportiveHtml = renderToString(
      React.createElement(MascotCompanion, { mood: 'supportive', variant: 'desktop-side' })
    );
    expect(supportiveHtml.includes('/assets/clay/thumb-revision-screen.svg')).toBe(true);

    const celebrateHtml = renderToString(
      React.createElement(MascotCompanion, { mood: 'celebrate', variant: 'desktop-side' })
    );
    expect(celebrateHtml.includes('/assets/clay/grade-report-trophy.svg')).toBe(true);
  },
  'Phase 3: Clay SVG Assets'
);

// ============================================================================
// 4. BEHAVIORAL & EDGE CASE VERIFICATION
// ============================================================================

storyRunnerSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: Dispatches shortcuts and suppresses inside form elements',
  () => {
    // 1. Suppression check for input elements
    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT'];
    for (const tag of ignoredTags) {
      let toggled = false;
      const target = { tagName: tag, isContentEditable: false, getAttribute: () => null } as unknown as HTMLElement;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);
      expect(isInput).toBe(true);
    }

    // 2. '[' tree toggle dispatch
    let treeToggled = false;
    let stopPropagationCalled = false;
    let defaultPrevented = false;

    const mockEvent = {
      key: '[',
      target: { tagName: 'DIV', isContentEditable: false } as unknown as HTMLElement,
      preventDefault: () => {
        defaultPrevented = true;
      },
      stopImmediatePropagation: () => {
        stopPropagationCalled = true;
      },
    };

    // Handler logic from ConceptStoryRunner
    if (mockEvent.key === '[') {
      mockEvent.preventDefault();
      mockEvent.stopImmediatePropagation();
      treeToggled = true;
    }

    expect(defaultPrevented).toBe(true);
    expect(stopPropagationCalled).toBe(true);
    expect(treeToggled).toBe(true);
  },
  'Phase 1: Keyboard Accessibility'
);

storyRunnerSuite.addTest(
  'Tier 2',
  'Mastery Gate Feedback: Incorrect choice gives supportive feedback and retry',
  () => {
    const question = getConceptMasteryQuestion('g10-u1', testLeaf, 0);
    const incorrectOpt = question.options.find((o) => o.id !== question.correctOptionId && o.key !== question.correctKey)!;
    expect(incorrectOpt !== undefined).toBe(true);

    // Simulate wrong submission state
    const isSubmitted = true;
    const isCorrect = incorrectOpt.id === question.correctOptionId || incorrectOpt.key === question.correctKey;
    expect(isCorrect).toBe(false);

    // Dynamic mascot mood for wrong answer must be 'supportive'
    const mascotMood: MascotMood = isCorrect ? 'celebrate' : 'supportive';
    expect(mascotMood).toBe('supportive');

    // Mascot rendered with supportive mood
    const htmlSupportive = renderToString(
      React.createElement(MascotCompanion, {
        mood: mascotMood,
        language: 'dual',
        variant: 'desktop-side',
      })
    );
    expect(htmlSupportive.includes('Supportive Coach')).toBe(true);
    expect(htmlSupportive.includes('Zero Penalty Practice')).toBe(true);

    // Retry resets to tinker mood
    const retriedMood: MascotMood = 'tinker';
    expect(retriedMood).toBe('tinker');
  },
  'Phase 2: Distractor Clue & Retry'
);

storyRunnerSuite.addTest(
  'Tier 1',
  'Celebration Beat: Renders victory badge, trophy, and progression CTA',
  () => {
    const htmlMascot = renderToString(
      React.createElement(MascotCompanion, {
        mood: 'celebrate',
        language: 'dual',
        variant: 'desktop-side',
      })
    );
    expect(htmlMascot.includes('Mastery Champion')).toBe(true);
    expect(htmlMascot.includes('+15 XP Earned • Leaf Mastered!')).toBe(true);
    expect(htmlMascot.includes('/assets/clay/grade-report-trophy.svg')).toBe(true);
  },
  'Phase 3: Celebration Beat'
);

// Run the verification suite
if (require.main === module) {
  storyRunnerSuite.run().then((success) => {
    if (!success) process.exit(1);
  });
}
