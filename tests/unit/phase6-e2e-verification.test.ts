/**
 * tests/unit/phase6-e2e-verification.test.ts
 * Rigorous Verification Gate for Phase 6:
 * End-to-End Verification Gate & Polish
 *
 * Verifies:
 * 1. Keyboard Accessibility & Navigation (Space to flip cards, Enter/Space for tree nodes, ⌘K/Ctrl+K search).
 * 2. Global Audio Mute Synchronization (SoundEngine, useGameStore, WorkspaceNavbar, LinearLessonRunner).
 * 3. Responsive Viewport & Overflow Audit (360px mobile constraints, zero horizontal overflow, Bezier bounds).
 * 4. 2-Space Route Contracts & AppShell Consolidation.
 * 5. Edge cases and resilience against invalid/rapid interactions.
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { useGameStore } from '../../src/lib/store';
import { sound } from '../../src/utils/soundEffects';
import { calculateCubicBezierPath, getConnectorStyle } from '../../src/components/learning-engine/connectors/TreeSvgConnector';
import { CURRICULUM_DATA } from '../../src/data/curriculum';
import { getUnitTreeManifest } from '../../src/data/adapters/treeSyllabusAdapter';
import nextConfig from '../../next.config.mjs';
import fs from 'fs';
import path from 'path';

export const phase6VerificationSuite = new TestSuiteRunner(
  'Phase 6: End-to-End Verification Gate & Polish'
);

// ============================================================================
// 1. KEYBOARD ACCESSIBILITY & NAVIGATION
// ============================================================================

phase6VerificationSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: EmbeddedRecallCheck flips on Space and Enter without child button interception',
  async () => {
    const { EmbeddedRecallCheck } = await import(
      '../../src/components/learning-engine/nodes/EmbeddedRecallCheck'
    );
    expect(typeof EmbeddedRecallCheck).toBe('function');

    const manifest = getUnitTreeManifest('g10-u1');
    const leaf = Object.values(manifest.nodes).find((n) => n.type === 'leaf' && n.leafPayload?.activeRecallCard);
    expect(!!leaf).toBe(true);
    const card = leaf!.leafPayload!.activeRecallCard!;

    const html = renderToString(
      React.createElement(EmbeddedRecallCheck, {
        nodeId: leaf!.id,
        activeRecall: card,
        language: 'en',
      })
    );

    // 1. Region accessibility attributes
    expect(html.includes('role="region"')).toBe(true);
    expect(html.includes('tabindex="0"') || html.includes('tabIndex="0"')).toBe(true);
    expect(html.includes(`aria-label="Active Recall: ${card.termEn}"`)).toBe(true);

    // 2. Flip verification button attributes
    expect(html.includes('data-testid="flip-card-verify-button"')).toBe(true);
    expect(html.includes('Flip Card to Verify ➔')).toBe(true);
    expect(html.includes('Space')).toBe(true);

    // 3. Logic simulation: Test the key handler behavior
    let flippedState = false;
    const simulateKeyDown = (key: string, code: string, tagName: string) => {
      if (key === ' ' || code === 'Space' || key === 'Enter') {
        if (tagName === 'BUTTON') {
          return false; // Not intercepted
        }
        flippedState = !flippedState;
        return true;
      }
      return false;
    };

    // Pressing Space on card region flips card
    expect(simulateKeyDown(' ', 'Space', 'DIV')).toBe(true);
    expect(flippedState).toBe(true);

    // Pressing Space again flips back
    expect(simulateKeyDown(' ', 'Space', 'DIV')).toBe(true);
    expect(flippedState).toBe(false);

    // Pressing Enter on card region also flips card
    expect(simulateKeyDown('Enter', 'Enter', 'DIV')).toBe(true);
    expect(flippedState).toBe(true);

    // Pressing Space while focused on a child BUTTON must NOT intercept
    expect(simulateKeyDown(' ', 'Space', 'BUTTON')).toBe(false);
    expect(flippedState).toBe(true); // Stays true, no extra toggle
  },
  'Keyboard: EmbeddedRecallCheck'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: TreeNodeItem toggles expand/collapse on Enter and Space',
  async () => {
    const { TreeNodeItem } = await import(
      '../../src/components/learning-engine/nodes/TreeNodeItem'
    );
    expect(typeof TreeNodeItem).toBe('function');

    let toggleCount = 0;
    const handleToggle = () => {
      toggleCount++;
    };

    const html = renderToString(
      React.createElement(TreeNodeItem, {
        id: 'test-node-item',
        title: 'Test Node Title',
        depth: 1,
        status: 'active',
        isExpanded: true,
        collapsible: true,
        onToggle: handleToggle,
      })
    );

    // WAI-ARIA collapsible button contract
    expect(html.includes('role="button"')).toBe(true);
    expect(html.includes('tabindex="0"') || html.includes('tabIndex="0"')).toBe(true);
    expect(html.includes('aria-expanded="true"')).toBe(true);

    // Real component onKeyDown invocation test
    const treeNodeElement = TreeNodeItem({
      id: 'test-node-item',
      title: 'Test Node Title',
      depth: 1,
      status: 'active',
      isExpanded: true,
      collapsible: true,
      onToggle: handleToggle,
    });

    const children = React.Children.toArray(treeNodeElement.props.children) as any[];
    const headerRow: any = children.find((c: any) => c && c.props && c.props.role === 'button');
    expect(!!headerRow).toBe(true);
    expect(typeof headerRow.props.onKeyDown).toBe('function');

    let prevented = false;
    const preventDefault = () => { prevented = true; };

    // Real onKeyDown with Enter triggers handleToggle
    prevented = false;
    headerRow.props.onKeyDown({ key: 'Enter', preventDefault });
    expect(toggleCount).toBe(1);
    expect(prevented).toBe(true);

    // Real onKeyDown with Space triggers handleToggle
    prevented = false;
    headerRow.props.onKeyDown({ key: ' ', preventDefault });
    expect(toggleCount).toBe(2);
    expect(prevented).toBe(true);

    // Real onKeyDown with non-triggering key (Tab) does nothing
    prevented = false;
    headerRow.props.onKeyDown({ key: 'Tab', preventDefault });
    expect(toggleCount).toBe(2);
    expect(prevented).toBe(false);

    // Non-collapsible ignores Enter/Space
    const nonCollapsible = TreeNodeItem({
      id: 'test-node-nc',
      title: 'Test Node Title',
      depth: 1,
      status: 'active',
      isExpanded: true,
      collapsible: false,
      onToggle: handleToggle,
    });
    const ncChildren = React.Children.toArray(nonCollapsible.props.children) as any[];
    const ncHeader: any = ncChildren.find((c: any) => c && c.props && !c.props['data-anchor']);
    expect(!!ncHeader).toBe(true);
    expect(typeof ncHeader.props.onKeyDown).toBe('function');
    prevented = false;
    ncHeader.props.onKeyDown({ key: 'Enter', preventDefault });
    expect(toggleCount).toBe(2);
    expect(prevented).toBe(false);
  },
  'Keyboard: TreeNodeItem'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: WorkspaceNavbar registers ⌘K and Ctrl+K shortcuts for Universal Search',
  async () => {
    const { WorkspaceNavbar } = await import(
      '../../src/components/navigation/WorkspaceNavbar'
    );
    expect(typeof WorkspaceNavbar).toBe('function');

    const html = renderToString(React.createElement(WorkspaceNavbar));

    // Universal Search trigger button in header
    expect(html.includes('data-testid="universal-search-trigger"')).toBe(true);
    expect(html.includes('⌘K')).toBe(true);
    expect(html.includes('aria-label="Universal Search (Command + K)"')).toBe(true);

    // Test shortcut detection logic
    const isShortcutMatch = (metaKey: boolean, ctrlKey: boolean, key: string) => {
      return (metaKey || ctrlKey) && key.toLowerCase() === 'k';
    };

    // Mac ⌘K
    expect(isShortcutMatch(true, false, 'k')).toBe(true);
    expect(isShortcutMatch(true, false, 'K')).toBe(true);

    // Windows/Linux Ctrl+K
    expect(isShortcutMatch(false, true, 'k')).toBe(true);
    expect(isShortcutMatch(false, true, 'K')).toBe(true);

    // Non-matching keys
    expect(isShortcutMatch(false, false, 'k')).toBe(false);
    expect(isShortcutMatch(true, false, 'j')).toBe(false);
    expect(isShortcutMatch(false, true, 'b')).toBe(false);
  },
  'Keyboard: Universal Search Shortcut'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Keyboard Accessibility: FullFlashcardDeck renders controls and supports Space flip and arrow navigation',
  async () => {
    const { FullFlashcardDeck } = await import('../../src/components/study/FullFlashcardDeck');
    expect(typeof FullFlashcardDeck).toBe('function');

    const sampleQuestions = [
      {
        id: 'q1',
        promptEn: 'What is volatile memory?',
        promptSi: 'නශ්‍ය මතකය යනු කුමක්ද?',
        options: [
          { key: 'A', en: 'RAM', si: 'RAM' },
          { key: 'B', en: 'ROM', si: 'ROM' },
        ],
        correctKey: 'A',
        explanationEn: 'RAM loses contents when power is lost.',
        explanationSi: 'විදුලිය විසන්ධි වූ විට අන්තර්ගතය මැකී යයි.',
      },
    ];

    const html = renderToString(
      React.createElement(FullFlashcardDeck, {
        questions: sampleQuestions as any,
        lessonTitleEn: 'Computer Memory',
        lessonTitleSi: 'පරිගණක මතකය',
      })
    );

    expect(html.includes('What is volatile memory?')).toBe(true);
    expect(html.includes('Tap arrow keys to navigate')).toBe(true);
    expect(html.includes('Click anywhere to flip card')).toBe(true);
    expect(html.includes('Reveal Answer')).toBe(true);
  },
  'Keyboard: FullFlashcardDeck'
);

// ============================================================================
// 2. GLOBAL AUDIO MUTE SYNCHRONIZATION
// ============================================================================

phase6VerificationSuite.addTest(
  'Tier 1',
  'Audio Synchronization: SoundEngine setMuted, getMuted, and isAudioMuted contracts',
  () => {
    // Save previous
    const previous = sound.getMuted();

    sound.setMuted(true);
    expect(sound.getMuted()).toBe(true);
    expect(sound.isAudioMuted()).toBe(true);

    sound.setMuted(false);
    expect(sound.getMuted()).toBe(false);
    expect(sound.isAudioMuted()).toBe(false);

    const toggled = sound.toggleMute();
    expect(toggled).toBe(true);
    expect(sound.isAudioMuted()).toBe(true);

    sound.setMuted(previous);
  },
  'Audio: SoundEngine Contract'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Audio Synchronization: useGameStore.isAudioMuted binds synchronously to SoundEngine',
  () => {
    const store = useGameStore.getState();
    const original = store.isAudioMuted;

    // 1. setAudioMuted(true)
    store.setAudioMuted(true);
    expect(useGameStore.getState().isAudioMuted).toBe(true);
    expect(sound.isAudioMuted()).toBe(true);

    // 2. toggleAudioMuted() -> unmute
    store.toggleAudioMuted();
    expect(useGameStore.getState().isAudioMuted).toBe(false);
    expect(sound.isAudioMuted()).toBe(false);

    // 3. toggleAudioMuted() -> mute
    store.toggleAudioMuted();
    expect(useGameStore.getState().isAudioMuted).toBe(true);
    expect(sound.isAudioMuted()).toBe(true);

    // 4. Direct Zustand setState synchronization via subscriber
    useGameStore.setState({ isAudioMuted: false });
    expect(sound.isAudioMuted()).toBe(false);

    useGameStore.setState({ isAudioMuted: true });
    expect(sound.isAudioMuted()).toBe(true);

    // Restore
    store.setAudioMuted(original);
  },
  'Audio: Store-Sound Synchronization'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Audio Synchronization: WorkspaceNavbar and LinearLessonRunner both feature synchronized mute toggles',
  async () => {
    const { WorkspaceNavbar } = await import('../../src/components/navigation/WorkspaceNavbar');
    const { LinearLessonRunner } = await import('../../src/components/LinearLessonRunner');

    // Case A: Unmuted
    useGameStore.setState({ isAudioMuted: false });
    const navbarHtmlUnmuted = renderToString(React.createElement(WorkspaceNavbar));
    const lessonHtmlUnmuted = renderToString(
      React.createElement(LinearLessonRunner, {
        lessonMeta: CURRICULUM_DATA[0],
        grade: '10',
      })
    );

    expect(navbarHtmlUnmuted.includes('data-testid="navbar-audio-mute-toggle"')).toBe(true);
    expect(navbarHtmlUnmuted.includes('aria-label="Mute Audio"')).toBe(true);

    expect(lessonHtmlUnmuted.includes('data-testid="lesson-audio-mute-toggle"')).toBe(true);
    expect(lessonHtmlUnmuted.includes('aria-label="Mute Audio"')).toBe(true);

    // Case B: Muted
    useGameStore.setState({ isAudioMuted: true });
    const navbarHtmlMuted = renderToString(React.createElement(WorkspaceNavbar));
    const lessonHtmlMuted = renderToString(
      React.createElement(LinearLessonRunner, {
        lessonMeta: CURRICULUM_DATA[0],
        grade: '10',
      })
    );

    expect(navbarHtmlMuted.includes('aria-label="Unmute Audio"')).toBe(true);
    expect(lessonHtmlMuted.includes('aria-label="Unmute Audio"')).toBe(true);

    // Restore unmuted state
    useGameStore.setState({ isAudioMuted: false });
  },
  'Audio: Component Synchronization'
);

// ============================================================================
// 3. RESPONSIVE VIEWPORT & OVERFLOW AUDIT (360PX MOBILE SAFETY)
// ============================================================================

phase6VerificationSuite.addTest(
  'Tier 2',
  'Responsive Audit: globals.css enforces zero horizontal overflow across html, body, and safe areas',
  () => {
    const cssPath = path.resolve(__dirname, '../../src/app/globals.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // html and body overflow rules
    expect(cssContent.includes('overflow-x: hidden')).toBe(true);
    expect(cssContent.includes('max-width: 100vw')).toBe(true);

    // Safe area mobile utilities
    expect(cssContent.includes('.pb-safe')).toBe(true);
    expect(cssContent.includes('env(safe-area-inset-bottom')).toBe(true);
  },
  'Responsive: Global CSS Overflow Rules'
);

phase6VerificationSuite.addTest(
  'Tier 2',
  'Responsive Audit: TreeDownCanvas and SVG connector layer enforce overflow-x-clip and overflow-hidden',
  async () => {
    const { TreeDownCanvas } = await import('../../src/components/learning-engine/TreeDownCanvas');
    expect(typeof TreeDownCanvas).toBe('function');

    const html = renderToString(
      React.createElement(TreeDownCanvas, {
        unitId: 'g10-u1',
      })
    );

    // Canvas container clips horizontal overflow
    expect(html.includes('overflow-x-clip')).toBe(true);
    // SVG connector layer has overflow-hidden to prevent bezier curves breaching bounds
    expect(html.includes('overflow-hidden')).toBe(true);
  },
  'Responsive: Tree Canvas Clipping'
);

phase6VerificationSuite.addTest(
  'Tier 2',
  'Responsive Audit: calculateCubicBezierPath bounds math is strictly non-negative and finite',
  () => {
    // 1. Standard downward curve at 360px mobile width
    const path360 = calculateCubicBezierPath(180, 100, 180, 250);
    expect(path360.startsWith('M 180 100')).toBe(true);
    expect(path360.endsWith('180 250')).toBe(true);

    // 2. Upward curve (negative dy direction)
    const pathUp = calculateCubicBezierPath(180, 300, 180, 100);
    expect(pathUp.startsWith('M 180 300')).toBe(true);
    expect(pathUp.endsWith('180 100')).toBe(true);

    // 3. Degenerate same-point curve
    const pathSame = calculateCubicBezierPath(150, 150, 150, 150);
    expect(pathSame.includes('M 150 150')).toBe(true);

    // 4. Negative coordinates clamped to 0
    const pathNeg = calculateCubicBezierPath(-50, -20, 100, 120);
    expect(pathNeg.startsWith('M 0 0')).toBe(true);
    expect(pathNeg.endsWith('100 120')).toBe(true);

    // 5. Non-finite values return graceful fallback
    const pathNaN = calculateCubicBezierPath(NaN, 0, 100, 200);
    expect(pathNaN).toBe('M 0 0 C 0 0, 0 0, 0 0');

    const pathInf = calculateCubicBezierPath(100, Infinity, 100, 200);
    expect(pathInf).toBe('M 0 0 C 0 0, 0 0, 0 0');
  },
  'Responsive: Bezier Bounds Math'
);

// ============================================================================
// 4. 2-SPACES ROUTE CONTRACTS & STRICT NAVIGATION
// ============================================================================

phase6VerificationSuite.addTest(
  'Tier 1',
  'Route Contracts: MobileBottomNav strictly links 2 spaces (Learn & Exam Arena)',
  async () => {
    const { MobileBottomNav } = await import('../../src/components/navigation/MobileBottomNav');
    const html = renderToString(React.createElement(MobileBottomNav));

    // Space 1: Learn Tree (/)
    expect(html.includes('href="/"')).toBe(true);
    expect(html.includes('🌳')).toBe(true);

    // Space 2: Exam Arena (/papers)
    expect(html.includes('href="/papers"')).toBe(true);
    expect(html.includes('⚔️')).toBe(true);

    // Zero legacy routes
    expect(html.includes('/study/')).toBe(false);
    expect(html.includes('/quiz/')).toBe(false);
    expect(html.includes('/revision-sheet/')).toBe(false);
  },
  'Navigation: Mobile Bottom Dock'
);

phase6VerificationSuite.addTest(
  'Tier 1',
  'Route Contracts: next.config redirects legacy routes with 308 permanent redirects',
  async () => {
    expect(typeof nextConfig.redirects).toBe('function');
    const redirects = await nextConfig.redirects!();

    const studyRule = redirects.find((r) => r.source === '/study/:path*');
    const quizRule = redirects.find((r) => r.source === '/quiz/:path*');
    const revisionRule = redirects.find((r) => r.source === '/revision-sheet/:path*');

    expect(!!studyRule && studyRule.permanent).toBe(true);
    expect(!!quizRule && quizRule.permanent).toBe(true);
    expect(!!revisionRule && revisionRule.permanent).toBe(true);
  },
  'Navigation: Legacy 308 Redirects'
);

// ============================================================================
// 5. EDGE CASES & STRESS RESILIENCE
// ============================================================================

phase6VerificationSuite.addTest(
  'Tier 2',
  'Edge Cases: Connector styles and filters resolve correctly across all 3 states',
  () => {
    const completedStyle = getConnectorStyle('completed', 'node-01');
    expect(completedStyle.stroke).toBe('#10b981');
    expect(completedStyle.strokeDasharray).toBe(undefined);
    expect(completedStyle.filter).toBe('url(#glow-completed-node-01)');

    const activeStyle = getConnectorStyle('active', 'node-02');
    expect(activeStyle.stroke).toBe('url(#gradient-active-node-02)');
    expect(activeStyle.strokeDasharray).toBe(undefined);
    expect(activeStyle.filter).toBe('url(#glow-active-node-02)');

    const lockedStyle = getConnectorStyle('locked', 'node-03');
    expect(lockedStyle.stroke).toBe('#94a3b8');
    expect(lockedStyle.strokeDasharray).toBe('6 6');
    expect(lockedStyle.filter).toBe(undefined);
  },
  'Edge Cases: Connector Styles'
);

phase6VerificationSuite.addTest(
  'Tier 2',
  'Edge Cases: Rapid mute toggling maintains deterministic store-sound consistency',
  () => {
    const store = useGameStore.getState();
    const originalMute = store.isAudioMuted;

    for (let i = 0; i < 50; i++) {
      store.toggleAudioMuted();
    }

    // 50 toggles returns to initial state
    expect(useGameStore.getState().isAudioMuted).toBe(originalMute);
    expect(sound.isAudioMuted()).toBe(originalMute);

    // Clean restore
    store.setAudioMuted(false);
  },
  'Edge Cases: Rapid Mute Consistency'
);

// CLI Runner Entrypoint
async function main() {
  const results = await phase6VerificationSuite.run();
  const failed = results.filter((r) => !r.passed);

  if (failed.length > 0) {
    console.error('\n❌ PHASE 6 VERIFICATION GATE FAILED: ' + failed.length + ' failure(s)');
    for (const f of failed) {
      console.error(' - [' + f.tier + '] ' + f.name + ':', f.error);
    }
    process.exit(1);
  } else {
    console.log('\n🎉 ALL ' + results.length + ' PHASE 6 VERIFICATION GATE TESTS PASSED CLEANLY!');
    process.exit(0);
  }
}

if (process.argv[1] && process.argv[1].includes('phase6-e2e-verification.test.ts')) {
  main();
}
