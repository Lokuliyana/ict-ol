'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Zap,
  CheckSquare,
  Square,
} from 'lucide-react';
import { UnifiedPastPaperQuestion } from '@/data/unifiedPastPapers';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

interface PracticeExamRunnerProps {
  questions: UnifiedPastPaperQuestion[];
}

export function PracticeExamRunner({ questions }: PracticeExamRunnerProps) {
  const language = useGameStore((s) => s.language);
  const pastPaperAnswers = useGameStore((s) => s.pastPaperAnswers);
  const recordPastPaperAttempt = useGameStore((s) => s.recordPastPaperAttempt);
  const addToMistakeVault = useGameStore((s) => s.addToMistakeVault);
  const removeFromMistakeVault = useGameStore((s) => s.removeFromMistakeVault);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [revealedRubrics, setRevealedRubrics] = useState<Record<string, string>>({});
  const [studentDrafts, setStudentDrafts] = useState<Record<string, string>>({});
  const [evaluatedIds, setEvaluatedIds] = useState<Set<string>>(new Set());
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, string[]>>({});
  const [checkedRubricPoints, setCheckedRubricPoints] = useState<Record<string, number[]>>({});

  // Initialize previous attempts / drafts from store on mount or question list change
  useEffect(() => {
    const initialOpts: Record<string, string> = {};
    const initialDrafts: Record<string, string> = {};
    const initialEval = new Set<string>();

    questions.forEach((q) => {
      const stored = pastPaperAnswers[q.id];
      if (stored) {
        if (q.type === 'mcq') {
          initialOpts[q.id] = stored.answer;
          initialEval.add(q.id);
        } else {
          initialDrafts[q.id] = stored.answer !== 'reviewed' ? stored.answer : '';
          initialEval.add(q.id);
        }
      }
    });

    setSelectedOptions(initialOpts);
    setStudentDrafts(initialDrafts);
    setEvaluatedIds(initialEval);
  }, [questions, pastPaperAnswers]);

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-400">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-600" />
        <h3 className="font-bold text-base text-slate-300">No Questions Found</h3>
        <p className="text-xs mt-1">Try adjusting the filter criteria (Year, Paper Type, or Unit).</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isMcq = currentQ.type === 'mcq';
  const selectedOptId = selectedOptions[currentQ.id];
  const isAnswered = selectedOptId !== undefined;
  const isCorrect = isMcq && selectedOptId === currentQ.correctOptionId;
  const isRubricRevealed = Boolean(revealedRubrics[currentQ.id]);

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return; // Locked once answered in practice

    setSelectedOptions((prev) => ({ ...prev, [currentQ.id]: optId }));
    const isAnsCorrect = optId === currentQ.correctOptionId;

    if (isAnsCorrect) {
      sound.playSuccessDing();
      triggerHaptic('success');
      removeFromMistakeVault(currentQ.id);
    } else {
      sound.playError();
      triggerHaptic('error');
      addToMistakeVault(currentQ.id); // Save to Mistake Review Vault (Formative Rubric #46)
    }

    recordPastPaperAttempt(currentQ.id, optId, isAnsCorrect);
    setEvaluatedIds((prev) => new Set([...prev, currentQ.id]));
  };

  const handleFiftyFifty = () => {
    if (isAnswered || !isMcq || !currentQ.options || eliminatedOptions[currentQ.id]) return;
    sound.playPop();
    triggerHaptic('medium');

    const wrongOptions = currentQ.options
      .filter((opt) => opt.id !== currentQ.correctOptionId)
      .map((opt) => opt.id);

    // Pick 2 wrong options to eliminate
    const toEliminate = wrongOptions.slice(0, 2);
    setEliminatedOptions((prev) => ({ ...prev, [currentQ.id]: toEliminate }));
  };

  const handleToggleRubricPoint = (pointIndex: number) => {
    sound.playClick(700);
    triggerHaptic('light');
    setCheckedRubricPoints((prev) => {
      const current = prev[currentQ.id] || [];
      const exists = current.includes(pointIndex);
      return {
        ...prev,
        [currentQ.id]: exists ? current.filter((p) => p !== pointIndex) : [...current, pointIndex],
      };
    });
  };

  const handleSaveStructuredDraft = (draftText: string) => {
    setStudentDrafts((prev) => ({ ...prev, [currentQ.id]: draftText }));
    recordPastPaperAttempt(currentQ.id, draftText.trim() || 'reviewed', true);
  };

  const toggleRubric = () => {
    sound.playClick(600);
    const willReveal = !revealedRubrics[currentQ.id];
    setRevealedRubrics((prev) => ({
      ...prev,
      [currentQ.id]: willReveal ? 'revealed' : '',
    }));

    if (willReveal) {
      const currentDraft = studentDrafts[currentQ.id] || '';
      recordPastPaperAttempt(currentQ.id, currentDraft.trim() || 'reviewed', true);
      setEvaluatedIds((prev) => new Set([...prev, currentQ.id]));
    }
  };

  return (
    <div className="space-y-6">
      {/* Question Counter Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono text-xs font-bold">
            {currentQ.badgeText}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Unit {currentQ.unitNumber}: {language === 'si' ? currentQ.unitTitleSi : currentQ.unitTitleEn}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                sound.playClick(400);
                setCurrentIndex((prev) => Math.max(0, prev - 1));
              }}
              disabled={currentIndex === 0}
              className={`min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                currentIndex > 0 ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick(500);
                setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
              }}
              disabled={currentIndex === questions.length - 1}
              className={`min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                currentIndex < questions.length - 1 ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-white space-y-6 shadow-2xl">
        {/* Question Text */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold leading-relaxed text-slate-100">
            {language === 'si' ? currentQ.questionSi : currentQ.questionEn}
          </h3>
          {/* Dual language secondary subtitle */}
          <p className="text-xs sm:text-sm text-slate-400 font-sinhala leading-relaxed">
            {language === 'si' ? currentQ.questionEn : currentQ.questionSi}
          </p>
        </div>

        {/* MCQ Option Selection & 50/50 Lifeline (#44) */}
        {isMcq && currentQ.options && (
          <div className="space-y-3">
            {/* 50/50 Lifeline Trigger */}
            {!isAnswered && (
              <div className="flex items-center justify-end pb-1">
                <button
                  type="button"
                  onClick={handleFiftyFifty}
                  disabled={Boolean(eliminatedOptions[currentQ.id])}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    eliminatedOptions[currentQ.id]
                      ? 'bg-slate-900 text-slate-500 border-slate-800 opacity-60'
                      : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40 active:scale-95'
                  }`}
                  title="Eliminate two incorrect options"
                >
                  <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{eliminatedOptions[currentQ.id] ? '50/50 Used (2 Options Removed)' : '50/50 Lifeline'}</span>
                </button>
              </div>
            )}

            {currentQ.options.map((opt) => {
              const isSelected = selectedOptId === opt.id;
              const isThisCorrect = opt.id === currentQ.correctOptionId;
              const isEliminated = Boolean(eliminatedOptions[currentQ.id]?.includes(opt.id));

              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isEliminated) {
                btnStyle = 'bg-slate-950/40 border-slate-800/30 text-slate-600 line-through opacity-30 cursor-not-allowed';
              } else if (isAnswered) {
                if (isThisCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-400';
                } else if (isSelected && !isThisCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 ring-2 ring-rose-400';
                } else {
                  btnStyle = 'bg-slate-950/40 border-slate-800/40 text-slate-600 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => !isEliminated && handleSelectOption(opt.id)}
                  disabled={isAnswered || isEliminated}
                  className={`w-full min-h-[52px] p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer active:scale-[0.99] ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {opt.id}
                  </span>
                  <div className="flex-1 space-y-0.5">
                    <div className="font-medium text-xs sm:text-sm">{language === 'si' ? opt.si : opt.en}</div>
                    <div className="text-[11px] text-slate-400 font-sinhala">{language === 'si' ? opt.en : opt.si}</div>
                  </div>

                  {isAnswered && isThisCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}


        {/* Structured Question Workspace */}
        {!isMcq && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                Your Answer Draft (පෙරහුරු පිළිතුර):
              </label>
              <textarea
                value={studentDrafts[currentQ.id] || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  setStudentDrafts((prev) => ({ ...prev, [currentQ.id]: val }));
                }}
                onBlur={(e) => {
                  handleSaveStructuredDraft(e.target.value);
                }}
                placeholder="Type your structured solution here for self-evaluation..."
                rows={4}
                className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono leading-relaxed"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Auto-saved to your practice progress</span>
                {evaluatedIds.has(currentQ.id) && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Attempt Recorded
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={toggleRubric}
              className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              {isRubricRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isRubricRevealed ? 'Hide Official Marking Scheme' : 'Reveal Official Model Answer & Rubric'}</span>
            </button>

            {/* Revealed Official Model Answer & Rubrics */}
            {isRubricRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-slate-900 border border-indigo-500/40 space-y-4"
              >
                <div>
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold block mb-1">
                    Official Model Answer (නිල ආදර්ශ පිළිතුර):
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sinhala">
                    {language === 'si' ? currentQ.sampleAnswerSi || currentQ.sampleAnswerEn : currentQ.sampleAnswerEn || currentQ.sampleAnswerSi}
                  </p>
                  {currentQ.sampleAnswerEn && currentQ.sampleAnswerSi && (
                    <p className="text-xs text-slate-400 mt-1 font-sinhala">
                      {language === 'si' ? currentQ.sampleAnswerEn : currentQ.sampleAnswerSi}
                    </p>
                  )}
                </div>

                {((currentQ.markingRubricEn && currentQ.markingRubricEn.length > 0) ||
                  (currentQ.markingRubricSi && currentQ.markingRubricSi.length > 0)) && (
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
                        Interactive Rubric Self-Grading Checklist (#45):
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                        Checked: {(checkedRubricPoints[currentQ.id] || []).length} Points Covered
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {(language === 'si' && currentQ.markingRubricSi && currentQ.markingRubricSi.length > 0
                        ? currentQ.markingRubricSi
                        : currentQ.markingRubricEn || []
                      ).map((rubric, idx) => {
                        const isChecked = Boolean(checkedRubricPoints[currentQ.id]?.includes(idx));
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleToggleRubricPoint(idx)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs font-sinhala transition-all flex items-start gap-2.5 cursor-pointer ${
                              isChecked
                                ? 'bg-emerald-950/50 border-emerald-500/80 text-emerald-200'
                                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-900'
                            }`}
                          >
                            <span className="mt-0.5 shrink-0 text-emerald-400">
                              {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-500" />}
                            </span>
                            <span className="flex-1 leading-relaxed">{rubric}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* Detailed Visual Explanations (Evaluated MCQs & Explanations #47) */}
        {(isAnswered || isRubricRevealed) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Syllabus & Exam Reference:</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Unit {currentQ.unitNumber}: {currentQ.unitTitleEn}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sinhala">
              {language === 'si' ? currentQ.explanationSi : currentQ.explanationEn}
            </p>
            <p className="text-slate-500 text-[11px] font-sinhala">
              {language === 'si' ? currentQ.explanationEn : currentQ.explanationSi}
            </p>
          </motion.div>
        )}
      </div>

      {/* Docked Full-Width Bottom Action Bar (Thumb-Zone Ergonomics #6) */}
      <div className="sticky bottom-16 lg:bottom-4 left-0 right-0 z-30 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-900/95 backdrop-blur-lg border border-slate-800 shadow-2xl">
        <button
          type="button"
          onClick={() => {
            sound.playClick(400);
            setCurrentIndex((prev) => Math.max(0, prev - 1));
          }}
          disabled={currentIndex === 0}
          className={`min-h-[52px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-95 ${
            currentIndex > 0 ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="text-xs font-mono text-slate-400 hidden sm:inline">
          {evaluatedIds.size} Evaluated in Session
        </span>

        <button
          type="button"
          onClick={() => {
            sound.playClick(500);
            setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
          }}
          disabled={currentIndex === questions.length - 1}
          className={`min-h-[52px] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-95 ${
            currentIndex < questions.length - 1 ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
