/**
 * tests/unit/atomicTactileRegistry.test.ts
 * Unit tests for Phase 4: Atomic Tactile Widget Embedding & Registry Resolution
 *
 * Verifies:
 * 1. Registry resolution for all catalog widget keys (TACTILE_WIDGET_CATALOG).
 * 2. hideInternalTabs prop suppresses internal tab rendering and locks to defaultSubMode.
 * 3. EmbeddedTactileWidget container renders header pill and bilingual title.
 * 4. Integration into LeafNodeView (renders between theory bite and active recall).
 * 5. Full syllabus audit ensuring all manifested leaf widgets are registered.
 */

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, TestSuiteRunner } from '../e2e/harness';
import {
  ATOMIC_TACTILE_REGISTRY,
  getAtomicTactileWidget,
  isAtomicTactileWidgetRegistered,
} from '../../src/components/learning-engine/registry/AtomicTactileRegistry';
import { EmbeddedTactileWidget } from '../../src/components/learning-engine/nodes/EmbeddedTactileWidget';
import { LeafNodeView } from '../../src/components/learning-engine/nodes/LeafNodeView';
import { TACTILE_WIDGET_CATALOG, getAllUnitTreeManifests } from '../../src/data/adapters/treeSyllabusAdapter';
import { SyllabusTreeNode, TactileWidgetConfig } from '../../src/types/treeSyllabus';

// Concrete component imports for direct prop verification
import { FactoryConveyor } from '../../src/components/lesson01/FactoryConveyor';
import { QualityRadar } from '../../src/components/lesson01/QualityRadar';
import { EvolutionTimeline } from '../../src/components/lesson01/EvolutionTimeline';
import { SystemDiagram } from '../../src/components/SystemDiagram';
import { HtmlTableMason } from '../../src/components/g11_lesson05_webdesign/HtmlTableMason';
import { TraceTableScrubber } from '../../src/components/g11_lesson01_programming/TraceTableScrubber';
import { LaserGridAnchors } from '../../src/components/lesson07/LaserGridAnchors';
import { BitSwitchboard } from '../../src/components/lesson03/BitSwitchboard';
import { HexColorVat } from '../../src/components/lesson03/HexColorVat';
import { LogicGateSimulator } from '../../src/components/LogicGateSimulator';
import { VonNeumannHighway } from '../../src/components/lesson02/VonNeumannHighway';

export const atomicTactileSuite = new TestSuiteRunner(
  'Phase 4: Atomic Tactile Widget Embedding & Registry'
);

// ============================================================================
// 1. REGISTRY RESOLUTION FOR TACTILE_WIDGET_CATALOG
// ============================================================================

atomicTactileSuite.addTest(
  'Tier 1',
  'Registry: Maps all 11 keys in TACTILE_WIDGET_CATALOG to callable components',
  () => {
    const catalogKeys = Object.keys(TACTILE_WIDGET_CATALOG);
    expect(catalogKeys.length >= 11).toBe(true);

    for (const key of catalogKeys) {
      const widget = getAtomicTactileWidget(key);
      expect(widget).toBeTruthy();
      expect(typeof widget).toBe('function');
      expect(isAtomicTactileWidgetRegistered(key)).toBe(true);
    }
  },
  'Phase 4: Catalog Resolution Completeness'
);

atomicTactileSuite.addTest(
  'Tier 1',
  'Registry: Handles case-insensitivity and trim whitespace gracefully',
  () => {
    expect(getAtomicTactileWidget('FACTORY_CONVEYOR')).toBe(FactoryConveyor);
    expect(getAtomicTactileWidget('  quality_radar  ')).toBe(QualityRadar);
    expect(getAtomicTactileWidget('Logic_Gate')).toBe(LogicGateSimulator);
    expect(getAtomicTactileWidget('Trace_Table')).toBe(TraceTableScrubber);
  },
  'Phase 4: Robust Key Matching'
);

atomicTactileSuite.addTest(
  'Tier 1',
  'Registry: Gracefully returns undefined for unknown widget keys without throwing',
  () => {
    expect(getAtomicTactileWidget('non_existent_toy')).toBe(undefined);
    expect(getAtomicTactileWidget('')).toBe(undefined);
    expect(getAtomicTactileWidget(undefined)).toBe(undefined);
    expect(isAtomicTactileWidgetRegistered('non_existent_toy')).toBe(false);
  },
  'Phase 4: Null Safety & Unknown Key Handling'
);

// ============================================================================
// 2. HIDE INTERNAL TABS & DEFAULT SUB-MODE ISOLATION
// ============================================================================

const renderMarkup = (
  Component: React.ComponentType<any>,
  props: Record<string, any> = {}
): string => renderToStaticMarkup(React.createElement(Component, props));

atomicTactileSuite.addTest(
  'Tier 2',
  'FactoryConveyor: hideInternalTabs suppresses sub-station tab switcher and locks mode',
  () => {
    // 1. With tabs visible
    const withTabs = renderMarkup(FactoryConveyor, { hideInternalTabs: false });
    expect(withTabs.includes('data-testid="factory-conveyor-tabs"')).toBe(true);
    expect(withTabs.includes('Swipe-to-Classify')).toBe(true);

    // 2. With tabs suppressed and locked to processor mode
    const procTabs = renderMarkup(FactoryConveyor, {
      hideInternalTabs: true,
      defaultSubMode: 'processor',
    });
    expect(procTabs.includes('data-testid="factory-conveyor-tabs"')).toBe(false);
    expect(procTabs.includes('Calculation Pipeline Engine')).toBe(true);
    expect(procTabs.includes('Swipe-to-Classify')).toBe(false);

    // 3. With tabs suppressed and locked to classifier mode
    const classTabs = renderMarkup(FactoryConveyor, {
      hideInternalTabs: true,
      defaultSubMode: 'classifier',
    });
    expect(classTabs.includes('data-testid="factory-conveyor-tabs"')).toBe(false);
    expect(classTabs.includes('Calculation Pipeline Engine')).toBe(false);
  },
  'Phase 4: FactoryConveyor Tab Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'QualityRadar: hideInternalTabs suppresses Station 2 header & mode switcher',
  () => {
    // 1. With header visible
    const withHeader = renderMarkup(QualityRadar, { hideInternalTabs: false });
    expect(withHeader.includes('data-testid="quality-radar-header"')).toBe(true);

    // 2. With header suppressed and sandbox default mode locked
    const hiddenSandbox = renderMarkup(QualityRadar, {
      hideInternalTabs: true,
      defaultSubMode: 'sandbox',
    });
    expect(hiddenSandbox.includes('data-testid="quality-radar-header"')).toBe(false);
    expect(hiddenSandbox.includes('Interactive 5-Axis Simulator')).toBe(true);
    expect(hiddenSandbox.includes('Scenario 1 of')).toBe(false);

    // 3. With header suppressed and sabotage default mode locked
    const hiddenSabotage = renderMarkup(QualityRadar, {
      hideInternalTabs: true,
      defaultSubMode: 'sabotage',
    });
    expect(hiddenSabotage.includes('data-testid="quality-radar-header"')).toBe(false);
    expect(hiddenSabotage.includes('Interactive 5-Axis Simulator')).toBe(false);
    expect(hiddenSabotage.includes('Scenario 1 of')).toBe(true);
  },
  'Phase 4: QualityRadar Header Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'EvolutionTimeline: hideInternalTabs suppresses Station 4 header & tab switcher',
  () => {
    // 1. With header visible
    const withHeader = renderMarkup(EvolutionTimeline, { hideInternalTabs: false });
    expect(withHeader.includes('data-testid="evolution-timeline-header"')).toBe(true);

    // 2. With header suppressed and locked to pioneers
    const hiddenPioneers = renderMarkup(EvolutionTimeline, {
      hideInternalTabs: true,
      defaultSubMode: 'pioneers',
    });
    expect(hiddenPioneers.includes('data-testid="evolution-timeline-header"')).toBe(false);
    expect(hiddenPioneers.includes('Charles Babbage')).toBe(true);
    expect(hiddenPioneers.includes('1st Generation (Vacuum Tubes)')).toBe(false);

    // 3. With header suppressed and locked to generations
    const hiddenGen = renderMarkup(EvolutionTimeline, {
      hideInternalTabs: true,
      defaultSubMode: 'generations',
    });
    expect(hiddenGen.includes('data-testid="evolution-timeline-header"')).toBe(false);
    expect(hiddenGen.includes('1st Generation (Vacuum Tubes)')).toBe(true);
    expect(hiddenGen.includes('Charles Babbage')).toBe(false);
  },
  'Phase 4: EvolutionTimeline Tab Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'SystemDiagram: hideInternalTabs suppresses scenario tabs',
  () => {
    const withTabs = renderMarkup(SystemDiagram, { hideInternalTabs: false });
    expect(withTabs.includes('data-testid="system-diagram-tabs"')).toBe(true);

    // Locked to marks scenario
    const marksTabs = renderMarkup(SystemDiagram, {
      hideInternalTabs: true,
      defaultSubMode: 'marks',
    });
    expect(marksTabs.includes('data-testid="system-diagram-tabs"')).toBe(false);
    expect(marksTabs.includes('Term Test Mark Processing')).toBe(true);
    expect(marksTabs.includes('School Attendance System')).toBe(false);

    // Locked to ATM scenario
    const atmTabs = renderMarkup(SystemDiagram, {
      hideInternalTabs: true,
      defaultSubMode: 'atm',
    });
    expect(atmTabs.includes('data-testid="system-diagram-tabs"')).toBe(false);
    expect(atmTabs.includes('ATM Banking Transaction')).toBe(true);
    expect(atmTabs.includes('Term Test Mark Processing')).toBe(false);
  },
  'Phase 4: SystemDiagram Scenario Tab Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'HtmlTableMason: hideInternalTabs suppresses subtab navigation',
  () => {
    const withTabs = renderMarkup(HtmlTableMason, { hideInternalTabs: false });
    expect(withTabs.includes('data-testid="html-table-mason-tabs"')).toBe(true);

    // Locked to spacing mode
    const spacingTabs = renderMarkup(HtmlTableMason, {
      hideInternalTabs: true,
      defaultSubMode: 'spacing',
    });
    expect(spacingTabs.includes('data-testid="html-table-mason-tabs"')).toBe(false);
    expect(spacingTabs.includes('cellpadding') || spacingTabs.includes('cellspacing') || spacingTabs.includes('Cell Spacing')).toBe(true);

    // Locked to merger mode
    const mergerTabs = renderMarkup(HtmlTableMason, {
      hideInternalTabs: true,
      defaultSubMode: 'merger',
    });
    expect(mergerTabs.includes('data-testid="html-table-mason-tabs"')).toBe(false);
    expect(mergerTabs.includes('colspan') && mergerTabs.includes('rowspan')).toBe(true);
  },
  'Phase 4: HtmlTableMason Subtab Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'TraceTableScrubber: hideInternalTabs suppresses loop type switcher and header',
  () => {
    const withHeader = renderMarkup(TraceTableScrubber, { hideInternalTabs: false });
    expect(withHeader.includes('data-testid="trace-table-header"')).toBe(true);

    // Locked to repeat_until
    const hiddenRepeat = renderMarkup(TraceTableScrubber, {
      hideInternalTabs: true,
      defaultSubMode: 'repeat_until',
    });
    expect(hiddenRepeat.includes('data-testid="trace-table-header"')).toBe(false);
    expect(hiddenRepeat.includes('Min: 1 Time')).toBe(true);
    expect(hiddenRepeat.includes('REPEAT..UNTIL')).toBe(true);
    expect(hiddenRepeat.includes('Min: 0 Times')).toBe(false);

    // Locked to while_do
    const hiddenWhile = renderMarkup(TraceTableScrubber, {
      hideInternalTabs: true,
      defaultSubMode: 'while_do',
    });
    expect(hiddenWhile.includes('data-testid="trace-table-header"')).toBe(false);
    expect(hiddenWhile.includes('Min: 0 Times')).toBe(true);
    expect(hiddenWhile.includes('Min: 1 Time')).toBe(false);
    expect(hiddenWhile.includes('REPEAT..UNTIL')).toBe(false);
  },
  'Phase 4: TraceTableScrubber Header Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'LaserGridAnchors: hideInternalTabs suppresses station header banner',
  () => {
    const withHeader = renderMarkup(LaserGridAnchors, { hideInternalTabs: false });
    expect(withHeader.includes('data-testid="laser-grid-header"')).toBe(true);

    // Absolute mode locked
    const hiddenAbs = renderMarkup(LaserGridAnchors, {
      hideInternalTabs: true,
      defaultSubMode: 'absolute',
    });
    expect(hiddenAbs.includes('data-testid="laser-grid-header"')).toBe(false);
    expect(hiddenAbs.includes('$H$1')).toBe(true);
    expect(hiddenAbs.includes('Locked ($H$1)')).toBe(true);

    // Relative mode
    const hiddenRel = renderMarkup(LaserGridAnchors, {
      hideInternalTabs: true,
      defaultSubMode: 'relative',
    });
    expect(hiddenRel.includes('data-testid="laser-grid-header"')).toBe(false);
    expect(hiddenRel.includes('Unlocked (H1)')).toBe(true);
  },
  'Phase 4: LaserGridAnchors Header Suppression & Mode Locking'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'BitSwitchboard, HexColorVat, LogicGate, VonNeumann: hideInternalTabs suppresses sub-headers',
  () => {
    // BitSwitchboard
    const bitWith = renderMarkup(BitSwitchboard, { hideInternalTabs: false });
    const bitHidden = renderMarkup(BitSwitchboard, { hideInternalTabs: true, defaultSubMode: 1 });
    expect(bitWith.includes('data-testid="bit-switchboard-header"')).toBe(true);
    expect(bitHidden.includes('data-testid="bit-switchboard-header"')).toBe(false);
    expect(bitHidden.includes('ASCII Letter')).toBe(true);

    // HexColorVat
    const hexWith = renderMarkup(HexColorVat, { hideInternalTabs: false });
    const hexHidden = renderMarkup(HexColorVat, { hideInternalTabs: true });
    expect(hexWith.includes('data-testid="hex-vat-header"')).toBe(true);
    expect(hexHidden.includes('data-testid="hex-vat-header"')).toBe(false);

    // LogicGateSimulator
    const logicWith = renderMarkup(LogicGateSimulator, { hideInternalTabs: false });
    const logicNand = renderMarkup(LogicGateSimulator, {
      hideInternalTabs: true,
      defaultSubMode: 'NAND',
    });
    expect(logicWith.includes('data-testid="logic-gate-tabs"')).toBe(true);
    expect(logicNand.includes('data-testid="logic-gate-tabs"')).toBe(false);
    expect(logicNand.includes('[NAND]')).toBe(true);

    const logicOr = renderMarkup(LogicGateSimulator, {
      hideInternalTabs: true,
      defaultSubMode: 'OR',
    });
    expect(logicOr.includes('[OR]')).toBe(true);

    // VonNeumannHighway
    const vonWith = renderMarkup(VonNeumannHighway, { hideInternalTabs: false });
    const vonArch = renderMarkup(VonNeumannHighway, {
      hideInternalTabs: true,
      defaultSubMode: 'architecture',
    });
    expect(vonWith.includes('data-testid="von-neumann-header"')).toBe(true);
    expect(vonArch.includes('data-testid="von-neumann-header"')).toBe(false);
    expect(vonArch.includes('Control Unit (CU)')).toBe(true);

    const vonBus = renderMarkup(VonNeumannHighway, {
      hideInternalTabs: true,
      defaultSubMode: 'bus_traffic',
    });
    expect(vonBus.includes('data-testid="von-neumann-header"')).toBe(false);
    expect(vonBus.includes('Address Bus')).toBe(true);
  },
  'Phase 4: Comprehensive Header Suppression & Mode Locking Across All Components'
);

// ============================================================================
// 3. EMBEDDED TACTILE WIDGET CONTAINER COMPONENT
// ============================================================================

atomicTactileSuite.addTest(
  'Tier 1',
  'EmbeddedTactileWidget: Renders interactive mission pill, bilingual title, and resolved widget',
  () => {
    const config: TactileWidgetConfig = {
      widgetKey: 'binary_weight',
      titleEn: '8-Bit Binary Switchboard',
      titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
      hideInternalTabs: true,
    };

    const markup = renderMarkup(EmbeddedTactileWidget, { config, language: 'dual' });

    // 1. Container presence
    expect(markup.includes('data-testid="embedded-tactile-widget-container"')).toBe(true);
    expect(markup.includes('data-widget-key="binary_weight"')).toBe(true);

    // 2. Header pill
    expect(markup.includes('🎮 INTERACTIVE MISSION')).toBe(true);

    // 3. Bilingual title
    expect(markup.includes('8-Bit Binary Switchboard')).toBe(true);
    expect(markup.includes('8-බිටු ද්වීමය ස්විච පුවරුව')).toBe(true);

    // 4. Nested tabs are hidden inside the embedded container
    expect(markup.includes('data-testid="bit-switchboard-header"')).toBe(false);
  },
  'Phase 4: EmbeddedTactileWidget Container Rendering'
);

atomicTactileSuite.addTest(
  'Tier 1',
  'EmbeddedTactileWidget: Gracefully renders fallback banner for unmapped or unknown widget keys',
  () => {
    const config: TactileWidgetConfig = {
      widgetKey: 'unknown_future_toy',
      titleEn: 'Experimental Quantum Gizmo',
      titleSi: 'පර්යේෂණාත්මක ක්වොන්ටම් උපකරණය',
      hideInternalTabs: true,
    };

    const markup = renderMarkup(EmbeddedTactileWidget, { config, language: 'en' });
    expect(markup.includes('data-testid="embedded-tactile-widget-container"')).toBe(true);
    expect(markup.includes('Experimental Quantum Gizmo')).toBe(true);
    expect(markup.includes('Interactive module &quot;unknown_future_toy&quot; active.')).toBe(true);
  },
  'Phase 4: Unknown Widget Fallback Rendering'
);

// ============================================================================
// 4. LEAF NODE VIEW INTEGRATION
// ============================================================================

atomicTactileSuite.addTest(
  'Tier 2',
  'LeafNodeView: Mounts EmbeddedTactileWidget when leafPayload.tactileWidget exists',
  () => {
    const mockLeafWithWidget: SyllabusTreeNode = {
      id: 'mock-leaf-with-widget',
      unitId: 'g10-u1',
      type: 'leaf',
      depth: 2,
      orderIndex: 1,
      childIds: [],
      titleEn: 'Data vs Information',
      titleSi: 'දත්ත සහ තොරතුරු',
      leafPayload: {
        theoryBite: {
          titleEn: 'Raw Facts vs Processed Meaning',
          titleSi: 'අමු කරුණු සහ සැකසූ අර්ථය',
          contentEn: 'Data consists of unprocessed symbols with no context.',
          contentSi: 'දත්ත යනු සැකසුම් නොකළ කරුණු වේ.',
        },
        tactileWidget: {
          widgetKey: 'factory_conveyor',
          titleEn: 'Data Classifier Hopper',
          titleSi: 'දත්ත වර්ගීකරණ පද්ධතිය',
          hideInternalTabs: true,
        },
        activeRecallCard: {
          termEn: 'Data',
          termSi: 'දත්ත',
          departmentKeywordsEn: ['Raw', 'Unprocessed'],
          departmentKeywordsSi: ['අමු කරුණු', 'සැකසුම් නොකළ'],
          definitionEn: 'Raw, unprocessed facts without context.',
          definitionSi: 'සැකසුම් නොකළ අමු කරුණු වේ.',
        },
      },
    };

    const markup = renderToStaticMarkup(
      React.createElement(LeafNodeView, {
        leafNode: mockLeafWithWidget,
        status: 'active',
        isExpanded: true,
      })
    );

    // 1. Contains Theory Bite
    expect(markup.includes('Raw Facts vs Processed Meaning')).toBe(true);

    // 2. Contains Embedded Tactile Widget Container
    expect(markup.includes('data-testid="embedded-tactile-widget-container"')).toBe(true);
    expect(markup.includes('data-widget-key="factory_conveyor"')).toBe(true);
    expect(markup.includes('🎮 INTERACTIVE MISSION')).toBe(true);

    // 3. Contains Active Recall Card
    expect(markup.includes('data-testid="recall-card-front"')).toBe(true);
  },
  'Phase 4: LeafNodeView Complete Hierarchy Ordering'
);

atomicTactileSuite.addTest(
  'Tier 2',
  'LeafNodeView: Omits tactile widget container when leafPayload.tactileWidget is absent',
  () => {
    const mockLeafNoWidget: SyllabusTreeNode = {
      id: 'mock-leaf-no-widget',
      unitId: 'g10-u5',
      type: 'leaf',
      depth: 2,
      orderIndex: 2,
      childIds: [],
      titleEn: 'Storage Devices',
      titleSi: 'ආචයන උපාංග',
      leafPayload: {
        theoryBite: {
          titleEn: 'Magnetic Storage',
          titleSi: 'චුම්බක ආචයනය',
          contentEn: 'Uses magnetic platters to store bits.',
          contentSi: 'දත්ත ගබඩා කිරීමට චුම්බක තැටි භාවිත කරයි.',
        },
        activeRecallCard: {
          termEn: 'HDD',
          termSi: 'දෘඪ තැටිය',
          departmentKeywordsEn: ['Magnetic', 'Secondary Storage'],
          departmentKeywordsSi: ['චුම්බක', 'ද්විතීයික ආචයනය'],
          definitionEn: 'Hard disk drive using magnetic storage.',
          definitionSi: 'චුම්බක මාධ්‍ය භාවිතා කරන ආචයන උපාංගයකි.',
        },
      },
    };

    const markup = renderToStaticMarkup(
      React.createElement(LeafNodeView, {
        leafNode: mockLeafNoWidget,
        status: 'active',
        isExpanded: true,
      })
    );

    expect(markup.includes('data-testid="embedded-tactile-widget-container"')).toBe(false);
    expect(markup.includes('data-testid="recall-card-front"')).toBe(true);
  },
  'Phase 4: LeafNodeView Clean Absence'
);

// ============================================================================
// 5. FULL SYLLABUS INTEGRATION AUDIT
// ============================================================================

atomicTactileSuite.addTest(
  'Tier 3',
  'Syllabus Audit: All manifested leaf widgets across 15 units resolve to registered components',
  () => {
    const manifests = getAllUnitTreeManifests();
    expect(manifests.length).toBe(15);

    let totalTactileLeaves = 0;
    const seenWidgets = new Set<string>();

    for (const manifest of manifests) {
      const leaves = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
      for (const leaf of leaves) {
        const tactile = leaf.leafPayload?.tactileWidget;
        if (tactile) {
          totalTactileLeaves++;
          seenWidgets.add(tactile.widgetKey);

          // Verify every manifested widgetKey resolves cleanly in the registry
          const component = getAtomicTactileWidget(tactile.widgetKey);
          expect(component).toBeTruthy();
          expect(isAtomicTactileWidgetRegistered(tactile.widgetKey)).toBe(true);
        }
      }
    }

    // Ensure we have contextual widgets placed across the syllabus
    expect(totalTactileLeaves >= 8).toBe(true);
    expect(seenWidgets.has('factory_conveyor')).toBe(true);
    expect(seenWidgets.has('quality_radar')).toBe(true);
    expect(seenWidgets.has('system_diagram')).toBe(true);
    expect(seenWidgets.has('binary_weight')).toBe(true);
    expect(seenWidgets.has('hex_vat')).toBe(true);
  },
  'Phase 4: Syllabus-Wide Registry Verification'
);

// Self-executing CLI runner
if (typeof process !== 'undefined' && process.argv[1]?.includes('atomicTactileRegistry.test')) {
  atomicTactileSuite.run().then((results) => {
    const failed = results.filter((r) => !r.passed);
    if (failed.length > 0) {
      console.error(`❌ ${failed.length} tests failed!`);
      process.exit(1);
    } else {
      console.log('\n🎉 ALL 12 ATOMIC TACTILE REGISTRY TESTS PASSED CLEANLY!\n');
    }
  });
}
