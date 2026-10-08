## 2026-10-07T22:43:03Z

<USER_REQUEST>
You are the Worker subagent responsible for Milestone 1 Polish & Milestone 2 (Core Micro-Learning Loop Engines) implementation.

Your identity:
- Role: Micro-Learning & Shell Worker
- Working directory: c:\Users\MSI\ict-ol\.agents\teamwork_preview_worker_m1_m2
- Parent Orchestrator Conversation ID: 26d9983e-6ed4-4cc4-8d41-b70ec5b54212

Mandatory instructions:
1. You MUST read:
   - `c:\Users\MSI\ict-ol\ORIGINAL_REQUEST.md`
   - `c:\Users\MSI\ict-ol\.agents\orchestrator_2\PROJECT.md`
   - `c:\Users\MSI\ict-ol\TEST_READY.md`
   - Explorer 1 Report: `c:\Users\MSI\ict-ol\.agents\explorer_m1_1\handoff.md`
   - Explorer 2 Report: `c:\Users\MSI\ict-ol\.agents\explorer_m1_2\handoff.md`
   - Explorer 3 Report: `c:\Users\MSI\ict-ol\.agents\explorer_m1_3\handoff.md`
2. Initialize your BRIEFING.md and progress.md in your working directory. Regularly update progress.md with timestamps.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Scope & Tasks:

Part A — Phase 1 Polish & Bug Fixes:
1. `heartMath.ts`: Fix line 64 boundary condition so `secondsUntilNextHeart` does not flash 0 at exact 1800s rollover.
2. `MobileBottomNav.tsx`: Ensure labels react to selected `language` (`item.labelSi` when `'si'`, `item.labelEn` when `'en'`).
3. `DesktopSidebar.tsx` & `AppShell.tsx`: Store sidebar collapsed state in `store.ts` or dispatch an in-tab event so `AppShell` immediately updates `lg:pl-64` / `lg:pl-20` without desync or reload.
4. `QuestMap.tsx`:
   - Fix SVG-to-node vertical alignment on mobile screens: ensure SVG road and node coordinates align seamlessly across 360px–412px viewports (use percentage top styling or SVG scaling).
   - Fix Boss state gating: uncompleted boss nodes must return `'locked'` when prerequisites are incomplete so users cannot bypass locked units.
   - Advance active node on completion so the active neon glowing SVG path progresses as the user advances.
5. `LevelNodeButton.tsx`: Fix cleared boss visual styling so completed boss nodes display Gold Cleared crown styling rather than getting stuck in combat rose.
6. `LevelDrawer.tsx`:
   - Update primary CTA to `Start Study / පාඩම අරඹන්න` routing to `/study/[nodeId]`.
   - Update secondary CTA to `Jump to Quiz / පරීක්ෂණය` routing to `/quiz/[nodeId]` (with heart gate check).
   - Add `Practice Sandbox` button when `node.sandboxName` is defined.
   - Connect depleted hearts click to custom heart depletion notice/modal rather than native `alert()`.
7. `.eslintrc.json`: Create lightweight ESLint config (`{"extends": "next/core-web-vitals"}`) so `npm run lint` passes without prompting.

Part B — Phase 2: Core Micro-Learning Loop Engines:
1. `src/types/curriculum.ts`: Implement TypeScript types (`BilingualText`, `TheoryCard`, `QuizQuestion`, `LevelNode`) adhering to `PROJECT.md §Interface Contracts`.
2. `src/data/levelNodes.ts`: Provide authentic curriculum data (or bridge from `curriculum.ts`) for quest nodes so `/study/[nodeId]` and `/quiz/[nodeId]` have complete bilingual theory cards and 4-option quiz questions.
3. `src/components/study/StoryFlashcardRunner.tsx`:
   - Instagram-story segmented progress header (top progress bars indicating current card).
   - 40/60 split card: top 40% visual infographic widget / interactive preview, bottom 60% concise micro-bullet points with checkmarks & gold key takeaway box.
   - Bottom 25% thumb-zone navigation: `Skip to Quiz`, `Got It! Next` / `Take the Quiz ➔`.
4. `src/components/quiz/BlindQuizRunner.tsx`:
   - Strict two-phase evaluation: options start neutral; user selects option; answer correctness, emerald/crimson indicators, and explanations reveal ONLY upon tapping `Check Answer`.
   - -1 heart penalty and card shake animation on error; play audio effects.
   - Option locking after check to prevent multiple deductions (idempotency).
5. `src/components/quiz/HeartDepletionModal.tsx`:
   - Appears when hearts reach 0. Shows 30-min live countdown and "Review Flashcards" CTA button. Quizzes remain locked while hearts = 0.
6. `src/components/completion/CompletionDrawer.tsx`:
   - Confetti fanfare via `canvas-confetti`.
   - Star calculation: >=90% accuracy -> 3 stars, >=70% accuracy -> 2 stars, <70% -> 1 star.
   - XP reward (`50 + stars * 25`), streak update.
   - Zero dead-end forward routing: `Next Level ➔`, `Review Topic 🔄`, `Return to Map 🗺️`.
7. App Router Pages:
   - `src/app/study/[nodeId]/page.tsx`: Full-screen immersive flashcard runner.
   - `src/app/quiz/[nodeId]/page.tsx`: Full-screen blind quiz runner with heart gate.

Verification Requirements:
- Run `npm run test:e2e` (all 62 tests must pass with 0 errors).
- Run `npm test` (all 1,812 tests must pass).
- Run `npx tsc --noEmit` (0 TypeScript errors).
- Run `npm run build` (Next.js production build must compile successfully).
- Run `npm run lint` (must pass non-interactively).

Report all commands, outputs, and files modified in your `handoff.md`.
Send completion message via `send_message` to parent orchestrator (`26d9983e-6ed4-4cc4-8d41-b70ec5b54212`).
</USER_REQUEST>
