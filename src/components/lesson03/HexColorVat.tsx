'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pipette, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Eye,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

const TEXTBOOK_PRESETS = [
  { name: 'Dark Purple (පෙළපොත)', r: 135, g: 31, b: 120, hex: '#871F78' },
  { name: 'Sky Blue (පෙළපොත)', r: 50, g: 153, b: 204, hex: '#3299CC' },
  { name: 'Pure Yellow (පෙළපොත)', r: 255, g: 238, b: 0, hex: '#FFEE00' },
  { name: 'Pure Green Swatch', r: 0, g: 255, b: 0, hex: '#00FF00' },
];

export function HexColorVat() {
  const [red, setRed] = useState(135);
  const [green, setGreen] = useState(31);
  const [blue, setBlue] = useState(120);
  const [activeTab, setActiveTab] = useState<'mixer' | 'reverse'>('mixer');

  // Reverse challenge target
  const [targetIdx, setTargetIdx] = useState(3);

  // Compute hex channel strings
  const rHex = red.toString(16).padStart(2, '0').toUpperCase();
  const gHex = green.toString(16).padStart(2, '0').toUpperCase();
  const bHex = blue.toString(16).padStart(2, '0').toUpperCase();
  const fullHexCode = `#${rHex}${gHex}${bHex}`;

  // Division breakdown math
  const rDiv = Math.floor(red / 16);
  const rRem = red % 16;
  const gDiv = Math.floor(green / 16);
  const gRem = green % 16;
  const bDiv = Math.floor(blue / 16);
  const bRem = blue % 16;

  const hexDigit = (n: number) => (n < 10 ? `${n}` : String.fromCharCode(55 + n));

  const handleSliderChange = (color: 'r' | 'g' | 'b', val: number) => {
    sound.playClick(300 + val);
    if (color === 'r') setRed(val);
    if (color === 'g') setGreen(val);
    if (color === 'b') setBlue(val);
  };

  const loadPreset = (preset: typeof TEXTBOOK_PRESETS[0]) => {
    sound.playSuccessDing();
    setRed(preset.r);
    setGreen(preset.g);
    setBlue(preset.b);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-fuchsia-600/30 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-400">
            <Pipette className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 3: The Hex Color Vat
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/30 font-mono">
                RGB ➔ #RRGGBB
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ඩිජිටල් වර්ණ සංකලනය (Red, Green, Blue) ෂඩ්දශමය කේතයක් (#RRGGBB) බවට හැරවීම
            </p>
          </div>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400">Textbook Examples:</span>
          {TEXTBOOK_PRESETS.map((p) => (
            <button
              key={p.hex}
              onClick={() => loadPreset(p)}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-mono font-bold transition-all border border-slate-200 dark:border-slate-700"
            >
              {p.name} ({p.hex})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* LEFT: COLOR MIXING FLASK & DIVISION PIPELINE */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5 flex flex-col justify-between min-h-[440px]">
          <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
            <span className="text-xs font-mono uppercase text-fuchsia-300">
              Active Flask RGB Liquid Synthesizer
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold">
              RGB({red}, {green}, {blue})
            </span>
          </div>

          {/* Liquid Color Flask */}
          <div className="my-2 flex flex-col items-center justify-center relative">
            <motion.div
              animate={{ backgroundColor: fullHexCode }}
              transition={{ duration: 0.2 }}
              className="w-44 h-44 rounded-3xl border-4 border-white/20 shadow-2xl flex flex-col items-center justify-center p-3 text-center backdrop-blur-md relative overflow-hidden"
            >
              <div className="bg-black/70 px-3 py-1.5 rounded-xl border border-white/20 backdrop-blur-md">
                <span className="text-[10px] font-mono text-slate-300 block uppercase">Hex Stamp</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-wider">
                  {fullHexCode}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Division Pipelines breakdown */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            {/* Red Pipeline */}
            <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/40 space-y-1">
              <span className="text-red-400 font-bold">RED ({red})</span>
              <div className="text-[11px] text-slate-300">{red} ÷ 16 = {rDiv} r {rRem}</div>
              <div className="text-sm font-black text-red-300">{hexDigit(rDiv)}{hexDigit(rRem)}</div>
            </div>

            {/* Green Pipeline */}
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1">
              <span className="text-emerald-400 font-bold">GREEN ({green})</span>
              <div className="text-[11px] text-slate-300">{green} ÷ 16 = {gDiv} r {gRem}</div>
              <div className="text-sm font-black text-emerald-300">{hexDigit(gDiv)}{hexDigit(gRem)}</div>
            </div>

            {/* Blue Pipeline */}
            <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/40 space-y-1">
              <span className="text-blue-400 font-bold">BLUE ({blue})</span>
              <div className="text-[11px] text-slate-300">{blue} ÷ 16 = {bDiv} r {bRem}</div>
              <div className="text-sm font-black text-blue-300">{hexDigit(bDiv)}{hexDigit(bRem)}</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: PRECISION RGB CHANNELS SLIDERS */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Precision RGB Fluid Valves</span>
          </h4>

          {/* Red Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-red-600 dark:text-red-400">Red Channel (RR):</span>
              <span className="text-slate-900 dark:text-white">{red} / 255 ➔ {rHex}₁₆</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => handleSliderChange('r', parseInt(e.target.value, 10))}
              className="w-full accent-red-600 h-2 bg-red-100 dark:bg-red-950 rounded-lg cursor-pointer"
            />
          </div>

          {/* Green Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-emerald-600 dark:text-emerald-400">Green Channel (GG):</span>
              <span className="text-slate-900 dark:text-white">{green} / 255 ➔ {gHex}₁₆</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => handleSliderChange('g', parseInt(e.target.value, 10))}
              className="w-full accent-emerald-600 h-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg cursor-pointer"
            />
          </div>

          {/* Blue Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-blue-600 dark:text-blue-400">Blue Channel (BB):</span>
              <span className="text-slate-900 dark:text-white">{blue} / 255 ➔ {bHex}₁₆</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => handleSliderChange('b', parseInt(e.target.value, 10))}
              className="w-full accent-blue-600 h-2 bg-blue-100 dark:bg-blue-950 rounded-lg cursor-pointer"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sinhala">
            <strong>වර්ණ කේත නීතිය:</strong> පරිගණක තිරයේ සෑම පික්සලයක්ම Red, Green, Blue තීව්‍රතා (0-255) 3 ක එකතුවකි. එම අගයන් 16 න් බෙදා ෂඩ්දශමය අංක 2 බැගින් ගෙන <strong>#RRGGBB</strong> ආකෘතිය සාදයි.
          </div>
        </div>
      </div>
    </div>
  );
}
