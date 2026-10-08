'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Circle, 
  Square, 
  Layers, 
  HelpCircle,
  RotateCcw,
  Zap
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface DfdSymbol {
  id: string;
  nameEn: string;
  nameSi: string;
  shape: string;
  description: string;
  example: string;
}

const DFD_SYMBOLS: DfdSymbol[] = [
  {
    id: 'entity',
    nameEn: 'External Entity (බාහිර ආයතනය)',
    nameSi: 'ඍජුකෝණාස්‍රය (Square / Rectangle)',
    shape: 'Rectangle',
    description: 'Data source or sink existing outside the boundary of the system.',
    example: 'Student, Teacher, Principal, Bank'
  },
  {
    id: 'process',
    nameEn: 'Process (ක්‍රියාවලිය)',
    nameSi: 'වෘත්තය / රවුම් ඍජුකෝණාස්‍රය (Circle)',
    shape: 'Circle',
    description: 'Transforms input data into output data. Numbered as 0 (Context) or 1.0, 2.0 (Level 1).',
    example: '0: Attendance System, 1.0: Calculate Marks'
  },
  {
    id: 'datastore',
    nameEn: 'Data Store (දත්ත ගබඩාව)',
    nameSi: 'විවෘත ඍජුකෝණාස්‍රය / සමාන්තර රේඛා (Open Rectangle)',
    shape: 'Parallel Lines',
    description: 'Repository holding persistent data. (Hidden in Context Level 0 DFDs).',
    example: 'Student File, Marks Table'
  },
  {
    id: 'dataflow',
    nameEn: 'Data Flow (දත්ත ගැලීම)',
    nameSi: 'ඊතල රේඛාව (Arrow Line)',
    shape: 'Arrow',
    description: 'Directional pipeline carrying named data packets between elements.',
    example: 'Fingerprint Log, Attendance Report'
  },
];

export function DfdDrafter() {
  const [activeTab, setActiveTab] = useState<'context_builder' | 'grammar_rules' | 'symbols'>('context_builder');

  // Context Diagram Builder State
  const [connectedTeacher, setConnectedTeacher] = useState<boolean>(false);
  const [connectedPrincipal, setConnectedPrincipal] = useState<boolean>(false);
  const [attemptedIllegalLink, setAttemptedIllegalLink] = useState<boolean>(false);

  const isContextComplete = connectedTeacher && connectedPrincipal;

  const handleConnectTeacher = () => {
    sound.playSuccess();
    setConnectedTeacher(true);
    if (connectedPrincipal) sound.playVictory();
  };

  const handleConnectPrincipal = () => {
    sound.playSuccess();
    setConnectedPrincipal(true);
    if (connectedTeacher) sound.playVictory();
  };

  const handleIllegalConnection = () => {
    sound.playError();
    setAttemptedIllegalLink(true);
    setTimeout(() => setAttemptedIllegalLink(false), 3000);
  };

  const handleReset = () => {
    sound.playClick(400);
    setConnectedTeacher(false);
    setConnectedPrincipal(false);
    setAttemptedIllegalLink(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <GitBranch className="w-4 h-4" />
              <span>STATION 03 • DATA FLOW DRAFTER (දත්ත ගැලීම් සටහන් හා Context Diagrams)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              DFD Elements & Context Level 0 Blueprints (DFD සංකේත හා සන්දර්භ සටහන්)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Assemble Context Diagrams (Process 0), map External Entities (Rectangles), Processes (Circles), Data Stores, and detect illegal direct data flows.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('context_builder'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'context_builder'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              Context Diagram Assembler
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('grammar_rules'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'grammar_rules'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              DFD Grammar & Illegal Flows
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('symbols'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'symbols'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              DFD Symbol Stencils
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'context_builder' && (
          <motion.div
            key="context_builder"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold text-white">
                  Mission: Build the Context Diagram (Level 0 DFD) for a School Attendance System.
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Connect data flows between external entities (Teacher, Principal) and Process 0.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Diagram
              </button>
            </div>

            {/* Context Diagram Canvas */}
            <div className="bg-slate-950 border-2 border-slate-800 rounded-3xl p-6 min-h-[380px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-indigo-400" />
                  CONTEXT LEVEL 0 DIAGRAM (සන්දර්භ සටහන)
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  {isContextComplete ? '✓ Context Diagram Validated' : 'Connecting Flows...'}
                </span>
              </div>

              {/* Central Diagram Flow */}
              <div className="my-auto py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                
                {/* Left Entity: Teacher */}
                <div className="space-y-2 text-center">
                  <div className="p-4 bg-slate-900 border-2 border-slate-700 rounded-2xl text-xs font-bold text-white shadow-lg">
                    <Square className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    External Entity [Teacher]
                    <div className="text-[10px] text-slate-400">ගුරු භවතා</div>
                  </div>

                  {!connectedTeacher ? (
                    <button
                      onClick={handleConnectTeacher}
                      className="w-full py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400 text-indigo-200 text-[10px] font-bold transition-all"
                    >
                      &rarr; Send Attendance Log
                    </button>
                  ) : (
                    <div className="p-1.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-[10px] font-mono text-emerald-300 font-bold">
                      &rarr; &quot;Attendance Log&quot; Flow Connected
                    </div>
                  )}
                </div>

                {/* Center: Process 0 */}
                <div className="flex flex-col items-center justify-center p-6 bg-indigo-950/60 border-2 border-indigo-400 rounded-full w-48 h-48 mx-auto text-center shadow-xl shadow-indigo-500/10 relative">
                  <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-900/60 px-2 py-0.5 rounded-full mb-1">
                    Process 0
                  </span>
                  <h4 className="text-xs font-black text-white leading-tight">
                    School Attendance System
                  </h4>
                  <div className="text-[10px] text-cyan-300 mt-1">
                    පාසල් පැමිණීමේ පද්ධතිය
                  </div>
                </div>

                {/* Right Entity: Principal */}
                <div className="space-y-2 text-center">
                  <div className="p-4 bg-slate-900 border-2 border-slate-700 rounded-2xl text-xs font-bold text-white shadow-lg">
                    <Square className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    External Entity [Principal]
                    <div className="text-[10px] text-slate-400">විදුහල්පතිතුමා</div>
                  </div>

                  {!connectedPrincipal ? (
                    <button
                      onClick={handleConnectPrincipal}
                      className="w-full py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400 text-emerald-200 text-[10px] font-bold transition-all"
                    >
                      &rarr; Receive Monthly Report
                    </button>
                  ) : (
                    <div className="p-1.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-[10px] font-mono text-emerald-300 font-bold">
                      &rarr; &quot;Monthly Report&quot; Flow Connected
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Test of Illegal Connection */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <button
                  onClick={handleIllegalConnection}
                  className="px-3 py-1.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-bold hover:bg-rose-950/70 transition-all flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5" /> Test Illegal Direct Entity-to-Entity Wire
                </button>

                {attemptedIllegalLink && (
                  <span className="text-xs text-rose-400 font-bold animate-pulse">
                    RULE VIOLATION: External entities cannot communicate directly without a process!
                  </span>
                )}

                {isContextComplete && !attemptedIllegalLink && (
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Context Diagram Complete! (No internal data stores visible)
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'grammar_rules' && (
          <motion.div
            key="grammar_rules"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-slate-950 border-2 border-rose-500/40 rounded-3xl p-5 space-y-2.5 shadow-xl">
              <div className="text-[10px] font-mono text-rose-400 font-bold uppercase">
                RULE 1 • NO DIRECT ENTITY-TO-ENTITY
              </div>
              <h4 className="text-sm font-bold text-white">
                Entity &rarr; Entity (ILLEGAL ✗)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                External entities represent entities outside system boundaries. They cannot transfer data directly on a DFD without passing through an internal system process.
              </p>
            </div>

            <div className="bg-slate-950 border-2 border-rose-500/40 rounded-3xl p-5 space-y-2.5 shadow-xl">
              <div className="text-[10px] font-mono text-rose-400 font-bold uppercase">
                RULE 2 • NO DIRECT ENTITY-TO-STORE
              </div>
              <h4 className="text-sm font-bold text-white">
                Entity &rarr; Data Store (ILLEGAL ✗)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                An external user cannot directly read/write raw database files without a software process performing authorization and data validation.
              </p>
            </div>

            <div className="bg-slate-950 border-2 border-emerald-500/40 rounded-3xl p-5 space-y-2.5 shadow-xl">
              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                RULE 3 • CONTEXT DIAGRAM PURITY
              </div>
              <h4 className="text-sm font-bold text-white">
                Context Diagram = Process 0 Only (VALID ✓)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A Context Diagram (Level 0) represents the entire system as a single process circle (&quot;Process 0&quot;). No internal data stores are ever shown.
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === 'symbols' && (
          <motion.div
            key="symbols"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {DFD_SYMBOLS.map((sym) => (
              <div
                key={sym.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {sym.nameEn}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                    {sym.nameSi}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {sym.description}
                </p>

                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800/80 text-[10px] font-mono text-slate-400">
                  <span className="text-indigo-400 font-bold">Examples: </span>{sym.example}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
