'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stamp, 
  Wand2, 
  Crop, 
  Layers, 
  Square, 
  Circle, 
  Scissors, 
  FileBox, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  RotateCcw,
  MousePointer,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface GimpTool {
  id: string;
  nameEn: string;
  nameSi: string;
  icon: React.ElementType;
  descriptionEn: string;
  descriptionSi: string;
  shortcut: string;
}

const GIMP_TOOLS: GimpTool[] = [
  {
    id: 'clone',
    nameEn: 'Clone Tool (ක්ලෝන මෙවලම)',
    nameSi: 'පික්සල පිටපත් කර අලුත්වැඩියා කිරීමේ මෙවලම',
    icon: Stamp,
    descriptionEn: 'Duplicates pixels from a sampled source region (Ctrl+Click) onto a target area to cover scratches or blemishes.',
    descriptionSi: 'Ctrl ඔබා ලබාගත් ප්‍රභව පික්සල වෙනත් ස්ථානයකට පිටපත් කර රූපයක කැළැල් මකා දැමීම.',
    shortcut: 'C'
  },
  {
    id: 'fuzzy',
    nameEn: 'Fuzzy Select / Magic Wand (මැජික් යෂ්ටිය)',
    nameSi: 'සමාන වර්ණ ප්‍රදේශ තෝරා ගැනීමේ මෙවලම',
    icon: Wand2,
    descriptionEn: 'Selects contiguous areas of similar color with a single click, perfect for background removal.',
    descriptionSi: 'තනි ක්ලික් කිරීමකින් එකම වර්ණය සහිත යාබද සියලුම පික්සල තෝරා ගනී.',
    shortcut: 'U'
  },
  {
    id: 'lasso',
    nameEn: 'Free Select / Lasso Tool (ලැසෝ මෙවලම)',
    nameSi: 'නිදහස් හැඩතල තෝරා ගැනීමේ මෙවලම',
    icon: Scissors,
    descriptionEn: 'Selects irregular, hand-drawn contours around objects with custom polygonal anchor points.',
    descriptionSi: 'අක්‍රමවත් හැඩතල නිදහස් අතින් ඇඳ තෝරා ගැනීමට භාවිත වේ.',
    shortcut: 'F'
  },
  {
    id: 'rect',
    nameEn: 'Rectangle Select (සෘජුකෝණාස්‍ර තේරීම)',
    nameSi: 'සෘජුකෝණාස්‍රාකාර ප්‍රදේශ තේරීම',
    icon: Square,
    descriptionEn: 'Selects regular rectangular or square regions on the canvas.',
    descriptionSi: 'කැන්වසය මත සෘජුකෝණාස්‍රාකාර ප්‍රදේශ තෝරා ගැනීමට භාවිත වේ.',
    shortcut: 'R'
  },
  {
    id: 'crop',
    nameEn: 'Crop Tool (කප්පාදු මෙවලම)',
    nameSi: 'අනවශ්‍ය දාර ඉවත් කිරීමේ මෙවලම',
    icon: Crop,
    descriptionEn: 'Trims canvas margins and discards unwanted outer borders from the image.',
    descriptionSi: 'රූපයක අනවශ්‍ය බාහිර ප්‍රදේශ කපා ඉවත් කර ප්‍රමාණය සකසයි.',
    shortcut: 'Shift+C'
  }
];

export function GimpToolBench() {
  const [activeTab, setActiveTab] = useState<'tools' | 'cloneLab' | 'fuzzyLab'>('tools');
  const [selectedToolId, setSelectedToolId] = useState<string>('clone');

  // Clone Stamp Interactive Simulation
  const [cloneSampled, setCloneSampled] = useState<boolean>(false);
  const [scratchFixed, setScratchFixed] = useState<boolean>(false);

  // Fuzzy Select Background Removal Simulation
  const [bgSelected, setBgSelected] = useState<boolean>(false);
  const [bgRemoved, setBgRemoved] = useState<boolean>(false);

  const selectedTool = GIMP_TOOLS.find((t) => t.id === selectedToolId) || GIMP_TOOLS[0];

  const handleSampleSource = () => {
    sound.playClick(700);
    setCloneSampled(true);
  };

  const handleStampFlaw = () => {
    if (!cloneSampled) {
      sound.playError();
      return;
    }
    sound.playVictory();
    setScratchFixed(true);
  };

  const handleResetClone = () => {
    sound.playClick(500);
    setCloneSampled(false);
    setScratchFixed(false);
  };

  const handleFuzzyClick = () => {
    sound.playSnap();
    setBgSelected(true);
  };

  const handleDeleteBg = () => {
    if (!bgSelected) return;
    sound.playVictory();
    setBgRemoved(true);
  };

  const handleResetFuzzy = () => {
    sound.playClick(500);
    setBgSelected(false);
    setBgRemoved(false);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('tools');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'tools'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>GIMP Tool Deck</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('cloneLab');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'cloneLab'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Stamp className="w-4 h-4" />
          <span>Clone Tool Lab</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('fuzzyLab');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'fuzzyLab'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Wand2 className="w-4 h-4" />
          <span>Fuzzy Select Lab</span>
        </button>
      </div>

      {activeTab === 'tools' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tool Palette Grid */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  FOSS RASTER EDITOR • GIMP මෘදුකාංගය
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  The GIMP Professional Tool Palette
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                <FileBox className="w-3.5 h-3.5 text-violet-400" />
                <span>Native Project: <strong className="text-violet-300">.xcf</strong></span>
              </div>
            </div>

            {/* Tool Selection Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GIMP_TOOLS.map((tool) => {
                const isSelected = selectedToolId === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => {
                      sound.playClick(600);
                      setSelectedToolId(tool.id);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-violet-950/80 border-violet-400 ring-2 ring-violet-400 shadow-lg text-violet-200 scale-105'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <tool.icon className={`w-5 h-5 ${isSelected ? 'text-violet-400' : 'text-slate-400'}`} />
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                        {tool.shortcut}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="font-bold text-sm text-white">{tool.nameEn.split(' ')[0]} {tool.nameEn.split(' ')[1]}</div>
                      <div className="text-[11px] text-violet-300 truncate mt-0.5">{tool.nameSi}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Native Project .XCF Concept Callout */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>O/L Exam Focus: Why Save as .XCF vs Exporting as JPEG?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Saving as <strong>.xcf</strong> preserves all transparent layers, text paths, and undo history for future editing. Exporting as <strong>.jpg</strong> flattens all layers into a single compressed background image!
              </p>
            </div>
          </div>

          {/* Tool Inspector Card */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-wider">
                  Tool Inspector
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {selectedTool.nameEn}
                </h3>
                <h4 className="text-xs font-semibold text-violet-300">
                  {selectedTool.nameSi}
                </h4>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <p className="text-slate-300 leading-relaxed">
                  {selectedTool.descriptionEn}
                </p>
                <p className="text-slate-400 leading-relaxed font-sans">
                  {selectedTool.descriptionSi}
                </p>
              </div>

              {/* Layer Stacker Analogy */}
              <div className="p-3.5 bg-violet-950/30 rounded-xl border border-violet-500/30 text-xs text-violet-200">
                <strong>Layer Concept (ස්ථර):</strong>
                <p className="text-[11px] text-slate-300 mt-1">
                  Layers act like stacked transparent acetate sheets. Editing elements on Layer 2 does not damage or alter Layer 1 beneath it!
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT Syllabus • Unit 4.1.4
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cloneLab' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Stamp className="w-5 h-5 text-violet-400" />
                The Clone Tool Blemish Repair Workbench
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Step 1: Sample clear blue sky (Ctrl+Click). Step 2: Stamp over the scratch to restore the photograph.
              </p>
            </div>
            <button
              onClick={handleResetClone}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Scratch</span>
            </button>
          </div>

          {/* Interactive Photo Canvas */}
          <div className="relative h-64 bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-400 rounded-2xl border-4 border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
            {/* Mountain and Grass landscape */}
            <div className="absolute bottom-0 w-full h-20 bg-emerald-600 rounded-t-[50%]" />

            {/* Clear Sky Sample Source */}
            <button
              onClick={handleSampleSource}
              className={`absolute top-6 left-12 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-lg ${
                cloneSampled
                  ? 'bg-emerald-500 text-slate-950 ring-4 ring-white scale-105'
                  : 'bg-slate-950/80 text-white border border-white/50 hover:bg-slate-900'
              }`}
            >
              <MousePointer className="w-3.5 h-3.5" />
              <span>{cloneSampled ? 'SOURCE SAMPLED!' : '1. CTRL+CLICK TO SAMPLE SKY'}</span>
            </button>

            {/* Flawed Scratch Region */}
            <button
              onClick={handleStampFlaw}
              className={`absolute top-12 right-16 p-4 rounded-2xl transition-all ${
                scratchFixed
                  ? 'bg-transparent border-none'
                  : cloneSampled
                  ? 'ring-4 ring-violet-400 bg-red-500/20 cursor-pointer animate-pulse'
                  : 'cursor-not-allowed opacity-80'
              }`}
            >
              {!scratchFixed ? (
                <div className="space-y-1">
                  <div className="w-32 h-3 bg-red-600 rotate-12 rounded-full shadow-md animate-bounce" />
                  <div className="text-[10px] font-mono font-bold bg-slate-950/80 text-red-300 px-2 py-0.5 rounded text-center">
                    2. CLICK TO STAMP & FIX
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-2 bg-emerald-950/80 border border-emerald-400 rounded-xl text-xs font-bold text-emerald-200 flex items-center gap-1.5 shadow-xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>FLAW RESTORED!</span>
                </motion.div>
              )}
            </button>
          </div>

          {/* Instruction Bar */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span>
              <strong>Textbook Technique:</strong> The Clone Tool requires two steps: (1) Setting the sampling anchor with Ctrl+Click, then (2) Painting over target pixels.
            </span>
          </div>
        </div>
      )}

      {activeTab === 'fuzzyLab' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-violet-400" />
                Fuzzy Select Magic Background Remover
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Fuzzy Select highlights all contiguous pixels with similar colors. Click the white background to select, then hit Delete!
              </p>
            </div>
            <button
              onClick={handleResetFuzzy}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Product</span>
            </button>
          </div>

          {/* Interactive Canvas */}
          <div
            className={`relative h-64 rounded-2xl border-4 border-slate-800 overflow-hidden flex items-center justify-center transition-all ${
              bgRemoved
                ? 'bg-[linear-gradient(45deg,#334155_25%,transparent_25%),linear-gradient(-45deg,#334155_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#334155_75%),linear-gradient(-45deg,transparent_75%,#334155_75%)] bg-[size:20px_20px] bg-slate-900'
                : 'bg-white'
            }`}
          >
            {/* Solid Product Object (Camera) */}
            <div className="relative z-10 p-6 rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-white">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-4 border-cyan-400 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <span className="text-xs font-mono font-bold text-white mt-2">PRODUCT CAMERA</span>
            </div>

            {/* Clickable Background Area */}
            {!bgRemoved && (
              <button
                onClick={handleFuzzyClick}
                className={`absolute inset-0 z-0 transition-all ${
                  bgSelected
                    ? 'border-4 border-dashed border-violet-500 bg-violet-500/10'
                    : 'hover:bg-slate-100 cursor-crosshair'
                }`}
                title="Click to select white background"
              >
                {!bgSelected && (
                  <span className="absolute top-4 left-4 bg-slate-950/80 text-white px-3 py-1 rounded-lg text-xs font-mono">
                    1. Click solid background with Magic Wand
                  </span>
                )}
              </button>
            )}

            {/* Marching Ants Indicator */}
            {bgSelected && !bgRemoved && (
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  onClick={handleDeleteBg}
                  className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-mono font-bold shadow-2xl animate-bounce"
                >
                  2. PRESS DELETE KEY (REMOVE BACKGROUND)
                </button>
              </div>
            )}
          </div>

          {/* Outcome Note */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-300">
            {bgRemoved ? (
              <div className="text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Background stripped to transparent checkerboard! Ready to export as transparent PNG.</span>
              </div>
            ) : (
              <span>Fuzzy Select (Magic Wand) is the fastest tool in GIMP for isolating products on solid backdrops.</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
