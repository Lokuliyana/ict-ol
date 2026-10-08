'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Grid, 
  AlignLeft, 
  AlignRight, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Info,
  Layers,
  ArrowRight,
  ShieldCheck,
  Hash
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface DataToken {
  id: string;
  label: string;
  rawValue: string;
  type: 'numeric' | 'label' | 'phone_raw' | 'phone_fixed';
  correctAlignment: 'left' | 'right';
  explanationEn: string;
  explanationSi: string;
}

const TOKENS: DataToken[] = [
  {
    id: 't1',
    label: 'Score Value: 95',
    rawValue: '95',
    type: 'numeric',
    correctAlignment: 'right',
    explanationEn: 'Numeric values align to the RIGHT by default so that decimal points and place values line up.',
    explanationSi: 'සංඛ්‍යාත්මක අගයන් (Numeric Values) පෙරනිමියෙන්ම දකුණට (Right) පෙළගැසේ.'
  },
  {
    id: 't2',
    label: 'Student Name: Ravi',
    rawValue: 'Ravi',
    type: 'label',
    correctAlignment: 'left',
    explanationEn: 'Text labels align to the LEFT by default for readability.',
    explanationSi: 'පෙළ ලේබල (Text Labels) පෙරනිමියෙන්ම වමට (Left) පෙළගැසේ.'
  },
  {
    id: 't3',
    label: 'Date: 2026/10/08',
    rawValue: '2026/10/08',
    type: 'numeric',
    correctAlignment: 'right',
    explanationEn: 'Dates and Times are stored as sequential serial numbers internally, so they align to the RIGHT.',
    explanationSi: 'දිනයන් සහ වේලාවන් අභ්‍යන්තරව සංඛ්‍යාත්මක අනුක්‍රම ලෙස සලකන බැවින් දකුණට පෙළගැසේ.'
  },
  {
    id: 't4',
    label: 'Phone: 0771234567 (No quote)',
    rawValue: '0771234567',
    type: 'phone_raw',
    correctAlignment: 'right',
    explanationEn: 'Without single quote, spreadsheet treats it as number: leading zero vanishes to 771234567!',
    explanationSi: 'තනි උඩුකොමාව නොමැතිව ඇතුළත් කළහොත් මුල් බිංදුව (0) මැකී ගොස් 771234567 ලෙස දකුණට පෙළගැසේ.'
  },
  {
    id: 't5',
    label: "Phone: '0771234567 (With Quote)",
    rawValue: "'0771234567",
    type: 'phone_fixed',
    correctAlignment: 'left',
    explanationEn: "Single quote (') forces number to be stored as Text Label: leading zero is safely preserved!",
    explanationSi: "තනි උඩුකොමාව (') යෙදීමෙන් අගය පෙළක් (Text) බවට පත්ව මුල් බිංදුව (0) ආරක්ෂා වී වමට පෙළගැසේ."
  }
];

export function AlignmentMagnet() {
  const [placedCells, setPlacedCells] = useState<Record<string, { token: DataToken; actualDisplay: string; alignment: 'left' | 'right' }>>({});
  const [selectedToken, setSelectedToken] = useState<DataToken | null>(TOKENS[0]);
  const [leadZeroWarning, setLeadZeroWarning] = useState<boolean>(false);

  const handleCellDrop = (cellAddress: string) => {
    if (!selectedToken) return;

    sound.playSnap();

    let actualDisplay = selectedToken.rawValue;
    let alignment: 'left' | 'right' = selectedToken.correctAlignment;

    if (selectedToken.type === 'phone_raw') {
      // Leading zero vanishes!
      actualDisplay = '771234567';
      alignment = 'right';
      setLeadZeroWarning(true);
      sound.playError();
    } else if (selectedToken.type === 'phone_fixed') {
      // Preserved!
      actualDisplay = '0771234567';
      alignment = 'left';
      setLeadZeroWarning(false);
      sound.playSuccess();
    } else {
      setLeadZeroWarning(false);
      if (selectedToken.correctAlignment === 'right') {
        sound.playSuccess();
      } else {
        sound.playClick(800);
      }
    }

    setPlacedCells(prev => ({
      ...prev,
      [cellAddress]: {
        token: selectedToken,
        actualDisplay,
        alignment
      }
    }));
  };

  const handleReset = () => {
    sound.playClick(400);
    setPlacedCells({});
    setLeadZeroWarning(false);
    setSelectedToken(TOKENS[0]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 01 • ජාල ව්‍යුහය සහ දත්ත වර්ග
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Left vs Right Alignment & Leading Zero Fix
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Grid className="w-5 h-5 text-emerald-400" />
            The Grid Anatomy & Alignment Magnet (පැතුරුම්පත් ව්‍යුහය සහ දත්ත පෙළගැස්ම)
          </h2>
          <p className="text-xs text-slate-300">
            Observe how numbers magnetically slide to the Right, text labels align to the Left, and single quotes preserve telephone leading zeros.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Grid</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive 4x4 Spreadsheet Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 shadow-2xl space-y-4">
            {/* Live Name Box & Formula Bar */}
            <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="bg-slate-950 px-3 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 font-bold">
                B2
              </div>
              <div className="text-slate-500 font-bold">fx</div>
              <div className="flex-1 bg-slate-950 px-3 py-1 rounded-lg text-slate-300 border border-slate-800 truncate">
                {selectedToken ? selectedToken.rawValue : '=SUM(A1:B4)'}
              </div>
            </div>

            {/* Grid Table */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              {/* Column Headers */}
              <div className="grid grid-cols-5 text-center font-mono text-xs font-bold bg-slate-950 text-slate-400 border-b border-slate-800">
                <div className="p-2 border-r border-slate-800 bg-slate-900 text-slate-600">#</div>
                <div className="p-2 border-r border-slate-800">A</div>
                <div className="p-2 border-r border-slate-800">B</div>
                <div className="p-2 border-r border-slate-800">C</div>
                <div className="p-2">D</div>
              </div>

              {/* Rows 1 to 4 */}
              {[1, 2, 3, 4].map((rowNum) => (
                <div key={rowNum} className="grid grid-cols-5 border-b border-slate-800/80 font-mono text-xs">
                  {/* Row Number Header */}
                  <div className="p-3 text-center bg-slate-950 text-slate-500 font-bold border-r border-slate-800 flex items-center justify-center">
                    {rowNum}
                  </div>

                  {/* Cells in Row */}
                  {['A', 'B', 'C', 'D'].map((colLetter) => {
                    const cellAddr = `${colLetter}${rowNum}`;
                    const placed = placedCells[cellAddr];

                    return (
                      <div
                        key={cellAddr}
                        onClick={() => handleCellDrop(cellAddr)}
                        className={`p-2.5 min-h-[52px] border-r border-slate-800/60 last:border-r-0 cursor-pointer transition-all flex flex-col justify-center relative group ${
                          placed
                            ? 'bg-slate-900/90'
                            : 'hover:bg-emerald-950/20 bg-slate-900/40'
                        }`}
                      >
                        {placed ? (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`w-full ${placed.alignment === 'right' ? 'text-right' : 'text-left'}`}
                          >
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                              placed.alignment === 'right'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                : 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                            }`}>
                              {placed.actualDisplay}
                            </span>
                          </motion.div>
                        ) : (
                          <span className="text-[10px] text-slate-700 group-hover:text-emerald-400/60 select-none">
                            {cellAddr}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Zero Warning Banner */}
            {leadZeroWarning && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/50 text-amber-200 text-xs flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Zero Vanished!</strong> Spreadsheet treated <code>0771234567</code> as a numeric integer and dropped the leading zero. Use <code>'0771234567</code> with single quote to preserve it.
                </span>
              </motion.div>
            )}

            {/* Grid Stats Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
              <span>MAX ROWS: 1,048,576</span>
              <span>MAX COLS: 16,384 (A to XFD)</span>
            </div>
          </div>
        </div>

        {/* Right: Data Conveyor & Alignment Rules */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase font-mono">
                Data Conveyor Tokens
              </span>
              <span className="text-[10px] text-slate-400">Click token ➔ Click cell to drop</span>
            </div>

            <div className="space-y-2">
              {TOKENS.map((token) => {
                const isSelected = selectedToken?.id === token.id;

                return (
                  <div
                    key={token.id}
                    onClick={() => { sound.playClick(); setSelectedToken(token); }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-400 shadow-lg shadow-emerald-500/10'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{token.label}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        token.correctAlignment === 'right' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-cyan-500/20 text-cyan-300'
                      }`}>
                        {token.correctAlignment.toUpperCase()} ALIGNED
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">{token.explanationEn}</p>
                    <p className="text-[10px] text-slate-400 font-sinhala mt-0.5">{token.explanationSi}</p>
                  </div>
                );
              })}
            </div>

            {/* Examination Quick Sheet */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="text-white font-bold flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>O/L Exam Golden Rules:</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                <li><strong>Labels / Text (පෙළ):</strong> Automatically left-aligned.</li>
                <li><strong>Values / Numbers (සංඛ්‍යා):</strong> Automatically right-aligned.</li>
                <li><strong>Single Quote ( ' ):</strong> Forces numbers to be treated as text (e.g. NICs, Telephone numbers).</li>
                <li><strong>Formulas:</strong> MUST always begin with an equal sign (<code>=</code>).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
