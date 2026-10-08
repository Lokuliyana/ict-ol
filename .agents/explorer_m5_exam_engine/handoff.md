# Phase 5 Investigation Report: Exam Engine & 2020–2025 Past Paper Boss Arena

## 1. Observation

### 1.1 End-of-Unit Boss Nodes & Mastery Badges
- **Boss Node Definitions in Level Nodes**:
  - In `src/data/levelNodes.ts`, 6 nodes specify `type: 'boss_arena'`:
    - Line 319: `'g10-u1-boss'` (`unitId: 'g10-u1'`, orderIndex: 4, 1 theory card, 2 quiz questions: 3rd Gen ICs and Digital Divide)
    - Line 551: `'g10-u2-boss'` (`unitId: 'g10-u2'`, orderIndex: 7, 1 theory card, 1 quiz question: Address bus unidirectional)
    - Line 743: `'g10-u3-boss'` (`unitId: 'g10-u3'`, orderIndex: 10, 1 theory card, 1 quiz question: ASCII 7-bit standard)
    - Line 1008: `'g10-u8-s1'` (`unitId: 'g10-u8'`, orderIndex: 14, labeled `type: 'boss_arena'`, 1 theory card, 1 quiz question: Primary Key uniqueness)
    - Line 1210: `'g11-u1-boss'` (`unitId: 'g11-u1'`, orderIndex: 17, 1 theory card, 1 quiz question: trace table loop dry run sum = 6)
    - Line 1559: `'g11-u4-boss'` (`unitId: 'g11-u4'`, orderIndex: 22, 1 theory card, 1 quiz question: `<ol>` ordered list tag)
  - Missing Boss Nodes: Grade 10 Units 4, 5, 6, 7, 9 and Grade 11 Units 2, 3, 5, 6 have no end-of-unit boss nodes defined in `levelNodes.ts`. (In fact, Grade 10 Units 7 & 9, and Grade 11 Units 5 & 6 have no nodes at all in `levelNodes.ts`).
  - Question Quantity: Existing boss nodes contain only 1 or 2 questions each, rather than a full unit boss gauntlet.
- **Store Badges & Unlock Mechanism**:
  - In `src/types/store.ts` (line 38, line 73) and `src/lib/store.ts` (lines 49, 294–302):
    ```typescript
    badges: string[]; // Boss mastery badges, e.g. ['g10-u01-boss']
    unlockBadge: (badgeId: string) => void;
    ```
    The implementation in `src/lib/store.ts` awards 100 XP and appends the `badgeId` to `badges`.
  - **Critical Disconnection**: Searching for `unlockBadge` across `src/` revealed that `unlockBadge` is **NEVER called anywhere in the entire codebase** (`BlindQuizRunner.tsx`, `CompletionDrawer.tsx`, `LevelDrawer.tsx`, etc.).
  - In `src/components/quiz/BlindQuizRunner.tsx` (lines 96–107), completion calls `completeNode(node.id, accuracy)` and opens `CompletionDrawer`, with zero check for `node.type === 'boss_arena'` and zero invocation of `unlockBadge`.
  - In `src/components/completion/CompletionDrawer.tsx`, the component only renders standard 1–3 star ratings, accuracy %, XP, and streak. It has no boss battle UI, no badge reward presentation, and no badge props.
  - In `src/components/AnalyticsDashboard.tsx`, `src/components/hud/TopHud.tsx`, and `src/components/map/QuestMap.tsx`, `state.badges` is never rendered.

### 1.2 Past Paper Arena Route (`/papers`) & Datasets
- **Route Existence**:
  - The file `src/app/papers/page.tsx` **DOES NOT EXIST**.
  - Directory listing of `src/app/` contains: `analytics/`, `lesson/`, `quiz/`, `revision-sheet/`, `study/`, `globals.css`, `layout.tsx`, `page.tsx`.
  - Clicking "Past Paper Arena" in `src/components/navigation/DesktopSidebar.tsx` (line 47: `href: '/papers'`) or `src/components/navigation/MobileBottomNav.tsx` (line 37: `href: '/papers'`) yields a Next.js 404 (Not Found).
  - Next.js build output confirms `/papers` is not generated:
    ```
    Route (app)
    ┌ ○ /
    ├ ○ /_not-found
    ├ ○ /analytics
    ├ ƒ /lesson/[grade]/[lessonId]
    ├ ƒ /quiz/[nodeId]
    ├ ƒ /revision-sheet/[grade]/[lessonId]
    └ ƒ /study/[nodeId]
    ```
- **Past Paper Datasets in the Codebase**:
  1. `src/data/pastPapersData.ts`:
     - Contains only 12 questions (`pp-2020-p1-q2` to `pp-2025-p2-q1`).
     - Strictly restricted to Grade 10 Unit 1 (Concepts of ICT).
     - Years covered: 2020 (4), 2021 (3), 2022 (1), 2023 (1), 2024 (1), 2025 (2).
     - Question types: 8 Paper I (MCQ) and 4 Paper II (Structured).
     - Structured questions include explicit `sampleAnswerEn`, `sampleAnswerSi`, `markingRubricEn` (`string[]`), and `markingRubricSi` (`string[]`).
  2. `src/data/lessons/*.ts` (`g10u2.ts` through `g10u8.ts`, `g11u1.ts` through `g11u6.ts`):
     - Contains an additional **156 authentic G.C.E. O/L past paper questions**!
     - Breakdown: 89 Paper I (MCQ) and 67 Paper II (Structured).
     - Breakdown by Year: 2020: 34, 2021: 26, 2022: 25, 2023: 29, 2024: 21, 2025: 21.
     - Breakdown by Lesson:
       - `g10u2.ts`: 19 questions (16 MCQ, 3 Structured)
       - `g10u3.ts`: 32 questions (21 MCQ, 11 Structured)
       - `g10u4.ts`: 12 questions (8 MCQ, 4 Structured)
       - `g10u5.ts`: 10 questions (6 MCQ, 4 Structured)
       - `g10u6.ts`: 8 questions (6 MCQ, 2 Structured)
       - `g10u7.ts`: 6 questions (3 MCQ, 3 Structured)
       - `g10u8.ts`: 10 questions (4 MCQ, 6 Structured)
       - `g11u1.ts`: 8 questions (2 MCQ, 6 Structured)
       - `g11u2.ts`: 7 questions (2 MCQ, 5 Structured)
       - `g11u3.ts`: 15 questions (5 MCQ, 10 Structured)
       - `g11u4.ts`: 13 questions (10 MCQ, 3 Structured)
       - `g11u5.ts`: 7 questions (2 MCQ, 5 Structured)
       - `g11u6.ts`: 9 questions (4 MCQ, 5 Structured)
     - Total available questions across codebase: **168 questions** covering 2020–2025.
     - Structured questions in `lessons/*.ts` contain `sampleAnswerEn` and `sampleAnswerSi` but lack separate `markingRubricEn`/`markingRubricSi` arrays (sample answers function as the model marking rubric).
  3. Legacy Component `src/components/PastPaperEngine.tsx`:
     - 354 lines of code.
     - Orphaned: grep search for `<PastPaperEngine` found 0 usages across the repo.
     - Only filters by `topicId` (e.g., "1.1"), `year`, and `type`. Has no Unit filter and is bound to legacy `useProgress()` rather than `useGameStore()`.

### 1.3 Dual Interaction Modes
- **Practice Mode**:
  - In `PastPaperEngine.tsx`, there is an initial prototype for instant evaluation (option selection triggers `sound.playSuccessDing()` or buzzer) and a toggle for "Reveal Model Answer & Rubric".
  - However, it is orphaned, not mounted at `/papers`, lacks Grade/Unit filtering, and does not provide an integrated full-syllabus practice experience.
- **Timed Exam Mode (60 minutes)**:
  - **Completely missing from the frontend codebase**.
  - No `TimedExamRunner.tsx` exists.
  - No 60-minute countdown timer exists in any React component.
  - No answer secrecy exam runner exists.
  - No automated scoring engine with post-test review exists in the UI.
- **E2E Test Harness Verification**:
  - Running `npx tsx scripts/test-e2e.ts` passes 62/62 tests (including R5-TC1..TC5, R5-BC1..BC4, R5xR1, R5xR3).
  - Crucial insight: These tests test simulated in-memory helper functions (`function filterPapers`, `function scoreExam`, `function tickTimer`) directly in test code, not actual UI components or the `/papers` App Router page.

---

## 2. Logic Chain

1. **Premise**: Navigation links in `DesktopSidebar.tsx` and `MobileBottomNav.tsx` direct users to `/papers`.
   - **Observation**: `src/app/papers/page.tsx` does not exist; Next.js build generates 0 `/papers` routes.
   - **Deduction**: Navigating to `/papers` results in an uncaught 404 error, directly violating Requirement §R5.
2. **Premise**: R5 requires filterable access by Year (2020–2025), Paper Type (Paper I / Paper II), and Unit.
   - **Observation**: `pastPapersData.ts` contains only 12 questions for Grade 10 Unit 1; 156 additional questions sit unindexed inside `src/data/lessons/*.ts`.
   - **Deduction**: Without a unified query layer or dataset aggregation, the exam engine cannot provide syllabus-wide past paper filtering.
3. **Premise**: R5 requires End-of-unit Boss Nodes with real past paper problems and mastery badges.
   - **Observation**: Only 6 boss nodes exist in `levelNodes.ts`, each containing only 1–2 questions; `unlockBadge` is never called by `BlindQuizRunner.tsx`; `CompletionDrawer.tsx` does not display badges or boss defeat states.
   - **Deduction**: The boss battle gamification loop is broken and non-functional in the current UI. Completing a boss node behaves identically to a regular 1-question quiz without awarding badges.
4. **Premise**: R5 mandates Dual Interaction Modes: Practice Mode with official marking rubrics & hints, and Timed Exam Mode (60 minutes) with strict answer secrecy and automated scoring.
   - **Observation**: Practice mode exists only as an unused prototype in `PastPaperEngine.tsx`; Timed Exam Mode does not exist in any component file.
   - **Deduction**: Dual interaction modes must be built from the ground up as dedicated components under `src/components/papers/` and mounted in `src/app/papers/page.tsx`.

---

## 3. Caveats

- **No Caveats on Code Structure**: The file tree, store methods, and content arrays were thoroughly inspected via direct reads, grep, and script verification.
- **Grade 10 Unit 9 & Grade 11 Units**: `g10u9` does not have a dedicated file in `src/data/lessons/`. When compiling past paper questions for Grade 10 Unit 9, the dataset will have fewer or no dedicated questions unless supplemented.
- **UI Styling Conventions**: The project uses Tailwind CSS, Framer Motion, and clay/neomorphic design patterns (`clay-card`). Any new pages and components must match this visual language.

---

## 4. Conclusion

Phase 5 (Exam Engine & 2020–2025 Past Paper Boss Arena) is currently **unimplemented in the user-facing application**:
1. `/papers` route is absent (404 error on navigation).
2. The past paper question dataset is fragmented between `pastPapersData.ts` (12 questions) and `lessons/*.ts` (156 questions), totaling 168 available questions that need a unified export.
3. Boss nodes exist for only 6 units, contain only 1–2 questions, and do NOT trigger `unlockBadge` or display badge rewards upon victory.
4. Neither Practice Mode nor 60-Minute Timed Exam Mode is wired into the app.

---

## 5. Actionable Implementation Recommendations for the Worker

To bring Phase 5 to 100% production-grade compliance with zero defects, the Worker should execute the following plan:

### Step 1: Create Unified Past Paper Dataset (`src/data/unifiedPastPapers.ts`)
- Aggregate the 12 questions from `src/data/pastPapersData.ts` and the 156 questions from `ALL_LESSONS_DATA` (`src/data/lessons/*.ts`) into a single strongly typed collection (`UNIFIED_PAST_PAPERS`).
- Standardize all 168 questions with:
  - `id`: unique string (e.g., `pp-2020-p1-q2`, `pp-g10-u2-2020-1`)
  - `year`: 2020 | 2021 | 2022 | 2023 | 2024 | 2025
  - `paperType`: 'Paper I' | 'Paper II'
  - `grade`: '10' | '11'
  - `unitId`: e.g., 'g10-u1', 'g10-u2', ...
  - `unitNumber`: 1 to 9 (G10) or 1 to 6 (G11)
  - `unitTitleEn` & `unitTitleSi`
  - `type`: 'mcq' | 'structured'
  - `badgeText`: e.g. "2020 O/L Paper I - Q02"
  - `questionEn` & `questionSi`
  - `contextEn` & `contextSi` (where applicable)
  - `options`: `{ id: string; en: string; si: string }[]` (for MCQ)
  - `correctOptionId`: string (for MCQ)
  - `sampleAnswerEn` & `sampleAnswerSi` (for Structured)
  - `markingRubricEn` & `markingRubricSi`: `string[]` (fallback to sample answer lines if missing)
  - `explanationEn` & `explanationSi`
- Provide query utility functions:
  ```typescript
  export function filterPastPapers(filters: {
    year?: string; // 'all' | '2020' | ... | '2025'
    paperType?: string; // 'all' | 'Paper I' | 'Paper II'
    grade?: string; // 'all' | '10' | '11'
    unitId?: string; // 'all' | 'g10-u1' | ...
    searchQuery?: string;
  }): UnifiedPastPaperQuestion[];
  ```

### Step 2: Implement Past Paper Arena Page (`src/app/papers/page.tsx`)
- Build a mobile-first, responsive page with:
  - Header with Grade Switcher (10 vs 11) and Language indicator.
  - Mode Switcher Tab Bar:
    - **Practice Mode** (icon: BookOpen / Sparkles)
    - **Timed Exam Mode (60 Mins)** (icon: Clock / Timer / Shield)
  - Filter Bar (sticky or top card):
    - Year selector: All Years, 2020, 2021, 2022, 2023, 2024, 2025
    - Paper Type selector: All, Paper I (MCQ), Paper II (Structured)
    - Unit selector: All Units, or specific Unit 1–9 / 1–6
    - Search input for keywords
  - Pass filtered questions to the active mode runner.

### Step 3: Build Practice Exam Runner (`src/components/papers/PracticeExamRunner.tsx`)
- Modernize and enhance the orphaned `PastPaperEngine.tsx`:
  - Hook into `useGameStore` (persistent store) instead of legacy context.
  - Instant evaluation on option tap for MCQs:
    - Neutral initial state.
    - On click, immediate emerald/crimson feedback, play `sound.playSuccessDing()` or `sound.playBuzzer()`, particle confetti on correct answer.
    - Record attempt in store and award +15 XP.
  - Structured questions:
    - Student draft input textarea with auto-save.
    - "Reveal Official Marking Scheme & Rubrics" button with eye toggle.
    - When revealed: display verbatim model answer in EN and SI, along with rubric mark breakdown (`1 mark for...`).
  - Dual-medium synchronized display or single-language based on active store language.
  - Pedagogical explanation card explaining the syllabus reference.

### Step 4: Build Timed Exam Mode Runner (`src/components/papers/TimedExamRunner.tsx`)
- Exam Setup & Config:
  - User selects Year (e.g., 2024) and Paper (Paper I - 40 MCQs, or combined).
  - "Start 60-Minute Exam" CTA.
- Active Exam Session:
  - 60-Minute Countdown Timer:
    - `timeRemainingSec` initialized to 3600 (or customizable for paper length).
    - Live ticking every 1000ms.
    - Visual progress bar showing elapsed/remaining time.
    - Warning indicator when `< 600s` (amber) and `< 300s` (red pulse).
    - Auto-submit when `timeLeftSec === 0` (`R5-BC1`).
  - Strict Answer Secrecy:
    - Option selection is strictly neutral (selected radio state only, NO green/red indicators, NO scores, NO feedback, NO explanations).
    - Practice mode revealed answers NEVER leak into timed mode (`R5-BC4`).
  - Navigation & Exam Ergonomics:
    - Question index drawer / palette showing answered vs flagged vs unvisited.
    - "Flag for Review" toggle on each question.
    - Previous and Next buttons in thumb zone (>= 48px hit targets).
  - Submission & Safety:
    - "Submit Exam" button with confirmation modal showing summary ("You have answered X of Y questions").
    - Handles blank submissions safely: computes 0% without NaN error (`R5-BC3`).
- Automated Scoring & Results Screen:
  - Score summary card: Total Questions, Attempted, Correct, Accuracy %, and Official Letter Grade:
    - Distinction (A): >= 75%
    - Very Good (B): >= 65%
    - Credit (C): >= 50%
    - Ordinary Pass (S): >= 35%
    - Fail (F): < 35%
  - Confetti fanfare on passing grade.
  - Store rewards: call `addXp(accuracyScore)` and record completion.
  - Post-Exam Comprehensive Review:
    - Step-by-step breakdown of every question.
    - Highlights user's selected option vs official correct option.
    - Full explanation and official marking rubric revealed.
  - Action buttons: "Retake Exam", "Switch to Practice Mode", "Return to Quest Map".

### Step 5: Fix Boss Nodes, Badges & Victory Integration
- **Enrich Boss Node Questions in `src/data/levelNodes.ts`**:
  - Increase question counts for existing boss nodes (`g10-u1-boss`, `g10-u2-boss`, `g10-u3-boss`, `g10-u8-s1`, `g11-u1-boss`, `g11-u4-boss`) from 1–2 questions to 4–6 questions drawn from the real 2020–2025 past papers.
- **Wire Badge Awarding into `BlindQuizRunner.tsx`**:
  - In `src/components/quiz/BlindQuizRunner.tsx`:
    ```typescript
    if (isLastQuestion) {
      const total = questions.length;
      const accuracy = total > 0 ? (correctCount / total) * 100 : 100;
      setFinalAccuracy(accuracy);
      completeNode(node.id, accuracy);

      // BOSS NODE VICTORY LOGIC:
      if (node.type === 'boss_arena' && accuracy >= 70) {
        const badgeId = `badge-${node.unitId}-mastery`;
        unlockBadge(badgeId);
        setUnlockedBadgeId(badgeId);
      }

      setShowCompletionDrawer(true);
    }
    ```
- **Update `CompletionDrawer.tsx`**:
  - Accept `isBoss?: boolean` and `badgeId?: string | null`.
  - When `isBoss` is true and a badge is unlocked:
    - Display gold Boss Defeat crown banner.
    - Render animated Boss Mastery Badge with shiny border and "+100 Bonus XP Awarded".
    - Bilingual victory text: "Unit Boss Defeated! Mastery Badge Unlocked!" / "ඒකකයේ ප්‍රධාන අභියෝගය ජයගන්නා ලදී!".
- **Display Badges in UI**:
  - In `src/components/hud/TopHud.tsx` or `src/components/AnalyticsDashboard.tsx`, display an Earned Badges counter / drawer so students can admire their boss mastery trophies.

---

## 6. Verification Method

To verify the implementation once executed by the Worker:

1. **Build Verification**:
   ```bash
   npm run build
   ```
   *Expected*: Passes with exit code 0; route `/papers` appears as a valid prerendered or dynamic route in the build output table.
2. **E2E Suite Verification**:
   ```bash
   npx tsx scripts/test-e2e.ts
   ```
   *Expected*: All 62 test cases pass cleanly across Tiers 1–4.
3. **Content Verification**:
   ```bash
   npm test
   ```
   *Expected*: Passes with exit code 0 (1812+ checks).
4. **Behavioral Route & Interaction Checks**:
   - Navigate to `http://localhost:3005/papers`:
     - Confirm page renders without errors or horizontal scroll.
     - Verify year filter (2020–2025), type filter (Paper I / Paper II), and unit filter correctly filter questions.
     - Test Practice Mode: select option -> instant evaluation; reveal structured question rubric -> shows official marking scheme.
     - Test Timed Exam Mode: 60-minute timer ticks downward; answers remain hidden until submission; submission calculates accuracy and grade (A/B/C/S/F); post-test review displays all answers and explanations.
   - Test Boss Node on Quest Map:
     - Clear a boss node (e.g. `g10-u1-boss`) with >= 70% score.
     - Verify `unlockBadge('badge-g10-u1-mastery')` is invoked and store's `badges` array contains the badge.
     - Verify `CompletionDrawer.tsx` displays the Boss Defeat badge celebration.
