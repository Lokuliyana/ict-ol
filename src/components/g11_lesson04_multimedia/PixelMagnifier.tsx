'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ZoomIn, 
  Binary, 
  Calculator, 
  Eye, 
  Palette, 
  Layers, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  HelpCircle,
  FileDigit
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function PixelMagnifier() {
  const [activeSubtab, setActiveSubtab] = useState<'magnifier' | 'calculator'>('magnifier');

  // Interactive Magnifier States
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [selectedPixel, setSelectedPixel] = useState<{ r: number; g: number; b: number } | null>({
    r: 235,
    g: 87,
    b: 87
  });

  // Dynamic Formula Scale States (Resolution & Bit Depth Calculator)
  const [calcWidth, setCalcWidth] = useState<number>(1920);
  const [calcHeight, setCalcHeight] = useState<number>(1080);
  const [bitDepthMode, setBitDepthMode] = useState<number>(8); // 1, 2, 8, 24

  // Past Paper Exam Quiz (2024 P1 Q37 & 2025 P1 Q37)
  const [examColors, setExamColors] = useState<number>(4); // 4 colors -> 2 bits
  const [examWidth, setExamWidth] = useState<number>(275);
  const [examHeight, setExamHeight] = useState<number>(175);

  const handlePixelClick = (r: number, g: number, b: number) => {
    sound.playClick(650);
    setSelectedPixel({ r, g, b });
  };

  // Math calculations
  const totalPixels = calcWidth * calcHeight;
  const totalBits = totalPixels * bitDepthMode;
  const totalBytes = totalBits / 8;
  const totalKilobytes = totalBytes / 1024;
  const totalMegabytes = totalKilobytes / 1024;

  const numColorsPossible = bitDepthMode === 24 ? '16,777,216 (True Color)' : Math.pow(2, bitDepthMode).toLocaleString();

  // 2024 Exam Problem Math: 4 colors -> log2(4) = 2 bits per pixel
  const examBitsPerPixel = Math.round(Math.log2(examColors));
  const examBytes = (examWidth * examHeight * examBitsPerPixel) / 8;

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-md mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('magnifier');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'magnifier'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ZoomIn className="w-4 h-4" />
          <span>24-Bit Zoom Chamber</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('calculator');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'calculator'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Formula Memory Scale</span>
        </button>
      </div>

      {activeSubtab === 'magnifier' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Magnifier Interactive Canvas */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl backdrop-blur-md space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                PIXEL ANATOMY & 24-BIT RGB • පික්සල ව්‍යුහය
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The 24-Bit True Color Zoom Chamber
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Every digital image is an array of picture elements (pixels). Click any pixel grid cell to inspect its 8-bit R, G, B sub-channels.
              </p>
            </div>

            {/* Interactive Grid Canvas */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SIMULATED $6 \times 6$ PIXEL MATRIX:</span>
                <span className="text-violet-300">Total: 36 Pixels (864 Bits)</span>
              </div>

              {/* Matrix of Pixel Blocks */}
              <div className="grid grid-cols-6 gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
                {[
                  { r: 235, g: 87, b: 87 },
                  { r: 242, g: 153, b: 74 },
                  { r: 242, g: 201, b: 76 },
                  { r: 39, g: 174, b: 96 },
                  { r: 47, g: 128, b: 237 },
                  { r: 155, g: 81, b: 224 },
                  { r: 230, g: 70, b: 120 },
                  { r: 250, g: 130, b: 60 },
                  { r: 230, g: 210, b: 60 },
                  { r: 30, g: 190, b: 120 },
                  { r: 50, g: 150, b: 240 },
                  { r: 170, g: 90, b: 240 },
                  { r: 210, g: 50, b: 90 },
                  { r: 220, g: 110, b: 40 },
                  { r: 210, g: 180, b: 40 },
                  { r: 20, g: 160, b: 90 },
                  { r: 30, g: 120, b: 210 },
                  { r: 140, g: 70, b: 200 },
                  { r: 190, g: 40, b: 80 },
                  { r: 200, g: 90, b: 30 },
                  { r: 190, g: 160, b: 30 },
                  { r: 15, g: 140, b: 80 },
                  { r: 20, g: 100, b: 190 },
                  { r: 120, g: 50, b: 180 },
                  { r: 170, g: 30, b: 70 },
                  { r: 180, g: 80, b: 20 },
                  { r: 170, g: 140, b: 20 },
                  { r: 10, g: 120, b: 70 },
                  { r: 15, g: 80, b: 170 },
                  { r: 100, g: 40, b: 160 },
                  { r: 150, g: 20, b: 60 },
                  { r: 160, g: 70, b: 10 },
                  { r: 150, g: 120, b: 10 },
                  { r: 5, g: 100, b: 60 },
                  { r: 10, g: 60, b: 150 },
                  { r: 80, g: 30, b: 140 }
                ].map((px, idx) => {
                  const isSelected = selectedPixel?.r === px.r && selectedPixel?.g === px.g && selectedPixel?.b === px.b;
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePixelClick(px.r, px.g, px.b)}
                      style={{ backgroundColor: `rgb(${px.r}, ${px.g}, ${px.b})` }}
                      className={`h-10 sm:h-12 rounded-lg transition-all border ${
                        isSelected
                          ? 'ring-4 ring-white border-white scale-110 z-10 shadow-xl'
                          : 'border-slate-800/60 hover:scale-105 opacity-90 hover:opacity-100'
                      }`}
                      title={`Pixel (${px.r}, ${px.g}, ${px.b})`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Pixel Sub-channel Tube */}
            {selectedPixel && (
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">24-BIT RGB DECOMPOSITION:</span>
                  <span className="text-violet-400">Total: 3 Bytes (24 Bits)</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  {/* RED */}
                  <div className="p-3 bg-red-950/60 rounded-xl border border-red-500/40 space-y-1">
                    <div className="text-[10px] font-mono text-red-400 font-bold">RED CHANNEL</div>
                    <div className="text-lg font-mono font-black text-red-300">{selectedPixel.r}</div>
                    <div className="text-[9px] font-mono text-slate-400">
                      Binary: {selectedPixel.r.toString(2).padStart(8, '0')}
                    </div>
                    <div className="text-[9px] font-mono text-red-400/80">8 Bits (0–255)</div>
                  </div>

                  {/* GREEN */}
                  <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/40 space-y-1">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold">GREEN CHANNEL</div>
                    <div className="text-lg font-mono font-black text-emerald-300">{selectedPixel.g}</div>
                    <div className="text-[9px] font-mono text-slate-400">
                      Binary: {selectedPixel.g.toString(2).padStart(8, '0')}
                    </div>
                    <div className="text-[9px] font-mono text-emerald-400/80">8 Bits (0–255)</div>
                  </div>

                  {/* BLUE */}
                  <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-500/40 space-y-1">
                    <div className="text-[10px] font-mono text-blue-400 font-bold">BLUE CHANNEL</div>
                    <div className="text-lg font-mono font-black text-blue-300">{selectedPixel.b}</div>
                    <div className="text-[9px] font-mono text-slate-400">
                      Binary: {selectedPixel.b.toString(2).padStart(8, '0')}
                    </div>
                    <div className="text-[9px] font-mono text-blue-400/80">8 Bits (0–255)</div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-center font-mono text-xs text-violet-300">
                  Formula: 8 bits (R) + 8 bits (G) + 8 bits (B) = 24 bits ➔ 2^24 = 16,777,216 Colors
                </div>
              </div>
            )}
          </div>

          {/* Theory & Rules Deck */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-wider">
                  Curriculum Competency 4.1
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Color Depth ($2^n$ Rule)
                </h3>
                <h4 className="text-xs font-semibold text-violet-300">
                  වර්ණ ගැඹුර සහ වර්ණ ගණන
                </h4>
              </div>

              <div className="space-y-2.5">
                {[
                  { bit: '1-Bit', colors: '2 Colors (2^1)', desc: 'Monochrome (Black or White only)' },
                  { bit: '2-Bit', colors: '4 Colors (2^2)', desc: 'CGA 4-color palette (2024 O/L Exam)' },
                  { bit: '8-Bit', colors: '256 Colors (2^8)', desc: 'Standard Grayscale or Indexed color' },
                  { bit: '24-Bit', colors: '16.7M Colors (2^24)', desc: 'True Color (8-bit Red, 8-bit Green, 8-bit Blue)' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-0.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-violet-300">{item.bit} Depth</span>
                      <span className="text-emerald-400 font-bold">{item.colors}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Core Rule Callout */}
              <div className="p-3.5 bg-violet-950/30 rounded-xl border border-violet-500/30 text-xs text-violet-200">
                <Zap className="w-4 h-4 text-violet-400 inline mr-1.5" />
                <strong>Universal Rule:</strong> If an image has $n$ bits per pixel, it can represent up to $2^n$ unique colors!
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT • Unit 4.1 Digital Graphics
            </div>
          </div>
        </div>
      ) : (
        /* Formula Memory Scale Calculator */
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-violet-400" />
              Uncompressed Image File Size Formula (ගොනු ප්‍රමාණය ගණනය)
            </h3>
            <p className="text-xs text-slate-300 mt-1 font-mono">
              Formula: (Width in Pixels × Height in Pixels × Bit Depth) / 8 Bytes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Interactive Dials */}
            <div className="lg:col-span-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Image Width (Pixels):</label>
                <input
                  type="number"
                  value={calcWidth}
                  onChange={(e) => {
                    setCalcWidth(Math.max(1, Number(e.target.value)));
                    sound.playCrankTick();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-mono focus:border-violet-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Image Height (Pixels):</label>
                <input
                  type="number"
                  value={calcHeight}
                  onChange={(e) => {
                    setCalcHeight(Math.max(1, Number(e.target.value)));
                    sound.playCrankTick();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-mono focus:border-violet-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Color Depth (Bits Per Pixel):</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { bits: 1, label: '1-Bit (2 C)' },
                    { bits: 2, label: '2-Bit (4 C)' },
                    { bits: 8, label: '8-Bit (256 C)' },
                    { bits: 24, label: '24-Bit (True)' }
                  ].map((b) => (
                    <button
                      key={b.bits}
                      onClick={() => {
                        sound.playClick(600);
                        setBitDepthMode(b.bits);
                      }}
                      className={`p-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                        bitDepthMode === b.bits
                          ? 'bg-violet-500 text-slate-950 border-violet-400 shadow-md scale-105'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resolution Presets */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 block mb-1.5">Common Resolution Presets:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { w: 250, h: 100, label: '250 x 100 (2020 O/L)' },
                    { w: 275, h: 175, label: '275 x 175 (2024 O/L)' },
                    { w: 1920, h: 1080, label: '1080p Full HD' }
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playSnap();
                        setCalcWidth(p.w);
                        setCalcHeight(p.h);
                      }}
                      className="px-2.5 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-lg text-[10px] font-mono border border-slate-800"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Screen */}
            <div className="lg:col-span-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-violet-400 uppercase">
                  COMPUTED MEMORY FOOTPRINT
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-violet-300 mt-1">
                  {totalBytes.toLocaleString()} Bytes
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  ≈ {totalKilobytes.toFixed(2)} KB / {totalMegabytes.toFixed(2)} MB
                </div>
              </div>

              {/* Step-by-Step Breakdown */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
                <div>1. Total Pixels: {calcWidth} × {calcHeight} = {totalPixels.toLocaleString()} pixels</div>
                <div>2. Total Bits: {totalPixels.toLocaleString()} × {bitDepthMode} = {totalBits.toLocaleString()} bits</div>
                <div>3. Divide by 8 for Bytes: {totalBits.toLocaleString()} / 8 = {totalBytes.toLocaleString()} Bytes</div>
                <div className="text-emerald-400 font-bold pt-1">
                  Available Color Palette: {numColorsPossible}
                </div>
              </div>

              {/* 2024 O/L Exam Special Callout */}
              <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                <strong>2024 O/L Exam MCQ Question 37:</strong>
                <p className="mt-1 text-[11px] text-slate-300 font-mono">
                  "Image resolution 275 × 175 with 4 colors."
                  <br />
                  4 colors ➔ 2 bits/pixel (log2(4) = 2).
                  <br />
                  Formula Answer: (275 × 175 × 2) / 8 Bytes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
