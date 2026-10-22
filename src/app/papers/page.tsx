'use client';

import React, { useState, useMemo, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Clock,
  BookOpen,
  Search,
  Sparkles,
  Trophy,
  Layers,
  Swords,
  Calendar,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Check,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  Play,
  RotateCcw,
} from 'lucide-react';
import {
  UNIFIED_PAST_PAPERS,
  ALL_CURRICULUM_QUESTIONS,
  UnifiedPastPaperQuestion,
} from '@/data/unifiedPastPapers';
import { CURRICULUM_DATA, LessonMeta } from '@/data/curriculum';
import { MASTER_QUESTION_BANKS } from '@/data/questionBanks';
import { PracticeExamRunner } from '@/components/papers/PracticeExamRunner';
import { TimedExamRunner } from '@/components/papers/TimedExamRunner';
import { ExamBossArena, PastPaperItem } from '@/components/study/ExamBossArena';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';

const OFFICIAL_YEARS = ['2025', '2024', '2023', '2022', '2021', '2020'];

function PastPapersContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const yearParam = searchParams.get('year');
  const tabParam = searchParams.get('tab');
  const unitParam = searchParams.get('unit');
  const modeParam = searchParams.get('mode');

  // Zustand store bindings
  const language = useGameStore((s) => s.language);
  const pastPaperAnswers = useGameStore((s) => s.pastPaperAnswers);
  const recordPastPaperAttempt = useGameStore((s) => s.recordPastPaperAttempt);
  const addXp = useGameStore((s) => s.addXp);
  const mistakeVault = useGameStore((s) => s.mistakeVault || []);

  // Active top-level tab: 'papers' | 'bank'
  const [activeTab, setActiveTab] = useState<'papers' | 'bank'>('papers');
  const [vaultFilter, setVaultFilter] = useState<'all' | 'mistakes'>('all');

  // Selected past paper year (null = overview of 6 year cards)
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Exam mode for past papers: 'practice' | 'timed' | 'boss'
  const [activeMode, setActiveMode] = useState<'practice' | 'timed' | 'boss'>('practice');

  // Question Bank view state
  const [bankSearchQuery, setBankSearchQuery] = useState<string>('');
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
  const [bankPracticeUnitId, setBankPracticeUnitId] = useState<string | null>(null);

  // Boss arena local state for rubric gauntlet
  const [bossAnswers, setBossAnswers] = useState<Record<string, string>>({});
  const [bossSubmitted, setBossSubmitted] = useState<Record<string, boolean>>({});

  // URL sync helper that updates browser history without page reload
  const updateUrl = useCallback((params: Record<string, string | null>) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
      }
    });
    window.history.pushState(null, '', url.pathname + (url.search ? url.search : ''));
  }, []);

  // Synchronize state with URL search parameters on mount / router navigation
  useEffect(() => {
    setActiveTab(tabParam === 'bank' ? 'bank' : 'papers');

    if (yearParam && OFFICIAL_YEARS.includes(yearParam)) {
      setSelectedYear(yearParam);
    } else {
      setSelectedYear(null);
    }

    if (modeParam === 'timed' || modeParam === 'practice' || modeParam === 'boss') {
      setActiveMode(modeParam);
    } else {
      setActiveMode('practice');
    }

    if (unitParam) {
      if (modeParam === 'practice') {
        setBankPracticeUnitId(unitParam);
      } else {
        setBankPracticeUnitId(null);
        setExpandedUnits((prev) => new Set(prev).add(unitParam));
      }
    } else {
      setBankPracticeUnitId(null);
    }
  }, [yearParam, tabParam, unitParam, modeParam]);

  // Synchronize state on native browser Back / Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const y = params.get('year');
      const t = params.get('tab');
      const u = params.get('unit');
      const m = params.get('mode');

      setActiveTab(t === 'bank' ? 'bank' : 'papers');
      setSelectedYear(y && OFFICIAL_YEARS.includes(y) ? y : null);
      setActiveMode(m === 'timed' || m === 'practice' || m === 'boss' ? m : 'practice');
      if (u) {
        if (m === 'practice') {
          setBankPracticeUnitId(u);
        } else {
          setBankPracticeUnitId(null);
          setExpandedUnits((prev) => new Set(prev).add(u));
        }
      } else {
        setBankPracticeUnitId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Tab switcher handler
  const handleTabChange = (tab: 'papers' | 'bank') => {
    sound.playClick(600);
    setActiveTab(tab);
    if (tab === 'papers') {
      updateUrl({
        tab: 'papers',
        year: selectedYear,
        unit: null,
        mode: selectedYear ? activeMode : null,
      });
    } else {
      updateUrl({
        tab: 'bank',
        year: null,
        unit: bankPracticeUnitId,
        mode: bankPracticeUnitId ? 'practice' : null,
      });
    }
  };

  // Launch Year Exam Arena from a Year Card
  const handleOpenYear = (year: string, mode: 'practice' | 'timed') => {
    sound.playClick(700);
    setSelectedYear(year);
    setActiveMode(mode);
    setActiveTab('papers');
    updateUrl({ year, tab: 'papers', mode, unit: null });
  };

  // Return from active Year Exam Arena back to 6 Year Cards overview
  const handleBackToAllPapers = () => {
    sound.playClick(500);
    setSelectedYear(null);
    updateUrl({ year: null, tab: 'papers', mode: null });
  };

  // Switch mode inside the active year arena
  const handleModeChange = (mode: 'practice' | 'timed' | 'boss') => {
    sound.playClick(650);
    setActiveMode(mode);
    if (selectedYear) {
      updateUrl({ year: selectedYear, tab: 'papers', mode });
    }
  };

  // Launch Question Bank practice mode for a specific unit
  const handleLaunchBankUnitPractice = (unitId: string) => {
    sound.playClick(700);
    setBankPracticeUnitId(unitId);
    setActiveTab('bank');
    updateUrl({ tab: 'bank', unit: unitId, mode: 'practice' });
  };

  // Return from Question Bank practice back to accordion list
  const handleBackToBankList = () => {
    sound.playClick(500);
    setBankPracticeUnitId(null);
    updateUrl({ tab: 'bank', unit: null, mode: null });
  };

  // Toggle unit accordion expansion
  const toggleUnitAccordion = (unitId: string) => {
    sound.playClick(550);
    setExpandedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) {
        next.delete(unitId);
      } else {
        next.add(unitId);
      }
      return next;
    });
  };

  // Questions for the currently selected year (100% preservation from UNIFIED_PAST_PAPERS)
  const selectedYearQuestions = useMemo<UnifiedPastPaperQuestion[]>(() => {
    if (!selectedYear) return [];
    return UNIFIED_PAST_PAPERS.filter((q) => String(q.year) === selectedYear);
  }, [selectedYear]);

  // Questions mapped to PastPaperItem for ExamBossArena
  const bossGauntletItems = useMemo<PastPaperItem[]>(() => {
    return selectedYearQuestions.map((q) => ({
      id: q.id,
      year: q.year,
      paperType: q.paperType,
      badgeText: q.badgeText,
      questionEn: q.questionEn,
      questionSi: q.questionSi,
      type: q.type,
      options: q.options,
      correctOptionId: q.correctOptionId,
      sampleAnswerEn: q.sampleAnswerEn,
      sampleAnswerSi: q.sampleAnswerSi,
      explanationEn: q.explanationEn,
      explanationSi: q.explanationSi,
    }));
  }, [selectedYearQuestions]);

  // Answer handler for ExamBossArena
  const handleBossAnswerSubmit = (quizId: string, optionId: string, correctOptionId: string) => {
    setBossAnswers((prev) => ({ ...prev, [quizId]: optionId }));
    setBossSubmitted((prev) => ({ ...prev, [quizId]: true }));
    const isCorrect = optionId === correctOptionId;
    recordPastPaperAttempt(quizId, optionId, isCorrect);
    if (isCorrect) {
      sound.playSuccessDing();
      addXp(15);
    } else {
      sound.playError();
    }
  };

  // Questions for currently active bank unit practice session
  const bankPracticeQuestions = useMemo<UnifiedPastPaperQuestion[]>(() => {
    if (!bankPracticeUnitId) return [];
    return ALL_CURRICULUM_QUESTIONS.filter((q) => q.unitId === bankPracticeUnitId);
  }, [bankPracticeUnitId]);

  // Unit metadata map for fast lookup
  const unitMetaMap = useMemo(() => {
    const map = new Map<string, LessonMeta>();
    CURRICULUM_DATA.forEach((u) => map.set(u.id, u));
    return map;
  }, []);

  // Filtered curriculum units in Question Bank based on keyword search
  const filteredBankUnits = useMemo(() => {
    const q = bankSearchQuery.trim().toLowerCase();
    if (!q) return CURRICULUM_DATA;

    return CURRICULUM_DATA.filter((unit) => {
      const displayUnitNumber = unit.grade === '11' ? unit.unitNumber + 9 : unit.unitNumber;
      const titleEn = unit.titleEn.toLowerCase();
      const titleSi = unit.titleSi.toLowerCase();
      const descEn = (unit.shortDescEn || '').toLowerCase();
      const unitNumStr = `unit ${unit.unitNumber}`;
      const displayUnitNumStr = `unit ${displayUnitNumber}`;
      const uStr = `u${unit.unitNumber}`;
      const displayUStr = `u${displayUnitNumber}`;
      const gradeStr = `grade ${unit.grade}`;

      if (
        titleEn.includes(q) ||
        titleSi.includes(q) ||
        descEn.includes(q) ||
        unitNumStr.includes(q) ||
        displayUnitNumStr.includes(q) ||
        uStr.includes(q) ||
        displayUStr.includes(q) ||
        gradeStr.includes(q)
      ) {
        return true;
      }

      // Check if any question in this unit contains search query
      const unitQs = ALL_CURRICULUM_QUESTIONS.filter((item) => item.unitId === unit.id);
      return unitQs.some(
        (item) =>
          item.questionEn.toLowerCase().includes(q) ||
          item.questionSi.toLowerCase().includes(q)
      );
    });
  }, [bankSearchQuery]);

  // Grade 10 & Grade 11 groups for Question Bank accordion
  const grade10Units = useMemo(
    () => filteredBankUnits.filter((u) => u.grade === '10'),
    [filteredBankUnits]
  );
  const grade11Units = useMemo(
    () => filteredBankUnits.filter((u) => u.grade === '11'),
    [filteredBankUnits]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* ============================================================== */}
        {/* TOP-LEVEL SEGMENTED CONTROL: ELIMINATING 7 ROWS OF BUTTON SOUP  */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center text-white shadow-md shrink-0">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                Exam Arena & Question Bank
              </h1>
              <p className="text-xs text-slate-400 font-sinhala">
                {activeTab === 'papers'
                  ? 'අ.පො.ස. සාමාන්‍ය පෙළ පසුගිය විභාග ප්‍රශ්න පත්‍ර (2020–2025) සහ නිල ඇගයීම්'
                  : 'විෂය නිර්දේශයේ ඒකක 15 ප්‍රශ්න සංචිතය (ප්‍රශ්න 842+) සහ පුහුණු අභ්‍යාස'}
              </p>
            </div>
          </div>

          {/* Clean Segmented Control: Past Papers vs Full Question Bank */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleTabChange('papers')}
              className={`flex-1 sm:flex-initial min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'papers'
                  ? 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Official Past Papers (2020–2025)</span>
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('bank')}
              className={`flex-1 sm:flex-initial min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'bank'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Full Question Bank (842)</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW A: OFFICIAL PAST PAPERS (2020–2025)                        */}
        {/* ============================================================== */}
        {activeTab === 'papers' && (
          <div className="space-y-6">

            {/* CASE A1: OVERVIEW OF 6 CLEAN YEAR CARDS (No Year Selected) */}
            {!selectedYear && (
              <div className="space-y-6">
                {/* Hero Briefing Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Official Sri Lankan G.C.E. O/L ICT Papers • 168 Questions</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Select an Examination Year to Begin
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-sinhala leading-relaxed max-w-3xl">
                    2020 සිට 2025 දක්වා පැවති අධ්‍යාපන අමාත්‍යාංශයේ සහ විභාග දෙපාර්තමේන්තුවේ නිල ප්‍රශ්න පත්‍ර I (MCQ) සහ ප්‍රශ්න පත්‍ර II (ව්‍යුහගත) පිළිතුරු ලකුණු ලබාදීමේ නිල පටිපාටිය සමඟ.
                  </p>
                </div>

                {/* Sticky Horizontal Past Paper Filter Chips (Suggestion #43 & #46) */}
                <div className="sticky top-16 z-20 -mx-4 px-4 py-2.5 bg-slate-950/90 backdrop-blur-md border-y border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
                  <span className="text-[11px] font-mono font-bold text-slate-400 shrink-0 uppercase tracking-wider">
                    Filter:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVaultFilter('all')}
                    className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      vaultFilter === 'all'
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span>All Years (2020–2025)</span>
                  </button>

                  {OFFICIAL_YEARS.map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => handleOpenYear(yr, 'practice')}
                      className="min-h-[44px] px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-bold font-mono transition-all shrink-0 cursor-pointer"
                    >
                      <span>{yr} Paper</span>
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setVaultFilter(vaultFilter === 'mistakes' ? 'all' : 'mistakes')}
                    className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      vaultFilter === 'mistakes'
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-950'
                        : 'bg-slate-900 hover:bg-slate-800 text-rose-300 border border-rose-900/40'
                    }`}
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                    <span>Mistake Vault ({mistakeVault.length})</span>
                  </button>
                </div>

                {/* Mistake Vault Active Display */}
                {vaultFilter === 'mistakes' && (
                  <div className="p-5 rounded-3xl bg-rose-950/30 border border-rose-500/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-rose-400" />
                        <h3 className="text-base font-bold text-white">Personal Mistake Vault</h3>
                      </div>
                      <span className="text-xs font-mono text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-xl border border-rose-800/60">
                        {mistakeVault.length} Saved Mistakes
                      </span>
                    </div>
                    {mistakeVault.length === 0 ? (
                      <p className="text-xs text-slate-400 py-4 text-center">
                        No mistake questions recorded yet. Any past paper questions you miss will appear here for targeted revision!
                      </p>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-xs text-slate-300">
                          Review past paper questions you answered incorrectly to strengthen weak areas before the exam:
                        </p>
                        <PracticeExamRunner
                          questions={UNIFIED_PAST_PAPERS.filter((q) => mistakeVault.includes(q.id))}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* 6 High-Contrast Year Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {OFFICIAL_YEARS.map((year) => {
                    const yearQs = UNIFIED_PAST_PAPERS.filter((q) => String(q.year) === year);
                    const totalQs = yearQs.length;
                    const mcqCount = yearQs.filter((q) => q.type === 'mcq').length;
                    const structuredCount = yearQs.filter((q) => q.type === 'structured').length;

                    // Progress calculation from store
                    const attemptedCount = yearQs.filter((q) => pastPaperAnswers[q.id]).length;
                    const correctCount = yearQs.filter(
                      (q) => pastPaperAnswers[q.id]?.isCorrect
                    ).length;
                    const completionPct = totalQs > 0 ? Math.round((attemptedCount / totalQs) * 100) : 0;
                    const accuracyPct =
                      attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

                    return (
                      <motion.div
                        key={year}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 shadow-xl flex flex-col justify-between space-y-5 transition-all"
                      >
                        {/* Card Header */}
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white block">
                                {year}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider block mt-0.5">
                                G.C.E. O/L Examination
                              </span>
                            </div>

                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                              {totalQs} Questions
                            </span>
                          </div>

                          <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
                            {year} අ.පො.ස. සාමාන්‍ය පෙළ නිල විභාග ප්‍රශ්න පත්‍රය (Paper I & II)
                          </p>

                          {/* Question Format Breakdown Pills */}
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                              {mcqCount} Paper I MCQs
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                              {structuredCount} Paper II Structured
                            </span>
                          </div>
                        </div>

                        {/* User Completion / Score Status */}
                        <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-400">Completion Status:</span>
                            {attemptedCount === 0 ? (
                              <span className="text-slate-500 font-bold">Not Started</span>
                            ) : attemptedCount >= totalQs ? (
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> 100% Complete
                              </span>
                            ) : (
                              <span className="text-amber-400 font-bold">
                                {completionPct}% Complete
                              </span>
                            )}
                          </div>

                          {/* Progress bar */}
                          <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${
                                completionPct >= 100
                                  ? 'bg-emerald-500'
                                  : completionPct > 0
                                  ? 'bg-indigo-500'
                                  : 'bg-transparent'
                              }`}
                              style={{ width: `${completionPct}%` }}
                            />
                          </div>

                          {attemptedCount > 0 && (
                            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-0.5">
                              <span>
                                {attemptedCount}/{totalQs} Answered
                              </span>
                              <span className="text-indigo-400 font-bold">
                                Accuracy: {accuracyPct}%
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Two Distinct Action Buttons */}
                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <button
                            type="button"
                            onClick={() => handleOpenYear(year, 'practice')}
                            className="min-h-[44px] px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-indigo-950 active:scale-95"
                          >
                            <BookOpen className="w-3.5 h-3.5 shrink-0" />
                            <span>Practice Mode</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenYear(year, 'timed')}
                            className="min-h-[44px] px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-rose-950 active:scale-95"
                          >
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>Timed 60-Min</span>
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CASE A2: ACTIVE YEAR EXAM ARENA (Year Selected, Clean View) */}
            {selectedYear && (
              <div className="space-y-6">
                {/* Clean Arena Header without nested filter clutter */}
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Prominent Back Button */}
                    <button
                      type="button"
                      onClick={handleBackToAllPapers}
                      className="min-h-[44px] px-3.5 py-2 rounded-2xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <ArrowLeft className="w-4 h-4 text-indigo-400" />
                      <span>← Back to All Papers</span>
                    </button>

                    <div>
                      <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                        <span>O/L ICT {selectedYear} Official Paper</span>
                        <span className="text-xs px-2 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-mono">
                          {selectedYearQuestions.length} Questions
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 font-sinhala">
                        {selectedYear} අ.පො.ස. සාමාන්‍ය පෙළ විභාග ප්‍රශ්න පත්‍ර පරිශීලනය
                      </p>
                    </div>
                  </div>

                  {/* Mode Switcher Segmented Control */}
                  <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950 border border-slate-800 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleModeChange('practice')}
                      className={`flex-1 sm:flex-initial min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        activeMode === 'practice'
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Practice Mode</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModeChange('timed')}
                      className={`flex-1 sm:flex-initial min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        activeMode === 'timed'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Timed 60-Min</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModeChange('boss')}
                      className={`flex-1 sm:flex-initial min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        activeMode === 'boss'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Swords className="w-3.5 h-3.5" />
                      <span>Rubric Arena</span>
                    </button>
                  </div>
                </div>

                {/* Active Mode Runner Container */}
                <div className="pt-2">
                  {activeMode === 'practice' && (
                    <PracticeExamRunner questions={selectedYearQuestions} />
                  )}

                  {activeMode === 'timed' && (
                    <TimedExamRunner
                      questions={selectedYearQuestions}
                      onExit={handleBackToAllPapers}
                    />
                  )}

                  {activeMode === 'boss' && (
                    <ExamBossArena
                      pastPapers={bossGauntletItems}
                      quizAnswers={bossAnswers}
                      quizSubmitted={bossSubmitted}
                      onAnswerSubmit={handleBossAnswerSubmit}
                      languageMode={language}
                      stepBadge={`OFFICIAL O/L ${selectedYear} MARKING RUBRIC GAUNTLET`}
                      title={`O/L ICT ${selectedYear} Rubric Arena & Model Answers`}
                      subtitle={`${selectedYear} නිල ලකුණු ලබාදීමේ පටිපාටිය සහ ආදර්ශ පිළිතුරු විමර්ශනය`}
                    />
                  )}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW B: FULL QUESTION BANK (842 QUESTIONS ACROSS 15 UNITS)      */}
        {/* ============================================================== */}
        {activeTab === 'bank' && (
          <div className="space-y-6">

            {/* CASE B1: PRACTICE MODE FOR A SPECIFIC UNIT */}
            {bankPracticeUnitId && (
              <div className="space-y-6">
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBackToBankList}
                      className="min-h-[44px] px-3.5 py-2 rounded-2xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <ArrowLeft className="w-4 h-4 text-emerald-400" />
                      <span>← Back to Question Bank</span>
                    </button>

                    <div>
                      <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                        <span>
                          {(() => {
                            const meta = unitMetaMap.get(bankPracticeUnitId);
                            if (!meta) return 'Unit Question Bank';
                            const displayNum = meta.grade === '11' ? meta.unitNumber + 9 : meta.unitNumber;
                            return `Unit ${displayNum}: ${meta.titleEn}`;
                          })()}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                          {bankPracticeQuestions.length} Questions
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 font-sinhala">
                        {unitMetaMap.get(bankPracticeUnitId)?.titleSi ||
                          'ඒකක ප්‍රශ්න සංචිත පුහුණු අභ්‍යාස'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Practice Runner for this bank unit */}
                <PracticeExamRunner questions={bankPracticeQuestions} />
              </div>
            )}

            {/* CASE B2: CLEAN ACCORDION LIST OF 15 CURRICULUM UNITS */}
            {!bankPracticeUnitId && (
              <div className="space-y-6">
                {/* Search Bar & Stats Header */}
                <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        <Layers className="w-4 h-4 text-teal-400" />
                        <span>15 Curriculum Units • 842 Dual-Medium Questions</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                        Curriculum Syllabus Question Bank
                      </h2>
                    </div>

                    <div className="text-xs font-mono text-slate-400 self-start sm:self-auto">
                      Total Ingested: <strong className="text-white">842+ Questions</strong>
                    </div>
                  </div>

                  {/* Single Clean Search Input (No Button Soup) */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={bankSearchQuery}
                      onChange={(e) => setBankSearchQuery(e.target.value)}
                      placeholder="Search question bank across all 15 units by topic, keyword, or concept..."
                      className="w-full min-h-[48px] pl-11 pr-4 py-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* GRADE 10 UNITS (Units 1 – 9) */}
                {grade10Units.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-2">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-300">
                        Grade 10 Curriculum Units (Units 1 – 9)
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">
                        ({grade10Units.length} Units)
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {grade10Units.map((unit) => {
                        const isExpanded = expandedUnits.has(unit.id);
                        const unitQs = ALL_CURRICULUM_QUESTIONS.filter(
                          (q) => q.unitId === unit.id
                        );
                        const qCount = unitQs.length;

                        return (
                          <div
                            key={unit.id}
                            className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md transition-all"
                          >
                            {/* Accordion Row Header */}
                            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <span className="w-12 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                                  U{unit.unitNumber.toString().padStart(2, '0')}
                                </span>

                                <div className="min-w-0">
                                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                                    {unit.titleEn}
                                  </h4>
                                  <p className="text-xs text-slate-400 font-sinhala truncate">
                                    {unit.titleSi}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
                                  {qCount} Questions
                                </span>

                                {/* One-Click Launch Button */}
                                <button
                                  type="button"
                                  onClick={() => handleLaunchBankUnitPractice(unit.id)}
                                  className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-emerald-950 active:scale-95"
                                >
                                  <Play className="w-3.5 h-3.5 fill-current" />
                                  <span>Practice Unit</span>
                                </button>

                                {/* Accordion Toggle Button */}
                                <button
                                  type="button"
                                  onClick={() => toggleUnitAccordion(unit.id)}
                                  className="min-h-[40px] w-10 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                                  aria-label={isExpanded ? 'Collapse unit' : 'Expand unit'}
                                >
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Accordion Expanded Details */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="border-t border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-4"
                                >
                                  <div className="space-y-1">
                                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                                      Unit Overview:
                                    </span>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                      {unit.shortDescEn}
                                    </p>
                                    <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
                                      {unit.shortDescSi}
                                    </p>
                                  </div>

                                  {/* Sample Questions Preview */}
                                  <div className="space-y-2 pt-1">
                                    <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold block">
                                      Sample Questions in Bank ({Math.min(unitQs.length, 3)} of {unitQs.length}):
                                    </span>
                                    <div className="space-y-2">
                                      {unitQs.slice(0, 3).map((sq, idx) => (
                                        <div
                                          key={sq.id || idx}
                                          className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-xs space-y-1"
                                        >
                                          <div className="font-semibold text-slate-200">
                                            {sq.questionEn}
                                          </div>
                                          {sq.questionSi && (
                                            <div className="text-[11px] text-slate-400 font-sinhala">
                                              {sq.questionSi}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="pt-2 flex justify-end">
                                    <button
                                      type="button"
                                      onClick={() => handleLaunchBankUnitPractice(unit.id)}
                                      className="min-h-[44px] px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-950 active:scale-95"
                                    >
                                      <Play className="w-4 h-4 fill-current" />
                                      <span>
                                        Launch Full Practice Mode for Unit {unit.unitNumber} ({qCount} Qs) →
                                      </span>
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* GRADE 11 UNITS (Units 10 – 15 / G11 Units 1 – 6) */}
                {grade11Units.length > 0 && (
                  <div className="space-y-3 pt-3">
                    <div className="flex items-center gap-2 px-2">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-300">
                        Grade 11 Curriculum Units (Units 10 – 15)
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">
                        ({grade11Units.length} Units)
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {grade11Units.map((unit) => {
                        const isExpanded = expandedUnits.has(unit.id);
                        const unitQs = ALL_CURRICULUM_QUESTIONS.filter(
                          (q) => q.unitId === unit.id
                        );
                        const qCount = unitQs.length;
                        const displayUnitNumber = unit.unitNumber + 9;

                        return (
                          <div
                            key={unit.id}
                            className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md transition-all"
                          >
                            {/* Accordion Row Header */}
                            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <span className="w-12 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                                  U{displayUnitNumber.toString().padStart(2, '0')}
                                </span>

                                <div className="min-w-0">
                                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                                    {unit.titleEn}
                                  </h4>
                                  <p className="text-xs text-slate-400 font-sinhala truncate">
                                    {unit.titleSi}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
                                  {qCount} Questions
                                </span>

                                {/* One-Click Launch Button */}
                                <button
                                  type="button"
                                  onClick={() => handleLaunchBankUnitPractice(unit.id)}
                                  className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-emerald-950 active:scale-95"
                                >
                                  <Play className="w-3.5 h-3.5 fill-current" />
                                  <span>Practice Unit</span>
                                </button>

                                {/* Accordion Toggle Button */}
                                <button
                                  type="button"
                                  onClick={() => toggleUnitAccordion(unit.id)}
                                  className="min-h-[40px] w-10 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                                  aria-label={isExpanded ? 'Collapse unit' : 'Expand unit'}
                                >
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Accordion Expanded Details */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="border-t border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-4"
                                >
                                  <div className="space-y-1">
                                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                                      Unit Overview:
                                    </span>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                      {unit.shortDescEn}
                                    </p>
                                    <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
                                      {unit.shortDescSi}
                                    </p>
                                  </div>

                                  {/* Sample Questions Preview */}
                                  <div className="space-y-2 pt-1">
                                    <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                                      Sample Questions in Bank ({Math.min(unitQs.length, 3)} of {unitQs.length}):
                                    </span>
                                    <div className="space-y-2">
                                      {unitQs.slice(0, 3).map((sq, idx) => (
                                        <div
                                          key={sq.id || idx}
                                          className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-xs space-y-1"
                                        >
                                          <div className="font-semibold text-slate-200">
                                            {sq.questionEn}
                                          </div>
                                          {sq.questionSi && (
                                            <div className="text-[11px] text-slate-400 font-sinhala">
                                              {sq.questionSi}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="pt-2 flex justify-end">
                                    <button
                                      type="button"
                                      onClick={() => handleLaunchBankUnitPractice(unit.id)}
                                      className="min-h-[44px] px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-950 active:scale-95"
                                    >
                                      <Play className="w-4 h-4 fill-current" />
                                      <span>
                                        Launch Full Practice Mode for Unit {displayUnitNumber} ({qCount} Qs) →
                                      </span>
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default function PastPapersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono text-slate-400">Loading Exam Arena...</p>
          </div>
        </div>
      }
    >
      <PastPapersContent />
    </Suspense>
  );
}
