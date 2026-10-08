'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Languages, 
  Terminal, 
  ArrowRight,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function UniversalDecoder() {
  const [activeTab, setActiveTab] = useState<'step_decoder' | 'script_wall' | 'encodings_table'>('step_decoder');

  // Step-Letter Decoder (2020 P2 Q01(iii)(b))
  // 'Z' (90) -> 'Y' (89) -> 'X' (88 = 1011000_2)
  const [currentLetterCode, setCurrentLetterCode] = useState<number>(90); // 90 = 'Z'

  // Script Border Wall state
  const [testChar, setTestChar] = useState('ක');
  const [selectedEncodingSlot, setSelectedEncodingSlot] = useState<'ascii' | 'unicode' | null>(null);
  const [slotFeedback, setSlotFeedback] = useState<{ isSuccess: boolean; text: string } | null>(null);

  const charName = String.fromCharCode(currentLetterCode);
  const binaryString = currentLetterCode.toString(2).padStart(7, '0');

  const stepBackwards = () => {
    sound.playCrankTick();
    setCurrentLetterCode((prev) => Math.max(65, prev - 1));
  };

  const stepForwards = () => {
    sound.playCrankTick();
    setCurrentLetterCode((prev) => Math.min(90, prev + 1));
  };

  const handleTestEncodingSlot = (slot: 'ascii' | 'unicode') => {
    setSelectedEncodingSlot(slot);
    if (slot === 'ascii') {
      sound.playBuzzer();
      setSlotFeedback({
        isSuccess: false,
        text: `❌ REJECTED! ASCII is strictly 7-bit/8-bit (English only). Non-Latin Sinhala/Tamil characters like "${testChar}" do NOT exist in ASCII!`,
      });
    } else {
      sound.playSuccessDing();
      setSlotFeedback({
        isSuccess: true,
        text: `✅ ACCEPTED! Unicode (16-bit / 32-bit) universally maps ${testChar} to code point U+0D9A (${testChar.charCodeAt(0)}₁₀), enabling multilingual native scripts!`,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 5: The Rosetta Terminal
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-mono">
                Character Encodings
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              අක්ෂර කේතන ක්‍රම (BCD, ASCII, Extended ASCII, EBCDIC, Unicode)
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('step_decoder');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'step_decoder'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔤 2020 Exam Step-Decoder ('Z'➔'X')
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('script_wall');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'script_wall'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🛑 ASCII vs Unicode Wall
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('encodings_table');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'encodings_table'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            📜 Encodings Comparison Table
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. STEP-LETTER DECODER (2020 O/L P2 Q01(iii)(b)) */}
      {/* ========================================================================= */}
      {activeTab === 'step_decoder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                2020 O/L Paper II Q01(iii)(b): Target 'X' from Given 'Z' (1011010₂)
              </span>
              <button
                onClick={() => setCurrentLetterCode(90)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset to 'Z'
              </button>
            </div>

            {/* Split Flap Terminal Display */}
            <div className="my-4 p-6 rounded-2xl bg-black/60 border-2 border-indigo-500/50 text-center space-y-3 shadow-inner">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Active Terminal Glyph
              </div>

              <div className="text-6xl font-black text-white font-mono">{charName}</div>

              <div className="flex items-center justify-center gap-4 pt-2 font-mono">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300">
                  Decimal: <strong className="text-cyan-400">{currentLetterCode}₁₀</strong>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300">
                  7-Bit ASCII: <strong className="text-emerald-400">{binaryString}₂</strong>
                </div>
              </div>

              {currentLetterCode === 88 && (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="p-2 bg-emerald-950/80 border border-emerald-500 rounded-xl text-xs text-emerald-300 font-bold">
                  ✓ Target 'X' Discovered: 88₁₀ = 1011000₂ (64 + 16 + 8)
                </motion.div>
              )}
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-indigo-900/40">
              <button
                onClick={stepBackwards}
                disabled={currentLetterCode <= 65}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2"
              >
                <span>◀ Step Back (-1)</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                Step Distance from 'Z': {90 - currentLetterCode}
              </span>

              <button
                onClick={stepForwards}
                disabled={currentLetterCode >= 90}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2"
              >
                <span>Step Forward (+1) ▶</span>
              </button>
            </div>
          </div>

          {/* Right Theory & Examination Logic */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Exam Deduction Logic</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
              <p className="font-sinhala">
                ඉංග්‍රීසි හෝඩියේ අකුරු අනුක්‍රමිකව පිහිටයි. 'Z' හි අගය 90 නම්, 'X' යනු 'Z' ට වඩා ස්ථාන 2 ක් පිටුපසින් පිහිටි අකුරයි:
              </p>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1 font-mono text-[11px]">
                <div>• 'Z' = 90₁₀ (1011010₂)</div>
                <div>• 'Y' = 89₁₀ (1011001₂)</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold">• 'X' = 88₁₀ (1011000₂)</div>
              </div>
              <p className="text-[11px] text-slate-500">
                64 + 16 + 8 = 88 ➔ 1011000₂.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SCRIPT BORDER WALL (ASCII VS UNICODE) */}
      {/* ========================================================================= */}
      {activeTab === 'script_wall' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                2023 O/L Past Paper Q10: Asian Script Encoding Compatibility
              </span>
            </div>

            {/* Test Input Character */}
            <div className="p-4 rounded-2xl bg-black/40 border border-slate-700 text-center space-y-2">
              <div className="text-xs text-slate-400 font-mono">Candidate Character to Encode:</div>
              <div className="text-5xl font-black text-amber-400 font-sinhala">{testChar}</div>
              <div className="flex justify-center gap-2 pt-2">
                {['ක', 'අ', 'ශ්‍රී', 'A', '7'].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      sound.playClick();
                      setTestChar(c);
                      setSelectedEncodingSlot(null);
                      setSlotFeedback(null);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      testChar === c
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* 2 Encoding Target Slots */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleTestEncodingSlot('ascii')}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  selectedEncodingSlot === 'ascii'
                    ? 'bg-red-950/80 border-red-500 text-red-200'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-indigo-400'
                }`}
              >
                <div className="font-bold text-sm font-mono">1. Standard ASCII Slot</div>
                <div className="text-[10px] text-slate-400 mt-1">7-Bit / 8-Bit (128 - 256 Symbols)</div>
              </button>

              <button
                onClick={() => handleTestEncodingSlot('unicode')}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  selectedEncodingSlot === 'unicode'
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-lg'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-indigo-400'
                }`}
              >
                <div className="font-bold text-sm font-mono">2. Unicode Slot (UTF-16/32)</div>
                <div className="text-[10px] text-slate-400 mt-1">16-Bit+ (65,536+ Universal)</div>
              </button>
            </div>

            {/* Feedback Banner */}
            {slotFeedback && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`p-3.5 rounded-xl text-xs ${slotFeedback.isSuccess ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-200' : 'bg-red-950/80 border border-red-500 text-red-200'}`}>
                {slotFeedback.text}
              </motion.div>
            )}
          </div>

          {/* Right Theory */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Why Unicode is Universal</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
              <p className="font-sinhala">
                ASCII මඟින් නිරූපණය කළ හැක්කේ ඉංග්‍රීසි අක්ෂර හා මූලික සංකේත 128/256 ක් පමණි. සිංහල, දෙමළ, චීන, ජපන් වැනි ලොව සියලු භාෂා පරිගණකයට එක් කිරීමට <strong>යුනිකෝඩ් (Unicode)</strong> සම්මතය භාවිත කෙරේ.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ENCODINGS COMPARISON TABLE */}
      {/* ========================================================================= */}
      {activeTab === 'encodings_table' && (
        <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 className="font-bold text-base text-slate-900 dark:text-white">
            Comparison of Standard Character Encodings
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3">Encoding</th>
                  <th className="p-3">Bit Width</th>
                  <th className="p-3">Total Characters</th>
                  <th className="p-3">Usage & Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-bold text-indigo-600">BCD (Binary Coded Decimal)</td>
                  <td className="p-3">4 Bits</td>
                  <td className="p-3">10 (0 to 9)</td>
                  <td className="p-3">Decimal digit representation (1010-1111 invalid)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-600">ASCII (Standard)</td>
                  <td className="p-3">7 Bits</td>
                  <td className="p-3">128 (2⁷)</td>
                  <td className="p-3">Standard English keyboard & control codes</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-600">Extended ASCII</td>
                  <td className="p-3">8 Bits</td>
                  <td className="p-3">256 (2⁸)</td>
                  <td className="p-3">Western European accented characters</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-600">EBCDIC</td>
                  <td className="p-3">8 Bits</td>
                  <td className="p-3">256 (2⁸)</td>
                  <td className="p-3">IBM Mainframe enterprise computer networks</td>
                </tr>
                <tr className="bg-emerald-50/50 dark:bg-emerald-950/20">
                  <td className="p-3 font-bold text-emerald-600">Unicode (UTF-16/32)</td>
                  <td className="p-3">16 to 32 Bits</td>
                  <td className="p-3">65,536+ (2¹⁶+)</td>
                  <td className="p-3 font-bold">Universal Global Standard (Sinhala, Tamil, Emojis)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
