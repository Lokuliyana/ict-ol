'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Type, 
  Heading1, 
  Bold, 
  Italic, 
  Underline, 
  Sparkles, 
  Sliders, 
  Zap, 
  CheckCircle2, 
  Palette, 
  Layers,
  FileCode
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function TypographyTypesetter() {
  const [activeSubtab, setActiveSubtab] = useState<'headings' | 'formulas' | 'fontTag'>('headings');

  // Heading Level Slider State (1 to 6)
  const [headingLevel, setHeadingLevel] = useState<number>(1);
  const [sampleHeadingText, setSampleHeadingText] = useState<string>('National Information & Communication Technology');

  // Formula Subscript / Superscript State
  const [formulaMode, setFormulaMode] = useState<'sub' | 'sup'>('sub');

  // Traditional <font> Tag Dial States (2025 Paper II Q05(b))
  const [fontColor, setFontColor] = useState<string>('red');
  const [fontFace, setFontFace] = useState<string>('Arial');
  const [fontSize, setFontSize] = useState<number>(5);
  const [fontText, setFontText] = useState<string>('GCE O/L ICT');

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-blue-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('headings');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'headings'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Heading1 className="w-4 h-4" />
          <span>&lt;h1&gt; to &lt;h6&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('formulas');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'formulas'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Type className="w-4 h-4" />
          <span>&lt;sub&gt; & &lt;sup&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('fontTag');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'fontTag'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>&lt;font&gt; Tag (2025)</span>
        </button>
      </div>

      {activeSubtab === 'headings' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Ladder */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                HEADING HIERARCHY • මාතෘකා මට්ටම් 6
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Heading Ladder &lt;h1&gt; – &lt;h6&gt;
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Drag the level slider to inspect how browsers resize and style headings from &lt;h1&gt; (largest) down to &lt;h6&gt; (smallest).
              </p>
            </div>

            {/* Heading Slider */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">ACTIVE HEADING TAG:</span>
                <span className="text-blue-400 font-bold text-sm">
                  &lt;h{headingLevel}&gt; ... &lt;/h{headingLevel}&gt;
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                value={headingLevel}
                onChange={(e) => {
                  setHeadingLevel(Number(e.target.value));
                  sound.playCrankTick();
                }}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>h1 (Largest)</span>
                <span>h2</span>
                <span>h3</span>
                <span>h4</span>
                <span>h5</span>
                <span>h6 (Smallest)</span>
              </div>
            </div>

            {/* Generated HTML Snippet */}
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs text-blue-300 space-y-1">
              <div className="text-[10px] text-slate-500">GENERATED HTML MARKUP:</div>
              <div>&lt;h{headingLevel}&gt;{sampleHeadingText}&lt;/h{headingLevel}&gt;</div>
            </div>
          </div>

          {/* Live Browser Viewport Preview */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>LIVE BROWSER RENDER VIEWPORT:</span>
              </div>

              <div className="p-6 bg-white rounded-2xl min-h-[180px] text-slate-900 flex items-center justify-center text-center mt-3 shadow-inner">
                {headingLevel === 1 && <h1 className="text-3xl font-black">{sampleHeadingText}</h1>}
                {headingLevel === 2 && <h2 className="text-2xl font-bold">{sampleHeadingText}</h2>}
                {headingLevel === 3 && <h3 className="text-xl font-bold">{sampleHeadingText}</h3>}
                {headingLevel === 4 && <h4 className="text-lg font-semibold">{sampleHeadingText}</h4>}
                {headingLevel === 5 && <h5 className="text-sm font-semibold">{sampleHeadingText}</h5>}
                {headingLevel === 6 && <h6 className="text-xs font-medium text-slate-600">{sampleHeadingText}</h6>}
              </div>
            </div>

            {/* O/L Exam Tip */}
            <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
              <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
              <strong>O/L Exam Golden Rule:</strong> HTML has exactly 6 heading levels (&lt;h1&gt; to &lt;h6&gt;). There is NO &lt;h7&gt; tag in HTML standard!
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'formulas' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Type className="w-5 h-5 text-blue-400" />
              Subscript (&lt;sub&gt;) and Superscript (&lt;sup&gt;) Assembler
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              &lt;sub&gt; lowers text below the baseline (chemical formulas). &lt;sup&gt; elevates text above the baseline (mathematical exponents).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subscript Chemical Demo */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">1. Subscript: Water Molecule (H2O)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                  &lt;sub&gt;
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-blue-300">
                H&lt;sub&gt;2&lt;/sub&gt;O
              </div>

              {/* Live Render */}
              <div className="p-4 bg-white rounded-xl text-center text-slate-950">
                <span className="text-3xl font-serif">
                  H<sub className="text-xl text-blue-600 font-bold">2</sub>O
                </span>
              </div>

              <p className="text-xs text-slate-400">
                The number '2' drops beneath the baseline inside the &lt;sub&gt; container.
              </p>
            </div>

            {/* Superscript Math Demo */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">2. Superscript: Algebraic Power (X² + Y²)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                  &lt;sup&gt;
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-purple-300">
                X&lt;sup&gt;2&lt;/sup&gt; + Y&lt;sup&gt;2&lt;/sup&gt;
              </div>

              {/* Live Render */}
              <div className="p-4 bg-white rounded-xl text-center text-slate-950">
                <span className="text-3xl font-serif">
                  X<sup className="text-xl text-purple-600 font-bold">2</sup> + Y<sup className="text-xl text-purple-600 font-bold">2</sup>
                </span>
              </div>

              <p className="text-xs text-slate-400">
                The exponent '2' elevates above the baseline inside the &lt;sup&gt; container.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'fontTag' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              2025 O/L PAPER II Q05(b) DIRECT COMPETENCY
            </span>
            <h3 className="text-xl font-black text-white mt-1 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-400" />
              The Traditional &lt;font&gt; Tag Attribute Stamper
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Configure attributes: <code className="text-blue-300">color</code>, <code className="text-blue-300">face</code>, and <code className="text-blue-300">size</code> (1 to 7).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Attribute Dials */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Attribute: color (වර්ණය)</label>
                <div className="flex gap-2">
                  {['red', 'blue', 'green', '#e11d48'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        sound.playClick(600);
                        setFontColor(c);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                        fontColor === c
                          ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-white scale-105'
                          : 'bg-slate-950 text-slate-300 border-slate-800'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Attribute: face (අකුරු විලාසය)</label>
                <div className="flex gap-2">
                  {['Arial', 'Courier New', 'Times New Roman', 'Impact'].map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        sound.playClick(600);
                        setFontFace(f);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                        fontFace === f
                          ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-white scale-105'
                          : 'bg-slate-950 text-slate-300 border-slate-800'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  Attribute: size (ප්‍රමාණය 1 සිට 7 දක්වා - Default is 3): <strong className="text-blue-300">{fontSize}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={fontSize}
                  onChange={(e) => {
                    setFontSize(Number(e.target.value));
                    sound.playCrankTick();
                  }}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Generated Code */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-blue-300">
                &lt;font color="{fontColor}" face="{fontFace}" size="{fontSize}"&gt;{fontText}&lt;/font&gt;
              </div>
            </div>

            {/* Live Render Screen */}
            <div className="p-6 bg-white rounded-2xl border-2 border-slate-700 flex flex-col items-center justify-center text-center space-y-2 shadow-inner min-h-[220px]">
              <div
                style={{
                  color: fontColor,
                  fontFamily: fontFace,
                  fontSize: `${fontSize * 7 + 10}px`
                }}
                className="font-bold transition-all duration-150"
              >
                {fontText}
              </div>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Rendered with &lt;font color="{fontColor}" face="{fontFace}"&gt;
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
