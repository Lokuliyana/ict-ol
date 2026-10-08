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
  HelpCircle,
  FileText
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
    id: 'b1-2020-p1-q05',
    yearText: '2020 O/L Paper I - Q05',
    badge: 'Center Align Shortcut',
    titleEn: 'The Center Alignment Key Combination',
    titleSi: 'මධ්‍ය පෙළගැස්ම සඳහා කෙටිමං යතුර',
    scenarioEn: 'Which keyboard shortcut is used to center align selected text in a Word Processing software?',
    scenarioSi: 'වචන සකසුම් මෘදුකාංගයක තෝරාගත් පෙළක් මධ්‍ය පෙළගැස්ම (Center align) කිරීමට භාවිත වන කෙටිමං යතුර කුමක්ද?',
    options: [
      { id: '1', textEn: 'Ctrl + C (Copy selected text)', textSi: 'Ctrl + C (පිටපත් කිරීම)', isCorrect: false },
      { id: '2', textEn: 'Ctrl + E (Center align selected text)', textSi: 'Ctrl + E (මධ්‍ය පෙළගැස්ම)', isCorrect: true },
      { id: '3', textEn: 'Ctrl + L (Left align selected text)', textSi: 'Ctrl + L (වම් පෙළගැස්ම)', isCorrect: false },
      { id: '4', textEn: 'Ctrl + R (Right align selected text)', textSi: 'Ctrl + R (දකුණු පෙළගැස්ම)', isCorrect: false },
    ],
    explanationEn: 'Ctrl + E centers text horizontally. Ctrl + C is Copy, Ctrl + L is Align Left, and Ctrl + R is Align Right.',
    explanationSi: 'Ctrl + E මගින් පෙළ තිරස්ව මධ්‍යගත කරයි. Ctrl + C යනු Copy වන අතර, Ctrl + L සහ Ctrl + R පිළිවෙළින් වම් සහ දකුණු පෙළගැස්ම වේ.',
    hint: "Think: 'E' is the middle letter alignment key!"
  },
  {
    id: 'b2-2021-p1-q06',
    yearText: '2021 O/L Paper I - Q06',
    badge: 'Chemical Subscript',
    titleEn: 'Formatting Chemical Formulas (H2O)',
    titleSi: 'H2O රසායනික සූත්‍ර හැඩසැසීම',
    scenarioEn: "Which formatting tool is used to write H2O where '2' appears below the normal line of text?",
    scenarioSi: "'2' ඉලක්කම පෙළ පේළියට පහළින් සිටින සේ H2O ලෙස ලිවීම සඳහා භාවිත කරන හැඩසැසුම් මෙවලම කුමක්ද?",
    options: [
      { id: '1', textEn: 'Superscript (Ctrl + Shift + +)', textSi: 'උඩලකුණ (Superscript)', isCorrect: false },
      { id: '2', textEn: 'Subscript (Ctrl + =)', textSi: 'යටිලකුණ (Subscript)', isCorrect: true },
      { id: '3', textEn: 'Strikethrough', textSi: 'මැදින් ඉර ඇඳීම (Strikethrough)', isCorrect: false },
      { id: '4', textEn: 'Change Case (Shift + F3)', textSi: 'කැපිටල්/සිම්පල් වෙනස් කිරීම', isCorrect: false },
    ],
    explanationEn: "Subscript (යටිලකුණ) drops characters below the text baseline. Superscript elevates them above (used for math powers).",
    explanationSi: "යටිලකුණ (Subscript) මගින් අකුරු පෙළ පේළියට පහළින් තබයි. උඩලකුණ (Superscript) මගින් ඉහළට ඔසවයි.",
    hint: "'Sub' means below the baseline, like a submarine!"
  },
  {
    id: 'b3-2022-p1-q08',
    yearText: '2022 O/L Paper I - Q08',
    badge: 'Table Cell Fusion',
    titleEn: 'Merging Adjacent Table Cells',
    titleSi: 'වගු සෛල ඒකාබද්ධ කිරීම',
    scenarioEn: 'In a word processing document, merging two or more adjacent cells in a table into a single cell is known as:',
    scenarioSi: 'වචන සකසුම් ලේඛනයක වගුවක ඇති ආසන්න සෛල දෙකක් හෝ කිහිපයක් එකම සෛලයක් බවට පත් කිරීම හැඳින්වෙන්නේ:',
    options: [
      { id: '1', textEn: 'Splitting Cells', textSi: 'සෛල බෙදීම (Splitting Cells)', isCorrect: false },
      { id: '2', textEn: 'Merging Cells', textSi: 'සෛල ඒකාබද්ධ කිරීම (Merging Cells)', isCorrect: true },
      { id: '3', textEn: 'Table Formatting', textSi: 'වගු හැඩසැසීම (Table Formatting)', isCorrect: false },
      { id: '4', textEn: 'Wrap Text', textSi: 'පෙළ එතීම (Wrap Text)', isCorrect: false },
    ],
    explanationEn: 'Merging Cells combines adjacent cells into one large block. Splitting divides a single cell into parts.',
    explanationSi: 'සෛල ඒකාබද්ධ කිරීම (Merging Cells) මගින් යාබද සෛල එකක් බවට පත් කරයි. සෛල බෙදීම මගින් එක් සෛලයක් කොටස් වලට වෙන් කරයි.',
    hint: 'Combining things together is called merging.'
  },
  {
    id: 'b4-2020-p2-q01',
    yearText: '2020 O/L Paper II - Q01(v)',
    badge: '150-Parent Mail Merge',
    titleEn: 'The School Invitation Mail Merge Architecture',
    titleSi: '150 දෙනෙකුට ආරාධනා පත්‍ර යැවීමේ ගැටලුව',
    scenarioEn: 'A principal needs to send an invitation letter to 150 parents for Sports Meet. The body is identical, but names and classes differ. What two primary documents are created?',
    scenarioSi: 'පාසලක විදුහල්පතිවරයෙකුට දෙමාපියන් 150 දෙනෙකු වෙත ආරාධනා පත්‍රයක් යැවීමට අවශ්‍යව ඇත. තනනු ලබන ප්‍රධාන ලේඛන/ගොනු දෙක කුමක්ද?',
    options: [
      { id: '1', textEn: 'Spreadsheet Sheet + PowerPoint Slide', textSi: 'පැතුරුම්පත සහ ඉදිරිපත් කිරීමේ කදාව', isCorrect: false },
      { id: '2', textEn: 'Main Document + Data Source Table', textSi: 'ප්‍රධාන ලේඛනය (Main Document) සහ දත්ත ප්‍රභවය (Data Source)', isCorrect: true },
      { id: '3', textEn: 'Header File + Footer File', textSi: 'ශීර්ෂක ගොනුව සහ පාදක ගොනුව', isCorrect: false },
      { id: '4', textEn: 'WordArt Object + ClipArt Image', textSi: 'WordArt වස්තුව සහ ClipArt රූපය', isCorrect: false },
    ],
    explanationEn: 'Mail Merge requires: (1) Main Document (containing the common text and merge fields) and (2) Data Source (containing recipient table data).',
    explanationSi: 'තැපැල් ඒකාබද්ධ කිරීම සඳහා ප්‍රධාන ලේඛනය (Main Document) සහ දත්ත ප්‍රභවය (Data Source) අවශ්‍ය වේ.',
    hint: 'One holds the letter template, the other holds the recipient table.'
  },
  {
    id: 'b5-2024-p1-q07',
    yearText: '2024 O/L Paper I - Q07',
    badge: 'Find & Replace',
    titleEn: 'Universal Find & Replace Key Shortcut',
    titleSi: 'සොයා ප්‍රතිස්ථාපනය කිරීමේ (Find & Replace) කෙටිමං යතුර',
    scenarioEn: 'Which key combination is used to find and replace a specific word throughout an entire document in Microsoft Word?',
    scenarioSi: 'Microsoft Word හි මුළු ලේඛනය පුරාම ඇති නිශ්චිත වචනයක් සොයා එය ප්‍රතිස්ථාපනය කිරීමට භාවිත කරන යතුරු සංයෝජනය කුමක්ද?',
    options: [
      { id: '1', textEn: 'Ctrl + F (Find only)', textSi: 'Ctrl + F (සෙවීම පමණි)', isCorrect: false },
      { id: '2', textEn: 'Ctrl + H (Find and Replace dialog)', textSi: 'Ctrl + H (සොයා ප්‍රතිස්ථාපනය කිරීම)', isCorrect: true },
      { id: '3', textEn: 'Ctrl + K (Insert Hyperlink)', textSi: 'Ctrl + K (අධිසබැඳියක් ඇතුළත් කිරීම)', isCorrect: false },
      { id: '4', textEn: 'Ctrl + G (Go To page dialog)', textSi: 'Ctrl + G (පිටුවකට යොමු වීම)', isCorrect: false },
    ],
    explanationEn: 'Ctrl + H opens the Find and Replace dialog window directly. Ctrl + F only finds text without replacing.',
    explanationSi: 'Ctrl + H මගින් Find & Replace සංවාද කොටුව විවෘත වේ. Ctrl + F මගින් සෙවීම පමණක් සිදු කරයි.',
    hint: 'Ctrl + F is Find; Ctrl + H is Find & Replace.'
  }
];

export function Lesson05BossArcade() {
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
    } catch {}
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
      const newBossHp = Math.max(0, bossHp - 20);
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
      {/* Boss HUD */}
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Swords className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>The Word Processing Boss Arcade</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  2020 – 2025 O/L Past Papers
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Prove your document publishing mastery across shortcuts, tables, formulas, and Mail Merge.
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

        {/* Dual HP Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
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
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                {curQ.yearText}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                {curQ.titleEn}
              </h4>
              <h5 className="text-xs text-emerald-400 font-sinhala">
                {curQ.titleSi}
              </h5>
            </div>

            <span className="text-xs font-mono text-slate-500">
              Challenge {currentIdx + 1} of {BOSS_QUESTIONS.length}
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {curQ.scenarioEn}
            </p>
            <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
              {curQ.scenarioSi}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {curQ.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isSelected && !isAnswered) {
                btnStyle = 'bg-emerald-500/20 border-emerald-500 text-white font-bold shadow-[0_0_12px_#10b981]';
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

          {/* Explanation HUD */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs"
            >
              <div className="flex items-center gap-2 font-bold text-white">
                {curQ.options.find(o => o.id === selectedOption)?.isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Exam Question Mastered! (+20 Damage)
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

          {/* Bottom Controls */}
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
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 disabled:pointer-events-none text-white font-mono text-xs font-bold shadow-lg shadow-emerald-600/30 ml-auto"
              >
                Submit Answer ➔
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
        /* Victory Banner */
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
              WORD PROCESSING BOSS DEFEATED!
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              You have mastered paragraph alignments, typographic surgery, table operations, text wrapping modes, and automated Mail Merge architectures!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-xs mx-auto text-xs font-mono text-emerald-400">
            ✓ 100% Mastery in Word Processing
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
