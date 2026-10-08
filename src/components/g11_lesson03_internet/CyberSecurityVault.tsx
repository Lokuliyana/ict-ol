'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Bug, 
  Lock, 
  Key, 
  FileWarning, 
  AlertOctagon, 
  Radio, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  HelpCircle,
  EyeOff
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface MalwareInfo {
  id: string;
  nameEn: string;
  nameSi: string;
  category: string;
  behaviorEn: string;
  behaviorSi: string;
  preventionEn: string;
  preventionSi: string;
  threatLevel: 'HIGH' | 'CRITICAL' | 'MEDIUM';
}

const MALWARE_LIST: MalwareInfo[] = [
  {
    id: 'virus',
    nameEn: 'Computer Virus',
    nameSi: 'පරිගණක වයිරස',
    category: 'Host-dependent Executable Infection',
    threatLevel: 'HIGH',
    behaviorEn: 'Attaches malicious code to clean host files (.exe, .docx). Spreads when the infected program is executed.',
    behaviorSi: 'ක්‍රියාත්මක වන වෙනත් ලිපිගොනු (.exe) සමඟ බැඳී ක්‍රියාත්මක වන අතර එම ගොනුව විවෘත කළ විට පරිගණකයට හානි සිදු කරයි.',
    preventionEn: 'Install updated Antivirus software and scan USB drives before opening files.',
    preventionSi: 'යාවත්කාලීන කළ ප්‍රතිවයිරස (Antivirus) මෘදුකාංග භාවිත කිරීම.'
  },
  {
    id: 'worm',
    nameEn: 'Computer Worm',
    nameSi: 'පරිගණක පණුවන්',
    category: 'Standalone Self-Replicating Network Threat',
    threatLevel: 'CRITICAL',
    behaviorEn: 'Replicates autonomously across network links without needing a host program or human intervention, choking bandwidth.',
    behaviorSi: 'වෙනත් වැඩසටහන් ආධාරයෙන් තොරව තනිවම ජාලය ඔස්සේ ව්‍යාප්ත වෙමින් ජාල වේගය අඩපණ කර දමයි.',
    preventionEn: 'Enable active Firewalls and apply OS security patches regularly.',
    preventionSi: 'ජාල ගිනිපවුර (Firewall) සක්‍රියව තබා ගැනීම සහ මෙහෙයුම් පද්ධතිය යාවත්කාලීන කිරීම.'
  },
  {
    id: 'trojan',
    nameEn: 'Trojan Horse',
    nameSi: 'ට්‍රෝජන් අශ්වයා',
    category: 'Disguised Malicious Backdoor',
    threatLevel: 'CRITICAL',
    behaviorEn: 'Masquerades as legitimate, useful software (e.g., cracked games, fake utilities) while secretly opening a remote backdoor.',
    behaviorSi: 'ප්‍රයෝජනවත් මෘදුකාංගයක් හෝ ක්‍රීඩාවක් ලෙස වෙස්වලාගෙන පැමිණ පරිගණකය තුළට රහසිගත ප්‍රවේශයක් (Backdoor) සාදයි.',
    preventionEn: 'Never download pirated or unverified software from suspicious websites.',
    preventionSi: 'විශ්වාසනීය නොවන වෙබ් අඩවි වලින් නොමිලේ දෙන හොර මෘදුකාංග (Pirated) බාගත නොකිරීම.'
  },
  {
    id: 'spyware',
    nameEn: 'Spyware / Keylogger',
    nameSi: 'ඔත්තු මෘදුකාංග',
    category: 'Covert Data & Credential Harvester',
    threatLevel: 'HIGH',
    behaviorEn: 'Silently tracks keystrokes, browsing history, and login credentials without user consent, sending data to hackers.',
    behaviorSi: 'පරිශීලකයාට නොදැනෙන ලෙස යතුරුපුවරු හැසිරීම්, මුරපද සහ ක්‍රෙඩිට් කාඩ්පත් තොරතුරු හොරා රැස් කරයි.',
    preventionEn: 'Use anti-spyware scanning and inspect background browser extensions.',
    preventionSi: 'Anti-spyware මෙවලම් භාවිතය සහ සැක සහිත බ්‍රවුසර දිගු (Extensions) ඉවත් කිරීම.'
  },
  {
    id: 'ransomware',
    nameEn: 'Ransomware',
    nameSi: 'කප්පම් මෘදුකාංග',
    category: 'Extortion File Encryptor',
    threatLevel: 'CRITICAL',
    behaviorEn: 'Encrypts all victim documents and database files, demanding a cryptocurrency ransom for the private decryption key.',
    behaviorSi: 'පරිගණකයේ ඇති සියලුම ගොනු සංකේතාංකනය කර අගුළු දමා ඒවා මුදාහැරීමට මුදල් (කප්පම්) ඉල්ලා සිටියි.',
    preventionEn: 'Maintain regular offline, air-gapped backups of important school and personal data.',
    preventionSi: 'වැදගත් දත්ත බාහිර දෘඪ තැටිවල නිරන්තරයෙන් පිටපත් (Backup) තබා ගැනීම.'
  },
  {
    id: 'phishing',
    nameEn: 'Phishing (තතුබෑම)',
    nameSi: 'මුළාකොට තොරතුරු ලබාගැනීම',
    category: 'Social Engineering Fraud',
    threatLevel: 'HIGH',
    behaviorEn: 'Fraudulent emails or cloned bank websites designed to trick victims into typing sensitive passwords or PINs.',
    behaviorSi: 'බැංකු හෝ නිල ආයතන ලෙස පෙනී සිටින ව්‍යාජ ඊමේල් හෝ වෙබ් අඩවි මගින් පරිශීලකයා මුළා කර රහස්‍ය තොරතුරු ලබා ගැනීම.',
    preventionEn: 'Check URL domain names carefully, verify HTTPS padlocks, and enable 2-Factor Authentication (2FA).',
    preventionSi: 'වෙබ් ලිපිනය (URL) නිවැරදිදැයි පරීක්ෂා කිරීම සහ ද්වි-සාධක සහතිකනය (2FA) යෙදීම.'
  }
];

export function CyberSecurityVault() {
  const [activeTab, setActiveTab] = useState<'malware' | 'cert' | 'quiz'>('malware');
  const [selectedMalware, setSelectedMalware] = useState<string>('virus');

  // Sri Lanka CERT Case Report State
  const [incidentCategory, setIncidentCategory] = useState<string>('phishing');
  const [incidentReported, setIncidentReported] = useState<boolean>(false);

  const activeMalwareData = MALWARE_LIST.find((m) => m.id === selectedMalware) || MALWARE_LIST[0];

  const handleReportCert = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playVictory();
    setIncidentReported(true);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('malware');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'malware'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Bug className="w-4 h-4" />
          <span>Malware Taxonomy</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('cert');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'cert'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Sri Lanka CERT|CC</span>
        </button>
      </div>

      {activeTab === 'malware' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Malware List Selection */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                MALWARE TAXONOMY • අනිෂ්ට මෘදුකාංග
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Cyber Threat Dossier
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Malware (Malicious Software) is designed to infiltrate, damage, or gain unauthorized access to computer systems.
              </p>
            </div>

            {/* Grid of Malware Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MALWARE_LIST.map((mal) => {
                const isSelected = selectedMalware === mal.id;
                return (
                  <button
                    key={mal.id}
                    onClick={() => {
                      sound.playClick(600);
                      setSelectedMalware(mal.id);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-rose-950/80 border-rose-400 ring-2 ring-rose-400 shadow-lg text-rose-200 scale-105'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white">{mal.nameEn}</span>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                        mal.threatLevel === 'CRITICAL' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {mal.threatLevel}
                      </span>
                    </div>
                    <div className="text-[11px] text-cyan-300 mt-0.5">{mal.nameSi}</div>
                    <div className="text-[10px] text-slate-400 mt-2 line-clamp-2">{mal.behaviorEn}</div>
                  </button>
                );
              })}
            </div>

            {/* General Security Defensive Arsenal */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The 4-Layer Defense Shield (ප්‍රධාන ආරක්ෂණ ක්‍රමවේද 4)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <strong>1. Antivirus:</strong> Live scanning & signatures.
                </div>
                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <strong>2. Firewall:</strong> Blocks unwanted network ports.
                </div>
                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <strong>3. Strong Passwords:</strong> 8+ chars & 2FA.
                </div>
                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <strong>4. Backups:</strong> Offline external storage.
                </div>
              </div>
            </div>
          </div>

          {/* Malware Detail Inspector */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-rose-950 text-rose-300 text-[10px] font-mono font-bold rounded border border-rose-500/30">
                    THREAT PROFILE: {activeMalwareData.threatLevel}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mt-2">
                  {activeMalwareData.nameEn}
                </h3>
                <h4 className="text-sm font-semibold text-rose-300">
                  {activeMalwareData.nameSi}
                </h4>
              </div>

              {/* Behavior Breakdown */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-200">How It Attacks & Propagates:</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeMalwareData.behaviorEn}
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  {activeMalwareData.behaviorSi}
                </p>
              </div>

              {/* Prevention Advice */}
              <div className="p-4 bg-emerald-950/30 rounded-2xl border border-emerald-500/30 space-y-1">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Prevention & Safeguards (ආරක්ෂිත පියවර):</span>
                </div>
                <p className="text-xs text-slate-200">
                  {activeMalwareData.preventionEn}
                </p>
                <p className="text-xs text-slate-400">
                  {activeMalwareData.preventionSi}
                </p>
              </div>

              {/* Exam Tip */}
              <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
                <strong>Virus vs Worm Distinction:</strong> A Virus requires a host file and human execution to spread; a Worm is self-replicating and spreads on its own across the network!
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT Syllabus • Unit 3.6
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cert' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Sri Lanka CERT|CC Incident Coordination Center
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              ශ්‍රී ලංකා පරිගණක හදිසි ප්‍රතිචාර සංසදය (Sri Lanka Computer Emergency Readiness Team)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CERT Information Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-950 rounded-2xl border border-cyan-500/40 text-cyan-400 font-mono font-black text-lg">
                  CERT|CC
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sri Lanka CERT|CC (www.cert.gov.lk)</h4>
                  <div className="text-xs text-slate-400">Official National Cyber Security Focal Point</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>
                  <strong>Core Mandate:</strong> The national center for cyber security in Sri Lanka. It handles cybersecurity incidents, alerts organizations to vulnerabilities, and coordinates with law enforcement (Police Cyber Crime Division).
                </p>
                <p className="text-slate-400 text-[11px]">
                  ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂාව පිළිබඳ ජාතික මධ්‍යස්ථානය වන අතර, පරිගණක අපරාධ, සමාජ මාධ්‍ය අනිසි භාවිත සහ සයිබර් ප්‍රහාර සම්බන්ධව පැමිණිලි භාර ගැනීම හා උපදෙස් ලබා දීම සිදු කරයි.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs">
                <div className="font-bold text-cyan-400">Incident Types Handled by CERT:</div>
                <ul className="text-slate-300 space-y-1 text-[11px]">
                  <li>• Social Media Account Hacking & Impersonation</li>
                  <li>• Financial Phishing & Fake Bank Websites</li>
                  <li>• Cyber Bullying & Harassment</li>
                  <li>• Ransomware & Ransom Extortion Attacks</li>
                </ul>
              </div>
            </div>

            {/* Interactive Incident Dispatch Simulator */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                Simulated Cyber Incident Report Filing
              </h4>

              {incidentReported ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-emerald-950/60 rounded-2xl border border-emerald-400/50 space-y-3 text-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="font-bold text-white text-sm">
                    Incident Dispatched to Sri Lanka CERT|CC!
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Ticket Reference #CERT-2024-8842 has been generated. The CERT technical forensics team will investigate the phishing domain and notify the ISP.
                  </p>
                  <button
                    onClick={() => setIncidentReported(false)}
                    className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-mono border border-slate-700 transition-colors"
                  >
                    File Another Case
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleReportCert} className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Incident Classification:</label>
                    <select
                      value={incidentCategory}
                      onChange={(e) => setIncidentCategory(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-mono focus:border-cyan-400 outline-none"
                    >
                      <option value="phishing">Phishing / Fake Banking SMS</option>
                      <option value="social_media">Social Media Impersonation & Harassment</option>
                      <option value="ransomware">Ransomware Data Encryption</option>
                      <option value="trojan">Malicious Game Patch Download</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Incident Summary & Evidence:</label>
                    <textarea
                      rows={3}
                      defaultValue="Received SMS claiming my online bank account is locked with a link to http://fake-bank-login.xyz asking for OTP."
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-sans focus:border-cyan-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-xs font-bold font-mono transition-all shadow-md shadow-cyan-500/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH INCIDENT REPORT</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
