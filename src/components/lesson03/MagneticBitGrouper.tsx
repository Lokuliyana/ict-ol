'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Binary, 
  Layers, 
  Cpu, 
  Calculator,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function MagneticBitGrouper() {
  const [activeTab, setActiveTab] = useState<'octal' | 'hex' | 'matrix'>('octal');

  // Octal 3-bit clamp state (2024 P1 Q06: 1000110_2 = 106_8)
  const [octalStep, setOctalStep] = useState<0 | 1 | 2 | 3>(0);

  // Hex 4-bit clamp state (11011011_2 = DB_16)
  const [hexStep, setHexStep] = useState<0 | 1 | 2>(0);

  // Live Base Calculator Matrix State
  const [decInput, setDecInput] = useState<number>(45);

  const handleOctalClamp = () => {
    sound.playSnap();
    if (octalStep < 3) {
      setOctalStep((prev) => (prev + 1) as 1 | 2 | 3);
      if (octalStep === 2) sound.playSuccessDing();
    }
  };

  const handleHexClamp = () => {
    sound.playSnap();
    if (hexStep < 2) {
      setHexStep((prev) => (prev + 1) as 1 | 2);
      if (hexStep === 1) sound.playSuccessDing();
    }
  };

  const resetGrouper = () => {
    sound.playClick();
    setOctalStep(0);
    setHexStep(0);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 2: The Base Converter Chamber
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono">
                3-Bit & 4-Bit Grouping
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ද්විමය (Base 2), අෂ්ටක (Base 8 - 3 Bits), දශමය (Base 10) හා ෂඩ්දශමය (Base 16 - 4 Bits) පරිවර්තන
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('octal');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'octal'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🧲 3-Bit Octal Catcher
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('hex');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'hex'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔠 4-Bit Hex Alpha-Converter
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('matrix');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'matrix'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔢 Live 4-Base Matrix
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. 3-BIT OCTAL CATCHER */}
      {/* ========================================================================= */}
      {activeTab === 'octal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                2024 O/L Past Paper Q06: Convert 1000110₂ to Octal (Base 8)
              </span>
              <button onClick={resetGrouper} className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* Binary String Representation */}
            <div className="my-6 space-y-4 text-center">
              <div className="text-xs font-mono text-slate-400">Step 1: Start grouping 3 bits from RIGHT to LEFT:</div>

              {/* 3 Group Clusters */}
              <div className="flex items-center justify-center gap-3 font-mono">
                {/* Cluster 3 (Padded: 001) */}
                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    octalStep >= 3
                      ? 'bg-indigo-950/90 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-900 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="text-xl font-black text-white">001</div>
                  <div className="text-xs font-bold text-cyan-400 mt-1">
                    {octalStep >= 3 ? '= 1₈' : '—'}
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-1">Padded with 00</span>
                </div>

                {/* Cluster 2 (000) */}
                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    octalStep >= 2
                      ? 'bg-indigo-950/90 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-900 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="text-xl font-black text-white">000</div>
                  <div className="text-xs font-bold text-cyan-400 mt-1">
                    {octalStep >= 2 ? '= 0₈' : '—'}
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-1">Middle 3 bits</span>
                </div>

                {/* Cluster 1 (110) */}
                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    octalStep >= 1
                      ? 'bg-indigo-950/90 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-900 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="text-xl font-black text-white">110</div>
                  <div className="text-xs font-bold text-cyan-400 mt-1">
                    {octalStep >= 1 ? '= 6₈ (4+2)' : '—'}
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-1">Rightmost 3 bits</span>
                </div>
              </div>

              {/* Combined Final Octal Number */}
              {octalStep === 3 && (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-3 bg-emerald-950/80 border border-emerald-500 rounded-2xl text-center">
                  <span className="text-xs font-mono text-slate-300">Formed Octal Number:</span>
                  <div className="text-2xl font-black text-emerald-300 font-mono">106₈</div>
                </motion.div>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-indigo-900/40 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono">
                Cluster Step {octalStep} of 3
              </span>

              <button
                onClick={handleOctalClamp}
                disabled={octalStep === 3}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  octalStep === 3
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/40'
                }`}
              >
                <Boxes className="w-4 h-4" />
                <span>{octalStep === 3 ? 'Grouping Finished' : `Clamp 3-Bit Group ${octalStep + 1}`}</span>
              </button>
            </div>
          </div>

          {/* Right Theory Deck */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Octal Grouping Law (2³ = 8)</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
              <p className="font-sinhala">
                ද්විමය සංඛ්‍යාවක් අෂ්ටක (Base 8) බවට හැරවීමට දකුණේ සිට වමට බිටු 3 බැගින් කාණ්ඩ කර එක් එක් කාණ්ඩය වෙනුවෙන් 0 සිට 7 දක්වා අගයක් ආදේශ කරනු ලැබේ.
              </p>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1 font-mono text-[11px]">
                <div>• (110)₂ = 4 + 2 + 0 = <strong>6</strong></div>
                <div>• (000)₂ = 0 + 0 + 0 = <strong>0</strong></div>
                <div>• (001)₂ = 0 + 0 + 1 = <strong>1</strong></div>
                <div className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                  ➔ 1000110₂ = 106₈
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. 4-BIT HEX ALPHA-CONVERTER */}
      {/* ========================================================================= */}
      {activeTab === 'hex' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                Hexadecimal Nibble Grouping: Convert 11011011₂ to Hex (Base 16)
              </span>
              <button onClick={resetGrouper} className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* 4-Bit Clusters Visualizer */}
            <div className="my-6 space-y-4 text-center">
              <div className="text-xs font-mono text-slate-400">Step 1: Group 4 bits (Nibbles) from RIGHT to LEFT:</div>

              <div className="flex items-center justify-center gap-4 font-mono">
                {/* Nibble 2: 1101 = 13 = D */}
                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    hexStep >= 2
                      ? 'bg-indigo-950/90 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-900 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="text-xl font-black text-white">1101</div>
                  <div className="text-xs text-slate-300 mt-1">8 + 4 + 0 + 1 = 13</div>
                  <div className="text-sm font-black text-amber-400 mt-1">
                    {hexStep >= 2 ? '➔ Letter D₁₆' : '—'}
                  </div>
                </div>

                {/* Nibble 1: 1011 = 11 = B */}
                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    hexStep >= 1
                      ? 'bg-indigo-950/90 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-900 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="text-xl font-black text-white">1011</div>
                  <div className="text-xs text-slate-300 mt-1">8 + 0 + 2 + 1 = 11</div>
                  <div className="text-sm font-black text-amber-400 mt-1">
                    {hexStep >= 1 ? '➔ Letter B₁₆' : '—'}
                  </div>
                </div>
              </div>

              {hexStep === 2 && (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-3 bg-emerald-950/80 border border-emerald-500 rounded-2xl text-center">
                  <span className="text-xs font-mono text-slate-300">Formed Hexadecimal Value:</span>
                  <div className="text-2xl font-black text-emerald-300 font-mono">DB₁₆</div>
                </motion.div>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-indigo-900/40 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono">Nibble Step {hexStep} of 2</span>
              <button
                onClick={handleHexClamp}
                disabled={hexStep === 2}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  hexStep === 2
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/40'
                }`}
              >
                <Boxes className="w-4 h-4" />
                <span>{hexStep === 2 ? 'Finished' : `Clamp 4-Bit Nibble ${hexStep + 1}`}</span>
              </button>
            </div>
          </div>

          {/* Right Hex Letter Cheat Sheet */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Hex Alpha-Digits (10 to 15)</span>
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">10 = <strong className="text-indigo-600">A</strong></div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">11 = <strong className="text-indigo-600">B</strong></div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">12 = <strong className="text-indigo-600">C</strong></div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">13 = <strong className="text-indigo-600">D</strong></div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">14 = <strong className="text-indigo-600">E</strong></div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">15 = <strong className="text-indigo-600">F</strong></div>
            </div>
            <p className="text-xs text-slate-500 font-sinhala">
              16 පාදයේදී 9 න් පසු අගයන් A, B, C, D, E, F යන අකුරු 6 මඟින් සංකේතවත් කෙරේ.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. LIVE 4-BASE MATRIX CALCULATOR */}
      {/* ========================================================================= */}
      {activeTab === 'matrix' && (
        <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Synchronous 4-Base Real-Time Converter
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">Base 10 / Base 2 / Base 8 / Base 16</span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Type or Slide any Decimal Number (0 to 255):
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="0"
                max="255"
                value={decInput}
                onChange={(e) => setDecInput(Math.min(255, Math.max(0, parseInt(e.target.value, 10) || 0)))}
                className="w-28 p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-center text-indigo-600"
              />
              <input
                type="range"
                min="0"
                max="255"
                value={decInput}
                onChange={(e) => setDecInput(parseInt(e.target.value, 10))}
                className="flex-1 accent-indigo-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* 4 Output Displays */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase font-bold">Decimal (Base 10)</span>
              <div className="text-xl font-black text-slate-900 dark:text-white font-mono">{decInput}₁₀</div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold">Binary (Base 2)</span>
              <div className="text-lg font-black text-slate-900 dark:text-white font-mono truncate">
                {decInput.toString(2).padStart(8, '0')}₂
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase font-bold">Octal (Base 8)</span>
              <div className="text-xl font-black text-slate-900 dark:text-white font-mono">{decInput.toString(8)}₈</div>
            </div>

            <div className="p-4 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950/40 border border-fuchsia-200 dark:border-fuchsia-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-fuchsia-600 dark:text-fuchsia-400 uppercase font-bold">Hexadecimal (Base 16)</span>
              <div className="text-xl font-black text-slate-900 dark:text-white font-mono">{decInput.toString(16).toUpperCase()}₁₆</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
