'use client';

import React, { useState } from 'react';
import { Edit3, Eraser, X, Copy, Check } from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScratchpadModal({ isOpen, onClose }: ScratchpadModalProps) {
  const [scratchText, setScratchText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleClear = () => {
    sound.playClick(400);
    triggerHaptic('light');
    setScratchText('');
  };

  const handleCopy = () => {
    if (!scratchText) return;
    navigator.clipboard?.writeText(scratchText);
    sound.playPop();
    triggerHaptic('success');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="clay-card w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl flex flex-col space-y-4 max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950/60 rounded-xl text-indigo-600 dark:text-indigo-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Calculation Scratchpad
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Binary addition, hex conversions, and quick rough work
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick helper buttons for binary & powers of 2 */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['128', '64', '32', '16', '8', '4', '2', '1', '+', '=', 'MOD', 'DIV'].map((chip) => (
            <button
              key={chip}
              onClick={() => {
                sound.playClick(900);
                triggerHaptic('light');
                setScratchText((prev) => prev + (prev.endsWith(' ') || prev.length === 0 ? '' : ' ') + chip + ' ');
              }}
              className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-200 rounded-lg transition-all border border-slate-200/80 dark:border-slate-700/80"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          value={scratchText}
          onChange={(e) => setScratchText(e.target.value)}
          placeholder={`Type rough math here...\nExample:\n  128  64  32  16   8   4   2   1\n    0   1   0   0   1   0   1   0  = 64 + 8 + 2 = 74`}
          className="w-full h-48 sm:h-56 p-3 font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none leading-relaxed"
          autoFocus
        />

        {/* Actions bar */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handleClear}
            disabled={!scratchText}
            className="px-3 py-2 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 disabled:opacity-40 transition-colors flex items-center gap-1.5"
          >
            <Eraser className="w-4 h-4" />
            <span>Clear</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={!scratchText}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={() => {
                sound.playClick(600);
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
