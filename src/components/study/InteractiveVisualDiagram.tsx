'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  HardDrive, 
  ArrowRight, 
  Zap, 
  Eye, 
  Code2, 
  Database,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface InteractiveVisualDiagramProps {
  titleEn: string;
  titleSi: string;
  rawContentEn: string;
  rawContentSi: string;
}

export function InteractiveVisualDiagram({
  titleEn,
  titleSi,
  rawContentEn,
  rawContentSi
}: InteractiveVisualDiagramProps) {
  const [showRaw, setShowRaw] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // 1. Check if this is the Standard Flowchart Symbols table
  const isFlowchartSymbols = rawContentEn.includes('Terminal') && rawContentEn.includes('Parallelogram');

  // 2. Check if this is Computer Memory Hierarchy
  const isMemoryHierarchy = rawContentEn.includes('Computer Memory') || (rawContentEn.includes('Primary Memory') && rawContentEn.includes('Secondary Storage'));

  // 3. Check if this is Language Translators
  const isTranslators = rawContentEn.includes('Language Translators') || (rawContentEn.includes('Assembler') && rawContentEn.includes('Compiler') && rawContentEn.includes('Interpreter'));

  // 4. Check if this is Software Hierarchy
  const isSoftwareHierarchy = rawContentEn.includes('Software') && rawContentEn.includes('System Software') && rawContentEn.includes('Application Software');

  // 5. Check if this is a Pseudocode / Code Block
  const isCodeSnippet = rawContentEn.includes('BEGIN') || rawContentEn.includes('program ') || rawContentEn.includes('while ') || rawContentEn.includes('for i :=');

  // RENDER 1: FLOWCHART SYMBOLS VISUAL SVG COMPONENT
  if (isFlowchartSymbols) {
    const symbols = [
      {
        nameEn: 'Terminal (Start / Stop)',
        nameSi: 'ප්‍රාරම්භය / අන්තය (ආරම්භය / අවසානය)',
        shape: 'Oval / Rounded Rectangle',
        svgType: 'oval',
        rule: 'Marks the START (1 exit line) and STOP/END (1 entry line).',
        ruleSi: 'ආරම්භයේදී 1 පිටවීම් ඊතලයක්ද, අවසානයේදී 1 ඇතුළුවීම් ඊතලයක්ද ඇත.',
        color: 'from-amber-500 to-amber-600',
        borderColor: 'border-amber-400'
      },
      {
        nameEn: 'Input / Output (I/O)',
        nameSi: 'ආදාන / ප්‍රතිදාන (දත්ත ලබාගැනීම / පෙන්වීම)',
        shape: 'Parallelogram (සමාන්තරාස්‍රය)',
        svgType: 'parallelogram',
        rule: 'READ / INPUT variable; PRINT / DISPLAY result.',
        ruleSi: 'READ Mark, PRINT Total වැනි දත්ත ගැනීම හෝ ප්‍රතිදානය පෙන්වීම.',
        color: 'from-blue-500 to-indigo-600',
        borderColor: 'border-blue-400'
      },
      {
        nameEn: 'Process (Calculation / Assignment)',
        nameSi: 'ක්‍රියාවලිය (ගණනය කිරීම් / අගයන් පැවරුම)',
        shape: 'Rectangle (සෘජුකෝණාස්‍රය)',
        svgType: 'rect',
        rule: 'Calculations, data assignments (e.g. Sum = Sum + 1, Count = 0).',
        ruleSi: 'ගණනය කිරීම් හෝ විචල්‍යයන්ට අගයන් පැවරීම (Sum = 0, Avg = Total / 5).',
        color: 'from-emerald-500 to-teal-600',
        borderColor: 'border-emerald-400'
      },
      {
        nameEn: 'Decision (Condition Check)',
        nameSi: 'තීරණය (කොන්දේසි පරීක්ෂාව)',
        shape: 'Diamond / Rhombus (රොම්බසය)',
        svgType: 'diamond',
        rule: 'Strictly 1 entry line and exactly 2 exit lines labeled True and False.',
        ruleSi: 'නිරන්තරයෙන්ම 1 ඇතුළුවීමක් සහ True / False ලේබල් කළ පිටවීම් 2ක් පමණි.',
        color: 'from-rose-500 to-pink-600',
        borderColor: 'border-rose-400'
      },
      {
        nameEn: 'Connector (Page / Loop Linker)',
        nameSi: 'සම්බන්ධකය (විවිධ කොටස් යා කිරීම)',
        shape: 'Small Circle (කුඩා වෘත්තය)',
        svgType: 'circle',
        rule: 'Connects multiple intersecting flow lines without messy crossings.',
        ruleSi: 'ගැලීම් රේඛා පැටලීමකින් තොරව එක් ස්ථානයකින් තවත් තැනකට යා කරයි.',
        color: 'from-purple-500 to-violet-600',
        borderColor: 'border-purple-400'
      },
      {
        nameEn: 'Flow Line (Execution Direction)',
        nameSi: 'ගැලීම් රේඛාව (දිශාව පෙන්වන ඊතලය)',
        shape: 'Arrowed Line (ඊතල රේඛාව)',
        svgType: 'arrow',
        rule: 'Shows the exact direction of logic execution flow.',
        ruleSi: 'ක්‍රියාත්මක වීමේ නිවැරදි දිශාව ඉහළ සිට පහළට හෝ වමට/දකුණට පෙන්වයි.',
        color: 'from-cyan-500 to-blue-600',
        borderColor: 'border-cyan-400'
      }
    ];

    return (
      <div className="rounded-2xl border-2 border-indigo-500/30 bg-slate-900/95 text-white p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30">
              <Zap className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-black text-white">Interactive Flowchart Symbols Standard (Figure 1.3)</h4>
              <p className="text-xs text-indigo-300 font-sinhala">විභාග සම්මත ගැලීම් සටහන් සංකේත පද්ධතිය</p>
            </div>
          </div>
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            {showRaw ? 'Show Visual Diagram' : 'Show Raw ASCII'}
          </button>
        </div>

        {showRaw ? (
          <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre-wrap">
            {rawContentEn}
          </pre>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {symbols.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => sound.playClick(600 + idx * 40)}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400 transition-all flex flex-col items-center text-center space-y-3 cursor-pointer group"
              >
                {/* SVG Geometric Visual Shape */}
                <div className="h-20 w-full flex items-center justify-center py-2">
                  {s.svgType === 'oval' && (
                    <svg className="w-36 h-12" viewBox="0 0 144 48">
                      <rect x="4" y="4" width="136" height="40" rx="20" fill="url(#amber-grad)" stroke="#f59e0b" strokeWidth="2.5" />
                      <text x="72" y="28" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">START / STOP</text>
                      <defs>
                        <linearGradient id="amber-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#d97706" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {s.svgType === 'parallelogram' && (
                    <svg className="w-36 h-12" viewBox="0 0 144 48">
                      <polygon points="24,4 140,4 120,44 4,44" fill="url(#blue-grad)" stroke="#3b82f6" strokeWidth="2.5" />
                      <text x="72" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">READ / PRINT</text>
                      <defs>
                        <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {s.svgType === 'rect' && (
                    <svg className="w-36 h-12" viewBox="0 0 144 48">
                      <rect x="4" y="4" width="136" height="40" rx="4" fill="url(#emerald-grad)" stroke="#10b981" strokeWidth="2.5" />
                      <text x="72" y="28" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">PROCESS</text>
                      <defs>
                        <linearGradient id="emerald-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {s.svgType === 'diamond' && (
                    <svg className="w-36 h-16" viewBox="0 0 144 64">
                      <polygon points="72,4 140,32 72,60 4,32" fill="url(#rose-grad)" stroke="#f43f5e" strokeWidth="2.5" />
                      <text x="72" y="36" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">IS Mark &gt;= 50?</text>
                      <defs>
                        <linearGradient id="rose-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#e11d48" />
                          <stop offset="100%" stopColor="#be123c" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {s.svgType === 'circle' && (
                    <svg className="w-16 h-16" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r="26" fill="url(#purple-grad)" stroke="#a855f7" strokeWidth="2.5" />
                      <text x="32" y="37" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">A</text>
                      <defs>
                        <linearGradient id="purple-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#6d28d9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  {s.svgType === 'arrow' && (
                    <svg className="w-32 h-10" viewBox="0 0 128 40">
                      <line x1="8" y1="20" x2="108" y2="20" stroke="#06b6d4" strokeWidth="4" />
                      <polygon points="104,12 124,20 104,28" fill="#06b6d4" />
                    </svg>
                  )}
                </div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-xs text-white group-hover:text-amber-400 transition-colors">
                    {s.nameEn}
                  </h5>
                  <p className="text-[11px] text-slate-300 font-sinhala">
                    {s.nameSi}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-black/40 border border-slate-700/60 text-[10px] text-slate-300 text-left w-full space-y-1">
                  <p className="font-mono text-amber-300">⚠️ {s.rule}</p>
                  <p className="font-sinhala text-slate-400">{s.ruleSi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // RENDER 2: COMPUTER MEMORY HIERARCHY
  if (isMemoryHierarchy) {
    const memoryLayers = [
      {
        name: 'CPU Registers',
        siName: 'රෙජිස්තර (Registers)',
        location: 'Inside CPU Core',
        capacity: 'Smallest (Bytes / Bits)',
        speed: 'Fastest (Nanoseconds)',
        cost: 'Highest Cost per Bit',
        color: 'from-amber-500 to-amber-600',
        textColor: 'text-amber-300'
      },
      {
        name: 'Cache Memory (L1, L2, L3)',
        siName: 'වාරික මතකය (Cache Memory)',
        location: 'Directly on CPU Silicon',
        capacity: 'Megabytes (MB)',
        speed: 'Ultra Fast (Acts as Mediator)',
        cost: 'Very Expensive',
        color: 'from-purple-500 to-indigo-600',
        textColor: 'text-purple-300'
      },
      {
        name: 'Primary Memory (RAM & ROM)',
        siName: 'ප්‍රධාන මතකය (RAM & ROM)',
        location: 'Motherboard Slots',
        capacity: 'Gigabytes (4GB - 64GB)',
        speed: 'Fast Bus Speed',
        cost: 'Moderate Cost',
        color: 'from-blue-500 to-cyan-600',
        textColor: 'text-blue-300'
      },
      {
        name: 'Secondary Storage (SSD, HDD, Optical)',
        siName: 'ද්විතියික මතකය (SSD / HDD)',
        location: 'SATA / NVMe Bus',
        capacity: 'Largest (Terabytes - TB)',
        speed: 'Slowest Access Speed',
        cost: 'Lowest Cost per Bit',
        color: 'from-emerald-500 to-teal-700',
        textColor: 'text-emerald-300'
      }
    ];

    return (
      <div className="rounded-2xl border-2 border-indigo-500/30 bg-slate-900/95 text-white p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-black text-white">Interactive Computer Memory Pyramid Hierarchy</h4>
              <p className="text-xs text-indigo-300 font-sinhala">පරිගණක මතක ධූරාවලිය සහ වේගය/ධාරිතාව සංසන්දනය</p>
            </div>
          </div>
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            {showRaw ? 'Show Visual Diagram' : 'Show Raw ASCII'}
          </button>
        </div>

        {showRaw ? (
          <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre-wrap">
            {rawContentEn}
          </pre>
        ) : (
          <div className="space-y-3">
            {/* Pyramid Visual */}
            <div className="flex flex-col items-center gap-2 py-3">
              {memoryLayers.map((layer, idx) => {
                const widthPercent = 40 + idx * 20; // 40%, 60%, 80%, 100%
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      sound.playClick(650 - idx * 40);
                      setActiveStep(idx);
                    }}
                    style={{ width: `${widthPercent}%` }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${layer.color} text-white cursor-pointer shadow-lg border border-white/20 transition-all text-center flex items-center justify-between px-4`}
                  >
                    <div className="text-left">
                      <div className="font-black text-xs sm:text-sm">{layer.name}</div>
                      <div className="text-[10px] text-white/90 font-sinhala">{layer.siName}</div>
                    </div>
                    <div className="text-right text-[10px] font-mono opacity-90 hidden sm:block">
                      <span>{layer.speed}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Indicator Bars */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
                <span className="font-mono text-amber-400 font-bold">▲ Speed & Cost</span>
                <span className="text-slate-400 font-mono text-[11px]">Increases going UP</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-bold">▼ Capacity</span>
                <span className="text-slate-400 font-mono text-[11px]">Increases going DOWN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // RENDER 3: TRANSLATORS ARCHITECTURE (Assembler, Compiler, Interpreter)
  if (isTranslators) {
    const translators = [
      {
        name: 'Assembler (ඇසෙම්බ්ලරය)',
        source: 'Assembly Language (Mnemonics: ADD, SUB, MOV)',
        target: 'Binary Machine Code (0s & 1s)',
        speed: 'Direct conversion',
        execution: 'Converts mnemonics directly into machine code for execution.'
      },
      {
        name: 'Compiler (කම්පයිලරය)',
        source: 'High-Level Code (Pascal, C++, Java)',
        target: 'Machine Code Object File (.exe)',
        speed: 'Translates ALL AT ONCE',
        execution: 'Scans full code first, produces standalone object file. Execution is very fast.'
      },
      {
        name: 'Interpreter (අන්තර්භාෂකය)',
        source: 'High-Level Code (Python, JavaScript)',
        target: 'Line-by-line Machine Code',
        speed: 'Translates LINE-BY-LINE',
        execution: 'Reads and executes instruction line-by-line. Stops immediately at first error.'
      }
    ];

    return (
      <div className="rounded-2xl border-2 border-indigo-500/30 bg-slate-900/95 text-white p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30">
              <Cpu className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-black text-white">Language Translators Comparison Architecture</h4>
              <p className="text-xs text-indigo-300 font-sinhala">භාෂා පරිවර්තක: ඇසෙම්බ්ලරය, කම්පයිලරය සහ අන්තර්භාෂකය</p>
            </div>
          </div>
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            {showRaw ? 'Show Visual Diagram' : 'Show Raw ASCII'}
          </button>
        </div>

        {showRaw ? (
          <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre-wrap">
            {rawContentEn}
          </pre>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {translators.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-indigo-400 transition-all space-y-3"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-slate-700">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h5 className="font-black text-xs text-white">{t.name}</h5>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-black/40 border border-slate-700/60">
                    <span className="text-[10px] font-mono text-indigo-400 block">SOURCE CODE:</span>
                    <span className="text-slate-200 font-medium">{t.source}</span>
                  </div>
                  <div className="flex justify-center text-slate-500">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                  <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                    <span className="text-[10px] font-mono text-emerald-400 block">TRANSLATION MODE:</span>
                    <span className="font-bold">{t.speed}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                    {t.execution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // RENDER 4: CODE SNIPPET HIGHLIGHTER
  if (isCodeSnippet) {
    return (
      <div className="rounded-2xl border-2 border-indigo-500/30 bg-slate-900/95 text-white p-4 space-y-3 shadow-xl">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>ALGORITHM / PASCAL CODE BLOCK</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Verbatim Textbook Specification</span>
        </div>
        <pre className="p-4 rounded-xl bg-black/80 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-800">
          {rawContentEn}
        </pre>
      </div>
    );
  }

  // DEFAULT RENDER FOR OTHER SCHEMATICS
  return (
    <div className="p-4 rounded-xl bg-slate-850 border border-slate-700 text-xs space-y-2 shadow-sm">
      <div className="flex items-center justify-between text-indigo-400 font-bold font-mono">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" />
          {titleEn}
        </span>
        {titleSi && <span className="text-slate-400 font-sinhala">{titleSi}</span>}
      </div>
      <pre className="p-3 rounded-lg bg-black/60 font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap border border-slate-800">
        {rawContentEn}
      </pre>
    </div>
  );
}
