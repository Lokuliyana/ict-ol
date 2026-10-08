'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  Layers, 
  ArrowRight, 
  ArrowLeftRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCw,
  HardDrive,
  Radio,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function VonNeumannHighway() {
  const [activeMode, setActiveMode] = useState<'architecture' | 'bus_traffic'>('bus_traffic');
  
  // Bus wiring states
  const [addressBusConnected, setAddressBusConnected] = useState(false);
  const [dataBusConnected, setDataBusConnected] = useState(false);
  const [controlBusConnected, setControlBusConnected] = useState(false);
  const [addressBusError, setAddressBusError] = useState(false);
  const [activeSignalPacket, setActiveSignalPacket] = useState<'read' | 'write' | null>(null);

  // Architecture inspect states
  const [inspectedComponent, setInspectedComponent] = useState<'ALU' | 'CU' | 'REG' | 'RAM' | 'STORAGE' | null>('CU');

  // Address Bus Unidirectional check
  const handleAddressBusAttempt = (direction: 'cpu_to_ram' | 'ram_to_cpu') => {
    if (direction === 'ram_to_cpu') {
      sound.playBuzzer();
      setAddressBusError(true);
      setTimeout(() => setAddressBusError(false), 2000);
    } else {
      sound.playSnap();
      setAddressBusConnected(true);
      setAddressBusError(false);
      checkAllBuses(true, dataBusConnected, controlBusConnected);
    }
  };

  const handleDataBusConnect = () => {
    sound.playSnap();
    setDataBusConnected(true);
    checkAllBuses(addressBusConnected, true, controlBusConnected);
  };

  const handleControlBusConnect = (signal: 'read' | 'write') => {
    sound.playBlip(900);
    setControlBusConnected(true);
    setActiveSignalPacket(signal);
    checkAllBuses(addressBusConnected, dataBusConnected, true);
  };

  const checkAllBuses = (addr: boolean, data: boolean, ctrl: boolean) => {
    if (addr && data && ctrl) {
      setTimeout(() => sound.playVictoryFanfare(), 300);
    }
  };

  const resetBuses = () => {
    sound.playClick();
    setAddressBusConnected(false);
    setDataBusConnected(false);
    setControlBusConnected(false);
    setActiveSignalPacket(null);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 2: The Von Neumann Highway
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono">
                Architecture & Bus Network
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              වොන් නියුමාන් ආකෘතිය, මධ්‍ය සැකසුම් ඒකකය (ALU, CU, රෙජිස්ටර්) හා පද්ධති බස් (Address, Data, Control)
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveMode('bus_traffic');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeMode === 'bus_traffic'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🚦 Bus Traffic Controller
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveMode('architecture');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeMode === 'architecture'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔍 CPU Trio & Solid/Dotted Lines
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BUS TRAFFIC CONTROLLER INTERACTIVE CANVAS */}
      {/* ========================================================================= */}
      {activeMode === 'bus_traffic' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Animated Bus Highway */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[440px] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                System Bus Highway (CPU ➔ Memory Bus Network)
              </span>
              <button
                onClick={resetBuses}
                className="text-[11px] font-mono text-slate-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <RotateCw className="w-3 h-3" /> Reset Lines
              </button>
            </div>

            {/* Central Schematic Nodes: CPU vs RAM */}
            <div className="my-6 grid grid-cols-2 gap-8 items-center relative">
              {/* CPU Block */}
              <div className="p-4 rounded-2xl bg-indigo-950/80 border-2 border-indigo-500 text-center shadow-xl space-y-1 z-10">
                <div className="text-[10px] font-mono uppercase text-indigo-300">Central Processor</div>
                <div className="text-base font-black text-white font-mono flex items-center justify-center gap-1.5">
                  <Cpu className="w-5 h-5 text-indigo-400" /> CPU Core
                </div>
                <div className="text-[10px] text-slate-400">ALU • CU • Registers</div>
              </div>

              {/* RAM Block */}
              <div className="p-4 rounded-2xl bg-cyan-950/80 border-2 border-cyan-500 text-center shadow-xl space-y-1 z-10">
                <div className="text-[10px] font-mono uppercase text-cyan-300">Primary Memory</div>
                <div className="text-base font-black text-white font-mono flex items-center justify-center gap-1.5">
                  <Layers className="w-5 h-5 text-cyan-400" /> Main RAM
                </div>
                <div className="text-[10px] text-slate-400">Shared Data & Code</div>
              </div>
            </div>

            {/* 3 Active Bus Highway Lanes */}
            <div className="space-y-3 p-4 bg-black/40 rounded-2xl border border-indigo-900/40">
              {/* 1. Address Bus */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">1. Address Bus (ලිපින බසය):</span>
                  <span className={addressBusConnected ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {addressBusConnected ? '✓ CPU ➔ Memory (Unidirectional Locked)' : 'Unconnected'}
                  </span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full border border-amber-500/30 flex items-center px-2 relative overflow-hidden">
                  {addressBusConnected && (
                    <motion.div
                      animate={{ x: [0, 240] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      className="w-8 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]"
                    />
                  )}
                </div>
              </div>

              {/* 2. Data Bus */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">2. Data Bus (දත්ත බසය):</span>
                  <span className={dataBusConnected ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {dataBusConnected ? '✓ CPU ↔ Memory (Bidirectional Locked)' : 'Unconnected'}
                  </span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full border border-cyan-500/30 flex items-center px-2 relative overflow-hidden">
                  {dataBusConnected && (
                    <motion.div
                      animate={{ x: [-100, 240, -100] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                      className="w-8 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
                    />
                  )}
                </div>
              </div>

              {/* 3. Control Bus */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-fuchsia-400 font-bold">3. Control Bus (පාලන බසය):</span>
                  <span className={controlBusConnected ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {controlBusConnected ? `✓ Active Signal: ${activeSignalPacket?.toUpperCase()}` : 'Unconnected'}
                  </span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full border border-fuchsia-500/30 flex items-center px-2 relative overflow-hidden">
                  {controlBusConnected && (
                    <div className="w-full h-2 bg-fuchsia-500/40 rounded-full animate-pulse" />
                  )}
                </div>
              </div>
            </div>

            {/* Error rejection banner */}
            {addressBusError && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-950/80 border border-red-500/60 rounded-xl text-xs text-red-200 flex items-center gap-2"
              >
                <XCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>
                  <strong>Rejected!</strong> Address bus is strictly <strong>Unidirectional (CPU ➔ Memory)</strong>. Memory never sends memory addresses back to the CPU!
                </span>
              </motion.div>
            )}
          </div>

          {/* Right Control Deck & Wiring Challenge */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Bus Wiring Challenge</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Plug in each bus cable with its correct architectural direction:
            </p>

            {/* Cable Action 1: Address Bus Direction test */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                1. Connect Address Bus:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleAddressBusAttempt('cpu_to_ram')}
                  className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                    addressBusConnected
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-white dark:bg-slate-800 border-amber-300 text-amber-900 dark:text-amber-200 hover:bg-amber-100'
                  }`}
                >
                  CPU ➔ Memory (One-way)
                </button>
                <button
                  onClick={() => handleAddressBusAttempt('ram_to_cpu')}
                  className="p-2.5 rounded-xl border border-red-300 dark:border-red-800 text-xs font-mono text-red-700 dark:text-red-300 bg-white dark:bg-slate-800 hover:bg-red-50"
                >
                  Memory ➔ CPU (Reverse)
                </button>
              </div>
            </div>

            {/* Cable Action 2: Data Bus */}
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2">
              <div className="text-xs font-bold text-cyan-800 dark:text-cyan-300">
                2. Connect Data Bus:
              </div>
              <button
                onClick={handleDataBusConnect}
                className={`w-full p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                  dataBusConnected
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-white dark:bg-slate-800 border-cyan-300 text-cyan-900 dark:text-cyan-200 hover:bg-cyan-100'
                }`}
              >
                {dataBusConnected ? '✓ Data Bus Connected (Bidirectional ↔)' : 'Snap Data Bus (CPU ↔ Memory)'}
              </button>
            </div>

            {/* Cable Action 3: Control Bus */}
            <div className="p-3.5 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 space-y-2">
              <div className="text-xs font-bold text-fuchsia-800 dark:text-fuchsia-300">
                3. Dispatch Control Bus Signal:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleControlBusConnect('read')}
                  className="p-2.5 rounded-xl border border-fuchsia-300 text-xs font-mono font-bold text-fuchsia-900 dark:text-fuchsia-200 bg-white dark:bg-slate-800 hover:bg-fuchsia-100"
                >
                  Memory Read (MR)
                </button>
                <button
                  onClick={() => handleControlBusConnect('write')}
                  className="p-2.5 rounded-xl border border-fuchsia-300 text-xs font-mono font-bold text-fuchsia-900 dark:text-fuchsia-200 bg-white dark:bg-slate-800 hover:bg-fuchsia-100"
                >
                  Memory Write (MW)
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. CPU TRIO & SOLID VS DOTTED LINES INSPECTOR (TEXTBOOK FIG 2.10) */
        /* ========================================================================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Schematic Diagram */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-2">
              <span className="text-xs font-mono uppercase text-indigo-300">
                Textbook Figure 2.10: Central Processing Unit (CPU)
              </span>
            </div>

            {/* Visual CPU Box Diagram */}
            <div className="p-5 rounded-2xl bg-slate-900 border-2 border-indigo-500/50 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-indigo-400 font-bold">CPU Boundary</span>
                <span className="text-slate-400">Silicon Core</span>
              </div>

              {/* 3 Internal CPU Blocks */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <button
                  onClick={() => {
                    sound.playClick();
                    setInspectedComponent('CU');
                  }}
                  className={`p-3 rounded-xl border transition-all ${
                    inspectedComponent === 'CU'
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-xs">Control Unit (CU)</div>
                  <div className="text-[10px] opacity-75 font-sinhala">පාලන ඒකකය</div>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setInspectedComponent('ALU');
                  }}
                  className={`p-3 rounded-xl border transition-all ${
                    inspectedComponent === 'ALU'
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-xs">ALU</div>
                  <div className="text-[10px] opacity-75 font-sinhala">ගණිත හා තර්කන</div>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setInspectedComponent('REG');
                  }}
                  className={`p-3 rounded-xl border transition-all ${
                    inspectedComponent === 'REG'
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-xs">Registers (ACC)</div>
                  <div className="text-[10px] opacity-75 font-sinhala">රෙජිස්ටර්</div>
                </button>
              </div>

              {/* Trace Legend: Solid vs Dotted */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="p-2 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-indigo-400" />
                  <span>Solid Line: Control Signal (from CU only)</span>
                </div>
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-2">
                  <div className="w-6 h-0.5 border-t-2 border-dashed border-cyan-400" />
                  <span>Dotted Line: Data / Instructions Flow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inspection Deck */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-slate-400 font-bold">Component Breakdown</div>
            {inspectedComponent === 'CU' && (
              <div className="space-y-2 text-xs">
                <h4 className="text-base font-black text-indigo-600 dark:text-indigo-400">
                  Control Unit (CU) — The Manager
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sinhala">
                  පරිගණක පද්ධතියේ සියලුම දෘඩාංග සහ ක්‍රියාවලි පාලනය කිරීම හා නියෝග නිකුත් කිරීම සිදු කරන්නේ <strong>පාලන ඒකකය (Control Unit)</strong> මගිනි. එය කිසිදු ගණිතමය ගණනයක් සිදු නොකරයි.
                </p>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1">
                  <strong>Key Responsibility:</strong> Decodes opcodes & issues timing pulses across the Control Bus.
                </div>
              </div>
            )}

            {inspectedComponent === 'ALU' && (
              <div className="space-y-2 text-xs">
                <h4 className="text-base font-black text-indigo-600 dark:text-indigo-400">
                  Arithmetic Logic Unit (ALU)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sinhala">
                  සියලුම ගණිත කර්ම (+, -, *, /) සහ තර්කන සංසන්දන (&lt;, &gt;, =, AND, OR, NOT) සිදු කරන මූලික ඒකකයයි.
                </p>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1">
                  <strong>Key Responsibility:</strong> Performs 15 + 8 = 23, or checks if Score &ge; 75.
                </div>
              </div>
            )}

            {inspectedComponent === 'REG' && (
              <div className="space-y-2 text-xs">
                <h4 className="text-base font-black text-indigo-600 dark:text-indigo-400">
                  Registers & Accumulator (ACC)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sinhala">
                  සැකසුම් ඒකකය තුළම පිහිටි අධිවේගී තාවකාලික මතක ස්ථාන වේ (PC, IR, Accumulator).
                </p>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1">
                  <strong>Speed:</strong> Fastest memory tier in the entire computer architecture!
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
