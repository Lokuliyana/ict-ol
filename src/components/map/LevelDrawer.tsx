'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Star,
  Play,
  RotateCcw,
  Zap,
  CheckCircle2,
  Lock,
  Crown,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { useQuizGate } from '@/hooks/useQuizGate';
import { sound } from '@/utils/soundEffects';

export interface LevelDrawerData {
  id: string;
  unitId: string;
  unitNumber: number;
  unitTitleEn: string;
  unitTitleSi: string;
  titleEn: string;
  titleSi: string;
  isBoss: boolean;
  stars: number;
  highAccuracy: number;
  xpReward: number;
  isCleared: boolean;
  isActive: boolean;
  sandboxName?: string;
  bulletPoints?: string[];
}

export interface LevelDrawerProps {
  isOpen: boolean;
  node: LevelDrawerData | null;
  grade: '10' | '11';
  onClose: () => void;
  onDepletedHearts?: () => void;
}

export function LevelDrawer({
  isOpen,
  node,
  grade,
  onClose,
  onDepletedHearts,
}: LevelDrawerProps) {
  const router = useRouter();
  const { canEnterQuiz } = useQuizGate();
  const [showDepletedNotice, setShowDepletedNotice] = useState(false);

  if (!isOpen || !node) return null;

  const handleStartLesson = () => {
    sound.playClick(750);
    onClose();
    router.push(`/study/${node.id}`);
  };

  const handleStartQuiz = () => {
    if (!canEnterQuiz) {
      sound.playBuzzer();
      if (onDepletedHearts) {
        onDepletedHearts();
      } else {
        setShowDepletedNotice(true);
      }
      return;
    }
    sound.playClick(750);
    onClose();
    router.push(`/quiz/${node.id}`);
  };

  const handlePracticeSandbox = () => {
    sound.playClick(700);
    onClose();
    router.push(`/study/${node.id}?sandbox=true`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border-t-2 sm:border-2 border-indigo-500/40 shadow-2xl p-5 sm:p-6 max-h-[88vh] overflow-y-auto space-y-5"
      >
        {/* Top Drag Handle (Mobile affordance) */}
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto sm:hidden" />

        {/* Header Zone: Unit Badge + Close Button */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            {node.isBoss ? (
              <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            ) : (
              <Layers className="w-3.5 h-3.5" />
            )}
            <span>Unit {node.unitNumber.toString().padStart(2, '0')} • {node.unitTitleEn}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              onClose();
            }}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Bilingual Info */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
            {node.titleEn}
          </h2>
          <p className="text-sm font-sinhala text-slate-500 dark:text-slate-400 font-medium">
            {node.titleSi}
          </p>
        </div>

        {/* Mastery, Stars & XP Bar */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                className={`w-5 h-5 ${
                  s <= node.stars
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              />
            ))}
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 ml-1">
              {node.stars > 0 ? `${node.stars}/3 Stars` : 'Unearned'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {node.highAccuracy > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs">
                {node.highAccuracy}% High Score
              </span>
            )}
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs">
              <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              +{node.xpReward} XP
            </span>
          </div>
        </div>

        {/* Interactive Sandbox Highlight (if applicable) */}
        {node.sandboxName && (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent border border-cyan-500/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <span className="text-xs font-black uppercase text-cyan-700 dark:text-cyan-300 tracking-wider">
                Interactive Engineering Lab
              </span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {node.sandboxName}
              </p>
            </div>
          </div>
        )}

        {/* What You'll Learn Preview */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            Key Objectives & Theory:
          </span>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
            {node.bulletPoints && node.bulletPoints.length > 0 ? (
              node.bulletPoints.map((bp, i) => <li key={i}>{bp}</li>)
            ) : (
              <>
                <li>Core syllabus principles and real-world examples</li>
                <li>G.C.E. O/L past paper style questions and marking schemes</li>
                <li>Interactive checkpoints with immediate verification</li>
              </>
            )}
          </ul>
        </div>

        {/* Depleted hearts warning notice if triggered */}
        {showDepletedNotice && (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-2">
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
              💔 You have 0 hearts left! / හදවත් 0ක් ඉතිරිව ඇත!
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Review flashcards to study without heart deductions, or wait for recharge.
            </p>
            <button
              type="button"
              onClick={handleStartLesson}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors"
            >
              Start Study / පාඩම අරඹන්න
            </button>
          </div>
        )}

        {/* Pinned Bottom Thumb-Zone CTAs (>= 48px hit area) */}
        <div className="space-y-2.5 pt-2">
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={handleStartLesson}
            className="w-full flex items-center justify-center gap-2.5 min-h-[52px] sm:min-h-[56px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-black text-sm sm:text-base shadow-xl shadow-indigo-600/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            {node.isCleared ? (
              <>
                <RotateCcw className="w-5 h-5 stroke-[2.5]" />
                <span>Start Study / පාඩම අරඹන්න</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-white stroke-[2.5]" />
                <span>Start Study / පාඩම අරඹන්න</span>
              </>
            )}
          </button>

          {/* Secondary Action Button: Jump to Quiz */}
          <button
            type="button"
            onClick={handleStartQuiz}
            className="w-full flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span>
              {node.isBoss ? 'Enter Boss Past Paper Arena' : 'Jump to Quiz / පරීක්ෂණය'}
            </span>
          </button>

          {/* Practice Sandbox Button (when sandboxName is defined) */}
          {node.sandboxName && (
            <button
              type="button"
              onClick={handlePracticeSandbox}
              className="w-full flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-bold text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Practice Sandbox</span>
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
