'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Star,
  Zap,
  Flame,
  ArrowRight,
  RotateCcw,
  Map,
  CheckCircle,
  Crown,
} from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { getNextNodeId } from '@/data/levelNodes';

export interface CompletionDrawerProps {
  isOpen: boolean;
  nodeId: string;
  nodeTitleEn: string;
  nodeTitleSi: string;
  accuracy: number; // 0 to 100 percentage
  totalQuestions: number;
  correctAnswers: number;
  isBoss?: boolean;
  unlockedBadgeId?: string | null;
  onClose?: () => void;
}

export function CompletionDrawer({
  isOpen,
  nodeId,
  nodeTitleEn,
  nodeTitleSi,
  accuracy,
  totalQuestions,
  correctAnswers,
  isBoss,
  unlockedBadgeId,
  onClose,
}: CompletionDrawerProps) {
  const router = useRouter();
  const language = useGameStore((s) => s.language);
  const streak = useGameStore((s) => s.streak);

  // Exact Star calculation according to R2 specification:
  // >=90% -> 3 stars, >=70% -> 2 stars, <70% -> 1 star
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
  const xpAwarded = 50 + stars * 25;
  const nextNodeId = getNextNodeId(nodeId);

  // Confetti fanfare on open
  useEffect(() => {
    if (!isOpen) return;

    sound.playVictoryFanfare();

    try {
      // Multi-stage confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#f59e0b', '#6366f1'],
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 300);

      return () => clearTimeout(timer);
    } catch {
      // Safe fallback if canvas not available
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNextLevel = () => {
    sound.playClick(750);
    if (onClose) onClose();
    if (nextNodeId) {
      router.push(`/study/${nextNodeId}`);
    } else {
      router.push('/');
    }
  };

  const handleReviewTopic = () => {
    sound.playClick(650);
    if (onClose) onClose();
    router.push(`/study/${nodeId}`);
  };

  const handleReturnToMap = () => {
    sound.playClick(500);
    if (onClose) onClose();
    router.push('/');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-md select-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="completion-title"
    >
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        className="w-full sm:max-w-md bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border-t-2 sm:border-2 border-amber-400/50 shadow-2xl p-6 text-center space-y-5 max-h-[90vh] overflow-y-auto"
      >
        {/* Animated Trophy Banner */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-xl shadow-amber-500/30">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
          </div>
        </div>

        {/* Heading & Score */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
            {language === 'si' ? 'මට්ටම සම්පූර්ණයි!' : 'Level Cleared!'}
          </span>
          <h2
            id="completion-title"
            className="text-lg sm:text-xl font-black text-slate-900 dark:text-white line-clamp-1"
          >
            {language === 'si' ? nodeTitleSi : nodeTitleEn}
          </h2>
        </div>

        {/* 3-Star Rating Display */}
        <div className="flex items-center justify-center gap-2 py-1">
          {[1, 2, 3].map((starIdx) => (
            <motion.div
              key={starIdx}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15 * starIdx, type: 'spring' }}
            >
              <Star
                className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors drop-shadow ${
                  starIdx <= stars
                    ? 'fill-amber-400 text-amber-400 drop-shadow-md shadow-amber-500'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Boss Victory & Mastery Badge Unlock Banner */}
        {isBoss && accuracy >= 70 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-3.5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/60 text-center space-y-1 shadow-md shadow-amber-500/20"
          >
            <div className="flex items-center justify-center gap-1.5 text-amber-500 dark:text-amber-400 font-black text-xs sm:text-sm">
              <Crown className="w-4 h-4 fill-amber-400" />
              <span>
                {language === 'si'
                  ? 'ඒකකයේ ප්‍රධාන අභියෝගය ජයගන්නා ලදී! (Boss Defeated)'
                  : 'Unit Boss Defeated! Mastery Badge Unlocked!'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              +100 Bonus XP Awarded • Trophy added to Profile
            </p>
          </motion.div>
        )}

        {/* Stat Metric Cards (Accuracy, XP, Streak) */}
        <div className="grid grid-cols-3 gap-2">
          {/* Accuracy */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-[10px] font-bold uppercase text-slate-400 font-mono">
              {language === 'si' ? 'නිරවද්‍යතාව' : 'Accuracy'}
            </div>
            <div className="text-base sm:text-lg font-black text-emerald-500 mt-0.5">
              {Math.round(accuracy)}%
            </div>
            <div className="text-[9px] text-slate-400">
              {correctAnswers}/{totalQuestions} {language === 'si' ? 'හරි' : 'correct'}
            </div>
          </div>

          {/* XP Earned */}
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 font-mono flex items-center justify-center gap-0.5">
              <Zap className="w-3 h-3" />
              <span>XP</span>
            </div>
            <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">
              +{xpAwarded}
            </div>
            <div className="text-[9px] text-amber-500/80">
              {stars} {language === 'si' ? 'තරු' : 'stars'}
            </div>
          </div>

          {/* Streak */}
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center">
            <div className="text-[10px] font-bold uppercase text-rose-500 font-mono flex items-center justify-center gap-0.5">
              <Flame className="w-3 h-3" />
              <span>{language === 'si' ? 'දින' : 'Streak'}</span>
            </div>
            <div className="text-base sm:text-lg font-black text-rose-500 mt-0.5">
              {streak}
            </div>
            <div className="text-[9px] text-rose-400">
              {language === 'si' ? 'දින අඛණ්ඩව' : 'days streak'}
            </div>
          </div>
        </div>

        {/* Zero Dead-End Forward Routing Buttons (>= 48px hit areas) */}
        <div className="space-y-2 pt-2">
          {/* 1. Next Level Button */}
          <button
            type="button"
            onClick={handleNextLevel}
            className="w-full min-h-[52px] px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>{language === 'si' ? 'ඊළඟ මට්ටම ➔' : 'Next Level ➔'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* 2. Review Topic Button */}
          <button
            type="button"
            onClick={handleReviewTopic}
            className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-indigo-500" />
            <span>
              {language === 'si' ? 'නැවත පාඩම බලන්න 🔄' : 'Review Topic 🔄'}
            </span>
          </button>

          {/* 3. Return to Map Button */}
          <button
            type="button"
            onClick={handleReturnToMap}
            className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Map className="w-4 h-4" />
            <span>{language === 'si' ? 'සිතියමට යන්න 🗺️' : 'Return to Map 🗺️'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
