'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sliders, 
  Network, 
  Cpu, 
  Layers, 
  Cable, 
  Swords, 
  Volume2, 
  VolumeX, 
  Terminal, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { ComputerClassifier } from './ComputerClassifier';
import { VonNeumannHighway } from './VonNeumannHighway';
import { ClockworkCpu } from './ClockworkCpu';
import { MemoryPyramid } from './MemoryPyramid';
import { PortConnectGame } from './PortConnectGame';
import { Lesson02BossFight } from './Lesson02BossFight';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'The Sorting Hub', nameSi: 'පරිගණක වර්ගීකරණය', icon: Sliders, badge: 'Classification' },
  { id: 'station2', number: '02', nameEn: 'Von Neumann Highway', nameSi: 'පද්ධති බස් හා ගෘහ නිර්මාණ', icon: Network, badge: 'Architecture' },
  { id: 'station3', number: '03', nameEn: 'The 4-Beat Engine', nameSi: 'යන්ත්‍ර චක්‍රය හා කෑෂ්', icon: Cpu, badge: 'Machine Cycle' },
  { id: 'station4', number: '04', nameEn: 'Storage Pyramid', nameSi: 'මතක ධූරාවලිය හා නශ්‍යබව', icon: Layers, badge: 'Hierarchy' },
  { id: 'station5', number: '05', nameEn: 'PC Builder Ports', nameSi: 'පිටුපස තොට හා පර්යන්ත', icon: Cable, badge: 'Ports & Devices' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function MotherboardWorkbench() {
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
    recordCheckpointAttempt(`g10-u2-station-${id}`, true);
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
      <div className="bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-900/40 pb-4">
          {/* OS Workspace Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-500 p-0.5 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold border border-cyan-500/30">
                  Motherboard Workbench • Grade 10 Unit 02
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Hardware Sandbox
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white">
                The Computer System (පරිගණක පද්ධතිය) Interactive Lab
              </h2>
            </div>
          </div>

          {/* Audio Mute & OS HUD */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right font-mono text-xs">
              <span className="text-slate-400">Lab Progress: </span>
              <span className="text-cyan-400 font-bold">{progressPercent}%</span>
              <div className="w-32 bg-slate-900 h-1.5 rounded-full overflow-hidden mt-1 border border-indigo-900/50">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-indigo-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={toggleMute}
              title={isMuted ? 'Unmute Audio Cues' : 'Mute Audio Cues'}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                isMuted
                  ? 'bg-slate-900 border-slate-700 text-slate-500'
                  : 'bg-indigo-600/30 border-indigo-400/50 text-indigo-300 hover:bg-indigo-600/40 shadow-lg shadow-indigo-600/20'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound FX'}</span>
            </button>
          </div>
        </div>

        {/* 6 Station Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {STATIONS.map((station) => {
            const isActive = activeStation === station.id;
            const isCleared = clearedStations[station.id];
            const Icon = station.icon;

            return (
              <button
                key={station.id}
                onClick={() => handleStationSelect(station.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-xl shadow-indigo-600/30 scale-[1.02]'
                    : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-black ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    Station {station.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-cyan-400'}`} />
                </div>

                <div className="font-bold text-xs sm:text-sm truncate">
                  {station.nameEn}
                </div>

                <div className={`text-[10px] font-sinhala truncate mt-0.5 ${isActive ? 'text-indigo-100' : 'text-slate-400'}`}>
                  {station.nameSi}
                </div>

                {isCleared && (
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Station Render */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStation}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
        >
          {activeStation === 'station1' && <ComputerClassifier />}
          {activeStation === 'station2' && <VonNeumannHighway />}
          {activeStation === 'station3' && <ClockworkCpu />}
          {activeStation === 'station4' && <MemoryPyramid />}
          {activeStation === 'station5' && <PortConnectGame />}
          {activeStation === 'station6' && <Lesson02BossFight />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
