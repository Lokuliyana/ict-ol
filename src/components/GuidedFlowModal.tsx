'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Languages, 
  GraduationCap, 
  Rocket, 
  Map, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Compass, 
  Gamepad2,
  BookOpen,
  X,
  Play
} from 'lucide-react';
import { useProgress, LanguageMode } from '@/context/ProgressContext';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { sound } from '@/utils/soundEffects';

interface GuidedFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStep?: 1 | 2 | 3 | 4;
}

export function GuidedFlowModal({ isOpen, onClose, defaultStep = 1 }: GuidedFlowModalProps) {
  const router = useRouter();
  const { state, setLanguageMode, setUserGrade, setOnboardingCompleted } = useProgress();

  const [step, setStep] = useState<number>(defaultStep);
  const [selectedMedium, setSelectedMedium] = useState<LanguageMode>(state.languageMode || 'dual');
  const [selectedGrade, setSelectedGrade] = useState<'10' | '11'>(state.userGrade || '10');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('g10-u1');
  const [selectedPart, setSelectedPart] = useState<'beginning' | 'specific'>('beginning');

  if (!isOpen) return null;

  const lessonsForGrade = CURRICULUM_DATA.filter(l => l.grade === selectedGrade);
  const currentLessonMeta = CURRICULUM_DATA.find(l => l.id === selectedLessonId) || lessonsForGrade[0];

  const handleSelectMedium = (mode: LanguageMode) => {
    sound.playClick(700);
    setSelectedMedium(mode);
    setLanguageMode(mode);
  };

  const handleSelectGrade = (g: '10' | '11') => {
    sound.playClick(750);
    setSelectedGrade(g);
    setUserGrade(g);
    const firstLesson = CURRICULUM_DATA.find(l => l.grade === g);
    if (firstLesson) {
      setSelectedLessonId(firstLesson.id);
    }
  };

  const handleFinishBeginning = () => {
    sound.playSuccessDing();
    setOnboardingCompleted(true);
    onClose();
    // Launch grade's first lesson station 1
    const firstLesson = CURRICULUM_DATA.find(l => l.grade === selectedGrade);
    const lessonId = firstLesson ? firstLesson.id : (selectedGrade === '10' ? 'g10-u1' : 'g11-u1');
    router.push(`/lesson/${selectedGrade}/${lessonId}?flow=beginning`);
  };

  const handleFinishSpecificLesson = (partType: 'beginning' | 'theory' | 'pastpapers') => {
    sound.playSuccessDing();
    setOnboardingCompleted(true);
    onClose();
    const tabParam = partType === 'theory' ? '&tab=theory' : partType === 'pastpapers' ? '&tab=pastpapers' : '';
    router.push(`/lesson/${selectedGrade}/${selectedLessonId}?flow=${partType}${tabParam}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        className="w-full max-w-xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                Quick Setup & Learning Flow
              </h3>
              <p className="text-[11px] text-indigo-100 font-sinhala">
                ඔබට ගැලපෙන මාධ්‍යය සහ පාඩම් මාර්ගය තෝරන්න
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded-full">
              Step {step} / 4
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-indigo-900/30 h-1.5">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body with Step transitions */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Medium Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <Languages className="w-4 h-4" />
                    <span>Step 1: Choose Medium</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Which language medium do you prefer?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබ ඉගෙනීමට කැමති භාෂා මාධ්‍යය තෝරන්න (පසුව ඕනෑම වේලාවක වෙනස් කළ හැක)
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  <button
                    onClick={() => handleSelectMedium('dual')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                      selectedMedium === 'dual'
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-md ring-1 ring-indigo-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                        Dual
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                          Dual-Sync (English + Sinhala)
                        </div>
                        <div className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala">
                          පෙළපොත් සටහන් දෙකම එකවර සමමුහුර්තව කියවන්න
                        </div>
                      </div>
                    </div>
                    {selectedMedium === 'dual' && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    )}
                  </button>

                  <button
                    onClick={() => handleSelectMedium('si')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                      selectedMedium === 'si'
                        ? 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/50 shadow-md ring-1 ring-emerald-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                        සිං
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white font-sinhala">
                          සිංහල මාධ්‍යය පමණි (Sinhala Medium)
                        </div>
                        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-sinhala">
                          නිල පෙළපොත් ආශ්‍රිත සිංහල සටහන් සහ විභාග ගැටලු
                        </div>
                      </div>
                    </div>
                    {selectedMedium === 'si' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </button>

                  <button
                    onClick={() => handleSelectMedium('en')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                      selectedMedium === 'en'
                        ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 shadow-md ring-1 ring-blue-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        EN
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                          English Medium Only
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-400">
                          Complete National Syllabus English short notes & past papers
                        </div>
                      </div>
                    </div>
                    {selectedMedium === 'en' && (
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Grade Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Step 2: Choose Grade</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Select Your Curriculum Grade
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබට අධ්‍යයනය කිරීමට අවශ්‍ය ශ්‍රේණිය තෝරන්න
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleSelectGrade('10')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between min-h-[140px] ${
                      selectedGrade === '10'
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-lg ring-2 ring-indigo-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base mb-2">
                        10
                      </div>
                      <div className="font-extrabold text-base text-slate-900 dark:text-white">
                        Grade 10
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala font-medium">
                        10 ශ්‍රේණිය (Units 1 – 8)
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      8 Full Units • Hardware, OS, Word, Excel, DBMS
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectGrade('11')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between min-h-[140px] ${
                      selectedGrade === '11'
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-lg ring-2 ring-indigo-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-base mb-2">
                        11
                      </div>
                      <div className="font-extrabold text-base text-slate-900 dark:text-white">
                        Grade 11
                      </div>
                      <div className="text-xs text-purple-600 dark:text-purple-400 font-sinhala font-medium">
                        11 ශ්‍රේණිය (Units 1 – 6)
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      6 Full Units • Programming, SDLC, Web, Internet
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Route Decision (Start from Beginning vs Select Lesson) */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    <span>Step 3: Learning Journey</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    How would you like to start?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    ඔබ ආරම්භ කිරීමට කැමති ආකාරය තෝරන්න
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  {/* Option A: Start from Beginning */}
                  <button
                    onClick={handleFinishBeginning}
                    className="p-4 rounded-2xl border-2 border-indigo-500/60 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/10 hover:border-indigo-500 hover:from-indigo-500/20 text-left transition-all flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                            Start from the Beginning
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">
                            Recommended
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Follow the step-by-step quest path (Unit 01 ➔ Level 01)
                        </div>
                        <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-sinhala mt-0.5">
                          පළමු පාඩමේ සිට පිළිවෙළින් ආරම්භ කරන්න
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  {/* Option B: Choose a Specific Lesson */}
                  <button
                    onClick={() => {
                      sound.playClick(800);
                      setStep(4);
                    }}
                    className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 hover:border-indigo-400 text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Map className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                          Choose a Specific Lesson
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Jump directly to any Grade {selectedGrade} Unit or topic
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sinhala mt-0.5">
                          ඔබට අවශ්‍ය විශේෂිත පාඩමකට සෘජුව පිවිසෙන්න
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Specific Lesson & Part Selection */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <Map className="w-4 h-4" />
                    <span>Step 4: Select Lesson & Part</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    Pick Your Target Unit & Section
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                    පාඩම සහ ආරම්භ කිරීමට අවශ්‍ය කොටස තෝරන්න
                  </p>
                </div>

                {/* Lesson Picker Dropdown / Scroll list */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Target Unit (Grade {selectedGrade}):
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-1">
                    {lessonsForGrade.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          sound.playClick(650);
                          setSelectedLessonId(l.id);
                        }}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                          selectedLessonId === l.id
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 font-bold text-indigo-950 dark:text-indigo-200 ring-1 ring-indigo-600'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <div className="truncate pr-2">
                          <span className="font-mono text-indigo-600 dark:text-indigo-400 mr-2">
                            Unit 0{l.unitNumber}
                          </span>
                          <span>{l.titleEn}</span>
                        </div>
                        {selectedLessonId === l.id && (
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part Selection Buttons */}
                <div className="pt-2 space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    How do you want to launch this lesson?
                  </label>

                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => handleFinishSpecificLesson('beginning')}
                      className="p-3 rounded-xl border-2 border-indigo-500 bg-indigo-500/10 hover:bg-indigo-500/20 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Gamepad2 className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            🚀 Start from Part 01 / Station 1
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Interactive digital sandbox & station challenges
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleFinishSpecificLesson('theory')}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:border-indigo-400 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-5 h-5 text-emerald-600" />
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            📖 Read Theory & Short Notes First
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Dual-Medium textbook notes & diagrams
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleFinishSpecificLesson('pastpapers')}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:border-indigo-400 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            ⚔️ Jump to Past Papers (2020 – 2025)
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Real O/L Exam MCQs and structured questions
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Modal Bottom Actions Navigation */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => {
                sound.playClick(600);
                setStep(s => s - 1);
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Skip Setup
            </button>
          )}

          {step < 3 && (
            <button
              onClick={() => {
                sound.playClick(750);
                setStep(s => s + 1);
              }}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
