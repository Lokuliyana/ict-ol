'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Link2, 
  Puzzle, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  FolderTree, 
  FileCode, 
  Server, 
  Lock, 
  HelpCircle,
  RefreshCw,
  Zap
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface UrlPart {
  id: string;
  nameEn: string;
  nameSi: string;
  segment: string;
  color: string;
  borderColor: string;
  bgColor: string;
  explanationEn: string;
  explanationSi: string;
}

const SAMPLE_URL_PARTS: UrlPart[] = [
  {
    id: 'protocol',
    nameEn: '1. Protocol (නියමාවලිය)',
    nameSi: 'දත්ත සම්ප්‍රේෂණ නියමාවලිය',
    segment: 'https://',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-950/60',
    explanationEn: 'HyperText Transfer Protocol Secure - governs encrypted client-server communication using SSL/TLS.',
    explanationSi: 'අන්තර්ජාලය ඔස්සේ සංකේතාත්මකව සහ ආරක්ෂිතව දත්ත හුවමාරු කිරීමේ නියමාවලියයි.'
  },
  {
    id: 'subdomain',
    nameEn: '2. Subdomain / Host (උප වසම / ධාරකය)',
    nameSi: 'ධාරක නාමය / ලෝක විසිරුණු වියමන',
    segment: 'www.',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500',
    bgColor: 'bg-cyan-950/60',
    explanationEn: 'World Wide Web subdomain identifying the web service hosted on the domain server.',
    explanationSi: 'වසම තුළ වෙබ් සේවාව සපයන ධාරක උප කොටස හඳුනා ගනී.'
  },
  {
    id: 'domain_name',
    nameEn: '3. Second-Level Domain (ද්විතීයික වසම් නාමය)',
    nameSi: 'ආයතනයේ හෝ වෙබ් අඩවියේ නම',
    segment: 'nie',
    color: 'text-amber-400',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-950/60',
    explanationEn: 'Specific unique identity name of the institution (National Institute of Education).',
    explanationSi: 'අදාළ ආයතනයේ හෝ සංවිධානයේ අනන්‍ය නම (ජාතික අධ්‍යාපන ආයතනය - NIE).'
  },
  {
    id: 'tld',
    nameEn: '4. Top-Level Domain - TLD / ccTLD (ඉහළ මට්ටමේ වසම)',
    nameSi: 'ඉහළ මට්ටමේ වසම සහ රටේ කේතය',
    segment: '.lk',
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-950/60',
    explanationEn: 'Country Code Top-Level Domain (ccTLD) for Sri Lanka.',
    explanationSi: 'ශ්‍රී ලංකාවට අයත් රටේ කේතය සහිත ඉහළ මට්ටමේ වසම් නාමය (ccTLD).'
  },
  {
    id: 'port',
    nameEn: '5. Port Number (තොට අංකය - විකල්ප)',
    nameSi: 'සේවාව ලබාගන්නා පරිගණක තොට',
    segment: ':443',
    color: 'text-pink-400',
    borderColor: 'border-pink-500',
    bgColor: 'bg-pink-950/60',
    explanationEn: 'Standard network port for HTTPS encrypted web traffic (80 for standard HTTP).',
    explanationSi: 'ආරක්ෂිත HTTPS සන්නිවේදනය සඳහා භාවිත වන සම්මත තොට අංකය (සාමාන්‍ය HTTP සඳහා 80 වේ).'
  },
  {
    id: 'path',
    nameEn: '6. Directory / Folder Path (මාර්ගය / බහලුම)',
    nameSi: 'ගොනුව පිහිටි සේවාදායක බහලුම් මාර්ගය',
    segment: '/ict/grade11/',
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-950/60',
    explanationEn: 'Hierarchical folder structure on the server holding the target resource.',
    explanationSi: 'සේවාදායක පරිගණකය තුළ අදාළ සම්පත ගබඩා කර ඇති බහලුම් (Folders) පෙළගැස්ම.'
  },
  {
    id: 'file',
    nameEn: '7. Resource / File Name (ගොනු නාමය)',
    nameSi: 'ඉලක්කගත වෙබ් පිටුවේ හෝ ගොනුවේ නම',
    segment: 'notes.html',
    color: 'text-orange-400',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-950/60',
    explanationEn: 'Specific HTML web document or multimedia file requested by the browser.',
    explanationSi: 'බ්‍රවුසරය මගින් ඉල්ලා සිටින නිශ්චිත HTML වෙබ් පිටුව හෝ බාගත කරන ගොනුව.'
  }
];

// Assembly Game pieces
interface PuzzlePiece {
  id: string;
  text: string;
  order: number;
}

const PUZZLE_PIECES: PuzzlePiece[] = [
  { id: 'p1', text: 'https://', order: 1 },
  { id: 'p2', text: 'www.', order: 2 },
  { id: 'p3', text: 'doenets.', order: 3 },
  { id: 'p4', text: 'gov.', order: 4 },
  { id: 'p5', text: 'lk', order: 5 },
  { id: 'p6', text: '/exam/results/', order: 6 },
  { id: 'p7', text: 'ol2024.php', order: 7 }
];

export function UrlSlicerWorkbench() {
  const [activeTab, setActiveTab] = useState<'slicer' | 'tldMatrix' | 'puzzle'>('slicer');
  const [selectedPart, setSelectedPart] = useState<string>('protocol');

  // Assembly puzzle state
  const [scrambled, setScrambled] = useState<PuzzlePiece[]>(() => 
    [...PUZZLE_PIECES].sort(() => Math.random() - 0.5)
  );
  const [assembled, setAssembled] = useState<PuzzlePiece[]>([]);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const handleSelectPart = (id: string) => {
    sound.playClick(600);
    setSelectedPart(id);
  };

  const handleAddPiece = (piece: PuzzlePiece) => {
    sound.playSnap();
    const newAssembled = [...assembled, piece];
    const newScrambled = scrambled.filter((p) => p.id !== piece.id);
    setAssembled(newAssembled);
    setScrambled(newScrambled);

    if (newScrambled.length === 0) {
      // Check if correctly ordered
      const correct = newAssembled.every((p, idx) => p.order === idx + 1);
      if (correct) {
        sound.playVictory();
        setIsSolved(true);
      } else {
        sound.playError();
        setIsSolved(false);
      }
    }
  };

  const handleResetPuzzle = () => {
    sound.playClick(500);
    setScrambled([...PUZZLE_PIECES].sort(() => Math.random() - 0.5));
    setAssembled([]);
    setIsSolved(false);
  };

  const currentPartData = SAMPLE_URL_PARTS.find((p) => p.id === selectedPart) || SAMPLE_URL_PARTS[0];

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('slicer');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'slicer'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Link2 className="w-4 h-4" />
          <span>URL Dissector</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('tldMatrix');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'tldMatrix'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>TLD & ccTLD Matrix</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('puzzle');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'puzzle'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Puzzle className="w-4 h-4" />
          <span>Assembly Lab</span>
        </button>
      </div>

      {activeTab === 'slicer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Slicer Canvas */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  URL ANATOMY • එකාකාර සම්පත් නිශ්චායකය
                </span>
              </div>
              <h3 className="text-xl font-black text-white mt-1">
                The Interactive URL Dissecting Bench
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any sliced segment in the address bar below to inspect its role and examination significance.
              </p>
            </div>

            {/* Sliced Address Bar */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-inner">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800 text-slate-500 text-xs font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Web Browser Address Bar (ලිපින තීරුව)</span>
              </div>

              {/* URL Segment Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs sm:text-sm">
                {SAMPLE_URL_PARTS.map((part) => {
                  const isSelected = selectedPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => handleSelectPart(part.id)}
                      className={`px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1 ${
                        isSelected
                          ? `${part.bgColor} ${part.borderColor} ${part.color} ring-2 ring-cyan-400 shadow-lg scale-105 font-bold`
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span>{part.segment}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sliced Anatomy Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SAMPLE_URL_PARTS.map((part) => {
                const isSelected = selectedPart === part.id;
                return (
                  <button
                    key={part.id}
                    onClick={() => handleSelectPart(part.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? `${part.bgColor} ${part.borderColor} shadow-md`
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900'
                    }`}
                  >
                    <div className={`text-[11px] font-mono font-bold truncate ${part.color}`}>
                      {part.segment}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {part.nameEn.split(' ')[1]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Exam Diagnostic Callout */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-amber-300">
                  G.C.E. O/L Examination Formula:
                </span>
                <p className="text-slate-300">
                  <code className="text-cyan-300 font-mono">Protocol :// Domain Name [:Port] / Directory Path / File Name</code>
                </p>
                <p className="text-slate-400 text-[11px]">
                  විභාග ප්‍රශ්න පත්‍රයේ නියමාවලිය, වසම් නාමය, බහලුම් මාර්ගය සහ ගොනු නාමය වෙන් කර ලිවීමට නිතරම අසයි.
                </p>
              </div>
            </div>
          </div>

          {/* Right Detail Deck */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Segment Inspector
                </span>
                <h3 className={`text-lg font-black mt-1 ${currentPartData.color}`}>
                  {currentPartData.nameEn}
                </h3>
                <h4 className="text-xs font-semibold text-slate-300">
                  {currentPartData.nameSi}
                </h4>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 font-mono">
                  Sample Value: <span className="text-white font-bold">{currentPartData.segment}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentPartData.explanationEn}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentPartData.explanationSi}
                </p>
              </div>

              {/* Protocol / TLD Specific Tips */}
              <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30 text-xs text-cyan-300">
                {currentPartData.id === 'protocol' && (
                  <span><strong>HTTP vs HTTPS:</strong> HTTPS transmits data with SSL/TLS encryption, preventing eavesdropping and data tampering.</span>
                )}
                {currentPartData.id === 'subdomain' && (
                  <span><strong>Host Name:</strong> `www` indicates World Wide Web, but can be `mail`, `portal`, `lms` or `ftp`.</span>
                )}
                {currentPartData.id === 'domain_name' && (
                  <span><strong>Domain Name:</strong> Translated into an IP address by DNS servers for actual routing.</span>
                )}
                {currentPartData.id === 'tld' && (
                  <span><strong>Top-Level:</strong> `.lk` is Sri Lanka's country-code TLD. Secondary TLD can indicate sector (e.g., `.gov.lk`, `.ac.lk`).</span>
                )}
                {currentPartData.id === 'port' && (
                  <span><strong>Port Numbers:</strong> HTTP uses 80, HTTPS uses 443, FTP uses 20/21, SMTP uses 25.</span>
                )}
                {currentPartData.id === 'path' && (
                  <span><strong>Directory Path:</strong> Forward slashes `/` represent nested subfolders on the server.</span>
                )}
                {currentPartData.id === 'file' && (
                  <span><strong>File Name:</strong> Includes extension like `.html`, `.php`, `.pdf`, `.jpg`.</span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT Syllabus • Unit 3.2
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tldMatrix' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              Domain Taxonomy: Generic TLDs vs Country Code TLDs
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              ඉහළ මට්ටමේ වසම් නාම (Generic TLDs) සහ රටවල කේත (ccTLDs) වර්ගීකරණය
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic TLDs */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Server className="w-4 h-4" />
                <span>1. Generic Top-Level Domains (gTLD)</span>
              </div>
              <p className="text-xs text-slate-400">
                Organized based on the nature/type of the organization:
              </p>

              <div className="space-y-2">
                {[
                  { tld: '.com', org: 'Commercial Organizations (වාණිජ ආයතන)', example: 'google.com' },
                  { tld: '.org', org: 'Non-profit Organizations (ලාභ නොලබන සංවිධාන)', example: 'wikipedia.org' },
                  { tld: '.edu / .ac', org: 'Educational Institutions (අධ්‍යාපනික ආයතන)', example: 'harvard.edu' },
                  { tld: '.gov', org: 'Government Entities (රාජ්‍ය ආයතන)', example: 'president.gov' },
                  { tld: '.net', org: 'Network Service Providers (ජාල සේවා සපයන්නන්)', example: 'speedtest.net' },
                  { tld: '.mil', org: 'Military Organizations (හමුදාමය ආයතන)', example: 'navy.mil' },
                  { tld: '.int', org: 'International Organizations (ජාත්‍යන්තර සංවිධාන)', example: 'who.int' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                        {item.tld}
                      </span>
                      <span className="text-slate-300">{item.org}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Country Code TLDs */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Globe className="w-4 h-4" />
                <span>2. Country Code Top-Level Domains (ccTLD)</span>
              </div>
              <p className="text-xs text-slate-400">
                Two-letter identifiers assigned to specific geographical countries:
              </p>

              <div className="space-y-2">
                {[
                  { code: '.lk', country: 'Sri Lanka (ශ්‍රී ලංකාව)', flag: '🇱🇰' },
                  { code: '.uk', country: 'United Kingdom (එක්සත් රාජධානිය)', flag: '🇬🇧' },
                  { code: '.jp', country: 'Japan (ජපානය)', flag: '🇯🇵' },
                  { code: '.au', country: 'Australia (ඕස්ට්‍රේලියාව)', flag: '🇦🇺' },
                  { code: '.in', country: 'India (ඉන්දියාව)', flag: '🇮🇳' },
                  { code: '.ca', country: 'Canada (කැනඩාව)', flag: '🇨🇦' },
                  { code: '.sg', country: 'Singapore (සිංගප්පූරුව)', flag: '🇸🇬' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.flag}</span>
                      <span className="font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                        {item.code}
                      </span>
                      <span className="text-slate-300">{item.country}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sri Lankan 2-tier combo note */}
              <div className="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-xs text-emerald-200">
                <strong>Sri Lanka Combined TLDs:</strong>
                <div className="grid grid-cols-2 gap-1.5 mt-1 font-mono text-[11px] text-emerald-300">
                  <span>• .gov.lk (Government)</span>
                  <span>• .ac.lk (Universities)</span>
                  <span>• .sch.lk (Schools)</span>
                  <span>• .org.lk (Non-profit)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'puzzle' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-cyan-400" />
                URL Assembly Puzzle Challenge (URL ගොඩනැගීමේ ක්‍රීඩාව)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Target: Construct the official Department of Examinations Sri Lanka result link in correct syntax order!
              </p>
            </div>
            <button
              onClick={handleResetPuzzle}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Pieces</span>
            </button>
          </div>

          {/* Assembled Workbench Slot */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>ASSEMBLED URL STREAM:</span>
              <span className="text-cyan-400">{assembled.length} / {PUZZLE_PIECES.length} pieces slotted</span>
            </div>

            <div className="min-h-[60px] p-3 bg-slate-950 rounded-xl border-2 border-dashed border-slate-700 flex flex-wrap items-center gap-2">
              {assembled.length === 0 ? (
                <span className="text-xs text-slate-600 font-mono italic">
                  Click the scattered URL pieces below in the correct sequence...
                </span>
              ) : (
                assembled.map((piece, idx) => (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={piece.id}
                    className="px-3 py-1.5 bg-cyan-950 text-cyan-300 border border-cyan-400/50 rounded-lg text-xs font-mono font-bold"
                  >
                    {piece.text}
                  </motion.span>
                ))
              )}
            </div>

            {/* Solved Banner */}
            {assembled.length === PUZZLE_PIECES.length && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isSolved
                    ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-400 text-rose-200'
                }`}
              >
                {isSolved ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-sm">Valid URL Syntax Mastered! (නිරවද්‍ය ලිපිනයකි)</div>
                      <div className="text-xs text-emerald-300/80 font-mono mt-0.5">
                        https://www.doenets.gov.lk/exam/results/ol2024.php
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <div>
                      <div className="font-bold text-sm">Invalid Sequence! (අනුපිළිවෙල වැරදියි)</div>
                      <div className="text-xs text-rose-300/80 mt-0.5">
                        Remember: Protocol ➔ Subdomain ➔ Domain ➔ Sub-TLD ➔ ccTLD ➔ Path ➔ File Name
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </div>

          {/* Available Pieces */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400">AVAILABLE URL SEGMENTS:</div>
            <div className="flex flex-wrap gap-2.5">
              {scrambled.map((piece) => (
                <button
                  key={piece.id}
                  onClick={() => handleAddPiece(piece)}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-cyan-900/50 border border-slate-700 hover:border-cyan-400 text-slate-200 rounded-xl text-xs font-mono font-bold transition-all shadow-md active:scale-95"
                >
                  {piece.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
