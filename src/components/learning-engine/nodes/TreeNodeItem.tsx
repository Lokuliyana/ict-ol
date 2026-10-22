'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Lock, Sparkles, CircleDot } from 'lucide-react';

export type NodeStatus = 'completed' | 'active' | 'locked';

export interface TreeNodeItemProps {
  id: string;
  title: string;
  subtitle?: string;
  depth: number; // 0 = root, 1 = branch, 2 = leaf, 3 = checkpoint
  status: NodeStatus;
  isExpanded?: boolean;
  onToggle?: () => void;
  badge?: React.ReactNode;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  collapsible?: boolean;
}

export function TreeNodeItem({
  id,
  title,
  subtitle,
  depth,
  status,
  isExpanded = true,
  onToggle,
  badge,
  headerContent,
  children,
  className = '',
  onClick,
  collapsible = true,
}: TreeNodeItemProps) {
  // Depth-specific visual treatment
  const depthStyles = {
    0: {
      wrapper: 'border-2 border-indigo-400/40 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/90 via-sky-50/60 to-white dark:from-slate-900/90 dark:via-indigo-950/30 dark:to-slate-900 shadow-lg shadow-indigo-500/5',
      header: 'p-5 sm:p-6',
      title: 'text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight',
      subtitle: 'text-sm text-slate-600 dark:text-slate-400 mt-1',
    },
    1: {
      wrapper: 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md shadow-slate-200/50 dark:shadow-black/20 hover:border-indigo-300 dark:hover:border-indigo-600/50',
      header: 'p-4 sm:p-5',
      title: 'text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100',
      subtitle: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5',
    },
    2: {
      wrapper: 'border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-850 shadow-sm hover:shadow transition-all',
      header: 'p-3.5 sm:p-4',
      title: 'text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200',
      subtitle: 'text-xs text-slate-500 dark:text-slate-400 mt-0.5',
    },
    3: {
      wrapper: 'border-2 border-amber-400/50 dark:border-amber-500/40 bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 shadow-lg shadow-amber-500/10',
      header: 'p-5 sm:p-6',
      title: 'text-lg sm:text-xl font-black text-slate-900 dark:text-amber-100',
      subtitle: 'text-xs sm:text-sm text-amber-700/80 dark:text-amber-300/80 mt-1',
    },
  }[depth as 0 | 1 | 2 | 3] || {
    wrapper: 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900',
    header: 'p-4',
    title: 'text-base font-bold text-slate-900 dark:text-white',
    subtitle: 'text-xs text-slate-500 mt-1',
  };

  // Status border overrides
  const statusBorderClass =
    status === 'completed'
      ? 'ring-1 ring-emerald-500/30 border-emerald-400/40 dark:border-emerald-500/30'
      : status === 'active'
      ? 'ring-2 ring-indigo-500/30 border-indigo-500/60 dark:border-indigo-400/50'
      : 'opacity-85 dark:opacity-75 border-dashed border-slate-300 dark:border-slate-700';

  const renderStatusBadge = () => {
    switch (status) {
      case 'completed':
        return (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/50 shadow-xs"
            title="Completed"
          >
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Completed</span>
          </span>
        );
      case 'active':
        return (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-300/60 dark:border-indigo-700/60 shadow-xs animate-pulse"
            title="In Progress"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span>Active</span>
          </span>
        );
      case 'locked':
      default:
        return (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            title="Locked"
          >
            <Lock className="w-3 h-3 text-slate-500" />
            <span>Locked</span>
          </span>
        );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onToggle?.();
    }
  };

  return (
    <div
      id={`node-wrapper-${id}`}
      data-node-id={id}
      data-depth={depth}
      data-status={status}
      className={`relative rounded-2xl transition-all duration-200 ${depthStyles.wrapper} ${statusBorderClass} ${className}`}
    >
      {/* Top Anchor Marker (Hidden visually, positioned for Bezier connector measurement) */}
      <div
        data-anchor="top"
        data-node-id={id}
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 pointer-events-none opacity-0"
        aria-hidden="true"
      />

      {/* Node Header Row */}
      <div
        role={collapsible ? 'button' : undefined}
        tabIndex={collapsible ? 0 : undefined}
        aria-expanded={collapsible ? isExpanded : undefined}
        onKeyDown={handleKeyDown}
        onClick={() => {
          onClick?.();
          if (collapsible) onToggle?.();
        }}
        className={`w-full text-left flex items-start justify-between gap-3 ${depthStyles.header} ${
          collapsible ? 'cursor-pointer select-none' : ''
        }`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {renderStatusBadge()}
            {badge}
          </div>
          <h3 className={depthStyles.title}>{title}</h3>
          {subtitle && <p className={depthStyles.subtitle}>{subtitle}</p>}
          {headerContent && <div className="mt-2">{headerContent}</div>}
        </div>

        {collapsible && (
          <div className="shrink-0 pt-1">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        )}
      </div>

      {/* Header Anchor Marker (Positioned directly beneath header, before child content) */}
      <div
        data-anchor="header-bottom"
        data-node-id={id}
        className="relative w-full flex justify-center pointer-events-none opacity-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="w-2 h-2 block" />
      </div>

      {/* Expandable Content Area */}
      <AnimatePresence initial={false}>
        {isExpanded && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
          >
            <div className="p-4 sm:p-5 pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Anchor Marker */}
      <div
        data-anchor="bottom"
        data-node-id={id}
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 pointer-events-none opacity-0"
        aria-hidden="true"
      />
    </div>
  );
}

export default TreeNodeItem;
