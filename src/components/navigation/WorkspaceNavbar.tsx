'use client';

import React, { useState, useEffect, useMemo, useRef, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  Sparkles,
  Search,
  Flame,
  Zap,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Languages,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  FileText,
  BarChart2,
  CornerDownLeft,
  Layers,
  Swords,
} from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { sound } from '@/utils/soundEffects';
import { LanguageMode } from '@/types/store';
import { HeartMeter } from '@/components/hud/HeartMeter';
import { ZeroPenaltyRefillModal } from '@/components/hud/ZeroPenaltyRefillModal';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface WorkspaceNavbarProps {
  className?: string;
  onOpenCommandPalette?: () => void;
  onToggleMobileDrawer?: () => void;
  breadcrumb?: BreadcrumbItem[];
}

export function WorkspaceNavbar({
  className = '',
  onOpenCommandPalette,
  onToggleMobileDrawer,
  breadcrumb: customBreadcrumb,
}: WorkspaceNavbarProps) {
  // Navigation hooks with SSR/test safety
  const router = useContext(AppRouterContext);
  const rawPathname = usePathname();
  const pathname = rawPathname || '';

  // Store bindings
  const streak = useGameStore((s) => s.streak);
  const xp = useGameStore((s) => s.xp);
  const languageMode = useGameStore((s) => s.languageMode || (s.language === 'si' ? 'si' : 'en'));
  const setLanguageMode = useGameStore((s) => s.setLanguageMode);
  const colorMode = useGameStore((s) => s.colorMode);
  const toggleColorMode = useGameStore((s) => s.toggleColorMode);
  const isAudioMuted = useGameStore((s) => s.isAudioMuted);
  const toggleAudioMuted = useGameStore((s) => s.toggleAudioMuted);
  const isMobileDrawerOpen = useGameStore((s) => s.isMobileDrawerOpen);
  const toggleMobileDrawer = useGameStore((s) => s.toggleMobileDrawer);
  const fontSizeZoom = useGameStore((s) => s.fontSizeZoom ?? 100);
  const setFontSizeZoom = useGameStore((s) => s.setFontSizeZoom);
  const isDataSaver = useGameStore((s) => s.isDataSaver ?? false);
  const toggleDataSaver = useGameStore((s) => s.toggleDataSaver);

  // Command palette & Refill modal state
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isRefillModalOpen, setIsRefillModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Hydration safety
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Global keyboard shortcut listener: ⌘K / Ctrl+K and custom event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick(700);
        if (onOpenCommandPalette) {
          onOpenCommandPalette();
        } else {
          setIsCommandOpen((prev) => !prev);
        }
      } else if (e.key === 'Escape' && isCommandOpen) {
        setIsCommandOpen(false);
      }
    };

    const handleCustomOpen = () => {
      sound.playClick(700);
      if (onOpenCommandPalette) {
        onOpenCommandPalette();
      } else {
        setIsCommandOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isCommandOpen, onOpenCommandPalette]);

  // Focus search input on open
  useEffect(() => {
    if (isCommandOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isCommandOpen]);

  // Close command palette and mobile drawer on route change
  useEffect(() => {
    setIsCommandOpen(false);
    useGameStore.getState().setMobileDrawerOpen(false);
  }, [pathname]);

  // Drawer toggle handler
  const handleToggleDrawer = () => {
    sound.playClick(550);
    if (onToggleMobileDrawer) {
      onToggleMobileDrawer();
    } else {
      toggleMobileDrawer();
    }
  };

  // Language switcher handlers (setLanguageMode properly syncs both languageMode and language)
  const handleSetLanguage = (mode: LanguageMode) => {
    sound.playClick(600);
    setLanguageMode(mode);
  };

  const cycleLanguage = () => {
    sound.playClick(600);
    const nextMode: LanguageMode =
      languageMode === 'dual' ? 'en' : languageMode === 'en' ? 'si' : 'dual';
    setLanguageMode(nextMode);
  };

  // Sound mute toggle
  const handleToggleMute = () => {
    toggleAudioMuted();
  };

  // Theme toggle
  const handleToggleTheme = () => {
    sound.playClick(500);
    toggleColorMode();
  };

  // Trigger search modal
  const handleTriggerSearch = () => {
    sound.playClick(700);
    if (onOpenCommandPalette) {
      onOpenCommandPalette();
    } else {
      setIsCommandOpen(true);
    }
  };

  // Dynamic breadcrumb generation
  const resolvedBreadcrumb = useMemo<BreadcrumbItem[]>(() => {
    if (customBreadcrumb && customBreadcrumb.length > 0) {
      return customBreadcrumb;
    }

    if (!pathname || pathname === '/') {
      return [{ label: 'Curriculum Roadmap' }];
    }

    if (pathname.startsWith('/lesson/')) {
      const parts = pathname.split('/').filter(Boolean); // ['lesson', grade, lessonId]
      const grade = parts[1] || '10';
      const lessonId = parts[2] || '';
      const unit = CURRICULUM_DATA.find((u) => u.id === lessonId);
      const unitTitle = unit
        ? `Unit ${unit.unitNumber}: ${unit.titleEn}`
        : lessonId || 'Lesson';

      return [
        { label: `Grade ${grade}`, href: '/#curriculum' },
        { label: unitTitle },
      ];
    }

    if (pathname.startsWith('/revision-sheet/')) {
      const parts = pathname.split('/').filter(Boolean);
      const grade = parts[1] || '10';
      const lessonId = parts[2] || '';
      const unit = CURRICULUM_DATA.find((u) => u.id === lessonId);
      const unitTitle = unit ? `Unit ${unit.unitNumber}` : lessonId;

      return [
        { label: `Grade ${grade}`, href: '/#curriculum' },
        { label: `${unitTitle} Notes` },
      ];
    }

    if (pathname.startsWith('/study/') || pathname.startsWith('/quiz/')) {
      const parts = pathname.split('/').filter(Boolean);
      const nodeId = parts[1] || '';
      const isQuiz = pathname.startsWith('/quiz/');

      return [
        { label: 'Practice Lab', href: '/' },
        { label: isQuiz ? `Quiz Checkpoint (${nodeId})` : `Study Node (${nodeId})` },
      ];
    }

    if (pathname === '/papers') {
      return [
        { label: 'Roadmap', href: '/' },
        { label: 'Past Paper Arena (2020–2025)' },
      ];
    }

    if (pathname === '/analytics') {
      return [
        { label: 'Roadmap', href: '/' },
        { label: 'Progress & Mastery' },
      ];
    }

    return [{ label: 'Workspace' }];
  }, [pathname, customBreadcrumb]);

  // Command palette search results
  const searchResults = useMemo(() => {
    if (!isCommandOpen) return [];
    const q = searchQuery.trim().toLowerCase();
    const queryTokens = q ? q.split(/\s+/).filter(Boolean) : [];

    const items: Array<{
      id: string;
      title: string;
      subtitle: string;
      badge: string;
      href: string;
      icon: React.ElementType;
    }> = [];

    // Curriculum units (Linear Lessons)
    CURRICULUM_DATA.forEach((unit) => {
      const displayUnitNumber = unit.grade === '11' ? unit.unitNumber + 9 : unit.unitNumber;
      const titleEn = unit.titleEn.toLowerCase();
      const titleSi = unit.titleSi.toLowerCase();
      const descEn = (unit.shortDescEn || '').toLowerCase();
      const hasCompetencyMatch =
        queryTokens.length > 0 &&
        unit.keyCompetencies?.some((kc) =>
          queryTokens.every(
            (token) =>
              kc.en.toLowerCase().includes(token) ||
              kc.si.toLowerCase().includes(token)
          )
        );

      const matches =
        !q ||
        titleEn.includes(q) ||
        titleSi.includes(q) ||
        descEn.includes(q) ||
        `unit ${unit.unitNumber}`.includes(q) ||
        `unit ${displayUnitNumber}`.includes(q) ||
        `u${unit.unitNumber}`.includes(q) ||
        `u${displayUnitNumber}`.includes(q) ||
        `grade ${unit.grade}`.includes(q) ||
        hasCompetencyMatch ||
        (queryTokens.length > 0 &&
          queryTokens.every(
            (token) =>
              titleEn.includes(token) ||
              titleSi.includes(token) ||
              descEn.includes(token) ||
              `unit ${unit.unitNumber}`.includes(token) ||
              `unit ${displayUnitNumber}`.includes(token) ||
              `grade ${unit.grade}`.includes(token)
          ));

      if (matches) {
        items.push({
          id: unit.id,
          title: `Unit ${displayUnitNumber}: ${unit.titleEn}`,
          subtitle: unit.grade === '11' ? `Grade 11 Unit ${unit.unitNumber} • ${unit.titleSi}` : unit.titleSi,
          badge: `Grade ${unit.grade}`,
          href: `/lesson/${unit.grade}/${unit.id}`,
          icon: BookOpen,
        });

        // Unit-specific Question Bank shortcut when searching questions, bank, or unit
        if (
          q &&
          (q.includes('bank') ||
            q.includes('question') ||
            q.includes('mcq') ||
            q.includes('practice') ||
            q.includes(unit.id) ||
            `unit ${displayUnitNumber}`.includes(q) ||
            `unit ${unit.unitNumber}`.includes(q))
        ) {
          items.push({
            id: `bank-${unit.id}`,
            title: `Unit ${displayUnitNumber} Question Bank: ${unit.titleEn}`,
            subtitle: `Practice dual-medium bank • ${unit.titleSi}`,
            badge: `G${unit.grade} Bank`,
            href: `/papers?tab=bank&unit=${unit.id}&mode=practice`,
            icon: Layers,
          });
        }
      }
    });

    // Top-level Question Bank Entry
    if (
      !q ||
      'question bank questions textbook drill mcq'.includes(q) ||
      queryTokens.some((t) => 'bank question questions mcq 842'.includes(t))
    ) {
      items.push({
        id: 'full-question-bank',
        title: 'Full Question Bank (842 Questions)',
        subtitle: 'Dual-medium textbook practice questions across all 15 curriculum units',
        badge: 'Question Bank',
        href: '/papers?tab=bank',
        icon: Layers,
      });
    }

    // Top-level Past Papers Arena Entry
    if (
      !q ||
      'past papers exam examination arena official gauntlet'.includes(q) ||
      queryTokens.some((t) => 'past papers exam arena 168'.includes(t))
    ) {
      items.push({
        id: 'papers-arena',
        title: 'Official Past Papers Arena (2020–2025)',
        subtitle: '6 official O/L exam sessions with 168 authentic questions',
        badge: 'Exam Arena',
        href: '/papers?tab=papers',
        icon: Swords,
      });
    }

    // Past paper years (2020–2025)
    ['2025', '2024', '2023', '2022', '2021', '2020'].forEach((year) => {
      const paperTitle = `o/l ict ${year} past paper (paper i & ii)`.toLowerCase();
      const matches =
        !q ||
        year.includes(q) ||
        paperTitle.includes(q) ||
        (queryTokens.length > 0 &&
          queryTokens.every(
            (token) =>
              year.includes(token) ||
              paperTitle.includes(token) ||
              'past papers exam examination ol ict mcq practice timed structured'.includes(token)
          ));

      if (matches) {
        items.push({
          id: `paper-${year}`,
          title: `O/L ICT ${year} Past Paper (Paper I & II)`,
          subtitle: 'Official Sri Lankan G.C.E. O/L Examination',
          badge: year,
          href: `/papers?year=${year}`,
          icon: FileText,
        });

        // Deep link into Timed Exam Mode or Practice Mode when explicitly queried
        if (q && (q.includes('time') || q.includes('exam') || q.includes('60'))) {
          items.push({
            id: `paper-${year}-timed`,
            title: `O/L ICT ${year} Timed Exam (60-Min)`,
            subtitle: `Timed simulation with student scratchpad • ${year}`,
            badge: `${year} Timed`,
            href: `/papers?year=${year}&mode=timed`,
            icon: Swords,
          });
        } else if (q && (q.includes('practice') || q.includes('mcq'))) {
          items.push({
            id: `paper-${year}-practice`,
            title: `O/L ICT ${year} Practice Mode`,
            subtitle: `Instant feedback & explanations • ${year}`,
            badge: `${year} Practice`,
            href: `/papers?year=${year}&mode=practice`,
            icon: Swords,
          });
        }
      }
    });

    // Analytics
    if (!q || 'analytics'.includes(q) || 'progress'.includes(q) || 'mastery'.includes(q)) {
      items.push({
        id: 'analytics',
        title: 'Mastery & Coverage Analytics',
        subtitle: 'Track competencies, accuracy, and study streaks',
        badge: 'Progress',
        href: '/analytics',
        icon: BarChart2,
      });
    }

    if (!q) {
      // Balanced curated list when search modal is initially opened
      const curriculumSample = items.filter((i) => i.id.startsWith('g10-') || i.id.startsWith('g11-')).slice(0, 3);
      const papersSample = items.filter((i) => i.id.startsWith('paper-')).slice(0, 3);
      const bankItem = items.filter((i) => i.id === 'full-question-bank');
      const arenaItem = items.filter((i) => i.id === 'papers-arena');
      const analyticsSample = items.filter((i) => i.id === 'analytics');
      return [...curriculumSample, ...papersSample, ...bankItem, ...arenaItem, ...analyticsSample];
    }

    return items.slice(0, 10);
  }, [isCommandOpen, searchQuery]);

  // Handle Command Palette item selection
  const handleSelectSearchResult = (href: string) => {
    sound.playClick(650);
    setIsCommandOpen(false);
    if (router) {
      router.push(href);
    } else if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsCommandOpen(false);
      return;
    }

    if (searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = searchResults[selectedIndex];
      if (target) {
        handleSelectSearchResult(target.href);
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors select-none ${className}`}
        aria-label="Universal Workspace Navigation"
      >
        <div className="h-14 w-full px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* ================= LEFT SECTION: Mobile Drawer Toggle + Logo + Breadcrumb ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 shrink-0">
            {/* Mobile Syllabus Drawer Hamburger (< 1024px) */}
            <button
              type="button"
              onClick={handleToggleDrawer}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Syllabus Drawer"
              aria-label="Toggle Syllabus Drawer"
            >
              {isMobileDrawerOpen ? (
                <X className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* App Brand Logo */}
            <Link
              href="/"
              onClick={() => sound.playClick(600)}
              className="flex items-center gap-2 group shrink-0"
              title="Curriculum Roadmap"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline font-black text-sm tracking-tight text-slate-900 dark:text-white">
                ICT <span className="text-indigo-600 dark:text-indigo-400">Master</span>
              </span>
            </Link>

            {/* Clean Desktop Breadcrumb (≥ 1024px) */}
            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 pl-3 border-l border-slate-200 dark:border-slate-800 ml-1 truncate max-w-[280px] xl:max-w-[360px]"
            >
              {resolvedBreadcrumb.map((item, index) => {
                const isLast = index === resolvedBreadcrumb.length - 1;
                return (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
                    )}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        onClick={() => sound.playClick(500)}
                        className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors truncate"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={`truncate ${
                          isLast
                            ? 'font-semibold text-slate-800 dark:text-slate-200'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                        title={item.label}
                      >
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>

          {/* ================= CENTER SECTION: Universal Search Trigger (⌘K) ================= */}
          <div className="flex-1 flex justify-center max-w-md px-1 sm:px-2">
            <button
              type="button"
              data-testid="universal-search-trigger"
              onClick={handleTriggerSearch}
              className="w-full flex items-center justify-between gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-2xs group cursor-pointer"
              aria-label="Universal Search (Command + K)"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors shrink-0" />
                <span className="truncate text-left text-slate-500 dark:text-slate-400">
                  <span className="hidden sm:inline">Search topics, past papers...</span>
                  <span className="sm:hidden">Search...</span>
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-bold bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 select-none">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* ================= RIGHT UTILITY CLUSTER: Global Metadata & Preferences ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Gentle Exam Countdown Pill */}
            <span
              className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 select-none"
              title="Target Sri Lankan G.C.E. O/L ICT Examination Window"
            >
              🌱 O/L Exam: ~210d • Stay Calm & Consistent
            </span>

            {/* Heart Economy Life Meter with Zero-Penalty Quick Refill */}
            <HeartMeter onDepletedClick={() => setIsRefillModalOpen(true)} />

            {/* Font Size Zoom Stepper */}
            <div className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-[11px] font-bold select-none">
              <button
                type="button"
                onClick={() => setFontSizeZoom(Math.max(90, fontSizeZoom - 10))}
                className="px-1.5 py-0.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                title="Decrease Font Size"
              >
                A-
              </button>
              <span className="font-mono text-[10px] text-slate-400 px-0.5">{fontSizeZoom}%</span>
              <button
                type="button"
                onClick={() => setFontSizeZoom(Math.min(130, fontSizeZoom + 10))}
                className="px-1.5 py-0.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                title="Increase Font Size"
              >
                A+
              </button>
            </div>

            {/* Data Saver Mode Toggle (#50) */}
            <button
              type="button"
              onClick={toggleDataSaver}
              className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border transition-colors select-none ${
                isDataSaver
                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isDataSaver ? 'Data Saver Active (Animations Minimized)' : 'Enable Data Saver Mode'}
              aria-label="Toggle Data Saver Mode"
            >
              <span>{isDataSaver ? '⚡ Lite ON' : '⚡ Lite'}</span>
            </button>

            {/* Streak & XP Counter Compact Pill */}
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold select-none shadow-2xs"
              title={`${streak} Day Study Streak • ${xp.toLocaleString()} Total XP`}
            >
              {/* Streak Flame */}
              <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Flame
                  className={`w-3.5 h-3.5 ${
                    streak > 0
                      ? 'fill-amber-500 text-amber-500 animate-pulse'
                      : 'text-slate-400'
                  }`}
                />
                <span className="font-mono font-black">{streak}</span>
              </div>

              {/* Pill Divider */}
              <div className="w-px h-3 bg-slate-300 dark:bg-slate-700" />

              {/* XP Counter */}
              <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                <span className="font-mono font-black">
                  {xp.toLocaleString()}
                </span>
                <span className="hidden md:inline text-[10px] font-bold text-indigo-400/80 font-sans">
                  XP
                </span>
              </div>
            </div>

            {/* Language Toggle: Segmented Pill on Desktop, Cycle Button on Mobile */}
            <div className="hidden sm:inline-flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-xs font-bold select-none">
              <button
                type="button"
                onClick={() => handleSetLanguage('dual')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  languageMode === 'dual'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-2xs font-extrabold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Dual-Sync Medium (English + Sinhala)"
              >
                Dual
              </button>
              <button
                type="button"
                onClick={() => handleSetLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  languageMode === 'en'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-2xs font-extrabold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="English Only"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleSetLanguage('si')}
                className={`px-2 py-0.5 rounded-full font-sinhala transition-all ${
                  languageMode === 'si'
                    ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 shadow-2xs font-extrabold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="සිංහල පමණි"
              >
                සිං
              </button>
            </div>

            {/* Mobile Language Cycle Button (< 640px) */}
            <button
              type="button"
              onClick={cycleLanguage}
              className="sm:hidden inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 select-none"
              title="Switch Language Medium"
              aria-label="Switch Language Medium"
            >
              <Languages className="w-3.5 h-3.5 text-indigo-500" />
              <span className="font-mono text-[11px]">
                {languageMode === 'si' ? 'සිං' : languageMode === 'en' ? 'EN' : 'DUAL'}
              </span>
            </button>

            {/* Audio Mute / Unmute Toggle */}
            <button
              type="button"
              data-testid="navbar-audio-mute-toggle"
              onClick={handleToggleMute}
              className={`p-1.5 sm:p-2 rounded-xl transition-colors select-none ${
                isAudioMuted
                  ? 'text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 bg-rose-50/60 dark:bg-rose-950/30'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isAudioMuted ? 'Unmute Audio (Game Sounds)' : 'Mute Audio (Game Sounds)'}
              aria-label={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isAudioMuted ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Theme Toggle (Light / Dark) */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors select-none"
              title={colorMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Light / Dark Theme"
            >
              {colorMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* ================= UNIVERSAL SEARCH / COMMAND PALETTE MODAL (⌘K) ================= */}
      {isCommandOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Universal Search Command Palette"
          data-testid="command-palette-modal"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-150"
          onClick={() => setIsCommandOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-5 h-5 text-indigo-500 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                data-testid="command-palette-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleSearchKeyDown}
                placeholder="Type a unit name, topic, or past paper year..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setIsCommandOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Search Filter Chips (Thumb-Zone Ergonomics #8) */}
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 overflow-x-auto scrollbar-none text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">Quick:</span>
              {['Binary', 'Logic Gates', 'HTML', 'Pascal', 'Networking', 'SDLC', '2024 Paper'].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setSearchQuery(chip);
                    setSelectedIndex(0);
                  }}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-semibold whitespace-nowrap transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 space-y-1">
              {searchResults.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-sm">
                  No matching topics or papers found for &quot;{searchQuery}&quot;.
                </div>
              ) : (
                searchResults.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSearchResult(item.href)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs sm:text-sm font-bold truncate">{item.title}</p>
                          <p className="text-[11px] text-slate-400 truncate">{item.subtitle}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {item.badge}
                        </span>
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-2">
                <span>Navigate: <kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↑</kbd> <kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↓</kbd></span>
                <span>Select: <kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↵</kbd></span>
              </span>
              <span>ESC to dismiss</span>
            </div>
          </div>
        </div>
      )}

      {/* Zero-Penalty Quick Theory Refill Modal (Anti-Burnout #9) */}
      <ZeroPenaltyRefillModal
        isOpen={isRefillModalOpen}
        onClose={() => setIsRefillModalOpen(false)}
      />
    </>
  );
}

