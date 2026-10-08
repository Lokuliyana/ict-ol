'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Sun, Moon, Languages, Award } from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { StreakBadge } from './StreakBadge';
import { HeartMeter } from './HeartMeter';
import { GradeSwitcher } from './GradeSwitcher';
import { XpCounter } from './XpCounter';
import { sound } from '@/utils/soundEffects';

export interface TopHudProps {
  className?: string;
  onOpenSettings?: () => void;
  onOpenHeartModal?: () => void;
}

export function TopHud({ className = '', onOpenSettings, onOpenHeartModal }: TopHudProps) {
  const streak = useGameStore((s) => s.streak);
  const badges = useGameStore((s) => s.badges);
  const colorMode = useGameStore((s) => s.colorMode);
  const toggleColorMode = useGameStore((s) => s.toggleColorMode);
  const language = useGameStore((s) => s.language);
  const setLanguage = useGameStore((s) => s.setLanguage);

  const toggleLanguage = () => {
    sound.playClick(600);
    const nextLang = language === 'si' ? 'en' : 'si';
    setLanguage(nextLang);
  };

  const handleThemeToggle = () => {
    sound.playClick(500);
    toggleColorMode();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-1 sm:gap-4">
          
          {/* Left section: App Brand + Grade Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <Link
              href="/"
              onClick={() => sound.playClick(600)}
              className="flex items-center gap-1.5 group select-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="hidden md:inline font-black text-sm lg:text-base tracking-tight text-slate-900 dark:text-white">
                ICT <span className="text-indigo-600 dark:text-indigo-400">Master</span>
              </span>
            </Link>

            <GradeSwitcher />
          </div>

          {/* Right section: Game Economy Indicators + Preferences */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Streak Badge */}
            <StreakBadge streak={streak} />

            {/* Heart Meter */}
            <HeartMeter onDepletedClick={onOpenHeartModal} />

            {/* XP Counter */}
            <XpCounter />

            {/* Badges Pill */}
            {badges.length > 0 && (
              <div
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30 font-mono"
                title={`${badges.length} Mastery Badges Earned`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{badges.length}</span>
              </div>
            )}

            {/* Quick Language Toggle Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 select-none"
              title="Toggle Sinhala / English"
              aria-label="Toggle Language"
            >
              <Languages className="w-3.5 h-3.5 text-indigo-500" />
              <span className="font-mono">{language === 'si' ? 'සිං' : 'EN'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={handleThemeToggle}
              className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={colorMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {colorMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
