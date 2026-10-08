'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ArrowUp, 
  Table as TableIcon, 
  Database, 
  Cpu, 
  HelpCircle,
  Eye,
  Info
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface HierarchyLevel {
  id: string;
  nameEn: string;
  nameSi: string;
  sizeDesc: string;
  rank: number; // 1 = Bit to 6 = Database
  icon: string;
  color: string;
}

const HIERARCHY_LEVELS: HierarchyLevel[] = [
  { id: 'bit', nameEn: '1. Bit (බිටුව)', nameSi: '0 හෝ 1 ද්වීමය අංකය', sizeDesc: 'Single binary digit (0 or 1)', rank: 1, icon: '0/1', color: 'border-slate-600 bg-slate-900 text-slate-300' },
  { id: 'byte', nameEn: '2. Byte / Character (බයිටය)', nameSi: 'බිටු 8 ක එකතුව (අක්ෂරයක්)', sizeDesc: '8 bits forming 1 character (e.g. "A")', rank: 2, icon: '8 bits', color: 'border-blue-500 bg-blue-950/50 text-blue-300' },
  { id: 'field', nameEn: '3. Field / Attribute (ක්ෂේත්‍රය)', nameSi: 'තීරුවක ඇති තොරතුරු වර්ගයක්', sizeDesc: 'Single category column (e.g. Name, DOB)', rank: 3, icon: 'Column', color: 'border-cyan-500 bg-cyan-950/50 text-cyan-300' },
  { id: 'record', nameEn: '4. Record / Tuple (වාර්තාව)', nameSi: 'තනි පුද්ගලයෙකුගේ සියලු දත්ත පේළිය', sizeDesc: 'Complete row of related fields for one entity', rank: 4, icon: 'Row', color: 'border-emerald-500 bg-emerald-950/50 text-emerald-300' },
  { id: 'table', nameEn: '5. Table / Relation (වගුව)', nameSi: 'පේළි සහ තීරු සහිත සබඳතාව', sizeDesc: 'Collection of related records in rows & columns', rank: 5, icon: 'Table', color: 'border-amber-500 bg-amber-950/50 text-amber-300' },
  { id: 'database', nameEn: '6. Database (දත්ත සමුදාය)', nameSi: 'සම්බන්ධිත වගු සමූහය', sizeDesc: 'Integrated collection of logical tables', rank: 6, icon: 'DB', color: 'border-purple-500 bg-purple-950/50 text-purple-300' }
];

export function DataHierarchyElevator() {
  const [activeTab, setActiveTab] = useState<'elevator_stack' | 'spotlight_lab'>('elevator_stack');

  // Stacking Elevator State
  const [stackedItems, setStackedItems] = useState<HierarchyLevel[]>([]);
  const [availableItems, setAvailableItems] = useState<HierarchyLevel[]>([
    HIERARCHY_LEVELS[3], // Record
    HIERARCHY_LEVELS[0], // Bit
    HIERARCHY_LEVELS[5], // Database
    HIERARCHY_LEVELS[1], // Byte
    HIERARCHY_LEVELS[4], // Table
    HIERARCHY_LEVELS[2]  // Field
  ]);
  const [stackComplete, setStackComplete] = useState<boolean>(false);

  // Spotlight Lab State (2023 O/L P1 Q28)
  const [highlightMode, setHighlightMode] = useState<'none' | 'tuple' | 'attribute'>('none');
  const [spotlightScore, setSpotlightScore] = useState<number | null>(null);

  const sampleStudentTable = [
    { index: 'S101', name: 'Nimal Silva', dob: '2008-04-12', classCode: '10-A' },
    { index: 'S102', name: 'Kamal Perera', dob: '2008-08-25', classCode: '10-B' },
    { index: 'S103', name: 'Sunil Fernando', dob: '2008-01-19', classCode: '10-A' },
    { index: 'S104', name: 'Mala De Silva', dob: '2008-11-03', classCode: '10-C' }
  ];

  const handleSnapItem = (item: HierarchyLevel) => {
    const nextExpectedRank = stackedItems.length + 1;
    if (item.rank === nextExpectedRank) {
      sound.playSuccess();
      const newStack = [...stackedItems, item];
      setStackedItems(newStack);
      setAvailableItems(prev => prev.filter(i => i.id !== item.id));

      if (newStack.length === 6) {
        setStackComplete(true);
        sound.playVictory();
      }
    } else {
      sound.playError();
    }
  };

  const handleResetStack = () => {
    sound.playClick(400);
    setStackedItems([]);
    setAvailableItems([
      HIERARCHY_LEVELS[3],
      HIERARCHY_LEVELS[0],
      HIERARCHY_LEVELS[5],
      HIERARCHY_LEVELS[1],
      HIERARCHY_LEVELS[4],
      HIERARCHY_LEVELS[2]
    ]);
    setStackComplete(false);
  };

  const handleHighlight = (mode: 'tuple' | 'attribute') => {
    sound.playSnap();
    setHighlightMode(mode);
    setSpotlightScore(1);
    sound.playSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 01 • දත්ත ධුරාවලිය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Bit ➔ Byte ➔ Field ➔ Record ➔ Table ➔ Database
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            The Data Hierarchy Elevator (පරිගණක දත්ත ධුරාවලි සෝපානය)
          </h2>
          <p className="text-xs text-slate-300">
            Stack the 6 levels of data hierarchy in strict ascending order, and spotlight the equivalence between Columns (Attributes) and Rows (Tuples).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveTab('elevator_stack'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'elevator_stack'
                ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ascending Elevator
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('spotlight_lab'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'spotlight_lab'
                ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tuple & Attribute Spotlight
          </button>
        </div>
      </div>

      {/* Tab 1: Ascending Elevator Stack */}
      {activeTab === 'elevator_stack' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Ascending Elevator Shaft */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <ArrowUp className="w-4 h-4 text-blue-400" />
                  ELEVATOR SHAFT (ASCENDING ORDER 1 ➔ 6)
                </span>
                <span className="text-xs font-mono text-blue-400">{stackedItems.length} / 6 Locked</span>
              </div>

              {/* 6 Vertical Slots (Bottom = 1: Bit, Top = 6: Database) */}
              <div className="flex flex-col-reverse gap-2 min-h-[330px] p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                {[1, 2, 3, 4, 5, 6].map(rankNum => {
                  const item = stackedItems.find(i => i.rank === rankNum);

                  return (
                    <div
                      key={rankNum}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                        item
                          ? `${item.color} shadow-md`
                          : 'border-dashed border-slate-800 bg-slate-950/40 text-slate-600'
                      }`}
                    >
                      {item ? (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex items-center justify-between w-full"
                        >
                          <div>
                            <div className="text-xs font-bold text-white">{item.nameEn}</div>
                            <div className="text-[10px] text-blue-300 font-sinhala">{item.nameSi}</div>
                          </div>
                          <span className="text-[11px] font-mono font-black bg-black/40 px-2 py-0.5 rounded">
                            {item.sizeDesc}
                          </span>
                        </motion.div>
                      ) : (
                        <span className="text-xs font-mono text-slate-600">
                          Slot {rankNum}: {rankNum === stackedItems.length + 1 ? '👉 Click next level below' : 'Locked'}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {stackComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 rounded-xl bg-blue-950/80 border border-blue-500/50 text-blue-200 text-xs flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>
                    <strong>Hierarchy Ascended!</strong> Correct sequence: Bit (0/1) ➔ Byte (8 bits) ➔ Field (Column) ➔ Record (Row) ➔ Table ➔ Database.
                  </span>
                </motion.div>
              )}

              <div className="flex justify-end pt-1">
                <button
                  onClick={handleResetStack}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 border border-slate-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Elevator</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Available Unsorted Blocks Tray */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-white flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-blue-400 font-mono uppercase">Unsorted Blocks Tray</span>
                <span className="text-[10px] text-slate-400">Click the next ascending level</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSnapItem(item)}
                    className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 hover:border-blue-500 hover:bg-blue-950/30 text-left transition-all space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-blue-300">{item.nameEn.split(' ')[1]}</span>
                      <span className="text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">{item.icon}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-sinhala truncate">{item.nameSi}</p>
                  </button>
                ))}
              </div>

              {availableItems.length === 0 && (
                <div className="text-center py-8 text-xs text-blue-300 font-bold">
                  All 6 hierarchy blocks successfully stacked into the elevator!
                </div>
              )}
            </div>

            {/* Syllabus Formula Card */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="text-white font-bold text-blue-400 font-mono">6-Step Ascending Equation:</div>
              <div className="p-2.5 rounded-lg bg-slate-900 font-mono text-[11px] text-slate-300 overflow-x-auto whitespace-nowrap">
                Bit ➔ Byte ➔ Field ➔ Record ➔ Table ➔ Database
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Spotlight Lab (Row/Tuple vs Column/Attribute) */}
      {activeTab === 'spotlight_lab' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Table Canvas */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white">STUDENT TABLE (ශිෂ්‍ය වගුව)</span>
                <span className="text-xs font-mono text-blue-400">
                  {highlightMode === 'tuple' ? 'Spotlight: Row 2 (Tuple / Record)' : highlightMode === 'attribute' ? 'Spotlight: DOB Column (Attribute / Field)' : 'No Spotlight Active'}
                </span>
              </div>

              {/* Table Grid */}
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs">
                {/* Column Headers (Attributes) */}
                <div className="grid grid-cols-4 bg-slate-950 text-slate-400 font-bold border-b border-slate-800 text-center">
                  <div className="p-2.5 border-r border-slate-800">IndexNo [PK]</div>
                  <div className="p-2.5 border-r border-slate-800">StudentName</div>
                  <div className={`p-2.5 border-r border-slate-800 transition-colors ${
                    highlightMode === 'attribute' ? 'bg-cyan-950 text-cyan-300 border-cyan-500' : ''
                  }`}>
                    DOB (Attribute)
                  </div>
                  <div className="p-2.5">ClassCode</div>
                </div>

                {/* Rows (Tuples) */}
                {sampleStudentTable.map((st, idx) => {
                  const isTupleTarget = highlightMode === 'tuple' && idx === 1; // Row 2 Kamal

                  return (
                    <div
                      key={st.index}
                      className={`grid grid-cols-4 border-b border-slate-800/80 text-center transition-all ${
                        isTupleTarget
                          ? 'bg-emerald-950/80 text-emerald-200 font-bold border-emerald-500'
                          : 'text-slate-300'
                      }`}
                    >
                      <div className="p-2.5 border-r border-slate-800/60 font-bold text-amber-400">{st.index}</div>
                      <div className="p-2.5 border-r border-slate-800/60 text-left pl-3">{st.name}</div>
                      <div className={`p-2.5 border-r border-slate-800/60 ${
                        highlightMode === 'attribute' ? 'bg-cyan-950/50 text-cyan-300 font-bold' : ''
                      }`}>
                        {st.dob}
                      </div>
                      <div className="p-2.5">{st.classCode}</div>
                    </div>
                  );
                })}
              </div>

              {/* Spotlight Controls */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleHighlight('tuple')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    highlightMode === 'tuple'
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Spotlight a Tuple / Record (Row)</span>
                </button>

                <button
                  onClick={() => handleHighlight('attribute')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    highlightMode === 'attribute'
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Spotlight an Attribute / Field (Column)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Theory Card */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                2023 O/L Paper I Equivalence
              </h4>

              <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-1">
                <div className="text-cyan-400 font-bold">Column = Field = Attribute</div>
                <p className="text-[11px] text-slate-300">
                  Represents a single category or property across all entities (e.g. <code>DOB</code>, <code>StudentName</code>).
                </p>
                <p className="text-[10px] text-slate-400 font-sinhala">තීරුව = ක්ෂේත්‍රය = ගුණාංගය</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-1">
                <div className="text-emerald-400 font-bold">Row = Record = Tuple</div>
                <p className="text-[11px] text-slate-300">
                  Represents the full collection of attributes for one specific entity (e.g. all details for Kamal).
                </p>
                <p className="text-[10px] text-slate-400 font-sinhala">පේළිය = වාර්තාව = ටපලනය</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
