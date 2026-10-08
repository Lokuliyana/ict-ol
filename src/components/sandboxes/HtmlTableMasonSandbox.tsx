'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  CheckCircle2,
  Trophy,
  RotateCcw,
  Sparkles,
  Columns,
  Rows,
  Eye,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { SandboxProps } from './types';

export function HtmlTableMasonSandbox({ nodeId, onComplete, onExit }: SandboxProps) {
  const [hasColspan, setHasColspan] = useState<boolean>(false);
  const [hasRowspan, setHasRowspan] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const toggleColspan = () => {
    sound.playClick(hasColspan ? 400 : 700);
    setHasColspan(!hasColspan);
  };

  const toggleRowspan = () => {
    sound.playClick(hasRowspan ? 400 : 700);
    setHasRowspan(!hasRowspan);
  };

  const handleReset = () => {
    sound.playClick();
    setHasColspan(false);
    setHasRowspan(false);
  };

  const handleFinish = () => {
    sound.playVictoryFanfare();
    onComplete?.({ stars: 3, xp: 100, accuracy: 100 });
  };

  // Generate HTML string
  const generatedHtml = `<table border="1">
  <tr>
    <th${hasRowspan ? ' rowspan="2"' : ''}>Student ID</th>
    <th${hasColspan ? ' colspan="2"' : ''}>Examination Marks</th>
  </tr>
  <tr>
    ${!hasRowspan ? '<th>Term</th>\n    ' : ''}<th>ICT</th>
    <th>Maths</th>
  </tr>
  <tr>
    <td>ST-101</td>
    <td>88</td>
    <td>92</td>
  </tr>
</table>`;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight">HTML Table Mason & Layout Studio</h2>
            <p className="text-xs text-slate-400 font-sinhala">HTML5 වගු නිර්මාණය, Colspan හා Rowspan සෛල ඒකාබද්ධතාව</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="min-h-[48px] px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Layout</span>
        </button>
      </div>

      {/* Control Mission Triggers - >=48px Touch Targets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Colspan Toggle */}
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Columns className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-sm">Colspan Merge (තීරු ඒකාබද්ධතාව)</h3>
            </div>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${hasColspan ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'bg-slate-800 text-slate-400'}`}>
              {hasColspan ? 'ACTIVE' : 'OFF'}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Merge 2 horizontal header cells for &quot;Examination Marks&quot; spanning across ICT & Maths columns.
          </p>
          <button
            type="button"
            onClick={toggleColspan}
            className={`w-full min-h-[48px] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
              hasColspan
                ? 'bg-teal-600 text-white shadow-md shadow-teal-950 ring-2 ring-teal-400'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <span>{hasColspan ? 'Colspan="2" Enabled' : 'Enable Colspan="2"'}</span>
          </button>
        </div>

        {/* Rowspan Toggle */}
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rows className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm">Rowspan Merge (පේළි ඒකාබද්ධතාව)</h3>
            </div>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${hasRowspan ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'bg-slate-800 text-slate-400'}`}>
              {hasRowspan ? 'ACTIVE' : 'OFF'}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Merge 2 vertical cells for &quot;Student ID&quot; across rows 1 and 2 to create a multi-level table header.
          </p>
          <button
            type="button"
            onClick={toggleRowspan}
            className={`w-full min-h-[48px] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
              hasRowspan
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950 ring-2 ring-indigo-400'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <span>{hasRowspan ? 'Rowspan="2" Enabled' : 'Enable Rowspan="2"'}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace: Visual Table Preview & Real-Time Code */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Live Table Preview */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono uppercase text-teal-400 font-bold">Browser Visual Rendering</span>
            </div>
            <span className="text-xs font-mono text-slate-400">HTML Table DOM</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center min-h-[220px]">
            <table className="border-collapse border-2 border-slate-600 text-center text-xs font-mono w-full max-w-sm">
              <thead>
                <tr>
                  <th
                    rowSpan={hasRowspan ? 2 : 1}
                    className={`border-2 border-slate-600 p-3 ${hasRowspan ? 'bg-indigo-950/80 text-indigo-300 font-bold' : 'bg-slate-800 text-slate-300'}`}
                  >
                    Student ID
                  </th>
                  <th
                    colSpan={hasColspan ? 2 : 1}
                    className={`border-2 border-slate-600 p-3 ${hasColspan ? 'bg-teal-950/80 text-teal-300 font-bold' : 'bg-slate-800 text-slate-300'}`}
                  >
                    Examination Marks
                  </th>
                </tr>
                <tr>
                  {!hasRowspan && (
                    <th className="border-2 border-slate-600 p-2.5 bg-slate-800/80 text-slate-400">
                      Term
                    </th>
                  )}
                  <th className="border-2 border-slate-600 p-2.5 bg-slate-800/80 text-slate-400">
                    ICT
                  </th>
                  <th className="border-2 border-slate-600 p-2.5 bg-slate-800/80 text-slate-400">
                    Maths
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-slate-600 p-2.5 text-slate-300">ST-101</td>
                  <td className="border-2 border-slate-600 p-2.5 text-emerald-400 font-bold">88</td>
                  <td className="border-2 border-slate-600 p-2.5 text-emerald-400 font-bold">92</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Colspan = Horizontal Columns</span>
            <span>Rowspan = Vertical Rows</span>
          </div>
        </div>

        {/* Right: Real-Time Generated HTML Code */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Generated HTML Source</span>
            </div>
            <span className="text-xs font-mono text-emerald-400">W3C Valid</span>
          </div>

          {/* HTML Code Box - Wrapped, Zero Horizontal Overflow */}
          <pre className="p-4 rounded-2xl bg-black border border-slate-800 text-emerald-400 font-mono text-xs whitespace-pre-wrap break-words leading-relaxed overflow-x-hidden">
            {generatedHtml}
          </pre>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-amber-400">O/L Exam Tip:</span>
            <p className="text-[11px] text-slate-400">
              When using <code>colspan=&quot;2&quot;</code> in the header, remember that child rows must have corresponding <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> elements aligned with the columns!
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar with >=48px Touch Target */}
      <div className="p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          {hasColspan && hasRowspan
            ? 'Both Colspan and Rowspan cell mergers successfully configured!'
            : 'Toggle Colspan or Rowspan to synthesize O/L examination tables.'}
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950 active:scale-95 transition-transform"
        >
          <Trophy className="w-4 h-4 text-amber-300" />
          <span>Complete Lab & Claim XP</span>
        </button>
      </div>
    </div>
  );
}
