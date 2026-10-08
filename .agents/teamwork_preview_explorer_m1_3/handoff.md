# Handoff Report: 3-Step Onboarding & Winding Quest Map

**Agent**: M1 Explorer 3 (Onboarding & Quest Map)  
**Milestone**: M1 (R1)  
**Working Directory**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3`  
**Target Path**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\handoff.md`  
**Date**: 2026-10-08  
**Handoff Type**: Hard (Task Complete)  

---

## 1. Observation

1. **`src/components/GuidedFlowModal.tsx`**:
   - Lines 35–40, 106, 127–510: Modal is structured with **4 steps** (`Step 1 / 4` header tag at line 106).
   - Lines 152–229 (Step 1): Prompts for `dual`, `si`, `en` with `dual` as the first and primary card.
   - Lines 390–508 (Step 4): Nested unit selection scroll list (`max-h-40 overflow-y-auto`) and 3 secondary sub-mode launch buttons ("Start from Part 01", "Read Theory Notes First", "Jump to Past Papers").
   - Line 69: Selecting "Start from Beginning" directly executes `router.push(`/lesson/${selectedGrade}/${lessonId}?flow=beginning`)` instead of launching micro-learning engines or the quest map.
2. **`src/components/QuestRoadmap.tsx`**:
   - Lines 404–538: Renders a vertical list where each node is rendered inside an alternating lateral offset class (`offsets = ['translate-x-0', 'sm:translate-x-12', 'translate-x-0', 'sm:-translate-x-12']`).
   - Lines 421–430: Uses a straight vertical bar connector (`<div className="w-2.5 h-12 bg-slate-200 ...">`) rather than a continuous winding SVG spline.
   - Line 455: Node containers have fixed minimum and maximum card widths (`style={{ minWidth: '280px', maxWidth: '360px' }}`). On a 360px mobile screen, lateral offset causes viewport crowding and horizontal clipping.
   - Line 443: Tapping a node is a direct `<Link href="...">` that immediately navigates the browser away to `/lesson/[grade]/[lessonId]`.
   - Lines 460–480: Boss nodes display `Swords` icon (`<Swords className="w-7 h-7 text-white" />`) without crown iconography or boss arena drawer triggers.
3. **`LevelDrawer.tsx`**:
   - File search across `src/components/` and `src/` confirmed zero files named `LevelDrawer.tsx` or matching `*Drawer*` (find tool returned 0 results).
4. **`src/app/page.tsx`**:
   - Lines 9–10, 52–56, 196–198: Mounts `GuidedFlowModal` and `QuestRoadmap` directly on the homepage.
5. **Acceptance Criteria & Tool Execution**:
   - `npm test` (`npx tsx scripts/verify-content.mjs`): 1,812 assertions passing, exit code 0.
   - `npm run build`: Next.js 15 App Router compilation clean, exit code 0.

---

## 2. Logic Chain

1. **From Observation 1 (GuidedFlowModal 4 steps) to Onboarding Refactoring**:
   - `ORIGINAL_REQUEST.md` §R1 explicitly mandates: *"Zero-friction 3-step onboarding flow (Medium: Sinhala vs. English -> Grade: 10 vs 11 -> Entry Route: Level 1 vs. Topic Library)"*.
   - Observation 1 reveals that the existing modal has 4 steps, prioritizes dual-mode over Sinhala/English dichotomy, and ends in a complex nested unit dropdown (lines 390–508) which creates cognitive fatigue.
   - Therefore, `GuidedFlowModal.tsx` must be refactored into `src/components/onboarding/OnboardingModal.tsx` containing strictly 3 steps: Step 1 (Medium: Sinhala vs. English), Step 2 (Grade: 10 vs. 11), and Step 3 (Entry Route: Level 1 Start vs. Topic Library).
   - Selecting "Level 1 Start" must set `onboardingCompleted: true` and route to the first level (`/study/g10-u01-n01` or station 1), while "Topic Library" sets `onboardingCompleted: true` and reveals the quest map.

2. **From Observation 2 (QuestRoadmap wide cards & vertical connector) to Winding SVG Quest Map**:
   - Observation 2 demonstrates that 360px wide rectangular cards cannot zig-zag meaningfully on mobile viewports (360px–412px width), and a straight 10px vertical bar fails the Candy Crush / Duolingo winding quest road aesthetic.
   - To achieve a true winding quest map with zero horizontal overflow, rectangular cards must be replaced with compact **circular squircle nodes** (76px–80px diameter for standard nodes, 96px for Unit Bosses).
   - By calculating the coordinate center $(X_i, Y_i)$ for each node across a 4-channel alternating cycle ($200\text{px}, 96\text{px}, 200\text{px}, 304\text{px}$) inside a responsive SVG viewBox (`viewBox="0 0 400 totalHeight"`), a smooth cubic Bézier spline can be rendered:
     $$\text{C } X_i\ (Y_i + 60),\ X_{i+1}\ (Y_{i+1} - 60),\ X_{i+1}\ Y_{i+1}$$
   - This provides $C^1$ tangent continuity, ensuring a fluid, natural winding path with an underlying slate track and glowing cyan/emerald active progress line.

3. **From Observation 2 (missing node states) to 4-State Visual Treatment**:
   - The spec demands 4 distinct visual node states:
     - *Gold Cleared*: Amber gradient button, white checkmark, arched 3-star container beneath.
     - *Neon Pulsing Active*: Cyan/indigo gradient, beacon wave halo animation (`framer-motion`), play glyph, and hovering "START HERE" badge.
     - *Slate Locked*: Muted slate-800 button, padlock glyph, subtle shake feedback on touch.
     - *Crown Unit Boss*: 96px pedestal button, royal crimson/gold gradient, glowing `Crown` icon, and "UNIT BOSS" banner.

4. **From Observation 3 (missing LevelDrawer) & Observation 2 (immediate link navigation) to Level Details Drawer**:
   - Because `LevelDrawer.tsx` does not exist and nodes currently jump immediately into lesson runners on click, users have no preview of what a node entails.
   - Creating `src/components/map/LevelDrawer.tsx` as a slide-up bottom sheet (`framer-motion`, `max-h-[85vh]`, backdrop blur) allows tapping any unlocked node to display the node title, unit badge, earned stars, theory card preview, and a full-width $\ge 48\text{px}$ "Start Lesson" CTA in the bottom thumb zone.

---

## 3. Caveats

1. **Curriculum Schema Realignment (M3 Dependency)**:
   - Grade 10 currently has 8 units in `curriculum.ts` because Units 3 and 4 were combined. When M3 splits them into 9 discrete units, the quest node array in `QuestMap.tsx` will seamlessly receive the expanded 15 units without changing map geometry.
2. **Micro-Learning Route Launch (M2 Dependency)**:
   - When M2 introduces `/study/[nodeId]`, the primary CTA in `LevelDrawer.tsx` will navigate to `/study/[nodeId]` rather than the legacy linear lesson runner route `/lesson/[grade]/[lessonId]?station=...`. Both routes are supported by the contract.
3. **No Code Modification Constraint**:
   - As an Explorer subagent, no source code files in `src/` were modified. Complete reference code and architectural contracts are provided in `report.md`.

---

## 4. Conclusion

The transition from the legacy modal and vertical roadmap to the gamified 3-step onboarding and winding SVG quest map is fully designed and ready for implementation:
- **3-Step Onboarding (`OnboardingModal.tsx`)**: Replaces the 4-step modal with a zero-friction flow (Medium -> Grade -> Entry Route) with full persistent state synchronization.
- **Winding SVG Quest Map (`QuestMap.tsx` & `LevelNodeButton.tsx`)**: Establishes a responsive cubic Bézier spline on a 400px viewBox with 4 distinct visual states (Gold Cleared, Neon Pulsing Active, Slate Locked, Crown Unit Boss) and 76px/96px thumb-zone nodes.
- **Level Details Drawer (`LevelDrawer.tsx`)**: Delivers the missing slide-up preview sheet with unit badge, star rating, theory overview, and 56px thumb-zone action CTA.

---

## 5. Verification Method

### Concrete Verification Steps for Implementer

1. **Verify Existing Tests Pass**:
   ```powershell
   npx tsx scripts/verify-content.mjs
   npm run build
   ```
2. **Inspect Recommendations Report**:
   Inspect `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\report.md` for full implementation code and architectural diagrams.
3. **Verify File Layout Compliance**:
   Confirm that newly created components are located strictly at:
   - `src/components/onboarding/OnboardingModal.tsx`
   - `src/components/map/QuestMap.tsx`
   - `src/components/map/LevelNodeButton.tsx`
   - `src/components/map/LevelDrawer.tsx`
4. **Responsive Mobile Testing**:
   - Launch `npm run dev` and open Chrome DevTools device mode.
   - Test at viewport widths: 360px (Samsung Galaxy S8), 375px (iPhone SE), 390px (iPhone 12), and 412px (Pixel 7).
   - Ensure horizontal scrollbar never appears (`overflow-x` is 0).
   - Verify all buttons have touch height $\ge 48\text{px}$.
5. **State Reload Persistence**:
   - Complete 3-step onboarding.
   - Refresh the page and confirm onboarding does not re-open.
   - Confirm selected Grade and Medium are active in the HUD and Quest Map.
