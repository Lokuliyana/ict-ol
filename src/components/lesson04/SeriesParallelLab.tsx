'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Lightbulb, 
  Power, 
  Sparkles, 
  CheckCircle2, 
  Cpu,
  Layers
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type LabMode = 'series' | 'parallel' | 'not_inverter';

export function SeriesParallelLab() {
  const [mode, setMode] = useState<LabMode>('series');
  const [switchA, setSwitchA] = useState<boolean>(false);
  const [switchB, setSwitchB] = useState<boolean>(false);
  const [inputSignal, setInputSignal] = useState<0 | 1>(0);
  const [isGateView, setIsGateView] = useState<boolean>(false);

  // Computed Outputs
  const isSeriesOn = switchA && switchB;
  const isParallelOn = switchA || switchB;
  const notOutput = inputSignal === 1 ? 0 : 1;

  const handleToggleSwitchA = () => {
    sound.playClick(switchA ? 380 : 750);
    setSwitchA(!switchA);
  };

  const handleToggleSwitchB = () => {
    sound.playClick(switchB ? 380 : 750);
    setSwitchB(!switchB);
  };

  const handleToggleSignal = () => {
    const nextSig = inputSignal === 1 ? 0 : 1;
    sound.playClick(nextSig === 1 ? 820 : 400);
    setInputSignal(nextSig);
  };

  const handleModeChange = (newMode: LabMode) => {
    sound.playClick(600);
    setMode(newMode);
    setSwitchA(false);
    setSwitchB(false);
    setIsGateView(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Mode Switcher */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 1: The Switch & Bulb Circuit Lab</span>
              <span className="text-xs font-sinhala text-cyan-400 font-normal">
                (ස්විච පරිපථ සහ මූලික ලොජික් ද්වාර)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Discover how mechanical series & parallel switches form the physical foundation of AND, OR & NOT gates.
            </p>
          </div>
        </div>

        {/* Mode Buttons */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto">
          <button
            onClick={() => handleModeChange('series')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'series'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Series (AND)
          </button>
          <button
            onClick={() => handleModeChange('parallel')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'parallel'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Parallel (OR)
          </button>
          <button
            onClick={() => handleModeChange('not_inverter')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'not_inverter'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Inverter (NOT)
          </button>
        </div>
      </div>

      {/* Main Interactive Work Area: Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Interactive Circuit / Gate Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[420px]">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Canvas Top Bar */}
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>
                {mode === 'series' ? 'CIRCUIT: SERIES SWITCHES' : mode === 'parallel' ? 'CIRCUIT: PARALLEL SWITCHES' : 'INVERTER BUBBLE RIG'}
              </span>
            </div>

            {mode !== 'not_inverter' && (
              <button
                onClick={() => {
                  sound.playClick(900);
                  setIsGateView(!isGateView);
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isGateView ? 'Show Physical Switches' : 'Morph to Logic Gate'}</span>
              </button>
            )}
          </div>

          {/* Interactive Simulation Graphic */}
          <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
            
            {/* MODE 1: SERIES CIRCUIT (AND GATE) */}
            {mode === 'series' && (
              <div className="w-full max-w-md space-y-6">
                {!isGateView ? (
                  /* Physical Switch Schematic */
                  <div className="relative bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6 shadow-inner">
                    {/* Circuit Wire Line */}
                    <div className="relative flex items-center justify-between">
                      {/* Power Source (Battery) */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold text-amber-300">
                          +5V
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 font-mono">DC Supply</span>
                      </div>

                      {/* Connecting Wire to Switch A */}
                      <div className="flex-1 h-1.5 bg-cyan-500/80 shadow-[0_0_8px_#06b6d4]" />

                      {/* Switch A */}
                      <button
                        onClick={handleToggleSwitchA}
                        className={`px-3 py-2 rounded-xl border font-mono text-xs font-bold transition-all flex flex-col items-center ${
                          switchA 
                            ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_15px_#06b6d4]' 
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <Power className="w-4 h-4 mb-1" />
                        <span>Switch A</span>
                        <span className="text-[10px]">{switchA ? 'CLOSED (1)' : 'OPEN (0)'}</span>
                      </button>

                      {/* Connecting Wire between A and B */}
                      <div className={`flex-1 h-1.5 transition-all duration-300 ${
                        switchA ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]' : 'bg-slate-700'
                      }`} />

                      {/* Switch B */}
                      <button
                        onClick={handleToggleSwitchB}
                        className={`px-3 py-2 rounded-xl border font-mono text-xs font-bold transition-all flex flex-col items-center ${
                          switchB 
                            ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_15px_#06b6d4]' 
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <Power className="w-4 h-4 mb-1" />
                        <span>Switch B</span>
                        <span className="text-[10px]">{switchB ? 'CLOSED (1)' : 'OPEN (0)'}</span>
                      </button>

                      {/* Connecting Wire to Bulb */}
                      <div className={`flex-1 h-1.5 transition-all duration-300 ${
                        isSeriesOn ? 'bg-amber-400 shadow-[0_0_12px_#fbbf24]' : 'bg-slate-700'
                      }`} />

                      {/* Filament Lightbulb Output */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{
                            scale: isSeriesOn ? [1, 1.1, 1] : 1,
                            boxShadow: isSeriesOn ? '0 0 30px rgba(251, 191, 36, 0.8)' : '0 0 0px transparent'
                          }}
                          transition={{ repeat: isSeriesOn ? Infinity : 0, duration: 1.5 }}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                            isSeriesOn 
                              ? 'bg-amber-400 text-slate-950 border-2 border-amber-200' 
                              : 'bg-slate-800 text-slate-500 border border-slate-700'
                          }`}
                        >
                          <Lightbulb className="w-7 h-7" />
                        </motion.div>
                        <span className="text-[10px] font-mono font-bold mt-1 text-slate-300">
                          Bulb: {isSeriesOn ? 'ON (1)' : 'OFF (0)'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-center text-slate-400 mt-4 font-mono">
                      Current requires continuous path: {switchA ? 'A=1' : 'A=0'} ∧ {switchB ? 'B=1' : 'B=0'} ➔ Output = {isSeriesOn ? '1' : '0'}
                    </p>
                  </div>
                ) : (
                  /* Morphed ANSI AND Gate Symbol */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 text-center space-y-4 shadow-xl"
                  >
                    <svg viewBox="0 0 280 140" className="w-full max-w-[280px] mx-auto overflow-visible">
                      {/* Input Wire A */}
                      <line 
                        x1="20" y1="40" x2="100" y2="40" 
                        stroke={switchA ? "#06b6d4" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="20" cy="40" r="5" fill={switchA ? "#06b6d4" : "#475569"} />
                      <text x="5" y="44" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
                      <text x="55" y="32" fill={switchA ? "#06b6d4" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {switchA ? '1' : '0'}
                      </text>

                      {/* Input Wire B */}
                      <line 
                        x1="20" y1="100" x2="100" y2="100" 
                        stroke={switchB ? "#06b6d4" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="20" cy="100" r="5" fill={switchB ? "#06b6d4" : "#475569"} />
                      <text x="5" y="104" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">B</text>
                      <text x="55" y="92" fill={switchB ? "#06b6d4" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {switchB ? '1' : '0'}
                      </text>

                      {/* Standard ANSI D-shaped AND Gate */}
                      <path 
                        d="M 100 20 L 140 20 A 50 50 0 0 1 140 120 L 100 120 Z" 
                        fill="#0f172a" 
                        stroke="#06b6d4" 
                        strokeWidth="3" 
                      />
                      <text x="125" y="75" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        AND (·)
                      </text>

                      {/* Output Wire */}
                      <line 
                        x1="190" y1="70" x2="260" y2="70" 
                        stroke={isSeriesOn ? "#fbbf24" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="260" cy="70" r="6" fill={isSeriesOn ? "#fbbf24" : "#475569"} />
                      <text x="220" y="60" fill={isSeriesOn ? "#fbbf24" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
                        Y={isSeriesOn ? '1' : '0'}
                      </text>
                    </svg>

                    <div className="flex justify-center gap-3">
                      <button
                        onClick={handleToggleSwitchA}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          switchA ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Toggle A ({switchA ? '1' : '0'})
                      </button>
                      <button
                        onClick={handleToggleSwitchB}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          switchB ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Toggle B ({switchB ? '1' : '0'})
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* MODE 2: PARALLEL CIRCUIT (OR GATE) */}
            {mode === 'parallel' && (
              <div className="w-full max-w-md space-y-6">
                {!isGateView ? (
                  /* Physical Parallel Switch Schematic */
                  <div className="relative bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-5 shadow-inner">
                    <div className="relative flex items-center justify-between">
                      {/* Power Source */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold text-amber-300">
                          +5V
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 font-mono">DC Supply</span>
                      </div>

                      {/* Split Rails with Switch A and Switch B in parallel */}
                      <div className="flex-1 px-4 space-y-4">
                        {/* Upper Rung: Switch A */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-1 bg-cyan-500 shadow-[0_0_6px_#06b6d4]" />
                          <button
                            onClick={handleToggleSwitchA}
                            className={`flex-1 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              switchA 
                                ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_12px_#06b6d4]' 
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            <Power className="w-3.5 h-3.5" />
                            <span>Switch A: {switchA ? '1 (CLOSED)' : '0 (OPEN)'}</span>
                          </button>
                          <div className={`w-6 h-1 transition-all ${
                            switchA ? 'bg-amber-400 shadow-[0_0_6px_#fbbf24]' : 'bg-slate-700'
                          }`} />
                        </div>

                        {/* Lower Rung: Switch B */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-1 bg-cyan-500 shadow-[0_0_6px_#06b6d4]" />
                          <button
                            onClick={handleToggleSwitchB}
                            className={`flex-1 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              switchB 
                                ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_12px_#06b6d4]' 
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            <Power className="w-3.5 h-3.5" />
                            <span>Switch B: {switchB ? '1 (CLOSED)' : '0 (OPEN)'}</span>
                          </button>
                          <div className={`w-6 h-1 transition-all ${
                            switchB ? 'bg-amber-400 shadow-[0_0_6px_#fbbf24]' : 'bg-slate-700'
                          }`} />
                        </div>
                      </div>

                      {/* Filament Lightbulb Output */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{
                            scale: isParallelOn ? [1, 1.1, 1] : 1,
                            boxShadow: isParallelOn ? '0 0 30px rgba(251, 191, 36, 0.8)' : '0 0 0px transparent'
                          }}
                          transition={{ repeat: isParallelOn ? Infinity : 0, duration: 1.5 }}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                            isParallelOn 
                              ? 'bg-amber-400 text-slate-950 border-2 border-amber-200' 
                              : 'bg-slate-800 text-slate-500 border border-slate-700'
                          }`}
                        >
                          <Lightbulb className="w-7 h-7" />
                        </motion.div>
                        <span className="text-[10px] font-mono font-bold mt-1 text-slate-300">
                          Bulb: {isParallelOn ? 'ON (1)' : 'OFF (0)'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-center text-slate-400 mt-4 font-mono">
                      Either branch provides current: {switchA ? 'A=1' : 'A=0'} ∨ {switchB ? 'B=1' : 'B=0'} ➔ Output = {isParallelOn ? '1' : '0'}
                    </p>
                  </div>
                ) : (
                  /* Morphed ANSI OR Gate Symbol */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 text-center space-y-4 shadow-xl"
                  >
                    <svg viewBox="0 0 280 140" className="w-full max-w-[280px] mx-auto overflow-visible">
                      {/* Input Wire A */}
                      <line 
                        x1="20" y1="40" x2="105" y2="40" 
                        stroke={switchA ? "#06b6d4" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="20" cy="40" r="5" fill={switchA ? "#06b6d4" : "#475569"} />
                      <text x="5" y="44" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
                      <text x="55" y="32" fill={switchA ? "#06b6d4" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {switchA ? '1' : '0'}
                      </text>

                      {/* Input Wire B */}
                      <line 
                        x1="20" y1="100" x2="105" y2="100" 
                        stroke={switchB ? "#06b6d4" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="20" cy="100" r="5" fill={switchB ? "#06b6d4" : "#475569"} />
                      <text x="5" y="104" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">B</text>
                      <text x="55" y="92" fill={switchB ? "#06b6d4" : "#64748b"} fontSize="11" fontFamily="monospace">
                        {switchB ? '1' : '0'}
                      </text>

                      {/* Curved ANSI OR Gate */}
                      <path 
                        d="M 90 20 Q 120 70 90 120 Q 150 120 190 70 Q 150 20 90 20 Z" 
                        fill="#0f172a" 
                        stroke="#06b6d4" 
                        strokeWidth="3" 
                      />
                      <text x="135" y="75" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        OR (+)
                      </text>

                      {/* Output Wire */}
                      <line 
                        x1="190" y1="70" x2="260" y2="70" 
                        stroke={isParallelOn ? "#fbbf24" : "#475569"} 
                        strokeWidth="4" 
                      />
                      <circle cx="260" cy="70" r="6" fill={isParallelOn ? "#fbbf24" : "#475569"} />
                      <text x="220" y="60" fill={isParallelOn ? "#fbbf24" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
                        Y={isParallelOn ? '1' : '0'}
                      </text>
                    </svg>

                    <div className="flex justify-center gap-3">
                      <button
                        onClick={handleToggleSwitchA}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          switchA ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Toggle A ({switchA ? '1' : '0'})
                      </button>
                      <button
                        onClick={handleToggleSwitchB}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          switchB ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Toggle B ({switchB ? '1' : '0'})
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* MODE 3: NOT INVERTER BUBBLE RIG */}
            {mode === 'not_inverter' && (
              <div className="w-full max-w-md space-y-6">
                <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 text-center space-y-4 shadow-xl">
                  <svg viewBox="0 0 280 140" className="w-full max-w-[280px] mx-auto overflow-visible">
                    {/* Input Wire */}
                    <line 
                      x1="20" y1="70" x2="90" y2="70" 
                      stroke={inputSignal === 1 ? "#06b6d4" : "#475569"} 
                      strokeWidth="4" 
                    />
                    <circle cx="20" cy="70" r="5" fill={inputSignal === 1 ? "#06b6d4" : "#475569"} />
                    <text x="5" y="74" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
                    <text x="50" y="60" fill={inputSignal === 1 ? "#06b6d4" : "#64748b"} fontSize="12" fontFamily="monospace" fontWeight="bold">
                      {inputSignal === 1 ? '1 (5V)' : '0 (0V)'}
                    </text>

                    {/* Triangle Buffer */}
                    <polygon 
                      points="90,30 90,110 170,70" 
                      fill="#0f172a" 
                      stroke="#06b6d4" 
                      strokeWidth="3" 
                    />
                    <text x="120" y="75" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      NOT
                    </text>

                    {/* Inversion Bubble (Circle) */}
                    <circle 
                      cx="180" 
                      cy="70" 
                      r="10" 
                      fill="#f43f5e" 
                      stroke="#fda4af" 
                      strokeWidth="2" 
                      className="cursor-pointer hover:scale-125 transition-transform"
                    />
                    <text x="180" y="73" fill="white" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      ~
                    </text>

                    {/* Output Wire */}
                    <line 
                      x1="190" y1="70" x2="260" y2="70" 
                      stroke={notOutput === 1 ? "#fbbf24" : "#475569"} 
                      strokeWidth="4" 
                    />
                    <circle cx="260" cy="70" r="6" fill={notOutput === 1 ? "#fbbf24" : "#475569"} />
                    <text x="220" y="60" fill={notOutput === 1 ? "#fbbf24" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
                      Y={notOutput}
                    </text>
                  </svg>

                  {/* Input Toggle & Bubble Notice */}
                  <div className="space-y-3">
                    <button
                      onClick={handleToggleSignal}
                      className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-lg ${
                        inputSignal === 1
                          ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      Inject Input A = {inputSignal} ({inputSignal === 1 ? 'HIGH 5V' : 'LOW 0V'})
                    </button>
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                      💡 <strong>Inversion Bubble Rule:</strong> The circle at the apex flips 1 to 0 and 0 to 1.
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Canvas Bottom Live Status Strip */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Logic Level: <strong>{mode === 'series' ? (isSeriesOn ? 'HIGH (1)' : 'LOW (0)') : mode === 'parallel' ? (isParallelOn ? 'HIGH (1)' : 'LOW (0)') : (notOutput ? 'HIGH (1)' : 'LOW (0)')}</strong></span>
            </span>
            <span className="text-cyan-400">Sri Lankan O/L Syllabus §4.2</span>
          </div>
        </div>

        {/* Right Side: Live Truth Table & Boolean Inspector HUD (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Dynamic Truth Table HUD</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Live State Tracking
              </span>
            </div>

            {/* Truth Table */}
            {mode === 'not_inverter' ? (
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <table className="w-full text-xs font-mono text-left">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-3 text-center">Input A</th>
                      <th className="p-3 text-center text-cyan-400">Output Y = A&apos; (NOT A)</th>
                      <th className="p-3 text-center">Active Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                    <tr className={inputSignal === 0 ? 'bg-cyan-500/20 text-white font-bold' : 'text-slate-400'}>
                      <td className="p-3 text-center">0</td>
                      <td className="p-3 text-center text-amber-400 font-bold">1</td>
                      <td className="p-3 text-center">{inputSignal === 0 ? '◀ CURRENT STATE' : '—'}</td>
                    </tr>
                    <tr className={inputSignal === 1 ? 'bg-cyan-500/20 text-white font-bold' : 'text-slate-400'}>
                      <td className="p-3 text-center">1</td>
                      <td className="p-3 text-center text-slate-400 font-bold">0</td>
                      <td className="p-3 text-center">{inputSignal === 1 ? '◀ CURRENT STATE' : '—'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <table className="w-full text-xs font-mono text-left">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5 text-center">A</th>
                      <th className="p-2.5 text-center">B</th>
                      <th className="p-2.5 text-center text-cyan-400">
                        {mode === 'series' ? 'Y = A · B' : 'Y = A + B'}
                      </th>
                      <th className="p-2.5 text-center">Active</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                    {[
                      { a: false, b: false },
                      { a: false, b: true },
                      { a: true, b: false },
                      { a: true, b: true },
                    ].map((row, idx) => {
                      const rowOutput = mode === 'series' ? (row.a && row.b ? 1 : 0) : (row.a || row.b ? 1 : 0);
                      const isCurrent = switchA === row.a && switchB === row.b;
                      return (
                        <tr 
                          key={idx}
                          className={`transition-colors ${
                            isCurrent 
                              ? 'bg-cyan-500/20 text-white font-bold' 
                              : 'text-slate-400 hover:bg-slate-800/40'
                          }`}
                        >
                          <td className="p-2.5 text-center">{row.a ? 1 : 0}</td>
                          <td className="p-2.5 text-center">{row.b ? 1 : 0}</td>
                          <td className={`p-2.5 text-center font-bold ${rowOutput === 1 ? 'text-amber-400' : 'text-slate-500'}`}>
                            {rowOutput}
                          </td>
                          <td className="p-2.5 text-center text-[10px]">
                            {isCurrent ? <span className="px-1.5 py-0.5 rounded bg-cyan-400 text-slate-950 font-bold">ACTIVE</span> : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Core Rule Formula Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <span>Textbook Rule:</span>
                <span className="text-[10px] text-cyan-400 font-sinhala">
                  {mode === 'series' ? 'AND ද්වාරයේ නීතිය' : mode === 'parallel' ? 'OR ද්වාරයේ නීතිය' : 'NOT ද්වාරයේ නීතිය'}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {mode === 'series' && (
                  <>An <strong>AND gate</strong> gives a HIGH (1) output <em>only if ALL its inputs are 1</em>. Any 0 input pulls the output to 0.</>
                )}
                {mode === 'parallel' && (
                  <>An <strong>OR gate</strong> gives a HIGH (1) output <em>if AT LEAST ONE input is 1</em>. Output is 0 only when all inputs are 0.</>
                )}
                {mode === 'not_inverter' && (
                  <>A <strong>NOT gate (Inverter)</strong> flips single binary state ($0 \rightarrow 1$ and $1 \rightarrow 0$). Output is opposite to input.</>
                )}
              </p>
            </div>
          </div>

          {/* Quick Mastery Check Box */}
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            <div className="text-xs space-y-0.5">
              <p className="font-bold">Exam Key Takeaway:</p>
              <p className="text-slate-400 text-[11px]">
                Two switches in <strong>Series</strong> = AND operation ($A \cdot B$). Two switches in <strong>Parallel</strong> = OR operation ($A + B$).
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
