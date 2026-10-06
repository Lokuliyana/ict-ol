'use client';

import React from 'react';
import { X, BookOpen, ExternalLink, Lightbulb } from 'lucide-react';
import { GlossaryTerm } from '@/data/lesson01Data';

interface KeyTermsModalProps {
  term: GlossaryTerm | null;
  onClose: () => void;
}

export function KeyTermsModal({ term, onClose }: KeyTermsModalProps) {
  if (!term) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Textbook Glossary & Concept Sync
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{term.termEn}</span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="font-sinhala text-indigo-600 dark:text-indigo-400">{term.termSi}</span>
            </h3>
          </div>
        </div>

        {/* Content Side-by-Side */}
        <div className="space-y-4">
          
          {/* Definition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-1">
                English Medium Definition
              </span>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {term.defEn}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-1 font-sinhala">
                සිංහල මාධ්‍ය අර්ථ දැක්වීම
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-sinhala leading-relaxed">
                {term.defSi}
              </p>
            </div>
          </div>

          {/* Textbook Example */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Official Textbook Example (පෙළපොත් උදාහරණය)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <p className="text-slate-700 dark:text-slate-300 italic">
                &ldquo;{term.exampleEn}&rdquo;
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-sinhala leading-relaxed">
                &ldquo;{term.exampleSi}&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-white transition-colors"
          >
            Close / වසන්න
          </button>
        </div>

      </div>
    </div>
  );
}
