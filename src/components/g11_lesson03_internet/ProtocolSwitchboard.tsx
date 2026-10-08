'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radio, 
  Cloud, 
  Send, 
  Download, 
  Lock, 
  Unlock, 
  Server, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Mail
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ProtocolInfo {
  id: string;
  name: string;
  port: number;
  type: string;
  fullFormEn: string;
  fullFormSi: string;
  descriptionEn: string;
  descriptionSi: string;
  icon: React.ElementType;
  badgeColor: string;
}

const PROTOCOLS: ProtocolInfo[] = [
  {
    id: 'http',
    name: 'HTTP',
    port: 80,
    type: 'Web Transfer (Unencrypted)',
    fullFormEn: 'HyperText Transfer Protocol',
    fullFormSi: 'අතිපෙළ හුවමාරු නියමාවලිය',
    descriptionEn: 'The foundational protocol used by the World Wide Web to transmit web pages, images, and video in plaintext.',
    descriptionSi: 'වෙබ් පිටු සේවාදායකයේ සිට බ්‍රවුසරය වෙත සන්නිවේදනය කිරීමේ මූලික නියමාවලිය (Plaintext).',
    icon: Unlock,
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
  },
  {
    id: 'https',
    name: 'HTTPS',
    port: 443,
    type: 'Secure Web (SSL/TLS)',
    fullFormEn: 'HyperText Transfer Protocol Secure',
    fullFormSi: 'ආරක්ෂිත අතිපෙළ හුවමාරු නියමාවලිය',
    descriptionEn: 'Encrypts HTTP traffic using SSL/TLS to prevent eavesdropping, packet sniffing, and credit card theft.',
    descriptionSi: 'SSL/TLS සංකේතාංකනය මගින් ආරක්ෂිතව බැංකු හා සංවේදී දත්ත අන්තර්ජාලය ඔස්සේ හුවමාරු කරයි.',
    icon: Lock,
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  },
  {
    id: 'ftp',
    name: 'FTP',
    port: 20, // and 21
    type: 'File Transfer',
    fullFormEn: 'File Transfer Protocol',
    fullFormSi: 'ගොනු හුවමාරු නියමාවලිය',
    descriptionEn: 'Used for uploading and downloading large files, software distributions, and website asset management.',
    descriptionSi: 'විශාල ගොනු සහ මෘදුකාංග සේවාදායක සහ සේවාලාභී පරිගණක අතර හුවමාරු කිරීමට භාවිත වේ.',
    icon: Download,
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40'
  },
  {
    id: 'smtp',
    name: 'SMTP',
    port: 25,
    type: 'Mail Sending (Outgoing)',
    fullFormEn: 'Simple Mail Transfer Protocol',
    fullFormSi: 'සරල තැපැල් හුවමාරු නියමාවලිය',
    descriptionEn: 'Handles the transmission and relay of outgoing emails from client to mail server, and between mail servers.',
    descriptionSi: 'විද්‍යුත් තැපැල් පණිවිඩ සේවාදායක වෙත යැවීම (Outgoing Mail) සඳහා භාවිත වේ.',
    icon: Send,
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
  },
  {
    id: 'pop3',
    name: 'POP3',
    port: 110,
    type: 'Mail Retrieval (Download & Delete)',
    fullFormEn: 'Post Office Protocol version 3',
    fullFormSi: 'තැපැල් කාර්යාල නියමාවලිය 3',
    descriptionEn: 'Downloads emails to a single device and traditionally deletes them from the server.',
    descriptionSi: 'ඊමේල් සේවාදායකයෙන් පණිවිඩ පරිගණකයට බාගත කර සේවාදායකයෙන් මකා දමයි.',
    icon: Mail,
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
  },
  {
    id: 'imap',
    name: 'IMAP',
    port: 143,
    type: 'Mail Sync (Multi-Device)',
    fullFormEn: 'Internet Message Access Protocol',
    fullFormSi: 'අන්තර්ජාල පණිවිඩ ප්‍රවේශ නියමාවලිය',
    descriptionEn: 'Keeps emails stored on the server and synchronizes read/unread states across multiple smartphones and PCs.',
    descriptionSi: 'පණිවිඩ සේවාදායකයේ තබා ගනිමින් උපාංග කිහිපයක් අතර සමමුහුර්ත (Sync) කර පෙන්වයි.',
    icon: Radio,
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
  },
  {
    id: 'tcp_ip',
    name: 'TCP/IP',
    port: 0,
    type: 'Core Internet Backbone',
    fullFormEn: 'Transmission Control Protocol / Internet Protocol',
    fullFormSi: 'සම්ප්‍රේෂණ පාලන නියමාවලිය / අන්තර්ජාල නියමාවලිය',
    descriptionEn: 'TCP breaks data into numbered packets and guarantees delivery; IP handles addressing and routing across global networks.',
    descriptionSi: 'TCP මගින් දත්ත පැකට් වලට වෙන් කර නිවැරදිව ලැබීම තහවුරු කරයි; IP මගින් ලිපින ලබා දී මාර්ගගත කරයි.',
    icon: Layers,
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
  }
];

// Cloud Computing 3-tier models
interface CloudTier {
  id: 'saas' | 'paas' | 'iaas';
  level: string;
  nameEn: string;
  nameSi: string;
  whoManages: string;
  examples: string[];
  descriptionEn: string;
  descriptionSi: string;
  color: string;
}

const CLOUD_TIERS: CloudTier[] = [
  {
    id: 'saas',
    level: 'Top Tier (End Users)',
    nameEn: 'SaaS (Software as a Service)',
    nameSi: 'සේවාවක් ලෙස මෘදුකාංග (SaaS)',
    whoManages: 'Provider manages everything (App, Data, Runtime, OS, Storage, Servers)',
    examples: ['Google Workspace (Docs, Sheets, Gmail)', 'Microsoft 365', 'Canva', 'Zoom'],
    descriptionEn: 'Ready-to-use software applications accessed over the web browser without installing or maintaining software.',
    descriptionSi: 'කිසිදු මෘදුකාංගයක් පරිගණකයේ ස්ථාපනය නොකර වෙබ් බ්‍රවුසරය ඔස්සේ කෙලින්ම භාවිත කළ හැකි මෘදුකාංග සේවා.',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300'
  },
  {
    id: 'paas',
    level: 'Middle Tier (Developers)',
    nameEn: 'PaaS (Platform as a Service)',
    nameSi: 'සේවාවක් ලෙස වේදිකාව (PaaS)',
    whoManages: 'User manages Code & Data; Provider manages OS, Runtime & Hardware',
    examples: ['Google App Engine', 'Firebase', 'Heroku', 'AWS Elastic Beanstalk'],
    descriptionEn: 'Provides an online runtime development platform for programmers to build, test, and deploy applications without managing servers.',
    descriptionSi: 'මෘදුකාංග නිර්මාණකරුවන්ට සේවාදායක සැකසුම් ගැන කරදර නොවී කේත ලිවීමට හා ධාවනය කිරීමට ලබාදෙන වේදිකාව.',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-300'
  },
  {
    id: 'iaas',
    level: 'Base Tier (SysAdmins)',
    nameEn: 'IaaS (Infrastructure as a Service)',
    nameSi: 'සේවාවක් ලෙස යටිතල පහසුකම් (IaaS)',
    whoManages: 'User manages OS, Software & Data; Provider delivers raw Virtual Hardware & Storage',
    examples: ['Amazon Web Services (AWS EC2/S3)', 'Google Cloud Platform (Compute Engine)', 'Microsoft Azure VM'],
    descriptionEn: 'Provides raw computing infrastructure, virtual machines, massive storage, and network bandwidth on demand.',
    descriptionSi: 'අවශ්‍ය පරිදි අථත්‍ය පරිගණක (Virtual Machines), දෘඪ තැටි ඉඩ සහ ජාල පහසුකම් කුලියට ලබාදීම.',
    color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/40 text-indigo-300'
  }
];

export function ProtocolSwitchboard() {
  const [activeSubtab, setActiveSubtab] = useState<'protocols' | 'cloud' | 'matcher'>('protocols');
  const [selectedProto, setSelectedProto] = useState<string>('https');
  const [selectedCloudTier, setSelectedCloudTier] = useState<CloudTier['id']>('saas');

  // Interactive Scenario Matcher State
  const scenarios = [
    {
      id: 1,
      textEn: 'A student securely submits an online credit card payment on an e-commerce website.',
      textSi: 'ශිෂ්‍යයෙකු ඊ-වාණිජ්‍ය වෙබ් අඩවියක ආරක්ෂිතව ණයපත් ගෙවීමක් සිදු කරයි.',
      correct: 'https',
      options: ['http', 'https', 'ftp', 'smtp']
    },
    {
      id: 2,
      textEn: 'An office worker synchronizes inbox emails across their phone, tablet, and office PC seamlessly.',
      textSi: 'කාර්යාල සේවකයෙකු සිය ජංගම දුරකථනය සහ පරිගණකය අතර ඊමේල් සමමුහුර්ත කරයි.',
      correct: 'imap',
      options: ['pop3', 'imap', 'smtp', 'ftp']
    },
    {
      id: 3,
      textEn: 'A webmaster uploads 500 MB of video assets and PDF papers to a remote school server.',
      textSi: 'පාසල් වෙබ් අඩවි පාලකයා වීඩියෝ හා PDF විශාල ගොනු දුරස්ථ සේවාදායකයට උඩුගත කරයි.',
      correct: 'ftp',
      options: ['smtp', 'http', 'ftp', 'pop3']
    },
    {
      id: 4,
      textEn: 'A company uses Google Docs and Sheets directly inside Chrome to collaborate without installing Office software.',
      textSi: 'ආයතනයක් MS Office ස්ථාපනය නොකර Google Docs හරහා එකවර ලිපි ලියයි.',
      correct: 'saas',
      options: ['iaas', 'paas', 'saas']
    }
  ];

  const [currentScenarioIdx, setCurrentScenarioIdx] = useState<number>(0);
  const [scenarioAnswer, setScenarioAnswer] = useState<string | null>(null);
  const [scenarioFeedback, setScenarioFeedback] = useState<boolean | null>(null);

  const activeProtoData = PROTOCOLS.find((p) => p.id === selectedProto) || PROTOCOLS[0];
  const activeCloudData = CLOUD_TIERS.find((c) => c.id === selectedCloudTier) || CLOUD_TIERS[0];

  const handleSelectScenarioOption = (opt: string) => {
    sound.playClick(600);
    setScenarioAnswer(opt);
    const isCorrect = opt === scenarios[currentScenarioIdx].correct;
    setScenarioFeedback(isCorrect);
    if (isCorrect) {
      sound.playSuccess();
    } else {
      sound.playError();
    }
  };

  const handleNextScenario = () => {
    sound.playClick(500);
    setScenarioAnswer(null);
    setScenarioFeedback(null);
    setCurrentScenarioIdx((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('protocols');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'protocols'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Protocol Switchboard</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('cloud');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'cloud'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Cloud className="w-4 h-4" />
          <span>Cloud 3-Tier Tower</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('matcher');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'matcher'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Scenario Matcher</span>
        </button>
      </div>

      {activeSubtab === 'protocols' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Protocol Grid */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                INTERNET PROTOCOLS • අන්තර්ජාල නියමාවලීන්
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Protocol Patch Deck
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Protocols are standardized sets of communication rules enabling heterogeneous hardware to exchange data reliably.
              </p>
            </div>

            {/* Protocol Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PROTOCOLS.map((p) => {
                const isSelected = selectedProto === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      sound.playClick(600);
                      setSelectedProto(p.id);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-cyan-950/90 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400 scale-105'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p.icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                      {p.port > 0 && (
                        <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-slate-400 border border-slate-800">
                          Port {p.port}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <div className="text-base font-black font-mono text-white">{p.name}</div>
                      <div className="text-[11px] text-slate-400 truncate">{p.type}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Email Protocol Comparison Callout */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>O/L Exam Crucial Distinction: POP3 vs IMAP vs SMTP</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="font-mono font-bold text-purple-300">SMTP (Port 25)</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    <strong>Outgoing Mail:</strong> Sends emails from your PC to the server and between servers.
                  </div>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="font-mono font-bold text-rose-300">POP3 (Port 110)</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    <strong>Incoming Mail:</strong> Downloads emails to one PC and deletes them from server.
                  </div>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="font-mono font-bold text-cyan-300">IMAP (Port 143)</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    <strong>Incoming Mail:</strong> Keeps emails on server and synchronizes status across all devices.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Protocol Details View */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${activeProtoData.badgeColor}`}>
                  {activeProtoData.type}
                </span>
                <h3 className="text-2xl font-black text-white font-mono mt-2">
                  {activeProtoData.name}
                </h3>
                <h4 className="text-xs font-semibold text-cyan-300">
                  {activeProtoData.fullFormEn}
                </h4>
                <div className="text-xs text-slate-400">
                  {activeProtoData.fullFormSi}
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                {activeProtoData.port > 0 && (
                  <div className="text-xs font-mono text-cyan-400">
                    Standard Port: <span className="font-bold text-white">{activeProtoData.port}</span>
                  </div>
                )}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProtoData.descriptionEn}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {activeProtoData.descriptionSi}
                </p>
              </div>

              {/* Protocol Security Notes */}
              <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/20 text-xs text-cyan-200">
                {activeProtoData.id === 'https' && (
                  <span><strong>Padlock Icon in Browser:</strong> Indicates 256-bit encryption. Safe for passwords and online transactions.</span>
                )}
                {activeProtoData.id === 'http' && (
                  <span className="text-amber-300"><strong>Unencrypted:</strong> Passwords sent in plaintext can be intercepted on public Wi-Fi.</span>
                )}
                {activeProtoData.id === 'ftp' && (
                  <span><strong>File Transfer:</strong> Used by web developers to push entire website folders to web hosting servers.</span>
                )}
                {activeProtoData.id === 'tcp_ip' && (
                  <span><strong>TCP vs IP:</strong> TCP ensures 100% loss-free packet assembly; IP routes packets to the correct IP address.</span>
                )}
                {(activeProtoData.id === 'smtp' || activeProtoData.id === 'pop3' || activeProtoData.id === 'imap') && (
                  <span><strong>E-Mail Architecture:</strong> SMTP sends mail; POP3/IMAP receive mail. Guaranteed exam MCQ!</span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT Syllabus • Unit 3.4
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'cloud' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-cyan-400" />
              Cloud Computing 3-Tier Hierarchy (වලාකුළු පරිගණක සේවා ආකෘති)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Cloud services deliver on-demand computing resources over the Internet classified into 3 primary tiers.
            </p>
          </div>

          {/* Interactive 3-Tier Tower */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {CLOUD_TIERS.map((tier) => {
              const isSelected = selectedCloudTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => {
                    sound.playClick(600);
                    setSelectedCloudTier(tier.id);
                  }}
                  className={`w-full p-5 rounded-2xl border text-left transition-all bg-gradient-to-r ${tier.color} ${
                    isSelected ? 'ring-2 ring-cyan-400 shadow-xl scale-[1.02]' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                        {tier.level}
                      </span>
                      <h4 className="text-lg font-black text-white">{tier.nameEn}</h4>
                      <div className="text-xs text-slate-300">{tier.nameSi}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                      {tier.examples.map((ex, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/70 border border-slate-700 text-slate-200">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {tier.descriptionEn}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {tier.descriptionSi}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-700/50 text-[11px] font-mono text-cyan-300">
                    ⚙️ <strong>Management Scope:</strong> {tier.whoManages}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {activeSubtab === 'matcher' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                Real-World Protocol & Cloud Scenario Matcher
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Test your competency by mapping actual real-world computing scenarios to the correct protocol or cloud tier.
              </p>
            </div>
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 rounded-full">
              Scenario {currentScenarioIdx + 1} of {scenarios.length}
            </span>
          </div>

          {/* Scenario Card */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <div className="space-y-2">
              <div className="text-base font-bold text-white leading-relaxed">
                "{scenarios[currentScenarioIdx].textEn}"
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans">
                "{scenarios[currentScenarioIdx].textSi}"
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {scenarios[currentScenarioIdx].options.map((opt) => {
                const isSelected = scenarioAnswer === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectScenarioOption(opt)}
                    className={`py-3 px-4 rounded-xl font-mono font-bold text-xs uppercase transition-all border ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg scale-105'
                        : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                  >
                    {opt.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Feedback Banner */}
            {scenarioFeedback !== null && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border flex items-center justify-between ${
                  scenarioFeedback
                    ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-400 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2.5 text-xs">
                  {scenarioFeedback ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <span>
                    {scenarioFeedback
                      ? 'Correct Match! Excellent protocol analysis.'
                      : `Incorrect. The correct answer is ${scenarios[currentScenarioIdx].correct.toUpperCase()}.`}
                  </span>
                </div>

                <button
                  onClick={handleNextScenario}
                  className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-mono border border-slate-700 transition-colors"
                >
                  Next ➔
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
