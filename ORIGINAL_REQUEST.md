# Original User Request

## 2026-10-07T21:29:44Z

<USER_REQUEST>
Transform the complete Sri Lankan G.C.E. O/L Information and Communication Technology (ICT) syllabus (Grade 10 and Grade 11) into a production-grade, mobile-first micro-learning web application with Duolingo/Candy Crush gamified progression and interactive engineering sandboxes.

Working directory: c:\Users\MSI\ict-ol
Integrity mode: development

## Requirements

### R1. Core Shell, Persistent State & Navigation Engine (Phase 1)
- Persistent top HUD displaying daily study streak, heart containers (5 lives with 30-min recharge cycle), Grade switcher, and XP counter.
- Mobile thumb-zone bottom navigation bar (64px) with desktop collapsible left rail (>= 1024px).
- Zero-friction 3-step onboarding flow (Medium: Sinhala vs. English -> Grade: 10 vs. 11 -> Entry Route: Level 1 vs. Topic Library).
- Winding SVG/flex quest map with alternating zig-zag nodes, clear states (Gold Cleared with 1-3 stars, Neon Pulsing Active, Slate Locked, Crown Unit Boss), and drawer triggers.
- Persistent local store (Zustand with localStorage persistence) maintaining active node, completed nodes, heart timer, streak, language, and grade.

### R2. Core Micro-Learning Loop Engines (Phase 2)
- Story Flashcard Engine (`/study/[nodeId]`): Instagram-story segmented progress header, split card layout (top 40% visual infographic widget, bottom 60% concise micro-bullet points), thumb-zone controls (`Skip to Quiz`, `Got It! Next`).
- Blind Quiz Engine (`/quiz/[nodeId]`): Strict two-phase evaluation where options start completely neutral; answers, color indicators, and explanations only reveal upon tapping `Check Answer`. Life deduction (-1 heart) and card shake on error; life depletion modal blocking quizzes until flashcards are reviewed.
- Level Completion Drawer (`CompletionDrawer.tsx`): Confetti fanfare, star calculations (1-3 stars based on >=70% / >=90% accuracy), XP award, and zero dead-end forward routing (`Next Part`, `Review Topic`, `Return to Map`).

### R3. Bilingual Content Transformation & Validation Pipeline (Phase 3)
- Fully parse and compile Grade 10 (Units 01–09) and Grade 11 (Units 01–06) syllabus materials into strict JSON models adhering to the `LevelNode`, `TheoryCard`, and `QuizQuestion` schemas.
- Ensure 100% bilingual parity (`en` and `si`) across all prompts, options, explanations, and key takeaways.
- Include a validation script (`scripts/compile-content.ts` / `npm run validate:content`) ensuring valid schema integrity and `correctIndex` ranges.

### R4. Interactive Visual Sandboxes & Minigames (Phase 4)
- G10 Unit 03: 8-Bit Switchboard (lever toggles computing binary/decimal) & Color Chamber (RGB sliders to Hex).
- G10 Unit 04: Neon Logic Gate Breadboard (AND, OR, NOT, NAND, NOR, XOR drag/toggle sandbox).
- G10 Unit 07: Spreadsheet Laser Grid & Reference Anchors (relative vs. absolute `$A$1` visualization).
- G11 Unit 01: Flowchart Trace Table Scrubber (variable register stepping).
- G11 Unit 05: HTML Table Mason (interactive colspan/rowspan visual cell merger).
- Ensure 60 FPS mobile canvas performance and goal-state verification triggers.

### R5. Exam Engine & 2020–2025 Past Paper Boss Arena (Phase 5)
- End-of-unit Boss Nodes featuring real G.C.E. O/L past paper problems with mastery badges.
- Past Paper Arena (`/papers`) filterable by Year (2020–2025), Paper Type (Paper I / Paper II), and Unit.
- Dual interaction modes: Practice Mode with official marking scheme rubrics, and Timed Exam Mode (60 minutes).

## Acceptance Criteria

### Ergonomics & Layout
- [ ] Viewport maintains zero horizontal scroll on mobile viewports (360px–412px width).
- [ ] All primary action buttons (`Check Answer`, `Continue`, `Got It! Next`) reside in the bottom 25% thumb zone with >= 48px hit target.

### State & Game Economy
- [ ] State (Grade, Language, Progress, Hearts, XP, Streak) survives full browser reload via persistent storage.
- [ ] Deducting hearts updates lives, and running out of hearts locks quiz entry until restored.

### Answer Privacy & Integrity
- [ ] Quiz answers, emerald/crimson indicators, and explanations are strictly unrendered until the user actively taps `Check Answer`.

### Content & Sandboxes
- [ ] All Grade 10 (Units 1-9) and Grade 11 (Units 1-6) nodes load cleanly in both Sinhala and English.
- [ ] All 5 specialized sandboxes function smoothly and validate input goal states.
- [ ] `npm run build` and content validation scripts pass with zero errors.

</USER_REQUEST>

## 2026-10-08T07:43:21Z

User instruction: complete the last phase and move to the next phase. Please complete the final remediations, finalize all gates, run the full verification battery, submit the victory claim, and trigger the victory auditor to complete the project.
