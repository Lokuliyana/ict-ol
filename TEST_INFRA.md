# Test Infrastructure Specification: Sri Lankan G.C.E. O/L ICT Micro-Learning Platform

## 1. Executive Summary

This document defines the authoritative, opaque-box End-to-End (E2E) test infrastructure for the Sri Lankan G.C.E. Ordinary Level Information and Communication Technology (ICT) gamified micro-learning web application.

The test infrastructure is designed strictly in accordance with:
- **`ORIGINAL_REQUEST.md`**: Requirements R1 through R5 and core acceptance criteria.
- **`PROJECT.md`**: Architectural contracts, schemas, and milestone deliverables.
- **Mandatory Integrity Rule**: **DO NOT CHEAT**. All tests evaluate authentic computational logic, data models, state transitions, algorithms, and interface contracts without facade stubs or hardcoded bypasses.

---

## 2. Test Architecture & Runner Harness

### 2.1 File Organization
The test infrastructure resides outside the `.agents/` directory, adhering strictly to clean workspace conventions:
```
ict-ol/
├── scripts/
│   └── test-e2e.ts                 # CLI entry point for E2E test execution
├── tests/
│   └── e2e/
│       ├── harness.ts              # Lightweight test runner, assertions, & reporting
│       ├── tier1-feature-coverage.test.ts  # Tier 1: Feature Coverage (R1 - R5)
│       ├── tier2-boundary-corner.test.ts   # Tier 2: Boundary & Corner Cases (R1 - R5)
│       ├── tier3-cross-feature.test.ts     # Tier 3: Cross-Feature Pairwise Interactions
│       └── tier4-real-world-scenarios.test.ts # Tier 4: Real-World User Workloads
├── TEST_INFRA.md                   # This architectural specification
└── TEST_READY.md                   # Readiness declaration for the team
```

### 2.2 Execution Command
The test suite executes deterministically across Node.js / TypeScript environments:
```bash
npm run test:e2e
# or
npx tsx scripts/test-e2e.ts
```

### 2.3 Assertions & Lifecycle (`tests/e2e/harness.ts`)
The harness provides a self-contained, dependency-free assertion library (`expect`) supporting:
- `toBe(expected)`: Strict equality check.
- `toEqual(expected)`: Deep recursive JSON equality check.
- `toBeGreaterThanOrEqual(val)` / `toBeLessThanOrEqual(val)` / `toBeGreaterThan(val)`: Numeric threshold bounds.
- `toBeTruthy()` / `toBeFalsy()` / `toBeNull()`: Truthiness checks.
- `toContain(item)`: Array membership and string substring matching.
- `toThrow(pattern)`: Exception and error message pattern matching.

---

## 3. Tier 1: Feature Coverage (R1 – R5)

Tier 1 verifies the primary happy-path behavior and functional invariants across all five core requirements, containing at least 5 test cases per feature.

### Feature R1: Core Shell, Persistent State & Navigation Engine
1. **R1-TC1: Heart Container Capacity (5 lives) & 30-min recharge cycle**:
   - *Input*: Initial state with 5 hearts; deduct 1 heart; advance clock by 10m (600s) and 30m (1800s).
   - *Expected*: Hearts remain 4 at 10m with 1200s timer; restored to 5 at 30m with timer reset.
   - *Source*: `ORIGINAL_REQUEST.md` §R1.
2. **R1-TC2: Persistent State serialization & round-trip integrity**:
   - *Input*: Full profile with Grade 10, Sinhala, 4 hearts, 7 streak, 450 XP, completed node `g10-u01-n01` with 3 stars.
   - *Expected*: Exact serialization to JSON and deserialization without data corruption.
   - *Source*: `ORIGINAL_REQUEST.md` §R1, `PROJECT.md` §Persistent State Contract.
3. **R1-TC3: 3-Step Onboarding Flow state transitions & terminal validation**:
   - *Input*: Step 1 (Medium: 'si') -> Step 2 (Grade: '10') -> Step 3 (EntryRoute: 'level_1').
   - *Expected*: Sequential progression culminating in `onboardingComplete: true`.
   - *Source*: `ORIGINAL_REQUEST.md` §R1.
4. **R1-TC4: Winding Quest Map node states (Locked, Active, Cleared, Boss)**:
   - *Input*: Completed nodes map, active node id, boss flag.
   - *Expected*: Resolves node states correctly: Cleared with stars, Active (Neon), Locked (Slate), Boss (Crown).
   - *Source*: `ORIGINAL_REQUEST.md` §R1.
5. **R1-TC5: Responsive Viewport navigation contract (64px bottom dock vs desktop rail)**:
   - *Input*: Viewport width 390px (mobile) vs 1280px (desktop).
   - *Expected*: Mobile renders 64px bottom dock with >=48px hit targets; desktop renders left rail.
   - *Source*: `ORIGINAL_REQUEST.md` §R1, Acceptance Criteria §Ergonomics.

### Feature R2: Core Micro-Learning Loop Engines
1. **R2-TC1: Story Flashcard 40/60 split card layout & card index stepping**:
   - *Input*: Multi-card theory deck; step forward through cards.
   - *Expected*: Stepping increments card index; last card presents quiz entry CTA.
   - *Source*: `ORIGINAL_REQUEST.md` §R2.
2. **R2-TC2: Blind Quiz strict two-phase evaluation and answer privacy secrecy**:
   - *Input*: Select option 2; inspect state before vs after clicking Check Answer.
   - *Expected*: State is neutral and unrevealed prior to Check Answer; reveals emerald/crimson feedback on submission.
   - *Source*: `ORIGINAL_REQUEST.md` §R2, Acceptance Criteria §Answer Privacy.
3. **R2-TC3: Blind Quiz error deduction (-1 heart) and shake effect trigger**:
   - *Input*: Submit wrong answer in blind quiz.
   - *Expected*: Hearts decrease by 1; error shake effect triggered.
   - *Source*: `ORIGINAL_REQUEST.md` §R2.
4. **R2-TC4: Life depletion lockout modal blocking quiz entry at 0 hearts**:
   - *Input*: Attempt entering quiz with 0 hearts vs 3 hearts.
   - *Expected*: 0 hearts blocked with lockout modal; 3 hearts allowed.
   - *Source*: `ORIGINAL_REQUEST.md` §R2.
5. **R2-TC5: CompletionDrawer star calculation (>=70% 2 stars, >=90% 3 stars) & XP**:
   - *Input*: Quiz scores of 9/10 (90%), 7/10 (70%), and 5/10 (50%).
   - *Expected*: 90% yields 3 stars + 100 XP; 70% yields 2 stars + 70 XP; 50% yields 1 star + 40 XP.
   - *Source*: `ORIGINAL_REQUEST.md` §R2.

### Feature R3: Bilingual Content Transformation & Validation Pipeline
1. **R3-TC1: Syllabus unit registry integrity (Grade 10 and Grade 11 units)**:
   - *Input*: `CURRICULUM_DATA` registry.
   - *Expected*: Validates presence of discrete Grade 10 units (U01-U08+) and 6 Grade 11 units (U01-U06).
   - *Source*: `ORIGINAL_REQUEST.md` §R3.
2. **R3-TC2: Lesson 01 subtopics conform to bilingual block schemas**:
   - *Input*: `LESSON_01_DATA.subtopics`.
   - *Expected*: Exactly 7 subtopics; every block contains bilingual text in `en` and `si` with >= 5 characters.
   - *Source*: `ORIGINAL_REQUEST.md` §R3, `scripts/verify-content.mjs`.
3. **R3-TC3: 100% Dual-Medium parity across past paper question stems & explanations**:
   - *Input*: `PAST_PAPER_QUESTIONS` dataset.
   - *Expected*: Every question stem and explanation exists in both English and Sinhala.
   - *Source*: `ORIGINAL_REQUEST.md` §R3.
4. **R3-TC4: MCQ question option integrity (4 options and valid correctOptionId)**:
   - *Input*: All MCQ questions in dataset.
   - *Expected*: Exactly 4 options per question; `correctOptionId` matches a valid option ID.
   - *Source*: `ORIGINAL_REQUEST.md` §R3.
5. **R3-TC5: Sri Lankan NIC decoder algorithm (Old 9-digit & New 12-digit formats)**:
   - *Input*: '853410123V' and '200552301980'.
   - *Expected*: Accurately decodes birth year, month, day, and gender for both formats.
   - *Source*: Grade 10 Unit 01 NIE Curriculum practical standard, `src/utils/nicDecoder.ts`.

### Feature R4: Interactive Visual Sandboxes & Minigames
1. **R4-TC1: 8-Bit Switchboard binary-to-decimal summation algorithm**:
   - *Input*: Bit switch toggles [1,0,0,0,0,1,0,1] and [0,1,0,0,0,0,0,1].
   - *Expected*: Evaluates to decimal 133 (2022 O/L P1 Q07) and 65 (ASCII 'A').
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `BitSwitchboard.tsx`.
2. **R4-TC2: Color Chamber RGB integer division into hexadecimal color code**:
   - *Input*: RGB values (135, 31, 120), (50, 153, 204), (255, 238, 0).
   - *Expected*: Outputs `#871F78` (Dark Purple), `#3299CC` (Sky Blue), `#FFEE00` (Yellow).
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `HexColorVat.tsx`.
3. **R4-TC3: Neon Logic Gate truth table engine (AND, OR, NOT, NAND, NOR, XOR)**:
   - *Input*: Binary combinations (0,0), (0,1), (1,0), (1,1) for each gate type.
   - *Expected*: Evaluates authentic Boolean logic values matching IEEE/NIE truth tables.
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `LogicGateSimulator.tsx`.
4. **R4-TC4: Spreadsheet Laser Grid formula shift (Relative vs Absolute $H$1)**:
   - *Input*: Drag formula down from row 2 to row 3 with and without `$H$1` anchor.
   - *Expected*: Absolute formula retains `$H$1`; unlocked relative shifts to `H2` (empty).
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `LaserGridAnchors.tsx`.
5. **R4-TC5: Flowchart Trace Table register stepping accumulator simulation**:
   - *Input*: `Count := 1; Sum := 0; while Count <= 3 do Sum += Count; Count++`.
   - *Expected*: Simulates step-by-step register states: Sum=1, 3, 6; Count=2, 3, 4; terminates at 4<=3 false.
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `TraceTableScrubber.tsx`.
6. **R4-TC6: HTML Table Mason colspan/rowspan dimension deduction and markup generator**:
   - *Input*: Toggle colspan and rowspan flags.
   - *Expected*: Generates `<th colspan="2">` or `<td rowspan="2">` markup correctly.
   - *Source*: `ORIGINAL_REQUEST.md` §R4, `HtmlTableMason.tsx`.

### Feature R5: Exam Engine & 2020–2025 Past Paper Boss Arena
1. **R5-TC1: Past Paper query engine filters by Year, Paper Type, and Subtopic**:
   - *Input*: Query for 2020 MCQs.
   - *Expected*: Returns all 2020 MCQ questions with zero structured essays included.
   - *Source*: `ORIGINAL_REQUEST.md` §R5, `PastPaperEngine.tsx`.
2. **R5-TC2: Practice Mode reveals official marking rubrics and model answers**:
   - *Input*: Inspect structured essay question in Practice Mode.
   - *Expected*: Provides bilingual model answers (`sampleAnswerEn`, `sampleAnswerSi`) and rubrics.
   - *Source*: `ORIGINAL_REQUEST.md` §R5.
3. **R5-TC3: Timed Exam Mode 60-minute countdown timer and answers secrecy**:
   - *Input*: Start timed exam; evaluate visibility of answers before submission.
   - *Expected*: Answers remain strictly concealed until submission event.
   - *Source*: `ORIGINAL_REQUEST.md` §R5, `PROJECT.md`.
4. **R5-TC4: Boss Arena victory condition unlocks unit mastery badge**:
   - *Input*: Score 9/10 on unit boss exam.
   - *Expected*: Unlocks `badge-g10-u01-mastery`.
   - *Source*: `ORIGINAL_REQUEST.md` §R5.
5. **R5-TC5: All past paper questions provide dual-medium prompts and explanations**:
   - *Input*: Full `PAST_PAPER_QUESTIONS` dataset.
   - *Expected*: 100% bilingual parity across all entries.
   - *Source*: `ORIGINAL_REQUEST.md` §R5.

---

## 4. Tier 2: Boundary & Corner Cases (R1 – R5)

Tier 2 tests edge values, off-by-one conditions, boundary clamping, and input stress across all features (>= 5 tests per feature).

### Feature R1:
- **R1-BC1**: Heart counter clamps at minimum 0 and maximum 5 lives.
- **R1-BC2**: 30-minute recharge timer exact boundary (1799s = 0 restored vs 1800s = 1 restored).
- **R1-BC3**: Streak tracker rollover across dates (consecutive day increments, skipped day resets).
- **R1-BC4**: LocalStorage corruption recovery with graceful default fallback.
- **R1-BC5**: Responsive breakpoint exact threshold (1023px mobile dock vs 1024px desktop rail).

### Feature R2:
- **R2-BC1**: Star calculation precision at exact boundaries (69.9% = 1 star, 70.0% = 2 stars, 89.9% = 2 stars, 90.0% = 3 stars).
- **R2-BC2**: Zero hearts strictly blocks entering quiz session.
- **R2-BC3**: Repeated option toggles before Check Answer preserves neutral unrevealed state.
- **R2-BC4**: Check Answer evaluation idempotency prevents duplicate heart deductions on multiple taps.
- **R2-BC5**: Flashcard navigation clamps at first card and triggers CTA on last card.

### Feature R3:
- **R3-BC1**: Sinhala complex conjuncts & Zero-Width Joiner (ZWJ) encoding preservation ('ක්‍රමලේඛනය', 'ප්‍රතිදානය').
- **R3-BC2**: Quiz `correctIndex` validator accepts [0, 3] and rejects <0 or >3.
- **R3-BC3**: Content validator rejects empty or whitespace-only bilingual strings.
- **R3-BC4**: Standard MCQ validator rejects non-4 option counts (e.g. 3 or 5 options).
- **R3-BC5**: Question with omitted `syllabusRef` defaults safely without throwing exceptions.

### Feature R4:
- **R4-BC1**: 8-Bit Switchboard extreme boundary states (all OFF: 0 vs all ON: 255).
- **R4-BC2**: Color Chamber hex formatting padding at extreme values (#000000 & #FFFFFF).
- **R4-BC3**: Logic Gate NOT ignores input B; XOR handles identical vs differing inputs.
- **R4-BC4**: Spreadsheet formula detects empty target cell on relative drag (detects broken reference).
- **R4-BC5**: Trace Table pre-test while loop condition false at start executes 0 iterations.

### Feature R5:
- **R5-BC1**: Timed Exam timer reaching 0 triggers automatic submission.
- **R5-BC2**: Past Paper filter bounds: 2020 and 2025 return questions; out-of-range year returns empty array.
- **R5-BC3**: Blank exam submission safely computes 0% without NaN error.
- **R5-BC4**: Practice mode answer revelations do not leak into Timed mode.
- **R5-BC5**: NIC Decoder handles Feb 29 (day 60) and March 1 (day 61), rejects day 499 for male (>366).

---

## 5. Tier 3: Cross-Feature Interactions

Tier 3 validates pairwise combinations and communication between distinct application modules:
1. **R1 x R2 (Heart Economy x Blind Quiz)**: Failing quiz questions deducts hearts until 0, triggering the Life Depletion Lockout modal and blocking further quizzes.
2. **R1 x R3 (State Store x Bilingual Parity)**: Toggling language instantly switches content medium without resetting user hearts, streak, or XP.
3. **R2 x R1 (Quiz Engine x Quest Progression)**: Scoring >=90% in quiz awards 3 stars, 100 XP, updates `completedNodes`, and unlocks next node on the Quest Map.
4. **R4 x R1 (Sandboxes x Game Economy)**: Solving the 8-Bit Switchboard goal state awards stars and XP to the persistent store.
5. **R5 x R1 (Boss Arena x Badges)**: Defeating a unit boss awards a boss mastery badge to the persistent profile and unlocks the next unit.
6. **R5 x R3 (Boss Arena x Bilingual Content)**: Toggling language displays official marking rubrics and model answers in Sinhala vs English synchronously.

---

## 6. Tier 4: Real-World Application Scenarios

Tier 4 simulates multi-step, end-to-end user journeys:
1. **Scenario 1: New Learner Journey**: Onboarding (Sinhala -> Grade 10 -> Level 1) -> Quest Map -> Flashcard review (7 subtopics) -> Quiz 100% -> 3-Star Level Clearance & Next Node Unlock.
2. **Scenario 2: The Struggling Student**: 5 mistakes -> Hearts depleted to 0 -> Quiz locked -> Reviews theory flashcards -> 30-min recharge cycle restores heart -> Retries quiz and succeeds.
3. **Scenario 3: Interactive Engineering Lab Mastery**: 8-Bit Switchboard (133₁₀) -> Hex Color Vat (#871F78) -> Neon Logic Workbench De Morgan Verification.
4. **Scenario 4: High-Stakes 60-Minute Past Paper Exam Simulation**: Filter 2024 MCQs -> Start 60-min Timed Exam -> Answer all questions under secrecy -> Submit -> Scorecard breakdown & review.
5. **Scenario 5: Bilingual Cross-Grade Study Session with Persistent State**: English Grade 10 -> Switch to Sinhala -> Switch to Grade 11 -> Session persistence across browser reload.

---

## 7. Current Verification Results

- **Total Test Cases**: 62
- **Pass Rate**: 100% (62/62 Passed, 0 Failed)
- **Execution Time**: ~10ms
- **Build & Integration**: Clean compilation via `npx tsx scripts/test-e2e.ts`.
