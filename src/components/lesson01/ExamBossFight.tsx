'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Swords, 
  Trophy, 
  Zap, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Flame, 
  RotateCcw, 
  ArrowRight, 
  HelpCircle,
  Award,
  Crown
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  yearBadge: string;
  bossName: string;
  bossHpMax: number;
  questionEn: string;
  questionSi: string;
  options: { id: string; textEn: string; textSi?: string; isCorrect: boolean }[];
  explanationEn: string;
  explanationSi: string;
}

const BOSS_FIGHTS: BossQuestion[] = [
  {
    id: 'boss1',
    yearBadge: '2020 Paper I Q02',
    bossName: 'Cyber-Golem: System Core Sentinel',
    bossHpMax: 100,
    questionEn: 'The three fundamental sequential functions of an information system are:',
    questionSi: 'තොරතුරු පද්ධතියක ප්‍රධාන අනුක්‍රමික කාර්යයන් 3 වන්නේ:',
    options: [
      { id: '1', textEn: 'Input ➔ Process ➔ Output', textSi: 'ආදානය ➔ සැකසීම ➔ ප්‍රතිදානය', isCorrect: true },
      { id: '2', textEn: 'Storage ➔ Output ➔ Input', textSi: 'ගබඩා කිරීම ➔ ප්‍රතිදානය ➔ ආදානය', isCorrect: false },
      { id: '3', textEn: 'Process ➔ Input ➔ Feedback', textSi: 'සැකසීම ➔ ආදානය ➔ ප්‍රතිපෝෂණය', isCorrect: false },
      { id: '4', textEn: 'Input ➔ Storage ➔ Analysis', textSi: 'ආදානය ➔ ගබඩා කිරීම ➔ විශ්ලේෂණය', isCorrect: false },
    ],
    explanationEn: 'The core operational pipeline of any ICT system is Input (Data) ➔ Process (Computation) ➔ Output (Information).',
    explanationSi: 'ඕනෑම තොරතුරු පද්ධතියක මූලික ක්‍රියාවලිය ආදානය ➔ සැකසීම ➔ ප්‍රතිදානය (Input ➔ Process ➔ Output) වේ.',
  },
  {
    id: 'boss2',
    yearBadge: '2021 Paper I Q06',
    bossName: 'Portal Hydra: e-Service Master',
    bossHpMax: 100,
    questionEn: 'Krishni accesses the government portal (www.gov.lk) from her home computer to renew her vehicle revenue license. Which e-Government category does this transaction belong to?',
    questionSi: 'ක්‍රිෂ්ණි තම නිවසේ සිට www.gov.lk වෙබ් අඩවියට පිවිස වාහන ආදායම් බලපත්‍රය අලුත් කරයි. මෙය අයත් වන්නේ කුමන ඊ-රාජ්‍ය සේවා කාණ්ඩයටද?',
    options: [
      { id: '1', textEn: 'G2B (Government to Business)', textSi: 'G2B (රාජ්‍ය - ව්‍යාපාරික)', isCorrect: false },
      { id: '2', textEn: 'G2C (Government to Citizen)', textSi: 'G2C (රාජ්‍ය - පුරවැසි)', isCorrect: true },
      { id: '3', textEn: 'G2E (Government to Employee)', textSi: 'G2E (රාජ්‍ය - සේවක)', isCorrect: false },
      { id: '4', textEn: 'G2G (Government to Government)', textSi: 'G2G (රාජ්‍ය - රාජ්‍ය)', isCorrect: false },
    ],
    explanationEn: 'A citizen consuming an online public service directly from a government authority is categorized as G2C (Government to Citizen).',
    explanationSi: 'තනි පුරවැසියෙකු රජයේ සේවාවක් සෘජුව ලබා ගැනීම G2C (Government to Citizen) නම් වේ.',
  },
  {
    id: 'boss3',
    yearBadge: '2022 Paper I Q07',
    bossName: 'Bio-Mech Dragon: Healthcare Automaton',
    bossHpMax: 100,
    questionEn: 'Which technology allows a medical specialist located at the National Hospital Colombo to perform remote surgical procedures on a patient in a rural hospital using robotic arms and high-speed telemetry?',
    questionSi: 'කොළඹ ජාතික රෝහලේ සිටින විශේෂඥ වෛද්‍යවරයෙකුට දුරස්ථ ග්‍රාමීය රෝහලක සිටින රෝගියෙකුට රොබෝ තාක්ෂණය හා අධිවේගී සන්නිවේදනය ඔස්සේ ශල්‍යකර්මයක් සිදු කිරීමට උපකාරී වන තාක්ෂණය:',
    options: [
      { id: '1', textEn: 'CAT Scanning', textSi: 'CAT ස්කෑන් පරීක්ෂාව', isCorrect: false },
      { id: '2', textEn: 'Telesurgery / Telemedicine', textSi: 'දුරස්ථ ශල්‍යකර්ම / දුරස්ථ වෛද්‍ය සේවය', isCorrect: true },
      { id: '3', textEn: 'Electrocardiogram (ECG)', textSi: 'විද්‍යුත් හෘද රේඛනය (ECG)', isCorrect: false },
      { id: '4', textEn: 'E-Commerce Delivery', textSi: 'විද්‍යුත් වාණිජ්‍යය', isCorrect: false },
    ],
    explanationEn: 'Telesurgery (a subset of Telemedicine) employs high-speed data networks, telecommunications, and robotics to conduct surgical operations across distances.',
    explanationSi: 'දුරස්ථව සිට ශල්‍යකර්ම මෙහෙයවීම දුරස්ථ ශල්‍යකර්ම (Telesurgery / Telemedicine) ලෙස හැඳින්වේ.',
  },
  {
    id: 'boss4',
    yearBadge: '2020 Paper I Q37',
    bossName: 'Chronos Titan: Generations Overlord',
    bossHpMax: 100,
    questionEn: 'Consider the following statements regarding Computer Generations:\nA: Transistors were the core hardware technology of First Generation computers.\nB: High-level programming languages emerged during the Second & Third Generations.\nC: Graphical User Interfaces (GUI) became mainstream in Fourth Generation PCs.\nWhich of the above statements are TRUE?',
    questionSi: 'පරිගණක පරම්පරා පිළිබඳ ප්‍රකාශ සලකන්න:\nA: පළමු පරම්පරාවේ පරිගණක වල ප්‍රධාන තාක්ෂණය වූයේ ට්‍රාන්සිස්ටර වේ.\nB: දෙවන හා තෙවන පරම්පරා වලදී උසස් මට්ටමේ ක්‍රමලේඛ භාෂා බිහිවිය.\nC: සිව්වන පරම්පරාවේදී GUI අතුරුමුහුණත් භාවිතය ප්‍රචලිත විය.\nඉහත ප්‍රකාශ අතුරින් සත්‍ය වන්නේ:',
    options: [
      { id: '1', textEn: 'A and B only', textSi: 'A සහ B පමණි', isCorrect: false },
      { id: '2', textEn: 'B and C only', textSi: 'B සහ C පමණි', isCorrect: true },
      { id: '3', textEn: 'A and C only', textSi: 'A සහ C පමණි', isCorrect: false },
      { id: '4', textEn: 'All A, B, and C', textSi: 'සියලුම A, B සහ C', isCorrect: false },
    ],
    explanationEn: 'Statement A is FALSE (1st Gen used Vacuum Tubes, not Transistors). Statements B and C are TRUE (2nd Gen introduced FORTRAN/COBOL; 4th Gen introduced GUI & VLSI).',
    explanationSi: 'A අසත්‍ය වේ (පළමු පරම්පරාවේ භාවිත කළේ රික්තක නළ වේ). B සහ C සත්‍ය වේ.',
  },
  {
    id: 'boss5',
    yearBadge: '2024 Paper I Q02 (Bonus Speed Round)',
    bossName: 'Omega Nexus: The Final ICT Oracle',
    bossHpMax: 100,
    questionEn: 'Which of the following is classified as "Data" (දත්ත) rather than "Information" (තොරතුරු)?',
    questionSi: 'පහත දැක්වෙන දෑ අතුරින් "තොරතුරක්" නොව "දත්තයක්" ලෙස සැලකිය හැක්කේ කුමක්ද?',
    options: [
      { id: '1', textEn: 'Unsorted raw numbers: 45, 92, 18, 64', textSi: 'සැකසුම් නොකළ අංක: 45, 92, 18, 64', isCorrect: true },
      { id: '2', textEn: 'Annual Student Report Card with Rank #1', textSi: 'වාර්ෂික ශිෂ්‍ය වාර්තාව (1 වන ස්ථානය)', isCorrect: false },
      { id: '3', textEn: 'School Electricity Consumption Trend Graph', textSi: 'විදුලි පරිභෝජන ප්‍රවණතා ප්‍රස්තාරය', isCorrect: false },
      { id: '4', textEn: 'Monthly Staff Attendance Percentage (94.2%)', textSi: 'මාසික සේවක පැමිණීමේ ප්‍රතිශතය', isCorrect: false },
    ],
    explanationEn: 'A list of isolated raw numbers without context or computation represents Data. All other options are processed, contextualized Information.',
    explanationSi: 'තනි හුදෙකලා අංක පෙළක් යනු අමු දත්ත වේ.',
  },
];

export function ExamBossFight() {
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
      const damage = 100;
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
                Station 5: Past Paper Arcade
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                Boss Battle {currentFightIdx + 1}/{BOSS_FIGHTS.length}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sinhala">
              2020 – 2025 සාමාන්‍ය පෙළ පසුගිය විභාග ගැටලු සජීවීව විසඳන්න
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
        {/* Left Arena: Boss Graphic & Health Gauges */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 via-red-950/30 to-slate-950 border border-red-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px] relative overflow-hidden">
          {/* Boss Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-red-400 font-bold uppercase flex items-center gap-1">
                <ShieldAlert className="w-4 h-4" /> {curBoss.bossName}
              </span>
              <span className="text-slate-400">{bossHp} / 100 HP</span>
            </div>

            {/* Boss HP Bar */}
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-red-900/50">
              <motion.div
                className="bg-gradient-to-r from-red-600 to-amber-500 h-full rounded-full"
                animate={{ width: `${bossHp}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Boss Avatar Visualizer */}
          <div className="my-6 flex flex-col items-center justify-center relative">
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

            <div className="mt-3 text-center">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-900/40 text-red-300 border border-red-700/50">
                {curBoss.yearBadge}
              </span>
            </div>
          </div>

          {/* Player Health Bar */}
          <div className="space-y-1.5 border-t border-red-950 pt-3 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-cyan-400 font-bold">Player Health</span>
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

        {/* Right Combat Deck: Question & Options */}
        <div className="lg:col-span-7 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          {/* Question Text */}
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

          {/* 4 Interactive Answer Options */}
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

          {/* Action Bar / Next Button */}
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
                <span>Cast Answer Strike</span>
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
                    {currentFightIdx < BOSS_FIGHTS.length - 1 ? 'Next Boss Encounter' : 'Complete Exam Gauntlet'}
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
                <h3 className="text-2xl font-black text-white">ICT Boss Gauntlet Cleared!</h3>
                <p className="text-xs text-amber-300 font-mono mt-1">
                  Grade 10 Unit 01 Exam Mastery Unlocked
                </p>
                <p className="text-xs text-slate-300 font-sinhala mt-2">
                  ඔබ 2020 – 2025 සාමාන්‍ය පෙළ ප්‍රශ්න සාර්ථකව අවසන් කර ඇත!
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
