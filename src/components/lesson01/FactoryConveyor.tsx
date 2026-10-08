'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RefreshCw, 
  Trophy, 
  FileSpreadsheet, 
  Sliders, 
  Layers, 
  Fingerprint, 
  FileText, 
  Database, 
  HelpCircle,
  Play,
  RotateCw
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { NicDecoder } from './NicDecoder';

interface ConveyorItem {
  id: string;
  text: string;
  type: 'data' | 'info';
  explanation: string;
  sinhala: string;
}

const CONVEYOR_ITEMS: ConveyorItem[] = [
  { id: '1', text: '85', type: 'data', explanation: 'Isolated number without subject or student context.', sinhala: 'හුදෙකලා අංකයකි' },
  { id: '2', text: '1st Place (Rank #1)', type: 'info', explanation: 'Processed rank ready for award decisions.', sinhala: 'පළමු ස්ථානය (තීරණ ගැනීම සඳහා සකස් කළ තොරතුරක්)' },
  { id: '3', text: 'Colombo, 150mm rain', type: 'data', explanation: 'Raw observation measurement before meteorological analysis.', sinhala: 'අමු නිරීක්ෂණ දත්තයක්' },
  { id: '4', text: 'Unsorted mark sheet', type: 'data', explanation: 'Raw collection of student scores without summary.', sinhala: 'සැකසුම් නොකළ ලකුණු ලේඛනයක්' },
  { id: '5', text: 'Class Average: 78.5%', type: 'info', explanation: 'Aggregated arithmetic mean representing batch performance.', sinhala: 'පන්තියේ සාමාන්‍යය' },
  { id: '6', text: '0771234567, 0719876543', type: 'data', explanation: 'Raw digit strings without assigned contact names.', sinhala: 'නම් රහිත අමු දුරකථන අංක' },
  { id: '7', text: 'Monthly Attendance % Report', type: 'info', explanation: 'Processed analytics for school administrative decisions.', sinhala: 'මාසික පැමිණීමේ වාර්තාව' },
  { id: '8', text: 'Final Grade: "A" Pass', type: 'info', explanation: 'Categorized result based on grading boundaries.', sinhala: 'විභාග සාමාර්ථ ශ්‍රේණිය' },
];

const STUDENT_MARKS = [
  { name: 'Ravi', sinhala: 'රවී', term1: 78, term2: 90, term3: 79 },
  { name: 'Nimal', sinhala: 'නිමල්', term1: 65, term2: 88, term3: 72 },
  { name: 'Mala', sinhala: 'මාලා', term1: 92, term2: 95, term3: 89 },
  { name: 'Sandun', sinhala: 'සඳුන්', term1: 58, term2: 64, term3: 61 },
];

export function FactoryConveyor() {
  const [activeTab, setActiveTab] = useState<'classifier' | 'processor' | 'nic' | 'system'>('classifier');
  
  // Classifier state
  const [queueIndex, setQueueIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [classifiedHistory, setClassifiedHistory] = useState<{ item: ConveyorItem; isCorrect: boolean }[]>([]);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Term-test processor state
  const [processorStep, setProcessorStep] = useState<0 | 1 | 2 | 3>(0); // 0: raw input, 1: sum & average, 2: ranking, 3: completed output
  const [crankAngle, setCrankAngle] = useState(0);
  const [isCranking, setIsCranking] = useState(false);

  // System Matcher state
  const [systemConnections, setSystemConnections] = useState<{ input: boolean; process: boolean; output: boolean; storage: boolean }>({
    input: false,
    process: false,
    output: false,
    storage: false,
  });

  const currentItem = queueIndex < CONVEYOR_ITEMS.length ? CONVEYOR_ITEMS[queueIndex] : null;

  // Classifier action
  const handleClassify = (target: 'data' | 'info') => {
    if (!currentItem) return;

    const isCorrect = currentItem.type === target;
    if (isCorrect) {
      sound.playSuccessDing();
      setScore((s) => s + 10);
      setFeedback({
        isCorrect: true,
        text: `✅ Correct! "${currentItem.text}" is ${target.toUpperCase()}. ${currentItem.explanation}`,
      });
    } else {
      sound.playBuzzer();
      setFeedback({
        isCorrect: false,
        text: `❌ Incorrect. "${currentItem.text}" is actually ${currentItem.type.toUpperCase()}. ${currentItem.explanation}`,
      });
    }

    setClassifiedHistory((prev) => [{ item: currentItem, isCorrect }, ...prev]);
    setQueueIndex((idx) => idx + 1);
  };

  const resetClassifier = () => {
    sound.playClick();
    setQueueIndex(0);
    setScore(0);
    setClassifiedHistory([]);
    setFeedback(null);
  };

  // Turn Crank
  const handleTurnCrank = () => {
    sound.playCrankTick();
    setCrankAngle((a) => a + 90);
    setIsCranking(true);

    setTimeout(() => {
      setIsCranking(false);
      if (processorStep < 3) {
        const nextStep = (processorStep + 1) as 1 | 2 | 3;
        setProcessorStep(nextStep);
        if (nextStep === 3) sound.playVictoryFanfare();
        else sound.playSnap();
      }
    }, 400);
  };

  const resetProcessor = () => {
    sound.playClick();
    setProcessorStep(0);
  };

  // System Connect toggle
  const toggleSystemComponent = (comp: 'input' | 'process' | 'output' | 'storage') => {
    sound.playSnap();
    setSystemConnections((prev) => {
      const updated = { ...prev, [comp]: !prev[comp] };
      const allConnected = Object.values(updated).every(Boolean);
      if (allConnected) sound.playVictoryFanfare();
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      {/* Sub-station Navigation Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('classifier');
          }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === 'classifier'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
          }`}
        >
          <Boxes className="w-4 h-4" />
          <span>1. Swipe-to-Classify</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('processor');
          }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === 'processor'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>2. Term-Test Processor</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('nic');
          }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === 'nic'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>3. NIC Number Dissector</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('system');
          }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            activeTab === 'system'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>4. 2021 Exam System Matcher</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. SWIPE-TO-CLASSIFY CONVEYOR */}
      {/* ========================================================================= */}
      {activeTab === 'classifier' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas Sandbox (Conveyor Belt) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Top HUD */}
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono uppercase text-indigo-300">Conveyor Speed: Active</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-emerald-400">Score: {score} XP</span>
                <span className="text-xs font-mono text-slate-400">
                  {Math.min(queueIndex + 1, CONVEYOR_ITEMS.length)} / {CONVEYOR_ITEMS.length}
                </span>
              </div>
            </div>

            {/* Conveyor Belt Track & Box */}
            <div className="my-6 relative py-10">
              {/* Belt Graphic */}
              <div className="h-6 bg-slate-800 border-y-2 border-indigo-500/40 rounded-full flex items-center justify-between px-4 overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(99,102,241,0.2)_50%,transparent_100%)] animate-pulse" />
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-3 bg-indigo-400/40 rounded-sm transform -skew-x-12" />
                ))}
              </div>

              {/* Active Floating Conveyor Item */}
              <div className="flex justify-center -mt-16 mb-4">
                <AnimatePresence mode="wait">
                  {currentItem ? (
                    <motion.div
                      key={currentItem.id}
                      initial={{ scale: 0.8, y: -20, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      exit={{ scale: 0.7, y: 30, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bg-gradient-to-br from-indigo-900/90 via-slate-900 to-indigo-950 border-2 border-indigo-400 rounded-2xl p-5 shadow-2xl shadow-indigo-500/20 text-center max-w-sm w-full backdrop-blur-xl"
                    >
                      <div className="text-[10px] uppercase font-mono text-indigo-300 tracking-wider mb-1">
                        INCOMING SPECIMEN
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono mb-2">
                        "{currentItem.text}"
                      </div>
                      <p className="text-xs text-indigo-200/80 font-sinhala">{currentItem.sinhala}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3"
                    >
                      <Trophy className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="text-base font-black text-emerald-200">Conveyor Clearance Complete!</h4>
                      <p className="text-xs text-slate-300">
                        You scored <strong>{score} XP</strong> by distinguishing Raw Data from Actionable Information.
                      </p>
                      <button
                        onClick={resetClassifier}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 mx-auto"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Reload Belt
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Sorter Trays / Action Buttons */}
            {currentItem && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleClassify('data')}
                  className="p-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border-2 border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold transition-all text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-amber-400">Sort to:</span>
                    <Boxes className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">Raw Data Hopper</div>
                  <div className="text-[11px] text-amber-200/70 font-sinhala">අමු දත්ත (තනි අර්ථයක් නැත)</div>
                </button>

                <button
                  onClick={() => handleClassify('info')}
                  className="p-4 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold transition-all text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-cyan-400">Sort to:</span>
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-1">Information Tray</div>
                  <div className="text-[11px] text-cyan-200/70 font-sinhala">තොරතුරු (සැකසූ අර්ථවත්)</div>
                </button>
              </div>
            )}
          </div>

          {/* Right Control Deck & Real-time HUD */}
          <div className="lg:col-span-5 space-y-4">
            {/* Feedback HUD Box */}
            <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Diagnostic HUD
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                  Rule: Data ➔ Processing ➔ Info
                </span>
              </div>

              {feedback ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-medium border ${
                    feedback.isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700'
                      : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700'
                  }`}
                >
                  {feedback.text}
                </motion.div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  Select whether the item arriving on the conveyor is <strong>Raw Data</strong> (unprocessed facts) or <strong>Information</strong> (processed for decisions).
                </div>
              )}

              {/* Contrast Cheat-sheet */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="font-bold text-amber-700 dark:text-amber-400">Data (දත්ත)</div>
                  <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside mt-1 space-y-0.5">
                    <li>Unorganized facts</li>
                    <li>No standalone meaning</li>
                    <li>Input to a system</li>
                  </ul>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <div className="font-bold text-cyan-700 dark:text-cyan-400">Information (තොරතුරු)</div>
                  <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside mt-1 space-y-0.5">
                    <li>Processed & structured</li>
                    <li>Actionable for decisions</li>
                    <li>Output of a system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* History Feed */}
            <div className="clay-card p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-h-48 overflow-y-auto space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase">Recent Classifications</div>
              {classifiedHistory.length === 0 ? (
                <div className="text-xs text-slate-400 italic">No items sorted yet.</div>
              ) : (
                classifiedHistory.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800"
                  >
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-200">
                      {h.item.text}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      {h.isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> +10 XP
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center gap-0.5">
                          <XCircle className="w-3.5 h-3.5" /> {h.item.type.toUpperCase()}
                        </span>
                      )}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. THE TERM-TEST PROCESSOR */}
      {/* ========================================================================= */}
      {activeTab === 'processor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Engine Architecture */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            {/* Top Stage Bar */}
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-mono uppercase text-indigo-200 font-bold">
                  Calculation Pipeline Engine
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                  Stage {processorStep + 1} of 4
                </span>
              </div>
            </div>

            {/* Middle Pipeline Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              {/* Input Hopper */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  processorStep >= 0
                    ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-amber-400">Step 1: Input (දත්ත)</div>
                <div className="font-bold text-sm text-white mt-1">Raw Marks List</div>
                <div className="text-xs text-slate-400 mt-2 space-y-1 font-mono">
                  {STUDENT_MARKS.map((s) => (
                    <div key={s.name} className="flex justify-between">
                      <span>{s.name}:</span>
                      <span className="text-amber-300">{s.term1}, {s.term2}, {s.term3}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing Blender */}
              <div
                className={`p-3.5 rounded-2xl border transition-all relative ${
                  processorStep >= 1
                    ? 'bg-indigo-950/50 border-indigo-400/60 text-indigo-200'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-indigo-300">Step 2: Process (සැකසීම)</div>
                <div className="font-bold text-sm text-white mt-1">CPU Arithmetic Engine</div>
                <div className="mt-2 space-y-1 text-xs">
                  <div className={`p-1 rounded ${processorStep >= 1 ? 'bg-indigo-600/30 text-indigo-300 font-mono' : 'text-slate-600'}`}>
                    ∑ Total = T1 + T2 + T3
                  </div>
                  <div className={`p-1 rounded ${processorStep >= 2 ? 'bg-indigo-600/30 text-indigo-300 font-mono' : 'text-slate-600'}`}>
                    μ Average = Total / 3
                  </div>
                  <div className={`p-1 rounded ${processorStep >= 2 ? 'bg-indigo-600/30 text-indigo-300 font-mono' : 'text-slate-600'}`}>
                    ⇈ Sort Ranks (1st, 2nd, 3rd)
                  </div>
                </div>
              </div>

              {/* Output Tray */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  processorStep === 3
                    ? 'bg-emerald-950/50 border-emerald-400/60 text-emerald-200 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-emerald-400">Step 3: Output (තොරතුරු)</div>
                <div className="font-bold text-sm text-white mt-1">Report Leaderboard</div>
                <div className="text-xs mt-2 space-y-1 font-mono">
                  {processorStep === 3 ? (
                    <div className="space-y-1">
                      <div className="text-amber-300 font-bold">🥇 1st: Mala (92.0%)</div>
                      <div className="text-slate-200">🥈 2nd: Ravi (82.3%)</div>
                      <div className="text-slate-300">🥉 3rd: Nimal (75.0%)</div>
                      <div className="text-slate-400">4th: Sandun (61.0%)</div>
                    </div>
                  ) : (
                    <div className="text-slate-600 italic">Awaiting crank execution...</div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Virtual Crank Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-indigo-900/40 bg-slate-900/40 p-4 rounded-2xl">
              <div>
                <div className="text-xs font-bold text-white">Manual Crank Lever</div>
                <div className="text-[11px] text-slate-400">Turn crank to drive arithmetic cycles</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={resetProcessor}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
                >
                  Reset
                </button>
                <button
                  onClick={handleTurnCrank}
                  disabled={processorStep === 3}
                  className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg ${
                    processorStep === 3
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-indigo-600/30 hover:scale-105 active:scale-95'
                  }`}
                >
                  <motion.div animate={{ rotate: crankAngle }} transition={{ duration: 0.3 }}>
                    <RotateCw className="w-4 h-4" />
                  </motion.div>
                  <span>{processorStep === 3 ? 'Process Finished' : 'Turn Crank ➔ Next Stage'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Explanation & Formatted Output Table */}
          <div className="lg:col-span-5 space-y-4">
            <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>The Core Principle of ICT Systems</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sinhala">
                අමු දත්ත (ලකුණු 78, 90, 79) තනිව ගත් කළ පන්තියේ දක්ෂතමයා කවුදැයි නොපෙනේ. ගණිතමය සැකසීමකින් (Total & Average) පසු එය කළමනාකරණ තීරණ ගත හැකි <strong>තොරතුරක් (Information)</strong> බවට පත්වේ.
              </p>

              {/* Dynamic Table Output */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mt-3">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <th className="p-2">Student</th>
                      <th className="p-2">Raw (T1,T2,T3)</th>
                      <th className="p-2">Total</th>
                      <th className="p-2">Avg</th>
                      <th className="p-2">Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className={processorStep === 3 ? 'bg-amber-500/10' : ''}>
                      <td className="p-2 font-bold">Mala</td>
                      <td className="p-2 text-slate-500">92, 95, 89</td>
                      <td className="p-2 text-indigo-600 dark:text-indigo-400 font-bold">
                        {processorStep >= 1 ? '276' : '—'}
                      </td>
                      <td className="p-2 font-bold">{processorStep >= 2 ? '92.0%' : '—'}</td>
                      <td className="p-2 font-black text-amber-500">{processorStep === 3 ? '1st' : '—'}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Ravi</td>
                      <td className="p-2 text-slate-500">78, 90, 79</td>
                      <td className="p-2 text-indigo-600 dark:text-indigo-400 font-bold">
                        {processorStep >= 1 ? '247' : '—'}
                      </td>
                      <td className="p-2 font-bold">{processorStep >= 2 ? '82.3%' : '—'}</td>
                      <td className="p-2 font-bold text-slate-400">{processorStep === 3 ? '2nd' : '—'}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Nimal</td>
                      <td className="p-2 text-slate-500">65, 88, 72</td>
                      <td className="p-2 text-indigo-600 dark:text-indigo-400 font-bold">
                        {processorStep >= 1 ? '225' : '—'}
                      </td>
                      <td className="p-2 font-bold">{processorStep >= 2 ? '75.0%' : '—'}</td>
                      <td className="p-2 font-bold text-slate-400">{processorStep === 3 ? '3rd' : '—'}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Sandun</td>
                      <td className="p-2 text-slate-500">58, 64, 61</td>
                      <td className="p-2 text-indigo-600 dark:text-indigo-400 font-bold">
                        {processorStep >= 1 ? '183' : '—'}
                      </td>
                      <td className="p-2 font-bold">{processorStep >= 2 ? '61.0%' : '—'}</td>
                      <td className="p-2 font-bold text-slate-400">{processorStep === 3 ? '4th' : '—'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. NIC NUMBER DISSECTOR */}
      {/* ========================================================================= */}
      {activeTab === 'nic' && <NicDecoder />}

      {/* ========================================================================= */}
      {/* 4. SYSTEM INPUT/OUTPUT MATCHER (2021 Paper II Q1) */}
      {/* ========================================================================= */}
      {activeTab === 'system' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-950/80 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-indigo-400" />
                <h4 className="font-bold text-sm text-indigo-200">
                  2021 Paper II Q1: School Biometric Attendance System
                </h4>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono">
                O/L Exam Focus
              </span>
            </div>

            <p className="text-xs text-slate-300 font-sinhala">
              පාසල් ඇඟිලි සලකුණු පැමිණීමේ පද්ධතියක (Biometric Attendance System) කොටස් 4 නිවැරදි ස්ථාන වෙත සක්‍රිය කරන්න:
            </p>

            {/* 4 Component Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Input */}
              <button
                onClick={() => toggleSystemComponent('input')}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  systemConnections.input
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">1. INPUT (ආදානය)</span>
                  <Fingerprint className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="font-bold text-sm text-white mt-2">Biometric Fingerprint Scanner</div>
                <p className="text-[11px] text-slate-400 mt-1">Reads student fingerprint data at the school gate.</p>
                <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 w-fit">
                  {systemConnections.input ? '✓ Connected to Input Bus' : '+ Tap to Connect'}
                </span>
              </button>

              {/* Process */}
              <button
                onClick={() => toggleSystemComponent('process')}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  systemConnections.process
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400">2. PROCESS (සැකසීම)</span>
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="font-bold text-sm text-white mt-2">Attendance Validator & Logic</div>
                <p className="text-[11px] text-slate-400 mt-1">Compares scanned fingerprint against stored hashes.</p>
                <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 w-fit">
                  {systemConnections.process ? '✓ Connected to CPU' : '+ Tap to Connect'}
                </span>
              </button>

              {/* Storage */}
              <button
                onClick={() => toggleSystemComponent('storage')}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  systemConnections.storage
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">3. STORAGE (ගබඩා කිරීම)</span>
                  <Database className="w-5 h-5 text-amber-400" />
                </div>
                <div className="font-bold text-sm text-white mt-2">Student Database on Hard Disk</div>
                <p className="text-[11px] text-slate-400 mt-1">Stores student names, classes, and historical logs.</p>
                <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 w-fit">
                  {systemConnections.storage ? '✓ Connected to Database' : '+ Tap to Connect'}
                </span>
              </button>

              {/* Output */}
              <button
                onClick={() => toggleSystemComponent('output')}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  systemConnections.output
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">4. OUTPUT (ප්‍රතිදානය)</span>
                  <FileText className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-bold text-sm text-white mt-2">Monthly PDF Report & SMS Alert</div>
                <p className="text-[11px] text-slate-400 mt-1">Sends immediate SMS to parents and generates monthly PDF.</p>
                <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 w-fit">
                  {systemConnections.output ? '✓ Connected to Output Bus' : '+ Tap to Connect'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-4 clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Exam System Checklist</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <p>
                A complete Information System always consists of 3 mandatory phases + 1 auxiliary stage:
              </p>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 flex justify-between">
                  <span>Input:</span> <span className="text-indigo-600 font-bold">Fingerprint Scanner</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 flex justify-between">
                  <span>Process:</span> <span className="text-indigo-600 font-bold">Verification Logic</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 flex justify-between">
                  <span>Output:</span> <span className="text-indigo-600 font-bold">SMS / PDF Report</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 flex justify-between">
                  <span>Storage:</span> <span className="text-indigo-600 font-bold">Database Server</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
