'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Cpu, 
  Zap, 
  Flame, 
  Layers, 
  Sparkles, 
  Award, 
  RotateCw, 
  FileCode, 
  Monitor, 
  Bot, 
  Sliders, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Radio,
  Binary
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface GenerationData {
  gen: number;
  period: string;
  name: string;
  sinhalaName: string;
  coreTech: string;
  sinhalaTech: string;
  sizeHeatSpeed: string;
  software: string;
  specimens: string[];
  heatLevel: number; // 0 - 100
  powerUsage: number; // 0 - 100
  speedRating: string;
  accentColor: string;
  borderColor: string;
}

const GENERATIONS: GenerationData[] = [
  {
    gen: 1,
    period: '1940 – 1956',
    name: '1st Generation (Vacuum Tubes)',
    sinhalaName: '1 වන පරම්පරාව (රික්තක නළ / කපාට)',
    coreTech: 'Vacuum Tubes (Thermionic Valves)',
    sinhalaTech: 'රික්තක නළ (Vacuum Tubes)',
    sizeHeatSpeed: 'Room-sized footprint (30+ tons). Generates intense heat, requires giant AC units. High failure rate.',
    software: 'Machine Language (Binary 0s and 1s), Assembly Language, Stored Program Concept.',
    specimens: ['ENIAC', 'EDVAC', 'UNIVAC 1', 'IBM 701'],
    heatLevel: 98,
    powerUsage: 95,
    speedRating: 'Milliseconds (10⁻³ s)',
    accentColor: 'from-amber-600/30 to-red-950/40',
    borderColor: 'border-amber-500/50',
  },
  {
    gen: 2,
    period: '1956 – 1963',
    name: '2nd Generation (Transistors)',
    sinhalaName: '2 වන පරම්පරාව (ට්‍රාන්සිස්ටර්)',
    coreTech: 'Transistors (Solid-state semiconductor)',
    sinhalaTech: 'ට්‍රාන්සිස්ටර (Transistors)',
    sizeHeatSpeed: 'Shrank down to office desk size. Drastically reduced heat and energy consumption.',
    software: 'High-Level Languages: FORTRAN, COBOL. Magnetic core memory.',
    specimens: ['IBM 7030 (Stretch)', 'CDC 1604', 'UNIVAC LARC'],
    heatLevel: 65,
    powerUsage: 55,
    speedRating: 'Microseconds (10⁻⁶ s)',
    accentColor: 'from-orange-600/30 to-slate-900',
    borderColor: 'border-orange-500/50',
  },
  {
    gen: 3,
    period: '1964 – 1975',
    name: '3rd Generation (Integrated Circuits)',
    sinhalaName: '3 වන පරම්පරාව (අනුකලිත පරිපථ - IC)',
    coreTech: 'Integrated Circuits (SSI & MSI Silicon Chips)',
    sinhalaTech: 'අනුකලිත පරිපථ (IC Chips)',
    sizeHeatSpeed: 'Compact minicomputers. Keyboard input and CRT visual display monitors emerge.',
    software: 'Birth of Operating Systems (OS), Multi-programming & Time-sharing.',
    specimens: ['IBM System/360', 'PDP-8', 'PDP-11'],
    heatLevel: 40,
    powerUsage: 35,
    speedRating: 'Nanoseconds (10⁻⁹ s)',
    accentColor: 'from-indigo-600/30 to-slate-900',
    borderColor: 'border-indigo-500/50',
  },
  {
    gen: 4,
    period: '1975 – 1989',
    name: '4th Generation (Microprocessors)',
    sinhalaName: '4 වන පරම්පරාව (ක්ෂුද්‍ර සකසන - VLSI)',
    coreTech: 'VLSI & LSI Microprocessors on a single chip',
    sinhalaTech: 'ක්ෂුද්‍ර සකසන (VLSI Microprocessors)',
    sizeHeatSpeed: 'Personal Computers (PCs) and portable laptops fit easily on a desktop.',
    software: 'Graphical User Interfaces (GUI), Mouse interaction, UNIX, MS-DOS, Early Windows.',
    specimens: ['IBM PC', 'Apple II', 'Macintosh', 'Intel 4004/8086'],
    heatLevel: 20,
    powerUsage: 15,
    speedRating: 'Picoseconds (10⁻¹² s)',
    accentColor: 'from-cyan-600/30 to-slate-900',
    borderColor: 'border-cyan-500/50',
  },
  {
    gen: 5,
    period: '1989 – Present & Beyond',
    name: '5th Generation (Artificial Intelligence & ULSI)',
    sinhalaName: '5 වන පරම්පරාව (කෘතිම බුද්ධිය හා ULSI)',
    coreTech: 'ULSI (Ultra Large Scale Integration) & AI Neural Chips',
    sinhalaTech: 'අධි මහා පරිමාණ අනුකලනය (ULSI) සහ AI',
    sizeHeatSpeed: 'Ultra-thin tablets, wearable smartwatches, quantum supercomputing cloud clusters.',
    software: 'Natural Language Processing (NLP), Voice Assistants, Deep Learning, Autonomous Robotics.',
    specimens: ['Modern AI Supercomputers', 'Quantum Processors', 'Neural NPUs'],
    heatLevel: 10,
    powerUsage: 10,
    speedRating: 'Femtoseconds / Quantum Superposition',
    accentColor: 'from-emerald-600/30 to-slate-900',
    borderColor: 'border-emerald-500/50',
  },
];

const PIONEERS = [
  {
    id: 'babbage',
    name: 'Charles Babbage (1837)',
    title: 'Father of Computing (පරිගණකයේ පියා)',
    invention: 'Analytical Engine (විශ්ලේෂණ එන්ජිම)',
    detail: 'Designed the 4 modern architectural pillars: Input (Store), Process (Mill), Control, and Output.',
    badge: 'Golden Icon of Computing',
  },
  {
    id: 'lovelace',
    name: 'Ada Lovelace (1843)',
    title: "World's First Computer Programmer",
    invention: 'Punch Card Algorithm for Babbage Engine',
    detail: 'Wrote the first algorithm intended to be executed by a machine to calculate Bernoulli numbers.',
    badge: 'First Algorithm Pioneer',
  },
  {
    id: 'pascal',
    name: 'Blaise Pascal (1642)',
    title: 'Mechanical Adding Machine (Pascaline)',
    invention: 'Pascaline (පැස්කලයින් යන්ත්‍රය)',
    detail: 'Used rotating toothed brass gear wheels and dials to perform mechanical addition and subtraction.',
    badge: 'Gear Mechanics Pioneer',
  },
  {
    id: 'jacquard',
    name: 'Joseph Marie Jacquard (1801)',
    title: 'Punched Card Automated Loom',
    invention: 'Jacquard Loom (ජැකාර්ඩ් රෙදි වියන යන්ත්‍රය)',
    detail: 'Used punched cards with holes to automatically control intricate fabric weaving patterns.',
    badge: 'Punch Card Origin',
  },
  {
    id: 'aiken',
    name: 'Howard Aiken (1944)',
    title: 'Harvard MARK 1',
    invention: 'MARK 1 Electromechanical Computer',
    detail: 'First large-scale automatic general-purpose electromechanical calculator spanning 55 feet long.',
    badge: 'Electromechanical Bridge',
  },
];

export function EvolutionTimeline() {
  const [activeTab, setActiveTab] = useState<'generations' | 'pioneers'>('generations');
  const [currentGenIdx, setCurrentGenIdx] = useState(0);
  const [selectedPioneer, setSelectedPioneer] = useState(PIONEERS[0]);
  
  // Pascal gear micro-toy state
  const [pascalNum1, setPascalNum1] = useState(24);
  const [pascalNum2, setPascalNum2] = useState(38);
  const [gearRotation, setGearRotation] = useState(0);

  const curGen = GENERATIONS[currentGenIdx];

  const handleGenChange = (idx: number) => {
    sound.playBlip(500 + idx * 120);
    setCurrentGenIdx(idx);
  };

  const handlePioneerClick = (p: typeof PIONEERS[0]) => {
    sound.playClick(700);
    setSelectedPioneer(p);
  };

  const rotatePascalGear = () => {
    sound.playCrankTick();
    setGearRotation((r) => r + 45);
    setPascalNum1((prev) => (prev + 5) % 100);
  };

  return (
    <div className="space-y-6">
      {/* Station Navigation Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 4: The Time Machine
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-mono">
                Pioneers & 5 Generations
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              පරිගණකයේ පරිණාමය සහ පරම්පරා 5 හි තාක්ෂණික වෙනස්කම්
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('generations');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'generations'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚡ 5-Generation Morphing Computer
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('pioneers');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'pioneers'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ⚙️ Pioneer Gearbox (Babbage & Ada)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. 5-GENERATION MORPHING SCRUBBER */}
      {/* ========================================================================= */}
      {activeTab === 'generations' && (
        <div className="space-y-6">
          {/* Timeline Scrubber Bar */}
          <div className="bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span>Timeline: 1940 ➔ Present</span>
              <span className="text-indigo-300 font-bold">Active: Gen {curGen.gen} ({curGen.period})</span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-5 gap-2">
              {GENERATIONS.map((g, idx) => {
                const isActive = currentGenIdx === idx;
                return (
                  <button
                    key={g.gen}
                    onClick={() => handleGenChange(idx)}
                    className={`py-2 sm:py-3 px-1.5 rounded-xl border text-center transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/40 scale-105'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] font-mono opacity-80 sm:block hidden">{g.period}</div>
                    <div className="text-xs sm:text-sm font-black font-mono mt-0.5">Gen {g.gen}</div>
                    <div className="text-[9px] truncate mt-0.5 opacity-90 hidden md:block">
                      {g.gen === 1 ? 'Vacuum Tubes' : g.gen === 2 ? 'Transistors' : g.gen === 3 ? 'IC Chips' : g.gen === 4 ? 'Microprocessors' : 'ULSI & AI'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Morphing Visual Canvas + Control HUD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Dynamic Morphing Canvas */}
            <div
              className={`lg:col-span-7 bg-gradient-to-br ${curGen.accentColor} border ${curGen.borderColor} rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[440px] relative overflow-hidden transition-all duration-500`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase text-white">
                    {curGen.name}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-black/40 text-cyan-300 font-mono">
                  Speed: {curGen.speedRating}
                </span>
              </div>

              {/* Central Morphing Specimen Graphic */}
              <div className="my-6 flex flex-col items-center justify-center relative min-h-[220px]">
                <AnimatePresence mode="wait">
                  {curGen.gen === 1 && (
                    /* 1st Gen: Glowing Vacuum Tubes with steam/heat particles */
                    <motion.div
                      key="gen1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-4"
                    >
                      <div className="flex items-center justify-center gap-4">
                        {[1, 2, 3].map((t) => (
                          <div
                            key={t}
                            className="relative w-16 h-28 rounded-t-full bg-amber-950/40 border-2 border-amber-400/80 flex flex-col items-center justify-end p-2 shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                          >
                            <div className="w-3 h-10 bg-gradient-to-t from-red-500 via-amber-300 to-yellow-200 rounded-full animate-pulse shadow-[0_0_15px_#f59e0b]" />
                            <div className="w-8 h-4 bg-slate-800 rounded mt-2 border border-amber-600/40" />
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-mono text-amber-300 flex items-center justify-center gap-1">
                        <Flame className="w-4 h-4 text-red-500 animate-bounce" />
                        <span>High Electricity & Extreme Heat Emission</span>
                      </div>
                    </motion.div>
                  )}

                  {curGen.gen === 2 && (
                    /* 2nd Gen: Transistors */
                    <motion.div
                      key="gen2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-4"
                    >
                      <div className="flex items-center justify-center gap-6">
                        {[1, 2, 3].map((tr) => (
                          <div key={tr} className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-slate-100 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                              <Zap className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div className="flex gap-2 -mt-1">
                              <div className="w-1 h-6 bg-slate-400" />
                              <div className="w-1 h-6 bg-slate-400" />
                              <div className="w-1 h-6 bg-slate-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-mono text-orange-300">
                        Solid-State Transistors: Replaced bulky fragile vacuum tubes
                      </div>
                    </motion.div>
                  )}

                  {curGen.gen === 3 && (
                    /* 3rd Gen: IC Chips on Circuit Board */
                    <motion.div
                      key="gen3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-3"
                    >
                      <div className="p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500/60 shadow-2xl relative inline-block">
                        <div className="flex gap-3">
                          {[1, 2].map((ic) => (
                            <div
                              key={ic}
                              className="w-20 h-14 bg-slate-900 border border-slate-600 rounded-lg flex items-center justify-center font-mono text-[10px] text-cyan-400 shadow-inner"
                            >
                              IC-7400
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-indigo-200">
                        Integrated Circuits (IC): Thousands of transistors condensed onto silicon
                      </div>
                    </motion.div>
                  )}

                  {curGen.gen === 4 && (
                    /* 4th Gen: Desktop PC with GUI */
                    <motion.div
                      key="gen4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-3"
                    >
                      <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/50 shadow-2xl inline-block">
                        <div className="w-48 h-28 bg-blue-900 rounded-lg border border-blue-400 p-2 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[9px] font-mono text-white border-b border-blue-400/40 pb-1">
                            <span>GUI Desktop OS</span>
                            <span>✕ ◻</span>
                          </div>
                          <div className="text-left font-mono text-[10px] text-cyan-300">
                            C:\&gt; RUN APP.EXE<br />
                            [Mouse Pointer Active]
                          </div>
                          <div className="h-1 w-full bg-cyan-400 rounded" />
                        </div>
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        Microprocessors (VLSI): Personal computers, GUI, and the Mouse era
                      </div>
                    </motion.div>
                  )}

                  {curGen.gen === 5 && (
                    /* 5th Gen: AI Neural Mesh & Cloud */
                    <motion.div
                      key="gen5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center space-y-4"
                    >
                      <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                          className="absolute inset-0 rounded-full border border-dashed border-emerald-400/60"
                        />
                        <div className="w-20 h-20 rounded-2xl bg-emerald-600/30 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_30px_#10b981]">
                          <Bot className="w-10 h-10 text-emerald-300 animate-pulse" />
                        </div>
                      </div>
                      <div className="text-xs font-mono text-emerald-300">
                        ULSI & Artificial Intelligence: Natural language & parallel neural computing
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Thermal & Power Gauges */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-black/40 space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-red-400" /> Heat Emission:
                    </span>
                    <span className="font-bold text-red-400">{curGen.heatLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-red-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${curGen.heatLevel}%` }}
                    />
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Power Demand:
                    </span>
                    <span className="font-bold text-amber-400">{curGen.powerUsage}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${curGen.powerUsage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detailed Specs Deck */}
            <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div>
                <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
                  Hardware & Architecture Matrix
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white mt-0.5">
                  {curGen.name}
                </h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala font-medium mt-0.5">
                  {curGen.sinhalaName}
                </p>
              </div>

              {/* Spec Rows */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase font-mono block">
                    Core Technology Component
                  </span>
                  <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                    {curGen.coreTech}
                  </div>
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-sinhala">
                    {curGen.sinhalaTech}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase font-mono block">
                    Software & Language Architecture
                  </span>
                  <div className="text-slate-700 dark:text-slate-200 mt-0.5 leading-relaxed">
                    {curGen.software}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase font-mono block">
                    Notable Computer Systems (Specimens)
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {curGen.specimens.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-mono font-bold text-[11px]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. PIONEER GEARBOX (PASCAL, BABBAGE, LOVELACE) */}
      {/* ========================================================================= */}
      {activeTab === 'pioneers' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Pioneer List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase">Early Computing Pioneers</div>
            {PIONEERS.map((p) => {
              const isSelected = selectedPioneer.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handlePioneerClick(p)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">{p.name}</div>
                    <div className="text-xs opacity-90 mt-0.5">{p.title}</div>
                  </div>
                  <Award className={`w-5 h-5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Pioneer Exhibit */}
          <div className="lg:col-span-7 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold">
                {selectedPioneer.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">{selectedPioneer.invention}</span>
            </div>

            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                {selectedPioneer.name}
              </h4>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">
                {selectedPioneer.title}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedPioneer.detail}
              </p>
            </div>

            {/* Special Micro-Toys depending on pioneer */}
            {selectedPioneer.id === 'pascal' ? (
              /* Pascaline Gearbox */
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                  <span>PASCALINE MECHANICAL GEARBOX (1642)</span>
                  <span>Addition by Cogs</span>
                </div>

                <div className="flex items-center justify-center gap-6 py-3">
                  <motion.div animate={{ rotate: gearRotation }} transition={{ duration: 0.2 }}>
                    <div className="w-20 h-20 rounded-full border-4 border-dashed border-amber-400 bg-amber-500/20 flex items-center justify-center">
                      <RotateCw className="w-8 h-8 text-amber-300" />
                    </div>
                  </motion.div>

                  <div className="text-center font-mono">
                    <div className="text-xs text-slate-400">Mechanical Counter Display</div>
                    <div className="text-2xl font-black text-white mt-1">
                      {pascalNum1} + {pascalNum2} = <span className="text-amber-400">{pascalNum1 + pascalNum2}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={rotatePascalGear}
                  className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Turn Brass Gearwheel (+5)</span>
                </button>
              </div>
            ) : selectedPioneer.id === 'babbage' ? (
              /* Babbage 4 Pillars */
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-3">
                <div className="text-xs font-mono text-cyan-400 font-bold">
                  THE 4 PILLARS OF BABBAGE'S ANALYTICAL ENGINE (1837)
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-800 border border-slate-700">
                    <span className="text-cyan-400 font-bold">1. Input:</span> Punched Card Reader
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700">
                    <span className="text-indigo-400 font-bold">2. The Mill:</span> Arithmetic Unit (CPU)
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700">
                    <span className="text-amber-400 font-bold">3. The Store:</span> Memory / Registers
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700">
                    <span className="text-emerald-400 font-bold">4. Output:</span> Printing Mechanism
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 font-sinhala">
                  නූතන පරිගණකයේ මූලික සංකල්පය (Input ➔ Process ➔ Store ➔ Output) ප්‍රථම වරට හඳුන්වා දුන්නේ චාල්ස් බැබේජ් විසිනි.
                </p>
              </div>
            ) : selectedPioneer.id === 'lovelace' ? (
              /* Ada Lovelace punch card */
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-3">
                <div className="text-xs font-mono text-fuchsia-400 font-bold">
                  PUNCH CARD ALGORITHM EXECUTION (ADA LOVELACE)
                </div>
                <div className="p-3 bg-black/50 rounded-xl border border-fuchsia-500/40 font-mono text-xs text-fuchsia-200">
                  <code>
                    10 INPUT N<br />
                    20 COMPUTE BERNOULLI_NUM(N)<br />
                    30 STORE IN BABBAGE_MILL<br />
                    40 OUTPUT RESULT
                  </code>
                </div>
                <p className="text-[11px] text-slate-300">
                  Ada Lovelace foresaw that computers could manipulate not just numbers, but anything that can be represented symbolically (music, art, logic).
                </p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
