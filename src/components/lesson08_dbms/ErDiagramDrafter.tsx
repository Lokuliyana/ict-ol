'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Layers, 
  Square, 
  Circle, 
  Diamond,
  ArrowRight
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type RelationshipMode = 'one_to_many' | 'one_to_one' | 'symbols_guide';

export function ErDiagramDrafter() {
  const [activeMode, setActiveMode] = useState<RelationshipMode>('one_to_many');

  // Interactive 1:N Blueprint State
  const [selectedCardinalityA, setSelectedCardinalityA] = useState<string>('1');
  const [selectedCardinalityB, setSelectedCardinalityB] = useState<string>('N');
  const [isDiagramConnected, setIsDiagramConnected] = useState<boolean>(true);

  // Symbol Matcher State
  const [matchedSymbols, setMatchedSymbols] = useState<Record<string, string>>({});

  const SYMBOLS = [
    { id: 'rect', name: 'Rectangle', correctConcept: 'Entity (Table)', icon: '▭' },
    { id: 'oval', name: 'Oval / Ellipse', correctConcept: 'Attribute (Field)', icon: '⬭' },
    { id: 'diamond', name: 'Diamond', correctConcept: 'Relationship', icon: '◇' },
    { id: 'line', name: 'Connecting Line', correctConcept: 'Link / Association', icon: '―' }
  ];

  const CONCEPT_OPTIONS = [
    'Entity (Table)',
    'Attribute (Field)',
    'Relationship',
    'Link / Association'
  ];

  const handleMatchSymbol = (symId: string, concept: string) => {
    sound.playClick();
    setMatchedSymbols(prev => ({ ...prev, [symId]: concept }));
  };

  const evaluateSymbols = () => {
    let correct = 0;
    SYMBOLS.forEach(s => {
      if (matchedSymbols[s.id] === s.correctConcept) correct++;
    });
    if (correct === SYMBOLS.length) {
      sound.playVictory();
    } else {
      sound.playSuccess();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 05 • සබඳතා සහ ER සටහන්
            </span>
            <span className="text-xs font-semibold text-slate-400">
              1:1, 1:N Cardinality & Standard ER Symbols
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-400" />
            The ER Blueprint Drafter (ආයතන සබඳතා සටහන් නිර්මාණය)
          </h2>
          <p className="text-xs text-slate-300">
            Learn standard Entity-Relationship symbols (Rectangle, Oval, Diamond) and model One-to-Many (1:N) cardinality.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveMode('one_to_many'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'one_to_many' ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            1:N Blueprint
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('symbols_guide'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'symbols_guide' ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            ER Symbols Matcher
          </button>
        </div>
      </div>

      {/* Mode 1: 1:N Blueprint Drafter */}
      {activeMode === 'one_to_many' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Live ER Blueprint */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 shadow-2xl min-h-[360px] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white uppercase">ER MODEL CANVAS: DOCTOR ➔ APPOINTMENT</span>
                <span className="text-xs font-mono text-cyan-400">Cardinality: 1 : N (One-to-Many)</span>
              </div>

              {/* ER Visual Layout */}
              <div className="my-auto flex flex-col sm:flex-row items-center justify-around gap-4 py-8">
                {/* Entity 1: DOCTOR (Rectangle) */}
                <div className="flex flex-col items-center gap-2">
                  {/* Attribute Oval */}
                  <div className="px-3 py-1 rounded-full border border-cyan-400 bg-cyan-950 text-cyan-200 text-[10px] font-mono underline font-bold">
                    DoctorID (PK)
                  </div>
                  <div className="w-32 h-16 rounded-xl border-2 border-blue-400 bg-slate-900 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-blue-500/10">
                    DOCTOR
                  </div>
                  <span className="text-xs font-black font-mono text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-slate-800">
                    {selectedCardinalityA} (One)
                  </span>
                </div>

                {/* Connecting Line + Relationship Diamond */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-20 h-16 border-2 border-amber-400 bg-amber-950/40 transform rotate-45 flex items-center justify-center shadow-lg">
                    <span className="transform -rotate-45 text-[10px] font-black text-amber-300">
                      TREATS
                    </span>
                  </div>
                </div>

                {/* Entity 2: APPOINTMENT (Rectangle) */}
                <div className="flex flex-col items-center gap-2">
                  {/* Attribute Oval */}
                  <div className="px-3 py-1 rounded-full border border-cyan-400 bg-cyan-950 text-cyan-200 text-[10px] font-mono underline font-bold">
                    AppNo (PK)
                  </div>
                  <div className="w-32 h-16 rounded-xl border-2 border-blue-400 bg-slate-900 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-blue-500/10">
                    APPOINTMENT
                  </div>
                  <span className="text-xs font-black font-mono text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-slate-800">
                    {selectedCardinalityB} (Many)
                  </span>
                </div>
              </div>

              {/* Rationale explanation */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <strong className="text-cyan-300">One-to-Many Rationale:</strong> One single Doctor can be scheduled for <strong className="text-amber-400">Many</strong> patient appointments ($1:N$).
              </div>
            </div>
          </div>

          {/* Right Theory & Cardinality Types */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                Relationship Types (සබඳතා වර්ග)
              </h4>

              <div className="space-y-2.5 text-[11px] text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-400">1. One-to-One (1:1)</div>
                  <p>One record in Table A relates to exactly one record in Table B.</p>
                  <p className="text-[10px] text-slate-400 font-sinhala">උදා: පුරවැසියා (CITIZEN) ➔ විදේශ ගමන් බලපත්‍රය (PASSPORT)</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">2. One-to-Many (1:N)</div>
                  <p>One record in Table A relates to multiple records in Table B.</p>
                  <p className="text-[10px] text-slate-400 font-sinhala">උදා: පන්තිය (CLASS) ➔ සිසුන් (STUDENTS)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Symbols Matcher */}
      {activeMode === 'symbols_guide' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SYMBOLS.map(sym => (
              <div key={sym.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-amber-400">{sym.icon}</span>
                  <span className="text-xs font-mono font-bold text-slate-400">{sym.name}</span>
                </div>

                <select
                  value={matchedSymbols[sym.id] || ''}
                  onChange={(e) => handleMatchSymbol(sym.id, e.target.value)}
                  className="w-full bg-slate-900 text-xs text-white border border-slate-700 rounded-lg p-2 outline-none font-sans"
                >
                  <option value="">Select ER Concept...</option>
                  {CONCEPT_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={evaluateSymbols}
              disabled={Object.keys(matchedSymbols).length < SYMBOLS.length}
              className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-40 text-slate-950 font-black text-xs shadow-lg shadow-blue-500/20"
            >
              Verify ER Symbols
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
