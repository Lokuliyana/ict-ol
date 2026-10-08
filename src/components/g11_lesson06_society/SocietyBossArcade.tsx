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
  Scale
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
    questionNumber: 'MCQ 38',
    topic: 'Green Computing Practice',
    questionEn: 'Which of the following is an example of a green computing practice?',
    questionSi: 'පහත සඳහන් දෑ අතුරින් හරිත පරිගණක (Green Computing) පුරුද්දක් වන්නේ කුමක්ද?',
    options: [
      { id: '1', textEn: 'Enabling sleep mode on computers when not in use', textSi: 'භාවිතයේ නොමැති විට පරිගණක නිද්‍රා මාදිලියට (Sleep Mode) පත් කිරීම' },
      { id: '2', textEn: 'Printing all emails and attachments on paper', textSi: 'සියලු විද්‍යුත් තැපැල් සහ ඇමුණුම් කඩදාසි මත මුද්‍රණය කිරීම' },
      { id: '3', textEn: 'Leaving computers running overnight at full power', textSi: 'රාත්‍රී කාලය පුරා පරිගණක ක්‍රියාත්මක කර තැබීම' },
      { id: '4', textEn: 'Disposing of old CRT monitors directly into household garbage', textSi: 'පැරණි CRT මොනිටර සාමාන්‍ය ගෘහස්ථ කසළ බඳුනට දැමීම' }
    ],
    correctId: '1',
    explanationEn: 'Enabling sleep mode or shutting down idle computers drastically saves electricity, reducing carbon emissions from thermal power plants.',
    explanationSi: 'පරිගණක භාවිතයේ නොමැති විට Sleep Mode දැමීමෙන් විදුලි බලය ඉතිරි වන අතර කාබන් විමෝචනය අඩු වේ.'
  },
  {
    id: 'boss-2',
    year: '2020',
    paper: 'Paper II',
    questionNumber: 'Question 06(a)',
    topic: 'Ergonomic Health Issues & Remedies',
    questionEn: 'Which of the following correctly matches an ergonomic health issue caused by prolonged computer use with its appropriate preventive remedy?',
    questionSi: 'දිගු වේලාවක් පරිගණක භාවිතය නිසා ඇතිවන සෞඛ්‍ය ගැටලුවක් සහ එයට සුදුසු නිවාරණ පිළියම නිවැරදිව ගළපා ඇති යුගලය කුමක්ද?',
    options: [
      { 
        id: '1', 
        textEn: 'CVS (Computer Vision Syndrome) ↔ Practice 20-20-20 rule and maintain 45–60 cm screen distance', 
        textSi: 'CVS (පරිගණක දෘෂ්ටි සංලක්ෂණය) ↔ 20-20-20 නීතිය පිළිපැදීම සහ 45–60 cm දුරක් තබා ගැනීම' 
      },
      { 
        id: '2', 
        textEn: 'RSI (Repetitive Strain Injury) ↔ Type continuously with wrists bent sharply upwards against table edge', 
        textSi: 'RSI (පුනරාවර්තී ආතති තුවාල) ↔ මැණික් කටුව තදින් නවාගෙන අඛණ්ඩව ටයිප් කිරීම' 
      },
      { 
        id: '3', 
        textEn: 'CTS (Carpal Tunnel Syndrome) ↔ Stare at bright flashing screens without blinking for 2 hours', 
        textSi: 'CTS ↔ පැය දෙකක් නොනවත්වා තිරය දෙස බලා සිටීම' 
      },
      { 
        id: '4', 
        textEn: 'Neck Strain ↔ Place monitor on the floor beneath knee level', 
        textSi: 'බෙල්ලේ වේදනාව ↔ මොනිටරය බිම තැබීම' 
      }
    ],
    correctId: '1',
    explanationEn: 'CVS is prevented by following the 20-20-20 rule (looking 20 feet away for 20 seconds every 20 minutes) and keeping the screen at 45–60 cm distance.',
    explanationSi: 'CVS වැළැක්වීමට මිනිත්තු 20කට වරක් තත්පර 20ක් අඩි 20ක් දුර බැලීම (20-20-20 නීතිය) හා සෙන්ටිමීටර 45-60 දුරින් තිරය තැබීම සුදුසුය.'
  },
  {
    id: 'boss-3',
    year: '2021',
    paper: 'Paper I',
    questionNumber: 'MCQ 40',
    topic: 'Toxic Heavy Metal in CRT Monitors',
    questionEn: 'Which toxic heavy metal found in old CRT monitors and soldering materials affects the human central nervous system and brain development in children?',
    questionSi: 'පැරණි CRT මොනිටර සහ පෑස්සුම් ද්‍රව්‍යවල අඩංගු වන, මිනිස් මධ්‍ය ස්නායු පද්ධතියට හා මොළයේ වර්ධනයට හානි කරන විෂ සහිත බැර ලෝහය කුමක්ද?',
    options: [
      { id: '1', textEn: 'Lead (Pb / ඊයම්)', textSi: 'Lead (Pb / ඊයම්)' },
      { id: '2', textEn: 'Iron (Fe / යකඩ)', textSi: 'Iron (Fe / යකඩ)' },
      { id: '3', textEn: 'Copper (Cu / තඹ)', textSi: 'Copper (Cu / තඹ)' },
      { id: '4', textEn: 'Silicon (Si / සිලිකන්)', textSi: 'Silicon (Si / සිලිකන්)' }
    ],
    correctId: '1',
    explanationEn: 'Lead (Pb), heavily used in CRT glass funnels and solder, is a neurotoxin damaging the central nervous system, brain development, and kidneys.',
    explanationSi: 'CRT මොනිටර සහ පෑස්සුම් ඊයම්වල (Lead - Pb) අඩංගු වන අතර එය මධ්‍ය ස්නායු පද්ධතියට හා මොළයේ වර්ධනයට හානි කරයි.'
  },
  {
    id: 'boss-4',
    year: '2022',
    paper: 'Paper II',
    questionNumber: 'Question 06(b)',
    topic: 'The 3R Concept with Practical Examples',
    questionEn: 'In the 3R concept for managing electronic waste (e-waste), what do Reduce, Reuse, and Recycle represent respectively?',
    questionSi: 'ඊ-අපද්‍රව්‍ය කළමනාකරණයේ 3R සංකල්පයට අදාළව Reduce, Reuse සහ Recycle සඳහා නිවැරදි උදාහරණ අනුපිළිවෙල කුමක්ද?',
    options: [
      { 
        id: '1', 
        textEn: 'Reduce: Upgrading RAM/SSD instead of buying new PC | Reuse: Donating functional PCs to schools | Recycle: Extracting gold/copper safely from dead circuit boards', 
        textSi: 'Reduce: අලුත් පරිගණක මිලදී නොගෙන කොටස් උත්ශ්‍රේණි කිරීම | Reuse: ක්‍රියාකාරී පරිගණක පාසල්වලට පරිත්‍යාග කිරීම | Recycle: අක්‍රිය පරිපථවලින් රත්‍රන්/තඹ වෙන් කර ගැනීම' 
      },
      { 
        id: '2', 
        textEn: 'Reduce: Dumping computers into rivers | Reuse: Burning plastics | Recycle: Purchasing 5 new laptops every year', 
        textSi: 'Reduce: පරිගණක ගංගාවලට දැමීම | Reuse: ප්ලාස්ටික් පිළිස්සීම | Recycle: වාර්ෂිකව ලැප්ටොප් 5ක් මිලදී ගැනීම' 
      },
      { 
        id: '3', 
        textEn: 'Reduce: Leaving PCs on 24/7 | Reuse: Crushing motherboards | Recycle: Burying batteries underground', 
        textSi: 'Reduce: පැය 24ම පරිගණක දල්වා තැබීම | Reuse: මවුපුවරු පොඩි කිරීම | Recycle: බැටරි පස් යට වැළලීම' 
      },
      { 
        id: '4', 
        textEn: 'Reduce: Printing more pages | Reuse: Deleting files | Recycle: Buying proprietary software', 
        textSi: 'Reduce: වැඩිපුර මුද්‍රණය කිරීම | Reuse: ගොනු මකා දැමීම | Recycle: මෘදුකාංග මිලදී ගැනීම' 
      }
    ],
    correctId: '1',
    explanationEn: 'Reduce minimizes e-purchases by upgrading, Reuse passes functioning devices to charities/schools, and Recycle extracts precious metals at certified facilities.',
    explanationSi: 'Reduce මඟින් අනවශ්‍ය මිලදී ගැනීම් අඩු කරයි, Reuse මඟින් භාවිත කළ හැකි උපකරණ පරිත්‍යාග කරයි, Recycle මඟින් වටිනා ලෝහ පරිසර හිතකාමීව වෙන් කර ගනී.'
  },
  {
    id: 'boss-5',
    year: '2024',
    paper: 'Paper I',
    questionNumber: 'MCQ 40',
    topic: 'FOSS Software License Classification',
    questionEn: 'Software that is distributed free of charge with its original human-readable source code accessible for anyone to view, modify, and redistribute is known as:',
    questionSi: 'ඕනෑම අයෙකුට බැලීමට, වෙනස් කිරීමට සහ නැවත බෙදාහැරීමට හැකි වන පරිදි මූල කේතය (Source code) සහිතව නොමිලේ ලබා දෙන මෘදුකාංග හඳුන්වන්නේ:',
    options: [
      { id: '1', textEn: 'FOSS (Free and Open Source Software)', textSi: 'FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග)' },
      { id: '2', textEn: 'Proprietary Software', textSi: 'හිමිකාරී මෘදුකාංග (Proprietary)' },
      { id: '3', textEn: 'Shareware', textSi: 'කොටස් මෘදුකාංග (Shareware)' },
      { id: '4', textEn: 'Commercial Software', textSi: 'වාණිජ මෘදුකාංග (Commercial)' }
    ],
    correctId: '1',
    explanationEn: 'FOSS (Free and Open Source Software) grants full freedom to run, inspect source code, modify code, and redistribute copies freely (e.g. Linux, Python).',
    explanationSi: 'FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග) මඟින් මූල කේතය ලබා දෙන අතර නොමිලේ භාවිතය, වෙනස් කිරීම හා බෙදාහැරීම සඳහා පූර්ණ නිදහස ලබා දෙයි.'
  },
  {
    id: 'boss-6',
    year: '2025',
    paper: 'Paper II',
    questionNumber: 'Question 06(b)',
    topic: 'Sri Lanka National Cyber Security Agency',
    questionEn: 'What is the primary national organization in Sri Lanka responsible for coordinating responses to cyber security incidents, publishing threat alerts, and raising public awareness?',
    questionSi: 'ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂණ සිදුවීම්වලට ප්‍රතිචාර දැක්වීම සහ මහජන දැනුවත් කිරීම සඳහා වගකිව යුතු ප්‍රධාන ජාතික ආයතනය කුමක්ද?',
    options: [
      { id: '1', textEn: 'Sri Lanka CERT|CC', textSi: 'ශ්‍රී ලංකා CERT|CC' },
      { id: '2', textEn: 'Central Bank of Sri Lanka', textSi: 'ශ්‍රී ලංකා මහ බැංකුව' },
      { id: '3', textEn: 'Department of Examinations', textSi: 'ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව' },
      { id: '4', textEn: 'Road Development Authority', textSi: 'මාර්ග සංවර්ධන අධිකාරිය' }
    ],
    correctId: '1',
    explanationEn: 'Sri Lanka CERT|CC (Computer Emergency Readiness Team | Coordination Center) is the national agency established to coordinate cyber security incident responses and national cyber defense.',
    explanationSi: 'ශ්‍රී ලංකා CERT|CC (Computer Emergency Readiness Team | Coordination Center) යනු සයිබර් ආරක්ෂණ සිදුවීම් කළමනාකරණය කරන ප්‍රධාන ජාතික ආයතනයයි.'
  }
];

export function SocietyBossArcade() {
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
      {/* Top HUD */}
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <Swords className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white">O/L ICT & Society Boss Arcade</h3>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/40">
                  2020 – 2025 Past Papers
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Conquer authentic G.C.E. O/L Society, Ethics, Ergonomics & E-Waste challenges with live grading.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 text-center">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Accuracy</div>
              <div className="text-base font-black text-emerald-400 font-mono">
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
                    ? 'border-emerald-400 bg-emerald-500/20 shadow-md shadow-emerald-500/20 text-white font-bold'
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
            <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
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

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let optionStyles = 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-emerald-500/40 hover:bg-slate-800/40';

            if (isSubmitted) {
              if (option.id === currentQ.correctId) {
                optionStyles = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-lg shadow-emerald-500/20';
              } else if (isSelected) {
                optionStyles = 'border-red-500 bg-red-500/20 text-red-200 shadow-lg shadow-red-500/20';
              } else {
                optionStyles = 'border-slate-800/40 bg-slate-950/30 text-slate-600 opacity-60';
              }
            } else if (isSelected) {
              optionStyles = 'border-emerald-400 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/25';
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
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Answer</span>
                <ShieldCheck className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-600/30 transition-all flex items-center gap-2 cursor-pointer"
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
              className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-emerald-500/40">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {totalCorrect >= 5 ? 'Master Cyber Citizen & Eco-Scholar!' : 'Challenge Completed!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  You scored <b className="text-emerald-400 font-mono text-base">{totalCorrect} / {BOSS_QUESTIONS.length}</b> ({scorePercentage}%) on authentic past paper challenges.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 text-left space-y-1">
                <div className="font-bold text-emerald-300">Curriculum Mastery Breakdown:</div>
                <div>• Software Licenses & IP Ethics: Mastered</div>
                <div>• Cyber Threats & Sri Lanka CERT|CC: Mastered</div>
                <div>• Ergonomics, Posture, RSI, CVS & CTS: Mastered</div>
                <div>• E-Waste Heavy Metals, 3R & Green Computing: Mastered</div>
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
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
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
