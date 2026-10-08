'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HeartCrack, Clock, BookOpen, Map, Sparkles } from 'lucide-react';
import { useHeartTimer } from '@/hooks/useHeartTimer';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';

export interface HeartDepletionModalProps {
  isOpen: boolean;
  nodeId?: string;
  onReviewFlashcards?: () => void;
  onClose?: () => void;
}

export function HeartDepletionModal({
  isOpen,
  nodeId,
  onReviewFlashcards,
  onClose,
}: HeartDepletionModalProps) {
  const router = useRouter();
  const language = useGameStore((s) => s.language);
  const { formattedCountdown, secondsRemaining } = useHeartTimer();

  if (!isOpen) return null;

  const handleReview = () => {
    sound.playClick(650);
    if (onReviewFlashcards) {
      onReviewFlashcards();
    } else if (nodeId) {
      router.push(`/study/${nodeId}`);
    } else {
      router.push('/');
    }
  };

  const handleReturnToMap = () => {
    sound.playClick(500);
    if (onClose) {
      onClose();
    }
    router.push('/');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="heart-depletion-title"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl border-2 border-rose-500/40 shadow-2xl p-6 text-center space-y-5"
      >
        {/* Animated Broken Heart Container */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-center">
          <HeartCrack className="w-10 h-10 text-rose-500 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500" />
          </span>
        </div>

        {/* Heading & Notice */}
        <div className="space-y-1.5">
          <h2
            id="heart-depletion-title"
            className="text-xl font-black text-slate-900 dark:text-white"
          >
            {language === 'si' ? 'හදවත් අවසන්!' : 'Out of Hearts!'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {language === 'si'
              ? 'පරීක්ෂණ සඳහා අවම වශයෙන් එක් හදවතක් අවශ්‍ය වේ. ෆ්ලෑෂ් කාඩ්පත් නොමිලේ අධ්‍යයනය කළ හැක.'
              : 'You need at least 1 heart to attempt quizzes. Review flashcards with zero heart penalty while recharging.'}
          </p>
        </div>

        {/* 30-Minute Live Countdown Timer Pill */}
        <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {language === 'si' ? 'ඊළඟ හදවත' : 'Next Heart'}
            </span>
          </div>
          <span className="text-base font-black font-mono text-rose-600 dark:text-rose-400">
            {formattedCountdown}
          </span>
        </div>

        {/* Actions */}
        <div className="space-y-2.5 pt-1">
          {/* Primary CTA: Review Flashcards */}
          <button
            type="button"
            onClick={handleReview}
            className="w-full min-h-[50px] px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-black text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>
              {language === 'si' ? 'පාඩම අධ්‍යයනය කරන්න' : 'Review Flashcards'}
            </span>
          </button>

          {/* Secondary CTA: Return to Quest Map */}
          <button
            type="button"
            onClick={handleReturnToMap}
            className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Map className="w-4 h-4" />
            <span>
              {language === 'si' ? 'සිතියමට යන්න' : 'Return to Quest Map'}
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
