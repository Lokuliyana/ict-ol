'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Layers, 
  KeyRound, 
  Binary, 
  Workflow, 
  Network, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { DataHierarchyElevator } from './DataHierarchyElevator';
import { KeymasterForge } from './KeymasterForge';
import { DataTypeSlotMachine } from './DataTypeSlotMachine';
import { DatabaseObjectPipeline } from './DatabaseObjectPipeline';
import { ErDiagramDrafter } from './ErDiagramDrafter';
import { DbmsBossArcade } from './DbmsBossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Data Hierarchy', nameSi: 'දත්ත ධුරාවලිය', icon: Layers, badge: 'Bit to Database' },
  { id: 'station2', number: '02', nameEn: 'Keymaster Forge', nameSi: 'යතුරු අභ්‍යාසාලාව', icon: KeyRound, badge: 'PK, FK, Composite' },
  { id: 'station3', number: '03', nameEn: 'Data Type Slot', nameSi: 'දත්ත වර්ග හා වලංගුකරණය', icon: Binary, badge: 'Text vs Number' },
  { id: 'station4', number: '04', nameEn: 'Object Pipeline', nameSi: 'දත්ත සමුදා වස්තු 4', icon: Workflow, badge: 'Table/Form/Query/Rep' },
  { id: 'station5', number: '05', nameEn: 'ER Drafter', nameSi: 'ER සටහන් නිර්මාණය', icon: Network, badge: '1:1, 1:N, M:N' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Paper II Boss Fights' },
];

export function RelationalWarehouse() {
  const [activeStation, setActiveStation] = useState<StationTab['id']>('station1');
  const [isMuted, setIsMuted] = useState(false);
  const [clearedStations, setClearedStations] = useState<Record<string, boolean>>({
    station1: true,
  });

  const { recordCheckpointAttempt } = useProgress();

  const handleStationSelect = (id: StationTab['id']) => {
    sound.playClick(650);
    setActiveStation(id);
    setClearedStations((prev) => ({ ...prev, [id]: true }));
    recordCheckpointAttempt(`g10-u8-station-${id}`, true);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header & Cybernetic Warehouse HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 md:p-8 border border-indigo-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5 shadow-sm">
                <Database className="w-3.5 h-3.5 text-indigo-400" />
                THE RELATIONAL WAREHOUSE • දත්ත සමුදා කළමනාකරණය
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 10 ICT • Unit 08 (DBMS)
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The Relational Warehouse (සම්බන්ධක දත්ත සමුදා ආකෘතිය)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master the data hierarchy (Bit to Database), primary & foreign keys, data type validation traps, DBMS objects (Tables, Forms, Queries, Reports), ER modeling, and 2020–2025 O/L Paper II essay challenges.
            </p>
          </div>

          {/* Sound & HUD Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="text-right pr-2 border-r border-slate-800">
              <div className="text-[10px] uppercase font-mono text-slate-400">Audio Synth</div>
              <div className="text-xs font-bold text-indigo-400">{isMuted ? 'Muted' : 'Live Web Audio'}</div>
            </div>
            <button
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-slate-800 text-slate-500 border-slate-700'
                  : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-md shadow-indigo-500/20'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 6 Stations Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
          {STATIONS.map((st) => {
            const Icon = st.icon;
            const isActive = activeStation === st.id;
            const isCleared = clearedStations[st.id];

            return (
              <button
                key={st.id}
                onClick={() => handleStationSelect(st.id)}
                className={`relative flex flex-col items-start p-3 rounded-2xl border transition-all text-left ${
                  isActive
                    ? 'bg-indigo-600/30 border-indigo-400/80 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 text-slate-400'
                }`}
              >
                {/* Station Cleared / Active Pill */}
                <div className="w-full flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold ${
                      isActive
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STATION {st.number}
                  </span>
                  {isCleared && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 opacity-90" />
                  )}
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-indigo-300' : 'text-slate-400'
                    }`}
                  />
                  <div
                    className={`text-xs font-bold leading-tight ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {st.nameEn}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 line-clamp-1">
                  {st.nameSi}
                </div>

                <div className="mt-1.5 text-[9px] font-mono text-cyan-400/80 truncate w-full">
                  • {st.badge}
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeDbmsStationPill"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Station Content Stage with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStation}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          {activeStation === 'station1' && <DataHierarchyElevator />}
          {activeStation === 'station2' && <KeymasterForge />}
          {activeStation === 'station3' && <DataTypeSlotMachine />}
          {activeStation === 'station4' && <DatabaseObjectPipeline />}
          {activeStation === 'station5' && <ErDiagramDrafter />}
          {activeStation === 'station6' && <DbmsBossArcade />}
        </motion.div>
      </AnimatePresence>

      {/* Footer Note */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>
            Sri Lankan G.C.E. O/L ICT • Syllabus Unit 08 • Database Management Systems (DBMS)
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Tables (සම්බන්ධතා) • Primary/Foreign Keys • 1:1, 1:N, M:N ER Models
        </div>
      </div>
    </div>
  );
}
