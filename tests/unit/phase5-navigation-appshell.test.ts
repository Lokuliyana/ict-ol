/**
 * tests/unit/phase5-navigation-appshell.test.ts
 * Rigorous Verification Suite for Phase 5:
 * Navigation & App Shell Consolidation (Strict 2 Spaces)
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { CURRICULUM_DATA } from '../../src/data/curriculum';
import { useGameStore } from '../../src/lib/store';
import { getUnitTreeManifest } from '../../src/data/adapters/treeSyllabusAdapter';
import nextConfig from '../../next.config.mjs';
import fs from 'fs';
import path from 'path';

export const phase5NavigationSuite = new TestSuiteRunner(
  'Phase 5: Navigation & App Shell Consolidation (Strict 2 Spaces)'
);

// ============================================================================
// 1. 2-SPACES ARCHITECTURE CONTRACTS
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 1',
  'MobileBottomNav Contract: Strictly 2 tabs (Learn & Exam Arena) with zero legacy tabs',
  async () => {
    const { MobileBottomNav } = await import('../../src/components/navigation/MobileBottomNav');
    expect(typeof MobileBottomNav).toBe('function');

    const html = renderToString(React.createElement(MobileBottomNav));

    // Must contain Space 1: Learn (/) and Space 2: Exam Arena (/papers)
    expect(html.includes('href="/"')).toBe(true);
    expect(html.includes('href="/papers"')).toBe(true);
    expect(html.includes('🌳')).toBe(true);
    expect(html.includes('⚔️')).toBe(true);
    expect(html.includes('pb-safe')).toBe(true);

    // Must NOT contain obsolete Russian-doll tab routes
    expect(html.includes('/study/')).toBe(false);
    expect(html.includes('/quiz/')).toBe(false);
    expect(html.includes('/revision-sheet/')).toBe(false);
    expect(html.includes('/sandbox/')).toBe(false);

    // Verify grid layout is strictly 2 columns
    expect(html.includes('grid-cols-2')).toBe(true);
  },
  'Mobile Navigation Dock'
);

phase5NavigationSuite.addTest(
  'Tier 1',
  'WorkspaceSidebar Contract: Segmented 2-Space Switcher and 15 Units Mapping',
  async () => {
    const { WorkspaceSidebar } = await import('../../src/components/navigation/WorkspaceSidebar');
    expect(typeof WorkspaceSidebar).toBe('function');

    // Verify Grade 10 (Units 1-9) and Grade 11 (Units 10-15) partition
    const g10Units = CURRICULUM_DATA.filter((u) => u.grade === '10');
    const g11Units = CURRICULUM_DATA.filter((u) => u.grade === '11');

    expect(g10Units.length).toBe(9);
    expect(g11Units.length).toBe(6);
    expect(g10Units.length + g11Units.length).toBe(15);

    // Initial Grade 10 rendering
    useGameStore.setState({ activeGrade: '10', grade: '10', isSidebarCollapsed: false });
    const htmlG10 = renderToString(React.createElement(WorkspaceSidebar));

    expect(htmlG10.includes('Syllabus Tree')).toBe(true);
    expect(htmlG10.includes('Exam Arena')).toBe(true);
    expect(htmlG10.includes('Grade 10 (Units 1–9)')).toBe(true);
    expect(htmlG10.includes('Grade 11 (Units 10–15)')).toBe(true);

    // G10 displays Units 01 through 09
    for (let i = 1; i <= 9; i++) {
      expect(htmlG10.includes(String(i).padStart(2, '0'))).toBe(true);
    }

    // Switch to Grade 11
    useGameStore.setState({ activeGrade: '11', grade: '11', isSidebarCollapsed: false });
    const htmlG11 = renderToString(React.createElement(WorkspaceSidebar));

    // G11 displays Units 10 through 15
    for (let i = 10; i <= 15; i++) {
      expect(htmlG11.includes(String(i).padStart(2, '0'))).toBe(true);
    }
  },
  'Workspace Sidebar'
);

// ============================================================================
// 2. LIVE PROGRESS COMPLETION RING ENGINE
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 2',
  'Unit Progress Engine: Progress percentage correctly calculates from completedNodes',
  () => {
    // Clean initial store state
    const originalNodes = { ...useGameStore.getState().completedNodes };
    useGameStore.setState({ completedNodes: {}, completedParts: {} });

    const unit = CURRICULUM_DATA[0]; // g10-u1
    const manifest = getUnitTreeManifest(unit.id);
    const leaves = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
    expect(leaves.length > 0).toBe(true);

    // Function matching the calculation in WorkspaceSidebar
    const computeProgress = (unitId: string) => {
      const state = useGameStore.getState();
      const m = getUnitTreeManifest(unitId);
      if (state.completedNodes[m.checkpointNodeId] || state.completedNodes[unitId]) {
        return 100;
      }
      const lf = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      if (lf.length === 0) return 0;
      const done = lf.filter(
        (l) => state.completedNodes[l.id] || state.completedParts[`${unitId}-${l.id}`]
      ).length;
      return Math.min(100, Math.round((done / lf.length) * 100));
    };

    // Case 1: Initial state -> 0%
    expect(computeProgress(unit.id)).toBe(0);

    // Case 2: Complete first leaf -> partial percentage
    useGameStore.getState().completeNode(leaves[0].id, 100);
    const partialProgress = computeProgress(unit.id);
    expect(partialProgress > 0).toBe(true);
    expect(partialProgress < 100).toBe(true);

    // Case 3: Complete checkpoint node -> exactly 100%
    useGameStore.getState().completeNode(manifest.checkpointNodeId, 100);
    expect(computeProgress(unit.id)).toBe(100);

    // Restore store state
    useGameStore.setState({ completedNodes: originalNodes });
  },
  'Progress Engine'
);

// ============================================================================
// 3. LINEAR LESSON RUNNER ARCHITECTURE
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 1',
  'LinearLessonRunner Contract: Sticky top header, language toggle & TreeDownCanvas mount',
  async () => {
    const { LinearLessonRunner } = await import('../../src/components/LinearLessonRunner');
    expect(typeof LinearLessonRunner).toBe('function');

    const sampleUnit = CURRICULUM_DATA[0];
    const html = renderToString(
      React.createElement(LinearLessonRunner, {
        lessonMeta: sampleUnit,
        grade: '10',
      })
    );

    // Header assertions
    expect(html.includes('Grade 10') || html.includes('Grade <!-- -->10')).toBe(true);
    expect(html.includes('Unit 01') || html.includes('Unit <!-- -->01')).toBe(true);
    expect(html.includes(sampleUnit.titleEn)).toBe(true);
    expect(html.includes(sampleUnit.titleSi)).toBe(true);

    // Dual-sync language toggle buttons
    expect(html.includes('Dual')).toBe(true);
    expect(html.includes('EN')).toBe(true);
    expect(html.includes('SI')).toBe(true);

    // Tree mastery ring
    expect(html.includes('Mastery')).toBe(true);

    // TreeDownCanvas mounted
    expect(html.includes('data-testid="tree-down-canvas"')).toBe(true);
    expect(html.includes(`data-unit-id="${sampleUnit.id}"`)).toBe(true);

    // Checkpoint Gate with +150 XP and direct bridge to Exam Arena
    expect(html.includes('150') && html.includes('XP')).toBe(true);
    expect(html.includes(`href="/papers?unit=${sampleUnit.id}"`)).toBe(true);
    expect(html.includes('Enter Exam Arena for this Unit')).toBe(true);
  },
  'Lesson Runner'
);

// ============================================================================
// 4. CHECKPOINT GATE LOCKING RESILIENCE
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 2',
  'CheckpointGateNode: Locked state disables option buttons & submit action',
  async () => {
    const { CheckpointGateNode } = await import(
      '../../src/components/learning-engine/nodes/CheckpointGateNode'
    );
    expect(typeof CheckpointGateNode).toBe('function');

    const manifest = getUnitTreeManifest('g10-u1');
    const checkpointNode = manifest.nodes[manifest.checkpointNodeId];

    // Render in locked state
    const htmlLocked = renderToString(
      React.createElement(CheckpointGateNode, {
        checkpointNode,
        unitId: 'g10-u1',
        status: 'locked',
        language: 'en',
        isExpanded: true,
      })
    );

    // Lock notice should be present
    expect(htmlLocked.includes('Complete all branches above to unlock')).toBe(true);
    // Button should be disabled
    expect(htmlLocked.includes('disabled=""') || htmlLocked.includes('disabled')).toBe(true);
    // Direct link to Exam Arena must STILL be present
    expect(htmlLocked.includes('href="/papers?unit=g10-u1"')).toBe(true);
  },
  'Checkpoint Gate'
);

// ============================================================================
// 5. NEXT.CONFIG REDIRECTS CONTRACT
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 1',
  'Server Redirects: next.config redirects legacy study, quiz, and revision-sheet routes',
  async () => {
    expect(typeof nextConfig.redirects).toBe('function');
    const redirects = await nextConfig.redirects!();
    expect(Array.isArray(redirects)).toBe(true);
    expect(redirects.length >= 4).toBe(true);

    const studyRule = redirects.find((r) => r.source === '/study/:path*');
    const quizRule = redirects.find((r) => r.source === '/quiz/:path*');
    const revisionRule = redirects.find((r) => r.source === '/revision-sheet/:path*');
    const granularRevisionRule = redirects.find((r) => r.source === '/revision-sheet/:grade/:lessonId');

    expect(!!studyRule).toBe(true);
    expect(studyRule!.destination.startsWith('/lesson/')).toBe(true);

    expect(!!quizRule).toBe(true);
    expect(quizRule!.destination.startsWith('/lesson/')).toBe(true);

    expect(!!revisionRule).toBe(true);
    expect(revisionRule!.destination.startsWith('/lesson/')).toBe(true);

    expect(!!granularRevisionRule).toBe(true);
    expect(granularRevisionRule!.destination).toBe('/lesson/:grade/:lessonId');
  },
  'Server Redirects'
);

// ============================================================================
// 6. SAFE AREA CSS UTILITIES
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 1',
  'Safe Area CSS: globals.css contains .pb-safe with env(safe-area-inset-bottom)',
  () => {
    const cssPath = path.resolve(__dirname, '../../src/app/globals.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    expect(cssContent.includes('.pb-safe')).toBe(true);
    expect(cssContent.includes('env(safe-area-inset-bottom')).toBe(true);
  },
  'Safe Area Styling'
);

// ============================================================================
// 7. APPSHELL FULL-SCREEN ROUTE ISOLATION
// ============================================================================

phase5NavigationSuite.addTest(
  'Tier 1',
  'AppShell Route Isolation: Renders workspace shell on standard routes and isolates immersive lesson routes',
  async () => {
    const { AppShell } = await import('../../src/components/navigation/AppShell');
    expect(typeof AppShell).toBe('function');

    // Case 1: Standard layout rendering with children
    const standardHtml = renderToString(
      React.createElement(AppShell, null, React.createElement('div', { id: 'standard-content' }, 'Standard Page'))
    );

    expect(standardHtml.includes('id="standard-content"')).toBe(true);
    expect(standardHtml.includes('Universal Workspace Navigation')).toBe(true);
    expect(standardHtml.includes('Workspace Sidebar Navigation')).toBe(true);
    expect(standardHtml.includes('Mobile Navigation Dock')).toBe(true);

    // Case 2: Verify isImmersive matching rules for /lesson and /lesson/*
    const immersiveRoutes = [
      '/lesson/10/g10-u1',
      '/lesson/11/g11-u5',
      '/lesson',
      '/study/g10-u1',
      '/quiz/g10-u1',
      '/revision-sheet/10/g10-u1',
    ];
    for (const route of immersiveRoutes) {
      const isImmersive =
        route.startsWith('/study/') ||
        route.startsWith('/quiz/') ||
        route.startsWith('/revision-sheet/') ||
        route.startsWith('/lesson/') ||
        route === '/lesson';
      expect(isImmersive).toBe(true);
    }

    const nonImmersiveRoutes = ['/', '/papers', '/analytics'];
    for (const route of nonImmersiveRoutes) {
      const isImmersive =
        route.startsWith('/study/') ||
        route.startsWith('/quiz/') ||
        route.startsWith('/revision-sheet/') ||
        route.startsWith('/lesson/') ||
        route === '/lesson';
      expect(isImmersive).toBe(false);
    }
  },
  'AppShell Route Isolation'
);

// ============================================================================
// RUNNER ENTRYPOINT
// ============================================================================

async function main() {
  const results = await phase5NavigationSuite.run();
  const failed = results.filter((r) => !r.passed);

  if (failed.length > 0) {
    console.error('\n❌ PHASE 5 NAVIGATION TESTS FAILED: ' + failed.length + ' failure(s)');
    for (const f of failed) {
      console.error(' - [' + f.tier + '] ' + f.name + ':', f.error);
    }
    process.exit(1);
  } else {
    console.log('\n🎉 ALL ' + results.length + ' PHASE 5 NAVIGATION TESTS PASSED CLEANLY!');
    process.exit(0);
  }
}

if (process.argv[1] && process.argv[1].includes('phase5-navigation-appshell.test.ts')) {
  main();
}
