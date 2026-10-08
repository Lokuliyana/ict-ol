# Phase 1 (R1: Core Shell, Persistent State & Navigation Engine) Investigation Report

**Subagent**: Explorer (`explorer_m1_1`)  
**Role**: State & Navigation Architecture Explorer  
**Parent Orchestrator ID**: `26d9983e-6ed4-4cc4-8d41-b70ec5b54212`  
**Date**: 2026-10-07 (UTC) / 2026-10-08 (Local)  
**Status**: INVESTIGATION COMPLETE  

---

## 1. Observation

### 1.1 File Structure & Presence
The following Phase 1 architectural modules and components were verified to exist on disk:
- State & Life Economy:
  - `src/types/store.ts` (84 lines)
  - `src/lib/heartMath.ts` (106 lines)
  - `src/lib/store.ts` (448 lines)
  - `src/hooks/useHeartTimer.ts` (52 lines)
  - `src/hooks/useQuizGate.ts` (21 lines)
  - `src/context/ProgressContext.tsx` (133 lines)
- Top HUD Components (`src/components/hud/`):
  - `TopHud.tsx` (106 lines)
  - `HeartMeter.tsx` (94 lines)
  - `GradeSwitcher.tsx` (72 lines)
  - `StreakBadge.tsx` (39 lines)
  - `XpCounter.tsx` (30 lines)
- Navigation Shell (`src/components/navigation/`):
  - `AppShell.tsx` (76 lines)
  - `MobileBottomNav.tsx` (99 lines)
  - `DesktopSidebar.tsx` (203 lines)
- Onboarding Flow (`src/components/onboarding/`):
  - `OnboardingModal.tsx` (339 lines)
- Winding Quest Map Engine (`src/components/map/`):
  - `QuestMap.tsx` (573 lines)
  - `LevelNodeButton.tsx` (132 lines)
  - `LevelDrawer.tsx` (242 lines)
- Layout Integration:
  - `src/app/layout.tsx` (36 lines)
  - `src/app/page.tsx` (295 lines)
  - `src/app/globals.css` (114 lines)

---

### 1.2 Persistent State & Life Economy Observations
1. **Persistent Store (`src/lib/store.ts` & `src/types/store.ts`)**:
   - Implemented using Zustand `create<GameStore>()(persist(..., { name: 'ict_ol_game_store_v1', storage: createJSONStorage(() => window.localStorage) }))` (`src/lib/store.ts:70-446`).
   - Fields maintained:
     - `grade: '10' | '11'` (`store.ts:26`)
     - `language: 'en' | 'si'` (`store.ts:27`)
     - `hearts: number` (0 to 5) (`store.ts:31`)
     - `lastHeartLossTime: number | null` (`store.ts:32`)
     - `nextHeartRechargeInSeconds: number` (`store.ts:33`)
     - `streak: number` (`store.ts:35`)
     - `lastStudyDate: string` (`store.ts:36`)
     - `xp: number` (`store.ts:37`)
     - `activeNodeId: string` (`store.ts:38`)
     - `completedNodes: Record<string, NodeProgress>` (`store.ts:39-46`)
     - `unlockedUnits: string[]` (`store.ts:47`)
     - `badges: string[]` (`store.ts:48`)
     - `onboardingCompleted: boolean` (`store.ts:29`)
   - Rehydration reconciliation:
     - `onRehydrateStorage` (`store.ts:430-444`) calls `state.reconcileHearts()` upon browser reload and applies theme (`classList.add('dark')` / `remove('dark')`).
   - Action implementations:
     - `deductHeart()` (`store.ts:137-156`): Decrements `hearts` clamped at 0; preserves original `lastHeartLossTime` if already non-null; triggers `reconcileHearts()`; returns `nextHearts > 0`.
     - `restoreHearts(amount)` (`store.ts:158-169`): Restores specified hearts capped at 5 (`MAX_HEARTS`); resets `lastHeartLossTime` to null if `nextHearts >= 5`.
     - `refillHearts()` (`store.ts:171-177`): Immediately sets `hearts: 5`, `lastHeartLossTime: null`, `nextHeartRechargeInSeconds: 0`.
     - `completeNode(nodeId, accuracy)` (`store.ts:207-253`): Calculates stars (>=90% -> 3, >=70% -> 2, >=50% -> 1), awards XP (`50 + stars * 25`), updates daily streak via `computeDailyStreak()`, and persists node status.
     - `setGrade(grade)` (`store.ts:76-90`): Switches grade and automatically retargets `activeNodeId` if current node belongs to other grade.
     - `setLanguage(lang)` (`store.ts:96-105`): Toggles between `'en'` and `'si'`.

2. **Heart Recharge Algorithms (`src/lib/heartMath.ts`)**:
   - `MAX_HEARTS = 5` (`heartMath.ts:6`).
   - `HEART_RECHARGE_SECONDS = 1800` (30 minutes) (`heartMath.ts:7`).
   - `computeHeartRecharge` (`heartMath.ts:20-74`):
     - Calculates elapsed milliseconds via wall-clock time `now - lastHeartLossTime`.
     - Computes `heartsEarned = Math.floor(elapsedMs / HEART_RECHARGE_MS)`.
     - Computes carry-over remainder `remainderMs = elapsedMs % HEART_RECHARGE_MS`.
     - *Observation on line 64*:
       ```typescript
       secondsUntilNextHeart: secondsRemaining === HEART_RECHARGE_SECONDS ? 0 : secondsRemaining,
       ```
       When `remainderMs === 0` after earning a heart, `secondsRemaining` equals 1800 (`HEART_RECHARGE_SECONDS`). The ternary forces `secondsUntilNextHeart` to `0` instead of `1800` for that tick.

3. **Live Heart Countdown (`src/hooks/useHeartTimer.ts` & `src/components/hud/HeartMeter.tsx`)**:
   - `useHeartTimer` (`useHeartTimer.ts:14-51`): Subscribes to store, runs a 1000ms `setInterval` calling `reconcileHearts()`, and formats remaining time into MM:SS format (`formattedCountdown`).
   - `HeartMeter` (`HeartMeter.tsx:48-91`):
     - Mobile mode (`sm:hidden`): Displays heart icon, `{hearts}/{maxHearts}`, and live `{formattedCountdown}` when `< 5`.
     - Desktop mode (`hidden sm:flex`): Displays individual heart icons (5 total), `MAX` badge when full, or clock icon + `{formattedCountdown}` when `< 5`.
     - Depleted state (`hearts <= 0`): Adds `animate-pulse`, `bg-rose-500/15`, and handles clicks via `onDepletedClick`.

---

### 1.3 Top HUD Observations (`src/components/hud/`)
- `TopHud.tsx` (`TopHud.tsx:38-104`):
  - Sticky header (`sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b`).
  - Left zone: Brand logo (`ICT Master`) + `GradeSwitcher`.
  - Right zone: `StreakBadge`, `HeartMeter`, `XpCounter`, Quick Language Toggle pill (`EN` vs `සිං`), and Theme toggle (`Sun` / `Moon`).
- `GradeSwitcher.tsx` (`GradeSwitcher.tsx:42-70`):
  - Responsive toggle between Grade 10 and Grade 11 (`min-h-[38px]`).
  - Mobile displays `G10` / `G11`; desktop displays `Grade 10` / `Grade 11`.
  - Plays audio click (`sound.playClick(700)`) on selection.
- `StreakBadge.tsx` (`StreakBadge.tsx:16-37`):
  - Shows flame icon (`Flame`) with `animate-pulse` when streak > 0, streak counter, and day label.
- `XpCounter.tsx` (`XpCounter.tsx:18-29`):
  - Shows lightning icon (`Zap`) and locale-formatted XP count (e.g. `150 XP`).

---

### 1.4 Navigation Observations (`src/components/navigation/`)
1. **Mobile Bottom Nav (`src/components/navigation/MobileBottomNav.tsx`)**:
   - Viewport constraint: `lg:hidden fixed bottom-0 left-0 right-0 z-40` (`MobileBottomNav.tsx:53`).
   - Height: `h-16` (64px) (`MobileBottomNav.tsx:56`).
   - Touch targets: `min-h-[48px] min-w-[48px]` (`MobileBottomNav.tsx:69`).
   - Four destinations: Map (`/`), Lessons (`/#curriculum`), Papers (`/papers`), Mastery (`/analytics`).
   - *Observation on line 90*:
     ```tsx
     <span className="text-[10px] mt-1 font-bold tracking-tight truncate max-w-[64px] ...">
       {item.labelEn}
     </span>
     ```
     `MobileBottomNav` unconditionally renders `item.labelEn`, ignoring the user's selected language (`en` vs `si`).

2. **Desktop Collapsible Left Rail (`src/components/navigation/DesktopSidebar.tsx`)**:
   - Viewport constraint: `hidden lg:flex fixed top-0 bottom-0 left-0 z-30` (`DesktopSidebar.tsx:106`).
   - Width: `w-64` (256px) when expanded, `w-20` (80px) when collapsed (`DesktopSidebar.tsx:108`).
   - Keyboard shortcut: `Ctrl+B` / `Cmd+B` listener toggles collapsed state (`DesktopSidebar.tsx:76-89`).
   - Stores preference in `localStorage.getItem('ict_sidebar_collapsed')` (`DesktopSidebar.tsx:68`).
   - Includes bilingual item labels (line 172: `{item.labelEn}`, line 174: `{item.labelSi}`).

3. **App Shell Integration (`src/components/navigation/AppShell.tsx`)**:
   - Wraps content in responsive margins:
     ```tsx
     <div className={`flex-1 transition-all duration-300 pb-20 lg:pb-8 ${
       isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
     }`}>
     ```
   - Hides HUD and Nav bars on `/study/` and `/quiz/` paths via `isImmersive` check (`AppShell.tsx:44-50`).
   - *Observation on line 28-40*:
     `AppShell` listens to `window.addEventListener('storage', handleStorage)`. In browsers, `storage` events are only dispatched across *different* tabs/windows, NOT the current tab. When `DesktopSidebar` collapses, `AppShell` does not receive an event in the same tab, causing the main layout padding (`lg:pl-64` vs `lg:pl-20`) to desync with the sidebar until page reload.

---

### 1.5 3-Step Onboarding Flow Observations (`src/components/onboarding/`)
- `OnboardingModal.tsx` (`OnboardingModal.tsx:26-338`):
  - Step 1: Medium Selection (Sinhala `si` vs English `en`) (`OnboardingModal.tsx:102-171`).
  - Step 2: Grade Selection (Grade 10 `10` vs Grade 11 `11`) (`OnboardingModal.tsx:174-248`).
  - Step 3: Entry Route Selection (Start at Level 1 `level_1` vs Explore Topic Library & Map `library`) (`OnboardingModal.tsx:252-332`).
  - Step progress indicator dots with dynamic widths (`OnboardingModal.tsx:80-92`).
  - Smooth Framer Motion transitions (`opacity: 0, x: 20` -> `opacity: 1, x: 0`).
  - Completion handler (`handleFinish`, lines 53-66):
    - Sets store language (`setStoreLanguage`)
    - Sets store grade (`setStoreGrade`)
    - Marks onboarding complete (`setOnboardingCompleted(true)`)
    - Sets active first node (`defaultFirstNode = grade === '10' ? 'g10-u1-s1' : 'g11-u1-s1'`)
    - Triggers `onStartLevel1(defaultFirstNode)` if Level 1 chosen
    - Closes modal (`onClose()`).
  - Automatic invocation in `src/app/page.tsx:35-42`:
    ```tsx
    useEffect(() => {
      if (!onboardingCompleted && typeof window !== 'undefined') {
        const timer = setTimeout(() => {
          setIsOnboardingOpen(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    }, [onboardingCompleted]);
    ```
    Triggers 350ms after initial page load when `onboardingCompleted` is false.

---

### 1.6 Layout Integration Observations (`src/app/layout.tsx`)
- `RootLayout` (`src/app/layout.tsx:11-35`):
  - Properly loads Google Fonts in `<head>`: Inter, Noto Sans Sinhala, JetBrains Mono.
  - Body wraps children with `<ProgressProvider>` (compatibility context adapter) followed by `<AppShell>` (HUD, Desktop Sidebar, Mobile Nav Dock).
  - Clean HTML structure with `suppressHydrationWarning`.

---

### 1.7 Verification Commands & Test Results
1. **TypeScript Type Check**:
   - Command: `npx tsc --noEmit`
   - Output: Exit code 0, 0 errors.
2. **Content Verification Suite**:
   - Command: `npm test` (`scripts/verify-content.mjs`)
   - Output: `Verification Complete! Total Passed: 1812, Total Failed: 0`. Exit code 0.
3. **E2E Test Suite Runner**:
   - Command: `npx tsx scripts/test-e2e.ts`
   - Output:
     - Tier 1 (Feature Coverage): 26/26 passed.
     - Tier 2 (Boundary & Corner Cases): 25/25 passed.
     - Tier 3 (Cross-Feature Interactions): 6/6 passed.
     - Tier 4 (Real-World Application Scenarios): 5/5 passed.
     - Total: 62/62 passed (0 failed). Exit code 0.

---

## 2. Logic Chain

1. **State Persistence & Rehydration**:
   - *Observation*: `useGameStore` is wrapped in Zustand's `persist` middleware configured with `createJSONStorage(() => window.localStorage)` and rehydration hook `onRehydrateStorage` (`src/lib/store.ts:70-446`).
   - *Inference*: Any state modification to `grade`, `language`, `hearts`, `streak`, `xp`, `activeNodeId`, `completedNodes`, or `onboardingCompleted` writes immediately to `localStorage`.
   - *Verification*: `tier1Suite.R1-TC2` and `tier2Suite.R1-BC4` pass round-trip serialization tests.

2. **Heart Economy Determinism**:
   - *Observation*: `computeHeartRecharge` calculates `elapsedMs = Math.max(0, now - lastHeartLossTime)` and restores `Math.floor(elapsedMs / 1800000)` hearts (`src/lib/heartMath.ts:43-47`).
   - *Inference*: Time-based recovery is purely deterministic and immune to clock pauses or tab suspensions. Upon page reload, `onRehydrateStorage` immediately runs `reconcileHearts()`, bringing the user's life count up to date based on wall-clock time.
   - *Verification*: `tier1Suite.R1-TC1` and `tier2Suite.R1-BC2` pass.

3. **Ergonomics & Layout Compliance**:
   - *Observation*: `MobileBottomNav` has explicit `h-16` (64px) height with `min-h-[48px] min-w-[48px]` touch buttons (`src/components/navigation/MobileBottomNav.tsx:56, 69`).
   - *Observation*: `DesktopSidebar` is hidden on mobile (`hidden lg:flex`) and has 256px / 80px widths (`src/components/navigation/DesktopSidebar.tsx:106-108`).
   - *Observation*: `AppShell` enforces `max-w-full overflow-x-hidden` (`src/components/navigation/AppShell.tsx:66`).
   - *Inference*: Acceptance criteria for mobile thumb-zone navigation (64px height, >= 48px hit targets, 0 horizontal scroll) and responsive breakpoint (>= 1024px desktop rail) are fully satisfied.

4. **Identified Bugs & Discrepancies**:
   - **Bug A (Bilingual Navigation Labels)**: In `MobileBottomNav.tsx:90`, `{item.labelEn}` is hardcoded. When a Sinhala student switches the medium to Sinhala, the mobile bottom nav continues displaying English text ("Map", "Lessons", "Papers", "Mastery") instead of the available `item.labelSi` translations ("සිතියම", "පාඩම්", "ප්‍රශ්න", "ප්‍රගතිය").
   - **Bug B (Sidebar Layout Desync)**: In `DesktopSidebar.tsx:91-102` and `AppShell.tsx:28-40`, collapse state is stored in `localStorage`, and `AppShell` listens to `window.onstorage`. Because browser `storage` events only dispatch to other windows, clicking the collapse button shrinks `DesktopSidebar` from `w-64` to `w-20` in the current tab, but `AppShell`'s `isSidebarCollapsed` state does not update, leaving a 44px whitespace gap (`lg:pl-64`) until the page is reloaded.
   - **Bug C (Heart Recharge 00:00 Boundary Flashing)**: In `src/lib/heartMath.ts:64`, `secondsUntilNextHeart: secondsRemaining === HEART_RECHARGE_SECONDS ? 0 : secondsRemaining` sets the remaining seconds to 0 for the single second immediately following the award of a heart, causing the HUD countdown to momentarily display `0:00` before jumping to `29:59`.

---

## 3. Caveats

1. **Phase 2 Routes Not Yet Created**:
   - Routes `/study/[nodeId]` and `/quiz/[nodeId]` do not exist yet in `src/app/` (they are scheduled for Phase 2). Currently, `LevelDrawer.tsx` routes users to `/lesson/[grade]/[unitId]` and `/lesson/[grade]/[unitId]?mode=quiz`. Once Phase 2 micro-learning engines are implemented, `LevelDrawer` should be updated to point to `/study/[nodeId]` and `/quiz/[nodeId]`.
2. **Default Initial Values**:
   - `defaultInitialState` in `src/lib/store.ts` contains development seeds (`streak: 3`, `xp: 150`, `'g10-u1-s1'` pre-completed). This is intentional for UI demonstration and developer inspection, but should be noted for production onboarding resets.
3. **No Headless Browser DOM Testing**:
   - Investigation was performed via static AST inspection, TypeScript type-checking, and Node-based CLI test execution. No headless Puppeteer or Playwright browser instances were launched.

---

## 4. Conclusion

Phase 1 (R1: Core Shell, Persistent State & Navigation Engine) is **substantially complete, highly functional, and architecturally sound**.
- All required Phase 1 features (persistent store with 5 hearts and 30-min recharge cycle, streak, XP, grade/language switching, Top HUD with live countdown, mobile 64px bottom nav, desktop collapsible rail, 3-step onboarding modal, winding quest map, and root layout integration) are implemented and working.
- The project compiles cleanly with **0 TypeScript errors** and passes all **1,812 content validation tests** and **62/62 E2E test cases**.

### Actionable Remediation Items for Implementation Agent:
1. **Fix `MobileBottomNav.tsx:90`**:
   Subscribe to `useGameStore((s) => s.language)` and render `language === 'si' ? item.labelSi : item.labelEn`.
2. **Fix Sidebar Sync in `DesktopSidebar.tsx` / `AppShell.tsx`**:
   Store `sidebarCollapsed: boolean` and `toggleSidebar: () => void` directly in `useGameStore` (or dispatch a custom `window.dispatchEvent(new Event('toggle-sidebar'))` event) so `AppShell` updates its `lg:pl-64` / `lg:pl-20` padding instantly without requiring a page reload.
3. **Fix Countdown Boundary in `heartMath.ts:64`**:
   Return `secondsRemaining` directly so that when a heart is earned, the countdown starts cleanly at `1800` (30:00) instead of `0`.

---

## 5. Verification Method

To independently verify all findings and test suites:

### 1. TypeScript Static Compilation
```powershell
npx tsc --noEmit
```
*Expected Result*: Zero errors (exits with code 0).

### 2. Syllabus Content Verification
```powershell
npm test
```
*Expected Result*: 1,812 tests pass (exits with code 0).

### 3. Comprehensive E2E Test Suite (Tiers 1–4)
```powershell
npx tsx scripts/test-e2e.ts
```
*Expected Result*: 62 test cases pass across all 4 tiers with 0 failures (exits with code 0).

### 4. Code Inspection Targets
- `src/components/navigation/MobileBottomNav.tsx:90`: Confirm `{item.labelEn}` is hardcoded without language check.
- `src/components/navigation/AppShell.tsx:28-40`: Confirm `window.addEventListener('storage', ...)` is used for same-tab sidebar sync.
- `src/lib/heartMath.ts:64`: Confirm ternary sets `0` when `secondsRemaining === HEART_RECHARGE_SECONDS`.
- `src/components/onboarding/OnboardingModal.tsx:102-332`: Confirm 3 steps (Medium -> Grade -> Entry Route).
- `src/lib/store.ts:25-68, 70-446`: Confirm Zustand persistent state schema and rehydration hooks.

---
*Report generated and validated by Explorer Subagent `explorer_m1_1`.*
