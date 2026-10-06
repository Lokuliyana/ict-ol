'use client';

import React, { useState } from 'react';
import { CreditCard, Sparkles, CheckCircle2, AlertCircle, Calendar, User } from 'lucide-react';
import { decodeSriLankanNIC, NICDecodeResult } from '@/utils/nicDecoder';

export function NICDecoder() {
  const [nicInput, setNicInput] = useState('853410123V');
  const [result, setResult] = useState<NICDecodeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDecode = (val: string) => {
    const { result: res, error: err } = decodeSriLankanNIC(val);
    if (err) {
      setError(err);
      setResult(null);
    } else if (res) {
      setError(null);
      setResult(res);
    }
  };

  React.useEffect(() => {
    handleDecode(nicInput);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 to-blue-50/70 dark:from-slate-800/80 dark:to-indigo-950/40 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900 shadow-sm my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-indigo-100 dark:border-indigo-800/60 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              Interactive NIC Number Decoder
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold">
                Textbook Exp 2
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              ජාතික හැඳුනුම්පත් අංකය විශ්ලේෂණය කර දත්ත ➔ තොරතුරු බවට පත් කිරීම
            </p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => {
              setNicInput('853410123V');
              handleDecode('853410123V');
            }}
            className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 font-medium"
          >
            Example 1 (9-digit)
          </button>
          <button
            onClick={() => {
              setNicInput('200552301980');
              handleDecode('200552301980');
            }}
            className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 font-medium"
          >
            Example 2 (12-digit)
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={nicInput}
            onChange={(e) => {
              setNicInput(e.target.value);
              handleDecode(e.target.value);
            }}
            placeholder="e.g. 853410123V or 200552301980"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={() => handleDecode(nicInput)}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Decode / විශ්ලේෂණය කරන්න</span>
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs border border-rose-200 dark:border-rose-900">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {/* Card 1: Raw Data */}
          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                Raw Data (අමුදත්ත)
              </span>
              <div className="font-mono text-lg font-extrabold text-slate-800 dark:text-slate-100">
                {result.clean}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {result.isOldFormat ? 'Old 9-digit format (පැරණි 9-අංක ආකෘතිය)' : 'New 12-digit format (නව 12-අංක ආකෘතිය)'}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
              <span className="font-semibold">Day Sequence:</span> {result.dayOfYear} of 366
            </div>
          </div>

          {/* Card 2: Extracted Information */}
          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-900 shadow-sm space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
              Meaningful Information (තොරතුරු)
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" /> Date of Birth:
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{result.birthDateFormattedEn}</span>
              </div>
              <div className="text-[11px] text-right text-indigo-600 dark:text-indigo-300 font-sinhala font-medium">
                {result.birthDateFormattedSi}
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 flex items-center gap-1">
                  <User className="w-3 h-3 text-slate-400" /> Gender:
                </span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{result.gender}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Approx. Age:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{result.approximateAge} years</span>
              </div>
            </div>
          </div>

          {/* Card 3: Pedagogical Takeaway */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Exam Takeaway (විභාග සංකල්පය)</span>
              </span>
              <p className="text-[11px] text-emerald-900 dark:text-emerald-200 leading-relaxed font-sinhala">
                අංක පෙළ තනිව ගත් කල අර්ථයක් නැත (දත්ත). එය විශ්ලේෂණය කළ පසු පුද්ගලයාගේ උපන් දිනය, වයස හා ලිංගය (තොරතුරු) ලැබෙන අතර එමඟින් තීරණ ගත හැක!
              </p>
            </div>
            <div className="mt-2 text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">
              Data (341) ➔ Processing ➔ Info ({result.birthMonth} {result.birthDay}, {result.gender.split(' ')[0]})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
