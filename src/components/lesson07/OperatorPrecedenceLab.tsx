'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Layers, 
  RotateCcw,
  Sliders,
  Play
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface PrecedenceScenario {
  id: string;
  title: string;
  expressionWithoutBrackets: string;
  expressionWithBrackets: string;
  stepsWithout: { step: number; desc: string; result: string }[];
  stepsWith: { step: number; desc: string; result: string }[];
  examRef: string;
  conceptSi: string;
}

const SCENARIOS: PrecedenceScenario[] = [
  {
    id: 's1',
    title: 'BODMAS & The Bracket Energy Shield (2020 O/L P1 Q21)',
    expressionWithoutBrackets: '= 10 + 20 / 5 * 2',
    expressionWithBrackets: '= (10 + 20) / 5 * 2',
    stepsWithout: [
      { step: 1, desc: 'Division runs first: 20 / 5 = 4', result: '= 10 + 4 * 2' },
      { step: 2, desc: 'Multiplication runs next: 4 * 2 = 8', result: '= 10 + 8' },
      { step: 3, desc: 'Addition runs last: 10 + 8 = 18', result: '18' }
    ],
    stepsWith: [
      { step: 1, desc: 'Parentheses ( ) evaluate FIRST: 10 + 20 = 30', result: '= 30 / 5 * 2' },
      { step: 2, desc: 'Division (Left to Right): 30 / 5 = 6', result: '= 6 * 2' },
      { step: 3, desc: 'Multiplication (Left to Right): 6 * 2 = 12', result: '12' }
    ],
    examRef: '2020 O/L Paper I - Q21',
    conceptSi: 'වරහන් මගින් ප්‍රමුඛතාවය වෙනස් කර පළමුව එකතු කිරීම සිදු කරයි.'
  },
  {
    id: 's2',
    title: 'The Power Tower (Exponentiation ^ Priority)',
    expressionWithoutBrackets: '= 20 / 4 + 2 ^ 3',
    expressionWithBrackets: '= 20 / (4 + 2) ^ 3',
    stepsWithout: [
      { step: 1, desc: 'Exponentiation (^) runs FIRST: 2 ^ 3 = 8', result: '= 20 / 4 + 8' },
      { step: 2, desc: 'Division runs next: 20 / 4 = 5', result: '= 5 + 8' },
      { step: 3, desc: 'Addition runs last: 5 + 8 = 13', result: '13' }
    ],
    stepsWith: [
      { step: 1, desc: 'Parentheses ( ) evaluate FIRST: 4 + 2 = 6', result: '= 20 / 6 ^ 3' },
      { step: 2, desc: 'Exponentiation next: 6 ^ 3 = 216', result: '= 20 / 216' },
      { step: 3, desc: 'Division runs last: 20 / 216 = 0.0925', result: '0.0925' }
    ],
    examRef: 'Power / Exponent Operator Rule',
    conceptSi: 'ඝාතක සංකේතය (^) ගුණ කිරීම හා බෙදීමට පෙර ක්‍රියාත්මක වේ.'
  },
  {
    id: 's3',
    title: 'Left-to-Right Equal Precedence Tie-Break',
    expressionWithoutBrackets: '= 24 / 4 * 2',
    expressionWithBrackets: '= 24 / (4 * 2)',
    stepsWithout: [
      { step: 1, desc: 'Division is on the left: 24 / 4 = 6', result: '= 6 * 2' },
      { step: 2, desc: 'Multiplication evaluated: 6 * 2 = 12', result: '12' }
    ],
    stepsWith: [
      { step: 1, desc: 'Parentheses force multiplication first: 4 * 2 = 8', result: '= 24 / 8' },
      { step: 2, desc: 'Division evaluated: 24 / 8 = 3', result: '3' }
    ],
    examRef: 'Equal Precedence Left-to-Right Rule',
    conceptSi: 'ගුණ කිරීම හා බෙදීම සමාන ප්‍රමුඛතාවක් සහිත බැවින් වමේ සිට දකුණට විසඳේ.'
  }
];

export function OperatorPrecedenceLab() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('s1');
  const [isShieldActive, setIsShieldActive] = useState<boolean>(false);
  const [currentStepAnim, setCurrentStepAnim] = useState<number>(0);
  const [customFormula, setCustomFormula] = useState<string>('15 + 5 * 2 ^ 2');
  const [customResult, setCustomResult] = useState<number | null>(35);

  const scenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];
  const activeSteps = isShieldActive ? scenario.stepsWith : scenario.stepsWithout;
  const currentExpression = isShieldActive ? scenario.expressionWithBrackets : scenario.expressionWithoutBrackets;

  const handleToggleShield = () => {
    sound.playSnap();
    setIsShieldActive(!isShieldActive);
    setCurrentStepAnim(0);
  };

  const handleSelectScenario = (id: string) => {
    sound.playClick(600);
    setSelectedScenarioId(id);
    setIsShieldActive(false);
    setCurrentStepAnim(0);
  };

  const handleStepForward = () => {
    if (currentStepAnim < activeSteps.length) {
      sound.playCrankTick();
      setCurrentStepAnim(prev => prev + 1);
      if (currentStepAnim + 1 === activeSteps.length) {
        sound.playSuccess();
      }
    }
  };

  const handleCalculateCustom = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      // Replace ^ with ** for JS evaluation
      const sanitized = customFormula.replace(/\^/g, '**').replace(/[^-()\d/*+.]/g, '');
      // eslint-disable-next-line no-eval
      const res = Function(`'use strict'; return (${sanitized})`)();
      setCustomResult(Number(res));
      sound.playSuccess();
    } catch {
      setCustomResult(null);
      sound.playError();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 02 • ගණිත කර්ම ප්‍රමුඛතාව
            </span>
            <span className="text-xs font-semibold text-slate-400">
              BODMAS / Operator Precedence Rules
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-400" />
            The Operator Precedence Arena (ගණිත කර්ම ප්‍රමුඛතා ශ්‍රේණිය)
          </h2>
          <p className="text-xs text-slate-300">
            Learn why <code>( )</code> takes highest priority, followed by exponentiation <code>^</code>, multiplication/division <code>* /</code>, and addition/subtraction <code>+ -</code>.
          </p>
        </div>

        {/* Hierarchy Badge */}
        <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-xs font-mono">
          <span className="text-emerald-400 font-bold">( )</span>
          <span className="text-slate-500">&gt;</span>
          <span className="text-cyan-400 font-bold">^</span>
          <span className="text-slate-500">&gt;</span>
          <span className="text-amber-400 font-bold">* /</span>
          <span className="text-slate-500">&gt;</span>
          <span className="text-rose-400 font-bold">+ -</span>
        </div>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => handleSelectScenario(s.id)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              selectedScenarioId === s.id
                ? 'bg-emerald-950/60 border-emerald-400 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white truncate">{s.title}</span>
              <span className="text-[10px] font-mono text-emerald-400">{s.examRef}</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">{s.expressionWithoutBrackets}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Precedence Engine Stage */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-5 shadow-2xl">
            {/* Expression Screen */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>FORMULA EVALUATION PIPELINE</span>
                <span className="text-emerald-400 font-bold">{isShieldActive ? 'BRACKET SHIELD ON ( )' : 'DEFAULT BODMAS'}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono text-xl md:text-2xl font-black text-white">
                <span className={isShieldActive ? 'text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/50' : 'text-slate-100'}>
                  {currentExpression}
                </span>
              </div>
            </div>

            {/* Stepped Cruncher Breakdown */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Step-by-Step Execution Sequence:</span>
                <button
                  onClick={handleStepForward}
                  disabled={currentStepAnim >= activeSteps.length}
                  className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold disabled:opacity-40 hover:bg-emerald-400 flex items-center gap-1"
                >
                  <Play className="w-3 h-3" />
                  <span>Next Step</span>
                </button>
              </div>

              <div className="space-y-2">
                {activeSteps.map((stepItem, idx) => {
                  const isVisible = idx <= currentStepAnim;
                  const isFinal = idx === activeSteps.length - 1;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isVisible ? 1 : 0.3, x: isVisible ? 0 : -5 }}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
                        isFinal && isVisible
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                          : isVisible
                            ? 'bg-slate-900 border-slate-700 text-slate-200'
                            : 'bg-slate-900/40 border-slate-800/40 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">
                          {stepItem.step}
                        </span>
                        <span>{stepItem.desc}</span>
                      </div>
                      <span className="font-bold text-white px-2 py-0.5 rounded bg-black/50">
                        {stepItem.result}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Shield Toggle Button */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handleToggleShield}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                  isShieldActive
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isShieldActive ? 'Remove Bracket Shield' : 'Apply ( ) Energy Shield'}</span>
              </button>

              <div className="text-[11px] text-teal-400 font-sinhala">
                {scenario.conceptSi}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Custom Formula Sandbox & Precedence Hierarchy Chart */}
        <div className="lg:col-span-5 space-y-4">
          {/* Custom Equation Tester */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="text-xs font-bold text-white flex items-center gap-1.5 text-emerald-400">
              <Zap className="w-4 h-4" />
              <span>Live Custom Formula Sandbox</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Type any spreadsheet formula with <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>^</code>, and <code>( )</code>:
            </p>

            <form onSubmit={handleCalculateCustom} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold font-mono text-sm">=</span>
                <input
                  type="text"
                  value={customFormula}
                  onChange={(e) => setCustomFormula(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-white outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400"
                >
                  Crunch
                </button>
              </div>

              {customResult !== null && (
                <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Computed Output:</span>
                  <span className="text-emerald-300 font-black text-sm">{customResult}</span>
                </div>
              )}
            </form>
          </div>

          {/* Hierarchy Reference Table */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
            <div className="text-white font-bold text-xs border-b border-slate-800 pb-2">
              Operator Hierarchy Table (ප්‍රමුඛතා අනුපිළිවෙළ)
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                <span className="text-emerald-300 font-bold">1st Priority: ( )</span>
                <span className="text-slate-400">Parentheses / Brackets (වරහන්)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                <span className="text-cyan-300 font-bold">2nd Priority: ^</span>
                <span className="text-slate-400">Exponentiation / Power (ඝාතක)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                <span className="text-amber-300 font-bold">3rd Priority: * and /</span>
                <span className="text-slate-400">Multiplication & Division (Left-to-Right)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                <span className="text-rose-300 font-bold">4th Priority: + and -</span>
                <span className="text-slate-400">Addition & Subtraction (Left-to-Right)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
