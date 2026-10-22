'use client';

import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import { Volume2, VolumeX, Sparkles, X, Languages } from 'lucide-react';
import { speakTechnicalTerm } from '@/utils/speechUtils';
import { lookupGlossaryTerm, TechnicalTermEntry } from '@/data/bilingualGlossary';
import { useGameStore } from '@/lib/store';

export interface BilingualTermPeekProps {
  termEn: string;
  termSi?: string;
  currentLanguage?: 'en' | 'si' | 'dual';
  phonetic?: string;
  glossaryNoteEn?: string;
  glossaryNoteSi?: string;
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * BilingualTermPeek
 * Renders technical terms with an elegant dotted underline.
 * On click/tap or hover, reveals a floating tooltip bubble containing:
 * - Translation in the alternate language
 * - Audio pronunciation button via Web Speech API
 * - Official NIE textbook glossary note and phonetic guide
 * - Fully accessible keyboard (Enter/Space to toggle, Escape to close) and outside-click dismiss
 */
export function BilingualTermPeek({
  termEn,
  termSi,
  currentLanguage,
  phonetic,
  glossaryNoteEn,
  glossaryNoteSi,
  children,
  className = '',
  defaultOpen = false,
  onOpen,
  onClose,
}: BilingualTermPeekProps) {
  const storeLanguageMode = useGameStore((s) => s.languageMode || (s.language === 'si' ? 'si' : 'en'));
  const effectiveLanguage = currentLanguage || storeLanguageMode || 'en';

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tooltipId = useId();

  // Resolve glossary details
  const glossaryEntry: TechnicalTermEntry | undefined =
    lookupGlossaryTerm(termEn) || (termSi ? lookupGlossaryTerm(termSi) : undefined);

  const resolvedTermEn = termEn || glossaryEntry?.termEn || '';
  const resolvedTermSi = termSi || glossaryEntry?.termSi || '';
  const resolvedPhonetic = phonetic || glossaryEntry?.phonetic || '';
  const resolvedNoteEn = glossaryNoteEn || glossaryEntry?.glossaryNoteEn || '';
  const resolvedNoteSi = glossaryNoteSi || glossaryEntry?.glossaryNoteSi || '';

  // Handle open / close callbacks
  const handleOpen = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const handleToggle = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    },
    [isOpen, handleClose, handleOpen]
  );

  // Mouse hover handlers with grace period
  const handleMouseEnter = useCallback(() => {
    handleOpen();
  }, [handleOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      handleClose();
    }, 180);
  }, [handleClose]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Outside click & global Escape handler
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        handleClose();
        // Return focus to the trigger element
        const trigger = containerRef.current?.querySelector('[data-testid="bilingual-term-trigger"]') as HTMLElement | null;
        trigger?.focus();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isOpen, handleClose]);

  // Pronunciation handler: pronounces English technical term (or Sinhala if only Sinhala term present)
  const handleSpeak = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsPlayingAudio(true);
      const success = resolvedTermEn
        ? speakTechnicalTerm(resolvedTermEn, 'en')
        : speakTechnicalTerm(resolvedTermSi, 'si');
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 1200);
      return success;
    },
    [resolvedTermEn, resolvedTermSi]
  );

  // Determine what text to display on the trigger
  const prefersSinhala = effectiveLanguage === 'si';

  let triggerDisplay: React.ReactNode;
  let isTriggerSinhala: boolean;

  if (children) {
    triggerDisplay = children;
    isTriggerSinhala = typeof children === 'string'
      ? /[\u0D80-\u0DFF]/.test(children)
      : prefersSinhala;
  } else if (prefersSinhala) {
    triggerDisplay = resolvedTermSi || resolvedTermEn;
    isTriggerSinhala = Boolean(resolvedTermSi);
  } else {
    triggerDisplay = resolvedTermEn || resolvedTermSi;
    isTriggerSinhala = !resolvedTermEn && Boolean(resolvedTermSi);
  }

  // Alternate translation displayed inside tooltip - guaranteed opposite language
  const alternateTerm = isTriggerSinhala
    ? resolvedTermEn || resolvedTermSi
    : resolvedTermSi || resolvedTermEn;
  const sourceTerm = isTriggerSinhala
    ? resolvedTermSi || resolvedTermEn
    : resolvedTermEn || resolvedTermSi;

  const alternateLabel =
    isTriggerSinhala ? 'English Term' : 'සිංහල පාරිභාෂික පදය';
  const alternateLangCode = isTriggerSinhala ? 'en' : 'si';

  const relevantGlossaryNote =
    prefersSinhala
      ? resolvedNoteSi || resolvedNoteEn
      : resolvedNoteEn || resolvedNoteSi;

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. DOTTED UNDERLINE INTERACTIVE TRIGGER */}
      <span
        data-testid="bilingual-term-trigger"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? tooltipId : undefined}
        aria-label={`Bilingual term: ${resolvedTermEn} - ${resolvedTermSi}. Tap to peek translation.`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle(e);
          }
        }}
        className="border-b border-dotted border-indigo-400 dark:border-indigo-500 cursor-pointer text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors duration-150 inline-flex items-center gap-0.5 select-text"
      >
        <span>{triggerDisplay}</span>
      </span>

      {/* 2. FLOATING BILINGUAL TOOLTIP BUBBLE */}
      {isOpen && (
        <div
          id={tooltipId}
          ref={tooltipRef}
          data-testid="bilingual-term-tooltip"
          role="dialog"
          aria-label="Bilingual translation and glossary definition"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-150 dark:border-indigo-900/60 shadow-xl text-slate-800 dark:text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-150 select-text"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar: Pill Tag & Close Button */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/60 dark:border-indigo-800/60 text-[10px] font-bold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
              <Languages className="w-3 h-3 text-indigo-500" />
              <span>Tap-to-Peek • {alternateLabel}</span>
            </div>

            <button
              type="button"
              data-testid="bilingual-tooltip-close"
              onClick={handleClose}
              aria-label="Close translation tooltip"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main Translation Row */}
          <div className="space-y-1 mb-2.5">
            <div className="flex items-baseline justify-between gap-2">
              <span
                data-testid="bilingual-alternate-term"
                className={`text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400 leading-snug ${
                  alternateLangCode === 'si' ? 'font-sinhala' : 'font-sans'
                }`}
              >
                {alternateTerm || sourceTerm}
              </span>

              {/* Audio Pronunciation Button */}
              {Boolean(resolvedTermEn || resolvedTermSi) && (
                <button
                  type="button"
                  data-testid="bilingual-audio-btn"
                  onClick={handleSpeak}
                  aria-label={`Listen to pronunciation of ${resolvedTermEn || resolvedTermSi}`}
                  title={`Pronounce "${resolvedTermEn || resolvedTermSi}"`}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                    isPlayingAudio
                      ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400/40'
                      : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/70 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                  <span>Pronounce</span>
                </button>
              )}
            </div>

            {/* Source Reference & Phonetic Guide */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="font-mono text-slate-400">[{sourceTerm}]</span>
              {resolvedPhonetic && (
                <span
                  data-testid="bilingual-phonetic"
                  className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 bg-indigo-50/70 dark:bg-slate-800 px-1.5 py-0.2 rounded"
                >
                  /{resolvedPhonetic}/
                </span>
              )}
            </div>
          </div>

          {/* Textbook Glossary Note / Concept Context */}
          {relevantGlossaryNote && (
            <div
              data-testid="bilingual-glossary-note"
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-150 dark:border-slate-700/60 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                <span>NIE Textbook Glossary</span>
              </div>
              <p className={effectiveLanguage === 'si' ? 'font-sinhala' : 'font-sans'}>
                {relevantGlossaryNote}
              </p>
            </div>
          )}

          {/* Pointer Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white dark:border-t-slate-900 drop-shadow-xs" />
        </div>
      )}
    </span>
  );
}
