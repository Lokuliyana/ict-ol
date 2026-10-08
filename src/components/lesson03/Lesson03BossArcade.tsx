'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Swords, 
  Trophy, 
  Crown, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ShieldAlert, 
  Flame, 
  Zap, 
  Calculator 
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  yearBadge: string;
  bossName: string;
  questionEn: string;
  questionSi: string;
  options: { id: string; textEn: string; textSi?: string; isCorrect: boolean }[];
  explanationEn: string;
  explanationSi: string;
}

const BOSS_FIGHTS: BossQuestion[] = [
  {
    id: 'boss1',
    yearBadge: '2020 Paper I Q33',
    bossName: 'Radix Titan: Ascending Numbers Golem',
    questionEn: 'Consider the following four numbers in different number systems:\n64₁₆, 226₈, 200₁₀, 101011₂\nWhich of the following represents the correct ASCENDING order (ආරෝහණ අනුපිළිවෙල)?',
    questionSi: 'විවිධ සංඛ්‍යා පද්ධති වල අගයන් 4 සලකන්න:\n64₁₆, 226₈, 200₁₀, 101011₂\nමෙම සංඛ්‍යා ආරෝහණ අනුපිළිවෙලට (කුඩා අගයේ සිට විශාල අගයට) දැක්වෙන පිළිතුර:',
    options: [
      { id: '1', textEn: '101011₂ < 64₁₆ < 226₈ < 200₁₀', textSi: '101011₂ < 64₁₆ < 226₈ < 200₁₀', isCorrect: true },
      { id: '2', textEn: '64₁₆ < 101011₂ < 200₁₀ < 226₈', textSi: '64₁₆ < 101011₂ < 200₁₀ < 226₈', isCorrect: false },
      { id: '3', textEn: '226₈ < 101011₂ < 64₁₆ < 200₁₀', textSi: '226₈ < 101011₂ < 64₁₆ < 200₁₀', isCorrect: false },
      { id: '4', textEn: '101011₂ < 226₈ < 64₁₆ < 200₁₀', textSi: '101011₂ < 226₈ < 64₁₆ < 200₁₀', isCorrect: false },
    ],
    explanationEn: 'Convert all values to Decimal: 101011₂ = 43₁₀, 64₁₆ = (6×16)+4 = 100₁₀, 226₈ = (2×64)+(2×8)+6 = 150₁₀, 200₁₀ = 200₁₀. Ascending order: 43 < 100 < 150 < 200.',
    explanationSi: 'සියලු අගයන් දශමය අගයට හරවන්න: 101011₂ = 43₁₀, 64₁₆ = 100₁₀, 226₈ = 150₁₀, 200₁₀ = 200₁₀. ආරෝහණ පිළිවෙළ: 101011₂ < 64₁₆ < 226₈ < 200₁₀.',
  },
  {
    id: 'boss2',
    yearBadge: '2022 Paper I Q06',
    bossName: 'Hex-Lord C2: Magnitude Duel Master',
    questionEn: 'Which of the following numbers has the LARGEST numerical value (විශාලතම අගය)?\n10000100₂, 15₈, 85₁₀, C2₁₆',
    questionSi: 'පහත දැක්වෙන සංඛ්‍යා අතුරින් විශාලතම අගය සහිත සංඛ්‍යාව කුමක්ද?\n10000100₂, 15₈, 85₁₀, C2₁₆',
    options: [
      { id: '1', textEn: '10000100₂ (= 132₁₀)', textSi: '10000100₂ (= 132₁₀)', isCorrect: false },
      { id: '2', textEn: '15₈ (= 13₁₀)', textSi: '15₈ (= 13₁₀)', isCorrect: false },
      { id: '3', textEn: '85₁₀ (= 85₁₀)', textSi: '85₁₀ (= 85₁₀)', isCorrect: false },
      { id: '4', textEn: 'C2₁₆ (= 194₁₀)', textSi: 'C2₁₆ (= 194₁₀)', isCorrect: true },
    ],
    explanationEn: 'Converting to Decimal: 10000100₂ = 128+4 = 132₁₀, 15₈ = 8+5 = 13₁₀, 85₁₀ = 85₁₀, C2₁₆ = (12×16)+2 = 192+2 = 194₁₀. Thus, C2₁₆ is the largest.',
    explanationSi: 'C2₁₆ = (12×16)+2 = 194₁₀ වන බැවින් එය විශාලතම අගය වේ.',
  },
  {
    id: 'boss3',
    yearBadge: '2022 Paper I Q10',
    bossName: 'ASCII Cipher Sphinx: Binary Spell',
    questionEn: 'Given that the ASCII decimal codes are "O" = 79, "/" = 47, "L" = 76, which of the following is the correct 7-bit binary representation for the acronym "O/L"?',
    questionSi: '"O" = 79, "/" = 47, "L" = 76 ලෙස ASCII අගයන් දී ඇති විට, "O/L" යන්නෙහි නිවැරදි 7-බිටු ද්විමය නිරූපණය කුමක්ද?',
    options: [
      { id: '1', textEn: '1001111 0101111 1001100', textSi: '1001111 0101111 1001100', isCorrect: true },
      { id: '2', textEn: '1001110 0101110 1001101', textSi: '1001110 0101110 1001101', isCorrect: false },
      { id: '3', textEn: '1011111 0011111 1001100', textSi: '1011111 0011111 1001100', isCorrect: false },
      { id: '4', textEn: '1001111 0101100 1001111', textSi: '1001111 0101100 1001111', isCorrect: false },
    ],
    explanationEn: '79 = 64+8+4+2+1 = 1001111₂, 47 = 32+8+4+2+1 = 0101111₂, 76 = 64+8+4 = 1001100₂. Joining them yields "1001111 0101111 1001100".',
    explanationSi: '79 = 1001111₂, 47 = 0101111₂, 76 = 1001100₂ වේ.',
  },
  {
    id: 'boss4',
    yearBadge: '2025 Paper I Q07',
    bossName: 'Storage Overflow Golem: 256MB Warden',
    questionEn: 'The free storage space of a USB flash drive is 256 MB. A student wishes to copy three files: a Video (0.3 GB), an Image (300 KB), and a Document (400 Bytes). Which files can be copied into the flash drive?',
    questionSi: 'ෆ්ලෑෂ් ධාවකයක ඉතිරි ඉඩ 256 MB වේ. වීඩියෝ ගොනුවක් (0.3 GB), ඡායාරූපයක් (300 KB) සහ ලේඛනයක් (400 Bytes) සුරැකීමට අවශ්‍ය නම් පිටපත් කළ හැක්කේ කුමන ගොනුද?',
    options: [
      { id: '1', textEn: 'All three files (Video, Image, Document)', textSi: 'ගොනු තුනම', isCorrect: false },
      { id: '2', textEn: 'Only the Image file and Document file', textSi: 'ඡායාරූපය සහ ලේඛනය පමණි', isCorrect: true },
      { id: '3', textEn: 'Only the Video file', textSi: 'වීඩියෝ ගොනුව පමණි', isCorrect: false },
      { id: '4', textEn: 'Only the Video file and Image file', textSi: 'වීඩියෝ ගොනුව සහ ඡායාරූපය පමණි', isCorrect: false },
    ],
    explanationEn: '0.3 GB = 0.3 × 1024 MB = 307.2 MB > 256 MB (Video exceeds capacity alone). Image (0.29 MB) and Document (<0.001 MB) total ~0.3 MB < 256 MB, so only they can be copied.',
    explanationSi: '0.3 GB = 307.2 MB වන බැවින් වීඩියෝ ගොනුව 256 MB ට වඩා විශාලය. එබැවින් ඡායාරූපය සහ ලේඛනය පමණක් පිටපත් කළ හැක.',
  },
];

export function Lesson03BossArcade() {
  const [currentFightIdx, setCurrentFightIdx] = useState(0);
  const [bossHp, setBossHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [combo, setCombo] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);

  const curBoss = BOSS_FIGHTS[currentFightIdx];

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
      });
    } catch {}
  };

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    sound.playClick();
    setSelectedOptionId(optId);
  };

  const handleAttack = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    const opt = curBoss.options.find((o) => o.id === selectedOptionId);
    setIsAnswerSubmitted(true);

    if (opt?.isCorrect) {
      sound.playSuccessDing();
      triggerConfetti();
      setBossHp(0);
      setCombo((c) => c + 1);
      const earned = 100 + combo * 25;
      setTotalXp((xp) => xp + earned);

      if (currentFightIdx === BOSS_FIGHTS.length - 1) {
        setTimeout(() => {
          sound.playVictoryFanfare();
          setIsVictoryModalOpen(true);
        }, 800);
      }
    } else {
      sound.playBuzzer();
      setPlayerHp((hp) => Math.max(10, hp - 25));
      setCombo(0);
    }
  };

  const handleNextFight = () => {
    sound.playClick();
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setBossHp(100);
    setCurrentFightIdx((prev) => (prev + 1) % BOSS_FIGHTS.length);
  };

  const resetAllFights = () => {
    sound.playClick();
    setCurrentFightIdx(0);
    setBossHp(100);
    setPlayerHp(100);
    setCombo(0);
    setTotalXp(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setIsVictoryModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Arcade Status Bar */}
      <div className="bg-slate-950/90 border border-indigo-500/40 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-4 text-slate-100 backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400">
            <Swords className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-black text-white">
                Station 6: The Past Paper Boss Arcade
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                Boss Battle {currentFightIdx + 1}/{BOSS_FIGHTS.length}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sinhala">
              2020 – 2025 දත්ත නිරූපණය විභාග ගැටලු සජීවීව ජයගන්න
            </p>
          </div>
        </div>

        {/* Player Stats */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 bg-indigo-950/60 px-3 py-1.5 rounded-xl border border-indigo-500/30">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-bold">{totalXp} XP</span>
          </div>

          <div className="flex items-center gap-1.5 bg-fuchsia-950/60 px-3 py-1.5 rounded-xl border border-fuchsia-500/30">
            <Flame className="w-4 h-4 text-fuchsia-400" />
            <span className="text-fuchsia-300 font-bold">{combo}x Combo</span>
          </div>
        </div>
      </div>

      {/* Main Battle Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Arena: Boss Avatar & HP */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 via-red-950/30 to-slate-950 border border-red-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px]">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-red-400 font-bold uppercase flex items-center gap-1">
                <ShieldAlert className="w-4 h-4" /> {curBoss.bossName}
              </span>
              <span className="text-slate-400">{bossHp} / 100 HP</span>
            </div>
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-red-900/50">
              <motion.div
                className="bg-gradient-to-r from-red-600 to-amber-500 h-full rounded-full"
                animate={{ width: `${bossHp}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Boss Avatar */}
          <div className="my-6 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className={`w-28 h-28 rounded-3xl border-2 flex items-center justify-center shadow-2xl ${
                bossHp === 0
                  ? 'bg-slate-900 border-slate-700 opacity-40 scale-90'
                  : 'bg-red-950/80 border-red-400 shadow-red-500/30'
              }`}
            >
              {bossHp === 0 ? (
                <Trophy className="w-12 h-12 text-emerald-400" />
              ) : (
                <Swords className="w-12 h-12 text-red-400" />
              )}
            </motion.div>
            <div className="mt-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-900/40 text-red-300 border border-red-700/50">
                {curBoss.yearBadge}
              </span>
            </div>
          </div>

          {/* Player HP */}
          <div className="space-y-1.5 border-t border-red-950 pt-3 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-cyan-400 font-bold">Player Integrity</span>
              <span>{playerHp}%</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-cyan-500 h-full rounded-full"
                animate={{ width: `${playerHp}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Combat Deck */}
        <div className="lg:col-span-7 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
                {curBoss.yearBadge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Question {currentFightIdx + 1} of {BOSS_FIGHTS.length}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug whitespace-pre-line">
              {curBoss.questionEn}
            </h4>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala leading-relaxed whitespace-pre-line">
              {curBoss.questionSi}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {curBoss.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isCorrect;

              let style = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400';
              if (isSelected && !isAnswerSubmitted) {
                style = 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-bold shadow-md';
              }
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-red-50 dark:bg-red-950/60 border-red-500 text-red-800 dark:text-red-200';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 ${style}`}
                >
                  <div>
                    <span className="font-semibold block">{opt.textEn}</span>
                    {opt.textSi && (
                      <span className="text-xs opacity-75 font-sinhala block mt-0.5">
                        {opt.textSi}
                      </span>
                    )}
                  </div>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            {!isAnswerSubmitted ? (
              <button
                disabled={!selectedOptionId}
                onClick={handleAttack}
                className={`w-full py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                  selectedOptionId
                    ? 'bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Cast Binary Strike</span>
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <div className="font-bold text-slate-800 dark:text-slate-100">
                    Official Marking Scheme Rationale:
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{curBoss.explanationEn}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-sinhala">{curBoss.explanationSi}</p>
                </div>

                <button
                  onClick={handleNextFight}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                >
                  <span>
                    {currentFightIdx < BOSS_FIGHTS.length - 1 ? 'Next Boss Encounter' : 'Complete Number Systems Gauntlet'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grand Victory Modal */}
      <AnimatePresence>
        {isVictoryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 text-slate-100 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-300">
                <Crown className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Number Systems Gauntlet Cleared!</h3>
                <p className="text-xs text-amber-300 font-mono mt-1">
                  Grade 10 Unit 03 Data Representation Mastery Unlocked
                </p>
                <p className="text-xs text-slate-300 font-sinhala mt-2">
                  ඔබ 2020 – 2025 දත්ත නිරූපණය විභාග ගැටලු සියල්ල ජයගෙන ඇත!
                </p>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-amber-500/30 grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-400">Total Score:</span>
                  <div className="text-xl font-bold text-amber-400">{totalXp} XP</div>
                </div>
                <div>
                  <span className="text-slate-400">Max Combo:</span>
                  <div className="text-xl font-bold text-fuchsia-400">{combo}x</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={resetAllFights}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Replay Boss Fights
                </button>
                <button
                  onClick={() => setIsVictoryModalOpen(false)}
                  className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black transition-all shadow-lg"
                >
                  Claim Victory
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
