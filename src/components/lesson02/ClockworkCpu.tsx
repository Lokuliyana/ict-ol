'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  RotateCw, 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Sliders,
  Layers,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { CacheMechanismToy } from './CacheMechanismToy';

export function ClockworkCpu() {
  const [activeTab, setActiveTab] = useState<'cycle' | 'cache'>('cycle');
  
  // Machine Cycle Beat: 0 = Idle, 1 = Fetch, 2 = Decode, 3 = Execute, 4 = Store
  const [beat, setBeat] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [clockSpeed, setClockSpeed] = useState('3.8 GHz');
  const [pcVal, setPcVal] = useState('0x04');
  const [irVal, setIrVal] = useState('—');
  const [accVal, setAccVal] = useState('0');
  const [aluDisplay, setAluDisplay] = useState('IDLE');
  const [cuSignal, setCuSignal] = useState('WAITING');

  const advanceClockBeat = () => {
    sound.playCrankTick();
    const nextBeat = ((beat % 4) + 1) as 1 | 2 | 3 | 4;
    setBeat(nextBeat);

    if (nextBeat === 1) {
      // Beat 1: Fetch
      sound.playSnap();
      setPcVal('0x04');
      setIrVal('ADD 15, 8');
      setCuSignal('FETCHING PACKET FROM RAM');
      setAluDisplay('IDLE');
      setTimeout(() => {
        setPcVal('0x05 (Incremented)');
      }, 500);
    } else if (nextBeat === 2) {
      // Beat 2: Decode
      sound.playBlip(750);
      setCuSignal('DECODED: ADD VALUES 15 + 8');
      setAluDisplay('PREPARING OPERANDS');
    } else if (nextBeat === 3) {
      // Beat 3: Execute
      sound.playBlip(1000);
      setAluDisplay('15 + 8 = 23 (CALCULATED)');
      setCuSignal('ALU EXECUTION TRIGGERED');
    } else if (nextBeat === 4) {
      // Beat 4: Store
      sound.playSuccessDing();
      setAccVal('23');
      setCuSignal('SAVED TO ACCUMULATOR');
      setAluDisplay('STORED RESULT: 23');
    }
  };

  const resetCycle = () => {
    sound.playClick();
    setBeat(0);
    setPcVal('0x04');
    setIrVal('—');
    setAccVal('0');
    setAluDisplay('IDLE');
    setCuSignal('WAITING');
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 3: The 4-Beat Engine
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono">
                CPU Machine Cycle & Cache
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              මධ්‍ය සැකසුම් ඒකකයේ යන්ත්‍ර චක්‍රයේ පියවර 4 (Fetch, Decode, Execute, Store) සහ කෑෂ් මතකය
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('cycle');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'cycle'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⏱️ 4-Beat Machine Cycle
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('cache');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'cache'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚡ Cache Hit/Miss Simulator
          </button>
        </div>
      </div>

      {activeTab === 'cycle' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Animated CPU Machine Cycle Chamber */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono uppercase text-indigo-300">
                  Clock Frequency: {clockSpeed}
                </span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                {beat === 0 ? 'Beat: Idle' : `Beat ${beat} of 4: ${beat === 1 ? 'Fetch' : beat === 2 ? 'Decode' : beat === 3 ? 'Execute' : 'Store'}`}
              </span>
            </div>

            {/* Glowing Internal Register Rack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
              {/* Program Counter (PC) */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  beat === 1
                    ? 'bg-amber-950/70 border-amber-400 shadow-[0_0_15px_#f59e0b]'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="text-[10px] font-mono text-amber-400 font-bold">PC (Program Counter)</div>
                <div className="text-sm font-black font-mono text-white mt-1">{pcVal}</div>
                <div className="text-[9px] text-slate-400">Holds next address</div>
              </div>

              {/* Instruction Register (IR) */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  beat === 1 || beat === 2
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_15px_#22d3ee]'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 font-bold">IR (Instruction Reg)</div>
                <div className="text-sm font-black font-mono text-white mt-1">{irVal}</div>
                <div className="text-[9px] text-slate-400">Holds current opcode</div>
              </div>

              {/* Accumulator (ACC) */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  beat === 4
                    ? 'bg-emerald-950/70 border-emerald-400 shadow-[0_0_15px_#10b981]'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="text-[10px] font-mono text-emerald-400 font-bold">ACC (Accumulator)</div>
                <div className="text-sm font-black font-mono text-white mt-1">{accVal}</div>
                <div className="text-[9px] text-slate-400">Intermediate math output</div>
              </div>
            </div>

            {/* Execution Status Screen */}
            <div className="p-4 rounded-2xl bg-black/60 border border-indigo-900/50 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Control Unit (CU) Line:</span>
                <span className="text-indigo-300 font-bold">{cuSignal}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>ALU Logic Stage:</span>
                <span className="text-cyan-400 font-bold">{aluDisplay}</span>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-indigo-900/40">
              <button
                onClick={resetCycle}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
              >
                Reset Cycle
              </button>

              <button
                onClick={advanceClockBeat}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95"
              >
                <RotateCw className="w-4 h-4" />
                <span>Clock Pulse ➔ Next Beat ({beat === 0 ? 'Beat 1' : `Beat ${(beat % 4) + 1}`})</span>
              </button>
            </div>
          </div>

          {/* Right Explanation & 4 Beats Timeline */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>The 4-Step Machine Cycle Stages</span>
            </h4>

            {/* 4 Steps Checklist */}
            <div className="space-y-2.5 text-xs">
              <div
                className={`p-3 rounded-xl border transition-all ${
                  beat === 1
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 text-amber-900 dark:text-amber-200 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="font-bold">1. Fetch (ගෙන ඒම)</div>
                <p className="text-[11px] font-normal mt-0.5 font-sinhala">
                  PC හි ඇති මතක ලිපිනය ඔස්සේ ප්‍රධාන මතකයෙන් (RAM) නියෝගය Instruction Register (IR) වෙත රැගෙන විත් PC අගය 1 කින් වැඩි කරයි.
                </p>
              </div>

              <div
                className={`p-3 rounded-xl border transition-all ${
                  beat === 2
                    ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-400 text-cyan-900 dark:text-cyan-200 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="font-bold">2. Decode (විසංකේතනය)</div>
                <p className="text-[11px] font-normal mt-0.5 font-sinhala">
                  IR හි ඇති නියෝගය පාලන ඒකකය (CU) මඟින් පරිගණකයට තේරුම් ගත හැකි සංඥා බවට පරිවර්තනය කරයි.
                </p>
              </div>

              <div
                className={`p-3 rounded-xl border transition-all ${
                  beat === 3
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-400 text-indigo-900 dark:text-indigo-200 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="font-bold">3. Execute (ක්‍රියාත්මක කිරීම)</div>
                <p className="text-[11px] font-normal mt-0.5 font-sinhala">
                  ගණිතමය හෝ තර්කන කර්මය ALU මඟින් ගණනය කර ක්‍රියාත්මක කරයි (15 + 8 = 23).
                </p>
              </div>

              <div
                className={`p-3 rounded-xl border transition-all ${
                  beat === 4
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="font-bold">4. Store (තැන්පත් කිරීම)</div>
                <p className="text-[11px] font-normal mt-0.5 font-sinhala">
                  ලැබුණු ප්‍රතිඵලය තාවකාලිකව Accumulator (ACC) හෝ ප්‍රධාන මතකයේ ගබඩා කරයි.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CacheMechanismToy />
      )}
    </div>
  );
}
