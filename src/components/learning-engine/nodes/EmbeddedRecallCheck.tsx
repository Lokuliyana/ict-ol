'use client';

import React, { useState, useCallback, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Clock,
  RotateCcw,
  Lightbulb,
  BookOpen,
  AlertTriangle,
  Tag,
  Sparkles,
  Bookmark,
  Volume2,
  Edit3,
} from 'lucide-react';
import { ActiveRecallCard } from '@/types/treeSyllabus';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { speakTechnicalTerm } from '@/utils/speechUtils';
import { triggerHaptic } from '@/utils/haptics';
import { ScratchpadModal } from '@/components/study/ScratchpadModal';

export interface EmbeddedRecallCheckProps {
  nodeId: string;
  activeRecall: ActiveRecallCard;
  language?: 'en' | 'si' | 'dual';
  isCompleted?: boolean;
  onMastered?: () => void;
  onReviewLater?: () => void;
  className?: string;
}

export function EmbeddedRecallCheck({
  nodeId,
  activeRecall,
  language = 'en',
  isCompleted = false,
  onMastered,
  onReviewLater,
  className = '',
}: EmbeddedRecallCheckProps) {
  const addXp = useGameStore((s) => s.addXp);
  const completeNode = useGameStore((s) => s.completeNode);
  const completedNodes = useGameStore((s) => s.completedNodes);
  const bookmarks = useGameStore((s) => s.bookmarks || []);
  const toggleBookmark = useGameStore((s) => s.toggleBookmark);

  const [isFlipped, setIsFlipped] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [hasMastered, setHasMastered] = useState(isCompleted || !!completedNodes[nodeId]);
  const [isReviewLater, setIsReviewLater] = useState(false);

  const isBookmarked = bookmarks.includes(nodeId);

  // Sync completion and reset state if nodeId or external isCompleted changes
  useEffect(() => {
    setIsFlipped(false);
    setIsReviewLater(false);
    setHasMastered(isCompleted || !!completedNodes[nodeId]);
  }, [nodeId, isCompleted, completedNodes]);

  // Flip card handler
  const handleFlip = useCallback(() => {
    sound.playClick(600);
    setIsFlipped((prev) => !prev);
  }, []);

  // Keyboard trigger (Space or Enter flips the card)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
        const target = e.target as HTMLElement;
        // Don't intercept if user is pressing space while focused on a child button
        if (target && target.tagName === 'BUTTON') {
          return;
        }
        e.preventDefault();
        handleFlip();
      }
    },
    [handleFlip]
  );

  // Self-assessment: Mastered (+15 XP)
  const handleMastered = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const isAlreadyCompleted = hasMastered || !!useGameStore.getState().completedNodes[nodeId];
      if (isAlreadyCompleted) {
        sound.playClick(600);
        return;
      }

      // 1. Award 15 XP
      addXp(15);

      // 2. Record mastery in game store
      completeNode(nodeId, 100);

      // 3. Audio & Confetti Celebration
      sound.playVictory();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Non-browser / mock environment resilience
      }

      // 4. Update local state and trigger callback
      setHasMastered(true);
      setIsReviewLater(false);
      onMastered?.();
    },
    [addXp, completeNode, hasMastered, nodeId, onMastered]
  );

  // Self-assessment: Review Later
  const handleReviewLater = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      sound.playClick(500);
      setIsReviewLater(true);
      onReviewLater?.();
    },
    [onReviewLater]
  );

  // Flip Back
  const handleFlipBack = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      sound.playClick(450);
      setIsFlipped(false);
    },
    []
  );

  // Terms resolution based on language
  const primaryTerm =
    language === 'si' ? activeRecall.termSi || activeRecall.termEn : activeRecall.termEn;
  const secondaryTerm =
    language === 'dual'
      ? activeRecall.termSi
      : language === 'si'
      ? activeRecall.termEn
      : activeRecall.termSi;

  // Keywords resolution
  const graderKeywords =
    language === 'si'
      ? activeRecall.departmentKeywordsSi?.length
        ? activeRecall.departmentKeywordsSi
        : activeRecall.departmentKeywordsEn
      : activeRecall.departmentKeywordsEn;

  // Secondary keywords for dual language
  const dualSecondaryKeywords =
    language === 'dual' && activeRecall.departmentKeywordsSi?.length
      ? activeRecall.departmentKeywordsSi
      : null;

  // Definition resolution
  const primaryDefinition =
    language === 'si' ? activeRecall.definitionSi || activeRecall.definitionEn : activeRecall.definitionEn;
  const secondaryDefinition =
    language === 'dual' && activeRecall.definitionSi ? activeRecall.definitionSi : null;

  // Mnemonic resolution
  const mnemonic =
    language === 'si' ? activeRecall.mnemonicSi || activeRecall.mnemonicEn : activeRecall.mnemonicEn;

  // Trap warning resolution
  const trapWarning =
    language === 'si'
      ? activeRecall.examTrapWarningSi || activeRecall.examTrapWarningEn
      : activeRecall.examTrapWarningEn || activeRecall.examTrapWarningSi;

  return (
    <div
      role="region"
      aria-label={`Active Recall: ${primaryTerm}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative w-full rounded-xl select-none outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 transition-all ${className}`}
      style={{ perspective: '1200px' }}
    >
      <div
        className={`w-full rounded-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ============================================================== */}
        {/* FRONT FACE: Active Recall Prompt (Zero Static MCQs!)           */}
        {/* ============================================================== */}
        <div
          data-testid="recall-card-front"
          aria-hidden={isFlipped}
          className={`w-full rounded-xl p-3 sm:p-4 border border-indigo-200/80 dark:border-indigo-800/60 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 shadow-2xs flex flex-col justify-between transition-all [-webkit-backface-visibility:hidden] [backface-visibility:hidden] ${
            isFlipped ? 'pointer-events-none absolute inset-0' : 'relative'
          }`}
        >
          {/* Top Bar: Prompt Header & Badges */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-indigo-100 dark:border-indigo-900/60">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100/80 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
              <BrainCircuit className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
              <span>Embedded Active Recall Check</span>
            </span>

            <div className="flex items-center gap-1">
              {/* Pronounce Term (Bilingual Audio #18) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick(750);
                  triggerHaptic('light');
                  speakTechnicalTerm(primaryTerm);
                }}
                className="p-1 rounded-md text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
                title="Pronounce Technical Term"
                aria-label={`Pronounce ${primaryTerm}`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>

              {/* Bookmark Toggle (Revision Bookmarking #40) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playPop();
                  triggerHaptic('light');
                  toggleBookmark(nodeId);
                }}
                className={`p-1 rounded-md transition-colors ${
                  isBookmarked
                    ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
                    : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Bookmark for Revision Sheet"
                aria-label="Bookmark Concept"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
              </button>

              {/* Quick Scratchpad Toggle (#39) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick(600);
                  setIsScratchpadOpen(true);
                }}
                className="p-1 rounded-md text-slate-400 hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Open Scratchpad"
                aria-label="Open Scratchpad"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>

              {hasMastered ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Mastered</span>
                </span>
              ) : isReviewLater ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <Clock className="w-2.5 h-2.5 text-amber-600" />
                  <span>Marked for Review</span>
                </span>
              ) : (
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  +15 XP Available
                </span>
              )}
            </div>
          </div>

          {/* Prompt Core: Term & Mental Recall Invitation */}
          <div className="py-2.5 space-y-1.5 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Can you recall the official definition & mandatory keywords?
            </div>

            <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
              {primaryTerm}
            </div>

            {secondaryTerm && secondaryTerm !== primaryTerm && (
              <div className="text-xs text-indigo-700/90 dark:text-indigo-300 font-medium font-sinhala">
                {secondaryTerm}
              </div>
            )}

            <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Active retrieval forces neural synaptic consolidation. Think through before flipping!
            </p>
          </div>

          {/* Flip Action Bar */}
          <div className="pt-1.5 flex items-center justify-center">
            <button
              type="button"
              data-testid="flip-card-verify-button"
              onClick={handleFlip}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white shadow-2xs hover:shadow-xs transition-all hover:scale-[1.01] cursor-pointer"
            >
              <span>Flip Card to Verify ➔</span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-white/20 text-[9px] font-mono tracking-wide text-indigo-100 border border-white/20">
                Space
              </span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BACK FACE: Answer Rubric & Self-Assessment                     */}
        {/* ============================================================== */}
        <div
          data-testid="recall-card-back"
          aria-hidden={!isFlipped}
          className={`w-full rounded-xl p-3 sm:p-4 border border-indigo-300/80 dark:border-indigo-700/60 bg-white dark:bg-slate-900 shadow-xs space-y-3 transition-all [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            !isFlipped ? 'pointer-events-none absolute inset-0' : 'relative'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="font-bold text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Department Answer Rubric
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
              {primaryTerm}
            </span>
          </div>

          {/* 1. Department Grader Keywords */}
          {graderKeywords && graderKeywords.length > 0 && (
            <div className="space-y-1.5" data-testid="grader-keywords-section">
              <div className="font-bold text-xs flex items-center gap-1.5 text-indigo-800 dark:text-indigo-300">
                <Tag className="w-3.5 h-3.5 text-indigo-500" />
                <span>Department Grader Keywords (Mandatory for Marks):</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {graderKeywords.map((kw, i) => (
                  <span
                    key={`kw-${i}`}
                    data-testid="grader-keyword-pill"
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800 shadow-2xs"
                  >
                    {kw}
                  </span>
                ))}
                {dualSecondaryKeywords &&
                  dualSecondaryKeywords.map((kw, i) => (
                    <span
                      key={`kw-sec-${i}`}
                      data-testid="grader-keyword-pill-secondary"
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {kw}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* 2. Mnemonic Memory Hook */}
          {mnemonic && (
            <div
              data-testid="mnemonic-section"
              className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-1 text-amber-950 dark:text-amber-200"
            >
              <div className="font-bold text-xs flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Mnemonic Memory Hook</span>
              </div>
              <p className="text-xs italic leading-relaxed">{mnemonic}</p>
            </div>
          )}

          {/* 3. Official Textbook Definition */}
          {primaryDefinition && (
            <div data-testid="definition-section" className="space-y-1">
              <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Textbook Definition:</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {primaryDefinition}
                </p>
                {secondaryDefinition && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-1.5">
                    {secondaryDefinition}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 4. O/L Trap Warning */}
          {trapWarning && (
            <div
              data-testid="trap-warning-section"
              className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-800/60 space-y-1 text-rose-950 dark:text-rose-200"
            >
              <div className="font-bold text-xs flex items-center gap-1.5 text-rose-800 dark:text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                <span>O/L Trap Warning (Examiner Trick):</span>
              </div>
              <p className="text-xs leading-relaxed">{trapWarning}</p>
            </div>
          )}

          {/* 5. Self-Assessment Action Buttons */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {/* Mastered Button */}
              <button
                type="button"
                data-testid="mastered-button"
                onClick={handleMastered}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  hasMastered
                    ? 'bg-emerald-600 text-white shadow-2xs opacity-90'
                    : 'bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white shadow-2xs hover:shadow-xs hover:scale-[1.01]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{hasMastered ? '✓ Mastered (+15 XP)' : '🟢 Mastered (+15 XP)'}</span>
              </button>

              {/* Review Later Button */}
              <button
                type="button"
                data-testid="review-later-button"
                onClick={handleReviewLater}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isReviewLater
                    ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700'
                    : 'bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:scale-[1.01] active:scale-98'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{isReviewLater ? '🟡 Marked for Review' : '🟡 Review Later'}</span>
              </button>
            </div>

            {/* Flip Back Button */}
            <button
              type="button"
              data-testid="flip-back-button"
              onClick={handleFlipBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>↺ Flip Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Calculation Scratchpad Overlay (#39) */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />
    </div>
  );
}

export default EmbeddedRecallCheck;

