'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Type, 
  Sliders, 
  Table as TableIcon, 
  Image as ImageIcon, 
  Mail, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  FileText
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { TypographyLab } from './TypographyLab';
import { MarginAligner } from './MarginAligner';
import { TableMason } from './TableMason';
import { GraphicWrapper } from './GraphicWrapper';
import { MailMergeMachine } from './MailMergeMachine';
import { Lesson05BossArcade } from './Lesson05BossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Typography Lab', nameSi: 'අකුරු හැඩසැසීම හා FOSS', icon: Type, badge: 'Sub/Super & Case' },
  { id: 'station2', number: '02', nameEn: 'Layout Architect', nameSi: 'පෙළගැස්වීම් හා පේළි පරතරය', icon: Sliders, badge: 'Justify & Indents' },
  { id: 'station3', number: '03', nameEn: 'Table Mason', nameSi: 'වගු හා සෛල ඒකාබද්ධය', icon: TableIcon, badge: 'Merge & Split Cells' },
  { id: 'station4', number: '04', nameEn: 'Graphics & Wrap', nameSi: 'පින්තූර හා පෙළ එතීම', icon: ImageIcon, badge: 'Drop Cap & Wrap' },
  { id: 'station5', number: '05', nameEn: 'Mail Merge Press', nameSi: 'තැපැල් ඒකාබද්ධ කිරීම', icon: Mail, badge: 'Bulk Personalization' },
  { id: 'station6', number: '06', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function WordProcessingStudio() {
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
    recordCheckpointAttempt(`g10-u5-station-${id}`, true);
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
      {/* Top Studio Dock & Ribbon Header Bar */}
      <div className="bg-slate-950/90 border border-emerald-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900/40 pb-4">
          
          {/* Studio Workspace Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-md font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  THE EDITORIAL STUDIO v2.0
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  📰 Digital Typesetting & Publishing Suite
                </span>
              </div>
              <h2 className="text-lg font-black text-white">
                Word Processing Studio • වචන සකසුම්
              </h2>
            </div>
          </div>

          {/* Audio & Status HUD */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-slate-400">Studio Mastery</div>
              <div className="text-xs font-mono font-bold text-emerald-400">
                {Object.keys(clearedStations).length} / {STATIONS.length} Stations Cleared ({progressPercent}%)
              </div>
            </div>

            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'bg-slate-900 text-emerald-400 border-slate-700 hover:border-emerald-500'
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
                    ? 'bg-gradient-to-b from-emerald-950/80 to-slate-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeWordStationGlow"
                    className="absolute inset-0 bg-emerald-500/10 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_10px_#10b981]'
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
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 inline" />
                    )}
                  </div>
                  <p className="text-[10px] font-sinhala text-slate-400 truncate">
                    {st.nameSi}
                  </p>
                  <span className="inline-block text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-950/80 text-emerald-300/80 border border-slate-800">
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
            {activeStation === 'station1' && <TypographyLab />}
            {activeStation === 'station2' && <MarginAligner />}
            {activeStation === 'station3' && <TableMason />}
            {activeStation === 'station4' && <GraphicWrapper />}
            {activeStation === 'station5' && <MailMergeMachine />}
            {activeStation === 'station6' && <Lesson05BossArcade />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Studio Status Bar Bottom Strip */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1 text-emerald-400">
            <FileText className="w-3.5 h-3.5" />
            <span>Page: 1 of 1</span>
          </span>
          <span>Words: 342</span>
          <span>Language: English (Sri Lanka) / Sinhala</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Zoom: 100%</span>
          <div className="flex items-center gap-1">
            {STATIONS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleStationSelect(s.id)}
                className={`w-6 h-6 rounded-lg text-[10px] font-bold transition-all ${
                  activeStation === s.id
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_8px_#10b981]'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
