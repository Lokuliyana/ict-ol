'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/store';
import { computeHeartRecharge } from '@/lib/heartMath';

export interface UseHeartTimerResult {
  hearts: number;
  isMaxHearts: boolean;
  secondsRemaining: number;
  formattedCountdown: string;
}

export function useHeartTimer(): UseHeartTimerResult {
  const hearts = useGameStore((s) => s.hearts);
  const lastHeartLossTime = useGameStore((s) => s.lastHeartLossTime);
  const reconcileHearts = useGameStore((s) => s.reconcileHearts);

  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    return computeHeartRecharge(hearts, lastHeartLossTime).secondsUntilNextHeart;
  });

  useEffect(() => {
    if (hearts >= 5) {
      setSecondsRemaining(0);
      return;
    }

    // Run immediate check
    const initial = reconcileHearts();
    setSecondsRemaining(initial.secondsUntilNext);

    const interval = setInterval(() => {
      const { secondsUntilNext } = reconcileHearts();
      setSecondsRemaining(secondsUntilNext);
    }, 1000);

    return () => clearInterval(interval);
  }, [hearts, lastHeartLossTime, reconcileHearts]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedCountdown = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return {
    hearts,
    isMaxHearts: hearts >= 5,
    secondsRemaining,
    formattedCountdown,
  };
}
