# Architecture & Implementation Strategy: Persistent Game State & Heart Economy

**Target Milestone**: Milestone 1 (R1: Core Shell, Persistent State & Navigation Engine)  
**Author**: M1 Explorer 1 (State & Life Economy)  
**Date**: 2026-10-08  
**Project**: Sri Lankan G.C.E. O/L ICT Gamified Platform (`ict-ol`)

---

## 1. Executive Summary

This report delivers the concrete architectural specification and implementation strategy for the **Persistent Game State & Heart Economy** required by Milestone 1 (`ORIGINAL_REQUEST.md` §R1, `PROJECT.md`).

### Key Conclusions:
1. **Store Engine**: Adopt **Zustand** (with `persist` middleware) as the primary state store located at `src/lib/store.ts`. An `npm install --dry-run zustand` test confirms `zustand@5.0.15` integrates seamlessly with React 19 and Next.js 15 without peer dependency conflicts.
2. **Backwards Compatibility**: Rather than breaking the **50+ existing components** that currently import `useProgress` from `@/context/ProgressContext`, `ProgressContext.tsx` must be converted into a lightweight adapter that consumes `useGameStore`. This preserves 100% API compatibility for existing features while unlocking selective, atomic subscriptions (`useGameStore(s => s.hearts)`) for new Milestone 1–5 features.
3. **Heart Economy Architecture**:
   - **5 Heart containers** maximum.
   - **30-minute recharge cycle** (1,800,000 ms) per heart.
   - **Wall-clock timestamp reconciliation** (`lastHeartLossTime: number | null`) stored in persistent storage rather than a volatile raw countdown. This ensures full offline recovery (e.g. user leaves for 2 hours -> recovers 4 hearts up to cap of 5).
   - **Decoupled countdown ticking**: Ticking countdown seconds are calculated dynamically or managed via a dedicated `useHeartTimer()` hook, strictly avoiding root re-renders of the application tree.
4. **Quiz Lockout & Restoration Loop**:
   - Submitting an incorrect quiz answer deducts 1 heart.
   - If hearts reach 0, quiz entry (`/quiz/[nodeId]`) is locked and opens `HeartDepletionModal`.
   - Restoration occurs via: (a) passive 30-min timer, (b) active review of flashcards (`/study/[nodeId]`), or (c) full refill bonus.

---

## 2. Current State Audit (`src/context/` & `src/lib/`)

### 2.1 Inspection of `src/context/ProgressContext.tsx`
The existing codebase contains a single state manager at `src/context/ProgressContext.tsx` (255 lines).

**Observed Strengths**:
- Has `localStorage` persistence under key `ict_ol_progress_v2`.
- Tracks basic user settings (`userGrade: '10' | '11'`, `languageMode: 'dual' | 'en' | 'si'`).
- Manages dark/light theme (`colorMode`).
- Tracks basic `streak` and `points`.

**Observed Critical Deficiencies & Gaps**:
1. **Zero Heart Economy**:
   - No hearts tracking (`hearts` count does not exist).
   - No recharge timer or timestamp.
   - No depletion mechanics, penalty on quiz error, or lockout when out of lives.
2. **Monolithic Context Re-renders**:
   - `ProgressContext` exposes a monolithic `state` object via standard React `useState`.
   - Any state change (or if a 1-second countdown timer were added) triggers a re-render of **every component tree subscribed to `useProgress()`**.
3. **Syllabus & Progression Model Discrepancy**:
   - Currently stores `completedStations: Record<string, boolean>` and `questStars: Record<string, number>`, whereas `PROJECT.md` specifies:
     `completedNodes: Record<string, { stars: number; highAccuracy: number; completedAt: string }>`.
   - Lacks `activeNodeId`, `unlockedUnits: string[]`, and `badges: string[]`.
4. **Streak Calculation**:
   - `streak` is an arbitrary integer without calendar verification; `lastStudyDate` (`YYYY-MM-DD`) is missing, making true daily streaks impossible.
5. **No Outside-React Access**:
   - Sound triggers, automated tests, and headless scripts cannot read or mutate state outside a mounted React tree.

### 2.2 Inspection of `src/lib/`
- Directory `src/lib/` **does not exist yet** in the repository.
- There are no existing store files, utility helpers, or sound bindings in `src/lib/`.

### 2.3 Dependency Audit
- Inspection of `package.json`:
  ```json
  "dependencies": {
    "@types/canvas-confetti": "^1.9.0",
    "canvas-confetti": "^1.9.4",
    "clsx": "^2.1.1",
    "framer-motion": "^14.0.0",
    "lucide-react": "^1.16.0",
    "next": "^15.2.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.0.2"
  }
  ```
- `zustand` is not yet installed. Running `npm install --dry-run zustand` succeeds cleanly (`zustand@5.0.15`), confirming full compatibility with React 19 and Next.js 15.

---

## 3. Zustand vs. Enhanced ProgressContext Evaluation

### 3.1 Comparison Matrix

| Evaluation Criteria | Zustand (`src/lib/store.ts`) | Enhanced `ProgressContext.tsx` |
|---|---|---|
| **Specification Compliance** | Explicitly mandated in `ORIGINAL_REQUEST.md` §R1 ("Zustand with localStorage persistence") | Allowed as alternative in `PROJECT.md` interface contract |
| **Fine-Grained Selectors** | **Native**: `useGameStore(s => s.hearts)` re-renders only when `hearts` changes | **None**: Any state change causes full subscriber tree re-render |
| **Timer Performance (1s ticks)** | **High**: Only the HUD countdown component subscribes to the countdown | **Dangerous**: 60 re-renders/min across 50+ components if timer is in context |
| **Outside-React Access** | **Native**: `useGameStore.getState()` and `useGameStore.setState()` accessible anywhere | **Impossible**: Requires React context provider wrapping and hooks |
| **Persistence Middleware** | **Built-in `persist`**: Handles JSON serialization, migrations, and storage hydration | **Manual**: Custom `useEffect` + `localStorage` parsing, vulnerable to race conditions |
| **SSR / Hydration Mismatch** | **Safe**: Handled via `skipHydration: true` or `hasHydrated` lifecycle pattern | **Requires manual gate**: `isLoaded` boolean check |
| **Existing Code Compatibility** | Solved via Adapter Pattern: `ProgressContext` wraps `useGameStore` | Direct modification of existing file |

### 3.2 Verdict & Implementation Strategy
**Adopt Zustand as the core engine with a Backwards-Compatibility Adapter.**

```
┌────────────────────────────────────────────────────────┐
│               Persistent Storage (localStorage)        │
└───────────────────────────▲────────────────────────────┘
                            │ (persist middleware)
┌───────────────────────────┴────────────────────────────┐
│          Zustand Store Engine (src/lib/store.ts)       │
│  - AppState & Actions (Atomic, Non-blocking, External) │
└─────────────▲────────────────────────────▲─────────────┘
              │ (Direct Selector)          │ (State Adapter)
┌─────────────┴──────────────┐  ┌──────────┴─────────────┐
│  New M1–M5 Components      │  │ ProgressContext.tsx    │
│  - TopHud (HeartMeter)     │  │ (Backwards-Compatible) │
│  - BlindQuizRunner         │  └──────────▲─────────────┘
│  - QuestMap                │             │
│  - CompletionDrawer        │  ┌──────────┴─────────────┐
└────────────────────────────┘  │ 50+ Existing Components│
                                │ (LinearLessonRunner,   │
                                │  MotherboardWorkbench) │
                                └────────────────────────┘
```

If project rules at build-time strictly prohibit running `npm install zustand`, we provide a **zero-dependency `useSyncExternalStore` drop-in implementation** that matches the exact same interface (detailed in Section 9).

---

## 4. Target Data Model & Interface Contract (`src/types/store.ts`)

```typescript
/**
 * src/types/store.ts
 * Strict TypeScript types for Gamified ICT Learning Application
 */

export type GradeLevel = '10' | '11';
export type AppLanguage = 'en' | 'si';
export type LanguageMode = 'dual' | 'en' | 'si'; // For backwards compatibility
export type ColorMode = 'light' | 'dark';

export interface NodeProgress {
  stars: number; // 0, 1, 2, or 3
  highAccuracy: number; // 0 to 100 percentage
  completedAt: string; // ISO 8601 string
  attempts: number;
}

export interface AppState {
  // === Profile & Preferences ===
  grade: GradeLevel;
  language: AppLanguage;
  colorMode: ColorMode;
  onboardingCompleted: boolean;

  // === Life Economy ===
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null; // Timestamp ms of current recharge cycle start; null if hearts == 5

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
}

export interface AppActions {
  // Profile Actions
  setGrade: (grade: GradeLevel) => void;
  setLanguage: (lang: AppLanguage) => void;
  setLanguageMode: (mode: LanguageMode) => void;
  toggleColorMode: () => void;
  setOnboardingCompleted: (completed: boolean) => void;

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

  // Legacy Actions
  markBlockRead: (blockId: string) => void;
  markStationComplete: (stationKey: string, stars?: number) => void;
  recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) => void;
  recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: string) => number;
}

export type GameStore = AppState & AppActions;
```

---

## 5. Heart Economy & Recharge Cycle Mathematics

### 5.1 Constants
- `MAX_HEARTS = 5`
- `HEART_RECHARGE_MS = 30 * 60 * 1000` (1,800,000 ms = 30 minutes)
- `HEART_RECHARGE_SECONDS = 1800`

### 5.2 Epoch-Based Passive Reconciliation Algorithm
Instead of continuously ticking down in storage, the system calculates offline and elapsed time dynamically against wall-clock time:

$$\Delta t = \text{Date.now()} - \text{lastHeartLossTime}$$
$$\text{heartsEarned} = \left\lfloor \frac{\Delta t}{1,800,000} \right\rfloor$$

```typescript
export function computeHeartRecharge(
  currentHearts: number,
  lastHeartLossTime: number | null,
  now: number = Date.now()
): {
  reconciledHearts: number;
  updatedLastHeartLossTime: number | null;
  secondsUntilNextHeart: number;
} {
  // If already at max, timer is inactive
  if (currentHearts >= MAX_HEARTS) {
    return {
      reconciledHearts: MAX_HEARTS,
      updatedLastHeartLossTime: null,
      secondsUntilNextHeart: 0,
    };
  }

  // If below max but timestamp was missing, initialize it now
  if (!lastHeartLossTime) {
    return {
      reconciledHearts: currentHearts,
      updatedLastHeartLossTime: now,
      secondsUntilNextHeart: HEART_RECHARGE_SECONDS,
    };
  }

  const elapsedMs = Math.max(0, now - lastHeartLossTime);
  const heartsEarned = Math.floor(elapsedMs / HEART_RECHARGE_MS);

  if (heartsEarned > 0) {
    const newHearts = Math.min(MAX_HEARTS, currentHearts + heartsEarned);
    if (newHearts >= MAX_HEARTS) {
      return {
        reconciledHearts: MAX_HEARTS,
        updatedLastHeartLossTime: null,
        secondsUntilNextHeart: 0,
      };
    }
    // Carry over remaining progress into next recharge cycle
    const remainderMs = elapsedMs % HEART_RECHARGE_MS;
    const newTimestamp = now - remainderMs;
    const secondsRemaining = Math.max(0, Math.ceil((HEART_RECHARGE_MS - remainderMs) / 1000));
    return {
      reconciledHearts: newHearts,
      updatedLastHeartLossTime: newTimestamp,
      secondsUntilNextHeart: secondsRemaining,
    };
  }

  const secondsRemaining = Math.max(0, Math.ceil((HEART_RECHARGE_MS - elapsedMs) / 1000));
  return {
    reconciledHearts: currentHearts,
    updatedLastHeartLossTime: lastHeartLossTime,
    secondsUntilNextHeart: secondsRemaining,
  };
}
```

### 5.3 Offline Scenarios Handled
1. **App closed for 15 minutes**: User had 3 hearts. On reopen: $\Delta t = 15 \text{ min} < 30 \text{ min}$. Hearts remain 3, countdown displays 15:00.
2. **App closed for 75 minutes**: User had 2 hearts. On reopen: $\Delta t = 75 \text{ min} = 2 \times 30 + 15 \text{ min}$. User gains +2 hearts $\rightarrow$ 4 hearts. Countdown displays 15:00 for the 5th heart.
3. **App closed for 6 hours**: User had 0 hearts. On reopen: $\Delta t \ge 150 \text{ min}$. Hearts restored to 5 (capped). Timestamp reset to `null`.
4. **Device Sleep / Background Throttling**: Because computation relies on `Date.now()`, background tab throttling in Chrome/Safari never desynchronizes the countdown.

### 5.4 Depletion Mechanics & Quiz Lockout Flow
1. **Blind Quiz Error**:
   - User submits incorrect answer in `/quiz/[nodeId]`.
   - Engine calls `store.getState().deductHeart()`.
   - If hearts were 5 $\rightarrow$ becomes 4, `lastHeartLossTime` set to `Date.now()`.
   - If hearts were $>1$ $\rightarrow$ decrements by 1 (retaining current cycle timestamp).
   - If hearts were 1 $\rightarrow$ becomes 0. Returns `false`.
   - Quiz engine plays `sound.playBuzzer()`, triggers card shake animation, and immediately opens `<HeartDepletionModal />`.
2. **Quiz Entry Gate (`useQuizGate`)**:
   - When entering `/quiz/[nodeId]` or clicking "Start Quiz" on the quest map:
   - Evaluates `if (hearts <= 0)`.
   - Prevents quiz routing and displays `HeartDepletionModal`.
3. **Restoration Loop**:
   - **Review Option**: User taps "Review Flashcards to Earn Heart" in modal $\rightarrow$ navigates to `/study/[nodeId]`.
   - Completing the story flashcard deck executes `restoreHearts(1)`, restoring 1 life and immediately unblocking quiz entry.

---

## 6. Daily Streak Calculation Algorithm

```typescript
export function computeDailyStreak(
  currentStreak: number,
  lastStudyDate: string,
  today: string = new Date().toISOString().split('T')[0]
): { newStreak: number; newStudyDate: string } {
  if (!lastStudyDate) {
    return { newStreak: 1, newStudyDate: today };
  }

  if (lastStudyDate === today) {
    return { newStreak: currentStreak, newStudyDate: today };
  }

  // Calculate day difference
  const lastDateObj = new Date(lastStudyDate);
  const todayDateObj = new Date(today);
  const diffDays = Math.round((todayDateObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    // Consecutive day
    return { newStreak: currentStreak + 1, newStudyDate: today };
  } else if (diffDays > 1) {
    // Streak broken
    return { newStreak: 1, newStudyDate: today };
  }

  return { newStreak: currentStreak, newStudyDate: today };
}
```

---

## 7. Action Methods Specification

| Action Method | Parameters | Return | Preconditions & State Transitions |
|---|---|---|---|
| `setGrade` | `grade: '10' \| '11'` | `void` | Updates `grade`. Sets default `activeNodeId` for selected grade if current is mismatched. |
| `setLanguage` | `lang: 'en' \| 'si'` | `void` | Updates UI language. Syncs `languageMode`. |
| `deductHeart` | none | `boolean` | If `hearts <= 0`, returns `false`. If `hearts === 5`, sets `lastHeartLossTime = Date.now()`. Decrements `hearts` by 1. Returns `newHearts > 0`. |
| `restoreHearts` | `amount = 1` | `void` | Increments `hearts` by `amount`, max 5. If `hearts === 5`, clears `lastHeartLossTime = null`. |
| `refillHearts` | none | `void` | Sets `hearts = 5`, `lastHeartLossTime = null`. |
| `reconcileHearts` | none | `{ hearts, secondsUntilNext }` | Invokes `computeHeartRecharge` and updates state only if values changed. |
| `completeNode` | `nodeId: string, accuracy: number` | `{ stars: number, xpAwarded: number }` | Computes stars: $\ge 90\% \rightarrow 3$, $\ge 70\% \rightarrow 2$, $\ge 50\% \rightarrow 1$, else 0. Calculates XP: $50 + (\text{stars} \times 25)$. Updates `completedNodes[nodeId]` with `Math.max(previousStars, stars)`. Updates streak and `lastStudyDate`. Unlocks next node. |
| `addXp` | `amount: number` | `void` | Increments `xp` by `amount`. Also updates legacy `points`. |
| `unlockBadge` | `badgeId: string` | `void` | Appends `badgeId` to `badges` array if absent; awards +100 bonus XP. |
| `recordStudySession` | `nodeId?: string` | `void` | Computes new streak; if `hearts === 0`, awards +1 heart as study reward. |

---

## 8. Lifecycle Hooks & React Integration

### 8.1 Dedicated Heart Countdown Hook (`src/hooks/useHeartTimer.ts`)
To prevent re-rendering the entire app every second, this hook executes a local 1-second interval strictly within the subscribing component (e.g. `HeartMeter.tsx`):

```typescript
// src/hooks/useHeartTimer.ts
'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/store';
import { computeHeartRecharge } from '@/lib/heartMath';

export function useHeartTimer() {
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

    // Immediate check
    const initial = reconcileHearts();
    setSecondsRemaining(initial.secondsUntilNext);

    const interval = setInterval(() => {
      const { secondsUntilNext } = reconcileHearts();
      setSecondsRemaining(secondsUntilNext);
    }, 1000);

    return () => clearInterval(interval);
  }, [hearts, lastHeartLossTime, reconcileHearts]);

  // Formatted MM:SS
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
```

### 8.2 Hydration Safe Store Hook (`useHydration`)
Next.js App Router renders on the server before client hydration. To avoid hydration mismatch errors with `localStorage`:

```typescript
// src/hooks/useHydration.ts
import { useState, useEffect } from 'react';

export function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
```

### 8.3 Quiz Gate Hook (`src/hooks/useQuizGate.ts`)
```typescript
// src/hooks/useQuizGate.ts
'use client';

import { useGameStore } from '@/lib/store';

export function useQuizGate() {
  const hearts = useGameStore((s) => s.hearts);
  const isLocked = hearts <= 0;

  return {
    hearts,
    isLocked,
    canEnterQuiz: hearts > 0,
  };
}
```

---

## 9. Recommended File Structure & Reference Code

### 9.1 File Layout
```
src/
├── types/
│   ├── store.ts            # Strict state & action TypeScript definitions
│   └── curriculum.ts       # LevelNode, TheoryCard, QuizQuestion interfaces
├── lib/
│   ├── store.ts            # Zustand store with localStorage persistence
│   ├── heartMath.ts        # Pure mathematical functions for recharge & streaks
│   └── sound.ts            # Sound effect triggers for heart loss/victory
├── hooks/
│   ├── useHeartTimer.ts    # 1-second isolated timer for HUD HeartMeter
│   ├── useHydration.ts     # Client hydration safety hook
│   └── useQuizGate.ts      # Life-check and lockout helper
├── context/
│   └── ProgressContext.tsx # Backwards-compatible adapter wrapping useGameStore
└── components/
    ├── hud/
    │   ├── HeartMeter.tsx          # 5-heart container with countdown badge
    │   └── TopHud.tsx              # Streak, hearts, grade switch, XP
    └── quiz/
        └── HeartDepletionModal.tsx # Zero-life lockout dialog with review CTA
```

### 9.2 Complete Reference Implementation: `src/lib/store.ts`

```typescript
// src/lib/store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppState, AppActions, GameStore, GradeLevel, AppLanguage, LanguageMode } from '@/types/store';
import { computeHeartRecharge, computeDailyStreak } from './heartMath';

const STORAGE_KEY = 'ict_ol_progress_v3';

const INITIAL_STATE: AppState = {
  grade: '10',
  language: 'en',
  colorMode: 'light',
  onboardingCompleted: false,
  hearts: 5,
  lastHeartLossTime: null,
  streak: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
  xp: 150,
  activeNodeId: 'g10-u01-n01',
  completedNodes: {
    'g10-u01-n01': {
      stars: 3,
      highAccuracy: 100,
      completedAt: new Date().toISOString(),
      attempts: 1,
    },
  },
  unlockedUnits: ['g10-u01', 'g11-u01'],
  badges: [],

  // Legacy mappings
  completedBlocks: ['b1-1'],
  completedCheckpoints: {},
  completedStations: { 'g10-u1-s1': true },
  questStars: { 'g10-u1-s1': 3 },
  pastPaperAnswers: {},
  mediumTracker: { dual: 14, en: 8, si: 10 },
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      // === Profile Actions ===
      setGrade: (grade: GradeLevel) => set({ grade }),
      setLanguage: (language: AppLanguage) => set({ language }),
      setLanguageMode: (mode: LanguageMode) => {
        const lang: AppLanguage = mode === 'si' ? 'si' : 'en';
        set((state) => ({
          language: lang,
          mediumTracker: {
            ...state.mediumTracker,
            [mode]: (state.mediumTracker[mode] || 0) + 1,
          },
        }));
      },
      toggleColorMode: () =>
        set((state) => {
          const nextMode = state.colorMode === 'light' ? 'dark' : 'light';
          if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', nextMode === 'dark');
          }
          return { colorMode: nextMode };
        }),
      setOnboardingCompleted: (completed: boolean) => set({ onboardingCompleted: completed }),

      // === Heart Economy Actions ===
      deductHeart: () => {
        const { hearts, lastHeartLossTime } = get();
        if (hearts <= 0) return false;

        const nextHearts = hearts - 1;
        // Start recharge cycle if this is the first loss from full health
        const nextTimestamp = hearts === 5 ? Date.now() : lastHeartLossTime;

        set({
          hearts: nextHearts,
          lastHeartLossTime: nextTimestamp,
        });

        return nextHearts > 0;
      },

      restoreHearts: (amount = 1) => {
        const { hearts, lastHeartLossTime } = get();
        const nextHearts = Math.min(5, hearts + amount);
        const nextTimestamp = nextHearts >= 5 ? null : lastHeartLossTime;

        set({
          hearts: nextHearts,
          lastHeartLossTime: nextTimestamp,
        });
      },

      refillHearts: () => {
        set({
          hearts: 5,
          lastHeartLossTime: null,
        });
      },

      reconcileHearts: () => {
        const { hearts, lastHeartLossTime } = get();
        const { reconciledHearts, updatedLastHeartLossTime, secondsUntilNextHeart } = computeHeartRecharge(
          hearts,
          lastHeartLossTime
        );

        if (reconciledHearts !== hearts || updatedLastHeartLossTime !== lastHeartLossTime) {
          set({
            hearts: reconciledHearts,
            lastHeartLossTime: updatedLastHeartLossTime,
          });
        }

        return {
          hearts: reconciledHearts,
          secondsUntilNext: secondsUntilNextHeart,
        };
      },

      // === Progression Actions ===
      setActiveNode: (activeNodeId: string) => set({ activeNodeId }),

      completeNode: (nodeId: string, accuracy: number) => {
        const { completedNodes, xp, streak, lastStudyDate, questStars, completedStations } = get();
        
        let stars = 0;
        if (accuracy >= 90) stars = 3;
        else if (accuracy >= 70) stars = 2;
        else if (accuracy >= 50) stars = 1;

        const xpAwarded = 50 + stars * 25;
        const currentRecord = completedNodes[nodeId];
        const bestStars = Math.max(currentRecord?.stars || 0, stars);
        const bestAccuracy = Math.max(currentRecord?.highAccuracy || 0, accuracy);

        const updatedNodes = {
          ...completedNodes,
          [nodeId]: {
            stars: bestStars,
            highAccuracy: bestAccuracy,
            completedAt: new Date().toISOString(),
            attempts: (currentRecord?.attempts || 0) + 1,
          },
        };

        const { newStreak, newStudyDate } = computeDailyStreak(streak, lastStudyDate);

        set({
          completedNodes: updatedNodes,
          xp: xp + xpAwarded,
          streak: newStreak,
          lastStudyDate: newStudyDate,
          // Sync legacy fields
          completedStations: { ...completedStations, [nodeId]: true },
          questStars: { ...questStars, [nodeId]: bestStars },
        });

        return { stars, xpAwarded };
      },

      addXp: (amount: number) => set((s) => ({ xp: s.xp + amount })),

      unlockBadge: (badgeId: string) => {
        const { badges, xp } = get();
        if (badges.includes(badgeId)) return;
        set({
          badges: [...badges, badgeId],
          xp: xp + 100, // +100 XP for boss badge
        });
      },

      unlockUnit: (unitId: string) => {
        const { unlockedUnits } = get();
        if (unlockedUnits.includes(unitId)) return;
        set({ unlockedUnits: [...unlockedUnits, unitId] });
      },

      recordStudySession: (nodeId?: string) => {
        const { streak, lastStudyDate, hearts } = get();
        const { newStreak, newStudyDate } = computeDailyStreak(streak, lastStudyDate);
        
        // If user studied while hearts were 0, reward them with +1 heart
        const restoredHearts = hearts === 0 ? 1 : hearts;
        const lastLoss = restoredHearts >= 5 ? null : (hearts === 0 ? Date.now() : get().lastHeartLossTime);

        set({
          streak: newStreak,
          lastStudyDate: newStudyDate,
          hearts: restoredHearts,
          lastHeartLossTime: lastLoss,
        });
      },

      // === Legacy Compatibility Actions ===
      markBlockRead: (blockId: string) =>
        set((s) => ({
          completedBlocks: s.completedBlocks.includes(blockId) ? s.completedBlocks : [...s.completedBlocks, blockId],
          xp: s.xp + 5,
        })),

      markStationComplete: (stationKey: string, stars = 3) => {
        get().completeNode(stationKey, stars === 3 ? 100 : stars === 2 ? 80 : 60);
      },

      recordCheckpointAttempt: (checkpointId: string, isCorrect: boolean) =>
        set((s) => ({
          completedCheckpoints: { ...s.completedCheckpoints, [checkpointId]: isCorrect },
          xp: s.xp + (isCorrect ? 10 : 2),
        })),

      recordPastPaperAttempt: (questionId: string, answer: string, isCorrect: boolean) =>
        set((s) => ({
          pastPaperAnswers: {
            ...s.pastPaperAnswers,
            [questionId]: { answer, isCorrect, time: new Date().toISOString() },
          },
          xp: s.xp + (isCorrect ? 15 : 3),
        })),

      resetProgress: () => {
        set(INITIAL_STATE);
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(STORAGE_KEY);
        }
      },

      getLessonMastery: (lessonId: string) => {
        const { completedNodes } = get();
        const matching = Object.keys(completedNodes).filter((id) => id.startsWith(lessonId));
        if (matching.length === 0) return 0;
        const totalStars = matching.reduce((acc, id) => acc + completedNodes[id].stars, 0);
        return Math.min(100, Math.round((totalStars / (matching.length * 3)) * 100));
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
```

### 9.3 Seamless Backwards-Compatibility Adapter (`src/context/ProgressContext.tsx`)

```typescript
// src/context/ProgressContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGameStore } from '@/lib/store';
import { LanguageMode } from '@/types/store';

interface ProgressContextValue {
  state: {
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
    mediumTracker: { dual: number; en: number; si: number };
    // New fields exposed for gradual migration
    hearts: number;
    activeNodeId: string;
    badges: string[];
  };
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
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const store = useGameStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync dark class on mount
    if (store.colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [store.colorMode]);

  const value: ProgressContextValue = {
    state: {
      languageMode: (store.language === 'si' ? 'si' : 'en') as LanguageMode,
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
      activeNodeId: store.activeNodeId,
      badges: store.badges,
    },
    setLanguageMode: store.setLanguageMode,
    setUserGrade: store.setGrade,
    setOnboardingCompleted: store.setOnboardingCompleted,
    toggleColorMode: store.toggleColorMode,
    markBlockRead: store.markBlockRead,
    markStationComplete: store.markStationComplete,
    recordCheckpointAttempt: store.recordCheckpointAttempt,
    recordPastPaperAttempt: store.recordPastPaperAttempt,
    resetProgress: store.resetProgress,
    getLessonMastery: store.getLessonMastery,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
```

---

## 10. Verification & Test Strategy

### 10.1 Automated Store Logic Unit Tests
Create `tests/store.test.ts` to verify state transitions in isolation:
1. **Heart Depletion**:
   - Starting from 5 hearts, call `deductHeart()` $\rightarrow$ `hearts === 4`, `lastHeartLossTime` is set.
   - Call 4 more times $\rightarrow$ `hearts === 0`, 5th call returns `false`.
2. **Recharge Calculation**:
   - Set `hearts = 2`, `lastHeartLossTime = Date.now() - 3600000` (60 minutes ago).
   - Call `reconcileHearts()` $\rightarrow$ `hearts` restored to 4, countdown is 1800s.
3. **Streak Update**:
   - Study today $\rightarrow$ streak remains unchanged.
   - Fake `lastStudyDate = yesterday` $\rightarrow$ streak increments by 1.
   - Fake `lastStudyDate = 3 days ago` $\rightarrow$ streak resets to 1.
4. **Node Completion & Stars**:
   - `completeNode('g10-u01-n01', 95)` $\rightarrow$ awards 3 stars, $+125$ XP.
   - Calling again with 75% accuracy preserves 3 stars and adds XP.

### 10.2 End-to-End User Journeys (Milestone 1–2)
1. **Journey 1: Full Lives to Depletion**:
   - User answers 5 questions wrong in quiz.
   - Heart meter decreases from 5 to 0.
   - Heart depletion modal pops up blocking further interaction.
2. **Journey 2: Flashcard Review Recovery**:
   - With 0 hearts, user taps "Review Flashcards".
   - Completes deck $\rightarrow$ heart count increments to 1.
   - Quiz modal dismisses and allows re-entry.
3. **Journey 3: Browser Reload Persistence**:
   - Change grade to 11, language to Sinhala, earn 100 XP.
   - Hard refresh (`Ctrl+F5`) browser.
   - Verify HUD renders Grade 11, Sinhala medium, and 250 XP.

---

## 11. Implementation Roadmap for Milestone 1 Builders

1. **Step 1**: Install `zustand` (`npm install zustand`) or write the self-contained store.
2. **Step 2**: Create `src/types/store.ts` and `src/lib/heartMath.ts`.
3. **Step 3**: Implement `src/lib/store.ts` and update `src/context/ProgressContext.tsx` adapter.
4. **Step 4**: Build `src/hooks/useHeartTimer.ts` and `src/hooks/useQuizGate.ts`.
5. **Step 5**: Integrate `HeartMeter.tsx` into `TopHud.tsx` and `HeartDepletionModal.tsx` into the quiz runner.
6. **Step 6**: Run `npm test` and verify all 1812 curriculum tests remain green.
