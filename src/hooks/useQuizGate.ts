'use client';

import { useGameStore } from '@/lib/store';

export interface UseQuizGateResult {
  hearts: number;
  isLocked: boolean;
  canEnterQuiz: boolean;
}

export function useQuizGate(): UseQuizGateResult {
  const hearts = useGameStore((s) => s.hearts);
  const isLocked = hearts <= 0;

  return {
    hearts,
    isLocked,
    canEnterQuiz: hearts > 0,
  };
}
