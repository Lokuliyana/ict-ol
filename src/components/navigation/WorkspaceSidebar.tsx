'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Flame,
  Zap,
  Swords,
  Layers,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/lib/store';
import { CURRICULUM_DATA, LessonMeta } from '@/data/curriculum';
import { GradeLevel } from '@/types/store';
import { sound } from '@/utils/soundEffects';
import { getUnitTreeManifest } from '@/data/adapters/treeSyllabusAdapter';

function WorkspaceSidebarContent() {
  const rawPathname = usePathname();
  const pathname = rawPathname || '';

  // Zustand Store Selectors
  const isSidebarCollapsed = useGameStore((s) => s.isSidebarCollapsed);
  const toggleSidebarCollapsed = useGameStore((s) => s.toggleSidebarCollapsed);
  const isMobileDrawerOpen = useGameStore((s) => s.isMobileDrawerOpen);
  const setMobileDrawerOpen = useGameStore((s) => s.setMobileDrawerOpen);
  const grade = useGameStore((s) => s.activeGrade || s.grade || '10');
  const setActiveGrade = useGameStore((s) => s.setActiveGrade);
  const setGrade = useGameStore((s) => s.setGrade);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const completedParts = useGameStore((s) => s.completedParts || {});
  const streak = useGameStore((s) => s.streak);
  const xp = useGameStore((s) => s.xp);
  const language = useGameStore((s) => s.language);

  // Keyboard shortcuts: Ctrl+B / Cmd+B for rail collapse, Escape for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        sound.playClick(650);
        toggleSidebarCollapsed();
      } else if (e.key === 'Escape' && isMobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebarCollapsed, isMobileDrawerOpen, setMobileDrawerOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMobileDrawerOpen]);

  // Determine current active lesson from pathname
  const activeLessonMatch = useMemo(() => {
    const match = pathname.match(/\/(?:lesson|revision-sheet)\/([^/]+)\/([^/?]+)/);
    if (match) {
      return { grade: match[1], lessonId: match[2] };
    }
    return null;
  }, [pathname]);

  // Automatically sync grade when navigating to a lesson of another grade
  useEffect(() => {
    if (
      activeLessonMatch?.grade &&
      (activeLessonMatch.grade === '10' || activeLessonMatch.grade === '11') &&
      activeLessonMatch.grade !== grade
    ) {
      const g = activeLessonMatch.grade as GradeLevel;
      setActiveGrade(g);
      setGrade(g);
    }
  }, [activeLessonMatch?.grade, grade, setActiveGrade, setGrade]);

  // Active space detection
  const isExamSpace = pathname.startsWith('/papers');
  const isLessonSpace = pathname.startsWith('/lesson/');
  const isSyllabusSpace = !isExamSpace;

  // Grade units
  const currentGradeUnits = useMemo(() => {
    return CURRICULUM_DATA.filter((unit) => unit.grade === grade);
  }, [grade]);

  // Live Unit Progress completion percentage map (calculated from completedNodes)
  const unitProgressMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const unit of CURRICULUM_DATA) {
      try {
        const manifest = getUnitTreeManifest(unit.id);
        if (completedNodes[manifest.checkpointNodeId] || completedNodes[unit.id]) {
          map[unit.id] = 100;
          continue;
        }
        const leaves = Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
        if (leaves.length === 0) {
          map[unit.id] = 0;
          continue;
        }
        const done = leaves.filter(
          (l) => completedNodes[l.id] || completedParts[`${unit.id}-${l.id}`]
        ).length;
        map[unit.id] = Math.min(100, Math.round((done / leaves.length) * 100));
      } catch {
        map[unit.id] = 0;
      }
    }
    return map;
  }, [completedNodes, completedParts]);

  // Helper to switch grade
  const handleGradeSwitch = (targetGrade: '10' | '11') => {
    sound.playClick(700);
    setActiveGrade(targetGrade);
    setGrade(targetGrade);
  };

  // Reusable Unit List Renderer
  const renderUnitList = (onItemClick?: () => void) => {
    return (
      <div className="space-y-1.5 py-1">
        {currentGradeUnits.map((unit) => {
          const isActive = pathname === `/lesson/${unit.grade}/${unit.id}`;
          const progress = unitProgressMap[unit.id] || 0;
          const isComplete = progress >= 100;

          const displayUnitNumber = unit.grade === '11' ? unit.unitNumber + 9 : unit.unitNumber;

          return (
            <Link
              key={unit.id}
              href={`/lesson/${unit.grade}/${unit.id}`}
              onClick={() => {
                sound.playClick(600);
                onItemClick?.();
              }}
              className={`group flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                isActive
                  ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border-indigo-400 dark:border-indigo-600 text-indigo-950 dark:text-indigo-100 ring-1 ring-indigo-400/40 shadow-sm'
                  : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                {/* Unit number badge */}
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-black ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : isComplete
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {String(displayUnitNumber).padStart(2, '0')}
                </span>

                {/* Title */}
                <div className="min-w-0">
                  <span className="text-xs font-extrabold truncate block leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {language === 'si' ? unit.titleSi : unit.titleEn}
                  </span>
                  <span className="text-[10px] font-sinhala text-slate-400 dark:text-slate-500 truncate block">
                    {unit.titleSi}
                  </span>
                </div>
              </div>

              {/* Live Completion Ring */}
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                {isComplete ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <>
                    <svg className="w-7 h-7 -rotate-90 transform" viewBox="0 0 36 36" aria-hidden="true">
                      <path
                        className="text-slate-200 dark:text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500 transition-all duration-500"
                        strokeDasharray={`${progress}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-[8px] font-mono font-extrabold text-slate-600 dark:text-slate-300">
                      {progress}
                    </span>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP RAIL (>= 1024px)                                              */}
      {/* ========================================================================= */}
      {!isLessonSpace && (
        <aside
          className={`hidden lg:flex flex-col fixed top-14 left-0 bottom-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ${
            isSidebarCollapsed ? 'w-20' : 'w-80'
          }`}
          aria-label="Workspace Sidebar Navigation"
        >
        {/* Rail Top Action Bar */}
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0">
          {!isSidebarCollapsed && (
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                O/L ICT Master
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                2 Spaces
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              sound.playClick(650);
              toggleSidebarCollapsed();
            }}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors ml-auto cursor-pointer"
            title={isSidebarCollapsed ? 'Expand Sidebar (Ctrl+B)' : 'Collapse Sidebar (Ctrl+B)'}
            aria-label={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Rail Body */}
        {isSidebarCollapsed ? (
          /* Collapsed Mini Rail */
          <div className="flex-1 flex flex-col items-center justify-between py-4 space-y-4 overflow-y-auto">
            {/* 2 Spaces Icons */}
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/"
                onClick={() => sound.playClick(600)}
                className={`p-2.5 rounded-xl transition-all ${
                  isSyllabusSpace
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Space 1: Syllabus Tree"
              >
                <span className="text-lg">🌳</span>
              </Link>

              <Link
                href="/papers"
                onClick={() => sound.playClick(600)}
                className={`p-2.5 rounded-xl transition-all ${
                  isExamSpace
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Space 2: Exam Arena"
              >
                <Swords className="w-5 h-5 text-amber-500" />
              </Link>
            </div>

            {/* Grade Switch Mini */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleGradeSwitch(grade === '10' ? '11' : '10')}
                className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all"
                title={`Switch Grade (Currently G${grade})`}
              >
                G{grade}
              </button>
            </div>

            {/* Streak & XP Footer Mini */}
            <div className="flex flex-col items-center gap-2 text-xs font-mono font-bold text-slate-500">
              <div className="flex items-center gap-1" title={`${streak} Day Streak`}>
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-[10px]">{streak}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Expanded Full Rail */
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto p-3 space-y-4">
            {/* 1. SEGMENTED 2-SPACE SWITCHER */}
            <div
              className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-1 text-xs font-bold shrink-0"
              role="group"
              aria-label="2 Spaces Navigation"
            >
              <Link
                href="/"
                onClick={() => sound.playClick(600)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all text-center ${
                  isSyllabusSpace
                    ? 'bg-indigo-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🌳</span>
                <span className="truncate">Syllabus Tree</span>
              </Link>

              <Link
                href="/papers"
                onClick={() => sound.playClick(600)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all text-center ${
                  isExamSpace
                    ? 'bg-amber-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span className="truncate">Exam Arena</span>
              </Link>
            </div>

            {/* 2. GRADE 10 / GRADE 11 SWITCHER */}
            <div className="flex items-center justify-between p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold shrink-0">
              <button
                type="button"
                onClick={() => handleGradeSwitch('10')}
                className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                  grade === '10'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 10 (Units 1–9)
              </button>
              <button
                type="button"
                onClick={() => handleGradeSwitch('11')}
                className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                  grade === '11'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 11 (Units 10–15)
              </button>
            </div>

            {/* 3. CLEAN LIST OF UNITS */}
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
                Grade {grade} Syllabus Units ({currentGradeUnits.length})
              </div>
              {renderUnitList()}
            </div>

            {/* Bottom Footer Stats */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-500 shrink-0">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{streak} Day Streak</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
                <span>{xp} XP</span>
              </div>
            </div>
          </div>
        )}
      </aside>
      )}

      {/* ========================================================================= */}
      {/* 2. MOBILE OFF-CANVAS DRAWER (< 1024px or invoked on lesson routes)        */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <div className={`fixed inset-0 z-50 flex ${isLessonSpace ? '' : 'lg:hidden'}`}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-80 max-w-[85vw] bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 p-4 space-y-4"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-slate-900 dark:text-white">
                    O/L ICT Master
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    2 Spaces
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
                  aria-label="Close Mobile Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 1. SEGMENTED 2-SPACE SWITCHER */}
              <div
                className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-1 text-xs font-bold shrink-0"
                role="group"
                aria-label="2 Spaces Navigation"
              >
                <Link
                  href="/"
                  onClick={() => {
                    sound.playClick(600);
                    setMobileDrawerOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all text-center ${
                    isSyllabusSpace
                      ? 'bg-indigo-600 text-white shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span>🌳</span>
                  <span>Syllabus Tree</span>
                </Link>

                <Link
                  href="/papers"
                  onClick={() => {
                    sound.playClick(600);
                    setMobileDrawerOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl transition-all text-center ${
                    isExamSpace
                      ? 'bg-amber-600 text-white shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Swords className="w-3.5 h-3.5" />
                  <span>Exam Arena</span>
                </Link>
              </div>

              {/* 2. GRADE 10 / GRADE 11 SWITCHER */}
              <div className="flex items-center justify-between p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold shrink-0">
                <button
                  type="button"
                  onClick={() => handleGradeSwitch('10')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    grade === '10'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-black'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Grade 10 (Units 1–9)
                </button>
                <button
                  type="button"
                  onClick={() => handleGradeSwitch('11')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    grade === '11'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-black'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Grade 11 (Units 10–15)
                </button>
              </div>

              {/* 3. CLEAN LIST OF UNITS */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
                  Grade {grade} Syllabus Units ({currentGradeUnits.length})
                </div>
                {renderUnitList(() => setMobileDrawerOpen(false))}
              </div>

              {/* Bottom Footer Stats */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-500 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{streak} Day Streak</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
                  <span>{xp} XP</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WorkspaceSidebar() {
  return (
    <Suspense fallback={null}>
      <WorkspaceSidebarContent />
    </Suspense>
  );
}

export default WorkspaceSidebar;
