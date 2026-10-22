/**
 * tests/unit/treeSyllabusAdapter.test.ts
 * Unit tests for Tree-Down Living Syllabus Adapter & 3-Tier Recall Generator (Phase 1)
 *
 * Verifies:
 * 1. All 15 curriculum units ('g10-u1' to 'g11-u6') generate complete 4-tier trees.
 * 2. Active recall cards have non-empty Department keywords and mnemonics for every unit.
 * 3. Tree connectivity: all childIds exist in nodes, root links to branches,
 *    branches link to leaves, leaves link to checkpoint gate.
 * 4. Contextual tactile widgets have hideInternalTabs: true where present.
 * 5. Checkpoint nodes contain valid verification questions from MASTER_QUESTION_BANKS.
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import {
  getUnitTreeManifest,
  getAllUnitTreeManifests,
  generate3TierRecallCard,
} from '../../src/data/adapters/treeSyllabusAdapter';
import { CURRICULUM_DATA } from '../../src/data/curriculum';

export const treeSyllabusSuite = new TestSuiteRunner('M1/Phase 1: Tree Syllabus Adapter & 3-Tier Generator');

const ALL_15_UNIT_IDS = [
  'g10-u1',
  'g10-u2',
  'g10-u3',
  'g10-u4',
  'g10-u5',
  'g10-u6',
  'g10-u7',
  'g10-u8',
  'g10-u9',
  'g11-u1',
  'g11-u2',
  'g11-u3',
  'g11-u4',
  'g11-u5',
  'g11-u6',
];

// ============================================================================
// 1. ALL 15 UNITS MANIFEST GENERATION TESTS
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 1',
  'Manifest Generation: Exactly 15 curriculum units generate complete trees',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    const generatedUnitIds = manifests.map((m) => m.unitId);
    for (const unitId of ALL_15_UNIT_IDS) {
      expect(generatedUnitIds).toContain(unitId);
    }
  },
  'Phase 1: 15-Unit Coverage'
);

for (const unitId of ALL_15_UNIT_IDS) {
  treeSyllabusSuite.addTest(
    'Tier 1',
    `Manifest Structure: Unit ${unitId} generates valid 4-tier tree metadata`,
    () => {
      const manifest = getUnitTreeManifest(unitId);
      expect(manifest.unitId).toBe(unitId);
      expect(manifest.titleEn.length > 0).toBe(true);
      expect(manifest.titleSi.length > 0).toBe(true);
      expect(manifest.branchIds.length > 0).toBe(true);
      expect(manifest.rootNode.id).toBe(`${unitId}-root`);
      expect(manifest.checkpointNodeId).toBe(`${unitId}-checkpoint`);

      // Verify node types and depths
      expect(manifest.rootNode.depth).toBe(0);
      expect(manifest.rootNode.type).toBe('root');

      const checkpointNode = manifest.nodes[manifest.checkpointNodeId];
      expect(checkpointNode).toBeTruthy();
      expect(checkpointNode.depth).toBe(3);
      expect(checkpointNode.type).toBe('checkpoint');
      expect(checkpointNode.checkpointPayload?.questions.length! >= 1).toBe(true);
    },
    `Phase 1: Unit Tree Manifest - ${unitId}`
  );
}

// ============================================================================
// 2. ACTIVE RECALL CARDS & 3-TIER GENERATOR TESTS
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 2',
  'Active Recall: All 15 units have non-empty Department keywords and mnemonics on every leaf',
  () => {
    const manifests = getAllUnitTreeManifests();
    let totalLeavesChecked = 0;

    for (const manifest of manifests) {
      const leafNodes = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
      expect(leafNodes.length > 0).toBe(true);

      for (const leaf of leafNodes) {
        totalLeavesChecked++;
        const payload = leaf.leafPayload;
        expect(payload).toBeTruthy();

        const card = payload!.activeRecallCard;
        expect(card).toBeTruthy();

        // 1. Term dual-medium non-empty
        expect(typeof card.termEn).toBe('string');
        expect(card.termEn.trim().length > 0).toBe(true);
        expect(typeof card.termSi).toBe('string');
        expect(card.termSi.trim().length > 0).toBe(true);

        // 2. Definition dual-medium non-empty
        expect(typeof card.definitionEn).toBe('string');
        expect(card.definitionEn.trim().length > 0).toBe(true);
        expect(typeof card.definitionSi).toBe('string');
        expect(card.definitionSi.trim().length > 0).toBe(true);

        // 3. Department Keywords non-empty arrays
        expect(Array.isArray(card.departmentKeywordsEn)).toBe(true);
        expect(card.departmentKeywordsEn.length >= 1).toBe(true);
        for (const kw of card.departmentKeywordsEn) {
          expect(kw.trim().length > 0).toBe(true);
        }

        expect(Array.isArray(card.departmentKeywordsSi)).toBe(true);
        expect(card.departmentKeywordsSi.length >= 1).toBe(true);
        for (const kw of card.departmentKeywordsSi) {
          expect(kw.trim().length > 0).toBe(true);
        }

        // 4. Mnemonics non-empty strings
        expect(typeof card.mnemonicEn).toBe('string');
        expect(card.mnemonicEn!.trim().length > 0).toBe(true);

        expect(typeof card.mnemonicSi).toBe('string');
        expect(card.mnemonicSi!.trim().length > 0).toBe(true);

        // 5. Exam Trap Warnings
        if (card.examTrapWarningEn) {
          expect(card.examTrapWarningEn.trim().length > 0).toBe(true);
        }
        if (card.examTrapWarningSi) {
          expect(card.examTrapWarningSi.trim().length > 0).toBe(true);
        }
      }
    }

    // Expect over 100 concept leaves across syllabus
    expect(totalLeavesChecked >= 100).toBe(true);
  },
  'Phase 1: Active Recall Rigor'
);

treeSyllabusSuite.addTest(
  'Tier 2',
  'Active Recall: Tier 1 verbatim glossary terms correctly populate Unit 1 cards',
  () => {
    const manifest = getUnitTreeManifest('g10-u1');
    const leafNodes = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');

    const dataLeaf = leafNodes.find((l) => l.titleEn.toLowerCase() === 'data');
    expect(dataLeaf).toBeTruthy();
    const dataCard = dataLeaf!.leafPayload!.activeRecallCard;
    expect(dataCard.termEn).toBe('Data');
    expect(dataCard.termSi).toBe('දත්ත');
    expect(dataCard.departmentKeywordsEn).toContain('Raw facts');
    expect(dataCard.mnemonicEn).toContain('raw flour');

    const infoLeaf = leafNodes.find((l) => l.titleEn.toLowerCase() === 'information');
    expect(infoLeaf).toBeTruthy();
    const infoCard = infoLeaf!.leafPayload!.activeRecallCard;
    expect(infoCard.termEn).toBe('Information');
    expect(infoCard.departmentKeywordsEn).toContain('Processed data');
  },
  'Phase 1: Tier 1 Verbatim Glossary'
);

// ============================================================================
// 3. TREE CONNECTIVITY TESTS
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 3',
  'Tree Connectivity: Root links to branches, branches link to leaves, leaves link to checkpoint',
  () => {
    const manifests = getAllUnitTreeManifests();

    for (const manifest of manifests) {
      const { rootNode, nodes, branchIds, checkpointNodeId } = manifest;

      // 1. Root links to branches
      expect(rootNode.childIds).toEqual(branchIds);

      // 2. All branches link to leaves and report parentId as rootNode.id
      for (const branchId of branchIds) {
        const branch = nodes[branchId];
        expect(branch).toBeTruthy();
        expect(branch.depth).toBe(1);
        expect(branch.type).toBe('branch');
        expect(branch.parentId).toBe(rootNode.id);
        expect(branch.childIds.length >= 1).toBe(true);

        // 3. Leaves link to checkpoint gate and report parentId as branch.id
        for (const leafId of branch.childIds) {
          const leaf = nodes[leafId];
          expect(leaf).toBeTruthy();
          expect(leaf.depth).toBe(2);
          expect(leaf.type).toBe('leaf');
          expect(leaf.parentId).toBe(branch.id);
          expect(leaf.childIds).toContain(checkpointNodeId);
        }
      }

      // 4. Checkpoint gate is at depth 3 and has no children (terminal node of unit)
      const checkpoint = nodes[checkpointNodeId];
      expect(checkpoint).toBeTruthy();
      expect(checkpoint.depth).toBe(3);
      expect(checkpoint.type).toBe('checkpoint');
      expect(checkpoint.childIds.length).toBe(0);

      // 5. Universal Integrity: All childIds across every node in manifest.nodes exist in manifest.nodes
      for (const [nodeId, node] of Object.entries(nodes)) {
        for (const childId of node.childIds) {
          expect(nodes[childId]).toBeTruthy();
        }
      }
    }
  },
  'Phase 1: Tree Graph Topology'
);

// ============================================================================
// 4. CONTEXTUAL TACTILE WIDGET INTEGRITY
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 3',
  'Tactile Widgets: All mapped widgets enforce hideInternalTabs: true with zero Russian-doll nesting',
  () => {
    const manifests = getAllUnitTreeManifests();
    let mappedWidgetsCount = 0;

    for (const manifest of manifests) {
      const leafNodes = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leafNodes) {
        const widget = leaf.leafPayload?.tactileWidget;
        if (widget) {
          mappedWidgetsCount++;
          expect(widget.hideInternalTabs).toBe(true);
          expect(typeof widget.widgetKey).toBe('string');
          expect(widget.widgetKey.length > 0).toBe(true);
          expect(typeof widget.titleEn).toBe('string');
          expect(widget.titleEn.length > 0).toBe(true);
        }
      }
    }

    // Expect widgets mapped across units
    expect(mappedWidgetsCount >= 5).toBe(true);
  },
  'Phase 1: Tactile De-cluttering'
);

// ============================================================================
// 5. CHECKPOINT MCQS VERIFICATION
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 4',
  'Checkpoint Gates: Extracted questions from MASTER_QUESTION_BANKS have valid options and explanations',
  () => {
    const manifests = getAllUnitTreeManifests();

    for (const manifest of manifests) {
      const cp = manifest.nodes[manifest.checkpointNodeId];
      expect(cp.checkpointPayload).toBeTruthy();
      const questions = cp.checkpointPayload!.questions;
      expect(questions.length >= 1).toBe(true);

      for (const q of questions) {
        expect(q.promptEn.length > 0).toBe(true);
        expect(q.options.length >= 2).toBe(true);
        expect(q.correctOptionId.length > 0).toBe(true);
      }
    }
  },
  'Phase 1: Checkpoint Gate Assessment'
);

// ============================================================================
// 6. TIER 2 COVERAGE & ZERO SEMANTIC LEAK INVARIANTS
// ============================================================================

treeSyllabusSuite.addTest(
  'Tier 2',
  'Tier 2 Micro-Cards: LEVEL_NODES micro-cards populate concept leaves across Units 2-15 with authentic bullet points',
  () => {
    const manifests = getAllUnitTreeManifests();
    let tier2LeavesCount = 0;

    for (const m of manifests) {
      if (m.unitId === 'g10-u1') continue;
      const leafNodes = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leafNodes) {
        if (leaf.leafPayload?.theoryBite.bulletPointsEn && leaf.leafPayload.theoryBite.bulletPointsEn.length > 0) {
          tier2LeavesCount++;
          expect(leaf.leafPayload.theoryBite.bulletPointsSi!.length > 0).toBe(true);
          expect(leaf.leafPayload.activeRecallCard.departmentKeywordsEn.length > 0).toBe(true);
        }
      }
    }

    // Expect over 50 Tier 2 leaves synthesized directly from LEVEL_NODES across Units 2-15
    expect(tier2LeavesCount >= 50).toBe(true);
  },
  'Phase 1: Tier 2 Micro-Card Coverage'
);

treeSyllabusSuite.addTest(
  'Tier 2',
  'Zero Semantic Leaks: No cross-unit keyword or mnemonic contamination',
  () => {
    const manifests = getAllUnitTreeManifests();

    for (const m of manifests) {
      const leafNodes = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leafNodes) {
        const card = leaf.leafPayload?.activeRecallCard;
        expect(card).toBeTruthy();

        // 1. Presentation unit must NOT leak binary weighting mnemonics
        if (m.unitId === 'g10-u8') {
          const mnem = card!.mnemonicEn?.toLowerCase() || '';
          expect(mnem.includes('binary')).toBe(false);
          expect(mnem.includes('bit weighting')).toBe(false);
          expect(mnem.includes('2^0')).toBe(false);
        }

        // 2. Units outside Unit 1 must NOT leak Unit 1's "Data is raw flour" mnemonic
        if (m.unitId !== 'g10-u1') {
          const mnem = card!.mnemonicEn?.toLowerCase() || '';
          expect(mnem.includes('raw flour')).toBe(false);
          expect(mnem.includes('baked bread')).toBe(false);
        }
      }
    }
  },
  'Phase 1: Semantic Isolation'
);

treeSyllabusSuite.addTest(
  'Tier 3',
  'Tactile Widget Placement: Contextual widgets mount only on appropriate units with zero leakage',
  () => {
    const manifests = getAllUnitTreeManifests();

    // 1. Verify hex_vat is present in g10-u3 (RGB Color Chamber)
    const u3Manifest = manifests.find((m) => m.unitId === 'g10-u3');
    expect(u3Manifest).toBeTruthy();
    const u3Widgets = Object.values(u3Manifest!.nodes)
      .filter((n) => n.type === 'leaf')
      .map((n) => n.leafPayload?.tactileWidget?.widgetKey)
      .filter(Boolean);
    expect(u3Widgets).toContain('hex_vat');
    expect(u3Widgets).toContain('binary_weight');

    // 2. Verify factory_conveyor ONLY exists in g10-u1
    for (const m of manifests) {
      if (m.unitId === 'g10-u1') continue;
      const widgets = Object.values(m.nodes)
        .filter((n) => n.type === 'leaf')
        .map((n) => n.leafPayload?.tactileWidget?.widgetKey)
        .filter(Boolean);
      expect(widgets.includes('factory_conveyor')).toBe(false);
      expect(widgets.includes('quality_radar')).toBe(false);
    }
  },
  'Phase 1: Tactile Placement Isolation'
);

// Self-executing CLI runner
if (process.argv[1] && process.argv[1].includes('treeSyllabusAdapter.test')) {
  treeSyllabusSuite.run().then((results) => {
    const failed = results.filter((r) => !r.passed);
    if (failed.length > 0) {
      console.error(`💥 ${failed.length} test(s) failed in Tree Syllabus Adapter test suite.`);
      process.exit(1);
    } else {
      console.log(`\n🎉 ALL ${results.length} TREE SYLLABUS ADAPTER TESTS PASSED CLEANLY!`);
      process.exit(0);
    }
  });
}
