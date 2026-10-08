# BRIEFING — 2026-10-07T22:05:00Z

## Mission
Formulate concrete implementation strategy for 3-Step Onboarding and Winding Quest Map with visual node states and LevelDrawer.

## 🔒 My Identity
- Archetype: explorer
- Roles: investigation, synthesis
- Working directory: c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3
- Original parent: bb6ed492-0834-4277-9fef-0d2bd7fec816
- Milestone: M1 (R1)

## 🔒 Key Constraints
- Read-only investigation — do NOT implement or modify source files in src/
- Investigate existing `src/components/QuestRoadmap.tsx` and `src/components/GuidedFlowModal.tsx`
- Detail 3-step onboarding flow (Medium -> Grade -> Entry Route)
- Detail Winding SVG/flex quest map with zig-zag nodes and 4 node states (Gold Cleared 1-3 stars, Neon Pulsing Active, Slate Locked, Crown Unit Boss)
- Detail Level Details/Preview Drawer (`LevelDrawer.tsx`)
- Write reports to `.agents/teamwork_preview_explorer_m1_3/report.md` and `handoff.md`

## Current Parent
- Conversation ID: bb6ed492-0834-4277-9fef-0d2bd7fec816
- Updated: 2026-10-07T21:48:39Z

## Investigation State
- **Explored paths**:
  - `src/components/QuestRoadmap.tsx` (Current card-based linear layout with vertical line)
  - `src/components/GuidedFlowModal.tsx` (Current 4-step modal with subtopic selector)
  - `src/app/page.tsx` (Homepage mounting both components)
  - `src/components/Header.tsx`, `MobileBottomDock.tsx`, `TheoryBriefingCard.tsx`, `PartCompletionModal.tsx`
  - `src/data/curriculum.ts`, `src/data/allLessonsData.ts`, `src/data/lesson01Data.ts`
  - `src/utils/soundEffects.ts`
- **Key findings**:
  - Current `GuidedFlowModal.tsx` has 4 steps and ends in a complicated unit dropdown; needs replacement with zero-friction 3-step flow (Medium -> Grade -> Entry Route).
  - Current `QuestRoadmap.tsx` uses 360px wide cards with vertical line and immediate navigation; needs transformation into Duolingo/Candy Crush style winding circular/squircle nodes connected via cubic Bézier SVG spline, with 4 distinct visual states.
  - `LevelDrawer.tsx` is completely missing: currently tapping a node navigates immediately rather than previewing topics and stars in a slide-up drawer.
- **Unexplored areas**: None. Problem boundary fully examined.

## Key Decisions Made
- Architecture: Modularize into `src/components/onboarding/OnboardingModal.tsx` and `src/components/map/` (`QuestMap.tsx`, `LevelNodeButton.tsx`, `LevelDrawer.tsx`). Keep `QuestRoadmap.tsx` as backward-compatible wrapper re-export.
- SVG Path: Use cubic Bézier interpolation (`C cp1x cp1y, cp2x cp2y, x2 y2`) over fixed viewBox coordinate system (`viewBox="0 0 400 totalH"`), with dual paths (slate base track + emerald/cyan active track).
- Visual States: Fully specify CSS/Tailwind tokens for Gold Cleared, Neon Pulsing Active, Slate Locked, and Crown Boss.
- LevelDrawer: Implement bottom slide-up sheet (`max-h-[85vh]` mobile, centered modal desktop) displaying unit badge, stars earned, theory card preview chips, and thumb-zone >=48px CTA.

## Artifact Index
- `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\DISPATCH.md` — Incoming dispatch log
- `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\BRIEFING.md` — Agent briefing & memory
- `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\progress.md` — Liveness progress heartbeat
- `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\report.md` — Recommendations report
- `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_3\handoff.md` — 5-component handoff report
