# Comprehensive Technical Survey & Codebase Analysis

**Project**: Sri Lankan G.C.E. O/L ICT Web Application  
**Working Directory**: `c:\Users\MSI\ict-ol`  
**Report Location**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_survey_codebase\report.md`  
**Date**: 2026-10-08  
**Author**: Codebase Explorer Subagent  

---

## 1. Executive Summary

This survey provides a complete technical audit of the current Sri Lankan G.C.E. O/L Information and Communication Technology (ICT) web application codebase. The repository contains a working Next.js 15 application with a substantial foundation of dual-medium (Sinhala and English) syllabus materials, past examination questions (2020–2025), and sophisticated interactive visual components (including binary switchboards, logic IC breadboards, spreadsheet anchor simulators, trace table scrubbers, and HTML table mason widgets).

Both `npm run build` and `npm test` currently exit cleanly with **code 0** (1,812 assertions passing). However, there are fundamental architectural and structural gaps between the current implementation and the target specifications laid out in Requirements R1 through R5.

### Key Architectural Findings
1. **Grade 10 Unit Compression & Missing Unit 09**: In the current curriculum definitions (`curriculum.ts`, `generate-all-lessons.mjs`), Grade 10 Lesson 03 (*Data Representation*) and Lesson 04 (*Logic Gates*) were merged into Unit 3. Consequently, Operating Systems became Unit 4, Word Processing Unit 5, Spreadsheets Unit 6, Presentations Unit 7, and Databases Unit 8. Grade 10 only contains 8 units instead of the official 9 units. Database Management (`g10-u8`) is present, but Unit 9 is missing from the curriculum registry and flashcard bank.
2. **Missing Zustand Store & Heart Economy**: The application relies on React Context (`ProgressContext.tsx`) with `localStorage`. `zustand` is not installed in `package.json`. There are no heart containers (5 lives with 30-min recharge cycle), no heart deduction, and no quiz lockout mechanism.
3. **Missing Micro-Learning Routes (`/study/[nodeId]`, `/quiz/[nodeId]`)**: The learning loop is currently bundled into a monolithic document-style lesson runner (`LinearLessonRunner.tsx` under `/lesson/[grade]/[lessonId]`). Dedicated Instagram-story style flashcards and strict two-phase blind quizzes do not exist as independent engines or routes.
4. **Missing Past Paper Arena (`/papers`)**: Past papers are rendered inside lessons, but there is no dedicated `/papers` route with 60-minute Timed Exam Mode and official marking rubrics.
5. **Interactive Sandboxes Exist as Components but Lack Unified Routing**: All 5 sandboxes required by R4 exist as rich React components, but they are currently mounted inside the linear lesson runner rather than being triggerable as dedicated nodes or modular minigame destinations.

---

## 2. Repository Architecture & Configurations Inspection

### 2.1 Package & Tooling Manifest (`package.json`)
```json
{
  "name": "ict-ol",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3005",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "npx tsx scripts/verify-content.mjs"
  },
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
  },
  "devDependencies": {
    "@types/node": "^22.13.9",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.2"
  }
}
```
**Observations**:
- Next.js is configured with App Router (`v15.2.1`) on React 19 (`v19.0.0`).
- Styling: Tailwind CSS v3.4.17 with PostCSS and Autoprefixer.
- Icons: `lucide-react` v1.16.0.
- Animations: `framer-motion` v14.0.0 and `canvas-confetti` v1.9.4.
- **Missing packages**: `zustand` is not in dependencies.

### 2.2 Compiler & Framework Configurations
- **`tsconfig.json`**:
  - Target `ES2017`, `moduleResolution: "bundler"`, `strict: true`.
  - Path alias: `@/*` mapped to `./src/*`.
  - `resolveJsonModule: true`, `jsx: "preserve"`.
- **`next.config.mjs`**:
  - `reactStrictMode: true`, `images: { unoptimized: true }`.
  - Output tracing configured.
- **`tailwind.config.ts`**:
  - Dark mode enabled via `"class"`.
  - Color palette includes `canvas`, `surface-primary`, `primary` (#4f46e5), `accent` (#06b6d4), `sinhala`, and `english`.
  - Custom box shadows: `clay`, `clay-hover`, `clay-dark`, `pill`.
  - Font families: `sans` (Inter + Noto Sans Sinhala) and `sinhala` (Noto Sans Sinhala, Sinhala Sangam MN, FM Abhaya).
- **`src/app/globals.css`**:
  - Defines CSS variables for clay morphic elevations and surfaces (`--canvas`, `--surface-primary`, `--shadow-clay`).
  - Bundles local Sinhala TrueType fonts (`FM-Aba-Bold`, `FM-Emanee`, `FMRashmee` in `/fonts/`).

---

## 3. Current Build and Test Health

Both primary validation steps were executed synchronously via `run_command`:

1. **`npm test` (`npx tsx scripts/verify-content.mjs`)**:
   - **Result**: `EXIT CODE 0`
   - **Passed Assertions**: **1,812**
   - **Failed Assertions**: **0**
   - Tests verify:
     - Curriculum length (currently asserts 14 units: 8 for G10, 6 for G11).
     - Subtopics and bilingual blocks for all units in `ALL_LESSONS_DATA`.
     - 2020–2025 past paper MCQ and structured question coverage.
     - Sri Lankan National Identity Card (NIC) decoder utility (`src/utils/nicDecoder.ts`).

2. **`npm run build` (`next build`)**:
   - **Result**: `EXIT CODE 0`
   - Next.js compiled cleanly in 5.3s with zero TypeScript or linting errors.
   - Built routes:
     - `○ /` (Homepage, Quest Roadmap, Curriculum Grid) — 9.48 kB
     - `○ /_not-found` — 1 kB
     - `○ /analytics` (Mastery & Medium Coverage Dashboard) — 5.44 kB
     - `ƒ /lesson/[grade]/[lessonId]` (Linear Lesson Runner) — 321 kB
     - `ƒ /revision-sheet/[grade]/[lessonId]` (Printable Revision Notes) — 2.52 kB

---

## 4. Requirement-by-Requirement Gap Analysis (R1 through R5)

### 4.1 Requirement R1: Core Shell, Persistent State & Navigation Engine

| Spec Item | Current Codebase Implementation | Status | Gap & Required Work |
|---|---|---|---|
| **Persistent Top HUD** | `src/components/Header.tsx` displays Study Streak (`state.streak`), XP points (`state.points`), language switcher (Dual / EN / SI), dark mode toggle, and analytics link. | **Partial** | 1. **Heart Containers Missing**: 5 lives container with 30-min recharge countdown timer is not present in Header or state.<br>2. **Grade Switcher**: Currently placed on Homepage (`page.tsx`), not persistent across all pages in the top HUD. |
| **Mobile Bottom Navigation (64px)** | `src/components/MobileBottomDock.tsx` renders bottom dock on mobile (`md:hidden`) with Journey, Syllabus, Quick Setup, Mastery, and Medium badges. | **Partial** | 1. Fixed height is not strictly 64px (`h-16`).<br>2. Missing target routes (`/study`, `/quiz`, `/papers`). |
| **Desktop Collapsible Left Rail (>= 1024px)** | Not implemented. Desktop relies purely on the top header bar and page contents. | **Missing** | Create a desktop collapsible left rail (`>= 1024px`) with links to Quest Map, Flashcards, Blind Quizzes, Sandboxes, Past Paper Boss Arena, and Analytics. |
| **Zero-Friction 3-Step Onboarding Flow** | `src/components/GuidedFlowModal.tsx` provides a 4-step modal (Medium -> Grade -> Study Route -> Confirmation) auto-triggered for new users. | **Partial** | Refactor into a clean 3-step flow (Medium: Sinhala vs English -> Grade: 10 vs 11 -> Entry Route: Level 1 vs Topic Library) that routes directly to Quest Map or Level 1. |
| **Winding Quest Map** | `src/components/QuestRoadmap.tsx` renders alternating zig-zag nodes with Gold Cleared (1-3 stars), Neon Pulsing Active, Slate Locked, and Boss Gauntlet. | **Partial** | 1. Tapping a node navigates immediately to `/lesson/[grade]/[lessonId]` instead of triggering a **Level Details / Preview Drawer**.<br>2. Uses a simple vertical connector bar instead of continuous SVG winding path.<br>3. Boss nodes use swords icon rather than crown insignia. |
| **Persistent Local Store (Zustand)** | `src/context/ProgressContext.tsx` uses standard React Context (`createContext`, `useState`, `useEffect`) saving to `localStorage` under `ict_ol_progress_v2`. | **Partial** | 1. **Zustand is missing**: Must implement a Zustand store (`useGameStore`) with `persist` middleware.<br>2. **Missing state properties**: `hearts` (0-5), `heartRechargeTimer` (timestamp of next life recharge), `activeNodeId`, `completedNodes` map adhering to `LevelNode` schema. |

---

### 4.2 Requirement R2: Core Micro-Learning Loop Engines

| Spec Item | Current Codebase Implementation | Status | Gap & Required Work |
|---|---|---|---|
| **Story Flashcard Engine (`/study/[nodeId]`)** | No dedicated route or engine. Theory content is rendered as a long scrolling document in `LinearLessonRunner.tsx` (Step 1). Raw flashcards exist only in `public/quiz_flashcard/*.md`. | **Missing** | 1. Create `/study/[nodeId]/page.tsx`.<br>2. Implement Instagram-story segmented progress header at top.<br>3. Split card layout: Top 40% visual infographic widget / diagram, bottom 60% concise micro-bullet points.<br>4. Bottom thumb-zone controls: `Skip to Quiz` and `Got It! Next` with >= 48px hit targets. |
| **Blind Quiz Engine (`/quiz/[nodeId]`)** | Inline quizzes exist in `LinearLessonRunner.tsx` (Step 3), but options evaluate and reveal answers immediately on click. | **Missing** | 1. Create `/quiz/[nodeId]/page.tsx`.<br>2. **Strict two-phase evaluation**: options start completely neutral; answers, emerald/crimson indicators, and explanations remain unrendered until tapping `Check Answer`.<br>3. Life deduction: -1 heart and card shake animation on incorrect answer.<br>4. Life depletion modal: locks quiz entry when hearts = 0 until flashcards are reviewed or life recharges. |
| **Level Completion Drawer (`CompletionDrawer.tsx`)** | `src/components/PartCompletionModal.tsx` exists with confetti fanfare, star display, XP award, and buttons. | **Partial** | 1. Implement as a bottom slide-up Drawer (`CompletionDrawer.tsx`) rather than a modal.<br>2. Implement dynamic star calculation: 1 star (<70%), 2 stars (>=70%), 3 stars (>=90% accuracy).<br>3. Implement zero-dead-end forward routing (`Next Part`, `Review Topic`, `Return to Map`). |

---

### 4.3 Requirement R3: Bilingual Content Transformation & Validation Pipeline

| Spec Item | Current Codebase Implementation | Status | Gap & Required Work |
|---|---|---|---|
| **Grade 10 Units 01–09 & Grade 11 Units 01–06** | `src/data/curriculum.ts` and `src/data/lessons/*.ts` currently only contain 8 Grade 10 units and 6 Grade 11 units. G10 Lesson 03 (Data Representation) and Lesson 04 (Logic Gates) were combined into Unit 3. Unit 09 (Databases) is missing from the curriculum index. | **Incomplete** | 1. Decouple G10 U03 (Data Representation) and G10 U04 (Logic Gates).<br>2. Properly align G10 U05 (Operating Systems), G10 U06 (Word Processing), G10 U07 (Spreadsheets), G10 U08 (Presentations), G10 U09 (Databases).<br>3. Compile full 9 units for Grade 10 and 6 units for Grade 11. |
| **Strict JSON Schemas (`LevelNode`, `TheoryCard`, `QuizQuestion`)** | Current data models use `GeneralLessonData`, `SubTopic`, `CheckpointQuiz`, and `PastPaperQuestion`. Schemas for `LevelNode`, `TheoryCard`, `QuizQuestion` do not exist. | **Missing** | 1. Define TypeScript types in `src/types/content.ts` (`LevelNode`, `TheoryCard`, `QuizQuestion`).<br>2. Compile all syllabus materials into strict JSON structures adhering to these types. |
| **100% Bilingual Parity (`en` and `si`)** | Existing text blocks in `public/lessons` and `src/data` have strong bilingual pairing. | **Strong Foundation** | Ensure all prompts, options, explanations, and key takeaways across all 15 units strictly maintain 100% bilingual parity without fallback placeholders. |
| **Validation Pipeline (`scripts/compile-content.ts` / `npm run validate:content`)** | `scripts/verify-content.mjs` exists and runs via `npm test`. `scripts/compile-content.ts` and `npm run validate:content` do not exist. | **Missing** | 1. Create `scripts/compile-content.ts` to parse markdown sources into JSON adhering to schemas.<br>2. Add `npm run validate:content` script to `package.json` verifying schema integrity, `correctIndex` ranges, and 100% bilingual parity. |

---

### 4.4 Requirement R4: Interactive Visual Sandboxes & Minigames

| Sandbox | Existing Component | Status | Functional Details & Gaps |
|---|---|---|---|
| **G10 U03: 8-Bit Switchboard & Color Chamber** | `src/components/lesson03/BitSwitchboard.tsx`<br>`src/components/lesson03/HexColorVat.tsx` | **Implemented** | - 8-Bit Switchboard: 8 lever toggles, 2^0 to 2^7 weights, 0V/+5V voltage, challenge targets (133, 65, 45, 255).<br>- Color Chamber: RGB sliders, #RRGGBB calculation, division by 16 math breakdown, reverse target challenge.<br>- **Gap**: Needs dedicated sandbox route and mounting. |
| **G10 U04: Neon Logic Gate Breadboard** | `src/components/lesson04/LogicWorkbench.tsx`<br>`src/components/lesson04/BreadboardIcPinout.tsx`<br>`src/components/lesson04/GateSplicer.tsx` | **Implemented** | - Interactive 14-pin ICs (7400, 7402, 7404, 7408, 7432, 7486) with Vcc/GND pinout logic.<br>- AND, OR, NOT, NAND, NOR, XOR truth tables and live bulb logic.<br>- **Gap**: Was mapped to `g10-u4` which is labeled "Operating Systems" in the current curriculum. Must be realigned to Unit 4 (Logic Gates). |
| **G10 U07: Spreadsheet Laser Grid & Reference Anchors** | `src/components/lesson07/LaserGridAnchors.tsx`<br>`src/components/lesson07/SpreadsheetStudio.tsx` | **Implemented** | - Relative vs. absolute (`$H$1`) referencing visualization.<br>- Formula copy/fill down error demonstration and fix validation.<br>- **Gap**: Was placed in `lesson07` component folder but curriculum mapped to Unit 6. Must align to Unit 7 (Spreadsheets). |
| **G11 U01: Flowchart Trace Table Scrubber** | `src/components/g11_lesson01_programming/TraceTableScrubber.tsx`<br>`FlowchartMason.tsx` | **Implemented** | - Trace table scrubber stepping through variable registers (Count, Sum, Condition, Output).<br>- Visual flowchart step synchronization.<br>- **Gap**: Needs standalone sandbox launcher/route. |
| **G11 U05: HTML Table Mason** | `src/components/g11_lesson05_webdesign/HtmlTableMason.tsx` | **Implemented** | - Visual cell merger for colspan and rowspan.<br>- Live HTML markup generator, interactive border/cellpadding/cellspacing inspector.<br>- **Gap**: Needs standalone sandbox launcher/route. |

---

### 4.5 Requirement R5: Exam Engine & 2020–2025 Past Paper Boss Arena

| Spec Item | Current Codebase Implementation | Status | Gap & Required Work |
|---|---|---|---|
| **Past Paper Question Dataset (2020–2025)** | `src/data/pastPapersData.ts` and `src/data/lessons/*.ts` contain over 100 authentic past paper questions across 2020–2025 (Paper I MCQ and Paper II Structured) in English and Sinhala. | **Implemented** | Data is rich, authentic, and verified by `npm test`. |
| **Boss Nodes** | Boss nodes exist in `QuestRoadmap.tsx` (`g10-u1-boss`, etc.) and are linked to past papers in lesson runners. | **Partial** | Mastery badges and boss victory states are not integrated into a persistent badge inventory. |
| **Past Paper Arena Route (`/papers`)** | Does not exist in `src/app/`. `PastPaperEngine.tsx` is only rendered inside lesson runners. | **Missing** | Create `/papers/page.tsx` with filterable controls by Year (2020–2025), Paper Type (Paper I / Paper II), and Unit. |
| **Dual Interaction Modes** | Practice Mode exists in `PastPaperEngine.tsx` (reveals answers and explanations). Timed Exam Mode does not exist. | **Partial** | 1. **Timed Exam Mode**: Missing 60-minute countdown timer, locked answers during exam, and final grading report.<br>2. **Marking Rubrics**: Structured questions show sample answers, but lack official point-by-point marking scheme rubrics (e.g. 1 mark per step). |

---

## 5. Acceptance Criteria Compliance Matrix

| Acceptance Criterion | Current Status | Findings & Evidence |
|---|---|---|
| **Viewport maintains zero horizontal scroll on mobile (360px–412px)** | ⚠️ **Partial** | Main pages are responsive, but large tables and IC pinout diagrams require strict horizontal containment (`overflow-x-auto`) to avoid blowing out viewport width on 360px screens. |
| **Primary action buttons reside in bottom 25% thumb zone with >= 48px hit target** | ❌ **Failed** | In `LinearLessonRunner.tsx` and modal dialogs, buttons are placed inline within scrolling document content rather than pinned to the bottom 25% thumb zone. |
| **State survives browser reload via persistent storage** | ⚠️ **Partial** | Language, Grade, Points, Streak, and completed stations survive via `localStorage` (`ProgressContext.tsx`). However, Hearts/Lives and active node are not persisted. |
| **Deducting hearts updates lives, and running out of hearts locks quiz entry** | ❌ **Failed** | Heart economy does not exist in state or UI. Quizzes do not deduct lives and never lock. |
| **Quiz answers, indicators, and explanations strictly unrendered until tapping `Check Answer`** | ❌ **Failed** | `LinearLessonRunner.tsx` immediately evaluates and highlights answers upon tapping any radio option. A two-phase `Check Answer` button does not exist. |
| **All Grade 10 (Units 1-9) and Grade 11 (Units 1-6) nodes load cleanly in Sinhala and English** | ❌ **Failed** | Grade 10 only has 8 units configured in `curriculum.ts`; Units 3 and 4 were merged, and Unit 9 is missing. |
| **All 5 specialized sandboxes function smoothly and validate input goal states** | ✅ **Passed** | All 5 components exist and have rich interactive logic and goal state verification. |
| **`npm run build` and content validation scripts pass with zero errors** | ⚠️ **Partial** | `npm run build` and `npm test` pass with zero errors, but `npm run validate:content` is not yet configured. |

---

## 6. Recommended Technical Architecture & Implementation Roadmap

To transition the codebase into full compliance with Requirements R1 through R5, the following engineering phases are recommended:

### Phase 1: State, Shell & Navigation Modernization (R1)
1. Install `zustand` (`npm install zustand`).
2. Create `src/store/useGameStore.ts` with `persist` middleware storing:
   - `grade`: `'10' | '11'`
   - `medium`: `'en' | 'si' | 'dual'`
   - `hearts`: `number` (0 to 5)
   - `heartRechargeTimer`: `number | null` (timestamp for 30-min timer)
   - `activeNodeId`: `string`
   - `completedNodes`: `Record<string, { stars: number; accuracy: number; completedAt: string }>`
   - `streak`: `number`
   - `xp`: `number`
   - `badges`: `string[]`
3. Update `Header.tsx` to include:
   - 5 Heart Containers with countdown timer tooltip/popover.
   - Persistent Grade Switcher pill.
4. Add desktop collapsible Left Rail (`>= 1024px`) to layout.
5. Enhance `QuestRoadmap.tsx` with:
   - Level Details Drawer trigger on node tap.
   - Crown insignia for Boss nodes.
   - Continuous SVG winding quest path.

### Phase 2: Micro-Learning Engines (R2)
1. Create `/study/[nodeId]/page.tsx` (`StoryFlashcardEngine`):
   - Instagram-story segmented progress bar.
   - Split card (40% infographic widget / diagram, 60% concise micro-bullet points).
   - Fixed bottom thumb-zone buttons: `Skip to Quiz` and `Got It! Next` (>= 48px).
2. Create `/quiz/[nodeId]/page.tsx` (`BlindQuizEngine`):
   - Strict two-phase evaluation with `Check Answer` button.
   - Card shake animation and -1 heart deduction on error.
   - Heart depletion modal locking quiz entry when hearts = 0 until flashcard review.
3. Build `src/components/CompletionDrawer.tsx`:
   - Bottom slide-up drawer with confetti fanfare.
   - Star calculations: 1 star (<70%), 2 stars (>=70%), 3 stars (>=90%).
   - Zero-dead-end buttons (`Next Part`, `Review Topic`, `Return to Map`).

### Phase 3: Content Pipeline & Syllabus Restructuring (R3)
1. Split `g10-u3` into:
   - `g10-u3`: Data Representation (Number Systems, Base Conversion, ASCII/Unicode).
   - `g10-u4`: Logic Gates (Truth Tables, ICs, Boolean Gates).
2. Shift subsequent Grade 10 units to correct NIE syllabus numbers:
   - `g10-u5`: Operating Systems
   - `g10-u6`: Word Processing
   - `g10-u7`: Electronic Spreadsheets
   - `g10-u8`: Electronic Presentations
   - `g10-u9`: Database Management
3. Define strict TypeScript schemas in `src/types/content.ts` (`LevelNode`, `TheoryCard`, `QuizQuestion`).
4. Implement `scripts/compile-content.ts` and add `"validate:content": "npx tsx scripts/compile-content.ts"` to `package.json`.

### Phase 4: Sandboxes Integration & Decoupling (R4)
1. Mount the 5 sandboxes as direct interactive quest stations:
   - G10 U03: `BitSwitchboard` & `HexColorVat`
   - G10 U04: `LogicWorkbench`
   - G10 U07: `LaserGridAnchors`
   - G11 U01: `TraceTableScrubber`
   - G11 U05: `HtmlTableMason`
2. Provide a `/sandboxes` hub allowing direct exploration of all 5 visual engineering tools.

### Phase 5: Past Paper Arena & Boss Arena (R5)
1. Create `/papers/page.tsx` (`PastPaperArena`):
   - Filter bar: Year (2020–2025), Paper Type (Paper I / Paper II), Unit.
   - Mode Toggle: Practice Mode (with marking rubrics) vs Timed Exam Mode (60-minute countdown).
   - Boss Gauntlet victory badges.
