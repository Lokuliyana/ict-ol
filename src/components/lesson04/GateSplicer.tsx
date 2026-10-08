'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitMerge, 
  Flame, 
  ToggleLeft, 
  ToggleRight, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type DerivedGate = 'nand' | 'nor' | 'xor' | 'xnor';

export function GateSplicer() {
  const [activeTab, setActiveTab] = useState<'welder' | 'staircase'>('welder');
  const [selectedGate, setSelectedGate] = useState<DerivedGate>('nand');
  const [welded, setWelded] = useState<boolean>(false);
  
  // Welder test inputs
  const [inA, setInA] = useState<0 | 1>(0);
  const [inB, setInB] = useState<0 | 1>(0);

  // Staircase switches for XOR / XNOR
  const [switchBottom, setSwitchBottom] = useState<boolean>(false);
  const [switchTop, setSwitchTop] = useState<boolean>(false);
  const [staircaseMode, setStaircaseMode] = useState<'xor' | 'xnor'>('xor');

  // Compute Welder output
  const computeGateOutput = (type: DerivedGate, a: 0 | 1, b: 0 | 1): 0 | 1 => {
    switch (type) {
      case 'nand':
        return a === 1 && b === 1 ? 0 : 1;
      case 'nor':
        return a === 0 && b === 0 ? 1 : 0;
      case 'xor':
        return a !== b ? 1 : 0;
      case 'xnor':
        return a === b ? 1 : 0;
    }
  };

  const welderOut = computeGateOutput(selectedGate, inA, inB);
  
  // Staircase light logic
  // XOR: different positions = ON
  // XNOR: same positions = ON
  const isStaircaseLightOn = staircaseMode === 'xor' 
    ? switchBottom !== switchTop 
    : switchBottom === switchTop;

  const handleGateSelect = (gate: DerivedGate) => {
    sound.playClick(650);
    setSelectedGate(gate);
    setWelded(false);
  };

  const handleWeld = () => {
    sound.playVictory();
    setWelded(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Sub-view Switcher */}
      <div className="bg-slate-900/90 border border-fuchsia-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
            <GitMerge className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 2: The Inversion Clan (NAND, NOR, XOR, XNOR)</span>
              <span className="text-xs font-sinhala text-fuchsia-400 font-normal">
                (ව්‍යුත්පන්න ලොජික් ද්වාර)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Splice basic gates with inversion bubbles and discover how two-way staircase switches embody XOR / XNOR logic.
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto">
          <button
            onClick={() => {
              sound.playClick(550);
              setActiveTab('welder');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'welder'
                ? 'bg-fuchsia-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bubble Welder
          </button>
          <button
            onClick={() => {
              sound.playClick(550);
              setActiveTab('staircase');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'staircase'
                ? 'bg-fuchsia-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Staircase Switch (XOR)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'welder' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Interactive Gate Splicing Canvas */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[440px]">
            
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #d946ef 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Gate Palette Selector */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 flex-wrap gap-2">
              <span className="text-xs font-mono text-fuchsia-400 font-bold">
                SELECT TARGET DERIVED GATE:
              </span>

              <div className="flex gap-1.5">
                {(['nand', 'nor', 'xor', 'xnor'] as DerivedGate[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => handleGateSelect(g)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      selectedGate === g
                        ? 'bg-fuchsia-500 text-slate-950 shadow-[0_0_12px_#d946ef]'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Splicer / Welder Graphic */}
            <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center space-y-6">
              
              <div className="w-full max-w-md bg-slate-900/90 border border-fuchsia-500/20 rounded-2xl p-6 text-center space-y-4 shadow-xl">
                
                {!welded ? (
                  /* Splicing View: Basic Gate + Separate Inverter Bubble */
                  <div className="space-y-4">
                    <p className="text-xs font-mono text-slate-400">
                      Step 1: Fuse the basic building block with the negation element.
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      {/* Base Gate Box */}
                      <div className="p-4 rounded-xl bg-slate-950 border-2 border-indigo-500/40 text-indigo-300 font-mono text-sm font-bold flex flex-col items-center shadow-lg">
                        <span>{selectedGate === 'nand' ? 'AND Gate' : selectedGate === 'nor' ? 'OR Gate' : 'XOR Core'}</span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          {selectedGate === 'nand' ? 'Y = A · B' : selectedGate === 'nor' ? 'Y = A + B' : 'A ⊕ B'}
                        </span>
                      </div>

                      <span className="text-xl font-bold text-fuchsia-400">+</span>

                      {/* Negation Bubble Box */}
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="p-4 rounded-xl bg-rose-500/20 border-2 border-rose-500/60 text-rose-300 font-mono text-sm font-bold flex flex-col items-center shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                      >
                        <span>NOT Bubble</span>
                        <span className="text-[10px] text-rose-400 font-normal">Inversion Circle (o)</span>
                      </motion.div>
                    </div>

                    <button
                      onClick={handleWeld}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 hover:from-fuchsia-500 hover:to-rose-500 text-white font-mono text-xs font-bold shadow-lg shadow-fuchsia-600/30 flex items-center gap-2 mx-auto"
                    >
                      <Flame className="w-4 h-4" />
                      <span>Electric Weld into {selectedGate.toUpperCase()} Gate</span>
                    </button>
                  </div>
                ) : (
                  /* Welded Gate Schematic with Live Interactive Signals */
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> WELDED {selectedGate.toUpperCase()} GATE
                      </span>
                      <button
                        onClick={() => setWelded(false)}
                        className="text-[11px] text-slate-400 hover:text-white underline"
                      >
                        Re-splice
                      </button>
                    </div>

                    {/* SVG Diagram for Welded Gate */}
                    <svg viewBox="0 0 280 140" className="w-full max-w-[280px] mx-auto overflow-visible">
                      {/* Input Wire A */}
                      <line x1="20" y1="40" x2="100" y2="40" stroke={inA === 1 ? "#d946ef" : "#475569"} strokeWidth="4" />
                      <circle cx="20" cy="40" r="5" fill={inA === 1 ? "#d946ef" : "#475569"} />
                      <text x="5" y="44" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
                      <text x="55" y="32" fill={inA === 1 ? "#d946ef" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {inA}
                      </text>

                      {/* Input Wire B */}
                      <line x1="20" y1="100" x2="100" y2="100" stroke={inB === 1 ? "#d946ef" : "#475569"} strokeWidth="4" />
                      <circle cx="20" cy="100" r="5" fill={inB === 1 ? "#d946ef" : "#475569"} />
                      <text x="5" y="104" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">B</text>
                      <text x="55" y="92" fill={inB === 1 ? "#d946ef" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {inB}
                      </text>

                      {/* Gate Shape based on Type */}
                      {selectedGate === 'nand' && (
                        <>
                          <path d="M 100 20 L 140 20 A 50 50 0 0 1 140 120 L 100 120 Z" fill="#0f172a" stroke="#d946ef" strokeWidth="3" />
                          <circle cx="196" cy="70" r="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
                          <text x="135" y="75" fill="#f5d0fe" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">NAND</text>
                        </>
                      )}

                      {selectedGate === 'nor' && (
                        <>
                          <path d="M 90 20 Q 120 70 90 120 Q 150 120 190 70 Q 150 20 90 20 Z" fill="#0f172a" stroke="#d946ef" strokeWidth="3" />
                          <circle cx="196" cy="70" r="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
                          <text x="135" y="75" fill="#f5d0fe" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">NOR</text>
                        </>
                      )}

                      {selectedGate === 'xor' && (
                        <>
                          <path d="M 80 20 Q 110 70 80 120" fill="none" stroke="#d946ef" strokeWidth="3" />
                          <path d="M 90 20 Q 120 70 90 120 Q 150 120 190 70 Q 150 20 90 20 Z" fill="#0f172a" stroke="#d946ef" strokeWidth="3" />
                          <text x="135" y="75" fill="#f5d0fe" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">XOR</text>
                        </>
                      )}

                      {selectedGate === 'xnor' && (
                        <>
                          <path d="M 80 20 Q 110 70 80 120" fill="none" stroke="#d946ef" strokeWidth="3" />
                          <path d="M 90 20 Q 120 70 90 120 Q 150 120 190 70 Q 150 20 90 20 Z" fill="#0f172a" stroke="#d946ef" strokeWidth="3" />
                          <circle cx="196" cy="70" r="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
                          <text x="135" y="75" fill="#f5d0fe" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">XNOR</text>
                        </>
                      )}

                      {/* Output Wire */}
                      <line 
                        x1={selectedGate === 'xor' ? "190" : "202"} 
                        y1="70" 
                        x2="260" 
                        y2="70" 
                        stroke={welderOut === 1 ? "#fbbf24" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="260" cy="70" r="6" fill={welderOut === 1 ? "#fbbf24" : "#475569"} />
                      <text x="220" y="60" fill={welderOut === 1 ? "#fbbf24" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
                        Y={welderOut}
                      </text>
                    </svg>

                    {/* Input Signal Toggles */}
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          sound.playClick(inA === 1 ? 400 : 800);
                          setInA(inA === 1 ? 0 : 1);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                          inA === 1 ? 'bg-fuchsia-500 text-slate-950 shadow-[0_0_8px_#d946ef]' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        Input A: {inA}
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick(inB === 1 ? 400 : 800);
                          setInB(inB === 1 ? 0 : 1);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                          inB === 1 ? 'bg-fuchsia-500 text-slate-950 shadow-[0_0_8px_#d946ef]' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        Input B: {inB}
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>

            </div>

            {/* Bottom Status */}
            <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Equation: <strong>
                {selectedGate === 'nand' && "Y = (A · B)'"}
                {selectedGate === 'nor' && "Y = (A + B)'"}
                {selectedGate === 'xor' && "Y = A ⊕ B = A'B + AB'"}
                {selectedGate === 'xnor' && "Y = (A ⊕ B)' = AB + A'B'"}
              </strong></span>
              <span className="text-fuchsia-400">O/L §4.3 Inversion Clan</span>
            </div>

          </div>

          {/* Right: Truth Table HUD for Derived Gate */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  <span>{selectedGate.toUpperCase()} Truth Table</span>
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                  4-State Logic Matrix
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <table className="w-full text-xs font-mono text-left">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5 text-center">A</th>
                      <th className="p-2.5 text-center">B</th>
                      <th className="p-2.5 text-center text-fuchsia-400 font-bold">
                        Output Y
                      </th>
                      <th className="p-2.5 text-center">State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                    {[
                      { a: 0, b: 0 },
                      { a: 0, b: 1 },
                      { a: 1, b: 0 },
                      { a: 1, b: 1 },
                    ].map((row, idx) => {
                      const rowOut = computeGateOutput(selectedGate, row.a as 0|1, row.b as 0|1);
                      const isCurrent = inA === row.a && inB === row.b && welded;
                      return (
                        <tr 
                          key={idx}
                          className={`transition-colors ${
                            isCurrent 
                              ? 'bg-fuchsia-500/20 text-white font-bold' 
                              : 'text-slate-400 hover:bg-slate-800/40'
                          }`}
                        >
                          <td className="p-2.5 text-center">{row.a}</td>
                          <td className="p-2.5 text-center">{row.b}</td>
                          <td className={`p-2.5 text-center font-bold ${rowOut === 1 ? 'text-amber-400' : 'text-slate-500'}`}>
                            {rowOut}
                          </td>
                          <td className="p-2.5 text-center text-[10px]">
                            {isCurrent ? <span className="px-1.5 py-0.5 rounded bg-fuchsia-400 text-slate-950 font-bold">ACTIVE</span> : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Formula & Textbook Definition Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300">
                  Curriculum Definition:
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedGate === 'nand' && (
                    <><strong>NAND Gate:</strong> Gives a LOW (0) output <em>only when ALL inputs are 1</em>. For all other combinations, output is 1.</>
                  )}
                  {selectedGate === 'nor' && (
                    <><strong>NOR Gate:</strong> Gives a HIGH (1) output <em>only when ALL inputs are 0</em>. If any input is 1, output falls to 0.</>
                  )}
                  {selectedGate === 'xor' && (
                    <><strong>XOR Gate (Exclusive-OR):</strong> Outputs 1 <em>only when inputs are DIFFERENT</em> from each other (e.g., 0,1 or 1,0).</>
                  )}
                  {selectedGate === 'xnor' && (
                    <><strong>XNOR Gate (Equivalence):</strong> Outputs 1 <em>only when inputs are IDENTICAL</em> (0,0 or 1,1).</>
                  )}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs">
              <strong>Past Paper Insight:</strong> 2020 O/L P1 Q34 directly tested NOR truth table identification: $[1, 0, 0, 0]$.
            </div>
          </div>

        </div>
      ) : (
        /* Staircase Two-Way Switch Simulator (XOR & XNOR) */
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>The Hallway Staircase Switch Puzzle</span>
                <span className="text-xs font-sinhala text-fuchsia-400 font-normal">
                  (පඩිපෙළ දෙපස ස්විච ආශ්‍රයෙන් XOR ක්‍රියාකාරිත්වය)
                </span>
              </h4>
              <p className="text-xs text-slate-400">
                A hallway lamp controlled from both bottom and top of the staircase physically demonstrates Exclusive-OR (XOR).
              </p>
            </div>

            {/* Mode Switch: XOR vs XNOR */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start sm:self-auto">
              <button
                onClick={() => {
                  sound.playClick(600);
                  setStaircaseMode('xor');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  staircaseMode === 'xor' ? 'bg-fuchsia-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                XOR Mode (Diff = ON)
              </button>
              <button
                onClick={() => {
                  sound.playClick(600);
                  setStaircaseMode('xnor');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  staircaseMode === 'xnor' ? 'bg-fuchsia-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                XNOR Mode (Same = ON)
              </button>
            </div>
          </div>

          {/* Interactive Staircase Graphic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Bottom Switch (Switch A) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
              <div className="text-xs font-mono text-slate-400">
                STAIRCASE BASE (Switch A)
              </div>
              
              <button
                onClick={() => {
                  sound.playClick(switchBottom ? 400 : 750);
                  setSwitchBottom(!switchBottom);
                }}
                className={`w-full py-4 rounded-xl border font-mono text-sm font-bold transition-all flex flex-col items-center gap-2 ${
                  switchBottom 
                    ? 'bg-fuchsia-500 text-slate-950 border-fuchsia-300 shadow-[0_0_15px_#d946ef]' 
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {switchBottom ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                <span>Switch A: {switchBottom ? 'FLIPPED UP (1)' : 'FLIPPED DOWN (0)'}</span>
              </button>
            </div>

            {/* Center Hallway Lamp */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-fuchsia-500/20 rounded-2xl text-center space-y-3">
              <motion.div
                animate={{
                  scale: isStaircaseLightOn ? [1, 1.15, 1] : 1,
                  boxShadow: isStaircaseLightOn ? '0 0 35px rgba(251, 191, 36, 0.9)' : '0 0 0px transparent'
                }}
                transition={{ repeat: isStaircaseLightOn ? Infinity : 0, duration: 1.5 }}
                className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${
                  isStaircaseLightOn 
                    ? 'bg-amber-400 text-slate-950 border-2 border-amber-200' 
                    : 'bg-slate-800 text-slate-600 border border-slate-700'
                }`}
              >
                <Lightbulb className="w-9 h-9" />
              </motion.div>

              <div className="font-mono text-xs font-bold text-white">
                Stairway Lamp: {isStaircaseLightOn ? <span className="text-amber-400">GLOWING (1)</span> : <span className="text-slate-500">OFF (0)</span>}
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                {staircaseMode === 'xor' 
                  ? (switchBottom !== switchTop ? '✓ Inputs Differ ➔ Light Active' : '✗ Inputs Identical ➔ Light Inactive')
                  : (switchBottom === switchTop ? '✓ Inputs Identical ➔ Light Active' : '✗ Inputs Differ ➔ Light Inactive')
                }
              </div>
            </div>

            {/* Top Switch (Switch B) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
              <div className="text-xs font-mono text-slate-400">
                STAIRCASE TOP (Switch B)
              </div>
              
              <button
                onClick={() => {
                  sound.playClick(switchTop ? 400 : 750);
                  setSwitchTop(!switchTop);
                }}
                className={`w-full py-4 rounded-xl border font-mono text-sm font-bold transition-all flex flex-col items-center gap-2 ${
                  switchTop 
                    ? 'bg-fuchsia-500 text-slate-950 border-fuchsia-300 shadow-[0_0_15px_#d946ef]' 
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {switchTop ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                <span>Switch B: {switchTop ? 'FLIPPED UP (1)' : 'FLIPPED DOWN (0)'}</span>
              </button>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-mono flex items-center justify-between">
            <span>Formula: <strong>A={switchBottom ? 1 : 0}</strong>, <strong>B={switchTop ? 1 : 0}</strong> ➔ <strong>Y = {isStaircaseLightOn ? 1 : 0}</strong></span>
            <span className="text-slate-400">O/L Past Paper 2025 Paper II Q01(iv) XOR Model</span>
          </div>

        </div>
      )}
    </div>
  );
}
