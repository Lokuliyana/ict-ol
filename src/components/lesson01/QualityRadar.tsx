'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ShieldAlert, 
  Gauge, 
  Sliders, 
  Info, 
  ArrowRight,
  RefreshCw,
  HeartPulse,
  Train,
  CloudSun,
  Users,
  DollarSign
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface Scenario {
  id: string;
  title: string;
  category: 'accuracy' | 'relevancy' | 'timeliness' | 'completeness' | 'cost';
  flawedAttribute: string;
  icon: React.ElementType;
  story: string;
  sinhalaStory: string;
  question: string;
  options: { id: string; label: string; isCorrect: boolean; explanation: string }[];
  impactWarning: string;
  radarScores: {
    accuracy: number;
    timeliness: number;
    relevancy: number;
    completeness: number;
    cost: number;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'sc1',
    title: "Doctor's Patient Chart",
    category: 'accuracy',
    flawedAttribute: 'Accuracy (නිවැරදිබව)',
    icon: HeartPulse,
    story: "A hospital digital chart records a critical penicillin allergy dosage as 250mg instead of 25mg due to a typing typo.",
    sinhalaStory: "රෝහල් පද්ධතියක රෝගියෙකුගේ ඖෂධ මාත්‍රාව 25mg වෙනුවට යතුරු ලියන දෝෂයකින් 250mg ලෙස සටහන්ව ඇත.",
    question: "Which primary characteristic of quality information was violated here?",
    options: [
      { id: 'a', label: 'Accuracy (නිවැරදිබව)', isCorrect: true, explanation: 'Fatal data entry error. Inaccurate medical information directly endangers human life.' },
      { id: 'b', label: 'Timeliness (කාලීනබව)', isCorrect: false, explanation: 'The data was delivered on time, but contains factual numeric errors.' },
      { id: 'c', label: 'Relevancy (අදාළබව)', isCorrect: false, explanation: 'Dosage is relevant to the patient, but the value itself is incorrect.' },
      { id: 'd', label: 'Cost-Effectiveness (පිරිවැය ඵලදායීබව)', isCorrect: false, explanation: 'Cost is not the primary flaw here.' },
    ],
    impactWarning: "🚨 High Inaccuracy Hazard: Incorrect dosage record endangers patient life!",
    radarScores: { accuracy: 15, timeliness: 95, relevancy: 90, completeness: 85, cost: 90 },
  },
  {
    id: 'sc2',
    title: 'Kandy Day Trip Planner',
    category: 'relevancy',
    flawedAttribute: 'Relevancy (අදාළබව)',
    icon: CloudSun,
    story: "Students organizing a school trip to Kandy are provided with an ultra-accurate, up-to-the-minute weather forecast for Tokyo, Japan.",
    sinhalaStory: "මහනුවර චාරිකාවක් සැලසුම් කරන සිසුන්ට ජපානයේ ටෝකියෝ නගරයේ අද කාලගුණ අනාවැකිය ලබා දී ඇත.",
    question: "Why is this information useless for the excursion planners?",
    options: [
      { id: 'a', label: 'Lacks Timeliness', isCorrect: false, explanation: 'The Tokyo forecast is live and current.' },
      { id: 'b', label: 'Lacks Relevancy (අදාළ නොවේ)', isCorrect: true, explanation: 'Even if 100% accurate, Tokyo weather has zero relevance to a trip taking place in Kandy, Sri Lanka.' },
      { id: 'c', label: 'Lacks Completeness', isCorrect: false, explanation: 'The Tokyo report is fully detailed.' },
      { id: 'd', label: 'Lacks Cost-Effectiveness', isCorrect: false, explanation: 'Cost is not the core reason for invalidity.' },
    ],
    impactWarning: "⚠️ Zero Decision Value: Irrelevant geographical data cannot assist local decision making.",
    radarScores: { accuracy: 95, timeliness: 90, relevancy: 10, completeness: 90, cost: 85 },
  },
  {
    id: 'sc3',
    title: 'Railway Station Notice Board',
    category: 'timeliness',
    flawedAttribute: 'Timeliness (කාලීනබව)',
    icon: Train,
    story: "A train commuter app displays yesterday's train departure schedule on today's live digital display at Colombo Fort station.",
    sinhalaStory: "කොළඹ කොටුව දුම්රිය ස්ථානයේ අද දින ධාවනය සඳහා ප්‍රදර්ශනය කර ඇත්තේ ඊයේ දිනයේ දුම්රිය කාලසටහනයි.",
    question: "Which quality hallmark failed in this passenger alert?",
    options: [
      { id: 'a', label: 'Timeliness (කාලීනබව)', isCorrect: true, explanation: 'Information must be delivered at the right time. Outdated schedules cause missed trains.' },
      { id: 'b', label: 'Cost-Effectiveness', isCorrect: false, explanation: 'Cost is irrelevant to the delay.' },
      { id: 'c', label: 'Relevancy', isCorrect: false, explanation: 'Train departures are relevant, but obsolete.' },
      { id: 'd', label: 'Completeness', isCorrect: false, explanation: 'The list is complete for yesterday, but obsolete for today.' },
    ],
    impactWarning: "⏰ Obsolete Data Alert: Delayed information results in passengers missing crucial trains.",
    radarScores: { accuracy: 80, timeliness: 15, relevancy: 85, completeness: 85, cost: 90 },
  },
  {
    id: 'sc4',
    title: 'National Wealth Survey',
    category: 'completeness',
    flawedAttribute: 'Completeness (සම්පූර්ණබව)',
    icon: Users,
    story: "A national research agency samples only 3 wealthy urban citizens to calculate Sri Lanka's entire national per-capita average income.",
    sinhalaStory: "මුළු රටේම ඒක පුද්ගල ආදායම ගණනය කිරීම සඳහා නාගරික ධනවත් පුද්ගලයන් 3 දෙනෙකුගේ පමණක් දත්ත ලබා ගෙන ඇත.",
    question: "What makes this economic report defective?",
    options: [
      { id: 'a', label: 'Incompleteness (අසම්පූර්ණබව)', isCorrect: true, explanation: 'A sample of 3 individuals lacks completeness to represent 22 million citizens accurately.' },
      { id: 'b', label: 'Inaccuracy in arithmetic', isCorrect: false, explanation: 'The math of the 3 numbers is correct, but the dataset is vastly incomplete.' },
      { id: 'c', label: 'Lack of Timeliness', isCorrect: false, explanation: 'The survey is recent.' },
      { id: 'd', label: 'Over-expensive', isCorrect: false, explanation: 'Survey was cheap, but severely incomplete.' },
    ],
    impactWarning: "📉 Skewed Representation: Incomplete data leads to false economic conclusions and flawed policy.",
    radarScores: { accuracy: 40, timeliness: 90, relevancy: 85, completeness: 10, cost: 95 },
  },
  {
    id: 'sc5',
    title: 'The Profit Paradox',
    category: 'cost',
    flawedAttribute: 'Cost-Effectiveness (පිරිවැය ඵලදායීබව)',
    icon: DollarSign,
    story: "A small grocery store spends Rs. 500,000 on an enterprise cloud AI market analysis tool to make a business decision that generated only Rs. 10,000 in net profit.",
    sinhalaStory: "කුඩා වෙළඳසැලක් රුපියල් 10,000 ක ලාභයක් ලබන තීරණයක් ගැනීමට රුපියල් 500,000 ක් වියදම් කර පර්යේෂණයක් සිදු කරයි.",
    question: "Which key economic information law was violated?",
    options: [
      { id: 'a', label: 'Cost-Effectiveness (පිරිවැය ඵලදායීබව)', isCorrect: true, explanation: 'The financial benefit gained (Rs. 10k) is far less than the cost of acquiring the information (Rs. 500k).' },
      { id: 'b', label: 'Accuracy', isCorrect: false, explanation: 'The AI report was accurate, but economically disastrous.' },
      { id: 'c', label: 'Relevancy', isCorrect: false, explanation: 'The market analytics were relevant.' },
      { id: 'd', label: 'Timeliness', isCorrect: false, explanation: 'The report was delivered swiftly.' },
    ],
    impactWarning: "💸 Severe Financial Loss: The cost to acquire information must never exceed its tangible gain!",
    radarScores: { accuracy: 95, timeliness: 90, relevancy: 90, completeness: 90, cost: 10 },
  },
];

export function QualityRadar() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [mode, setMode] = useState<'sabotage' | 'sandbox'>('sabotage');

  // Custom sandbox scores
  const [customScores, setCustomScores] = useState({
    accuracy: 90,
    timeliness: 85,
    relevancy: 95,
    completeness: 80,
    cost: 75,
  });

  const scenario = SCENARIOS[activeScenarioIdx];
  const activeScores = mode === 'sabotage' ? scenario.radarScores : customScores;

  // Calculate Overall Quality Index (0-100)
  const averageScore = Math.round(
    (activeScores.accuracy +
      activeScores.timeliness +
      activeScores.relevancy +
      activeScores.completeness +
      activeScores.cost) /
      5
  );

  const handleOptionSelect = (optId: string) => {
    sound.playClick();
    setSelectedOptionId(optId);
  };

  const handleVerify = () => {
    if (!selectedOptionId) return;
    const selected = scenario.options.find((o) => o.id === selectedOptionId);
    if (selected?.isCorrect) {
      sound.playSuccessDing();
    } else {
      sound.playBuzzer();
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextScenario = () => {
    sound.playClick();
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setActiveScenarioIdx((prev) => (prev + 1) % SCENARIOS.length);
  };

  // 5-Axis Radar Polygon Math (Center at 150, 150 with radius 110)
  const cx = 160;
  const cy = 160;
  const maxR = 110;

  // 5 axes: top (Accuracy), top-right (Timeliness), bottom-right (Relevancy), bottom-left (Completeness), top-left (Cost-Effectiveness)
  const axes = [
    { key: 'accuracy', label: 'Accuracy', sinhala: 'නිවැරදිබව', angle: -Math.PI / 2 },
    { key: 'timeliness', label: 'Timeliness', sinhala: 'කාලීනබව', angle: -Math.PI / 2 + (2 * Math.PI) / 5 },
    { key: 'relevancy', label: 'Relevancy', sinhala: 'අදාළබව', angle: -Math.PI / 2 + (4 * Math.PI) / 5 },
    { key: 'completeness', label: 'Completeness', sinhala: 'සම්පූර්ණබව', angle: -Math.PI / 2 + (6 * Math.PI) / 5 },
    { key: 'cost', label: 'Cost-Effect', sinhala: 'පිරිවැය', angle: -Math.PI / 2 + (8 * Math.PI) / 5 },
  ];

  const getCoordinates = (value: number, angle: number) => {
    const r = (value / 100) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y };
  };

  const radarPoints = axes
    .map((axis) => {
      const val = activeScores[axis.key as keyof typeof activeScores];
      const { x, y } = getCoordinates(val, axis.angle);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="space-y-6">
      {/* Top Mode Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Radar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 2: The Quality Radar
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono">
                5 Quality Hallmarks
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ගුණාත්මක තොරතුරක මූලික ලක්ෂණ 5 සහ එහි අත්‍යවශ්‍යතාවය
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setMode('sabotage');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              mode === 'sabotage'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🎯 Spot the Sabotage (Challenges)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMode('sandbox');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              mode === 'sandbox'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🎛️ Interactive Sliders (Sandbox)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* LEFT: DYNAMIC 5-AXIS RADAR CHART + NEEDLE */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          {/* Top Dial Info */}
          <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono uppercase text-cyan-300">Information Quality Index</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold ${
                  averageScore >= 75
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : averageScore >= 50
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse'
                }`}
              >
                {averageScore}% - {averageScore >= 75 ? 'Reliable' : averageScore >= 50 ? 'Compromised' : 'Critical Failure'}
              </span>
            </div>
          </div>

          {/* Dynamic SVG Radar Graph */}
          <div className="flex items-center justify-center my-4 relative">
            <svg width="320" height="320" viewBox="0 0 320 320" className="overflow-visible">
              {/* Concentric Reference Webs */}
              {[0.25, 0.5, 0.75, 1].map((scale, i) => {
                const ringPoints = axes
                  .map((axis) => {
                    const r = scale * maxR;
                    const x = cx + r * Math.cos(axis.angle);
                    const y = cy + r * Math.sin(axis.angle);
                    return `${x},${y}`;
                  })
                  .join(' ');
                return (
                  <polygon
                    key={i}
                    points={ringPoints}
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1"
                    strokeDasharray={scale === 1 ? 'none' : '3 3'}
                  />
                );
              })}

              {/* Axis Spoke Lines */}
              {axes.map((axis, i) => {
                const { x, y } = getCoordinates(100, axis.angle);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Data Polygon */}
              <motion.polygon
                points={radarPoints}
                fill={averageScore >= 70 ? 'rgba(79, 70, 229, 0.35)' : 'rgba(239, 68, 68, 0.35)'}
                stroke={averageScore >= 70 ? '#818cf8' : '#ef4444'}
                strokeWidth="2.5"
                initial={false}
                animate={{ points: radarPoints }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />

              {/* Data Points on vertices */}
              {axes.map((axis, i) => {
                const val = activeScores[axis.key as keyof typeof activeScores];
                const { x, y } = getCoordinates(val, axis.angle);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={val < 30 ? 6 : 4.5}
                    className={val < 30 ? 'fill-red-400 stroke-red-200 animate-ping' : 'fill-cyan-400 stroke-cyan-200'}
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Axis Labels */}
              {axes.map((axis, i) => {
                const { x, y } = getCoordinates(125, axis.angle);
                const val = activeScores[axis.key as keyof typeof activeScores];
                return (
                  <text
                    key={i}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`text-[10px] font-mono font-bold ${
                      val < 30 ? 'fill-red-400 font-black' : 'fill-slate-300'
                    }`}
                  >
                    {axis.label} ({val}%)
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Bottom Diagnostic Warning */}
          <div
            className={`p-3.5 rounded-2xl border text-xs flex items-center gap-2.5 ${
              averageScore < 75
                ? 'bg-red-950/40 border-red-500/40 text-red-200'
                : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>
              {mode === 'sabotage'
                ? scenario.impactWarning
                : `System state: ${averageScore}% overall integrity. ${averageScore < 60 ? 'High risk of decision failure!' : 'Optimal for strategic decision making.'}`}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: SCENARIO CHALLENGE OR INTERACTIVE SLIDERS */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 space-y-4">
          {mode === 'sabotage' ? (
            /* SPOT THE SABOTAGE SCENARIOS */
            <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
              {/* Scenario Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <scenario.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Scenario {activeScenarioIdx + 1} of {SCENARIOS.length}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white">
                      {scenario.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Story Description */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {scenario.story}
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala leading-relaxed">
                  {scenario.sinhalaStory}
                </p>
              </div>

              {/* Question & Options */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {scenario.question}
                </div>

                <div className="space-y-2">
                  {scenario.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    const showFeedback = isAnswerSubmitted;

                    let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200';
                    if (isSelected) {
                      btnStyle = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200';
                    }
                    if (showFeedback) {
                      if (opt.isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                      } else if (isSelected && !opt.isCorrect) {
                        btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleOptionSelect(opt.id)}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                      >
                        <div>
                          <span>{opt.label}</span>
                          {showFeedback && opt.isCorrect && (
                            <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-normal mt-1">
                              {opt.explanation}
                            </p>
                          )}
                        </div>
                        {showFeedback && (
                          opt.isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          ) : null
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={!selectedOptionId}
                    onClick={handleVerify}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedOptionId
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Verify Diagnosis
                  </button>
                ) : (
                  <button
                    onClick={handleNextScenario}
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 ml-auto"
                  >
                    <span>Next Scenario</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* INTERACTIVE SLIDERS SANDBOX */
            <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-600" />
                  <span>Interactive 5-Axis Simulator</span>
                </h4>
                <button
                  onClick={() => {
                    sound.playClick();
                    setCustomScores({ accuracy: 90, timeliness: 85, relevancy: 95, completeness: 80, cost: 75 });
                  }}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                ස්ලයිඩර වෙනස් කරමින් රේඩාර් සටහන (Radar Chart) සහ තොරතුරේ සමස්ත විශ්වසනීයත්වයට සිදුවන බලපෑම නිරීක්ෂණය කරන්න:
              </p>

              {/* 5 Sliders */}
              <div className="space-y-3.5">
                {[
                  { key: 'accuracy', label: '1. Accuracy (නිවැරදිබව)', desc: 'Freedom from errors & numerical mistakes' },
                  { key: 'timeliness', label: '2. Timeliness (කාලීනබව)', desc: 'Delivered before decisions become obsolete' },
                  { key: 'relevancy', label: '3. Relevancy (අදාළබව)', desc: 'Directly useful for the specific problem context' },
                  { key: 'completeness', label: '4. Completeness (සම්පූර්ණබව)', desc: 'Contains all mandatory fields without missing data' },
                  { key: 'cost', label: '5. Cost-Effectiveness (පිරිවැය ඵලදායීබව)', desc: 'Value gained must exceed the production cost' },
                ].map((item) => {
                  const val = customScores[item.key as keyof typeof customScores];
                  return (
                    <div key={item.key} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-800 dark:text-slate-200">{item.label}</span>
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{val}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={val}
                        onChange={(e) => {
                          const newVal = parseInt(e.target.value, 10);
                          setCustomScores((prev) => ({ ...prev, [item.key]: newVal }));
                        }}
                        className="w-full accent-indigo-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                      />
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
