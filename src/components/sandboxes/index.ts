/**
 * src/components/sandboxes/index.ts
 * Barrel export and registry for all 5 interactive visual sandboxes.
 */

import React from 'react';
import { SandboxProps } from './types';
import { BitSwitchboardSandbox } from './BitSwitchboardSandbox';
import { LogicWorkbenchSandbox } from './LogicWorkbenchSandbox';
import { LaserGridSandbox } from './LaserGridSandbox';
import { TraceTableSandbox } from './TraceTableSandbox';
import { HtmlTableMasonSandbox } from './HtmlTableMasonSandbox';

export {
  BitSwitchboardSandbox,
  LogicWorkbenchSandbox,
  LaserGridSandbox,
  TraceTableSandbox,
  HtmlTableMasonSandbox,
};
export * from './types';

export const SANDBOX_REGISTRY: Record<string, React.ComponentType<SandboxProps>> = {
  switchboard: BitSwitchboardSandbox,
  color_vat: BitSwitchboardSandbox,
  logic_workbench: LogicWorkbenchSandbox,
  laser_grid: LaserGridSandbox,
  trace_table: TraceTableSandbox,
  table_mason: HtmlTableMasonSandbox,
};
