'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  GitMerge, 
  Boxes, 
  Cpu, 
  Network, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { SeriesParallelLab } from './SeriesParallelLab';
import { GateSplicer } from './GateSplicer';
import { UniversalChipBuilder } from './UniversalChipBuilder';
import { BreadboardIcPinout } from './BreadboardIcPinout';
import { CircuitEvaluator } from './CircuitEvaluator';
import { Lesson04BossArcade } from './Lesson04BossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Switch & Bulb Rig', nameSi: 'ස්විච පරිපථ (AND, OR, NOT)', icon: Zap, badge: 'Series & Parallel' },
  { id: 'station2', number: '02', nameEn: 'Gate Splicer', nameSi: 'NAND, NOR, XOR, XNOR', icon: GitMerge, badge: 'Inversion Clan' },
  { id: 'station3', number: '03', nameEn: 'Universal Foundry', nameSi: 'NAND / NOR සර්වත්‍ර ද්වාර', icon: Boxes, badge: 'Universal Chips' },
  { id: 'station4', number: '04', nameEn: 'Breadboard ICs', nameSi: '14-Pin IC කෙවෙනි සැකස්ම', icon: Cpu, badge: 'Pin 14 Vcc / Pin 7 GND' },
  { id: 'station5', number: '05', nameEn: 'Combinational Lab', nameSi: 'සංයුක්ත පරිපථ විශ්ලේෂණය', icon: Network, badge: 'Circuit Tracing' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function LogicWorkbench() {
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
    recordCheckpointAttempt(`g10-u4-station-${id}`, true);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
    if (!nextMuted) sound.playClick(800);
  };

  const progressPercent = Math.round((Object.keys(clearedStations).length / STATIONS.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Station OS Dock & Header Bar */}
      <div className="bg-slate-950/90 border border-cyan-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-900/40 pb-4">
          
          {/* OS Workspace Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-md font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  DIGITAL LOGIC WORKBENCH v2.0
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  ⚡ 5V HIGH / 0V LOW Electronics Engine
                </span>
              </div>
              <h2 className="text-lg font-black text-white">
                The Neon Logic Workbench • ලොජික් ද්වාර හා බූලියානු තර්කනය
              </h2>
            </div>
          </div>

          {/* Audio & Completion Progress HUD */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-slate-400">Workstation Completion</div>
              <div className="text-xs font-mono font-bold text-cyan-400">
                {Object.keys(clearedStations).length} / {STATIONS.length} Stations Cleared ({progressPercent}%)
              </div>
            </div>

            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'bg-slate-900 text-cyan-400 border-slate-700 hover:border-cyan-500'
              }`}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 6 Stations Navigation Dock */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {STATIONS.map((st) => {
            const Icon = st.icon;
            const isActive = activeStation === st.id;
            const isCleared = clearedStations[st.id];

            return (
              <button
                key={st.id}
                onClick={() => handleStationSelect(st.id)}
                className={`relative p-3 rounded-2xl border text-left transition-all flex flex-col justify-between group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-cyan-950/80 to-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeLogicStationGlow"
                    className="absolute inset-0 bg-cyan-500/10 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_#06b6d4]'
                        : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">
                    {st.number}
                  </span>
                </div>

                <div className="mt-3 space-y-0.5">
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-xs font-bold leading-tight line-clamp-1 ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {st.nameEn}
                    </span>
                    {isCleared && (
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 inline" />
                    )}
                  </div>
                  <p className="text-[10px] font-sinhala text-slate-400 truncate">
                    {st.nameSi}
                  </p>
                  <span className="inline-block text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-950/80 text-cyan-300/80 border border-slate-800">
                    {st.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Active Station Canvas */}
      <div className="transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStation}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            {activeStation === 'station1' && <SeriesParallelLab />}
            {activeStation === 'station2' && <GateSplicer />}
            {activeStation === 'station3' && <UniversalChipBuilder />}
            {activeStation === 'station4' && <BreadboardIcPinout />}
            {activeStation === 'station5' && <CircuitEvaluator />}
            {activeStation === 'station6' && <Lesson04BossArcade />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Station Quick Switcher Footer Bar */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal className="w-4 h-4" />
          <span>Interactive Digital Logic Workstation • O/L Syllabus Grade 10 Unit 04</span>
        </div>
        <div className="flex items-center gap-2">
          {STATIONS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleStationSelect(s.id)}
              className={`w-6 h-6 rounded-lg text-[10px] font-bold transition-all ${
                activeStation === s.id
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_8px_#06b6d4]'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
