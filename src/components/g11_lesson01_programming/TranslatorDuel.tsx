'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  AlertOctagon, 
  Bug, 
  Binary, 
  Play, 
  FastForward, 
  HelpCircle, 
  RotateCcw,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ErrorScenario {
  id: string;
  codeSnippet: string;
  expectedType: 'syntax' | 'runtime' | 'logic';
  explanation: string;
}

const ERROR_SCENARIOS: ErrorScenario[] = [
  {
    id: 'err1',
    codeSnippet: "writln('Hello World');",
    expectedType: 'syntax',
    explanation: "Misspelled keyword 'writln' instead of 'writeln'. Grammar rule violation caught during compilation."
  },
  {
    id: 'err2',
    codeSnippet: 'Average := Total * 5;',
    expectedType: 'logic',
    explanation: 'Multiplied by 5 instead of dividing by 5. Code compiles and runs cleanly, but produces mathematically wrong answers.'
  },
  {
    id: 'err3',
    codeSnippet: 'Result := Score / 0;',
    expectedType: 'runtime',
    explanation: 'Division by zero causes the processor to trigger an unrecoverable exception and crash at runtime.'
  }
];

export function TranslatorDuel() {
  const [activeTab, setActiveTab] = useState<'race' | 'generations' | 'error_classifier'>('race');

  // Translation Race State
  const [compilerStatus, setCompilerStatus] = useState<'idle' | 'compiling' | 'object_generated' | 'executed'>('idle');
  const [interpreterStatus, setInterpreterStatus] = useState<'idle' | 'line1' | 'line2' | 'line3_error' | 'stopped'>('idle');

  // Error Classifier State
  const [classifiedAnswers, setClassifiedAnswers] = useState<Record<string, string>>({});
  const [classifierResults, setClassifierResults] = useState<Record<string, boolean>>({});

  const handleStartRace = () => {
    sound.playClick(700);
    setCompilerStatus('compiling');
    setInterpreterStatus('line1');

    // Compiler: Scans all lines in 1 flash, creates .exe, and runs instantly
    setTimeout(() => {
      setCompilerStatus('object_generated');
      sound.playSnap();
      setTimeout(() => {
        setCompilerStatus('executed');
        sound.playVictory();
      }, 700);
    }, 800);

    // Interpreter: Steps line 1 -> line 2 -> line 3 (halts on error)
    setTimeout(() => {
      setInterpreterStatus('line2');
      sound.playCrankTick();
      setTimeout(() => {
        setInterpreterStatus('line3_error');
        sound.playError();
      }, 700);
    }, 500);
  };

  const handleResetRace = () => {
    sound.playClick(450);
    setCompilerStatus('idle');
    setInterpreterStatus('idle');
  };

  const handleClassifyError = (id: string, type: string) => {
    sound.playClick(600);
    const updated = { ...classifiedAnswers, [id]: type };
    setClassifiedAnswers(updated);

    const scenario = ERROR_SCENARIOS.find(s => s.id === id);
    if (scenario) {
      const isCorrect = scenario.expectedType === type;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setClassifierResults(prev => ({ ...prev, [id]: isCorrect }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>STATION 04 • THE TRANSLATOR DUEL (සම්පාදක හා අර්ථවින්‍යාසක සංසන්දනය)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Compiler vs. Interpreter & Error Types (පරිවර්තක හා දෝෂ වර්ග)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Discover the mechanical differences between Compilers (.exe object code) and Interpreters (line-by-line), trace 5 generations of programming languages, and classify Syntax, Runtime, and Logic errors.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('race'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'race'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Translation Race (2025 O/L)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('error_classifier'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'error_classifier'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bug className="w-3.5 h-3.5" />
              Error Classifier (Syntax/Runtime/Logic)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('generations'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'generations'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Binary className="w-3.5 h-3.5" />
              1GL to 5GL Generations
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'race' && (
          <motion.div
            key="race"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Top Action Bar */}
            <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex-wrap gap-2">
              <div className="text-xs text-slate-300">
                Click <strong>Start Translation Race</strong> to compare how a Compiler and an Interpreter process 10 lines of source code.
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleStartRace}
                  disabled={compilerStatus === 'compiling' || compilerStatus === 'object_generated'}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold shadow-lg shadow-amber-600/30 flex items-center gap-2 hover:from-amber-500 hover:to-orange-500 disabled:opacity-40"
                >
                  <Play className="w-4 h-4 fill-white" /> Start Translation Race
                </button>
                <button
                  onClick={handleResetRace}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Side-by-Side Conveyor Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Track A: Compiler */}
              <div className="bg-slate-950 border-2 border-amber-500/40 rounded-3xl p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    TRACK A: COMPILER (සම්පාදකය)
                  </span>
                  <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                    Whole File Translation
                  </span>
                </div>

                {/* Status Box */}
                <div className="h-44 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white">
                      Status: {compilerStatus === 'idle' ? 'Ready to Compile' : compilerStatus === 'compiling' ? 'Scanning entire source code (1 flash)...' : compilerStatus === 'object_generated' ? 'Generated standalone program.exe' : 'Executed at Maximum Speed!'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Translates complete source code into Machine Code (.exe) at once before running.
                    </div>
                  </div>

                  {/* Visual Object File Stamp */}
                  <div className="my-auto flex justify-center">
                    {compilerStatus === 'object_generated' || compilerStatus === 'executed' ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-mono font-black text-xs shadow-lg shadow-emerald-500/30 flex items-center gap-2 border border-emerald-400"
                      >
                        <Binary className="w-4 h-4" />
                        PROGRAM.EXE [Object File]
                      </motion.div>
                    ) : (
                      <div className="text-[11px] text-slate-600 font-mono italic">
                        [Waiting to generate .exe object code]
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] font-mono text-emerald-400">
                    {compilerStatus === 'executed' && '✓ Execution Finished: 0.02ms'}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-300">Compiler Key Traits (2025 O/L):</div>
                  <div>• Translates entire source code at once.</div>
                  <div>• Produces a permanent <strong>.exe Object File</strong>.</div>
                  <div>• Faster execution speed; reports all errors together at the end.</div>
                </div>
              </div>

              {/* Track B: Interpreter */}
              <div className="bg-slate-950 border-2 border-cyan-500/40 rounded-3xl p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                    <FastForward className="w-4 h-4" />
                    TRACK B: INTERPRETER (අර්ථවින්‍යාසකය)
                  </span>
                  <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">
                    Line-by-Line Execution
                  </span>
                </div>

                {/* Status Box */}
                <div className="h-44 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white">
                      Status: {interpreterStatus === 'idle' ? 'Ready to Interpret' : interpreterStatus === 'line1' ? 'Translating & Running Line 1...' : interpreterStatus === 'line2' ? 'Translating & Running Line 2...' : 'HALTED ON ERROR AT LINE 3!'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Translates line-by-line; stops immediately upon encountering the first error.
                    </div>
                  </div>

                  {/* Line Scanner Graphic */}
                  <div className="space-y-1.5 my-auto">
                    <div className={`p-1.5 rounded text-[11px] font-mono ${interpreterStatus !== 'idle' ? 'bg-emerald-950 text-emerald-300' : 'bg-slate-950 text-slate-500'}`}>
                      Line 1: x := 10; [Translated & Executed]
                    </div>
                    <div className={`p-1.5 rounded text-[11px] font-mono ${interpreterStatus === 'line2' || interpreterStatus === 'line3_error' ? 'bg-emerald-950 text-emerald-300' : 'bg-slate-950 text-slate-500'}`}>
                      Line 2: y := 20; [Translated & Executed]
                    </div>
                    <div className={`p-1.5 rounded text-[11px] font-mono ${interpreterStatus === 'line3_error' ? 'bg-rose-950 text-rose-300 font-bold border border-rose-500/60 animate-pulse' : 'bg-slate-950 text-slate-500'}`}>
                      Line 3: writln(x); [ERROR: Stopped execution!]
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-cyan-400">
                    Does NOT create an intermediate .exe file
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-300">Interpreter Key Traits (2025 O/L):</div>
                  <div>• Translates and runs line-by-line.</div>
                  <div>• Does <strong>NOT</strong> generate any object file (.exe).</div>
                  <div>• Halts immediately on the first error encountered.</div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {activeTab === 'error_classifier' && (
          <motion.div
            key="error_classifier"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bug className="w-5 h-5 text-rose-400" />
                Programming Error Classifier (දෝෂ වර්ගීකරණ අභ්‍යාසය)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Classify each bug snippet into <strong>Syntax Error</strong> (වාක්‍ය වින්‍යාස), <strong>Runtime Error</strong> (ධාවන කාලීන), or <strong>Logic Error</strong> (තාර්කික).
              </p>
            </div>

            <div className="space-y-4">
              {ERROR_SCENARIOS.map((sc) => {
                const selected = classifiedAnswers[sc.id];
                const isCorrect = classifierResults[sc.id];

                return (
                  <div
                    key={sc.id}
                    className={`p-4 rounded-2xl border transition-all space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : selected && !isCorrect
                        ? 'bg-rose-950/20 border-rose-500/50 shadow-md shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="px-3 py-1.5 bg-slate-950 text-cyan-300 font-mono font-bold text-xs rounded-xl border border-slate-800 w-fit">
                        {sc.codeSnippet}
                      </div>

                      {/* 3 Error Buttons */}
                      <div className="flex gap-1.5">
                        {[
                          { id: 'syntax', label: 'Syntax Error' },
                          { id: 'runtime', label: 'Runtime Error' },
                          { id: 'logic', label: 'Logic Error' },
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            onClick={() => handleClassifyError(sc.id, btn.id)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
                              selected === btn.id
                                ? btn.id === sc.expectedType
                                  ? 'bg-emerald-600 text-white border-emerald-400'
                                  : 'bg-rose-600 text-white border-rose-400'
                                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300">
                      {sc.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'generations' && (
          <motion.div
            key="generations"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {[
              { gen: '1GL', name: 'Machine Language', code: '0100 1101', note: 'Pure binary; CPU native; machine-dependent.' },
              { gen: '2GL', name: 'Assembly Language', code: 'MOV AX, 01', note: 'Mnemonics; requires Assembler.' },
              { gen: '3GL', name: 'High-Level Language', code: 'readln(x);', note: 'English-like (Pascal, C, Python); needs Compiler/Interpreter.' },
              { gen: '4GL', name: 'Declarative Query', code: 'SELECT * FROM...', note: 'SQL; focuses on WHAT data to retrieve.' },
              { gen: '5GL', name: 'AI & Natural Constraint', code: 'likes(john, mary).', note: 'PROLOG, LISP; solves problems via constraints.' },
            ].map((g) => (
              <div
                key={g.gen}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                    {g.gen}
                  </span>
                  <h4 className="text-xs font-bold text-white mt-1.5 leading-tight">
                    {g.name}
                  </h4>
                </div>

                <div className="p-2 bg-slate-950 rounded-xl font-mono text-[10px] text-cyan-300 border border-slate-800">
                  {g.code}
                </div>

                <p className="text-[11px] text-slate-400">
                  {g.note}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
