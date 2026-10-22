'use client';

import React, { useState } from 'react';
import { Zap, Clock, CheckCircle2, XCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

interface SprintQuestion {
  id: string;
  promptEn: string;
  promptSi: string;
  options: { id: string; textEn: string; textSi: string }[];
  correctId: string;
  tipEn: string;
  tipSi: string;
}

const DAILY_SPRINT_POOL: SprintQuestion[] = [
  {
    id: 's1',
    promptEn: 'Which bus carries memory addresses from the CPU to the RAM?',
    promptSi: 'මතක ලිපිනයන් CPU වෙතින් RAM වෙත ගෙනයන බසය කුමක්ද?',
    options: [
      { id: 'a', textEn: 'Address Bus', textSi: 'ලිපින බසය (Address Bus)' },
      { id: 'b', textEn: 'Data Bus', textSi: 'දත්ත බසය (Data Bus)' },
      { id: 'c', textEn: 'Control Bus', textSi: 'පාලන බසය (Control Bus)' },
      { id: 'd', textEn: 'System Bus', textSi: 'පද්ධති බසය (System Bus)' },
    ],
    correctId: 'a',
    tipEn: 'Address Bus is unidirectional, pointing from CPU to memory locations.',
    tipSi: 'ලිපින බසය ඒක-දිශානත වන අතර CPU හි සිට මතක ලිපිනය වෙත ගමන් කරයි.',
  },
  {
    id: 's2',
    promptEn: 'What is the binary equivalent of decimal number 13?',
    promptSi: '13 දශම සංඛ්‍යාවේ ද්විමය අගය කුමක්ද?',
    options: [
      { id: 'a', textEn: '1100', textSi: '1100' },
      { id: 'b', textEn: '1101', textSi: '1101' },
      { id: 'c', textEn: '1011', textSi: '1011' },
      { id: 'd', textEn: '1110', textSi: '1110' },
    ],
    correctId: 'b',
    tipEn: '8 + 4 + 1 = 13, which corresponds to bits 1 1 0 1.',
    tipSi: '8 + 4 + 1 = 13, එනම් 1 1 0 1 වේ.',
  },
  {
    id: 's3',
    promptEn: 'Which HTML tag correctly creates a clickable hyperlink?',
    promptSi: 'ක්ලික් කළ හැකි හයිපර්ලින්ක් සබැඳියක් සාදන නිවැරදි HTML ටැගය කුමක්ද?',
    options: [
      { id: 'a', textEn: '<link href="...">', textSi: '<link href="..."> ' },
      { id: 'b', textEn: '<a href="...">', textSi: '<a href="..."> ' },
      { id: 'c', textEn: '<url target="...">', textSi: '<url target="..."> ' },
      { id: 'd', textEn: '<href link="...">', textSi: '<href link="..."> ' },
    ],
    correctId: 'b',
    tipEn: 'The <a> (anchor) tag with the href attribute creates hyperlinks.',
    tipSi: '<a> ටැගය (Anchor) href ගුණාංගය සමඟ සබැඳි නිර්මාණය කරයි.',
  },
  {
    id: 's4',
    promptEn: 'In Python, what is the output of print(15 % 4)?',
    promptSi: 'Python හි print(15 % 4) හි ප්‍රතිදානය කුමක්ද?',
    options: [
      { id: 'a', textEn: '3', textSi: '3' },
      { id: 'b', textEn: '3.75', textSi: '3.75' },
      { id: 'c', textEn: '0', textSi: '0' },
      { id: 'd', textEn: '4', textSi: '4' },
    ],
    correctId: 'a',
    tipEn: '% is modulus (remainder). 15 divided by 4 is 3 with remainder 3.',
    tipSi: '% යනු මාපාංකය (ශේෂය) වේ. 15, 4න් බෙදූ විට ශේෂය 3 වේ.',
  },
  {
    id: 's5',
    promptEn: 'Which phase of SDLC comes immediately after System Analysis?',
    promptSi: 'SDLC හි පද්ධති විශ්ලේෂණයෙන් පසු වහාම එන පියවර කුමක්ද?',
    options: [
      { id: 'a', textEn: 'System Design', textSi: 'පද්ධති සැලසුම්කරණය (System Design)' },
      { id: 'b', textEn: 'System Testing', textSi: 'පද්ධති පරීක්ෂාව (System Testing)' },
      { id: 'c', textEn: 'Deployment', textSi: 'ක්‍රියාත්මක කිරීම (Deployment)' },
      { id: 'd', textEn: 'Maintenance', textSi: 'නඩත්තුව (Maintenance)' },
    ],
    correctId: 'a',
    tipEn: 'Identification -> Feasibility -> Analysis -> Design -> Coding -> Testing.',
    tipSi: 'විශ්ලේෂණයෙන් පසු නිර්මාණකරණය / සැලසුම්කරණය (Design) සිදුවේ.',
  },
];

export function DailySprintCard() {
  const language = useGameStore((s) => s.language);
  const addXp = useGameStore((s) => s.addXp);
  const recordStudySession = useGameStore((s) => s.recordStudySession);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = DAILY_SPRINT_POOL[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (isAnswerChecked) return;
    sound.playClick(600);
    triggerHaptic('light');
    setSelectedOption(optId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked) return;
    setIsAnswerChecked(true);

    if (selectedOption === question.correctId) {
      sound.playSuccess();
      triggerHaptic('success');
      setCorrectCount((prev) => prev + 1);
    } else {
      sound.playError();
      triggerHaptic('error');
    }
  };

  const handleNext = () => {
    sound.playClick(700);
    triggerHaptic('light');
    setSelectedOption(null);
    setIsAnswerChecked(false);

    if (currentIdx < DAILY_SPRINT_POOL.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      sound.playFanfare();
      triggerHaptic('success');
      addXp(50);
      recordStudySession();
      setIsFinished(true);
    }
  };

  return (
    <>
      {/* Homepage Banner Card */}
      <div className="clay-card p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-indigo-500/10 border border-amber-500/30 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-md shrink-0">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                Daily Focus • Anti-Burnout
              </span>
              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 mins
              </span>
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mt-0.5">
              {language === 'si' ? 'දෛනික විනාඩි 5 ක්වික් අභ්‍යාසය' : 'Daily 5-Min Sprint Card'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 si-optical">
              {language === 'si'
                ? 'ප්‍රශ්න 5 කට පිළිතුරු දී +50 XP සහ Streak එක තහවුරු කරගන්න'
                : 'Solve 5 rapid micro-questions to claim +50 XP and secure your streak'}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playClick(700);
            triggerHaptic('medium');
            setIsOpen(true);
          }}
          className="min-touch-target px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-white font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span>{language === 'si' ? 'අභ්‍යාසය අරඹන්න' : 'Start 5-Min Sprint'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="clay-card w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4">
            {!isFinished ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 rounded-xl">
                      Question {currentIdx + 1} / {DAILY_SPRINT_POOL.length}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Score: {correctCount}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    ✕
                  </button>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / DAILY_SPRINT_POOL.length) * 100}%` }}
                  />
                </div>

                {/* Question Prompt */}
                <div className="space-y-1 pt-1">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                    {question.promptEn}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 si-optical">
                    {question.promptSi}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-2">
                  {question.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    const isCorrect = opt.id === question.correctId;

                    let btnClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:bg-slate-100';
                    if (isSelected) {
                      btnClass = 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500/30';
                    }
                    if (isAnswerChecked) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/40';
                      } else if (isSelected) {
                        btnClass = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/40';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full min-touch-target p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${btnClass}`}
                      >
                        <div>
                          <span className="text-xs sm:text-sm font-bold block">{opt.textEn}</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 si-optical block mt-0.5">
                            {opt.textSi}
                          </span>
                        </div>
                        {isAnswerChecked && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        )}
                        {isAnswerChecked && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Tip */}
                {isAnswerChecked && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-2xl text-xs space-y-1">
                    <p className="font-semibold text-amber-900 dark:text-amber-200">
                      💡 {question.tipEn}
                    </p>
                    <p className="text-amber-800 dark:text-amber-300 si-optical">
                      💡 {question.tipSi}
                    </p>
                  </div>
                )}

                {/* Bottom Action Button */}
                <div className="pt-2">
                  {!isAnswerChecked ? (
                    <button
                      onClick={handleCheckAnswer}
                      disabled={!selectedOption}
                      className="w-full min-touch-target py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-black text-sm transition-all shadow-md"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="w-full min-touch-target py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{currentIdx < DAILY_SPRINT_POOL.length - 1 ? 'Next Question' : 'Complete Sprint'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Finish Screen */
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">
                    {language === 'si' ? 'දෛනික අභ්‍යාසය සම්පූර්ණයි!' : 'Daily Sprint Complete!'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    You got {correctCount} of {DAILY_SPRINT_POOL.length} questions correct.
                    Bonus +50 XP awarded and study streak safely secured!
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full min-touch-target py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow-xl"
                >
                  Return to Learning Hub
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
