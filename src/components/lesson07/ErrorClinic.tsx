'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  Layers, 
  Sliders,
  Check,
  ShieldCheck,
  Search
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ErrorCase {
  id: string;
  code: string;
  titleEn: string;
  titleSi: string;
  symptom: string;
  formula: string;
  solutionType: 'slider' | 'cell_edit' | 'spell_check' | 'value_fix';
  fixed: boolean;
  explanationEn: string;
  explanationSi: string;
}

export function ErrorClinic() {
  const [activeCaseId, setActiveCaseId] = useState<string>('c1');

  // Interactive Fix States
  const [colWidth, setColWidth] = useState<number>(60);
  const [denominator, setDenominator] = useState<number>(0);
  const [selectedSpell, setSelectedSpell] = useState<string>('AVRAGE');
  const [typedMultiplier, setTypedMultiplier] = useState<string>('Ten');

  const [resolvedCases, setResolvedCases] = useState<Record<string, boolean>>({});

  const errorCases: ErrorCase[] = [
    {
      id: 'c1',
      code: '#####',
      titleEn: 'Column Too Narrow',
      titleSi: 'තීරුවේ පළල මදි වීම',
      symptom: 'Cell contains large currency amount Rs. 1,500,000.00 but shows #####.',
      formula: '= 1500000.00',
      solutionType: 'slider',
      fixed: colWidth >= 120,
      explanationEn: 'The column width is too narrow to display the formatted numeric value. Drag column width wider to reveal numbers.',
      explanationSi: 'සංඛ්‍යාත්මක අගය පෙන්වීමට තීරුවේ පළල ප්‍රමාණවත් නොවීම නිසා ##### දිස්වේ.'
    },
    {
      id: 'c2',
      code: '#DIV/0!',
      titleEn: 'Division by Zero',
      titleSi: 'බිංදුවෙන් බෙදීමේ දෝෂය',
      symptom: 'Formula divides total marks by 0 student count.',
      formula: `= 100 / ${denominator}`,
      solutionType: 'cell_edit',
      fixed: denominator > 0,
      explanationEn: 'Mathematical rules prohibit dividing any number by zero or an empty cell.',
      explanationSi: 'කිසියම් සංඛ්‍යාවක් බිංදුවෙන් හෝ හිස් සෛලයකින් බෙදීමට උත්සාහ කළ විට #DIV/0! දෝෂය ඇතිවේ.'
    },
    {
      id: 'c3',
      code: '#NAME?',
      titleEn: 'Unrecognized Function Name',
      titleSi: 'හඳුනා නොගත් ශ්‍රිත නාමය',
      symptom: 'User typed =AVRAGE(A1:A5) instead of =AVERAGE(A1:A5).',
      formula: `=${selectedSpell}(A1:A5)`,
      solutionType: 'spell_check',
      fixed: selectedSpell === 'AVERAGE',
      explanationEn: 'The spreadsheet engine cannot recognize misspelled function keywords.',
      explanationSi: 'ශ්‍රිත නාමය වැරදියට අක්ෂර වින්‍යාසය කළ විට (උදා: =AVRAGE) #NAME? දෝෂය ලැබේ.'
    },
    {
      id: 'c4',
      code: '#VALUE!',
      titleEn: 'Incompatible Data Type',
      titleSi: 'නොගැලපෙන දත්ත වර්ගය',
      symptom: 'Attempting to mathematically multiply numeric 50 by text string "Ten".',
      formula: `= 50 * "${typedMultiplier}"`,
      solutionType: 'value_fix',
      fixed: typedMultiplier === '10' || typedMultiplier === '5',
      explanationEn: 'Mathematical operators (*, /, +, -) require numeric operands, not text labels.',
      explanationSi: 'ගණිත කර්ම සඳහා පෙළ (Text) අගයන් යෙදූ විට #VALUE! දෝෂය ඇතිවේ.'
    }
  ];

  const currentCase = errorCases.find(c => c.id === activeCaseId) || errorCases[0];

  const handleSelectCase = (id: string) => {
    sound.playClick(650);
    setActiveCaseId(id);
  };

  const handleSliderChange = (val: number) => {
    sound.playClick(700, 0.02);
    setColWidth(val);
    if (val >= 120 && !resolvedCases['c1']) {
      sound.playSuccess();
      setResolvedCases(prev => ({ ...prev, c1: true }));
    }
  };

  const handleFixDenominator = (val: number) => {
    sound.playClick(700, 0.02);
    setDenominator(val);
    if (val > 0 && !resolvedCases['c2']) {
      sound.playSuccess();
      setResolvedCases(prev => ({ ...prev, c2: true }));
    }
  };

  const handleSelectSpellOption = (opt: string) => {
    sound.playClick();
    setSelectedSpell(opt);
    if (opt === 'AVERAGE') {
      sound.playSuccess();
      setResolvedCases(prev => ({ ...prev, c3: true }));
    } else {
      sound.playError();
    }
  };

  const handleFixMultiplier = (val: string) => {
    sound.playClick();
    setTypedMultiplier(val);
    if (val === '10') {
      sound.playSuccess();
      setResolvedCases(prev => ({ ...prev, c4: true }));
    } else {
      sound.playError();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 05 • දෝෂ සංකේත සායනය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Diagnostic & Troubleshooting Bench
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-emerald-400" />
            The Diagnostic Clinic (පැතුරුම්පත් දෝෂ හඳුනාගැනීම සහ පිළියම්)
          </h2>
          <p className="text-xs text-slate-300">
            Diagnose and cure common spreadsheet error flags: <code>#####</code>, <code>#DIV/0!</code>, <code>#NAME?</code>, and <code>#VALUE!</code>.
          </p>
        </div>

        {/* Progress Counter */}
        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Cured Patients:</span>
          <span className="text-emerald-400 font-bold">{Object.keys(resolvedCases).length} / 4</span>
        </div>
      </div>

      {/* 4 Error Cases Selector Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {errorCases.map(c => {
          const isSelected = activeCaseId === c.id;
          const isFixed = resolvedCases[c.id];

          return (
            <button
              key={c.id}
              onClick={() => handleSelectCase(c.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-emerald-950/60 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base font-black font-mono text-white">{c.code}</span>
                {isFixed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <div className="text-xs font-bold text-slate-200">{c.titleEn}</div>
              <div className="text-[10px] text-emerald-400/80 font-sinhala">{c.titleSi}</div>
            </button>
          );
        })}
      </div>

      {/* Active Diagnostic Bench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Troubleshooting Sandbox */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-white">PATIENT DIAGNOSTIC MONITOR</span>
              <span className="text-xs font-mono font-bold text-emerald-400">CASE: {currentCase.code}</span>
            </div>

            {/* Simulated Broken Cell */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-3">
              <span className="text-xs font-mono text-slate-400">Spreadsheet Cell View:</span>

              {/* Patient 1: Column Width */}
              {currentCase.id === 'c1' && (
                <div
                  style={{ width: `${colWidth}px` }}
                  className="h-14 bg-slate-950 border-2 border-emerald-500/50 rounded-xl flex items-center justify-center font-mono font-bold text-sm overflow-hidden text-emerald-300 transition-all shadow-inner"
                >
                  {colWidth >= 120 ? 'Rs. 1,500,000.00' : '#####'}
                </div>
              )}

              {/* Patient 2: DIV/0 */}
              {currentCase.id === 'c2' && (
                <div className="px-6 py-3 bg-slate-950 border-2 border-emerald-500/50 rounded-xl font-mono font-bold text-base text-emerald-300">
                  {denominator > 0 ? (100 / denominator).toFixed(2) : '#DIV/0!'}
                </div>
              )}

              {/* Patient 3: NAME? */}
              {currentCase.id === 'c3' && (
                <div className="px-6 py-3 bg-slate-950 border-2 border-emerald-500/50 rounded-xl font-mono font-bold text-base text-emerald-300">
                  {selectedSpell === 'AVERAGE' ? '78.50 (Computed)' : '#NAME?'}
                </div>
              )}

              {/* Patient 4: VALUE! */}
              {currentCase.id === 'c4' && (
                <div className="px-6 py-3 bg-slate-950 border-2 border-emerald-500/50 rounded-xl font-mono font-bold text-base text-emerald-300">
                  {typedMultiplier === '10' ? '500.00' : '#VALUE!'}
                </div>
              )}
            </div>

            {/* Interactive Cure Controls */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-white flex items-center gap-1.5 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Apply Medical Prescription / Fix:</span>
              </span>

              {/* Fix 1: Column Width Slider */}
              {currentCase.id === 'c1' && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>Drag Column Width Caliper:</span>
                    <span>{colWidth}px (Requires &gt;= 120px)</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="180"
                    value={colWidth}
                    onChange={(e) => handleSliderChange(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
              )}

              {/* Fix 2: Denominator Correction */}
              {currentCase.id === 'c2' && (
                <div className="space-y-2">
                  <div className="text-xs text-slate-300">Select Non-Zero Denominator in cell B5:</div>
                  <div className="flex gap-2">
                    {[0, 2, 5, 10].map(val => (
                      <button
                        key={val}
                        onClick={() => handleFixDenominator(val)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border ${
                          denominator === val
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                            : 'bg-slate-950 border-slate-700 text-slate-300'
                        }`}
                      >
                        B5 = {val}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Fix 3: Spell Checker */}
              {currentCase.id === 'c3' && (
                <div className="space-y-2">
                  <div className="text-xs text-slate-300">Choose the correct built-in function spelling:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['AVRAGE', 'AVERAGE', 'AVG'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelectSpellOption(opt)}
                        className={`p-2 rounded-xl text-xs font-mono font-bold border ${
                          selectedSpell === opt
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                            : 'bg-slate-950 border-slate-700 text-slate-300'
                        }`}
                      >
                        ={opt}()
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Fix 4: Multiplier Replacement */}
              {currentCase.id === 'c4' && (
                <div className="space-y-2">
                  <div className="text-xs text-slate-300">Replace string label with valid numeric operand:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Ten', '10'].map(val => (
                      <button
                        key={val}
                        onClick={() => handleFixMultiplier(val)}
                        className={`p-2 rounded-xl text-xs font-mono font-bold border ${
                          typedMultiplier === val
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                            : 'bg-slate-950 border-slate-700 text-slate-300'
                        }`}
                      >
                        {val === 'Ten' ? 'Text String "Ten"' : 'Numeric Value 10'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Error Encyclopedia */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
              Examiner Error Code Summary
            </h4>
            <div className="space-y-2.5 text-[11px] text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">##### :</strong> Column too narrow for numbers or dates.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">#DIV/0! :</strong> Division by zero or an empty cell.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">#NAME? :</strong> Unrecognized/misspelled function name.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">#VALUE! :</strong> Inappropriate data type in mathematical formula.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">#REF! :</strong> Formula references a deleted cell or range.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
