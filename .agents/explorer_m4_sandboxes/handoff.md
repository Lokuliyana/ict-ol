# Phase 4 Interactive Visual Sandboxes & Minigames — Comprehensive Investigation Report

**Author**: Explorer M4 (`teamwork_preview_explorer`)  
**Target Recipient**: Orchestrator & Worker M4  
**Date**: 2026-10-08  
**Status**: Completed (Read-Only Investigation)  

---

## Executive Summary
All 5 specialized engineering sandboxes required by `ORIGINAL_REQUEST.md §R4` exist within the codebase, possessing high-quality domain simulation logic, sound effects, and animations. However, they currently reside in legacy lesson folders (`src/components/lessonXX/`) rather than the standardized `src/components/sandboxes/` directory specified in `PROJECT.md`. Crucially, they are completely **unreachable from the primary gamified user flow**: while the Quest Map `LevelDrawer` has a "Practice Sandbox" button pointing to `/study/[nodeId]?sandbox=true`, `/study/[nodeId]` completely ignores this parameter and only displays static story flashcards. Furthermore, none of the components take props, none report goal completion back to the app or `useGameStore`, and several components have mobile layout and touch target deficiencies (<48px buttons, horizontal table overflow on 360px viewports).

Below is the exhaustive, evidence-backed audit across all 5 sandboxes, complete with exact line references, logic chains, and an actionable implementation blueprint for Worker M4.

---

## 1. Observation

### 1.1 Directory & Architecture Inventory
- `src/components/sandboxes/` directory **does not exist** (`find_by_name` returned: `search directory c:\Users\MSI\ict-ol\src\components\sandboxes does not exist`).
- The components are scattered across legacy curriculum directories:
  1. **Sandbox 1 (G10 U03)**:
     - `src/components/lesson03/BitSwitchboard.tsx` (273 lines, 12.8 KB)
     - `src/components/lesson03/HexColorVat.tsx` (221 lines, 10.3 KB)
     - Container: `src/components/lesson03/DataRepresentationFoundry.tsx` (256 lines)
  2. **Sandbox 2 (G10 U04)**:
     - `src/components/lesson04/LogicWorkbench.tsx` (230 lines, 10.0 KB)
     - Stations: `SeriesParallelLab.tsx`, `GateSplicer.tsx`, `UniversalChipBuilder.tsx`, `BreadboardIcPinout.tsx`, `CircuitEvaluator.tsx`, `Lesson04BossArcade.tsx`
  3. **Sandbox 3 (G10 U07)**:
     - `src/components/lesson07/LaserGridAnchors.tsx` (378 lines, 16.7 KB)
     - Container: `src/components/lesson07/SpreadsheetStudio.tsx`
  4. **Sandbox 4 (G11 U01)**:
     - `src/components/g11_lesson01_programming/TraceTableScrubber.tsx` (367 lines, 15.0 KB)
     - Container: `src/components/g11_lesson01_programming/ProgrammingStudio.tsx`
  5. **Sandbox 5 (G11 U05)**:
     - `src/components/g11_lesson05_webdesign/HtmlTableMason.tsx` (366 lines, 17.2 KB)
     - Container: `src/components/g11_lesson05_webdesign/WebArtisanStudio.tsx`

---

### 1.2 Exported Interfaces & Component Contracts
Every sandbox currently exports a parameterless function taking **zero props**:
```typescript
// BitSwitchboard.tsx:36
export function BitSwitchboard() { ... }

// HexColorVat.tsx:25
export function HexColorVat() { ... }

// LogicWorkbench.tsx:45
export function LogicWorkbench() { ... }

// LaserGridAnchors.tsx:33
export function LaserGridAnchors() { ... }

// TraceTableScrubber.tsx:113
export function TraceTableScrubber() { ... }

// HtmlTableMason.tsx:19
export function HtmlTableMason() { ... }
```
- **Zero Callbacks**: No `onComplete?: () => void`, `onGoalReached?: (goalId: string) => void`, or `standalone?: boolean`.
- **Legacy Store Hook in LogicWorkbench**: `LogicWorkbench.tsx:19` imports `useProgress` from legacy `@/context/ProgressContext` and calls `recordCheckpointAttempt(...)` instead of persisting to `useGameStore` (`src/lib/store.ts`).

---

### 1.3 Quest Map & Route Linkage
- In `src/types/curriculum.ts`:
  ```typescript
  export interface LevelNode {
    id: string;
    unitId: string;
    ...
    sandboxType?: 'switchboard' | 'color_vat' | 'logic_workbench' | 'laser_grid' | 'trace_table' | 'table_mason';
  }
  ```
- In `src/data/levelNodes.ts`, exactly 5 level nodes declare `sandboxType`:
  - Line 614: `g10-u3-s1` -> `sandboxType: 'switchboard'`
  - Line 679: `g10-u3-s2` -> `sandboxType: 'logic_workbench'`
  - Line 944: `g10-u6-s1` -> `sandboxType: 'laser_grid'`
  - Line 1075: `g11-u1-s1` -> `sandboxType: 'trace_table'`
  - Line 1491: `g11-u4-s1` -> `sandboxType: 'table_mason'`
- In `src/components/map/QuestMap.tsx`, lines 137, 152, 211, 244, 332 declare corresponding `sandboxName` strings.
- In `src/components/map/LevelDrawer.tsx:261-270`:
  ```tsx
  {node.sandboxName && (
    <button
      type="button"
      onClick={handlePracticeSandbox}
      className="w-full flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-bold text-xs sm:text-sm"
    >
      <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
      <span>Practice Sandbox</span>
    </button>
  )}
  ```
  And in lines 84-88:
  ```tsx
  const handlePracticeSandbox = () => {
    sound.playClick(700);
    onClose();
    router.push(`/study/${node.id}?sandbox=true`);
  };
  ```
- **The Dead End in `/study/[nodeId]`**:
  In `src/app/study/[nodeId]/page.tsx:9-39`:
  ```tsx
  export default function StudyPage() {
    const params = useParams();
    const router = useRouter();
    const nodeId = ...;
    const node = getLevelNode(nodeId);
    ...
    return <StoryFlashcardRunner node={node} />;
  }
  ```
  `searchParams` (such as `?sandbox=true`) are **completely ignored**. Furthermore, `StoryFlashcardRunner.tsx` only renders flashcards with static mock visual widgets (lines 89-218 of `StoryFlashcardRunner.tsx`). The user can **never reach the interactive sandboxes** via the quest map!

---

### 1.4 Goal-State Verification Triggers & Completion Feedback
| Sandbox | Current Goal Verification Mechanism | Sound / Visual Feedback | Persistence / App Trigger | Defect / Gap |
| :--- | :--- | :--- | :--- | :--- |
| **1. 8-Bit Switchboard** | `decimalTotal === curChallenge.target` across 4 challenges (`133`, `65`, `45`, `255`) | Plays `sound.playSuccessDing()`, renders motion banner "Target Reached!" | **None** | No `onComplete`, no automatic advance to next challenge, no button to claim XP. |
| **1. Hex Color Vat** | **None** (pure freeform sliders + 4 static presets) | Plays `sound.playSuccessDing()` on preset selection only | **None** | Has dead state `const [targetIdx, setTargetIdx] = useState(3);`. No target matching or verification challenge. |
| **2. Neon Logic Breadboard** | Universal chip builder verifies output signals across 3 levels; Breadboard IC verifies Vcc/GND before powering IC. | Station completion tracker, `sound.playVictory()` | Calls legacy `recordCheckpointAttempt` (ProgressContext) | Does not update `useGameStore`, no overall completion callback or XP grant. |
| **3. Spreadsheet Laser Grid** | Detects collapse failure (`!isAnchorLocked && fillRowIndex > 1`) vs victory (`isAnchorLocked && fillRowIndex === 3`). | Plays `sound.playVictory()` on locked fill; `sound.playError()` on collapsed fill | **None** | No `onComplete` prop or call to `completeNode()`. |
| **4. Flowchart Trace Table** | Detects reaching step 7 (`stepIndex === 6`, terminal PRINT Sum = 6). | Plays `sound.playVictory()` | **None** | Passive stepping only (no prediction challenge); no completion callback or reward. |
| **5. HTML Table Mason** | None (toggling merger updates table & code). | Plays `sound.playVictory()` on toggle | **None** | No puzzle or goal state (e.g., "Build a table with 2 rows and 3 columns with header colspan=2"). No `onComplete`. |

---

### 1.5 Mobile Ergonomics & Viewport (360px - 412px)
1. **Zero Horizontal Scroll**:
   - `TraceTableScrubber.tsx:278`: Encased in `<div className="overflow-x-auto">` with a 5-column HTML `<table>`. On a 360px screen, this table overflows horizontally, forcing the user to swipe left/right.
   - `LaserGridAnchors.tsx:195`: Uses `grid grid-cols-6` without responsive breakpoints. At 360px width (~50px per column), cell text like "Exercise Book", "Rs. 150", and `= D2 * $H$1` clip or wrap awkwardly.
   - `HtmlTableMason.tsx:208`: Code display block has `overflow-x-auto` with unwrapped HTML lines.
2. **Touch Targets (>= 48px)**:
   - `BitSwitchboard.tsx:169`: Switch buttons have `py-3` (~44px height), but width and padding should guarantee `min-h-[48px] min-w-[48px]`.
   - `LaserGridAnchors.tsx:296, 308`: Action buttons (`handleToggleAnchor`, `handleDragFillDown`) use `py-2` (~36-40px height), failing the 48px hit target requirement.
   - `TraceTableScrubber.tsx:339, 346`: Timeline buttons ("Prev", "Next Step") use `py-1.5` (~34px height).
   - `HtmlTableMason.tsx:57, 69, 85`: Tab buttons use `py-2 px-3` (~38px height).
3. **60 FPS Performance**:
   - Pure React state with GPU-accelerated Framer Motion transforms (`scale`, `opacity`, `translate`).
   - `npm run build` completed cleanly in 8.3s with zero type errors.

---

## 2. Logic Chain

1. **Premise 1**: `PROJECT.md §Code Layout` specifies `src/components/sandboxes/` as the home for all 5 interactive sandboxes.
   - **Observation**: `src/components/sandboxes/` does not exist; files remain in legacy folders.
   - **Deduction**: A clean sandbox module directory structure (`src/components/sandboxes/`) must be created with unified exports.

2. **Premise 2**: `ORIGINAL_REQUEST.md §R4` and `PROJECT.md §Milestones M4` require that sandboxes are fully integrated with goal-state verification triggers, updating player progress and awarding XP.
   - **Observation**: All 5 sandboxes currently lack props and callbacks (`onComplete`, `onGoalReached`). `LogicWorkbench` references legacy `ProgressContext`.
   - **Deduction**: A standard interface contract (`SandboxProps`) must be introduced across all sandboxes, connecting completion events to `useGameStore.completeNode(nodeId, 100)` or `addXp(100)`.

3. **Premise 3**: Users navigate from the Quest Map `LevelDrawer` via "Practice Sandbox" to `/study/[nodeId]?sandbox=true`.
   - **Observation**: `src/app/study/[nodeId]/page.tsx` ignores query parameters and renders `StoryFlashcardRunner`. `StoryFlashcardRunner` only displays static preview mockups.
   - **Deduction**: The route `/study/[nodeId]` (or a dedicated `/study/[nodeId]` tab/view or modal) must inspect `searchParams.sandbox` or node type (`interactive_lab`), rendering the interactive sandbox component when requested.

4. **Premise 4**: Acceptance criteria mandate zero horizontal scroll on 360px–412px viewports and >=48px touch targets in the bottom 25% thumb zone.
   - **Observation**: `TraceTableScrubber` has an `overflow-x-auto` table; `LaserGridAnchors` uses a rigid 6-column grid; multiple buttons measure 34px–40px.
   - **Deduction**: Layouts must be hardened: responsive card-based trace steps on mobile, flexible spreadsheet table layout, and explicit `min-h-[48px] min-w-[48px]` styling with sticky thumb-zone action bars.

---

## 3. Caveats
1. **Legacy Lesson Runner Route**: The project contains a legacy route `/lesson/[grade]/[lessonId]` that embeds older studio components. However, this is not part of the active Duolingo/Candy Crush quest map engine specified in `PROJECT.md` (`/study/[nodeId]`, `/quiz/[nodeId]`, `/papers`).
2. **Syllabus Unit Numbering Mapping**:
   - In NIE curriculum: Grade 10 Unit 03 is Data Representation; Unit 04 is Logic Gates; Unit 07 is Spreadsheets.
   - In `levelNodes.ts` and `QuestMap.tsx`: Unit 03 contains both `g10-u3-s1` (Switchboard) and `g10-u3-s2` (Logic Gates), while Spreadsheets is indexed under `g10-u6-s1`. The sandbox linkage must strictly follow node IDs (`g10-u3-s1`, `g10-u3-s2`, `g10-u6-s1`, `g11-u1-s1`, `g11-u4-s1`).

---

## 4. Conclusion
The 5 engineering sandboxes have rich domain algorithms and polished visual presentation, but they are currently **orphaned from the micro-learning loop**. Bringing them to 100% production-grade compliance requires:
1. Creating `src/components/sandboxes/` with standard wrappers and `SandboxProps` interface contracts.
2. Wiring `/study/[nodeId]` and `LevelDrawer` so that `?sandbox=true` loads the full interactive sandbox.
3. Adding goal-state evaluation and completion celebrations (`CompletionDrawer` / `confetti` / `completeNode`).
4. Fixing mobile ergonomics: eliminating horizontal scrollbars and enforcing >=48px touch targets.

---

## 5. Verification Method

To independently verify these findings:
1. **Check missing directory**:
   ```powershell
   Test-Path "c:\Users\MSI\ict-ol\src\components\sandboxes"
   # Returns False
   ```
2. **Inspect Study Route routing**:
   Inspect `c:\Users\MSI\ict-ol\src\app\study\[nodeId]\page.tsx` line 9-39. Note absence of `useSearchParams` or `sandbox` handling.
3. **Inspect Sandbox Touch Targets & Overflow**:
   - Inspect `c:\Users\MSI\ict-ol\src\components\g11_lesson01_programming\TraceTableScrubber.tsx` line 278: `<div className="overflow-x-auto">`.
   - Inspect `c:\Users\MSI\ict-ol\src\components\lesson07\LaserGridAnchors.tsx` line 195: `grid grid-cols-6`.
4. **Run Project Build & Tests**:
   ```powershell
   npm test
   npm run test:e2e
   npm run build
   # All commands pass cleanly
   ```

---

## 6. Actionable Implementation Recommendations for the Worker

### Step 1: Create Standardized Sandboxes Directory (`src/components/sandboxes/`)
Create the directory `src/components/sandboxes/` and organize the components:
- `src/components/sandboxes/types.ts`: Define standard sandbox props:
  ```typescript
  export interface SandboxProps {
    nodeId?: string;
    onComplete?: (result: { stars: number; xp: number; accuracy: number }) => void;
    onExit?: () => void;
    standalone?: boolean;
  }
  ```
- Re-export or encapsulate the 5 sandboxes:
  1. `BitSwitchboardSandbox.tsx`: Tabbed or unified container housing `BitSwitchboard` & `HexColorVat` with goal challenge progression.
  2. `LogicWorkbenchSandbox.tsx`: Logic Workbench updated to use `useGameStore` and report completion when all 6 stations or core universal gates are verified.
  3. `LaserGridSandbox.tsx`: Spreadsheet Laser Grid with goal validation (completing all rows with locked anchor) and responsive mobile grid.
  4. `TraceTableSandbox.tsx`: Flowchart Trace Table Scrubber with challenge check (e.g. prompt: "What is final value of Sum?") and responsive non-scrolling card view on mobile.
  5. `HtmlTableMasonSandbox.tsx`: HTML Table Mason with goal-driven merger challenges (e.g., Target 1: Merge 2 columns for "Examination Marks"; Target 2: Merge 2 rows for "Student ID").
  6. `src/components/sandboxes/index.ts`: Barrel export matching `sandboxType`:
     ```typescript
     export const SANDBOX_REGISTRY = {
       switchboard: BitSwitchboardSandbox,
       color_vat: HexColorVat,
       logic_workbench: LogicWorkbenchSandbox,
       laser_grid: LaserGridSandbox,
       trace_table: TraceTableSandbox,
       table_mason: HtmlTableMasonSandbox,
     };
     ```

### Step 2: Wire `/study/[nodeId]` and `LevelDrawer`
In `src/app/study/[nodeId]/page.tsx`:
- Read `const searchParams = useSearchParams();` and check `const isSandbox = searchParams.get('sandbox') === 'true' || node.type === 'interactive_lab';`
- If `isSandbox && node.sandboxType`:
  - Render the corresponding component from `SANDBOX_REGISTRY`.
  - Pass `onComplete={() => setShowCompletion(true)}` and `onExit={() => router.push('/')}`.
  - When completed, call `useGameStore.getState().completeNode(node.id, 100)` and open `CompletionDrawer`.
- In `StoryFlashcardRunner.tsx`:
  - Add a "Launch Interactive Lab" button on cards that have `sandboxType` or matching visual widgets so users studying theory can jump directly into the interactive sandbox!

### Step 3: Implement Goal-State Triggers & Completion Flow
For each sandbox, ensure completion is rewarding:
1. **Switchboard**: User clears all 4 decimal targets -> trigger goal clear -> award 3 stars + 100 XP -> show `CompletionDrawer`.
2. **Hex Color Vat**: Add 3 color-matching target challenges (e.g., Target: Dark Purple `#871F78` -> user tunes sliders within tolerance -> success ding).
3. **Logic Workbench**: Completing Station 3 (Universal Chip Builder Level 3) or testing a wired 14-pin IC triggers lab completion.
4. **Laser Grid**: Drag-filling all 3 rows with anchor locked (`$H$1`) unlocks "Spreadsheet Master" banner with "Complete Lab" CTA.
5. **Trace Table**: Completing dry-run step 7 unlocks verification prompt -> verifies accumulator value -> triggers completion.
6. **HTML Table Mason**: Add 2 specific O/L challenges (Colspan 2 for Marks, Rowspan 2 for Student ID) with "Validate HTML Table" check button.

### Step 4: Mobile Ergonomics & Viewport Hardening (360px - 412px)
1. **TraceTable**: On mobile (`sm:hidden`), replace `overflow-x-auto` table with a vertical stacked step card showing current iteration, condition status, and animated registers (Count & Sum).
2. **LaserGrid**: On mobile, render each item row as a compact card or 3-column split view (Item, Total, Tax) instead of a rigid 6-column grid.
3. **Touch Targets**: Wrap all interactive buttons, levers, and pin toggles with `min-h-[48px] min-w-[48px]` and `active:scale-95` touch feedback.
4. **Thumb-Zone Pinning**: Place primary interaction triggers ("Step Forward", "Check Answer", "Reset", "Complete Lab") in a sticky bottom bar (`fixed bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800`).
