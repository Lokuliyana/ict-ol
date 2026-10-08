'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Recycle, 
  Trash2, 
  Leaf, 
  Zap, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Layers, 
  Tv, 
  Battery, 
  Cpu, 
  Laptop, 
  Power,
  FileSpreadsheet
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface WasteItem {
  id: string;
  name: string;
  icon: React.ElementType;
  toxicMetal: string;
  symbol: string;
  hazardEn: string;
  hazardSi: string;
  origin: string;
}

const EWASTE_ITEMS: WasteItem[] = [
  {
    id: 'crt',
    name: 'Old CRT Monitor (කැතෝඩ කිරණ නළය)',
    icon: Tv,
    toxicMetal: 'Lead (ලෙඩ් / ඊයම්)',
    symbol: 'Pb',
    hazardEn: 'Damages central nervous system, brain development in children, and kidneys.',
    hazardSi: 'මධ්‍ය ස්නායු පද්ධතියට, මොළයේ වර්ධනයට සහ වකුගඩුවලට දැඩි හානි පමුණුවයි.',
    origin: 'CRT monitor glass funnel & soldering materials (2021 P1 Q40)'
  },
  {
    id: 'switch',
    name: 'Flat Panel Backlight & Switch',
    icon: Cpu,
    toxicMetal: 'Mercury (මර්කරි / රසදිය)',
    symbol: 'Hg',
    hazardEn: 'Bioaccumulates in waterways; causes severe brain and kidney damage.',
    hazardSi: 'ජල මූලාශ්‍ර ඔස්සේ ශරීරගත වී මොළයට සහ වකුගඩුවලට හානි කරයි.',
    origin: 'Fluorescent backlights, tilt sensors, and printed circuit switches'
  },
  {
    id: 'battery',
    name: 'Rechargeable Laptop Battery',
    icon: Battery,
    toxicMetal: 'Cadmium (කැඩ්මියම්)',
    symbol: 'Cd',
    hazardEn: 'Causes bone fragility and chronic kidney disease.',
    hazardSi: 'අස්ථි බිඳෙනසුලු බවට පත් කරන අතර වකුගඩු රෝග ඇති කරයි.',
    origin: 'Rechargeable Ni-Cd batteries and SMD chip resistors'
  }
];

export function EWasteDisassemblyPlant() {
  const [activeTab, setActiveTab] = useState<'probe' | 'pipeline3r' | 'green'>('probe');

  // Chemical Laser Probe State
  const [selectedWasteId, setSelectedWasteId] = useState<string>('crt');
  const [isProbing, setIsProbing] = useState<boolean>(false);
  const [probedItems, setProbedItems] = useState<Record<string, boolean>>({});

  // 3R Routing Challenge State (2022 P2 Q06(b))
  const [routedCase1, setRoutedCase1] = useState<string | null>(null); // Functional laptop -> Reuse
  const [routedCase2, setRoutedCase2] = useState<string | null>(null); // Dead motherboard -> Recycle
  const [routedCase3, setRoutedCase3] = useState<string | null>(null); // Old RAM upgrade -> Reduce

  // Green Computing Power Switch State (2020 P1 Q38)
  const [isSleepModeActive, setIsSleepModeActive] = useState<boolean>(false);
  const [isPaperlessActive, setIsPaperlessActive] = useState<boolean>(false);

  const currentItem = EWASTE_ITEMS.find((i) => i.id === selectedWasteId) || EWASTE_ITEMS[0];

  const handleScanMetal = (id: string) => {
    sound.playClick(580);
    setIsProbing(true);
    setTimeout(() => {
      sound.playVictory();
      setProbedItems((prev) => ({ ...prev, [id]: true }));
      setIsProbing(false);
    }, 600);
  };

  const handleReset3R = () => {
    sound.playClick(400);
    setRoutedCase1(null);
    setRoutedCase2(null);
    setRoutedCase3(null);
  };

  const is3RComplete = routedCase1 === 'reuse' && routedCase2 === 'recycle' && routedCase3 === 'reduce';

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-lime-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('probe');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'probe'
              ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-md shadow-lime-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Trash2 className="w-4 h-4 text-lime-300" />
          <span>Toxic Metal Probe</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('pipeline3r');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'pipeline3r'
              ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-md shadow-lime-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Recycle className="w-4 h-4 text-emerald-300" />
          <span>3R Concept Router</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(600);
            setActiveTab('green');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'green'
              ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-md shadow-lime-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Leaf className="w-4 h-4 text-green-300" />
          <span>Green Computing</span>
        </button>
      </div>

      {/* Tab 1: Toxic Heavy Metal Probe */}
      {activeTab === 'probe' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Item Selector & Laser Probe */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-lime-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-lime-400" />
                Heavy Metal Electron Microscope Probe
              </h3>
              <span className="text-xs bg-lime-500/20 text-lime-300 px-2.5 py-1 rounded-full font-mono font-bold">
                E-Waste Sieve
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Select an electronic component to inspect its toxic heavy metal composition. Identify how improper landfill disposal harms human health and waterways.
            </p>

            {/* Waste Selection Grid */}
            <div className="grid grid-cols-3 gap-2">
              {EWASTE_ITEMS.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedWasteId === item.id;
                const isProbed = !!probedItems[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick(500);
                      setSelectedWasteId(item.id);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center text-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-lime-500/20 border-lime-400 text-white shadow-lg shadow-lime-500/20'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-6 h-6 text-lime-400" />
                    <span className="text-xs font-bold leading-tight">{item.name.split('(')[0]}</span>
                    {isProbed && <span className="text-[9px] text-emerald-400 font-mono">Probed ({item.symbol})</span>}
                  </button>
                );
              })}
            </div>

            {/* Active Component Inspection Chamber */}
            <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <currentItem.icon className="w-5 h-5 text-lime-400" />
                  <span>{currentItem.name}</span>
                </div>
                <button
                  onClick={() => handleScanMetal(currentItem.id)}
                  disabled={isProbing}
                  className="px-3 py-1.5 rounded-xl bg-lime-500 hover:bg-lime-600 disabled:opacity-50 text-slate-950 font-black text-xs transition-all shadow-md shadow-lime-500/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  {isProbing ? 'Analyzing...' : 'Probe Heavy Metals'}
                </button>
              </div>

              {/* Chemical Telemetry */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Identified Heavy Metal:</span>
                  <span className="text-sm font-black text-lime-300 font-mono bg-lime-950 px-2.5 py-0.5 rounded border border-lime-700">
                    {currentItem.toxicMetal} [{currentItem.symbol}]
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-slate-400 font-bold block">Biological Health Hazard (සෞඛ්‍ය හානිය):</span>
                  <p className="text-red-300 font-medium leading-relaxed bg-red-950/40 p-2.5 rounded-lg border border-red-500/30">
                    {currentItem.hazardEn}
                  </p>
                  <p className="text-amber-200/90 font-sinhala text-[11px] mt-1">
                    {currentItem.hazardSi}
                  </p>
                </div>

                <div className="text-[11px] text-slate-400 font-mono pt-1">
                  <b>Source in Hardware:</b> {currentItem.origin}
                </div>
              </div>
            </div>
          </div>

          {/* Textbook Table 6.2 Reference */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-lime-500/30 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  Toxic Heavy Metals in E-Waste (විභාග සාරාංශය)
                </h4>
                <span className="text-xs font-mono text-lime-400 font-bold">
                  Textbook Table 6.2
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-red-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-300 text-sm">1. Lead (Pb / ඊයම්)</span>
                    <span className="text-[10px] bg-red-950 text-red-200 px-2 py-0.5 rounded font-mono">
                      2021 P1 Q40
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Found in cathode ray tubes (CRT) and solder. Severe damage to central nervous system, kidney failure, and cognitive delays in children.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-sm">2. Mercury (Hg / රසදිය)</span>
                    <span className="text-[10px] bg-amber-950 text-amber-200 px-2 py-0.5 rounded font-mono">
                      Switches & Relays
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Found in flat panel backlights and sensor switches. Causes chronic neurological disorders and kidney damage through bioaccumulation.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-orange-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-300 text-sm">3. Cadmium (Cd / කැඩ්මියම්)</span>
                    <span className="text-[10px] bg-orange-950 text-orange-200 px-2 py-0.5 rounded font-mono">
                      Batteries & Chips
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Found in rechargeable Ni-Cd batteries and SMD resistors. Absorbed by bones causing severe fragility and renal damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 3R Concept Pipeline (2022 P2 Q06) */}
      {activeTab === 'pipeline3r' && (
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Recycle className="w-5 h-5 text-emerald-400" />
                The 3R Concept in E-Waste Management (2022 Paper II Q06(b))
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Route real-world cases to the correct 3R chute: <b>Reduce</b>, <b>Reuse</b>, or <b>Recycle</b>.
              </p>
            </div>
            <button
              onClick={handleReset3R}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Router
            </button>
          </div>

          {/* 3 Real-World Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Case 1: Functional Laptop */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <Laptop className="w-4 h-4 text-emerald-400" />
                <span>Case 1: 3-Year-Old Laptop</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A corporate office is upgrading laptops. The old laptops are completely functional. What is the best 3R action?
              </p>
              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    sound.playVictory();
                    setRoutedCase1('reuse');
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between cursor-pointer ${
                    routedCase1 === 'reuse'
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>1. Reuse (නැවත භාවිතය - Donate to school)</span>
                  {routedCase1 === 'reuse' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
                <button
                  onClick={() => {
                    sound.playError();
                    setRoutedCase1('recycle');
                  }}
                  className="w-full py-1.5 px-3 rounded-xl text-xs text-slate-500 bg-slate-900/50 border border-slate-800/40 text-left"
                >
                  2. Recycle (Melt in furnace)
                </button>
              </div>
            </div>

            {/* Case 2: Broken Motherboard */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Case 2: Dead Burnt Motherboard</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A motherboard suffered a power surge and is completely dead. How should precious Gold & Copper traces be recovered?
              </p>
              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    sound.playVictory();
                    setRoutedCase2('recycle');
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between cursor-pointer ${
                    routedCase2 === 'recycle'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>1. Recycle (ප්‍රතිචක්‍රීකරණය - E-waste facility)</span>
                  {routedCase2 === 'recycle' && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                </button>
                <button
                  onClick={() => {
                    sound.playError();
                    setRoutedCase2('reduce');
                  }}
                  className="w-full py-1.5 px-3 rounded-xl text-xs text-slate-500 bg-slate-900/50 border border-slate-800/40 text-left"
                >
                  2. Reduce (Keep in drawer)
                </button>
              </div>
            </div>

            {/* Case 3: Slow Computer */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Case 3: Slow 4GB RAM Computer</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Computer is slow. Instead of buying a new machine, the user upgrades RAM to 16GB & adds an SSD. Which 'R' is this?
              </p>
              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    sound.playVictory();
                    setRoutedCase3('reduce');
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between cursor-pointer ${
                    routedCase3 === 'reduce'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>1. Reduce (අඩු කිරීම - Minimize buying new PCs)</span>
                  {routedCase3 === 'reduce' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                </button>
                <button
                  onClick={() => {
                    sound.playError();
                    setRoutedCase3('reuse');
                  }}
                  className="w-full py-1.5 px-3 rounded-xl text-xs text-slate-500 bg-slate-900/50 border border-slate-800/40 text-left"
                >
                  2. Reuse (Give away without fixing)
                </button>
              </div>
            </div>
          </div>

          {is3RComplete && (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs font-bold text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                3R Management Matrix Mastered (100% Score)!
              </div>
              <p className="text-[11px] text-emerald-300 font-normal">
                Reduce purchases &rarr; Reuse functional machines &rarr; Recycle dead components safely.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Green Computing (2020 P1 Q38) */}
      {activeTab === 'green' && (
        <div className="bg-slate-900/80 border border-green-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              Green Computing Practices (හරිත පරිගණනය - 2020 Paper I Q38)
            </h3>
            <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-mono font-bold">
              Energy Efficiency
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Green Computing involves the environmentally responsible design, manufacturing, usage, and disposal of computers to minimize carbon footprints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interactive Sleep Mode Lever */}
            <div className="bg-slate-950/80 border border-green-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Power className="w-4 h-4 text-green-400" />
                  <span>1. Sleep Mode on Idle PCs (නිද්‍රා මාදිලිය)</span>
                </div>
                <button
                  onClick={() => {
                    sound.playVictory();
                    setIsSleepModeActive(!isSleepModeActive);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isSleepModeActive
                      ? 'bg-green-500 text-slate-950 border-green-400 font-black'
                      : 'bg-slate-800 text-green-300 border-green-500/40'
                  }`}
                >
                  {isSleepModeActive ? 'Sleep Mode Active' : 'Toggle Sleep Mode'}
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Active Power Consumption:</div>
                  <div className={`text-xl font-black font-mono transition-colors ${
                    isSleepModeActive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {isSleepModeActive ? '2 Watts (Eco Safe)' : '250 Watts (Full Load)'}
                  </div>
                </div>
                <span className="text-2xl">{isSleepModeActive ? '🌱' : '⚡'}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                • <b>O/L Exam Rule:</b> Enabling Sleep Mode or turning off monitors when away drastically reduces greenhouse gas emissions from power plants.
              </p>
            </div>

            {/* Paperless Office & Server Virtualization */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
                  <span>2. Paperless Office & Cloud Virtualization</span>
                </div>
                <button
                  onClick={() => {
                    sound.playVictory();
                    setIsPaperlessActive(!isPaperlessActive);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isPaperlessActive
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black'
                      : 'bg-slate-800 text-cyan-300 border-cyan-500/40'
                  }`}
                >
                  {isPaperlessActive ? 'Digital Only' : 'Enable Paperless'}
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Paper Consumption & Waste:</div>
                  <div className={`text-xl font-black font-mono transition-colors ${
                    isPaperlessActive ? 'text-cyan-400' : 'text-amber-400'
                  }`}>
                    {isPaperlessActive ? '0 Reams / Zero Waste' : '500 Reams / High Waste'}
                  </div>
                </div>
                <span className="text-2xl">{isPaperlessActive ? '📄' : '🖨️'}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                • Storing documents in PDF and using cloud server consolidation minimizes printer ink toxins and physical server room electricity.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
