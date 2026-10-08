'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  ShieldAlert, 
  Activity, 
  Trash2, 
  Globe, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  HeartPulse,
  Leaf
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';

import { SoftwareLicenseRegistry } from './SoftwareLicenseRegistry';
import { CyberSecurityVault } from './CyberSecurityVault';
import { ErgonomicPostureRig } from './ErgonomicPostureRig';
import { EWasteDisassemblyPlant } from './EWasteDisassemblyPlant';
import { DigitalDivideMap } from './DigitalDivideMap';
import { SocietyBossArcade } from './SocietyBossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'License Registry', nameSi: 'බලපත්‍ර සහ බුද්ධිමය දේපළ', icon: Scale, badge: 'FOSS, Shareware' },
  { id: 'station2', number: '02', nameEn: 'Security Vault', nameSi: 'සයිබර් තර්ජන සහ CERT|CC', icon: ShieldAlert, badge: 'Malware & Crimes' },
  { id: 'station3', number: '03', nameEn: 'Posture Rig', nameSi: 'කාර්යශ්‍රමක්ෂමතාව', icon: Activity, badge: 'RSI, CVS & 20-20-20' },
  { id: 'station4', number: '04', nameEn: 'E-Waste Plant', nameSi: 'ඊ-අපද්‍රව්‍ය සහ 3R', icon: Trash2, badge: 'Pb, Hg, Cd & 3R' },
  { id: 'station5', number: '05', nameEn: 'Digital Divide', nameSi: 'ඩිජිටල් බෙදීම හා AI/IoT', icon: Globe, badge: 'Nenasala & Horizons' },
  { id: 'station6', number: '06', nameEn: 'Boss Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'O/L Past Papers' },
];

export function CyberCitizenEcoLab() {
  const [activeStation, setActiveStation] = useState<StationTab['id']>('station1');
  const [isMuted, setIsMuted] = useState(false);
  const [clearedStations, setClearedStations] = useState<Record<string, boolean>>({
    station1: true,
  });

  const { recordCheckpointAttempt } = useProgress();

  const handleStationSelect = (id: StationTab['id']) => {
    sound.playClick(600);
    setActiveStation(id);
    setClearedStations((prev) => ({ ...prev, [id]: true }));
    recordCheckpointAttempt(`g11-u6-station-${id}`, true);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header & Civic Control HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 md:p-8 border border-emerald-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                THE CYBER CITIZEN & ECO-LAB • තොරතුරු තාක්ෂණය හා සමාජය
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 11 ICT • Unit 06
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The Cyber Citizen & Eco-Lab (සයිබර් පුරවැසි සහ හරිත පරිසර විද්‍යාගාරය)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master ICT ethics & statutory cyber laws (Sri Lanka Computer Crimes Act & IP Act), software license classification (Proprietary, FOSS, Shareware, Freeware), malware defense & Sri Lanka CERT|CC, ergonomic posture mechanics (RSI, CVS & CTS prevention), toxic e-waste heavy metals (Lead, Mercury, Cadmium) with the 3R concept, and bridging the national digital divide.
            </p>
          </div>

          {/* Diagnostic Stats & Mute Control */}
          <div className="flex items-center gap-4 self-start md:self-auto bg-slate-900/80 p-3 rounded-2xl border border-emerald-500/20 backdrop-blur-md">
            <div className="text-right">
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                Civic Mastery
              </div>
              <div className="text-lg font-black text-emerald-400 font-mono flex items-center justify-end gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {Object.keys(clearedStations).length} / {STATIONS.length}
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800" />

            <button
              onClick={handleToggleMute}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isMuted 
                  ? 'bg-red-500/20 border-red-500/40 text-red-400' 
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
              }`}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Station Tabs Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          {STATIONS.map((station) => {
            const Icon = station.icon;
            const isActive = activeStation === station.id;
            const isCleared = !!clearedStations[station.id];

            return (
              <button
                key={station.id}
                onClick={() => handleStationSelect(station.id)}
                className={`group relative p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-emerald-600/30 to-teal-600/20 border-emerald-400/80 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    {station.number}
                  </span>
                </div>

                <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                  {station.nameEn}
                </div>
                <div className="text-[10px] text-slate-400 font-sinhala truncate mt-0.5">
                  {station.nameSi}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 text-emerald-300 border border-emerald-500/20 truncate">
                    {station.badge}
                  </span>
                  {isCleared && (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 ml-1" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStation}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {activeStation === 'station1' && <SoftwareLicenseRegistry />}
            {activeStation === 'station2' && <CyberSecurityVault />}
            {activeStation === 'station3' && <ErgonomicPostureRig />}
            {activeStation === 'station4' && <EWasteDisassemblyPlant />}
            {activeStation === 'station5' && <DigitalDivideMap />}
            {activeStation === 'station6' && <SocietyBossArcade />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
