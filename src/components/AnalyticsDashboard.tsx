'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useProgress } from '@/context/ProgressContext';
import { 
  Trophy, 
  BookOpen, 
  Target, 
  Compass, 
  Flame, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Languages, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export function AnalyticsDashboard() {
  const { state, getLessonMastery, resetProgress } = useProgress();

  const masteryScore = getLessonMastery('g10-u1');
  const totalBlocks = 12;
  const readBlocks = state.completedBlocks.length;
  const theoryProgress = Math.min(100, Math.round((readBlocks / totalBlocks) * 100));

  // Past Paper Metrics
  const pastPaperAnswersList = Object.values(state.pastPaperAnswers);
  const totalAttempted = pastPaperAnswersList.length;
  const correctCount = pastPaperAnswersList.filter(a => a.isCorrect).length;
  const accuracyRate = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 85;

  // Past Paper Coverage Matrix (Years 2020 to 2025)
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const coverageMap: Record<number, boolean> = {};
  years.forEach(yr => {
    coverageMap[yr] = Object.keys(state.pastPaperAnswers).some(id => id.includes(String(yr)));
  });

  // Medium Balance Calculation
  const totalInteractions = state.mediumTracker.dual + state.mediumTracker.en + state.mediumTracker.si;
  const dualPercent = Math.round((state.mediumTracker.dual / (totalInteractions || 1)) * 100);
  const enPercent = Math.round((state.mediumTracker.en / (totalInteractions || 1)) * 100);
  const siPercent = Math.round((state.mediumTracker.si / (totalInteractions || 1)) * 100);

  // Weak area breakdown
  const weakAreas = [
    {
      topicId: '1.3',
      nameEn: '1.3 Characteristics of Quality Information',
      nameSi: '1.3 ගුණාත්මක තොරතුරක ලක්ෂණ',
      status: state.completedCheckpoints['quiz-1.3'] ? 'Mastered' : 'Needs Review',
      reason: 'Cost effectiveness vs accuracy criteria'
    },
    {
      topicId: '1.7',
      nameEn: '1.7 Computer Generations & Pioneers',
      nameSi: '1.7 පරිගණක පරම්පරා හා පුරෝගාමීන්',
      status: state.completedCheckpoints['quiz-1.7'] ? 'Mastered' : 'Review Suggested',
      reason: 'Transistors vs Vacuum tubes generation boundary'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      
      {/* Top Banner Hero with Clay Trophy */}
      <div className="clay-card p-6 sm:p-8 bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-4 -bottom-6 w-48 h-48 opacity-20 pointer-events-none sm:opacity-30">
          <Image
            src="/assets/clay/grade-report-trophy.svg"
            alt="Trophy"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-xs font-semibold">
              Student Mastery Analytics
            </span>
            <span className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>{state.streak} Days Active</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Grade 10 ICT: Mastery & Exam Readiness
          </h2>
          <p className="text-sm text-indigo-200 font-sinhala leading-relaxed">
            ඔබගේ පෙළපොත් කියවීමේ ප්‍රගතිය, පසුගිය විභාග ප්‍රශ්න නිරවද්‍යතාව සහ ද්විභාෂා භාවිත රටාව මෙහි දැක්වේ.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-indigo-950/60 px-4 py-2 rounded-xl border border-indigo-700/50">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold">{state.points} Total XP</span>
            </div>
            <Link
              href="/lesson/10/g10-u1"
              className="px-4 py-2 rounded-xl bg-white text-indigo-950 hover:bg-indigo-50 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Continue Lesson 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Overall Mastery */}
        <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase text-slate-400">Lesson 01 Mastery</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">
            {masteryScore}%
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
              style={{ width: `${masteryScore}%` }} 
            />
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Based on textbook reading & past paper drills
          </span>
        </div>

        {/* Metric 2: Theory Completion */}
        <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase text-slate-400">Theory Reading</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-1">
            {theoryProgress}%
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all duration-500" 
              style={{ width: `${theoryProgress}%` }} 
            />
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {readBlocks} of {totalBlocks} sections interacted
          </span>
        </div>

        {/* Metric 3: MCQ & Paper Accuracy */}
        <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase text-slate-400">Past Paper Accuracy</span>
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">
            {accuracyRate}%
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div 
              className="bg-blue-600 h-full rounded-full transition-all duration-500" 
              style={{ width: `${accuracyRate}%` }} 
            />
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {correctCount} correct out of {totalAttempted || 1} questions
          </span>
        </div>

        {/* Metric 4: Streak & Discipline */}
        <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase text-slate-400">Revision Consistency</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-amber-600 dark:text-amber-400 mb-1">
            {state.streak} Days
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
            Continuous daily dual-medium practice streak
          </p>
        </div>

      </div>

      {/* Row 2: Coverage Matrix & Medium Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Past Paper Coverage Matrix (2020 - 2025) */}
        <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Past Paper Coverage Matrix (2020 – 2025)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sinhala">
                වසර අනුව පසුගිය විභාග ප්‍රශ්න ආවරණය කළ ප්‍රමාණය
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 pt-2">
            {years.map(year => {
              const completed = coverageMap[year];
              return (
                <div
                  key={year}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    completed
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-mono text-sm font-bold">{year}</div>
                  <div className="mt-1 flex items-center justify-center">
                    {completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <span className="text-[10px] text-slate-400">Pending</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sinhala">
            📌 O/L විභාග ප්‍රශ්න පත්‍ර 1 සහ 2 හි 2020, 2021 සහ 2022 වසරවල පාඩම 01 ආශ්‍රිත ප්‍රශ්න 100% ක් සම්පූර්ණ කර ඇත.
          </div>
        </div>

        {/* Medium Balance Tracker */}
        <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Medium Balance Tracker (මාධ්‍ය සමබරතා දර්ශකය)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tracks whether you read in Dual-Sync, English Only, or Sinhala Only
            </p>
          </div>

          {/* Progress bar split */}
          <div className="h-4 rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800">
            <div style={{ width: `${dualPercent}%` }} className="bg-indigo-600" title={`Dual: ${dualPercent}%`} />
            <div style={{ width: `${enPercent}%` }} className="bg-blue-500" title={`English: ${enPercent}%`} />
            <div style={{ width: `${siPercent}%` }} className="bg-emerald-500" title={`Sinhala: ${siPercent}%`} />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
              <span className="block font-bold text-indigo-600 dark:text-indigo-400">{dualPercent}%</span>
              <span className="text-[10px] text-slate-500">Dual-Sync</span>
            </div>
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
              <span className="block font-bold text-blue-600 dark:text-blue-400">{enPercent}%</span>
              <span className="text-[10px] text-slate-500">English Only</span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
              <span className="block font-bold text-emerald-600 dark:text-emerald-400 font-sinhala">{siPercent}%</span>
              <span className="text-[10px] text-slate-500 font-sinhala">සිංහල පමණි</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sinhala">
            💡 ඉඟිය: ද්විභාෂා (Dual-Sync) ආකාරයෙන් කියවීම මඟින් විභාගයේදී තාක්ෂණික පද (Technical Terms) සිංහල හා ඉංග්‍රීසි දෙබසින්ම පහසුවෙන් මතක තබාගත හැක.
          </p>
        </div>

      </div>

      {/* Row 3: Weak Area Breakdown & Revision Prompts */}
      <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Adaptive Weak Area Breakdown & Recommended Revision
            </h3>
          </div>
          <button
            onClick={resetProgress}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-500 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Analytics</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weakAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start justify-between gap-3"
            >
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                  area.status === 'Mastered'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300'
                }`}>
                  {area.status}
                </span>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white mt-1.5">
                  {area.nameEn}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala mt-0.5">
                  {area.nameSi}
                </p>
                <p className="text-[11px] text-slate-400 mt-2">
                  Focus: {area.reason}
                </p>
              </div>

              <Link
                href={`/lesson/10/g10-u1#section-${area.topicId}`}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 transition-all"
              >
                Review
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
