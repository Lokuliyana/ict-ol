'use client';

import React from 'react';
import { Gamepad2, Sparkles } from 'lucide-react';
import { TactileWidgetConfig } from '@/types/treeSyllabus';
import { AtomicTactileResolver, getAtomicTactileWidget } from '../registry/AtomicTactileRegistry';

export interface EmbeddedTactileWidgetProps {
  config: TactileWidgetConfig;
  language?: 'en' | 'si' | 'dual';
  className?: string;
}

/**
 * EmbeddedTactileWidget
 * Phase 4: Atomic Tactile Widget Container embedded directly inside concept leaves.
 *
 * Renders:
 * - Header pill: 🎮 INTERACTIVE MISSION
 * - Bilingual titles (titleEn / titleSi)
 * - Resolved atomic widget without nested "Russian doll" sub-tabs
 */
export function EmbeddedTactileWidget({
  config,
  language = 'en',
  className = '',
}: EmbeddedTactileWidgetProps) {
  const primaryTitle =
    language === 'si' ? config.titleSi || config.titleEn : config.titleEn;
  const secondaryTitle =
    language === 'dual'
      ? config.titleSi
      : language === 'si'
      ? config.titleEn
      : config.titleSi;

  return (
    <div
      data-testid="embedded-tactile-widget-container"
      data-widget-key={config.widgetKey}
      className={`rounded-2xl border border-sky-200/80 dark:border-sky-900/60 bg-gradient-to-b from-sky-50/40 via-slate-50/20 to-indigo-50/30 dark:from-sky-950/20 dark:via-slate-900/40 dark:to-indigo-950/20 p-4 sm:p-5 shadow-xs space-y-4 transition-all ${className}`}
    >
      {/* Tactile Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-sky-100 dark:border-sky-900/40">
        <div className="space-y-1">
          {/* Header Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-200 dark:border-sky-800 shadow-xs">
            <Gamepad2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span data-testid="interactive-mission-pill">🎮 INTERACTIVE MISSION</span>
          </div>

          {/* Bilingual Title */}
          <h4
            data-testid="tactile-widget-title"
            className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex flex-wrap items-baseline gap-x-2"
          >
            <span>{primaryTitle}</span>
            {secondaryTitle && secondaryTitle !== primaryTitle && (
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-sinhala">
                ({secondaryTitle})
              </span>
            )}
          </h4>
        </div>
      </div>

      {/* Embedded Atomic Widget Body */}
      <div className="tactile-widget-body relative rounded-xl overflow-hidden">
        <AtomicTactileResolver
          widgetKey={config.widgetKey}
          hideInternalTabs={config.hideInternalTabs ?? true}
          defaultSubMode={config.defaultSubMode}
          props={config.props}
          fallback={
            <div className="p-4 rounded-xl border border-dashed border-sky-200 dark:border-sky-900 bg-white/60 dark:bg-slate-900/60 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Interactive module &quot;{config.widgetKey}&quot; active.</span>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default EmbeddedTactileWidget;
