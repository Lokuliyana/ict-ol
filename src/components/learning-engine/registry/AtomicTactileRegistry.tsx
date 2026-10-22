'use client';

import React from 'react';
import { FactoryConveyor, FactoryConveyorProps } from '@/components/lesson01/FactoryConveyor';
import { QualityRadar, QualityRadarProps } from '@/components/lesson01/QualityRadar';
import { SystemDiagram, SystemDiagramProps } from '@/components/SystemDiagram';
import { EvolutionTimeline, EvolutionTimelineProps } from '@/components/lesson01/EvolutionTimeline';
import { BitSwitchboard, BitSwitchboardProps } from '@/components/lesson03/BitSwitchboard';
import { HexColorVat, HexColorVatProps } from '@/components/lesson03/HexColorVat';
import { VonNeumannHighway, VonNeumannHighwayProps } from '@/components/lesson02/VonNeumannHighway';
import { LogicGateSimulator, LogicGateSimulatorProps } from '@/components/LogicGateSimulator';
import { LaserGridAnchors, LaserGridAnchorsProps } from '@/components/lesson07/LaserGridAnchors';
import { TraceTableScrubber, TraceTableScrubberProps } from '@/components/g11_lesson01_programming/TraceTableScrubber';
import { HtmlTableMason, HtmlTableMasonProps } from '@/components/g11_lesson05_webdesign/HtmlTableMason';
import { TopologyLab } from '@/components/g11_lesson03_internet/TopologyLab';
import { CyberSecurityVault } from '@/components/g11_lesson03_internet/CyberSecurityVault';
import { ColdBootPipeline } from '@/components/lesson_os/ColdBootPipeline';
import { InterfaceArena } from '@/components/lesson_os/InterfaceArena';
import { ProcessDispatcher } from '@/components/lesson_os/ProcessDispatcher';
import { DiskOptimizerStudio } from '@/components/lesson_os/DiskOptimizerStudio';
import { FileHierarchyTree } from '@/components/lesson_os/FileHierarchyTree';
import { OsEngineWorkbench } from '@/components/lesson_os/OsEngineWorkbench';

export interface AtomicWidgetProps {
  hideInternalTabs?: boolean;
  defaultSubMode?: string | number;
  [key: string]: any;
}

/**
 * Registry mapping catalog widget keys to their focused tactile components
 */
export const ATOMIC_TACTILE_REGISTRY: Record<string, React.ComponentType<any>> = {
  // 11 Core TACTILE_WIDGET_CATALOG entries
  factory_conveyor: FactoryConveyor,
  quality_radar: QualityRadar,
  system_diagram: SystemDiagram,
  timeline_slider: EvolutionTimeline,
  binary_weight: BitSwitchboard,
  hex_vat: HexColorVat,
  cpu_bus: VonNeumannHighway,
  logic_gate: LogicGateSimulator,
  laser_grid: LaserGridAnchors,
  trace_table: TraceTableScrubber,
  table_mason: HtmlTableMason,

  // OS Engine Station Widgets (Grade 10 Unit 5)
  cold_boot: ColdBootPipeline,
  interface_arena: InterfaceArena,
  process_dispatcher: ProcessDispatcher,
  disk_optimizer: DiskOptimizerStudio,
  file_hierarchy: FileHierarchyTree,
  os_engine: OsEngineWorkbench,

  // Direct and curriculum aliases
  html_table_mason: HtmlTableMason,
  bit_switchboard: BitSwitchboard,
  von_neumann_highway: VonNeumannHighway,
  logic_workbench: LogicGateSimulator,
  evolution_timeline: EvolutionTimeline,
  laser_grid_anchors: LaserGridAnchors,
  network_topo: TopologyLab,
  security_cipher: CyberSecurityVault,
  os_cold_boot: ColdBootPipeline,
  os_interface: InterfaceArena,
  os_process: ProcessDispatcher,
  os_disk: DiskOptimizerStudio,
  os_files: FileHierarchyTree,
};

/**
 * Resolves a component from the atomic tactile registry by key (case-insensitive)
 */
export function getAtomicTactileWidget(widgetKey?: string): React.ComponentType<any> | undefined {
  if (!widgetKey) return undefined;
  const normalizedKey = widgetKey.toLowerCase().trim();
  return ATOMIC_TACTILE_REGISTRY[normalizedKey];
}

/**
 * Checks if a widget key is registered
 */
export function isAtomicTactileWidgetRegistered(widgetKey?: string): boolean {
  return !!getAtomicTactileWidget(widgetKey);
}

export interface AtomicTactileResolverProps {
  widgetKey: string;
  hideInternalTabs?: boolean;
  defaultSubMode?: string | number;
  props?: Record<string, any>;
  fallback?: React.ReactNode;
}

/**
 * High-level component resolver that renders the registered widget with props applied
 */
export function AtomicTactileResolver({
  widgetKey,
  hideInternalTabs = true,
  defaultSubMode,
  props = {},
  fallback,
}: AtomicTactileResolverProps) {
  const WidgetComponent = getAtomicTactileWidget(widgetKey);

  if (!WidgetComponent) {
    if (fallback !== undefined) return <>{fallback}</>;
    return (
      <div className="p-4 rounded-xl border border-dashed border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-200 text-xs">
        Interactive widget &quot;{widgetKey}&quot; is preparing for launch.
      </div>
    );
  }

  return (
    <WidgetComponent
      hideInternalTabs={hideInternalTabs}
      defaultSubMode={defaultSubMode}
      {...props}
    />
  );
}

export default ATOMIC_TACTILE_REGISTRY;
