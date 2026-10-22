'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Trophy,
} from 'lucide-react';

export type DrawerFeedbackState = 'idle' | 'correct' | 'incorrect';

export interface SessionBottomDrawerProps {
  /**
   * Feedback Drawer State:
   * - 'idle': State 0 (Idle / Answering with [ Check ] button)
   * - 'correct': State 1 (Emerald green slide-up drawer with +15 XP & [ Continue → ])
   * - 'incorrect': State 2 (Warm rose/amber slide-up drawer with distractor rationale & [ Try Again ])
   */
  state: DrawerFeedbackState;
  selectedOptionId: string | null;
  onCheck: () => void;
  onContinue: () => void;
  onTryAgain: () => void;
  onBack?: () => void;
  explanationEn?: string;
  explanationSi?: string;
  distractorRationaleEn?: string;
  distractorRationaleSi?: string;
  language?: 'en' | 'si' | 'dual';
  activeStreamLang?: 'en' | 'si';
  isNodeMastered?: boolean;
  className?: string;
}

export function SessionBottomDrawer({
  state,
  selectedOptionId,
  onCheck,
  onContinue,
  onTryAgain,
  onBack,
  explanationEn,
  explanationSi,
  distractorRationaleEn,
  distractorRationaleSi,
  language = 'dual',
  activeStreamLang = 'en',
  isNodeMastered = false,
  className = '',
}: SessionBottomDrawerProps) {
  const continueBtnRef = useRef<HTMLButtonElement>(null);
  const tryAgainBtnRef = useRef<HTMLButtonElement>(null);

  // Auto-focus primary action button on state transition
  useEffect(() => {
    if (state === 'correct') {
      continueBtnRef.current?.focus();
    } else if (state === 'incorrect') {
      tryAgainBtnRef.current?.focus();
    }
  }, [state]);

  const effectiveLang = activeStreamLang || (language === 'si' ? 'si' : 'en');
  const primaryExplanation = effectiveLang === 'si' ? explanationSi || explanationEn : explanationEn;
  const secondaryExplanation =
    language === 'dual' && explanationSi && explanationSi !== explanationEn
      ? explanationSi
      : undefined;

  const rationaleEn = distractorRationaleEn || explanationEn;
  const rationaleSi = distractorRationaleSi || explanationSi;
  const primaryRationale = effectiveLang === 'si' ? rationaleSi || rationaleEn : rationaleEn;
  const secondaryRationale =
    language === 'dual' && rationaleSi && rationaleSi !== rationaleEn
      ? rationaleSi
      : undefined;

  // --------------------------------------------------------------------------
  // STATE 1: CORRECT / MASTERED (Emerald Green Slide-Up Drawer)
  // --------------------------------------------------------------------------
  if (state === 'correct') {
    return (
      <aside
        data-testid="drawer-correct"
        role="region"
        aria-label="Mastery Verified Feedback Drawer"
        aria-live="polite"
        className={`fixed bottom-0 left-0 right-0 z-40 bg-emerald-50 dark:bg-emerald-950/95 border-t-2 border-emerald-500 shadow-xl backdrop-blur-md pb-safe transition-all duration-300 ease-out translate-y-0 ${className}`}
      >
        <div className="max-w-[620px] mx-auto w-full px-4 py-3.5 sm:py-4 space-y-2.5">
          {/* Top Row: Mascot Inline Celebration, +15 XP Badge & Direct Action CTA */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Inline Mascot / Victory Icon */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                <Image
                  src="/assets/clay/banner-student-saturn.svg"
                  alt="Mascot Celebration"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain animate-bounce"
                  priority={false}
                />
              </div>

              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    data-testid="drawer-xp-badge"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>+15 XP</span>
                  </span>

                  <span className="text-xs sm:text-sm font-extrabold text-emerald-950 dark:text-emerald-100 truncate">
                    {effectiveLang === 'si'
                      ? 'විභාග නිපුණතාව තහවුරු විය!'
                      : 'Mastery Verified! Excellent work.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Button: [ Continue → ] (auto-focused, Enter advances) */}
            <button
              ref={continueBtnRef}
              type="button"
              data-testid="drawer-continue-btn"
              onClick={onContinue}
              className="shrink-0 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/30 flex items-center gap-1.5 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              <span>Continue →</span>
              <span className="hidden sm:inline text-[10px] font-mono opacity-80">[Enter]</span>
            </button>
          </div>

          {/* Bottom Row: Official Rationale */}
          {primaryExplanation && (
            <div className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium pt-1 border-t border-emerald-200/60 dark:border-emerald-800/60">
              <p>{primaryExplanation}</p>
              {secondaryExplanation && (
                <p className="font-sinhala text-[11px] sm:text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                  {secondaryExplanation}
                </p>
              )}
            </div>
          )}
        </div>
      </aside>
    );
  }

  // --------------------------------------------------------------------------
  // STATE 2: INCORRECT / DISTRACTOR (Warm Rose/Amber Slide-Up Drawer)
  // --------------------------------------------------------------------------
  if (state === 'incorrect') {
    return (
      <aside
        data-testid="drawer-incorrect"
        role="region"
        aria-label="Distractor Trap Feedback Drawer"
        aria-live="polite"
        className={`fixed bottom-0 left-0 right-0 z-40 bg-rose-50 dark:bg-rose-950/95 border-t-2 border-rose-500 shadow-xl backdrop-blur-md pb-safe transition-all duration-300 ease-out translate-y-0 ${className}`}
      >
        <div className="max-w-[620px] mx-auto w-full px-4 py-3.5 sm:py-4 space-y-2.5">
          {/* Top Row: Mascot Supportive Coach Message & Direct Action CTA */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Supportive Coach Mini Avatar */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                <Image
                  src="/assets/clay/banner-student-saturn.svg"
                  alt="Mascot Coach"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain animate-subtle-float"
                  priority={false}
                />
              </div>

              <div className="space-y-0.5 min-w-0">
                <div
                  data-testid="mascot-coach-msg"
                  className="text-xs sm:text-sm font-extrabold text-rose-950 dark:text-rose-100 flex items-center gap-1.5"
                >
                  <span>
                    {effectiveLang === 'si'
                      ? 'ළඟයි! හේතුව පරීක්ෂා කර බලමු...'
                      : "Almost! Let's check why..."}
                  </span>
                  <span className="text-[10px] font-mono font-normal text-rose-700 dark:text-rose-300 hidden sm:inline">
                    (Zero penalty practice)
                  </span>
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-300">
                  {effectiveLang === 'si'
                    ? 'මෙම විකල්පය නිතර වරදින විභාග උගුලකි.'
                    : 'This distractor is a classic exam trap.'}
                </p>
              </div>
            </div>

            {/* Direct Action Button: [ Try Again ] (no penalties) */}
            <button
              ref={tryAgainBtnRef}
              type="button"
              data-testid="drawer-try-again-btn"
              onClick={onTryAgain}
              className="shrink-0 px-4 sm:px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs sm:text-sm shadow-md shadow-rose-600/30 flex items-center gap-1.5 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
              <span className="hidden sm:inline text-[10px] font-mono opacity-80">[Enter]</span>
            </button>
          </div>

          {/* Bottom Row: Distractor Trap Rationale */}
          {primaryRationale && (
            <div
              data-testid="distractor-rationale"
              className="text-xs sm:text-sm text-rose-950 dark:text-rose-200 leading-relaxed font-medium pt-1 border-t border-rose-200/60 dark:border-rose-800/60"
            >
              <p>
                <span className="font-bold text-rose-700 dark:text-rose-300 mr-1.5">
                  Exam Trap Rationale:
                </span>
                {primaryRationale}
              </p>
              {secondaryRationale && (
                <p className="font-sinhala text-[11px] sm:text-xs text-rose-800 dark:text-rose-300 mt-0.5">
                  {secondaryRationale}
                </p>
              )}
            </div>
          )}
        </div>
      </aside>
    );
  }

  // --------------------------------------------------------------------------
  // STATE 0: IDLE / ANSWERING (Clean Bottom Bar with [ Check ] Button)
  // --------------------------------------------------------------------------
  const isCheckEnabled = !!selectedOptionId;

  return (
    <aside
      data-testid="drawer-idle"
      role="region"
      aria-label="Mastery Question Bottom Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 shadow-lg pb-safe transition-all duration-300 ease-out ${className}`}
    >
      <div className="max-w-[620px] mx-auto w-full px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Left Status & Guidance Pill */}
        <div className="flex items-center gap-2 min-w-0">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 cursor-pointer mr-1 transition-colors"
              title="Previous Step"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}
          {isCheckEnabled ? (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 animate-in fade-in duration-150">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>Ready to verify • Press Enter</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span>Select an option [1 - 4] to check</span>
            </div>
          )}
        </div>

        {/* Right Action: [ Check ] Button */}
        <button
          type="button"
          data-testid="drawer-check-btn"
          onClick={onCheck}
          disabled={!isCheckEnabled}
          className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
            isCheckEnabled
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 cursor-pointer'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-slate-700/60 cursor-not-allowed opacity-60'
          }`}
        >
          <span>Check</span>
          <Check className="w-4 h-4 ml-0.5" />
        </button>
      </div>
    </aside>
  );
}
