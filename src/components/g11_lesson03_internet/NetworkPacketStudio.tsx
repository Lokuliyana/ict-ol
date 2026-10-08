'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Network, 
  Link2, 
  Search, 
  Radio, 
  Mail, 
  Bug, 
  Swords, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useProgress } from '@/context/ProgressContext';

import { TopologyLab } from './TopologyLab';
import { UrlSlicerWorkbench } from './UrlSlicerWorkbench';
import { DnsRouteRunner } from './DnsRouteRunner';
import { ProtocolSwitchboard } from './ProtocolSwitchboard';
import { EmailHeaderMatrix } from './EmailHeaderMatrix';
import { CyberSecurityVault } from './CyberSecurityVault';
import { InternetBossArcade } from './InternetBossArcade';

interface StationTab {
  id: 'station1' | 'station2' | 'station3' | 'station4' | 'station5' | 'station6' | 'station7';
  number: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  badge: string;
}

const STATIONS: StationTab[] = [
  { id: 'station1', number: '01', nameEn: 'Topology Lab', nameSi: 'ජාල ආකෘති & Switch/Hub', icon: Network, badge: 'Star/Bus/Ring/Mesh' },
  { id: 'station2', number: '02', nameEn: 'URL Dissector', nameSi: 'එකාකාර සම්පත් නිශ්චායකය', icon: Link2, badge: 'Anatomy & TLDs' },
  { id: 'station3', number: '03', nameEn: 'DNS & IP Route', nameSi: 'IP ලිපින & DNS විමසුම', icon: Search, badge: 'IPv4 Octets & DNS' },
  { id: 'station4', number: '04', nameEn: 'Protocols & Cloud', nameSi: 'නියමාවලි & වලාකුළු සේවා', icon: Radio, badge: 'HTTP/S, SMTP, SaaS' },
  { id: 'station5', number: '05', nameEn: 'E-Mail Control', nameSi: 'ඊමේල් ශීර්ෂක To/Cc/Bcc', icon: Mail, badge: 'Visibility Matrix' },
  { id: 'station6', number: '06', nameEn: 'Security Vault', nameSi: 'සයිබර් ආරක්ෂාව & CERT', icon: Bug, badge: 'Malware & Defense' },
  { id: 'station7', number: '07', nameEn: 'Boss Arcade', nameSi: '2020 – 2025 විභාග සටන්', icon: Swords, badge: 'O/L Past Papers' },
];

export function NetworkPacketStudio() {
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
    recordCheckpointAttempt(`g11-u3-station-${id}`, true);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setMuted(nextMute);
    if (!nextMute) sound.playClick(700);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header & Cyber-Network HUD */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 md:p-8 border border-cyan-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 shadow-sm">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                THE GLOBAL PACKET ROUTER • අන්තර්ජාලය සහ විද්‍යුත් තැපෑල
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Grade 11 ICT • Unit 03
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              The Global Packet Router (ජාල හා ඊමේල් විද්‍යාගාරය)
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Master network topologies, URL anatomy, IPv4 addressing, DNS routing, email headers (To/Cc/Bcc), cloud models (IaaS/PaaS/SaaS), and Sri Lanka CERT cybersecurity protocols through interactive cybernetic simulations.
            </p>
          </div>

          {/* Diagnostic Stats & Mute Control */}
          <div className="flex items-center gap-4 self-start md:self-auto bg-slate-900/80 p-3 rounded-2xl border border-cyan-500/20 backdrop-blur-md">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1 justify-end">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                GLOBAL PACKET STREAM
              </div>
              <div className="text-xs font-mono text-slate-300 font-bold">
                100% G.C.E. O/L ALIGNED
              </div>
            </div>

            <button
              onClick={handleToggleMute}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-rose-950/40 border-rose-500/40 text-rose-400'
                  : 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/50'
              }`}
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Station Navigation Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STATIONS.map((station) => {
            const isActive = activeStation === station.id;
            const isCleared = clearedStations[station.id];
            const Icon = station.icon;

            return (
              <button
                key={station.id}
                onClick={() => handleStationSelect(station.id)}
                className={`group relative p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-cyan-400">
                    {station.number}
                  </span>
                  <div className="flex items-center gap-1">
                    {isCleared && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    )}
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-white truncate">
                    {station.nameEn}
                  </div>
                  <div className="text-[10px] text-cyan-300 truncate font-sans">
                    {station.nameSi}
                  </div>
                </div>

                <div className="mt-2 text-[9px] font-mono text-slate-500 truncate">
                  {station.badge}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Station Workspace */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStation}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
        >
          {activeStation === 'station1' && <TopologyLab />}
          {activeStation === 'station2' && <UrlSlicerWorkbench />}
          {activeStation === 'station3' && <DnsRouteRunner />}
          {activeStation === 'station4' && <ProtocolSwitchboard />}
          {activeStation === 'station5' && <EmailHeaderMatrix />}
          {activeStation === 'station6' && <CyberSecurityVault />}
          {activeStation === 'station7' && <InternetBossArcade />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
