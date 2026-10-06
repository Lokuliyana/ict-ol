'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LESSON_01_DATA } from '@/data/lesson01Data';
import { ALL_LESSONS_DATA } from '@/data/allLessonsData';
import { PAST_PAPER_QUESTIONS } from '@/data/pastPapersData';

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
    let blockIds: string[] = [];
    let questionIds: string[] = [];

    if (lessonId === 'g10-u1') {
      LESSON_01_DATA.subtopics.forEach(st => st.blocks.forEach(b => blockIds.push(b.id)));
      questionIds = PAST_PAPER_QUESTIONS.map(q => q.id);
    } else if (ALL_LESSONS_DATA[lessonId]) {
      const data = ALL_LESSONS_DATA[lessonId];
      data.subtopics.forEach(st => st.blocks.forEach(b => blockIds.push(b.id)));
      questionIds = data.pastPaperQuestions.map(q => q.id);
    }

    if (blockIds.length === 0) return 0;

    const readBlocksCount = blockIds.filter(id => state.completedBlocks.includes(id)).length;
    const readRatio = readBlocksCount / blockIds.length;

    const answeredQuestions = questionIds.filter(id => state.pastPaperAnswers[id]);
    const correctQuestions = answeredQuestions.filter(id => state.pastPaperAnswers[id]?.isCorrect);
    const quizRatio = questionIds.length > 0 
      ? (answeredQuestions.length > 0 ? (correctQuestions.length / questionIds.length) : 0)
      : 1;

    const score = Math.round((readRatio * 0.5 + quizRatio * 0.5) * 100);
    return Math.min(100, Math.max(0, score));
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
