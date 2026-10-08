'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck, 
  Scale, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  Clock, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Zap, 
  Search,
  BookOpen,
  Award,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface SoftwareItem {
  id: string;
  name: string;
  iconText: string;
  codeSnippet: string;
  descriptionEn: string;
  descriptionSi: string;
  correctVault: 'proprietary' | 'foss' | 'shareware' | 'freeware';
  detailsEn: string;
  detailsSi: string;
}

const SOFTWARE_CRATES: SoftwareItem[] = [
  {
    id: 'sw-ubuntu',
    name: 'Ubuntu Linux 24.04',
    iconText: '🐧',
    codeSnippet: 'GPL v3 License: Open Source Code available to view, modify, and redistribute freely.',
    descriptionEn: 'Full OS kernel code is open for anyone to inspect, compile, and distribute without fees.',
    descriptionSi: 'මූල කේතය (Source code) විවෘතව ලබා ගත හැකි අතර නොමිලේ භාවිතයට, වෙනස් කිරීමට හා බෙදාහැරීමට හැකිය.',
    correctVault: 'foss',
    detailsEn: 'FOSS (Free & Open Source Software): Total freedom to study, modify, and share.',
    detailsSi: 'FOSS: නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (Linux, GIMP, Python, LibreOffice).'
  },
  {
    id: 'sw-office',
    name: 'Microsoft Office 2021',
    iconText: '📄',
    codeSnippet: 'Commercial End User License Agreement (EULA). Source code is closed and strictly proprietary.',
    descriptionEn: 'Requires purchasing a commercial license key. Source code is hidden and modifying is illegal.',
    descriptionSi: 'වාණිජ බලපත්‍රයක් මිලදී ගත යුතු අතර මූල කේතය සංවෘතව පවතී.',
    correctVault: 'proprietary',
    detailsEn: 'Proprietary Software: Copyright protected, closed source, commercial payment required.',
    detailsSi: 'හිමිකාරී මෘදුකාංග: වාණිජ ගෙවීම් සහිත සංවෘත මූල මෘදුකාංග (MS Office, Photoshop).'
  },
  {
    id: 'sw-winrar',
    name: 'WinRAR Archiver (Trial)',
    iconText: '📦',
    codeSnippet: '40-Day Evaluation License. After trial expires, prompts user to buy full license.',
    descriptionEn: 'Free for a 40-day evaluation trial, after which payment is requested for ongoing usage.',
    descriptionSi: 'නියමිත කාල සීමාවකට (දින 40ක්) නොමිලේ භාවිත කළ හැකි අතර ඉන්පසු මිලදී ගත යුතුය.',
    correctVault: 'shareware',
    detailsEn: 'Shareware: Trialware offered free for a limited time to test features before buying.',
    detailsSi: 'කොටස් මෘදුකාංග (Shareware): අත්හදා බැලීමේ කාලසීමාවකට පසු මිලදී ගත යුතුය.'
  },
  {
    id: 'sw-vlc',
    name: 'VLC Media Player',
    iconText: '🎬',
    codeSnippet: 'Freeware / Free to download and use permanently without paying any cost.',
    descriptionEn: 'Free to download and use forever without payment, though typically closed/binary distributed.',
    descriptionSi: 'කිසිදු ගෙවීමකින් තොරව ස්ථිරවම නොමිලේ බාගත කර භාවිත කළ හැක.',
    correctVault: 'freeware',
    detailsEn: 'Freeware: Free to use forever without monetary charges.',
    detailsSi: 'නොමිලේ භාවිත කළ හැකි මෘදුකාංග (Freeware): මුදල් අය නොකෙරේ.'
  }
];

export function SoftwareLicenseRegistry() {
  const [activeTab, setActiveTab] = useState<'license' | 'plagiarism' | 'laws'>('license');

  // License Scanner Sorter States
  const [currentCrateIndex, setCurrentCrateIndex] = useState<number>(0);
  const [sortedCrates, setSortedCrates] = useState<Record<string, { vault: string; isCorrect: boolean }>>({});
  const [isXrayActive, setIsXrayActive] = useState<boolean>(false);
  const [scannerFeedback, setScannerFeedback] = useState<string | null>(null);

  // Plagiarism Detective States
  const [isPlagiarizedTextActive, setIsPlagiarizedTextActive] = useState<boolean>(true);
  const [citationApplied, setCitationApplied] = useState<boolean>(false);

  const currentCrate = SOFTWARE_CRATES[currentCrateIndex];
  const allCratesSorted = Object.keys(sortedCrates).length === SOFTWARE_CRATES.length;

  const handleScanCrate = () => {
    sound.playClick(580);
    setIsXrayActive(!isXrayActive);
  };

  const handleSortIntoVault = (vault: 'proprietary' | 'foss' | 'shareware' | 'freeware') => {
    const isCorrect = vault === currentCrate.correctVault;
    if (isCorrect) {
      sound.playVictory();
      setScannerFeedback(`✅ Correct! ${currentCrate.name} belongs to ${vault.toUpperCase()}.`);
    } else {
      sound.playError();
      setScannerFeedback(`❌ Incorrect vault. Check license terms and inspect source code.`);
    }

    setSortedCrates((prev) => ({
      ...prev,
      [currentCrate.id]: { vault, isCorrect }
    }));

    if (currentCrateIndex < SOFTWARE_CRATES.length - 1) {
      setTimeout(() => {
        setCurrentCrateIndex((prev) => prev + 1);
        setIsXrayActive(false);
        setScannerFeedback(null);
      }, 1200);
    }
  };

  const handleResetSorter = () => {
    sound.playClick(450);
    setCurrentCrateIndex(0);
    setSortedCrates({});
    setIsXrayActive(false);
    setScannerFeedback(null);
  };

  const handleApplyCitation = () => {
    sound.playVictory();
    setCitationApplied(true);
    setIsPlagiarizedTextActive(false);
  };

  const handleResetPlagiarism = () => {
    sound.playClick(400);
    setCitationApplied(false);
    setIsPlagiarizedTextActive(true);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-emerald-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('license');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'license'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4 text-emerald-300" />
          <span>License Vault (4 Types)</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('plagiarism');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'plagiarism'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileCheck className="w-4 h-4 text-teal-300" />
          <span>Plagiarism vs Piracy</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(600);
            setActiveTab('laws');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'laws'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4 text-amber-300" />
          <span>Ethics vs. Law</span>
        </button>
      </div>

      {/* Tab 1: License Sorter Vault */}
      {activeTab === 'license' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Incoming Software Crate & X-Ray Scanner */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-400" />
                Software License X-Ray Scanner
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-mono font-bold">
                Item {currentCrateIndex + 1} of {SOFTWARE_CRATES.length}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Analyze incoming software packages. Activate the <b className="text-emerald-300">X-Ray Scanner</b> to inspect source code availability, payment restrictions, and license terms (2024 Paper I Q40).
            </p>

            {/* Software Package Card */}
            <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentCrate.iconText}</span>
                  <div>
                    <h4 className="text-base font-bold text-white">{currentCrate.name}</h4>
                    <span className="text-xs text-slate-400 font-sinhala">{currentCrate.descriptionSi}</span>
                  </div>
                </div>

                <button
                  onClick={handleScanCrate}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isXrayActive
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/30 font-black'
                      : 'bg-slate-800 text-emerald-300 border-emerald-500/40 hover:bg-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {isXrayActive ? 'X-Ray Active' : 'Scan Source Code'}
                </button>
              </div>

              {/* X-Ray Code Inspection Window */}
              <AnimatePresence>
                {isXrayActive ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded-xl space-y-1.5 font-mono text-xs text-emerald-200 shadow-inner"
                  >
                    <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                      <Zap className="w-3 h-3" /> License Telemetry & Source Code:
                    </div>
                    <p className="text-xs leading-relaxed">{currentCrate.codeSnippet}</p>
                    <p className="text-[11px] text-slate-300 font-sans mt-1">{currentCrate.descriptionEn}</p>
                  </motion.div>
                ) : (
                  <div className="p-4 bg-slate-900/60 border border-dashed border-slate-700 rounded-xl text-center text-xs text-slate-400">
                    🔒 Source code and license agreement are sealed inside package. Click "Scan Source Code" above.
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Sorter Vault Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Classify into Correct License Vault:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => handleSortIntoVault('proprietary')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-red-500/30 text-left transition-all hover:border-red-400 group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs">
                    <Lock className="w-3.5 h-3.5" /> Proprietary
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Closed-source & Commercial</div>
                  <div className="text-[9px] text-slate-500 font-sinhala">හිමිකාරී මෘදුකාංග</div>
                </button>

                <button
                  onClick={() => handleSortIntoVault('foss')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-emerald-500/30 text-left transition-all hover:border-emerald-400 group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                    <Unlock className="w-3.5 h-3.5" /> FOSS (Free & Open)
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Open source & Free to modify</div>
                  <div className="text-[9px] text-slate-500 font-sinhala">නිදහස් හා විවෘත මූලාශ්‍ර</div>
                </button>

                <button
                  onClick={() => handleSortIntoVault('shareware')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-amber-500/30 text-left transition-all hover:border-amber-400 group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                    <Clock className="w-3.5 h-3.5" /> Shareware (Trial)
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Free for trial period only</div>
                  <div className="text-[9px] text-slate-500 font-sinhala">කොටස් මෘදුකාංග</div>
                </button>

                <button
                  onClick={() => handleSortIntoVault('freeware')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-cyan-500/30 text-left transition-all hover:border-cyan-400 group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs">
                    <Download className="w-3.5 h-3.5" /> Freeware
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Permanently free to use</div>
                  <div className="text-[9px] text-slate-500 font-sinhala">නොමිලේ භාවිත කළ හැකි</div>
                </button>
              </div>
            </div>

            {/* Feedback Alert */}
            {scannerFeedback && (
              <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-xs font-medium text-emerald-300">
                {scannerFeedback}
              </div>
            )}
          </div>

          {/* Sorter Status & Syllabus Taxonomy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Software License Classification Guide
                </h4>
                <button
                  onClick={handleResetSorter}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* 4 Cards Grid */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-red-950/30 border border-red-500/30">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-300 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" /> 1. Proprietary Software (හිමිකාරී)
                    </span>
                    <span className="text-[10px] bg-red-900/50 text-red-200 px-2 py-0.5 rounded font-mono">
                      MS Windows, Office
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Users must pay a license fee. Source code is closed, protected by copyright, and cannot be modified or distributed.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5" /> 2. FOSS (Free & Open Source)
                    </span>
                    <span className="text-[10px] bg-emerald-900/50 text-emerald-200 px-2 py-0.5 rounded font-mono">
                      Linux, GIMP, Python
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Provides 4 essential freedoms: run for any purpose, study source code, modify code, and redistribute copies freely.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> 3. Shareware (කොටස් මෘදුකාංග)
                    </span>
                    <span className="text-[10px] bg-amber-900/50 text-amber-200 px-2 py-0.5 rounded font-mono">
                      WinRAR, Antivirus Trial
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Distributed free of charge for a limited evaluation period (trial). When trial expires, users must purchase a license key.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" /> 4. Freeware (නොමිලේ භාවිත වන)
                    </span>
                    <span className="text-[10px] bg-cyan-900/50 text-cyan-200 px-2 py-0.5 rounded font-mono">
                      Acrobat Reader, VLC
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Available at no monetary cost forever. However, source code is NOT open and users cannot modify the software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Plagiarism vs Piracy */}
      {activeTab === 'plagiarism' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Interactive Plagiarism UV Bench */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-teal-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-teal-400" />
                The Plagiarism Detective & UV Citation Bench
              </h3>
              <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full font-mono font-bold">
                Academic Integrity
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <b className="text-amber-300">Plagiarism (කෘතිචෞරත්වය)</b> occurs when someone copies another person's research, writing, or code without proper citation. Apply the <b className="text-teal-300">Citation Stamp</b> to eliminate plagiarism!
            </p>

            {/* Essay Document Simulation */}
            <div className="p-5 bg-white text-slate-900 rounded-2xl shadow-inner space-y-3 relative">
              <div className="flex items-center justify-between border-b pb-2 text-xs font-mono text-slate-500">
                <span>📄 Student_Research_Report.docx</span>
                <span className={citationApplied ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                  {citationApplied ? '✅ 0% Plagiarism (Cited)' : '⚠️ 100% Match Detected!'}
                </span>
              </div>

              <div className="text-xs sm:text-sm leading-relaxed text-slate-800">
                <span className="font-bold text-slate-900 block mb-1">Introduction to Green Computing:</span>
                {isPlagiarizedTextActive ? (
                  <span className="bg-red-200 text-red-900 px-1 py-0.5 rounded border border-red-300 font-medium">
                    "Green computing is the environmentally responsible and eco-friendly use of computers and their resources..."
                  </span>
                ) : (
                  <span className="bg-emerald-50 text-emerald-950 px-1 py-0.5 rounded border border-emerald-300">
                    "Green computing is the environmentally responsible and eco-friendly use of computers and their resources" 
                    <sup className="text-blue-700 font-bold text-xs bg-blue-100 px-1 rounded ml-1">[1] (Murugesan, S., 2008)</sup>.
                  </span>
                )}
              </div>

              {citationApplied && (
                <div className="border-t pt-2 mt-2 text-[10px] text-slate-600 font-mono">
                  <b>References:</b>
                  <div>[1] Murugesan, S. (2008). <i>Harnessing Green IT: Principles and Practices</i>. IEEE IT Professional.</div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex gap-3">
              {!citationApplied ? (
                <button
                  onClick={handleApplyCitation}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Apply Academic Citation Stamp (මුලාශ්‍රය සඳහන් කිරීම)
                </button>
              ) : (
                <button
                  onClick={handleResetPlagiarism}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Reset Detective Bench
                </button>
              )}
            </div>
          </div>

          {/* Plagiarism vs Piracy Distinction */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-teal-500/30 rounded-3xl p-6 shadow-xl space-y-5">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-teal-400" />
                Key Examination Distinction (විභාග වෙනස)
              </h4>

              <div className="space-y-4 text-xs">
                {/* Plagiarism Card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-teal-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-300 text-sm">
                      1. Plagiarism (කෘතිචෞරත්වය)
                    </span>
                    <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-700">
                      Academic / Ethical
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Using someone else's work, ideas, writing, or code and passing it off as one's own without giving proper credit or acknowledgment to the original creator.
                  </p>
                  <div className="p-2 bg-slate-900 rounded-lg text-[11px] text-teal-200">
                    💡 <b>Remedy:</b> Use quotation marks, paraphrasing, and formal citations / bibliographies.
                  </div>
                </div>

                {/* Software Piracy Card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-red-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-300 text-sm">
                      2. Software Piracy (මෘදුකාංග කොල්ලකෑම)
                    </span>
                    <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-700">
                      Legal Violation / Crime
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    The unauthorized copying, commercial reproduction, crack generation, downloading, or distribution of copyrighted proprietary software without buying licenses.
                  </p>
                  <div className="p-2 bg-slate-900 rounded-lg text-[11px] text-red-200">
                    ⚖️ <b>Legal Action:</b> Prosecuted under the <b>Intellectual Property Act No. 36 of 2003</b>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Ethics vs Laws */}
      {activeTab === 'laws' && (
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              Ethics vs. Law in the Information Age (ආචාරධර්ම සහ නීතිය)
            </h3>
            <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-mono font-bold">
              Legal Framework
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ethics Card */}
            <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                ICT Ethics (තොරතුරු තාක්ෂණ ආචාරධර්ම)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Voluntary moral guidelines, principles, and personal responsibilities that guide human behavior when using technology, even when no police or court is watching.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li>Respecting others' privacy and personal messages.</li>
                <li>Not spreading fake news or hate speech on social media.</li>
                <li>Acknowledging original authors through citations.</li>
                <li><b>Enforcement:</b> Self-discipline and social conscience.</li>
              </ul>
            </div>

            {/* Laws Card */}
            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Scale className="w-4 h-4" />
                Statutory Cyber Laws (නීතිමය රාමුව)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formal statutes enacted by Parliament that legally punish individuals who commit unauthorized intrusions, data thefts, or commercial copyright breaches.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li><b className="text-amber-300">Computer Crimes Act No. 24 of 2007:</b> Penalizes unauthorized hacking and denial of service.</li>
                <li><b className="text-amber-300">Intellectual Property Act No. 36 of 2003:</b> Protects patents, copyrights, and software.</li>
                <li><b>Enforcement:</b> Police, courts, monetary fines, and imprisonment.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
