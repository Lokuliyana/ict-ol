'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Rocket,
  Compass,
  GraduationCap,
  Languages,
  BookOpen,
} from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { GradeLevel, AppLanguage } from '@/types/store';
import { sound } from '@/utils/soundEffects';

export interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartLevel1?: (nodeId: string) => void;
}

export function OnboardingModal({ isOpen, onClose, onStartLevel1 }: OnboardingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage>('en');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('10');
  const [dualSync, setDualSync] = useState(false);

  const setStoreLanguage = useGameStore((s) => s.setLanguage);
  const setStoreGrade = useGameStore((s) => s.setGrade);
  const setOnboardingCompleted = useGameStore((s) => s.setOnboardingCompleted);
  const setActiveNode = useGameStore((s) => s.setActiveNode);

  if (!isOpen) return null;

  const handleNextStep1 = (lang: AppLanguage) => {
    sound.playClick(650);
    setSelectedLanguage(lang);
    setStoreLanguage(lang);
    setStep(2);
  };

  const handleNextStep2 = (grade: GradeLevel) => {
    sound.playClick(650);
    setSelectedGrade(grade);
    setStoreGrade(grade);
    setStep(3);
  };

  const handleFinish = (route: 'level_1' | 'library') => {
    sound.playSuccessDing();
    setStoreLanguage(selectedLanguage);
    setStoreGrade(selectedGrade);
    setOnboardingCompleted(true);

    const defaultFirstNode = selectedGrade === '10' ? 'g10-u1-s1' : 'g11-u1-s1';
    setActiveNode(defaultFirstNode);

    if (route === 'level_1' && onStartLevel1) {
      onStartLevel1(defaultFirstNode);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-7 overflow-hidden my-auto">
        
        {/* Step Progress Dots */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step
                    ? 'w-8 bg-indigo-600'
                    : s < step
                    ? 'w-2 bg-emerald-500'
                    : 'w-2 bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono font-bold text-slate-400">
            Step {step} of 3
          </span>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: MEDIUM SELECTION */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Medium / භාෂා මාධ්‍යය</span>
                </div>
                <h2 id="onboarding-title" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Choose Your Learning Medium
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Select your primary language for syllabus notes and quizzes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Sinhala Option */}
                <button
                  type="button"
                  onClick={() => handleNextStep1('si')}
                  className="flex flex-col text-left p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-slate-850 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all group min-h-[110px]"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      සිංහල
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    සිංහල මාධ්‍යය
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    ජාතික විෂය නිර්දේශයේ සියලුම සටහන් සහ විභාග ගැටලු.
                  </p>
                </button>

                {/* English Option */}
                <button
                  type="button"
                  onClick={() => handleNextStep1('en')}
                  className="flex flex-col text-left p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-white dark:bg-slate-850 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group min-h-[110px]"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                      English
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    English Medium
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Complete National Syllabus short notes and exam papers.
                  </p>
                </button>
              </div>

              {/* Optional Dual-Sync Helper Pill */}
              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400">
                  Tip: You can switch languages or toggle Dual-Sync side-by-side mode anytime from the Top HUD.
                </span>
              </div>
            </motion.div>
          )}

          {/* STEP 2: GRADE SELECTION */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Grade / ශ්‍රේණිය</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Select Your O/L Grade
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Your quest road and practice nodes will adapt automatically.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Grade 10 */}
                <button
                  type="button"
                  onClick={() => handleNextStep2('10')}
                  className="flex flex-col text-left p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-500 bg-white dark:bg-slate-850 hover:bg-indigo-50/30 transition-all group min-h-[120px]"
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      10
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Grade 10 (10 ශ්‍රේණිය)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    9 Units • Hardware, OS, Logic Gates, Spreadsheets, DBMS
                  </p>
                </button>

                {/* Grade 11 */}
                <button
                  type="button"
                  onClick={() => handleNextStep2('11')}
                  className="flex flex-col text-left p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-500 bg-white dark:bg-slate-850 hover:bg-indigo-50/30 transition-all group min-h-[120px]"
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      11
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Grade 11 (11 ශ්‍රේණිය)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    6 Units • Algorithms, Programming, SDLC, Web, Multimedia
                  </p>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Language</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: ENTRY ROUTE SELECTION */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Entry Route / ආරම්භක මාර්ගය</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  How Would You Like to Start?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Jump straight into Level 1 or explore the full interactive Quest Map.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Route A: Level 1 Start */}
                <button
                  type="button"
                  onClick={() => handleFinish('level_1')}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98] group min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Rocket className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm sm:text-base">Start at Level 1</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-indigo-100 mt-0.5">
                        Begin from Unit 01 (Factory Conveyor) with guided micro-flashcards.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>

                {/* Route B: Explore Map */}
                <button
                  type="button"
                  onClick={() => handleFinish('library')}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-850 transition-all active:scale-[0.98] group min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        Explore Topic Library & Map
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Browse all units, Boss Arenas, and interactive sandboxes freely.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Grade</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
