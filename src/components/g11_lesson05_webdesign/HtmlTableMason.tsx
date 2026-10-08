'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Table, 
  Grid, 
  Columns, 
  Rows, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Code2,
  FileCode
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function HtmlTableMason() {
  const [activeTab, setActiveTab] = useState<'merger' | 'inspector' | 'spacing'>('merger');

  // Interactive Table Grid Merge States (2021 P1 Q22 & 2020 P2 Q05)
  const [hasColspan, setHasColspan] = useState<boolean>(false);
  const [hasRowspan, setHasRowspan] = useState<boolean>(false);
  const [tableBorder, setTableBorder] = useState<number>(1);
  const [cellPadding, setCellPadding] = useState<number>(8);
  const [cellSpacing, setCellSpacing] = useState<number>(2);

  const handleToggleColspan = () => {
    sound.playVictory();
    setHasColspan(!hasColspan);
  };

  const handleToggleRowspan = () => {
    sound.playVictory();
    setHasRowspan(!hasRowspan);
  };

  const handleResetTable = () => {
    sound.playClick(500);
    setHasColspan(false);
    setHasRowspan(false);
    setTableBorder(1);
    setCellPadding(8);
    setCellSpacing(2);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-blue-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('merger');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'merger'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>colspan & rowspan</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('inspector');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'inspector'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Table className="w-4 h-4" />
          <span>Table Inspector</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('spacing');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'spacing'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Columns className="w-4 h-4" />
          <span>Spacing & Padding</span>
        </button>
      </div>

      {activeTab === 'merger' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                2021 O/L PAPER I Q22 DIRECT FOCUS
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Interactive Cell Merger (colspan & rowspan)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                <code className="text-blue-300">colspan="N"</code> merges N horizontal columns across a row. <code className="text-blue-300">rowspan="N"</code> merges N vertical rows down a column.
              </p>
            </div>

            <button
              onClick={handleResetTable}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Mergers</span>
            </button>
          </div>

          {/* Merge Trigger Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleToggleColspan}
              className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                hasColspan
                  ? 'bg-blue-950 border-blue-400 ring-2 ring-blue-400 text-blue-200 shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="font-bold text-sm text-white">1. Merge Horizontal Columns (colspan="2")</div>
                <div className="text-xs text-slate-400 mt-0.5">Merges two adjacent columns in Row 1 for "Marks"</div>
              </div>
              <Columns className={`w-5 h-5 ${hasColspan ? 'text-blue-400' : 'text-slate-500'}`} />
            </button>

            <button
              onClick={handleToggleRowspan}
              className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                hasRowspan
                  ? 'bg-indigo-950 border-indigo-400 ring-2 ring-indigo-400 text-indigo-200 shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="font-bold text-sm text-white">2. Merge Vertical Rows (rowspan="2")</div>
                <div className="text-xs text-slate-400 mt-0.5">Merges two adjacent rows in Column 1 for "Student ID"</div>
              </div>
              <Rows className={`w-5 h-5 ${hasRowspan ? 'text-indigo-400' : 'text-slate-500'}`} />
            </button>
          </div>

          {/* Split Screen: Live Rendered Table vs Synchronized HTML Code */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Live Table Viewport */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border-2 border-slate-700 text-slate-950 space-y-3 shadow-inner">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">
                Rendered HTML Table Output:
              </div>

              <table className="w-full border-collapse border border-slate-900 text-xs text-center font-sans">
                <thead>
                  <tr className="bg-slate-100">
                    {hasRowspan ? (
                      <th rowSpan={2} className="border border-slate-900 p-2.5 bg-indigo-100 text-indigo-900 font-bold">
                        Student ID (rowspan=2)
                      </th>
                    ) : (
                      <th className="border border-slate-900 p-2.5 font-bold">Student ID</th>
                    )}

                    {hasColspan ? (
                      <th colSpan={2} className="border border-slate-900 p-2.5 bg-blue-100 text-blue-900 font-bold">
                        Examination Marks (colspan=2)
                      </th>
                    ) : (
                      <>
                        <th className="border border-slate-900 p-2.5 font-bold">Term 1</th>
                        <th className="border border-slate-900 p-2.5 font-bold">Term 2</th>
                      </>
                    )}
                  </tr>
                  {hasColspan && (
                    <tr className="bg-slate-50 font-semibold text-[11px]">
                      <th className="border border-slate-900 p-1.5">Term 1</th>
                      <th className="border border-slate-900 p-1.5">Term 2</th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  <tr>
                    {!hasRowspan && <td className="border border-slate-900 p-2 font-mono">101</td>}
                    <td className="border border-slate-900 p-2 font-mono">85</td>
                    <td className="border border-slate-900 p-2 font-mono">92</td>
                  </tr>
                  <tr>
                    {!hasRowspan && <td className="border border-slate-900 p-2 font-mono">102</td>}
                    <td className="border border-slate-900 p-2 font-mono">78</td>
                    <td className="border border-slate-900 p-2 font-mono">88</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Generated Code Window */}
            <div className="lg:col-span-6 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-blue-300 space-y-1 overflow-x-auto">
              <div className="text-[10px] text-slate-500 pb-1 border-b border-slate-800 mb-2">
                SYNCHRONIZED HTML MARKUP:
              </div>
              <div className="text-slate-200">&lt;table border="1"&gt;</div>
              <div className="pl-3 text-slate-200">&lt;tr&gt;</div>
              {hasRowspan ? (
                <div className="pl-6 text-indigo-300 font-bold">&lt;th rowspan="2"&gt;Student ID&lt;/th&gt;</div>
              ) : (
                <div className="pl-6 text-slate-300">&lt;th&gt;Student ID&lt;/th&gt;</div>
              )}
              {hasColspan ? (
                <div className="pl-6 text-blue-300 font-bold">&lt;th colspan="2"&gt;Examination Marks&lt;/th&gt;</div>
              ) : (
                <>
                  <div className="pl-6 text-slate-300">&lt;th&gt;Term 1&lt;/th&gt;</div>
                  <div className="pl-6 text-slate-300">&lt;th&gt;Term 2&lt;/th&gt;</div>
                </>
              )}
              <div className="pl-3 text-slate-200">&lt;/tr&gt;</div>
              {hasColspan && (
                <>
                  <div className="pl-3 text-slate-200">&lt;tr&gt;</div>
                  <div className="pl-6 text-slate-400">&lt;th&gt;Term 1&lt;/th&gt;</div>
                  <div className="pl-6 text-slate-400">&lt;th&gt;Term 2&lt;/th&gt;</div>
                  <div className="pl-3 text-slate-200">&lt;/tr&gt;</div>
                </>
              )}
              <div className="pl-3 text-slate-200">&lt;tr&gt;</div>
              {!hasRowspan && <div className="pl-6 text-slate-400">&lt;td&gt;101&lt;/td&gt;</div>}
              <div className="pl-6 text-slate-400">&lt;td&gt;85&lt;/td&gt;</div>
              <div className="pl-6 text-slate-400">&lt;td&gt;92&lt;/td&gt;</div>
              <div className="pl-3 text-slate-200">&lt;/tr&gt;</div>
              <div className="text-slate-200">&lt;/table&gt;</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inspector' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              2020 & 2023 O/L PAPER II Q05(c)
            </span>
            <h3 className="text-xl font-black text-white mt-1">
              Table Structure & Dimension Inspector
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              How to deduce the number of rows and columns from HTML markup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs text-blue-300">
              <div className="text-[10px] text-slate-500">EXAMINATION CODE SNIPPET:</div>
              <div className="text-slate-200">&lt;table border="1"&gt;</div>
              <div className="pl-3 text-amber-300">&lt;tr&gt; &lt;!-- Row 1 --&gt;</div>
              <div className="pl-6 text-slate-300">&lt;th&gt;ID&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;</div>
              <div className="pl-3 text-amber-300">&lt;/tr&gt;</div>
              <div className="pl-3 text-emerald-300">&lt;tr&gt; &lt;!-- Row 2 --&gt;</div>
              <div className="pl-6 text-slate-300">&lt;td&gt;101&lt;/td&gt;&lt;td&gt;Nimal&lt;/td&gt;</div>
              <div className="pl-3 text-emerald-300">&lt;/tr&gt;</div>
              <div className="text-slate-200">&lt;/table&gt;</div>
            </div>

            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="font-bold text-white text-sm">Examiner's Deduction Steps:</div>
              <div className="space-y-2 text-slate-300">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <strong>1. Count Total &lt;tr&gt; Tags:</strong> There are 2 &lt;tr&gt; blocks ➔ <strong className="text-emerald-400">2 Rows (පේළි 2)</strong>.
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <strong>2. Count Cells per Row:</strong> Each row encloses 2 &lt;th&gt; or &lt;td&gt; tags ➔ <strong className="text-blue-400">2 Columns (තීරු 2)</strong>.
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <strong>3. Header Tag:</strong> &lt;th&gt; defines table headers (bold & centered by default).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'spacing' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Columns className="w-5 h-5 text-blue-400" />
              cellspacing vs. cellpadding Spacing Controls
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              <code>cellspacing</code> controls the gap between cell borders. <code>cellpadding</code> controls the inner space around text within a cell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sliders */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>cellpadding (අභ්‍යන්තර පරතරය):</span>
                  <span className="text-blue-300 font-bold">{cellPadding}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={cellPadding}
                  onChange={(e) => setCellPadding(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>cellspacing (සෛල අතර පරතරය):</span>
                  <span className="text-indigo-300 font-bold">{cellSpacing}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={cellSpacing}
                  onChange={(e) => setCellSpacing(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-blue-300">
                &lt;table border="1" cellpadding="{cellPadding}" cellspacing="{cellSpacing}"&gt;
              </div>
            </div>

            {/* Live Table */}
            <div className="p-6 bg-white rounded-2xl text-slate-950 flex items-center justify-center shadow-inner">
              <table
                border={tableBorder}
                cellPadding={cellPadding}
                cellSpacing={cellSpacing}
                className="border border-slate-900 text-xs font-mono text-center"
              >
                <tr className="bg-slate-200">
                  <th className="border border-slate-900">Heading A</th>
                  <th className="border border-slate-900">Heading B</th>
                </tr>
                <tr>
                  <td className="border border-slate-900">Data 1</td>
                  <td className="border border-slate-900">Data 2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
