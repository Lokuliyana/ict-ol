/**
 * src/lib/store.ts
 * Unified Persistent Zustand Game Store with backwards compatibility.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  AppState,
  AppActions,
  GameStore,
  GradeLevel,
  AppLanguage,
  LanguageMode,
  ColorMode,
} from '@/types/store';
import { computeHeartRecharge, computeDailyStreak, MAX_HEARTS } from '@/lib/heartMath';
import { LESSON_01_DATA } from '@/data/lesson01Data';
import { ALL_LESSONS_DATA } from '@/data/allLessonsData';
import { PAST_PAPER_QUESTIONS } from '@/data/pastPapersData';
import { getNextNodeId } from '@/data/levelNodes';

const STORE_STORAGE_KEY = 'ict_ol_game_store_v1';
const LEGACY_STORAGE_KEY = 'ict_ol_progress_v2';

const defaultInitialState: AppState = {
  grade: '10',
  language: 'en',
  colorMode: 'light',
  onboardingCompleted: false,
  isSidebarCollapsed: false,

  hearts: 5,
  lastHeartLossTime: null,
  nextHeartRechargeInSeconds: 0,

  streak: 3,
  lastStudyDate: new Date().toISOString().split('T')[0],
  xp: 150,
  activeNodeId: 'g10-u1-s1',
  completedNodes: {
    'g10-u1-s1': {
      stars: 3,
      highAccuracy: 100,
      completedAt: new Date().toISOString(),
      attempts: 1,
    },
  },
  unlockedUnits: ['g10-u1', 'g11-u1'],
  badges: [],

  // Legacy fields
  completedBlocks: ['b1-1'],
  completedCheckpoints: {},
  completedStations: {
    'g10-u1-s1': true,
  },
  questStars: {
    'g10-u1-s1': 3,
  },
  pastPaperAnswers: {},
  mediumTracker: {
    dual: 14,
    en: 8,
    si: 10,
  },
  userGrade: '10',
  languageMode: 'dual',
  points: 150,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...defaultInitialState,

      // === Profile Actions ===
      setGrade: (grade: GradeLevel) => {
        set((state) => {
          const currentActive = state.activeNodeId;
          const defaultNode = grade === '10' ? 'g10-u1-s1' : 'g11-u1-s1';
          const isNodeFromOtherGrade =
            (grade === '10' && currentActive.startsWith('g11-')) ||
            (grade === '11' && currentActive.startsWith('g10-'));

          return {
            grade,
            userGrade: grade,
            activeNodeId: isNodeFromOtherGrade ? defaultNode : currentActive,
          };
        });
      },

      setUserGrade: (grade: GradeLevel) => {
        get().setGrade(grade);
      },

      setLanguage: (lang: AppLanguage) => {
        set((state) => ({
          language: lang,
          languageMode: lang,
          mediumTracker: {
            ...state.mediumTracker,
            [lang]: (state.mediumTracker?.[lang] || 0) + 1,
          },
        }));
      },

      setLanguageMode: (mode: LanguageMode) => {
        set((state) => ({
          languageMode: mode,
          language: mode === 'si' ? 'si' : 'en',
          mediumTracker: {
            ...state.mediumTracker,
            [mode]: (state.mediumTracker?.[mode] || 0) + 1,
          },
        }));
      },

      toggleColorMode: () => {
        set((state) => {
          const nextMode: ColorMode = state.colorMode === 'light' ? 'dark' : 'light';
          if (typeof document !== 'undefined') {
            if (nextMode === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }
          return { colorMode: nextMode };
        });
      },

      setOnboardingCompleted: (completed: boolean) => {
        set({ onboardingCompleted: completed });
      },

      setSidebarCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => {
        set((state) => {
          const next = typeof collapsed === 'function' ? collapsed(state.isSidebarCollapsed) : collapsed;
          try {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('ict_sidebar_collapsed', String(next));
            }
          } catch {
            // ignore
          }
          return { isSidebarCollapsed: next };
        });
      },

      toggleSidebarCollapsed: () => {
        get().setSidebarCollapsed((prev) => !prev);
      },

      // === Heart Economy Actions ===
      deductHeart: () => {
        const state = get();
        if (state.hearts <= 0) {
          return false;
        }

        const now = Date.now();
        const nextHearts = Math.max(0, state.hearts - 1);
        const nextLossTime = state.lastHeartLossTime === null ? now : state.lastHeartLossTime;

        set({
          hearts: nextHearts,
          lastHeartLossTime: nextLossTime,
        });

        // Trigger immediate reconciliation calculation
        get().reconcileHearts();

        return nextHearts > 0;
      },

      restoreHearts: (amount: number = 1) => {
        const state = get();
        const nextHearts = Math.min(MAX_HEARTS, state.hearts + amount);
        const nextLossTime = nextHearts >= MAX_HEARTS ? null : state.lastHeartLossTime;

        set({
          hearts: nextHearts,
          lastHeartLossTime: nextLossTime,
        });

        get().reconcileHearts();
      },

      refillHearts: () => {
        set({
          hearts: MAX_HEARTS,
          lastHeartLossTime: null,
          nextHeartRechargeInSeconds: 0,
        });
      },

      reconcileHearts: () => {
        const state = get();
        const now = Date.now();
        const recharge = computeHeartRecharge(state.hearts, state.lastHeartLossTime, now);

        if (
          recharge.reconciledHearts !== state.hearts ||
          recharge.updatedLastHeartLossTime !== state.lastHeartLossTime ||
          recharge.secondsUntilNextHeart !== state.nextHeartRechargeInSeconds
        ) {
          set({
            hearts: recharge.reconciledHearts,
            lastHeartLossTime: recharge.updatedLastHeartLossTime,
            nextHeartRechargeInSeconds: recharge.secondsUntilNextHeart,
          });
        }

        return {
          hearts: recharge.reconciledHearts,
          secondsUntilNext: recharge.secondsUntilNextHeart,
        };
      },

      // === Progression & Reward Actions ===
      setActiveNode: (nodeId: string) => {
        set({ activeNodeId: nodeId });
      },

      completeNode: (nodeId: string, accuracy: number) => {
        const state = get();
        const currentStars = state.completedNodes[nodeId]?.stars || 0;
        let earnedStars = 0;
        if (accuracy >= 90) earnedStars = 3;
        else if (accuracy >= 70) earnedStars = 2;
        else if (accuracy >= 50) earnedStars = 1;

        const stars = Math.max(currentStars, earnedStars);
        const xpAwarded = 50 + stars * 25;

        // Daily streak update
        const today = new Date().toISOString().split('T')[0];
        const { newStreak, newStudyDate } = computeDailyStreak(state.streak, state.lastStudyDate, today);

        const updatedNodes = {
          ...state.completedNodes,
          [nodeId]: {
            stars,
            highAccuracy: Math.max(state.completedNodes[nodeId]?.highAccuracy || 0, Math.round(accuracy)),
            completedAt: new Date().toISOString(),
            attempts: (state.completedNodes[nodeId]?.attempts || 0) + 1,
          },
        };

        const updatedQuestStars = {
          ...state.questStars,
          [nodeId]: stars,
        };

        const updatedCompletedStations = {
          ...state.completedStations,
          [nodeId]: true,
        };

        const nextNode = getNextNodeId(nodeId);
        let nextActiveNodeId = state.activeNodeId;
        if (state.activeNodeId === nodeId && nextNode) {
          nextActiveNodeId = nextNode;
        }

        set({
          completedNodes: updatedNodes,
          questStars: updatedQuestStars,
          completedStations: updatedCompletedStations,
          xp: state.xp + xpAwarded,
          points: (state.points || state.xp) + xpAwarded,
          streak: newStreak,
          lastStudyDate: newStudyDate,
          activeNodeId: nextActiveNodeId,
        });

        return { stars, xpAwarded };
      },

      addXp: (amount: number) => {
        set((state) => ({
          xp: state.xp + amount,
          points: (state.points || state.xp) + amount,
        }));
      },

      unlockBadge: (badgeId: string) => {
        set((state) => {
          if (state.badges.includes(badgeId)) return state;
          return {
            badges: [...state.badges, badgeId],
            xp: state.xp + 100,
            points: (state.points || state.xp) + 100,
          };
        });
      },

      unlockUnit: (unitId: string) => {
        set((state) => {
          if (state.unlockedUnits.includes(unitId)) return state;
          return {
            unlockedUnits: [...state.unlockedUnits, unitId],
          };
        });
      },

      recordStudySession: (nodeId?: string) => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];
        const { newStreak, newStudyDate } = computeDailyStreak(state.streak, state.lastStudyDate, today);

        const updates: Partial<AppState> = {
          streak: newStreak,
          lastStudyDate: newStudyDate,
        };

        // If user was completely out of lives, reward them with +1 life for engaging in study
        if (state.hearts <= 0) {
          updates.hearts = 1;
          updates.lastHeartLossTime = Date.now();
        }

        if (nodeId) {
          updates.activeNodeId = nodeId;
        }

        set(updates);
      },

      // === Legacy Backwards Compatibility Actions ===
      markBlockRead: (blockId: string) => {
        set((prev) => {
          if (prev.completedBlocks.includes(blockId)) return prev;
          const newXp = prev.xp + 5;
          return {
            completedBlocks: [...prev.completedBlocks, blockId],
            xp: newXp,
            points: newXp,
          };
        });
      },

      markStationComplete: (stationKey: string, stars = 3) => {
        set((prev) => {
          const newStars = Math.max(prev.questStars[stationKey] || 0, stars);
          const xpBonus = stars * 15;
          return {
            completedStations: {
              ...prev.completedStations,
              [stationKey]: true,
            },
            questStars: {
              ...prev.questStars,
              [stationKey]: newStars,
            },
            completedNodes: {
              ...prev.completedNodes,
              [stationKey]: {
                stars: newStars,
                highAccuracy: 100,
                completedAt: new Date().toISOString(),
                attempts: 1,
              },
            },
            xp: prev.xp + xpBonus,
            points: (prev.points || prev.xp) + xpBonus,
          };
        });
      },

      recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => {
        set((prev) => {
          const bonus = isCorrect ? 10 : 2;
          return {
            completedCheckpoints: {
              ...prev.completedCheckpoints,
              [checkpointId]: isCorrect,
            },
            xp: prev.xp + bonus,
            points: (prev.points || prev.xp) + bonus,
          };
        });
      },

      recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => {
        set((prev) => {
          const bonus = isCorrect ? 15 : 3;
          return {
            pastPaperAnswers: {
              ...prev.pastPaperAnswers,
              [questionId]: {
                answer,
                isCorrect,
                time: new Date().toISOString(),
              },
            },
            xp: prev.xp + bonus,
            points: (prev.points || prev.xp) + bonus,
          };
        });
      },

      resetProgress: () => {
        set(defaultInitialState);
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(STORE_STORAGE_KEY);
          localStorage.removeItem(LEGACY_STORAGE_KEY);
        }
      },

      getLessonMastery: (lessonId: string) => {
        const state = get();
        let blockIds: string[] = [];
        let questionIds: string[] = [];

        if (lessonId === 'g10-u1') {
          LESSON_01_DATA.subtopics.forEach((st) => st.blocks.forEach((b) => blockIds.push(b.id)));
          questionIds = PAST_PAPER_QUESTIONS.map((q) => q.id);
        } else if (ALL_LESSONS_DATA[lessonId]) {
          const data = ALL_LESSONS_DATA[lessonId];
          data.subtopics.forEach((st) => st.blocks.forEach((b) => blockIds.push(b.id)));
          questionIds = data.pastPaperQuestions.map((q) => q.id);
        }

        if (blockIds.length === 0) return 0;

        const readBlocksCount = blockIds.filter((id) => state.completedBlocks.includes(id)).length;
        const readRatio = readBlocksCount / blockIds.length;

        const answeredQuestions = questionIds.filter((id) => state.pastPaperAnswers[id]);
        const correctQuestions = answeredQuestions.filter((id) => state.pastPaperAnswers[id]?.isCorrect);
        const quizRatio =
          questionIds.length > 0
            ? answeredQuestions.length > 0
              ? correctQuestions.length / questionIds.length
              : 0
            : 1;

        const score = Math.round((readRatio * 0.5 + quizRatio * 0.5) * 100);
        return Math.min(100, Math.max(0, score));
      },
    }),
    {
      name: STORE_STORAGE_KEY,
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return window.localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Reconcile hearts on page load / rehydration
          state.reconcileHearts();

          // Sync dark/light theme on rehydrate
          if (typeof document !== 'undefined') {
            if (state.colorMode === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }
        }
      },
    }
  )
);
