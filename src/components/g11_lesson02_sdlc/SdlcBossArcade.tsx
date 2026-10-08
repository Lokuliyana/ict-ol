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
  HelpCircle,
  FileText,
  Boxes
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function SdlcBossArcade() {
  const [currentBossIndex, setCurrentBossIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [completedBosses, setCompletedBosses] = useState<Record<number, boolean>>({});

  // Boss 1 State (2020 P1 Q11 - Order of SDLC)
  const [boss1Choice, setBoss1Choice] = useState<string | null>(null);
  const [boss1Result, setBoss1Result] = useState<boolean | null>(null);

  // Boss 2 State (2020 P2 Q06 - Bank Parallel Deployment)
  const [boss2Choice, setBoss2Choice] = useState<string | null>(null);
  const [boss2Result, setBoss2Result] = useState<boolean | null>(null);

  // Boss 3 State (2021 P2 Q06 - Hospital 4-part)
  const [boss3Answers, setBoss3Answers] = useState<{ a: string; b: string; c: string; d: string }>({
    a: '',
    b: '',
    c: '',
    d: ''
  });
  const [boss3Result, setBoss3Result] = useState<boolean | null>(null);

  // Boss 4 State (2024 P2 Q01 viii - Prototype Definition)
  const [boss4Choice, setBoss4Choice] = useState<string | null>(null);
  const [boss4Result, setBoss4Result] = useState<boolean | null>(null);

  // Boss 5 State (2025 P2 Q01 ix - Design Phase Tasks)
  const [boss5Task, setBoss5Task] = useState<string | null>(null);
  const [boss5Consult, setBoss5Consult] = useState<string | null>(null);
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

  // Boss 1 Check
  const handleBoss1Submit = (optKey: string) => {
    sound.playClick(600);
    setBoss1Choice(optKey);
    const isCorrect = optKey === 'correct_seq';
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

  // Boss 2 Check
  const handleBoss2Submit = (optKey: string) => {
    sound.playClick(600);
    setBoss2Choice(optKey);
    const isCorrect = optKey === 'backup_safety';
    setBoss2Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 1: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  // Boss 3 Check
  const handleBoss3Select = (part: 'a' | 'b' | 'c' | 'd', val: string) => {
    sound.playClick(500);
    const updated = { ...boss3Answers, [part]: val };
    setBoss3Answers(updated);

    if (updated.a && updated.b && updated.c && updated.d) {
      const isCorrect = 
        updated.a === 'iterative' &&
        updated.b === 'uat' &&
        updated.c === 'direct' &&
        updated.d === 'pilot';
      
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
    }
  };

  // Boss 4 Check
  const handleBoss4Submit = (optKey: string) => {
    sound.playClick(600);
    setBoss4Choice(optKey);
    const isCorrect = optKey === 'prototype_def';
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

  // Boss 5 Check
  const handleBoss5Submit = (task: string, consult: string) => {
    sound.playClick(600);
    setBoss5Task(task);
    setBoss5Consult(consult);
    const isCorrect = task === 'ui_db_design' && consult === 'yes_alignment';
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
  };

  const totalCompleted = Object.values(completedBosses).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Top Header Arcade HUD */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Swords className="w-4 h-4" />
              <span>STATION 06 • SDLC PAST PAPER BOSS GAUNTLET (2020 – 2025 විභාග සටන්)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              SDLC Paper II Boss Arena (පද්ධති සංවර්ධන විභාග අභියෝග)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Solve real G.C.E. O/L Paper I & Paper II SDLC questions across ordering, banking deployment, hospital multi-branch cases, prototyping, and design phase duties.
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
              <div className="text-sm font-black text-blue-400 font-mono">{streak} 🔥</div>
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
            { idx: 0, title: 'Boss 1: SDLC Activity Order', year: '2020 P1 Q11' },
            { idx: 1, title: 'Boss 2: Bank Parallel System', year: '2020 P2 Q06' },
            { idx: 2, title: 'Boss 3: Hospital Multi-Branch', year: '2021 P2 Q06' },
            { idx: 3, title: 'Boss 4: What is a Prototype?', year: '2024 P2 Q01' },
            { idx: 4, title: 'Boss 5: Design Tasks & Users', year: '2025 P2 Q01' },
          ].map((b) => {
            const isSelected = currentBossIndex === b.idx;
            const isDone = completedBosses[b.idx];

            return (
              <button
                key={b.idx}
                onClick={() => { sound.playClick(600); setCurrentBossIndex(b.idx); }}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600/30 border-blue-400 text-white shadow-lg shadow-blue-500/20'
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
        {/* Boss 1: SDLC Order (2020 P1 Q11) */}
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
                2020 O/L Paper I • Question 11
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Which one of the following correctly represents the chronological order of activities in the System Development Life Cycle (SDLC)?
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) නිවැරදි අනුපිළිවෙල දක්වන පිළිතුර කුමක්ද?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'wrong_1', label: '(1)', text: 'Design -> Coding -> Testing -> Requirements -> Deployment' },
                { id: 'correct_seq', label: '(2)', text: 'Requirements -> Design -> Coding -> Testing -> Deployment ✓' },
                { id: 'wrong_2', label: '(3)', text: 'Requirements -> Testing -> Design -> Coding -> Deployment' },
                { id: 'wrong_3', label: '(4)', text: 'Coding -> Requirements -> Design -> Deployment -> Testing' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleBoss1Submit(opt.id)}
                  className={`p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                    boss1Choice === opt.id
                      ? opt.id === 'correct_seq'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="font-mono font-bold text-xs text-cyan-400">{opt.label}</div>
                  <div className="text-xs font-bold text-white">{opt.text}</div>
                </button>
              ))}
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
                    ? 'CORRECT (+100 pts)! Requirements -> Design -> Coding -> Testing -> Deployment (followed by Maintenance).'
                    : 'Remember the sequence: You must gather Requirements and create the Design before you can Code and Test!'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 2: Bank Parallel Deployment (2020 P2 Q06) */}
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
                2020 O/L Paper II • Question 06
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                A commercial bank introduces a new online banking platform. Why is <strong>Parallel Deployment</strong> the most suitable implementation strategy?
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                බැංකුවක් නව අන්තර්ජාල බැංකු පද්ධතියක් ස්ථාපනය කිරීමේදී සමාන්තර ස්ථාපනය (Parallel Deployment) තෝරාගැනීමට හේතුව කුමක්ද?
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'cheapest', text: 'Because it is the cheapest method and requires the least amount of labor.' },
                { id: 'backup_safety', text: 'Because it provides a live backup safety net; if the new online banking system encounters unexpected errors or crashes, the existing operational system continues handling customer financial transactions without disruption or monetary loss. ✓' },
                { id: 'instant', text: 'Because it terminates the old system immediately on the first day.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleBoss2Submit(opt.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    boss2Choice === opt.id
                      ? opt.id === 'backup_safety'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold leading-relaxed">{opt.text}</div>
                </button>
              ))}
            </div>

            {boss2Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss2Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss2Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss2Result
                    ? 'FULL MARKS! Parallel deployment provides zero downtime risk—essential for financial and life-critical banking transactions.'
                    : 'Remember: Parallel is the most expensive, but provides the critical backup safety net.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 3: Hospital Multi-Branch Dilemma (2021 P2 Q06) */}
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
                2021 O/L Paper II • Question 06
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Hospital System Scenario Analysis:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Part A */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (a) Team develops system in small increments with user feedback after each step. What SDLC model is this?
                </div>
                <select
                  value={boss3Answers.a}
                  onChange={(e) => handleBoss3Select('a', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select SDLC Model...</option>
                  <option value="waterfall">Waterfall Model (දියඇලි ආකෘතිය)</option>
                  <option value="iterative">Iterative / Incremental Model (පුනරාවර්තී වර්ධක ආකෘතිය) ✓</option>
                  <option value="spiral">Spiral Model (සර්පිල ආකෘතිය)</option>
                </select>
              </div>

              {/* Part B */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (b) Hospital conducts a testing session with medical staff to approve the system. What test is this?
                </div>
                <select
                  value={boss3Answers.b}
                  onChange={(e) => handleBoss3Select('b', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select Testing Level...</option>
                  <option value="unit">Unit Testing (ඒකක පරීක්ෂාව)</option>
                  <option value="integration">Integration Testing (අනුකලන පරීක්ෂාව)</option>
                  <option value="uat">User Acceptance Testing (UAT - පරිශීලක පිළිගැනීම) ✓</option>
                </select>
              </div>

              {/* Part C */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (c) Management wants to stop the manual paper system completely on Monday. What deployment is this?
                </div>
                <select
                  value={boss3Answers.c}
                  onChange={(e) => handleBoss3Select('c', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select Deployment Strategy...</option>
                  <option value="direct">Direct Deployment (සෘජු ස්ථාපනය) ✓</option>
                  <option value="parallel">Parallel Deployment (සමාන්තර ස්ථාපනය)</option>
                  <option value="phased">Phased Deployment (අදියරගත ස්ථාපනය)</option>
                </select>
              </div>

              {/* Part D */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (d) Team suggests introducing the system to the Kandy branch hospital first. What deployment is this?
                </div>
                <select
                  value={boss3Answers.d}
                  onChange={(e) => handleBoss3Select('d', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select Deployment Strategy...</option>
                  <option value="pilot">Pilot Deployment (නියමු ස්ථාපනය) ✓</option>
                  <option value="direct">Direct Deployment (සෘජු ස්ථාපනය)</option>
                  <option value="parallel">Parallel Deployment (සමාන්තර ස්ථාපනය)</option>
                </select>
              </div>
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
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss3Result
                    ? 'FULL MARKS (a: Iterative, b: UAT, c: Direct, d: Pilot)! Excellent scenario mapping.'
                    : 'Check your matches: Testing with end-users is UAT; introducing to one branch first is Pilot deployment.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 4: What is a Prototype? (2024 P2 Q01 viii) */}
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
                2024 O/L Paper II • Question 01 (viii)
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                In the requirements phase, the use of prototypes can be beneficial. What is meant by a &quot;prototype&quot; in system development?
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                පද්ධති සංවර්ධනයේදී &quot;මූලාකෘතියක් (Prototype)&quot; යන්නෙන් අදහස් කරන්නේ කුමක්ද?
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'prototype_def', text: 'A preliminary working model or mock-up of the proposed software system created to demonstrate functionality, test user interactions, and gather early feedback before full-scale coding begins. ✓' },
                { id: 'final_code', text: 'The final, fully completed executable software delivered to the customer at the end of the project.' },
                { id: 'database_schema', text: 'A database table definition containing primary and foreign keys.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleBoss4Submit(opt.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    boss4Choice === opt.id
                      ? opt.id === 'prototype_def'
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold leading-relaxed">{opt.text}</div>
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
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss4Result
                    ? 'PERFECT! Prototypes give non-technical users a tactile feel of screens and buttons before committing expensive programming hours.'
                    : 'Incorrect. A prototype is a preliminary mockup/sample model, not the final system.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 5: Design Tasks & User Consultation (2025 P2 Q01 ix) */}
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
                2025 O/L Paper II • Question 01 (ix)
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                System Design Phase Activities & User Communication:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Part A */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (a) List one primary task carried out during the System Design step:
                </div>
                <div className="space-y-1.5 pt-1">
                  {[
                    { id: 'ui_db_design', label: 'Designing UI screen layouts, database schemas, and algorithm flowcharts ✓' },
                    { id: 'writing_pascal', label: 'Writing Pascal and Python source code' },
                    { id: 'conducting_interviews', label: 'Conducting user interviews' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setBoss5Task(t.id)}
                      className={`w-full p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                        boss5Task === t.id
                          ? 'bg-indigo-600 text-white border-indigo-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Part B */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-white">
                  (b) Is it beneficial to consult users during the Design step? Explain:
                </div>
                <div className="space-y-1.5 pt-1">
                  {[
                    { id: 'yes_alignment', label: 'Yes, because reviewing screen mockups with users ensures workflows meet real expectations and avoids costly redesigns later. ✓' },
                    { id: 'no_waste', label: 'No, users should only be contacted after deployment.' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setBoss5Consult(c.id)}
                      className={`w-full p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                        boss5Consult === c.id
                          ? 'bg-indigo-600 text-white border-indigo-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleBoss5Submit(boss5Task || '', boss5Consult || '')}
                disabled={!boss5Task || !boss5Consult}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 text-white font-bold text-xs shadow-lg disabled:opacity-40"
              >
                Submit 2025 Paper II Solution
              </button>
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
                    ? 'FULL 2025 ESSAY MARKS! Design step produces UI wireframes, database tables, and algorithm flowcharts; consulting users ensures early design acceptance.'
                    : 'Check your answers: Coding is done in Development, interviews in Requirements.'}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
