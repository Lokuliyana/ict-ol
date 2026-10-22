'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ShieldAlert,
  ShieldCheck,
  Trophy,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { SyllabusTreeNode, CheckpointQuestion } from '@/types/treeSyllabus';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { TreeNodeItem, NodeStatus } from './TreeNodeItem';

export interface CheckpointGateNodeProps {
  checkpointNode: SyllabusTreeNode;
  unitId: string;
  status: NodeStatus;
  language?: 'en' | 'si' | 'dual';
  isExpanded?: boolean;
  onToggle?: () => void;
  onPassed?: (scorePct: number, xpAwarded: number) => void;
  className?: string;
}

export function CheckpointGateNode({
  checkpointNode,
  unitId,
  status,
  language = 'en',
  isExpanded = true,
  onToggle,
  onPassed,
  className = '',
}: CheckpointGateNodeProps) {
  const addXp = useGameStore((s) => s.addXp);
  const completeNode = useGameStore((s) => s.completeNode);

  const payload = checkpointNode.checkpointPayload || {
    titleEn: 'Verification Checkpoint Gate',
    titleSi: 'සත්‍යාපන පරීක්ෂණ ද්වාරය',
    instructionsEn: 'Complete these 3 verification questions to certify unit mastery.',
    instructionsSi: 'ඒකක ප්‍රවීණතාවය තහවුරු කිරීම සඳහා මෙම සත්‍යාපන ප්‍රශ්න 3 සම්පූර්ණ කරන්න.',
    questions: [],
    passingScore: 66,
    rewardXp: 150,
  };

  // Take the first 3 verification questions as required by spec
  const questions: CheckpointQuestion[] = (payload.questions || []).slice(0, 3);
  const rewardXp = payload.rewardXp || 150;
  const passingScore = payload.passingScore || 66;

  // State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(() => {
    if (status === 'completed') {
      const initial: Record<string, string> = {};
      questions.forEach((q) => {
        initial[q.id] = q.correctOptionId || q.options[0]?.id || '';
      });
      return initial;
    }
    return {};
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(status === 'completed');
  const [hasAwarded, setHasAwarded] = useState<boolean>(status === 'completed');

  // Answer selection handler
  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    sound.playClick(750);
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Evaluation
  const totalQuestions = questions.length;
  let correctCount = 0;

  questions.forEach((q) => {
    const selected = selectedAnswers[q.id];
    const isCorrect =
      selected === q.correctOptionId ||
      (q.correctKey &&
        q.options.find((opt) => opt.id === selected || opt.key === selected)?.key === q.correctKey);
    if (isCorrect) correctCount++;
  });

  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePct >= passingScore;

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length < totalQuestions) return;
    setIsSubmitted(true);

    if (isPassed) {
      sound.playVictory();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
        });
      } catch {
        // ignore in non-browser env
      }

      if (!hasAwarded) {
        addXp(rewardXp);
        completeNode(checkpointNode.id, scorePct);
        setHasAwarded(true);
        onPassed?.(scorePct, rewardXp);
      }
    } else {
      sound.playError();
    }
  };

  const handleRetry = () => {
    sound.playClick(600);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const primaryTitle =
    language === 'si' ? checkpointNode.titleSi || checkpointNode.titleEn : checkpointNode.titleEn;
  const secondaryTitle =
    language === 'dual'
      ? checkpointNode.titleSi
      : language === 'si'
      ? checkpointNode.titleEn
      : checkpointNode.titleSi;

  const instructions =
    language === 'si'
      ? payload.instructionsSi || payload.instructionsEn
      : payload.instructionsEn;

  const allAnswered = questions.length > 0 && Object.keys(selectedAnswers).length === questions.length;

  return (
    <TreeNodeItem
      id={checkpointNode.id}
      depth={3}
      status={isSubmitted && isPassed ? 'completed' : status}
      isExpanded={isExpanded}
      onToggle={onToggle}
      className={className}
      title={primaryTitle}
      subtitle={secondaryTitle && secondaryTitle !== primaryTitle ? secondaryTitle : undefined}
      badge={
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Verification Gate
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
            <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500" />
            +{rewardXp} XP
          </span>
        </div>
      }
      headerContent={
        <div className="mt-1 space-y-1.5 text-xs">
          <p className="text-amber-800/90 dark:text-amber-300/80">{instructions}</p>
          {status === 'locked' && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100/90 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-semibold">
              <span>🔒 Complete all branches above to unlock verification certification.</span>
            </div>
          )}
        </div>
      }
    >
      <div className="space-y-6">
        {/* Verification Questions List */}
        <div className="space-y-5">
          {questions.map((q, idx) => {
            const selectedOptId = selectedAnswers[q.id];
            const isQCorrect =
              selectedOptId === q.correctOptionId ||
              (q.correctKey &&
                q.options.find((opt) => opt.id === selectedOptId)?.key === q.correctKey);

            return (
              <div
                key={q.id || `q-${idx}`}
                className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                {/* Question Header & Prompt */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-300 dark:border-amber-700">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                        {language === 'si' ? q.promptSi || q.promptEn : q.promptEn}
                      </p>
                      {language === 'dual' && q.promptSi && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                          {q.promptSi}
                        </p>
                      )}
                    </div>
                  </div>

                  {isSubmitted && (
                    <div className="shrink-0">
                      {isQCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </div>
                  )}
                </div>

                {/* Options (A, B, C, D) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = selectedOptId === opt.id;
                    const isCorrectAnswer =
                      opt.id === q.correctOptionId || (q.correctKey && opt.key === q.correctKey);

                    let btnStyle =
                      'border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200';

                    if (isSelected && !isSubmitted) {
                      btnStyle =
                        'border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-medium';
                    } else if (isSubmitted) {
                      if (isCorrectAnswer) {
                        btnStyle =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelected && !isCorrectAnswer) {
                        btnStyle =
                          'border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 line-through';
                      } else {
                        btnStyle = 'opacity-60 border-slate-200 dark:border-slate-800 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isSubmitted || status === 'locked'}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        className={`text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${btnStyle}`}
                      >
                        <span className="shrink-0 w-5 h-5 rounded-md bg-white dark:bg-slate-800 border border-current text-[11px] font-bold flex items-center justify-center">
                          {opt.key || opt.id.slice(-1).toUpperCase()}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div>{language === 'si' ? opt.si || opt.en : opt.en}</div>
                          {language === 'dual' && opt.si && (
                            <div className="text-[11px] opacity-75 mt-0.5">{opt.si}</div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Question Explanation on Submission */}
                {isSubmitted && (
                  <div
                    className={`mt-2 p-3 rounded-lg text-xs leading-relaxed ${
                      isQCorrect
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                    }`}
                  >
                    <div className="font-semibold flex items-center gap-1 mb-0.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{isQCorrect ? 'Correct!' : 'Official Explanation:'}</span>
                    </div>
                    <p>{language === 'si' ? q.explanationSi || q.explanationEn : q.explanationEn}</p>
                    {language === 'dual' && q.explanationSi && (
                      <p className="mt-1 italic opacity-85">{q.explanationSi}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Toolbar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 dark:border-slate-800">
          {!isSubmitted ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={!allAnswered || status === 'locked'}
                onClick={handleSubmit}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all ${
                  allAnswered && status !== 'locked'
                    ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Mastery</span>
              </button>
              {status === 'locked' ? (
                <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                  Complete preceding branches to unlock
                </span>
              ) : !allAnswered ? (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Answer all {totalQuestions} questions to submit
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold ${
                  isPassed
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}
              >
                {isPassed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mastery Certified! ({scorePct}%)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Needs Review ({scorePct}%)</span>
                  </>
                )}
              </div>

              {!isPassed && (
                <button
                  type="button"
                  onClick={handleRetry}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Checkpoint</span>
                </button>
              )}
            </div>
          )}

          {/* Direct Bridge: Enter Exam Arena for this Unit */}
          <Link
            href={`/papers?unit=${unitId}`}
            title={`/papers?unit=${unitId}`}
            aria-label={`Enter Exam Arena for this Unit (/papers?unit=${unitId})`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-md shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] ml-auto"
          >
            <span>Enter Exam Arena for this Unit ➔</span>
          </Link>
        </div>
      </div>
    </TreeNodeItem>
  );
}

export default CheckpointGateNode;
