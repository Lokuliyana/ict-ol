'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Power, 
  HardDrive, 
  Layers, 
  Cpu, 
  Zap, 
  Disc, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowUpDown, 
  FileText, 
  Image as ImageIcon, 
  Film,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface MemoryTier {
  id: string;
  name: string;
  sinhala: string;
  speedRank: number; // 1 = Fastest
  capacityRank: number; // 1 = Smallest
  volatility: 'volatile' | 'non-volatile';
  description: string;
  sampleItem: string;
}

const STORAGE_TIERS: MemoryTier[] = [
  { id: 'reg', name: 'CPU Registers', sinhala: 'රෙජිස්ටර්', speedRank: 1, capacityRank: 1, volatility: 'volatile', description: 'Fastest, holds bytes/bits currently being computed', sampleItem: 'Current Operand: 15' },
  { id: 'cache', name: 'Cache Memory (L1/L2/L3)', sinhala: 'කෑෂ් මතකය', speedRank: 2, capacityRank: 2, volatility: 'volatile', description: 'High-speed SRAM, MB capacity', sampleItem: 'Frequently used loop code' },
  { id: 'ram', name: 'Main Memory (RAM)', sinhala: 'ප්‍රධාන මතකය (RAM)', speedRank: 3, capacityRank: 3, volatility: 'volatile', description: 'Primary working area, 8GB - 64GB', sampleItem: 'Running Web Browser tab' },
  { id: 'rom', name: 'ROM (BIOS/Firmware)', sinhala: 'කියවීම පමණක් මතකය (ROM)', speedRank: 4, capacityRank: 4, volatility: 'non-volatile', description: 'Permanent bootstrap startup instructions', sampleItem: 'System Bootloader' },
  { id: 'hdd', name: 'Secondary Storage (SSD/HDD)', sinhala: 'ද්විතියික ආචයනය', speedRank: 5, capacityRank: 5, volatility: 'non-volatile', description: 'Mass non-volatile storage, 512GB - 4TB', sampleItem: 'Saved ICT Project PDF' },
  { id: 'optical', name: 'Optical Discs (CD/DVD/Blu-Ray)', sinhala: 'ප්‍රකාශ තැටි', speedRank: 6, capacityRank: 6, volatility: 'non-volatile', description: 'CD (~700MB), DVD (~4.7GB), Blu-Ray (~25GB)', sampleItem: 'Movie ISO image' },
];

export function MemoryPyramid() {
  const [activeTab, setActiveTab] = useState<'blackout' | 'packer' | 'optical'>('blackout');
  
  // Blackout test
  const [isPowerOn, setIsPowerOn] = useState(true);
  
  // Storage packer (2025 Exam Q07)
  const [driveCapacity] = useState(256); // MB
  const [packedFiles, setPackedFiles] = useState<{ id: string; name: string; sizeMb: number; rawText: string }[]>([]);
  const [packerError, setPackerError] = useState<string | null>(null);

  const totalPackedMb = packedFiles.reduce((acc, f) => acc + f.sizeMb, 0);

  const togglePower = () => {
    if (isPowerOn) {
      sound.playBuzzer();
      setIsPowerOn(false);
    } else {
      sound.playSuccessDing();
      setIsPowerOn(true);
    }
  };

  const handlePackFile = (file: { id: string; name: string; sizeMb: number; rawText: string }) => {
    if (packedFiles.some((f) => f.id === file.id)) return;

    if (totalPackedMb + file.sizeMb > driveCapacity) {
      sound.playBuzzer();
      setPackerError(`⚠️ Overcapacity! "${file.name}" (${file.rawText}) requires ${file.sizeMb} MB, exceeding the 256 MB limit!`);
      setTimeout(() => setPackerError(null), 3000);
    } else {
      sound.playSnap();
      setPackedFiles((prev) => [...prev, file]);
      setPackerError(null);
      if (packedFiles.length === 1) sound.playSuccessDing();
    }
  };

  const removePackedFile = (id: string) => {
    sound.playClick();
    setPackedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 4: The Storage Pyramid
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-mono">
                Hierarchy & Volatility
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              මතක ධූරාවලිය (වේගය / ධාරිතාව), නශ්‍ය (Volatile) හා අනශ්‍ය (Non-volatile) මතක පරීක්ෂාව
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('blackout');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'blackout'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚡ Blackout Volatility Test
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('packer');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'packer'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            📦 2025 Exam 256MB Packer
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('optical');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'optical'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            💿 Optical Disc Capacities
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BLACKOUT VOLATILITY TEST */}
      {/* ========================================================================= */}
      {activeTab === 'blackout' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Storage Pyramid Visualizer */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-amber-300">
                Memory Hierarchy (Fastest Top ➔ Slowest Bottom)
              </span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-bold ${isPowerOn ? 'text-emerald-400' : 'text-red-400'}`}>
                  Power: {isPowerOn ? 'ONLINE (100%)' : 'BLACKOUT (0V)'}
                </span>
              </div>
            </div>

            {/* Pyramid Tiers */}
            <div className="space-y-2 my-2">
              {STORAGE_TIERS.map((tier, idx) => {
                const isErased = !isPowerOn && tier.volatility === 'volatile';

                return (
                  <motion.div
                    key={tier.id}
                    animate={{
                      opacity: isErased ? 0.3 : 1,
                      scale: isErased ? 0.98 : 1,
                    }}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                      tier.volatility === 'volatile'
                        ? isPowerOn
                          ? 'bg-indigo-950/60 border-indigo-500/50 text-indigo-200'
                          : 'bg-red-950/20 border-red-900/40 text-red-400 line-through'
                        : 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center text-[10px] font-mono">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-xs sm:text-sm font-mono text-white">
                          {tier.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-sinhala">{tier.sinhala}</div>
                      </div>
                    </div>

                    <div className="text-right font-mono text-xs">
                      {isErased ? (
                        <span className="text-red-400 text-[11px] font-bold">💥 Data Vaporized</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded bg-black/40 text-slate-300">
                            {tier.sampleItem}
                          </span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-bold ${
                              tier.volatility === 'volatile'
                                ? 'bg-amber-500/20 text-amber-300'
                                : 'bg-emerald-500/20 text-emerald-300'
                            }`}
                          >
                            {tier.volatility}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Power Switch Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-indigo-900/40 bg-black/40 p-4 rounded-2xl">
              <div>
                <div className="text-xs font-bold text-white">Main Electrical Power Switch</div>
                <div className="text-[11px] text-slate-400">Flip switch to test data volatility</div>
              </div>

              <button
                onClick={togglePower}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg ${
                  isPowerOn
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/40'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/40'
                }`}
              >
                <Power className="w-4 h-4" />
                <span>{isPowerOn ? 'Cut Power (Blackout)' : 'Restore Power'}</span>
              </button>
            </div>
          </div>

          {/* Right Theory & Volatility Rules */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Volatility Laws in Examination</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-700 dark:text-slate-200 space-y-1">
                <div className="font-bold text-amber-700 dark:text-amber-400">
                  Volatile Memory (නශ්‍ය මතකය)
                </div>
                <p className="font-sinhala leading-relaxed text-[11px]">
                  විදුලි බලය විසන්ධි වූ වහාම එහි ගබඩා කර ඇති සියලු දත්ත ක්ෂණිකව මැකී යයි.
                </p>
                <div className="font-mono text-[11px] text-slate-500">
                  Examples: <strong>RAM, Cache Memory, CPU Registers</strong>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-slate-700 dark:text-slate-200 space-y-1">
                <div className="font-bold text-emerald-700 dark:text-emerald-400">
                  Non-Volatile Memory (අනශ්‍ය මතකය)
                </div>
                <p className="font-sinhala leading-relaxed text-[11px]">
                  විදුලි බලය විසන්ධි වුවද එහි ගබඩා කර ඇති දත්ත ස්ථිරව ආරක්ෂා වී පවතී.
                </p>
                <div className="font-mono text-[11px] text-slate-500">
                  Examples: <strong>Hard Disk (HDD/SSD), ROM, Flash Drive, Optical Discs</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. 2025 EXAM 256MB PACKER TOY (2025 O/L Q07) */}
      {/* ========================================================================= */}
      {activeTab === 'packer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                2025 O/L Past Paper Q07: Storage Packing Challenge
              </span>
              <span className="text-xs font-mono text-slate-400">Capacity: 256 MB Flash Drive</span>
            </div>

            {/* Flash Drive Visual Meter */}
            <div className="p-4 rounded-2xl bg-black/50 border border-cyan-500/40 space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">USB Drive Allocation:</span>
                <span className="font-bold text-cyan-400">
                  {totalPackedMb.toFixed(2)} MB / 256 MB ({((totalPackedMb / 256) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (totalPackedMb / 256) * 100)}%` }}
                />
              </div>

              {/* Packed Files Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {packedFiles.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">Flash drive is currently empty.</span>
                ) : (
                  packedFiles.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => removePackedFile(f.id)}
                      className="px-2.5 py-1 rounded-lg bg-indigo-600/30 border border-indigo-400 text-xs font-mono text-cyan-300 flex items-center gap-1.5 hover:bg-red-900/40"
                    >
                      <span>{f.name} ({f.rawText})</span>
                      <span className="text-red-400 font-bold">✕</span>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Available Files on Desktop */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300">Desk Files to Transfer:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'vid', name: 'Video File', sizeMb: 307.2, rawText: '0.3 GB (~307 MB)', icon: Film },
                  { id: 'img', name: 'Digital Photo', sizeMb: 0.29, rawText: '300 KB', icon: ImageIcon },
                  { id: 'doc', name: 'Text Document', sizeMb: 0.0004, rawText: '400 Bytes', icon: FileText },
                ].map((file) => (
                  <button
                    key={file.id}
                    onClick={() => handlePackFile(file)}
                    className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition-all space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <file.icon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-slate-400">
                        {file.rawText}
                      </span>
                    </div>
                    <div className="font-bold text-xs text-white">{file.name}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">+ Click to Pack</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Error / Feedback Banner */}
            {packerError && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-xs text-red-200"
              >
                {packerError}
              </motion.div>
            )}
          </div>

          {/* Right Explanation */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Exam Unit Conversions Rationale</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <p>
                To solve 2025 Paper I Q07, convert all units to Megabytes (MB):
              </p>
              <ul className="list-disc list-inside space-y-1 font-mono text-[11px]">
                <li><strong>Video:</strong> 0.3 GB = 0.3 &times; 1024 MB &approx; <strong>307.2 MB</strong> (Exceeds 256 MB!)</li>
                <li><strong>Image:</strong> 300 KB = 300 / 1024 MB &approx; <strong>0.29 MB</strong> (Fits easily)</li>
                <li><strong>Doc:</strong> 400 Bytes &approx; <strong>0.0004 MB</strong> (Fits easily)</li>
              </ul>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 font-bold">
                ✓ Conclusion: Only the Image and Document can fit together in the 256 MB Flash Drive!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. OPTICAL DISC CAPACITIES */}
      {/* ========================================================================= */}
      {activeTab === 'optical' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-center">
            <Disc className="w-12 h-12 text-slate-400 mx-auto animate-spin" style={{ animationDuration: '6s' }} />
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Compact Disc (CD)</h4>
            <div className="text-2xl font-black text-indigo-600 font-mono">~700 MB</div>
            <p className="text-xs text-slate-500">Audio albums, small software installers</p>
          </div>

          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-center">
            <Disc className="w-12 h-12 text-amber-500 mx-auto animate-spin" style={{ animationDuration: '4s' }} />
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Digital Versatile Disc (DVD)</h4>
            <div className="text-2xl font-black text-amber-600 font-mono">~4.7 GB</div>
            <p className="text-xs text-slate-500">Standard definition movies, Operating System ISOs</p>
          </div>

          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-center">
            <Disc className="w-12 h-12 text-cyan-500 mx-auto animate-spin" style={{ animationDuration: '2s' }} />
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Blu-Ray Disc (BD)</h4>
            <div className="text-2xl font-black text-cyan-600 font-mono">~25 GB (Single Layer)</div>
            <p className="text-xs text-slate-500">High-definition 4K video, modern console games</p>
          </div>
        </div>
      )}
    </div>
  );
}
