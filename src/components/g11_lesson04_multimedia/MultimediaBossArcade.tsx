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
  FileQuestion
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
    questionNumber: 'MCQ 31',
    topic: 'Image Resolution Dimensions',
    questionEn: 'What is the resolution of a digital graphic having a width of 250 pixels and a height of 100 pixels?',
    questionSi: 'පළල පික්සල 250ක් සහ උස පික්සල 100ක් වන ඩිජිටල් රූපයක විභේදනය (Resolution) වන්නේ කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: '250 × 100',
        textSi: '250 × 100'
      },
      {
        id: '2',
        textEn: '250 + 100',
        textSi: '250 + 100'
      },
      {
        id: '3',
        textEn: '250 ÷ 100',
        textSi: '250 ÷ 100'
      },
      {
        id: '4',
        textEn: '250 × 100 × 8',
        textSi: '250 × 100 × 8'
      }
    ],
    correctId: '1',
    explanationEn: 'Resolution is defined as the physical dimension of an image measured as Width × Height in pixels (250 × 100).',
    explanationSi: 'ඩිජිටල් රූපයක විභේදනය (Resolution) යනු එහි පළල සහ උස පික්සල ගණනින් දැක්වීමයි (පළල × උස = 250 × 100).'
  },
  {
    id: 'boss-2',
    year: '2024',
    paper: 'Paper I',
    questionNumber: 'MCQ 35',
    topic: 'Vector Graphics Scalability',
    questionEn: 'Which of the following statements is INCORRECT regarding raster and vector graphics?',
    questionSi: 'රැස්ටර් සහ වෙක්ටර් චිත්‍රක පිළිබඳව පහත සඳහන් ප්‍රකාශ අතරින් අසත්‍ය වන්නේ කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: 'When a vector image is enlarged, its quality degrades and pixelates.',
        textSi: 'වෙක්ටර් රූපයක් විශාලනය කළ විට එහි ගුණාත්මකභාවය පිරිහී පික්සල් කැඩී යයි.'
      },
      {
        id: '2',
        textEn: 'Raster graphics are formed by an array of colored pixels.',
        textSi: 'රැස්ටර් චිත්‍රක සෑදී ඇත්තේ වර්ණවත් පික්සල ජාලයකිනි.'
      },
      {
        id: '3',
        textEn: 'Vector graphics are generated using mathematical equations of lines and curves.',
        textSi: 'වෙක්ටර් චිත්‍රක රේඛා සහ වක්‍ර පිළිබඳ ගණිතමය සමීකරණ ආශ්‍රයෙන් ගොඩනගයි.'
      },
      {
        id: '4',
        textEn: 'Vector graphics are suitable for designing logos and typography.',
        textSi: 'ලාංඡන (Logos) සහ අකුරු මෝස්තර නිර්මාණය සඳහා වෙක්ටර් චිත්‍රක වඩාත් යෝග්‍ය වේ.'
      }
    ],
    correctId: '1',
    explanationEn: 'Option 1 is FALSE. Vector graphics use mathematical formulas and NEVER degrade or pixelate when scaled or enlarged!',
    explanationSi: '1 වන ප්‍රකාශය වැරදිය. වෙක්ටර් චිත්‍රක ගණිතමය සමීකරණ භාවිත කරන බැවින් කොතෙක් විශාල කළද ගුණාත්මකභාවය නොනැසේ.'
  },
  {
    id: 'boss-3',
    year: '2024',
    paper: 'Paper I',
    questionNumber: 'MCQ 37',
    topic: '4-Color Uncompressed Memory Math',
    questionEn: 'What is the approximate size in Bytes of an uncompressed image having 275 × 175 resolution and a maximum of 4 colors?',
    questionSi: 'විභේදනය 275 × 175 වන සහ උපරිම වශයෙන් වර්ණ 4ක් පමණක් අඩංගු සම්පීඩනය නොකළ රූපයක ගොනු ප්‍රමාණය බයිට් (Bytes) වලින් දැක්වෙන නිවැරදි සූත්‍රය කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: '(275 × 175 × 4) / 8 Bytes',
        textSi: '(275 × 175 × 4) / 8 Bytes'
      },
      {
        id: '2',
        textEn: '(275 × 175 × 8) / 4 Bytes',
        textSi: '(275 × 175 × 8) / 4 Bytes'
      },
      {
        id: '3',
        textEn: '(275 × 175 × 2) / 8 Bytes',
        textSi: '(275 × 175 × 2) / 8 Bytes'
      },
      {
        id: '4',
        textEn: '275 × 175 × 4 Bytes',
        textSi: '275 × 175 × 4 Bytes'
      }
    ],
    correctId: '3',
    explanationEn: '4 colors require log2(4) = 2 bits per pixel. Total bits = 275 × 175 × 2. Dividing by 8 gives (275 × 175 × 2) / 8 Bytes!',
    explanationSi: 'වර්ණ 4ක් සඳහා අවශ්‍ය වන්නේ පික්සලයකට බිටු 2කි (2^2 = 4). මුළු බිටු ගණන = 275 × 175 × 2. බයිට් බවට පත් කිරීමට 8න් බෙදිය යුතුය: (275 × 175 × 2) / 8 බයිට්.'
  },
  {
    id: 'boss-4',
    year: '2022',
    paper: 'Paper II',
    questionNumber: 'Question 05 (ii)',
    topic: 'Audacity Waveform Silent Gap Trimming',
    questionEn: 'In Audacity, an audio track contains unwanted silent pauses. Which tool and action should be used to eliminate the silent gap, and which button plays back the result?',
    questionSi: 'Audacity මෘදුකාංගයේ ඇති ශබ්ද පටයක අනවශ්‍ය නිහඬ විරාමයක් ඉවත් කර එය පරීක්ෂා කිරීමට භාවිත කරන මෙවලම, ක්‍රියාව සහ බොත්තම කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: 'Selection Tool (I-Beam) to highlight gap ➔ Delete/Cut ➔ Green Triangle (Play Button)',
        textSi: 'Selection Tool මගින් නිහඬ කොටස තේරීම ➔ Delete/Cut කිරීම ➔ කොළ පැහැති ත්‍රිකෝණ බොත්තම (Play)'
      },
      {
        id: '2',
        textEn: 'Zoom Tool ➔ Amplify Effect ➔ Red Circle (Record)',
        textSi: 'Zoom Tool ➔ Amplify ➔ රතු පැහැති රවුම් බොත්තම'
      },
      {
        id: '3',
        textEn: 'Time Shift Tool ➔ Silence Generator ➔ Square Button (Stop)',
        textSi: 'Time Shift Tool ➔ Silence ➔ සමචතුරස්‍ර බොත්තම'
      },
      {
        id: '4',
        textEn: 'Envelope Tool ➔ Pitch Shift ➔ Blue Pause Button',
        textSi: 'Envelope Tool ➔ Pitch Shift ➔ නිල් පැහැති Pause බොත්තම'
      }
    ],
    correctId: '1',
    explanationEn: 'Use the Selection Tool (I-Beam) to highlight the flat silent section, hit Delete or Cut (Scissors), then press the Green Play Button to test playback.',
    explanationSi: 'Selection Tool එකෙන් නිහඬ කොටස තෝරා Delete කර, කොළ පැහැති ධාවන බොත්තම (Play) එබීමෙන් පරීක්ෂා කළ හැක.'
  },
  {
    id: 'boss-5',
    year: '2023',
    paper: 'Paper II',
    questionNumber: 'Question 05 (iv)',
    topic: '2D Animation Keyframe Definition',
    questionEn: 'In 2D computer animation (e.g., Vectorian Giotto), what is the official definition of a "Key Frame" (මූලික රාමුව)?',
    questionSi: '2D පරිගණක සජීවීකරණයේදී (Vectorian Giotto) "මූලික රාමුවක්" (Key Frame) යන්නෙහි නිල විෂය නිර්දේශ අර්ථ දැක්වීම කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: 'Essential user-created frames defining starting and ending positions, sizes, or orientations of an animation sequence.',
        textSi: 'සජීවීකරණයක ආරම්භක හා අවසාන පිහිටුම්, ප්‍රමාණ හෝ දිශානති පරිශීලකයා විසින් අතින් සකසන ප්‍රධාන රාමු.'
      },
      {
        id: '2',
        textEn: 'Frames automatically generated by the computer software between two drawings.',
        textSi: 'චිත්‍ර දෙකක් අතර පරිගණකය මගින් ස්වයංක්‍රීයව ජනනය වන රාමු.'
      },
      {
        id: '3',
        textEn: 'An empty timeline frame that contains no drawings and creates a pause.',
        textSi: 'කිසිදු චිත්‍රයක් නොමැති හිස් කාලරාමුවක්.'
      },
      {
        id: '4',
        textEn: 'The background wallpaper layer behind all moving objects.',
        textSi: 'චලනය වන වස්තු පිටුපස ඇති පසුබිම් ස්ථරය.'
      }
    ],
    correctId: '1',
    explanationEn: 'Key Frames are crucial reference frames manually placed by the user to establish the key states of motion; intermediate frames are called Tween Frames.',
    explanationSi: 'මූලික රාමු (Key Frames) යනු පරිශීලකයා විසින් අතින් සකසන ආරම්භක හා අවසාන ප්‍රධාන රාමු වේ.'
  }
];

export function MultimediaBossArcade() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answeredMap, setAnsweredMap] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

  const currentQ = BOSS_QUESTIONS[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    sound.playClick(600);
    setSelectedOption(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctId;
    if (isCorrect) {
      sound.playSuccess();
      setScore((prev) => prev + 1);
    } else {
      sound.playError();
    }

    setIsAnswerSubmitted(true);
    setAnsweredMap((prev) => ({
      ...prev,
      [currentQ.id]: { selected: selectedOption, isCorrect }
    }));
  };

  const handleNext = () => {
    sound.playClick(500);
    if (currentIdx < BOSS_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      sound.playVictory();
      setIsGameComplete(true);
    }
  };

  const handleRestart = () => {
    sound.playClick(500);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setAnsweredMap({});
    setIsGameComplete(false);
  };

  return (
    <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
      {/* Header & Scoreboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              MULTIMEDIA BOSS FIGHT (2020 – 2025)
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Unit 04 Mastery Challenge
            </span>
          </div>
          <h3 className="text-xl font-black text-white mt-1">
            G.C.E. O/L Examination Simulator
          </h3>
        </div>

        {/* Live Score Meter */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-2xl border border-slate-800 self-start sm:self-auto">
          <Trophy className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-[10px] font-mono text-slate-400">SCORE:</div>
            <div className="text-sm font-mono font-bold text-amber-300">
              {score} / {BOSS_QUESTIONS.length} Solved
            </div>
          </div>
        </div>
      </div>

      {!isGameComplete ? (
        <div className="space-y-6">
          {/* Question Breadcrumb & Year Tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-violet-950 text-violet-300 rounded border border-violet-500/30 font-bold">
                {currentQ.year} {currentQ.paper}
              </span>
              <span className="text-slate-400 font-semibold">{currentQ.questionNumber}</span>
            </div>
            <span className="text-slate-500">
              Question {currentIdx + 1} of {BOSS_QUESTIONS.length}
            </span>
          </div>

          {/* Question Card */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
              Topic: {currentQ.topic}
            </div>

            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.questionEn}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {currentQ.questionSi}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                const isCorrect = opt.id === currentQ.correctId;
                let optStyles = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optStyles = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    optStyles = 'bg-rose-950/80 border-rose-400 text-rose-200 ring-2 ring-rose-400';
                  } else {
                    optStyles = 'bg-slate-950/50 border-slate-900 text-slate-600 opacity-60';
                  }
                } else if (isSelected) {
                  optStyles = 'bg-violet-950 border-violet-400 text-violet-200 ring-2 ring-violet-400';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${optStyles}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {opt.id}
                    </span>
                    <div className="text-xs sm:text-sm space-y-0.5">
                      <div className="font-semibold text-white">{opt.textEn}</div>
                      <div className="text-slate-400 text-xs font-sans">{opt.textSi}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex items-center justify-between gap-4">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption}
                  className={`w-full py-3 rounded-xl font-bold font-mono text-xs transition-all shadow-md ${
                    selectedOption
                      ? 'bg-violet-500 hover:bg-violet-400 text-slate-950 shadow-violet-500/30'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  CONFIRM ANSWER
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-slate-950 rounded-xl font-bold font-mono text-xs transition-all shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2"
                >
                  <span>{currentIdx < BOSS_QUESTIONS.length - 1 ? 'NEXT QUESTION' : 'VIEW FINAL RESULTS'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Step-by-Step Explanation Banner */}
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Examiner's Marking Scheme & Step-by-Step Breakdown:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-mono">
                  {currentQ.explanationEn}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {currentQ.explanationSi}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        /* Final Victory Screen */
        <div className="text-center p-8 bg-slate-900/80 rounded-2xl border border-violet-500/30 space-y-6">
          <div className="relative inline-block">
            <Award className="w-20 h-20 text-amber-400 mx-auto animate-bounce" />
            <Sparkles className="w-6 h-6 text-violet-300 absolute top-0 right-0 animate-spin" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {score === BOSS_QUESTIONS.length
                ? '🏆 MULTIMEDIA MASTER! 100% SCORE!'
                : score >= 4
                ? '🎉 OUTSTANDING EXAM READINESS!'
                : '📚 GOOD ATTEMPT! REVIEW & RETRY!'}
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              You correctly solved <strong className="text-violet-300">{score}</strong> out of <strong className="text-white">{BOSS_QUESTIONS.length}</strong> G.C.E. O/L past paper questions.
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-violet-500 hover:bg-violet-400 text-slate-950 rounded-xl font-bold font-mono text-xs transition-all shadow-lg shadow-violet-500/30 inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESTART BOSS BATTLE</span>
          </button>
        </div>
      )}
    </div>
  );
}
