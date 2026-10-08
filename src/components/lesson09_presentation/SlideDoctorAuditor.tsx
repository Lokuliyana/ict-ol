'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Eye, 
  Type, 
  Palette, 
  Image as ImageIcon, 
  Sliders, 
  FileText, 
  Award,
  RefreshCw,
  TrendingUp
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function SlideDoctorAuditor() {
  // State for the 4 Doctor Diagnostics
  const [lineMode, setLineMode] = useState<'cluttered' | 'bulleted'>('cluttered');
  const [titleFontSize, setTitleFontSize] = useState<number>(18); // Rule: >= 32 pt
  const [bodyFontSize, setBodyFontSize] = useState<number>(14);  // Rule: >= 24 pt
  const [colorTheme, setColorTheme] = useState<'poor_navy_black' | 'poor_red' | 'high_contrast_dark' | 'high_contrast_light'>('poor_navy_black');
  const [mediaCount, setMediaCount] = useState<number>(5); // Rule: max 2 visuals, 1 video

  // Calculate Audience Engagement Score (0 - 100%)
  const isLineOk = lineMode === 'bulleted';
  const isTitleFontOk = titleFontSize >= 32;
  const isBodyFontOk = bodyFontSize >= 24;
  const isContrastOk = colorTheme === 'high_contrast_dark' || colorTheme === 'high_contrast_light';
  const isMediaOk = mediaCount <= 2;

  const scoreItems = [isLineOk, isTitleFontOk, isBodyFontOk, isContrastOk, isMediaOk];
  const passedCount = scoreItems.filter(Boolean).length;
  const engagementScore = Math.round((passedCount / scoreItems.length) * 100);

  const isGoldCertified = engagementScore === 100;

  const handleFixLines = () => {
    sound.playClick(600);
    setLineMode('bulleted');
  };

  const handleReset = () => {
    sound.playClick(400);
    setLineMode('cluttered');
    setTitleFontSize(18);
    setBodyFontSize(14);
    setColorTheme('poor_navy_black');
    setMediaCount(5);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Stethoscope className="w-4 h-4" />
              <span>STATION 01 • THE SLIDE DOCTOR (කදා සැලසුම් විගණනය)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Golden Rules of Slide Design (ගුණාත්මක කදාවක රන් නීති)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Test and remedy the 5 cardinal slide presentation design rules: 6–9 lines limit, 32 pt / 24 pt minimum font sizes, high-contrast palette, and multimedia restraint.
            </p>
          </div>

          {/* Engagement Meter Gauge */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 min-w-[240px]">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={`${
                    engagementScore >= 80 ? 'text-emerald-400' : engagementScore >= 50 ? 'text-amber-400' : 'text-rose-500'
                  } transition-all duration-500`}
                  strokeDasharray={`${engagementScore}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-xs font-black text-white font-mono">
                {engagementScore}%
              </span>
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono text-slate-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-amber-400" />
                Audience Meter
              </div>
              <div className="text-xs font-bold text-white">
                {engagementScore === 100 ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Gold Standard!
                  </span>
                ) : engagementScore >= 60 ? (
                  <span className="text-amber-300">Acceptable</span>
                ) : (
                  <span className="text-rose-400">Poor Legibility</span>
                )}
              </div>
              <div className="text-[10px] text-slate-400">
                {passedCount} of {scoreItems.length} rules satisfied
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split-Screen Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Interactive Slide Easel */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
              <Eye className="w-4 h-4 text-cyan-400" />
              LIVE PROJECTOR SCREEN (ප්‍රක්ෂේපණ තිරය)
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 hover:underline"
            >
              <RefreshCw className="w-3 h-3" /> Reset Clutter
            </button>
          </div>

          {/* Projector Slide Container */}
          <div
            className={`relative rounded-3xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between border-2 transition-all duration-300 shadow-2xl ${
              colorTheme === 'poor_navy_black'
                ? 'bg-black text-[#0f2444] border-red-950'
                : colorTheme === 'poor_red'
                ? 'bg-[#800000] text-[#330000] border-red-900'
                : colorTheme === 'high_contrast_dark'
                ? 'bg-slate-950 text-white border-cyan-500/50 shadow-cyan-500/10'
                : 'bg-white text-slate-900 border-indigo-300 shadow-indigo-500/10'
            }`}
          >
            {/* Slide Header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3
                  style={{ fontSize: `${titleFontSize}px` }}
                  className="font-black leading-tight transition-all duration-200"
                >
                  Renewable Energy in Sri Lanka (ශ්‍රී ලංකාවේ පුනර්ජනනීය බලශක්තිය)
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${
                  isTitleFontOk ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  {titleFontSize} pt {isTitleFontOk ? '✓ (≥32pt)' : '✗ (<32pt)'}
                </span>
              </div>
              <div className="h-0.5 bg-current opacity-20 my-3" />
            </div>

            {/* Slide Body Content */}
            <div className="my-auto py-2">
              {lineMode === 'cluttered' ? (
                <p
                  style={{ fontSize: `${bodyFontSize}px` }}
                  className="leading-relaxed opacity-90 transition-all duration-200"
                >
                  Sri Lanka possesses abundant renewable resources including extensive hydro catchment areas in central highlands, strong onshore wind corridors along the northwestern coastal belt of Mannar, and year-round tropical solar irradiation across the dry zone regions. Transitioning from imported fossil fuels significantly reduces carbon emissions, stabilizes foreign exchange reserves, bolsters energy sovereignty, and achieves the national target of 70% clean grid generation.
                </p>
              ) : (
                <ul
                  style={{ fontSize: `${bodyFontSize}px` }}
                  className="space-y-1.5 list-disc pl-5 leading-tight transition-all duration-200"
                >
                  <li>Abundant hydro catchment in central highlands (ජල විදුලිය)</li>
                  <li>High-potential wind corridors in Mannar basin (සුළං බලය)</li>
                  <li>Year-round solar irradiation in dry zone (සූර්ය බලශක්තිය)</li>
                  <li>Drastic reduction in fossil fuel import reliance (පිරිවැය අවම වීම)</li>
                  <li>Target: 70% clean renewable generation by 2030 (ජාතික ඉලක්කය)</li>
                  <li>Green job creation in provincial engineering hubs (රැකියා උත්පාදනය)</li>
                </ul>
              )}
            </div>

            {/* Slide Clipart/Media Tray */}
            <div className="pt-3 border-t border-current/10 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                {Array.from({ length: mediaCount }).map((_, i) => (
                  <div
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-current/10 text-xs font-mono font-bold flex items-center gap-1"
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Media #{i + 1}</span>
                  </div>
                ))}
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                isMediaOk ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                {mediaCount} visuals {isMediaOk ? '✓ (≤2)' : '✗ (Overload >2)'}
              </span>
            </div>

            {/* Floating Warning overlay if contrast or font is bad */}
            {(!isContrastOk || !isTitleFontOk) && (
              <div className="absolute top-3 right-3 bg-rose-950/90 text-rose-300 border border-rose-500/60 text-[10px] font-mono px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Legibility Warning: Audience cant read!</span>
              </div>
            )}
          </div>

          {/* Success Banner if 100% */}
          {isGoldCertified && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-4 flex items-center gap-3 text-emerald-300 shadow-xl shadow-emerald-950/50"
            >
              <Award className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-emerald-200 text-sm">
                  🎉 Gold Standard Slide Certified! (විශිෂ්ට කදා ප්‍රමිතිය)
                </div>
                Concise 6 bullets, high-contrast readable colorway, titles ≥ 32 pt, body ≥ 24 pt, and optimal visual restraint.
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Side: Doctor Control Deck (Diagnostic Tools) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
            <Sliders className="w-4 h-4 text-amber-400" />
            SLIDE REMEDY CONSOLE (දෝෂ පිළියම් පුවරුව)
          </div>

          {/* Tool 1: 6-9 Line Rule Trimmer */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white">Rule 1: Line Count (6–9 නීතිය)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                isLineOk ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                {isLineOk ? '6 Bullets (Pass)' : 'Paragraph (Fail)'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Avoid walls of text. Limit each slide to 6–9 bullet points.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => { sound.playClick(550); setLineMode('cluttered'); }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                  lineMode === 'cluttered'
                    ? 'bg-rose-600/30 border-rose-500 text-rose-200'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                15-Line Block
              </button>
              <button
                onClick={handleFixLines}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1 ${
                  lineMode === 'bulleted'
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                    : 'bg-indigo-600/30 border-indigo-500 text-indigo-200 hover:bg-indigo-600/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                6 Concise Bullets
              </button>
            </div>
          </div>

          {/* Tool 2: Font Size Scaler */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">Rule 2: Font Sizes (අකුරු ප්‍රමාණය)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                isTitleFontOk && isBodyFontOk ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
              }`}>
                Title ≥32pt | Body ≥24pt
              </span>
            </div>

            {/* Title Font Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Title Font (ශීර්ෂ පාඨය):</span>
                <span className="font-mono font-bold text-white">{titleFontSize} pt</span>
              </div>
              <input
                type="range"
                min={16}
                max={44}
                step={2}
                value={titleFontSize}
                onChange={(e) => {
                  sound.playClick(600);
                  setTitleFontSize(Number(e.target.value));
                }}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Body Font Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Body Font (ප්‍රධාන පෙළ):</span>
                <span className="font-mono font-bold text-white">{bodyFontSize} pt</span>
              </div>
              <input
                type="range"
                min={12}
                max={28}
                step={2}
                value={bodyFontSize}
                onChange={(e) => {
                  sound.playClick(600);
                  setBodyFontSize(Number(e.target.value));
                }}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
              />
            </div>
          </div>

          {/* Tool 3: Color & Contrast Sieve */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Rule 3: Color Contrast (වර්ණ වෙනස)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                isContrastOk ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                {isContrastOk ? 'High Contrast (Pass)' : 'Low Contrast (Fail)'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { sound.playClick(500); setColorTheme('poor_navy_black'); }}
                className={`p-2 rounded-xl text-[11px] font-semibold border text-left transition-all ${
                  colorTheme === 'poor_navy_black'
                    ? 'bg-rose-950/50 border-rose-500 text-rose-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                <div className="font-bold">Dark Blue on Black</div>
                <div className="text-[10px] opacity-70">Unreadable / ✗</div>
              </button>

              <button
                onClick={() => { sound.playClick(500); setColorTheme('poor_red'); }}
                className={`p-2 rounded-xl text-[11px] font-semibold border text-left transition-all ${
                  colorTheme === 'poor_red'
                    ? 'bg-rose-950/50 border-rose-500 text-rose-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                <div className="font-bold">Deep Red Full Slide</div>
                <div className="text-[10px] opacity-70">Eye Fatigue / ✗</div>
              </button>

              <button
                onClick={() => { sound.playClick(700); setColorTheme('high_contrast_dark'); }}
                className={`p-2 rounded-xl text-[11px] font-semibold border text-left transition-all ${
                  colorTheme === 'high_contrast_dark'
                    ? 'bg-cyan-950/50 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                <div className="font-bold">White on Dark Blue</div>
                <div className="text-[10px] text-emerald-400">High Contrast / ✓</div>
              </button>

              <button
                onClick={() => { sound.playClick(700); setColorTheme('high_contrast_light'); }}
                className={`p-2 rounded-xl text-[11px] font-semibold border text-left transition-all ${
                  colorTheme === 'high_contrast_light'
                    ? 'bg-indigo-950/50 border-indigo-400 text-indigo-200 shadow-md shadow-indigo-500/20'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                <div className="font-bold">Dark Slate on White</div>
                <div className="text-[10px] text-emerald-400">High Contrast / ✓</div>
              </button>
            </div>
          </div>

          {/* Tool 4: Multimedia Restraint Sieve */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white">Rule 4: Media Restraint (රූප සීමාව)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                isMediaOk ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                Max 2 Visuals
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => { sound.playClick(500); setMediaCount(5); }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                  mediaCount === 5
                    ? 'bg-rose-600/30 border-rose-500 text-rose-200'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                5 Clipart Images (Cluttered)
              </button>
              <button
                onClick={() => { sound.playClick(650); setMediaCount(1); }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                  mediaCount === 1
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                }`}
              >
                1 Clean Diagram (Optimal)
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
