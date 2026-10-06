'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'dual' | 'en' | 'si';

export interface ProgressState {
  languageMode: LanguageMode;
  colorMode: 'light' | 'dark';
  completedBlocks: string[];
  completedCheckpoints: Record<string, boolean>;
  pastPaperAnswers: Record<string, { answer: string; isCorrect: boolean; time: string }>;
  points: number;
  streak: number;
  mediumTracker: {
    dual: number;
    en: number;
    si: number;
  };
}

interface ProgressContextType {
  state: ProgressState;
  setLanguageMode: (mode: LanguageMode) => void;
  toggleColorMode: () => void;
  markBlockRead: (blockId: string) => void;
  recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => void;
  recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: string) => number;
}

const STORAGE_KEY = 'ict_ol_progress_v1';

const defaultState: ProgressState = {
  languageMode: 'dual',
  colorMode: 'light',
  completedBlocks: ['b1-1', 'b1-2'],
  completedCheckpoints: {},
  pastPaperAnswers: {},
  points: 120,
  streak: 3,
  mediumTracker: {
    dual: 14,
    en: 8,
    si: 10
  }
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setState(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }

    // Toggle html dark class
    if (state.colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state, isLoaded]);

  const setLanguageMode = (mode: LanguageMode) => {
    setState(prev => ({
      ...prev,
      languageMode: mode,
      mediumTracker: {
        ...prev.mediumTracker,
        [mode]: prev.mediumTracker[mode] + 1
      }
    }));
  };

  const toggleColorMode = () => {
    setState(prev => ({
      ...prev,
      colorMode: prev.colorMode === 'light' ? 'dark' : 'light'
    }));
  };

  const markBlockRead = (blockId: string) => {
    setState(prev => {
      if (prev.completedBlocks.includes(blockId)) return prev;
      return {
        ...prev,
        completedBlocks: [...prev.completedBlocks, blockId],
        points: prev.points + 5
      };
    });
  };

  const recordCheckpointAttempt = (checkpointId: string, isCorrect: boolean) => {
    setState(prev => ({
      ...prev,
      completedCheckpoints: {
        ...prev.completedCheckpoints,
        [checkpointId]: isCorrect
      },
      points: isCorrect ? prev.points + 10 : prev.points + 2
    }));
  };

  const recordPastPaperAttempt = (questionId: string, answer: string, isCorrect: boolean) => {
    setState(prev => ({
      ...prev,
      pastPaperAnswers: {
        ...prev.pastPaperAnswers,
        [questionId]: {
          answer,
          isCorrect,
          time: new Date().toISOString()
        }
      },
      points: isCorrect ? prev.points + 15 : prev.points + 3
    }));
  };

  const resetProgress = () => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getLessonMastery = (lessonId: string) => {
    // Dynamic mastery calculation based on readings and quizzes
    if (lessonId === 'g10-u1') {
      const totalBlocks = 12;
      const readCount = state.completedBlocks.length;
      const readRatio = Math.min(1, readCount / totalBlocks);

      const answeredPP = Object.keys(state.pastPaperAnswers).length;
      const correctPP = Object.values(state.pastPaperAnswers).filter(a => a.isCorrect).length;
      const ppRatio = answeredPP > 0 ? (correctPP / answeredPP) : 0.5;

      const mastery = Math.round((readRatio * 0.4 + ppRatio * 0.6) * 100);
      return Math.min(100, Math.max(10, mastery));
    }
    return 65;
  };

  return (
    <ProgressContext.Provider
      value={{
        state,
        setLanguageMode,
        toggleColorMode,
        markBlockRead,
        recordCheckpointAttempt,
        recordPastPaperAttempt,
        resetProgress,
        getLessonMastery
      }}
    >
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
