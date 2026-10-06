'use client';

import React, { useState } from 'react';
import { Cpu, ToggleLeft, ToggleRight, CheckCircle2 } from 'lucide-react';

type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR';

export function LogicGateSimulator() {
  const [gate, setGate] = useState<GateType>('AND');
  const [inA, setInA] = useState<number>(1);
  const [inB, setInB] = useState<number>(0);

  const computeOutput = (g: GateType, a: number, b: number): number => {
    switch (g) {
      case 'AND': return a & b;
      case 'OR': return a | b;
      case 'NOT': return a === 1 ? 0 : 1;
      case 'NAND': return (a & b) === 1 ? 0 : 1;
      case 'NOR': return (a | b) === 1 ? 0 : 1;
      case 'XOR': return a ^ b;
      default: return 0;
    }
  };

  const output = computeOutput(gate, inA, inB);

  const truthTable = [
    { a: 0, b: 0, out: computeOutput(gate, 0, 0) },
    { a: 0, b: 1, out: computeOutput(gate, 0, 1) },
    { a: 1, b: 0, out: computeOutput(gate, 1, 0) },
    { a: 1, b: 1, out: computeOutput(gate, 1, 1) },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50/70 to-indigo-50/70 dark:from-slate-800/80 dark:to-purple-950/40 p-5 rounded-2xl border border-purple-100 dark:border-purple-900 shadow-sm my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-purple-100 dark:border-purple-800/60 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              Interactive Logic Gate Simulator
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold">
                O/L Core Circuit Tool
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              තර්කන ද්වාර (Logic Gates) සහ සත්‍යතා වගු (Truth Tables) සජීවී අනුකරණය
            </p>
          </div>
        </div>

        {/* Gate Selector */}
        <div className="flex flex-wrap gap-1">
          {(['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR'] as GateType[]).map((g) => (
            <button
              key={g}
              onClick={() => setGate(g)}
              className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all ${
                gate === g
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-purple-50'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Interactive Controls & Diagram */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Inputs & Live State
          </div>

          <div className="flex items-center justify-around gap-2">
            {/* Input A */}
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Input A</span>
              <button
                onClick={() => setInA(inA === 1 ? 0 : 1)}
                className={`w-14 h-14 rounded-xl font-mono text-xl font-black flex items-center justify-center transition-all shadow-sm ${
                  inA === 1 ? 'bg-emerald-500 text-white ring-4 ring-emerald-200 dark:ring-emerald-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {inA}
              </button>
              <span className="text-[10px] text-slate-400">{inA === 1 ? 'HIGH (1)' : 'LOW (0)'}</span>
            </div>

            {/* Gate Symbol Box */}
            <div className="flex flex-col items-center">
              <div className="px-3 py-2 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-800 font-mono font-black text-sm text-purple-700 dark:text-purple-300 shadow-sm">
                [{gate}]
              </div>
              <span className="text-[10px] text-slate-400 mt-1">Gate Logic</span>
            </div>

            {/* Input B (Hidden if NOT gate) */}
            {gate !== 'NOT' ? (
              <div className="text-center space-y-1">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Input B</span>
                <button
                  onClick={() => setInB(inB === 1 ? 0 : 1)}
                  className={`w-14 h-14 rounded-xl font-mono text-xl font-black flex items-center justify-center transition-all shadow-sm ${
                    inB === 1 ? 'bg-emerald-500 text-white ring-4 ring-emerald-200 dark:ring-emerald-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {inB}
                </button>
                <span className="text-[10px] text-slate-400">{inB === 1 ? 'HIGH (1)' : 'LOW (0)'}</span>
              </div>
            ) : (
              <div className="text-center text-xs text-slate-400 italic">
                (Single input gate)
              </div>
            )}

            {/* Output */}
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Output Q</span>
              <div
                className={`w-14 h-14 rounded-xl font-mono text-xl font-black flex items-center justify-center shadow-md transition-all ${
                  output === 1 ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 dark:ring-indigo-900' : 'bg-slate-800 text-slate-500'
                }`}
              >
                {output}
              </div>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                {output === 1 ? 'TRUE (1)' : 'FALSE (0)'}
              </span>
            </div>
          </div>
        </div>

        {/* Truth Table */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Truth Table (සත්‍යතා වගුව) - {gate} Gate
          </div>

          <table className="w-full text-center text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
              <tr>
                <th className="py-1.5 px-2">A</th>
                {gate !== 'NOT' && <th className="py-1.5 px-2">B</th>}
                <th className="py-1.5 px-2">Output (Q)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {(gate === 'NOT' ? [{ a: 0, b: 0, out: 1 }, { a: 1, b: 0, out: 0 }] : truthTable).map((row, idx) => {
                const isActive = gate === 'NOT' ? row.a === inA : row.a === inA && row.b === inB;
                return (
                  <tr
                    key={idx}
                    className={`transition-colors font-mono ${
                      isActive
                        ? 'bg-purple-100 dark:bg-purple-950/60 font-bold text-purple-900 dark:text-purple-200'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <td className="py-1.5 px-2">{row.a}</td>
                    {gate !== 'NOT' && <td className="py-1.5 px-2">{row.b}</td>}
                    <td className={`py-1.5 px-2 font-bold ${row.out === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                      {row.out}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
