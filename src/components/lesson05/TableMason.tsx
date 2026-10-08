'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Table as TableIcon, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Minus, 
  RotateCcw,
  Scissors,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function TableMason() {
  // Table state: Header row merged or separated
  const [headerMerged, setHeaderMerged] = useState<boolean>(false);
  const [splitColIndex, setSplitColIndex] = useState<number | null>(null);
  const [rowCount, setRowCount] = useState<number>(3);
  const [activeCell, setActiveCell] = useState<{ r: number; c: number }>({ r: 0, c: 0 });

  const handleMergeHeader = () => {
    sound.playSuccess();
    setHeaderMerged(true);
  };

  const handleUnmerge = () => {
    sound.playClick(450);
    setHeaderMerged(false);
  };

  const handleSplitCell = (colIdx: number) => {
    sound.playClick(800);
    setSplitColIndex(splitColIndex === colIdx ? null : colIdx);
  };

  const handleAddRow = () => {
    sound.playSuccess();
    setRowCount(prev => Math.min(6, prev + 1));
  };

  const handleRemoveRow = () => {
    sound.playClick(400);
    setRowCount(prev => Math.max(2, prev - 1));
  };

  const handleCellClick = (r: number, c: number) => {
    sound.playClick(600);
    setActiveCell({ r, c });
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Controls */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <TableIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 3: The Table Mason</span>
              <span className="text-xs font-sinhala text-amber-400 font-normal">
                (වගු හැඩසැසීම, සෛල ඒකාබද්ධ කිරීම හා බෙදීම)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Fuse adjacent blocks with Cell Merging (සෛල ඒකාබද්ධය), cut cells with Splitting, and spawn rows via Tab.
            </p>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto flex-wrap">
          {!headerMerged ? (
            <button
              onClick={handleMergeHeader}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center gap-1.5 shadow-md hover:bg-amber-400 transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Merge Header (A1:C1)</span>
            </button>
          ) : (
            <button
              onClick={handleUnmerge}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Unmerge</span>
            </button>
          )}

          <button
            onClick={handleAddRow}
            className="px-3 py-1.5 rounded-lg bg-slate-900 text-amber-300 border border-slate-800 hover:border-amber-500 flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Row (Tab)</span>
          </button>

          {rowCount > 2 && (
            <button
              onClick={handleRemoveRow}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-rose-300 border border-slate-800 hover:border-rose-500 flex items-center gap-1.5"
            >
              <Minus className="w-3.5 h-3.5" />
              <span>Delete Row</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Grid Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Interactive Table Visualizer (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[440px]">
          
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs font-mono text-amber-400 font-bold">
              LIVE TABLE WORKBENCH ({rowCount} Rows × 3 Columns)
            </span>
            <span className="text-xs text-slate-500 font-mono">2022 O/L P1 Q08 Benchmark</span>
          </div>

          {/* Central Animated Table Component */}
          <div className="relative z-10 my-auto py-6">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900 shadow-2xl max-w-lg mx-auto">
              <table className="w-full text-xs font-mono border-collapse">
                
                {/* Header Row (Merged or 3 distinct cells) */}
                <thead>
                  {headerMerged ? (
                    <tr className="bg-amber-500/20 border-b-2 border-amber-500/60">
                      <th colSpan={3} className="p-4 text-center text-amber-300 font-bold text-sm tracking-wider">
                        ★ MERGED BANNER: SRI LANKAN O/L ICT EXAMINATION TIMETABLE ★
                      </th>
                    </tr>
                  ) : (
                    <tr className="bg-slate-950 text-slate-400 border-b-2 border-slate-700">
                      <th className="p-3 text-center border-r border-slate-800">Column A (Subject)</th>
                      <th className="p-3 text-center border-r border-slate-800">Column B (Date)</th>
                      <th className="p-3 text-center">Column C (Duration)</th>
                    </tr>
                  )}
                </thead>

                {/* Body Rows */}
                <tbody className="divide-y divide-slate-800">
                  {Array.from({ length: rowCount }).map((_, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                      {/* Cell 1 */}
                      <td 
                        onClick={() => handleCellClick(rIdx, 0)}
                        className={`p-3.5 text-center border-r border-slate-800 cursor-pointer transition-all ${
                          activeCell.r === rIdx && activeCell.c === 0 
                            ? 'bg-amber-500/20 text-white font-bold' 
                            : 'text-slate-300'
                        }`}
                      >
                        {rIdx === 0 ? 'ICT Theory' : rIdx === 1 ? 'Mathematics' : rIdx === 2 ? 'Science' : `Subject ${rIdx + 1}`}
                      </td>

                      {/* Cell 2 (Can be split) */}
                      <td 
                        onClick={() => handleCellClick(rIdx, 1)}
                        className={`p-3.5 text-center border-r border-slate-800 cursor-pointer transition-all ${
                          activeCell.r === rIdx && activeCell.c === 1 
                            ? 'bg-amber-500/20 text-white font-bold' 
                            : 'text-slate-300'
                        }`}
                      >
                        {splitColIndex === rIdx ? (
                          <div className="flex divide-x divide-amber-400 text-[10px] text-amber-300 font-bold">
                            <span className="flex-1 px-1">Morning</span>
                            <span className="flex-1 px-1">Afternoon</span>
                          </div>
                        ) : (
                          <span>2026-10-0{rIdx + 7}</span>
                        )}
                      </td>

                      {/* Cell 3 */}
                      <td 
                        onClick={() => handleCellClick(rIdx, 2)}
                        className={`p-3.5 text-center cursor-pointer transition-all ${
                          activeCell.r === rIdx && activeCell.c === 2 
                            ? 'bg-amber-500/20 text-white font-bold' 
                            : 'text-slate-300'
                        }`}
                      >
                        <span>2.5 Hours</span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Split Cell Trigger Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => handleSplitCell(activeCell.r)}
                className="px-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-xs font-mono text-amber-400 flex items-center gap-1.5 shadow-md"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Split Active Cell [{activeCell.r + 1}, {activeCell.c + 1}]</span>
              </button>
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Table Operations §6.4</span>
            <span className="text-amber-400">Merge, Split & Row Controls</span>
          </div>

        </div>

        {/* Right Side: Terminology & O/L Exam Definitions (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Table Anatomy & Rules</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Core Rules
              </span>
            </div>

            {/* Merge Cells Definition */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400">
                1. Merging Cells (සෛල ඒකාබද්ධ කිරීම):
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combining two or more adjacent cells in a table into a single large cell. Commonly used for multi-column titles and super-headers. (2022 O/L P1 Q08).
              </p>
            </div>

            {/* Split Cells Definition */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400">
                2. Splitting Cells (සෛල බෙදීම):
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dividing a single cell into multiple sub-columns or sub-rows to represent nested values.
              </p>
            </div>

            {/* Navigation & Row Generation */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400">
                3. Tab Key Navigation:
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pressing <code className="bg-slate-900 px-1.5 py-0.5 rounded text-white font-mono">Tab</code> moves the cursor to the next cell. Pressing <code className="bg-slate-900 px-1.5 py-0.5 rounded text-white font-mono">Tab</code> inside the very last cell of the table automatically creates a new row.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
            <strong>Key Distinction:</strong> <em>Backspace</em> deletes the entire selected row/column; <em>Delete</em> clears only the text inside the cell!
          </div>
        </div>

      </div>
    </div>
  );
}
