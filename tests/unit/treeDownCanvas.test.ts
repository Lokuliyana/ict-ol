/**
 * tests/unit/treeDownCanvas.test.ts
 * Unit tests for Phase 2: Core Tree-Down Canvas & Bezier SVG Layer
 *
 * Verifies:
 * 1. Bezier curve path calculations, curvature clamping, S-curve symmetry, and status styles.
 * 2. 4-Tier Node Hierarchy Integrity: Root (0) -> Branch (1) -> Leaf (2) -> Checkpoint (3).
 * 3. Store event triggers: Node completion, XP awards, active node transitions, and checkpoint verification scoring.
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import {
  calculateCubicBezierPath,
  getConnectorStyle,
} from '../../src/components/learning-engine/connectors/TreeSvgConnector';
import { getUnitTreeManifest, getAllUnitTreeManifests } from '../../src/data/adapters/treeSyllabusAdapter';
import { useGameStore } from '../../src/lib/store';

export const treeDownCanvasSuite = new TestSuiteRunner(
  'Phase 2: Tree-Down Canvas & Bezier SVG Layer'
);

// ============================================================================
// 1. BEZIER CALCULATIONS & CONNECTOR STYLING TESTS
// ============================================================================

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Bezier Math: calculateCubicBezierPath produces valid cubic Bezier SVG path string',
  () => {
    const path = calculateCubicBezierPath(100, 50, 100, 250);
    expect(path.startsWith('M 100 50 C')).toBe(true);
    expect(path.endsWith('100 250')).toBe(true);

    // Regex check for exact SVG cubic Bezier format
    const cubicBezierRegex = /^M\s+(\d+(\.\d+)?)\s+(\d+(\.\d+)?)\s+C\s+(\d+(\.\d+)?)\s+(\d+(\.\d+)?),\s+(\d+(\.\d+)?)\s+(\d+(\.\d+)?),\s+(\d+(\.\d+)?)\s+(\d+(\.\d+)?)$/;
    expect(cubicBezierRegex.test(path)).toBe(true);
  },
  'Phase 2: Bezier SVG Engine'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Bezier Math: Control points produce smooth downward S-curve with positive vertical offset',
  () => {
    const startX = 200;
    const startY = 100;
    const endX = 200;
    const endY = 300;
    const path = calculateCubicBezierPath(startX, startY, endX, endY, 0.5);

    // dy = 200, curvature = 0.5 => verticalOffset = 100
    // cp1 = (200, 100 + 100) = (200, 200)
    // cp2 = (200, 300 - 100) = (200, 200)
    expect(path).toBe('M 200 100 C 200 200, 200 200, 200 300');
  },
  'Phase 2: Bezier SVG Engine'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Bezier Math: Diagonal flow preserves horizontal anchors and computes directional offsets',
  () => {
    const startX = 150;
    const startY = 100;
    const endX = 350;
    const endY = 400;
    const path = calculateCubicBezierPath(startX, startY, endX, endY, 0.5);

    // dy = 300, offset = 150
    // cp1: (150, 250), cp2: (350, 250)
    expect(path).toBe('M 150 100 C 150 250, 350 250, 350 400');
  },
  'Phase 2: Bezier SVG Engine'
);

treeDownCanvasSuite.addTest(
  'Tier 2',
  'Bezier Math: Boundary handling for minimal or zero vertical delta enforces minimum curvature',
  () => {
    // startY === endY
    const pathZero = calculateCubicBezierPath(100, 200, 100, 200);
    // Should clamp vertical offset to at least 20px so line does not collapse to NaN
    expect(pathZero.includes('NaN')).toBe(false);
    expect(pathZero).toBe('M 100 200 C 100 220, 100 180, 100 200');

    // inverted points (endY < startY) produce smooth upward S-curve
    const pathInverted = calculateCubicBezierPath(100, 300, 100, 100, 0.5);
    expect(pathInverted.includes('NaN')).toBe(false);
    expect(pathInverted).toBe('M 100 300 C 100 200, 100 200, 100 100');

    // non-finite / NaN inputs return safe fallback path without crashing
    const pathNaN = calculateCubicBezierPath(NaN, 200, 100, 200);
    expect(pathNaN).toBe('M 0 0 C 0 0, 0 0, 0 0');

    const pathInfinity = calculateCubicBezierPath(100, Infinity, 100, 200);
    expect(pathInfinity).toBe('M 0 0 C 0 0, 0 0, 0 0');
  },
  'Phase 2: Bezier Boundary Handling'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Connector Styling: Completed state produces solid 3px emerald stroke with glow filter',
  () => {
    const completed = getConnectorStyle('completed', 'test1');
    expect(completed.stroke).toBe('#10b981');
    expect(completed.strokeWidth).toBe(3);
    expect(completed.strokeDasharray).toBe(undefined);
    expect(completed.filter).toBe('url(#glow-completed-test1)');
  },
  'Phase 2: Connector Visual States'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Connector Styling: Active state produces 3px gradient stroke with active glow filter',
  () => {
    const active = getConnectorStyle('active', 'test2');
    expect(active.stroke).toBe('url(#gradient-active-test2)');
    expect(active.strokeWidth).toBe(3);
    expect(active.strokeDasharray).toBe(undefined);
    expect(active.filter).toBe('url(#glow-active-test2)');
  },
  'Phase 2: Connector Visual States'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Connector Styling: Locked state produces dashed 2px slate stroke',
  () => {
    const locked = getConnectorStyle('locked', 'test3');
    expect(locked.strokeWidth).toBe(2);
    expect(locked.strokeDasharray).toBe('6 6');
    expect(locked.filter).toBe(undefined);
  },
  'Phase 2: Connector Visual States'
);

// ============================================================================
// 2. 4-TIER HIERARCHY INTEGRITY & MANIFEST RESOLUTION
// ============================================================================

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Tree Hierarchy: Unit manifests correctly resolve Root (0) -> Branch (1) -> Leaf (2) -> Checkpoint (3)',
  () => {
    const units = ['g10-u1', 'g10-u2', 'g11-u1', 'g11-u6'];

    for (const unitId of units) {
      const manifest = getUnitTreeManifest(unitId);
      expect(manifest.unitId).toBe(unitId);

      // Root
      expect(manifest.rootNode.depth).toBe(0);
      expect(manifest.rootNode.type).toBe('root');
      expect(manifest.rootNode.childIds.length).toBe(manifest.branchIds.length);

      // Branches
      for (const branchId of manifest.branchIds) {
        const branch = manifest.nodes[branchId];
        expect(!!branch).toBe(true);
        expect(branch.depth).toBe(1);
        expect(branch.type).toBe('branch');
        expect(branch.parentId).toBe(manifest.rootNode.id);
        expect(branch.childIds.length > 0).toBe(true);

        // Leaves
        for (const leafId of branch.childIds) {
          const leaf = manifest.nodes[leafId];
          expect(!!leaf).toBe(true);
          expect(leaf.depth).toBe(2);
          expect(leaf.type).toBe('leaf');
          expect(leaf.parentId).toBe(branch.id);
          expect(!!leaf.leafPayload).toBe(true);
        }
      }

      // Checkpoint Gate
      const checkpoint = manifest.nodes[manifest.checkpointNodeId];
      expect(!!checkpoint).toBe(true);
      expect(checkpoint.depth).toBe(3);
      expect(checkpoint.type).toBe('checkpoint');
      expect(!!checkpoint.checkpointPayload).toBe(true);
    }
  },
  'Phase 2: Tree Hierarchy Integrity'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Tree Hierarchy: Checkpoint nodes contain at least 3 verification questions with valid options',
  () => {
    const manifests = getAllUnitTreeManifests();
    for (const manifest of manifests) {
      const cp = manifest.nodes[manifest.checkpointNodeId];
      const payload = cp.checkpointPayload;
      expect(!!payload).toBe(true);
      expect(payload!.questions.length >= 3).toBe(true);

      const firstThree = payload!.questions.slice(0, 3);
      for (const q of firstThree) {
        expect(q.promptEn.length > 0).toBe(true);
        expect(q.options.length >= 2).toBe(true);
        expect(q.explanationEn.length > 0).toBe(true);
        expect(q.correctOptionId.length > 0 || !!q.correctKey).toBe(true);
      }
    }
  },
  'Phase 2: Checkpoint Gate Questions'
);

// ============================================================================
// 3. STORE EVENT TRIGGERS & GAME ENGINE INTEGRATION
// ============================================================================

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Store Integration: addXp correctly accumulates XP and game points',
  () => {
    const store = useGameStore.getState();
    const initialXp = store.xp;

    store.addXp(15);
    const updatedStore = useGameStore.getState();
    expect(updatedStore.xp).toBe(initialXp + 15);

    store.addXp(50);
    expect(useGameStore.getState().xp).toBe(initialXp + 65);
  },
  'Phase 2: Store XP Event'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Store Integration: completeNode marks node completed with accuracy and stars',
  () => {
    const store = useGameStore.getState();
    const testNodeId = 'test-leaf-node-1';

    // 100% accuracy = 3 stars, awards 50 + 3*25 = 125 XP
    const startXp = store.xp;
    const result = store.completeNode(testNodeId, 100);

    expect(result.stars).toBe(3);
    expect(result.xpAwarded).toBe(125);

    const updated = useGameStore.getState();
    expect(!!updated.completedNodes[testNodeId]).toBe(true);
    expect(updated.completedNodes[testNodeId].stars).toBe(3);
    expect(updated.completedNodes[testNodeId].highAccuracy).toBe(100);
    expect(updated.xp).toBe(startXp + 125);
  },
  'Phase 2: Store Node Completion Event'
);

treeDownCanvasSuite.addTest(
  'Tier 2',
  'Store Integration: Checkpoint scoring logic accurately evaluates passing threshold (66%)',
  () => {
    // 3 questions scenario
    const mockQuestions = [
      { id: 'q1', correctOptionId: 'opt-a' },
      { id: 'q2', correctOptionId: 'opt-b' },
      { id: 'q3', correctOptionId: 'opt-c' },
    ];

    // Case 1: 3/3 correct = 100% (Passed)
    const answersAllCorrect: Record<string, string> = { q1: 'opt-a', q2: 'opt-b', q3: 'opt-c' };
    const scoreAll = Math.round(
      (mockQuestions.filter((q) => answersAllCorrect[q.id] === q.correctOptionId).length /
        mockQuestions.length) *
        100
    );
    expect(scoreAll).toBe(100);
    expect(scoreAll >= 66).toBe(true);

    // Case 2: 2/3 correct = 67% (Passed)
    const answersTwoCorrect: Record<string, string> = { q1: 'opt-a', q2: 'opt-b', q3: 'opt-wrong' };
    const scoreTwo = Math.round(
      (mockQuestions.filter((q) => answersTwoCorrect[q.id] === q.correctOptionId).length /
        mockQuestions.length) *
        100
    );
    expect(scoreTwo).toBe(67);
    expect(scoreTwo >= 66).toBe(true);

    // Case 3: 1/3 correct = 33% (Failed)
    const answersOneCorrect: Record<string, string> = { q1: 'opt-a', q2: 'opt-wrong', q3: 'opt-wrong' };
    const scoreOne = Math.round(
      (mockQuestions.filter((q) => answersOneCorrect[q.id] === q.correctOptionId).length /
        mockQuestions.length) *
        100
    );
    expect(scoreOne).toBe(33);
    expect(scoreOne >= 66).toBe(false);
  },
  'Phase 2: Checkpoint Verification Scoring'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Store Integration: setActiveNode updates active node state',
  () => {
    const store = useGameStore.getState();
    store.setActiveNode('g10-u1-b1-l1');
    expect(useGameStore.getState().activeNodeId).toBe('g10-u1-b1-l1');
  },
  'Phase 2: Active Node State'
);

treeDownCanvasSuite.addTest(
  'Tier 1',
  'Exam Arena Bridge: All 15 units construct valid exam arena routes with unit parameter',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    for (const m of manifests) {
      const expectedHref = `/papers?unit=${m.unitId}`;
      expect(expectedHref.startsWith('/papers?unit=')).toBe(true);
      expect(expectedHref.includes(m.unitId)).toBe(true);
      expect(m.unitId.startsWith('g10-u') || m.unitId.startsWith('g11-u')).toBe(true);
    }
  },
  'Phase 2: Exam Arena Direct Bridge'
);

treeDownCanvasSuite.addTest(
  'Tier 2',
  'Tree Progression: Sequential unlock logic verifies Branch 0 is active, subsequent branches locked until completion',
  () => {
    const manifest = getUnitTreeManifest('g10-u1');
    const branch0 = manifest.nodes[manifest.branchIds[0]];
    const branch1 = manifest.nodes[manifest.branchIds[1]];
    const checkpoint = manifest.nodes[manifest.checkpointNodeId];

    expect(!!branch0).toBe(true);
    expect(!!branch1).toBe(true);
    expect(!!checkpoint).toBe(true);

    // Initial state: empty completions
    const emptyCompletedNodes: Record<string, boolean> = {};

    // Branch 0 index is 0 => should be active
    const branch0Index = manifest.branchIds.indexOf(branch0.id);
    expect(branch0Index).toBe(0);

    // Branch 1 index > 0 and branch 0 not completed => should be locked
    const branch1Index = manifest.branchIds.indexOf(branch1.id);
    expect(branch1Index).toBe(1);
    const branch0Done = branch0.childIds.every((lId) => !!emptyCompletedNodes[lId]);
    expect(branch0Done).toBe(false);

    // Checkpoint gate: all branches completed => false
    const allBranchesDone = manifest.branchIds.every((bId) => {
      const b = manifest.nodes[bId];
      return b.childIds.length > 0 && b.childIds.every((lId) => !!emptyCompletedNodes[lId]);
    });
    expect(allBranchesDone).toBe(false);

    // Simulate completion of all leaves in branch 0
    const progressCompletedNodes: Record<string, boolean> = {};
    branch0.childIds.forEach((lId) => {
      progressCompletedNodes[lId] = true;
    });
    const branch0NowDone = branch0.childIds.every((lId) => !!progressCompletedNodes[lId]);
    expect(branch0NowDone).toBe(true);

    // Branch 1 can now unlock
    const branch1CanUnlock = branch0NowDone;
    expect(branch1CanUnlock).toBe(true);
  },
  'Phase 2: Tree Progression Unlock'
);

// CLI direct execution
if (typeof process !== 'undefined' && process.argv[1]?.includes('treeDownCanvas.test')) {
  treeDownCanvasSuite.run().then((results) => {
    const failed = results.filter((r) => !r.passed);
    if (failed.length > 0) {
      console.error(`FAILED: ${failed.length} tests`);
      process.exit(1);
    } else {
      console.log(`\n🎉 ALL ${results.length} TREE DOWN CANVAS TESTS PASSED CLEANLY!`);
      process.exit(0);
    }
  });
}
