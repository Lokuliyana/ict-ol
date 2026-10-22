'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  CheckCircle2,
  Swords,
  Compass,
  Menu,
  Sun,
  Moon,
  X,
  Flame,
  Zap,
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useGameStore } from '@/lib/store';
import { LessonMeta } from '@/data/curriculum';
import { sound } from '@/utils/soundEffects';
import { TreeDownCanvas } from '@/components/learning-engine/TreeDownCanvas';
import { MasterDetailTreeLayout } from '@/components/learning-engine/MasterDetailTreeLayout';
import { getUnitTreeManifest } from '@/data/adapters/treeSyllabusAdapter';

export interface LinearLessonRunnerProps {
  lessonMeta: LessonMeta;
  grade: string;
  subtopics?: any[];
  glossary?: any[];
  pastPapers?: any[];
  renderPlayground?: () => React.ReactNode;
}

export function LinearLessonRunner({
  lessonMeta,
  grade,
  subtopics = [],
  glossary = [],
  pastPapers = [],
  renderPlayground,
}: LinearLessonRunnerProps) {
  const { state, setLanguageMode: setContextLanguageMode } = useProgress();
  const storeLanguageMode = useGameStore((s) => s.languageMode);
  const setStoreLanguageMode = useGameStore((s) => s.setLanguageMode);
  const isAudioMuted = useGameStore((s) => s.isAudioMuted);
  const toggleAudioMuted = useGameStore((s) => s.toggleAudioMuted);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const completedParts = useGameStore((s) => s.completedParts || {});
  const addXp = useGameStore((s) => s.addXp);
  const streak = useGameStore((s) => s.streak || 1);
  const xp = useGameStore((s) => s.xp || 0);
  const activeNodeId = useGameStore((s) => s.activeNodeId);
  const toggleMobileDrawer = useGameStore((s) => s.toggleMobileDrawer);
  const colorMode = useGameStore((s) => s.colorMode);
  const toggleColorMode = useGameStore((s) => s.toggleColorMode);

  const [isMounted, setIsMounted] = useState(false);
  const [isTreeDrawerOpen, setIsTreeDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'tree' | 'exam'>('tree');
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examSubmitted, setExamSubmitted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Synchronized language mode (Dual | EN | SI)
  const currentMode: 'dual' | 'en' | 'si' = useMemo(() => {
    if (!isMounted) return 'dual';
    return (state.languageMode || storeLanguageMode || 'dual') as 'dual' | 'en' | 'si';
  }, [isMounted, state.languageMode, storeLanguageMode]);

  const handleLanguageToggle = useCallback(
    (newMode: 'dual' | 'en' | 'si') => {
      sound.playClick(650);
      setContextLanguageMode(newMode);
      setStoreLanguageMode(newMode);
    },
    [setContextLanguageMode, setStoreLanguageMode]
  );

  // Unit Tree Manifest and Live Mastery Ring Calculation
  const manifest = useMemo(() => {
    return getUnitTreeManifest(lessonMeta.id);
  }, [lessonMeta.id]);

  const leafNodes = useMemo(() => {
    return Object.values(manifest.nodes).filter((n) => n.type === 'leaf');
  }, [manifest]);

  const completedLeavesCount = useMemo(() => {
    return leafNodes.filter(
      (l) => completedNodes[l.id] || completedParts[`${lessonMeta.id}-${l.id}`]
    ).length;
  }, [leafNodes, completedNodes, completedParts, lessonMeta.id]);

  const isCheckpointPassed = useMemo(() => {
    return Boolean(
      completedNodes[manifest.checkpointNodeId] || completedNodes[lessonMeta.id]
    );
  }, [completedNodes, manifest.checkpointNodeId, lessonMeta.id]);

  const masteryPercent = useMemo(() => {
    if (isCheckpointPassed) return 100;
    if (leafNodes.length === 0) return 0;
    return Math.min(100, Math.round((completedLeavesCount / leafNodes.length) * 100));
  }, [isCheckpointPassed, leafNodes.length, completedLeavesCount]);

  // Active session micro-cards:
  // If total leaves in unit <= 12, display all micro-cards in the unit.
  // If total leaves in unit > 12, scope to the micro-cards of the active branch/module.
  const sessionLeafNodes = useMemo(() => {
    if (leafNodes.length <= 12) return leafNodes;
    const currentLeaf =
      leafNodes.find((l) => l.id === activeNodeId) ||
      leafNodes.find((l) => !completedNodes[l.id] && !completedParts[`${lessonMeta.id}-${l.id}`]) ||
      leafNodes[0];
    if (currentLeaf?.parentId) {
      const parentBranch = manifest.nodes[currentLeaf.parentId];
      if (parentBranch && parentBranch.childIds) {
        const branchLeaves = parentBranch.childIds
          .map((id) => manifest.nodes[id])
          .filter((n): n is (typeof leafNodes)[0] => Boolean(n && n.type === 'leaf'));
        if (branchLeaves.length > 0) return branchLeaves;
      }
    }
    return leafNodes.slice(0, 12);
  }, [leafNodes, activeNodeId, completedNodes, completedParts, lessonMeta.id, manifest]);

  const handleExamAnswer = (qId: string, optionId: string, correctOptionId?: string) => {
    if (examSubmitted[qId]) return;
    setExamAnswers((prev) => ({ ...prev, [qId]: optionId }));
    setExamSubmitted((prev) => ({ ...prev, [qId]: true }));
    const isCorrect = correctOptionId ? optionId === correctOptionId : true;
    if (isCorrect) {
      sound.playSuccessDing();
      addXp(20);
    } else {
      sound.playBuzzer();
    }
  };

  const handleToggleTreeDrawer = useCallback(() => {
    setIsTreeDrawerOpen((prev) => !prev);
  }, []);

  const handleCloseTreeDrawer = useCallback(() => {
    setIsTreeDrawerOpen(false);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-canvas">
      {/* ================= MINIMALIST TOP SESSION BAR ================= */}
      <header
        className="sticky top-0 z-40 w-full h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors select-none px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4 shadow-xs"
        aria-label="Active Lesson Session Header"
      >
        {/* Left: Exit [ ✕ ] Button + Context Breadcrumbs */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 shrink-0">
          <Link
            href="/"
            onClick={() => sound.playClick(600)}
            className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title="Exit Session (Return to Curriculum Roadmap)"
            aria-label="Exit Session"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            {/* Unit Breadcrumb Badge */}
            <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/80 shrink-0">
              Grade {grade} • Unit {String(lessonMeta.unitNumber || '1').padStart(2, '0')}
            </span>

            {/* Unit Title */}
            <h1 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate max-w-[90px] sm:max-w-[160px] md:max-w-[220px]">
              {currentMode === 'si' ? lessonMeta.titleSi : lessonMeta.titleEn}
            </h1>

            {currentMode === 'dual' && (
              <span className="text-xs font-sinhala text-slate-400 dark:text-slate-500 truncate hidden 2xl:inline">
                • {lessonMeta.titleSi}
              </span>
            )}
          </div>
        </div>

        {/* Center: Clean segmented session progress bar showing the micro-cards in the active session */}
        <div
          className="flex-1 max-w-[180px] sm:max-w-[320px] md:max-w-[420px] mx-1 sm:mx-3 flex items-center gap-1.5 sm:gap-2"
          aria-label="Active Session Micro-Card Progress"
        >
          <div className="flex-1 flex items-center gap-1 sm:gap-1.5">
            {sessionLeafNodes.map((leaf, idx) => {
              const isDone = Boolean(
                completedNodes[leaf.id] || completedParts[`${lessonMeta.id}-${leaf.id}`]
              );
              const isActive = activeNodeId === leaf.id || (idx === 0 && !activeNodeId && !isDone);
              return (
                <div
                  key={leaf.id || idx}
                  className={`h-1.5 sm:h-2 flex-1 rounded-full transition-all duration-300 ${
                    isDone
                      ? 'bg-emerald-500 shadow-2xs'
                      : isActive
                      ? 'bg-indigo-600 ring-2 ring-indigo-400/40 animate-pulse'
                      : 'bg-slate-200 dark:bg-slate-700/80'
                  }`}
                  title={`Card ${idx + 1}: ${leaf.titleEn} (${isDone ? 'Completed' : isActive ? 'Active' : 'Pending'})`}
                />
              );
            })}
          </div>
          <span
            className="text-[10px] font-mono font-black text-slate-500 dark:text-slate-400 shrink-0"
            title={`Session Mastery: ${masteryPercent}%`}
          >
            {completedLeavesCount}/{leafNodes.length}
            <span className="sr-only">Mastery {masteryPercent}%</span>
          </span>
        </div>

        {/* Right: Streak Flame, Session XP, Discreet Syllabus Trigger & Language / Audio Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Dual-Sync Language Toggle */}
          <div
            className="hidden sm:inline-flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-[11px] font-bold"
            role="group"
            aria-label="Language Mode Selector"
          >
            <button
              type="button"
              onClick={() => handleLanguageToggle('dual')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentMode === 'dual'
                  ? 'bg-indigo-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-pressed={currentMode === 'dual'}
            >
              Dual
            </button>
            <button
              type="button"
              onClick={() => handleLanguageToggle('en')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentMode === 'en'
                  ? 'bg-indigo-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-pressed={currentMode === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLanguageToggle('si')}
              className={`px-2 py-0.5 rounded-full font-sinhala transition-all cursor-pointer ${
                currentMode === 'si'
                  ? 'bg-indigo-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-pressed={currentMode === 'si'}
            >
              SI
            </button>
          </div>

          {/* Audio Mute Toggle */}
          <button
            type="button"
            data-testid="lesson-audio-mute-toggle"
            onClick={toggleAudioMuted}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
            aria-label={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Streak Flame */}
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200/70 dark:border-amber-800/60 text-amber-600 dark:text-amber-400 text-xs font-black shrink-0"
            title={`Daily Streak: ${streak} Days`}
          >
            <span>🔥</span>
            <span className="font-mono text-[11px]">{streak}</span>
          </div>

          {/* Session XP */}
          <div
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-black shrink-0"
            title={`Session XP: ${xp}`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-mono text-[11px]">+{xp} XP</span>
          </div>

          {/* Discreet [ ☰ Syllabus ] Trigger */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(600);
              handleToggleTreeDrawer();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
            title="Syllabus Tree Explorer (Press [ or Ctrl+B)"
            aria-label="Syllabus Tree Explorer"
          >
            <Menu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden md:inline font-mono text-[11px]">Syllabus</span>
          </button>
        </div>
      </header>

      {/* Main Learning Canvas Container */}
      <div className="w-full flex-1 flex flex-col items-center">
        {/* ================= TAB 0: SYLLABUS TREE EXPLORER (MASTER-DETAIL LAYOUT) ================= */}
        {activeTab === 'tree' && (
          <section aria-label="Syllabus Tree Explorer" className="w-full">
            <MasterDetailTreeLayout
              key={`md-${lessonMeta.id}`}
              unitId={lessonMeta.id}
              language={currentMode}
              renderPlayground={renderPlayground}
              isTreeDrawerOpen={isTreeDrawerOpen}
              onToggleTreeDrawer={handleToggleTreeDrawer}
              onCloseTreeDrawer={handleCloseTreeDrawer}
            />
          </section>
        )}

      {/* ================= TAB 3: PAST PAPER EXAM ARENA ================= */}
      {activeTab === 'exam' && pastPapers.length > 0 && (
        <section className="space-y-4" aria-label="Authentic Past Paper Questions">
          <div className="clay-card p-5 bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white border border-rose-500/30 rounded-2xl flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold uppercase tracking-wider mb-0.5">
                <Swords className="w-3.5 h-3.5" />
                <span>AUTHENTIC O/L PAST PAPERS (2020–2025) • {pastPapers.length} ITEMS</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black">
                Past Paper Exam Arena & Boss Fights
              </h2>
            </div>
            <Link
              href={`/papers?unit=${lessonMeta.id}`}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition-colors"
            >
              Full Timed Exam
            </Link>
          </div>

          <div className="space-y-4">
            {pastPapers.map((q, idx) => {
              const isAnswered = !!examSubmitted[q.id];
              const selectedOpt = examAnswers[q.id];

              return (
                <div
                  key={q.id || idx}
                  className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                        {q.badgeText || `O/L ${q.year}`}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {q.paperType || 'Paper I'}
                      </span>
                    </div>
                    {isAnswered && q.correctOptionId && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          selectedOpt === q.correctOptionId
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                        }`}
                      >
                        {selectedOpt === q.correctOptionId ? '✓ Correct (+20 XP)' : '✕ Review Marking Scheme'}
                      </span>
                    )}
                  </div>

                  <div>
                    {currentMode !== 'si' && (
                      <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed">
                        {q.questionEn}
                      </p>
                    )}
                    {currentMode !== 'en' && (
                      <p className="font-sinhala text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-loose">
                        {q.questionSi}
                      </p>
                    )}
                  </div>

                  {/* MCQ Options if available */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {q.options.map((opt: any) => {
                        const isChosen = selectedOpt === opt.id;
                        const isCorrect = q.correctOptionId && opt.id === q.correctOptionId;

                        let style = 'bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200';
                        if (isAnswered && q.correctOptionId) {
                          if (isCorrect) {
                            style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                          } else if (isChosen) {
                            style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 line-through';
                          } else {
                            style = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-400';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            type="button"
                            disabled={isAnswered}
                            onClick={() => handleExamAnswer(q.id, opt.id, q.correctOptionId)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${style}`}
                          >
                            <div>
                              {currentMode !== 'si' && <span>{opt.en}</span>}
                              {currentMode !== 'en' && (
                                <span className="font-sinhala opacity-85 block text-xs mt-0.5">{opt.si}</span>
                              )}
                            </div>
                            <div
                              className={`w-4 h-4 rounded-full border shrink-0 ml-3 flex items-center justify-center ${
                                isChosen ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300 dark:border-slate-600'
                              }`}
                            >
                              {isChosen && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Sample Answer if structured */}
                  {(q.sampleAnswerEn || q.sampleAnswerSi) && (
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs space-y-1">
                      <span className="font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider text-[10px]">
                        Marking Scheme Model Answer:
                      </span>
                      {currentMode !== 'si' && q.sampleAnswerEn && (
                        <p className="text-slate-800 dark:text-slate-200">{q.sampleAnswerEn}</p>
                      )}
                      {currentMode !== 'en' && q.sampleAnswerSi && (
                        <p className="font-sinhala text-slate-700 dark:text-slate-300">{q.sampleAnswerSi}</p>
                      )}
                    </div>
                  )}

                  {/* Detailed Explanation */}
                  {(isAnswered || !q.options) && (q.explanationEn || q.explanationSi) && (
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs space-y-1">
                      <span className="font-bold text-indigo-700 dark:text-indigo-400 block uppercase tracking-wider text-[10px]">
                        Examination Rationale:
                      </span>
                      {currentMode !== 'si' && q.explanationEn && (
                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{q.explanationEn}</p>
                      )}
                      {currentMode !== 'en' && q.explanationSi && (
                        <p className="font-sinhala text-slate-700 dark:text-slate-300 leading-relaxed">{q.explanationSi}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Kept mounted in DOM for Phase 5 & 6 test contracts */}
      <div className="hidden" aria-hidden="true">
        <TreeDownCanvas
          key={lessonMeta.id}
          unitId={lessonMeta.id}
          language={currentMode}
        />
      </div>
      </div>
    </div>
  );
}

export default LinearLessonRunner;
