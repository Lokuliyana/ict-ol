/**
 * src/types/store.ts
 * Strict TypeScript types for Gamified ICT Learning Application State
 */

export type GradeLevel = '10' | '11';
export type AppLanguage = 'en' | 'si';
export type LanguageMode = 'dual' | 'en' | 'si'; // For backwards compatibility
export type ColorMode = 'light' | 'dark';

export interface NodeProgress {
  stars: number; // 0, 1, 2, or 3
  highAccuracy: number; // 0 to 100 percentage
  completedAt: string; // ISO 8601 string
  attempts?: number;
}

export interface AppState {
  // === Profile & Preferences ===
  grade: GradeLevel;
  language: AppLanguage;
  colorMode: ColorMode;
  onboardingCompleted: boolean;
  isSidebarCollapsed: boolean;

  // === Life Economy ===
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null; // Timestamp ms of current recharge cycle start; null if hearts == 5
  nextHeartRechargeInSeconds: number; // Calculated seconds remaining for live timer

  // === Gamification & Progression ===
  streak: number;
  lastStudyDate: string; // YYYY-MM-DD
  xp: number;
  activeNodeId: string;
  completedNodes: Record<string, NodeProgress>;
  unlockedUnits: string[]; // e.g. ['g10-u01', 'g10-u02']
  badges: string[]; // Boss mastery badges, e.g. ['g10-u01-boss']

  // === Legacy Compatibility Fields ===
  completedBlocks: string[];
  completedCheckpoints: Record<string, boolean>;
  completedStations: Record<string, boolean>;
  questStars: Record<string, number>;
  pastPaperAnswers: Record<string, { answer: string; isCorrect: boolean; time: string }>;
  mediumTracker: { dual: number; en: number; si: number };
  userGrade?: GradeLevel; // Alias to grade
  languageMode?: LanguageMode; // Alias to language
  points?: number; // Alias to xp
}

export interface AppActions {
  // Profile Actions
  setGrade: (grade: GradeLevel) => void;
  setUserGrade: (grade: GradeLevel) => void; // Legacy alias
  setLanguage: (lang: AppLanguage) => void;
  setLanguageMode: (mode: LanguageMode) => void; // Legacy compatibility
  toggleColorMode: () => void;
  setOnboardingCompleted: (completed: boolean) => void;
  setSidebarCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  toggleSidebarCollapsed: () => void;

  // Heart Economy Actions
  deductHeart: () => boolean; // Deducts 1 heart. Returns false if hearts depleted (<= 0)
  restoreHearts: (amount?: number) => void; // Restores specified hearts (default: 1), capped at 5
  refillHearts: () => void; // Instantly refills to 5 hearts
  reconcileHearts: () => { hearts: number; secondsUntilNext: number }; // Recomputes based on Date.now()

  // Progression & Reward Actions
  setActiveNode: (nodeId: string) => void;
  completeNode: (nodeId: string, accuracy: number) => { stars: number; xpAwarded: number };
  addXp: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  unlockUnit: (unitId: string) => void;
  recordStudySession: (nodeId?: string) => void; // Updates study date and streak

  // Legacy Actions for backwards compatibility
  markBlockRead: (blockId: string) => void;
  markStationComplete: (stationKey: string, stars?: number) => void;
  recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => void;
  recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: string) => number;
}

export type GameStore = AppState & AppActions;
