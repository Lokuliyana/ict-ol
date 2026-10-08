'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HardDrive, 
  Layers, 
  FileText, 
  Film, 
  FileCode, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw,
  ArrowRight,
  Database,
  Calculator
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function StorageSiloPacker() {
  const [activeTab, setActiveTab] = useState<'multiplier' | 'usb_balance'>('usb_balance');
  
  // Multiplier Cascade step (2023 P1 Q09: 1 TB to KB)
  const [cascadeStep, setCascadeStep] = useState<0 | 1 | 2 | 3>(0);

  // USB Capacity Balance (2024 P1 Q08: 2.5 GB total files)
  const [selectedUsbBin, setSelectedUsbBin] = useState<number | null>(null);
  const [binFeedback, setBinFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const RANI_FILES = [
    { name: 'nickels.mp4', size: '2 GB (2048 MB)', numMb: 2048, icon: Film },
    { name: 'trees.pdf', size: '500 MB', numMb: 500, icon: FileText },
    { name: 'report.docx', size: '900 KB (~0.88 MB)', numMb: 0.88, icon: FileText },
    { name: 'config.txt', size: '534 Bytes (<0.001 MB)', numMb: 0.0005, icon: FileCode },
  ];

  const totalFilesMb = 2048 + 500 + 0.88 + 0.0005; // 2548.88 MB (~2.49 GB)

  const handleCascadeNext = () => {
    sound.playSnap();
    setCascadeStep((prev) => ((prev + 1) % 4) as 0 | 1 | 2 | 3);
  };

  const handleSelectUsbBin = (sizeGb: number) => {
    sound.playClick();
    setSelectedUsbBin(sizeGb);

    const binCapacityMb = sizeGb * 1024;
    if (binCapacityMb < totalFilesMb) {
      sound.playBuzzer();
      setBinFeedback({
        isCorrect: false,
        text: `❌ Capacity Exceeded! The ${sizeGb} GB flash drive has only ${binCapacityMb} MB, which cannot hold 2,549 MB (~2.5 GB) of files!`,
      });
    } else if (sizeGb === 4) {
      sound.playSuccessDing();
      setBinFeedback({
        isCorrect: true,
        text: `✅ Correct (2024 O/L P1 Q08)! The 4 GB flash drive (4,096 MB) is the LOWEST SUFFICIENT capacity to safely hold 2.5 GB of files without overspending.`,
      });
    } else {
      sound.playBlip(600);
      setBinFeedback({
        isCorrect: false,
        text: `⚠️ While files fit in ${sizeGb} GB, it is NOT the lowest sufficient capacity (4 GB is the most economical choice).`,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 4: The Storage Unit Silo
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-mono">
                Storage Math & Capacities
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ආචයන ඒකක පරිවර්තනය (1024 ගුණාකාර) හා ප්‍රායෝගික ගොනු ධාරිතා ගණනය කිරීම්
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('usb_balance');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'usb_balance'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚖️ 2024 Exam USB Balance
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('multiplier');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'multiplier'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚙️ 2023 1 TB Cascader
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. USB CAPACITY BALANCE (2024 O/L P1 Q08) */}
      {/* ========================================================================= */}
      {activeTab === 'usb_balance' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-amber-300">
                2024 O/L Past Paper Q08: Lowest Sufficient Flash Drive Selection
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold">
                Total Files: ~2.49 GB (2,549 MB)
              </span>
            </div>

            {/* Rani's File Blocks on Desk */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400">Rani's Project Files to Copy:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {RANI_FILES.map((file) => (
                  <div
                    key={file.name}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-700 space-y-1 text-center"
                  >
                    <file.icon className="w-5 h-5 text-cyan-400 mx-auto" />
                    <div className="text-xs font-bold text-white truncate">{file.name}</div>
                    <div className="text-[10px] font-mono text-amber-300">{file.size}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Flash Drive Bins */}
            <div className="space-y-2 pt-2 border-t border-indigo-900/40">
              <div className="text-xs font-bold text-slate-300">
                Select the lowest sufficient capacity USB Flash Drive:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[2, 4, 8, 16].map((size) => {
                  const isSelected = selectedUsbBin === size;
                  const isCorrect = size === 4;

                  return (
                    <button
                      key={size}
                      onClick={() => handleSelectUsbBin(size)}
                      className={`p-3.5 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-500/40 scale-105'
                            : 'bg-red-600 text-white border-red-400 shadow-lg shadow-red-500/40'
                          : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                      }`}
                    >
                      <HardDrive className="w-6 h-6 mx-auto mb-1 opacity-80" />
                      <div className="text-base font-black font-mono">{size} GB</div>
                      <div className="text-[10px] opacity-75 font-mono">{size * 1024} MB</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Banner */}
            {binFeedback && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`p-3.5 rounded-xl text-xs ${binFeedback.isCorrect ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-200' : 'bg-red-950/80 border border-red-500 text-red-200'}`}>
                {binFeedback.text}
              </motion.div>
            )}
          </div>

          {/* Right Explanation */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Exam Calculation Steps</span>
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <p>
                Add up the sizes of all files:
              </p>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1 font-mono text-[11px]">
                <div>• Video: 2048 MB (2 GB)</div>
                <div>• PDF: 500 MB</div>
                <div>• Word Doc: ~0.9 MB</div>
                <div>• Config Text: &lt; 0.001 MB</div>
                <div className="border-t border-slate-300 dark:border-slate-700 pt-1 font-bold text-indigo-600 dark:text-indigo-400">
                  ∑ Total = ~2,549 MB (&approx; 2.49 GB)
                </div>
              </div>
              <p className="font-sinhala leading-relaxed text-[11px]">
                2 GB ධාවකයකට මෙම ගොනු ඇතුළත් කළ නොහැකි බැවින් (2048 MB &lt; 2549 MB), මේ සඳහා භාවිත කළ හැකි <strong>අවම ප්‍රමාණවත් (Lowest Sufficient)</strong> ධාරිතාව <strong>4 GB</strong> වේ.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. 2023 1 TB CASCADER (2023 O/L P1 Q09) */}
      {/* ========================================================================= */}
      {activeTab === 'multiplier' && (
        <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                2023 O/L Past Paper Q09: Unit Conversion Cascade
              </span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                How many Kilobytes (KB) are in 1 Terabyte (TB)?
              </h4>
            </div>
            <button
              onClick={handleCascadeNext}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
            >
              <span>Cascade Multiplier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cascade Visual Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center font-mono">
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 border border-slate-700">
              <span className="text-[10px] text-slate-400">STARTING UNIT</span>
              <div className="text-2xl font-black text-white mt-1">1 TB</div>
              <div className="text-[10px] text-slate-400 mt-1">Terabyte</div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${cascadeStep >= 1 ? 'bg-indigo-950/60 border-indigo-400 text-white' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}>
              <span className="text-[10px] opacity-75">STEP 1: ×1024</span>
              <div className="text-xl font-black mt-1">{cascadeStep >= 1 ? '1024 GB' : '—'}</div>
              <div className="text-[10px] opacity-75 mt-1">Gigabytes</div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${cascadeStep >= 2 ? 'bg-indigo-950/60 border-indigo-400 text-white' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}>
              <span className="text-[10px] opacity-75">STEP 2: ×1024</span>
              <div className="text-sm font-black mt-1 truncate">{cascadeStep >= 2 ? '1024 × 1024 MB' : '—'}</div>
              <div className="text-[10px] opacity-75 mt-1">Megabytes</div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${cascadeStep >= 3 ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200 shadow-lg' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}>
              <span className="text-[10px] opacity-75">FINAL: ×1024</span>
              <div className="text-xs font-black mt-1">{cascadeStep >= 3 ? '1024 × 1024 × 1024 KB' : '—'}</div>
              <div className="text-[10px] opacity-75 mt-1 text-emerald-400">Kilobytes (KB)</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 font-mono">
            <strong>Exact Mathematical Formula:</strong> 1 TB = 1024 &times; 1024 &times; 1024 KB = 2³⁰ KB = 1,073,741,824 KB
          </div>
        </div>
      )}
    </div>
  );
}
