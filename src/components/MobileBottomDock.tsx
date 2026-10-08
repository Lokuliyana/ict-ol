'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  BookOpen, 
  FileText, 
  BarChart2, 
  Settings, 
  Sparkles,
  Home
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { sound } from '@/utils/soundEffects';

interface MobileBottomDockProps {
  onOpenSetup?: () => void;
}

export function MobileBottomDock({ onOpenSetup }: MobileBottomDockProps) {
  const pathname = usePathname();
  const { state } = useProgress();

  const isHome = pathname === '/';
  const isAnalytics = pathname === '/analytics';
  const isLesson = pathname.startsWith('/lesson');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-around">
        {/* Journey Map */}
        <Link
          href="/"
          onClick={() => sound.playClick(650)}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
            isHome
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold scale-105'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${isHome ? 'bg-indigo-100 dark:bg-indigo-950/80' : ''}`}>
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight">Journey</span>
        </Link>

        {/* Current / All Lessons */}
        <Link
          href="/#curriculum"
          onClick={() => sound.playClick(680)}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
            isLesson
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold scale-105'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${isLesson ? 'bg-indigo-100 dark:bg-indigo-950/80' : ''}`}>
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight">Syllabus</span>
        </Link>

        {/* Quick Launch / Flow button (Center elevated) */}
        {onOpenSetup && (
          <button
            onClick={() => {
              sound.playClick(750);
              onOpenSetup();
            }}
            className="flex flex-col items-center -mt-5"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 border-2 border-white dark:border-slate-900 active:scale-95 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
              Switch
            </span>
          </button>
        )}

        {/* Analytics & Mastery */}
        <Link
          href="/analytics"
          onClick={() => sound.playClick(700)}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
            isAnalytics
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold scale-105'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${isAnalytics ? 'bg-indigo-100 dark:bg-indigo-950/80' : ''}`}>
            <BarChart2 className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight">Mastery</span>
        </Link>

        {/* Medium / Grade Quick Badge */}
        <button
          onClick={() => {
            sound.playClick(600);
            if (onOpenSetup) onOpenSetup();
          }}
          className="flex flex-col items-center gap-1 py-1 px-3 text-slate-500 dark:text-slate-400 font-medium"
        >
          <div className="p-1.5 rounded-xl">
            <Settings className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight font-mono font-bold uppercase">
            G{state.userGrade || '10'} • {state.languageMode === 'si' ? 'සිං' : state.languageMode === 'en' ? 'EN' : 'DUAL'}
          </span>
        </button>
      </div>
    </div>
  );
}
