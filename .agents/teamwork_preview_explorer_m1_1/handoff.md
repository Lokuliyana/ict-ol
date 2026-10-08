# Handoff Report: Persistent Game State & Heart Economy Implementation Strategy

**Author**: M1 Explorer 1 (State & Life Economy)  
**Recipient**: Orchestrator / M1 Builders  
**Working Directory**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_1`  
**Report Document**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_1\report.md`  
**Date**: 2026-10-08  

---

## 1. Observation

1. **Current State Implementation**:
   - `c:\Users\MSI\ict-ol\src\context\ProgressContext.tsx` contains 255 lines implementing a React Context with `useState` and `localStorage.getItem('ict_ol_progress_v2')`.
   - Lines 10–27:
     ```typescript
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
       mediumTracker: { dual: number; en: number; si: number };
     }
     ```
   - Observed that `hearts`, `lastHeartLossTime`, `nextHeartRechargeInSeconds`, `activeNodeId`, `completedNodes` (with stars and highAccuracy), `unlockedUnits`, and `badges` are **completely absent** from `ProgressState`.
2. **Existing Consumers**:
   - A `grep_search` across `src/` for `useProgress` matched over 50 files, including `Header.tsx`, `LinearLessonRunner.tsx`, `DualCanvas.tsx`, `MotherboardWorkbench.tsx`, `PastPaperEngine.tsx`, and all individual station/lab components.
3. **Package Dependencies & Zustand Status**:
   - `c:\Users\MSI\ict-ol\package.json` does not currently include `zustand` in `dependencies` or `devDependencies`.
   - Running `Test-Path node_modules\zustand` returned `False`.
   - Running `npm install --dry-run zustand` exited with code 0 (`add zustand 5.0.15`, added 1 package in 2s), confirming that Zustand 5.0.15 has zero peer dependency conflicts with React 19 (`react: ^19.0.0`).
4. **Existing Utilities & Directory Structure**:
   - Directory `src/lib/` does not exist.
   - Directory `src/types/` does not exist.
   - Directory `src/hooks/` does not exist.
   - `src/utils/soundEffects.ts` contains a complete procedural Web Audio API synthesizer (`SoundEngine`) with `playBuzzer()`, `playClick()`, `playSuccessDing()`, and `playVictoryFanfare()`.
5. **Project Test Suite Status**:
   - Executing `npm test` (`npx tsx scripts/verify-content.mjs`) ran 1,812 tests with exit code 0 (`Verification Complete! Total Passed: 1812, Total Failed: 0`).

---

## 2. Logic Chain

1. **Need for Dedicated Store Architecture (Referencing Observation 1 & 2)**:
   - Because `ProgressContext.tsx` is consumed by 50+ components, refactoring or deleting `useProgress` directly would create massive breaking changes across all Grade 10 and Grade 11 interactive tools.
   - If a 1-second countdown interval for the 30-minute heart recharge cycle is placed into `ProgressContext`'s `useState`, every consumer component tree will re-render 60 times per minute, severely degrading mobile rendering performance and causing animation jank.
   - Therefore, the application requires fine-grained atomic selector subscriptions (`useStore(s => s.hearts)`).
2. **Adopting Zustand with an Adapter (Referencing Observation 2 & 3)**:
   - `ORIGINAL_REQUEST.md` §R1 explicitly requests a Zustand store with localStorage persistence.
   - `npm install --dry-run zustand` proved that Zustand 5.0.15 installs cleanly with React 19 and Next.js 15.
   - By creating `src/lib/store.ts` using Zustand and updating `src/context/ProgressContext.tsx` to act as an adapter wrapping `useGameStore`, the project achieves fine-grained performance for new Milestone 1–5 features while retaining 100% backwards compatibility for all 50+ legacy components with zero broken imports.
3. **Heart Economy Mathematical Invariance (Referencing Observation 1)**:
   - Storing a simple volatile counter (e.g. `secondsLeft: 1799`) in localStorage fails whenever the user closes the browser, backgrounds the tab, or puts the device to sleep.
   - Storing `lastHeartLossTime: number | null` (epoch ms) enables deterministic wall-clock reconciliation:
     $$\Delta t = \text{Date.now()} - \text{lastHeartLossTime}$$
     $$\text{heartsEarned} = \lfloor \Delta t / 1,800,000 \rfloor$$
   - This mathematically resolves offline recovery (e.g., returning after 1 hour restores 2 hearts, returning after 3 hours restores to maximum 5 hearts and sets `lastHeartLossTime = null`).
4. **Decoupled Timer Execution (Referencing Observation 1 & 4)**:
   - Moving the 1000ms ticker out of persistent storage and into a dedicated `useHeartTimer` hook ensures that `localStorage.setItem` is only executed when hearts actually change (at most once per 30 minutes, or upon quiz error/refill), rather than 3,600 times per hour.

---

## 3. Caveats

1. **Dependency Installation Timing**: The investigation confirmed that `zustand` installs cleanly via `--dry-run`, but as an explorer with read-only constraints, `npm install zustand` has not been permanently executed in `package.json`. The builder agent for Milestone 1 must run `npm install zustand`.
2. **Dual-Medium vs Single Language Schema**: Current `ProgressContext` has `languageMode: 'dual' | 'en' | 'si'`, whereas `PROJECT.md` specifies `language: 'en' | 'si'`. The proposed `AppState` supports `language: 'en' | 'si'` for UI and keeps `languageMode` mapped so existing dual-medium split components function without regression.
3. **Sound Gesture Limitation**: Browsers restrict Web Audio autoplay before user interaction; this is already handled by `SoundEngine`'s suspended check in `src/utils/soundEffects.ts`.

---

## 4. Conclusion

1. Implement `src/types/store.ts` with strict TypeScript contracts for `AppState`, `AppActions`, `NodeProgress`, and `GameStore`.
2. Implement `src/lib/heartMath.ts` containing pure, unit-testable functions for epoch-based heart reconciliation and consecutive-day streak calculation.
3. Implement `src/lib/store.ts` using `zustand` + `persist(..., { name: 'ict_ol_progress_v3' })`.
4. Refactor `src/context/ProgressContext.tsx` into a lightweight adapter reading from `useGameStore`.
5. Implement `src/hooks/useHeartTimer.ts` for isolated 1s HUD countdown rendering and `src/hooks/useQuizGate.ts` for zero-heart quiz lockout.
6. Build `src/components/hud/HeartMeter.tsx` and `src/components/quiz/HeartDepletionModal.tsx` to complete the full gamified life loop.

---

## 5. Verification Method

1. **Automated Curriculum Verification**:
   - Run `npm test` (`npx tsx scripts/verify-content.mjs`).
   - Expected: 1,812 passed tests with 0 failures.
2. **Build Verification**:
   - Run `npm run build` after implementing files.
   - Expected: Clean compilation with zero TypeScript or Next.js build errors.
3. **Heart Economy Unit & Manual Verification**:
   - Inspect `store.getState().hearts`: should initialize to 5 with `lastHeartLossTime: null`.
   - Invoke `store.getState().deductHeart()`: hearts becomes 4, `lastHeartLossTime` is set to current timestamp.
   - Invoke 4 more times: hearts reaches 0, 5th invocation returns `false`.
   - Verify `/quiz/[nodeId]` route triggers `<HeartDepletionModal />` when `hearts === 0`.
   - Test offline recharge: set `lastHeartLossTime = Date.now() - 3600000` (60 min ago) and call `reconcileHearts()`; verify hearts becomes 2 and next countdown is 1800s.
   - Test flashcard recovery: complete `/study/[nodeId]` review; verify `hearts` increments from 0 to 1 and unlocks quiz access.
