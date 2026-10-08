'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Zap,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Trophy,
  ArrowRight,
  Radio,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { SandboxProps } from './types';

type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR';

interface GateConfig {
  type: GateType;
  name: string;
  nameSi: string;
  description: string;
  inputs: number;
  evaluator: (a: boolean, b: boolean) => boolean;
  truthTable: { a: boolean; b: boolean; out: boolean }[];
}

const GATES: GateConfig[] = [
  {
    type: 'AND',
    name: 'AND Gate (සහ ද්වාරය)',
    nameSi: 'සියලු ආදාන 1 (High) වන විට පමණක් ප්‍රතිදානය 1 වේ.',
    description: 'Output is 1 ONLY when both Input A AND Input B are 1.',
    inputs: 2,
    evaluator: (a, b) => a && b,
    truthTable: [
      { a: false, b: false, out: false },
      { a: false, b: true, out: false },
      { a: true, b: false, out: false },
      { a: true, b: true, out: true },
    ],
  },
  {
    type: 'OR',
    name: 'OR Gate (හෝ ද්වාරය)',
    nameSi: 'අවම වශයෙන් එක් ආදානයක් හෝ 1 වන විට ප්‍රතිදානය 1 වේ.',
    description: 'Output is 1 if either Input A OR Input B (or both) is 1.',
    inputs: 2,
    evaluator: (a, b) => a || b,
    truthTable: [
      { a: false, b: false, out: false },
      { a: false, b: true, out: true },
      { a: true, b: false, out: true },
      { a: true, b: true, out: true },
    ],
  },
  {
    type: 'NOT',
    name: 'NOT Gate (නොවේ ද්වාරය / Inverter)',
    nameSi: 'ආදානයේ ප්‍රතිවිරුද්ධ අගය ප්‍රතිදානය ලෙස ලැබේ.',
    description: 'Inverts the single input: 0 becomes 1, and 1 becomes 0.',
    inputs: 1,
    evaluator: (a) => !a,
    truthTable: [
      { a: false, b: false, out: true },
      { a: true, b: false, out: false },
    ],
  },
  {
    type: 'NAND',
    name: 'NAND Gate (NOT-AND)',
    nameSi: 'AND ද්වාරයේ ප්‍රතිදානය ප්‍රතිලෝම කරයි. විශ්ව ද්වාරයකි (Universal Gate).',
    description: 'Output is 0 ONLY when both inputs are 1; otherwise 1.',
    inputs: 2,
    evaluator: (a, b) => !(a && b),
    truthTable: [
      { a: false, b: false, out: true },
      { a: false, b: true, out: true },
      { a: true, b: false, out: true },
      { a: true, b: true, out: false },
    ],
  },
  {
    type: 'NOR',
    name: 'NOR Gate (NOT-OR)',
    nameSi: 'OR ද්වාරයේ ප්‍රතිදානය ප්‍රතිලෝම කරයි. විශ්ව ද්වාරයකි (Universal Gate).',
    description: 'Output is 1 ONLY when both inputs are 0; otherwise 0.',
    inputs: 2,
    evaluator: (a, b) => !(a || b),
    truthTable: [
      { a: false, b: false, out: true },
      { a: false, b: true, out: false },
      { a: true, b: false, out: false },
      { a: true, b: true, out: false },
    ],
  },
  {
    type: 'XOR',
    name: 'XOR Gate (Exclusive-OR)',
    nameSi: 'ආදාන දෙක එකිනෙකට වෙනස් වන විට පමණක් ප්‍රතිදානය 1 වේ.',
    description: 'Output is 1 ONLY when inputs differ (one 0 and one 1).',
    inputs: 2,
    evaluator: (a, b) => (a && !b) || (!a && b),
    truthTable: [
      { a: false, b: false, out: false },
      { a: false, b: true, out: true },
      { a: true, b: false, out: true },
      { a: true, b: true, out: false },
    ],
  },
];

export function LogicWorkbenchSandbox({ nodeId, onComplete, onExit }: SandboxProps) {
  const [selectedGate, setSelectedGate] = useState<GateType>('AND');
  const [inputA, setInputA] = useState<boolean>(false);
  const [inputB, setInputB] = useState<boolean>(false);
  const [testedGates, setTestedGates] = useState<GateType[]>(['AND']);

  const currentGate = GATES.find((g) => g.type === selectedGate) || GATES[0];
  const output = currentGate.evaluator(inputA, inputB);

  const handleGateSelect = (type: GateType) => {
    sound.playClick(600);
    setSelectedGate(type);
    if (!testedGates.includes(type)) {
      setTestedGates((prev) => [...prev, type]);
    }
  };

  const toggleInputA = () => {
    sound.playClick(inputA ? 400 : 700);
    setInputA(!inputA);
  };

  const toggleInputB = () => {
    sound.playClick(inputB ? 400 : 700);
    setInputB(!inputB);
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
          <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight">Neon Logic Gate Breadboard</h2>
            <p className="text-xs text-slate-400 font-sinhala">මූලික හා ව්‍යුත්පන්න ලොජික් ද්වාර, සත්‍යතා වගු සහ බූලීය තර්කනය</p>
          </div>
        </div>

        <div className="text-xs font-mono text-violet-400 bg-violet-950/60 px-3 py-1.5 rounded-xl border border-violet-800">
          Explored: {testedGates.length} / {GATES.length} Gates
        </div>
      </div>

      {/* Gate Selector Pills - >=48px Touch Targets */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {GATES.map((gate) => (
          <button
            key={gate.type}
            type="button"
            onClick={() => handleGateSelect(gate.type)}
            className={`min-h-[48px] px-3 py-2.5 rounded-2xl font-mono font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 ${
              selectedGate === gate.type
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-950 ring-2 ring-violet-400'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>{gate.type}</span>
            {testedGates.includes(gate.type) && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            )}
          </button>
        ))}
      </div>

      {/* Interactive Simulation Bench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Circuit Breadboard View */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 text-white space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase text-violet-400 font-bold">Active Circuit Schematic</span>
            <span className="text-xs font-mono text-slate-400">TTL 7400 Compatible</span>
          </div>

          {/* Interactive Circuit Visualization */}
          <div className="relative min-h-[260px] rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Input Switches (A & B) */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              {/* Input A Switch */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-400 w-16">Input A:</span>
                <button
                  type="button"
                  onClick={toggleInputA}
                  className={`min-h-[48px] min-w-[72px] px-4 py-2.5 rounded-xl font-mono font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all ${
                    inputA
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/40 ring-2 ring-emerald-300'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  <Radio className={`w-3.5 h-3.5 ${inputA ? 'animate-pulse' : ''}`} />
                  <span>{inputA ? '1 (HIGH)' : '0 (LOW)'}</span>
                </button>
              </div>

              {/* Input B Switch (if 2 inputs) */}
              {currentGate.inputs === 2 && (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-400 w-16">Input B:</span>
                  <button
                    type="button"
                    onClick={toggleInputB}
                    className={`min-h-[48px] min-w-[72px] px-4 py-2.5 rounded-xl font-mono font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all ${
                      inputB
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/40 ring-2 ring-emerald-300'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    <Radio className={`w-3.5 h-3.5 ${inputB ? 'animate-pulse' : ''}`} />
                    <span>{inputB ? '1 (HIGH)' : '0 (LOW)'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Central Gate Symbol Box */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-violet-950/40 border-2 border-violet-500/60 shadow-xl">
              <span className="text-2xl font-black font-mono text-violet-300 tracking-wider">{currentGate.type}</span>
              <span className="text-[10px] font-mono text-violet-400 mt-1">{currentGate.inputs} IN → 1 OUT</span>
            </div>

            {/* Output LED */}
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-400">Output Signal:</span>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-mono font-black text-xl transition-all ${
                  output
                    ? 'bg-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(52,211,153,0.8)] ring-4 ring-emerald-300 scale-105'
                    : 'bg-slate-800 text-slate-600 border-2 border-slate-700'
                }`}
              >
                {output ? '1' : '0'}
              </div>
              <span className={`text-[11px] font-mono font-bold ${output ? 'text-emerald-400' : 'text-slate-500'}`}>
                {output ? 'HIGH (+5V LED ON)' : 'LOW (0V LED OFF)'}
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-violet-400">{currentGate.name}</span>
            <p className="text-slate-400">{currentGate.description}</p>
            <p className="font-sinhala text-slate-400 text-[11px]">{currentGate.nameSi}</p>
          </div>
        </div>

        {/* Right: Truth Table Verification */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white">Truth Table (සත්‍යතා වගුව)</h3>
            <span className="text-xs font-mono text-violet-400">{selectedGate} Gate</span>
          </div>

          <div className="rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-center text-xs font-mono">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">Input A</th>
                  {currentGate.inputs === 2 && <th className="py-2.5 px-3">Input B</th>}
                  <th className="py-2.5 px-3 text-violet-400">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                {currentGate.truthTable.map((row, idx) => {
                  const isActive =
                    row.a === inputA && (currentGate.inputs === 1 || row.b === inputB);
                  return (
                    <tr
                      key={idx}
                      className={isActive ? 'bg-violet-600/30 font-bold text-white ring-1 ring-violet-500' : 'text-slate-400'}
                    >
                      <td className="py-2.5 px-3">{row.a ? '1' : '0'}</td>
                      {currentGate.inputs === 2 && <td className="py-2.5 px-3">{row.b ? '1' : '0'}</td>}
                      <td className={`py-2.5 px-3 font-bold ${row.out ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {row.out ? '1' : '0'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-amber-400">Syllabus Insight:</span>
            <p className="text-[11px] text-slate-400">
              NAND and NOR gates are recognized as <strong>Universal Gates</strong> because any fundamental Boolean function (AND, OR, NOT) can be constructed solely using them.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar with >=48px Touch Target */}
      <div className="p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          Explored {testedGates.length} of {GATES.length} logic gates with interactive live signals.
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
