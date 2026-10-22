'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  CheckCircle2,
  Lock,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Trophy,
  Gamepad2,
  Lightbulb,
  Search,
  Layers,
  Bookmark,
  Volume2,
  Edit3,
  Compass,
  Check,
  CircleDot,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { SyllabusTreeNode, UnitTreeManifest } from '@/types/treeSyllabus';
import { getUnitTreeManifest } from '@/data/adapters/treeSyllabusAdapter';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { CheckpointGateNode } from './nodes/CheckpointGateNode';
import { ScratchpadModal } from '@/components/study/ScratchpadModal';
import { NodeStatus } from './nodes/TreeNodeItem';
import { ConceptStoryRunner } from './ConceptStoryRunner';

export interface MasterDetailTreeLayoutProps {
  unitId: string;
  initialManifest?: UnitTreeManifest;
  language?: 'en' | 'si' | 'dual';
  className?: string;
  onNodeSelect?: (nodeId: string) => void;
  renderPlayground?: () => React.ReactNode;
  isTreeDrawerOpen?: boolean;
  onToggleTreeDrawer?: () => void;
  onCloseTreeDrawer?: () => void;
}

export function MasterDetailTreeLayout({
  unitId,
  initialManifest,
  language: propLanguage,
  className = '',
  onNodeSelect,
  renderPlayground,
  isTreeDrawerOpen: propIsTreeDrawerOpen,
  onToggleTreeDrawer,
  onCloseTreeDrawer,
}: MasterDetailTreeLayoutProps) {
  const storeLanguage = useGameStore((s) => s.language);
  const storeLanguageMode = useGameStore((s) => s.languageMode);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const completedParts = useGameStore((s) => s.completedParts || {});
  const activeNodeId = useGameStore((s) => s.activeNodeId);
  const setActiveNode = useGameStore((s) => s.setActiveNode);
  const bookmarks = useGameStore((s) => s.bookmarks || []);
  const toggleBookmark = useGameStore((s) => s.toggleBookmark);

  const effectiveLanguage = propLanguage || storeLanguageMode || storeLanguage || 'en';

  // Manifest
  const manifest = useMemo<UnitTreeManifest>(() => {
    return initialManifest || getUnitTreeManifest(unitId);
  }, [initialManifest, unitId]);

  // Ordered list of all leaf nodes in syllabus order
  const allLeafNodes = useMemo(() => {
    const leaves: SyllabusTreeNode[] = [];
    manifest.branchIds.forEach((bId) => {
      const branch = manifest.nodes[bId];
      if (branch) {
        branch.childIds.forEach((childId) => {
          const child = manifest.nodes[childId];
          if (child && child.type === 'leaf') {
            leaves.push(child);
          }
        });
      }
    });
    return leaves;
  }, [manifest]);

  // Initial selection: first incomplete leaf, or first leaf, or root
  const [selectedNodeId, setSelectedNodeId] = useState<string>(() => {
    if (activeNodeId && manifest.nodes[activeNodeId]) {
      return activeNodeId;
    }
    const firstIncomplete = allLeafNodes.find(
      (l) => !completedNodes[l.id] && !completedParts[`${unitId}-${l.id}`]
    );
    return firstIncomplete ? firstIncomplete.id : allLeafNodes[0]?.id || manifest.rootNode.id;
  });

  // Keep selection synchronized if unitId changes
  useEffect(() => {
    const firstIncomplete = allLeafNodes.find(
      (l) => !completedNodes[l.id] && !completedParts[`${unitId}-${l.id}`]
    );
    setSelectedNodeId(firstIncomplete ? firstIncomplete.id : allLeafNodes[0]?.id || manifest.rootNode.id);
  }, [unitId, manifest, allLeafNodes, completedNodes, completedParts]);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // On-demand slide-over drawer state
  const [internalDrawerOpen, setInternalDrawerOpen] = useState(false);
  const isDrawerOpen =
    propIsTreeDrawerOpen !== undefined ? propIsTreeDrawerOpen : internalDrawerOpen;

  const handleCloseDrawer = useCallback(() => {
    if (onCloseTreeDrawer) onCloseTreeDrawer();
    setInternalDrawerOpen(false);
  }, [onCloseTreeDrawer]);

  const handleToggleDrawer = useCallback(() => {
    if (onToggleTreeDrawer) onToggleTreeDrawer();
    else setInternalDrawerOpen((prev) => !prev);
  }, [onToggleTreeDrawer]);

  // Scratchpad state
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);

  // Dedicated workbench modal state
  const [isWorkbenchOpen, setIsWorkbenchOpen] = useState(false);

  // Keyboard shortcut: Toggle tree slide-over drawer with '[' or Ctrl+B / Cmd+B, close with Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.getAttribute?.('contenteditable') === 'true')
      ) {
        return;
      }

      if (
        e.key === '[' ||
        ((e.metaKey || e.ctrlKey) && (e.key === 'b' || e.key === 'B'))
      ) {
        e.preventDefault();
        sound.playClick(600);
        handleToggleDrawer();
      } else if (e.key === 'Escape' && isDrawerOpen) {
        e.preventDefault();
        sound.playClick(500);
        handleCloseDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleToggleDrawer, handleCloseDrawer, isDrawerOpen]);

  // Expanded branches map (expanded by default)
  const [expandedBranches, setExpandedBranches] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    manifest.branchIds.forEach((bId) => {
      initial[bId] = true;
    });
    return initial;
  });

  // Toggle branch expanded
  const toggleBranch = (bId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    sound.playClick(600);
    setExpandedBranches((prev) => ({
      ...prev,
      [bId]: !prev[bId],
    }));
  };

  // Node status resolver
  const getNodeStatus = useCallback(
    (node: SyllabusTreeNode): NodeStatus => {
      if (completedNodes[node.id] || completedParts[`${unitId}-${node.id}`]) {
        return 'completed';
      }

      if (node.type === 'root') {
        const allDone =
          allLeafNodes.length > 0 &&
          allLeafNodes.every((l) => completedNodes[l.id] || completedParts[`${unitId}-${l.id}`]);
        return allDone ? 'completed' : 'active';
      }

      if (node.type === 'branch') {
        const childLeaves = node.childIds
          .map((id) => manifest.nodes[id])
          .filter((n) => n && n.type === 'leaf');
        const allDone =
          childLeaves.length > 0 &&
          childLeaves.every((l) => completedNodes[l.id] || completedParts[`${unitId}-${l.id}`]);
        return allDone ? 'completed' : 'active';
      }

      if (node.type === 'leaf') {
        return completedNodes[node.id] || completedParts[`${unitId}-${node.id}`]
          ? 'completed'
          : 'active';
      }

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
    [completedNodes, completedParts, unitId, allLeafNodes, manifest]
  );

  // Handle node selection
  const handleSelectNode = useCallback(
    (nodeId: string) => {
      sound.playClick(650);
      setSelectedNodeId(nodeId);
      setActiveNode(nodeId);
      onNodeSelect?.(nodeId);
      handleCloseDrawer();

      // Auto-expand parent branch if selecting a leaf
      const node = manifest.nodes[nodeId];
      if (node && node.parentId && manifest.nodes[node.parentId]?.type === 'branch') {
        setExpandedBranches((prev) => ({
          ...prev,
          [node.parentId!]: true,
        }));
      }
    },
    [manifest.nodes, setActiveNode, onNodeSelect, handleCloseDrawer]
  );

  // Currently selected node object
  const selectedNode = manifest.nodes[selectedNodeId] || manifest.rootNode;

  // Leaf navigation indices
  const currentLeafIndex = allLeafNodes.findIndex((l) => l.id === selectedNodeId);
  const isViewingLeaf = selectedNode?.type === 'leaf';

  const prevLeaf = isViewingLeaf && currentLeafIndex > 0 ? allLeafNodes[currentLeafIndex - 1] : null;
  const nextLeaf =
    isViewingLeaf && currentLeafIndex < allLeafNodes.length - 1
      ? allLeafNodes[currentLeafIndex + 1]
      : null;

  // Completed count for progress
  const completedLeavesCount = useMemo(() => {
    return allLeafNodes.filter((l) => getNodeStatus(l) === 'completed').length;
  }, [allLeafNodes, getNodeStatus]);

  const progressPercent = Math.min(
    100,
    allLeafNodes.length > 0 ? Math.round((completedLeavesCount / allLeafNodes.length) * 100) : 0
  );


  // Helper for bilingual title
  const getNodeTitle = (node: SyllabusTreeNode, lang: 'en' | 'si' | 'dual' = effectiveLanguage) => {
    if (lang === 'si') return node.titleSi || node.titleEn;
    return node.titleEn;
  };

  const getNodeSubtitle = (node: SyllabusTreeNode, lang: 'en' | 'si' | 'dual' = effectiveLanguage) => {
    if (lang === 'dual' && node.titleSi && node.titleSi !== node.titleEn) {
      return node.titleSi;
    }
    return undefined;
  };

  // Filtered branches based on search query
  const filteredBranchIds = useMemo(() => {
    if (!searchQuery.trim()) return manifest.branchIds;
    const q = searchQuery.toLowerCase();
    return manifest.branchIds.filter((bId) => {
      const b = manifest.nodes[bId];
      if (!b) return false;
      const bMatch =
        b.titleEn.toLowerCase().includes(q) ||
        (b.titleSi && b.titleSi.toLowerCase().includes(q)) ||
        b.branchPayload?.branchNumber.toLowerCase().includes(q);
      if (bMatch) return true;
      // Check child leaves
      return b.childIds.some((cId) => {
        const l = manifest.nodes[cId];
        return (
          l &&
          (l.titleEn.toLowerCase().includes(q) ||
            (l.titleSi && l.titleSi.toLowerCase().includes(q)) ||
            (l.leafPayload?.activeRecallCard.termEn.toLowerCase().includes(q) ?? false) ||
            (l.leafPayload?.activeRecallCard.termSi.toLowerCase().includes(q) ?? false))
        );
      });
    });
  }, [searchQuery, manifest]);

  // Content ref for smooth scroll on leaf switch
  const contentContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedNodeId]);

  // Render Tree Node List (shared between desktop sidebar and mobile drawer)
  const renderTreeList = () => (
    <>
      {/* 0. Unit Root Node */}
      <button
        type="button"
        onClick={() => handleSelectNode(manifest.rootNode.id)}
        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
          selectedNodeId === manifest.rootNode.id
            ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 shadow-2xs ring-1 ring-indigo-500/30'
            : 'bg-slate-50/70 dark:bg-slate-850/40 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-750 text-slate-800 dark:text-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-xs truncate">
              {getNodeTitle(manifest.rootNode)}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              Unit Overview & Competencies
            </div>
          </div>
        </div>
        <ChevronRight
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
            selectedNodeId === manifest.rootNode.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'
          }`}
        />
      </button>

      {/* 1. Syllabus Branches & Indented Leaves */}
      <div className="pt-0.5 space-y-1">
        {filteredBranchIds.map((branchId) => {
          const branch = manifest.nodes[branchId];
          if (!branch) return null;

          const branchStatus = getNodeStatus(branch);
          const isExpanded = !!expandedBranches[branch.id];
          const isBranchSelected = selectedNodeId === branch.id;

          const childLeaves = branch.childIds
            .map((id) => manifest.nodes[id])
            .filter((n) => n && n.type === 'leaf');

          const completedChildren = childLeaves.filter((l) => getNodeStatus(l) === 'completed').length;
          const isBranchAllDone = childLeaves.length > 0 && completedChildren >= childLeaves.length;

          return (
            <div
              key={branch.id}
              className="rounded-lg border border-slate-200/70 dark:border-slate-800/80 overflow-hidden bg-white dark:bg-slate-850/50"
            >
              {/* Branch Header Row */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectNode(branch.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectNode(branch.id);
                  }
                }}
                className={`w-full p-2 flex items-center justify-between gap-1.5 text-left transition-colors cursor-pointer ${
                  isBranchSelected
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-200'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  {/* Branch Number Badge */}
                  <span className="shrink-0 px-1.5 py-0.5 rounded font-mono text-[10px] font-black bg-slate-200 dark:bg-slate-750 text-slate-800 dark:text-slate-200">
                    {branch.branchPayload?.branchNumber || '1.0'}
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {getNodeTitle(branch)}
                    </div>
                    {effectiveLanguage === 'dual' && branch.titleSi && branch.titleSi !== branch.titleEn && (
                      <div className="text-[10px] font-sinhala text-slate-500 dark:text-slate-400 truncate">
                        {branch.titleSi}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {/* Completed Pill */}
                  {isBranchAllDone ? (
                    <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-400">
                      {completedChildren}/{childLeaves.length}
                    </span>
                  )}

                  {/* Chevron collapse trigger */}
                  <button
                    type="button"
                    onClick={(e) => toggleBranch(branch.id, e)}
                    className="p-0.5 rounded hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-400 cursor-pointer"
                    title={isExpanded ? 'Collapse' : 'Expand'}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-0' : '-rotate-90'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Indented Concept Leaves */}
              <AnimatePresence initial={false}>
                {isExpanded && childLeaves.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="pl-3 pr-1.5 pb-1.5 pt-0.5 border-t border-slate-100 dark:border-slate-800/80 space-y-0.5 bg-slate-50/40 dark:bg-slate-900/30"
                  >
                    {childLeaves.map((leaf) => {
                      const leafStatus = getNodeStatus(leaf);
                      const isLeafSelected = selectedNodeId === leaf.id;
                      const isDone = leafStatus === 'completed';
                      const hasTactile = !!leaf.leafPayload?.tactileWidget;
                      const isLeafBookmarked = bookmarks.includes(leaf.id);

                      return (
                        <button
                          key={leaf.id}
                          type="button"
                          onClick={() => handleSelectNode(leaf.id)}
                          className={`w-full text-left p-1.5 rounded-md text-xs transition-all flex items-center justify-between gap-1.5 cursor-pointer ${
                            isLeafSelected
                              ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            {/* Status Circle */}
                            <div className="shrink-0">
                              {isDone ? (
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 ${
                                    isLeafSelected ? 'text-white' : 'text-emerald-500'
                                  }`}
                                />
                              ) : (
                                <div
                                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                    isLeafSelected
                                      ? 'border-white text-white'
                                      : 'border-slate-300 dark:border-slate-650'
                                  }`}
                                >
                                  <div
                                    className={`w-1 h-1 rounded-full ${
                                      isLeafSelected ? 'bg-white' : 'bg-transparent'
                                    }`}
                                  />
                                </div>
                              )}
                            </div>

                            <div className="min-w-0">
                              <div className="truncate font-semibold">
                                {getNodeTitle(leaf)}
                              </div>
                              {effectiveLanguage === 'dual' &&
                                leaf.titleSi &&
                                leaf.titleSi !== leaf.titleEn && (
                                  <div
                                    className={`text-[10px] font-sinhala truncate ${
                                      isLeafSelected
                                        ? 'text-indigo-100'
                                        : 'text-slate-400 dark:text-slate-500'
                                    }`}
                                  >
                                    {leaf.titleSi}
                                  </div>
                                )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {hasTactile && (
                              <span
                                title="Contains Interactive Mission Lab"
                                className={`${
                                  isLeafSelected ? 'text-sky-200' : 'text-sky-500'
                                }`}
                              >
                                <Gamepad2 className="w-3 h-3" />
                              </span>
                            )}
                            {isLeafBookmarked && (
                              <span
                                title="Bookmarked"
                                className={`${
                                  isLeafSelected ? 'text-amber-200' : 'text-amber-500'
                                }`}
                              >
                                <Bookmark className="w-3 h-3 fill-current" />
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 2. Checkpoint Gate Item */}
      {manifest.nodes[manifest.checkpointNodeId] && (
        <button
          type="button"
          onClick={() => handleSelectNode(manifest.checkpointNodeId)}
          className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer mt-2 ${
            selectedNodeId === manifest.checkpointNodeId
              ? 'bg-amber-50 dark:bg-amber-950/70 border-amber-500 shadow-2xs ring-1 ring-amber-500/30 text-amber-950 dark:text-amber-200'
              : 'bg-gradient-to-r from-amber-50/40 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200/70 dark:border-amber-800/50 hover:bg-amber-100/60 dark:hover:bg-amber-900/40 text-slate-800 dark:text-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Trophy className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-xs truncate">
                {getNodeTitle(manifest.nodes[manifest.checkpointNodeId])}
              </div>
              <div className="text-[10px] text-amber-700/80 dark:text-amber-400 font-mono">
                Unit Verification Gate (+150 XP)
              </div>
            </div>
          </div>
          <ChevronRight
            className={`w-3.5 h-3.5 shrink-0 ${
              selectedNodeId === manifest.checkpointNodeId
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-400'
            }`}
          />
        </button>
      )}
    </>
  );

  return (
    <div
      className={`w-full ${className}`}
      data-testid="master-detail-tree-layout"
      data-unit-id={unitId}
    >
      {/* ============================================================== */}
      {/* UNIVERSAL ON-DEMAND SYLLABUS TREE SLIDE-OVER DRAWER           */}
      {/* ============================================================== */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={handleCloseDrawer}
        />

        {/* Drawer Sheet */}
        <aside
          inert={!isDrawerOpen ? true : undefined}
          className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl flex flex-col border-r border-slate-200 dark:border-slate-800 z-10 transition-transform duration-300 ease-out ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Syllabus Tree Navigation"
        >
          {/* Drawer Header */}
          <div className="p-3.5 border-b border-slate-100 dark:border-slate-800 space-y-2.5 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                  Syllabus Knowledge Tree
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                  {progressPercent}%
                </span>
                <button
                  type="button"
                  onClick={handleCloseDrawer}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                  aria-label="Close Tree Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter branches or concepts..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Tree Nodes List */}
          <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 select-none no-scrollbar">
            {renderTreeList()}
          </div>
        </aside>
      </div>

      {/* ============================================================== */}
      {/* 1-COLUMN CENTERED FOCUS CANVAS                                */}
      {/* ============================================================== */}
      <main
        ref={contentContainerRef}
        className="w-full max-w-[620px] mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-between px-4 py-6"
      >
        <div className="w-full flex-1 flex flex-col transition-all">
          {/* ================= VIEW: CONCEPT LEAF (MICRO-STEP CONCEPT STORY RUNNER) ================= */}
          {selectedNode.type === 'leaf' && (
            <div className="w-full">
              <ConceptStoryRunner
                unitId={unitId}
                leafNode={selectedNode}
                leafIndex={currentLeafIndex}
                totalLeaves={allLeafNodes.length}
                parentBranchTitleEn={
                  selectedNode.parentId && manifest.nodes[selectedNode.parentId]
                    ? manifest.nodes[selectedNode.parentId].titleEn
                    : undefined
                }
                parentBranchTitleSi={
                  selectedNode.parentId && manifest.nodes[selectedNode.parentId]
                    ? manifest.nodes[selectedNode.parentId].titleSi
                    : undefined
                }
                language={effectiveLanguage}
                isCompleted={getNodeStatus(selectedNode) === 'completed'}
                prevLeaf={prevLeaf}
                nextLeaf={nextLeaf}
                checkpointNodeId={manifest.checkpointNodeId}
                onSelectNode={handleSelectNode}
                onToggleTree={handleToggleDrawer}
                isTreeCollapsed={!isDrawerOpen}
                onOpenWorkbench={() => setIsWorkbenchOpen(true)}
                hasWorkbenchLab={!!renderPlayground}
              />
            </div>
          )}

          {/* ================= VIEW: BRANCH OVERVIEW ================= */}
          {selectedNode.type === 'branch' && (
            <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                    <span>BRANCH {selectedNode.branchPayload?.branchNumber || '1.0'}</span>
                    <span>•</span>
                    <span>{selectedNode.childIds.length} Core Concepts</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {getNodeTitle(selectedNode)}
                  </h2>
                  {effectiveLanguage === 'dual' && selectedNode.titleSi && (
                    <p className="text-xs sm:text-sm font-sinhala text-slate-500 dark:text-slate-400 mt-0.5">
                      {selectedNode.titleSi}
                    </p>
                  )}
                </div>

                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {selectedNode.branchPayload?.branchNumber}
                </span>
              </div>

              {/* Branch Summary */}
              {selectedNode.branchPayload?.summaryEn && (
                <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
                  {effectiveLanguage !== 'si' && (
                    <p className="font-semibold leading-relaxed">
                      {selectedNode.branchPayload.summaryEn}
                    </p>
                  )}
                  {effectiveLanguage !== 'en' && selectedNode.branchPayload.summarySi && (
                    <p className="font-sinhala leading-relaxed">
                      {selectedNode.branchPayload.summarySi}
                    </p>
                  )}
                </div>
              )}

              {/* Concepts List Grid */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Branch Concepts in this Module
                </h4>

                <div className="grid grid-cols-1 gap-2">
                  {selectedNode.childIds.map((cId, idx) => {
                    const leaf = manifest.nodes[cId];
                    if (!leaf) return null;
                    const isDone = getNodeStatus(leaf) === 'completed';

                    return (
                      <button
                        key={cId}
                        type="button"
                        onClick={() => handleSelectNode(cId)}
                        className="w-full text-left p-2.5 sm:p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 bg-white dark:bg-slate-850 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 transition-all flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <div className="min-w-0">
                            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                              {getNodeTitle(leaf)}
                            </div>
                            {effectiveLanguage === 'dual' && leaf.titleSi && (
                              <div className="text-[11px] font-sinhala text-slate-500 truncate">
                                {leaf.titleSi}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isDone ? (
                            <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Mastered</span>
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                              <span>Start</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA to start first leaf */}
              {selectedNode.childIds[0] && (
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleSelectNode(selectedNode.childIds[0])}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs cursor-pointer"
                  >
                    <span>Start Branch Learning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= VIEW: CHECKPOINT GATE ================= */}
          {selectedNode.type === 'checkpoint' && (
            <div className="p-4 sm:p-5 space-y-4">
              <CheckpointGateNode
                checkpointNode={selectedNode}
                unitId={unitId}
                status={getNodeStatus(selectedNode)}
                language={effectiveLanguage}
                isExpanded={true}
                onPassed={() => {
                  sound.playVictory();
                }}
              />
            </div>
          )}

          {/* ================= VIEW: UNIT ROOT OVERVIEW ================= */}
          {selectedNode.type === 'root' && (
            <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white border border-indigo-500/30 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    GRADE {manifest.grade} • UNIT {manifest.unitNumber} LIVING SYLLABUS
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black">{getNodeTitle(selectedNode)}</h2>
                {effectiveLanguage === 'dual' && selectedNode.titleSi && (
                  <p className="text-xs sm:text-sm text-indigo-300 font-sinhala">{selectedNode.titleSi}</p>
                )}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-0.5 max-w-2xl">
                  {selectedNode.rootPayload?.overviewEn ||
                    'Comprehensive interactive syllabus coverage designed according to official National Institute of Education examination guidelines.'}
                </p>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-0.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Branches
                  </div>
                  <div className="text-base font-black text-indigo-600 dark:text-indigo-400">
                    {manifest.branchIds.length}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-0.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Core Concepts
                  </div>
                  <div className="text-base font-black text-indigo-600 dark:text-indigo-400">
                    {allLeafNodes.length}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-0.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Mastered
                  </div>
                  <div className="text-base font-black text-emerald-500">
                    {completedLeavesCount}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-0.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Mastery %
                  </div>
                  <div className="text-base font-black text-emerald-500">
                    {progressPercent}%
                  </div>
                </div>
              </div>

              {/* CTA to start learning first concept */}
              <div className="pt-1 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    const firstIncomplete = allLeafNodes.find(
                      (l) => !completedNodes[l.id] && !completedParts[`${unitId}-${l.id}`]
                    );
                    const target = firstIncomplete || allLeafNodes[0];
                    if (target) handleSelectNode(target.id);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <span>{progressPercent > 0 ? 'Continue Unit' : 'Start First Concept'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Floating Calculation Scratchpad Overlay */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />


      {/* Integrated Interactive Sandbox Workbench Modal */}
      {isWorkbenchOpen && renderPlayground && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs">
          <div className="w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                <Gamepad2 className="w-4 h-4" />
                <span>Interactive Mission Lab & Sandbox Workbench</span>
              </div>
              <button
                type="button"
                onClick={() => setIsWorkbenchOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Close Workbench"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {renderPlayground()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MasterDetailTreeLayout;
