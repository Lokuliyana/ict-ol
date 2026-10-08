'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Trophy, 
  Sparkles, 
  BookOpen, 
  Gamepad2, 
  HelpCircle, 
  Swords, 
  RotateCcw,
  Zap,
  Flame,
  ChevronRight,
  Printer,
  Compass
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { LessonMeta, CURRICULUM_DATA } from '@/data/curriculum';
import { sound } from '@/utils/soundEffects';

interface LinearLessonRunnerProps {
  lessonMeta: LessonMeta;
  grade: string;
  subtopics: any[];
  glossary: any[];
  pastPapers: any[];
  renderPlayground: () => React.ReactNode;
}

export function LinearLessonRunner({
  lessonMeta,
  grade,
  subtopics,
  glossary,
  pastPapers,
  renderPlayground
}: LinearLessonRunnerProps) {
  const router = useRouter();
  const { state, markStationComplete, recordCheckpointAttempt, markBlockRead } = useProgress();

  // 4 Linear Stages: 1: Theory -> 2: Interactive Sandbox -> 3: Checkpoint Quiz -> 4: Exam Past Papers -> 5: Victory
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [starsEarned, setStarsEarned] = useState(3);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({ 1: true });

  const mode = state.languageMode;

  // Find next curriculum lesson
  const allCurriculumLessons = CURRICULUM_DATA.filter(l => l.grade === grade);
  const currentIndex = allCurriculumLessons.findIndex(l => l.id === lessonMeta.id);
  const prevLesson = currentIndex > 0 ? allCurriculumLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allCurriculumLessons.length - 1 ? allCurriculumLessons[currentIndex + 1] : null;

  // Extract checkpoint quizzes from subtopics
  const checkpointQuizzes = subtopics
    .filter(st => st.checkpointQuiz)
    .map(st => st.checkpointQuiz);

  const handleStepSelect = (step: 1 | 2 | 3 | 4 | 5) => {
    sound.playClick(650);
    setCurrentStep(step);
    setCompletedSteps(prev => ({ ...prev, [step]: true }));
  };

  const handleNextStep = () => {
    sound.playClick(750);
    setCompletedSteps(prev => ({ ...prev, [currentStep]: true }));
    if (currentStep < 4) {
      setCurrentStep((s) => (s + 1) as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 4) {
      // Trigger level victory
      markStationComplete(`${lessonMeta.id}-level`, 3);
      sound.playVictoryFanfare();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
        });
      } catch {}
      setCurrentStep(5);
    }
  };

  const handlePrevStep = () => {
    sound.playClick(600);
    if (currentStep > 1) {
      setCurrentStep((s) => (s - 1) as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuizAnswer = (quizId: string, optionId: string, correctOptionId: string) => {
    if (quizSubmitted[quizId]) return;
    const isCorrect = optionId === correctOptionId;
    setQuizAnswers(prev => ({ ...prev, [quizId]: optionId }));
    setQuizSubmitted(prev => ({ ...prev, [quizId]: true }));
    if (isCorrect) {
      sound.playSuccessDing();
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
        });
      } catch {}
    } else {
      sound.playBuzzer();
    }
    recordCheckpointAttempt(quizId, isCorrect);
  };

  const stepsMeta = [
    { num: 1, label: 'Theory Notes', icon: BookOpen, desc: 'Bite-Sized Notes' },
    { num: 2, label: 'Interactive Mission', icon: Gamepad2, desc: 'Digital Sandbox' },
    { num: 3, label: 'Knowledge Check', icon: HelpCircle, desc: 'Fast Checkpoint' },
    { num: 4, label: 'Exam Boss Challenge', icon: Swords, desc: 'Past Papers' },
  ];

  return (
    <div className="space-y-6 pb-28">
      
      {/* Top Stepper Bar (Candy Crush / Duolingo Level Progress) */}
      <div className="clay-card p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-16 z-30 backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Back to Quest Map */}
          <Link
            href="/"
            onClick={() => sound.playClick(600)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 font-bold text-xs transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-indigo-500" />
            <span>Map</span>
          </Link>

          {/* Stepper Progress Nodes */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-1 justify-center max-w-xl">
            {stepsMeta.map((s, idx) => {
              const isActive = currentStep === s.num;
              const isCleared = !!completedSteps[s.num] || currentStep > s.num;
              const Icon = s.icon;

              return (
                <React.Fragment key={s.num}>
                  {idx > 0 && (
                    <div className="w-4 sm:w-8 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                      <div
                        className={`h-full transition-all duration-300 ${
                          currentStep >= s.num ? 'bg-indigo-600' : 'bg-transparent'
                        }`}
                      />
                    </div>
                  )}

                  <button
                    onClick={() => handleStepSelect(s.num as any)}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
                      isActive
                        ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105 font-bold'
                        : isCleared
                        ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] font-black">
                      {isCleared && !isActive ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        s.num
                      )}
                    </span>
                    <span className="text-xs hidden sm:inline">{s.label}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          {/* Print Sheet Link */}
          <Link
            href={`/revision-sheet/${grade}/${lessonMeta.id}`}
            title="PDF Notes"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 text-xs font-semibold flex items-center gap-1"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PDF Notes</span>
          </Link>
        </div>
      </div>

      {/* Main Focused Stage Content */}
      <AnimatePresence mode="wait">
        
        {/* ================= STEP 1: THEORY & CONCEPTS ================= */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Step 1 Header Banner */}
            <div className="clay-card p-5 sm:p-6 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white border border-indigo-500/30">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STEP 1 OF 4 • CONCEPT & THEORY BRIEFING</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">
                {lessonMeta.titleEn}
              </h2>
              <h3 className="text-xs sm:text-sm text-indigo-300 font-sinhala mt-0.5">
                {lessonMeta.titleSi}
              </h3>
            </div>

            {/* Bite-sized Subtopics Cards */}
            <div className="space-y-4">
              {subtopics.map((st, idx) => (
                <div
                  key={st.id || idx}
                  className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {st.number || idx + 1}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {mode !== 'si' ? st.titleEn : st.titleSi}
                      </h4>
                      {mode === 'dual' && (
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala">
                          {st.titleSi}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dual-Medium Paragraphs */}
                  <div className="space-y-2.5">
                    {st.blocks?.map((b: any, bIdx: number) => (
                      <div
                        key={bIdx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750 text-xs sm:text-sm space-y-1.5"
                      >
                        {mode !== 'si' && b.en && (
                          <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                            {b.en}
                          </p>
                        )}
                        {mode !== 'en' && b.si && (
                          <p className="font-sinhala text-slate-600 dark:text-slate-400 leading-loose">
                            {b.si}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Examples / Tables if available */}
                  {st.examples?.map((ex: any, eIdx: number) => (
                    <div key={eIdx} className="p-3 rounded-xl bg-amber-50/70 dark:bg-slate-800/60 border border-amber-200/70 dark:border-slate-700 text-xs space-y-1">
                      <span className="font-bold text-amber-800 dark:text-amber-300 block">
                        💡 {mode === 'si' ? ex.titleSi : ex.titleEn}:
                      </span>
                      <pre className="whitespace-pre-wrap font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                        {mode === 'si' ? ex.contentSi : ex.contentEn}
                      </pre>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= STEP 2: INTERACTIVE PLAYGROUND MISSION ================= */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-4"
          >
            {/* Step 2 Header Banner */}
            <div className="clay-card p-4 sm:p-5 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border border-purple-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold uppercase tracking-wider mb-0.5">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>STEP 2 OF 4 • DIGITAL SANDBOX MISSION</span>
                </div>
                <h3 className="text-base sm:text-lg font-black">
                  Interactive Lab & Station Challenges
                </h3>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/30 hidden sm:inline">
                Hands-On Practice
              </span>
            </div>

            {/* Active Sandbox Render */}
            <div className="space-y-4">
              {renderPlayground()}
            </div>
          </motion.div>
        )}

        {/* ================= STEP 3: FAST KNOWLEDGE CHECK ================= */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-5"
          >
            {/* Step 3 Header Banner */}
            <div className="clay-card p-4 sm:p-5 bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 text-white border border-sky-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider mb-0.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>STEP 3 OF 4 • FAST KNOWLEDGE CHECK</span>
                </div>
                <h3 className="text-base sm:text-lg font-black">
                  Test Your Understanding (+10 XP each)
                </h3>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/30 text-cyan-200 border border-cyan-400/30">
                {checkpointQuizzes.length} Questions
              </span>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {checkpointQuizzes.map((quiz, qIdx) => {
                const selectedOpt = quizAnswers[quiz.id];
                const isAnswered = !!quizSubmitted[quiz.id];

                return (
                  <div
                    key={quiz.id || qIdx}
                    className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300">
                        Question {qIdx + 1} of {checkpointQuizzes.length}
                      </span>
                      {isAnswered && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          selectedOpt === quiz.correctOptionId
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300'
                        }`}>
                          {selectedOpt === quiz.correctOptionId ? '✓ Correct (+10 XP)' : '✕ Review Rationale'}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      {quiz.questionEn}
                    </h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala">
                      {quiz.questionSi}
                    </p>

                    {/* Radio Choices */}
                    <div className="space-y-2 pt-1">
                      {quiz.options?.map((opt: any) => {
                        const isChosen = selectedOpt === opt.id;
                        const isCorrectOpt = opt.id === quiz.correctOptionId;

                        let style = 'bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-750 text-slate-700 dark:text-slate-200 hover:border-indigo-400';
                        if (isAnswered) {
                          if (isCorrectOpt) {
                            style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500';
                          } else if (isChosen && !isCorrectOpt) {
                            style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            disabled={isAnswered}
                            onClick={() => handleQuizAnswer(quiz.id, opt.id, quiz.correctOptionId)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${style}`}
                          >
                            <div>
                              <span>{opt.en}</span>
                              {opt.si && (
                                <span className="text-xs font-sinhala opacity-80 block mt-0.5">
                                  {opt.si}
                                </span>
                              )}
                            </div>
                            <div className={`w-4 h-4 rounded-full border shrink-0 ml-2 flex items-center justify-center ${
                              isChosen ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                            }`}>
                              {isChosen && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Rationale Reveal */}
                    {isAnswered && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1 mt-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
                          Textbook Rationale:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300">{quiz.explanationEn}</p>
                        <p className="text-slate-500 dark:text-slate-400 font-sinhala">{quiz.explanationSi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ================= STEP 4: PAST PAPER EXAM CHALLENGE ================= */}
        {currentStep === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-4"
          >
            {/* Step 4 Header Banner */}
            <div className="clay-card p-4 sm:p-5 bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white border border-red-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-red-300 font-bold uppercase tracking-wider mb-0.5">
                  <Swords className="w-3.5 h-3.5" />
                  <span>STEP 4 OF 4 • 2020 – 2025 PAST PAPER GAUNTLET</span>
                </div>
                <h3 className="text-base sm:text-lg font-black">
                  Official O/L Exam Questions & Marking Schemes
                </h3>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/30 text-red-200 border border-red-400/30">
                {pastPapers.length} Questions
              </span>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {pastPapers.slice(0, 5).map((q, qIdx) => {
                const isSelected = quizAnswers[q.id];
                const isSubmitted = !!quizSubmitted[q.id];

                return (
                  <div
                    key={q.id || qIdx}
                    className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-600 text-white">
                        {q.badgeText}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {q.type === 'mcq' ? 'Paper I (MCQ)' : 'Paper II (Structured)'}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      {q.questionEn}
                    </h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala">
                      {q.questionSi}
                    </p>

                    {/* MCQ Options */}
                    {q.type === 'mcq' && q.options && (
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt: any) => {
                          const isChosen = isSelected === opt.id;
                          const isCorrect = opt.id === q.correctOptionId;

                          let style = 'bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-750 text-slate-700 dark:text-slate-200 hover:border-indigo-400';
                          if (isSubmitted) {
                            if (isCorrect) {
                              style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500';
                            } else if (isChosen && !isCorrect) {
                              style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100';
                            }
                          }

                          return (
                            <button
                              key={opt.id}
                              disabled={isSubmitted}
                              onClick={() => handleQuizAnswer(q.id, opt.id, q.correctOptionId)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${style}`}
                            >
                              <div>
                                <span>{opt.en}</span>
                                {opt.si && (
                                  <span className="text-xs font-sinhala opacity-80 block mt-0.5">
                                    {opt.si}
                                  </span>
                                )}
                              </div>
                              <div className={`w-4 h-4 rounded-full border shrink-0 ml-2 flex items-center justify-center ${
                                isChosen ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                              }`}>
                                {isChosen && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ================= STEP 5: GRAND VICTORY STAGE ================= */}
        {currentStep === 5 && (
          <motion.div
            key="step5"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="clay-card p-8 sm:p-10 bg-slate-900 border-2 border-amber-400/80 text-white text-center space-y-6 max-w-xl mx-auto shadow-2xl"
          >
            <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-300">
              <Trophy className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                Unit Mastery Unlocked!
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-1">
                {lessonMeta.titleEn} Complete!
              </h2>
              <p className="text-xs text-slate-300 font-sinhala mt-1">
                ඔබ මෙම පාඩමේ සියලුම අදියර සාර්ථකව අවසන් කර ඇත!
              </p>
            </div>

            {/* 3 Golden Stars */}
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3].map((s) => (
                <Star key={s} className="w-10 h-10 fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
              ))}
            </div>

            {/* Score box */}
            <div className="p-4 bg-black/40 rounded-2xl border border-amber-500/30 flex items-center justify-around text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL XP</span>
                <span className="text-xl font-bold text-amber-400">+150 XP</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block text-[10px]">STATUS</span>
                <span className="text-xl font-bold text-emerald-400">PASSED</span>
              </div>
            </div>

            {/* Next Lesson Action */}
            <div className="space-y-3 pt-2">
              {nextLesson ? (
                <button
                  onClick={() => router.push(`/lesson/${grade}/${nextLesson.id}`)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  <span>Proceed to Unit 0{nextLesson.unitNumber}: {nextLesson.titleEn.slice(0, 24)}...</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={() => router.push('/')}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Return to Quest Map (Grade Complete!)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}

              <button
                onClick={() => handleStepSelect(1)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Lesson from Step 1</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* ================= THE DUOLINGO FLOATING BOTTOM ACTION BAR ================= */}
      {currentStep < 5 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t-2 border-indigo-500/30 p-3 sm:p-4 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            {/* Previous Step (if not step 1) */}
            {currentStep > 1 && (
              <button
                onClick={handlePrevStep}
                className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous Step</span>
              </button>
            )}

            {/* Step Status Text */}
            <div className="text-left hidden md:block">
              <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                CURRENT STAGE ({currentStep}/4)
              </span>
              <div className="font-extrabold text-xs text-slate-900 dark:text-white">
                {stepsMeta[currentStep - 1]?.label}
              </div>
            </div>

            {/* Giant Primary Golden Next Action Button */}
            <button
              onClick={handleNextStep}
              className="flex-1 sm:flex-initial px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 group ml-auto"
            >
              <span>
                {currentStep === 1
                  ? 'Start Interactive Mission ➔'
                  : currentStep === 2
                  ? 'Complete Mission ➔ Start Quiz'
                  : currentStep === 3
                  ? 'Proceed to Exam Boss ➔'
                  : 'Finish & Claim 3 Stars 🏆'}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
