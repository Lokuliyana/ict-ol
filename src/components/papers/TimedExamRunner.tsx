'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Clock,
  AlertTriangle,
  Flag,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  BookOpen,
  AlertCircle,
} from 'lucide-react';
import { UnifiedPastPaperQuestion } from '@/data/unifiedPastPapers';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';

interface TimedExamRunnerProps {
  questions: UnifiedPastPaperQuestion[];
  onExit?: () => void;
}

export function TimedExamRunner({ questions, onExit }: TimedExamRunnerProps) {
  const language = useGameStore((s) => s.language);
  const addXp = useGameStore((s) => s.addXp);

  // Exam Session State
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [timeLeftSec, setTimeLeftSec] = useState<number>(3600); // 60 mins
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);

  // Active questions under the currently selected filters (Paper I MCQs, Paper II structured, or all)
  const activeQuestions = questions;

  const handleSubmitExam = useCallback(() => {
    sound.playVictoryFanfare();
    setExamSubmitted(true);
    setShowSubmitModal(false);

    // Compute score: MCQs evaluated by correctOptionId, Structured questions evaluated by response submission
    const mcqs = activeQuestions.filter((q) => q.type === 'mcq');
    const structured = activeQuestions.filter((q) => q.type === 'structured');

    let correctMcq = 0;
    for (const q of mcqs) {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctMcq++;
      }
    }

    let attemptedStructured = 0;
    for (const q of structured) {
      if ((selectedAnswers[q.id] || '').trim().length > 0) {
        attemptedStructured++;
      }
    }

    let score = 0;
    if (mcqs.length > 0 && structured.length === 0) {
      score = correctMcq;
    } else if (mcqs.length === 0 && structured.length > 0) {
      score = attemptedStructured;
    } else {
      score = correctMcq + attemptedStructured;
    }

    const accuracy = activeQuestions.length > 0 ? Math.round((score / activeQuestions.length) * 100) : 0;

    // Award XP
    addXp(Math.max(50, accuracy * 2));

    // Confetti fanfare on passing
    if (accuracy >= 35) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }
  }, [activeQuestions, selectedAnswers, addXp]);

  // Countdown timer effect
  useEffect(() => {
    if (!examStarted || examSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeftSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examSubmitted, handleSubmitExam]);

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = activeQuestions[currentIndex];
  const isFlagged = flaggedQuestions.has(currentQ?.id);

  const handleSelectOption = (optId: string) => {
    if (examSubmitted) return;
    sound.playClick(600);
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optId }));
  };

  const toggleFlag = () => {
    sound.playClick(450);
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  };

  // Grade calculation according to official Sri Lankan G.C.E. O/L criteria
  const getLetterGrade = (accuracy: number) => {
    if (accuracy >= 75) return { grade: 'A', label: 'Distinction (විශිෂ්ට සාමාර්ථ)', color: 'text-amber-400' };
    if (accuracy >= 65) return { grade: 'B', label: 'Very Good (ඉතා හොඳ සාමාර්ථ)', color: 'text-cyan-400' };
    if (accuracy >= 50) return { grade: 'C', label: 'Credit (සම්මාන සාමාර්ථ)', color: 'text-emerald-400' };
    if (accuracy >= 35) return { grade: 'S', label: 'Ordinary Pass (සාමාන්‍ය සාමාර්ථ)', color: 'text-indigo-400' };
    return { grade: 'F', label: 'Fail / Referred (අසමත්)', color: 'text-rose-400' };
  };

  // Empty state guard after hooks
  if (questions.length === 0) {
    return (
      <div className="p-8 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-400">
        <Clock className="w-12 h-12 mx-auto mb-3 text-slate-600" />
        <h3 className="font-bold text-base text-slate-300">No Questions Found</h3>
        <p className="text-xs mt-1">Try adjusting the filter criteria (Year, Paper Type, or Unit) to start a timed exam session.</p>
      </div>
    );
  }

  // 1. PRE-EXAM BRIEFING SCREEN
  if (!examStarted) {
    const mcqCount = activeQuestions.filter((q) => q.type === 'mcq').length;
    const structuredCount = activeQuestions.filter((q) => q.type === 'structured').length;

    return (
      <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-6 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-3xl bg-indigo-500/20 border-2 border-indigo-500/40 flex items-center justify-center mx-auto text-indigo-400">
          <Clock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-black">Timed O/L Exam Arena (60 Minutes)</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sinhala">
            ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ සම්මත නීතිරීතිවලට අනුකූලව විනාඩි 60 ක කාලගණක විභාගය
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs text-slate-300">
          <div className="font-bold text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Exam Rules:</span>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400">
            <li>Total Duration: <strong>60 Minutes (3,600 Seconds)</strong></li>
            <li>
              Questions:{' '}
              <strong>
                {activeQuestions.length} Official Questions
                {mcqCount > 0 && structuredCount > 0 && ` (${mcqCount} MCQs, ${structuredCount} Structured)`}
                {mcqCount > 0 && structuredCount === 0 && ` (${mcqCount} MCQs)`}
                {mcqCount === 0 && structuredCount > 0 && ` (${structuredCount} Structured Questions)`}
              </strong>
            </li>
            <li>Strict Secrecy: Answers and scores remain completely hidden until submission</li>
            <li>Interactive Workspace: MCQs provide option selector; Structured questions provide answer textarea</li>
            <li>Flagging: You can flag questions and review them before submitting</li>
            <li>Official Grading: A (75%+), B (65%+), C (50%+), S (35%+), F (&lt;35%)</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => {
            sound.playClick(800);
            setExamStarted(true);
          }}
          className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 font-black text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-950 active:scale-95 transition-all"
        >
          <Clock className="w-5 h-5" />
          <span>Begin 60-Minute Exam Session ➔</span>
        </button>
      </div>
    );
  }

  // 2. POST-EXAM RESULTS & REVIEW SCREEN
  if (examSubmitted) {
    const mcqs = activeQuestions.filter((q) => q.type === 'mcq');
    const structured = activeQuestions.filter((q) => q.type === 'structured');

    let correctMcq = 0;
    for (const q of mcqs) {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctMcq++;
      }
    }

    let attemptedStructured = 0;
    for (const q of structured) {
      if ((selectedAnswers[q.id] || '').trim().length > 0) {
        attemptedStructured++;
      }
    }

    let score = 0;
    if (mcqs.length > 0 && structured.length === 0) {
      score = correctMcq;
    } else if (mcqs.length === 0 && structured.length > 0) {
      score = attemptedStructured;
    } else {
      score = correctMcq + attemptedStructured;
    }

    const accuracy = activeQuestions.length > 0 ? Math.round((score / activeQuestions.length) * 100) : 0;
    const gradeInfo = getLetterGrade(accuracy);

    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-16">
        {/* Score Report Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white space-y-6 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black">Official Exam Report Card</h2>
            <p className="text-xs text-slate-400 font-sinhala">විභාග ඇගයීම් ප්‍රතිඵල සටහන</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">Score</span>
              <div className="text-2xl font-black text-white font-mono mt-1">
                {score} / {activeQuestions.length}
              </div>
              {mcqs.length > 0 && structured.length > 0 && (
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {correctMcq} MCQ • {attemptedStructured} Structured
                </div>
              )}
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">Accuracy</span>
              <div className="text-2xl font-black text-cyan-400 font-mono mt-1">{accuracy}%</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">Grade</span>
              <div className={`text-2xl font-black font-mono mt-1 ${gradeInfo.color}`}>{gradeInfo.grade}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">XP Awarded</span>
              <div className="text-2xl font-black text-amber-400 font-mono mt-1">+{Math.max(50, accuracy * 2)} XP</div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-bold ${gradeInfo.color}`}>
            {gradeInfo.label}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setExamStarted(false);
                setExamSubmitted(false);
                setTimeLeftSec(3600);
                setSelectedAnswers({});
                setFlaggedQuestions(new Set());
                setCurrentIndex(0);
              }}
              className="min-h-[48px] px-6 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Exam</span>
            </button>
            {onExit && (
              <button
                type="button"
                onClick={onExit}
                className="min-h-[48px] px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Return to Past Paper Hub</span>
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white px-2">Detailed Post-Exam Review:</h3>
          {activeQuestions.map((q, idx) => {
            const userChoice = selectedAnswers[q.id];
            const isMcq = q.type === 'mcq';
            const isQCorrect = isMcq && userChoice === q.correctOptionId;
            const isAttempted = userChoice !== undefined && userChoice.trim().length > 0;

            let cardBorder = 'border-slate-800';
            if (isMcq) {
              cardBorder = isQCorrect ? 'border-emerald-500/40 bg-slate-950' : 'border-rose-500/40 bg-slate-950';
            } else {
              cardBorder = isAttempted ? 'border-indigo-500/40 bg-slate-950' : 'border-slate-800 bg-slate-950';
            }

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border text-white space-y-4 ${cardBorder}`}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    Q{idx + 1} • {q.badgeText} • {q.paperType}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {isMcq ? (
                      isQCorrect ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Incorrect (Your Answer: {userChoice || 'Blank'})
                        </span>
                      )
                    ) : (
                      isAttempted ? (
                        <span className="text-indigo-400 flex items-center gap-1">
                          <BookOpen className="w-4 h-4" /> Answer Submitted (Self-Evaluation)
                        </span>
                      ) : (
                        <span className="text-amber-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> Not Attempted (Blank)
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Context if any */}
                {(q.contextEn || q.contextSi) && (
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-sinhala leading-relaxed">
                    {language === 'si' ? q.contextSi || q.contextEn : q.contextEn || q.contextSi}
                  </div>
                )}

                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-100 leading-relaxed font-sinhala">
                    {language === 'si' ? q.questionSi : q.questionEn}
                  </p>
                </div>

                {/* MCQ Option Breakdown */}
                {isMcq && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {q.options.map((opt) => {
                      const isOfficial = opt.id === q.correctOptionId;
                      const isPicked = opt.id === userChoice;

                      let style = 'bg-slate-900/60 border-slate-800 text-slate-400';
                      if (isOfficial) style = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                      else if (isPicked) style = 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold';

                      return (
                        <div key={opt.id} className={`p-2.5 rounded-xl border flex items-center gap-2 ${style}`}>
                          <span className="font-bold">({opt.id})</span>
                          <span>{language === 'si' ? opt.si : opt.en}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Structured Question Review Breakdown */}
                {!isMcq && (
                  <div className="space-y-3">
                    {/* Student Submitted Answer */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                        Your Exam Response (ඔබ ඇතුළත් කළ පිළිතුර):
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
                        {isAttempted ? userChoice : <span className="italic text-slate-500 font-sans">No response entered during the exam.</span>}
                      </p>
                    </div>

                    {/* Official Model Answer */}
                    {(q.sampleAnswerEn || q.sampleAnswerSi) && (
                      <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 space-y-2">
                        <span className="text-xs font-mono uppercase text-indigo-400 font-bold block">
                          Official Model Answer (නිල ආදර්ශ පිළිතුර):
                        </span>
                        <p className="text-xs sm:text-sm text-slate-100 font-sinhala leading-relaxed">
                          {language === 'si' ? q.sampleAnswerSi || q.sampleAnswerEn : q.sampleAnswerEn || q.sampleAnswerSi}
                        </p>
                        {q.sampleAnswerEn && q.sampleAnswerSi && (
                          <p className="text-xs text-slate-400 font-sinhala">
                            {language === 'si' ? q.sampleAnswerEn : q.sampleAnswerSi}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Marking Scheme Rubric */}
                    {((q.markingRubricEn && q.markingRubricEn.length > 0) || (q.markingRubricSi && q.markingRubricSi.length > 0)) && (
                      <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Marking Scheme Rubric (ලකුණු ලබා දීමේ පටිපාටිය):</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-sinhala">
                          {(language === 'si' && q.markingRubricSi && q.markingRubricSi.length > 0
                            ? q.markingRubricSi
                            : q.markingRubricEn || []
                          ).map((rubric, rIdx) => (
                            <li key={rIdx}>{rubric}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Official Explanation */}
                {q.explanationEn && (
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1 font-sinhala">
                    <span className="font-bold text-amber-400">Explanation:</span>
                    <p>{language === 'si' ? q.explanationSi : q.explanationEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. ACTIVE TIMED EXAM SESSION
  const isTimeCritical = timeLeftSec <= 300;
  const isTimeWarning = timeLeftSec <= 600 && !isTimeCritical;
  const totalAnswered = activeQuestions.filter((q) => (selectedAnswers[q.id] || '').trim().length > 0).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Timer Bar & Action Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
        {/* Countdown Timer Badge */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono font-black text-sm sm:text-base border transition-all ${
            isTimeCritical
              ? 'bg-rose-950 border-rose-500 text-rose-300 animate-pulse ring-2 ring-rose-500'
              : isTimeWarning
              ? 'bg-amber-950 border-amber-500 text-amber-300'
              : 'bg-slate-950 border-slate-700 text-cyan-300'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span>{formatTime(timeLeftSec)}</span>
        </div>

        {/* Question Counter */}
        <div className="text-xs font-mono text-slate-400">
          Answered: {totalAnswered} / {activeQuestions.length}
        </div>

        {/* Submit Exam Button */}
        <button
          type="button"
          onClick={() => setShowSubmitModal(true)}
          className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs sm:text-sm text-white flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-950 active:scale-95 transition-all"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Submit Exam</span>
        </button>
      </div>

      {/* Main Question Card with Strict Answer Secrecy */}
      {currentQ && (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-white space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-slate-400">
              Question {currentIndex + 1} of {activeQuestions.length} • {currentQ.badgeText} • {currentQ.paperType}
            </span>

            <button
              type="button"
              onClick={toggleFlag}
              className={`min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all ${
                isFlagged ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>

          {/* Question Context if any */}
          {(currentQ.contextEn || currentQ.contextSi) && (
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-sinhala leading-relaxed">
              {language === 'si' ? currentQ.contextSi || currentQ.contextEn : currentQ.contextEn || currentQ.contextSi}
            </div>
          )}

          {/* Question Text */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold leading-relaxed text-slate-100 font-sinhala">
              {language === 'si' ? currentQ.questionSi : currentQ.questionEn}
            </h3>
            <p className="text-xs text-slate-400 font-sinhala">
              {language === 'si' ? currentQ.questionEn : currentQ.questionSi}
            </p>
          </div>

          {/* Neutral MCQ Option Selection (Zero Color Leaks) */}
          {currentQ.type === 'mcq' && currentQ.options && (
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer active:scale-[0.99] ${
                      isSelected
                        ? 'bg-indigo-950/80 border-indigo-500 text-white ring-2 ring-indigo-400'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-950 border border-slate-700 text-slate-400'
                    }`}>
                      {opt.id}
                    </span>
                    <div className="flex-1 space-y-0.5">
                      <div className="font-medium text-xs sm:text-sm font-sinhala">{language === 'si' ? opt.si : opt.en}</div>
                      <div className="text-[11px] text-slate-400 font-sinhala">{language === 'si' ? opt.en : opt.si}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Structured Question Workspace with Interactive Textarea */}
          {currentQ.type === 'structured' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" />
                <p className="leading-relaxed">
                  <strong>Paper II Structured Question:</strong> Write your detailed response, working steps, or code below. Your response will be saved and evaluated against official marking rubrics upon exam submission.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  Your Exam Response (ඔබේ විභාග පිළිතුර):
                </label>
                <textarea
                  value={selectedAnswers[currentQ.id] || ''}
                  onChange={(e) => {
                    const text = e.target.value;
                    setSelectedAnswers((prev) => ({
                      ...prev,
                      [currentQ.id]: text,
                    }));
                  }}
                  placeholder="Type your structured solution, bullet points, or code here..."
                  rows={6}
                  className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono leading-relaxed"
                />
              </div>

              <div className="text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>Auto-saved to current exam session</span>
                <span>
                  {(selectedAnswers[currentQ.id] || '').trim().length > 0
                    ? `${(selectedAnswers[currentQ.id] || '').trim().length} characters entered`
                    : 'Unanswered'}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Question Navigation Drawer & Palette */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Question Palette</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Answered</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Flagged</span>
          </div>
        </div>

        {/* Palette grid - wrap friendly, zero overflow */}
        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
          {activeQuestions.map((q, idx) => {
            const isAnswered = (selectedAnswers[q.id] || '').trim().length > 0;
            const isQFlagged = flaggedQuestions.has(q.id);
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setCurrentIndex(idx);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'ring-2 ring-white scale-105'
                    : ''
                } ${
                  isAnswered
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {idx + 1}
                {isQFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Stepper Buttons (>=48px touch targets) */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              sound.playClick(400);
              setCurrentIndex((prev) => Math.max(0, prev - 1));
            }}
            disabled={currentIndex === 0}
            className={`min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
              currentIndex > 0 ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1));
            }}
            disabled={currentIndex === activeQuestions.length - 1}
            className={`min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
              currentIndex < activeQuestions.length - 1 ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-950 text-slate-700 cursor-not-allowed'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-5 text-center">
            <h3 className="font-bold text-lg">Ready to Submit Exam?</h3>
            <p className="text-xs text-slate-400">
              You have answered <strong>{totalAnswered}</strong> of{' '}
              <strong>{activeQuestions.length}</strong> questions.
              {activeQuestions.length - totalAnswered > 0 && (
                <span className="block text-amber-400 font-bold mt-1">
                  You have {activeQuestions.length - totalAnswered} unanswered question(s)!
                </span>
              )}
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 min-h-[48px] px-4 py-2.5 rounded-2xl bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="flex-1 min-h-[48px] px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-lg shadow-emerald-950"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
