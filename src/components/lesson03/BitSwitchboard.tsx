'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Power, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Gauge,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

const BITS_DATA = [
  { power: 7, weight: 128, label: '2⁷' },
  { power: 6, weight: 64, label: '2⁶' },
  { power: 5, weight: 32, label: '2⁵' },
  { power: 4, weight: 16, label: '2⁴' },
  { power: 3, weight: 8, label: '2³' },
  { power: 2, weight: 4, label: '2²' },
  { power: 1, weight: 2, label: '2¹' },
  { power: 0, weight: 1, label: '2⁰' },
];

const CHALLENGES = [
  { target: 133, text: '2022 O/L P1 Q07 Target: Synthesize Decimal 133₁₀ in Binary', hint: '128 + 4 + 1 = 133 (10000101₂)' },
  { target: 65, text: 'ASCII Letter "A" Target: Synthesize Decimal 65₁₀', hint: '64 + 1 = 65 (01000001₂)' },
  { target: 45, text: 'Synthesize Decimal 45₁₀', hint: '32 + 8 + 4 + 1 = 45 (00101101₂)' },
  { target: 255, text: 'Maximum 8-Bit Byte: Synthesize 255₁₀ (All switches ON)', hint: '128+64+32+16+8+4+2+1 = 255 (11111111₂)' },
];

export interface BitSwitchboardProps {
  hideInternalTabs?: boolean;
  defaultSubMode?: number | string;
}

export function BitSwitchboard({
  hideInternalTabs = false,
  defaultSubMode,
}: BitSwitchboardProps = {}) {
  const parsedChallengeIdx =
    typeof defaultSubMode === 'number'
      ? Math.max(0, Math.min(CHALLENGES.length - 1, defaultSubMode))
      : typeof defaultSubMode === 'string' && !isNaN(Number(defaultSubMode)) && defaultSubMode !== ''
      ? Math.max(0, Math.min(CHALLENGES.length - 1, Number(defaultSubMode)))
      : 0;
  const [switches, setSwitches] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [challengeIdx, setChallengeIdx] = useState(parsedChallengeIdx);
  const [hoveredBit, setHoveredBit] = useState<number | null>(null);

  // Compute Decimal Value & Nibbles (Suggestion #31)
  const decimalTotal = switches.reduce((acc, state, idx) => {
    return acc + (state ? BITS_DATA[idx].weight : 0);
  }, 0);

  const highNibbleTotal = switches.slice(0, 4).reduce((acc, state, idx) => {
    return acc + (state ? BITS_DATA[idx].weight : 0);
  }, 0);

  const lowNibbleTotal = switches.slice(4, 8).reduce((acc, state, idx) => {
    return acc + (state ? BITS_DATA[idx + 4].weight : 0);
  }, 0);

  const curChallenge = CHALLENGES[challengeIdx];
  const isChallengeCleared = decimalTotal === curChallenge.target;

  // Find MSB and LSB
  const activeIndices = switches.map((s, idx) => (s ? idx : -1)).filter((idx) => idx !== -1);
  const msbIndex = activeIndices.length > 0 ? activeIndices[0] : null;
  const lsbIndex = activeIndices.length > 0 ? activeIndices[activeIndices.length - 1] : null;

  const toggleSwitch = (index: number) => {
    sound.playClick(switches[index] ? 350 : 850);
    triggerHaptic('medium');
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);

    const newDec = newSwitches.reduce((acc, s, idx) => acc + (s ? BITS_DATA[idx].weight : 0), 0);
    if (newDec === curChallenge.target) {
      sound.playSuccessDing();
      triggerHaptic('success');
    }
  };

  const resetSwitches = () => {
    sound.playClick();
    triggerHaptic('light');
    setSwitches([false, false, false, false, false, false, false, false]);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      {!hideInternalTabs && (
        <div data-testid="bit-switchboard-header" className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                Station 1: The Binary Switchboard
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-mono">
                  Voltage & Bit Weights
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
                විද්‍යුත් වෝල්ටීයතා මට්ටම් (0V / +5V), බිටු ස්ථානීය අගයන් (Powers of 2) හා MSB / LSB සංකල්පය
              </p>
            </div>
          </div>

          {/* Challenge Stepper (Thumb Target >= 48px #32) */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-mono">Target {challengeIdx + 1}/{CHALLENGES.length}:</span>
            <div className="flex gap-1.5 flex-wrap">
              {CHALLENGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    sound.playClick();
                    triggerHaptic('light');
                    setChallengeIdx(i);
                  }}
                  className={`min-h-[48px] min-w-[48px] rounded-2xl text-xs font-mono font-black transition-all flex items-center justify-center cursor-pointer ${
                    challengeIdx === i
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105 ring-2 ring-cyan-300'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                  aria-label={`Select challenge ${i + 1}`}
                >
                  #{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* LEFT: 8-BIT TACTILE LEVER BOARD */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5 flex flex-col justify-between min-h-[440px]">
          {/* Top Voltage Meter & Display HUD */}
          <div className="flex items-center justify-between border-b border-indigo-900/40 pb-4 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-300">
                  Total Decimal Output: <strong className="text-lg text-white font-black">{decimalTotal}₁₀</strong>
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 hidden sm:block">
                Binary: <strong className="text-cyan-400">{switches.map((s) => (s ? '1' : '0')).join('')}₂</strong>
              </div>
            </div>

            <button
              onClick={resetSwitches}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset (00000000₂)
            </button>
          </div>

          {/* 8 Lever Switch Modules with High / Low Nibble Split (Suggestion #31) */}
          <div className="space-y-4 my-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* HIGH NIBBLE (Bits 7..4) */}
              <div className="p-3 bg-slate-900/60 rounded-3xl border border-indigo-900/50 space-y-2">
                <div className="flex items-center justify-between px-2 text-[11px] font-mono font-bold text-indigo-400">
                  <span>HIGH NIBBLE (Bits 7–4)</span>
                  <span className="text-white bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-800">
                    {highNibbleTotal}₁₀
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {BITS_DATA.slice(0, 4).map((bit, localIdx) => {
                    const idx = localIdx;
                    const isOn = switches[idx];
                    const isMSB = idx === msbIndex;

                    return (
                      <div
                        key={bit.weight}
                        onMouseEnter={() => setHoveredBit(idx)}
                        onMouseLeave={() => setHoveredBit(null)}
                        className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col justify-between relative ${
                          isOn
                            ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            : 'bg-slate-900/80 border-slate-800 text-slate-500'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono text-slate-400">{bit.label}</span>
                          <div className="font-mono text-xs font-black text-white">{bit.weight}</div>
                        </div>

                        <button
                          onClick={() => toggleSwitch(idx)}
                          className={`my-2 py-3 rounded-xl border font-mono font-black text-sm transition-all shadow-md min-h-[48px] ${
                            isOn
                              ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-cyan-500/50 scale-105'
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          {isOn ? '1' : '0'}
                        </button>

                        <div className="text-[9px] font-mono">
                          <span className={isOn ? 'text-emerald-400 font-bold' : 'text-slate-600'}>
                            {isOn ? 'ON' : 'OFF'}
                          </span>
                        </div>

                        {isMSB && (
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 text-[8px] font-mono font-black uppercase shadow">
                            MSB
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* LOW NIBBLE (Bits 3..0) */}
              <div className="p-3 bg-slate-900/60 rounded-3xl border border-cyan-900/50 space-y-2">
                <div className="flex items-center justify-between px-2 text-[11px] font-mono font-bold text-cyan-400">
                  <span>LOW NIBBLE (Bits 3–0)</span>
                  <span className="text-white bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800">
                    {lowNibbleTotal}₁₀
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {BITS_DATA.slice(4, 8).map((bit, localIdx) => {
                    const idx = localIdx + 4;
                    const isOn = switches[idx];
                    const isLSB = idx === lsbIndex;

                    return (
                      <div
                        key={bit.weight}
                        onMouseEnter={() => setHoveredBit(idx)}
                        onMouseLeave={() => setHoveredBit(null)}
                        className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col justify-between relative ${
                          isOn
                            ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            : 'bg-slate-900/80 border-slate-800 text-slate-500'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono text-slate-400">{bit.label}</span>
                          <div className="font-mono text-xs font-black text-white">{bit.weight}</div>
                        </div>

                        <button
                          onClick={() => toggleSwitch(idx)}
                          className={`my-2 py-3 rounded-xl border font-mono font-black text-sm transition-all shadow-md min-h-[48px] ${
                            isOn
                              ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-cyan-500/50 scale-105'
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          {isOn ? '1' : '0'}
                        </button>

                        <div className="text-[9px] font-mono">
                          <span className={isOn ? 'text-emerald-400 font-bold' : 'text-slate-600'}>
                            {isOn ? 'ON' : 'OFF'}
                          </span>
                        </div>

                        {isLSB && (
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded bg-cyan-400 text-slate-950 text-[8px] font-mono font-black uppercase shadow">
                            LSB
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Radar Details on Hover */}
          <div className="p-3 bg-black/40 rounded-2xl border border-indigo-900/40 flex items-center justify-between text-xs font-mono">
            <div className="text-slate-300">
              {hoveredBit !== null ? (
                <span>
                  Bit Position {7 - hoveredBit}: Power {BITS_DATA[hoveredBit].label} = Value <strong>{BITS_DATA[hoveredBit].weight}</strong>. State: {switches[hoveredBit] ? 'High Voltage (+5V / Logic 1)' : 'Low Voltage (0V / Logic 0)'}
                </span>
              ) : (
                <span>Hover over any bit switch to inspect electronic voltage & positional weight.</span>
              )}
            </div>
            <div className="flex gap-2">
              <span className="text-amber-400 font-bold">MSB = Leftmost 1</span>
              <span className="text-cyan-400 font-bold">LSB = Rightmost 1</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: CHALLENGE HUD & EXPLANATION */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold">
              Decimal Target Quest
            </div>
            <h4 className="text-base font-black text-slate-900 dark:text-white mt-1">
              {curChallenge.text}
            </h4>

            {/* Target Goal Display */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 my-4 text-center space-y-1">
              <span className="text-xs text-slate-400 font-mono">Required Decimal Target:</span>
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                {curChallenge.target}₁₀
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Current Sum: <strong>{decimalTotal}₁₀</strong>
              </div>
            </div>

            {/* Hint & Formula */}
            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Binary Place Math:</span>
              </div>
              <p className="font-mono text-[11px]">{curChallenge.hint}</p>
            </div>
          </div>

          {/* Validation Banner */}
          {isChallengeCleared ? (
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500 text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Target Reached!
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                You successfully formed {curChallenge.target}₁₀ with exact binary voltages!
              </p>
            </motion.div>
          ) : (
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-center text-xs text-slate-500">
              Flip the lever switches to reach the exact target sum of {curChallenge.target}₁₀.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
