'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  Radar, 
  Network, 
  History, 
  Swords, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Award, 
  HelpCircle,
  Terminal,
  MonitorPlay,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { FactoryConveyor } from './FactoryConveyor';
import { QualityRadar } from './QualityRadar';
import { SmartCityMap } from './SmartCityMap';
import { EvolutionTimeline } from './EvolutionTimeline';
import { ExamBossFight } from './ExamBossFight';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
  color: string;
}

const STATIONS: StationTab[] = [
  {
    id: 'station1',
    number: '01',
    nameEn: 'The Factory Conveyor',
    nameSi: 'දත්ත හා තොරතුරු පද්ධති',
    icon: Boxes,
    badge: 'Data vs. Info',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'station2',
    number: '02',
    nameEn: 'The Quality Radar',
    nameSi: 'ගුණාත්මක තොරතුරු ලක්ෂණ',
    icon: Radar,
    badge: 'Quality Radar',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'station3',
    number: '03',
    nameEn: 'The Connected Island',
    nameSi: 'ICT යෙදවුම් හා ඊ-රාජ්‍යය',
    icon: Network,
    badge: 'Smart Grid',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'station4',
    number: '04',
    nameEn: 'The Time Machine',
    nameSi: 'පරිගණකයේ පරිණාමය හා පරම්පරා',
    icon: History,
    badge: '1st - 5th Gen',
    color: 'from-amber-600 to-red-600',
  },
  {
    id: 'station5',
    number: '05',
    nameEn: 'Past Paper Arcade',
    nameSi: '2020 – 2025 විභාග සටන්',
    icon: Swords,
    badge: 'Boss Fights',
    color: 'from-rose-500 to-red-700',
  },
];

export function Lesson01Playground() {
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
    // Award progress mastery
    recordCheckpointAttempt(`station-${id}`, true);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
    if (!nextMuted) sound.playClick(800);
  };

  const currentStationMeta = STATIONS.find((s) => s.id === activeStation) || STATIONS[0];
  const progressPercent = Math.round((Object.keys(clearedStations).length / STATIONS.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Station OS Dock & Header Bar */}
      <div className="bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-900/40 pb-4">
          {/* OS Workspace Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-bold border border-indigo-500/30">
                  The System OS • Grade 10 Unit 01
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Sandbox
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Basic Concepts of ICT Interactive Playground
              </h2>
            </div>
          </div>

          {/* Audio Mute & OS HUD */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right font-mono text-xs">
              <span className="text-slate-400">Playground Progress: </span>
              <span className="text-indigo-400 font-bold">{progressPercent}%</span>
              <div className="w-32 bg-slate-900 h-1.5 rounded-full overflow-hidden mt-1 border border-indigo-900/50">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
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

        {/* 5 Station Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {STATIONS.map((station, idx) => {
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
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
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
          className="space-y-4"
        >
          {activeStation === 'station1' && <FactoryConveyor />}
          {activeStation === 'station2' && <QualityRadar />}
          {activeStation === 'station3' && <SmartCityMap />}
          {activeStation === 'station4' && <EvolutionTimeline />}
          {activeStation === 'station5' && <ExamBossFight />}

          {/* Linear Station Progression Footer */}
          <div className="p-4 bg-slate-950/80 border border-indigo-500/30 rounded-2xl flex items-center justify-between gap-3 backdrop-blur-md">
            {activeStation !== 'station1' ? (
              <button
                onClick={() => {
                  const currentIdx = STATIONS.findIndex(s => s.id === activeStation);
                  if (currentIdx > 0) handleStationSelect(STATIONS[currentIdx - 1].id);
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>← Previous Station</span>
              </button>
            ) : <div />}

            <div className="text-center hidden sm:block">
              <span className="text-[10px] text-slate-400 font-mono">
                Station {currentStationMeta.number} of 05: {currentStationMeta.nameEn}
              </span>
            </div>

            {activeStation !== 'station5' ? (
              <button
                onClick={() => {
                  const currentIdx = STATIONS.findIndex(s => s.id === activeStation);
                  if (currentIdx < STATIONS.length - 1) handleStationSelect(STATIONS[currentIdx + 1].id);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 group"
              >
                <span>Advance to Next Station ➔</span>
              </button>
            ) : (
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Final Boss Cleared
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
