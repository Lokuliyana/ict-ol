'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  HelpCircle,
  Activity,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface PresetCircuit {
  id: string;
  name: string;
  examOrigin: string;
  formula: string;
  formulaSi: string;
  inputs: ('A' | 'B' | 'C' | 'D')[];
  evaluator: (inputs: Record<string, 0 | 1>) => {
    intermediates: Record<string, 0 | 1>;
    final: 0 | 1;
  };
}

const CIRCUITS: PresetCircuit[] = [
  {
    id: 'sop_4var',
    name: 'Sum of Products (2-Level)',
    examOrigin: '2020 O/L Paper II Q01(iv)',
    formula: 'P = (A · B) + (C · D)',
    formulaSi: 'P = (A · B) + (C · D) ලොජික් පරිපථය',
    inputs: ['A', 'B', 'C', 'D'],
    evaluator: (inps) => {
      const g1 = (inps.A === 1 && inps.B === 1) ? 1 : 0;
      const g2 = (inps.C === 1 && inps.D === 1) ? 1 : 0;
      const final = (g1 === 1 || g2 === 1) ? 1 : 0;
      return {
        intermediates: { 'A·B': g1 as 0|1, 'C·D': g2 as 0|1 },
        final: final as 0|1
      };
    }
  },
  {
    id: 'pos_3var',
    name: 'OR into AND Cascade',
    examOrigin: '2021 O/L Paper II Q01(iv)',
    formula: 'P = A · (B + C)',
    formulaSi: 'P = A · (B + C) ලොජික් පරිපථය',
    inputs: ['A', 'B', 'C'],
    evaluator: (inps) => {
      const g1 = (inps.B === 1 || inps.C === 1) ? 1 : 0;
      const final = (inps.A === 1 && g1 === 1) ? 1 : 0;
      return {
        intermediates: { 'B+C': g1 as 0|1 },
        final: final as 0|1
      };
    }
  },
  {
    id: 'not_and_or',
    name: 'Inverters + Product + Sum',
    examOrigin: '2022 O/L Paper II Q01(iv)',
    formula: "F = C' + (A · B')",
    formulaSi: "F = C' + (A · B') ලොජික් පරිපථය",
    inputs: ['A', 'B', 'C'],
    evaluator: (inps) => {
      const notC = inps.C === 1 ? 0 : 1;
      const notB = inps.B === 1 ? 0 : 1;
      const andProd = (inps.A === 1 && notB === 1) ? 1 : 0;
      const final = (notC === 1 || andProd === 1) ? 1 : 0;
      return {
        intermediates: { "C'": notC as 0|1, "B'": notB as 0|1, "A·B'": andProd as 0|1 },
        final: final as 0|1
      };
    }
  },
  {
    id: 'nand_nor_combo',
    name: 'NAND into NOR Combined',
    examOrigin: '2024 O/L Paper II Q01(iv)',
    formula: "Y = ((A · B)' + C)'",
    formulaSi: "Y = ((A · B)' + C)' ලොජික් පරිපථය",
    inputs: ['A', 'B', 'C'],
    evaluator: (inps) => {
      const nandOut = (inps.A === 1 && inps.B === 1) ? 0 : 1;
      const final = (nandOut === 0 && inps.C === 0) ? 1 : 0;
      return {
        intermediates: { "(A·B)'": nandOut as 0|1 },
        final: final as 0|1
      };
    }
  }
];

export function CircuitEvaluator() {
  const [selectedCircuitIdx, setSelectedCircuitIdx] = useState<number>(0);
  const [inputStates, setInputStates] = useState<Record<string, 0 | 1>>({
    A: 1,
    B: 0,
    C: 1,
    D: 0,
  });

  const curCircuit = CIRCUITS[selectedCircuitIdx];
  const { intermediates, final } = curCircuit.evaluator(inputStates);

  const handleToggleInput = (pin: string) => {
    const cur = inputStates[pin] || 0;
    const next = cur === 1 ? 0 : 1;
    sound.playClick(next === 1 ? 820 : 420);
    setInputStates(prev => ({ ...prev, [pin]: next as 0|1 }));
  };

  const handleCircuitSelect = (idx: number) => {
    sound.playClick(650);
    setSelectedCircuitIdx(idx);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Preset Selector */}
      <div className="bg-slate-900/90 border border-violet-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 5: The Combinational Circuit Lab</span>
              <span className="text-xs font-sinhala text-violet-400 font-normal">
                (සංයුක්ත ලොජික් පරිපථ විශ්ලේෂණය)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Trace moving signals through multi-stage circuits and verify real O/L exam expressions.
            </p>
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto flex-wrap">
          {CIRCUITS.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => handleCircuitSelect(idx)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCircuitIdx === idx
                  ? 'bg-violet-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Circuit Tracer Canvas (Left) & Truth Table Generator (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Live Combinational Circuit SVG Tracer */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[460px]">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Top Bar with Exam Origin */}
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>{curCircuit.formula}</span>
            </div>

            <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {curCircuit.examOrigin}
            </span>
          </div>

          {/* Central Animated Circuit Diagram */}
          <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
            
            <div className="w-full max-w-lg bg-slate-900/90 border border-violet-500/20 rounded-2xl p-5 shadow-xl space-y-4">
              
              {/* CIRCUIT 1: P = (A.B) + (C.D) */}
              {curCircuit.id === 'sop_4var' && (
                <svg viewBox="0 0 420 180" className="w-full max-w-[420px] mx-auto overflow-visible font-mono">
                  {/* Gate 1: AND (A,B) */}
                  <line x1="20" y1="30" x2="80" y2="30" stroke={inputStates.A === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="34" fill="#94a3b8" fontSize="12" fontWeight="bold">A</text>
                  <line x1="20" y1="70" x2="80" y2="70" stroke={inputStates.B === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="74" fill="#94a3b8" fontSize="12" fontWeight="bold">B</text>
                  
                  <path d="M 80 15 L 115 15 A 35 35 0 0 1 115 85 L 80 85 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="105" y="54" fill="#ddd6fe" fontSize="11" fontWeight="bold">AND 1</text>

                  {/* Wire from AND 1 to OR */}
                  <line x1="150" y1="50" x2="240" y2="70" stroke={intermediates['A·B'] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="175" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold">A·B={intermediates['A·B']}</text>

                  {/* Gate 2: AND (C,D) */}
                  <line x1="20" y1="110" x2="80" y2="110" stroke={inputStates.C === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="114" fill="#94a3b8" fontSize="12" fontWeight="bold">C</text>
                  <line x1="20" y1="150" x2="80" y2="150" stroke={inputStates.D === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="154" fill="#94a3b8" fontSize="12" fontWeight="bold">D</text>

                  <path d="M 80 95 L 115 95 A 35 35 0 0 1 115 165 L 80 165 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="105" y="134" fill="#ddd6fe" fontSize="11" fontWeight="bold">AND 2</text>

                  {/* Wire from AND 2 to OR */}
                  <line x1="150" y1="130" x2="240" y2="110" stroke={intermediates['C·D'] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="175" y="135" fill="#38bdf8" fontSize="11" fontWeight="bold">C·D={intermediates['C·D']}</text>

                  {/* Gate 3: Final OR */}
                  <path d="M 240 50 Q 270 90 240 130 Q 300 130 330 90 Q 300 50 240 50 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="275" y="94" fill="#ddd6fe" fontSize="11" fontWeight="bold">OR</text>

                  {/* Final Output Wire */}
                  <line x1="330" y1="90" x2="390" y2="90" stroke={final === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="390" cy="90" r="6" fill={final === 1 ? "#fbbf24" : "#475569"} />
                  <text x="350" y="80" fill={final === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontWeight="bold">
                    P={final}
                  </text>
                </svg>
              )}

              {/* CIRCUIT 2: P = A . (B + C) */}
              {curCircuit.id === 'pos_3var' && (
                <svg viewBox="0 0 400 160" className="w-full max-w-[400px] mx-auto overflow-visible font-mono">
                  {/* Gate 1: OR (B,C) */}
                  <line x1="20" y1="40" x2="90" y2="40" stroke={inputStates.B === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="44" fill="#94a3b8" fontSize="12" fontWeight="bold">B</text>
                  <line x1="20" y1="90" x2="90" y2="90" stroke={inputStates.C === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="94" fill="#94a3b8" fontSize="12" fontWeight="bold">C</text>

                  <path d="M 90 20 Q 115 65 90 110 Q 140 110 165 65 Q 140 20 90 20 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="120" y="70" fill="#ddd6fe" fontSize="11" fontWeight="bold">OR</text>

                  {/* Intermediate wire to AND */}
                  <line x1="165" y1="65" x2="240" y2="65" stroke={intermediates['B+C'] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="175" y="55" fill="#38bdf8" fontSize="10" fontWeight="bold">B+C={intermediates['B+C']}</text>

                  {/* Input A bypass wire */}
                  <line x1="20" y1="130" x2="240" y2="105" stroke={inputStates.A === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="134" fill="#94a3b8" fontSize="12" fontWeight="bold">A</text>

                  {/* Gate 2: AND Gate */}
                  <path d="M 240 50 L 275 50 A 35 35 0 0 1 275 120 L 240 120 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="265" y="88" fill="#ddd6fe" fontSize="11" fontWeight="bold">AND</text>

                  {/* Final Output */}
                  <line x1="310" y1="85" x2="380" y2="85" stroke={final === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="380" cy="85" r="6" fill={final === 1 ? "#fbbf24" : "#475569"} />
                  <text x="340" y="75" fill={final === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontWeight="bold">
                    P={final}
                  </text>
                </svg>
              )}

              {/* CIRCUIT 3: F = C' + (A . B') */}
              {curCircuit.id === 'not_and_or' && (
                <svg viewBox="0 0 420 180" className="w-full max-w-[420px] mx-auto overflow-visible font-mono">
                  {/* Inverter for C */}
                  <line x1="20" y1="30" x2="60" y2="30" stroke={inputStates.C === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="34" fill="#94a3b8" fontSize="12" fontWeight="bold">C</text>
                  <polygon points="60,15 60,45 90,30" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="95" cy="30" r="4" fill="#f43f5e" />
                  
                  {/* Inverter C wire to OR */}
                  <line x1="100" y1="30" x2="260" y2="65" stroke={intermediates["C'"] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="140" y="25" fill="#38bdf8" fontSize="10" fontWeight="bold">C&apos;={intermediates["C'"]}</text>

                  {/* Input A */}
                  <line x1="20" y1="85" x2="150" y2="85" stroke={inputStates.A === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="89" fill="#94a3b8" fontSize="12" fontWeight="bold">A</text>

                  {/* Inverter for B */}
                  <line x1="20" y1="130" x2="60" y2="130" stroke={inputStates.B === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="134" fill="#94a3b8" fontSize="12" fontWeight="bold">B</text>
                  <polygon points="60,115 60,145 90,130" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="95" cy="130" r="4" fill="#f43f5e" />

                  {/* Wire B' to AND */}
                  <line x1="100" y1="130" x2="150" y2="115" stroke={intermediates["B'"] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  
                  {/* Gate: AND (A, B') */}
                  <path d="M 150 70 L 180 70 A 30 30 0 0 1 180 130 L 150 130 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                  <text x="170" y="104" fill="#ddd6fe" fontSize="10" fontWeight="bold">AND</text>

                  {/* Wire A.B' to OR */}
                  <line x1="210" y1="100" x2="260" y2="100" stroke={intermediates["A·B'"] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="215" y="118" fill="#38bdf8" fontSize="10" fontWeight="bold">A·B&apos;={intermediates["A·B'"]}</text>

                  {/* Gate: Final OR */}
                  <path d="M 260 45 Q 285 85 260 125 Q 310 125 335 85 Q 310 45 260 45 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="290" y="90" fill="#ddd6fe" fontSize="11" fontWeight="bold">OR</text>

                  {/* Output */}
                  <line x1="335" y1="85" x2="395" y2="85" stroke={final === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="395" cy="85" r="6" fill={final === 1 ? "#fbbf24" : "#475569"} />
                  <text x="360" y="75" fill={final === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontWeight="bold">
                    F={final}
                  </text>
                </svg>
              )}

              {/* CIRCUIT 4: Y = ((A.B)' + C)' */}
              {curCircuit.id === 'nand_nor_combo' && (
                <svg viewBox="0 0 400 160" className="w-full max-w-[400px] mx-auto overflow-visible font-mono">
                  {/* Gate 1: NAND (A,B) */}
                  <line x1="20" y1="40" x2="80" y2="40" stroke={inputStates.A === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="44" fill="#94a3b8" fontSize="12" fontWeight="bold">A</text>
                  <line x1="20" y1="80" x2="80" y2="80" stroke={inputStates.B === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="84" fill="#94a3b8" fontSize="12" fontWeight="bold">B</text>

                  <path d="M 80 25 L 115 25 A 35 35 0 0 1 115 95 L 80 95 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <circle cx="155" cy="60" r="5" fill="#f43f5e" />
                  <text x="105" y="64" fill="#ddd6fe" fontSize="10" fontWeight="bold">NAND</text>

                  {/* NAND Out to NOR */}
                  <line x1="160" y1="60" x2="230" y2="60" stroke={intermediates["(A·B)'"] === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="170" y="50" fill="#38bdf8" fontSize="10" fontWeight="bold">(A·B)&apos;={intermediates["(A·B)'"]}</text>

                  {/* Input C wire to NOR */}
                  <line x1="20" y1="125" x2="230" y2="100" stroke={inputStates.C === 1 ? "#8b5cf6" : "#475569"} strokeWidth="3" />
                  <text x="5" y="129" fill="#94a3b8" fontSize="12" fontWeight="bold">C</text>

                  {/* Gate 2: NOR */}
                  <path d="M 230 40 Q 255 80 230 120 Q 280 120 305 80 Q 280 40 230 40 Z" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
                  <circle cx="311" cy="80" r="5" fill="#f43f5e" />
                  <text x="260" y="84" fill="#ddd6fe" fontSize="10" fontWeight="bold">NOR</text>

                  {/* Final Output */}
                  <line x1="316" y1="80" x2="380" y2="80" stroke={final === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="380" cy="80" r="6" fill={final === 1 ? "#fbbf24" : "#475569"} />
                  <text x="340" y="70" fill={final === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontWeight="bold">
                    Y={final}
                  </text>
                </svg>
              )}

              {/* Dynamic Input Signal Toggles */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {curCircuit.inputs.map(pin => (
                  <button
                    key={pin}
                    onClick={() => handleToggleInput(pin)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      inputStates[pin] === 1
                        ? 'bg-violet-500 text-slate-950 shadow-[0_0_8px_#8b5cf6]'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Input {pin}: {inputStates[pin]}
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Info Strip */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Sinhala: <strong>{curCircuit.formulaSi}</strong></span>
            <span className="text-violet-400">Past Paper Circuit Tracing</span>
          </div>

        </div>

        {/* Right Side: Step Tracing & Truth HUD */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Signal Propagation Steps</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                Evaluation Chain
              </span>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-violet-400 font-bold">1. Current Input States:</div>
              <div className="flex gap-2">
                {curCircuit.inputs.map(pin => (
                  <span key={pin} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-white">
                    {pin} = {inputStates[pin]}
                  </span>
                ))}
              </div>

              <div className="text-violet-400 font-bold pt-1">2. Intermediate Node Outputs:</div>
              <div className="space-y-1 text-slate-300">
                {Object.entries(intermediates).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-slate-900 pb-1">
                    <span>Node [{k}]:</span>
                    <strong className="text-cyan-400">{v}</strong>
                  </div>
                ))}
              </div>

              <div className="text-violet-400 font-bold pt-1">3. Final Computed Output:</div>
              <div className="p-3 rounded-xl bg-violet-950/60 border border-violet-500/40 text-center font-bold text-sm text-amber-300">
                Result = {final}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs">
            <strong>Exam Tip:</strong> When evaluating combinational circuits on Paper II, always write down the intermediate Boolean terms right above each gate output wire!
          </div>
        </div>

      </div>
    </div>
  );
}
