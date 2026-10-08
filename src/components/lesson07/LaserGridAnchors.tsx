'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Anchor, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Layers, 
  Zap, 
  ArrowDown, 
  Lock, 
  Unlock,
  ShieldAlert
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ItemRow {
  row: number;
  name: string;
  unitPrice: number;
  qty: number;
  totalFormulaRelative: string;
  totalVal: number;
  taxFormulaUnlocked: string;
  taxFormulaLocked: string;
  taxValCorrect: number;
  taxValBroken: number;
}

export function LaserGridAnchors() {
  const [isAnchorLocked, setIsAnchorLocked] = useState<boolean>(false);
  const [fillRowIndex, setFillRowIndex] = useState<number>(1); // 1 = only row 2 filled, 2 = row 2&3, 3 = all rows filled
  const [activeReferenceMode, setActiveReferenceMode] = useState<'relative' | 'absolute' | 'mixed_col' | 'mixed_row'>('relative');

  const VAT_RATE = 0.15; // 15% in cell H1

  const rows: ItemRow[] = [
    {
      row: 2,
      name: 'Exercise Book',
      unitPrice: 150,
      qty: 4,
      totalFormulaRelative: '= B2 * C2',
      totalVal: 600,
      taxFormulaUnlocked: '= D2 * H1',
      taxFormulaLocked: '= D2 * $H$1',
      taxValCorrect: 90,
      taxValBroken: 90
    },
    {
      row: 3,
      name: 'Ballpoint Pen',
      unitPrice: 50,
      qty: 10,
      totalFormulaRelative: '= B3 * C3',
      totalVal: 500,
      taxFormulaUnlocked: '= D3 * H2', // H2 is empty!
      taxFormulaLocked: '= D3 * $H$1',
      taxValCorrect: 75,
      taxValBroken: 0
    },
    {
      row: 4,
      name: 'Pencil Case',
      unitPrice: 350,
      qty: 2,
      totalFormulaRelative: '= B4 * C4',
      totalVal: 700,
      taxFormulaUnlocked: '= D4 * H3', // H3 is empty!
      taxFormulaLocked: '= D4 * $H$1',
      taxValCorrect: 105,
      taxValBroken: 0
    }
  ];

  const handleToggleAnchor = () => {
    const nextLocked = !isAnchorLocked;
    if (nextLocked) {
      sound.playSuccess();
      setActiveReferenceMode('absolute');
    } else {
      sound.playSnap();
      setActiveReferenceMode('relative');
    }
    setIsAnchorLocked(nextLocked);
  };

  const handleCycleF4 = () => {
    sound.playClick(750);
    if (activeReferenceMode === 'relative') {
      setActiveReferenceMode('absolute');
      setIsAnchorLocked(true);
    } else if (activeReferenceMode === 'absolute') {
      setActiveReferenceMode('mixed_row');
      setIsAnchorLocked(true);
    } else if (activeReferenceMode === 'mixed_row') {
      setActiveReferenceMode('mixed_col');
      setIsAnchorLocked(true);
    } else {
      setActiveReferenceMode('relative');
      setIsAnchorLocked(false);
    }
  };

  const handleDragFillDown = () => {
    if (fillRowIndex < 3) {
      sound.playCrankTick();
      setFillRowIndex(prev => prev + 1);
      if (fillRowIndex + 1 === 3) {
        if (isAnchorLocked) {
          sound.playVictory();
        } else {
          sound.playError();
        }
      }
    }
  };

  const handleReset = () => {
    sound.playClick(400);
    setFillRowIndex(1);
    setIsAnchorLocked(false);
    setActiveReferenceMode('relative');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 03 • සෛල යොමු කිරීම්
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Relative (A1) vs. Absolute ($A$1) Cell Referencing
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Anchor className="w-5 h-5 text-emerald-400" />
            The Laser Grid & Anchor Weights (සාපේක්ෂ හා නිරපේක්ෂ සෛල යොමු)
          </h2>
          <p className="text-xs text-slate-300">
            Observe how relative references flex like rubber bands when copied, while absolute dollar signs (<code>$</code>) anchor coordinates permanently.
          </p>
        </div>

        {/* F4 Quick Cycle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCycleF4}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold flex items-center gap-2 border border-slate-700 shadow-md"
          >
            <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">F4</span>
            <span>Cycle: {activeReferenceMode === 'relative' ? 'H1' : activeReferenceMode === 'absolute' ? '$H$1' : activeReferenceMode === 'mixed_row' ? 'H$1' : '$H1'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Main Spreadsheet Table Grid */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 shadow-2xl space-y-4">
            {/* Top Table Bezel & Isolated Tax Box (H1) */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Formula Bar:</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded text-emerald-300 font-bold border border-slate-800">
                  {isAnchorLocked ? '= D2 * $H$1' : '= D2 * H1'}
                </span>
              </div>

              {/* Isolated VAT Box H1 */}
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-amber-500/40 font-mono text-xs">
                <span className="text-amber-400 font-bold">Cell H1 (VAT Rate):</span>
                <span className="text-white font-black bg-amber-500/20 px-2 py-0.5 rounded">15% (0.15)</span>
                {isAnchorLocked ? (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                    <Lock className="w-3.5 h-3.5" /> Locked ($H$1)
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] text-rose-400 font-bold">
                    <Unlock className="w-3.5 h-3.5" /> Unlocked (H1)
                  </span>
                )}
              </div>
            </div>

            {/* Main Table Grid */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              {/* Header Row */}
              <div className="grid grid-cols-6 text-center font-mono text-xs font-bold bg-slate-950 text-slate-400 border-b border-slate-800">
                <div className="p-2 border-r border-slate-800 bg-slate-900 text-slate-600">Row</div>
                <div className="p-2 border-r border-slate-800">A (Item)</div>
                <div className="p-2 border-r border-slate-800">B (Price)</div>
                <div className="p-2 border-r border-slate-800">C (Qty)</div>
                <div className="p-2 border-r border-slate-800">D (Total)</div>
                <div className="p-2">E (15% VAT Tax)</div>
              </div>

              {/* Rows 2, 3, 4 */}
              {rows.map((rowItem, idx) => {
                const isFilled = idx < fillRowIndex;
                const isTaxBroken = isFilled && !isAnchorLocked && idx > 0;

                return (
                  <div key={rowItem.row} className="grid grid-cols-6 border-b border-slate-800/80 font-mono text-xs items-center">
                    {/* Row Index */}
                    <div className="p-3 text-center bg-slate-950 text-slate-500 font-bold border-r border-slate-800">
                      {rowItem.row}
                    </div>

                    {/* Col A */}
                    <div className="p-2.5 border-r border-slate-800 text-slate-200 truncate">
                      {rowItem.name}
                    </div>

                    {/* Col B */}
                    <div className="p-2.5 border-r border-slate-800 text-right text-cyan-300">
                      Rs. {rowItem.unitPrice}
                    </div>

                    {/* Col C */}
                    <div className="p-2.5 border-r border-slate-800 text-right text-slate-300">
                      {rowItem.qty}
                    </div>

                    {/* Col D: Total Relative */}
                    <div className="p-2.5 border-r border-slate-800 text-right bg-slate-900/60">
                      {isFilled ? (
                        <div>
                          <div className="font-bold text-emerald-300">Rs. {rowItem.totalVal}</div>
                          <div className="text-[9px] text-slate-500">{rowItem.totalFormulaRelative}</div>
                        </div>
                      ) : (
                        <span className="text-slate-600 italic">--</span>
                      )}
                    </div>

                    {/* Col E: Tax Absolute vs Broken */}
                    <div className={`p-2.5 text-right transition-colors ${
                      isTaxBroken ? 'bg-rose-950/40 text-rose-300' : isFilled ? 'bg-emerald-950/20 text-emerald-300' : ''
                    }`}>
                      {isFilled ? (
                        <div>
                          <div className={`font-bold ${isTaxBroken ? 'text-rose-400' : 'text-emerald-400'}`}>
                            Rs. {isAnchorLocked ? rowItem.taxValCorrect : rowItem.taxValBroken}
                          </div>
                          <div className={`text-[9px] ${isTaxBroken ? 'text-rose-400 font-bold' : 'text-slate-400'}`}>
                            {isAnchorLocked ? rowItem.taxFormulaLocked : rowItem.taxFormulaUnlocked}
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-600 italic">--</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Error / Success Feedback Banner */}
            {!isAnchorLocked && fillRowIndex > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2"
              >
                <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                <span>
                  <strong>Calculation Collapsed!</strong> Because cell <code>H1</code> was relative, dragging down shifted the target to empty cells <code>H2</code> and <code>H3</code>! Lock it with <code>$H$1</code> to freeze the VAT rate.
                </span>
              </motion.div>
            )}

            {isAnchorLocked && fillRowIndex === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Perfect Anchoring!</strong> <code>$H$1</code> remained locked to 15% across all rows while row numbers (<code>D2</code>, <code>D3</code>, <code>D4</code>) shifted relatively.
                </span>
              </motion.div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleAnchor}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isAnchorLocked
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  }`}
                >
                  <Anchor className="w-4 h-4" />
                  <span>{isAnchorLocked ? 'Anchor Clamped ($H$1)' : 'Drop Metallic Anchor ($)'}</span>
                </button>

                <button
                  onClick={handleDragFillDown}
                  disabled={fillRowIndex >= 3}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <ArrowDown className="w-4 h-4 text-emerald-400" />
                  <span>Drag Fill Handle ({fillRowIndex}/3)</span>
                </button>
              </div>

              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Referencing Modes Matrix */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase font-mono tracking-wider">
              Three Types of Cell Referencing
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span className="text-cyan-400">1. Relative Reference</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded">A1</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Coordinates adjust automatically when dragged across rows and columns.
                </p>
                <p className="text-[10px] text-slate-400 font-sinhala">සාපේක්ෂ සෛල යොමු: සූත්‍රය පිටපත් කළ විට වෙනස් වේ.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span className="text-emerald-400">2. Absolute Reference</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded">$A$1</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Both column and row are locked with dollar signs ($); permanently frozen.
                </p>
                <p className="text-[10px] text-slate-400 font-sinhala">නිරපේක්ෂ සෛල යොමු: කිසි විටෙකත් වෙනස් නොවේ.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span className="text-amber-400">3. Mixed Reference</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded">$A1 or A$1</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Freezes either only the column ($A1) or only the row (A$1).
                </p>
                <p className="text-[10px] text-slate-400 font-sinhala">මිශ්‍ර සෛල යොමු: තීරුව හෝ පේළිය පමණක් අගුළු ලයි.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-200">
              💡 <strong>O/L Tip:</strong> Pressing the <strong>F4</strong> key automatically toggles a selected cell reference through Relative ➔ Absolute ➔ Mixed Row ➔ Mixed Column.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
