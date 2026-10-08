'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitCommit, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowDown, 
  Circle, 
  Diamond, 
  Square, 
  FileCode2,
  RefreshCw,
  Layers
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface FlowchartSymbol {
  id: string;
  nameEn: string;
  nameSi: string;
  shapeName: string;
  description: string;
  rules: string;
}

const FLOWCHART_SYMBOLS: FlowchartSymbol[] = [
  {
    id: 'terminal',
    nameEn: 'Terminal (ආරම්භය / අවසානය)',
    nameSi: 'ඕවලාකාර හෝ වටකුරු ඍජුකෝණාස්‍රය',
    shapeName: 'Oval / Rounded Rectangle',
    description: 'Marks the START (ආරම්භය) and STOP / END (අවසානය) of the flowchart.',
    rules: 'START has 1 exit line; STOP has 1 entry line.'
  },
  {
    id: 'io',
    nameEn: 'Input / Output (ආදාන / ප්‍රතිදාන)',
    nameSi: 'සමාන්තරාස්‍රය (Parallelogram)',
    shapeName: 'Parallelogram',
    description: 'Receives user inputs (READ / INPUT) and displays results (PRINT / DISPLAY / OUTPUT).',
    rules: 'READ Mark, PRINT Total, DISPLAY "Pass"'
  },
  {
    id: 'process',
    nameEn: 'Process (සැකසුම / ක්‍රියාවලිය)',
    nameSi: 'ඍජුකෝණාස්‍රය (Rectangle)',
    shapeName: 'Rectangle',
    description: 'Executes internal calculations, arithmetic assignments, and variable initializations.',
    rules: 'Sum = Sum + Mark, Avg = Total / 5, Count = 1'
  },
  {
    id: 'decision',
    nameEn: 'Decision (තීරණය / කොන්දේසිය)',
    nameSi: 'රොම්බසය (Diamond / Rhombus)',
    shapeName: 'Diamond / Rhombus',
    description: 'Evaluates a boolean condition (True/False or Yes/No) to branch into alternate paths.',
    rules: 'STRICT RULE: Exactly 1 entry line and strictly 2 exit lines (True & False).'
  },
  {
    id: 'connector',
    nameEn: 'Connector (සම්බන්ධකය)',
    nameSi: 'කුඩා වෘත්තය (Small Circle)',
    shapeName: 'Small Circle',
    description: 'Connects flowlines across different parts of a complex diagram or page.',
    rules: 'Prevents confusing crossing lines in complex loops.'
  },
];

interface SnapQuizItem {
  id: string;
  statement: string;
  expectedSymbol: 'terminal' | 'io' | 'process' | 'decision' | 'connector';
}

const SNAP_QUIZ: SnapQuizItem[] = [
  { id: 'q1', statement: 'READ StudentMark', expectedSymbol: 'io' },
  { id: 'q2', statement: 'TotalScore = Score1 + Score2', expectedSymbol: 'process' },
  { id: 'q3', statement: 'Is Age >= 18 ?', expectedSymbol: 'decision' },
  { id: 'q4', statement: 'START (ක්‍රියාවලිය අරඹන්න)', expectedSymbol: 'terminal' },
  { id: 'q5', statement: 'PRINT "Congratulations"', expectedSymbol: 'io' },
];

export function FlowchartMason() {
  const [activeTab, setActiveTab] = useState<'symbol_palette' | 'snap_lab' | 'exit_line_checker'>('snap_lab');

  // Snap Lab State
  const [userSelections, setUserSelections] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [snapComplete, setSnapComplete] = useState<boolean>(false);

  // Exit Line Checker State
  const [exitLineCount, setExitLineCount] = useState<number>(2);

  const handleSnapSelect = (quizId: string, symbolId: string) => {
    sound.playClick(600);
    const updated = { ...userSelections, [quizId]: symbolId };
    setUserSelections(updated);

    const q = SNAP_QUIZ.find(item => item.id === quizId);
    if (q) {
      const isCorrect = q.expectedSymbol === symbolId;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setResults(prev => ({ ...prev, [quizId]: isCorrect }));

      const allDone = SNAP_QUIZ.every(item => updated[item.id] === item.expectedSymbol);
      if (allDone) {
        sound.playVictory();
        setSnapComplete(true);
      }
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
              <GitCommit className="w-4 h-4" />
              <span>STATION 02 • THE FLOWCHART MASON (ගැලීම් සටහන් සංකේත හා නීති)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              ANSI Flowchart Symbols & Grammar (සම්මත ගැලීම් සටහන් රීති)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Master the ANSI standard flowchart symbols: Terminal (Start/Stop), Parallelogram (Input/Output), Rectangle (Process), Diamond (Decision with strictly 2 exit lines), and Connector.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('snap_lab'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'snap_lab'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Symbol Snap Lab
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('exit_line_checker'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'exit_line_checker'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Decision 2-Line Rule
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('symbol_palette'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'symbol_palette'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              ANSI Reference Guide
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'snap_lab' && (
          <motion.div
            key="snap_lab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Flowchart Symbol Matcher Challenge (සංකේත ගැලපුම් අභියෝගය)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Assign each algorithmic instruction to its mathematically correct ANSI flowchart container.
                </p>
              </div>

              {snapComplete && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4" /> 5/5 Perfect Flowchart Mapping!
                </div>
              )}
            </div>

            {/* 5 Quiz Rows */}
            <div className="space-y-3">
              {SNAP_QUIZ.map((q) => {
                const selected = userSelections[q.id];
                const isCorrect = results[q.id];

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : selected && !isCorrect
                        ? 'bg-rose-950/20 border-rose-500/50 shadow-md shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-slate-950 text-cyan-300 font-mono font-bold text-xs rounded-xl border border-slate-800">
                        {q.statement}
                      </div>
                      {isCorrect && (
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">
                          ✓ CORRECT
                        </span>
                      )}
                    </div>

                    {/* Shape Selector Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {[
                        { id: 'terminal', label: 'Terminal (Oval)' },
                        { id: 'io', label: 'Input/Output (Parallelogram)' },
                        { id: 'process', label: 'Process (Rectangle)' },
                        { id: 'decision', label: 'Decision (Diamond)' },
                      ].map((sym) => (
                        <button
                          key={sym.id}
                          onClick={() => handleSnapSelect(q.id, sym.id)}
                          className={`px-2.5 py-1.5 rounded-xl text-[10px] font-bold border truncate transition-all ${
                            selected === sym.id
                              ? sym.id === q.expectedSymbol
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {sym.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'exit_line_checker' && (
          <motion.div
            key="exit_line_checker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Interactive Diamond Sandbox */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[360px] shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  DECISION EXIT-LINE INSPECTOR (තීරණ සංකේතයේ පිටවීමේ රේඛා)
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  exitLineCount === 2 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300 animate-pulse'
                }`}>
                  {exitLineCount} Exit Lines ({exitLineCount === 2 ? 'VALID ANSI' : 'VIOLATION'})
                </span>
              </div>

              {/* Diamond Wire Simulation */}
              <div className="my-auto py-6 flex flex-col items-center justify-center space-y-3">
                {/* Entry Wire */}
                <div className="h-6 w-0.5 bg-cyan-400" />
                
                {/* Diamond Box */}
                <div className="p-4 bg-amber-950/80 border-2 border-amber-400 rounded-2xl text-xs font-black text-amber-200 text-center w-48 shadow-lg shadow-amber-500/10">
                  Is Mark &ge; 50 ?
                </div>

                {/* Exit Lines */}
                {exitLineCount === 2 ? (
                  <div className="grid grid-cols-2 gap-8 w-full max-w-sm pt-2">
                    <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-200 text-center">
                      [TRUE / YES] &rarr; Pass
                    </div>
                    <div className="p-2.5 bg-rose-950/60 border border-rose-500/40 rounded-xl text-xs font-bold text-rose-200 text-center">
                      [FALSE / NO] &rarr; Fail
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 w-full max-w-md pt-2">
                    <div className="p-2 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-[10px] font-bold text-emerald-200 text-center">
                      [Line 1: Yes]
                    </div>
                    <div className="p-2 bg-rose-950/60 border border-rose-500/40 rounded-xl text-[10px] font-bold text-rose-200 text-center">
                      [Line 2: No]
                    </div>
                    <div className="p-2 bg-rose-900 border-2 border-rose-400 rounded-xl text-[10px] font-bold text-rose-100 text-center animate-bounce">
                      [Line 3: Maybe? ✗]
                    </div>
                  </div>
                )}
              </div>

              {/* Status Message */}
              <div className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 ${
                exitLineCount === 2
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500/60 text-rose-200'
              }`}>
                {exitLineCount === 2 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                )}
                <span>
                  {exitLineCount === 2
                    ? 'Strict Rule Followed: A Decision Diamond MUST have exactly 1 entry and strictly 2 exit lines (True/False).'
                    : 'Rule Violation: A Decision Diamond can NEVER have 3 exit lines in ANSI Flowcharts! Binary decisions must branch into exactly two paths.'}
                </span>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold">
                TEST EXIT LINE INTEGRITY:
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-bold text-white">
                  Toggle Exit Paths:
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => { sound.playClick(600); setExitLineCount(2); }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      exitLineCount === 2
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    2 Exit Paths (Valid)
                  </button>
                  <button
                    onClick={() => { sound.playError(); setExitLineCount(3); }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      exitLineCount === 3
                        ? 'bg-rose-600 text-white border-rose-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    3 Exit Paths (Invalid)
                  </button>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl text-xs text-slate-300 space-y-2">
                <div className="font-bold text-cyan-300">💡 O/L Marking Scheme Note:</div>
                <p>
                  In G.C.E. O/L Paper II, students frequently lose marks by drawing 3 exit lines from a decision symbol or forgetting to label the exit lines as <strong>True / False</strong> (or <strong>Yes / No</strong>).
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'symbol_palette' && (
          <motion.div
            key="symbol_palette"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {FLOWCHART_SYMBOLS.map((sym) => (
              <div
                key={sym.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {sym.nameEn}
                    </h4>
                    <div className="text-[11px] text-cyan-400 font-mono">
                      {sym.shapeName}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {sym.description}
                </p>

                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800/80 text-[10px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold">Rule: </span>{sym.rules}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
