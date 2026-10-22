'use client';

import React from 'react';
import { ArrowRight, ArrowDownUp } from 'lucide-react';
import { BilingualTermPeek } from '@/components/study/BilingualTermPeek';
import { lookupGlossaryTerm } from '@/data/bilingualGlossary';
import { useGameStore } from '@/lib/store';

export interface FormattedTextProps {
  content: string;
  className?: string;
  language?: 'en' | 'si' | 'dual';
  enableTermPeek?: boolean;
}

const subMap: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
};

const supMap: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

function toSub(str: string): string {
  return str.split('').map(c => subMap[c] || c).join('');
}

function toSup(str: string): string {
  return str.split('').map(c => supMap[c] || c).join('');
}

/**
 * Normalizes raw LaTeX math notation, LaTeX equations, and raw escape tokens into clean Unicode text
 */
export function sanitizeMathAndLatex(raw: string): string {
  if (!raw) return '';
  let s = raw;

  // 0. Protect spreadsheet cell references containing $ (e.g., $A$1, $B$5, $A1, A$1)
  const cellTokens: string[] = [];
  s = s.replace(/(\$?[A-Za-z]+\$?[0-9]+)/g, (match) => {
    if (match.includes('$')) {
      const idx = cellTokens.length;
      cellTokens.push(match);
      return `__SPREADSHEET_CELL_${idx}__`;
    }
    return match;
  });

  // 1. Convert LaTeX functions and text blocks
  s = s.replace(/\\mathbf\{([^}]+)\}/g, '$1');
  s = s.replace(/\\text\{([^}]+)\}/g, '$1');

  // 2. Convert arrows and math symbols
  s = s.replace(/\\xrightarrow\{([^}]+)\}/g, ' ➔ [$1] ➔ ');
  s = s.replace(/\\rightarrow|\\to/g, ' ➔ ');
  s = s.replace(/\\leftarrow/g, ' ⬅ ');
  s = s.replace(/\\updownarrow/g, '↕');
  s = s.replace(/\\implies/g, ' ➔ ');
  s = s.replace(/\\times/g, '×');
  s = s.replace(/\\div/g, '÷');
  s = s.replace(/\\cdot/g, '·');
  s = s.replace(/\\oplus/g, '⊕');
  s = s.replace(/\\ge/g, '≥');
  s = s.replace(/\\le/g, '≤');
  s = s.replace(/\\ne/g, '≠');

  // 3. Convert subscripts and superscripts
  s = s.replace(/_\{([0-9]+)\}/g, (_, m) => toSub(m));
  s = s.replace(/_([0-9])/g, (_, m) => toSub(m));
  s = s.replace(/\^\{([0-9]+)\}/g, (_, m) => toSup(m));
  s = s.replace(/\^([0-9]+)/g, (_, m) => toSup(m));

  // 4. Overbars and primes
  s = s.replace(/\\bar\{([A-Za-z0-9])\}/g, "$1'");
  s = s.replace(/\\overline\{([^}]+)\}/g, "($1)'");

  // 5. Clean LaTeX spacing and escaped symbols
  s = s.replace(/\\ /g, ' ');
  s = s.replace(/\\&/g, '&');
  s = s.replace(/\\_/g, '_');

  // 6. Strip math delimiters $$ and $ while preserving currency if any
  s = s.replace(/\$\$/g, '');
  s = s.replace(/(^|[^\\])\$([0-9A-Za-z\s,×÷·=r➔⬅↕≥≤≠₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹\.\+\-\/'\(\)\[\]]+)\$/g, '$1$2');

  // 7. Restore spreadsheet cell references
  s = s.replace(/__SPREADSHEET_CELL_(\d+)__/g, (_, idx) => cellTokens[Number(idx)]);

  return s;
}

/**
 * Cleanly renders formatted text without leaking raw Markdown or LaTeX artifacts,
 * converting parenthetical translations into interactive single-stream BilingualTermPeeks.
 */
export function FormattedText({
  content,
  className = '',
  language,
  enableTermPeek = true,
}: FormattedTextProps) {
  const storeLanguageMode = useGameStore((s) => s.languageMode || (s.language === 'si' ? 'si' : 'en'));
  // If language not explicitly passed, detect whether content is Sinhala
  const detectedLang: 'en' | 'si' = /[\u0D80-\u0DFF]/.test(content) ? 'si' : 'en';
  const effectiveLanguage =
    language || (storeLanguageMode === 'dual' ? detectedLang : storeLanguageMode) || detectedLang;

  if (!content) return null;

  // Sanitize math/LaTeX across the full content first
  const sanitized = sanitizeMathAndLatex(content);
  const lines = sanitized.split('\n');

  return (
    <div className={`space-y-1.5 ${className}`}>
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lIdx} className="h-1" />;

        // 1. Vertical Transition line (e.g. ↕ or ↕ [Storage])
        if (trimmed === '↕' || trimmed.startsWith('↕ ')) {
          const label = trimmed.replace(/^↕\s*/, '').replace(/^\[(.*)\]$/, '$1').trim();
          return (
            <div key={lIdx} className="flex flex-col items-center justify-center my-1.5 py-0.5 select-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/70 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 font-medium text-[11px] sm:text-xs shadow-2xs">
                <ArrowDownUp className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                {label ? <span>{label}</span> : <span>Bidirectional Dataflow / ද්වි-දිශානත සන්නිවේදනය</span>}
              </div>
            </div>
          );
        }

        // 2. Horizontal Visual Workflow Pipeline (e.g. contains ➔ with multiple stages)
        if (trimmed.includes('➔') && !trimmed.startsWith('* ') && !trimmed.startsWith('- ')) {
          const rawStages = trimmed.split('➔').map(s => s.trim()).filter(Boolean);
          if (rawStages.length >= 2) {
            return (
              <div
                key={lIdx}
                className="my-2 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-indigo-50/50 via-slate-50 to-indigo-50/50 dark:from-slate-900/60 dark:via-slate-800/60 dark:to-slate-900/60 border border-indigo-100 dark:border-slate-800 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                  {rawStages.map((stage, sIdx) => {
                    const cleanStage = stage.replace(/^\[(.*)\]$/, '$1').trim();
                    return (
                      <React.Fragment key={sIdx}>
                        <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-indigo-200/80 dark:border-indigo-700/60 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100 shadow-2xs">
                          {parseInlineStyles(cleanStage, effectiveLanguage, enableTermPeek, `workflow-${lIdx}-${sIdx}`)}
                        </div>
                        {sIdx < rawStages.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          }
        }

        // 3. Heading lines: ####, ###, ##
        if (trimmed.startsWith('#')) {
          const headingText = trimmed.replace(/^#+\s*/, '');
          return (
            <h5
              key={lIdx}
              className="font-bold text-slate-900 dark:text-white pt-1 text-xs sm:text-sm tracking-tight"
            >
              {parseInlineStyles(headingText, effectiveLanguage, enableTermPeek, `heading-${lIdx}`)}
            </h5>
          );
        }

        // 4. Nested / Sub-bullet points: indent >= 2 spaces
        const isIndented = /^(\s{2,}|\t)[*•-]/.test(line);
        if (isIndented) {
          const bulletText = trimmed.replace(/^[*•-]\s*/, '');
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-5 sm:pl-6 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full border border-indigo-400 dark:border-indigo-500 shrink-0 mt-1.5" />
              <div className="flex-1 leading-relaxed text-slate-700 dark:text-slate-300">
                {parseInlineStyles(bulletText, effectiveLanguage, enableTermPeek, `bullet-sub-${lIdx}`)}
              </div>
            </div>
          );
        }

        // 5. Top-level bullet points: *, -, •
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
          const bulletText = trimmed.replace(/^[*•-]\s*/, '');
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
              <div className="flex-1 leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineStyles(bulletText, effectiveLanguage, enableTermPeek, `bullet-${lIdx}`)}
              </div>
            </div>
          );
        }

        // 6. Numbered list: 1., 2., etc.
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const text = numberedMatch[2];
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-2 text-xs sm:text-sm">
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xs shrink-0 mt-0.5">
                {num}.
              </span>
              <div className="flex-1 leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineStyles(text, effectiveLanguage, enableTermPeek, `num-${lIdx}`)}
              </div>
            </div>
          );
        }

        // 7. Standard paragraph line
        return (
          <p key={lIdx} className="leading-relaxed text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            {parseInlineStyles(trimmed, effectiveLanguage, enableTermPeek, `p-${lIdx}`)}
          </p>
        );
      })}
    </div>
  );
}

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'in', 'on', 'at', 'for', 'with', 'by', 'of', 'from', 'to',
  'each', 'every', 'this', 'that', 'these', 'those', 'and', 'or', 'both', 'all',
  'any', 'some', 'such', 'into', 'under', 'over', 'between', 'through', 'about',
  'as', 'modern', 'basic', 'early', 'standard', 'example',
]);

function cleanEnglishCandidate(raw: string): { leading: string; term: string } {
  const words = raw.trim().split(/\s+/);
  if (words.length <= 1) {
    return { leading: '', term: raw.trim() };
  }
  // Check if full phrase or suffix is in glossary
  for (let i = 0; i < words.length; i++) {
    const candidate = words.slice(i).join(' ');
    if (lookupGlossaryTerm(candidate)) {
      const leading = i > 0 ? words.slice(0, i).join(' ') + ' ' : '';
      return { leading, term: candidate };
    }
  }
  // Strip leading stop words
  const leadingWords: string[] = [];
  while (words.length > 1 && STOP_WORDS.has(words[0].toLowerCase())) {
    leadingWords.push(words.shift()!);
  }
  return {
    leading: leadingWords.length > 0 ? leadingWords.join(' ') + ' ' : '',
    term: words.join(' '),
  };
}

function cleanSinhalaCandidate(rawSi: string, enTerm: string): { leading: string; term: string } {
  const trimmedSi = rawSi.trim();
  const words = trimmedSi.split(/\s+/);
  if (words.length <= 1) {
    return { leading: '', term: trimmedSi };
  }

  // 1. Check if enTerm is in glossary and provides official termSi
  const glossaryEntry = lookupGlossaryTerm(enTerm);
  if (glossaryEntry?.termSi) {
    const cleanEntrySi = glossaryEntry.termSi.replace(/\s*\([^)]*\)/, '').trim();
    if (trimmedSi.endsWith(cleanEntrySi)) {
      const leadingPart = trimmedSi.slice(0, trimmedSi.length - cleanEntrySi.length);
      return { leading: leadingPart, term: cleanEntrySi };
    }
  }

  // 2. Check if full candidate or suffix matches glossary
  for (let i = 0; i < words.length; i++) {
    const candidate = words.slice(i).join(' ');
    if (lookupGlossaryTerm(candidate)) {
      const leading = i > 0 ? words.slice(0, i).join(' ') + ' ' : '';
      return { leading, term: candidate };
    }
  }

  // 3. Fallback: match approximate word count of enTerm (or keep up to 2 words)
  const enWordCount = enTerm.trim().split(/\s+/).length;
  const targetWords = Math.min(words.length, Math.max(1, enWordCount));
  const siWords = words.slice(words.length - targetWords);
  const leadingWords = words.slice(0, words.length - targetWords);

  return {
    leading: leadingWords.length > 0 ? leadingWords.join(' ') + ' ' : '',
    term: siWords.join(' '),
  };
}

/**
 * Parses inline `**bold**`, `*italic*`, `` `code` ``, `{{term:en|si}}`, and parenthetical translations
 */
function parseInlineStyles(
  text: string,
  language: 'en' | 'si' | 'dual' = 'en',
  enableTermPeek: boolean = true,
  keyPrefix: string = 'inline'
): React.ReactNode {
  // Master Tokenizer: matches code, explicit peek tags, bold with parentheticals, and bold alone
  const tokenRegex = /(?:(`[^`]+`)|(\{\{(?:term|peek):[^}]+\}\})|(\*\*([^*]+)\*\*\s*\(([\u0D80-\u0DFF\u200C\u200D\s\-_/]+)\))|(\*\*([^*]+)\*\*\s*\(([A-Za-z0-9\s\-_/]+)\))|(\*\*([^*]+)\*\*))/g;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let tokenIdx = 0;

  while ((match = tokenRegex.exec(text)) !== null) {
    const plainChunk = text.slice(lastIndex, match.index);
    if (plainChunk) {
      nodes.push(
        ...renderTextWithBilingualPeeks(plainChunk, language, enableTermPeek, `${keyPrefix}-plain-${tokenIdx}`)
      );
    }

    const subKey = `${keyPrefix}-tok-${tokenIdx++}`;

    // 1. Code block: `...`
    if (match[1]) {
      const codeText = match[1].slice(1, -1);
      nodes.push(
        <code
          key={`${subKey}-code`}
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] border border-indigo-200/50 dark:border-slate-700"
        >
          {codeText}
        </code>
      );
    }
    // 2. Explicit term tag: {{term:en|si}}
    else if (match[2]) {
      const rawBody = match[2].slice(2, -2).replace(/^(?:term|peek):/, '');
      const [tEn, tSi] = rawBody.split('|').map((s) => s.trim());
      nodes.push(
        <BilingualTermPeek
          key={`${subKey}-explicit`}
          termEn={tEn || ''}
          termSi={tSi || ''}
          currentLanguage={language}
        />
      );
    }
    // 3. Bold English followed by Sinhala in parens: **En** (Si)
    else if (match[3] && match[4] && match[5]) {
      const enTerm = match[4].trim();
      const siTerm = match[5].trim();
      nodes.push(
        <strong key={`${subKey}-bold-bilingual-ensi`} className="font-bold text-slate-900 dark:text-white">
          <BilingualTermPeek
            termEn={enTerm}
            termSi={siTerm}
            currentLanguage={language}
          />
        </strong>
      );
    }
    // 4. Bold Sinhala followed by English in parens: **Si** (En)
    else if (match[6] && match[7] && match[8]) {
      const siTerm = match[7].trim();
      const enTerm = match[8].trim();
      nodes.push(
        <strong key={`${subKey}-bold-bilingual-sien`} className="font-bold text-slate-900 dark:text-white">
          <BilingualTermPeek
            termEn={enTerm}
            termSi={siTerm}
            currentLanguage={language}
          />
        </strong>
      );
    }
    // 5. Bold alone: **...**
    else if (match[9] && match[10]) {
      const boldText = match[10];

      // Check if bold text itself contains a parenthetical translation (e.g. **Input (ආදානය)**)
      if (/(?:[A-Za-z].*\([\u0D80-\u0DFF]|[\u0D80-\u0DFF].*\([A-Za-z])/.test(boldText)) {
        nodes.push(
          <strong key={`${subKey}-bold-parenthetical`} className="font-bold text-slate-900 dark:text-white">
            {renderTextWithBilingualPeeks(boldText, language, enableTermPeek, `${subKey}-bold-p`)}
          </strong>
        );
      }
      // Check if bold text is a known technical glossary term
      else if (enableTermPeek) {
        const glossaryEntry = lookupGlossaryTerm(boldText);
        if (glossaryEntry) {
          nodes.push(
            <strong key={`${subKey}-bold-glossary`} className="font-bold text-slate-900 dark:text-white">
              <BilingualTermPeek
                termEn={glossaryEntry.termEn}
                termSi={glossaryEntry.termSi}
                currentLanguage={language}
                phonetic={glossaryEntry.phonetic}
                glossaryNoteEn={glossaryEntry.glossaryNoteEn}
                glossaryNoteSi={glossaryEntry.glossaryNoteSi}
              />
            </strong>
          );
        } else {
          nodes.push(
            <strong key={`${subKey}-bold`} className="font-bold text-slate-900 dark:text-white">
              {boldText}
            </strong>
          );
        }
      } else {
        nodes.push(
          <strong key={`${subKey}-bold`} className="font-bold text-slate-900 dark:text-white">
            {boldText}
          </strong>
        );
      }
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    const trailingChunk = text.slice(lastIndex);
    nodes.push(
      ...renderTextWithBilingualPeeks(trailingChunk, language, enableTermPeek, `${keyPrefix}-plain-tail`)
    );
  }

  return nodes;
}

/**
 * Converts parenthetical bilingual patterns in plain text into interactive BilingualTermPeek components:
 * Pattern 1: English (Sinhala) -> e.g. "Input (ආදානය)"
 * Pattern 2: Sinhala (English) -> e.g. "ආදානය (Input)"
 */
function renderTextWithBilingualPeeks(
  rawText: string,
  language: 'en' | 'si' | 'dual',
  enableTermPeek: boolean,
  baseKey: string
): React.ReactNode[] {
  if (!enableTermPeek || !rawText) {
    return [rawText];
  }

  // Combined Regex matching:
  // 1. English word/phrase followed by Sinhala in parentheses: e.g. "Input (ආදානය)"
  // 2. Sinhala word/phrase followed by English in parentheses: e.g. "ආදානය (Input)"
  //    Note: \u200C and \u200D support Sinhala touching letters (ZWJ/ZWNJ e.g. ප්‍රතිදානය).
  const regex = /(?:((?:[a-zA-Z0-9\-_/]+(?:\s+[a-zA-Z0-9\-_/]+){0,3}))\s*\(([\u0D80-\u0DFF\u200C\u200D\s\-_/]+)\)|((?:[\u0D80-\u0DFF\u200C\u200D]+(?:\s+[\u0D80-\u0DFF\u200C\u200D]+){0,3}))\s*\(([A-Za-z0-9\s\-_/]+)\))/g;

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let subIdx = 0;

  while ((match = regex.exec(rawText)) !== null) {
    let preceding = rawText.slice(lastIndex, match.index);
    let enTerm = '';
    let siTerm = '';

    if (match[1] && match[2]) {
      // Pattern 1: English (Sinhala)
      const rawEn = match[1];
      const { leading, term } = cleanEnglishCandidate(rawEn);
      preceding += leading;
      enTerm = term;
      siTerm = match[2].trim();
    } else if (match[3] && match[4]) {
      // Pattern 2: Sinhala (English)
      const rawSi = match[3];
      const rawEn = match[4].trim();
      const { leading, term } = cleanSinhalaCandidate(rawSi, rawEn);
      preceding += leading;
      siTerm = term;
      enTerm = rawEn;
    }

    if (preceding) {
      result.push(preceding);
    }

    const key = `${baseKey}-peek-${subIdx++}`;
    result.push(
      <BilingualTermPeek
        key={key}
        termEn={enTerm}
        termSi={siTerm}
        currentLanguage={language}
      />
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < rawText.length) {
    result.push(rawText.slice(lastIndex));
  }

  return result.length > 0 ? result : [rawText];
}
