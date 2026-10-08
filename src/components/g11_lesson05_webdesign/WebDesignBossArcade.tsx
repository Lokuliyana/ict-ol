'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Swords, 
  Trophy, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Sparkles, 
  Zap, 
  Award, 
  ArrowRight,
  ShieldCheck,
  FileQuestion,
  Code2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  year: string;
  paper: string;
  questionNumber: string;
  topic: string;
  questionEn: string;
  questionSi: string;
  codeSnippet?: string;
  options: {
    id: string;
    textEn: string;
    textSi: string;
  }[];
  correctId: string;
  explanationEn: string;
  explanationSi: string;
}

const BOSS_QUESTIONS: BossQuestion[] = [
  {
    id: 'boss-1',
    year: '2020',
    paper: 'Paper I',
    questionNumber: 'MCQ 21',
    topic: 'Line Break HTML Tag',
    questionEn: 'Which HTML tag is used to insert a line break without starting a new paragraph?',
    questionSi: 'ඡේදයක් ආරම්භ නොකර නව පේළියකට යාම සඳහා භාවිත කරන HTML ටැගය කුමක්ද?',
    options: [
      { id: '1', textEn: '<br>', textSi: '<br>' },
      { id: '2', textEn: '<p>', textSi: '<p>' },
      { id: '3', textEn: '<hr>', textSi: '<hr>' },
      { id: '4', textEn: '<break>', textSi: '<break>' }
    ],
    correctId: '1',
    explanationEn: '<br> (Break tag) is an Empty tag that inserts a single carriage return / line break without the bottom spacing of a paragraph.',
    explanationSi: '<br> යනු නව ඡේදයක් නොව පේළි බිඳීමක් පමණක් ඇතුළත් කිරීමට භාවිත කරන හිස් ටැගයයි (Empty Tag).'
  },
  {
    id: 'boss-2',
    year: '2020',
    paper: 'Paper II',
    questionNumber: 'Question 05',
    topic: 'HTML Table Header Element',
    questionEn: 'In the HTML table code below, which tag is specifically used to define table header cells with bold and centered text by default?',
    questionSi: 'පහත දැක්වෙන HTML වගු කේතයේ, පෙරනිමියෙන් තද පැහැති (Bold) සහ මැදිගත (Centered) අකුරුවලින් ශීර්ෂ සෛල අර්ථ දැක්වීමට භාවිත කරන ටැගය කුමක්ද?',
    codeSnippet: `<table border="1">
  <tr>
    <th>Subject Name</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Information Tech</td>
    <td>A</td>
  </tr>
</table>`,
    options: [
      { id: '1', textEn: '<th>', textSi: '<th>' },
      { id: '2', textEn: '<td>', textSi: '<td>' },
      { id: '3', textEn: '<tr>', textSi: '<tr>' },
      { id: '4', textEn: '<head>', textSi: '<head>' }
    ],
    correctId: '1',
    explanationEn: '<th> (Table Header) defines header cells which render text in bold and center-aligned by default. <td> is for regular table data.',
    explanationSi: '<th> (Table Header) මඟින් වගුවේ ශීර්ෂ සෛල සාදනු ලබන අතර ඒවා පෙරනිමියෙන්ම තද (Bold) සහ මධ්‍යගත (Centered) වේ.'
  },
  {
    id: 'boss-3',
    year: '2021',
    paper: 'Paper I',
    questionNumber: 'MCQ 22',
    topic: 'Column Merge Attribute (colspan)',
    questionEn: 'In an HTML table, which attribute is used to merge two or more adjacent columns in the same row into a single merged cell?',
    questionSi: 'HTML වගුවක එකම පේළියේ පිහිටි යාබද තීරු (Columns) දෙකක් හෝ කිහිපයක් එකතු කර තනි සෛලයක් සෑදීමට භාවිත කරන attribute එක කුමක්ද?',
    options: [
      { id: '1', textEn: 'colspan', textSi: 'colspan' },
      { id: '2', textEn: 'rowspan', textSi: 'rowspan' },
      { id: '3', textEn: 'cellspacing', textSi: 'cellspacing' },
      { id: '4', textEn: 'cellpadding', textSi: 'cellpadding' }
    ],
    correctId: '1',
    explanationEn: 'colspan (Column Span) merges horizontal adjacent columns into one cell (e.g., <td colspan="2">). rowspan merges vertical rows.',
    explanationSi: 'colspan මඟින් එකම පේළියේ තිරස් තීරු (Columns) එකතු කරයි. rowspan මඟින් සිරස් පේළි (Rows) එකතු කරයි.'
  },
  {
    id: 'boss-4',
    year: '2022',
    paper: 'Paper II',
    questionNumber: 'Question 05(b)',
    topic: 'Square Bullet List & Hyperlink Syntax',
    questionEn: 'Which of the following HTML markup snippets correctly creates an unordered list with square bullet points containing a hyperlink to "index.html"?',
    questionSi: '"index.html" වෙත සබැඳියක් සහිත හතරැස් (square) බුලට් ලකුණු සහිත අනුපිළිවෙලක් රහිත ලැයිස්තුවක් සෑදීමට නිවැරදි HTML කේතය කුමක්ද?',
    options: [
      { 
        id: '1', 
        textEn: '<ul type="square"><li><a href="index.html">Home</a></li></ul>', 
        textSi: '<ul type="square"><li><a href="index.html">Home</a></li></ul>' 
      },
      { 
        id: '2', 
        textEn: '<ol type="square"><li><a src="index.html">Home</a></li></ol>', 
        textSi: '<ol type="square"><li><a src="index.html">Home</a></li></ol>' 
      },
      { 
        id: '3', 
        textEn: '<ul bullet="square"><li><link url="index.html">Home</link></li></ul>', 
        textSi: '<ul bullet="square"><li><link url="index.html">Home</link></li></ul>' 
      },
      { 
        id: '4', 
        textEn: '<list type="square"><item href="index.html">Home</item></list>', 
        textSi: '<list type="square"><item href="index.html">Home</item></list>' 
      }
    ],
    correctId: '1',
    explanationEn: '<ul> defines unordered list, type="square" produces solid square bullets, and <a> with href="index.html" defines the hyperlink.',
    explanationSi: '<ul> මඟින් අනුපිළිවෙලක් රහිත ලැයිස්තු සාදන අතර type="square" මඟින් හතරැස් බුලට් ද, href attribute එක මඟින් සබැඳිය ද දක්වයි.'
  },
  {
    id: 'boss-5',
    year: '2024',
    paper: 'Paper II',
    questionNumber: 'Question 05(b)',
    topic: 'Container vs Empty Tags Classification',
    questionEn: 'Which of the following groups contains ONLY Empty Tags (හිස් ටැග පමණක් අඩංගු කාණ්ඩය කුමක්ද)?',
    questionSi: 'පහත සඳහන් ටැග කාණ්ඩ අතුරින් හිස් ටැග (Empty Tags) පමණක් අඩංගු කාණ්ඩය තෝරන්න:',
    options: [
      { id: '1', textEn: '<img>, <br>, <hr>', textSi: '<img>, <br>, <hr>' },
      { id: '2', textEn: '<p>, <b>, <i>', textSi: '<p>, <b>, <i>' },
      { id: '3', textEn: '<a>, <img>, <h1>', textSi: '<a>, <img>, <h1>' },
      { id: '4', textEn: '<table>, <tr>, <td>', textSi: '<table>, <tr>, <td>' }
    ],
    correctId: '1',
    explanationEn: 'Empty tags (Void tags) do not wrap content and do not have closing tags. <img>, <br>, and <hr> are all pure empty tags.',
    explanationSi: 'හිස් ටැග (Empty Tags) සඳහා වැසුම් ටැග (Closing tags) නොමැත. <img>, <br>, <hr> යනු හිස් ටැග සඳහා උදාහරණ වේ.'
  },
  {
    id: 'boss-6',
    year: '2025',
    paper: 'Paper II',
    questionNumber: 'Question 05(b)',
    topic: 'HTML Font Tag Attributes',
    questionEn: 'What is the correct HTML markup to display the text "GCE O/L ICT" in Red color with Arial font face?',
    questionSi: '"GCE O/L ICT" යන පාඨය රතු පැහැයෙන් සහ Arial අකුරු මෝස්තරයෙන් ප්‍රදර්ශනය කිරීමට නිවැරදි HTML කේතය කුමක්ද?',
    options: [
      { 
        id: '1', 
        textEn: '<font color="red" face="Arial">GCE O/L ICT</font>', 
        textSi: '<font color="red" face="Arial">GCE O/L ICT</font>' 
      },
      { 
        id: '2', 
        textEn: '<font fontcolor="red" fontname="Arial">GCE O/L ICT</font>', 
        textSi: '<font fontcolor="red" fontname="Arial">GCE O/L ICT</font>' 
      },
      { 
        id: '3', 
        textEn: '<text color="red" style="Arial">GCE O/L ICT</text>', 
        textSi: '<text color="red" style="Arial">GCE O/L ICT</text>' 
      },
      { 
        id: '4', 
        textEn: '<font rgb="red" family="Arial">GCE O/L ICT</font>', 
        textSi: '<font rgb="red" family="Arial">GCE O/L ICT</font>' 
      }
    ],
    correctId: '1',
    explanationEn: 'In the G.C.E. O/L HTML syllabus, the <font> tag uses color="..." to set text color, face="..." to set font typeface, and size="..." to set size.',
    explanationSi: 'G.C.E. O/L HTML විෂය නිර්දේශයේ <font> ටැගය තුළ වර්ණය සඳහා color="...", අකුරු විලාසය සඳහා face="..." සහ විශාලත්වය සඳහා size="..." භාවිත කරයි.'
  }
];

export function WebDesignBossArcade() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);

  const currentQ = BOSS_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === BOSS_QUESTIONS.length - 1;

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    sound.playClick(500);
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isSubmitted) return;

    const isCorrect = selectedOptionId === currentQ.correctId;
    if (isCorrect) {
      sound.playVictory();
    } else {
      sound.playError();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        selected: selectedOptionId,
        isCorrect
      }
    }));
    setIsSubmitted(true);
  };

  const handleNext = () => {
    sound.playClick(600);
    if (isLastQuestion) {
      setShowCompletionModal(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      const nextQ = BOSS_QUESTIONS[currentIndex + 1];
      const existing = userAnswers[nextQ.id];
      if (existing) {
        setSelectedOptionId(existing.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOptionId(null);
        setIsSubmitted(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    sound.playClick(450);
    setCurrentIndex((prev) => prev - 1);
    const prevQ = BOSS_QUESTIONS[currentIndex - 1];
    const existing = userAnswers[prevQ.id];
    if (existing) {
      setSelectedOptionId(existing.selected);
      setIsSubmitted(true);
    } else {
      setSelectedOptionId(null);
      setIsSubmitted(false);
    }
  };

  const handleResetArcade = () => {
    sound.playClick(400);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setUserAnswers({});
    setShowCompletionModal(false);
  };

  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.values(userAnswers).filter((a) => a.isCorrect).length;
  const scorePercentage = totalAnswered > 0 ? Math.round((totalCorrect / BOSS_QUESTIONS.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner / HUD */}
      <div className="bg-slate-900/90 border border-orange-500/30 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
              <Swords className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white">O/L Web Design Boss Arcade</h3>
                <span className="text-xs bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded-full border border-orange-500/40">
                  2020 – 2025 Past Papers
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Conquer authentic G.C.E. O/L HTML exam challenges with live marking scheme validation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 text-center">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Accuracy</div>
              <div className="text-base font-black text-orange-400 font-mono">
                {totalCorrect}/{BOSS_QUESTIONS.length} ({scorePercentage}%)
              </div>
            </div>

            <button
              onClick={handleResetArcade}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
              title="Reset Boss Arcade"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Progress Tracker */}
        <div className="grid grid-cols-6 gap-2 mt-5">
          {BOSS_QUESTIONS.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => {
                  sound.playClick(500);
                  setCurrentIndex(idx);
                  if (ans) {
                    setSelectedOptionId(ans.selected);
                    setIsSubmitted(true);
                  } else {
                    setSelectedOptionId(null);
                    setIsSubmitted(false);
                  }
                }}
                className={`py-2 px-1 rounded-xl text-center border transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-orange-400 bg-orange-500/20 shadow-md shadow-orange-500/20 text-white font-bold'
                    : ans
                    ? ans.isCorrect
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                      : 'border-red-500/50 bg-red-500/10 text-red-400'
                    : 'border-slate-800 bg-slate-950/60 text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono leading-none">{q.year}</div>
                <div className="text-[11px] font-bold mt-1">Boss {idx + 1}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
        {/* Header info */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-orange-500/20 text-orange-300 font-mono text-xs font-bold border border-orange-500/30">
              {currentQ.year} {currentQ.paper}
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800 text-slate-300 font-mono text-xs font-bold">
              {currentQ.questionNumber}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Topic: <b className="text-white">{currentQ.topic}</b>
            </span>
          </div>

          <span className="text-xs text-slate-400 font-mono">
            Question {currentIndex + 1} of {BOSS_QUESTIONS.length}
          </span>
        </div>

        {/* Question Text */}
        <div className="space-y-3">
          <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQ.questionEn}
          </p>
          <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-sinhala">
            {currentQ.questionSi}
          </p>
        </div>

        {/* Optional Code Snippet */}
        {currentQ.codeSnippet && (
          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 relative">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
              Exam Code Reference:
            </span>
            <pre className="text-xs sm:text-sm font-mono text-orange-200 overflow-x-auto whitespace-pre-wrap">
              <code>{currentQ.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let optionStyles = 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-orange-500/40 hover:bg-slate-800/40';

            if (isSubmitted) {
              if (option.id === currentQ.correctId) {
                optionStyles = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-lg shadow-emerald-500/20';
              } else if (isSelected) {
                optionStyles = 'border-red-500 bg-red-500/20 text-red-200 shadow-lg shadow-red-500/20';
              } else {
                optionStyles = 'border-slate-800/40 bg-slate-950/30 text-slate-600 opacity-60';
              }
            } else if (isSelected) {
              optionStyles = 'border-orange-400 bg-orange-500/20 text-white shadow-lg shadow-orange-500/25';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isSubmitted}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default ${optionStyles}`}
              >
                <div className="space-y-1">
                  <div className="font-mono text-xs sm:text-sm font-bold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300">
                      {option.id}
                    </span>
                    <span>{option.textEn}</span>
                  </div>
                  {option.textSi !== option.textEn && (
                    <div className="text-xs text-slate-400 pl-8 font-sinhala">
                      {option.textSi}
                    </div>
                  )}
                </div>

                {isSubmitted && option.id === currentQ.correctId && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                )}
                {isSubmitted && isSelected && option.id !== currentQ.correctId && (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation & Action Bar */}
        <div className="pt-2 space-y-4">
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                userAnswers[currentQ.id]?.isCorrect
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-red-950/40 border-red-500/40 text-red-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {userAnswers[currentQ.id]?.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Correct Answer! (නිවැරදි පිළිතුරයි)</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>Incorrect Option (වැරදි පිළිතුරයි)</span>
                  </>
                )}
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                <b>Explanation:</b> {currentQ.explanationEn}
              </p>
              <p className="text-amber-200/90 leading-relaxed text-xs font-sinhala">
                <b>විවරණය:</b> {currentQ.explanationSi}
              </p>
            </motion.div>
          )}

          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-bold text-xs transition-all cursor-pointer"
            >
              Previous Boss
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOptionId}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Answer</span>
                <ShieldCheck className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isLastQuestion ? 'Complete Boss Challenge' : 'Next Boss Challenge'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      <AnimatePresence>
        {showCompletionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-orange-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-orange-500/40">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {totalCorrect >= 5 ? 'Master Web Artisan!' : 'Challenge Completed!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  You scored <b className="text-orange-400 font-mono text-base">{totalCorrect} / {BOSS_QUESTIONS.length}</b> ({scorePercentage}%) on authentic past paper challenges.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 text-left space-y-1">
                <div className="font-bold text-orange-300">Curriculum Mastery Breakdown:</div>
                <div>• Basic HTML Skeleton & Document Anatomy: Mastered</div>
                <div>• Text Formatting & Typography Hierarchy: Mastered</div>
                <div>• Lists, Tables & Spanning Attributes: Mastered</div>
                <div>• Media, Hyperlinks & Form Inputs: Mastered</div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleResetArcade}
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all cursor-pointer"
                >
                  Retry Arcade
                </button>
                <button
                  onClick={() => {
                    sound.playVictory();
                    setShowCompletionModal(false);
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
                >
                  Keep Exploring
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
