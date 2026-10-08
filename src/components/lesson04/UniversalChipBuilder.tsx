'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Award,
  Layers,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type UniversalGateType = 'nand' | 'nor';

interface Level {
  level: 1 | 2 | 3;
  targetEn: string;
  targetSi: string;
  expression: string;
  deMorganProof: string;
  gateCount: number;
}

const NAND_LEVELS: Level[] = [
  {
    level: 1,
    targetEn: 'Build NOT Gate (Inverter)',
    targetSi: 'NAND ආශ්‍රයෙන් NOT ද්වාරය නිර්මාණය',
    expression: "Y = (A · A)' = A'",
    deMorganProof: 'Bridge both input terminals together to form a single-input inverter.',
    gateCount: 1,
  },
  {
    level: 2,
    targetEn: 'Build AND Gate',
    targetSi: 'NAND ආශ්‍රයෙන් AND ද්වාරය නිර්මාණය',
    expression: "Y = ((A · B)')' = A · B",
    deMorganProof: 'Feed the output of a 2-input NAND gate into a NAND-inverter (Double Negation).',
    gateCount: 2,
  },
  {
    level: 3,
    targetEn: "Build OR Gate (De Morgan's Theorem)",
    targetSi: 'ඩීමෝගන් නියමය මගින් OR ද්වාරය නිර්මාණය',
    expression: "Y = (A' · B')' = (A')' + (B')' = A + B",
    deMorganProof: "Invert inputs A and B using two NAND inverters, then pass into a 3rd NAND gate.",
    gateCount: 3,
  }
];

const NOR_LEVELS: Level[] = [
  {
    level: 1,
    targetEn: 'Build NOT Gate (Inverter)',
    targetSi: 'NOR ආශ්‍රයෙන් NOT ද්වාරය නිර්මාණය',
    expression: "Y = (A + A)' = A'",
    deMorganProof: 'Bridge both input terminals of a NOR gate together.',
    gateCount: 1,
  },
  {
    level: 2,
    targetEn: 'Build OR Gate',
    targetSi: 'NOR ආශ්‍රයෙන් OR ද්වාරය නිර්මාණය',
    expression: "Y = ((A + B)')' = A + B",
    deMorganProof: 'Pass NOR output into a NOR-inverter (Double Negation cancels out).',
    gateCount: 2,
  },
  {
    level: 3,
    targetEn: "Build AND Gate (De Morgan's Theorem)",
    targetSi: 'ඩීමෝගන් නියමය මගින් AND ද්වාරය නිර්මාණය',
    expression: "Y = (A' + B')' = (A')' · (B')' = A · B",
    deMorganProof: "Invert inputs A and B individually with two NOR inverters, then feed into a 3rd NOR gate.",
    gateCount: 3,
  }
];

export function UniversalChipBuilder() {
  const [chipFamily, setChipFamily] = useState<UniversalGateType>('nand');
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(0);
  
  // Interactive Live Inputs for Simulation
  const [inputA, setInputA] = useState<0 | 1>(0);
  const [inputB, setInputB] = useState<0 | 1>(0);

  const levels = chipFamily === 'nand' ? NAND_LEVELS : NOR_LEVELS;
  const curLevel = levels[activeLevelIdx];

  // Compute live signals across all stages
  let intermediate1 = 0;
  let intermediate2 = 0;
  let finalOutput = 0;

  if (chipFamily === 'nand') {
    if (curLevel.level === 1) {
      // 1 NAND as inverter: (A . A)'
      finalOutput = inputA === 1 ? 0 : 1;
    } else if (curLevel.level === 2) {
      // 2 NANDs as AND: Gate 1 = (A.B)', Gate 2 inverts it
      intermediate1 = (inputA === 1 && inputB === 1) ? 0 : 1;
      finalOutput = intermediate1 === 0 ? 1 : 0;
    } else {
      // 3 NANDs as OR: Gate 1 = A', Gate 2 = B', Gate 3 = (A'.B')' = A+B
      intermediate1 = inputA === 1 ? 0 : 1;
      intermediate2 = inputB === 1 ? 0 : 1;
      finalOutput = (intermediate1 === 1 && intermediate2 === 1) ? 0 : 1;
    }
  } else {
    // NOR family
    if (curLevel.level === 1) {
      // 1 NOR as inverter: (A + A)'
      finalOutput = inputA === 1 ? 0 : 1;
    } else if (curLevel.level === 2) {
      // 2 NORs as OR: Gate 1 = (A+B)', Gate 2 inverts it
      intermediate1 = (inputA === 1 || inputB === 1) ? 0 : 1;
      finalOutput = intermediate1 === 0 ? 1 : 0;
    } else {
      // 3 NORs as AND: Gate 1 = A', Gate 2 = B', Gate 3 = (A'+B')' = A.B
      intermediate1 = inputA === 1 ? 0 : 1;
      intermediate2 = inputB === 1 ? 0 : 1;
      finalOutput = (intermediate1 === 1 || intermediate2 === 1) ? 0 : 1;
    }
  }

  const handleFamilySwitch = (fam: UniversalGateType) => {
    sound.playClick(600);
    setChipFamily(fam);
    setActiveLevelIdx(0);
  };

  const handleLevelSelect = (idx: number) => {
    sound.playClick(750);
    setActiveLevelIdx(idx);
  };

  return (
    <div className="space-y-6">
      {/* Header & Family Switcher */}
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 3: The Universal Foundry (NAND & NOR Only)</span>
              <span className="text-xs font-sinhala text-emerald-400 font-normal">
                (සර්වත්‍ර ලොජික් ද්වාර)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Prove why NAND and NOR are named &quot;Universal Gates&quot; by constructing NOT, AND & OR using a single gate type.
            </p>
          </div>
        </div>

        {/* Universal Chip Selector */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto">
          <button
            onClick={() => handleFamilySwitch('nand')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              chipFamily === 'nand'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            NAND Universal Foundry
          </button>
          <button
            onClick={() => handleFamilySwitch('nor')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              chipFamily === 'nor'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            NOR Universal Foundry
          </button>
        </div>
      </div>

      {/* Main Grid: Split Sandbox (Left) & De Morgan Proof HUD (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Live Multi-Gate Architecture Sandbox */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[440px]">
          
          {/* Background Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Level Tabs */}
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 flex-wrap gap-2">
            <div className="flex gap-2">
              {levels.map((lvl, idx) => (
                <button
                  key={lvl.level}
                  onClick={() => handleLevelSelect(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    activeLevelIdx === idx
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_#10b981]'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  <span>Level {lvl.level}:</span>
                  <span>{lvl.level === 1 ? 'NOT' : lvl.level === 2 ? (chipFamily === 'nand' ? 'AND' : 'OR') : (chipFamily === 'nand' ? 'OR' : 'AND')}</span>
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-emerald-400">
              Chips: {curLevel.gateCount}x {chipFamily.toUpperCase()}
            </span>
          </div>

          {/* Dynamic SVG Schematic of the Multi-Chip Network */}
          <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 text-center space-y-4 shadow-xl">
              
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">SCHEMATIC: {curLevel.targetEn}</span>
                <span>{curLevel.targetSi}</span>
              </div>

              {/* LEVEL 1: Single Gate Inverter (Inputs bridged together) */}
              {curLevel.level === 1 && (
                <svg viewBox="0 0 320 120" className="w-full max-w-[320px] mx-auto overflow-visible">
                  {/* Single Input A splitting into two pins */}
                  <line x1="20" y1="60" x2="60" y2="60" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="4" />
                  <circle cx="20" cy="60" r="5" fill={inputA === 1 ? "#10b981" : "#475569"} />
                  <text x="5" y="64" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
                  
                  {/* Bridge connection */}
                  <line x1="60" y1="60" x2="60" y2="35" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <line x1="60" y1="60" x2="60" y2="85" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <line x1="60" y1="35" x2="110" y2="35" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <line x1="60" y1="85" x2="110" y2="85" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <circle cx="60" cy="60" r="4" fill="#10b981" />
                  <text x="35" y="48" fill={inputA === 1 ? "#10b981" : "#64748b"} fontSize="11" fontFamily="monospace">
                    {inputA}
                  </text>

                  {/* NAND/NOR Gate with Inversion Bubble */}
                  {chipFamily === 'nand' ? (
                    <path d="M 110 20 L 150 20 A 40 40 0 0 1 150 100 L 110 100 Z" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
                  ) : (
                    <path d="M 100 20 Q 130 60 100 100 Q 160 100 190 60 Q 160 20 100 20 Z" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
                  )}
                  <circle cx={chipFamily === 'nand' ? "196" : "196"} cy="60" r="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
                  <text x="145" y="65" fill="#a7f3d0" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    {chipFamily.toUpperCase()}
                  </text>

                  {/* Output Wire */}
                  <line x1="202" y1="60" x2="280" y2="60" stroke={finalOutput === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="280" cy="60" r="6" fill={finalOutput === 1 ? "#fbbf24" : "#475569"} />
                  <text x="240" y="50" fill={finalOutput === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontFamily="monospace" fontWeight="bold">
                    Y={finalOutput}
                  </text>
                </svg>
              )}

              {/* LEVEL 2: 2 Gates Chained */}
              {curLevel.level === 2 && (
                <svg viewBox="0 0 380 130" className="w-full max-w-[380px] mx-auto overflow-visible">
                  {/* Inputs A and B */}
                  <line x1="10" y1="35" x2="60" y2="35" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <text x="0" y="38" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">A</text>
                  <line x1="10" y1="85" x2="60" y2="85" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="3" />
                  <text x="0" y="88" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">B</text>

                  {/* Gate 1 */}
                  {chipFamily === 'nand' ? (
                    <path d="M 60 20 L 95 20 A 40 40 0 0 1 95 100 L 60 100 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                  ) : (
                    <path d="M 50 20 Q 80 60 50 100 Q 110 100 135 60 Q 110 20 50 20 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                  )}
                  <circle cx={chipFamily === 'nand' ? "141" : "141"} cy="60" r="5" fill="#f43f5e" stroke="#fda4af" strokeWidth="1.5" />
                  <text x="90" y="65" fill="#a7f3d0" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    G1
                  </text>

                  {/* Intermediate Jumper Wire */}
                  <line x1="146" y1="60" x2="190" y2="60" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="3" />
                  <text x="160" y="50" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    N1={intermediate1}
                  </text>

                  {/* Split to Gate 2 inputs */}
                  <line x1="190" y1="60" x2="190" y2="35" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2" />
                  <line x1="190" y1="60" x2="190" y2="85" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2" />
                  <line x1="190" y1="35" x2="220" y2="35" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2" />
                  <line x1="190" y1="85" x2="220" y2="85" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2" />

                  {/* Gate 2 (Inverter) */}
                  {chipFamily === 'nand' ? (
                    <path d="M 220 20 L 255 20 A 40 40 0 0 1 255 100 L 220 100 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                  ) : (
                    <path d="M 210 20 Q 240 60 210 100 Q 270 100 295 60 Q 270 20 210 20 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                  )}
                  <circle cx={chipFamily === 'nand' ? "301" : "301"} cy="60" r="5" fill="#f43f5e" stroke="#fda4af" strokeWidth="1.5" />
                  <text x="250" y="65" fill="#a7f3d0" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    G2
                  </text>

                  {/* Final Output */}
                  <line x1="306" y1="60" x2="360" y2="60" stroke={finalOutput === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="360" cy="60" r="5" fill={finalOutput === 1 ? "#fbbf24" : "#475569"} />
                  <text x="325" y="50" fill={finalOutput === 1 ? "#fbbf24" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
                    Y={finalOutput}
                  </text>
                </svg>
              )}

              {/* LEVEL 3: 3 Gates De Morgan Architecture */}
              {curLevel.level === 3 && (
                <svg viewBox="0 0 420 160" className="w-full max-w-[420px] mx-auto overflow-visible">
                  {/* Gate 1 (Inverting Input A) */}
                  <line x1="10" y1="35" x2="40" y2="35" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="2.5" />
                  <text x="0" y="38" fill="#94a3b8" fontSize="10" fontFamily="monospace">A</text>
                  <line x1="40" y1="35" x2="40" y2="20" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="35" x2="40" y2="50" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="20" x2="60" y2="20" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="50" x2="60" y2="50" stroke={inputA === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <path d="M 60 10 L 85 10 A 25 25 0 0 1 85 60 L 60 60 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                  <circle cx="114" cy="35" r="4" fill="#f43f5e" />
                  <text x="80" y="38" fill="#a7f3d0" fontSize="9" fontFamily="monospace">G1 (A&apos;)</text>

                  {/* Gate 2 (Inverting Input B) */}
                  <line x1="10" y1="125" x2="40" y2="125" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="2.5" />
                  <text x="0" y="128" fill="#94a3b8" fontSize="10" fontFamily="monospace">B</text>
                  <line x1="40" y1="125" x2="40" y2="110" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="125" x2="40" y2="140" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="110" x2="60" y2="110" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <line x1="40" y1="140" x2="60" y2="140" stroke={inputB === 1 ? "#10b981" : "#475569"} strokeWidth="2" />
                  <path d="M 60 100 L 85 100 A 25 25 0 0 1 85 150 L 60 150 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                  <circle cx="114" cy="125" r="4" fill="#f43f5e" />
                  <text x="80" y="128" fill="#a7f3d0" fontSize="9" fontFamily="monospace">G2 (B&apos;)</text>

                  {/* Connecting into Gate 3 */}
                  <line x1="118" y1="35" x2="200" y2="60" stroke={intermediate1 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2.5" />
                  <line x1="118" y1="125" x2="200" y2="100" stroke={intermediate2 === 1 ? "#38bdf8" : "#475569"} strokeWidth="2.5" />

                  {/* Gate 3 */}
                  <path d="M 200 45 L 240 45 A 35 35 0 0 1 240 115 L 200 115 Z" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
                  <circle cx="281" cy="80" r="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
                  <text x="235" y="85" fill="#a7f3d0" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">G3</text>

                  {/* Final Output */}
                  <line x1="287" y1="80" x2="380" y2="80" stroke={finalOutput === 1 ? "#fbbf24" : "#475569"} strokeWidth="4" />
                  <circle cx="380" cy="80" r="6" fill={finalOutput === 1 ? "#fbbf24" : "#475569"} />
                  <text x="330" y="70" fill={finalOutput === 1 ? "#fbbf24" : "#64748b"} fontSize="12" fontFamily="monospace" fontWeight="bold">
                    Y={finalOutput}
                  </text>
                </svg>
              )}

              {/* Input Toggles */}
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    sound.playClick(inputA === 1 ? 400 : 800);
                    setInputA(inputA === 1 ? 0 : 1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    inputA === 1 ? 'bg-emerald-500 text-slate-950 shadow-[0_0_8px_#10b981]' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Input A: {inputA}
                </button>
                {curLevel.level > 1 && (
                  <button
                    onClick={() => {
                      sound.playClick(inputB === 1 ? 400 : 800);
                      setInputB(inputB === 1 ? 0 : 1);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      inputB === 1 ? 'bg-emerald-500 text-slate-950 shadow-[0_0_8px_#10b981]' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    Input B: {inputB}
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Canvas Bottom Strip */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Resulting Function: <strong>{curLevel.expression}</strong></span>
            <span className="text-emerald-400">Universal Logic Theorem</span>
          </div>

        </div>

        {/* Right Side: De Morgan Proof HUD & Step Breakdown */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>De Morgan & Boolean Proof</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Mathematical Rigor
              </span>
            </div>

            {/* Algebraic Expansion Step Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 font-mono">
              <div className="text-xs text-emerald-400 font-bold">
                Target Logic Function:
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 text-amber-300 text-xs font-bold border border-slate-800 text-center">
                {curLevel.expression}
              </div>

              <div className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                <strong>Why this works:</strong>
                <p className="text-xs text-slate-400 mt-1">
                  {curLevel.deMorganProof}
                </p>
              </div>
            </div>

            {/* De Morgan Reference Rules */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>De Morgan&apos;s Laws (ඩීමෝගන් නියම):</span>
              </div>
              <ul className="text-xs font-mono text-slate-400 space-y-1.5 list-disc list-inside">
                <li><span className="text-white">(A · B)&apos; = A&apos; + B&apos;</span> (NAND Law)</li>
                <li><span className="text-white">(A + B)&apos; = A&apos; · B&apos;</span> (NOR Law)</li>
                <li><span className="text-white">(A&apos;)&apos; = A</span> (Double Negation)</li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-2.5">
            <Award className="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold">Syllabus Benchmark:</p>
              <p className="text-slate-400 text-[11px]">
                Universal gates reduce manufacturing costs because a chip fab only needs to manufacture 1 single type of gate to construct an entire modern microprocessor!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
