'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Boxes, 
  Pipette, 
  Database, 
  Globe, 
  Swords, 
  Volume2, 
  VolumeX, 
  Terminal, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { BitSwitchboard } from './BitSwitchboard';
import { MagneticBitGrouper } from './MagneticBitGrouper';
import { HexColorVat } from './HexColorVat';
import { StorageSiloPacker } from './StorageSiloPacker';
import { UniversalDecoder } from './UniversalDecoder';
import { Lesson03BossArcade } from './Lesson03BossArcade';
import { LogicWorkbench } from '@/components/lesson04/LogicWorkbench';
import { Cpu } from 'lucide-react';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Binary Switchboard', nameSi: 'වෝල්ටීයතා හා බිටු අගයන්', icon: Zap, badge: 'Voltage & Bits' },
  { id: 'station2', number: '02', nameEn: 'Base Converter Chamber', nameSi: '3-Bit හා 4-Bit කාණ්ඩ', icon: Boxes, badge: 'Octal & Hex' },
  { id: 'station3', number: '03', nameEn: 'Hex Color Vat', nameSi: 'RGB වර්ණ ➔ #RRGGBB', icon: Pipette, badge: 'Color Codes' },
  { id: 'station4', number: '04', nameEn: 'Storage Silo', nameSi: 'ආචයන ඒකක ගණනය', icon: Database, badge: 'Unit Math' },
  { id: 'station5', number: '05', nameEn: 'The Rosetta Terminal', nameSi: 'ASCII, BCD හා Unicode', icon: Globe, badge: 'Encodings' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function DataRepresentationFoundry() {
  const [subModule, setSubModule] = useState<'data_rep' | 'logic_gates'>('data_rep');
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
    recordCheckpointAttempt(`g10-u3-station-${id}`, true);
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
      {/* Sub-module Switcher Bar */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { sound.playClick(); setSubModule('data_rep'); }}
            className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              subModule === 'data_rep'
                ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>Part 1: Data Representation (දත්ත නිරූපණය)</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setSubModule('logic_gates'); }}
            className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              subModule === 'logic_gates'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Part 2: Logic Gates & Circuits (ලොජික් ද්වාර)</span>
          </button>
        </div>
      </div>

      {subModule === 'logic_gates' ? (
        <LogicWorkbench />
      ) : (
        <>
          {/* Top Station OS Dock & Header Bar */}
          <div className="bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-900/40 pb-4">
              {/* OS Workspace Title */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-fuchsia-600 to-cyan-500 p-0.5 shadow-lg shadow-fuchsia-500/30 flex items-center justify-center text-white">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-mono font-bold border border-fuchsia-500/30">
                      Bit & Color Foundry • Grade 10 Unit 03
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Digital Data Lab
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white">
                    Data Representation in Computer Systems (දත්ත නිරූපණය)
                  </h2>
                </div>
              </div>

              {/* Audio Mute & OS HUD */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right font-mono text-xs">
                  <span className="text-slate-400">Foundry Progress: </span>
                  <span className="text-fuchsia-400 font-bold">{progressPercent}%</span>
                  <div className="w-32 bg-slate-900 h-1.5 rounded-full overflow-hidden mt-1 border border-indigo-900/50">
                    <div
                      className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
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
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-fuchsia-400'}`} />
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
              {activeStation === 'station1' && <BitSwitchboard />}
              {activeStation === 'station2' && <MagneticBitGrouper />}
              {activeStation === 'station3' && <HexColorVat />}
              {activeStation === 'station4' && <StorageSiloPacker />}
              {activeStation === 'station5' && <UniversalDecoder />}
              {activeStation === 'station6' && <Lesson03BossArcade />}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
