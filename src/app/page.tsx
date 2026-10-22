'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CURRICULUM_DATA, LessonMeta } from '@/data/curriculum';
import { useGameStore } from '@/lib/store';
import { useProgress } from '@/context/ProgressContext';
import { OnboardingModal } from '@/components/onboarding/OnboardingModal';
import { TreeDownCanvas } from '@/components/learning-engine/TreeDownCanvas';
import { DailySprintCard } from '@/components/study/DailySprintCard';
import { LevelDrawer } from '@/components/learning-engine/LevelDrawer';
import { QuestMap } from '@/components/map/QuestMap';
import {
  Sparkles,
  ArrowRight,
  Layers,
  Flame,
  Swords,
  Maximize2,
  MapPin,
  RefreshCw,
  Eye,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

export default function HomePage() {
  const grade = useGameStore((s) => s.activeGrade || s.grade || '10');
  const setGrade = useGameStore((s) => s.setGrade);
  const setActiveGrade = useGameStore((s) => s.setActiveGrade);
  const streak = useGameStore((s) => s.streak);
  const storeLanguageMode = useGameStore((s) => s.languageMode);
  const onboardingCompleted = useGameStore((s) => s.onboardingCompleted);
  const getLessonMastery = useGameStore((s) => s.getLessonMastery);
  const completedNodes = useGameStore((s) => s.completedNodes || {});

  const { state } = useProgress();
  const mode = (state.languageMode || storeLanguageMode || 'dual') as 'dual' | 'en' | 'si';

  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'quest' | 'grid'>('quest');
  const [previewLesson, setPreviewLesson] = useState<LessonMeta | null>(null);

  // Pull-to-refresh mobile gesture state (#7)
  const [pullY, setPullY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const touchStartY = React.useRef(0);
  const gradeTouchStartX = React.useRef(0);

  // Lessons for current grade
  const gradeLessons = useMemo(() => {
    return CURRICULUM_DATA.filter((l) => l.grade === grade);
  }, [grade]);

  // Selected active unit on homepage (defaults to first unit of selected grade)
  const [selectedUnitId, setSelectedUnitId] = useState<string>(() => {
    return grade === '10' ? 'g10-u1' : 'g11-u1';
  });

  // Keep selectedUnitId in sync if grade changes
  useEffect(() => {
    const isCurrentInGrade = gradeLessons.some((l) => l.id === selectedUnitId);
    if (!isCurrentInGrade && gradeLessons.length > 0) {
      setSelectedUnitId(gradeLessons[0].id);
    }
  }, [grade, gradeLessons, selectedUnitId]);

  const activeLessonMeta = useMemo(() => {
    return (
      CURRICULUM_DATA.find((l) => l.id === selectedUnitId) ||
      gradeLessons[0] ||
      CURRICULUM_DATA[0]
    );
  }, [selectedUnitId, gradeLessons]);

  // Auto-open 3-step onboarding flow for first-time visitors
  useEffect(() => {
    if (!onboardingCompleted && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setIsOnboardingOpen(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [onboardingCompleted]);

  const handleGradeChange = (newGrade: '10' | '11') => {
    sound.playClick(700);
    triggerHaptic('medium');
    setGrade(newGrade);
    setActiveGrade(newGrade);
    const firstOfGrade = newGrade === '10' ? 'g10-u1' : 'g11-u1';
    setSelectedUnitId(firstOfGrade);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (typeof window !== 'undefined' && window.scrollY <= 0) {
      touchStartY.current = e.touches[0].clientY;
    } else {
      touchStartY.current = 0;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current > 0 && typeof window !== 'undefined' && window.scrollY <= 0) {
      const delta = e.touches[0].clientY - touchStartY.current;
      if (delta > 0) {
        setPullY(Math.min(75, delta * 0.4));
      }
    }
  };

  const handleTouchEnd = () => {
    if (pullY >= 45) {
      setIsRefreshing(true);
      triggerHaptic('medium');
      sound.playPop();
      setTimeout(() => {
        setIsRefreshing(false);
        setPullY(0);
      }, 800);
    } else {
      setPullY(0);
    }
    touchStartY.current = 0;
  };

  return (
    <div
      className="w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3-Step Zero-Friction Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      {/* Pull-to-Refresh Haptic Sync Banner (#7) */}
      {(pullY > 0 || isRefreshing) && (
        <div
          className="w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/90 dark:bg-slate-900/90 border-b border-indigo-200 dark:border-indigo-800 transition-all select-none overflow-hidden"
          style={{ height: `${Math.max(38, pullY)}px` }}
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Syncing ICT O/L Progress & Hearts...' : 'Release to Sync'}</span>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 space-y-6">
        {/* Playful Hero Card: Space 1 Living Tree Announcement */}
        <div className="clay-card p-5 sm:p-7 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden shadow-2xl rounded-3xl">
          <div className="absolute -right-6 -bottom-6 w-52 h-52 opacity-20 pointer-events-none md:opacity-30">
            <Image
              src="/assets/clay/banner-student-saturn.svg"
              alt="Planet Illustration"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3.5">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/25 text-indigo-300 border border-indigo-400/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Space 1: Tree-Down Living Syllabus</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{streak} Day Streak</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Grade {grade} ICT Knowledge Tree <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-emerald-300">
                Explore, Master & Conquer O/L
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sinhala max-w-xl">
              10 සහ 11 ශ්‍රේණි සඳහා සිරස් දැනුම් වෘක්ෂය ඔස්සේ න්‍යාය, අන්තර්ක්‍රියාකාරී මෙවලම්, සක්‍රීය මතක කාඩ්පත් සහ සත්‍යාපන පරීක්ෂණ ද්වාර සම්පූර්ණ කරන්න.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center">
              <Link
                href={`/lesson/${grade}/${activeLessonMeta.id}`}
                onClick={() => sound.playClick(600)}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Enter Dedicated Lesson Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/papers?unit=${activeLessonMeta.id}`}
                onClick={() => sound.playClick(600)}
                className="px-4 py-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-amber-300 font-bold text-xs sm:text-sm border border-amber-400/30 transition-all flex items-center gap-2"
              >
                <Swords className="w-4 h-4 text-amber-400" />
                <span>Exam Arena for this Unit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Daily 5-Min Sprint Card (Anti-Burnout #10) */}
        <DailySprintCard />

        {/* Grade 10 / Grade 11 Switcher & View Mode Toggle */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          {/* Swipeable Grade Selector (#3) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono hidden sm:inline">
              Grade:
            </span>
            <div
              onTouchStart={(e) => {
                gradeTouchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - gradeTouchStartX.current;
                if (dx > 45) {
                  handleGradeChange('10');
                } else if (dx < -45) {
                  handleGradeChange('11');
                }
              }}
              className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs sm:text-sm font-bold select-none"
              title="Swipe left or right to switch grade"
            >
              <button
                type="button"
                onClick={() => handleGradeChange('10')}
                className={`px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                  grade === '10'
                    ? 'bg-indigo-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 10 (Units 1–9)
              </button>
              <button
                type="button"
                onClick={() => handleGradeChange('11')}
                className={`px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                  grade === '11'
                    ? 'bg-indigo-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 11 (Units 10–15)
              </button>
            </div>
          </div>

          {/* View Mode Toggle: Addictive Winding Quest Roadmap vs Unit Catalog Grid */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono hidden sm:inline">
              View:
            </span>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs sm:text-sm font-bold w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(650);
                  setViewMode('quest');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'quest'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Quest Roadmap</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick(650);
                  setViewMode('grid');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Unit Catalog</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Winding Duolingo-style Quest Map Journey (Default & Addictive) */}
        {viewMode === 'quest' ? (
          <div className="bg-slate-50/50 dark:bg-slate-950/40 p-4 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
            <QuestMap />
          </div>
        ) : (
          /* View Mode 3: All Units Grid Overview */
          <div id="curriculum" className="space-y-6 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Grade {grade} Curriculum Units Overview
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                  ද්විභාෂා සටහන්, අන්තර්ක්‍රියාකාරී මෙවලම් සහ විභාග ප්‍රශ්න පත්‍ර
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gradeLessons.map((lesson) => {
                const mastery = getLessonMastery(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className="group clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-all"
                  >
                    <div>
                      {/* Top Icon & Badge */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 p-2 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Image
                            src={lesson.icon}
                            alt={lesson.titleEn}
                            width={38}
                            height={38}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              sound.playClick(650);
                              setPreviewLesson(lesson);
                            }}
                            className="text-xs p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-indigo-950 text-slate-600 dark:text-slate-300 transition-colors"
                            title="Inspect Unit Preview Sheet"
                            aria-label={`Preview Unit ${lesson.unitNumber}`}
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            Unit 0{lesson.unitNumber}
                          </span>
                        </div>
                      </div>

                      {/* Bilingual Titles */}
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {lesson.titleEn}
                      </h3>
                      <h4 className="text-xs text-indigo-700 dark:text-indigo-400 font-sinhala font-medium mt-1 leading-relaxed">
                        {lesson.titleSi}
                      </h4>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {lesson.shortDescEn}
                      </p>
                    </div>

                    {/* Card Footer: Mastery & Stats */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                        <div
                          className="bg-indigo-600 h-full rounded-full transition-all"
                          style={{ width: `${mastery}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Mastery: {mastery}%</span>
                        <Link
                          href={`/lesson/${lesson.grade}/${lesson.id}`}
                          onClick={() => sound.playClick(600)}
                          className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          Open Tree <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Native LevelDrawer Preview Sheet (#4, #24) */}
        <LevelDrawer
          lesson={previewLesson}
          isOpen={!!previewLesson}
          onClose={() => setPreviewLesson(null)}
        />
      </main>
    </div>
  );
}

