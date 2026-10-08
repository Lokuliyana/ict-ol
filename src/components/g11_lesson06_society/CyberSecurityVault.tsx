'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Bug, 
  KeyRound, 
  Lock, 
  Radio, 
  Zap, 
  Mail, 
  AlertTriangle, 
  PhoneCall, 
  Sparkles, 
  RotateCcw, 
  Flame, 
  Layers,
  Server,
  Terminal,
  FileLock,
  CheckCircle2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface MalwareCard {
  id: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  color: string;
  transmission: string;
  mechanism: string;
  example: string;
}

const MALWARE_TYPES: MalwareCard[] = [
  {
    id: 'virus',
    nameEn: 'Computer Virus (වයිරස)',
    nameSi: 'සත්කාරක ගොනුවක් අවශ්‍ය වන අතර දත්ත විනාශ කරයි',
    icon: Bug,
    color: 'border-red-500/40 bg-red-950/30 text-red-300',
    transmission: 'Attaches to executable host files (.exe, .docx macro).',
    mechanism: 'Requires human action (opening infected file) to execute; corrupts or destroys files.',
    example: 'ILOVEYOU virus, macro viruses.'
  },
  {
    id: 'worm',
    nameEn: 'Computer Worm (පණුවන්)',
    nameSi: 'ස්වාධීනව ජාල හරහා ස්වයං-ප්‍රතිවලිත වෙයි',
    icon: Radio,
    color: 'border-orange-500/40 bg-orange-950/30 text-orange-300',
    transmission: 'Autonomous network propagation via system vulnerabilities.',
    mechanism: 'Does NOT need a host file or human activation; replicates rapidly, choking network bandwidth.',
    example: 'SQL Slammer, WannaCry worm propagation module.'
  },
  {
    id: 'trojan',
    nameEn: 'Trojan Horse (ට්‍රෝජන් අශ්වයා)',
    nameSi: 'ප්‍රයෝජනවත් මෘදුකාංගයක් ලෙස වෙස්වලාගෙන පසුදොර විවෘත කරයි',
    icon: Lock,
    color: 'border-amber-500/40 bg-amber-950/30 text-amber-300',
    transmission: 'Disguised as useful software (games, utilities, screensavers).',
    mechanism: 'Once installed, opens a secret backdoor port allowing unauthorized remote hackers to control the PC.',
    example: 'Fake Game Installers, Remote Access Trojans (RATs).'
  },
  {
    id: 'spyware',
    nameEn: 'Spyware & Keylogger (ඔත්තු මෘදුකාංග)',
    nameSi: 'පරිශීලකයා නොදැනුවත්ව යතුරුපුවරු තොරතුරු සටහන් කරගනී',
    icon: KeyRound,
    color: 'border-purple-500/40 bg-purple-950/30 text-purple-300',
    transmission: 'Bundled with unverified free downloads or malicious browser toolbars.',
    mechanism: 'Silently tracks keystrokes, browser history, passwords, and banking numbers, relaying data to hackers.',
    example: 'Hardware/Software Keyloggers, tracking adware.'
  },
  {
    id: 'ransomware',
    nameEn: 'Ransomware (කප්පම් මෘදුකාංග)',
    nameSi: 'ගොනු සංකේතනය කර කප්පම් මුදල් ඉල්ලයි',
    icon: FileLock,
    color: 'border-rose-500/40 bg-rose-950/30 text-rose-300',
    transmission: 'Phishing email attachments or unpatched OS exploits.',
    mechanism: 'Strongly encrypts user documents/databases and demands cryptocurrency ransom for decryption key.',
    example: 'WannaCry, Locky, Ryuk.'
  }
];

export function CyberSecurityVault() {
  const [activeTab, setActiveTab] = useState<'threats' | 'malware' | 'cert'>('threats');

  // Interactive Threat Interceptor State
  const [activeThreatId, setActiveThreatId] = useState<'phishing' | 'trojan' | 'ddos'>('phishing');
  const [threatStatus, setThreatStatus] = useState<Record<string, boolean>>({
    phishing: false,
    trojan: false,
    ddos: false
  });
  const [incidentReported, setIncidentReported] = useState<boolean>(false);

  const handleNeutralizeThreat = (threat: 'phishing' | 'trojan' | 'ddos') => {
    sound.playVictory();
    setThreatStatus((prev) => ({ ...prev, [threat]: true }));
  };

  const handleCertEmergencyCall = () => {
    sound.playVictory();
    setIncidentReported(true);
  };

  const handleResetInterceptor = () => {
    sound.playClick(400);
    setThreatStatus({ phishing: false, trojan: false, ddos: false });
    setIncidentReported(false);
  };

  const allThreatsCleared = threatStatus.phishing && threatStatus.trojan && threatStatus.ddos;

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-rose-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('threats');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'threats'
              ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Flame className="w-4 h-4 text-rose-300" />
          <span>Firewall Interceptor</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('malware');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'malware'
              ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Bug className="w-4 h-4 text-orange-300" />
          <span>Malware Lab</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(600);
            setActiveTab('cert');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'cert'
              ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <PhoneCall className="w-4 h-4 text-emerald-300" />
          <span>Sri Lanka CERT|CC</span>
        </button>
      </div>

      {/* Tab 1: Threat Interceptor */}
      {activeTab === 'threats' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Active Threat Workbench */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-rose-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                Cyber Threat Interceptor & Firewall
              </h3>
              <span className="text-xs bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-full font-mono font-bold">
                Live Firewall HUD
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Detect, inspect, and neutralize live cyber intrusions. Neutralize all three attack vectors to secure the network router.
            </p>

            {/* Threat Switcher Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  sound.playClick(500);
                  setActiveThreatId('phishing');
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col items-start gap-1 cursor-pointer ${
                  activeThreatId === 'phishing'
                    ? 'bg-rose-500/20 border-rose-400 text-rose-200'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> 1. Phishing
                </div>
                <span className="text-[10px] text-slate-400 font-sinhala">ව්‍යාජ විද්‍යුත් තැපෑල</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick(550);
                  setActiveThreatId('trojan');
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col items-start gap-1 cursor-pointer ${
                  activeThreatId === 'trojan'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> 2. Trojan RAT
                </div>
                <span className="text-[10px] text-slate-400 font-sinhala">ට්‍රෝජන් මෘදුකාංගය</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick(600);
                  setActiveThreatId('ddos');
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col items-start gap-1 cursor-pointer ${
                  activeThreatId === 'ddos'
                    ? 'bg-red-500/20 border-red-400 text-red-200'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> 3. DDoS Attack
                </div>
                <span className="text-[10px] text-slate-400 font-sinhala">සේවා ප්‍රතික්ෂේප ප්‍රහාර</span>
              </button>
            </div>

            {/* Active Threat Visualizer Card */}
            <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
              {activeThreatId === 'phishing' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-rose-400 font-mono font-bold">
                    <span>⚠️ INCOMING FRAUDULENT EMAIL</span>
                    <span>Spoofed Sender ID</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-rose-500/30 text-xs text-slate-200 space-y-2">
                    <div><b>From:</b> support@boc-security-alert-verification.com</div>
                    <div><b>Subject:</b> URGENT: Your Bank Account Suspended!</div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      "Dear Customer, Click here to enter your NIC number and 4-digit ATM PIN immediately to restore access."
                    </p>
                    <div className="text-[10px] text-red-400 font-mono bg-red-950/60 p-1.5 rounded border border-red-800">
                      🔗 Fake URL: http://fake-login.boc.lk.steal-creds.net
                    </div>
                  </div>

                  {!threatStatus.phishing ? (
                    <button
                      onClick={() => handleNeutralizeThreat('phishing')}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-xs shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Identify as Phishing & Purge Message
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      Phishing threat neutralized! User credentials secured.
                    </div>
                  )}
                </div>
              )}

              {activeThreatId === 'trojan' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono font-bold">
                    <span>⚠️ SUSPICIOUS PROCESS TELEMETRY</span>
                    <span>Port 8080 Open</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/30 text-xs text-slate-200 space-y-2">
                    <div><b>Downloaded File:</b> Super_Racing_Game_2025.exe</div>
                    <div><b>Observed Behavior:</b> Opens unauthorized hidden TCP socket to remote IP: 185.220.101.5</div>
                    <p className="text-slate-400 text-[11px]">
                      The application appears as a racing game but is transmitting keystrokes and system access to an external command server.
                    </p>
                  </div>

                  {!threatStatus.trojan ? (
                    <button
                      onClick={() => handleNeutralizeThreat('trojan')}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Identify as Trojan Horse & Quarantine File
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      Trojan quarantined! Remote backdoor connection terminated.
                    </div>
                  )}
                </div>
              )}

              {activeThreatId === 'ddos' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-red-400 font-mono font-bold">
                    <span>⚠️ BOTNET TRAFFIC SPIKE</span>
                    <span>1,500,000 SYN Requests/sec</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-red-500/30 text-xs text-slate-200 space-y-2">
                    <div><b>Target:</b> National Examination Results Web Server</div>
                    <div><b>Symptoms:</b> Bandwidth choked, genuine students cannot view examination results.</div>
                    <p className="text-slate-400 text-[11px]">
                      Distributed Denial of Service (DDoS): Multiple zombie computers flood the web server simultaneously with bogus requests.
                    </p>
                  </div>

                  {!threatStatus.ddos ? (
                    <button
                      onClick={() => handleNeutralizeThreat('ddos')}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4" />
                      Activate DDoS Rate-Limiter & Block Botnet IPs
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      DDoS attack filtered! Legitimate traffic restored to 100%.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Reset Button */}
            <div className="flex justify-end">
              <button
                onClick={handleResetInterceptor}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Firewall Simulator
              </button>
            </div>
          </div>

          {/* Firewall Status HUD */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-rose-400" />
                  Router Defense Status Matrix
                </h4>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded">
                  {Object.values(threatStatus).filter(Boolean).length} / 3 THREATS CLEARED
                </span>
              </div>

              {/* Status List */}
              <div className="space-y-3 text-xs">
                <div className={`p-3 rounded-2xl border transition-all ${
                  threatStatus.phishing
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>1. Phishing Defense Filter</span>
                    <span>{threatStatus.phishing ? 'ACTIVE ✅' : 'PENDING ⚠️'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Protects against deceptive websites and emails designed to steal credentials and banking PINs.
                  </p>
                </div>

                <div className={`p-3 rounded-2xl border transition-all ${
                  threatStatus.trojan
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>2. Trojan Backdoor Shield</span>
                    <span>{threatStatus.trojan ? 'ACTIVE ✅' : 'PENDING ⚠️'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Blocks disguised programs from opening covert ports to unauthorized remote command centers.
                  </p>
                </div>

                <div className={`p-3 rounded-2xl border transition-all ${
                  threatStatus.ddos
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>3. Anti-DDoS Traffic Balancer</span>
                    <span>{threatStatus.ddos ? 'ACTIVE ✅' : 'PENDING ⚠️'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Prevents automated botnets from choking network resources and denying service to legitimate citizens.
                  </p>
                </div>
              </div>

              {allThreatsCleared && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-500 text-emerald-200 text-xs font-bold text-center space-y-1">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    All Cyber Threat Vectors Neutralized!
                  </div>
                  <p className="text-[11px] text-emerald-300 font-normal">
                    Network integrity secured according to Sri Lanka National Cyber Security standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Malware Classification Lab */}
      {activeTab === 'malware' && (
        <div className="space-y-4">
          <div className="bg-slate-900/80 border border-orange-500/30 rounded-3xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Bug className="w-5 h-5 text-orange-400" />
                Malware Taxonomy & Characteristics (විෂය නිර්දේශ වර්ගීකරණය)
              </h3>
              <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full font-mono font-bold">
                5 Primary Types
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In G.C.E. O/L ICT, malicious software (Malware) is classified based on host dependency, self-replication capabilities, and stealth mechanisms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MALWARE_TYPES.map((malware) => {
                const Icon = malware.icon;
                return (
                  <div
                    key={malware.id}
                    className={`p-5 rounded-2xl border space-y-3 shadow-lg ${malware.color}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-slate-900/80 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs">{malware.nameEn}</h4>
                        <span className="text-[10px] text-slate-400 font-sinhala block">{malware.nameSi}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div>
                        <b className="text-white text-[11px]">Transmission:</b>
                        <p className="text-slate-400 text-[11px]">{malware.transmission}</p>
                      </div>
                      <div>
                        <b className="text-white text-[11px]">Mechanism:</b>
                        <p className="text-slate-400 text-[11px]">{malware.mechanism}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sri Lanka CERT|CC & Legal Framework */}
      {activeTab === 'cert' && (
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              Sri Lanka CERT|CC & Legal Cyber Protection (2025 Paper II Q06)
            </h3>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-mono font-bold">
              National Agency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CERT Card */}
            <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sri Lanka CERT|CC</h4>
                  <span className="text-[11px] text-slate-400">
                    Computer Emergency Readiness Team | Coordination Center
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="leading-relaxed">
                  The national center in Sri Lanka established to coordinate cyber security incident response, publish threat advisories, and educate the public on cyber safety.
                </p>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <b className="text-emerald-300">Emergency Hotline:</b> 101 / +94 11 269 1692
                  <br />
                  <b className="text-emerald-300">Official Portal:</b> cert.gov.lk
                </div>
              </div>

              {/* Simulation Action */}
              {!incidentReported ? (
                <button
                  onClick={handleCertEmergencyCall}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  Dispatch Emergency Report to Sri Lanka CERT|CC
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Report Logged! Incident Response Team Deployed (ශ්‍රී ලංකා CERT වෙත වාර්තා විය).
                </div>
              )}
            </div>

            {/* Computer Crimes Act Card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Computer Crimes Act No. 24 of 2007</h4>
                  <span className="text-[11px] text-slate-400">ශ්‍රී ලංකා පරිගණක අපරාධ පනත</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-xs text-slate-300 leading-relaxed">
                <li><b className="text-amber-300">Unauthorized Access (අනවසර පිවිසුම):</b> Hacking into personal computers or corporate servers without permission.</li>
                <li><b className="text-amber-300">Unauthorized Modification:</b> Introducing malware or altering existing records without authorization.</li>
                <li><b className="text-amber-300">Denial of Service (DoS):</b> Deliberately blocking access to a computer system or network.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
