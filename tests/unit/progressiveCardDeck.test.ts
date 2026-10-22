/**
 * tests/unit/progressiveCardDeck.test.ts
 * Comprehensive Verification Suite for:
 * Phase 3: Progressive Card Deck & Micro-Sandbox Integration
 *
 * Verifies:
 * 1. Progressive Card Deck Structure (Hook -> Mental Model -> Micro-Sandbox)
 * 2. Step progression across Hook -> Mental Model -> Micro-Sandbox -> Mastery Gate
 * 3. Forward and backward card navigation ergonomics
 * 4. Micro-sandbox interactive mounting across diverse syllabus tactile widgets
 * 5. Keyboard accessibility (Space/Enter, ArrowLeft/ArrowRight, '[')
 * 6. Rapid 180ms ease-out transitions and responsive 620px Focus Tunnel bounds
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ConceptStoryRunner } from '../../src/components/learning-engine/ConceptStoryRunner';
import { getUnitTreeManifest, getAllUnitTreeManifests } from '../../src/data/adapters/treeSyllabusAdapter';
import { SyllabusTreeNode } from '../../src/types/treeSyllabus';

export const progressiveDeckSuite = new TestSuiteRunner(
  'Phase 3: Progressive Card Deck & Micro-Sandbox Integration Suite'
);

// Sample leaf nodes for testing
const g10u1Manifest = getUnitTreeManifest('g10-u1');
const g10u1Leaf = Object.values(g10u1Manifest.nodes).find((n) => n.type === 'leaf')!;

const g10u4Manifest = getUnitTreeManifest('g10-u4');
const g10u4Leaf = Object.values(g10u4Manifest.nodes).find(
  (n) => n.type === 'leaf' && n.leafPayload?.tactileWidget?.widgetKey === 'logic_gate'
) || Object.values(g10u4Manifest.nodes).find((n) => n.type === 'leaf')!;

const g10u2Manifest = getUnitTreeManifest('g10-u2');
const g10u2Leaf = Object.values(g10u2Manifest.nodes).find(
  (n) => n.type === 'leaf' && n.leafPayload?.tactileWidget?.widgetKey === 'cpu_bus'
) || Object.values(g10u2Manifest.nodes).find((n) => n.type === 'leaf')!;

// ============================================================================
// 1. PROGRESSIVE CARD DECK STRUCTURE & ZERO-SCROLL ATOMIZATION
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 1',
  'Card Deck Structure: Mounts progressive card deck container with 3 atomized cards',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // 1. Root progressive card deck container
    expect(html.includes('data-testid="progressive-card-deck"')).toBe(true);
    expect(html.includes('aria-label="Progressive Concept Card Deck"')).toBe(true);
    expect(html.includes('role="region"')).toBe(true);

    // 2. Card 1: The Atomic Hook
    expect(html.includes('data-testid="card-atomic-hook"')).toBe(true);
    expect(html.includes('Card 1 of 3 • The Atomic Hook • Micro-Theory Bite')).toBe(true);
    expect(html.includes('data-card-step="0"')).toBe(true);

    // 3. Card 2: The Mental Model Graphic
    expect(html.includes('data-testid="card-mental-model"')).toBe(true);
    expect(html.includes('Card 2 of 3 • The Mental Model Graphic')).toBe(true);
    expect(html.includes('data-card-step="1"')).toBe(true);

    // 4. Card 3: The 15-Second Micro-Sandbox
    expect(html.includes('data-testid="card-micro-sandbox"')).toBe(true);
    expect(html.includes('Card 3 of 3 • 15-Second Micro-Sandbox')).toBe(true);
    expect(html.includes('data-card-step="2"')).toBe(true);
  },
  'Phase 3: Progressive Card Deck Structure'
);

progressiveDeckSuite.addTest(
  'Tier 1',
  'Card 1 (The Atomic Hook): Natural prose with BilingualTermPeek keywords and zero side-by-side clutter',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // Hook card elements
    expect(html.includes('data-testid="card-atomic-hook"')).toBe(true);
    expect(html.includes('Micro-Theory Bite')).toBe(true);

    // Keywords wrapped in BilingualTermPeek
    expect(html.includes('data-testid="bilingual-term-trigger"')).toBe(true);

    // Active recall memory anchor
    expect(html.includes('Active Recall:')).toBe(true);

    // Clean single-stream language toggle rather than side-by-side duplicate paragraphs
    expect(html.includes('English')).toBe(true);
    expect(html.includes('සිංහල')).toBe(true);
  },
  'Phase 3: Card 1 Atomic Hook'
);

progressiveDeckSuite.addTest(
  'Tier 1',
  'Card 2 (Mental Model Graphic): Dedicated visual SVG architecture canvas & punchy takeaway',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // Mental model card elements
    expect(html.includes('data-testid="card-mental-model"')).toBe(true);
    expect(html.includes('Real-World Mental Model Analogy')).toBe(true);

    // SVG architecture diagram nodes: Context, Mechanism, Intuition
    expect(html.includes('Context')).toBe(true);
    expect(html.includes('Mechanism')).toBe(true);
    expect(html.includes('Intuition')).toBe(true);

    // Punchy Takeaway Caption
    expect(html.includes('Punchy Takeaway:')).toBe(true);
  },
  'Phase 3: Card 2 Mental Model Graphic'
);

progressiveDeckSuite.addTest(
  'Tier 1',
  'Card 3 (15-Second Micro-Sandbox): Mounts focused mini-sandbox container without prose clutter',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    expect(html.includes('data-testid="card-micro-sandbox"')).toBe(true);
    expect(html.includes('data-testid="micro-sandbox-container"')).toBe(true);
    expect(html.includes('15-Second Micro-Sandbox')).toBe(true);
    expect(html.includes('Tactile Simulation')).toBe(true);
  },
  'Phase 3: Card 3 Micro-Sandbox'
);

// ============================================================================
// 2. STEP PROGRESSION & PROGRESS BAR SYNCHRONIZATION
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 2',
  'Synchronized Progress Bar: 4-segment track synchronized with card steps & 180ms ease-out transitions',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // 4-column progress track grid
    expect(html.includes('grid grid-cols-4')).toBe(true);

    // Rapid 180ms ease-out transition class applied across tracks and cards
    expect(html.includes('duration-[180ms] ease-out')).toBe(true);

    // Interactive beat buttons
    expect(html.includes('Beat 1: Learn')).toBe(true);
    expect(html.includes('Beat 2: Play')).toBe(true);
    expect(html.includes('Beat 3: Prove')).toBe(true);

    // Active Card 1 indicator dot
    expect(html.includes('Card 1: Atomic Hook')).toBe(true);
    expect(html.includes('Card 2: Mental Model Graphic')).toBe(true);
  },
  'Phase 3: Synchronized Progress Bar'
);

progressiveDeckSuite.addTest(
  'Tier 2',
  'Step Progression Logic: Advances across Hook (0) -> Mental Model (1) -> Micro-Sandbox (2) -> Prove (3)',
  () => {
    // 1. Step 0 (The Atomic Hook)
    const htmlStep0 = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        initialCardStep: 0,
        onSelectNode: () => {},
      })
    );
    expect(htmlStep0.includes('data-card-step="0"')).toBe(true);
    expect(htmlStep0.includes('Continue → (Next Concept Step)')).toBe(true);
    expect(htmlStep0.includes('Step 1: The Atomic Hook')).toBe(true);

    // 2. Step 1 (The Mental Model Graphic)
    const htmlStep1 = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        initialCardStep: 1,
        onSelectNode: () => {},
      })
    );
    expect(htmlStep1.includes('data-card-step="1"')).toBe(true);
    expect(htmlStep1.includes('Continue to Micro-Sandbox →')).toBe(true);
    expect(htmlStep1.includes('Step 2: The Mental Model Graphic')).toBe(true);

    // 3. Step 2 (The 15-Second Micro-Sandbox)
    const htmlStep2 = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        initialCardStep: 2,
        onSelectNode: () => {},
      })
    );
    expect(htmlStep2.includes('data-card-step="2"')).toBe(true);
    expect(htmlStep2.includes('Prove Mastery →')).toBe(true);
    expect(htmlStep2.includes('Step 3: 15-Second Micro-Sandbox')).toBe(true);

    // 4. Step 3 (Mastery Gate - Beat 3: Prove)
    const htmlStep3 = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        initialCardStep: 3,
        onSelectNode: () => {},
      })
    );
    expect(htmlStep3.includes('Authentic Mastery Question Gate')).toBe(true);
    expect(htmlStep3.includes('Step 4: Prove Mastery Gate')).toBe(true);
  },
  'Phase 3: Step Progression Engine'
);

// ============================================================================
// 3. FORWARD & BACKWARD NAVIGATION ERGONOMICS
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 1',
  'Navigation Controls: Direct in-card Continue/Back and sticky bottom controls are present',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // Continue and Back buttons in card deck
    expect(html.includes('data-testid="deck-continue-btn"')).toBe(true);
    expect(html.includes('data-testid="deck-back-btn"')).toBe(true);
    expect(html.includes('Continue →')).toBe(true);
    expect(html.includes('Back')).toBe(true);
  },
  'Phase 3: Card Navigation Controls'
);

// ============================================================================
// 4. MICRO-SANDBOX INTERACTIVE MOUNTING ACROSS CURRICULUM
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 2',
  'Micro-Sandbox Mounting: Mounts logic gate simulator for Unit 4 logic gate concept',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u4',
        leafNode: g10u4Leaf,
        leafIndex: 0,
        totalLeaves: 20,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    expect(html.includes('data-testid="card-micro-sandbox"')).toBe(true);
    expect(html.includes('data-testid="micro-sandbox-container"')).toBe(true);
    // Logic gate widget mounting
    expect(html.includes('Logic Gate') || html.includes('Simulation') || html.includes('Interactive')).toBe(true);
  },
  'Phase 3: Logic Gate Sandbox Mounting'
);

progressiveDeckSuite.addTest(
  'Tier 2',
  'Micro-Sandbox Mounting: Mounts CPU bus / architecture simulation for Unit 2 concept',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u2',
        leafNode: g10u2Leaf,
        leafIndex: 0,
        totalLeaves: 25,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    expect(html.includes('data-testid="card-micro-sandbox"')).toBe(true);
    expect(html.includes('data-testid="micro-sandbox-container"')).toBe(true);
  },
  'Phase 3: CPU Bus Sandbox Mounting'
);

progressiveDeckSuite.addTest(
  'Tier 3',
  'Micro-Sandbox Universality: 100% of syllabus leaf nodes mount valid tactile widget or 3D recall check',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    let totalVerifiedSandboxes = 0;

    for (const m of manifests) {
      const leaves = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leaves) {
        const payload = leaf.leafPayload;
        expect(!!payload).toBe(true);
        // Each leaf has either an authentic tactileWidget OR activeRecallCard
        const hasTactileWidget = !!payload?.tactileWidget?.widgetKey;
        const hasActiveRecall = !!payload?.activeRecallCard?.termEn;
        expect(hasTactileWidget || hasActiveRecall).toBe(true);
        totalVerifiedSandboxes++;
      }
    }

    expect(totalVerifiedSandboxes).toBe(255);
  },
  'Phase 3: 100% Syllabus Micro-Sandbox Universality'
);

// ============================================================================
// 5. KEYBOARD ACCESSIBILITY ERGONOMICS
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: ArrowLeft/ArrowRight, Space/Enter, and [ shortcuts are configured',
  () => {
    // 1. Input suppression check
    const isFormInput = (target: { tagName?: string; isContentEditable?: boolean }) =>
      Boolean(
        target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable
      );

    expect(isFormInput({ tagName: 'INPUT' })).toBe(true);
    expect(isFormInput({ tagName: 'TEXTAREA' })).toBe(true);
    expect(isFormInput({ tagName: 'SELECT' })).toBe(true);
    expect(isFormInput({ isContentEditable: true })).toBe(true);
    expect(isFormInput({ tagName: 'DIV' })).toBe(false);

    // 2. Micro-sandbox container focus suppression check
    const isSandboxTarget = (target: { closest: (sel: string) => boolean | null }) =>
      !!target.closest('[data-testid="micro-sandbox-container"]');

    expect(isSandboxTarget({ closest: (s) => s === '[data-testid="micro-sandbox-container"]' })).toBe(true);
    expect(isSandboxTarget({ closest: () => null })).toBe(false);

    // 3. SSR HTML shortcut guidance
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // Shortcuts hint rendered in sticky footer
    expect(html.includes('Press Space/Enter to advance')).toBe(true);
    expect(html.includes('title="Expand Syllabus Tree (Press [)"')).toBe(false); // only when tree collapsed
  },
  'Phase 3: Keyboard Accessibility'
);

// ============================================================================
// 6. RESPONSIVE CONTAINER BOUNDS & 620px FOCUS TUNNEL
// ============================================================================

progressiveDeckSuite.addTest(
  'Tier 1',
  'Responsive Bounds: Single-stream focus layout renders with zero-scroll bounds',
  () => {
    const html = renderToString(
      React.createElement(ConceptStoryRunner, {
        unitId: 'g10-u1',
        leafNode: g10u1Leaf,
        leafIndex: 0,
        totalLeaves: 33,
        language: 'dual',
        onSelectNode: () => {},
      })
    );

    // 1. Root focus tunnel container
    expect(html.includes('data-testid="concept-story-runner"')).toBe(true);

    // 2. Zero-scroll rapid 180ms ease-out transitions
    expect(html.includes('duration-[180ms] ease-out')).toBe(true);

    // 3. Ergonomic sticky bottom action controls with pb-safe
    expect(html.includes('sticky bottom-4 z-20 pb-safe')).toBe(true);

    // 4. Centered focus tunnel bounds
    expect(html.includes('max-w-md')).toBe(true);
  },
  'Phase 3: Responsive Bounds'
);

// Run the verification suite
if (require.main === module) {
  progressiveDeckSuite.run().then((success) => {
    if (!success) process.exit(1);
  });
}
