# Project: Sri Lankan G.C.E. O/L ICT Gamified Web Application

## Architecture
- **Framework**: Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, canvas-confetti, Lucide React.
- **State Architecture**: Persistent Store with localStorage persistence:
  - User profile: selected Grade (`10` | `11`), Language (`en` | `si`), study streak, last study date.
  - Life & Game Economy: 5 Hearts maximum, 30-minute recharge timer, XP counter, combo multipliers.
  - Progression: active node ID, completed node IDs with earned stars (1–3), unlocked units, earned boss mastery badges.
- **Micro-Learning Engine Architecture**:
  - `/study/[nodeId]`: Story Flashcards with Instagram-story segmented progress header, 40/60 split card (visual infographic widget + concise micro-bullet points), thumb-zone navigation.
  - `/quiz/[nodeId]`: Blind Quiz engine with strict two-phase evaluation (neutral initial options, reveal on Check Answer, -1 heart on error, life depletion modal).
  - `CompletionDrawer.tsx`: Confetti celebration, accuracy-based star calculation (>=70% 1-2 stars, >=90% 3 stars), XP award, zero dead-end forward routing.
- **Syllabus & Data Pipeline**:
  - Grade 10: 9 discrete units (U01–U09).
  - Grade 11: 6 discrete units (U01–U06).
  - 100% bilingual parity (`en` and `si`) across all stems, options, explanations, and takeaways.
  - Validation pipeline: `scripts/compile-content.ts` / `npm run validate:content` enforcing 15 units, correctIndex ranges (0–3), exactly 4 options, and bilingual parity.
- **Sandboxes Architecture**:
  - G10 U03: 8-Bit Switchboard & Color Chamber (`BitSwitchboard.tsx`, `HexColorVat.tsx`)
  - G10 U04: Neon Logic Gate Breadboard (`LogicWorkbench.tsx`)
  - G10 U07: Spreadsheet Laser Grid & Reference Anchors (`LaserGridAnchors.tsx`)
  - G11 U01: Flowchart Trace Table Scrubber (`TraceTableScrubber.tsx`)
  - G11 U05: HTML Table Mason (`HtmlTableMason.tsx`)
  - 60 FPS mobile performance, >=48px touch targets, zero horizontal scroll.
- **Exam Engine Architecture**:
  - End-of-unit Boss Nodes with real past paper questions and mastery badges.
  - `/papers`: Filterable by Year (2020–2025), Paper Type (Paper I / Paper II), and Unit.
  - Dual modes: Practice Mode with official marking scheme rubrics & hints, Timed Exam Mode (60 minutes) with locked rubrics and automated scoring.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Persistent Game State & Heart Economy | 5 lives, 30-min recharge cycle, streak, XP, grade, language in persistent store | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Persistent Top HUD | Displays study streak, heart containers (with live countdown when <5), Grade switcher (10 vs 11), XP counter | M1 | ORIGINAL_REQUEST §R1 |
| 3 | Mobile Dock & Desktop Left Rail | Mobile bottom nav bar (64px, thumb-zone) and collapsible desktop left rail (>= 1024px) | M1 | ORIGINAL_REQUEST §R1 |
| 4 | 3-Step Onboarding Flow | Medium (Sinhala vs English) -> Grade (10 vs 11) -> Entry Route (Level 1 vs Topic Library) | M1 | ORIGINAL_REQUEST §R1 |
| 5 | Winding Quest Map & Node States | Alternating zig-zag nodes, states (Gold Cleared 1-3 stars, Neon Active, Slate Locked, Crown Boss), Level Details Drawer | M1 | ORIGINAL_REQUEST §R1 |
| 6 | Story Flashcard Engine | `/study/[nodeId]`: Instagram-story segmented header, 40/60 split card (infographic widget + micro-bullets), thumb-zone controls | M2 | ORIGINAL_REQUEST §R2 |
| 7 | Blind Quiz Engine | `/quiz/[nodeId]`: Neutral initial options, reveal only on `Check Answer`, -1 heart & shake on error, life depletion lockout modal | M2 | ORIGINAL_REQUEST §R2 |
| 8 | Level Completion Drawer | `CompletionDrawer.tsx`: Confetti fanfare, star calculation (>=70% 1-2 stars, >=90% 3 stars), XP award, forward routing | M2 | ORIGINAL_REQUEST §R2 |
| 9 | Syllabus 15-Unit Restructuring | G10 discrete Units 1–9 and G11 discrete Units 1–6 adhering to NIE curriculum | M3 | ORIGINAL_REQUEST §R3 |
| 10 | Content Schemas & Data Model | `LevelNode`, `TheoryCard`, and `QuizQuestion` schemas with strict TypeScript types | M3 | ORIGINAL_REQUEST §R3 |
| 11 | Bilingual Parity Pipeline | 100% parity across `en` and `si` for all prompts, options, explanations, and takeaways | M3 | ORIGINAL_REQUEST §R3 |
| 12 | Content Validation Script | `scripts/compile-content.ts` / `npm run validate:content` enforcing schema integrity, correctIndex ranges, 15 units | M3 | ORIGINAL_REQUEST §R3 |
| 13 | Sandbox 1: Switchboard & Color Chamber | 8-Bit lever toggles computing binary/decimal + RGB sliders to Hex with goal triggers | M4 | ORIGINAL_REQUEST §R4 |
| 14 | Sandbox 2: Neon Logic Breadboard | Series/parallel, gate splicer, universal chips, 14-pin IC pinout, combinational circuit tracing | M4 | ORIGINAL_REQUEST §R4 |
| 15 | Sandbox 3: Spreadsheet Laser Grid | Relative vs absolute $A$1 visual ray/grid, F4 cycling, drag-fill calculation collapse alert | M4 | ORIGINAL_REQUEST §R4 |
| 16 | Sandbox 4: Flowchart Trace Table | Algorithmic stepping, Count & Sum registers, Pre-test vs Post-test comparison | M4 | ORIGINAL_REQUEST §R4 |
| 17 | Sandbox 5: HTML Table Mason | Interactive colspan/rowspan cell merger, synchronized code preview, dimension deduction | M4 | ORIGINAL_REQUEST §R4 |
| 18 | Sandbox Ergonomics & 60 FPS | >=48px touch targets, zero horizontal scroll (360px–412px), 60 FPS hardware acceleration | M4 | ORIGINAL_REQUEST §R4 |
| 19 | Unit Boss Nodes & Badges | Boss nodes with real past paper questions, HP combat bars, combos, and mastery badges | M5 | ORIGINAL_REQUEST §R5 |
| 20 | Dedicated Past Paper Arena (`/papers`) | Standalone page filterable by Year (2020–2025), Paper Type (Paper I / Paper II), and Unit | M5 | ORIGINAL_REQUEST §R5 |
| 21 | Practice Mode with Marking Schemes | Instant option evaluation, verbatim official marking scheme rubrics & hints in EN and SI | M5 | ORIGINAL_REQUEST §R5 |
| 22 | Timed Exam Mode (60 Minutes) | 60-min countdown timer, strict answer secrecy during test, automated scoring, post-test review | M5 | ORIGINAL_REQUEST §R5 |
| 23 | E2E Testing Suite (Tiers 1–4) | Automated opaque-box test runner validating all features across all tiers with zero failures | M-E2E | ORIGINAL_REQUEST §Acceptance |
| 24 | Final Pass & Adversarial Hardening (Tier 5) | 100% E2E test pass, white-box adversarial edge-case stress testing, and forensic audit | M-Final | ORIGINAL_REQUEST §Acceptance |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Shell, Persistent State & Navigation Engine | R1: Persistent store with hearts/timer, HUD, mobile bottom bar, desktop left rail, 3-step onboarding, quest map + level drawer | none | PLANNED |
| M2 | Core Micro-Learning Loop Engines | R2: Dedicated `/study/[nodeId]` story flashcards, `/quiz/[nodeId]` blind quiz with -1 heart & lockout, `CompletionDrawer.tsx` | M1 | PLANNED |
| M3 | Bilingual Content Transformation & Validation Pipeline | R3: Schemas (`LevelNode`, `TheoryCard`, `QuizQuestion`), G10 Units 1–9, G11 Units 1–6, bilingual parity, `npm run validate:content` | M1, M2 | PLANNED |
| M4 | Interactive Visual Sandboxes & Minigames | R4: 5 Sandboxes integration, goal-state event triggers, 60 FPS mobile performance, >=48px hit targets, 0 horizontal scroll | M1, M2, M3 | PLANNED |
| M5 | Exam Engine & 2020–2025 Past Paper Boss Arena | R5: Boss Nodes with badges, `/papers` route, Practice Mode with marking rubrics, 60-min Timed Exam Mode with answer secrecy | M1, M2, M3 | PLANNED |
| M-E2E | E2E Testing Suite Creation | Opaque-box test harness covering Tiers 1–4 (Feature Coverage, Boundaries, Pairwise Combinations, Real-World Workloads) -> `TEST_READY.md` | M1 | PLANNED |
| M-Final | E2E Full Pass, Adversarial Hardening & Forensic Audit | Pass 100% E2E tests, Tier 5 adversarial stress testing, Forensic Audit verification, clean build & validation | M1, M2, M3, M4, M5, M-E2E | PLANNED |

## Interface Contracts

### Persistent State Contract (`src/lib/store.ts` or `src/context/ProgressContext.tsx`)
```typescript
export interface AppState {
  grade: '10' | '11';
  language: 'en' | 'si';
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null; // timestamp ms for 30-min recharge cycle
  nextHeartRechargeInSeconds: number; // calculated countdown
  streak: number;
  lastStudyDate: string; // YYYY-MM-DD
  xp: number;
  completedNodes: Record<string, { stars: number; highAccuracy: number; completedAt: string }>;
  activeNodeId: string;
  unlockedUnits: string[];
  badges: string[]; // earned boss mastery badges
  
  // Actions
  setGrade: (grade: '10' | '11') => void;
  setLanguage: (lang: 'en' | 'si') => void;
  deductHeart: () => boolean; // returns false if 0
  restoreHearts: () => void;
  addXp: (amount: number) => void;
  completeNode: (nodeId: string, accuracy: number) => { stars: number; xpAwarded: number };
  unlockBadge: (badgeId: string) => void;
}
```

### Content Schemas Contract (`src/types/curriculum.ts`)
```typescript
export interface BilingualText {
  en: string;
  si: string;
}

export interface TheoryCard {
  id: string;
  title: BilingualText;
  visualWidget?: 'binary_weight' | 'hex_vat' | 'logic_gate' | 'laser_grid' | 'trace_table' | 'table_mason' | 'cpu_bus' | 'network_topo' | 'security_cipher';
  bulletPoints: BilingualText[];
  keyTakeaway: BilingualText;
}

export interface QuizQuestion {
  id: string;
  prompt: BilingualText;
  options: BilingualText[]; // exactly 4 options
  correctIndex: number; // 0 to 3
  explanation: BilingualText;
  syllabusRef?: string;
}

export interface LevelNode {
  id: string; // e.g. "g10-u03-n01"
  unitId: string; // "g10-u03"
  unitTitle: BilingualText;
  title: BilingualText;
  type: 'concept' | 'interactive_lab' | 'boss_arena';
  theoryCards: TheoryCard[];
  quizQuestions: QuizQuestion[];
  sandboxType?: 'switchboard' | 'color_vat' | 'logic_workbench' | 'laser_grid' | 'trace_table' | 'table_mason';
  orderIndex: number;
}
```

## Code Layout
- `src/app/`: Next.js App Router
  - `page.tsx`: Main Quest Map view with HUD & Onboarding
  - `layout.tsx`: Root Layout with metadata, responsive shell, font imports
  - `study/[nodeId]/page.tsx`: Story Flashcard Engine
  - `quiz/[nodeId]/page.tsx`: Blind Quiz Engine
  - `papers/page.tsx`: Past Paper Boss Arena (2020–2025)
- `src/components/`:
  - `hud/`: Top HUD (`TopHud.tsx`, `HeartMeter.tsx`, `GradeSwitcher.tsx`)
  - `navigation/`: Bottom Nav Dock (`MobileBottomNav.tsx`), Desktop Left Rail (`DesktopSidebar.tsx`)
  - `map/`: Winding Quest Map (`QuestMap.tsx`, `LevelNodeButton.tsx`, `LevelDrawer.tsx`)
  - `onboarding/`: 3-step onboarding flow (`OnboardingModal.tsx`)
  - `study/`: Story Flashcard Engine (`StoryFlashcardRunner.tsx`)
  - `quiz/`: Blind Quiz Engine (`BlindQuizRunner.tsx`, `HeartDepletionModal.tsx`)
  - `completion/`: Level Completion Drawer (`CompletionDrawer.tsx`)
  - `sandboxes/`: 5 Interactive Engineering Sandboxes
  - `papers/`: Past Paper Arena (`PastPaperEngine.tsx`, `TimedExamRunner.tsx`, `PracticeExamRunner.tsx`)
- `src/lib/`: Store and shared utilities (`store.ts`, `sound.ts`, `confetti.ts`)
- `src/types/`: TypeScript definitions (`curriculum.ts`, `papers.ts`, `store.ts`)
- `src/data/`: Curriculum and past paper datasets (`curriculumData.ts`, `pastPapersData.ts`)
- `scripts/`:
  - `compile-content.ts` / `validate-content.ts`: Curriculum validation pipeline
  - `verify-content.mjs`: Content verification script
  - `test-e2e.ts`: Opaque-box E2E test runner
