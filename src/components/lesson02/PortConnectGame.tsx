'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tv, 
  Monitor, 
  Wifi, 
  Cable, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  Printer, 
  FileText, 
  Scan, 
  PenTool, 
  RotateCcw,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface CablePort {
  id: string;
  name: string;
  pins: string;
  targetPortId: string;
  color: string;
  description: string;
}

const CABLES: CablePort[] = [
  { id: 'vga_cable', name: 'Blue 15-Pin D-Sub Cable', pins: '15 analog pins in 3 rows', targetPortId: 'vga', color: 'bg-blue-600', description: 'Transmits analog video signal to older monitors/projectors' },
  { id: 'hdmi_cable', name: 'Gold-Pinned HDMI Cable', pins: '19-pin digital interface', targetPortId: 'hdmi', color: 'bg-amber-600', description: 'Carries uncompressed digital high-definition video AND multi-channel audio' },
  { id: 'usb_cable', name: 'Rectangular Type-A USB Plug', pins: '4-pin universal serial bus', targetPortId: 'usb', color: 'bg-slate-700', description: 'Connects keyboards, mice, flash drives, and printers' },
  { id: 'rj45_cable', name: '8-Pin Modular Network Cable (RJ-45)', pins: '8-pin Ethernet twisted pair', targetPortId: 'rj45', color: 'bg-emerald-600', description: 'Connects the computer to high-speed Local Area Networks (LAN) & Internet' },
];

const PORTS = [
  { id: 'vga', name: 'VGA Port (Blue)', shape: '15-Hole Trapezoid', type: 'Analog Video Only' },
  { id: 'hdmi', name: 'HDMI Port', shape: 'Thin Gold Slot', type: 'Digital Audio + Video' },
  { id: 'usb', name: 'USB Port', shape: 'Rectangular Socket', type: 'Universal Serial Bus' },
  { id: 'rj45', name: 'RJ-45 Port', shape: 'Square with Top Clip Slot', type: 'Ethernet Network' },
];

interface PeripheralItem {
  id: string;
  name: string;
  sinhala: string;
  category: 'input' | 'output_soft' | 'output_hard';
  categoryLabel: string;
  examApplication: string;
}

const PERIPHERALS: PeripheralItem[] = [
  { id: 'p1', name: 'Plotter', sinhala: 'ප්ලොටරය', category: 'output_hard', categoryLabel: 'Hard Copy Output', examApplication: 'Printing large architectural building blueprints and engineering schematics.' },
  { id: 'p2', name: 'MICR (Magnetic Ink Character Reader)', sinhala: 'චුම්භක තීන්ත අක්ෂර කියවනය', category: 'input', categoryLabel: 'Input Device', examApplication: 'Processing and clearing commercial bank cheques quickly and fraud-free.' },
  { id: 'p3', name: 'OMR (Optical Mark Reader)', sinhala: 'ප්‍රකාශ සලකුණු කියවනය', category: 'input', categoryLabel: 'Input Device', examApplication: 'Automated grading of National O/L Examination multiple-choice MCQ answer sheets.' },
  { id: 'p4', name: 'Thermal Printer', sinhala: 'තාප මුද්‍රණ යන්ත්‍රය', category: 'output_hard', categoryLabel: 'Hard Copy Output', examApplication: 'Printing heat-sensitive receipts at ATM machines and Supermarket POS terminals.' },
  { id: 'p5', name: 'Multimedia Projector', sinhala: 'බහුමාධ්‍ය ප්‍රක්ෂේපකය', category: 'output_soft', categoryLabel: 'Soft Copy Output', examApplication: 'Projecting visual computer presentations onto a large classroom screen.' },
  { id: 'p6', name: 'OCR (Optical Character Recognition)', sinhala: 'ප්‍රකාශ අක්ෂර හඳුනාගැනීම', category: 'input', categoryLabel: 'Input Device', examApplication: 'Converting scanned physical printed book pages into editable digital text documents.' },
];

export function PortConnectGame() {
  const [activeTab, setActiveTab] = useState<'ports' | 'peripherals'>('ports');
  
  // Cable match state
  const [selectedCable, setSelectedCable] = useState<CablePort | null>(CABLES[0]);
  const [connectedPorts, setConnectedPorts] = useState<Record<string, string>>({});
  const [portMismatch, setPortMismatch] = useState<string | null>(null);

  // Peripheral sorting state
  const [peripheralIndex, setPeripheralIndex] = useState(0);
  const [peripheralScore, setPeripheralScore] = useState(0);
  const [peripheralFeedback, setPeripheralFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const curPeripheral = peripheralIndex < PERIPHERALS.length ? PERIPHERALS[peripheralIndex] : null;

  const handlePortPlug = (portId: string) => {
    if (!selectedCable) return;

    if (selectedCable.targetPortId === portId) {
      sound.playSnap();
      setConnectedPorts((prev) => ({ ...prev, [portId]: selectedCable.id }));
      setPortMismatch(null);
      if (Object.keys(connectedPorts).length === 3) sound.playSuccessDing();
    } else {
      sound.playBuzzer();
      setPortMismatch(`⚠️ Pin Mismatch! You tried to plug "${selectedCable.name}" into the "${portId.toUpperCase()}" socket!`);
      setTimeout(() => setPortMismatch(null), 2500);
    }
  };

  const resetPorts = () => {
    sound.playClick();
    setConnectedPorts({});
    setPortMismatch(null);
    setSelectedCable(CABLES[0]);
  };

  const handleClassifyPeripheral = (cat: 'input' | 'output_soft' | 'output_hard') => {
    if (!curPeripheral) return;

    const isCorrect = curPeripheral.category === cat;
    if (isCorrect) {
      sound.playSuccessDing();
      setPeripheralScore((s) => s + 15);
      setPeripheralFeedback({
        isCorrect: true,
        text: `✅ Correct! "${curPeripheral.name}" is ${curPeripheral.categoryLabel}. Application: ${curPeripheral.examApplication}`,
      });
    } else {
      sound.playBuzzer();
      setPeripheralFeedback({
        isCorrect: false,
        text: `❌ Incorrect. "${curPeripheral.name}" belongs to ${curPeripheral.categoryLabel}. Application: ${curPeripheral.examApplication}`,
      });
    }

    setPeripheralIndex((prev) => prev + 1);
  };

  const resetPeripherals = () => {
    sound.playClick();
    setPeripheralIndex(0);
    setPeripheralScore(0);
    setPeripheralFeedback(null);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Cable className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 5: The PC Builder Workbench
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono">
                Ports & Peripherals
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              පරිගණක පිටුපස පුවරුවේ තොට (Ports) සහ ආදාන/ප්‍රතිදාන පර්යන්ත උපාංග වර්ගීකරණය
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('ports');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'ports'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔌 Speed Cable Matcher
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('peripherals');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'peripherals'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🖨️ Peripheral Sorter (MICR/OMR/Plotter)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. SPEED CABLE MATCHER */}
      {/* ========================================================================= */}
      {activeTab === 'ports' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Motherboard Back Panel with Sockets */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                Motherboard Rear I/O Shield Ports
              </span>
              <button onClick={resetPorts} className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Reset Plugs
              </button>
            </div>

            {/* Rear I/O Panel Graphic */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-600 space-y-4">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center">
                System I/O Backplate
              </div>

              {/* 4 Port Sockets */}
              <div className="grid grid-cols-2 gap-3">
                {PORTS.map((port) => {
                  const isPlugged = Boolean(connectedPorts[port.id]);

                  return (
                    <button
                      key={port.id}
                      onClick={() => handlePortPlug(port.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isPlugged
                          ? 'bg-emerald-950/80 border-emerald-400 shadow-[0_0_15px_#10b981]'
                          : 'bg-black/60 border-slate-700 hover:border-indigo-400'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs font-bold text-white uppercase">
                          {port.name}
                        </span>
                        {isPlugged && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">{port.shape}</div>
                      <div className="text-[9px] font-mono text-cyan-400 mt-2">{port.type}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mismatch Alert Banner */}
            {portMismatch && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-xs rounded-xl">
                {portMismatch}
              </motion.div>
            )}
          </div>

          {/* Right: Cable Selection Rack */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Select Cable to Plug in:</span>
            </h4>

            <div className="space-y-2.5">
              {CABLES.map((cable) => {
                const isSelected = selectedCable?.id === cable.id;

                return (
                  <button
                    key={cable.id}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCable(cable);
                    }}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-bold shadow-md'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{cable.name}</span>
                      <span className="text-[10px] font-mono opacity-75">{cable.pins}</span>
                    </div>
                    <p className="text-[11px] opacity-80 mt-1 font-normal">{cable.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. PERIPHERAL SORTER (MICR / OMR / PLOTTER) */}
      {/* ========================================================================= */}
      {activeTab === 'peripherals' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px]">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-300">
                Specialized Peripheral Classification
              </span>
              <span className="text-xs font-mono text-emerald-400">Score: {peripheralScore} XP</span>
            </div>

            {/* Active Peripheral Specimen */}
            <div className="my-6 flex justify-center">
              <AnimatePresence mode="wait">
                {curPeripheral ? (
                  <motion.div
                    key={curPeripheral.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 border-2 border-indigo-400 text-center max-w-sm w-full space-y-2 shadow-2xl"
                  >
                    <div className="text-[10px] font-mono text-indigo-300 uppercase">SPECIMEN TO SORT</div>
                    <div className="text-xl font-black text-white font-mono">{curPeripheral.name}</div>
                    <p className="text-xs text-indigo-200/80 font-sinhala">{curPeripheral.sinhala}</p>
                    <p className="text-xs text-slate-300 mt-2">{curPeripheral.examApplication}</p>
                  </motion.div>
                ) : (
                  <div className="text-center space-y-3 p-6 bg-emerald-950/60 rounded-2xl border border-emerald-500">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <div className="text-base font-bold text-white">All Peripherals Classified!</div>
                    <p className="text-xs text-slate-300">Final Score: {peripheralScore} XP</p>
                    <button
                      onClick={resetPeripherals}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all"
                    >
                      Restart Sorter
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* 3 Target Category Sorter Trays */}
            {curPeripheral && (
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleClassifyPeripheral('input')}
                  className="p-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs text-center transition-all"
                >
                  <div>Input Device</div>
                  <div className="text-[10px] font-sinhala opacity-75">ආදාන උපාංග</div>
                </button>

                <button
                  onClick={() => handleClassifyPeripheral('output_soft')}
                  className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold text-xs text-center transition-all"
                >
                  <div>Soft Copy Output</div>
                  <div className="text-[10px] font-sinhala opacity-75">මෘදු පිටපත්</div>
                </button>

                <button
                  onClick={() => handleClassifyPeripheral('output_hard')}
                  className="p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs text-center transition-all"
                >
                  <div>Hard Copy Output</div>
                  <div className="text-[10px] font-sinhala opacity-75">දෘඪ පිටපත්</div>
                </button>
              </div>
            )}
          </div>

          {/* Right Explanation */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>O/L Exam Focus: Special Peripherals</span>
            </h4>

            {peripheralFeedback ? (
              <div
                className={`p-3.5 rounded-xl text-xs ${
                  peripheralFeedback.isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-300'
                    : 'bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 border border-red-300'
                }`}
              >
                {peripheralFeedback.text}
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-500">
                Sort the active peripheral into <strong>Input</strong>, <strong>Soft Copy Output</strong>, or <strong>Hard Copy Output</strong>.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
