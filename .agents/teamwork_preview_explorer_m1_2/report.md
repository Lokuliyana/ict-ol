# Concrete Implementation Strategy: Top HUD, Mobile Bottom Nav & Desktop Left Rail

**Author**: M1 Explorer 2 (HUD & Navigation Subagent)  
**Date**: 2026-10-08  
**Scope**: Milestone 1 (R1) — Core Shell, Persistent State & Navigation Engine  
**Project**: Sri Lankan G.C.E. O/L ICT Gamified Web Application (`c:\Users\MSI\ict-ol`)  
**Report Target**: `c:\Users\MSI\ict-ol\.agents\teamwork_preview_explorer_m1_2\report.md`  

---

## 1. Executive Summary & Architectural Overview

This report provides the concrete technical design, modular component architecture, responsive layout orchestration, prop contracts, and code blueprints for the core navigation shell of the application. 

### Core Objectives
1. **Persistent Top HUD**:
   - Real-time **Daily Study Streak** with animated flame icon (`Flame`) and study status.
   - **Heart Containers**: 5 lives container with real-time 30-minute recharge countdown timer (`mm:ss`) when lives `< 5`, depletion warning, and restoration triggers.
   - **Grade Switcher**: Reactive segmented control (`Grade 10` vs `Grade 11`) updating global state immediately without page reloads.
   - **XP Counter**: Formatted gamified points display (`⚡ 150 XP`) with celebratory visual feedback.
2. **Mobile Bottom Navigation Bar (64px)**:
   - Fixed thumb-zone dock strictly 64px in height (`h-16`) on mobile viewports (`< 1024px`).
   - Strict `>= 48px` touch target compliance for all interactable buttons.
   - Guaranteed **zero horizontal scroll** across 360px–412px viewports.
   - 4 Core Destinations: **Quest Map** (`/`), **Practice / Study** (`/#curriculum` / `/study`), **Arena / Papers** (`/papers`), and **Settings / Profile** (`/analytics` / settings modal).
   - Safe-area inset compensation for modern mobile operating systems (`env(safe-area-inset-bottom)`).
3. **Desktop Collapsible Left Rail (>= 1024px)**:
   - Collapsible desktop sidebar active on viewports `>= 1024px` (`lg:` breakpoint).
   - Dual modes: **Expanded** (`w-64` / 256px) and **Collapsed** (`w-20` / 80px) with smooth 300ms cubic-bezier CSS transitions.
   - LocalStorage persistence for user collapse preferences and keyboard shortcut toggle (`Ctrl+B`).
   - Seamless routing synchronization, active tab indicator, and curriculum mastery summaries.
4. **Unified Responsive App Shell**:
   - A single wrapper (`AppShell.tsx`) bridging `TopHud`, `DesktopSidebar`, and `MobileBottomNav` inside `src/app/layout.tsx`.
   - Automatic route-aware switching between **Shell Mode** (for Quest Map, Papers, Analytics) and **Immersive Mode** (for `/study/[nodeId]` and `/quiz/[nodeId]` full-screen learning sessions).

---

## 2. Codebase Audit of Existing Navigation Components

An inspection of `src/components/Header.tsx`, `src/components/MobileBottomDock.tsx`, `src/app/layout.tsx`, and `src/app/page.tsx` revealed key structural gaps:

| Component | Current State | Gaps Identified | Target Architecture (M1) |
|---|---|---|---|
| `src/components/Header.tsx` | Monolithic 193-line component rendering logo, breadcrumb, language toggle, streak badge, XP badge, and dark mode toggle. | 1. **No Heart Containers**: Missing 5-life container and 30-min recharge countdown timer.<br>2. **No Grade Switcher**: Grade switcher is marooned in `src/app/page.tsx` instead of being globally accessible in the persistent HUD.<br>3. **Mobile Overflow Risk**: Renders a secondary row for language buttons on mobile (`sm:hidden`), wasting vertical screen real estate. | Refactor into modular `src/components/hud/`: `TopHud.tsx`, `HeartMeter.tsx`, `GradeSwitcher.tsx`, `StreakBadge.tsx`, `XpCounter.tsx`. |
| `src/components/MobileBottomDock.tsx` | 118-line component with 5 buttons (`Journey`, `Syllabus`, `Switch` circular CTA, `Mastery`, `Settings` badge). | 1. **Height non-conformance**: Uses arbitrary padding (`py-2`) instead of strict 64px (`h-16`).<br>2. **Touch targets < 48px**: Inner icons and texts do not enforce min-h/min-w 48px hit boxes.<br>3. **Misaligned routes**: Does not link to the dedicated `/papers` arena or micro-learning `/study` loops. | Refactor into `src/components/navigation/MobileBottomNav.tsx`: Strict 64px height (`h-16`), 4 grid columns, `>= 48px` touch targets, safe-area padding. |
| Desktop Left Rail | **Does not exist in repository.** Desktop viewports rely purely on the top header bar and inline page links. | 1. Missing desktop left rail for viewports `>= 1024px`.<br>2. Desktop users experience an empty sidebar margin without persistent destination quick-links. | Create `src/components/navigation/DesktopSidebar.tsx` with collapsible states (`w-64` <-> `w-20`). |
| Root Shell Mounting (`src/app/layout.tsx`) | Layout only wraps `{children}` inside `ProgressProvider`. Each page (`page.tsx`, `lesson/...`, `analytics/...`) independently mounts `<Header />` and `<MobileBottomDock />`. | 1. High code duplication across page routes.<br>2. State re-mount flickering during route navigation.<br>3. Inability to centrally handle immersive vs shell viewports. | Mount a unified `<AppShell>` inside `src/app/layout.tsx` that coordinates Top HUD, Desktop Rail, and Mobile Nav. |

---

## 3. Top HUD: Component Architecture & Specifications

### 3.1 Requirements Breakdown
1. **Daily Study Streak**:
   - Icon: `Flame` from `lucide-react`.
   - Glowing amber badge (`text-amber-500 fill-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800`).
   - Micro-interaction: Animated pulse when streak is active (`animate-pulse`).
   - Label: `3d` on compact mobile (< 640px), `3 Day Streak` on tablet and desktop (>= 640px).
2. **Heart Containers & Live 30-Min Countdown**:
   - Total capacity: `5` hearts.
   - States:
     - **Full (5 Hearts)**: 5 filled red hearts (`fill-rose-500 text-rose-500`) with `MAX` badge.
     - **Depleted / Partial (1 to 4 Hearts)**: Shows remaining filled hearts + hollow/cracked hearts + a live countdown badge displaying time until the next recharge (`+1 in mm:ss`).
     - **Zero Hearts (0 Hearts)**: Flashing crimson warning badge (`0 LIVES`) with active countdown. Tapping opens the Heart Depletion / Refill modal.
   - Mathematical Model:
     - `RECHARGE_CYCLE_MS = 30 * 60 * 1000` (1,800,000 ms).
     - Store records `lastHeartLossTime` (epoch ms).
     - Live second calculation: `remainingSec = Math.max(0, Math.ceil((nextRechargeTime - Date.now()) / 1000))`.
     - Deterministic catch-up: When user returns after $N \times 30$ minutes, automatically increment hearts by $N$ without timer drift.
3. **Grade Switcher (10 vs 11)**:
   - High-contrast segmented pill toggle.
   - Options: Grade 10 (`G10` / `10 ශ්‍රේණිය`) vs Grade 11 (`G11` / `11 ශ්‍රේණිය`).
   - State update: Immediate invocation of `setGrade('10')` or `setGrade('11')`.
   - Visual cue: Sliding pill indicator or active indigo background (`bg-indigo-600 text-white font-black shadow-sm`).
   - Sound feedback: Soft mechanical click (`sound.playClick(700)`).
4. **XP Counter**:
   - Icon: `Award` or `Zap` with amber/indigo highlights.
   - Number formatting: Formatted with commas (`state.xp.toLocaleString()`).
   - Label: `XP` with badge styling.

### 3.2 Responsive Breakpoint Strategy for Top HUD
To guarantee **zero horizontal scroll** on narrow mobile screens (360px–412px) while delivering rich information on desktop (>= 1024px), the Top HUD adapts seamlessly:

```
[Viewport < 640px (Mobile)]
| [Logo] [10|11] |--------- [🔥 3] [❤️ 4 28m] [⚡ 150] |
Total width requirement: ~310px <= 360px (Guaranteed NO overflow)

[Viewport 640px–1023px (Tablet)]
| [Logo + Title] [Grade 10 | Grade 11] |--- [Dual|EN|SI] [🔥 3 Days] [❤️❤️❤️❤️🤍 28:15] [⚡ 150 XP] [Theme] |

[Viewport >= 1024px (Desktop)]
| Top HUD spans main content area |
| Left: Breadcrumb / Unit Info |
| Right: [Grade 10 | 11] [🔥 3 Day Streak] [❤️❤️❤️❤️🤍 +1 in 28:15] [⚡ 1,250 XP] [Dual-Sync] [Theme] [Settings] |
```

### 3.3 Modular File Layout for Top HUD
Place all HUD components in `src/components/hud/`:
- `src/components/hud/TopHud.tsx` — Root HUD bar (sticky `top-0`, z-index 40, backdrop-blur).
- `src/components/hud/HeartMeter.tsx` — 5-heart meter with live interval countdown and popover.
- `src/components/hud/GradeSwitcher.tsx` — Segmented 10 vs 11 toggle.
- `src/components/hud/StreakBadge.tsx` — Flame badge with pulse animation and day counter.
- `src/components/hud/XpCounter.tsx` — Gamified XP badge.

### 3.4 TypeScript Prop Contracts for HUD Components

```typescript
// src/components/hud/HeartMeter.tsx
export interface HeartMeterProps {
  hearts: number; // 0 to 5
  maxHearts?: number; // default 5
  lastHeartLossTime: number | null; // epoch ms
  onDepletedClick?: () => void; // Triggered when tapping depleted hearts
  compact?: boolean; // For <640px viewports
}

// src/components/hud/GradeSwitcher.tsx
export interface GradeSwitcherProps {
  currentGrade: '10' | '11';
  onGradeChange: (grade: '10' | '11') => void;
  compact?: boolean;
}

// src/components/hud/StreakBadge.tsx
export interface StreakBadgeProps {
  streak: number;
  compact?: boolean;
}

// src/components/hud/XpCounter.tsx
export interface XpCounterProps {
  xp: number;
  compact?: boolean;
}

// src/components/hud/TopHud.tsx
export interface TopHudProps {
  className?: string;
  onOpenSettings?: () => void;
  onOpenHeartModal?: () => void;
}
```

### 3.5 Concrete Implementation Blueprints for HUD

#### `src/components/hud/HeartMeter.tsx`
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Clock, AlertCircle } from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface HeartMeterProps {
  hearts: number;
  maxHearts?: number;
  lastHeartLossTime: number | null;
  onDepletedClick?: () => void;
  compact?: boolean;
}

const RECHARGE_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes in ms

export function HeartMeter({
  hearts,
  maxHearts = 5,
  lastHeartLossTime,
  onDepletedClick,
  compact = false
}: HeartMeterProps) {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  useEffect(() => {
    if (hearts >= maxHearts || !lastHeartLossTime) {
      setSecondsRemaining(0);
      return;
    }

    const calculateRemaining = () => {
      const now = Date.now();
      const elapsed = now - lastHeartLossTime;
      const cycleElapsed = elapsed % RECHARGE_INTERVAL_MS;
      const remainingMs = RECHARGE_INTERVAL_MS - cycleElapsed;
      return Math.max(0, Math.ceil(remainingMs / 1000));
    };

    setSecondsRemaining(calculateRemaining());
    const interval = setInterval(() => {
      const remaining = calculateRemaining();
      setSecondsRemaining(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [hearts, maxHearts, lastHeartLossTime]);

  const formatCountdown = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isDepleted = hearts === 0;

  return (
    <div
      onClick={() => {
        sound.playClick(600);
        if (onDepletedClick) onDepletedClick();
      }}
      className={`cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all border ${
        isDepleted
          ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800 animate-pulse'
          : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 hover:bg-rose-100 dark:hover:bg-rose-900/50'
      }`}
      title={
        hearts >= maxHearts
          ? 'Lives Full (5/5)'
          : `${hearts}/${maxHearts} Lives. Next life restores in ${formatCountdown(secondsRemaining)}`
      }
    >
      {/* Compact View (< 640px) */}
      <div className="flex sm:hidden items-center gap-1 text-xs font-mono font-bold">
        <Heart className={`w-3.5 h-3.5 ${isDepleted ? 'text-rose-600' : 'fill-rose-500 text-rose-500'}`} />
        <span>{hearts}</span>
        {hearts < maxHearts && secondsRemaining > 0 && (
          <span className="text-[10px] text-rose-500 dark:text-rose-400 font-normal">
            ({Math.ceil(secondsRemaining / 60)}m)
          </span>
        )}
      </div>

      {/* Expanded View (>= 640px) */}
      <div className="hidden sm:flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: maxHearts }).map((_, idx) => {
            const isFilled = idx < hearts;
            return (
              <Heart
                key={idx}
                className={`w-3.5 h-3.5 transition-transform ${
                  isFilled
                    ? 'fill-rose-500 text-rose-500 hover:scale-110'
                    : 'text-slate-300 dark:text-slate-700 fill-slate-100 dark:fill-slate-800/40'
                }`}
              />
            );
          })}
        </div>

        {hearts < maxHearts && secondsRemaining > 0 ? (
          <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-rose-600 dark:text-rose-300 pl-1 border-l border-rose-200 dark:border-rose-800">
            <Clock className="w-2.5 h-2.5" />
            <span>{formatCountdown(secondsRemaining)}</span>
          </div>
        ) : (
          <span className="text-[10px] font-bold font-mono uppercase text-rose-500">Full</span>
        )}
      </div>
    </div>
  );
}
```

#### `src/components/hud/GradeSwitcher.tsx`
```tsx
'use client';

import React from 'react';
import { sound } from '@/utils/soundEffects';

interface GradeSwitcherProps {
  currentGrade: '10' | '11';
  onGradeChange: (grade: '10' | '11') => void;
  compact?: boolean;
}

export function GradeSwitcher({ currentGrade, onGradeChange, compact = false }: GradeSwitcherProps) {
  const handleSwitch = (target: '10' | '11') => {
    if (target === currentGrade) return;
    sound.playClick(720);
    onGradeChange(target);
  };

  return (
    <div
      role="group"
      aria-label="Grade selection"
      className="inline-flex items-center bg-slate-100 dark:bg-slate-800/90 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-inner"
    >
      <button
        type="button"
        onClick={() => handleSwitch('10')}
        className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-xs font-black transition-all ${
          currentGrade === '10'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-100'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <span className="sm:hidden font-mono">10</span>
        <span className="hidden sm:inline">Grade 10</span>
      </button>

      <button
        type="button"
        onClick={() => handleSwitch('11')}
        className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-xs font-black transition-all ${
          currentGrade === '11'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-100'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <span className="sm:hidden font-mono">11</span>
        <span className="hidden sm:inline">Grade 11</span>
      </button>
    </div>
  );
}
```

#### `src/components/hud/StreakBadge.tsx`
```tsx
'use client';

import React from 'react';
import { Flame } from 'lucide-react';

interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  const isActive = streak > 0;

  return (
    <div
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-mono transition-all border ${
        isActive
          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/80'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
      }`}
      title={`${streak} Day Study Streak`}
    >
      <Flame
        className={`w-3.5 h-3.5 ${
          isActive ? 'fill-amber-500 text-amber-500 animate-pulse' : 'text-slate-400'
        }`}
      />
      <span className="sm:hidden">{streak}</span>
      <span className="hidden sm:inline">{streak}d Streak</span>
    </div>
  );
}
```

#### `src/components/hud/XpCounter.tsx`
```tsx
'use client';

import React from 'react';
import { Zap } from 'lucide-react';

interface XpCounterProps {
  xp: number;
}

export function XpCounter({ xp }: XpCounterProps) {
  return (
    <div
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80"
      title={`${xp.toLocaleString()} Total XP`}
    >
      <Zap className="w-3.5 h-3.5 fill-indigo-500 text-indigo-500" />
      <span>{xp.toLocaleString()}</span>
      <span className="hidden sm:inline text-[10px] text-indigo-400 uppercase">XP</span>
    </div>
  );
}
```

#### `src/components/hud/TopHud.tsx`
```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useProgress } from '@/context/ProgressContext';
import { GradeSwitcher } from './GradeSwitcher';
import { HeartMeter } from './HeartMeter';
import { StreakBadge } from './StreakBadge';
import { XpCounter } from './XpCounter';
import { Sun, Moon, Volume2, VolumeX, Languages } from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface TopHudProps {
  className?: string;
  onOpenHeartModal?: () => void;
  onOpenSettingsModal?: () => void;
}

export function TopHud({ className = '', onOpenHeartModal, onOpenSettingsModal }: TopHudProps) {
  const { state, setUserGrade, setLanguageMode, toggleColorMode } = useProgress();

  return (
    <header className={`sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Left: Brand & Grade Switcher */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-200 dark:border-indigo-800 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/assets/clay/thumb-ict-tech.svg"
                  alt="ICT Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="hidden md:inline font-black text-base tracking-tight text-slate-900 dark:text-white">
                O/L ICT <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">Master</span>
              </span>
            </Link>

            {/* Persistent Grade Switcher */}
            <GradeSwitcher
              currentGrade={state.userGrade || '10'}
              onGradeChange={(g) => setUserGrade(g)}
            />
          </div>

          {/* Center: Bilingual Mode Quick Toggle (Hidden on small mobile to preserve 360px width) */}
          <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setLanguageMode('dual')}
              className={`px-2 py-1 rounded-md font-medium transition-all ${
                state.languageMode === 'dual' ? 'bg-white dark:bg-slate-700 text-indigo-600 font-bold shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Dual (සිං/EN)
            </button>
            <button
              onClick={() => setLanguageMode('en')}
              className={`px-2 py-1 rounded-md font-medium transition-all ${
                state.languageMode === 'en' ? 'bg-white dark:bg-slate-700 text-indigo-600 font-bold shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguageMode('si')}
              className={`px-2 py-1 rounded-md font-medium font-sinhala transition-all ${
                state.languageMode === 'si' ? 'bg-white dark:bg-slate-700 text-indigo-600 font-bold shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              සිංහල
            </button>
          </div>

          {/* Right: Gamified Stats (Streak, Hearts, XP) & Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak Flame */}
            <StreakBadge streak={state.streak || 0} />

            {/* 5-Heart Meter with Live Countdown */}
            <HeartMeter
              hearts={(state as any).hearts ?? 5}
              maxHearts={5}
              lastHeartLossTime={(state as any).lastHeartLossTime ?? null}
              onDepletedClick={onOpenHeartModal}
            />

            {/* XP Points */}
            <XpCounter xp={state.points || 0} />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {state.colorMode === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
```

---

## 4. Mobile Bottom Navigation Bar (64px): Architecture & Specifications

### 4.1 Requirements Breakdown
1. **Height & Viewport Scope**:
   - Strictly 64px height (`h-16`).
   - Active on mobile and tablet `< 1024px` (`lg:hidden`).
   - Fixed to the bottom: `fixed bottom-0 inset-x-0 z-40`.
2. **Ergonomic Touch Targets**:
   - Every interactive touch target must have a hit box `>= 48px` in height and width.
   - In `h-16` (64px), each of the 4 items occupies 25% width (`w-1/4`), generating a touch zone of at least 90px $\times$ 64px on a 360px screen.
3. **Safe-Area Insets**:
   - Uses `pb-[env(safe-area-inset-bottom,0px)]` to prevent clipping behind the home bar on iOS Safari and gesture indicators on Android.
4. **Zero Horizontal Scroll Guarantee**:
   - Strictly `w-full max-w-full overflow-x-hidden box-border`.
   - Grid layout with 4 equal columns: `grid grid-cols-4`.
5. **The 4 Core Navigation Destinations**:
   - **Tab 1: Quest Map** (`/`)
     - Icon: `Map` / `Compass`
     - Label: `Quest Map` / `සිතියම`
     - Active when `pathname === '/'`
   - **Tab 2: Practice / Study** (`/#curriculum` or `/study`)
     - Icon: `BookOpen` / `Layers`
     - Label: `Practice` / `පාඩම්`
     - Active when `pathname.startsWith('/lesson') || pathname.startsWith('/study') || pathname.includes('#curriculum')`
   - **Tab 3: Arena / Past Papers** (`/papers`)
     - Icon: `Swords` / `Award` / `FileText`
     - Label: `Arena` / `විභාග`
     - Active when `pathname.startsWith('/papers')`
   - **Tab 4: Settings / Profile** (`/analytics`)
     - Icon: `User` / `BarChart2` / `Settings`
     - Label: `Profile` / `ප්‍රගතිය`
     - Active when `pathname.startsWith('/analytics')`

### 4.2 Concrete Implementation Blueprint for Mobile Bottom Nav

#### `src/components/navigation/MobileBottomNav.tsx`
```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, BookOpen, Swords, BarChart2 } from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface MobileBottomNavProps {
  className?: string;
  onOpenSettingsModal?: () => void;
}

export function MobileBottomNav({ className = '', onOpenSettingsModal }: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      id: 'map',
      labelEn: 'Map',
      labelSi: 'සිතියම',
      href: '/',
      icon: Compass,
      isActive: pathname === '/',
    },
    {
      id: 'practice',
      labelEn: 'Practice',
      labelSi: 'පාඩම්',
      href: '/#curriculum',
      icon: BookOpen,
      isActive: pathname.startsWith('/lesson') || pathname.startsWith('/study'),
    },
    {
      id: 'arena',
      labelEn: 'Arena',
      labelSi: 'විභාග',
      href: '/papers',
      icon: Swords,
      isActive: pathname.startsWith('/papers'),
    },
    {
      id: 'profile',
      labelEn: 'Profile',
      labelSi: 'ප්‍රගතිය',
      href: '/analytics',
      icon: BarChart2,
      isActive: pathname.startsWith('/analytics'),
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-2xl pb-[env(safe-area-inset-bottom,0px)] overflow-x-hidden ${className}`}
    >
      <div className="grid grid-cols-4 h-16 w-full max-w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => sound.playClick(650)}
              className={`min-h-[48px] min-w-[48px] flex flex-col items-center justify-center gap-1 transition-all select-none active:scale-95 ${
                active
                  ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
              }`}
            >
              <div
                className={`flex items-center justify-center p-1.5 rounded-xl transition-all ${
                  active
                    ? 'bg-indigo-100 dark:bg-indigo-950/80 shadow-xs scale-105'
                    : 'bg-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`} />
              </div>
              <span className="text-[10px] tracking-tight leading-none">
                {item.labelEn}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

---

## 5. Desktop Collapsible Left Rail (>= 1024px): Architecture & Specifications

### 5.1 Requirements Breakdown
1. **Breakpoint & Visibility**:
   - Visible strictly on viewports `>= 1024px` (`hidden lg:flex`).
   - Hidden on mobile and tablet (`< 1024px`).
2. **Collapsible State Modes**:
   - **Expanded Mode** (`w-64` / 256px):
     - Displays full branding at top, full navigation link text with icons, active highlight pills, Unit badge counters, and an expandable study summary card.
   - **Collapsed Mode** (`w-20` / 80px):
     - Displays centered icon-only buttons with hover tooltips (`title` / floating tooltip), preserving horizontal viewport real estate.
3. **Smooth Transition**:
   - CSS `transition-[width] duration-300 ease-in-out` on the sidebar container.
   - Child text elements smoothly fade out/in (`opacity 200ms`).
4. **State Persistence**:
   - Saves collapsed preference in `localStorage.getItem('ict_rail_collapsed')`.
   - Accessible keyboard shortcut: pressing `Ctrl+B` toggles rail collapse.
5. **Rail Navigation Items**:
   - **Quest Journey**: `/` (Icon: `Compass`)
   - **Topic Curriculum**: `/#curriculum` (Icon: `BookOpen`)
   - **Past Paper Boss Arena**: `/papers` (Icon: `Swords`)
   - **Mastery Analytics**: `/analytics` (Icon: `BarChart2`)
   - **Settings & Medium**: Trigger modal (Icon: `Settings`)

### 5.2 Concrete Implementation Blueprint for Desktop Sidebar

#### `src/components/navigation/DesktopSidebar.tsx`
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  BookOpen, 
  Swords, 
  BarChart2, 
  Settings, 
  PanelLeftClose, 
  PanelLeftOpen,
  Sparkles,
  Flame,
  Award
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { sound } from '@/utils/soundEffects';

interface DesktopSidebarProps {
  className?: string;
  onOpenSettingsModal?: () => void;
}

const STORAGE_KEY_RAIL = 'ict_rail_collapsed_v1';

export function DesktopSidebar({ className = '', onOpenSettingsModal }: DesktopSidebarProps) {
  const pathname = usePathname();
  const { state } = useProgress();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Restore collapse preference from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_RAIL);
      if (stored !== null) {
        setIsCollapsed(stored === 'true');
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleCollapse = () => {
    sound.playClick(680);
    setIsCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY_RAIL, String(next));
      } catch {}
      return next;
    });
  };

  const navLinks = [
    {
      label: 'Quest Map',
      labelSi: 'ක්‍රීඩා සිතියම',
      href: '/',
      icon: Compass,
      isActive: pathname === '/',
      badge: 'G' + (state.userGrade || '10'),
    },
    {
      label: 'Topic Library',
      labelSi: 'පෙළපොත් සටහන්',
      href: '/#curriculum',
      icon: BookOpen,
      isActive: pathname.startsWith('/lesson') || pathname.startsWith('/study'),
      badge: '15 Units',
    },
    {
      label: 'Boss Arena',
      labelSi: 'පසුගිය විභාග ප්‍රශ්න',
      href: '/papers',
      icon: Swords,
      isActive: pathname.startsWith('/papers'),
      badge: '2020–2025',
    },
    {
      label: 'Analytics',
      labelSi: 'ප්‍රගති විශ්ලේෂණය',
      href: '/analytics',
      icon: BarChart2,
      isActive: pathname.startsWith('/analytics'),
    },
  ];

  return (
    <aside
      aria-label="Desktop Navigation Rail"
      className={`hidden lg:flex flex-col shrink-0 sticky top-0 h-screen z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 transition-[width] duration-300 ease-in-out select-none ${
        isCollapsed ? 'w-20' : 'w-64'
      } ${className}`}
    >
      {/* Sidebar Header: Brand & Collapse Toggle */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200/80 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-200 dark:border-indigo-800 shrink-0">
            <Image
              src="/assets/clay/thumb-ict-tech.svg"
              alt="ICT Logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white leading-tight">
                O/L ICT <span className="text-indigo-600 dark:text-indigo-400">Master</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium truncate">
                Grade {state.userGrade || '10'} Prep
              </span>
            </div>
          )}
        </Link>

        {/* Collapse Button */}
        <button
          onClick={toggleCollapse}
          title={isCollapsed ? 'Expand sidebar (Ctrl+B)' : 'Collapse sidebar (Ctrl+B)'}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Nav Links */}
      <div className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
        {navLinks.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => sound.playClick(650)}
              title={isCollapsed ? `${item.label} (${item.labelSi})` : undefined}
              className={`flex items-center gap-3.5 px-3 py-3 rounded-2xl text-xs font-bold transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
              } ${isCollapsed ? 'justify-center px-0' : ''}`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${active ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
              
              {!isCollapsed && (
                <div className="flex items-center justify-between flex-1 truncate">
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-extrabold ${
                        active
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Card: Progress & Settings */}
      <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 space-y-2">
        {!isCollapsed && (
          <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-slate-800/80 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-extrabold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                Study Progress
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-500">
                {state.points || 0} XP
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all"
                style={{ width: `${Math.min(100, (state.points || 0) / 10)}%` }}
              />
            </div>
          </div>
        )}

        {/* Settings CTA */}
        {onOpenSettingsModal && (
          <button
            onClick={onOpenSettingsModal}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
              isCollapsed ? 'justify-center px-0' : ''
            }`}
            title="Settings & Syllabus Preferences"
          >
            <Settings className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Preferences</span>}
          </button>
        )}
      </div>
    </aside>
  );
}
```

---

## 6. Unified Application Shell (`AppShell.tsx`) & Root Layout Integration

To eliminate redundant mounts of navigation components across pages and ensure seamless layout coordination between desktop and mobile, we introduce `src/components/layout/AppShell.tsx`:

### 6.1 Layout Hierarchy
```
RootLayout (src/app/layout.tsx)
  └── ProgressProvider (Zustand or Context)
        └── AppShell (src/components/layout/AppShell.tsx)
              ├── DesktopSidebar (hidden on mobile, sticky left rail on desktop >= 1024px)
              └── Main Viewport Area (flex-1 flex flex-col min-w-0)
                    ├── TopHud (sticky top-0 z-40)
                    ├── Page Content ({children}) with pb-20 on mobile
                    └── MobileBottomNav (fixed bottom-0, lg:hidden)
```

### 6.2 Handling Immersive Learning Loops (`/study/[nodeId]`, `/quiz/[nodeId]`)
When a student enters a Story Flashcard run (`/study/[nodeId]`) or Blind Quiz run (`/quiz/[nodeId]`), the standard bottom navigation bar and desktop sidebar must not compete with thumb-zone quiz action buttons (`Check Answer`, `Got It! Next`).

`AppShell` detects whether the current path is an immersive route:
```tsx
const isImmersive = pathname.startsWith('/study') || pathname.startsWith('/quiz');
```
If `isImmersive === true`:
- Bottom Navigation Dock is **hidden**.
- Desktop Sidebar is **hidden**.
- Top HUD switches to an **Immersive Study Bar** showing back/close button, unit title, hearts, and segmented progress indicators.

### 6.3 Concrete Blueprint for `AppShell.tsx`

#### `src/components/layout/AppShell.tsx`
```tsx
'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { TopHud } from '@/components/hud/TopHud';
import { DesktopSidebar } from '@/components/navigation/DesktopSidebar';
import { MobileBottomNav } from '@/components/navigation/MobileBottomNav';
import { GuidedFlowModal } from '@/components/GuidedFlowModal';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Detect whether current route is an immersive micro-learning session
  const isImmersive = pathname.startsWith('/study') || pathname.startsWith('/quiz');

  // If in immersive session, allow child to manage full viewport
  if (isImmersive) {
    return (
      <div className="min-h-screen bg-canvas text-foreground flex flex-col">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-foreground flex">
      {/* 1. Desktop Left Rail (>= 1024px) */}
      <DesktopSidebar onOpenSettingsModal={() => setIsSettingsOpen(true)} />

      {/* 2. Main Viewport Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Persistent Top HUD */}
        <TopHud
          onOpenSettingsModal={() => setIsSettingsOpen(true)}
        />

        {/* Main Content Area: padded at bottom for 64px mobile dock */}
        <main className="flex-1 pb-20 lg:pb-8">
          {children}
        </main>

        {/* 3. Mobile Thumb-Zone Bottom Navigation Bar (< 1024px, 64px height) */}
        <MobileBottomNav onOpenSettingsModal={() => setIsSettingsOpen(true)} />
      </div>

      {/* Global Guided Setup / Settings Modal */}
      <GuidedFlowModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
```

### 6.4 `src/app/layout.tsx` Integration
Updating `src/app/layout.tsx` to wrap `{children}` in `<AppShell>`:
```tsx
import type { Metadata } from 'next';
import './globals.css';
import { ProgressProvider } from '@/context/ProgressContext';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'O/L ICT Master Prep | Gamified Dual-Medium Platform',
  description: 'Duolingo-style micro-learning web app for Sri Lankan G.C.E. O/L Grade 10 & 11 ICT with interactive sandboxes & past papers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        <ProgressProvider>
          <AppShell>
            {children}
          </AppShell>
        </ProgressProvider>
      </body>
    </html>
  );
}
```

---

## 7. State Economy & Interface Contract Alignment

M1 Explorer 1 is designing the persistent Zustand store (`src/lib/store.ts`) and heart life economy. Our Top HUD and Navigation components require the following store properties and actions:

```typescript
export interface ShellGameState {
  // User Profile
  grade: '10' | '11';
  language: 'en' | 'si' | 'dual';
  streak: number;
  lastStudyDate: string;
  xp: number;

  // Life Economy
  hearts: number; // 0 to 5
  lastHeartLossTime: number | null; // epoch ms
  nextHeartRechargeInSeconds: number; // real-time countdown

  // Preferences
  colorMode: 'light' | 'dark';
  isSoundMuted: boolean;

  // Navigation Actions
  setGrade: (grade: '10' | '11') => void;
  setLanguage: (lang: 'en' | 'si' | 'dual') => void;
  deductHeart: () => boolean;
  restoreHearts: () => void;
  toggleColorMode: () => void;
  toggleSound: () => void;
}
```

### Heart Regeneration Lifecycle
1. When `deductHeart()` is called on quiz error:
   - If `hearts === 5`: sets `hearts = 4` and records `lastHeartLossTime = Date.now()`.
   - If `hearts < 5`: decrements `hearts` without modifying existing `lastHeartLossTime` so the 30-min recharge cycle for the earliest lost heart is uninterrupted.
2. In `HeartMeter.tsx`:
   - Calculates time remaining until `lastHeartLossTime + (30 * 60 * 1000)`.
   - Fires tick every 1000ms.
   - When countdown reaches 0, invokes store `restoreHeart()`, incrementing `hearts` by 1 and setting `lastHeartLossTime = hearts < 4 ? Date.now() : null`.

---

## 8. Implementation Steps & Verification Checklist

### 8.1 Implementation Sequence (for M1 Developer)
1. **Create Directory Structure**:
   - `src/components/hud/`
   - `src/components/navigation/`
   - `src/components/layout/`
2. **Build HUD Sub-components**:
   - Create `GradeSwitcher.tsx` with instant 10 vs 11 toggle.
   - Create `HeartMeter.tsx` with 5 hearts and 30-min countdown.
   - Create `StreakBadge.tsx` and `XpCounter.tsx`.
   - Assemble `TopHud.tsx`.
3. **Build Navigation Components**:
   - Create `MobileBottomNav.tsx` with 64px height (`h-16`), 4 grid columns, `>= 48px` touch targets, and `pb-[env(safe-area-inset-bottom)]`.
   - Create `DesktopSidebar.tsx` with collapsible states (`w-64` / `w-20`), localStorage preference persistence, and smooth 300ms CSS transition.
4. **Build Layout Shell**:
   - Create `AppShell.tsx` coordinating Top HUD, Desktop Sidebar, and Mobile Bottom Nav.
   - Wire `AppShell` into `src/app/layout.tsx`.
   - Clean up duplicate `<Header />` and `<MobileBottomDock />` references in `src/app/page.tsx` and `src/app/analytics/page.tsx`.
5. **Run Validation**:
   - Run `npm run build` to verify type safety and compilation.
   - Run viewport testing at 360px, 412px, 768px, 1024px, and 1440px.

### 8.2 Verification Matrix

| Test Case | Target Dimension | Expected Result | Pass Criteria |
|---|---|---|---|
| **Zero Horizontal Scroll** | Mobile Viewport: 360px & 412px | Window scroll width equals window inner width (`document.documentElement.scrollWidth === window.innerWidth`). | No horizontal scrollbar, zero clipped content. |
| **Mobile Nav Height & Targets** | Mobile Viewport: 375px | `MobileBottomNav` container height is exactly 64px (`h-16`). All 4 interactive tab elements have bounding boxes >= 48px height and width. | Bounding box height >= 48px, width >= 80px. |
| **Desktop Rail Handover** | Breakpoint: 1023px vs 1024px | At 1023px, `DesktopSidebar` is unrendered/hidden, `MobileBottomNav` is visible.<br>At 1024px, `MobileBottomNav` is hidden, `DesktopSidebar` is visible. | Clean handover without visual flash. |
| **Rail Collapse & Expand** | Desktop Viewport: 1280px | Clicking collapse button shrinks sidebar from 256px (`w-64`) to 80px (`w-20`) with smooth 300ms animation. State survives reload. | Smooth animation, localStorage key `ict_rail_collapsed_v1` saved. |
| **Grade Switcher Reactivity** | Any viewport | Clicking "11" instantly toggles active grade in HUD and updates Quest Map without page reload. | Immediate DOM state update, sound effect plays. |
| **Live 30-Min Heart Countdown** | Any viewport when hearts < 5 | Timer ticks down every second (`29:59` -> `29:58`). When timer reaches zero, heart increments by 1. | Deterministic countdown, no drift. |

---

## 9. Conclusion

This strategy provides an exact, production-ready blueprint for Milestone 1's HUD and Navigation systems. By modularizing the Top HUD into clean subcomponents, enforcing strict 64px / >=48px standards on the Mobile Bottom Nav, introducing the Desktop Collapsible Left Rail, and unifying them via `AppShell.tsx`, the application will deliver a world-class, Duolingo-grade micro-learning user experience.
