'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Table, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  SkipBack, 
  SkipForward, 
  RotateCcw, 
  Cpu, 
  Activity, 
  SlidersHorizontal,
  Layers,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface TraceStep {
  stepIndex: number;
  label: string;
  count: number;
  sum: number;
  condition: string;
  conditionResult: boolean | null;
  output: string;
  highlightRow: number | null;
  description: string;
}

const TRACE_STEPS: TraceStep[] = [
  {
    stepIndex: 0,
    label: 'Initialization (ආරම්භක අගයන්)',
    count: 1,
    sum: 0,
    condition: '-',
    conditionResult: null,
    output: '-',
    highlightRow: null,
    description: 'Set initial values: Count = 1, Sum = 0'
  },
  {
    stepIndex: 1,
    label: 'Loop 1: Check Condition (1 වන වටය)',
    count: 1,
    sum: 0,
    condition: '1 <= 3',
    conditionResult: true,
    output: '-',
    highlightRow: 0,
    description: 'Evaluate Count <= 3 (1 <= 3 is TRUE). Enter loop body.'
  },
  {
    stepIndex: 2,
    label: 'Loop 1: Process & Increment',
    count: 2,
    sum: 1,
    condition: '1 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    highlightRow: 0,
    description: 'Sum = 0 + 1 = 1; Count = 1 + 1 = 2'
  },
  {
    stepIndex: 3,
    label: 'Loop 2: Process & Increment (2 වන වටය)',
    count: 3,
    sum: 3,
    condition: '2 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    highlightRow: 1,
    description: 'Evaluate 2 <= 3 (TRUE). Sum = 1 + 2 = 3; Count = 2 + 1 = 3'
  },
  {
    stepIndex: 4,
    label: 'Loop 3: Process & Increment (3 වන වටය)',
    count: 4,
    sum: 6,
    condition: '3 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    highlightRow: 2,
    description: 'Evaluate 3 <= 3 (TRUE). Sum = 3 + 3 = 6; Count = 3 + 1 = 4'
  },
  {
    stepIndex: 5,
    label: 'Loop 4: Exit Condition Test (පිටවීමේ පරීක්ෂාව)',
    count: 4,
    sum: 6,
    condition: '4 <= 3 (FALSE)',
    conditionResult: false,
    output: '-',
    highlightRow: 3,
    description: 'Evaluate 4 <= 3 (FALSE!). Loop terminates and breaks out.'
  },
  {
    stepIndex: 6,
    label: 'Display Output (ප්‍රතිදානය මුද්‍රණය)',
    count: 4,
    sum: 6,
    condition: 'TERMINATED',
    conditionResult: false,
    output: '6',
    highlightRow: null,
    description: 'Execute PRINT Sum -> Terminal displays 6.'
  },
];

export function TraceTableScrubber() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [loopType, setLoopType] = useState<'while_do' | 'repeat_until'>('while_do');

  const step = TRACE_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < TRACE_STEPS.length - 1) {
      sound.playClick(650);
      setCurrentStep(prev => prev + 1);
      if (currentStep + 1 === TRACE_STEPS.length - 1) {
        sound.playVictory();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      sound.playClick(500);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    sound.playClick(400);
    setCurrentStep(0);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Table className="w-4 h-4" />
              <span>STATION 03 • TRACE TABLE TIME MACHINE (හෝඩුවා වගු කාල යන්ත්‍රය)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Variable Tracking & Loop Scrubber (හෝඩුවා වගුව හා ලූප් ලුහුබැඳීම)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Dry-run code line-by-line, inspect memory register canisters (Count, Sum), and contrast Pre-test (WHILE..DO) with Post-test (REPEAT..UNTIL) minimum execution mechanics.
            </p>
          </div>

          {/* Loop Type Switcher */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setLoopType('while_do'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                loopType === 'while_do'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pre-test (WHILE..DO)
            </button>
            <button
              onClick={() => { sound.playClick(600); setLoopType('repeat_until'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                loopType === 'repeat_until'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Post-test (REPEAT..UNTIL)
            </button>
          </div>
        </div>
      </div>

      {/* Main Split-Screen HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Code & Memory HUD */}
        <div className="lg:col-span-5 space-y-4">
          {/* Pseudocode Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 space-y-1 shadow-lg">
            <div className="text-[10px] text-purple-400 uppercase font-bold border-b border-slate-800 pb-1 mb-2">
              ALGORITHM PSEUDOCODE:
            </div>
            <div className={currentStep === 0 ? 'text-amber-300 bg-amber-950/40 px-1 rounded' : ''}>
              Count = 1, Sum = 0
            </div>
            <div className={currentStep === 1 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'text-cyan-300 bg-cyan-950/40 px-1 rounded' : ''}>
              WHILE Count &lt;= 3 DO
            </div>
            <div className={currentStep === 2 || currentStep === 3 || currentStep === 4 ? 'text-emerald-300 bg-emerald-950/40 px-1 rounded pl-4' : 'pl-4'}>
              Sum = Sum + Count
            </div>
            <div className={currentStep === 2 || currentStep === 3 || currentStep === 4 ? 'text-emerald-300 bg-emerald-950/40 px-1 rounded pl-4' : 'pl-4'}>
              Count = Count + 1
            </div>
            <div>ENDWHILE</div>
            <div className={currentStep === 6 ? 'text-emerald-400 bg-emerald-950 px-1 rounded font-bold' : ''}>
              PRINT Sum
            </div>
          </div>

          {/* Physical Memory Canisters */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900 border-2 border-cyan-500/40 rounded-2xl p-4 text-center space-y-1">
              <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                VARIABLE [Count]
              </div>
              <motion.div
                key={step.count}
                initial={{ scale: 1.3, color: '#38bdf8' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-3xl font-black font-mono"
              >
                {step.count}
              </motion.div>
              <div className="text-[9px] text-slate-500">Loop Counter</div>
            </div>

            <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-2xl p-4 text-center space-y-1">
              <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                VARIABLE [Sum]
              </div>
              <motion.div
                key={step.sum}
                initial={{ scale: 1.3, color: '#34d399' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-3xl font-black font-mono"
              >
                {step.sum}
              </motion.div>
              <div className="text-[9px] text-slate-500">Accumulator</div>
            </div>
          </div>

          {/* Loop Minimum Execution Badge */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-xs space-y-1.5">
            <div className="flex items-center justify-between font-bold">
              <span className="text-white">Loop Execution Guarantee:</span>
              <span className="text-purple-400 font-mono">
                {loopType === 'while_do' ? 'Min: 0 Times' : 'Min: 1 Time'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {loopType === 'while_do'
                ? 'Pre-test (WHILE): Checks condition at entry. If initially False, body executes 0 times.'
                : 'Post-test (REPEAT..UNTIL): Checks condition at exit. Loop body is guaranteed to run at least 1 time.'}
            </p>
          </div>
        </div>

        {/* Right: Trace Table & Timeline Scrubber */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                <Table className="w-4 h-4 text-purple-400" />
                TRACE TABLE MATRIX (හෝඩුවා වගුව)
              </span>
              <span className="text-xs font-mono text-cyan-400">
                Step {currentStep + 1} of {TRACE_STEPS.length}
              </span>
            </div>

            {/* Trace Table Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-2 px-3">Iteration</th>
                    <th className="py-2 px-3">Count &le; 3</th>
                    <th className="py-2 px-3">Sum = Sum + Count</th>
                    <th className="py-2 px-3">Count = Count + 1</th>
                    <th className="py-2 px-3">Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 text-slate-300">
                  <tr className={step.highlightRow === 0 ? 'bg-purple-950/40 text-white font-bold' : ''}>
                    <td className="py-2.5 px-3">Loop 1</td>
                    <td className="py-2.5 px-3 text-emerald-400">1 &le; 3 (TRUE)</td>
                    <td className="py-2.5 px-3">{currentStep >= 2 ? '0 + 1 = 1' : '-'}</td>
                    <td className="py-2.5 px-3">{currentStep >= 2 ? '1 + 1 = 2' : '-'}</td>
                    <td className="py-2.5 px-3">-</td>
                  </tr>
                  <tr className={step.highlightRow === 1 ? 'bg-purple-950/40 text-white font-bold' : ''}>
                    <td className="py-2.5 px-3">Loop 2</td>
                    <td className="py-2.5 px-3 text-emerald-400">{currentStep >= 3 ? '2 &le; 3 (TRUE)' : '-'}</td>
                    <td className="py-2.5 px-3">{currentStep >= 3 ? '1 + 2 = 3' : '-'}</td>
                    <td className="py-2.5 px-3">{currentStep >= 3 ? '2 + 1 = 3' : '-'}</td>
                    <td className="py-2.5 px-3">-</td>
                  </tr>
                  <tr className={step.highlightRow === 2 ? 'bg-purple-950/40 text-white font-bold' : ''}>
                    <td className="py-2.5 px-3">Loop 3</td>
                    <td className="py-2.5 px-3 text-emerald-400">{currentStep >= 4 ? '3 &le; 3 (TRUE)' : '-'}</td>
                    <td className="py-2.5 px-3">{currentStep >= 4 ? '3 + 3 = 6' : '-'}</td>
                    <td className="py-2.5 px-3">{currentStep >= 4 ? '3 + 1 = 4' : '-'}</td>
                    <td className="py-2.5 px-3">-</td>
                  </tr>
                  <tr className={step.highlightRow === 3 ? 'bg-rose-950/40 text-rose-300 font-bold' : ''}>
                    <td className="py-2.5 px-3">Loop 4</td>
                    <td className="py-2.5 px-3 text-rose-400">{currentStep >= 5 ? '4 &le; 3 (FALSE)' : '-'}</td>
                    <td className="py-2.5 px-3">-</td>
                    <td className="py-2.5 px-3">-</td>
                    <td className="py-2.5 px-3 font-black text-emerald-400">{currentStep >= 6 ? '6' : '-'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Current Step Description Callout */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 space-y-1">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                {step.label}
              </div>
              <p className="text-xs text-slate-300">
                {step.description}
              </p>
            </div>

            {/* Timeline Scrubber Controls */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 disabled:opacity-30 flex items-center gap-1"
                >
                  <SkipBack className="w-3.5 h-3.5" /> Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === TRACE_STEPS.length - 1}
                  className="px-4 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 disabled:opacity-30 flex items-center gap-1 shadow-md shadow-purple-600/30"
                >
                  Next Step <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleReset}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                title="Reset Timeline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
