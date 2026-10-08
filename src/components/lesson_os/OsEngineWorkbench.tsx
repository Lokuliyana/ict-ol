'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Layout, 
  Cpu, 
  HardDrive, 
  FolderOpen, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { ColdBootPipeline } from './ColdBootPipeline';
import { InterfaceArena } from './InterfaceArena';
import { ProcessDispatcher } from './ProcessDispatcher';
import { DiskOptimizerStudio } from './DiskOptimizerStudio';
import { FileHierarchyTree } from './FileHierarchyTree';
import { Lesson04OsBossArcade } from './Lesson04OsBossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Cold-Boot Pipeline', nameSi: 'පරිගණක පණගැන්වීම', icon: Zap, badge: 'BIOS & POST' },
  { id: 'station2', number: '02', nameEn: 'The Interface Arena', nameSi: 'CLI vs GUI & WIMP', icon: Layout, badge: 'WIMP & RTOS' },
  { id: 'station3', number: '03', nameEn: 'Resource Control Hub', nameSi: 'සම්පත් කළමනාකරණය', icon: Cpu, badge: 'CPU & RAM Swap' },
  { id: 'station4', number: '04', nameEn: 'Disk Workshop', nameSi: 'තැටි ප්‍රතිභාගීකරණය', icon: HardDrive, badge: 'Defrag & Partition' },
  { id: 'station5', number: '05', nameEn: 'File Hierarchy', nameSi: 'ගොනු මග හා දිගු', icon: FolderOpen, badge: 'Path & Extensions' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function OsEngineWorkbench() {
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

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Workbench Header & Master Terminal HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-6 md:p-8 border border-teal-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center gap-1.5 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                THE OS ENGINE ROOM • මෙහෙයුම් පද්ධති
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 10 ICT • Unit 04
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The OS Engine Room (මෙහෙයුම් පද්ධති වැඩබිම)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master the cold-boot firmware sequence, battle CLI against GUI, control Round-Robin CPU scheduling, defragment scattered disk clusters, and conquer authentic G.C.E. O/L exam challenges.
            </p>
          </div>

          {/* Sound & Status Widget */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="text-right pr-2 border-r border-slate-800">
              <div className="text-[10px] uppercase font-mono text-slate-400">Audio Synth</div>
              <div className="text-xs font-bold text-teal-400">{isMuted ? 'Muted' : 'Web Audio Live'}</div>
            </div>
            <button
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-slate-800 text-slate-500 border-slate-700'
                  : 'bg-teal-500/20 text-teal-300 border-teal-500/50 shadow-md shadow-teal-500/20'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 6 Stations Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
          {STATIONS.map((st) => {
            const Icon = st.icon;
            const isActive = activeStation === st.id;
            const isCleared = clearedStations[st.id];

            return (
              <button
                key={st.id}
                onClick={() => handleStationSelect(st.id)}
                className={`relative group p-3 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[90px] ${
                  isActive
                    ? 'bg-teal-500/20 border-teal-400 shadow-lg shadow-teal-500/20 ring-1 ring-teal-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    ST {st.number}
                  </span>
                  {isCleared && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-1.5">
                    <Icon
                      className={`w-3.5 h-3.5 ${isActive ? 'text-teal-300' : 'text-slate-400 group-hover:text-white'}`}
                    />
                    <div className="text-xs font-bold text-white truncate">{st.nameEn}</div>
                  </div>
                  <div className="text-[10px] text-teal-400/80 font-sinhala truncate">{st.nameSi}</div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeStationUnderline"
                    className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-teal-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Station Canvas Stage */}
      <div className="min-h-[550px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStation}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeStation === 'station1' && <ColdBootPipeline />}
            {activeStation === 'station2' && <InterfaceArena />}
            {activeStation === 'station3' && <ProcessDispatcher />}
            {activeStation === 'station4' && <DiskOptimizerStudio />}
            {activeStation === 'station5' && <FileHierarchyTree />}
            {activeStation === 'station6' && <Lesson04OsBossArcade />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
