'use client';

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useGameStore } from '@/lib/store';
import { LanguageMode, GradeLevel, NodeProgress } from '@/types/store';

export type { LanguageMode };

export interface ProgressState {
  languageMode: LanguageMode;
  userGrade: '10' | '11';
  onboardingCompleted: boolean;
  colorMode: 'light' | 'dark';
  completedBlocks: string[];
  completedCheckpoints: Record<string, boolean>;
  completedStations: Record<string, boolean>;
  questStars: Record<string, number>;
  pastPaperAnswers: Record<string, { answer: string; isCorrect: boolean; time: string }>;
  points: number;
  streak: number;
  mediumTracker: {
    dual: number;
    en: number;
    si: number;
  };
  // Extended fields for gamification
  hearts: number;
  lastHeartLossTime: number | null;
  nextHeartRechargeInSeconds: number;
  xp: number;
  grade: GradeLevel;
  language: 'en' | 'si';
  activeNodeId: string;
  completedNodes: Record<string, NodeProgress>;
  unlockedUnits: string[];
  badges: string[];
}

export interface ProgressContextType {
  state: ProgressState;
  setLanguageMode: (mode: LanguageMode) => void;
  setUserGrade: (grade: '10' | '11') => void;
  setOnboardingCompleted: (completed: boolean) => void;
  toggleColorMode: () => void;
  markBlockRead: (blockId: string) => void;
  markStationComplete: (stationKey: string, stars?: number) => void;
  recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => void;
  recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: string) => number;
  // Extended methods
  deductHeart?: () => boolean;
  restoreHearts?: (amount?: number) => void;
  refillHearts?: () => void;
  completeNode?: (nodeId: string, accuracy: number) => { stars: number; xpAwarded: number };
  setActiveNode?: (nodeId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const store = useGameStore();

  // Reconcile hearts on mount and periodically
  useEffect(() => {
    store.reconcileHearts();
    const interval = setInterval(() => {
      store.reconcileHearts();
    }, 15000); // 15-second background sweep
    return () => clearInterval(interval);
  }, [store]);

  const contextValue = useMemo<ProgressContextType>(() => {
    const state: ProgressState = {
      languageMode: store.languageMode || (store.language === 'si' ? 'si' : 'en'),
      userGrade: store.grade,
      onboardingCompleted: store.onboardingCompleted,
      colorMode: store.colorMode,
      completedBlocks: store.completedBlocks,
      completedCheckpoints: store.completedCheckpoints,
      completedStations: store.completedStations,
      questStars: store.questStars,
      pastPaperAnswers: store.pastPaperAnswers,
      points: store.xp,
      streak: store.streak,
      mediumTracker: store.mediumTracker,
      hearts: store.hearts,
      lastHeartLossTime: store.lastHeartLossTime,
      nextHeartRechargeInSeconds: store.nextHeartRechargeInSeconds,
      xp: store.xp,
      grade: store.grade,
      language: store.language,
      activeNodeId: store.activeNodeId,
      completedNodes: store.completedNodes,
      unlockedUnits: store.unlockedUnits,
      badges: store.badges,
    };

    return {
      state,
      setLanguageMode: store.setLanguageMode,
      setUserGrade: store.setUserGrade,
      setOnboardingCompleted: store.setOnboardingCompleted,
      toggleColorMode: store.toggleColorMode,
      markBlockRead: store.markBlockRead,
      markStationComplete: store.markStationComplete,
      recordCheckpointAttempt: store.recordCheckpointAttempt,
      recordPastPaperAttempt: store.recordPastPaperAttempt,
      resetProgress: store.resetProgress,
      getLessonMastery: store.getLessonMastery,
      deductHeart: store.deductHeart,
      restoreHearts: store.restoreHearts,
      refillHearts: store.refillHearts,
      completeNode: store.completeNode,
      setActiveNode: store.setActiveNode,
    };
  }, [store]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
