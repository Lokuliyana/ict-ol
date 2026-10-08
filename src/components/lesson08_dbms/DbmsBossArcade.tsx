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
  Database
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
    id: 'db-2020-p2-q04',
    yearText: '2020 O/L Paper II - Q04',
    badge: 'Library Lending Schema',
    titleEn: 'Foreign Keys in Library Lending Table',
    titleSi: 'පුස්තකාල ණයට දීමේ වගුවේ විදේශ යතුරු',
    scenarioEn: 'Consider relational tables:\n• BOOK (BookID, Title, Author, Publisher)\n• MEMBER (MemberID, MemberName, Address, TelephoneNo)\n• LEND (LendID, MemberID, BookID, IssueDate, DueDate)\n\nWhich fields act as the Foreign Keys in table LEND?',
    scenarioSi: 'ඉහත වගු 3 සලකන්න. LEND වගුව තුළ විදේශ යතුරු (Foreign Keys) ලෙස ක්‍රියාත්මක වන්නේ කුමන ක්ෂේත්‍රද?',
    options: [
      { id: '1', textEn: 'LendID only', textSi: 'LendID පමණි', isCorrect: false },
      { id: '2', textEn: 'MemberID and BookID', textSi: 'MemberID සහ BookID', isCorrect: true },
      { id: '3', textEn: 'Title and Author', textSi: 'Title සහ Author', isCorrect: false },
      { id: '4', textEn: 'IssueDate and DueDate', textSi: 'IssueDate සහ DueDate', isCorrect: false }
    ],
    explanationEn: 'MemberID references MEMBER table PK, and BookID references BOOK table PK. Thus, both are Foreign Keys in LEND.',
    explanationSi: 'MemberID මගින් MEMBER වගුවේ PK ද, BookID මගින් BOOK වගුවේ PK ද සම්බන්ධ කරන බැවින් ඒවා LEND වගුවේ විදේශ යතුරු වේ.',
    hint: 'Foreign keys link back to the Primary Keys of parent tables.'
  },
  {
    id: 'db-2021-p2-q04',
    yearText: '2021 O/L Paper II - Q04',
    badge: 'School Canteen Schema',
    titleEn: 'Composite Primary Key Identification',
    titleSi: 'සංයුක්ත ප්‍රාථමික යතුර හඳුනාගැනීම',
    scenarioEn: 'Table SALES_DETAILS contains (InvoiceNo, ItemCode, Quantity).\nAn invoice can contain multiple items, and an item can be in multiple invoices.\nWhat is the Composite Primary Key for SALES_DETAILS?',
    scenarioSi: 'SALES_DETAILS (InvoiceNo, ItemCode, Quantity) වගුව සඳහා වඩාත්ම සුදුසු සංයුක්ත ප්‍රාථමික යතුර කුමක්ද?',
    options: [
      { id: '1', textEn: 'Quantity alone', textSi: 'Quantity පමණි', isCorrect: false },
      { id: '2', textEn: 'InvoiceNo + ItemCode (Combined)', textSi: 'InvoiceNo + ItemCode (ඒකාබද්ධව)', isCorrect: true },
      { id: '3', textEn: 'ItemCode + Quantity', textSi: 'ItemCode + Quantity', isCorrect: false },
      { id: '4', textEn: 'InvoiceNo only', textSi: 'InvoiceNo පමණි', isCorrect: false }
    ],
    explanationEn: 'Neither InvoiceNo nor ItemCode is unique alone. Combined together (InvoiceNo + ItemCode), they form a unique Composite Primary Key.',
    explanationSi: 'තනි ක්ෂේත්‍රයක් අනන්‍ය නොවන බැවින් InvoiceNo සහ ItemCode ඒකාබද්ධ කර සංයුක්ත ප්‍රාථමික යතුර සාදයි.',
    hint: 'Combine the invoice number and the item code together.'
  },
  {
    id: 'db-2022-p2-q04',
    yearText: '2022 O/L Paper II - Q04',
    badge: 'Medical Center Integrity',
    titleEn: 'Purpose of Foreign Keys',
    titleSi: 'විදේශ යතුරු භාවිත කිරීමේ මූලික අරමුණ',
    scenarioEn: 'In a medical center database connecting PATIENT, DOCTOR, and APPOINTMENT tables, what is the primary purpose of using Foreign Keys?',
    scenarioSi: 'දත්ත සමුදා වගු අතර විදේශ යතුරු (Foreign Keys) භාවිත කිරීමේ ප්‍රධාන අරමුණ කුමක්ද?',
    options: [
      { id: '1', textEn: 'To establish logical relationships and link data across related tables', textSi: 'වගු අතර තර්කානුකූල සබඳතා ගොඩනැගීම සහ දත්ත සම්බන්ධ කිරීම', isCorrect: true },
      { id: '2', textEn: 'To automatically delete old patient records', textSi: 'පැරණි රෝගී දත්ත ස්වයංක්‍රීයව මකා දැමීම', isCorrect: false },
      { id: '3', textEn: 'To convert text strings into numerical currency values', textSi: 'පෙළ දත්ත මුදල් අගයන් බවට පරිවර්තනය කිරීම', isCorrect: false },
      { id: '4', textEn: 'To encrypt database files on optical compact discs', textSi: 'සීඩී තැටිවල දත්ත ගොනු සංකේතනය කිරීම', isCorrect: false }
    ],
    explanationEn: 'Foreign keys establish referential integrity by logically binding records in child tables to master tables.',
    explanationSi: 'විදේශ යතුරු මගින් වගු අතර සම්බන්ධතාව ගොඩනගමින් දත්තවල අඛණ්ඩතාව (Referential Integrity) ආරක්ෂා කරයි.',
    hint: 'Think: Relational connection between tables.'
  },
  {
    id: 'db-2024-p2-q04',
    yearText: '2024 O/L Paper II - Q04',
    badge: 'Sports Participation Dilemma',
    titleEn: 'Why IndexNo Alone Cannot be PK in Participation',
    titleSi: 'සහභාගීත්ව වගුවේ IndexNo පමණක් PK විය නොහැක්කේ ඇයි?',
    scenarioEn: 'Consider table PARTICIPATION (IndexNo, EventCode, Place).\nWhy CANNOT IndexNo alone serve as the primary key of PARTICIPATION?',
    scenarioSi: 'PARTICIPATION (IndexNo, EventCode, Place) වගුව සඳහා IndexNo පමණක් ප්‍රාථමික යතුර ලෙස භාවිත කළ නොහැක්කේ ඇයි?',
    options: [
      { id: '1', textEn: 'Because IndexNo is stored as a text data type', textSi: 'IndexNo යනු Text දත්ත වර්ගයක් වන නිසා', isCorrect: false },
      { id: '2', textEn: 'Because a student can compete in multiple sports events, causing IndexNo to repeat/duplicate', textSi: 'එක් ශිෂ්‍යයෙකුට ඉසව් කිහිපයකට සහභාගී විය හැකි බැවින් IndexNo අගය පුනරාවර්තනය වන නිසා', isCorrect: true },
      { id: '3', textEn: 'Because Place values are already primary keys', textSi: 'Place අගය දැනටමත් ප්‍රාථමික යතුරක් වන නිසා', isCorrect: false },
      { id: '4', textEn: 'Because sports events require binary Yes/No flags', textSi: 'ක්‍රීඩා ඉසව් සඳහා Yes/No දත්ත වර්ගය අවශ්‍ය නිසා', isCorrect: false }
    ],
    explanationEn: 'Primary keys must be strictly unique. If student S101 enters both 100m (E01) and Long Jump (E02), S101 appears twice, violating PK uniqueness.',
    explanationSi: 'ප්‍රාථමික යතුරක් පුනරාවර්තනය විය නොහැක. එක් සිසුවෙකු ඉසව් කිහිපයකට තරග කළ විට IndexNo නැවත නැවත ලියවෙන බැවින් එය තනිව PK විය නොහැක.',
    hint: 'One student participates in multiple events ➔ duplicate Index numbers.'
  },
  {
    id: 'db-2025-p2-q04',
    yearText: '2025 O/L Paper II - Q04',
    badge: 'Online Store Architecture',
    titleEn: 'Multi-Table E-Commerce Data Types',
    titleSi: 'ඊ-වාණිජ්‍ය දත්ත සමුදා දත්ත වර්ග',
    scenarioEn: 'In table ORDERS (OrderID, OrderDate, CustomerID, TotalAmount), state the most suitable data types for OrderDate and TotalAmount:',
    scenarioSi: 'ORDERS (OrderID, OrderDate, CustomerID, TotalAmount) වගුවේ OrderDate සහ TotalAmount සඳහා වඩාත්ම සුදුසු දත්ත වර්ග මොනවාද?',
    options: [
      { id: '1', textEn: 'OrderDate: Date/Time | TotalAmount: Currency', textSi: 'OrderDate: Date/Time | TotalAmount: Currency', isCorrect: true },
      { id: '2', textEn: 'OrderDate: Short Text | TotalAmount: Yes/No', textSi: 'OrderDate: Short Text | TotalAmount: Yes/No', isCorrect: false },
      { id: '3', textEn: 'OrderDate: AutoNumber | TotalAmount: Date/Time', textSi: 'OrderDate: AutoNumber | TotalAmount: Date/Time', isCorrect: false },
      { id: '4', textEn: 'OrderDate: Number | TotalAmount: Short Text', textSi: 'OrderDate: Number | TotalAmount: Short Text', isCorrect: false }
    ],
    explanationEn: 'OrderDate requires Date/Time format for calendar validation, while TotalAmount requires Currency for decimal monetary representation.',
    explanationSi: 'OrderDate සඳහා Date/Time දත්ත වර්ගය ද, TotalAmount සඳහා Currency (මුදල්) දත්ත වර්ගය ද වඩාත්ම යෝග්‍ය වේ.',
    hint: 'Date/Time for dates, Currency for money.'
  }
];

export function DbmsBossArcade() {
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 06 • විභාග සටන් අංගනය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              2020 – 2025 Paper II DBMS Exam Challenges
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Swords className="w-5 h-5 text-amber-400" />
            The Past Paper Boss Arcade (දත්ත සමුදා විභාග අභියෝගය)
          </h2>
        </div>

        {/* Score Display */}
        <div className="flex items-center gap-4 bg-slate-800/80 p-2 px-4 rounded-xl border border-slate-700">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Exam Mastery</div>
            <div className="text-sm font-mono font-black text-amber-400">{score} / {BOSS_QUESTIONS.length}</div>
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
              <span className="px-3 py-1 rounded-lg bg-blue-950 border border-blue-500/50 text-xs font-mono font-bold text-blue-300">
                {currentQ.yearText}
              </span>
              <span className="text-xs font-semibold text-slate-400">{currentQ.badge}</span>
            </div>
            <span className="text-xs font-mono text-slate-500">Challenge {currentIndex + 1} of {BOSS_QUESTIONS.length}</span>
          </div>

          {/* Title & Scenario */}
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-white">{currentQ.titleEn}</h3>
            <h4 className="text-xs font-bold text-blue-400 font-sinhala">{currentQ.titleSi}</h4>
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
                btnStyle = 'bg-blue-950/80 border-2 border-blue-400 text-white shadow-lg shadow-blue-500/20';
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
              className="p-4 rounded-xl bg-blue-950/60 border border-blue-500/40 space-y-1.5 text-xs text-blue-200"
            >
              <div className="flex items-center gap-1.5 font-bold text-blue-300">
                <Sparkles className="w-4 h-4" />
                <span>Examiner Scheme & Rationale:</span>
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
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20"
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20"
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
          className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/50 text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-500/20 border border-blue-500 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">DATABASE GAUNTLET CONQUERED!</h3>
            <p className="text-sm text-blue-400 font-sinhala">දත්ත සමුදා කළමනාකරණය සියලු Paper II ගැටලු සාර්ථකව විසඳන ලදී</p>
            <div className="text-3xl font-black font-mono text-amber-300 pt-2">
              Final Score: {score} / {BOSS_QUESTIONS.length}
            </div>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            {score >= 4 ? (
              <p className="text-emerald-300 font-semibold">
                🌟 Outstanding! You are fully prepared to score full marks in O/L Paper II Database essay questions (Foreign Keys, Composite Keys & ER Cardinality).
              </p>
            ) : (
              <p className="text-amber-300 font-semibold">
                Good effort! Review the Keymaster's Forge and Foreign Key cable connections to secure maximum marks in Paper II.
              </p>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-blue-500/30"
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
