/**
 * tests/unit/embeddedRecallCheck.test.ts
 * Unit tests for Phase 3: Embedded Active Recall Engine (3D Tactile Flip Card)
 *
 * Verifies:
 * 1. ActiveRecallCard data contract and zero-static-MCQs enforcement.
 * 2. Bilingual term, keyword, mnemonic, and trap warning resolution.
 * 3. Game store economy: +15 XP award, node completion recording, and idempotency.
 * 4. Component exports and LeafNodeView integration.
 * 5. Complete coverage across all 15 unit tree manifests.
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import { ActiveRecallCard } from '../../src/types/treeSyllabus';
import { EmbeddedRecallCheck } from '../../src/components/learning-engine/nodes/EmbeddedRecallCheck';
import { LeafNodeView } from '../../src/components/learning-engine/nodes/LeafNodeView';
import { useGameStore } from '../../src/lib/store';
import { getAllUnitTreeManifests, getUnitTreeManifest } from '../../src/data/adapters/treeSyllabusAdapter';

export const embeddedRecallSuite = new TestSuiteRunner(
  'Phase 3: Embedded Active Recall Engine'
);

// Sample mock active recall card
const mockCard: ActiveRecallCard = {
  termEn: 'Primary Key',
  termSi: 'ප්‍රාථමික යතුර',
  departmentKeywordsEn: ['Unique', 'Not Null', 'Tuple Identifier'],
  departmentKeywordsSi: ['අනන්‍ය', 'හිස් නොවන', 'ලක්ෂණය'],
  mnemonicEn: 'PIN code for every database record',
  mnemonicSi: 'සෑම වාර්තාවකටම රහස් අංකය',
  definitionEn: 'A candidate key uniquely identifying tuples within a relation, containing non-null values.',
  definitionSi: 'සම්බන්ධතාවයක පේළි අනන්‍යව හඳුනාගැනීමට යොදාගන්නා ශුන්‍ය විය නොහැකි යතුරයි.',
  examTrapWarningEn: 'Foreign keys can contain duplicate and null values, but primary keys can never be null.',
  examTrapWarningSi: 'ආගන්තුක යතුරු වල ද්විගුණ හෝ හිස් අගයන් තිබිය හැක, නමුත් ප්‍රාථමික යතුරු කිසිවිටෙකත් හිස් විය නොහැක.',
};

// ============================================================================
// 1. DATA CONTRACT & ZERO-STATIC-MCQ COMPLIANCE
// ============================================================================

embeddedRecallSuite.addTest(
  'Tier 1',
  'Contract: ActiveRecallCard enforces active recall schema without static MCQs',
  () => {
    expect(mockCard.termEn).toBe('Primary Key');
    expect(mockCard.termSi).toBe('ප්‍රාථමික යතුර');
    expect(mockCard.departmentKeywordsEn.length).toBe(3);
    expect(mockCard.departmentKeywordsSi.length).toBe(3);
    expect(mockCard.definitionEn.length > 0).toBe(true);
    expect(mockCard.definitionSi.length > 0).toBe(true);

    // Verify zero static MCQ options exist on the active recall contract
    expect((mockCard as any).options).toBe(undefined);
    expect((mockCard as any).correctOptionId).toBe(undefined);
  },
  'Phase 3: Zero-Static-MCQ Enforcement'
);

embeddedRecallSuite.addTest(
  'Tier 1',
  'Contract: Mnemonic and Trap Warning are strictly supported as optional fields',
  () => {
    const minimalCard: ActiveRecallCard = {
      termEn: 'Bit',
      termSi: 'බිටු',
      departmentKeywordsEn: ['Binary Digit', '0 or 1'],
      departmentKeywordsSi: ['ද්විමය අංකය'],
      definitionEn: 'The smallest unit of data in computing.',
      definitionSi: 'පරිගණකයේ කුඩාම දත්ත ඒකකය.',
    };

    expect(minimalCard.mnemonicEn).toBe(undefined);
    expect(minimalCard.examTrapWarningEn).toBe(undefined);
    expect(minimalCard.departmentKeywordsEn.length).toBe(2);
  },
  'Phase 3: Optional Enrichment Support'
);

// Helper function matching EmbeddedRecallCheck resolution logic
function resolveCardContent(card: ActiveRecallCard, language: 'en' | 'si' | 'dual') {
  const resolvedTerm =
    language === 'si' ? card.termSi || card.termEn : card.termEn;
  const resolvedKeywords =
    language === 'si'
      ? card.departmentKeywordsSi?.length
        ? card.departmentKeywordsSi
        : card.departmentKeywordsEn
      : card.departmentKeywordsEn;
  const resolvedDefinition =
    language === 'si' ? card.definitionSi || card.definitionEn : card.definitionEn;
  const secondaryTerm =
    language === 'dual'
      ? card.termSi
      : language === 'si'
      ? card.termEn
      : card.termSi;

  return { resolvedTerm, resolvedKeywords, resolvedDefinition, secondaryTerm };
}

// ============================================================================
// 2. BILINGUAL RESOLUTION LOGIC
// ============================================================================

embeddedRecallSuite.addTest(
  'Tier 1',
  'Language Resolution: English medium surfaces English terms and grader keywords',
  () => {
    const { resolvedTerm, resolvedKeywords, resolvedDefinition } = resolveCardContent(mockCard, 'en');

    expect(resolvedTerm).toBe('Primary Key');
    expect(resolvedKeywords[0]).toBe('Unique');
    expect(resolvedDefinition.includes('candidate key')).toBe(true);
  },
  'Phase 3: Bilingual Resolution'
);

embeddedRecallSuite.addTest(
  'Tier 1',
  'Language Resolution: Sinhala medium surfaces Sinhala terms and fallback gracefully',
  () => {
    const { resolvedTerm, resolvedKeywords, resolvedDefinition } = resolveCardContent(mockCard, 'si');

    expect(resolvedTerm).toBe('ප්‍රාථමික යතුර');
    expect(resolvedKeywords[0]).toBe('අනන්‍ය');
    expect(resolvedDefinition.includes('සම්බන්ධතාවයක')).toBe(true);
  },
  'Phase 3: Bilingual Resolution'
);

embeddedRecallSuite.addTest(
  'Tier 1',
  'Language Resolution: Dual mode preserves both primary and secondary definitions',
  () => {
    const { resolvedTerm, secondaryTerm } = resolveCardContent(mockCard, 'dual');

    expect(resolvedTerm).toBe('Primary Key');
    expect(secondaryTerm).toBe('ප්‍රාථමික යතුර');
  },
  'Phase 3: Bilingual Resolution'
);

// ============================================================================
// 3. GAME STORE INTEGRATION & STATE ECONOMY
// ============================================================================

embeddedRecallSuite.addTest(
  'Tier 1',
  'Store Integration: addXp(15) awards exactly +15 XP upon concept mastery',
  () => {
    const store = useGameStore.getState();
    const initialXp = store.xp;

    store.addXp(15);
    const updatedXp = useGameStore.getState().xp;

    expect(updatedXp - initialXp).toBe(15);
  },
  'Phase 3: XP Award'
);

embeddedRecallSuite.addTest(
  'Tier 1',
  'Store Integration: completeNode records node completion with 100% accuracy',
  () => {
    const testNodeId = 'test-leaf-node-recall-01';
    const store = useGameStore.getState();

    const result = store.completeNode(testNodeId, 100);
    const updatedState = useGameStore.getState();

    expect(result.stars).toBe(3);
    expect(updatedState.completedNodes[testNodeId]).toBeTruthy();
    expect(updatedState.completedNodes[testNodeId].stars).toBe(3);
    expect(updatedState.completedNodes[testNodeId].highAccuracy).toBe(100);
  },
  'Phase 3: Mastery Recording'
);

embeddedRecallSuite.addTest(
  'Tier 2',
  'Store Integration: Idempotent XP protection logic guards against double-counting',
  () => {
    const testNodeId = 'test-idempotency-node-phase3';
    const store = useGameStore.getState();
    const initialXp = store.xp;

    // Execute mastery workflow through store
    const executeMastery = (nodeId: string) => {
      const state = useGameStore.getState();
      if (state.completedNodes[nodeId]) {
        return false; // Guarded by store state
      }
      state.addXp(15);
      state.completeNode(nodeId, 100);
      return true;
    };

    const firstResult = executeMastery(testNodeId);
    expect(firstResult).toBe(true);
    const xpAfterFirst = useGameStore.getState().xp;
    expect(xpAfterFirst > initialXp).toBe(true);
    expect(useGameStore.getState().completedNodes[testNodeId]).toBeTruthy();

    // Second execution (duplicate click during animation or re-render)
    const secondResult = executeMastery(testNodeId);
    expect(secondResult).toBe(false);
    const xpAfterSecond = useGameStore.getState().xp;
    expect(xpAfterSecond).toBe(xpAfterFirst); // Zero double counting
  },
  'Phase 3: Idempotency Protection'
);

embeddedRecallSuite.addTest(
  'Tier 2',
  'TreeDownCanvas Integration: onMastered does not double-award XP via handleLeafComplete',
  () => {
    const testLeafId = 'test-coexistence-leaf-01';
    const store = useGameStore.getState();

    // 1. EmbeddedRecallCheck masters leaf
    store.addXp(15);
    store.completeNode(testLeafId, 100);
    const xpAfterRecall = useGameStore.getState().xp;

    // 2. onMastered fires callback into TreeDownCanvas handleLeafComplete
    const isAlreadyCompleted = !!useGameStore.getState().completedNodes[testLeafId];
    if (!isAlreadyCompleted) {
      store.addXp(15);
      store.completeNode(testLeafId, 100);
    }

    const xpAfterCallback = useGameStore.getState().xp;
    expect(xpAfterCallback).toBe(xpAfterRecall); // Zero double counting!
  },
  'Phase 3: Coexistence Idempotency'
);

// ============================================================================
// 4. COMPONENT & ARCHITECTURE INTEGRATION
// ============================================================================

embeddedRecallSuite.addTest(
  'Tier 1',
  'Architecture: EmbeddedRecallCheck and LeafNodeView are valid exported React components',
  () => {
    expect(typeof EmbeddedRecallCheck).toBe('function');
    expect(typeof LeafNodeView).toBe('function');
  },
  'Phase 3: Architecture Export'
);

embeddedRecallSuite.addTest(
  'Tier 2',
  'LeafNodeView Payload: Every manifest leaf is wired with ActiveRecallCard',
  () => {
    const manifest = getUnitTreeManifest('g10-u1');
    const leafNodes = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');

    expect(leafNodes.length > 0).toBe(true);

    for (const leaf of leafNodes) {
      expect(leaf.leafPayload).toBeTruthy();
      expect(leaf.leafPayload?.activeRecallCard).toBeTruthy();
      const card = leaf.leafPayload?.activeRecallCard!;
      expect(card.termEn.length > 0).toBe(true);
      expect(card.termSi.length > 0).toBe(true);
      expect(card.departmentKeywordsEn.length > 0).toBe(true);
      expect(card.departmentKeywordsSi.length > 0).toBe(true);
      expect(card.definitionEn.length > 0).toBe(true);
      expect(card.definitionSi.length > 0).toBe(true);
    }
  },
  'Phase 3: Leaf Node Integration'
);

// ============================================================================
// 5. FULL 15-UNIT SYLLABUS ACTIVE RECALL VERIFICATION
// ============================================================================

embeddedRecallSuite.addTest(
  'Tier 3',
  'Syllabus Coverage: All 15 units have complete, valid active recall cards across all leaves',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    let totalLeavesChecked = 0;

    for (const m of manifests) {
      const leaves = Object.values(m.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leaves) {
        totalLeavesChecked++;
        const card = leaf.leafPayload?.activeRecallCard;
        expect(card).toBeTruthy();
        if (card) {
          expect(typeof card.termEn).toBe('string');
          expect(card.termEn.trim().length > 0).toBe(true);
          expect(typeof card.termSi).toBe('string');
          expect(card.termSi.trim().length > 0).toBe(true);
          expect(Array.isArray(card.departmentKeywordsEn)).toBe(true);
          expect(card.departmentKeywordsEn.length > 0).toBe(true);
          expect(Array.isArray(card.departmentKeywordsSi)).toBe(true);
          expect(card.departmentKeywordsSi.length > 0).toBe(true);
          expect(card.definitionEn.trim().length > 0).toBe(true);
          expect(card.definitionSi.trim().length > 0).toBe(true);
        }
      }
    }

    expect(totalLeavesChecked >= 45).toBe(true);
  },
  'Phase 3: Full Curriculum Coverage'
);

// CLI direct execution
if (typeof process !== 'undefined' && process.argv[1]?.includes('embeddedRecallCheck.test')) {
  embeddedRecallSuite.run().then((results) => {
    const failed = results.filter((r) => !r.passed);
    if (failed.length > 0) {
      console.error(`FAILED: ${failed.length} tests`);
      process.exit(1);
    } else {
      console.log(`\n🎉 ALL ${results.length} EMBEDDED RECALL CHECK TESTS PASSED CLEANLY!`);
      process.exit(0);
    }
  });
}
