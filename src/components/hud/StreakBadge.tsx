'use client';

import React from 'react';
import { Flame } from 'lucide-react';

export interface StreakBadgeProps {
  streak: number;
  compact?: boolean;
  className?: string;
}

export function StreakBadge({ streak, compact = false, className = '' }: StreakBadgeProps) {
  const isPositive = streak > 0;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all select-none ${
        isPositive
          ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border-amber-500/30 shadow-sm shadow-amber-500/10'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
      } ${className}`}
      title={`${streak} Day Study Streak`}
    >
      <Flame
        className={`w-4 h-4 transition-transform ${
          isPositive ? 'fill-amber-500 text-amber-500 animate-pulse' : 'text-slate-400'
        }`}
      />
      <span className="font-mono font-black text-xs sm:text-sm tracking-tight">
        {streak}
        <span className="hidden sm:inline font-sans font-semibold text-xs ml-1">
          {compact ? 'd' : 'Day Streak'}
        </span>
        <span className="sm:hidden font-sans font-semibold text-[11px] ml-0.5">d</span>
      </span>
    </div>
  );
}
