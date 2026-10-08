'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FunctionSquare, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  HelpCircle, 
  RotateCcw, 
  Sliders, 
  Layers, 
  Filter,
  Check,
  X
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type LabMode = 'stats_overview' | 'count_vs_counta' | 'if_gatekeeper';

export function FormulaLab() {
  const [labMode, setLabMode] = useState<LabMode>('stats_overview');

  // Stats Data
  const [sampleNumbers, setSampleNumbers] = useState<number[]>([70, 85, 90, 45, 60]);

  // COUNT vs COUNTA Data
  const [mixedCells] = useState<Array<{ id: number; val: string | number | null; isNumeric: boolean; isNonEmpty: boolean }>>([
    { id: 1, val: 75, isNumeric: true, isNonEmpty: true },
    { id: 2, val: 82, isNumeric: true, isNonEmpty: true },
    { id: 3, val: 'Absent', isNumeric: false, isNonEmpty: true },
    { id: 4, val: 90, isNumeric: true, isNonEmpty: true },
    { id: 5, val: null, isNumeric: false, isNonEmpty: false },
    { id: 6, val: 'Medical', isNumeric: false, isNonEmpty: true },
    { id: 7, val: 60, isNumeric: true, isNonEmpty: true },
    { id: 8, val: null, isNumeric: false, isNonEmpty: false }
  ]);
  const [activeLens, setActiveLens] = useState<'none' | 'count' | 'counta'>('none');

  // IF Gatekeeper State
  const [studentScore, setStudentScore] = useState<number>(65);
  const [passThreshold, setPassThreshold] = useState<number>(50);

  // Computations
  const sumVal = sampleNumbers.reduce((a, b) => a + b, 0);
  const avgVal = +(sumVal / sampleNumbers.length).toFixed(1);
  const maxVal = Math.max(...sampleNumbers);
  const minVal = Math.min(...sampleNumbers);

  const countResult = mixedCells.filter(c => c.isNumeric).length;
  const countaResult = mixedCells.filter(c => c.isNonEmpty).length;

  const isPassed = studentScore >= passThreshold;

  const handleApplyLens = (lens: 'count' | 'counta') => {
    sound.playSnap();
    setActiveLens(lens);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 04 • ශ්‍රිත මෙවලම් මාලාව
            </span>
            <span className="text-xs font-semibold text-slate-400">
              SUM, AVERAGE, MAX, MIN, COUNT vs. COUNTA & IF
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <FunctionSquare className="w-5 h-5 text-emerald-400" />
            The Function Toolbox & Decision Engine (පැතුරුම්පත් ශ්‍රිත සහ තීරණ ගැනීම්)
          </h2>
          <p className="text-xs text-slate-300">
            Experiment with statistical aggregates, filter numbers with COUNT vs COUNTA, and build conditional IF logic gates.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setLabMode('stats_overview'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              labMode === 'stats_overview'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Core Stats
          </button>
          <button
            onClick={() => { sound.playClick(); setLabMode('count_vs_counta'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              labMode === 'count_vs_counta'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            COUNT vs. COUNTA
          </button>
          <button
            onClick={() => { sound.playClick(); setLabMode('if_gatekeeper'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              labMode === 'if_gatekeeper'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            =IF() Logic Gate
          </button>
        </div>
      </div>

      {/* Mode 1: Core Stats Overview */}
      {labMode === 'stats_overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Numbers Input Tray */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white">ACTIVE DATA RANGE (A1:A5)</span>
                <span className="text-[10px] text-emerald-400 font-mono">5 Numeric Records</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {sampleNumbers.map((num, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center space-y-1">
                    <div className="text-[10px] text-slate-500 font-mono">A{idx + 1}</div>
                    <input
                      type="number"
                      value={num}
                      onChange={(e) => {
                        sound.playClick(800, 0.02);
                        const val = Number(e.target.value) || 0;
                        setSampleNumbers(prev => prev.map((n, i) => i === idx ? val : n));
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-1 text-center font-mono font-bold text-emerald-300 text-sm outline-none focus:border-emerald-500"
                    />
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
                Tip: Edit any value above to watch <strong>Automatic Recalculation</strong> update all 4 statistical functions in real time!
              </div>
            </div>
          </div>

          {/* Real-time Function Readouts */}
          <div className="lg:col-span-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {/* SUM */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-bold">=SUM(A1:A5)</div>
                <div className="text-2xl font-black font-mono text-white">{sumVal}</div>
                <p className="text-[10px] text-slate-400 font-sinhala">සමස්ත එකතුව</p>
              </div>

              {/* AVERAGE */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">=AVERAGE(A1:A5)</div>
                <div className="text-2xl font-black font-mono text-white">{avgVal}</div>
                <p className="text-[10px] text-slate-400 font-sinhala">සාමාන්‍ය අගය</p>
              </div>

              {/* MAX */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-amber-400 font-bold">=MAX(A1:A5)</div>
                <div className="text-2xl font-black font-mono text-white">{maxVal}</div>
                <p className="text-[10px] text-slate-400 font-sinhala">උපරිම අගය</p>
              </div>

              {/* MIN */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-rose-400 font-bold">=MIN(A1:A5)</div>
                <div className="text-2xl font-black font-mono text-white">{minVal}</div>
                <p className="text-[10px] text-slate-400 font-sinhala">අවම අගය</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: COUNT vs. COUNTA (2024 O/L P1 Q20) */}
      {labMode === 'count_vs_counta' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: 8 Cells Sample Range */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-white">SAMPLE SHEET RANGE A1:A8</span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Lens: {activeLens === 'none' ? 'None' : activeLens === 'count' ? '=COUNT() Active' : '=COUNTA() Active'}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {mixedCells.map(c => {
                    const isCountTarget = activeLens === 'count' && c.isNumeric;
                    const isCountaTarget = activeLens === 'counta' && c.isNonEmpty;

                    return (
                      <motion.div
                        key={c.id}
                        animate={{
                          scale: isCountTarget || isCountaTarget ? 1.05 : 1,
                          borderColor: isCountTarget ? 'rgba(52, 211, 153, 0.8)' : isCountaTarget ? 'rgba(56, 189, 248, 0.8)' : 'rgba(51, 65, 85, 0.4)'
                        }}
                        className={`p-3 rounded-xl border text-center font-mono text-xs flex flex-col justify-between min-h-[64px] ${
                          isCountTarget
                            ? 'bg-emerald-950/80 text-emerald-200 shadow-lg shadow-emerald-500/20'
                            : isCountaTarget
                              ? 'bg-sky-950/80 text-sky-200 shadow-lg shadow-sky-500/20'
                              : 'bg-slate-900/80 text-slate-400'
                        }`}
                      >
                        <div className="text-[9px] text-slate-600">A{c.id}</div>
                        <div className="font-bold text-sm">
                          {c.val === null ? <span className="text-slate-700 italic">[Empty]</span> : c.val}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Filter Selector Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => handleApplyLens('count')}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                      activeLens === 'count'
                        ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    <span>Apply =COUNT(A1:A8) Lens</span>
                  </button>

                  <button
                    onClick={() => handleApplyLens('counta')}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                      activeLens === 'counta'
                        ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    <span>Apply =COUNTA(A1:A8) Lens</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Sieve Counter Rationale */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-400">=COUNT(A1:A8)</div>
                    <div className="text-[11px] text-slate-400">Counts numbers ONLY</div>
                  </div>
                  <div className="text-2xl font-black font-mono text-emerald-300">{countResult}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-sky-400">=COUNTA(A1:A8)</div>
                    <div className="text-[11px] text-slate-400">Counts all non-blank cells</div>
                  </div>
                  <div className="text-2xl font-black font-mono text-sky-300">{countaResult}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 space-y-1">
                  <div className="text-white font-bold">2024 O/L Past Paper Clue:</div>
                  <p>
                    <code>=COUNT()</code> strictly ignores text strings like <em>'Absent'</em> and <em>'Medical'</em>, whereas <code>=COUNTA()</code> counts every cell that is not empty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: IF Gatekeeper (2025 O/L P1 Q21) */}
      {labMode === 'if_gatekeeper' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Score Slider & Gatekeeper Scale */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-6 shadow-2xl">
              {/* Formula Structure Display */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono text-sm md:text-base font-black">
                <span className="text-slate-400">=IF(</span>
                <span className="text-amber-400">B2 &gt;= {passThreshold}</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400">"PASS"</span>
                <span className="text-slate-400">, </span>
                <span className="text-rose-400">"FAIL"</span>
                <span className="text-slate-400">)</span>
              </div>

              {/* Interactive Score Slider */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">Input Cell B2 (Student Marks):</span>
                  <span className="font-mono text-base font-black text-amber-400">{studentScore} / 100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={studentScore}
                  onChange={(e) => {
                    sound.playClick(600, 0.02);
                    setStudentScore(Number(e.target.value));
                  }}
                  className="w-full accent-amber-400"
                />
              </div>

              {/* Output Result Stamp */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase">Evaluated Result:</span>
                <motion.div
                  key={isPassed ? 'pass' : 'fail'}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`px-8 py-3 rounded-2xl font-black font-mono text-2xl flex items-center gap-2 border-2 shadow-xl ${
                    isPassed
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-emerald-500/20'
                      : 'bg-rose-950 text-rose-300 border-rose-500 shadow-rose-500/20'
                  }`}
                >
                  {isPassed ? <Check className="w-6 h-6 text-emerald-400" /> : <X className="w-6 h-6 text-rose-400" />}
                  <span>{isPassed ? 'PASS' : 'FAIL'}</span>
                </motion.div>
                <div className="text-[11px] text-slate-400 font-mono pt-1">
                  Condition: {studentScore} &gt;= {passThreshold} ➔ <strong>{isPassed ? 'TRUE' : 'FALSE'}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right: IF Function Anatomy */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                Anatomy of the IF Function (IF ශ්‍රිතයේ ව්‍යුහය)
              </h4>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-teal-300">
                =IF(Condition, True_Value, False_Value)
              </div>
              <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-2">
                <li>
                  <strong className="text-amber-400">1. Condition:</strong> A logical comparison using relational operators (<code>&gt;=</code>, <code>&lt;=</code>, <code>=</code>, <code>&lt;&gt;</code>).
                </li>
                <li>
                  <strong className="text-emerald-400">2. Value if True:</strong> Returned when condition evaluates to TRUE.
                </li>
                <li>
                  <strong className="text-rose-400">3. Value if False:</strong> Returned when condition evaluates to FALSE.
                </li>
                <li>
                  <strong className="text-slate-200">Quotation Marks Rule:</strong> Any text result like <code>"PASS"</code> must be enclosed in double quotes. Numbers (e.g. <code>50</code>) do not use quotes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
