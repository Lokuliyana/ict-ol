'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  GitCommit, 
  Table, 
  Zap, 
  Boxes, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  Code2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { ProblemAnalysisConveyor } from './ProblemAnalysisConveyor';
import { FlowchartMason } from './FlowchartMason';
import { TraceTableScrubber } from './TraceTableScrubber';
import { TranslatorDuel } from './TranslatorDuel';
import { PascalTerminal } from './PascalTerminal';
import { ProgrammingBossArcade } from './ProgrammingBossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'IPO & Rails', nameSi: 'ගැටලු විශ්ලේෂණය', icon: Cpu, badge: 'IPO & 3 Structures' },
  { id: 'station2', number: '02', nameEn: 'Flowchart Mason', nameSi: 'ගැලීම් සටහන් සංකේත', icon: GitCommit, badge: 'ANSI 2-Line Rule' },
  { id: 'station3', number: '03', nameEn: 'Trace Scrubber', nameSi: 'හෝඩුවා වගු කාල යන්ත්‍රය', icon: Table, badge: 'Pre-test vs Post-test' },
  { id: 'station4', number: '04', nameEn: 'Translator Duel', nameSi: 'සම්පාදක හා අර්ථවින්‍යාසක', icon: Zap, badge: 'Compiler vs Interp' },
  { id: 'station5', number: '05', nameEn: 'Pascal Terminal', nameSi: 'පැස්කල් & 1D අරාවන්', icon: Terminal, badge: 'div/mod & Arrays' },
  { id: 'station6', number: '06', nameEn: 'Paper II Arcade', nameSi: '2020 – 2025 රචනා සටන්', icon: Swords, badge: 'Paper II Boss Fights' },
];

export function ProgrammingStudio() {
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
    recordCheckpointAttempt(`g11-u1-station-${id}`, true);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header & Logic Engine HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-6 md:p-8 border border-purple-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                THE LOGIC ENGINE & PASCAL TERMINAL • ක්‍රමලේඛනය
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 11 ICT • Unit 01 (Programming & Problem Solving)
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The Logic Engine & Pascal Terminal (ක්‍රමලේඛන මැදිරිය)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master IPO problem analysis, ANSI flowchart grammar, step-by-step trace tables, Compiler vs Interpreter mechanics, Pascal syntax (div/mod/arrays), and 2020–2025 Paper II essay challenges.
            </p>
          </div>

          {/* Sound & HUD Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="text-right pr-2 border-r border-slate-800">
              <div className="text-[10px] uppercase font-mono text-slate-400">Audio Synth</div>
              <div className="text-xs font-bold text-purple-400">{isMuted ? 'Muted' : 'Live Web Audio'}</div>
            </div>
            <button
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-slate-800 text-slate-500 border-slate-700'
                  : 'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/20'
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
                    ? 'bg-purple-600/30 border-purple-400/80 shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 text-slate-400'
                }`}
              >
                {/* Station Cleared / Active Pill */}
                <div className="w-full flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold ${
                      isActive
                        ? 'bg-purple-500 text-white shadow-sm'
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
                      isActive ? 'text-purple-300' : 'text-slate-400'
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

                <div className="mt-1.5 text-[9px] font-mono text-purple-400/80 truncate w-full">
                  • {st.badge}
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeProgrammingStationPill"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
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
          {activeStation === 'station1' && <ProblemAnalysisConveyor />}
          {activeStation === 'station2' && <FlowchartMason />}
          {activeStation === 'station3' && <TraceTableScrubber />}
          {activeStation === 'station4' && <TranslatorDuel />}
          {activeStation === 'station5' && <PascalTerminal />}
          {activeStation === 'station6' && <ProgrammingBossArcade />}
        </motion.div>
      </AnimatePresence>

      {/* Footer Note */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>
            Sri Lankan G.C.E. O/L ICT • Grade 11 Unit 01 • Programming, Algorithms & Problem Solving
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Paper II Question 04 (Essay / 15 Marks) • Flowcharts • Trace Tables • Pascal
        </div>
      </div>
    </div>
  );
}
