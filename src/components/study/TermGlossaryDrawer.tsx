'use client';

import React from 'react';
import { Volume2, X, Sparkles, BookMarked, ExternalLink } from 'lucide-react';
import { speakTechnicalTerm } from '@/utils/speechUtils';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';
import { useGameStore } from '@/lib/store';

export interface GlossaryTermData {
  termEn: string;
  termSi: string;
  definitionEn: string;
  definitionSi: string;
  analogyEn?: string;
  analogySi?: string;
  acronym?: string;
}

interface TermGlossaryDrawerProps {
  termData: GlossaryTermData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TermGlossaryDrawer({
  termData,
  isOpen,
  onClose,
}: TermGlossaryDrawerProps) {
  const toggleBookmark = useGameStore((s) => s.toggleBookmark);
  const bookmarks = useGameStore((s) => s.bookmarks || []);
  const language = useGameStore((s) => s.language);

  if (!isOpen || !termData) return null;

  const isBookmarked = bookmarks.includes(termData.termEn);

  const handlePronounce = () => {
    sound.playClick(800);
    triggerHaptic('light');
    speakTechnicalTerm(termData.acronym || termData.termEn);
  };

  const handleBookmarkToggle = () => {
    sound.playTada();
    triggerHaptic('medium');
    toggleBookmark(termData.termEn);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full sm:max-w-lg bg-white dark:bg-slate-900 border-t sm:border border-slate-200 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto pb-safe">
        {/* Mobile handle indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-2" />

        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full">
                Syllabus Term Popover
              </span>
              {termData.acronym && (
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full">
                  Acronym: {termData.acronym}
                </span>
              )}
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              {termData.termEn}
              <button
                onClick={handlePronounce}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-400 transition-colors"
                title="Pronounce Technical Term"
                aria-label={`Pronounce ${termData.termEn}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h3>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 si-optical">
              {termData.termSi}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleBookmarkToggle}
              className={`p-2 rounded-xl border transition-all ${
                isBookmarked
                  ? 'bg-amber-500 text-white border-amber-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-amber-500 border-slate-200 dark:border-slate-700'
              }`}
              title="Bookmark Term"
              aria-label="Bookmark Term"
            >
              <BookMarked className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.playClick(400);
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Close Popover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual-Medium Definitions */}
        <div className="space-y-3 pt-2">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Formal Definition (English)
            </span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {termData.definitionEn}
            </p>
          </div>

          <div className="p-3.5 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
            <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
              නිල අර්ථ දැක්වීම (සිංහල)
            </span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed si-optical font-medium">
              {termData.definitionSi}
            </p>
          </div>

          {/* Everyday Analogy if provided */}
          {(termData.analogyEn || termData.analogySi) && (
            <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/30 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Everyday Analogy (මතක තබාගැනීමේ උදාහරණය)
              </span>
              {termData.analogyEn && (
                <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  💡 {termData.analogyEn}
                </p>
              )}
              {termData.analogySi && (
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed si-optical pt-1">
                  💡 {termData.analogySi}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer Dismiss Button */}
        <button
          onClick={() => {
            sound.playClick(600);
            onClose();
          }}
          className="w-full min-touch-target py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-extrabold text-sm transition-all shadow-md"
        >
          {language === 'si' ? 'තේරුණා • ඉදිරියට' : 'Understood • Continue'}
        </button>
      </div>
    </div>
  );
}
