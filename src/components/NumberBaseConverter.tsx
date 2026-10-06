'use client';

import React, { useState } from 'react';
import { Binary, Sparkles, RefreshCw, Layers } from 'lucide-react';

export function NumberBaseConverter() {
  const [decInput, setDecInput] = useState<string>('42');

  const num = parseInt(decInput, 10);
  const isValid = !isNaN(num) && num >= 0 && num <= 65535;

  const bin = isValid ? num.toString(2) : '-';
  const oct = isValid ? num.toString(8) : '-';
  const hex = isValid ? num.toString(16).toUpperCase() : '-';

  // 8-bit representation
  const bin8 = isValid ? num.toString(2).padStart(8, '0') : '00000000';

  return (
    <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-slate-800/80 dark:to-blue-950/40 p-5 rounded-2xl border border-blue-100 dark:border-blue-900 shadow-sm my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-blue-100 dark:border-blue-800/60 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              Interactive Number Base Converter
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                Unit 2 Tool
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              දශමය, ද්වීමය, අෂ්ටමය හා ෂඩ්දශමය සංඛ්‍යා සජීවී පරිවර්තනය
            </p>
          </div>
        </div>

        <div className="flex gap-1.5">
          {[13, 27, 42, 255].map((preset) => (
            <button
              key={preset}
              onClick={() => setDecInput(String(preset))}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 font-medium"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          Enter Decimal Number (0 – 65535) / දශම සංඛ්‍යාව:
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            min="0"
            max="65535"
            value={decInput}
            onChange={(e) => setDecInput(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {isValid && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Decimal */}
          <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Decimal (පාදය 10)</span>
            <div className="font-mono text-lg font-black text-slate-800 dark:text-white">{num}₁₀</div>
          </div>

          {/* Binary */}
          <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-800 shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-0.5">Binary (පාදය 2)</span>
            <div className="font-mono text-lg font-black text-blue-600 dark:text-blue-400">{bin}₂</div>
          </div>

          {/* Octal */}
          <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800 shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 block mb-0.5">Octal (පාදය 8)</span>
            <div className="font-mono text-lg font-black text-amber-700 dark:text-amber-400">{oct}₈</div>
          </div>

          {/* Hexadecimal */}
          <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800 shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400 block mb-0.5">Hex (පාදය 16)</span>
            <div className="font-mono text-lg font-black text-purple-700 dark:text-purple-400">{hex}₁₆</div>
          </div>
        </div>
      )}

      {isValid && (
        <div className="mt-3 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-600 dark:text-slate-300">8-bit Binary Byte:</span>
            <div className="flex gap-1 font-mono font-bold">
              {bin8.slice(-8).split('').map((bit, idx) => (
                <span
                  key={idx}
                  className={`w-5 h-6 rounded flex items-center justify-center text-xs ${
                    bit === '1'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {bit}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-slate-500 font-sinhala">
            1 බයිට් = බිටු 8 (ASCII / දත්ත ඒකකය)
          </span>
        </div>
      )}
    </div>
  );
}
