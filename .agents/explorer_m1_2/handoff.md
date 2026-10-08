# Handoff Report: Quest Map & Node Visualization (Phase 1 / R1)

## 1. Observation

### 1.1 Codebase File Locations & Architecture
- **Home Integration**: `src/app/page.tsx`
  - Line 9: Imports `QuestMap` (`import { QuestMap } from '@/components/map/QuestMap';`).
  - Lines 29, 161–194: Declares `viewMode: 'map' | 'curriculum'` state and toggle buttons.
  - Lines 197–201: Renders `<QuestMap />` conditionally when `viewMode === 'map'`.
- **Winding Quest Map Component**: `src/components/map/QuestMap.tsx` (573 lines)
- **Node Interactive Button**: `src/components/map/LevelNodeButton.tsx` (132 lines)
- **Level Details Drawer**: `src/components/map/LevelDrawer.tsx` (242 lines)
- **Curriculum Data Sources**:
  - `src/data/curriculum.ts` contains `CURRICULUM_DATA: LessonMeta[]` (8 units for G10, 6 units for G11).
  - There is **no** `src/data/curriculumData.ts` file in the repository.

---

### 1.2 Winding SVG / Flex Map & Coordinate Geometry
- **Layout Model**:
  - `QuestMap.tsx:365–366`:
    ```typescript
    const nodeSpacing = 145; // Vertical px between nodes
    const totalHeight = 80 + quests.length * nodeSpacing;
    ```
  - `QuestMap.tsx:369–383`:
    ```typescript
    const nodeCoordinates = useMemo(() => {
      return quests.map((q, idx) => {
        const y = 80 + idx * nodeSpacing;
        if (q.isBoss) {
          return { x: 200, y };
        }
        // Winding oscillation pattern: Center -> Left -> Center -> Right
        const pattern = idx % 4;
        let x = 200;
        if (pattern === 1) x = 110;
        else if (pattern === 3) x = 290;

        return { x, y };
      });
    }, [quests]);
    ```
  - `QuestMap.tsx:389–396`: Spline is computed using cubic Bézier segments with control points at `y ± nodeSpacing / 2`:
    ```typescript
    fullD += ` C ${p0.x} ${cp1y}, ${p1.x} ${cp2y}, ${p1.x} ${p1.y}`;
    ```
  - `QuestMap.tsx:478–481`:
    ```xml
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 400 ${totalHeight}`}
      preserveAspectRatio="xMidYMin meet"
    >
    ```
  - `QuestMap.tsx:534–545`:
    ```typescript
    const leftPct = (coord.x / 400) * 100;
    return (
      <div
        key={node.id}
        className="absolute"
        style={{
          left: `${leftPct}%`,
          top: `${coord.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
    ```
  - **Mobile Alignment Defect**: SVG uses `preserveAspectRatio="xMidYMin meet"` inside a responsive container (`w-full max-w-xl`), which uniformly scales X and Y inside the SVG by `width / 400`. On viewports where width < 400px (e.g. mobile 360px–390px), SVG Y coordinates are scaled down by ~10% (scale = 0.9), whereas the HTML node elements use absolute pixel values (`top: ${coord.y}px`), leading to a vertical drift between the SVG road and the button nodes of up to ~196px by the bottom of the map.

---

### 1.3 Active Neon Path Segment Computation
- `QuestMap.tsx:399–414`:
  ```typescript
  let activeD = '';
  const activeIdx = quests.findIndex((q) => q.id === activeNodeId);
  const targetIdx = activeIdx >= 0 ? activeIdx : 0;

  if (targetIdx > 0) {
    activeD = `M ${nodeCoordinates[0].x} ${nodeCoordinates[0].y}`;
    for (let i = 0; i < targetIdx; i++) {
      const p0 = nodeCoordinates[i];
      const p1 = nodeCoordinates[i + 1];
      const cp1y = p0.y + nodeSpacing / 2;
      const cp2y = p1.y - nodeSpacing / 2;
      activeD += ` C ${p0.x} ${cp1y}, ${p1.x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
  }
  ```
  - In initial state (`store.ts:38`), `activeNodeId = 'g10-u1-s1'`, which has `activeIdx = 0`.
  - Because `targetIdx === 0`, `activeD` is initially empty (`""`), meaning no active neon glowing line is drawn at all.
  - Furthermore, `useGameStore.completeNode` (`store.ts:207–253`) does not automatically advance `activeNodeId`, so `activeSegmentD` remains permanently empty unless `setActiveNode` is manually called by an external mechanism.

---

### 1.4 Node Visual States Implementation
- In `LevelNodeButton.tsx`:
  - **1. Gold Cleared**:
    - Lines 84–85: `w-20 h-20 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-b-4 border-amber-700 shadow-lg shadow-amber-500/30 text-slate-950`.
    - Line 96: `<Check className="w-9 h-9 stroke-[3.5] text-white drop-shadow" />`.
    - Lines 105–118: Arched star pedestal under the orb with 1–3 stars (`starIdx <= (stars || 1)`).
  - **2. Neon Active (Pulsing)**:
    - Lines 56–66: Floating bouncing badge `-top-8` with `<Sparkles>` and "START HERE".
    - Lines 68–71: Pulsing halo `<span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30 pointer-events-none scale-125" />`.
    - Lines 86–87: `w-20 h-20 bg-gradient-to-b from-cyan-400 via-indigo-600 to-indigo-700 border-b-4 border-indigo-950 shadow-xl shadow-cyan-500/40 ring-4 ring-cyan-400/60`.
    - Line 98: `<Play className="w-8 h-8 fill-white text-white ml-1 drop-shadow" />`.
  - **3. Slate Locked**:
    - Lines 88–89: `w-20 h-20 bg-slate-200 dark:bg-slate-800/90 border-b-4 border-slate-300 dark:border-slate-900 text-slate-400 dark:text-slate-600 cursor-not-allowed`.
    - Line 100: `<Lock className="w-7 h-7 text-slate-400 dark:text-slate-500" />`.
    - Lines 38–42: Shake animation (`x: [-5, 5, -5, 5, 0]`) and buzzer audio on click; click is prevented from triggering `onClick()`.
  - **4. Crown Unit Boss**:
    - Lines 82–83: `w-24 h-24 rounded-3xl bg-gradient-to-b from-rose-500 via-amber-500 to-red-600 border-b-4 border-red-950 shadow-2xl shadow-rose-500/40 ring-4 ring-amber-400/60`.
    - Line 94: `<Crown className="w-10 h-10 fill-amber-300 text-amber-300 drop-shadow-md" />`.
  - **State Logic Bugs**:
    - **Boss Nodes Never Lock**: In `QuestMap.tsx:433`:
      ```typescript
      return node.isBoss ? 'boss' : 'locked';
      ```
      Because `getNodeState` never returns `'locked'` when `node.isBoss === true`, uncompleted boss nodes always have state `'boss'`. In `LevelNodeButton.tsx:38`, clicks are only blocked when `state === 'locked'`. Consequently, **all boss nodes on the entire map are clickable from the start**, allowing players to bypass progression.
    - **Cleared Boss Visual Conflict**: In `LevelNodeButton.tsx:51`:
      ```typescript
      const isBossState = state === 'boss' || isBoss;
      ```
      Because `isBoss` is true, `isBossState` is evaluated before `isCleared` in the styling ternary (line 82: `isBossState ? ... : isCleared ? ...`). Thus, even after a boss is completed (`state === 'cleared'`), the button remains in red/rose combat boss styling rather than Gold Cleared crown styling.

---

### 1.5 Level Details Drawer Interaction & CTAs
- In `LevelDrawer.tsx`:
  - **Header & Info** (lines 105–136): Displays Unit badge (`Unit 01 • Basic Concepts...`), close button (`X`), and bilingual title (`titleEn`, `titleSi`).
  - **Mastery, Stars & XP Bar** (lines 138–167): Shows 1–3 stars, high accuracy percentage (`highAccuracy% High Score`), and XP reward (`+XP`).
  - **Sandbox Banner** (lines 169–184): Displays an informational card with `<Cpu>` and `node.sandboxName` if present.
  - **Objectives Preview** (lines 186–202): Unordered list of theory objectives from `node.bulletPoints`.
  - **Action Buttons** (lines 207–236):
    - Primary CTA: `Start Lesson / පාඩම අරඹන්න` or `Replay Lesson / නැවත පුහුණුවන්න` (calls `router.push('/lesson/${grade}/${node.unitId}')`).
      - Note: Label is NOT `Start Study` and target is NOT `/study/[nodeId]`.
    - Secondary CTA: `Jump to Quiz / පරීක්ෂණය` or `Enter Boss Past Paper Arena` (checks `canEnterQuiz` then calls `router.push('/lesson/${grade}/${node.unitId}?mode=quiz')`).
      - Note: Target is NOT `/quiz/[nodeId]`. If `hearts <= 0`, calls native browser `alert()` on line 76 because `onDepletedHearts` callback is not supplied by `QuestMap.tsx`.
    - **Missing CTA**: There is NO `Practice Sandbox` button to launch interactive sandboxes directly from the drawer.

---

### 1.6 Curriculum Data Feeding into Quest Map
- In `QuestMap.tsx:24–351`:
  - Quest nodes are **not** loaded from any external curriculum or syllabus store.
  - They are statically hardcoded as two local array constants: `GRADE_10_QUESTS` (14 items) and `GRADE_11_QUESTS` (8 items).
  - External curriculum data is only queried for unit titles on click (`QuestMap.tsx:437`):
    `const unitMeta = CURRICULUM_DATA.find((c) => c.id === node.unitId);`
  - **Syllabus Omissions in Stub Data**:
    - Grade 10: Includes Units 1, 2, 3, 4, 5, 6, 8. **Unit 7 (Presentations) is completely missing**. Unit 9 is missing (curriculum has 8 in `curriculum.ts`, but R3 / PROJECT.md requires 9 discrete units). Units 4, 5, and 6 have no Boss nodes.
    - Grade 11: Includes only Units 1, 2, 3, 4. **Unit 5 (HTML & CSS) and Unit 6 (ICT & Society) are completely missing**. In addition, `g11-u4` in the stub is titled "HTML Table Mason & Web Authoring", conflating Unit 4 (Multimedia) with Unit 5 (Web Design). Units 2 and 3 have no Boss nodes.

---

### 1.7 Verification Commands
- `npm run build`: Executed and finished with exit code 0 (`✓ Compiled successfully in 5.0s`, generated static pages for `/`, `/analytics`, `/lesson/[grade]/[lessonId]`, `/revision-sheet/[grade]/[lessonId]`).
- `npm test` (`scripts/verify-content.mjs`): 1,812 tests passed, 0 failed.
- `npm run test:e2e` (`scripts/test-e2e.ts`): All 62 test cases passed across Tiers 1–4.

---

## 2. Logic Chain

1. **Premise 1**: The user request and PROJECT.md §R1 require a winding SVG/flex quest map with alternating zig-zag nodes, clear node visual states (Gold Cleared 1-3 stars, Neon Active pulsing, Slate Locked, Crown Boss), Level Details Drawer with specific CTAs (`Start Study`, `Jump to Quiz`, `Practice Sandbox`), and proper data feeding.
2. **Observation -> Deduction (Road Alignment)**: `QuestMap.tsx:480` specifies `preserveAspectRatio="xMidYMin meet"` for the SVG, while `QuestMap.tsx:543` places HTML buttons with `top: ${coord.y}px`. When viewport width < 400px (e.g., mobile 360px), SVG points scale down by `360 / 400 = 0.9`, but the DOM buttons stay at fixed Y pixels. Therefore, the visual spline and node buttons detach vertically on mobile viewports.
3. **Observation -> Deduction (Boss Unlock Bypass)**: In `QuestMap.tsx:433`, the fallback in `getNodeState` is `return node.isBoss ? 'boss' : 'locked'`. Since `LevelNodeButton.tsx:38` only rejects clicks if `state === 'locked'`, any uncompleted boss node returns `'boss'`, remains active/clickable, and immediately opens the Level Details Drawer, violating sequential progression gating.
4. **Observation -> Deduction (Boss Cleared Styling)**: In `LevelNodeButton.tsx:51`, `isBossState` is defined as `state === 'boss' || isBoss`. Because `node.isBoss` is true for boss nodes, `isBossState` is always true regardless of whether `state === 'cleared'`. Since line 82 evaluates `isBossState ? ... : isCleared ? ...`, completed boss nodes never display the Gold Cleared styling.
5. **Observation -> Deduction (Level Drawer CTAs & Routing)**: `LevelDrawer.tsx:207–236` renders only two buttons: "Start Lesson" (routing to `/lesson/${grade}/${node.unitId}`) and "Jump to Quiz" (routing to `/lesson/${grade}/${node.unitId}?mode=quiz`). The button label `Start Study` is absent, the `Practice Sandbox` button is absent, and the targets do not link to `/study/[nodeId]` or `/quiz/[nodeId]` (which are planned for M2).
6. **Observation -> Deduction (Curriculum Integration)**: The quest nodes are not sourced dynamically from `src/data/curriculum.ts` or any `curriculumData.ts`. Instead, they reside in hardcoded in-file stubs (`GRADE_10_QUESTS` and `GRADE_11_QUESTS`) that omit critical units (G10 U7, G11 U5, G11 U6) and mislabel G11 U4.

---

## 3. Caveats

- **Scope Boundary**: This investigation is strictly read-only and did not modify application code.
- **Micro-Learning Engine Routes**: The current navigation in `LevelDrawer.tsx` routes to `/lesson/[grade]/[lessonId]` because `/study/[nodeId]` and `/quiz/[nodeId]` are slated for Milestone 2 (M2). The routes should only be switched once M2 story flashcard and blind quiz pages are implemented.
- **Syllabus Structure Differences**: The current `CURRICULUM_DATA` has 8 units for Grade 10 and 6 units for Grade 11 (14 units total), matching the current NIE syllabus division used in `scripts/verify-content.mjs`. However, PROJECT.md mentions 9 discrete units for Grade 10. The 15-unit restructuring is scoped for Milestone 3 (M3).

---

## 4. Conclusion

The core shell and visual presentation for the Quest Map and Node visualization are structurally functional and build cleanly, but require key fixes to achieve production-grade quality:

1. **Fix SVG-Node Responsive Alignment**:
   - Change SVG `preserveAspectRatio="none"` or use container scaling / percentage-based vertical coordinates (`top: ${(coord.y / totalHeight) * 100}%`) to prevent spline detachment on mobile screens (<400px width).
2. **Fix Boss Node State Gating**:
   - In `QuestMap.tsx:433`, change the fallback from `return node.isBoss ? 'boss' : 'locked'` to return `'locked'` if prerequisite nodes are not completed, and ensure `LevelNodeButton.tsx` renders locked boss styling when locked.
3. **Fix Cleared Boss Node Visual Priority**:
   - In `LevelNodeButton.tsx:51, 82`, evaluate `isCleared` before `isBossState` (or define `isBossActive = state === 'boss'`) so cleared boss nodes display gold mastery crown visuals with stars.
4. **Implement Missing Drawer CTA & Fix Labels**:
   - Add a 3rd CTA button in `LevelDrawer.tsx` when `node.sandboxName` is defined: `Practice Sandbox` (linking to the relevant interactive sandbox).
   - Update `Start Lesson` to `Start Study / පාඩම අරඹන්න` to align with the micro-learning flashcard specification.
   - Replace native `alert()` with a custom depleted hearts notification or trigger the heart modal.
5. **Curriculum Data Feeding & Completeness**:
   - Expand the quest list into a dedicated module (or dynamic generator from `curriculum.ts`) covering all units, including G10 Unit 7 and G11 Units 5 & 6, ensuring each unit has appropriate station and boss nodes.
6. **Active Neon Path Progression**:
   - Ensure `useGameStore.completeNode` advances `activeNodeId` so that the glowing SVG journey segment (`activeSegmentD`) draws continuously as players advance.

---

## 5. Verification Method

To independently verify these findings:

1. **Run Build & Existing Tests**:
   ```bash
   npm run build
   npm test
   npx tsx scripts/test-e2e.ts
   ```
2. **Inspect Specific Source Code Lines**:
   - Open `src/components/map/QuestMap.tsx` and inspect lines 369–383 (zig-zag calculation), 398–414 (activeSegmentD), 433 (boss state fallback), and 478–481 (SVG preserveAspectRatio).
   - Open `src/components/map/LevelNodeButton.tsx` and inspect lines 37–46 (click handler), 51 & 82 (boss state priority), and 105–118 (star pedestal).
   - Open `src/components/map/LevelDrawer.tsx` and inspect lines 70–84 (CTA click handlers), 169–184 (sandbox banner without CTA button), and 205–236 (action buttons).
3. **Simulate Mobile Viewport**:
   - Check rendered layout in browser DevTools at 360px viewport width: observe the vertical offset between the SVG curve and the node buttons.
4. **Test Boss Unlocking**:
   - In a fresh session (`activeNodeId = 'g10-u1-s1'`), click on `g10-u1-boss` or `g10-u8-s1`: observe that it opens the drawer immediately despite earlier levels being locked.
