'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { useGameStore } from '@/lib/store';
import { OnboardingModal } from '@/components/onboarding/OnboardingModal';
import { QuestMap } from '@/components/map/QuestMap';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Compass, 
  Play, 
  Rocket, 
  Flame, 
  FileText
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export default function HomePage() {
  const grade = useGameStore((s) => s.grade);
  const setGrade = useGameStore((s) => s.setGrade);
  const streak = useGameStore((s) => s.streak);
  const onboardingCompleted = useGameStore((s) => s.onboardingCompleted);
  const getLessonMastery = useGameStore((s) => s.getLessonMastery);

  const [viewMode, setViewMode] = useState<'map' | 'curriculum'>('map');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const lessons = CURRICULUM_DATA.filter((l) => l.grade === grade);

  // Auto-open 3-step onboarding flow for first-time visitors
  useEffect(() => {
    if (!onboardingCompleted && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setIsOnboardingOpen(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [onboardingCompleted]);

  return (
    <div className="w-full">
      {/* 3-Step Zero-Friction Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 space-y-7">
        
        {/* Playful Hero Card */}
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
                <span>Sri Lankan O/L ICT Master Gamified Engine</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{streak} Day Streak</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Grade {grade} ICT Quest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-emerald-300">
                Play, Learn & Ace Your O/L Exam
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sinhala max-w-xl">
              10 සහ 11 ශ්‍රේණි සඳහා ද්විභාෂා පෙළපොත් සටහන්, අන්තර්ක්‍රියාකාරී ක්‍රීඩාමය අභියෝග, සහ 2020–2025 සාමාන්‍ය පෙළ පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(750);
                  setIsOnboardingOpen(true);
                }}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
              >
                <Rocket className="w-4 h-4 fill-slate-950" />
                <span>Switch Medium & Grade</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href={`/lesson/${grade}/${grade === '10' ? 'g10-u1' : 'g11-u1'}`}
                onClick={() => sound.playClick(600)}
                className="px-5 py-3 rounded-2xl bg-indigo-600/90 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm border border-indigo-400/40 shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Continue Journey</span>
              </Link>
            </div>
          </div>
        </div>

        {/* View Mode & Grade Switcher Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          {/* Grade Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono hidden sm:inline">
              Grade:
            </span>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs sm:text-sm font-bold">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(700);
                  setGrade('10');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  grade === '10'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 10
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick(700);
                  setGrade('11');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  grade === '11'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grade 11
              </button>
            </div>
          </div>

          {/* View Mode Switcher: Quest Map vs Curriculum Grid */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono hidden sm:inline">
              View:
            </span>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs sm:text-sm font-bold w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(650);
                  setViewMode('map');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Winding Quest Map</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick(650);
                  setViewMode('curriculum');
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'curriculum'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>All Units Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Render: Either Winding Quest Map OR Units Grid */}
        {viewMode === 'map' ? (
          <div className="py-2">
            <QuestMap />
          </div>
        ) : (
          <div id="curriculum" className="space-y-6 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Grade {grade} Curriculum Units
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                  ද්විභාෂා සටහන්, අන්තර්ක්‍රියාකාරී මෙවලම් සහ විභාග ප්‍රශ්න පත්‍ර
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {lessons.map((lesson) => {
                const mastery = getLessonMastery(lesson.id);

                return (
                  <Link
                    key={lesson.id}
                    href={`/lesson/${lesson.grade}/${lesson.id}`}
                    onClick={() => sound.playClick(600)}
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
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          Unit 0{lesson.unitNumber}
                        </span>
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
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <span className="flex items-center gap-1 font-medium">
                          <Layers className="w-3.5 h-3.5" />
                          <span>{lesson.totalSubtopics} Topics</span>
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <FileText className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{lesson.totalPastPapers} Past Papers</span>
                        </span>
                      </div>

                      {/* Mastery Progress Bar */}
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full rounded-full transition-all"
                          style={{ width: `${mastery}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                        <span>Mastery: {mastery}%</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Study Now <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
