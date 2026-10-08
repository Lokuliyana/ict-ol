'use client';

import React from 'react';
import { Heart, Clock, AlertTriangle } from 'lucide-react';
import { useHeartTimer } from '@/hooks/useHeartTimer';
import { sound } from '@/utils/soundEffects';

export interface HeartMeterProps {
  maxHearts?: number;
  onDepletedClick?: () => void;
  compact?: boolean;
  className?: string;
}

export function HeartMeter({
  maxHearts = 5,
  onDepletedClick,
  compact = false,
  className = '',
}: HeartMeterProps) {
  const { hearts, isMaxHearts, formattedCountdown } = useHeartTimer();

  const handleClick = () => {
    sound.playClick(650);
    if (hearts <= 0 && onDepletedClick) {
      onDepletedClick();
    }
  };

  const isDepleted = hearts <= 0;

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all cursor-pointer select-none ${
        isDepleted
          ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/40 animate-pulse shadow-sm shadow-rose-500/20'
          : 'bg-rose-50 dark:bg-rose-950/30 text-rose-500 border-rose-200 dark:border-rose-900/40 hover:border-rose-400'
      } ${className}`}
      title={
        isMaxHearts
          ? 'Hearts Full (5/5)'
          : isDepleted
          ? 'Hearts Depleted! Click to Review'
          : `Hearts: ${hearts}/${maxHearts} (+1 in ${formattedCountdown})`
      }
    >
      {/* Mobile view (< 640px) */}
      <div className="flex sm:hidden items-center gap-1">
        <Heart className={`w-4 h-4 fill-rose-500 text-rose-500 ${isDepleted ? 'animate-bounce' : ''}`} />
        <span className="font-mono font-black text-xs">
          {hearts}
          <span className="text-[10px] text-rose-400/80 font-normal">/{maxHearts}</span>
        </span>
        {!isMaxHearts && (
          <span className="text-[10px] font-mono text-rose-400 ml-0.5 font-bold">
            {formattedCountdown}
          </span>
        )}
      </div>

      {/* Tablet & Desktop view (>= 640px) */}
      <div className="hidden sm:flex items-center gap-1">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: maxHearts }).map((_, idx) => {
            const isFilled = idx < hearts;
            return (
              <Heart
                key={idx}
                className={`w-4 h-4 transition-transform ${
                  isFilled
                    ? 'fill-rose-500 text-rose-500 scale-100'
                    : 'text-slate-300 dark:text-slate-700 scale-90'
                }`}
              />
            );
          })}
        </div>

        {isMaxHearts ? (
          <span className="ml-1 text-[11px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/40 px-1.5 py-0.5 rounded-md">
            MAX
          </span>
        ) : (
          <div className="flex items-center gap-1 ml-1 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
            <Clock className="w-3 h-3 text-rose-400" />
            <span>{formattedCountdown}</span>
          </div>
        )}
      </div>
    </div>
  );
}
