'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Bug, 
  AlertTriangle, 
  Layers, 
  Sliders, 
  ShieldAlert, 
  Play, 
  RotateCcw,
  Boxes
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function PascalTerminal() {
  const [activeTab, setActiveTab] = useState<'div_mod' | 'bug_zapper' | 'array_locker'>('div_mod');

  // Div & Mod Dial State (2021 O/L P1 Q38)
  const [numerator, setNumerator] = useState<number>(19);
  const [denominator, setDenominator] = useState<number>(4);

  const quotientDiv = Math.floor(numerator / denominator);
  const remainderMod = numerator % denominator;

  // Bug Zapper State (No semicolon before ELSE)
  const [hasSemicolonBug, setHasSemicolonBug] = useState<boolean>(true);
  const [compilerPassed, setCompilerPassed] = useState<boolean>(false);

  // 1D Array Locker State (array[1..5])
  const [arraySlots, setArraySlots] = useState<(number | null)[]>([10, 20, 30, 40, 50]);
  const [attemptedIndex, setAttemptedIndex] = useState<number | null>(null);
  const [boundsError, setBoundsError] = useState<string | null>(null);

  const handleZapSemicolon = () => {
    sound.playVictory();
    setHasSemicolonBug(false);
    setCompilerPassed(true);
  };

  const handleResetBug = () => {
    sound.playClick(400);
    setHasSemicolonBug(true);
    setCompilerPassed(false);
  };

  const handleAccessSlot = (index: number) => {
    sound.playClick(600);
    setAttemptedIndex(index);
    if (index >= 1 && index <= 5) {
      setBoundsError(null);
      sound.playSnap();
    } else {
      sound.playError();
      setBoundsError(`Runtime Error: Array Index [${index}] Out of Bounds! Valid index range is 1..5.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Terminal className="w-4 h-4" />
              <span>STATION 05 • PASCAL TERMINAL & BUG ZAPPER (පැස්කල් ක්‍රමලේඛන මෙවලම්)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Pascal Syntax, div/mod & 1D Arrays (පැස්කල් වාක්‍ය ඛණ්ඩ හා 1D අරාවන්)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Experiment with integer division (`div`) and modulus (`mod`), zap the illegal semicolon before `else`, and verify 1D array boundaries (`array[1..5] of integer`).
            </p>
          </div>

          {/* Sub Tab Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('div_mod'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'div_mod'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              div vs mod (2021 O/L)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('bug_zapper'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'bug_zapper'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bug className="w-3.5 h-3.5" />
              Bug Zapper (No ; Before Else)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('array_locker'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'array_locker'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              1D Array Locker
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'div_mod' && (
          <motion.div
            key="div_mod"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Interactive Knife Visualizer */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[360px] shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  DIVISION & MODULUS LAB (2021 O/L Paper I Q38)
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  {numerator} &divide; {denominator}
                </span>
              </div>

              {/* Grouping Diagram */}
              <div className="my-auto py-4 space-y-4">
                <div className="text-xs text-slate-300">
                  Dividing <strong>{numerator}</strong> items into equal groups of <strong>{denominator}</strong>:
                </div>

                {/* Groups of Denominator */}
                <div className="flex flex-wrap gap-3 items-center justify-center p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  {Array.from({ length: quotientDiv }).map((_, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-2.5 bg-cyan-950/60 border border-cyan-500/40 rounded-xl flex items-center gap-1 shadow-md"
                    >
                      <span className="text-[10px] font-mono text-cyan-400 font-bold mr-1">
                        Group {gIdx + 1}:
                      </span>
                      {Array.from({ length: denominator }).map((_, iIdx) => (
                        <span key={iIdx} className="w-3 h-3 rounded-full bg-cyan-400" />
                      ))}
                    </div>
                  ))}

                  {/* Leftovers */}
                  {remainderMod > 0 && (
                    <div className="p-2.5 bg-amber-950/60 border border-amber-500/40 rounded-xl flex items-center gap-1 shadow-md">
                      <span className="text-[10px] font-mono text-amber-400 font-bold mr-1">
                        Leftover (mod):
                      </span>
                      {Array.from({ length: remainderMod }).map((_, rIdx) => (
                        <span key={rIdx} className="w-3 h-3 rounded-full bg-amber-400" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Pascal Output Terminal */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-[10px] text-slate-500 uppercase font-bold">PASCAL OUTPUT:</div>
                <div className="text-cyan-300">
                  x := {numerator} div {denominator}; <span className="text-slate-500">{'{'} x = {quotientDiv} (Whole Quotient) {'}'}</span>
                </div>
                <div className="text-amber-300">
                  y := {numerator} mod {denominator}; <span className="text-slate-500">{'{'} y = {remainderMod} (Remainder) {'}'}</span>
                </div>
                <div className="text-emerald-400 font-bold pt-1">
                  writeln(x, &apos; &apos;, y); &rarr; &quot;{quotientDiv} {remainderMod}&quot;
                </div>
              </div>
            </div>

            {/* Right: Sliders */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold">
                ADJUST VALUES:
              </div>

              {/* Numerator Slider */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>Numerator (සංඛ්‍යාව):</span>
                  <span className="font-mono text-cyan-400">{numerator}</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  value={numerator}
                  onChange={(e) => {
                    sound.playClick(600);
                    setNumerator(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Denominator Slider */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>Denominator / Divisor (බෙදුම්කරු):</span>
                  <span className="font-mono text-amber-400">{denominator}</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={8}
                  value={denominator}
                  onChange={(e) => {
                    sound.playClick(600);
                    setDenominator(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-cyan-300">💡 Exam Definition:</div>
                <div>• <strong>div</strong>: Returns the integer quotient discarding any decimal fractions.</div>
                <div>• <strong>mod</strong>: Returns the integer remainder of the division.</div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'bug_zapper' && (
          <motion.div
            key="bug_zapper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Bug className="w-5 h-5 text-rose-400" />
                  The Semicolon Bug Zapper (පැස්කල් වාක්‍ය දෝෂය සොයන්න)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tap the illegal character causing a compilation error in the Pascal conditional statement below.
                </p>
              </div>

              <button
                onClick={handleResetBug}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Code
              </button>
            </div>

            {/* Interactive Code Editor */}
            <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-2 shadow-2xl">
              <div className="text-purple-400 font-bold">
                if (marks &gt;= 50) then
              </div>
              <div className="pl-6 flex items-center gap-1">
                <span className="text-emerald-400">writeln(&apos;Pass&apos;)</span>
                {hasSemicolonBug ? (
                  <button
                    onClick={handleZapSemicolon}
                    className="px-2 py-0.5 bg-rose-600/80 hover:bg-rose-500 text-white rounded font-black animate-pulse transition-all shadow-md shadow-rose-600/50"
                    title="Click to ZAP this illegal semicolon!"
                  >
                    ; <span className="text-[10px] font-sans">← TAP TO ZAP!</span>
                  </button>
                ) : (
                  <span className="text-slate-600 text-xs italic">[Semicolon Removed ✓]</span>
                )}
              </div>
              <div className="text-purple-400 font-bold">
                else
              </div>
              <div className="pl-6 text-emerald-400">
                writeln(&apos;Fail&apos;);
              </div>
            </div>

            {/* Compiler Diagnostic Output */}
            <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
              compilerPassed
                ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
            }`}>
              {compilerPassed ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
              )}
              <div>
                {compilerPassed
                  ? 'COMPILATION SUCCESSFUL! Cardinal Rule: In Pascal, NEVER place a semicolon (;) immediately before the ELSE keyword.'
                  : 'FATAL SYNTAX ERROR: Semicolon before ELSE terminates the IF statement early, causing an unassociated ELSE error!'}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'array_locker' && (
          <motion.div
            key="array_locker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Boxes className="w-5 h-5 text-indigo-400" />
                1D Array Locker: <code className="text-cyan-400">var marks : array[1..5] of integer;</code>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Inspect array index slots 1 through 5 and observe how accessing index 0 or 6 triggers an Array Out of Bounds exception.
              </p>
            </div>

            {/* Array Slot Rack */}
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
              {/* Out of bounds left: Slot 0 */}
              <button
                onClick={() => handleAccessSlot(0)}
                className="p-3.5 rounded-2xl bg-rose-950/20 border-2 border-dashed border-rose-500/40 text-left space-y-1 hover:border-rose-400 transition-all"
              >
                <div className="text-[10px] font-mono text-rose-400 font-bold">Index [0]</div>
                <div className="text-xs text-slate-500 italic">Invalid</div>
                <div className="text-[9px] text-rose-400">Out of Bounds</div>
              </button>

              {/* Slots 1 to 5 */}
              {[1, 2, 3, 4, 5].map((idx) => (
                <button
                  key={idx}
                  onClick={() => handleAccessSlot(idx)}
                  className={`p-3.5 rounded-2xl border-2 text-left space-y-1 transition-all ${
                    attemptedIndex === idx
                      ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] font-mono text-indigo-400 font-bold">marks[{idx}]</div>
                  <div className="text-sm font-black text-white font-mono">{arraySlots[idx - 1]}</div>
                  <div className="text-[9px] text-emerald-400 font-mono">Valid Slot</div>
                </button>
              ))}

              {/* Out of bounds right: Slot 6 */}
              <button
                onClick={() => handleAccessSlot(6)}
                className="p-3.5 rounded-2xl bg-rose-950/20 border-2 border-dashed border-rose-500/40 text-left space-y-1 hover:border-rose-400 transition-all"
              >
                <div className="text-[10px] font-mono text-rose-400 font-bold">Index [6]</div>
                <div className="text-xs text-slate-500 italic">Invalid</div>
                <div className="text-[9px] text-rose-400">Out of Bounds</div>
              </button>
            </div>

            {/* Error / Result Banner */}
            {boundsError ? (
              <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/60 text-xs font-bold text-rose-200 flex items-center gap-2.5 animate-pulse">
                <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span>{boundsError}</span>
              </div>
            ) : attemptedIndex !== null ? (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/60 text-xs font-bold text-emerald-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Valid Index Access: marks[{attemptedIndex}] holds value {arraySlots[attemptedIndex - 1]}.</span>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
