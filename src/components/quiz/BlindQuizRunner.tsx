'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  Check,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { LevelNode, QuizQuestion } from '@/types/curriculum';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { HeartDepletionModal } from './HeartDepletionModal';
import { CompletionDrawer } from '../completion/CompletionDrawer';

export interface BlindQuizRunnerProps {
  node: LevelNode;
}

export function BlindQuizRunner({ node }: BlindQuizRunnerProps) {
  const router = useRouter();
  const language = useGameStore((s) => s.language);
  const hearts = useGameStore((s) => s.hearts);
  const deductHeart = useGameStore((s) => s.deductHeart);
  const completeNode = useGameStore((s) => s.completeNode);
  const unlockBadge = useGameStore((s) => s.unlockBadge);

  const questions = node.quizQuestions;

  // Quiz progression state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // Completion & Depletion modals
  const [showCompletionDrawer, setShowCompletionDrawer] = useState(false);
  const [finalAccuracy, setFinalAccuracy] = useState(0);
  const [unlockedBadgeId, setUnlockedBadgeId] = useState<string | null>(null);
  const [showDepletionModal, setShowDepletionModal] = useState(false);

  const currentQuestion: QuizQuestion | undefined = questions[currentQIndex];
  const isLastQuestion = currentQIndex === questions.length - 1;

  // Check initial heart lockout
  useEffect(() => {
    if (hearts <= 0) {
      setShowDepletionModal(true);
    }
  }, [hearts]);

  const handleSelectOption = (idx: number) => {
    // Idempotency: locked if already evaluated
    if (isChecked) return;
    sound.playClick(600);
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isChecked || !currentQuestion) return;

    // Enter Phase 2: Evaluation
    setIsChecked(true);

    const isCorrect = selectedOption === currentQuestion.correctIndex;

    if (isCorrect) {
      sound.playClick(900);
      setCorrectCount((prev) => prev + 1);
    } else {
      // Penalty: deduct 1 heart & shake card
      sound.playBuzzer();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      const stillHasHearts = deductHeart();
      if (!stillHasHearts) {
        // Trigger depletion lockout
        setTimeout(() => {
          setShowDepletionModal(true);
        }, 600);
      }
    }
  };

  const handleNextQuestion = () => {
    if (!isChecked) return;

    sound.playClick(700);

    if (isLastQuestion) {
      // Calculate final accuracy and complete node
      const total = questions.length;
      const accuracy = total > 0 ? (correctCount / total) * 100 : 100;
      setFinalAccuracy(accuracy);

      // Persist node completion, awards stars and XP
      completeNode(node.id, accuracy);

      // Boss Node Victory: Award badge when defeating a boss arena with >= 70% accuracy
      if (node.type === 'boss_arena' && accuracy >= 70) {
        const badgeId = `badge-${node.unitId}-mastery`;
        unlockBadge(badgeId);
        setUnlockedBadgeId(badgeId);
      }

      // Open celebration drawer
      setShowCompletionDrawer(true);
    } else {
      // Advance to next question
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
    }
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isChecked) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (currentQuestion && idx < currentQuestion.options.length) {
            setSelectedOption(idx);
          }
        } else if (e.key === 'Enter' && selectedOption !== null) {
          handleCheckAnswer();
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col select-none overflow-hidden">
      {/* 1. TOP HEADER: Exit, Progress Bar, Heart Containers */}
      <div className="pt-3 px-4 pb-2 shrink-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 z-20">
        <div className="flex items-center justify-between mb-2.5">
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              router.push('/');
            }}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Exit Quiz"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 mx-4 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
              style={{
                width: `${((currentQIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Heart Containers */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
            <Heart
              className={`w-4 h-4 ${
                hearts > 0
                  ? 'fill-rose-500 text-rose-500'
                  : 'text-slate-600 animate-pulse'
              }`}
            />
            <span className="text-xs font-mono font-bold text-rose-400">
              {hearts}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN QUIZ QUESTION & BLIND OPTIONS CONTAINER */}
      <div className="flex-1 flex flex-col p-4 w-full max-w-lg mx-auto overflow-y-auto">
        <AnimatePresence mode="wait">
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id || currentQIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                x: isShaking ? [-8, 8, -6, 6, -3, 3, 0] : 0,
              }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-4"
            >
              {/* Question Stem / Prompt */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                  {language === 'si'
                    ? `ප්‍රශ්නය ${currentQIndex + 1} / ${questions.length}`
                    : `Question ${currentQIndex + 1} of ${questions.length}`}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed font-sinhala">
                  {language === 'si'
                    ? currentQuestion.prompt.si
                    : currentQuestion.prompt.en}
                </h2>
              </div>

              {/* 4 Blind Options */}
              <div className="space-y-2.5 py-2">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  // Dynamic two-phase option styling:
                  // Phase 1 (Neutral): Only border highlight when selected; no color leakage.
                  // Phase 2 (Evaluated): Emerald for correct, Crimson for wrong selection.
                  let optionStyle =
                    'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700';

                  if (!isChecked) {
                    if (isSelected) {
                      optionStyle =
                        'bg-indigo-950/60 border-indigo-500 text-indigo-100 shadow-lg shadow-indigo-500/20';
                    }
                  } else {
                    if (isCorrect) {
                      optionStyle =
                        'bg-emerald-950/70 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/30';
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        'bg-rose-950/70 border-rose-500 text-rose-200 shadow-md shadow-rose-500/30';
                    } else {
                      optionStyle =
                        'bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      disabled={isChecked}
                      onClick={() => handleSelectOption(idx)}
                      whileTap={!isChecked ? { scale: 0.98 } : {}}
                      className={`w-full min-h-[52px] p-3.5 rounded-2xl border-2 flex items-center gap-3 text-left transition-all cursor-pointer ${optionStyle}`}
                    >
                      {/* Option Index Badge (1, 2, 3, 4) */}
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                          isChecked && isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : isChecked && isSelected && !isCorrect
                            ? 'bg-rose-500 text-white'
                            : isSelected
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {isChecked && isCorrect ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : isChecked && isSelected && !isCorrect ? (
                          <X className="w-4 h-4 stroke-[3]" />
                        ) : (
                          idx + 1
                        )}
                      </span>

                      {/* Option Text */}
                      <span className="text-xs sm:text-sm font-medium leading-snug flex-1 font-sinhala">
                        {language === 'si' ? opt.si : opt.en}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Phase 2 Revealed Explanation Card */}
              <AnimatePresence>
                {isChecked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-slate-400">
                      <HelpCircle className="w-4 h-4 text-cyan-400" />
                      <span>
                        {language === 'si' ? 'විස්තරය:' : 'Explanation:'}
                      </span>
                    </div>
                    <p className="leading-relaxed font-sinhala">
                      {language === 'si'
                        ? currentQuestion.explanation.si
                        : currentQuestion.explanation.en}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM 25% THUMB-ZONE EVALUATION & NEXT ACTION */}
      <div className="p-4 shrink-0 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 safe-bottom">
        <div className="w-full max-w-lg mx-auto">
          {!isChecked ? (
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={handleCheckAnswer}
              className={`w-full min-h-[52px] px-6 py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer ${
                selectedOption !== null
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-indigo-600/30 active:scale-[0.98]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
              }`}
            >
              <span>
                {language === 'si' ? 'පිළිතුර පරීක්ෂා කරන්න' : 'Check Answer'}
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className={`w-full min-h-[52px] px-6 py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98] cursor-pointer ${
                selectedOption === currentQuestion?.correctIndex
                  ? 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-emerald-500/30'
                  : 'bg-gradient-to-r from-rose-600 via-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-rose-600/30'
              }`}
            >
              <span>
                {isLastQuestion
                  ? language === 'si'
                    ? 'පරීක්ෂණය අවසන් කරන්න ➔'
                    : 'Complete Quiz ➔'
                  : language === 'si'
                  ? 'ඊළඟ ප්‍රශ්නය ➔'
                  : 'Next Question ➔'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Life Depletion Lockout Modal */}
      <HeartDepletionModal
        isOpen={showDepletionModal}
        nodeId={node.id}
        onReviewFlashcards={() => {
          setShowDepletionModal(false);
          router.push(`/study/${node.id}`);
        }}
        onClose={() => {
          setShowDepletionModal(false);
          router.push('/');
        }}
      />

      {/* Level Completion Drawer */}
      <CompletionDrawer
        isOpen={showCompletionDrawer}
        nodeId={node.id}
        nodeTitleEn={node.title.en}
        nodeTitleSi={node.title.si}
        accuracy={finalAccuracy}
        totalQuestions={questions.length}
        correctAnswers={correctCount}
        isBoss={node.type === 'boss_arena'}
        unlockedBadgeId={unlockedBadgeId}
        onClose={() => setShowCompletionDrawer(false)}
      />
    </div>
  );
}
