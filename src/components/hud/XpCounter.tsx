'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import { useGameStore } from '@/lib/store';

export interface XpCounterProps {
  xp?: number;
  compact?: boolean;
  className?: string;
}

export function XpCounter({ xp: propXp, compact = false, className = '' }: XpCounterProps) {
  const storeXp = useGameStore((s) => s.xp);
  const displayXp = propXp ?? storeXp;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/40 select-none shadow-sm shadow-indigo-500/10 ${className}`}
      title={`Total Experience: ${displayXp.toLocaleString()} XP`}
    >
      <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
      <span className="font-mono font-black text-xs sm:text-sm tracking-tight">
        {displayXp.toLocaleString()}
        <span className="font-sans font-bold text-[11px] sm:text-xs ml-1 text-indigo-400">XP</span>
      </span>
    </div>
  );
}
