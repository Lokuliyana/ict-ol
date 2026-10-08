'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Binary, 
  Search, 
  Server, 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Globe, 
  Database, 
  ShieldCheck, 
  Play, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface DnsStep {
  stepNumber: number;
  titleEn: string;
  titleSi: string;
  sender: string;
  receiver: string;
  messageEn: string;
  messageSi: string;
  icon: React.ElementType;
}

const DNS_STEPS: DnsStep[] = [
  {
    stepNumber: 1,
    titleEn: '1. Local Cache & ISP Resolver Query',
    titleSi: 'දේශීය මතකය හා ISP වසම් නාම සේවාදායක විමසුම',
    sender: 'Client PC (Browser)',
    receiver: 'ISP Local DNS Resolver',
    messageEn: 'Browser checks cache. If not found, it queries ISP DNS: "What is the IP of www.moe.gov.lk?"',
    messageSi: 'බ්‍රවුසරයේ හෝ මෙහෙයුම් පද්ධතියේ මතකයේ නැතිනම්, ISP හි DNS සේවාදායකයෙන් විමසයි.',
    icon: Laptop
  },
  {
    stepNumber: 2,
    titleEn: '2. Root Name Server Hop (.)',
    titleSi: 'මූල වසම් නාම සේවාදායකය වෙත විමසුම',
    sender: 'ISP DNS Resolver',
    receiver: 'Root DNS Server (.)',
    messageEn: 'Root server does not know the exact IP, but points to the authoritative TLD server for .lk',
    messageSi: 'මූල සේවාදායකය සතුව නිශ්චිත IP ලිපිනය නොමැත, නමුත් .lk TLD සේවාදායකය වෙත යොමු කරයි.',
    icon: Globe
  },
  {
    stepNumber: 3,
    titleEn: '3. TLD & Authoritative Name Server',
    titleSi: 'TLD සහ බලයලත් නාම සේවාදායකය',
    sender: 'ISP DNS Resolver',
    receiver: 'Authoritative DNS (.lk / moe.gov.lk)',
    messageEn: 'The authoritative DNS looks up its records and returns the exact IP address: 192.248.17.10',
    messageSi: 'බලයලත් සේවාදායකය සිය වාර්තා පරීක්ෂා කර www.moe.gov.lk හි නිශ්චිත IP ලිපිනය ලබා දෙයි (192.248.17.10).',
    icon: Database
  },
  {
    stepNumber: 4,
    titleEn: '4. Direct Web Server Connection',
    titleSi: 'වෙබ් සේවාදායකය සමඟ සෘජු සන්නිවේදනය',
    sender: 'Client PC (Browser)',
    receiver: 'MOE Web Server (192.248.17.10)',
    messageEn: 'With the resolved IP address, the browser initiates a direct HTTPS handshake to load the webpage!',
    messageSi: 'ලැබුණු IP ලිපිනය භාවිතයෙන් බ්‍රවුසරය අදාළ වෙබ් සේවාදායකය වෙත සෘජුවම සම්බන්ධ වී පිටුව පෙන්වයි.',
    icon: Server
  }
];

export function DnsRouteRunner() {
  const [activeTab, setActiveTab] = useState<'dns' | 'ipv4' | 'ipv6'>('dns');

  // DNS Simulation State
  const [currentDnsStep, setCurrentDnsStep] = useState<number>(1);
  const [isDnsPlaying, setIsDnsPlaying] = useState<boolean>(false);

  // IPv4 Interactive Octets
  const [octet1, setOctet1] = useState<number>(192);
  const [octet2, setOctet2] = useState<number>(168);
  const [octet3, setOctet3] = useState<number>(1);
  const [octet4, setOctet4] = useState<number>(100);

  // IP Validator Test
  const [testIpInput, setTestIpInput] = useState<string>('192.256.10.1');
  const [ipValidationResult, setIpValidationResult] = useState<{
    valid: boolean;
    reasonEn: string;
    reasonSi: string;
  } | null>(null);

  const toBinary = (val: number) => {
    return Math.max(0, Math.min(255, val)).toString(2).padStart(8, '0');
  };

  const handleNextDnsStep = () => {
    if (currentDnsStep < 4) {
      sound.playSnap();
      setCurrentDnsStep((prev) => prev + 1);
    } else {
      sound.playVictory();
      setCurrentDnsStep(1);
    }
  };

  const handlePlayDnsFull = () => {
    if (isDnsPlaying) return;
    setIsDnsPlaying(true);
    sound.playClick(600);
    setCurrentDnsStep(1);

    let step = 1;
    const interval = setInterval(() => {
      step++;
      if (step <= 4) {
        sound.playSnap();
        setCurrentDnsStep(step);
      } else {
        clearInterval(interval);
        setIsDnsPlaying(false);
        sound.playVictory();
      }
    }, 1800);
  };

  const validateIpString = (ip: string) => {
    sound.playClick(600);
    const parts = ip.trim().split('.');

    if (parts.length !== 4) {
      sound.playError();
      setIpValidationResult({
        valid: false,
        reasonEn: `An IPv4 address must contain exactly 4 octets separated by dots. Found ${parts.length} parts.`,
        reasonSi: `IPv4 ලිපිනයක තිත් මගින් වෙන් වූ සංඛ්‍යා 4ක් (Octets) තිබිය යුතුය. මෙහි ඇත්තේ ${parts.length} කි.`
      });
      return;
    }

    for (let i = 0; i < 4; i++) {
      const num = Number(parts[i]);
      if (isNaN(num) || parts[i] === '' || !Number.isInteger(num)) {
        sound.playError();
        setIpValidationResult({
          valid: false,
          reasonEn: `Octet ${i + 1} ("${parts[i]}") is not a valid integer.`,
          reasonSi: `${i + 1} වන කොටස ("${parts[i]}") වලංගු පූර්ණ සංඛ්‍යාවක් නොවේ.`
        });
        return;
      }
      if (num < 0 || num > 255) {
        sound.playError();
        setIpValidationResult({
          valid: false,
          reasonEn: `Octet ${i + 1} (${num}) is outside the valid 0–255 range! (8 bits max = 255).`,
          reasonSi: `${i + 1} වන කොටස (${num}) වලංගු 0–255 පරාසයෙන් පිටත වේ!`
        });
        return;
      }
    }

    sound.playSuccess();
    setIpValidationResult({
      valid: true,
      reasonEn: `"${ip}" is a 100% VALID IPv4 Address (4 octets, 32-bit total).`,
      reasonSi: `"${ip}" යනු සම්පූර්ණයෙන්ම වලංගු IPv4 ලිපිනයකි.`
    });
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('dns');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'dns'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>DNS Resolution</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('ipv4');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'ipv4'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Binary className="w-4 h-4" />
          <span>IPv4 32-Bit Octets</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('ipv6');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'ipv6'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>IPv4 vs IPv6</span>
        </button>
      </div>

      {activeTab === 'dns' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* DNS Animated Stage */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  DOMAIN NAME SYSTEM • වසම් නාම පද්ධතිය
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  How DNS Resolves `www.moe.gov.lk`
                </h3>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayDnsFull}
                  disabled={isDnsPlaying}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                    isDnsPlaying
                      ? 'bg-slate-800 text-slate-500'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isDnsPlaying ? 'RESOLVING...' : 'AUTO SIMULATE'}</span>
                </button>
                <button
                  onClick={handleNextDnsStep}
                  disabled={isDnsPlaying}
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors"
                >
                  <span>Step {currentDnsStep}/4</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Visual DNS Infrastructure Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: 1, name: 'Client PC', sub: 'Browser App', icon: Laptop, color: 'text-cyan-400', border: 'border-cyan-500/40' },
                { id: 2, name: 'ISP DNS', sub: 'Local Resolver', icon: Server, color: 'text-blue-400', border: 'border-blue-500/40' },
                { id: 3, name: 'Root / TLD', sub: 'Name Servers', icon: Globe, color: 'text-purple-400', border: 'border-purple-500/40' },
                { id: 4, name: 'Web Server', sub: '192.248.17.10', icon: Database, color: 'text-emerald-400', border: 'border-emerald-500/40' }
              ].map((node) => {
                const isActive = currentDnsStep === node.id;
                return (
                  <div
                    key={node.id}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      isActive
                        ? `bg-slate-900 ring-2 ring-cyan-400 shadow-xl scale-105 ${node.border}`
                        : 'bg-slate-950/60 border-slate-800/80 opacity-70'
                    }`}
                  >
                    <node.icon className={`w-8 h-8 mx-auto mb-2 ${node.color} ${isActive ? 'animate-bounce' : ''}`} />
                    <div className="text-xs font-mono font-bold text-white">{node.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{node.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Current Step Description Card */}
            <div className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="font-bold">{DNS_STEPS[currentDnsStep - 1].titleEn}</span>
                <span className="bg-cyan-950 px-2 py-0.5 rounded text-cyan-300">
                  {DNS_STEPS[currentDnsStep - 1].sender} ➔ {DNS_STEPS[currentDnsStep - 1].receiver}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {DNS_STEPS[currentDnsStep - 1].messageEn}
              </p>
              <p className="text-xs text-slate-400 font-sans">
                {DNS_STEPS[currentDnsStep - 1].messageSi}
              </p>
            </div>

            {/* DNS Analogy Callout */}
            <div className="p-4 bg-cyan-950/30 rounded-2xl border border-cyan-500/20 text-xs text-cyan-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-cyan-300">The Internet Phonebook Analogy:</strong> Humans remember easy names like <code>www.moe.gov.lk</code>, but network routers communicate strictly via numerical IP addresses (<code>192.248.17.10</code>). DNS bridges this gap seamlessly!
              </div>
            </div>
          </div>

          {/* DNS Exam Card */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  O/L Examination Competency 3.3
                </span>
                <h3 className="text-lg font-black text-white mt-1">
                  Role of DNS Server
                </h3>
                <h4 className="text-xs font-semibold text-cyan-300">
                  වසම් නාම සේවාදායකයේ කාර්යභාරය
                </h4>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
                <p>
                  <strong>1. Domain Name to IP Translation:</strong> Converts human-readable domain names into 32-bit (IPv4) or 128-bit (IPv6) numerical IP addresses.
                </p>
                <p className="text-slate-400 text-[11px]">
                  මිනිසාට පහසුවෙන් මතක තබාගත හැකි අක්ෂරමය වසම් නාම, පරිගණක වලට තේරුම් ගත හැකි අංකමය IP ලිපින බවට පරිවර්තනය කිරීම.
                </p>
                <p>
                  <strong>2. Caching:</strong> Stores recently queried IPs locally to reduce network latency for frequent queries.
                </p>
              </div>

              <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
                <strong>Common Exam Question:</strong> "Why do we need DNS if IP addresses exist?" — Because IP addresses are hard for humans to remember, while computers cannot route textual names directly.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT • Unit 03
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ipv4' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Binary className="w-5 h-5 text-cyan-400" />
              IPv4 32-Bit Address Lab (IPv4 ලිපින ව්‍යුහය)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              IPv4 addresses consist of 4 octets (4 bytes = 32 bits), each ranging from 0 to 255.
            </p>
          </div>

          {/* Octet Bit Slider Workbench */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-6">
            <div className="text-center space-y-1">
              <div className="text-xs font-mono text-slate-400">COMBINED DOTTED-DECIMAL IPv4 ADDRESS:</div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-cyan-300 tracking-wider">
                {octet1} . {octet2} . {octet3} . {octet4}
              </div>
              <div className="text-xs font-mono text-slate-500">
                {toBinary(octet1)}.{toBinary(octet2)}.{toBinary(octet3)}.{toBinary(octet4)} (32 Bits)
              </div>
            </div>

            {/* 4 Octet Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Octet 1 (Byte 1)', val: octet1, set: setOctet1 },
                { label: 'Octet 2 (Byte 2)', val: octet2, set: setOctet2 },
                { label: 'Octet 3 (Byte 3)', val: octet3, set: setOctet3 },
                { label: 'Octet 4 (Byte 4)', val: octet4, set: setOctet4 }
              ].map((oct, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">{oct.label}</span>
                    <span className="text-cyan-400 font-bold">{oct.val}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={oct.val}
                    onChange={(e) => {
                      oct.set(Number(e.target.value));
                      sound.playCrankTick();
                    }}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500 text-center">
                    Binary: <span className="text-slate-300">{toBinary(oct.val)}</span> (8 bits)
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Past Paper Validator Quiz */}
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                IPv4 Validation Diagnostic (O/L විභාග වලංගුතා පරීක්ෂාව)
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Test any IP string to verify whether it meets official G.C.E. O/L criteria:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={testIpInput}
                onChange={(e) => setTestIpInput(e.target.value)}
                placeholder="e.g. 192.168.1.1 or 256.0.0.1"
                className="flex-1 bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs font-mono focus:border-cyan-400 outline-none"
              />
              <button
                onClick={() => validateIpString(testIpInput)}
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-xs font-bold font-mono transition-colors shadow-md shadow-cyan-500/20"
              >
                CHECK VALIDITY
              </button>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Quick Exam Samples:</span>
              {[
                '192.168.1.1',
                '256.100.0.1',
                '172.16.254.1',
                '10.0.0.300',
                '192.168.1'
              ].map((sample) => (
                <button
                  key={sample}
                  onClick={() => {
                    setTestIpInput(sample);
                    validateIpString(sample);
                  }}
                  className="px-2.5 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 font-mono text-[11px]"
                >
                  {sample}
                </button>
              ))}
            </div>

            {/* Result Display */}
            {ipValidationResult && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  ipValidationResult.valid
                    ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-400 text-rose-200'
                }`}
              >
                {ipValidationResult.valid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-0.5">
                  <div className="font-bold">{ipValidationResult.reasonEn}</div>
                  <div className="text-slate-300 font-sans">{ipValidationResult.reasonSi}</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'ipv6' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              IPv4 vs IPv6 Architectural Comparison (IPv4 සහ IPv6 සැසඳීම)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Why the world is transitioning from 32-bit IPv4 to 128-bit IPv6.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300">
              <thead className="bg-slate-900 text-cyan-400 font-mono uppercase text-[11px]">
                <tr>
                  <th className="p-3 rounded-l-xl">Feature (ලක්ෂණය)</th>
                  <th className="p-3">IPv4</th>
                  <th className="p-3 rounded-r-xl">IPv6</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-3 font-sans font-bold text-white">Address Length (දිග)</td>
                  <td className="p-3 text-cyan-300">32 Bits (4 Bytes)</td>
                  <td className="p-3 text-emerald-300">128 Bits (16 Bytes)</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white">Notation Format (ආකෘතිය)</td>
                  <td className="p-3 text-slate-300">Dotted Decimal (e.g. 192.168.1.1)</td>
                  <td className="p-3 text-slate-300">Hexadecimal with Colons (e.g. 2001:0db8::1)</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white">Total Address Space (මුළු ලිපින ගණන)</td>
                  <td className="p-3 text-slate-300">~ 4.3 Billion (2^32) - Exhausted!</td>
                  <td className="p-3 text-emerald-300">~ 3.4 x 10^38 (2^128) - Virtually Unlimited!</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white">Delimiter (වෙන් කරන ලකුණ)</td>
                  <td className="p-3 text-slate-300">Dot ( . )</td>
                  <td className="p-3 text-slate-300">Colon ( : )</td>
                </tr>
                <tr>
                  <td className="p-3 font-sans font-bold text-white">Configuration (වින්‍යාසය)</td>
                  <td className="p-3 text-slate-300">Manual / DHCP</td>
                  <td className="p-3 text-slate-300">Auto-configuration (SLAAC)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
