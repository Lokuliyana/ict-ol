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
  HardDrive, 
  Cpu, 
  Zap, 
  Layers, 
  Tv, 
  Monitor, 
  ShieldAlert, 
  Flame 
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
    yearBadge: '2020 Paper I Q01 & 2022 Paper I Q04',
    bossName: 'Giga-Centurion: Peripheral Sentinel',
    questionEn: 'Which of the following groups contains ONLY Input Devices (ආදාන උපාංග පමණක්)?',
    questionSi: 'පහත සඳහන් කුමන කාණ්ඩයේ ආදාන උපාංග පමණක් අඩංගු වේද?',
    options: [
      { id: '1', textEn: 'Mouse, Keyboard, Light Pen, Joystick', textSi: 'මවුසය, යතුරුපුවරුව, ආලෝක පෑන, ජොයිස්ටික්', isCorrect: true },
      { id: '2', textEn: 'Keyboard, Monitor, Scanner, Plotter', textSi: 'යතුරුපුවරුව, මොනිටරය, ස්කෑනරය, ප්ලොටරය', isCorrect: false },
      { id: '3', textEn: 'Printer, Barcode Reader, Microphone, Speaker', textSi: 'මුද්‍රණ යන්ත්‍රය, තීරු කේත කියවනය, මයික්‍රෆෝනය, ස්පීකරය', isCorrect: false },
      { id: '4', textEn: 'OMR, Projector, Touch Screen, Web Camera', textSi: 'OMR, ප්‍රක්ෂේපකය, ස්පර්ශ තිරය, වෙබ් කැමරාව', isCorrect: false },
    ],
    explanationEn: 'Group 1 contains pure input devices (Mouse, Keyboard, Light pen, Joystick). Groups 2, 3, and 4 contain output impostors like Monitor, Plotter, Printer, Speaker, and Projector.',
    explanationSi: '1 වන කාණ්ඩයේ සියලුම උපාංග ආදාන උපාංග (Input Devices) වේ.',
  },
  {
    id: 'boss2',
    yearBadge: '2022 Paper I Q04',
    bossName: 'Bus-Master Titan: Pipeline Golem',
    questionEn: 'When executing an application program, what is the correct sequence of instruction flow across computer storage tiers?',
    questionSi: 'යෙදුම් වැඩසටහනක් ධාවනය වන විට නියෝග ගලා යන නිවැරදි අනුපිළිවෙල කුමක්ද?',
    options: [
      { id: '1', textEn: 'Hard Disk ➔ Main Memory (RAM) ➔ Cache Memory ➔ Registers', textSi: 'දෘඪ තැටිය ➔ ප්‍රධාන මතකය (RAM) ➔ කෑෂ් මතකය ➔ රෙජිස්ටර්', isCorrect: true },
      { id: '2', textEn: 'RAM ➔ Hard Disk ➔ Registers ➔ Cache Memory', textSi: 'RAM ➔ දෘඪ තැටිය ➔ රෙජිස්ටර් ➔ කෑෂ් මතකය', isCorrect: false },
      { id: '3', textEn: 'Registers ➔ Cache Memory ➔ RAM ➔ Hard Disk', textSi: 'රෙජිස්ටර් ➔ කෑෂ් මතකය ➔ RAM ➔ දෘඪ තැටිය', isCorrect: false },
      { id: '4', textEn: 'Cache Memory ➔ Hard Disk ➔ RAM ➔ Registers', textSi: 'කෑෂ් මතකය ➔ දෘඪ තැටිය ➔ RAM ➔ රෙජිස්ටර්', isCorrect: false },
    ],
    explanationEn: 'Programs stored on the permanent Hard Disk are loaded into Main RAM, staged in high-speed Cache, and finally executed inside CPU Registers.',
    explanationSi: 'ස්ථිරව දෘඪ තැටියේ ඇති වැඩසටහන් RAM වෙත පූරණය වී, කෑෂ් මතකය හරහා රෙජිස්ටර් වෙත පැමිණ ක්‍රියාත්මක වේ.',
  },
  {
    id: 'boss3',
    yearBadge: '2025 Paper I Q03',
    bossName: 'Vault-Keeper Dragon: Non-Volatile Core',
    questionEn: 'Even when the computer is completely powered OFF, its Operating System (OS), application software, and user documents remain permanently preserved in its:',
    questionSi: 'පරිගණකය සම්පූර්ණයෙන්ම ක්‍රියා විරහිත කළ විටදී පවා මෙහෙයුම් පද්ධතිය, යෙදුම් හා ගොනු ස්ථිරව සුරැකී පවතින්නේ:',
    options: [
      { id: '1', textEn: 'Cache Memory', textSi: 'කෑෂ් මතකයේ (Cache)', isCorrect: false },
      { id: '2', textEn: 'Hard Disk (Secondary Storage)', textSi: 'දෘඪ තැටියේ (Hard Disk)', isCorrect: true },
      { id: '3', textEn: 'Random Access Memory (RAM)', textSi: 'සසම්භාවී ප්‍රවේශ මතකයේ (RAM)', isCorrect: false },
      { id: '4', textEn: 'Processor Registers', textSi: 'සකසන රෙජිස්ටර් වල', isCorrect: false },
    ],
    explanationEn: 'Hard Disks (and SSDs) are non-volatile secondary storage devices that retain all stored data without continuous electrical power.',
    explanationSi: 'දෘඪ තැටිය යනු විදුලිය නොමැති විටදී දත්ත සුරකින අනශ්‍ය (Non-volatile) ආචයන මාධ්‍යයකි.',
  },
  {
    id: 'boss4',
    yearBadge: '2022 Paper II Q01(ii)',
    bossName: 'Port-Lock Overlord: Rear Shield Dragon',
    questionEn: 'A teacher needs to connect a classroom projector using an analog 15-pin trapezoid cable, and backup student marks using a flash drive. Which ports are used?',
    questionSi: 'ගුරුවරයෙකුට 15-pin ප්‍රක්ෂේපක කේබලයක් හා USB ධාවකයක් සම්බන්ධ කිරීමට අවශ්‍ය වේ. ඒ සඳහා භාවිත කරන තොට පිළිවෙළින්:',
    options: [
      { id: '1', textEn: 'VGA Port (Projector) and USB Port (Flash drive)', textSi: 'VGA තොට (Projector) සහ USB තොට (Flash drive)', isCorrect: true },
      { id: '2', textEn: 'HDMI Port and RJ-45 Port', textSi: 'HDMI තොට සහ RJ-45 තොට', isCorrect: false },
      { id: '3', textEn: 'RJ-45 Port and Audio Jack', textSi: 'RJ-45 තොට සහ Audio Jack', isCorrect: false },
      { id: '4', textEn: 'PS/2 Port and Parallel Port', textSi: 'PS/2 තොට සහ Parallel Port', isCorrect: false },
    ],
    explanationEn: 'The 15-pin trapezoid connector is the VGA port (Video Graphics Array), and the flash drive uses a standard USB port.',
    explanationSi: 'ප්‍රක්ෂේපකය සඳහා VGA තොටද, ෆ්ලෑෂ් ධාවකය සඳහා USB තොටද භාවිත කෙරේ.',
  },
];

export function Lesson02BossFight() {
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
              2020 – 2025 පරිගණක පද්ධතිය විභාග ප්‍රශ්න අභියෝග
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
                <span>Cast Hardware Strike</span>
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
                    {currentFightIdx < BOSS_FIGHTS.length - 1 ? 'Next Boss Encounter' : 'Complete Hardware Gauntlet'}
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
                <h3 className="text-2xl font-black text-white">Hardware Boss Gauntlet Cleared!</h3>
                <p className="text-xs text-amber-300 font-mono mt-1">
                  Grade 10 Unit 02 Hardware Mastery Unlocked
                </p>
                <p className="text-xs text-slate-300 font-sinhala mt-2">
                  ඔබ 2020 – 2025 පරිගණක පද්ධතිය පසුගිය විභාග ප්‍රශ්න සියල්ල ජයගෙන ඇත!
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
