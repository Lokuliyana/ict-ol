# Technical Architecture & Strategy Report: 3-Step Onboarding & Winding Quest Map

**Subagent**: M1 Explorer 3 (Onboarding & Quest Map)  
**Milestone**: Milestone 1 (R1)  
**Target Components**:
1. Zero-Friction 3-Step Onboarding Flow (`src/components/onboarding/OnboardingModal.tsx`)
2. Winding SVG/Flex Quest Map (`src/components/map/QuestMap.tsx`, `LevelNodeButton.tsx`)
3. Level Details & Preview Drawer (`src/components/map/LevelDrawer.tsx`)
**Project Root**: `c:\Users\MSI\ict-ol`  
**Date**: 2026-10-08  

---

## 1. Executive Summary

This report establishes the complete architectural blueprint and concrete implementation strategy for the **3-Step Onboarding Flow**, **Winding SVG/Flex Quest Map**, and **Level Details / Preview Drawer** required under Milestone 1 (R1) of the Sri Lankan G.C.E. O/L ICT web platform.

### Current Implementation Assessment
The existing codebase contains partial implementations:
- `src/components/GuidedFlowModal.tsx`: A 4-step modal with high cognitive friction. Step 4 forces the user into a nested dropdown list of units and subsections, which breaks the zero-friction onboarding requirement.
- `src/components/QuestRoadmap.tsx`: A vertical stack of wide rectangular cards (360px wide) with a static vertical connecting line. It lacks continuous SVG winding spline curvature, restricts mobile lateral zig-zagging, and immediately forces navigation to `/lesson/...` on click rather than opening a Level Details preview drawer.
- `LevelDrawer.tsx`: Entirely absent from the codebase.

### Proposed Architecture & Solutions
1. **Zero-Friction 3-Step Onboarding (`OnboardingModal.tsx`)**:
   - **Step 1: Medium** (Sinhala vs. English; optional Dual-Sync indicator).
   - **Step 2: Grade** (Grade 10 vs. Grade 11).
   - **Step 3: Entry Route** (Level 1 Start vs. Topic Library & Quest Map).
   - Friction eliminated: Completing Step 3 immediately persists state (`language`, `grade`, `onboardingCompleted: true`) and launches either the Level 1 learning loop or the full Quest Map with zero unnecessary clicks.
2. **Winding SVG/Flex Quest Map (`QuestMap.tsx`)**:
   - Replaces wide cards with **Duolingo / Candy Crush circular squircle orbs** (76px–80px touch diameter for standard levels, 96px for Unit Bosses).
   - Connects node centers using a continuous **responsive cubic Bézier SVG spline** (`M x0 y0 C cp1x cp1y, cp2x cp2y, x1 y1 ...`) rendered on an underlying SVG layer (`viewBox="0 0 400 totalHeight"`).
   - Features **4 distinct visual states**:
     - 🌟 **Gold Cleared**: Golden gradient, check glyph, 1–3 earned gold stars displayed on an arched badge below.
     - ⚡ **Neon Pulsing Active**: High-intensity cyan/indigo gradient, beacon wave pulse animation, play glyph, hovering "START HERE" badge.
     - 🔒 **Slate Locked**: Muted slate styling, padlock glyph, subtle shake feedback on touch.
     - 👑 **Crown Unit Boss**: Enlarged pedestal (96px), royal crimson/gold gradient, crown insignia, fiery pulse ring, and Past Paper Gauntlet badge.
3. **Level Details / Preview Drawer (`LevelDrawer.tsx`)**:
   - Slide-up bottom sheet (`framer-motion`) on mobile (`max-h-[85vh]`), centered sheet on desktop.
   - Displays unit badge, bilingual title, stars earned, high accuracy score, and XP rewards.
   - Presents a rich preview of the node's theory concepts and highlights interactive sandboxes (e.g. 8-Bit Switchboard, Logic Breadboard).
   - Pinned bottom thumb-zone CTAs (>= 48px hit target): Primary "Start Lesson" / "Replay Lesson" and secondary "Jump to Quiz" / "Boss Arena".

---

## 2. In-Depth Audit of Existing Components

### 2.1 Inspection of `src/components/GuidedFlowModal.tsx`

#### Current Structure
`GuidedFlowModal.tsx` is currently implemented as a 553-line component with 4 distinct steps:
- **Step 1**: Medium selection (`dual`, `si`, `en`).
- **Step 2**: Grade selection (`10` vs. `11`).
- **Step 3**: Binary branch ("Start from the Beginning" vs. "Choose a Specific Lesson").
- **Step 4**: Unit selection scroll list (max-h-40) plus three secondary part buttons ("Start from Part 01", "Read Theory Notes First", "Jump to Past Papers").

#### Gaps Against Requirements
1. **Step Count Violation**: `ORIGINAL_REQUEST.md` §R1 explicitly mandates:
   > "Zero-friction 3-step onboarding flow (Medium: Sinhala vs. English -> Grade: 10 vs 11 -> Entry Route: Level 1 vs. Topic Library)."
   The current implementation has 4 steps, forcing the user through redundant decision layers.
2. **High Friction in Step 4**: The unit dropdown list in Step 4 requires scrolling, reading individual unit titles, and choosing among 3 sub-modes before entering the app. New users abandon setups with nested pickers.
3. **Medium Choices**: The spec specifies "Sinhala vs. English" as the primary dichotomy. The existing modal presents "Dual-Sync" as option 1, which confuses single-medium students.
4. **Action Outcome**: In the current modal, choosing "Start from Beginning" triggers `router.push('/lesson/10/g10-u1?flow=beginning')` into the legacy monolithic document runner rather than setting the active node and launching the micro-learning flashcard engine or opening the quest map.

### 2.2 Inspection of `src/components/QuestRoadmap.tsx`

#### Current Structure
`QuestRoadmap.tsx` is a 542-line component containing hardcoded quest lists (`GRADE_10_QUESTS` with 15 nodes, `GRADE_11_QUESTS` with 10 nodes).
Nodes are rendered inside a vertical column:
```tsx
const offsets = ['translate-x-0', 'sm:translate-x-12', 'translate-x-0', 'sm:-translate-x-12'];
const offsetClass = offsets[index % offsets.length];
```
Each node is a wide card:
```tsx
<Link href={`/lesson/${grade}/${quest.lessonId}?station=${quest.stationId}`}
  style={{ minWidth: '280px', maxWidth: '360px' }}>
  {/* Icon Orb */}
  {/* Quest Details (Title EN, Title SI, Stars, XP) */}
  {/* Right Chevron */}
</Link>
```
The connector between nodes is a 10px vertical bar:
```tsx
<div className="w-2.5 h-12 bg-slate-200 dark:bg-slate-800 rounded-full my-1 relative overflow-hidden" />
```

#### Gaps Against Requirements
1. **Not a Winding Map**:
   - Because each card is 280px–360px wide, on mobile devices (360px–412px wide viewport) the cards cannot meaningfully zig-zag horizontally. Applying `translate-x-12` (48px) to a 360px card inside a 360px screen causes horizontal overflow or requires `overflow-hidden` which clips content.
   - The connector is purely a straight vertical stick, not a winding SVG path.
2. **Missing Node States**:
   - The current nodes have basic colors (emerald for completed, blue for current, gray for locked), but lack the specified visual treatment:
     - No **Gold Cleared** treatment with distinct 1-3 earned star rating badges.
     - No **Neon Pulsing Active** beacon with glowing rings and "START HERE" indicator.
     - Boss nodes display swords instead of the specified **Crown Unit Boss** insignia.
3. **No Level Details / Preview Drawer**:
   - Tapping any node immediately triggers `<Link href="...">`, navigating the browser away to the lesson runner.
   - There is no preview of the unit badge, stars earned, theory card overview, or structured CTA options.

---

## 3. Architecture & Design Specification

### 3.1 3-Step Zero-Friction Onboarding Flow (`OnboardingModal.tsx`)

#### Flow Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                    Onboarding Modal (3 Steps)               │
├─────────────────────────────────────────────────────────────┤
│ Step 1: Medium      │ Step 2: Grade        │ Step 3: Route  │
│ ┌─────────────────┐ │ ┌──────────────────┐ │ ┌────────────┐ │
│ │ සිංහල මාධ්‍යය   │ │ │ Grade 10         │ │ │ Level 1    │ │
│ │ (Sinhala)       │ │ │ (10 ශ්‍රේණිය)     │ │ │ Start      │ │
│ ├─────────────────┤ │ ├──────────────────┤ │ ├────────────┤ │
│ │ English Medium  │ │ │ Grade 11         │ │ │ Topic      │ │
│ │ (National Syll) │ │ │ (11 ශ්‍රේණිය)     │ │ │ Library    │ │
│ └─────────────────┘ │ └──────────────────┘ │ └────────────┘ │
└─────────────────────┴──────────────────────┴────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
     [Level 1 Start]                       [Topic Library]
  - Set activeNodeId                    - Stay on Quest Map
  - Launch /study/[nodeId]              - Open full unit view
  - Close Modal                         - Close Modal
```

#### Step-by-Step UX Specification

1. **Step 1: Medium (Sinhala vs. English)**
   - **Header**: "Choose Your Medium / භාෂා මාධ්‍යය තෝරන්න"
   - **Subtext**: "You can change this anytime from the top navigation bar."
   - **Card A — Sinhala Medium (`si`)**:
     - Badge: `සිං` in emerald badge.
     - Title: `සිංහල මාධ්‍යය (Sinhala Medium)`
     - Subtitle: `ජාතික විෂය නිර්දේශයේ සියලුම සටහන් සහ විභාග ගැටලු`
     - Selection state: Emerald clay border, glowing check indicator.
   - **Card B — English Medium (`en`)**:
     - Badge: `EN` in indigo badge.
     - Title: `English Medium`
     - Subtitle: `Complete National Syllabus short notes & exam papers`
     - Selection state: Indigo clay border, glowing check indicator.
   - **Dual-Sync Toggle/Chip** (Subtle Secondary Pill):
     - An optional toggle at the bottom: `"Enable Dual-Sync side-by-side mode (දෙබසම එකවර)"` for students wanting simultaneous English and Sinhala reference.

2. **Step 2: Grade (Grade 10 vs. Grade 11)**
   - **Header**: "Select Your Grade / ශ්‍රේණිය තෝරන්න"
   - **Subtext**: "Curriculum and quest path will adapt to your grade."
   - **Card A — Grade 10**:
     - Giant Number Badge: `10`
     - Title: `Grade 10 (10 ශ්‍රේණිය)`
     - Unit Count: `9 Discrete Units`
     - Topics: `Hardware, OS, Logic Gates, Spreadsheets, DBMS`
   - **Card B — Grade 11**:
     - Giant Number Badge: `11`
     - Title: `Grade 11 (11 ශ්‍රේණිය)`
     - Unit Count: `6 Discrete Units`
     - Topics: `Algorithms, Programming, SDLC, Web Design, Multimedia`

3. **Step 3: Entry Route (Level 1 Start vs. Topic Library)**
   - **Header**: "How Would You Like to Start? / ආරම්භක මාර්ගය"
   - **Subtext**: "Choose your preferred learning pace."
   - **Route A — "Start at Level 1" (Primary Hero Card)**:
     - Icon: `Rocket` with glowing gradient.
     - Badge: `Recommended / නිර්දේශිතයි`
     - Title: `Start at Level 1 (පළමු මට්ටමෙන් අරඹන්න)`
     - Description: `Begin the gamified Duolingo quest path from the very beginning (Unit 01 ➔ Level 01).`
     - On Click: Sets `onboardingCompleted: true`, routes to `/study/${firstNodeId}` or opens Level 1 drawer.
   - **Route B — "Topic Library & Quest Map"**:
     - Icon: `Map` / `Compass`
     - Title: `Explore Topic Library & Map (සම්පූර්ණ විෂය මාලාව)`
     - Description: `Browse the entire quest map, choose specific units, past paper boss arenas, or interactive sandboxes.`
     - On Click: Sets `onboardingCompleted: true`, closes modal, leaves user on the interactive Quest Map.

#### State Sync & Trigger Logic
```typescript
interface OnboardingSubmitPayload {
  medium: 'en' | 'si' | 'dual';
  grade: '10' | '11';
  entryRoute: 'level_1' | 'topic_library';
}
```
- Saved directly into persistent store (`ProgressContext` or `useGameStore`).
- Modal auto-triggers on first visit when `!state.onboardingCompleted`.
- Can be manually reopened at any time via the "Switch Flow" button in `TopHud` or `MobileBottomNav`.

---

### 3.2 Winding SVG / Flex Quest Map (`QuestMap.tsx`)

#### Geometry & Spline Mathematics
To render an authentic winding road that never overflows on small mobile viewports (360px–412px):
1. **Node Coordinate System**:
   We position nodes within a standard virtual viewBox of width $W = 400$ units and variable height $H = N \times 120 + 60$ units:
   - Node vertical spacing: $\Delta Y = 120\text{px}$.
   - Vertical center of node $i$: $Y_i = 60 + i \times 120$.
   - Horizontal center of node $i$: Oscillates horizontally across 4 discrete alternating channels:
     - Standard cycle: $X_{\text{pct}} \in [50\%, 24\%, 50\%, 76\%]$
     - Node 0: $X_0 = 200\text{px}$ (Center - 50%)
     - Node 1: $X_1 = 96\text{px}$ (Left - 24%)
     - Node 2: $X_2 = 200\text{px}$ (Center - 50%)
     - Node 3: $X_3 = 304\text{px}$ (Right - 76%)
     - Node 4: $X_4 = 200\text{px}$ (Center - 50%)
     - *Boss Node Exception*: Unit Boss nodes are always locked to the center channel ($X_{\text{boss}} = 200\text{px}$, 50%) to represent a major milestone gateway.

2. **Cubic Bézier S-Curve Formula**:
   Between node $i$ at $(X_i, Y_i)$ and node $i+1$ at $(X_{i+1}, Y_{i+1})$:
   $$\text{Curve Segment} = \text{M } X_i\ Y_i\ \text{C } X_i\ (Y_i + 60),\ X_{i+1}\ (Y_{i+1} - 60),\ X_{i+1}\ Y_{i+1}$$
   - Control Point 1: $(X_i, Y_i + 60)$ extends vertically downward from the source node center.
   - Control Point 2: $(X_{i+1}, Y_{i+1} - 60)$ enters vertically downward into the target node center.
   - This mathematical constraint ensures $C^1$ continuity (tangent continuity) at every node vertex: the curve flows with zero sharp elbows or unnatural kinks.

3. **SVG Layer Structure**:
   ```tsx
   <svg
     className="absolute inset-0 w-full h-full pointer-events-none"
     viewBox={`0 0 400 ${totalHeight}`}
     preserveAspectRatio="xMidYMin meet"
   >
     <defs>
       {/* Glowing gradient for completed journey */}
       <linearGradient id="quest-path-active" x1="0%" y1="0%" x2="0%" y2="100%">
         <stop offset="0%" stopColor="#10b981" />
         <stop offset="50%" stopColor="#06b6d4" />
         <stop offset="100%" stopColor="#6366f1" />
       </linearGradient>
       <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
         <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.5" />
       </filter>
     </defs>

     {/* 1. Underlying Slate Track (Base Rail) */}
     <path
       d={fullPathD}
       fill="none"
       stroke="currentColor"
       className="text-slate-200 dark:text-slate-800"
       strokeWidth="14"
       strokeLinecap="round"
       strokeLinejoin="round"
     />

     {/* 2. Dotted Inner Guide Track */}
     <path
       d={fullPathD}
       fill="none"
       stroke="currentColor"
       className="text-slate-300 dark:text-slate-700"
       strokeWidth="3"
       strokeDasharray="6 8"
       strokeLinecap="round"
     />

     {/* 3. Completed Progress Line */}
     {activeSegmentD && (
       <path
         d={activeSegmentD}
         fill="none"
         stroke="url(#quest-path-active)"
         strokeWidth="14"
         strokeLinecap="round"
         filter="url(#neon-glow)"
       />
     )}
   </svg>
   ```

---

### 3.3 The 4 Distinct Visual Node States

Each node button is an interactive touch component (`LevelNodeButton.tsx`) placed at the exact coordinate $(X_i, Y_i)$ matching the SVG spline.

| Visual State | Color Palette & Borders | Center Icon & Glyph | Badges & Extras | Touch & Click Behavior |
|---|---|---|---|---|
| **🌟 Gold Cleared** | `bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600`<br>`border-b-4 border-amber-700`<br>`shadow-lg shadow-amber-500/30`<br>`text-slate-950` | `Check` or `CheckCircle2`<br>(White or dark contrast stroke) | **Arched 3-Star Pedestal** pinned below node:<br>1–3 gold stars based on stored score (`state.completedNodes[nodeId].stars`). | Slides up `LevelDrawer` with "Cleared (3/3 Stars)", accuracy score, and "Replay Lesson" / "Review Quiz" CTAs. |
| **⚡ Neon Pulsing Active** | `bg-gradient-to-b from-cyan-400 via-indigo-600 to-indigo-700`<br>`border-b-4 border-indigo-950`<br>`shadow-xl shadow-cyan-500/40`<br>`ring-4 ring-cyan-400/60 ring-offset-2 ring-offset-canvas` | `Play` icon (`fill-white ml-1 w-8 h-8`) | 1. **Pulsing Halo**: `framer-motion` radiating wave (`scale: [1, 1.25, 1], opacity: [0.7, 0, 0.7]`).<br>2. **Hovering Pill**: "START HERE / මෙතනින්" animated bouncing badge above node. | Slides up `LevelDrawer` with vibrant "Start Lesson" CTA. |
| **🔒 Slate Locked** | `bg-slate-200 dark:bg-slate-800/90`<br>`border-b-4 border-slate-300 dark:border-slate-900`<br>`text-slate-400 dark:text-slate-600`<br>`shadow-inner` | `Lock` icon (`w-7 h-7 text-slate-400 dark:text-slate-500`) | Lock icon with no stars or glow. | Non-navigable. Triggers subtle shake animation (`x: [-4, 4, -4, 4, 0]`) and displays toast: "Complete Level X to unlock". |
| **👑 Crown Unit Boss** | `w-24 h-24 rounded-3xl`<br>`bg-gradient-to-b from-rose-500 via-amber-500 to-red-600`<br>`border-b-4 border-red-950`<br>`shadow-2xl shadow-rose-500/40`<br>`ring-4 ring-amber-400/50` | `Crown` icon (`fill-amber-300 text-amber-300 drop-shadow w-10 h-10`) | 1. Floating "UNIT BOSS / විභාග සටන" banner.<br>2. Fiery pulse aura.<br>3. Past Paper badge (2020–2025). | Slides up `LevelDrawer` featuring the Boss Arena preview and past examination challenges. |

#### Ergonomics & Sizing Matrix
- **Standard Nodes**: 76px diameter (`w-19 h-19` or `w-20 h-20` on mobile), comfortably exceeding the 48px thumb hit-target requirement.
- **Boss Nodes**: 96px diameter (`w-24 h-24`), prominently centered with enhanced clearance.
- **Label Placement**: Compact floating badge or subtitle directly beneath the node (English title + Sinhala title + XP reward badge).

---

### 3.4 Level Details / Preview Drawer (`LevelDrawer.tsx`)

#### UX Architecture & Responsiveness
When any unlocked node (Cleared, Active, or Unlocked Boss) is tapped, `LevelDrawer` slides up smoothly:
- **Mobile Viewport (360px–412px)**: Slide-up sheet pinned to bottom of viewport (`bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t-2 border-indigo-500/40`).
- **Desktop Viewport (>= 1024px)**: Centered modal card (`sm:max-w-lg sm:mx-auto sm:rounded-3xl sm:border-2 sm:bottom-6 sm:inset-x-auto`).
- **Touch Gesture Affordance**: Top center drag handle pill (`w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto my-3`).

#### Content Structure & Sections

```
┌────────────────────────────────────────────────────────┐
│ [====] Drag Handle                                    │
│ ┌───────────────────────────────┐  [X] Close Button   │
│ │ Unit 01 • Basic ICT Concepts  │                     │
│ └───────────────────────────────┘                     │
│ Level 01: Factory Conveyor (Data vs Information)      │
│ දත්ත හා තොරතුරු පද්ධති                                │
├────────────────────────────────────────────────────────┤
│ [ ★ ★ ★ ] 3 Stars Earned • 94% High Score • +75 XP    │
├────────────────────────────────────────────────────────┤
│ What You'll Learn:                                    │
│ • Data vs Information differences with real examples   │
│ • Attributes of Quality Information                    │
│ • Information System IPO components                    │
│                                                        │
│ [🛠️ Includes 8-Bit Switchboard Sandbox]                │
├────────────────────────────────────────────────────────┤
│ Pinned Bottom Thumb-Zone Actions (>= 48px):           │
│ ┌────────────────────────────────────────────────────┐ │
│ │  🚀 START LESSON / පාඩම අරඹන්න (56px)             │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │  ⚡ Jump to Blind Quiz (Review Mode)               │ │
│ └────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

1. **Header Zone**:
   - Unit Badge: e.g. `Unit 01 • Data & Information` with color-coded unit pill.
   - Node Order Pill: `Quest 01` or `Unit Boss Gauntlet`.
   - Close Button: Circular `X` icon with 48px hit area.
2. **Title & Bilingual Metadata**:
   - Large bold English title: `Factory Conveyor (Data vs Info)`.
   - Sinhala title: `දත්ත හා තොරතුරු පද්ධති`.
3. **Mastery & Economy Indicators**:
   - Star container: 3 gold stars (filled if earned, outline if unattempted).
   - High accuracy score indicator (e.g. `95% High Score`).
   - XP Reward: `+75 XP` (or `+150 XP` for Boss Nodes).
4. **Theory Cards / Key Topics Preview**:
   - Preview of 2–3 core theory cards contained within the node.
   - Interactive Sandbox pill if the node mounts one of the 5 specialized sandboxes:
     - G10 U03: `8-Bit Switchboard & Color Chamber`
     - G10 U04: `Neon Logic Gate Breadboard`
     - G10 U07: `Spreadsheet Laser Grid & Reference Anchors`
     - G11 U01: `Flowchart Trace Table Scrubber`
     - G11 U05: `HTML Table Mason`
5. **Bottom 25% Thumb-Zone Actions**:
   - **Primary Action (Height: 56px)**:
     - Unattempted / Active: `"Start Lesson / පාඩම අරඹන්න"` ➔ routes to `/study/[nodeId]`.
     - Cleared: `"Replay Lesson / නැවත පුහුණු වන්න"`.
     - Boss: `"Challenge Unit Boss / විභාග සටනට පිවිසෙන්න"` ➔ routes to `/papers` or boss runner.
   - **Secondary Action (Height: 48px)**:
     - If cleared: `"Take Blind Quiz"` (`/quiz/[nodeId]`).
     - Back to Map / Dismiss.

---

## 4. Concrete Component Implementation Specs

### 4.1 Onboarding Modal (`src/components/onboarding/OnboardingModal.tsx`)

```tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Languages, 
  GraduationCap, 
  Rocket, 
  Map, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  X 
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { sound } from '@/utils/soundEffects';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const router = useRouter();
  const { state, setLanguageMode, setUserGrade, setOnboardingCompleted } = useProgress();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedMedium, setSelectedMedium] = useState<'si' | 'en' | 'dual'>(state.languageMode || 'si');
  const [selectedGrade, setSelectedGrade] = useState<'10' | '11'>(state.userGrade || '10');

  if (!isOpen) return null;

  const handleMediumSelect = (medium: 'si' | 'en') => {
    sound.playClick(700);
    setSelectedMedium(medium);
    setLanguageMode(medium);
  };

  const handleGradeSelect = (grade: '10' | '11') => {
    sound.playClick(750);
    setSelectedGrade(grade);
    setUserGrade(grade);
  };

  const handleFinishLevel1 = () => {
    sound.playSuccessDing();
    setOnboardingCompleted(true);
    onClose();
    const firstLesson = selectedGrade === '10' ? 'g10-u1' : 'g11-u1';
    router.push(`/lesson/${selectedGrade}/${firstLesson}?station=station1`);
  };

  const handleFinishTopicLibrary = () => {
    sound.playSuccessDing();
    setOnboardingCompleted(true);
    onClose();
    // Closes modal to reveal the Quest Map / Curriculum Grid
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="w-full max-w-lg bg-white dark:bg-slate-900 border-t-2 sm:border-2 border-indigo-500/40 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                Quick Setup • පියවරෙන් පියවර සැකසුම
              </h3>
              <p className="text-[11px] text-indigo-100 font-sinhala">
                Step {step} of 3: {step === 1 ? 'Medium' : step === 2 ? 'Grade' : 'Entry Route'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded-full">
              {step} / 3
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-indigo-900/30 h-1.5">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          <AnimatePresence mode="wait">

            {/* STEP 1: Medium (Sinhala vs English) */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono">
                    <Languages className="w-4 h-4" />
                    <span>Step 1: Choose Medium</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Select Your Language Medium
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබ ඉගෙනීමට කැමති භාෂා මාධ්‍යය තෝරන්න
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-1">
                  {/* Sinhala Medium */}
                  <button
                    onClick={() => handleMediumSelect('si')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between min-h-[56px] ${
                      selectedMedium === 'si'
                        ? 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/50 shadow-md ring-2 ring-emerald-600/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        සිං
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white font-sinhala">
                          සිංහල මාධ්‍යය (Sinhala Medium)
                        </div>
                        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-sinhala mt-0.5">
                          නිල විෂය නිර්දේශයේ සිංහල සටහන් සහ විභාග ගැටලු
                        </div>
                      </div>
                    </div>
                    {selectedMedium === 'si' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                    )}
                  </button>

                  {/* English Medium */}
                  <button
                    onClick={() => handleMediumSelect('en')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between min-h-[56px] ${
                      selectedMedium === 'en'
                        ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 shadow-md ring-2 ring-blue-600/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        EN
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                          English Medium
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                          National syllabus English short notes & past papers
                        </div>
                      </div>
                    </div>
                    {selectedMedium === 'en' && (
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 ml-2" />
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Grade Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono">
                    <GraduationCap className="w-4 h-4" />
                    <span>Step 2: Choose Grade</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Select Your Curriculum Grade
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබට අධ්‍යයනය කිරීමට අවශ්‍ය ශ්‍රේණිය තෝරන්න
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {/* Grade 10 */}
                  <button
                    onClick={() => handleGradeSelect('10')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between min-h-[130px] ${
                      selectedGrade === '10'
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-lg ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base mb-2">
                        10
                      </div>
                      <div className="font-extrabold text-base text-slate-900 dark:text-white">
                        Grade 10
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala font-medium">
                        10 ශ්‍රේණිය (Units 01–09)
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      Hardware, OS, Logic, Spreadsheets, DBMS
                    </div>
                  </button>

                  {/* Grade 11 */}
                  <button
                    onClick={() => handleGradeSelect('11')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between min-h-[130px] ${
                      selectedGrade === '11'
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-lg ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-base mb-2">
                        11
                      </div>
                      <div className="font-extrabold text-base text-slate-900 dark:text-white">
                        Grade 11
                      </div>
                      <div className="text-xs text-purple-600 dark:text-purple-400 font-sinhala font-medium">
                        11 ශ්‍රේණිය (Units 01–06)
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      Algorithms, Programming, Web, Networking
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Entry Route (Level 1 Start vs Topic Library) */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono">
                    <Rocket className="w-4 h-4" />
                    <span>Step 3: Entry Route</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Choose Your Starting Path
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබ ආරම්භ කිරීමට කැමති ආකාරය තෝරන්න
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-1">
                  {/* Route 1: Start at Level 1 */}
                  <button
                    onClick={handleFinishLevel1}
                    className="p-4 rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-r from-indigo-500/15 via-sky-500/10 to-indigo-500/15 hover:border-indigo-600 hover:from-indigo-500/25 text-left transition-all flex items-center justify-between group shadow-md min-h-[56px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                            Start at Level 1
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black">
                            Recommended
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Follow the step-by-step quest path (Unit 01 ➔ Level 01)
                        </div>
                        <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-sinhala mt-0.5">
                          පළමු මට්ටමේ සිට ක්‍රීඩාමය අභියෝග ආරම්භ කරන්න
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </button>

                  {/* Route 2: Topic Library & Quest Map */}
                  <button
                    onClick={handleFinishTopicLibrary}
                    className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-400 text-left transition-all flex items-center justify-between group min-h-[56px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                        <Map className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                          Explore Topic Library & Map
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Browse all units, past paper boss arenas & sandboxes
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sinhala mt-0.5">
                          සම්පූර්ණ විෂය මාලාව සහ විභාග සටන් නිදහසේ ගවේෂණය කරන්න
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => {
                sound.playClick(600);
                setStep(s => (s - 1) as 1 | 2);
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Skip Setup
            </button>
          )}

          {step < 3 && (
            <button
              onClick={() => {
                sound.playClick(750);
                setStep(s => (s + 1) as 2 | 3);
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
```

---

### 4.2 Winding Quest Map (`src/components/map/QuestMap.tsx`)

```tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { LevelNodeButton } from './LevelNodeButton';
import { LevelDrawer } from './LevelDrawer';
import { sound } from '@/utils/soundEffects';

export interface QuestNode {
  id: string;
  lessonId: string;
  stationId: string;
  unitNumber: number;
  questNumber: number;
  titleEn: string;
  titleSi: string;
  type: 'station' | 'boss' | 'theory';
  xpReward: number;
  sandboxType?: string;
  theoryPreviews?: { en: string; si: string }[];
}

interface QuestMapProps {
  grade: '10' | '11';
  quests: QuestNode[];
}

export function QuestMap({ grade, quests }: QuestMapProps) {
  const { state } = useProgress();
  const [selectedNode, setSelectedNode] = useState<QuestNode | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Determine active level (first uncompleted station)
  let activeIndex = quests.findIndex(q => !state.completedStations[q.id]);
  if (activeIndex === -1) activeIndex = quests.length - 1;

  // Compute (X, Y) coordinates along a 400px wide viewBox
  const rowHeight = 120;
  const totalHeight = quests.length * rowHeight + 80;

  // Alternating lateral oscillation percentages: Center, Left, Center, Right
  const lateralChannels = [200, 96, 200, 304];

  const nodeCoords = quests.map((q, idx) => {
    const isBoss = q.type === 'boss';
    const x = isBoss ? 200 : lateralChannels[idx % lateralChannels.length];
    const y = 60 + idx * rowHeight;
    return { x, y };
  });

  // Build full SVG cubic Bézier spline path
  let fullPathD = '';
  let activeSegmentD = '';

  for (let i = 0; i < nodeCoords.length - 1; i++) {
    const p1 = nodeCoords[i];
    const p2 = nodeCoords[i + 1];
    const dy = (p2.y - p1.y) * 0.5;
    const segment = `C ${p1.x} ${p1.y + dy}, ${p2.x} ${p2.y - dy}, ${p2.x} ${p2.y} `;

    if (i === 0) {
      fullPathD = `M ${p1.x} ${p1.y} ${segment}`;
    } else {
      fullPathD += segment;
    }

    // Accumulate active completed spline up to activeIndex
    if (i < activeIndex) {
      if (i === 0) {
        activeSegmentD = `M ${p1.x} ${p1.y} ${segment}`;
      } else {
        activeSegmentD += segment;
      }
    }
  }

  const handleNodeClick = (node: QuestNode, isLocked: boolean) => {
    if (isLocked) {
      sound.playClick(400);
      return;
    }
    sound.playClick(node.type === 'boss' ? 550 : 700);
    setSelectedNode(node);
    setIsDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Journey Stats Card */}
      <div className="clay-card p-5 sm:p-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white border border-indigo-500/30 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GRADE {grade} QUEST ROADMAP</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Your Micro-Learning Quest Path
            </h2>
            <p className="text-xs text-slate-300 font-sinhala">
              මට්ටමෙන් මට්ටම ඉදිරියට යමින් ලකුණු සහ තරු (Stars) එකතු කරන්න
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            <div className="text-center px-2">
              <div className="text-[10px] text-slate-300 uppercase font-mono">Completed</div>
              <div className="text-lg font-black text-emerald-400">
                {Object.keys(state.completedStations).length} / {quests.length}
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center px-2">
              <div className="text-[10px] text-slate-300 uppercase font-mono">Total XP</div>
              <div className="text-lg font-black text-amber-400">
                {state.points}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winding Canvas Container */}
      <div className="relative mx-auto w-full max-w-[420px] px-2 py-6 select-none" style={{ minHeight: `${totalHeight}px` }}>
        {/* SVG Spline Curves Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 400 ${totalHeight}`}
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            <linearGradient id="active-spline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="60%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Background Slate Rail */}
          <path
            d={fullPathD}
            fill="none"
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dotted Inner Track */}
          <path
            d={fullPathD}
            fill="none"
            stroke="currentColor"
            className="text-slate-300 dark:text-slate-700"
            strokeWidth="3"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />

          {/* Active / Completed Glowing Rail */}
          {activeSegmentD && (
            <path
              d={activeSegmentD}
              fill="none"
              stroke="url(#active-spline-gradient)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#neon-glow)"
            />
          )}
        </svg>

        {/* Interactive Node Buttons Placed at Coordinates */}
        {quests.map((quest, index) => {
          const coord = nodeCoords[index];
          const isCompleted = !!state.completedStations[quest.id];
          const isCurrent = index === activeIndex;
          const isUnlocked = isCompleted || isCurrent || index <= activeIndex;
          const isLocked = !isUnlocked;
          const stars = state.questStars[quest.id] || (isCompleted ? 3 : 0);
          const isBoss = quest.type === 'boss';

          // Node state classification
          const nodeState = isCompleted 
            ? 'cleared' 
            : isCurrent 
            ? 'active' 
            : isBoss 
            ? 'boss' 
            : isLocked 
            ? 'locked' 
            : 'active';

          return (
            <div
              key={quest.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(coord.x / 400) * 100}%`,
                top: `${coord.y}px`,
              }}
            >
              <LevelNodeButton
                quest={quest}
                state={nodeState}
                stars={stars}
                isBoss={isBoss}
                onClick={() => handleNodeClick(quest, isLocked)}
              />
            </div>
          );
        })}
      </div>

      {/* Level Preview Drawer Trigger */}
      <LevelDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        node={selectedNode}
        grade={grade}
        status={
          selectedNode && state.completedStations[selectedNode.id]
            ? 'cleared'
            : selectedNode && selectedNode.type === 'boss'
            ? 'boss'
            : 'active'
        }
        starsEarned={selectedNode ? (state.questStars[selectedNode.id] || 3) : 0}
      />
    </div>
  );
}
```

---

### 4.3 Level Node Button Component (`src/components/map/LevelNodeButton.tsx`)

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Lock, 
  Check, 
  Play, 
  Crown, 
  Swords, 
  Sparkles 
} from 'lucide-react';
import { QuestNode } from './QuestMap';

interface LevelNodeButtonProps {
  quest: QuestNode;
  state: 'cleared' | 'active' | 'locked' | 'boss';
  stars: number;
  isBoss: boolean;
  onClick: () => void;
}

export function LevelNodeButton({ quest, state, stars, isBoss, onClick }: LevelNodeButtonProps) {
  const isCleared = state === 'cleared';
  const isActive = state === 'active';
  const isLocked = state === 'locked';

  if (isBoss) {
    return (
      <div className="flex flex-col items-center group">
        {/* Floating Boss Banner */}
        <div className="mb-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black text-[10px] uppercase tracking-wider shadow-md border border-amber-300/40 flex items-center gap-1">
          <Crown className="w-3 h-3 text-amber-300 fill-amber-300" />
          <span>UNIT 0{quest.unitNumber} BOSS</span>
        </div>

        {/* 96px Boss Pedestal Button */}
        <div className="relative">
          {/* Fiery Pulsing Aura for Active Boss */}
          {(!isLocked) && (
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute -inset-2.5 rounded-3xl bg-rose-500/40 blur-md pointer-events-none"
            />
          )}

          <button
            onClick={onClick}
            disabled={isLocked}
            className={`w-24 h-24 rounded-3xl border-b-4 flex flex-col items-center justify-center transition-all shadow-xl active:translate-y-1 ${
              isCleared
                ? 'bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-amber-700 text-slate-950 shadow-amber-500/40 ring-4 ring-amber-400/50'
                : !isLocked
                ? 'bg-gradient-to-b from-rose-500 via-red-600 to-amber-600 border-red-900 text-white shadow-rose-500/40 ring-4 ring-amber-400/60'
                : 'bg-slate-300 dark:bg-slate-800 border-slate-400 dark:border-slate-900 text-slate-400 cursor-not-allowed opacity-80'
            }`}
          >
            {isCleared ? (
              <Crown className="w-10 h-10 text-white fill-amber-200 drop-shadow" />
            ) : !isLocked ? (
              <Crown className="w-10 h-10 text-amber-200 fill-amber-300 drop-shadow animate-pulse" />
            ) : (
              <Lock className="w-8 h-8 text-slate-500" />
            )}
            <span className="text-[10px] font-mono font-black mt-1">
              +{quest.xpReward} XP
            </span>
          </button>
        </div>

        {/* Arched Stars beneath Cleared Boss */}
        {isCleared && (
          <div className="flex items-center gap-0.5 mt-1.5 bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-400/40 shadow-sm">
            {[1, 2, 3].map(s => (
              <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center group">
      {/* Floating "START HERE" Beacon Pill for Active Level */}
      {isActive && (
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="mb-1 px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3 fill-slate-950" />
          <span>START HERE</span>
        </motion.div>
      )}

      {/* 76px Node Button */}
      <div className="relative">
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
            className="absolute -inset-2.5 rounded-full bg-cyan-400/40 blur-sm pointer-events-none"
          />
        )}

        <button
          onClick={onClick}
          disabled={isLocked}
          className={`w-19 h-19 sm:w-20 sm:h-20 rounded-full border-b-4 flex items-center justify-center transition-all shadow-lg active:translate-y-1 relative ${
            isCleared
              ? 'bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-amber-700 text-slate-950 shadow-amber-500/30'
              : isActive
              ? 'bg-gradient-to-b from-cyan-400 via-indigo-600 to-indigo-700 border-indigo-950 text-white shadow-cyan-500/40 ring-4 ring-cyan-400/60 ring-offset-2 ring-offset-canvas'
              : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-900 text-slate-400 cursor-not-allowed opacity-85 shadow-inner'
          }`}
        >
          {isCleared ? (
            <Check className="w-8 h-8 text-white stroke-[3.5]" />
          ) : isActive ? (
            <Play className="w-8 h-8 fill-white text-white ml-1" />
          ) : (
            <Lock className="w-7 h-7 text-slate-400 dark:text-slate-500" />
          )}

          {/* Level Number Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center border border-slate-700 shadow-sm">
            {quest.questNumber}
          </span>
        </button>
      </div>

      {/* Arched Stars Badge for Cleared Nodes */}
      {isCleared ? (
        <div className="flex items-center gap-0.5 mt-1.5 bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-400/30 shadow-sm">
          {[1, 2, 3].map(s => (
            <Star
              key={s}
              className={`w-3.5 h-3.5 ${
                s <= stars ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
              }`}
            />
          ))}
        </div>
      ) : (
        <span className="text-[10px] font-mono font-bold text-slate-400 mt-1">
          +{quest.xpReward} XP
        </span>
      )}
    </div>
  );
}
```

---

### 4.4 Level Details Drawer (`src/components/map/LevelDrawer.tsx`)

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Star, 
  Sparkles, 
  BookOpen, 
  Gamepad2, 
  ArrowRight, 
  Crown, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { QuestNode } from './QuestMap';
import { sound } from '@/utils/soundEffects';

interface LevelDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  node: QuestNode | null;
  grade: '10' | '11';
  status: 'cleared' | 'active' | 'locked' | 'boss';
  starsEarned?: number;
}

export function LevelDrawer({
  isOpen,
  onClose,
  node,
  grade,
  status,
  starsEarned = 0,
}: LevelDrawerProps) {
  const router = useRouter();

  if (!isOpen || !node) return null;

  const isCleared = status === 'cleared';
  const isBoss = node.type === 'boss';

  const handleStartLesson = () => {
    sound.playSuccessDing();
    onClose();
    router.push(`/lesson/${grade}/${node.lessonId}?station=${node.stationId}`);
  };

  const handleStartTheory = () => {
    sound.playClick(700);
    onClose();
    router.push(`/lesson/${grade}/${node.lessonId}?station=${node.stationId}&tab=theory`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        className="w-full sm:max-w-lg bg-white dark:bg-slate-900 border-t-2 sm:border-2 border-indigo-500/40 rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Top Drag Handle */}
        <div className="pt-3 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Drawer Header */}
        <div className="px-5 pt-3 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              Unit 0{node.unitNumber} • {isBoss ? 'Boss Gauntlet' : `Quest 0${node.questNumber}`}
            </span>
            {node.sandboxType && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-500 border border-amber-400/30">
                Interactive Lab
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* Title & Bilingual Subtitle */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {node.titleEn}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sinhala font-medium">
              {node.titleSi}
            </p>
          </div>

          {/* Mastery & Reward Status Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-500">
                {isBoss ? <Crown className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  {isCleared ? 'Mastery Cleared' : 'Reward on Completion'}
                </div>
                <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                  +{node.xpReward} XP Points
                </div>
              </div>
            </div>

            {/* Stars Display */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              {[1, 2, 3].map(starIdx => (
                <Star
                  key={starIdx}
                  className={`w-4 h-4 ${
                    starIdx <= starsEarned
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300 dark:text-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Theory Cards & Content Preview */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Station Overview & Competencies
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Interactive multi-step challenges evaluating NIE curriculum key competencies.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sinhala">
                  ද්විභාෂා කෙටි සටහන්, න්‍යායාත්මක පැහැදිලි කිරීම් සහ සත්‍ය විභාග ගැටලු.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Bottom Thumb-Zone CTAs (>= 48px hit target) */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
          {/* Primary Action Button (56px) */}
          <button
            onClick={handleStartLesson}
            className={`w-full h-14 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-98 ${
              isBoss
                ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-rose-600/30'
                : 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-indigo-600/30'
            }`}
          >
            <span>{isCleared ? 'Replay Station' : isBoss ? 'Enter Boss Arena' : 'Start Lesson'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Secondary Action Button (48px) */}
          <button
            onClick={handleStartTheory}
            className="w-full h-11 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span>Read Theory Notes First</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
```

---

## 5. Component Refactoring & Integration Strategy

### 5.1 File System Modularization
To ensure zero regressions across existing code while establishing clean modularity:

```
src/components/
├── onboarding/
│   └── OnboardingModal.tsx          # 3-step zero-friction modal
├── map/
│   ├── QuestMap.tsx                 # Winding SVG/flex quest map with spline math
│   ├── LevelNodeButton.tsx          # 4-state interactive node button
│   └── LevelDrawer.tsx              # Slide-up level preview drawer
├── QuestRoadmap.tsx                 # Re-export / wrapper maintaining backwards compatibility
└── GuidedFlowModal.tsx              # Wrapper delegating to OnboardingModal
```

### 5.2 Migration in `src/app/page.tsx`
On the homepage:
```tsx
// Replace import:
import { OnboardingModal } from '@/components/onboarding/OnboardingModal';
import { QuestMap } from '@/components/map/QuestMap';

// Inside JSX:
<OnboardingModal
  isOpen={isSetupModalOpen}
  onClose={() => setIsSetupModalOpen(false)}
/>

<QuestMap grade={selectedGrade} quests={questsForGrade} />
```

---

## 6. Verification and Testing Method

### 6.1 Acceptance Criteria Verification Checklist
1. **Zero Horizontal Scroll**:
   - Verify on viewports 360px, 375px, 390px, 412px: SVG viewBox scales cleanly (`viewBox="0 0 400 totalHeight"` with `w-full h-full`), zero horizontal scroll bar.
2. **Thumb-Zone Compliance**:
   - `OnboardingModal`: All option cards and bottom action buttons have height $\ge 48\text{px}$.
   - `LevelDrawer`: Primary "Start Lesson" CTA is 56px (`h-14`), pinned in the bottom 25% thumb zone.
3. **Winding Path Visual States**:
   - Cleared node: 3-star badge, golden checkmark, amber border.
   - Active node: Pulsing beacon wave, cyan glowing ring, "START HERE" badge.
   - Locked node: Gray slate, lock icon, subtle shake on tap.
   - Boss node: 96px pedestal, crown icon, fiery glow.
4. **State Persistence**:
   - Verify that selecting Medium and Grade in `OnboardingModal` persists in `localStorage` under `ict_ol_progress_v2`.
   - Reload page: user is not re-prompted for onboarding.
5. **Drawer Behavior**:
   - Tapping an unlocked node slides up `LevelDrawer` with correct title, unit number, stars, and theory overview.
   - Tapping "Start Lesson" navigates cleanly.
