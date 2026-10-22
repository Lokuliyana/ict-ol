/**
 * src/types/store.ts
 * Strict TypeScript types for Gamified ICT Learning Application State
 */

export type GradeLevel = '10' | '11';
export type AppLanguage = 'en' | 'si';
export type LanguageMode = 'dual' | 'en' | 'si'; // For backwards compatibility
export type ColorMode = 'light' | 'dark' | 'amber';

export type StudyIntent = 'journey' | 'revision' | 'mastery' | 'arena';

export interface NodeProgress {
  stars: number; // 0, 1, 2, or 3
  highAccuracy: number; // 0 to 100 percentage
  completedAt: string; // ISO 8601 string
  attempts?: number;
}

export interface AppState {
  // === Profile & Preferences ===
  grade: GradeLevel;
  activeGrade?: GradeLevel; // Unified grade selector
  language: AppLanguage;
  colorMode: ColorMode;
  onboardingCompleted: boolean;
  isSidebarCollapsed: boolean;
  isMobileDrawerOpen: boolean;
  isAudioMuted: boolean;
  studyIntent: StudyIntent;
  isDataSaver: boolean;
  fontSizeZoom: number; // 90, 100, 110, 120

  // === Life Economy ===
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null; // Timestamp ms of current recharge cycle start; null if hearts == 5
  nextHeartRechargeInSeconds: number; // Calculated seconds remaining for live timer

  // === Gamification & Progression ===
  streak: number;
  streakShields: number; // Protection against lost study days
  lastStudyDate: string; // YYYY-MM-DD
  xp: number;
  activeNodeId: string;
  completedNodes: Record<string, NodeProgress>;
  unlockedUnits: string[]; // e.g. ['g10-u01', 'g10-u02']
  badges: string[]; // Boss mastery badges, e.g. ['g10-u01-boss']
  completedParts: Record<string, boolean>; // e.g. {'g10-u1-part-1': true}
  bookmarks: string[]; // Saved revision concepts & flashcards
  mistakeVault: string[]; // Past paper questions answered incorrectly for re-drill

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
  setActiveGrade: (grade: GradeLevel) => void;
  setStudyIntent: (intent: StudyIntent) => void;
  markPartComplete: (unitId: string, part: number | string) => void;
  setUserGrade: (grade: GradeLevel) => void; // Legacy alias
  setLanguage: (lang: AppLanguage) => void;
  setLanguageMode: (mode: LanguageMode) => void; // Legacy compatibility
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  setDataSaver: (enabled: boolean) => void;
  toggleDataSaver: () => void;
  setFontSizeZoom: (zoom: number) => void;
  setOnboardingCompleted: (completed: boolean) => void;
  setSidebarCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  toggleSidebarCollapsed: () => void;
  setMobileDrawerOpen: (open: boolean) => void;
  toggleMobileDrawer: () => void;
  setAudioMuted: (muted: boolean) => void;
  toggleAudioMuted: () => void;
  setIsAudioMuted: (muted: boolean) => void;
  toggleAudioMute: () => void;

  // Heart Economy Actions
  deductHeart: () => boolean; // Deducts 1 heart. Returns false if hearts depleted (<= 0)
  restoreHearts: (amount?: number) => void; // Restores specified hearts (default: 1), capped at 5
  refillHearts: () => void; // Instantly refills to 5 hearts (zero penalty)
  reconcileHearts: () => { hearts: number; secondsUntilNext: number }; // Recomputes based on Date.now()

  // Progression & Reward Actions
  setActiveNode: (nodeId: string) => void;
  completeNode: (nodeId: string, accuracy?: number) => { stars: number; xpAwarded: number };
  addXp: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  unlockUnit: (unitId: string) => void;
  recordStudySession: (nodeId?: string) => void; // Updates study date and streak
  useStreakShield: () => boolean;
  addStreakShield: (count?: number) => void;
  toggleBookmark: (id: string) => void;
  addToMistakeVault: (questionId: string) => void;
  removeFromMistakeVault: (questionId: string) => void;

  // Legacy Actions for backwards compatibility
  markBlockRead: (blockId: string) => void;
  markStationComplete: (stationKey: string, stars?: number) => void;
  recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => void;
  recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: string) => number;
}

export type GameStore = AppState & AppActions;
