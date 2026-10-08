'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  Unlock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Trophy,
  ArrowDown,
  Sparkles,
  Table,
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { SandboxProps } from './types';

interface SheetRow {
  rowNum: number;
  itemName: string;
  qty: number;
  unitPrice: number;
  total: number;
  taxCalcRelative: string;
  taxCalcAbsolute: string;
  taxValRelative: number;
  taxValAbsolute: number;
}

const ITEMS: SheetRow[] = [
  {
    rowNum: 2,
    itemName: 'Exercise Book',
    qty: 5,
    unitPrice: 150,
    total: 750,
    taxCalcRelative: '= D2 * H1',
    taxCalcAbsolute: '= D2 * $H$1',
    taxValRelative: 75,
    taxValAbsolute: 75,
  },
  {
    rowNum: 3,
    itemName: 'Pencil Box',
    qty: 2,
    unitPrice: 250,
    total: 500,
    taxCalcRelative: '= D3 * H2 (EMPTY!)',
    taxCalcAbsolute: '= D3 * $H$1',
    taxValRelative: 0,
    taxValAbsolute: 50,
  },
  {
    rowNum: 4,
    itemName: 'School Bag',
    qty: 1,
    unitPrice: 2000,
    total: 2000,
    taxCalcRelative: '= D4 * H3 (EMPTY!)',
    taxCalcAbsolute: '= D4 * $H$1',
    taxValRelative: 0,
    taxValAbsolute: 200,
  },
];

export function LaserGridSandbox({ nodeId, onComplete, onExit }: SandboxProps) {
  const [isAnchorLocked, setIsAnchorLocked] = useState<boolean>(false);
  const [filledRows, setFilledRows] = useState<number>(1); // Row 2 initially filled
  const [hasCompletedExperiment, setHasCompletedExperiment] = useState<boolean>(false);

  const toggleAnchor = () => {
    sound.playClick(isAnchorLocked ? 400 : 800);
    setIsAnchorLocked(!isAnchorLocked);
  };

  const handleDragFill = () => {
    sound.playClick(650);
    if (filledRows < 3) {
      const next = filledRows + 1;
      setFilledRows(next);
      if (next === 3 && isAnchorLocked) {
        sound.playVictoryFanfare();
        setHasCompletedExperiment(true);
      } else if (next === 3 && !isAnchorLocked) {
        sound.playSuccessDing();
      }
    }
  };

  const handleReset = () => {
    sound.playClick();
    setFilledRows(1);
    setIsAnchorLocked(false);
  };

  const handleFinish = () => {
    sound.playVictoryFanfare();
    onComplete?.({ stars: 3, xp: 100, accuracy: 100 });
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
            <Table className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight">Spreadsheet Laser Grid & Reference Anchors</h2>
            <p className="text-xs text-slate-400 font-sinhala">සාපේක්ෂ (Relative) හා නිරපේක්ෂ (Absolute $H$1) සෛල යොමු</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="min-h-[48px] px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Grid</span>
        </button>
      </div>

      {/* Anchor Toggle Control Panel */}
      <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono uppercase text-amber-400 font-bold">Tax Rate Cell H1 (10% VAT / Rs. 0.10)</span>
          <p className="text-xs text-slate-400">
            {isAnchorLocked
              ? 'Anchor LOCKED with $ symbol: $H$1 stays fixed during downward drag fill!'
              : 'Anchor UNLOCKED: Relative reference H1 will shift to H2, H3 (empty cells) when dragged!'}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* >=48px Touch Target */}
          <button
            type="button"
            onClick={toggleAnchor}
            className={`flex-1 sm:flex-none min-h-[48px] px-5 py-2.5 rounded-2xl font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
              isAnchorLocked
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-300'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600'
            }`}
          >
            {isAnchorLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
            <span>Formula: {isAnchorLocked ? '$H$1 (Absolute)' : 'H1 (Relative)'}</span>
          </button>

          {/* Drag fill button */}
          <button
            type="button"
            onClick={handleDragFill}
            disabled={filledRows >= 3}
            className={`flex-1 sm:flex-none min-h-[48px] px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
              filledRows < 3
                ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <ArrowDown className="w-4 h-4" />
            <span>Drag Fill Row {filledRows < 3 ? filledRows + 2 : 'Complete'}</span>
          </button>
        </div>
      </div>

      {/* Spreadsheet Matrix - Responsive Cards on Mobile, Zero Horizontal Overflow */}
      <div className="space-y-3">
        {ITEMS.map((item, idx) => {
          const isRowFilled = idx < filledRows;
          const isErrorRow = isRowFilled && idx > 0 && !isAnchorLocked;

          return (
            <div
              key={item.rowNum}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                !isRowFilled
                  ? 'bg-slate-900/40 border-slate-800/60 opacity-60'
                  : isErrorRow
                  ? 'bg-rose-950/40 border-rose-500/80 shadow-md shadow-rose-950/50'
                  : 'bg-slate-900 border-slate-800 shadow-md'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {/* Row Number & Item Info */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-950 text-slate-400 font-mono font-bold text-xs flex items-center justify-center border border-slate-800">
                    R{item.rowNum}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.itemName}</h4>
                    <span className="text-xs font-mono text-slate-400">
                      Qty: {item.qty} × Rs. {item.unitPrice} = Total: Rs. {item.total}
                    </span>
                  </div>
                </div>

                {/* Tax Formula & Result */}
                {isRowFilled ? (
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-amber-400">
                        {isAnchorLocked ? item.taxCalcAbsolute : item.taxCalcRelative}
                      </div>
                      <div className="text-sm font-mono font-black text-white">
                        Tax: Rs. {isAnchorLocked ? item.taxValAbsolute : item.taxValRelative}
                      </div>
                    </div>

                    {isErrorRow ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Relative Error (Rs. 0)</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Calculated</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs font-mono text-slate-500 italic">
                    Pending Drag-Fill down...
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feedback & Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
          <span className="font-bold text-cyan-400">Relative Cell Reference (= D2 * H1):</span>
          <p className="text-slate-400">
            When copied down, references increment proportionally. Row 3 looks for tax in cell <strong>H2</strong>, which is empty (value 0). This causes calculation collapse!
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
          <span className="font-bold text-amber-400">Absolute Cell Reference (= D2 * $H$1):</span>
          <p className="text-slate-400">
            The dollar signs (<strong>$H$1</strong>) lock both column H and row 1. When dragged down to Row 3 and Row 4, it strictly anchors to the 10% tax rate in H1.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Action Bar with >=48px Touch Target */}
      <div className="p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          {hasCompletedExperiment
            ? 'Success: Absolute reference $H$1 verified across all rows!'
            : 'Lock anchor ($H$1) and drag fill all 3 rows to complete.'}
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
