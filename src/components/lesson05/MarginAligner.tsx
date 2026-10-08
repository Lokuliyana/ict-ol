'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify, 
  Sparkles, 
  CheckCircle2, 
  Sliders,
  Maximize2
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type AlignmentType = 'left' | 'center' | 'right' | 'justify';

export function MarginAligner() {
  const [alignment, setAlignment] = useState<AlignmentType>('justify');
  const [firstLineIndent, setFirstLineIndent] = useState<number>(24);
  const [hangingIndent, setHangingIndent] = useState<number>(0);
  const [lineSpacing, setLineSpacing] = useState<number>(1.5);

  const handleAlign = (type: AlignmentType) => {
    sound.playClick(type === 'justify' ? 850 : 650);
    setAlignment(type);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Controls */}
      <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 2: The Layout Architect</span>
              <span className="text-xs font-sinhala text-blue-400 font-normal">
                (පෙළගැස්වීම්, ඉන්ඩෙන්ට් සහ පේළි පරතරය)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Experiment with Justify expansion cushions ($Ctrl+J$), First Line vs. Hanging indents, and margin calipers.
            </p>
          </div>
        </div>

        {/* 4 Alignment Buttons */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto">
          <button
            onClick={() => handleAlign('left')}
            className={`p-2 rounded-lg transition-all flex items-center gap-1.5 ${
              alignment === 'left' ? 'bg-blue-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Align Left (Ctrl + L)"
          >
            <AlignLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Left (Ctrl+L)</span>
          </button>
          <button
            onClick={() => handleAlign('center')}
            className={`p-2 rounded-lg transition-all flex items-center gap-1.5 ${
              alignment === 'center' ? 'bg-blue-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Center (Ctrl + E) - 2020 O/L Past Paper"
          >
            <AlignCenter className="w-4 h-4" />
            <span className="hidden sm:inline">Center (Ctrl+E)</span>
          </button>
          <button
            onClick={() => handleAlign('right')}
            className={`p-2 rounded-lg transition-all flex items-center gap-1.5 ${
              alignment === 'right' ? 'bg-blue-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Align Right (Ctrl + R)"
          >
            <AlignRight className="w-4 h-4" />
            <span className="hidden sm:inline">Right (Ctrl+R)</span>
          </button>
          <button
            onClick={() => handleAlign('justify')}
            className={`p-2 rounded-lg transition-all flex items-center gap-1.5 ${
              alignment === 'justify' ? 'bg-blue-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Justify (Ctrl + J) - 2023 O/L Past Paper"
          >
            <AlignJustify className="w-4 h-4" />
            <span className="hidden sm:inline">Justify (Ctrl+J)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Work Area: Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Live Page Canvas with Ruler and Cushion Animation (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[460px]">
          
          {/* Top Ruler Bar */}
          <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>INTERACTIVE HORIZONTAL RULER (සමාන්තර පරිමාණය)</span>
              </span>
              <span>1 inch / 2.54 cm increments</span>
            </div>

            {/* Ruler Markings */}
            <div className="relative h-6 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between px-3 text-[9px] font-mono text-slate-500 select-none">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>

              {/* Draggable-like Slider for First Line Indent */}
              <div 
                className="absolute top-0 w-3 h-3 bg-blue-500 text-slate-950 rounded-full cursor-pointer shadow-[0_0_8px_#3b82f6] -translate-x-1/2"
                style={{ left: `${Math.min(90, Math.max(10, (firstLineIndent / 48) * 100))}%` }}
                title="First Line Indent Marker"
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono">First Line Indent:</span>
                <input 
                  type="range" 
                  min="0" 
                  max="48" 
                  value={firstLineIndent} 
                  onChange={(e) => setFirstLineIndent(Number(e.target.value))}
                  className="w-24 accent-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono">Hanging Indent:</span>
                <input 
                  type="range" 
                  min="0" 
                  max="36" 
                  value={hangingIndent} 
                  onChange={(e) => setHangingIndent(Number(e.target.value))}
                  className="w-24 accent-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Central Animated Document Sheet */}
          <div className="relative z-10 my-auto py-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4 max-w-lg mx-auto">
              
              {/* Document Title */}
              <div 
                className={`font-serif text-lg font-bold transition-all text-slate-900 dark:text-white ${
                  alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'
                }`}
              >
                Grade 10 Information & Communication Technology
              </div>

              {/* Date / Author Line */}
              <div 
                className={`text-xs font-mono text-slate-500 dark:text-slate-400 transition-all ${
                  alignment === 'right' ? 'text-right' : alignment === 'center' ? 'text-center' : 'text-left'
                }`}
              >
                Published: 2026-10-07 • Sri Lankan National Curriculum
              </div>

              {/* Body Paragraph with Dynamic Indentation & Justification */}
              <div 
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif space-y-2 pt-2"
                style={{
                  textAlign: alignment === 'justify' ? 'justify' : alignment,
                  lineHeight: lineSpacing
                }}
              >
                <p style={{ textIndent: `${firstLineIndent}px`, paddingLeft: `${hangingIndent}px` }}>
                  Word processing software allows users to create, edit, format, and print digital documents efficiently. Unlike traditional mechanical typewriters, modern word processors provide real-time spelling correction, custom paragraph alignments, dynamic table construction, and automated mail merge facilities.
                </p>

                <p style={{ paddingLeft: `${hangingIndent}px` }}>
                  In formal publications and examination papers, justify alignment ensures that both the left and right margins form clean, straight vertical edges by mathematically distributing microscopic space between words.
                </p>
              </div>

            </div>
          </div>

          {/* Canvas Bottom Status */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Alignment Mode: <strong className="text-blue-400 uppercase">{alignment}</strong></span>
            <span className="text-blue-400">O/L §6.2 Paragraph Layout</span>
          </div>

        </div>

        {/* Right Side: Alignment Guide & Past Paper Rules (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Alignment Reference Deck</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Shortcuts
              </span>
            </div>

            {/* 4 Alignment Spec Cards */}
            <div className="space-y-2.5 text-xs">
              <div 
                onClick={() => handleAlign('left')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  alignment === 'left' ? 'bg-blue-500/20 border-blue-500 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>1. Align Left (වම් පෙළගැස්ම):</span>
                  <code className="font-mono bg-slate-900 px-2 py-0.5 rounded text-blue-300">Ctrl + L</code>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  Flush on left margin, ragged on right. Default for general body paragraphs.
                </p>
              </div>

              <div 
                onClick={() => handleAlign('center')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  alignment === 'center' ? 'bg-blue-500/20 border-blue-500 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>2. Center (මධ්‍ය පෙළගැස්ම):</span>
                  <code className="font-mono bg-slate-900 px-2 py-0.5 rounded text-blue-300">Ctrl + E</code>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  Centered horizontally. Standard for titles, cover pages, and certificates. (Tested: 2020 O/L P1 Q05).
                </p>
              </div>

              <div 
                onClick={() => handleAlign('right')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  alignment === 'right' ? 'bg-blue-500/20 border-blue-500 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>3. Align Right (දකුණු පෙළගැස්ම):</span>
                  <code className="font-mono bg-slate-900 px-2 py-0.5 rounded text-blue-300">Ctrl + R</code>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  Flush on right margin. Ideal for letter dates, sender headers, and signatures.
                </p>
              </div>

              <div 
                onClick={() => handleAlign('justify')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  alignment === 'justify' ? 'bg-blue-500/20 border-blue-500 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>4. Justify (දෙපස පෙළගැස්ම):</span>
                  <code className="font-mono bg-slate-900 px-2 py-0.5 rounded text-blue-300">Ctrl + J</code>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  Distributes spacing evenly so both left and right edges form neat vertical lines. (Tested: 2023 O/L P1 Q06).
                </p>
              </div>
            </div>

            {/* Line Spacing Slider */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300">Line Spacing (පේළි පරතරය):</span>
              <div className="flex gap-1.5">
                {[1.0, 1.15, 1.5, 2.0].map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      sound.playClick(500);
                      setLineSpacing(s);
                    }}
                    className={`px-2 py-1 rounded font-mono text-[11px] ${
                      lineSpacing === s ? 'bg-blue-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {s.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
            <strong>O/L Trap Alert:</strong> Do not confuse <code className="bg-slate-900 px-1 py-0.5 rounded text-white">Ctrl + C</code> (Copy) with <code className="bg-slate-900 px-1 py-0.5 rounded text-white">Ctrl + E</code> (Center Align)!
          </div>
        </div>

      </div>
    </div>
  );
}
