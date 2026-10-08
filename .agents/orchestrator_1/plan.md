# Master Execution Plan: Sri Lankan G.C.E. O/L ICT Gamified Micro-Learning Web App

## Objective
Build a production-grade, mobile-first micro-learning web application for the Sri Lankan G.C.E. O/L ICT syllabus (Grade 10 & 11) with Duolingo/Candy Crush gamification, bilingual content (`en`/`si`), 5 interactive engineering sandboxes, past paper boss arena (2020–2025), and zero build/validation defects.

## Phase Breakdown

### Phase 0: Survey & Architecture Reconnaissance
- Spawn 3 parallel Explorers / Spec Miners:
  - `explorer_codebase`: Map existing `src/`, `scripts/`, dependencies, Next.js router setup, Tailwind config, build health.
  - `spec_miner_content`: Map syllabus units (G10 Units 1-9, G11 Units 1-6), schema specs (`LevelNode`, `TheoryCard`, `QuizQuestion`), bilingual content requirements, validation requirements.
  - `spec_miner_sandboxes_exam`: Map specs for the 5 interactive sandboxes, Past Paper Boss Arena (2020-2025), practice/timed exam modes, marking schemes.
- Synthesize findings into `PROJECT.md` (architecture, feature inventory, code layout, interface contracts, milestone plan).

### Phase 1: Core Shell, Persistent State & Navigation Engine (R1)
- Top HUD: streak, heart containers (5 lives, 30-min recharge cycle), Grade switcher (10 vs 11), XP counter.
- Navigation: Mobile bottom bar (64px, thumb-zone), desktop collapsible left rail (>= 1024px).
- Onboarding Flow: 3-step zero-friction (Language -> Grade -> Entry Route).
- Quest Map: Winding SVG/flex quest map, alternating zig-zag nodes, states (Gold Cleared 1-3 stars, Neon Pulsing Active, Slate Locked, Crown Boss).
- Persistent State: Zustand store with localStorage persistence.

### Phase 2: Core Micro-Learning Loop Engines (R2)
- Story Flashcard Engine (`/study/[nodeId]`): Instagram-story segmented progress header, 40/60 split card, thumb-zone controls.
- Blind Quiz Engine (`/quiz/[nodeId]`): Strict 2-phase evaluation (neutral options until `Check Answer`), -1 heart & shake on error, life depletion modal.
- Completion Drawer (`CompletionDrawer.tsx`): Confetti fanfare, star calculation (>=70% 1-2 stars, >=90% 3 stars), XP award, zero dead-end forward routing.

### Phase 3: Bilingual Content Transformation & Validation Pipeline (R3)
- Compile Grade 10 (Units 1-9) & Grade 11 (Units 1-6) into strict JSON models adhering to schemas.
- 100% bilingual parity (`en` and `si`) across prompts, options, explanations, takeaways.
- Validation script `scripts/compile-content.ts` / `npm run validate:content` passing with zero errors.

### Phase 4: Interactive Visual Sandboxes & Minigames (R4)
1. G10 Unit 03: 8-Bit Switchboard & Color Chamber
2. G10 Unit 04: Neon Logic Gate Breadboard
3. G10 Unit 07: Spreadsheet Laser Grid & Reference Anchors
4. G11 Unit 01: Flowchart Trace Table Scrubber
5. G11 Unit 05: HTML Table Mason
- 60 FPS mobile canvas/DOM performance, goal-state verification triggers.

### Phase 5: Exam Engine & 2020–2025 Past Paper Boss Arena (R5)
- Unit Boss Nodes with real past paper questions and mastery badges.
- Past Paper Arena (`/papers`): Year (2020-2025), Paper Type (I/II), Unit filtering.
- Dual modes: Practice Mode with official marking scheme rubrics, Timed Exam Mode (60 min).

### Parallel Track: E2E Testing Track
- Test infrastructure and 4-tier opaque-box test suite:
  - Tier 1: Feature Coverage (>=5 per feature)
  - Tier 2: Boundary & Corner Cases (>=5 per feature)
  - Tier 3: Cross-Feature Interactions
  - Tier 4: Real-World Scenarios
- Publishes `TEST_READY.md`.

### Phase 6: Final Verification & Forensic Audit
- Tier 1-4 E2E test suite passes 100%.
- Tier 5 Adversarial Coverage Hardening.
- Independent Forensic Audit (`teamwork_preview_auditor`) returns CLEAN.
- Full `npm run build` and content validation pass cleanly.
- Send victory claim report to Sentinel.
