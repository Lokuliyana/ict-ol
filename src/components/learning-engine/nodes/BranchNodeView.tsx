'use client';

import React from 'react';
import { Layers, Bookmark, CheckCircle2 } from 'lucide-react';
import { SyllabusTreeNode } from '@/types/treeSyllabus';
import { TreeNodeItem, NodeStatus } from './TreeNodeItem';

export interface BranchNodeViewProps {
  branchNode: SyllabusTreeNode;
  status: NodeStatus;
  language?: 'en' | 'si' | 'dual';
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  completedLeavesCount?: number;
  totalLeavesCount?: number;
  className?: string;
}

export function BranchNodeView({
  branchNode,
  status,
  language = 'en',
  isExpanded = true,
  onToggle,
  children,
  completedLeavesCount = 0,
  totalLeavesCount,
  className = '',
}: BranchNodeViewProps) {
  const branchPayload = branchNode.branchPayload || {
    branchNumber: '1.1',
    summaryEn: '',
    summarySi: '',
    totalLeaves: 1,
  };

  const leafCount = totalLeavesCount ?? branchPayload.totalLeaves ?? (branchNode.childIds?.length || 1);
  const isBranchAllDone = leafCount > 0 && completedLeavesCount >= leafCount;

  // Language titles
  const primaryTitle = language === 'si' ? branchNode.titleSi || branchNode.titleEn : branchNode.titleEn;
  const secondaryTitle =
    language === 'dual'
      ? branchNode.titleSi
      : language === 'si'
      ? branchNode.titleEn
      : branchNode.titleSi;

  const summary =
    language === 'si'
      ? branchPayload.summarySi || branchPayload.summaryEn
      : branchPayload.summaryEn;

  return (
    <TreeNodeItem
      id={branchNode.id}
      depth={1}
      status={status}
      isExpanded={isExpanded}
      onToggle={onToggle}
      className={className}
      title={primaryTitle}
      subtitle={secondaryTitle && secondaryTitle !== primaryTitle ? secondaryTitle : undefined}
      badge={
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
            <Bookmark className="w-3 h-3 text-indigo-500" />
            {branchPayload.branchNumber}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-slate-50 text-slate-600 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <Layers className="w-3 h-3 text-slate-400" />
            {completedLeavesCount}/{leafCount} Concepts
          </span>
        </div>
      }
      headerContent={
        summary ? (
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            <p>{summary}</p>
            {language === 'dual' && branchPayload.summarySi && (
              <p className="mt-0.5 text-slate-500 dark:text-slate-500 italic">{branchPayload.summarySi}</p>
            )}
          </div>
        ) : undefined
      }
    >
      {/* Concept Leaves Anchored Beneath Subtopic */}
      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-100 dark:border-slate-800">
          <span>Branch Concepts ({leafCount})</span>
          {isBranchAllDone && (
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              All Concepts Completed
            </span>
          )}
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    </TreeNodeItem>
  );
}

export default BranchNodeView;
