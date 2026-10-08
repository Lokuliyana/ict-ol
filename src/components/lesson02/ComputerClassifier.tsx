'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Server, 
  Cpu, 
  Activity, 
  Gauge, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Radio,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

const COMPUTER_SIZES = [
  {
    id: 'micro',
    name: 'Microcomputer (ක්ෂුද්‍ර පරිගණක)',
    examples: 'Desktop PC, Laptop, Smartphone, Tablet, Smartwatch',
    powerRating: 'Single microprocessor, personal computing',
    applications: 'School education, office work, gaming, daily tasks',
    icon: Laptop,
    accent: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
  },
  {
    id: 'mini',
    name: 'Minicomputer (කුඩා පරිගණක)',
    examples: 'Midrange servers, departmental servers (e.g. PDP-11)',
    powerRating: 'Multi-user systems supporting tens to hundreds of users',
    applications: 'Manufacturing process control, university departments',
    icon: Server,
    accent: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30',
  },
  {
    id: 'mainframe',
    name: 'Mainframe (මහා පරිගණක)',
    examples: 'IBM zSeries enterprise servers',
    powerRating: 'Massive I/O throughput, thousands of simultaneous terminals',
    applications: 'Commercial banking networks, national airline reservations, insurance',
    icon: Server,
    accent: 'border-amber-500/40 text-amber-300 bg-amber-950/30',
  },
  {
    id: 'super',
    name: 'Supercomputer (සුපිරි පරිගණක)',
    examples: 'Summit, Frontier, Fugaku',
    powerRating: 'Thousands of multi-core parallel processors (Petaflops/Exaflops)',
    applications: 'NASA space trajectory, global climate modeling, nuclear simulations',
    icon: Cpu,
    accent: 'border-rose-500/40 text-rose-300 bg-rose-950/30',
  },
];

const SIGNAL_CHALLENGES = [
  {
    id: 'speedo',
    title: 'Vehicle Speedometer / Fuel Float Needle',
    sinhala: 'මෝටර් රථ වේග මාපකය / ඉන්ධන මට්ටම් මාපකය',
    description: 'Reads smooth physical variations of wheel rotation or float resistance continuously.',
    correctType: 'analog',
    explanation: 'Continuous physical signals that vary infinitely without discrete steps = Analog Computer (ප්‍රතිසම පරිගණක).',
  },
  {
    id: 'pc_calc',
    title: 'Desktop PC Computing Average Marks',
    sinhala: 'ලකුණු ගණනය කරන ඩෙස්ක්ටොප් පරිගණකය',
    description: 'Processes distinct binary numbers (0s and 1s) inside silicon microchips.',
    correctType: 'digital',
    explanation: 'Processes discrete binary digits (0 and 1 pulses) = Digital Computer (අංකිත පරිගණක).',
  },
  {
    id: 'ecg_unit',
    title: 'Hospital ICU Patient Heart Monitor (ECG)',
    sinhala: 'රෝහල් දැඩි සත්කාර ඒකකයේ ECG හෘද නිරීක්ෂණ යන්ත්‍රය',
    description: 'Detects continuous analog electrical heart pulses from skin electrodes and converts them into digital numeric BPM readings on a monitor.',
    correctType: 'hybrid',
    explanation: 'Combines analog continuous signal input with digital numerical processing & display = Hybrid Computer (සමුහුජ පරිගණක).',
  },
];

export function ComputerClassifier() {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [activeSignalIdx, setActiveSignalIdx] = useState(0);
  const [selectedSignalType, setSelectedSignalType] = useState<'analog' | 'digital' | 'hybrid' | null>(null);
  const [signalSubmitted, setSignalSubmitted] = useState(false);
  const [unlockedHybridBadge, setUnlockedHybridBadge] = useState(false);

  const curSize = COMPUTER_SIZES[sizeIndex];
  const curSignal = SIGNAL_CHALLENGES[activeSignalIdx];

  const handleSizeSlider = (val: number) => {
    sound.playClick(400 + val * 150);
    setSizeIndex(val);
  };

  const handleSignalSelect = (type: 'analog' | 'digital' | 'hybrid') => {
    if (signalSubmitted) return;
    sound.playClick();
    setSelectedSignalType(type);
    setSignalSubmitted(true);

    if (type === curSignal.correctType) {
      sound.playSuccessDing();
      if (type === 'hybrid') setUnlockedHybridBadge(true);
    } else {
      sound.playBuzzer();
    }
  };

  const handleNextSignal = () => {
    sound.playClick();
    setSelectedSignalType(null);
    setSignalSubmitted(false);
    setActiveSignalIdx((prev) => (prev + 1) % SIGNAL_CHALLENGES.length);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 1: The Sorting Hub (Classification of Computers)
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-mono">
                Size & Technology
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ප්‍රමාණය, කාර්ය සාධනය සහ සංඥා තාක්ෂණය (ප්‍රතිසම / අංකිත / සමුහුජ) අනුව පරිගණක වර්ගීකරණය
            </p>
          </div>
        </div>

        {unlockedHybridBadge && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hybrid Specialist Unlocked</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* PART A: SCALE SLIDER (BY PHYSICAL SIZE & POWER) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px]">
          <div className="border-b border-indigo-900/40 pb-3">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
              1. Classification by Physical Size & Power
            </span>
            <div className="text-xs text-slate-400">Drag the scale slider to expand computing power:</div>
          </div>

          {/* Form Factor Visual Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={curSize.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`p-5 rounded-2xl border ${curSize.accent} space-y-3 my-4`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <curSize.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">{curSize.name}</h4>
                    <span className="text-[10px] font-mono text-slate-300">Tier {sizeIndex + 1} of 4</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div>
                  <strong className="text-white">Examples:</strong> {curSize.examples}
                </div>
                <div>
                  <strong className="text-white">Processing Power:</strong> {curSize.powerRating}
                </div>
                <div>
                  <strong className="text-white">Real-world Use:</strong> {curSize.applications}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stepped Scale Slider */}
          <div className="space-y-2 pt-3 border-t border-indigo-900/40">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span className={sizeIndex === 0 ? 'text-cyan-400 font-bold' : ''}>Micro</span>
              <span className={sizeIndex === 1 ? 'text-cyan-400 font-bold' : ''}>Mini</span>
              <span className={sizeIndex === 2 ? 'text-cyan-400 font-bold' : ''}>Mainframe</span>
              <span className={sizeIndex === 3 ? 'text-cyan-400 font-bold' : ''}>Super</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={sizeIndex}
              onChange={(e) => handleSizeSlider(parseInt(e.target.value, 10))}
              className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART B: THE SIGNAL SHIFTER (ANALOG VS DIGITAL VS HYBRID) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                2. Classification by Signal Technology
              </span>
              <span className="text-xs font-mono text-slate-400">
                Specimen {activeSignalIdx + 1}/{SIGNAL_CHALLENGES.length}
              </span>
            </div>

            {/* Signal Challenge Card */}
            <div className="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {curSignal.title}
              </h4>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala">
                {curSignal.sinhala}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {curSignal.description}
              </p>
            </div>

            {/* Waveform Diagrams */}
            <div className="grid grid-cols-3 gap-2 my-3 text-center">
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <svg className="w-full h-8 text-amber-500" viewBox="0 0 100 30">
                  <path d="M 0 15 Q 25 0 50 15 T 100 15" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 block">
                  Continuous Wave (Analog)
                </span>
              </div>

              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <svg className="w-full h-8 text-cyan-500" viewBox="0 0 100 30">
                  <path d="M 0 25 L 20 25 L 20 5 L 40 5 L 40 25 L 60 25 L 60 5 L 80 5 L 80 25 L 100 25" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 block">
                  Square Wave (Digital 0/1)
                </span>
              </div>

              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center h-8 text-emerald-500 font-mono text-xs font-bold">
                  Pulse ➔ 72 BPM
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 block">
                  Analog In + Digital Out (Hybrid)
                </span>
              </div>
            </div>

            {/* Signal Buttons */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Select computer type:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'analog', label: 'Analog Computer', si: 'ප්‍රතිසම' },
                  { key: 'digital', label: 'Digital Computer', si: 'අංකිත' },
                  { key: 'hybrid', label: 'Hybrid Computer', si: 'සමුහුජ' },
                ].map((item) => {
                  const isSelected = selectedSignalType === item.key;
                  const isCorrect = curSignal.correctType === item.key;

                  let style = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';
                  if (signalSubmitted) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-700 dark:text-red-300';
                    }
                  } else if (isSelected) {
                    style = 'bg-indigo-50 border-indigo-500 text-indigo-900';
                  }

                  return (
                    <button
                      key={item.key}
                      disabled={signalSubmitted}
                      onClick={() => handleSignalSelect(item.key as 'analog' | 'digital' | 'hybrid')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${style}`}
                    >
                      <div className="text-xs font-bold font-mono">{item.label}</div>
                      <div className="text-[10px] font-sinhala opacity-75">{item.si}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Feedback & Next Button */}
          {signalSubmitted && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 pt-2">
              <p className="text-xs p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {curSignal.explanation}
              </p>
              <button
                onClick={handleNextSignal}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30"
              >
                <span>Next Signal Specimen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
