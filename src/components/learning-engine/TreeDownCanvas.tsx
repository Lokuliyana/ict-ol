'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitFork,
  CheckCircle2,
  Lock,
  Sparkles,
  Trophy,
  Layers,
  ChevronDown,
  BookOpen,
} from 'lucide-react';
import { UnitTreeManifest, SyllabusTreeNode } from '@/types/treeSyllabus';
import { getUnitTreeManifest } from '@/data/adapters/treeSyllabusAdapter';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { TreeSvgConnector, ConnectorStatus } from './connectors/TreeSvgConnector';
import { TreeNodeItem, NodeStatus } from './nodes/TreeNodeItem';
import { RootNodeView } from './nodes/RootNodeView';
import { BranchNodeView } from './nodes/BranchNodeView';
import { LeafNodeView } from './nodes/LeafNodeView';
import { CheckpointGateNode } from './nodes/CheckpointGateNode';

export interface ConnectorDefinition {
  id: string;
  fromId: string;
  toId: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  status: ConnectorStatus;
}

export interface TreeDownCanvasProps {
  unitId: string;
  initialManifest?: UnitTreeManifest;
  language?: 'en' | 'si' | 'dual';
  className?: string;
  onNodeSelect?: (nodeId: string) => void;
}

export function TreeDownCanvas({
  unitId,
  initialManifest,
  language: propLanguage,
  className = '',
  onNodeSelect,
}: TreeDownCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Store bindings
  const storeLanguage = useGameStore((s) => s.language);
  const storeLanguageMode = useGameStore((s) => s.languageMode);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const completedParts = useGameStore((s) => s.completedParts || {});
  const activeNodeId = useGameStore((s) => s.activeNodeId);
  const setActiveNode = useGameStore((s) => s.setActiveNode);
  const addXp = useGameStore((s) => s.addXp);
  const completeNode = useGameStore((s) => s.completeNode);

  const effectiveLanguage = propLanguage || storeLanguageMode || storeLanguage || 'en';

  // Manifest
  const manifest = useMemo<UnitTreeManifest>(() => {
    return initialManifest || getUnitTreeManifest(unitId);
  }, [initialManifest, unitId]);

  // Expanded nodes map: Expand all branches by default for open exploration
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      [manifest.rootNode.id]: true,
      [manifest.checkpointNodeId]: true,
    };
    manifest.branchIds.forEach((bId) => {
      initial[bId] = true;
    });
    return initial;
  });

  // Keep expanded nodes synchronized when switching units
  useEffect(() => {
    const next: Record<string, boolean> = {
      [manifest.rootNode.id]: true,
      [manifest.checkpointNodeId]: true,
    };
    manifest.branchIds.forEach((bId) => {
      next[bId] = true;
    });
    setExpandedNodes(next);
  }, [manifest.rootNode.id, manifest.checkpointNodeId, manifest.branchIds]);

  const toggleNodeExpanded = (nodeId: string) => {
    sound.playClick(600);
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  // Node status resolver
  const getNodeStatus = useCallback(
    (node: SyllabusTreeNode): NodeStatus => {
      // 1. If explicit in store completedNodes
      if (completedNodes[node.id]) return 'completed';

      // 2. Check completedParts
      if (completedParts[`${unitId}-${node.id}`] || completedParts[node.id]) {
        return 'completed';
      }

      // 3. For Root: completed if all leaves are completed
      if (node.type === 'root') {
        const leaves = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
        const allDone =
          leaves.length > 0 &&
          leaves.every((l) => completedNodes[l.id] || completedParts[`${unitId}-${l.id}`]);
        return allDone ? 'completed' : 'active';
      }

      // 4. For Branch: completed if all its child leaves are completed, otherwise active for learning
      if (node.type === 'branch') {
        const childLeaves = node.childIds
          .map((id) => manifest.nodes[id])
          .filter((n) => n && n.type === 'leaf');
        if (
          childLeaves.length > 0 &&
          childLeaves.every((l) => completedNodes[l.id] || completedParts[`${unitId}-${l.id}`])
        ) {
          return 'completed';
        }
        return 'active';
      }

      // 5. For Leaf: completed if mastered, otherwise active for learning
      if (node.type === 'leaf') {
        if (completedNodes[node.id] || completedParts[`${unitId}-${node.id}`]) {
          return 'completed';
        }
        return 'active';
      }

      // 6. For Checkpoint Gate:
      if (node.type === 'checkpoint') {
        const allBranches = manifest.branchIds
          .map((bId) => manifest.nodes[bId])
          .filter(Boolean);
        const allBranchesCompleted =
          allBranches.length > 0 && allBranches.every((b) => getNodeStatus(b) === 'completed');
        return allBranchesCompleted ? 'active' : 'locked';
      }

      return 'locked';
    },
    [completedNodes, completedParts, manifest, unitId]
  );

  // Measure connector coordinates
  const [connectors, setConnectors] = useState<ConnectorDefinition[]>([]);

  const measureAnchors = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const newConnectors: ConnectorDefinition[] = [];

    // Helper to get anchor position of a node element
    const getAnchorPos = (
      nodeId: string,
      anchorType: 'top' | 'bottom' | 'header-bottom'
    ) => {
      const nodeEl = container.querySelector(
        `#node-wrapper-${nodeId}`
      ) as HTMLElement | null;
      if (!nodeEl) return null;

      const marker = nodeEl.querySelector(
        `[data-anchor="${anchorType}"][data-node-id="${nodeId}"]`
      ) as HTMLElement | null;

      if (marker) {
        const mRect = marker.getBoundingClientRect();
        return {
          x: mRect.left - containerRect.left + mRect.width / 2,
          y: mRect.top - containerRect.top + mRect.height / 2,
        };
      }

      const rect = nodeEl.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y =
        anchorType === 'top'
          ? rect.top - containerRect.top
          : rect.bottom - containerRect.top;
      return { x, y };
    };

    // 1. Root to first Branch (or Checkpoint if no branches)
    const rootId = manifest.rootNode.id;
    const rootBottom = getAnchorPos(rootId, 'bottom');

    if (manifest.branchIds.length === 0) {
      const checkpointId = manifest.checkpointNodeId;
      const checkpointTop = getAnchorPos(checkpointId, 'top');
      if (rootBottom && checkpointTop) {
        const cpNode = manifest.nodes[checkpointId];
        const cpStatus = cpNode ? getNodeStatus(cpNode) : 'locked';
        newConnectors.push({
          id: `conn-root-${checkpointId}`,
          fromId: rootId,
          toId: checkpointId,
          startX: rootBottom.x,
          startY: rootBottom.y,
          endX: checkpointTop.x,
          endY: checkpointTop.y,
          status: cpStatus === 'completed' ? 'completed' : cpStatus === 'active' ? 'active' : 'locked',
        });
      }
    } else {
      const firstBranchId = manifest.branchIds[0];
      const firstBranchTop = getAnchorPos(firstBranchId, 'top');
      if (rootBottom && firstBranchTop) {
        const branchStatus = getNodeStatus(manifest.nodes[firstBranchId]);
        const rootStatus = getNodeStatus(manifest.rootNode);

        let connectorStatus: ConnectorStatus = 'locked';
        if (rootStatus === 'completed' && branchStatus === 'completed') {
          connectorStatus = 'completed';
        } else if (branchStatus === 'active' || rootStatus === 'active') {
          connectorStatus = 'active';
        }

        newConnectors.push({
          id: `conn-root-${firstBranchId}`,
          fromId: rootId,
          toId: firstBranchId,
          startX: rootBottom.x,
          startY: rootBottom.y,
          endX: firstBranchTop.x,
          endY: firstBranchTop.y,
          status: connectorStatus,
        });
      }
    }

    // 2. Iterate through branches: internal leaf connections and inter-branch bridges
    manifest.branchIds.forEach((branchId, branchIndex) => {
      const branch = manifest.nodes[branchId];
      if (!branch) return;
      const branchStatus = getNodeStatus(branch);

      const isBranchExpanded = !!expandedNodes[branchId];
      const childLeaves = branch.childIds
        .map((id) => manifest.nodes[id])
        .filter(Boolean);

      // Connect branch header to first leaf, and sequential leaves
      if (isBranchExpanded && childLeaves.length > 0) {
        const branchHeaderAnchor = getAnchorPos(branchId, 'header-bottom');
        let prevAnchor = branchHeaderAnchor;
        let prevNodeId = branchId;

        childLeaves.forEach((leaf) => {
          const leafTop = getAnchorPos(leaf.id, 'top');
          if (prevAnchor && leafTop) {
            const leafStatus = getNodeStatus(leaf);
            let connStatus: ConnectorStatus = 'locked';
            if (leafStatus === 'completed') {
              connStatus = 'completed';
            } else if (leafStatus === 'active') {
              connStatus = 'active';
            }

            newConnectors.push({
              id: `conn-${prevNodeId}-${leaf.id}`,
              fromId: prevNodeId,
              toId: leaf.id,
              startX: prevAnchor.x,
              startY: prevAnchor.y,
              endX: leafTop.x,
              endY: leafTop.y,
              status: connStatus,
            });
          }

          const leafBottom = getAnchorPos(leaf.id, 'bottom');
          if (leafBottom) {
            prevAnchor = leafBottom;
            prevNodeId = leaf.id;
          }
        });
      }

      // Exit anchor from this branch to the next destination (next branch or checkpoint)
      let exitAnchor: { x: number; y: number } | null = null;
      let exitNodeId = branchId;

      if (isBranchExpanded && childLeaves.length > 0) {
        const lastLeaf = childLeaves[childLeaves.length - 1];
        const lastLeafBottom = getAnchorPos(lastLeaf.id, 'bottom');
        if (lastLeafBottom) {
          exitAnchor = lastLeafBottom;
          exitNodeId = lastLeaf.id;
        }
      }

      if (!exitAnchor) {
        exitAnchor = getAnchorPos(branchId, 'bottom');
        exitNodeId = branchId;
      }

      // Connect to next branch if exists
      if (branchIndex < manifest.branchIds.length - 1) {
        const nextBranchId = manifest.branchIds[branchIndex + 1];
        const nextBranch = manifest.nodes[nextBranchId];
        const nextBranchTop = getAnchorPos(nextBranchId, 'top');

        if (exitAnchor && nextBranchTop && nextBranch) {
          const nextStatus = getNodeStatus(nextBranch);
          let bridgeStatus: ConnectorStatus = 'locked';
          if (branchStatus === 'completed' && nextStatus === 'completed') {
            bridgeStatus = 'completed';
          } else if (branchStatus === 'completed' && nextStatus === 'active') {
            bridgeStatus = 'active';
          }

          newConnectors.push({
            id: `conn-${exitNodeId}-${nextBranchId}`,
            fromId: exitNodeId,
            toId: nextBranchId,
            startX: exitAnchor.x,
            startY: exitAnchor.y,
            endX: nextBranchTop.x,
            endY: nextBranchTop.y,
            status: bridgeStatus,
          });
        }
      } else {
        // Last branch connects to Checkpoint Gate
        const checkpointId = manifest.checkpointNodeId;
        const checkpointTop = getAnchorPos(checkpointId, 'top');
        const cpNode = manifest.nodes[checkpointId];

        if (exitAnchor && checkpointTop && cpNode) {
          const cpStatus = getNodeStatus(cpNode);
          let bridgeStatus: ConnectorStatus = 'locked';
          if (cpStatus === 'completed') {
            bridgeStatus = 'completed';
          } else if (cpStatus === 'active') {
            bridgeStatus = 'active';
          }

          newConnectors.push({
            id: `conn-${exitNodeId}-${checkpointId}`,
            fromId: exitNodeId,
            toId: checkpointId,
            startX: exitAnchor.x,
            startY: exitAnchor.y,
            endX: checkpointTop.x,
            endY: checkpointTop.y,
            status: bridgeStatus,
          });
        }
      }
    });

    setConnectors(newConnectors);
  }, [manifest, getNodeStatus, expandedNodes]);

  // RequestAnimationFrame debounced tracking during animations & ResizeObserver
  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 350; // matches framer motion expand transition

    const runRafLoop = (now: number) => {
      measureAnchors();
      if (now - startTime < duration) {
        animationFrameId = requestAnimationFrame(runRafLoop);
      }
    };

    animationFrameId = requestAnimationFrame(runRafLoop);

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(measureAnchors);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleWindowResize = () => {
      requestAnimationFrame(measureAnchors);
    };
    window.addEventListener('resize', handleWindowResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [expandedNodes, measureAnchors]);

  // Overall counts for Root View
  const allLeafNodes = useMemo(
    () => Object.values(manifest.nodes).filter((n) => n.type === 'leaf'),
    [manifest]
  );
  const completedLeavesCount = useMemo(
    () => allLeafNodes.filter((l) => getNodeStatus(l) === 'completed').length,
    [allLeafNodes, getNodeStatus]
  );

  const handleLeafComplete = (leafId: string) => {
    const isAlreadyCompleted = !!useGameStore.getState().completedNodes[leafId];
    if (!isAlreadyCompleted) {
      sound.playSuccessDing();
      addXp(15);
      completeNode(leafId, 100);
    }
    setActiveNode(leafId);
    onNodeSelect?.(leafId);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 overflow-x-clip ${className}`}
      data-testid="tree-down-canvas"
      data-unit-id={unitId}
    >
      {/* Dynamic SVG Bezier Connector Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {connectors.map((c) => (
          <TreeSvgConnector
            key={c.id}
            id={c.id}
            startX={c.startX}
            startY={c.startY}
            endX={c.endX}
            endY={c.endY}
            status={c.status}
          />
        ))}
      </svg>

      {/* Vertical Knowledge Tree Nodes Hierarchy (Z-Index 10) */}
      <div className="relative z-10 flex flex-col space-y-12">
        {/* Tier 0: Root Node */}
        <RootNodeView
          rootNode={manifest.rootNode}
          completedLeavesCount={completedLeavesCount}
          totalLeavesCount={allLeafNodes.length}
          status={getNodeStatus(manifest.rootNode)}
          language={effectiveLanguage}
          isExpanded={!!expandedNodes[manifest.rootNode.id]}
          onToggle={() => toggleNodeExpanded(manifest.rootNode.id)}
          onStartOrContinue={() => {
            const firstBranchId = manifest.branchIds[0];
            if (firstBranchId) {
              setExpandedNodes((prev) => ({ ...prev, [firstBranchId]: true }));
              setActiveNode(firstBranchId);
              onNodeSelect?.(firstBranchId);
            }
          }}
        />

        {/* Branch Controls Bar */}
        <div className="flex items-center justify-between px-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-200">
              {manifest.branchIds.length} Syllabus Branches
            </span>
            <span>•</span>
            <span>{allLeafNodes.length} Core Concepts</span>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              const allExpanded = manifest.branchIds.every((bId) => !!expandedNodes[bId]);
              const next: Record<string, boolean> = {
                ...expandedNodes,
                [manifest.rootNode.id]: true,
                [manifest.checkpointNodeId]: true,
              };
              manifest.branchIds.forEach((bId) => {
                next[bId] = !allExpanded;
              });
              setExpandedNodes(next);
            }}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold transition-colors cursor-pointer"
          >
            {manifest.branchIds.every((bId) => !!expandedNodes[bId])
              ? 'Collapse All Branches'
              : 'Expand All Branches'}
          </button>
        </div>

        {/* Tier 1 & Tier 2: Branches and their anchored Concept Leaves */}
        <div className="flex flex-col space-y-10">
          {manifest.branchIds.map((branchId) => {
            const branch = manifest.nodes[branchId];
            if (!branch) return null;

            const branchStatus = getNodeStatus(branch);
            const childLeaves = branch.childIds
              .map((id) => manifest.nodes[id])
              .filter(Boolean);

            const completedChildLeavesCount = childLeaves.filter(
              (l) => getNodeStatus(l) === 'completed'
            ).length;

            return (
              <BranchNodeView
                key={branch.id}
                branchNode={branch}
                status={branchStatus}
                language={effectiveLanguage}
                isExpanded={!!expandedNodes[branch.id]}
                onToggle={() => toggleNodeExpanded(branch.id)}
                completedLeavesCount={completedChildLeavesCount}
                totalLeavesCount={childLeaves.length}
              >
                {/* Concept Leaves (Depth 2) */}
                <div className="flex flex-col space-y-3">
                  {childLeaves.map((leaf) => {
                    const leafStatus = getNodeStatus(leaf);
                    const isLeafExpanded = !!expandedNodes[leaf.id];

                    return (
                      <LeafNodeView
                        key={leaf.id}
                        leafNode={leaf}
                        status={leafStatus}
                        language={effectiveLanguage}
                        isExpanded={isLeafExpanded}
                        onToggle={() => toggleNodeExpanded(leaf.id)}
                        onMarkComplete={() => handleLeafComplete(leaf.id)}
                      />
                    );
                  })}
                </div>
              </BranchNodeView>
            );
          })}
        </div>

        {/* Tier 3: Checkpoint Gate Node */}
        {manifest.nodes[manifest.checkpointNodeId] && (
          <CheckpointGateNode
            checkpointNode={manifest.nodes[manifest.checkpointNodeId]}
            unitId={unitId}
            status={getNodeStatus(manifest.nodes[manifest.checkpointNodeId])}
            language={effectiveLanguage}
            isExpanded={!!expandedNodes[manifest.checkpointNodeId]}
            onToggle={() => toggleNodeExpanded(manifest.checkpointNodeId)}
            onPassed={(scorePct, xp) => {
              onNodeSelect?.(manifest.checkpointNodeId);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default TreeDownCanvas;
