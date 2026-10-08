'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Grid, 
  Calculator, 
  Anchor, 
  FunctionSquare, 
  Stethoscope, 
  BarChart2, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  Table as TableIcon
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';
import { AlignmentMagnet } from './AlignmentMagnet';
import { OperatorPrecedenceLab } from './OperatorPrecedenceLab';
import { LaserGridAnchors } from './LaserGridAnchors';
import { FormulaLab } from './FormulaLab';
import { ErrorClinic } from './ErrorClinic';
import { ChartVisualizer } from './ChartVisualizer';
import { Lesson07BossArcade } from './Lesson07BossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6' | 'station7';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Grid & Alignment', nameSi: 'පෙළගැස්ම හා දත්ත වර්ග', icon: Grid, badge: 'Left vs Right' },
  { id: 'station2', number: '02', nameEn: 'Math Precedence', nameSi: 'BODMAS ප්‍රමුඛතාව', icon: Calculator, badge: 'Bracket Shield' },
  { id: 'station3', number: '03', nameEn: 'Laser Grid Anchors', nameSi: 'සාපේක්ෂ හා නිරපේක්ෂ', icon: Anchor, badge: 'Relative vs $' },
  { id: 'station4', number: '04', nameEn: 'Function Toolbox', nameSi: 'ශ්‍රිත හා IF තීරණ', icon: FunctionSquare, badge: 'SUM, COUNT, IF' },
  { id: 'station5', number: '05', nameEn: 'Error Clinic', nameSi: 'දෝෂ සංකේත පිළියම්', icon: Stethoscope, badge: '#####, #DIV/0!' },
  { id: 'station6', number: '06', nameEn: 'Chart Visualizer', nameSi: 'දත්ත ප්‍රස්ථාරකරණය', icon: BarChart2, badge: 'Pie, Bar, Line' },
  { id: 'station7', number: '07', nameEn: 'Past Paper Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'Boss Fights' },
];

export function SpreadsheetStudio() {
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
    recordCheckpointAttempt(`g10-u6-station-${id}`, true);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header & Grid Matrix HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 md:p-8 border border-emerald-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
                <TableIcon className="w-3.5 h-3.5 text-emerald-400" />
                THE GRID MATRIX STUDIO • ඉලෙක්ට්‍රොනික පැතුරුම්පත්
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 10 ICT • Unit 06
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The Grid Matrix Studio (ඉලෙක්ට්‍රොනික පැතුරුම්පත් මැදිරිය)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master row/column coordinates, BODMAS operator precedence, laser-guided absolute cell referencing ($), statistical functions, error diagnostics, and authentic O/L examination challenges.
            </p>
          </div>

          {/* Sound & HUD Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="text-right pr-2 border-r border-slate-800">
              <div className="text-[10px] uppercase font-mono text-slate-400">Audio Synth</div>
              <div className="text-xs font-bold text-emerald-400">{isMuted ? 'Muted' : 'Live Web Audio'}</div>
            </div>
            <button
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-slate-800 text-slate-500 border-slate-700'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/20'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 7 Stations Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
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
                    ? 'bg-emerald-500/20 border-emerald-400 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    ST {st.number}
                  </span>
                  {isCleared && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-1.5">
                    <Icon
                      className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-slate-400 group-hover:text-white'}`}
                    />
                    <div className="text-xs font-bold text-white truncate">{st.nameEn}</div>
                  </div>
                  <div className="text-[10px] text-emerald-400/80 font-sinhala truncate">{st.nameSi}</div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeStationUnderlineSpreadsheet"
                    className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-emerald-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Station Stage */}
      <div className="min-h-[550px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStation}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeStation === 'station1' && <AlignmentMagnet />}
            {activeStation === 'station2' && <OperatorPrecedenceLab />}
            {activeStation === 'station3' && <LaserGridAnchors />}
            {activeStation === 'station4' && <FormulaLab />}
            {activeStation === 'station5' && <ErrorClinic />}
            {activeStation === 'station6' && <ChartVisualizer />}
            {activeStation === 'station7' && <Lesson07BossArcade />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
