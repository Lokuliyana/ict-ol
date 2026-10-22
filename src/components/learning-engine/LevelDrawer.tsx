'use client';

import React from 'react';
import { X, Play, Star, BookOpen, CheckCircle, Flame, Sparkles, ChevronRight } from 'lucide-react';
import { LessonMeta } from '@/data/curriculum';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';
import Link from 'next/link';

interface LevelDrawerProps {
  lesson: LessonMeta | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LevelDrawer({ lesson, isOpen, onClose }: LevelDrawerProps) {
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const getLessonMastery = useGameStore((s) => s.getLessonMastery);
  const language = useGameStore((s) => s.language);

  if (!isOpen || !lesson) return null;

  const masteryScore = getLessonMastery(lesson.id);
  const isMastered = masteryScore >= 80;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 backdrop-blur-xs animate-fade-in lg:hidden">
      <div className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 rounded-t-3xl p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto pb-safe">
        {/* Native Touch Handle Indicator */}
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-2" />

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full">
                Grade {lesson.grade} • Unit {lesson.unitNumber}
              </span>
              {isMastered && (
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Mastered
                </span>
              )}
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
              {lesson.titleEn}
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 si-optical">
              {lesson.titleSi}
            </p>
          </div>
          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mastery meter & Stats */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Unit Mastery
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-black font-mono text-indigo-600 dark:text-indigo-400">
                {masteryScore}%
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-indigo-600 dark:bg-indigo-400 h-full rounded-full transition-all"
                style={{ width: `${masteryScore}%` }}
              />
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Est. Study Time
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                {(lesson.totalSubtopics ? lesson.totalSubtopics * 4 : 25)}
              </span>
              <span className="text-xs text-slate-500">mins</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Bite-sized micro cards</p>
          </div>
        </div>

        {/* Primary CTA Button */}
        <Link
          href={`/lesson/${lesson.grade}/${lesson.id}`}
          onClick={() => {
            sound.playVictoryFanfare();
            triggerHaptic('medium');
            onClose();
          }}
          className="w-full min-touch-target py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 active:scale-95 text-white font-black text-sm transition-all shadow-xl flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>{language === 'si' ? 'පාඩම අරඹන්න' : 'Launch Unit Quest'}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
