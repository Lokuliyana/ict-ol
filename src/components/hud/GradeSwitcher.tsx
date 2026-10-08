'use client';

import React from 'react';
import { useGameStore } from '@/lib/store';
import { GradeLevel } from '@/types/store';
import { sound } from '@/utils/soundEffects';

export interface GradeSwitcherProps {
  currentGrade?: GradeLevel;
  onGradeChange?: (grade: GradeLevel) => void;
  compact?: boolean;
  className?: string;
}

export function GradeSwitcher({
  currentGrade: propGrade,
  onGradeChange,
  compact = false,
  className = '',
}: GradeSwitcherProps) {
  const storeGrade = useGameStore((s) => s.grade);
  const setStoreGrade = useGameStore((s) => s.setGrade);

  const activeGrade = propGrade ?? storeGrade;

  const handleSelect = (grade: GradeLevel) => {
    if (grade === activeGrade) return;
    sound.playClick(700);
    if (onGradeChange) {
      onGradeChange(grade);
    } else {
      setStoreGrade(grade);
    }
  };

  return (
    <div
      className={`inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-inner select-none ${className}`}
      role="group"
      aria-label="Grade Switcher"
    >
      <button
        type="button"
        onClick={() => handleSelect('10')}
        className={`min-h-[38px] px-2.5 sm:px-3 py-1 rounded-xl text-xs sm:text-sm font-black transition-all ${
          activeGrade === '10'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={activeGrade === '10'}
      >
        <span className="sm:hidden font-mono font-bold">G10</span>
        <span className="hidden sm:inline">Grade 10</span>
      </button>

      <button
        type="button"
        onClick={() => handleSelect('11')}
        className={`min-h-[38px] px-2.5 sm:px-3 py-1 rounded-xl text-xs sm:text-sm font-black transition-all ${
          activeGrade === '11'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={activeGrade === '11'}
      >
        <span className="sm:hidden font-mono font-bold">G11</span>
        <span className="hidden sm:inline">Grade 11</span>
      </button>
    </div>
  );
}
