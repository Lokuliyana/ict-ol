'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Swords, 
  ShieldAlert, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Zap,
  Flame,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  yearText: string;
  badge: string;
  titleEn: string;
  titleSi: string;
  scenarioEn: string;
  scenarioSi: string;
  options: {
    id: string;
    textEn: string;
    textSi: string;
    isCorrect: boolean;
  }[];
  explanationEn: string;
  explanationSi: string;
  hint: string;
}

const BOSS_QUESTIONS: BossQuestion[] = [
  {
    id: 'b1-2020-p1-q34',
    yearText: '2020 O/L Paper I - Q34',
    badge: 'NOR Truth Table',
    titleEn: 'The 2-Input NOR Gate Signature',
    titleSi: 'ආදාන 2ක් සහිත NOR ද්වාරයක සත්‍යතා වගුව',
    scenarioEn: 'Which of the following truth tables correctly represents the output of a standard 2-input NOR gate for inputs (A, B)?',
    scenarioSi: 'ආදාන 2ක් සහිත සම්මත NOR ද්වාරයක ආදාන (A, B) සඳහා නිවැරදි සත්‍යතා වගුව කුමක්ද?',
    options: [
      { id: '1', textEn: '[0,0➔0; 0,1➔1; 1,0➔1; 1,1➔1] (OR Table)', textSi: '[0,0➔0; 0,1➔1; 1,0➔1; 1,1➔1]', isCorrect: false },
      { id: '2', textEn: '[0,0➔1; 0,1➔0; 1,0➔0; 1,1➔0] (NOR Table)', textSi: '[0,0➔1; 0,1➔0; 1,0➔0; 1,1➔0]', isCorrect: true },
      { id: '3', textEn: '[0,0➔1; 0,1➔1; 1,0➔1; 1,1➔0] (NAND Table)', textSi: '[0,0➔1; 0,1➔1; 1,0➔1; 1,1➔0]', isCorrect: false },
      { id: '4', textEn: '[0,0➔0; 0,1➔0; 1,0➔0; 1,1➔1] (AND Table)', textSi: '[0,0➔0; 0,1➔0; 1,0➔0; 1,1➔1]', isCorrect: false },
    ],
    explanationEn: 'NOR = Inverted OR. OR produces 0 only when (0,0), so NOR produces 1 only when (0,0) and 0 for all other rows: [1, 0, 0, 0].',
    explanationSi: 'NOR ද්වාරය යනු OR හි ප්‍රතිලෝමයයි. OR මගින් (0,0) දී 0 ලැබෙන බැවින් NOR මගින් (0,0) දී 1 ලැබී අනෙක් සියල්ල 0 වේ [1, 0, 0, 0].',
    hint: 'Think: OR gives 0 only when both are 0. Invert that result!'
  },
  {
    id: 'b2-2021-p1-q39',
    yearText: '2021 O/L Paper I - Q39',
    badge: 'Fixed-Input NAND',
    titleEn: 'The Clamped NAND Gate Inversion',
    titleSi: 'නියත ආදානයක් සහිත NAND ද්වාරය',
    scenarioEn: 'Inputs A and B are connected to a NAND gate. If input B is permanently tied to HIGH (+5V / logic 1), what is output Q?',
    scenarioSi: 'A සහ B ආදාන NAND ද්වාරයකට සම්බන්ධ කර ඇත. B ආදානය ස්ථිරවම 1 ට සම්බන්ධ කර ඇත්නම්, Q ප්‍රතිදානය කුමක් වේද?',
    options: [
      { id: '1', textEn: 'Q = 0 (Permanently Low)', textSi: 'Q = 0', isCorrect: false },
      { id: '2', textEn: 'Q = 1 (Permanently High)', textSi: 'Q = 1', isCorrect: false },
      { id: '3', textEn: 'Q = A (Buffer Output)', textSi: 'Q = A', isCorrect: false },
      { id: '4', textEn: "Q = A' / Ā (Inverted Input A)", textSi: "Q = A' (A හි ප්‍රතිලෝමය)", isCorrect: true },
    ],
    explanationEn: "NAND output formula: Q = (A · B)'. Substituting B = 1 gives Q = (A · 1)' = A'. Thus, a NAND gate with one input tied to 1 acts as an INVERTER.",
    explanationSi: "NAND සූත්‍රය: Q = (A · B)'. මෙහි B = 1 යෙදූ විට Q = (A · 1)' = A' වේ. එනම් NAND ද්වාරය Inverter (NOT) එකක් ලෙස ක්‍රියා කරයි.",
    hint: "Substitute B = 1 into Boolean equation Q = (A · B)'."
  },
  {
    id: 'b3-2023-p2-q01',
    yearText: '2023 O/L Paper II - Q01(iv)',
    badge: 'Cascade Evaluation',
    titleEn: 'Evaluate Z = (A + B) · A for A=1, B=0',
    titleSi: 'Z = (A + B) · A හි අගය සෙවීම (A=1, B=0)',
    scenarioEn: 'Inputs A and B enter an OR gate (Gate 1). Its output and input A enter an AND gate (Gate 2) to produce Z. Calculate Z when A=1 and B=0.',
    scenarioSi: 'A සහ B ආදාන OR ද්වාරයකට (1) යොමු කෙරේ. එහි ප්‍රතිදානය සහ A ආදානය AND ද්වාරයකට (2) යොමු කර Z ලැබේ. A=1, B=0 විට Z හි අගය සොයන්න.',
    options: [
      { id: '1', textEn: 'Z = 1 (High Output)', textSi: 'Z = 1', isCorrect: true },
      { id: '2', textEn: 'Z = 0 (Low Output)', textSi: 'Z = 0', isCorrect: false },
      { id: '3', textEn: 'Z = Undefined High-Z', textSi: 'Z අර්ථ දැක්විය නොහැක', isCorrect: false },
      { id: '4', textEn: 'Z = A + B only', textSi: 'Z = A + B පමණි', isCorrect: false },
    ],
    explanationEn: 'Gate 1 (OR): A + B = 1 + 0 = 1. Gate 2 (AND): (A + B) · A = 1 · 1 = 1. Therefore Z = 1.',
    explanationSi: 'Gate 1 (OR): A + B = 1 + 0 = 1. Gate 2 (AND): 1 · 1 = 1. ඒ අනුව Z = 1 වේ.',
    hint: 'Step 1: 1 OR 0 = 1. Step 2: 1 AND 1 = 1.'
  },
  {
    id: 'b4-2025-p2-q01',
    yearText: '2025 O/L Paper II - Q01(iv)',
    badge: 'XOR Derivation',
    titleEn: "Identify XOR Equivalent Expression",
    titleSi: 'XOR ද්වාරයට තුල්‍ය බූලියානු ප්‍රකාශනය',
    scenarioEn: "Which Boolean sum-of-products expression is mathematically identical to the Exclusive-OR operation (A ⊕ B)?",
    scenarioSi: 'Exclusive-OR (A ⊕ B) ක්‍රියාවලියට ගණිතමය වශයෙන් තුල්‍ය වන බූලියානු ප්‍රකාශනය කුමක්ද?',
    options: [
      { id: '1', textEn: "Q = A · B + A' · B'", textSi: "Q = A · B + A' · B' (XNOR)", isCorrect: false },
      { id: '2', textEn: "Q = A · B' + A' · B", textSi: "Q = A · B' + A' · B (XOR)", isCorrect: true },
      { id: '3', textEn: "Q = (A + B) · (A' + B')", textSi: "Q = (A + B) · (A' + B')", isCorrect: false },
      { id: '4', textEn: "Q = (A · B)' + (A + B)'", textSi: "Q = (A · B)' + (A + B)'", isCorrect: false },
    ],
    explanationEn: "The standard fundamental definition of XOR is A ⊕ B = A·B' + A'·B (Output 1 only when A=1,B=0 or A=0,B=1).",
    explanationSi: "XOR හි සම්මත පෙළපොත් නිර්වචනය වන්නේ A ⊕ B = A·B' + A'·B වේ (ආදාන එකිනෙකට වෙනස් විට පමණක් 1 වේ).",
    hint: "Think: When A is 1 AND B is 0, OR when A is 0 AND B is 1."
  }
];

export function Lesson04BossArcade() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [bossHp, setBossHp] = useState<number>(100);
  const [playerHp, setPlayerHp] = useState<number>(100);
  const [combo, setCombo] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isDefeated, setIsDefeated] = useState<boolean>(false);

  const curQ = BOSS_QUESTIONS[currentIdx];

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    setSelectedOption(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswered) return;

    const opt = curQ.options.find(o => o.id === selectedOption);
    const isCorrect = opt?.isCorrect || false;

    setIsAnswered(true);

    if (isCorrect) {
      sound.playSuccess();
      setCombo(prev => prev + 1);
      const newBossHp = Math.max(0, bossHp - 25);
      setBossHp(newBossHp);

      if (newBossHp <= 0 || currentIdx === BOSS_QUESTIONS.length - 1) {
        setIsDefeated(true);
        triggerConfetti();
        sound.playVictory();
      }
    } else {
      sound.playError();
      setCombo(0);
      setPlayerHp(prev => Math.max(0, prev - 25));
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < BOSS_QUESTIONS.length - 1) {
      sound.playClick(700);
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setIsDefeated(true);
      triggerConfetti();
    }
  };

  const handleRestart = () => {
    sound.playClick(600);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setBossHp(100);
    setPlayerHp(100);
    setCombo(0);
    setShowHint(false);
    setIsDefeated(false);
  };

  return (
    <div className="space-y-6">
      {/* Boss Health Bar & HUD */}
      <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">
        
        {/* Top Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-rose-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400">
              <Swords className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>The Logic Gate Boss Arcade</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  2020 – 2025 O/L Past Papers
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Battle official G.C.E. O/L past paper logic problems to achieve 100% exam mastery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {combo > 1 && (
              <div className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold animate-bounce flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                <span>{combo}x COMBO!</span>
              </div>
            )}
            <button
              onClick={handleRestart}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1 font-mono"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Dual HP Bars: Player vs Boss */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Player HP */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-emerald-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Student Shield
              </span>
              <span className="text-slate-300">{playerHp}%</span>
            </div>
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
              <motion.div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${playerHp}%` }}
              />
            </div>
          </div>

          {/* Boss HP */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-rose-400 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Exam Boss HP
              </span>
              <span className="text-slate-300">{bossHp}%</span>
            </div>
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
              <motion.div 
                className="bg-gradient-to-r from-rose-600 to-pink-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${bossHp}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Main Question Arena */}
      {!isDefeated ? (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-6">
          
          {/* Question Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 font-bold">
                {curQ.yearText}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                {curQ.titleEn}
              </h4>
              <h5 className="text-xs text-rose-400 font-sinhala">
                {curQ.titleSi}
              </h5>
            </div>

            <span className="text-xs font-mono text-slate-500">
              Challenge {currentIdx + 1} of {BOSS_QUESTIONS.length}
            </span>
          </div>

          {/* Scenario Text */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <p className="text-sm text-slate-200 leading-relaxed">
              {curQ.scenarioEn}
            </p>
            <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
              {curQ.scenarioSi}
            </p>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {curQ.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isSelected && !isAnswered) {
                btnStyle = 'bg-rose-500/20 border-rose-500 text-white font-bold shadow-[0_0_12px_#f43f5e]';
              } else if (isAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_12px_#10b981]';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 rounded-2xl border text-left font-mono text-xs transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-950 flex items-center justify-center font-bold text-slate-400 shrink-0 border border-slate-800">
                    {opt.id}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-sans text-white">{opt.textEn}</p>
                    <p className="text-[11px] font-sinhala text-slate-400">{opt.textSi}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation HUD after Answering */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs"
            >
              <div className="flex items-center gap-2 font-bold text-white">
                {curQ.options.find(o => o.id === selectedOption)?.isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Perfect Answer! (+25 Boss Damage)
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Shield Damaged (-25 HP)
                  </span>
                )}
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                <strong>Explanation:</strong> {curQ.explanationEn}
              </p>
              <p className="text-slate-400 font-sinhala text-[11px]">
                {curQ.explanationSi}
              </p>
            </motion.div>
          )}

          {/* Bottom Action Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 flex-wrap gap-3">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-slate-400 hover:text-amber-300 font-mono flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            </button>

            {showHint && (
              <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                💡 {curQ.hint}
              </span>
            )}

            {!isAnswered ? (
              <button
                disabled={!selectedOption}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 disabled:opacity-40 disabled:pointer-events-none text-white font-mono text-xs font-bold shadow-lg shadow-rose-600/30 ml-auto"
              >
                Strike Boss ➔
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 ml-auto"
              >
                <span>Next Past Paper Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Victory Screen */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-950 border-2 border-emerald-500/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">
              G.C.E. O/L LOGIC BOSS DEFEATED!
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              You have mastered basic and derived logic gates, De Morgan universal constructs, 14-pin IC DIP packages, and past paper multi-level combinational circuit evaluation!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-xs mx-auto text-xs font-mono text-emerald-400">
            ✓ 100% Mastery in Logic Gates & Circuits
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-emerald-500/30"
          >
            Replay Boss Gauntlet
          </button>
        </motion.div>
      )}

    </div>
  );
}
