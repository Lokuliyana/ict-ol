'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Gauge,
  Palette,
  ArrowRight,
  Trophy,
  Check,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { SandboxProps } from './types';

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
  { target: 133, text: 'O/L Target: Synthesize Decimal 133₁₀ in Binary', hint: '128 + 4 + 1 = 133 (10000101₂)' },
  { target: 65, text: 'ASCII Letter "A": Synthesize Decimal 65₁₀', hint: '64 + 1 = 65 (01000001₂)' },
  { target: 45, text: 'Synthesize Decimal 45₁₀', hint: '32 + 8 + 4 + 1 = 45 (00101101₂)' },
  { target: 255, text: 'Maximum 8-Bit Byte: Synthesize 255₁₀ (All ON)', hint: '128+64+32+16+8+4+2+1 = 255 (11111111₂)' },
];

const COLOR_PRESETS = [
  { name: 'Dark Purple', r: 135, g: 31, b: 120, hex: '#871F78' },
  { name: 'Sky Blue', r: 50, g: 153, b: 204, hex: '#3299CC' },
  { name: 'Pure Yellow', r: 255, g: 238, b: 0, hex: '#FFEE00' },
  { name: 'Pure Green', r: 0, g: 255, b: 0, hex: '#00FF00' },
];

export function BitSwitchboardSandbox({ nodeId, onComplete, onExit }: SandboxProps) {
  const [activeTab, setActiveTab] = useState<'switchboard' | 'color_chamber'>('switchboard');

  // Switchboard state
  const [switches, setSwitches] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [clearedChallenges, setClearedChallenges] = useState<number[]>([]);

  // Color Chamber state
  const [red, setRed] = useState(135);
  const [green, setGreen] = useState(31);
  const [blue, setBlue] = useState(120);

  // Compute Decimal Value
  const decimalTotal = switches.reduce((acc, state, idx) => {
    return acc + (state ? BITS_DATA[idx].weight : 0);
  }, 0);

  const curChallenge = CHALLENGES[challengeIdx];
  const isChallengeCleared = decimalTotal === curChallenge.target;

  const toggleSwitch = (index: number) => {
    sound.playClick(switches[index] ? 350 : 850);
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);

    const newDec = newSwitches.reduce((acc, s, idx) => acc + (s ? BITS_DATA[idx].weight : 0), 0);
    if (newDec === curChallenge.target) {
      sound.playSuccessDing();
      if (!clearedChallenges.includes(challengeIdx)) {
        setClearedChallenges((prev) => [...prev, challengeIdx]);
      }
    }
  };

  const resetSwitches = () => {
    sound.playClick();
    setSwitches([false, false, false, false, false, false, false, false]);
  };

  // Color hexes
  const rHex = red.toString(16).padStart(2, '0').toUpperCase();
  const gHex = green.toString(16).padStart(2, '0').toUpperCase();
  const bHex = blue.toString(16).padStart(2, '0').toUpperCase();
  const fullHexCode = `#${rHex}${gHex}${bHex}`;

  const allCleared = clearedChallenges.length >= 2;

  const handleFinish = () => {
    sound.playVictoryFanfare();
    onComplete?.({ stars: 3, xp: 100, accuracy: 100 });
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Header & Tab Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight">8-Bit Switchboard & Color Chamber</h2>
            <p className="text-xs text-slate-400 font-sinhala">ද්වීමය බිටු ස්ථානීය අගයන් සහ 24-bit ෂඩ්දශම RGB වර්ණ කේත</p>
          </div>
        </div>

        {/* Tab Controls - min 48px touch target */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('switchboard')}
            className={`flex-1 sm:flex-none min-h-[48px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'switchboard' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>8-Bit Switchboard</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('color_chamber')}
            className={`flex-1 sm:flex-none min-h-[48px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === 'color_chamber' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Hex Color Chamber</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 8-BIT SWITCHBOARD */}
      {activeTab === 'switchboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 text-slate-100 shadow-2xl space-y-6">
            {/* HUD Display */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/40">
                  <span className="text-xs font-mono text-cyan-300">
                    Decimal: <strong className="text-xl text-white font-black">{decimalTotal}₁₀</strong>
                  </span>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-mono text-slate-400">
                    Binary: <strong className="text-cyan-400 font-mono">{switches.map((s) => (s ? '1' : '0')).join('')}₂</strong>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetSwitches}
                className="min-h-[48px] px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* 8 Levers Grid - responsive, zero horizontal overflow */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
              {BITS_DATA.map((bit, idx) => {
                const isOn = switches[idx];
                return (
                  <div
                    key={bit.weight}
                    className={`p-3 rounded-2xl border text-center flex flex-col justify-between transition-all ${
                      isOn
                        ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">{bit.label}</div>
                      <div className="font-mono text-sm font-black text-white">{bit.weight}</div>
                    </div>

                    {/* Touch target >= 48px */}
                    <button
                      type="button"
                      onClick={() => toggleSwitch(idx)}
                      className={`my-2.5 min-h-[48px] w-full rounded-xl border font-mono font-black text-base flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                        isOn
                          ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-cyan-500/50 shadow-md'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {isOn ? '1' : '0'}
                    </button>

                    <div className="text-[9px] font-mono">
                      <span className={isOn ? 'text-emerald-400 font-bold' : 'text-slate-600'}>
                        {isOn ? '+5V' : '0V'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Educational Note */}
            <div className="p-3 bg-slate-900/70 rounded-2xl border border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Leftmost (128) = MSB (Most Significant Bit)</span>
              <span>Rightmost (1) = LSB (Least Significant Bit)</span>
            </div>
          </div>

          {/* Right Challenge Panel */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">Target Challenge</span>
                <span className="text-xs font-mono text-slate-400">{challengeIdx + 1} of {CHALLENGES.length}</span>
              </div>

              {/* Challenge selector buttons - >=48px touch targets */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {CHALLENGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setChallengeIdx(i);
                    }}
                    className={`min-h-[48px] rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-1 cursor-pointer transition-all ${
                      challengeIdx === i
                        ? 'bg-cyan-600 text-white ring-2 ring-cyan-400'
                        : clearedChallenges.includes(i)
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <span>#{i + 1}</span>
                    {clearedChallenges.includes(i) && <Check className="w-3 h-3 text-emerald-400" />}
                  </button>
                ))}
              </div>

              <h3 className="font-bold text-sm sm:text-base text-white">{curChallenge.text}</h3>

              {/* Required Target Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center my-4 space-y-1">
                <div className="text-xs text-slate-400 font-mono">Target Decimal Value:</div>
                <div className="text-3xl font-black text-cyan-400 font-mono">{curChallenge.target}₁₀</div>
                <div className="text-xs text-slate-400 font-mono">Current Sum: <strong className="text-white">{decimalTotal}₁₀</strong></div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-amber-400">Hint: </span>
                <span className="font-mono text-xs">{curChallenge.hint}</span>
              </div>
            </div>

            {/* Validation Banner */}
            <div>
              {isChallengeCleared ? (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Target {curChallenge.target}₁₀ Reached!
                  </div>
                  <p className="text-xs text-slate-300">Great job! Flip to the next target or switch to the Color Chamber.</p>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-950 text-center text-xs text-slate-400">
                  Toggle switches to reach exactly {curChallenge.target}₁₀.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HEX COLOR CHAMBER */}
      {activeTab === 'color_chamber' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-6">
            {/* Color Swatch Display */}
            <div
              className="h-40 rounded-2xl border-2 border-slate-700 flex flex-col items-center justify-center shadow-inner transition-colors duration-200"
              style={{ backgroundColor: fullHexCode }}
            >
              <div className="px-5 py-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700 text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-black font-mono tracking-widest text-white">{fullHexCode}</span>
                <div className="text-xs font-mono text-slate-300">RGB({red}, {green}, {blue})</div>
              </div>
            </div>

            {/* RGB Sliders */}
            <div className="space-y-4">
              {/* Red Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-rose-400 font-bold">Red Channel (0-255 / 00-FF):</span>
                  <span>{red}₁₀ = <strong className="text-rose-400">{rHex}₁₆</strong></span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={red}
                  onChange={(e) => setRed(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer min-h-[44px]"
                />
              </div>

              {/* Green Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Green Channel (0-255 / 00-FF):</span>
                  <span>{green}₁₀ = <strong className="text-emerald-400">{gHex}₁₆</strong></span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={green}
                  onChange={(e) => setGreen(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer min-h-[44px]"
                />
              </div>

              {/* Blue Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">Blue Channel (0-255 / 00-FF):</span>
                  <span>{blue}₁₀ = <strong className="text-cyan-400">{bHex}₁₆</strong></span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={blue}
                  onChange={(e) => setBlue(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Color Presets & Textbook Breakdown */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-4">
            <h4 className="text-xs font-mono uppercase text-indigo-400 font-bold">O/L Textbook Color Standards</h4>
            <div className="space-y-2">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.hex}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setRed(preset.r);
                    setGreen(preset.g);
                    setBlue(preset.b);
                  }}
                  className="w-full min-h-[48px] p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 flex items-center justify-between text-xs font-mono transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-lg border border-slate-700" style={{ backgroundColor: preset.hex }} />
                    <span className="font-bold text-white">{preset.name}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">{preset.hex}</span>
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <span className="font-bold text-amber-400">Exam Concept:</span>
              <p>24-bit TrueColor uses 3 bytes (1 byte per channel):</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                <li>Red: 8 bits (2 hex digits)</li>
                <li>Green: 8 bits (2 hex digits)</li>
                <li>Blue: 8 bits (2 hex digits)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Action Bar with >=48px Touch Target */}
      <div className="p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          {clearedChallenges.length} of {CHALLENGES.length} Switchboard challenges completed.
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
