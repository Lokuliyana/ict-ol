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
  Table as TableIcon
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
    id: 'b1-2020-p1-q21',
    yearText: '2020 O/L Paper I - Q21',
    badge: 'Operator Precedence',
    titleEn: 'Mathematical Precedence in Spreadsheets',
    titleSi: 'ගණිත කර්ම ප්‍රමුඛතා අනුපිළිවෙළ',
    scenarioEn: 'Consider cells: A1 = 10, B1 = 20, C1 = 5. What is the evaluated output of formula =A1 + B1 / C1 * 2 ?',
    scenarioSi: 'A1 = 10, B1 = 20, C1 = 5 නම්, =A1 + B1 / C1 * 2 සූත්‍රය ගණනය කළ විට ලැබෙන අගය කුමක්ද?',
    options: [
      { id: '1', textEn: '12', textSi: '12', isCorrect: false },
      { id: '2', textEn: '18', textSi: '18', isCorrect: true },
      { id: '3', textEn: '30', textSi: '30', isCorrect: false },
      { id: '4', textEn: '8', textSi: '8', isCorrect: false }
    ],
    explanationEn: 'Evaluation steps: 1) Division (20/5 = 4) ➔ 2) Multiplication (4*2 = 8) ➔ 3) Addition (10+8 = 18).',
    explanationSi: 'පියවර: 1) බෙදීම (20/5 = 4) ➔ 2) ගුණ කිරීම (4*2 = 8) ➔ 3) එකතු කිරීම (10+8 = 18).',
    hint: 'BODMAS rule: Division and multiplication execute before addition!'
  },
  {
    id: 'b2-2021-p1-q22',
    yearText: '2021 O/L Paper I - Q22',
    badge: 'Absolute Reference',
    titleEn: 'Absolute Cell Reference Syntax',
    titleSi: 'නිරපේක්ෂ සෛල යොමුවක නිවැරදි ආකෘතිය',
    scenarioEn: 'Which of the following correctly denotes an absolute cell reference for cell B5?',
    scenarioSi: 'B5 සෛලය සඳහා නිවැරදි නිරපේක්ෂ සෛල යොමුව (Absolute Cell Reference) දක්වන්නේ කුමක්ද?',
    options: [
      { id: '1', textEn: '$B5 (Mixed Reference)', textSi: '$B5 (මිශ්‍ර යොමුව)', isCorrect: false },
      { id: '2', textEn: 'B$5 (Mixed Reference)', textSi: 'B$5 (මිශ්‍ර යොමුව)', isCorrect: false },
      { id: '3', textEn: '$B$5 (Absolute Reference)', textSi: '$B$5 (නිරපේක්ෂ යොමුව)', isCorrect: true },
      { id: '4', textEn: '#B#5 (Invalid syntax)', textSi: '#B#5 (වලංගු නොවේ)', isCorrect: false }
    ],
    explanationEn: 'An absolute cell reference locks both the column letter and row number with dollar signs ($B$5).',
    explanationSi: 'නිරපේක්ෂ සෛල යොමුවකදී තීරුව සහ පේළිය යන දෙකටම ඉදිරියෙන් ඩොලර් ලකුණ ($) යෙදේ ($B$5).',
    hint: 'Both column and row must have a dollar sign ($).'
  },
  {
    id: 'b3-2021-p2-q03',
    yearText: '2021 O/L Paper II - Q03',
    badge: 'Book Shop Sales',
    titleEn: 'Summation of Sales Column Range',
    titleSi: 'මුළු විකුණුම් එකතුව සෙවීමේ ශ්‍රිතය',
    scenarioEn: 'Which spreadsheet function should be written in cell D5 to calculate the total sales amount of items in cells D2, D3, and D4?',
    scenarioSi: 'D2 සිට D4 දක්වා සෛලවල ඇති මුළු විකුණුම් එකතුව D5 සෛලයේ ගණනය කිරීමට ලිවිය යුතු ශ්‍රිතය කුමක්ද?',
    options: [
      { id: '1', textEn: '=SUM(D2:D4)', textSi: '=SUM(D2:D4)', isCorrect: true },
      { id: '2', textEn: '=TOTAL(D2:D4)', textSi: '=TOTAL(D2:D4)', isCorrect: false },
      { id: '3', textEn: '=ADD(D2:D4)', textSi: '=ADD(D2:D4)', isCorrect: false },
      { id: '4', textEn: '=COUNT(D2:D4)', textSi: '=COUNT(D2:D4)', isCorrect: false }
    ],
    explanationEn: 'The standard built-in spreadsheet function for range summation is =SUM(start:end).',
    explanationSi: 'පරාසයක එකතුව සෙවීම සඳහා සම්මත ශ්‍රිතය වන්නේ =SUM(D2:D4) වේ.',
    hint: 'The function keyword for summation is SUM.'
  },
  {
    id: 'b4-2023-p1-q22',
    yearText: '2023 O/L Paper I - Q22',
    badge: 'Error Diagnostics',
    titleEn: 'Divide by Zero Error Code',
    titleSi: 'බිංදුවෙන් බෙදීමේ දෝෂ සංකේතය',
    scenarioEn: 'Which error message is returned when a formula attempts to divide a numeric value by 0 or an empty cell?',
    scenarioSi: 'සූත්‍රයක් මගින් කිසියම් සංඛ්‍යාවක් බිංදුවෙන් හෝ හිස් සෛලයකින් බෙදීමට උත්සාහ කළ විට ලැබෙන දෝෂ පණිවිඩය කුමක්ද?',
    options: [
      { id: '1', textEn: '#REF!', textSi: '#REF!', isCorrect: false },
      { id: '2', textEn: '#DIV/0!', textSi: '#DIV/0!', isCorrect: true },
      { id: '3', textEn: '#NAME?', textSi: '#NAME?', isCorrect: false },
      { id: '4', textEn: '#VALUE!', textSi: '#VALUE!', isCorrect: false }
    ],
    explanationEn: '#DIV/0! specifically flags an illegal division by zero or an uninitialized empty denominator.',
    explanationSi: 'බිංදුවෙන් බෙදීම නීති විරෝධී ගණිත කර්මයක් බැවින් #DIV/0! දෝෂය ලැබේ.',
    hint: 'DIV stands for Division.'
  },
  {
    id: 'b5-2024-p1-q20',
    yearText: '2024 O/L Paper I - Q20',
    badge: 'Numeric Counter',
    titleEn: 'Counting Numeric Cells Only',
    titleSi: 'සංඛ්‍යාත්මක සෛල පමණක් ගණනය කිරීම',
    scenarioEn: 'Which function should be used to count ONLY the cells containing numbers in the range A1:A10, ignoring text labels?',
    scenarioSi: 'A1 සිට A10 දක්වා පරාසයේ පෙළ නොසලකා සංඛ්‍යාත්මක අගයන් පමණක් අඩංගු සෛල ගණන සෙවීමට භාවිත කරන්නේ කුමක්ද?',
    options: [
      { id: '1', textEn: '=COUNT(A1:A10)', textSi: '=COUNT(A1:A10)', isCorrect: true },
      { id: '2', textEn: '=COUNTA(A1:A10)', textSi: '=COUNTA(A1:A10)', isCorrect: false },
      { id: '3', textEn: '=SUM(A1:A10)', textSi: '=SUM(A1:A10)', isCorrect: false },
      { id: '4', textEn: '=NUMBER(A1:A10)', textSi: '=NUMBER(A1:A10)', isCorrect: false }
    ],
    explanationEn: '=COUNT() counts only numeric cells. =COUNTA() counts all non-empty cells including text strings.',
    explanationSi: '=COUNT() මගින් සංඛ්‍යාත්මක සෛල පමණක් ගණින අතර, =COUNTA() මගින් පෙළ ද ඇතුළුව හිස් නොවන සියලු සෛල ගණනය කරයි.',
    hint: '=COUNT counts numbers, =COUNTA counts All non-blank.'
  },
  {
    id: 'b6-2025-p1-q21',
    yearText: '2025 O/L Paper I - Q21',
    badge: 'Logical IF Gate',
    titleEn: 'Conditional Pass/Fail Logic',
    titleSi: 'කොන්දේසි සහිත IF ශ්‍රිතය',
    scenarioEn: 'Which formula correctly outputs "PASS" if marks in cell B2 are 50 or above, and "FAIL" otherwise?',
    scenarioSi: 'B2 සෛලයේ ලකුණු 50 හෝ ඊට වැඩි නම් "PASS" ද, එසේ නොවේ නම් "FAIL" ද ලබාදෙන නිවැරදි සූත්‍රය කුමක්ද?',
    options: [
      { id: '1', textEn: '=IF(B2 >= 50, "PASS", "FAIL")', textSi: '=IF(B2 >= 50, "PASS", "FAIL")', isCorrect: true },
      { id: '2', textEn: '=IF(B2 > 50, PASS, FAIL)', textSi: '=IF(B2 > 50, PASS, FAIL)', isCorrect: false },
      { id: '3', textEn: '=IF(B2 <= 50, "PASS", "FAIL")', textSi: '=IF(B2 <= 50, "PASS", "FAIL")', isCorrect: false },
      { id: '4', textEn: '=CHECK(B2 >= 50, "PASS")', textSi: '=CHECK(B2 >= 50, "PASS")', isCorrect: false }
    ],
    explanationEn: 'The syntax =IF(B2 >= 50, "PASS", "FAIL") checks condition B2 >= 50 with text strings enclosed in double quotes.',
    explanationSi: '=IF(B2 >= 50, "PASS", "FAIL") මගින් ලකුණු 50 ට සමාන හෝ වැඩි බව පරීක්ෂා කර උඩුකොමා තුළ ඇති අදාළ පෙළ ප්‍රතිදානය කරයි.',
    hint: '>= 50 with "PASS" and "FAIL" in double quotes.'
  }
];

export function Lesson07BossArcade() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [bossDefeated, setBossDefeated] = useState(false);

  const currentQ = BOSS_QUESTIONS[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    sound.playClick(650);
    setSelectedOptionId(optId);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId || isAnswered) return;

    setIsAnswered(true);
    const chosen = currentQ.options.find(o => o.id === selectedOptionId);

    if (chosen?.isCorrect) {
      sound.playSuccess();
      setScore(s => s + 1);
    } else {
      sound.playError();
    }
  };

  const handleNextQuestion = () => {
    sound.playSnap();
    if (currentIndex < BOSS_QUESTIONS.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setBossDefeated(true);
      sound.playVictory();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    sound.playClick(400);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setBossDefeated(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 07 • විභාග සටන් අංගනය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              2020 – 2025 Spreadsheet O/L Exam Challenges
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Swords className="w-5 h-5 text-emerald-400" />
            The Past Paper Boss Arcade (පැතුරුම්පත් විභාග අභියෝගය)
          </h2>
        </div>

        {/* Score Display */}
        <div className="flex items-center gap-4 bg-slate-800/80 p-2 px-4 rounded-xl border border-slate-700">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Exam Mastery</div>
            <div className="text-sm font-mono font-black text-emerald-400">{score} / {BOSS_QUESTIONS.length}</div>
          </div>
          <Trophy className="w-6 h-6 text-amber-400" />
        </div>
      </div>

      {/* Main Boss Stage */}
      {!bossDefeated ? (
        <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-6 shadow-2xl">
          {/* Question Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500/50 text-xs font-mono font-bold text-emerald-300">
                {currentQ.yearText}
              </span>
              <span className="text-xs font-semibold text-slate-400">{currentQ.badge}</span>
            </div>
            <span className="text-xs font-mono text-slate-500">Question {currentIndex + 1} of {BOSS_QUESTIONS.length}</span>
          </div>

          {/* Title & Scenario */}
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-white">{currentQ.titleEn}</h3>
            <h4 className="text-xs font-bold text-emerald-400 font-sinhala">{currentQ.titleSi}</h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 space-y-2">
              <p className="whitespace-pre-line leading-relaxed">{currentQ.scenarioEn}</p>
              <p className="whitespace-pre-line text-slate-400 font-sinhala text-[11px] leading-relaxed pt-1 border-t border-slate-800/60">
                {currentQ.scenarioSi}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isCorrect;

              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800/80';
              if (isSelected && !isAnswered) {
                btnStyle = 'bg-emerald-950/80 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/20';
              } else if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-2 border-emerald-400 text-emerald-100';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-2 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-900/50 border-slate-800/50 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="space-y-0.5">
                    <div>{opt.textEn}</div>
                    <div className="text-[11px] opacity-75 font-sinhala">{opt.textSi}</div>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Post-Answer Explanation */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-1.5 text-xs text-emerald-200"
            >
              <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                <Sparkles className="w-4 h-4" />
                <span>Examiner Rationale & Scheme:</span>
              </div>
              <p>{currentQ.explanationEn}</p>
              <p className="text-slate-400 font-sinhala text-[11px]">{currentQ.explanationSi}</p>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-300 text-xs flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Hide Clue' : 'Hint Clue'}</span>
            </button>

            <div>
              {!isAnswered ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={!selectedOptionId}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20"
                >
                  Confirm Strike
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <span>{currentIndex < BOSS_QUESTIONS.length - 1 ? 'Next Question' : 'Claim Victory'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {showHint && (
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
              💡 <strong>Examiner Hint:</strong> {currentQ.hint}
            </div>
          )}
        </div>
      ) : (
        /* Victory Screen */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/50 text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">SPREADSHEET GAUNTLET CONQUERED!</h3>
            <p className="text-sm text-emerald-400 font-sinhala">පැතුරුම්පත් සියලු විභාග ගැටලු සාර්ථකව විසඳන ලදී</p>
            <div className="text-3xl font-black font-mono text-emerald-300 pt-2">
              Final Score: {score} / {BOSS_QUESTIONS.length}
            </div>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            {score >= 5 ? (
              <p className="text-emerald-300 font-semibold">
                🌟 Distinction Level! You have mastered BODMAS math precedence, absolute $ anchoring, COUNT vs COUNTA, and IF decision logic.
              </p>
            ) : (
              <p className="text-amber-300 font-semibold">
                Good effort! Review the Anchor Weights and BODMAS operator precedence stations to secure maximum marks in the O/L examination.
              </p>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Boss Arcade</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
