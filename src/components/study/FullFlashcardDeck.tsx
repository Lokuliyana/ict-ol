'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Zap,
  HelpCircle,
  Eye,
  Layers,
  BookOpen
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';
import { useGameStore } from '@/lib/store';
import { IngestedQuestion, IngestedOption } from '@/data/questionBanks';

interface FullFlashcardDeckProps {
  questions: IngestedQuestion[];
  lessonTitleEn: string;
  lessonTitleSi: string;
  onExit?: () => void;
}

export function FullFlashcardDeck({
  questions,
  lessonTitleEn,
  lessonTitleSi,
  onExit
}: FullFlashcardDeckProps) {
  const colorMode = useGameStore((s) => s.colorMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Record<string, boolean>>({});

  const touchStartX = React.useRef(0);
  const touchStartY = React.useRef(0);

  const handleNext = useCallback(() => {
    sound.playClick(650);
    triggerHaptic('light');
    setIsFlipped(false);
    setCurrentIndex(prev => (prev < (questions?.length || 1) - 1 ? prev + 1 : 0));
  }, [questions?.length]);

  const handlePrev = useCallback(() => {
    sound.playClick(600);
    triggerHaptic('light');
    setIsFlipped(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : (questions?.length || 1) - 1));
  }, [questions?.length]);

  const handleFlip = useCallback(() => {
    sound.playClick(750);
    triggerHaptic('medium');
    setIsFlipped(prev => !prev);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe gesture (#37)
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev]);

  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center text-slate-400 font-mono text-sm">
        No flashcards available for this unit.
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isMastered = !!masteredIds[currentQ?.id];

  const toggleMastered = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playSuccessDing();
    setMasteredIds(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto select-none">
      {/* Top Deck Stats & Progress Bar */}
      <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 px-1">
        <span className="flex items-center gap-1.5 text-indigo-400">
          <Layers className="w-4 h-4" />
          <span>Card {currentIndex + 1} of {questions.length}</span>
        </span>

        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Mastered: {Object.values(masteredIds).filter(Boolean).length}</span>
        </span>
      </div>

      {/* Segmented Progress Tracker */}
      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main Tactile 3D Flip Card (#37, #38, #41) */}
      <div
        onClick={handleFlip}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`cursor-pointer min-h-[340px] sm:min-h-[380px] p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-500/20 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-indigo-500/40 transition-all flex flex-col justify-between relative group ${
          colorMode === 'amber' ? 'dark:bg-amber-950/30 border-amber-500/30' : ''
        }`}
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-800">
            {isFlipped ? '💡 BACK: ANSWER & EXPLANATION' : '❓ FRONT: QUESTION'}
          </span>

          <button
            onClick={toggleMastered}
            className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
              isMastered
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-400'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isMastered ? 'Mastered' : 'Mark Learned'}</span>
          </button>
        </div>

        {/* Card Body Content */}
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, rotateY: -30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 30 }}
              transition={{ duration: 0.18 }}
              className="my-auto space-y-4 py-4"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.promptEn}
              </h3>
              {currentQ.promptSi && (
                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-sinhala leading-loose">
                  {currentQ.promptSi}
                </p>
              )}

              {/* 4 Choices Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {currentQ.options.map((opt: IngestedOption) => (
                  <div
                    key={opt.key}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 text-xs text-slate-750 dark:text-slate-200 flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-md bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                      {opt.key}
                    </span>
                    <span className="truncate">{opt.en}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -30 }}
              transition={{ duration: 0.18 }}
              className="my-auto space-y-4 py-4"
            >
              {/* Correct Answer Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-900 dark:text-emerald-100 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-emerald-400 block">
                  Correct Answer:
                </span>
                <div className="text-sm sm:text-base font-black">
                  ({currentQ.correctKey}) {currentQ.options.find((o: IngestedOption) => o.key === currentQ.correctKey)?.en}
                </div>
                {currentQ.options.find((o: IngestedOption) => o.key === currentQ.correctKey)?.si && (
                  <div className="text-xs font-sinhala text-emerald-700 dark:text-emerald-300">
                    {currentQ.options.find((o: IngestedOption) => o.key === currentQ.correctKey)?.si}
                  </div>
                )}
              </div>

              {/* In-depth Dual Explanation */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 block font-mono">
                  Textbook Rationale:
                </span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {currentQ.explanationEn}
                </p>
                {currentQ.explanationSi && (
                  <p className="text-slate-600 dark:text-slate-400 font-sinhala leading-loose">
                    {currentQ.explanationSi}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Hint */}
        <div className="text-center text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-indigo-500" />
          <span>Click anywhere to flip card • Tap arrow keys to navigate</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-indigo-500 transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Card</span>
        </button>

        <button
          onClick={handleFlip}
          className="py-3 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-indigo-600/30"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{isFlipped ? 'Show Question' : 'Reveal Answer'}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-indigo-500 transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
        >
          <span>Next Card</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
