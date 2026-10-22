'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Swords,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  PenTool
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export interface PastPaperItem {
  id: string;
  year: number;
  paperType: string;
  badgeText: string;
  questionEn: string;
  questionSi: string;
  type: 'mcq' | 'structured' | 'essay';
  options?: Array<{ id: string; en: string; si?: string }>;
  correctOptionId?: string;
  sampleAnswerEn?: string;
  sampleAnswerSi?: string;
  explanationEn?: string;
  explanationSi?: string;
}

interface ExamBossArenaProps {
  pastPapers: PastPaperItem[];
  quizAnswers: Record<string, string>;
  quizSubmitted: Record<string, boolean>;
  onAnswerSubmit: (quizId: string, optionId: string, correctOptionId: string) => void;
  languageMode?: string;
  stepBadge?: string;
  title?: string;
  subtitle?: string;
}

export function ExamBossArena({
  pastPapers,
  quizAnswers,
  quizSubmitted,
  onAnswerSubmit,
  languageMode = 'dual',
  stepBadge = 'STEP 4 OF 4 • 2020 – 2025 OFFICIAL O/L PAST PAPER GAUNTLET',
  title = 'Exam Boss Challenge & Verified Marking Rubrics',
  subtitle = 'අ.පො.ස. සාමාන්‍ය පෙළ පසුගිය විභාග ප්‍රශ්න සහ නිල ලකුණු ලබාදීමේ පටිපාටිය',
}: ExamBossArenaProps) {
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'structured'>('all');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});

  const filteredPapers = pastPapers.filter(p => {
    if (filterType === 'mcq') return p.type === 'mcq';
    if (filterType === 'structured') return p.type === 'structured';
    return true;
  });

  const toggleReveal = (id: string) => {
    sound.playClick(650);
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-5">
      {/* Top Banner with Filter Tabs */}
      <div className="clay-card p-5 bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 text-white border border-rose-500/30 flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold uppercase tracking-wider mb-0.5">
            <Swords className="w-4 h-4 text-rose-400" />
            <span>{stepBadge}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black">
            {title}
          </h3>
          <p className="text-xs text-rose-200/80 font-sinhala mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-slate-700">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({pastPapers.length})
          </button>
          <button
            onClick={() => setFilterType('structured')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'structured'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Structured II ({pastPapers.filter(p => p.type === 'structured').length})
          </button>
          <button
            onClick={() => setFilterType('mcq')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'mcq'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            MCQ I ({pastPapers.filter(p => p.type === 'mcq').length})
          </button>
        </div>
      </div>

      {/* Questions Gauntlet */}
      <div className="space-y-5">
        {filteredPapers.map((q, qIdx) => {
          const isSelected = quizAnswers[q.id];
          const isSubmitted = !!quizSubmitted[q.id];
          const isRevealed = !!revealedAnswers[q.id];

          return (
            <motion.div
              key={q.id || qIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="clay-card p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black px-3 py-1 rounded-lg bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-sm">
                    {q.badgeText}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                    {q.type === 'mcq' ? 'Paper I (MCQ)' : 'Paper II (Structured Essay)'}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Question {qIdx + 1} of {filteredPapers.length}
                </span>
              </div>

              {/* Question Prompt */}
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                  {q.questionEn}
                </h4>
                {q.questionSi && (
                  <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-400 font-sinhala leading-loose whitespace-pre-line">
                    {q.questionSi}
                  </p>
                )}
              </div>

              {/* RENDER TYPE 1: MCQ Interactive Buttons */}
              {q.type === 'mcq' && q.options && (
                <div className="space-y-2 pt-1">
                  {q.options.map(opt => {
                    const isChosen = isSelected === opt.id;
                    const isCorrect = opt.id === q.correctOptionId;

                    let style = 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-rose-500 hover:bg-slate-100 dark:hover:bg-slate-750';
                    if (isSubmitted) {
                      if (isCorrect) {
                        style = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500';
                      } else if (isChosen && !isCorrect) {
                        style = 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-100';
                      } else {
                        style = 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={isSubmitted}
                        onClick={() => onAnswerSubmit(q.id, opt.id, q.correctOptionId || '1')}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${style}`}
                      >
                        <div>
                          <span className="font-semibold">{opt.en}</span>
                          {opt.si && (
                            <span className="text-xs font-sinhala text-indigo-700 dark:text-indigo-300 block mt-1">
                              {opt.si}
                            </span>
                          )}
                        </div>
                        <div className={`w-4 h-4 rounded-full border shrink-0 ml-3 flex items-center justify-center ${
                          isChosen ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400 dark:border-slate-600'
                        }`}>
                          {isChosen && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* RENDER TYPE 2: STRUCTURED QUESTION WORKBENCH */}
              {q.type === 'structured' && (
                <div className="space-y-3 pt-2">
                  {/* Interactive Scratchpad for student attempt */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <PenTool className="w-3.5 h-3.5 text-indigo-500" />
                        Student Self-Attempt Draft (Scratchpad):
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">Write your key points / pseudocode here</span>
                    </div>
                    <textarea
                      value={studentNotes[q.id] || ''}
                      onChange={e => setStudentNotes(prev => ({ ...prev, [q.id]: e.target.value }))}
                      placeholder="Type your structured solution, algorithm steps, or Pascal code here before checking marking scheme..."
                      rows={3}
                      className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-indigo-500 outline-none resize-y"
                    />
                  </div>

                  {/* Reveal Marking Scheme Toggle Button */}
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="w-full py-3 px-4 rounded-xl border border-rose-500/30 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-800 dark:text-rose-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                  >
                    {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{isRevealed ? 'Hide Official Marking Scheme' : 'Reveal Official Department Marking Scheme & Model Answer'}</span>
                    {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Marking Scheme Collapsible Accordion */}
                  <AnimatePresence>
                    {isRevealed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 overflow-hidden pt-1"
                      >
                        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/50 border-2 border-emerald-500/40 space-y-3">
                          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-xs uppercase tracking-wider">
                            <FileCheck2 className="w-4 h-4 text-emerald-500" />
                            <span>Official Examination Model Answer:</span>
                          </div>

                          {q.sampleAnswerEn && (
                            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-mono leading-relaxed whitespace-pre-wrap">
                              {q.sampleAnswerEn}
                            </div>
                          )}

                          {q.sampleAnswerSi && (
                            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sinhala leading-loose whitespace-pre-wrap">
                              {q.sampleAnswerSi}
                            </div>
                          )}

                          {q.explanationEn && (
                            <div className="text-xs text-slate-600 dark:text-slate-400 font-mono pt-1">
                              💡 Source: {q.explanationEn}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
