'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Star, 
  ArrowRight, 
  RotateCcw, 
  Map, 
  BookOpen, 
  FileText, 
  Crown, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface PartCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  partTitleEn: string;
  partTitleSi: string;
  starsEarned?: number;
  xpEarned?: number;
  nextPartLabel?: string;
  onContinueNextPart?: () => void;
  onReplayPart?: () => void;
  grade: string;
  lessonId: string;
}

export function PartCompletionModal({
  isOpen,
  onClose,
  partTitleEn,
  partTitleSi,
  starsEarned = 3,
  xpEarned = 75,
  nextPartLabel,
  onContinueNextPart,
  onReplayPart,
  grade,
  lessonId
}: PartCompletionModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      sound.playVictoryFanfare();
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#ffffff'],
        });
      } catch {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContinue = () => {
    sound.playClick(750);
    if (onContinueNextPart) {
      onContinueNextPart();
    } else {
      onClose();
    }
  };

  const handleReplay = () => {
    sound.playClick(650);
    if (onReplayPart) {
      onReplayPart();
    } else {
      onClose();
    }
  };

  const handleBackToMap = () => {
    sound.playClick(700);
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="bg-slate-900 border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 text-slate-100 shadow-[0_0_60px_rgba(245,158,11,0.35)] relative overflow-hidden"
      >
        {/* Glow & Sparkle Backdrop */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Trophy / Crown Avatar */}
        <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-xl shadow-amber-500/40 flex items-center justify-center"
          >
            <div className="w-full h-full bg-slate-950/80 rounded-3xl flex items-center justify-center">
              <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* Celebratory Title & Part Name */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
            Quest Cleared • නියමයි!
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {partTitleEn}
          </h3>
          <p className="text-xs text-indigo-300 font-sinhala">
            {partTitleSi}
          </p>
        </div>

        {/* 3-Star Score Display */}
        <div className="flex items-center justify-center gap-2 py-1">
          {[1, 2, 3].map((starIdx) => (
            <motion.div
              key={starIdx}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15 * starIdx, type: 'spring' }}
            >
              <Star
                className={`w-9 h-9 ${
                  starIdx <= starsEarned
                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                    : 'text-slate-700'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Rewards Box (XP & Points) */}
        <div className="p-3.5 bg-black/40 rounded-2xl border border-amber-500/30 flex items-center justify-around text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">XP EARNED</span>
            <span className="text-lg font-black text-amber-400">+{xpEarned} XP</span>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div>
            <span className="text-slate-400 block text-[10px]">MASTERY STATUS</span>
            <span className="text-lg font-black text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100%
            </span>
          </div>
        </div>

        {/* Clear, Obvious Next-Step Actions (Duolingo Style) */}
        <div className="space-y-2.5 pt-2">
          {/* Primary Action: Continue to Next Part */}
          <button
            onClick={handleContinue}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm shadow-lg shadow-emerald-600/40 flex items-center justify-center gap-2 transition-all active:scale-95 group"
          >
            <span>{nextPartLabel || 'Continue to Next Part ➔'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Actions Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={handleReplay}
              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Practice Again</span>
            </button>

            <button
              onClick={handleBackToMap}
              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Map className="w-3.5 h-3.5 text-indigo-400" />
              <span>Quest Map</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
