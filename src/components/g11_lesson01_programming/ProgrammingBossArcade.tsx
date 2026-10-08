'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Swords, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight,
  ShieldAlert,
  Play,
  Terminal,
  HelpCircle,
  FileCode2,
  Table
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function ProgrammingBossArcade() {
  const [currentBossIndex, setCurrentBossIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [completedBosses, setCompletedBosses] = useState<Record<number, boolean>>({});

  // Boss 1 State (2020 P2 Q04 - Loop Until -1)
  const [boss1SelectedOption, setBoss1SelectedOption] = useState<string | null>(null);
  const [boss1Result, setBoss1Result] = useState<boolean | null>(null);

  // Boss 2 State (2022 P2 Q04 - BMI Calculator)
  const [boss2Weight, setBoss2Weight] = useState<number>(70);
  const [boss2Height, setBoss2Height] = useState<number>(1.6);
  const [boss2Output, setBoss2Output] = useState<string | null>(null);
  const [boss2Result, setBoss2Result] = useState<boolean | null>(null);

  // Boss 3 State (2023 P2 Q04 - Max Mark Trace)
  const [boss3MaxMark, setBoss3MaxMark] = useState<number | null>(null);
  const [boss3Result, setBoss3Result] = useState<boolean | null>(null);

  // Boss 4 State (2024 P2 Q04 - 1D Array Sum with For Loop)
  const [boss4Choice, setBoss4Choice] = useState<string | null>(null);
  const [boss4Result, setBoss4Result] = useState<boolean | null>(null);

  // Boss 5 State (2025 P2 Q04 - Compiler vs Interpreter)
  const [boss5Matches, setBoss5Matches] = useState<Record<string, string>>({});
  const [boss5Result, setBoss5Result] = useState<boolean | null>(null);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  // Boss 1 Submit
  const handleBoss1Submit = (opt: string) => {
    sound.playClick(600);
    setBoss1SelectedOption(opt);
    const isCorrect = opt === 'opt_correct';
    setBoss1Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 0: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  // Boss 2 Submit
  const handleBoss2Calculate = () => {
    sound.playClick(700);
    const bmi = Number((boss2Weight / (boss2Height * boss2Height)).toFixed(2));
    const category = bmi >= 25 ? 'Overweight' : 'Normal';
    setBoss2Output(`BMI = ${bmi} -> Category: ${category}`);
    setBoss2Result(true);
    sound.playVictory();
    triggerConfetti();
    setScore(prev => prev + 100);
    setStreak(prev => prev + 1);
    setCompletedBosses(prev => ({ ...prev, 1: true }));
  };

  // Boss 3 Submit
  const handleBoss3Submit = (val: number) => {
    sound.playClick(600);
    setBoss3MaxMark(val);
    const isCorrect = val === 90;
    setBoss3Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 2: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  // Boss 4 Submit
  const handleBoss4Submit = (choiceKey: string) => {
    sound.playClick(600);
    setBoss4Choice(choiceKey);
    const isCorrect = choiceKey === 'correct_loop';
    setBoss4Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 3: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  // Boss 5 Submit
  const handleBoss5Match = (propKey: string, val: string) => {
    sound.playClick(500);
    const updated = { ...boss5Matches, [propKey]: val };
    setBoss5Matches(updated);

    if (updated.trans && updated.obj && updated.err) {
      const isCorrect = updated.trans === 'entire' && updated.obj === 'generates_exe' && updated.err === 'all_at_end';
      setBoss5Result(isCorrect);
      if (isCorrect) {
        sound.playVictory();
        triggerConfetti();
        setScore(prev => prev + 100);
        setStreak(prev => prev + 1);
        setCompletedBosses(prev => ({ ...prev, 4: true }));
      } else {
        sound.playError();
        setStreak(0);
      }
    }
  };

  const totalCompleted = Object.values(completedBosses).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Top Header Arcade HUD */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Swords className="w-4 h-4" />
              <span>STATION 06 • PAPER II ESSAY BOSS GAUNTLET (2020 – 2025 O/L විභාග සටන්)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Programming Paper II Boss Arena (ක්‍රමලේඛන රචනා ප්‍රශ්න සටන්)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Test your algorithmic problem-solving skills against authentic Sri Lankan G.C.E. O/L Paper II Question 04 essay challenges.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Score</div>
              <div className="text-sm font-black text-amber-400 font-mono">{score} pts</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Streak</div>
              <div className="text-sm font-black text-purple-400 font-mono">{streak} 🔥</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Clear Rate</div>
              <div className="text-sm font-black text-emerald-400 font-mono">{totalCompleted}/5 Bosses</div>
            </div>
          </div>
        </div>

        {/* 5 Boss Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
          {[
            { idx: 0, title: 'Boss 1: Loop Until -1', year: '2020 P2 Q04' },
            { idx: 1, title: 'Boss 2: BMI Calculator', year: '2022 P2 Q04' },
            { idx: 2, title: 'Boss 3: Max Mark Trace', year: '2023 P2 Q04' },
            { idx: 3, title: 'Boss 4: Array 1D Sum', year: '2024 P2 Q04' },
            { idx: 4, title: 'Boss 5: Compiler vs Interp', year: '2025 P2 Q04' },
          ].map((b) => {
            const isSelected = currentBossIndex === b.idx;
            const isDone = completedBosses[b.idx];

            return (
              <button
                key={b.idx}
                onClick={() => { sound.playClick(600); setCurrentBossIndex(b.idx); }}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-purple-600/30 border-purple-400 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span>{b.year}</span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs font-bold text-white leading-tight truncate">
                  {b.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Boss Stage */}
      <AnimatePresence mode="wait">
        {/* Boss 1: Loop Until -1 (2020 P2 Q04) */}
        {currentBossIndex === 0 && (
          <motion.div
            key="boss_0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                2020 O/L Paper II • Question 04
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                A user inputs positive integers one by one until -1 is entered. Which algorithm accurately sums all numbers (excluding -1) and outputs the total?
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                පරිශීලකයා -1 ඇතුළත් කරන තෙක් සංඛ්‍යා ලබාගෙන, -1 හැර සෙසු සංඛ්‍යාවල එකතුව ලබාදෙන නිවැරදි ඇල්ගොරිතමය තෝරන්න.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 'opt_wrong_init',
                  label: '(A)',
                  code: 'Sum := 0;\nreadln(Num);\nwhile (Num <> -1) do\nbegin\n  readln(Num); { Skipping first input! }\n  Sum := Sum + Num;\nend;\nwriteln(Sum);'
                },
                {
                  id: 'opt_correct',
                  label: '(B) - Correct Structure',
                  code: 'Sum := 0;\nreadln(Num);\nwhile (Num <> -1) do\nbegin\n  Sum := Sum + Num;\n  readln(Num);\nend;\nwriteln(Sum);'
                },
                {
                  id: 'opt_wrong_accum',
                  label: '(C)',
                  code: 'Sum := 0;\nrepeat\n  readln(Num);\n  Sum := Sum + Num; { Adds -1 to sum! }\nuntil (Num = -1);\nwriteln(Sum);'
                },
                {
                  id: 'opt_wrong_loop',
                  label: '(D)',
                  code: 'for i := 1 to 10 do\nbegin\n  readln(Num);\n  Sum := Sum + Num;\nend;\nwriteln(Sum);'
                }
              ].map((opt) => {
                const isSelected = boss1SelectedOption === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleBoss1Submit(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                      isSelected
                        ? opt.id === 'opt_correct'
                          ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                          : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-mono font-bold text-xs text-cyan-400">{opt.label}</div>
                    <pre className="text-[11px] font-mono text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800 overflow-x-auto">
                      {opt.code}
                    </pre>
                  </button>
                );
              })}
            </div>

            {boss1Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss1Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss1Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss1Result
                    ? 'FULL MARKS! In the WHILE loop, accumulating Sum before the next readln(Num) ensures -1 is never added to the total.'
                    : 'Check loop mechanics: Repeat..until in option C adds -1 to Sum before checking the condition, producing an inaccurate total.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 2: BMI Calculator (2022 P2 Q04) */}
        {currentBossIndex === 1 && (
          <motion.div
            key="boss_1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                2022 O/L Paper II • Question 04
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Calculate Body Mass Index: BMI = W / (H * H). If BMI &ge; 25, output &apos;Overweight&apos;, else &apos;Normal&apos;.
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                ස්කන්ධය (W) හා උස (H) ආශ්‍රයෙන් BMI ගණනය කර, BMI &ge; 25 නම් &apos;Overweight&apos; ද නැතහොත් &apos;Normal&apos; ද ප්‍රතිදානය කරන්න.
              </p>
            </div>

            {/* Live Interactive Runner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
                <div className="text-xs font-bold text-white">Input Parameters:</div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Weight (kg):</span>
                    <span className="font-mono font-bold text-cyan-400">{boss2Weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={120}
                    value={boss2Weight}
                    onChange={(e) => setBoss2Weight(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Height (m):</span>
                    <span className="font-mono font-bold text-amber-400">{boss2Height} m</span>
                  </div>
                  <input
                    type="range"
                    min={1.2}
                    max={2.1}
                    step={0.05}
                    value={boss2Height}
                    onChange={(e) => setBoss2Height(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <button
                  onClick={handleBoss2Calculate}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Execute Pascal BMI Routine
                </button>
              </div>

              {/* Code Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-amber-400 uppercase font-bold border-b border-slate-800 pb-1 mb-2">
                    PASCAL SELECTION LOGIC:
                  </div>
                  <div className="text-cyan-300">BMI := Weight / (Height * Height);</div>
                  <div className="text-purple-300">if (BMI &gt;= 25) then</div>
                  <div className="text-emerald-300 pl-4">writeln(&apos;Overweight&apos;)</div>
                  <div className="text-purple-300">else</div>
                  <div className="text-emerald-300 pl-4">writeln(&apos;Normal&apos;);</div>
                </div>

                {boss2Output && (
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-emerald-500/40 text-emerald-300 font-bold text-xs">
                    Terminal Output: {boss2Output}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Boss 3: Find Max Mark (2023 P2 Q04) */}
        {currentBossIndex === 2 && (
          <motion.div
            key="boss_2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                2023 O/L Paper II • Question 04
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Trace Table Challenge: Trace the following stream of 10 marks to determine the final value of <code>MaxMark</code>:
              </h3>
              <div className="mt-2 p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 flex flex-wrap gap-2">
                {[50, 62, 45, 80, 75, 30, 90, 85, 60, 70].map((m, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-950 rounded border border-slate-800">
                    Mark #{i + 1}: {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[80, 85, 90, 95].map((val) => (
                <button
                  key={val}
                  onClick={() => handleBoss3Submit(val)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    boss3MaxMark === val
                      ? val === 90
                        ? 'bg-emerald-950/60 border-emerald-400 text-white'
                        : 'bg-rose-950/60 border-rose-400 text-white'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xl font-black font-mono text-white">MaxMark = {val}</div>
                </button>
              ))}
            </div>

            {boss3Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss3Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss3Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss3Result
                    ? 'CORRECT! As the loop iterates, MaxMark updates: 50 -> 62 -> 80 -> 90. The remaining marks (85, 60, 70) are <= 90, leaving final MaxMark = 90.'
                    : 'Trace carefully: 90 is the highest mark in the array, so MaxMark reaches 90 and remains 90 till the end.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 4: 1D Array Sum with For Loop (2024 P2 Q04) */}
        {currentBossIndex === 3 && (
          <motion.div
            key="boss_3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                2024 O/L Paper II • Question 04
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Which Pascal code segment correctly reads 5 integers into array <code>A</code>, computes their sum using a <code>for</code> loop, and displays the sum?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 'correct_loop',
                  label: '(1) - Standard Accumulator Loop',
                  code: 'sum := 0;\nfor i := 1 to 5 do\nbegin\n  readln(A[i]);\n  sum := sum + A[i];\nend;\nwriteln(\'Sum = \', sum);'
                },
                {
                  id: 'wrong_indexing',
                  label: '(2) - Indexing Error',
                  code: 'sum := 0;\nfor i := 1 to 5 do\nbegin\n  readln(A[1]); { Always reading into A[1] }\n  sum := sum + A[1];\nend;\nwriteln(sum);'
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleBoss4Submit(opt.id)}
                  className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                    boss4Choice === opt.id
                      ? opt.id === 'correct_loop'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="font-mono font-bold text-xs text-cyan-400">{opt.label}</div>
                  <pre className="text-[11px] font-mono text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    {opt.code}
                  </pre>
                </button>
              ))}
            </div>

            {boss4Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss4Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss4Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss4Result
                    ? 'FULL MARKS! Using loop index variable i inside array index brackets A[i] correctly traverses slots 1 through 5.'
                    : 'Check your array indexing: Hardcoding A[1] ignores slots 2, 3, 4, 5.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 5: Compiler vs Interpreter Faceoff (2025 P2 Q04) */}
        {currentBossIndex === 4 && (
          <motion.div
            key="boss_4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-500/30">
                2025 O/L Paper II • Question 04 (a)
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                State two core differences between a Compiler and an Interpreter:
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                සම්පාදකයක් (Compiler) හා අර්ථවින්‍යාසකයක් (Interpreter) අතර ප්‍රධාන වෙනස්කම් 2ක් දක්වන්න.
              </p>
            </div>

            <div className="space-y-4">
              {/* Row 1: Translation Unit */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white">1. Translation Unit (පරිවර්තනය කරන ආකාරය):</div>
                  <div className="text-[11px] text-slate-400">How source code is processed</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBoss5Match('trans', 'entire')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.trans === 'entire'
                        ? 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Entire Code at once (Compiler)
                  </button>
                  <button
                    onClick={() => handleBoss5Match('trans', 'line_by_line')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.trans === 'line_by_line'
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Line-by-Line (Interpreter)
                  </button>
                </div>
              </div>

              {/* Row 2: Object Code File */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white">2. Machine Object File (.exe නිපදවීම):</div>
                  <div className="text-[11px] text-slate-400">Intermediate binary executable creation</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBoss5Match('obj', 'generates_exe')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.obj === 'generates_exe'
                        ? 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Generates .exe Object File (Compiler)
                  </button>
                  <button
                    onClick={() => handleBoss5Match('obj', 'no_exe')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.obj === 'no_exe'
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    No Object File created (Interpreter)
                  </button>
                </div>
              </div>

              {/* Row 3: Error Timing */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white">3. Error Output Timing (දෝෂ වාර්තා කිරීම):</div>
                  <div className="text-[11px] text-slate-400">When syntax errors are flagged</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBoss5Match('err', 'all_at_end')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.err === 'all_at_end'
                        ? 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Reports all at the end (Compiler)
                  </button>
                  <button
                    onClick={() => handleBoss5Match('err', 'stops_at_first')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      boss5Matches.err === 'stops_at_first'
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Halts at first error (Interpreter)
                  </button>
                </div>
              </div>
            </div>

            {boss5Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss5Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss5Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss5Result
                    ? 'PERFECT 2025 ESSAY MARKS! Compiler: Translates entire code at once, generates .exe object file, reports all errors at end. Interpreter: Translates line-by-line, no object file, halts at first error.'
                    : 'Check your selections for Compiler characteristics.'}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
