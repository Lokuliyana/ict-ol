'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  Layers, 
  FileCode, 
  FileImage, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Sparkles, 
  Gauge, 
  Sliders, 
  Eye,
  ShieldCheck
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function VectorRasterDuel() {
  const [activeSubtab, setActiveSubtab] = useState<'zoomDuel' | 'compression' | 'webSpeed'>('zoomDuel');

  // Zoom slider (100% to 500%)
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Web Speed Test Image Selection
  const [selectedFormat, setSelectedFormat] = useState<'bmp' | 'jpeg' | 'png'>('jpeg');

  const handleZoomChange = (newZoom: number) => {
    setZoomLevel(newZoom);
    if (newZoom >= 350) {
      sound.playCrankTick();
    }
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('zoomDuel');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'zoomDuel'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>500% Zoom Duel</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('compression');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'compression'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Lossy vs Lossless</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('webSpeed');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'webSpeed'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Gauge className="w-4 h-4" />
          <span>Web Optimizer</span>
        </button>
      </div>

      {activeSubtab === 'zoomDuel' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                SCALABILITY TEST • විශාලනය කිරීමේ පරීක්ෂාව
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The 500% Billboard Zoom Arena
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Drag the zoom lever to simulate enlarging a school logo onto a massive stadium billboard.
              </p>
            </div>

            {/* Zoom Slider Control */}
            <div className="bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">ZOOM:</span>
              <input
                type="range"
                min="100"
                max="500"
                step="10"
                value={zoomLevel}
                onChange={(e) => handleZoomChange(Number(e.target.value))}
                className="w-32 sm:w-40 accent-violet-500 cursor-pointer"
              />
              <span className="text-sm font-mono font-bold text-violet-300 w-12 text-right">
                {zoomLevel}%
              </span>
            </div>
          </div>

          {/* Side-by-Side Comparison Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Raster Graphics Side */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileImage className="w-5 h-5 text-rose-400" />
                    <h4 className="font-bold text-white text-sm">Raster Graphics (Bitmap - රැස්ටර්)</h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                    .bmp / .jpg / .png
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Grid array of fixed pixels. Software: Adobe Photoshop, GIMP.
                </p>
              </div>

              {/* Visual Render Window */}
              <div className="relative h-48 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
                {/* Simulated Crest Graphic */}
                <div
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    filter: zoomLevel > 150 ? `blur(${(zoomLevel - 100) / 120}px)` : 'none'
                  }}
                  className="transition-all duration-150 flex flex-col items-center justify-center"
                >
                  <div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-2xl shadow-lg"
                    style={{
                      imageRendering: zoomLevel > 200 ? 'pixelated' : 'auto'
                    }}
                  >
                    OL
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 mt-1 font-mono">SCHOOL CREST</span>
                </div>

                {/* Pixelation Warning Badge */}
                {zoomLevel >= 250 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-2 left-2 right-2 p-1.5 bg-rose-950/90 border border-rose-500/40 rounded-lg text-[10px] font-mono text-rose-200 text-center flex items-center justify-center gap-1.5"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Pixelated & Jagged Edges (ගුණාත්මකභාවය පිරිහී ඇත)</span>
                  </motion.div>
                )}
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div>• <strong>Weakness:</strong> Pixelates and loses sharpness when enlarged.</div>
                <div>• <strong>Best for:</strong> Natural photographs, real-world textures.</div>
              </div>
            </div>

            {/* Vector Graphics Side */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-bold text-white text-sm">Vector Graphics (වෙක්ටර්)</h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    .svg / .ai / .vgd
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Mathematical paths, lines & curves. Software: Inkscape, CorelDRAW, Illustrator.
                </p>
              </div>

              {/* Visual Render Window */}
              <div className="relative h-48 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
                {/* SVG Vector Path */}
                <div
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                  className="transition-all duration-150 flex flex-col items-center justify-center"
                >
                  <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#grad1)" stroke="#ffffff" strokeWidth="2" />
                    <text x="50" y="58" fontSize="26" fontWeight="bold" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">
                      OL
                    </text>
                  </svg>
                  <span className="text-[10px] font-bold text-emerald-300 mt-1 font-mono">VECTOR SHAPE</span>
                </div>

                {/* Crisp Edge Badge */}
                {zoomLevel >= 250 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-2 left-2 right-2 p-1.5 bg-emerald-950/90 border border-emerald-500/40 rounded-lg text-[10px] font-mono text-emerald-200 text-center flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Razor Sharp (විශාලනයේදී ගුණාත්මකභාවය නොනැසේ)</span>
                  </motion.div>
                )}
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div>• <strong>Strength:</strong> Re-renders infinitely without quality loss.</div>
                <div>• <strong>Best for:</strong> Logos, typography, charts, billboards.</div>
              </div>
            </div>
          </div>

          {/* O/L Exam Alert */}
          <div className="p-4 bg-amber-950/30 rounded-2xl border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">2024 O/L Exam MCQ 35 Question:</strong>
              <p className="mt-0.5 text-slate-300 text-[11px]">
                Statement: "When a vector image is enlarged, its quality degrades" $\rightarrow$ <strong>FALSE!</strong> Vector graphics use mathematical formulas and never degrade when scaled!
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'compression' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-violet-400" />
              Lossy vs. Lossless Graphic Compression (හානිකර හා හානි රහිත සම්පීඩනය)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Graphic compression reduces file size for rapid storage and transmission over the Internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lossy Compression */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-rose-400 text-base">Lossy Compression (හානිකර සම්පීඩනය)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                  JPEG / MP3 / MP4
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>
                  • <strong>Principle:</strong> Permanently discards redundant or imperceptible color details to shrink file size dramatically.
                </p>
                <p>
                  • <strong>Quality:</strong> Reconstructed image is not identical to original; repeated saving causes compression artifacts.
                </p>
                <p>
                  • <strong>Ideal Use:</strong> Digital photography, website hero banners where tiny file size is needed for fast loading.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-400">
                Compression Ratio: <span className="text-rose-400 font-bold">10:1 to 20:1 (Huge size reduction)</span>
              </div>
            </div>

            {/* Lossless Compression */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-emerald-400 text-base">Lossless Compression (හානි රහිත සම්පීඩනය)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  PNG / GIF / RAW / FLAC
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>
                  • <strong>Principle:</strong> Reduces file size by encoding repeated data patterns without discarding a single original pixel.
                </p>
                <p>
                  • <strong>Quality:</strong> Decompressed file is a 100% exact mathematical clone of the original master.
                </p>
                <p>
                  • <strong>Transparency:</strong> Supports Alpha channel transparency (e.g. transparent PNG logos over dark backgrounds).
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-400">
                Compression Ratio: <span className="text-emerald-400 font-bold">2:1 to 3:1 (Preserves master quality)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'webSpeed' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Gauge className="w-5 h-5 text-violet-400" />
              School Website Asset Optimizer (2022 P1 Q23 & 2023 P2 Q05)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select an image format for the school homepage banner to test its mobile download latency and transparency support.
            </p>
          </div>

          {/* Format Selector */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { id: 'bmp', label: '1. Raw BMP', size: '15.0 MB', badge: 'Uncompressed' },
              { id: 'jpeg', label: '2. JPEG', size: '350 KB', badge: 'Lossy (Optimal)' },
              { id: 'png', label: '3. PNG', size: '650 KB', badge: 'Lossless + Alpha' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  sound.playClick(600);
                  setSelectedFormat(f.id as any);
                }}
                className={`p-3 rounded-xl border text-center transition-all ${
                  selectedFormat === f.id
                    ? 'bg-violet-950/80 border-violet-400 ring-2 ring-violet-400 text-violet-200 shadow-lg scale-105'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-mono font-bold text-xs text-white">{f.label}</div>
                <div className="text-[11px] text-violet-300 font-mono mt-0.5">{f.size}</div>
                <div className="text-[9px] text-slate-500 mt-1">{f.badge}</div>
              </button>
            ))}
          </div>

          {/* Test Performance HUD */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">MOBILE NETWORK LOAD TIME (3G 2 Mbps):</span>
              <span className={`font-bold ${
                selectedFormat === 'bmp' ? 'text-rose-400' : selectedFormat === 'jpeg' ? 'text-emerald-400' : 'text-cyan-400'
              }`}>
                {selectedFormat === 'bmp' && '60.0 Seconds (SLOW / TIMEOUT)'}
                {selectedFormat === 'jpeg' && '1.4 Seconds (LIGHTNING FAST)'}
                {selectedFormat === 'png' && '2.6 Seconds (FAST + TRANSPARENT)'}
              </span>
            </div>

            {/* Load Progress Meter */}
            <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                key={selectedFormat}
                initial={{ width: '0%' }}
                animate={{
                  width: selectedFormat === 'bmp' ? '15%' : selectedFormat === 'jpeg' ? '100%' : '85%'
                }}
                transition={{ duration: 0.8 }}
                className={`h-full ${
                  selectedFormat === 'bmp' ? 'bg-rose-500' : selectedFormat === 'jpeg' ? 'bg-emerald-500' : 'bg-cyan-500'
                }`}
              />
            </div>

            {/* Transparency Test */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs space-y-1">
                <div className="font-bold text-white">Background Transparency Test:</div>
                <p className="text-slate-400 text-[11px]">
                  {selectedFormat === 'jpeg' && 'JPEG does NOT support transparent backgrounds (renders with white rectangular box).'}
                  {selectedFormat === 'png' && 'PNG supports 8-bit Alpha Channel transparency (blends seamlessly on any background).'}
                  {selectedFormat === 'bmp' && 'BMP is huge, uncompressed, and has no web transparency support.'}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="p-3 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-lg border border-slate-700 flex items-center justify-center min-w-[120px]">
                {selectedFormat === 'jpeg' ? (
                  <div className="bg-white px-3 py-1 rounded text-slate-950 text-xs font-bold font-mono">
                    LOGO (Box)
                  </div>
                ) : selectedFormat === 'png' ? (
                  <div className="text-cyan-300 font-black text-xs font-mono drop-shadow">
                    LOGO (Alpha)
                  </div>
                ) : (
                  <div className="bg-white px-3 py-1 text-black text-xs font-mono">
                    RAW BMP
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
