'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useProgress, LanguageMode } from '@/context/ProgressContext';
import { 
  BookOpen, 
  Flame, 
  Award, 
  Sun, 
  Moon, 
  Printer, 
  BarChart3, 
  Languages, 
  Home
} from 'lucide-react';

interface HeaderProps {
  currentGrade?: string;
  currentLessonTitle?: string;
  currentLessonId?: string;
}

export function Header({ currentGrade, currentLessonTitle, currentLessonId }: HeaderProps) {
  const { state, setLanguageMode, toggleColorMode } = useProgress();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Breadcrumbs */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-200 dark:border-indigo-800 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/assets/clay/thumb-ict-tech.svg"
                  alt="ICT Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  O/L ICT <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">Master Prep</span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium font-sinhala">
                  ද්විභාෂා විභාග මධ්‍යස්ථානය
                </span>
              </div>
            </Link>

            {currentGrade && (
              <div className="hidden md:flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 pl-4 border-l border-slate-200 dark:border-slate-800">
                <span className="font-medium">Grade {currentGrade}</span>
                <span>/</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                  {currentLessonTitle || 'Lesson'}
                </span>
              </div>
            )}
          </div>

          {/* Center: Language Mode Switcher */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <button
              onClick={() => setLanguageMode('dual')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                state.languageMode === 'dual'
                  ? 'bg-white dark:bg-slate-750 text-indigo-700 dark:text-indigo-300 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Dual-Sync (ENG / SIN)</span>
            </button>
            <button
              onClick={() => setLanguageMode('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                state.languageMode === 'en'
                  ? 'bg-white dark:bg-slate-750 text-blue-600 dark:text-blue-300 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              English Only
            </button>
            <button
              onClick={() => setLanguageMode('si')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sinhala transition-all ${
                state.languageMode === 'si'
                  ? 'bg-white dark:bg-slate-750 text-emerald-600 dark:text-emerald-300 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              සිංහල පමණි
            </button>
          </div>

          {/* Right Action Icons: Streak, Points, Analytics, Print, Theme */}
          <div className="flex items-center space-x-2">
            
            {/* Streak & Points */}
            <div className="hidden lg:flex items-center gap-2 mr-1">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-200 dark:border-amber-800">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                <span>{state.streak} Day Streak</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-200 dark:border-indigo-800">
                <Award className="w-3.5 h-3.5 text-indigo-500" />
                <span>{state.points} XP</span>
              </div>
            </div>

            {/* Revision Sheet Link */}
            {currentLessonId && (
              <Link
                href={`/revision-sheet/${currentGrade || '10'}/${currentLessonId}`}
                title="Printable Dual-Medium Revision Sheet"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden xl:inline">PDF Notes</span>
              </Link>
            )}

            {/* Analytics */}
            <Link
              href="/analytics"
              title="Mastery & Coverage Analytics"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden xl:inline">Mastery</span>
            </Link>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleColorMode}
              title={state.colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {state.colorMode === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Home Link */}
            <Link
              href="/"
              title="Curriculum Dashboard"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Language Switcher row */}
      <div className="sm:hidden px-4 py-2 border-t border-slate-200 dark:border-slate-800 flex justify-center gap-1 bg-slate-50 dark:bg-slate-900/60">
        <button
          onClick={() => setLanguageMode('dual')}
          className={`px-2.5 py-1 rounded text-xs ${
            state.languageMode === 'dual' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Dual-Sync
        </button>
        <button
          onClick={() => setLanguageMode('en')}
          className={`px-2.5 py-1 rounded text-xs ${
            state.languageMode === 'en' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguageMode('si')}
          className={`px-2.5 py-1 rounded text-xs font-sinhala ${
            state.languageMode === 'si' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          සිංහල
        </button>
      </div>
    </header>
  );
}
