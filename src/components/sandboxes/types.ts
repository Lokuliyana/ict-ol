/**
 * src/components/sandboxes/types.ts
 * Standard interface contract for all interactive visual sandboxes.
 */

export interface SandboxProps {
  nodeId?: string;
  onComplete?: (result?: {
    stars?: number;
    xp?: number;
    accuracy?: number;
  }) => void;
  onExit?: () => void;
  standalone?: boolean;
}
