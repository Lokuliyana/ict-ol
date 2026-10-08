'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  Zap,
  Cpu,
  Binary,
  Layers,
  ShieldCheck,
  Grid3X3,
  ListTree,
} from 'lucide-react';
import { LevelNode, TheoryCard } from '@/types/curriculum';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';

export interface StoryFlashcardRunnerProps {
  node: LevelNode;
  initialCardIndex?: number;
}

export function StoryFlashcardRunner({
  node,
  initialCardIndex = 0,
}: StoryFlashcardRunnerProps) {
  const router = useRouter();
  const language = useGameStore((s) => s.language);
  const cards = node.theoryCards;

  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(cards.length - 1, initialCardIndex))
  );
  const [direction, setDirection] = useState<1 | -1>(1);

  const currentCard: TheoryCard | undefined = cards[currentIndex];
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === cards.length - 1;

  const handleNext = useCallback(() => {
    if (isLastCard) {
      sound.playClick(800);
      router.push(`/quiz/${node.id}`);
    } else {
      sound.playClick(650);
      setDirection(1);
      setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
    }
  }, [isLastCard, cards.length, node.id, router]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      sound.playClick(600);
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  }, [currentIndex]);

  const handleSkipToQuiz = useCallback(() => {
    sound.playClick(700);
    router.push(`/quiz/${node.id}`);
  }, [node.id, router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, router]);

  // Render Visual Infographic Widget
  const renderVisualWidget = (widgetType?: string) => {
    switch (widgetType) {
      case 'binary_weight':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-2xl border border-indigo-500/30 shadow-inner">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
              8-Bit Byte Place Weights (2⁷ ... 2⁰)
            </span>
            <div className="grid grid-cols-8 gap-1 w-full max-w-xs text-center">
              {[128, 64, 32, 16, 8, 4, 2, 1].map((wt, i) => (
                <div
                  key={wt}
                  className={`p-1.5 rounded-lg border transition-all ${
                    i === 0 || i === 5 || i === 7
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/50'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] font-mono font-black">{wt}</div>
                  <div className="text-[9px] font-bold mt-0.5">
                    {i === 0 || i === 5 || i === 7 ? '1' : '0'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs font-mono font-bold text-amber-300">
              10000101₂ = 128 + 4 + 1 = 133₁₀
            </div>
          </div>
        );

      case 'logic_gate':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 rounded-2xl border border-cyan-500/30">
            <div className="flex items-center gap-4 text-center">
              <div className="space-y-2">
                <div className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  A = 1
                </div>
                <div className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  B = 1
                </div>
              </div>
              <div className="p-3 rounded-xl bg-cyan-500/10 border-2 border-cyan-400 text-cyan-300 font-black text-sm">
                AND GATE
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-mono font-black text-sm shadow-md shadow-emerald-500/40">
                OUT = 1
              </div>
            </div>
            <div className="mt-2 text-[10px] font-mono text-slate-400">
              Truth Table: 1 AND 1 = 1 | 1 AND 0 = 0
            </div>
          </div>
        );

      case 'laser_grid':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-2xl border border-emerald-500/30">
            <div className="grid grid-cols-3 gap-1 w-full max-w-xs text-xs font-mono">
              <div className="p-2 text-center bg-slate-800 text-slate-400 rounded">
                Col A
              </div>
              <div className="p-2 text-center bg-slate-800 text-slate-400 rounded">
                Col B (Fixed)
              </div>
              <div className="p-2 text-center bg-slate-800 text-slate-400 rounded">
                Col C (Formula)
              </div>
              <div className="p-2 text-center bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded">
                A1 = 50
              </div>
              <div className="p-2 text-center bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded font-bold">
                $B$1 = 10%
              </div>
              <div className="p-2 text-center bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded">
                =A1*$B$1
              </div>
            </div>
            <div className="mt-2 text-[10px] font-mono text-emerald-300 font-bold">
              $B$1 is locked with Dollar Signs ($)
            </div>
          </div>
        );

      case 'trace_table':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 rounded-2xl border border-indigo-500/30">
            <div className="w-full max-w-xs text-xs font-mono">
              <div className="grid grid-cols-3 text-center p-1 font-bold text-slate-400 border-b border-slate-700">
                <span>Iteration</span>
                <span>Count</span>
                <span>Sum</span>
              </div>
              <div className="grid grid-cols-3 text-center p-1 text-slate-300">
                <span>Init</span>
                <span>1</span>
                <span>0</span>
              </div>
              <div className="grid grid-cols-3 text-center p-1 text-cyan-300 bg-cyan-500/10">
                <span>Loop 1</span>
                <span>2</span>
                <span>1</span>
              </div>
              <div className="grid grid-cols-3 text-center p-1 text-emerald-300 bg-emerald-500/10">
                <span>Loop 2</span>
                <span>3</span>
                <span>3</span>
              </div>
            </div>
          </div>
        );

      case 'cpu_bus':
      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-2xl border border-indigo-500/30 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center mb-2 shadow-lg shadow-indigo-500/30">
              <Cpu className="w-7 h-7 text-indigo-400 animate-pulse" />
            </div>
            <div className="text-xs font-bold font-mono text-cyan-300">
              {node.unitTitle.en}
            </div>
            <div className="text-[10px] text-slate-400 mt-1 max-w-[220px]">
              Micro-learning interactive syllabus module
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col select-none overflow-hidden">
      {/* 1. TOP INSTAGRAM-STORY SEGMENTED PROGRESS HEADER */}
      <div className="pt-3 px-4 pb-2 shrink-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 z-20">
        {/* Story Progress Bar Segments */}
        <div className="flex items-center gap-1.5 w-full h-1.5 mb-3">
          {cards.map((card, idx) => {
            const isFilled = idx < currentIndex;
            const isCurrent = idx === currentIndex;

            return (
              <div
                key={card.id || idx}
                className="flex-1 h-full bg-slate-800 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    isFilled
                      ? 'bg-cyan-400 w-full'
                      : isCurrent
                      ? 'bg-cyan-400 w-full animate-pulse shadow-sm shadow-cyan-400/50'
                      : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Top Control Bar: Exit Button & Card Counter */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              router.push('/');
            }}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Exit Study Session"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              {language === 'si' ? node.title.si : node.title.en}
            </span>
          </div>

          <div className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/60">
            {currentIndex + 1} / {cards.length}
          </div>
        </div>
      </div>

      {/* 2. MAIN 40/60 SPLIT CARD AREA */}
      <div className="flex-1 flex flex-col p-4 w-full max-w-lg mx-auto overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {currentCard && (
            <motion.div
              key={currentCard.id || currentIndex}
              initial={{ x: direction === 1 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex-1 flex flex-col h-full bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl p-4 sm:p-5 overflow-hidden"
            >
              {/* Top 40%: Visual Infographic Widget */}
              <div className="h-[38%] min-h-[140px] max-h-[220px] w-full shrink-0 mb-3">
                {renderVisualWidget(currentCard.visualWidget)}
              </div>

              {/* Bottom 60%: Concise Micro-Bullet Points & Key Takeaway */}
              <div className="flex-1 flex flex-col justify-between overflow-y-auto space-y-3 pr-1">
                {/* Title */}
                <h2 className="text-base sm:text-lg font-black text-white leading-tight font-sinhala">
                  {language === 'si'
                    ? currentCard.title.si
                    : currentCard.title.en}
                </h2>

                {/* Micro-Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {currentCard.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{language === 'si' ? bp.si : bp.en}</span>
                    </li>
                  ))}
                </ul>

                {/* Golden Key Takeaway Box */}
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] sm:text-xs font-bold text-amber-200 leading-snug">
                    {language === 'si'
                      ? currentCard.keyTakeaway.si
                      : currentCard.keyTakeaway.en}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM 25% THUMB-ZONE NAVIGATION (>= 48px hit areas) */}
      <div className="p-4 shrink-0 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 safe-bottom">
        <div className="flex items-center gap-3 w-full max-w-lg mx-auto">
          {/* Secondary Action: Skip or Previous */}
          {isFirstCard ? (
            <button
              type="button"
              onClick={handleSkipToQuiz}
              className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              {language === 'si' ? 'පරීක්ෂණයට පනින්න' : 'Skip to Quiz'}
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePrev}
              className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{language === 'si' ? 'පසුපසට' : 'Back'}</span>
            </button>
          )}

          {/* Primary Action: Got It! Next or Take the Quiz */}
          <button
            type="button"
            onClick={handleNext}
            className={`flex-1 min-h-[52px] px-6 py-3 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95 cursor-pointer ${
              isLastCard
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 shadow-emerald-500/30'
                : 'bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white shadow-indigo-600/30 hover:from-indigo-500 hover:to-indigo-600'
            }`}
          >
            {isLastCard ? (
              <>
                <Zap className="w-5 h-5 fill-slate-950" />
                <span>
                  {language === 'si' ? 'පරීක්ෂණයට යන්න ➔' : 'Take the Quiz ➔'}
                </span>
              </>
            ) : (
              <>
                <span>
                  {language === 'si' ? 'තේරුණා! ඊළඟ ➔' : 'Got It! Next'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
