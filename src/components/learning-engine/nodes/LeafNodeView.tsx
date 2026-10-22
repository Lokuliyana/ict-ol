'use client';

import React from 'react';
import { BookOpen, Lightbulb, Gamepad2, CheckCircle2 } from 'lucide-react';
import { SyllabusTreeNode } from '@/types/treeSyllabus';
import { FormattedText } from '@/components/study/FormattedText';
import { TreeNodeItem, NodeStatus } from './TreeNodeItem';
import { EmbeddedRecallCheck } from './EmbeddedRecallCheck';
import { EmbeddedTactileWidget } from './EmbeddedTactileWidget';

export interface LeafNodeViewProps {
  leafNode: SyllabusTreeNode;
  status: NodeStatus;
  language?: 'en' | 'si' | 'dual';
  isExpanded?: boolean;
  onToggle?: () => void;
  onMarkComplete?: () => void;
  className?: string;
}

export function LeafNodeView({
  leafNode,
  status,
  language = 'en',
  isExpanded = false,
  onToggle,
  onMarkComplete,
  className = '',
}: LeafNodeViewProps) {
  const leafPayload = leafNode.leafPayload;
  const theoryBite = leafPayload?.theoryBite;
  const analogy = leafPayload?.analogy;
  const tactileWidget = leafPayload?.tactileWidget;
  const activeRecall = leafPayload?.activeRecallCard;

  const primaryTitle =
    language === 'si' ? leafNode.titleSi || leafNode.titleEn : leafNode.titleEn;
  const secondaryTitle =
    language === 'dual'
      ? leafNode.titleSi
      : language === 'si'
      ? leafNode.titleEn
      : leafNode.titleSi;

  const theoryTitle =
    language === 'si' ? theoryBite?.titleSi || theoryBite?.titleEn : theoryBite?.titleEn;
  const theoryContent =
    language === 'si' ? theoryBite?.contentSi || theoryBite?.contentEn : theoryBite?.contentEn;

  const analogyText =
    language === 'si' ? analogy?.analogySi || analogy?.analogyEn : analogy?.analogyEn;

  return (
    <TreeNodeItem
      id={leafNode.id}
      depth={2}
      status={status}
      isExpanded={isExpanded}
      onToggle={onToggle}
      className={className}
      title={primaryTitle}
      subtitle={secondaryTitle && secondaryTitle !== primaryTitle ? secondaryTitle : undefined}
      badge={
        tactileWidget ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Gamepad2 className="w-3 h-3" />
            Tactile Widget
          </span>
        ) : undefined
      }
    >
      <div className="space-y-4 text-xs sm:text-sm">
        {/* Theory Bite */}
        {theoryContent && (
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            <div className="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{theoryTitle || 'Micro-Theory Bite'}</span>
            </div>
            <FormattedText
              content={theoryContent}
              className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm"
            />
          </div>
        )}

        {/* Mental Model Analogy */}
        {analogyText && (
          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 space-y-1 text-amber-900 dark:text-amber-200">
            <div className="font-bold text-xs flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Real-World Mental Model</span>
            </div>
            <p className="text-xs leading-relaxed italic">{analogyText}</p>
          </div>
        )}

        {/* Contextual Atomic Tactile Widget (Phase 4) */}
        {tactileWidget && (
          <EmbeddedTactileWidget
            config={tactileWidget}
            language={language}
          />
        )}

        {/* Embedded Active Recall Engine (Phase 3) */}
        {activeRecall ? (
          <EmbeddedRecallCheck
            nodeId={leafNode.id}
            activeRecall={activeRecall}
            language={language}
            isCompleted={status === 'completed'}
            onMastered={onMarkComplete}
          />
        ) : (
          /* Fallback Mark Complete Action Button if leaf lacks active recall */
          status !== 'completed' && onMarkComplete && (
            <div className="pt-1 flex justify-end">
              <button
                type="button"
                onClick={onMarkComplete}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Master Concept (+15 XP)</span>
              </button>
            </div>
          )
        )}
      </div>
    </TreeNodeItem>
  );
}

export default LeafNodeView;
