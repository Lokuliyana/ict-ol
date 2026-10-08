'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCw, 
  GitFork, 
  Layers, 
  HelpCircle, 
  Play, 
  Sliders, 
  Boxes,
  Activity
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ConveyorItem {
  id: string;
  label: string;
  type: 'input' | 'process' | 'output';
  desc: string;
}

const ITEMS_TO_SORT: ConveyorItem[] = [
  { id: 'item_mark', label: 'Mark (විෂය ලකුණ)', type: 'input', desc: 'Raw score read from user' },
  { id: 'item_sum', label: 'Total = Total + Mark', type: 'process', desc: 'Accumulates subject marks' },
  { id: 'item_avg', label: 'Average = Total / 5', type: 'process', desc: 'Calculates mean mark' },
  { id: 'item_out_tot', label: 'Total (මුළු ලකුණු)', type: 'output', desc: 'Final accumulated mark' },
  { id: 'item_out_avg', label: 'Average (සාමාන්‍යය)', type: 'output', desc: 'Final calculated average' },
];

export function ProblemAnalysisConveyor() {
  const [activeSubTab, setActiveSubTab] = useState<'ipo_sorter' | 'control_rail'>('ipo_sorter');

  // IPO Sorter State
  const [placedItems, setPlacedItems] = useState<Record<string, 'input' | 'process' | 'output'>>({});
  const [isIpoComplete, setIsIpoComplete] = useState<boolean>(false);

  // Control Structures Rail Switch State
  const [selectedStructure, setSelectedStructure] = useState<'sequence' | 'selection' | 'repetition'>('sequence');
  const [railActive, setRailActive] = useState<boolean>(false);

  const handlePlaceItem = (itemId: string, targetZone: 'input' | 'process' | 'output') => {
    sound.playClick(600);
    const updated = { ...placedItems, [itemId]: targetZone };
    setPlacedItems(updated);

    const allPlaced = ITEMS_TO_SORT.every(item => updated[item.id]);
    if (allPlaced) {
      const allCorrect = ITEMS_TO_SORT.every(item => updated[item.id] === item.type);
      if (allCorrect) {
        sound.playVictory();
        setIsIpoComplete(true);
      } else {
        sound.playError();
        setIsIpoComplete(false);
      }
    }
  };

  const handleRunRail = () => {
    sound.playClick(700);
    setRailActive(true);
    setTimeout(() => {
      sound.playSuccess();
      setRailActive(false);
    }, 1800);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Boxes className="w-4 h-4" />
              <span>STATION 01 • INPUT-PROCESS-OUTPUT CONVEYOR (ගැටලු විශ්ලේෂණය හා පාලන ව්‍යුහ)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Problem Analysis & 3 Control Structures (IPO ආකෘතිය හා පාලන ව්‍යුහ 3)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Deconstruct real-world problems into Input, Process, and Output (2021 O/L P2 Q04) and examine the 3 fundamental building blocks of all computer algorithms: Sequence, Selection, and Repetition.
            </p>
          </div>

          {/* Sub Tab Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveSubTab('ipo_sorter'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeSubTab === 'ipo_sorter'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              IPO Factory Sorter (2021 O/L)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveSubTab('control_rail'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeSubTab === 'control_rail'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" />
              3 Control Rail Tracks
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeSubTab === 'ipo_sorter' ? (
          <motion.div
            key="ipo_sorter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Scenario Banner */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    2021 O/L Paper II • Question 04 (i)
                  </span>
                  <span className="text-xs text-slate-300 font-bold">
                    Scenario: Calculate Total and Average Marks across 5 subjects for a student.
                  </span>
                </div>
                {isIpoComplete && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                    <CheckCircle2 className="w-4 h-4" /> Perfect IPO Deconstruction!
                  </div>
                )}
              </div>

              {/* 3 Conveyor Chambers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 1. Input Hopper */}
                <div className="bg-slate-900/90 border-2 border-indigo-500/40 rounded-2xl p-4 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                      INPUT HOPPER (ආදානය)
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Raw data</span>
                  </div>

                  <div className="my-auto py-3 space-y-2">
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'input').map(item => (
                      <div
                        key={item.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
                          item.type === 'input'
                            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                            : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.type === 'input' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <HelpCircle className="w-3.5 h-3.5 text-rose-400" />}
                      </div>
                    ))}
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'input').length === 0 && (
                      <div className="text-center text-xs text-slate-600 font-mono italic">
                        [Assign raw inputs here]
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                    Accepts user-entered data tokens
                  </div>
                </div>

                {/* 2. Process Chamber */}
                <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-2xl p-4 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      PROCESS CHAMBER (සැකසුම)
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Operations</span>
                  </div>

                  <div className="my-auto py-3 space-y-2">
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'process').map(item => (
                      <div
                        key={item.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
                          item.type === 'process'
                            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                            : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.type === 'process' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <HelpCircle className="w-3.5 h-3.5 text-rose-400" />}
                      </div>
                    ))}
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'process').length === 0 && (
                      <div className="text-center text-xs text-slate-600 font-mono italic">
                        [Assign calculations here]
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                    Arithmetic & formula transformation
                  </div>
                </div>

                {/* 3. Output Tray */}
                <div className="bg-slate-900/90 border-2 border-emerald-500/40 rounded-2xl p-4 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      OUTPUT TRAY (ප්‍රතිදානය)
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Results</span>
                  </div>

                  <div className="my-auto py-3 space-y-2">
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'output').map(item => (
                      <div
                        key={item.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
                          item.type === 'output'
                            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                            : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.type === 'output' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <HelpCircle className="w-3.5 h-3.5 text-rose-400" />}
                      </div>
                    ))}
                    {ITEMS_TO_SORT.filter(item => placedItems[item.id] === 'output').length === 0 && (
                      <div className="text-center text-xs text-slate-600 font-mono italic">
                        [Assign final results here]
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                    Printed / displayed solution values
                  </div>
                </div>

              </div>

              {/* Drifting Token Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400 font-bold">
                  UNASSIGNED TOKENS (කැබලි නිවැරදි කලාපයට යොමු කරන්න):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ITEMS_TO_SORT.map((item) => {
                    const currentTarget = placedItems[item.id];

                    return (
                      <div
                        key={item.id}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white truncate">{item.label}</span>
                          <span className="text-[10px] font-mono text-slate-500">{item.desc}</span>
                        </div>

                        <div className="grid grid-cols-3 gap-1 pt-1">
                          {(['input', 'process', 'output'] as const).map((zone) => (
                            <button
                              key={zone}
                              onClick={() => handlePlaceItem(item.id, zone)}
                              className={`py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                currentTarget === zone
                                  ? zone === item.type
                                    ? 'bg-emerald-600 text-white border-emerald-400'
                                    : 'bg-rose-600 text-white border-rose-400'
                                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {zone.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="control_rail"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: 3-Way Rail Simulation */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[360px] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  CONTROL STRUCTURE RAIL TRACK (පාලන ව්‍යුහ ධාවන පථය)
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 uppercase font-bold">
                  {selectedStructure}
                </span>
              </div>

              {/* Animated Rail Track Schematic */}
              <div className="my-auto py-6 flex flex-col items-center justify-center">
                {selectedStructure === 'sequence' && (
                  <div className="space-y-3 w-full max-w-sm">
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-200 text-center">
                      1. Fry Egg (බිත්තරය බැදීම)
                    </div>
                    <div className="h-4 w-0.5 bg-emerald-400 mx-auto" />
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-200 text-center">
                      2. Butter Bread (පාන් පෙත්තට බටර් ගෑම)
                    </div>
                    <div className="h-4 w-0.5 bg-emerald-400 mx-auto" />
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-200 text-center">
                      3. Pour Tea (තේ කෝප්පය වත්කිරීම)
                    </div>
                  </div>
                )}

                {selectedStructure === 'selection' && (
                  <div className="space-y-3 w-full max-w-sm flex flex-col items-center">
                    <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white text-center w-48">
                      READ Weight, Height
                    </div>
                    <div className="h-3 w-0.5 bg-amber-400" />
                    {/* Diamond Condition */}
                    <div className="p-3 bg-amber-950/80 border-2 border-amber-400 rounded-2xl text-xs font-black text-amber-200 text-center transform rotate-0 w-44">
                      Is BMI &ge; 25 ?
                    </div>
                    {/* Branching Lines */}
                    <div className="grid grid-cols-2 gap-4 w-full pt-2">
                      <div className="p-2.5 bg-rose-950/60 border border-rose-500/40 rounded-xl text-xs font-bold text-rose-200 text-center">
                        [TRUE] &rarr; Output Overweight
                      </div>
                      <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-200 text-center">
                        [FALSE] &rarr; Output Normal
                      </div>
                    </div>
                  </div>
                )}

                {selectedStructure === 'repetition' && (
                  <div className="space-y-2 w-full max-w-sm flex flex-col items-center relative">
                    <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white text-center w-48">
                      1. READ Mark (ලකුණු ලබාගැනීම)
                    </div>
                    <div className="h-3 w-0.5 bg-purple-400" />
                    <div className="p-3 bg-purple-950/80 border-2 border-purple-400 rounded-2xl text-xs font-black text-purple-200 text-center w-44">
                      Is Mark = -1 ?
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full pt-1">
                      <div className="p-2 bg-purple-900/40 border border-purple-500/40 rounded-xl text-[11px] font-bold text-purple-200 text-center">
                        [NO] &rarr; Loop back to READ Mark
                      </div>
                      <div className="p-2 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-[11px] font-bold text-emerald-200 text-center">
                        [YES] &rarr; PRINT Total &amp; STOP
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Execution Trigger */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={handleRunRail}
                  disabled={railActive}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white text-xs font-bold shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-white" />
                  {railActive ? 'Tracing Signal Path...' : 'Simulate Control Flow'}
                </button>

                <span className="text-xs font-mono text-slate-400">
                  {selectedStructure === 'sequence' && 'Step-by-step linear order'}
                  {selectedStructure === 'selection' && 'Evaluates condition: True vs False'}
                  {selectedStructure === 'repetition' && 'Repeats until exit condition is met'}
                </span>
              </div>
            </div>

            {/* Right: Structure Selector Deck */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
                <Sliders className="w-4 h-4 text-cyan-400" />
                SELECT CONTROL STRUCTURE (පාලන ව්‍යුහය තෝරන්න)
              </div>

              {/* 1. Sequence */}
              <button
                onClick={() => { sound.playClick(600); setSelectedStructure('sequence'); }}
                className={`w-full p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                  selectedStructure === 'sequence'
                    ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    1. Sequence (අනුක්‍රමය)
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Top &rarr; Bottom</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Actions occur in exact chronological order from top to bottom with no skipping or repeating.
                </p>
              </button>

              {/* 2. Selection */}
              <button
                onClick={() => { sound.playClick(600); setSelectedStructure('selection'); }}
                className={`w-full p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                  selectedStructure === 'selection'
                    ? 'bg-amber-950/60 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <GitFork className="w-4 h-4" />
                    2. Selection / Decision (තේරීම)
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">IF..THEN..ELSE</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Tests a boolean condition. Chooses between alternate execution paths based on True or False result.
                </p>
              </button>

              {/* 3. Repetition */}
              <button
                onClick={() => { sound.playClick(600); setSelectedStructure('repetition'); }}
                className={`w-full p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                  selectedStructure === 'repetition'
                    ? 'bg-purple-950/60 border-purple-400 text-white shadow-lg shadow-purple-500/10'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                    <RotateCw className="w-4 h-4" />
                    3. Repetition / Iteration (පුනරාවර්තනය)
                  </div>
                  <span className="text-[10px] font-mono text-purple-400">WHILE / FOR</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Executes a code block repeatedly while/until a designated termination condition is fulfilled.
                </p>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
