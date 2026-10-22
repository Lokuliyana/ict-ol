/**
 * tests/unit/masterDetailTreeLayout.test.ts
 * Verification Suite for Reusable Master-Detail Tree Learning Layout
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MasterDetailTreeLayout } from '../../src/components/learning-engine/MasterDetailTreeLayout';
import { LinearLessonRunner } from '../../src/components/LinearLessonRunner';
import { getUnitTreeManifest } from '../../src/data/adapters/treeSyllabusAdapter';
import { CURRICULUM_DATA } from '../../src/data/curriculum';
import { useGameStore } from '../../src/lib/store';

export const masterDetailSuite = new TestSuiteRunner(
  'Master-Detail Tree Layout & Lesson Runner Suite'
);

// ============================================================================
// 1. REUSABLE MASTER-DETAIL LAYOUT CONTRACTS ACROSS UNITS
// ============================================================================

masterDetailSuite.addTest(
  'Tier 1',
  'Layout Structure: MasterDetailTreeLayout renders master-detail container with tree navigation and content viewer',
  () => {
    const html = renderToString(
      React.createElement(MasterDetailTreeLayout, {
        unitId: 'g10-u1',
        language: 'dual',
      })
    );

    expect(html.includes('data-testid="master-detail-tree-layout"')).toBe(true);
    expect(html.includes('aria-label="Syllabus Tree Navigation"')).toBe(true);
    expect(html.includes('Syllabus Knowledge Tree')).toBe(true);
    expect(html.includes('Filter branches or concepts...')).toBe(true);
    // 1-column centered focus container
    expect(html.includes('max-w-[620px]')).toBe(true);
    expect(html.includes('min-h-[calc(100vh-64px)]')).toBe(true);
    // Tree progress percent
    expect(html.includes('%')).toBe(true);
    // Checkpoint gate button
    expect(html.includes('Unit Verification Gate')).toBe(true);
  },
  'Master-Detail Structure'
);

masterDetailSuite.addTest(
  'Tier 1',
  'Unit Universality: MasterDetailTreeLayout renders cleanly across arbitrary syllabus units',
  () => {
    const testUnits = ['g10-u1', 'g10-u5', 'g10-u9', 'g11-u1', 'g11-u5', 'g11-u6'];

    for (const unitId of testUnits) {
      const manifest = getUnitTreeManifest(unitId);
      const html = renderToString(
        React.createElement(MasterDetailTreeLayout, {
          unitId,
          language: 'dual',
        })
      );

      expect(html.includes(`data-unit-id="${unitId}"`)).toBe(true);
      // Verify unit root is present in rendered output
      const escapedTitle = manifest.rootNode.titleEn.replace(/&/g, '&amp;');
      expect(html.includes(escapedTitle)).toBe(true);
      // Verify at least one branch title appears in tree
      const firstBranch = manifest.nodes[manifest.branchIds[0]];
      expect(firstBranch !== undefined).toBe(true);
      const escapedBranchTitle = firstBranch.titleEn.replace(/&/g, '&amp;');
      expect(html.includes(escapedBranchTitle)).toBe(true);
    }
  },
  'Unit Universality'
);

// ============================================================================
// 2. FOCUSED CONTENT VIEWER CONTRACTS
// ============================================================================

masterDetailSuite.addTest(
  'Tier 2',
  'Leaf Content Viewer: Renders Micro-Theory Bite, Analogy, and Navigation Controls',
  () => {
    const html = renderToString(
      React.createElement(MasterDetailTreeLayout, {
        unitId: 'g10-u1',
        language: 'en',
      })
    );

    // Theory bite section
    expect(html.includes('Micro-Theory Bite')).toBe(true);
    // Real-world analogy section
    expect(html.includes('Real-World Mental Model Analogy')).toBe(true);
    // Active recall section
    expect(html.includes('Active Recall')).toBe(true);
    // Sticky bottom action buttons
    expect(html.includes('Previous Concept')).toBe(true);
    expect(html.includes('Next Concept') || html.includes('Enter Checkpoint Gate')).toBe(true);
  },
  'Content Viewer'
);

masterDetailSuite.addTest(
  'Tier 2',
  'Language Modes: MasterDetailTreeLayout respects en, si, and dual modes',
  () => {
    // English mode
    const htmlEn = renderToString(
      React.createElement(MasterDetailTreeLayout, {
        unitId: 'g10-u1',
        language: 'en',
      })
    );
    expect(htmlEn.includes('Micro-Theory Bite')).toBe(true);

    // Sinhala mode
    const htmlSi = renderToString(
      React.createElement(MasterDetailTreeLayout, {
        unitId: 'g10-u1',
        language: 'si',
      })
    );
    expect(htmlSi.includes('font-sinhala')).toBe(true);

    // Dual mode
    const htmlDual = renderToString(
      React.createElement(MasterDetailTreeLayout, {
        unitId: 'g10-u1',
        language: 'dual',
      })
    );
    expect(htmlDual.includes('font-sinhala')).toBe(true);
  },
  'Language Modes'
);

// ============================================================================
// 3. INTEGRATION WITH LINEAR LESSON RUNNER
// ============================================================================

masterDetailSuite.addTest(
  'Tier 1',
  'LinearLessonRunner Integration: Defaults to Syllabus Tree Explorer tab with MasterDetailTreeLayout',
  () => {
    const lessonMeta = CURRICULUM_DATA[0]; // g10-u1
    const html = renderToString(
      React.createElement(LinearLessonRunner, {
        lessonMeta,
        grade: '10',
        subtopics: [],
        glossary: [],
        pastPapers: [],
      })
    );

    // Primary tab active
    expect(html.includes('Syllabus Tree Explorer')).toBe(true);
    expect(html.includes('data-testid="master-detail-tree-layout"')).toBe(true);
    // Audio mute toggle
    expect(html.includes('data-testid="lesson-audio-mute-toggle"')).toBe(true);
    // Breadcrumbs
    expect(html.includes('Grade') && html.includes('Unit') && html.includes('01')).toBe(true);
  },
  'Lesson Runner Integration'
);

masterDetailSuite.addTest(
  'Tier 1',
  'Minimalist Top Session Bar: Renders Exit button, segmented progress bar, streak flame, XP, and discreet syllabus trigger',
  () => {
    const lessonMeta = CURRICULUM_DATA[0]; // g10-u1 with 33 leaves
    const html = renderToString(
      React.createElement(LinearLessonRunner, {
        lessonMeta,
        grade: '10',
      })
    );

    // Left: Exit [ ✕ ] Button returning to /
    expect(html.includes('href="/"')).toBe(true);
    expect(html.includes('aria-label="Exit Session"')).toBe(true);

    // Center: Segmented session progress bar
    expect(html.includes('aria-label="Active Session Micro-Card Progress"')).toBe(true);
    // Unit 1 has 33 leaves total, verified in session counter
    expect(html.includes('33')).toBe(true);
    expect(html.includes('Session Mastery:')).toBe(true);

    // Right: Streak flame, Session XP, Discreet Syllabus Trigger
    expect(html.includes('🔥')).toBe(true);
    expect(html.includes('XP')).toBe(true);
    expect(html.includes('aria-label="Syllabus Tree Explorer"')).toBe(true);
    expect(html.includes('Syllabus')).toBe(true);
  },
  'Top Session Bar'
);

// ============================================================================
// RUNNER ENTRYPOINT
// ============================================================================

async function main() {
  const results = await masterDetailSuite.run();
  const failed = results.filter((r) => !r.passed);

  if (failed.length > 0) {
    console.error('\n❌ MASTER DETAIL TREE LAYOUT TESTS FAILED: ' + failed.length + ' failure(s)');
    for (const f of failed) {
      console.error(' - [' + f.tier + '] ' + f.name + ':', f.error);
    }
    process.exit(1);
  } else {
    console.log('\n🎉 ALL ' + results.length + ' MASTER DETAIL TREE LAYOUT TESTS PASSED CLEANLY!');
    process.exit(0);
  }
}

if (process.argv[1] && process.argv[1].includes('masterDetailTreeLayout.test.ts')) {
  main();
}
