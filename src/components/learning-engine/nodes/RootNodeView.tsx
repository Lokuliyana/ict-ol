'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Layers, Award, Sparkles, ArrowRight } from 'lucide-react';
import { SyllabusTreeNode } from '@/types/treeSyllabus';
import { TreeNodeItem, NodeStatus } from './TreeNodeItem';

export interface RootNodeViewProps {
  rootNode: SyllabusTreeNode;
  completedLeavesCount: number;
  totalLeavesCount: number;
  status?: NodeStatus;
  language?: 'en' | 'si' | 'dual';
  isExpanded?: boolean;
  onToggle?: () => void;
  onStartOrContinue?: () => void;
  className?: string;
}

export function RootNodeView({
  rootNode,
  completedLeavesCount,
  totalLeavesCount,
  status = 'active',
  language = 'en',
  isExpanded = true,
  onToggle,
  onStartOrContinue,
  className = '',
}: RootNodeViewProps) {
  const rootPayload = rootNode.rootPayload || {
    unitNumber: 1,
    grade: '10' as const,
    overviewEn: '',
    overviewSi: '',
    totalBranches: 1,
    totalLeaves: 1,
  };

  const effectiveTotalLeaves = Math.max(1, totalLeavesCount || rootPayload.totalLeaves || 1);
  const progressPercent = Math.min(100, Math.round((completedLeavesCount / effectiveTotalLeaves) * 100));
  const estimatedMins = Math.max(20, effectiveTotalLeaves * 6);

  // Circular progress calculations
  const radius = 26;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progressPercent) / 100;

  // Bilingual text helpers
  const primaryTitle =
    language === 'si' ? rootNode.titleSi || rootNode.titleEn : rootNode.titleEn;
  const secondaryTitle =
    language === 'dual'
      ? rootNode.titleSi
      : language === 'si'
      ? rootNode.titleEn
      : rootNode.titleSi;

  const overviewText =
    language === 'si'
      ? rootPayload.overviewSi || rootPayload.overviewEn
      : rootPayload.overviewEn;

  const competencyLabel =
    language === 'si'
      ? `ශ්‍රේණිය ${rootPayload.grade} • ඒකකය ${rootPayload.unitNumber} විෂය නිර්දේශ නිපුණතාවය`
      : `Grade ${rootPayload.grade} • Unit ${rootPayload.unitNumber} Syllabus Competency`;

  return (
    <TreeNodeItem
      id={rootNode.id}
      depth={0}
      status={status}
      isExpanded={isExpanded}
      onToggle={onToggle}
      className={className}
      title={primaryTitle}
      subtitle={secondaryTitle && secondaryTitle !== primaryTitle ? secondaryTitle : undefined}
      badge={
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100/90 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          <BookOpen className="w-3.5 h-3.5" />
          Unit {rootPayload.unitNumber}
        </span>
      }
      headerContent={
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5 font-medium text-indigo-700 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>{competencyLabel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>~{estimatedMins} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>{rootPayload.totalBranches} Branches • {effectiveTotalLeaves} Concepts</span>
          </div>
        </div>
      }
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Big Idea & Competency Description */}
        <div className="flex-1 space-y-3">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <span>💡 Big Idea & Syllabus Overview</span>
            </h4>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {overviewText || 'Comprehensive living knowledge tree aligned with National Curriculum standards.'}
            </p>
          </div>

          {language === 'dual' && rootPayload.overviewSi && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-normal">
              {rootPayload.overviewSi}
            </p>
          )}

          {onStartOrContinue && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onStartOrContinue}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{progressPercent > 0 ? 'Continue Unit Tree' : 'Begin Unit Tree'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Live Circular Progress Ring */}
        <div className="shrink-0 flex items-center gap-4 bg-white/70 dark:bg-slate-900/70 p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-xs">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
              {/* Background ring */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-slate-200 dark:text-slate-800"
              />
              {/* Animated Progress ring */}
              <motion.circle
                cx="32"
                cy="32"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                strokeLinecap="round"
                className="text-emerald-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-black text-slate-900 dark:text-white">
                {progressPercent}%
              </span>
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Unit Mastery</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {completedLeavesCount} of {effectiveTotalLeaves} concepts mastered
            </div>
          </div>
        </div>
      </div>
    </TreeNodeItem>
  );
}

export default RootNodeView;
