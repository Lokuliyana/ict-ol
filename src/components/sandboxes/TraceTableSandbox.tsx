'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch,
  Play,
  RotateCcw,
  CheckCircle2,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Activity,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { SandboxProps } from './types';

interface TraceStep {
  stepIndex: number;
  label: string;
  count: number;
  sum: number;
  condition: string;
  conditionResult: boolean | null;
  output: string;
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
    description: 'Initial state: Count = 1, Sum = 0',
  },
  {
    stepIndex: 1,
    label: 'Loop 1: Check Condition (1 වන වටය)',
    count: 1,
    sum: 0,
    condition: '1 <= 3',
    conditionResult: true,
    output: '-',
    description: 'Evaluate Count <= 3 (1 <= 3 is TRUE). Proceed to loop body.',
  },
  {
    stepIndex: 2,
    label: 'Loop 1: Accumulate & Step',
    count: 2,
    sum: 1,
    condition: '1 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    description: 'Sum = 0 + 1 = 1; Increment Count = 1 + 1 = 2',
  },
  {
    stepIndex: 3,
    label: 'Loop 2: Accumulate & Step (2 වන වටය)',
    count: 3,
    sum: 3,
    condition: '2 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    description: 'Sum = 1 + 2 = 3; Increment Count = 2 + 1 = 3',
  },
  {
    stepIndex: 4,
    label: 'Loop 3: Accumulate & Step (3 වන වටය)',
    count: 4,
    sum: 6,
    condition: '3 <= 3 (TRUE)',
    conditionResult: true,
    output: '-',
    description: 'Sum = 3 + 3 = 6; Increment Count = 3 + 1 = 4',
  },
  {
    stepIndex: 5,
    label: 'Loop Termination Check',
    count: 4,
    sum: 6,
    condition: '4 <= 3 (FALSE)',
    conditionResult: false,
    output: '-',
    description: 'Evaluate Count <= 3 (4 <= 3 is FALSE). Exit loop.',
  },
  {
    stepIndex: 6,
    label: 'Final Display Output (ප්‍රතිදානය)',
    count: 4,
    sum: 6,
    condition: 'EXIT',
    conditionResult: false,
    output: '6',
    description: 'Print Sum to console terminal: Output = 6',
  },
];

export function TraceTableSandbox({ nodeId, onComplete, onExit }: SandboxProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedPrediction, setSelectedPrediction] = useState<number | null>(null);
  const [hasVerified, setHasVerified] = useState<boolean>(false);

  const step = TRACE_STEPS[currentStep];
  const isTerminal = currentStep === TRACE_STEPS.length - 1;

  const handleNext = () => {
    sound.playClick(500 + currentStep * 60);
    if (currentStep < TRACE_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      if (currentStep + 1 === TRACE_STEPS.length - 1) {
        sound.playSuccessDing();
      }
    }
  };

  const handlePrev = () => {
    sound.playClick(400);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setCurrentStep(0);
    setSelectedPrediction(null);
    setHasVerified(false);
  };

  const handlePredict = (val: number) => {
    sound.playClick();
    setSelectedPrediction(val);
    if (val === 6) {
      sound.playSuccessDing();
      setHasVerified(true);
    } else {
      sound.playError();
    }
  };

  const handleFinish = () => {
    sound.playVictoryFanfare();
    onComplete?.({ stars: 3, xp: 100, accuracy: 100 });
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight">Flowchart Trace Table Scrubber</h2>
            <p className="text-xs text-slate-400 font-sinhala">ගැලීම් සටහන්, වියලි ධාවන (Dry Run) හා ලුහුබැඳීමේ වගු</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="min-h-[48px] px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Scrubber</span>
        </button>
      </div>

      {/* Main Stepper Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: CPU Registers & Step Viewer */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
              Step {currentStep + 1} of {TRACE_STEPS.length}: {step.label}
            </span>
            <span className="text-xs font-mono text-slate-400">Algorithmic Trace</span>
          </div>

          {/* Active CPU Register Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Count Register */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-xs font-mono text-slate-400">Loop Counter</span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-400">Count = {step.count}</div>
            </div>

            {/* Sum Accumulator */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-xs font-mono text-slate-400">Accumulator</span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">Sum = {step.sum}</div>
            </div>

            {/* Condition Evaluation */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1 col-span-2 sm:col-span-1">
              <span className="text-xs font-mono text-slate-400">Condition (Count &lt;= 3)</span>
              <div
                className={`text-sm sm:text-base font-black font-mono ${
                  step.conditionResult === true
                    ? 'text-emerald-400'
                    : step.conditionResult === false
                    ? 'text-rose-400'
                    : 'text-slate-400'
                }`}
              >
                {step.condition}
              </div>
            </div>
          </div>

          {/* Step Explanation Banner */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Execution Trace Log:</span>
            <p className="text-sm text-slate-200">{step.description}</p>
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 rounded-2xl bg-black border border-slate-800 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-500 text-[10px]">
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL STDOUT</span>
            </div>
            <div className="text-emerald-400">
              {isTerminal ? `> PRINT Sum => ${step.output}` : '> Execution in progress...'}
            </div>
          </div>

          {/* Scrubber Controls - >=48px Touch Targets */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex-1 min-h-[48px] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
                currentStep > 0
                  ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev Step</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isTerminal}
              className={`flex-1 min-h-[48px] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
                !isTerminal
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: History & Prediction Challenge */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-white">Algorithmic Challenge</h3>
            <p className="text-xs text-slate-400">
              What is the final value of <strong>Sum</strong> displayed after the loop terminates?
            </p>

            {/* Prediction MCQ Buttons - >=48px Touch Targets */}
            <div className="grid grid-cols-2 gap-2.5">
              {[3, 4, 6, 10].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handlePredict(option)}
                  className={`min-h-[48px] p-3 rounded-2xl font-mono font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
                    selectedPrediction === option
                      ? option === 6
                        ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                        : 'bg-rose-600 text-white ring-2 ring-rose-400'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span>Sum = {option}</span>
                </button>
              ))}
            </div>

            {hasVerified && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" /> Correct Output Verified!
                </div>
                <p className="text-xs text-slate-300">Sum = 1 + 2 + 3 = 6. Counter increments to 4, which fails 4 &lt;= 3.</p>
              </div>
            )}
          </div>

          {/* Trace Table Overview - Compact, No Horizontal Overflow */}
          <div className="space-y-2 pt-4 border-t border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">Trace Table Summary</span>
            <div className="divide-y divide-slate-800 text-xs font-mono">
              <div className="grid grid-cols-4 py-1.5 text-slate-400 font-bold">
                <span>Iteration</span>
                <span className="text-center">Count</span>
                <span className="text-center">Sum</span>
                <span className="text-right">Condition</span>
              </div>
              <div className="grid grid-cols-4 py-1 text-slate-300">
                <span>Loop 1</span>
                <span className="text-center">1 → 2</span>
                <span className="text-center">0 → 1</span>
                <span className="text-right text-emerald-400">TRUE</span>
              </div>
              <div className="grid grid-cols-4 py-1 text-slate-300">
                <span>Loop 2</span>
                <span className="text-center">2 → 3</span>
                <span className="text-center">1 → 3</span>
                <span className="text-right text-emerald-400">TRUE</span>
              </div>
              <div className="grid grid-cols-4 py-1 text-slate-300">
                <span>Loop 3</span>
                <span className="text-center">3 → 4</span>
                <span className="text-center">3 → 6</span>
                <span className="text-right text-emerald-400">TRUE</span>
              </div>
              <div className="grid grid-cols-4 py-1 text-slate-300">
                <span>Exit</span>
                <span className="text-center">4</span>
                <span className="text-center">6</span>
                <span className="text-right text-rose-400">FALSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar with >=48px Touch Target */}
      <div className="p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          {isTerminal
            ? 'Execution completed to terminal PRINT step.'
            : `Step ${currentStep + 1} of ${TRACE_STEPS.length} active.`}
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950 active:scale-95 transition-transform"
        >
          <Trophy className="w-4 h-4 text-amber-300" />
          <span>Complete Lab & Claim XP</span>
        </button>
      </div>
    </div>
  );
}
