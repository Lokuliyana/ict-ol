'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Play, Lock, Crown, Star, Sparkles } from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export type NodeVisualState = 'cleared' | 'active' | 'locked' | 'boss';

export interface LevelNodeButtonProps {
  id: string;
  nodeNumber: number;
  titleEn: string;
  titleSi: string;
  state: NodeVisualState;
  stars?: number;
  xpReward?: number;
  isBoss?: boolean;
  onClick: () => void;
  className?: string;
}

export function LevelNodeButton({
  id,
  nodeNumber,
  titleEn,
  titleSi,
  state,
  stars = 0,
  xpReward = 50,
  isBoss = false,
  onClick,
  className = '',
}: LevelNodeButtonProps) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    if (state === 'locked') {
      sound.playBuzzer();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    sound.playClick(isBoss ? 750 : 650);
    onClick();
  };

  const isCleared = state === 'cleared';
  const isActive = state === 'active';
  const isLocked = state === 'locked';
  const isBossActive = state === 'boss';

  const buttonStyle = isBoss
    ? isCleared
      ? 'w-24 h-24 rounded-3xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-b-4 border-amber-700 shadow-xl shadow-amber-500/40 ring-4 ring-amber-300 text-slate-950'
      : isLocked
      ? 'w-24 h-24 rounded-3xl bg-slate-200 dark:bg-slate-800/90 border-b-4 border-slate-300 dark:border-slate-900 text-slate-400 dark:text-slate-600 cursor-not-allowed'
      : 'w-24 h-24 rounded-3xl bg-gradient-to-b from-rose-500 via-amber-500 to-red-600 border-b-4 border-red-950 shadow-2xl shadow-rose-500/40 ring-4 ring-amber-400/60'
    : isCleared
    ? 'w-20 h-20 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-b-4 border-amber-700 shadow-lg shadow-amber-500/30 text-slate-950'
    : isActive
    ? 'w-20 h-20 bg-gradient-to-b from-cyan-400 via-indigo-600 to-indigo-700 border-b-4 border-indigo-950 shadow-xl shadow-cyan-500/40 ring-4 ring-cyan-400/60'
    : 'w-20 h-20 bg-slate-200 dark:bg-slate-800/90 border-b-4 border-slate-300 dark:border-slate-900 text-slate-400 dark:text-slate-600 cursor-not-allowed';

  const renderGlyph = () => {
    if (isBoss) {
      if (isLocked) {
        return <Lock className="w-8 h-8 text-slate-400 dark:text-slate-500" />;
      }
      if (isCleared) {
        return <Crown className="w-10 h-10 fill-white text-white drop-shadow-md" />;
      }
      return <Crown className="w-10 h-10 fill-amber-300 text-amber-300 drop-shadow-md" />;
    }
    if (isCleared) {
      return <Check className="w-9 h-9 stroke-[3.5] text-white drop-shadow" />;
    }
    if (isActive) {
      return <Play className="w-8 h-8 fill-white text-white ml-1 drop-shadow" />;
    }
    return <Lock className="w-7 h-7 text-slate-400 dark:text-slate-500" />;
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Bouncing Pill for Active Node */}
      {isActive && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-4, 2, -4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute -top-8 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-black text-[10px] sm:text-xs shadow-md shadow-cyan-500/30 uppercase tracking-wider whitespace-nowrap"
        >
          <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
          <span>START HERE</span>
        </motion.div>
      )}

      {/* Pulsing Beacon Halo for Active Node */}
      {isActive && (
        <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30 pointer-events-none scale-125" />
      )}

      {/* Main Touch Button Orb */}
      <motion.button
        type="button"
        onClick={handleClick}
        animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.3 }}
        whileHover={state !== 'locked' ? { scale: 1.05 } : {}}
        whileTap={state !== 'locked' ? { scale: 0.95 } : {}}
        className={`relative z-10 flex items-center justify-center rounded-3xl transition-shadow cursor-pointer ${buttonStyle}`}
        aria-label={`${titleEn} - Status: ${state}`}
      >
        {renderGlyph()}
      </motion.button>

      {/* Arched Star Pedestal (for Cleared nodes) */}
      {isCleared && (
        <div className="relative -mt-2 z-20 flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-900/90 border border-amber-400/60 shadow-md">
          {[1, 2, 3].map((starIdx) => (
            <Star
              key={starIdx}
              className={`w-3 h-3 ${
                starIdx <= (stars || 1)
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-slate-600'
              }`}
            />
          ))}
        </div>
      )}

      {/* Bottom Node Title & XP Pill */}
      <div className="mt-2 text-center max-w-[130px] sm:max-w-[160px]">
        <div className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 line-clamp-1 leading-snug">
          {titleEn}
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 font-sinhala">
          {titleSi}
        </div>
      </div>
    </div>
  );
}
