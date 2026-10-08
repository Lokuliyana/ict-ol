# M1 Explorer 2 (HUD & Navigation) Handoff Report

**Agent**: M1 Explorer 2 (`teamwork_preview_explorer_m1_2`)  
**Parent Agent**: bb6ed492-0834-4277-9fef-0d2bd7fec816 (`orchestrator_1`)  
**Scope**: Milestone 1 (R1) — Top HUD, Mobile Bottom Navigation (64px) & Desktop Left Rail (>= 1024px)  
**Date**: 2026-10-08  

---

## 1. Observation

Direct observations from examining the codebase files:

1. **Top Header Inspection (`src/components/Header.tsx`)**:
   - `Header.tsx` (lines 103–114) only renders `state.streak` ("Day Streak") and `state.points` ("XP"):
     ```tsx
     105: <div className="hidden lg:flex items-center gap-2 mr-1">
     106:   <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 ...">
     107:     <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
     108:     <span>{state.streak} Day Streak</span>
     109:   </div>
     110:   <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 ...">
     111:     <Award className="w-3.5 h-3.5 text-indigo-500" />
     112:     <span>{state.points} XP</span>
     113:   </div>
     114: </div>
     ```
   - **Missing Heart Containers**: There are zero references to heart containers, lives, or a 30-minute recharge timer in `Header.tsx`.
   - **Missing Grade Switcher**: `Header.tsx` does not render a Grade switcher. The Grade 10 vs 11 toggle is currently hardcoded only on the homepage (`src/app/page.tsx`, lines 121–155).
   - **Mobile Clutter**: Lines 163–189 render a secondary language switcher row (`sm:hidden px-4 py-2 border-t`) that consumes excessive vertical space on mobile screens.

2. **Mobile Dock Inspection (`src/components/MobileBottomDock.tsx`)**:
   - Lines 31–32 define the container as:
     ```tsx
     31: <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 ... px-3 py-2 shadow-2xl safe-area-bottom">
     32:   <div className="flex items-center justify-around">
     ```
   - **Height Non-conformance**: Height is dynamic via `py-2` rather than strictly 64px (`h-16`).
   - **Touch Target Non-conformance**: Inner link items (lines 34–47) use `py-1 px-3` with icon `w-5 h-5`, which fails the strict `>= 48px` minimum touch target requirement.
   - **Navigation Destinations**: Renders 5 disparate items (`Journey`, `Syllabus`, elevated `Switch` circular button, `Mastery`, `Settings` badge) rather than the required 4 canonical destinations: **Quest Map**, **Practice/Study**, **Arena/Papers**, and **Settings/Profile**.

3. **Desktop Left Rail Inspection**:
   - `find_by_name` across `src/` for `*sidebar*`, `*rail*`, or `*nav*` returned 0 results.
   - There is no desktop left rail or sidebar component anywhere in `src/components/`. Viewports `>= 1024px` currently rely solely on the top header.

4. **Root Layout & Page Mounting (`src/app/layout.tsx` & `src/app/page.tsx`)**:
   - In `src/app/layout.tsx` (lines 26–28):
     ```tsx
     26: <ProgressProvider>
     27:   {children}
     28: </ProgressProvider>
     ```
   - `layout.tsx` contains no persistent shell. `<Header />` and `<MobileBottomDock />` are manually duplicated across `src/app/page.tsx` (lines 49 & 291), `src/app/analytics/page.tsx` (line 10), and `src/app/lesson/[grade]/[lessonId]/page.tsx` (lines 5 & 117).

5. **Tooling & Packages (`package.json`)**:
   - Tailwind CSS v3.4.17 with PostCSS.
   - Next.js v15.2.1 App Router and React 19.
   - Lucide React v1.16.0 (supplying `Flame`, `Heart`, `Clock`, `Compass`, `BookOpen`, `Swords`, `BarChart2`, `PanelLeftClose`, `PanelLeftOpen`).
   - Framer Motion v14.0.0.

---

## 2. Logic Chain

1. **Step 1 (Top HUD Modularization)**:
   - *Based on Observation 1*: `Header.tsx` lacks heart containers, live countdown timers, and the persistent Grade 10 vs 11 toggle.
   - *Reasoning*: A monolithic 193-line header mixing layout, breadcrumbs, theme toggles, and missing game mechanics is difficult to maintain and test. Modularizing into `TopHud.tsx` with discrete subcomponents (`HeartMeter.tsx`, `GradeSwitcher.tsx`, `StreakBadge.tsx`, `XpCounter.tsx`) isolates the 30-minute countdown interval calculation in `HeartMeter` and prevents unnecessary re-renders of the entire header.

2. **Step 2 (Grade Switcher Reactivity)**:
   - *Based on Observation 1 & 4*: The Grade switcher was only located in `src/app/page.tsx`.
   - *Reasoning*: Moving the Grade switcher to the sticky Top HUD ensures students can seamlessly toggle between Grade 10 and Grade 11 from anywhere in the application (including Arena, Analytics, and Topic Library) with instant state propagation.

3. **Step 3 (Mobile Bottom Nav 64px & Touch Ergonomics)**:
   - *Based on Observation 2*: The current dock uses arbitrary padding and does not meet the 64px height and >=48px touch target specifications.
   - *Reasoning*: Standardizing to `fixed bottom-0 inset-x-0 h-16` (64px) with `grid grid-cols-4` allocates 25% of viewport width per tab. On a 360px screen, this provides a 90px $\times$ 64px touch zone per button, comfortably exceeding the `>= 48px` requirement. Adding `pb-[env(safe-area-inset-bottom,0px)]` ensures iOS home indicators do not obscure touch areas.

4. **Step 4 (Desktop Left Rail Implementation)**:
   - *Based on Observation 3*: The absence of a desktop left rail leaves large desktop viewports (>= 1024px) underutilized and lacking persistent navigation anchors.
   - *Reasoning*: Implementing `DesktopSidebar.tsx` with collapsible states (`w-64` expanded, `w-20` collapsed, `transition-[width] duration-300`) provides a Duolingo/Discord-style navigation experience. LocalStorage persistence guarantees user preference is remembered across sessions.

5. **Step 5 (Unified Layout Shell & Immersive Mode Separation)**:
   - *Based on Observation 4*: Header and dock are redundantly mounted in individual page files.
   - *Reasoning*: Introducing `AppShell.tsx` inside `src/app/layout.tsx` centralizes Top HUD, Desktop Rail, and Mobile Nav mounting. Furthermore, checking `pathname.startsWith('/study') || pathname.startsWith('/quiz')` allows `AppShell` to automatically suppress the sidebar and bottom dock during micro-learning runs, ensuring quiz action buttons (`Check Answer`, `Continue`) occupy the thumb-zone without interference.

---

## 3. Caveats

1. **Persistent State Store Dependency**:
   - Explorer 1 is defining the Zustand store (`src/lib/store.ts`).
   - The HUD prop contracts and hooks in our design are intentionally decoupled: they can directly consume `useGameStore()` or accept prop overrides, allowing immediate drop-in implementation without waiting on store finalization.
2. **Immersive Learning Loop Routes**:
   - Routes `/study/[nodeId]` and `/quiz/[nodeId]` will be implemented in Milestone 2. Our `AppShell` design proactively includes route detection so Milestone 2 will not require restructuring the navigation shell.
3. **No Project Source Modified**:
   - Following the Teamwork Explorer protocol, no project source code was modified during this investigation. All specifications, architecture models, and component blueprints are documented in `report.md`.

---

## 4. Conclusion

The HUD and navigation implementation strategy is complete, fully specified, and documented in `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_2\report.md`.

### Recommended Action Plan for M1 Implementer:
1. **Create HUD Subcomponents (`src/components/hud/`)**:
   - `HeartMeter.tsx`: 5 hearts with live 30-min countdown interval (`+1 in mm:ss`).
   - `GradeSwitcher.tsx`: Instant reactive 10 vs 11 toggle.
   - `StreakBadge.tsx`: Pulsing flame study streak badge.
   - `XpCounter.tsx`: Formatted XP display.
   - `TopHud.tsx`: Assembled persistent sticky header.
2. **Create Navigation Components (`src/components/navigation/`)**:
   - `MobileBottomNav.tsx`: 64px height (`h-16`), 4 grid columns (`Map`, `Practice`, `Arena`, `Profile`), `>= 48px` touch targets, safe-area padding, zero horizontal scroll.
   - `DesktopSidebar.tsx`: Collapsible left rail (`w-64` <-> `w-20`) for viewports `>= 1024px` with localStorage persistence and `Ctrl+B` shortcut.
3. **Assemble Unified Layout Shell (`src/components/layout/AppShell.tsx`)**:
   - Mount in `src/app/layout.tsx`.
   - Remove redundant `<Header />` and `<MobileBottomDock />` calls in page components.

---

## 5. Verification Method

To independently verify the implementation once coded:

1. **TypeScript Compilation & Build Verification**:
   ```bash
   npm run build
   ```
   *Expected outcome*: Next.js build succeeds with zero TypeScript errors and zero linting warnings.

2. **Content and Utility Verification**:
   ```bash
   npm test
   ```
   *Expected outcome*: All 1,812 assertions in `scripts/verify-content.mjs` pass cleanly.

3. **Responsive Breakpoint & Zero Horizontal Scroll Inspection**:
   - Viewport **360px** (Mobile Small): Confirm `document.documentElement.scrollWidth === window.innerWidth`. Confirm `MobileBottomNav` is 64px in height and all 4 buttons have bounding box width >= 80px and height >= 48px. Confirm `DesktopSidebar` is `display: none`.
   - Viewport **768px** (Tablet): Confirm `MobileBottomNav` remains active and `DesktopSidebar` is `display: none`.
   - Viewport **1024px** (Desktop Boundary): Confirm `MobileBottomNav` becomes `display: none` and `DesktopSidebar` becomes visible.
   - Viewport **1440px** (Desktop Large): Confirm clicking the collapse toggle button shrinks `DesktopSidebar` from 256px to 80px in 300ms, and state is preserved on page refresh.

4. **Heart Countdown Live Verification**:
   - Set `hearts = 4` and `lastHeartLossTime = Date.now() - (10 * 60 * 1000)`.
   - Verify `HeartMeter` renders `(20m)` on mobile and `+1 in 20:00` on desktop, decrementing every second.

5. **Invalidation Conditions**:
   - If any mobile screen width between 360px and 412px exhibits horizontal scrolling (`scrollWidth > innerWidth`).
   - If `MobileBottomNav` height differs from 64px (`4rem` / `h-16`).
   - If any button in `MobileBottomNav` has an interactive hit target smaller than 48px $\times$ 48px.
   - If switching grades does not immediately update the active curriculum nodes and HUD grade indicator.
