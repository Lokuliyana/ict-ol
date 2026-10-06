'use client';

import React, { useState } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { SubTopic, GlossaryTerm } from '@/data/lesson01Data';
import { NICDecoder } from './NICDecoder';
import { SystemDiagram } from './SystemDiagram';
import { TimelineExplorer } from './TimelineExplorer';
import { KeyTermsModal } from './KeyTermsModal';
import { 
  CheckCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Bookmark, 
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface DualCanvasProps {
  subtopics: SubTopic[];
  glossary: GlossaryTerm[];
}

export function DualCanvas({ subtopics, glossary }: DualCanvasProps) {
  const { state, markBlockRead, recordCheckpointAttempt } = useProgress();
  const [activeHoverBlock, setActiveHoverBlock] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    '1.1': true,
    '1.2': true,
    '1.3': true,
    '1.5': true,
    '1.7': true
  });
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<GlossaryTerm | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleKeyTermClick = (termName: string) => {
    const found = glossary.find(g => 
      g.termEn.toLowerCase().includes(termName.toLowerCase()) || 
      g.termSi.includes(termName) ||
      termName.toLowerCase().includes(g.termEn.toLowerCase())
    );
    if (found) {
      setSelectedGlossaryTerm(found);
    }
  };

  const handleQuizSelect = (quizId: string, optionId: string, correctOptionId: string) => {
    setQuizAnswers(prev => ({ ...prev, [quizId]: optionId }));
    const isCorrect = optionId === correctOptionId;
    setQuizResults(prev => ({ ...prev, [quizId]: isCorrect }));
    recordCheckpointAttempt(quizId, isCorrect);
  };

  // Determine column layout based on language mode
  const mode = state.languageMode; // 'dual' | 'en' | 'si'

  return (
    <div className="space-y-8">
      {/* Glossary Modal */}
      <KeyTermsModal 
        term={selectedGlossaryTerm} 
        onClose={() => setSelectedGlossaryTerm(null)} 
      />

      {/* Subtopics Loop */}
      {subtopics.map((subtopic) => {
        const isExpanded = expandedSections[subtopic.id] ?? true;

        return (
          <section
            key={subtopic.id}
            id={`section-${subtopic.id}`}
            className="clay-card overflow-hidden transition-all duration-300"
          >
            {/* Section Header Accordion */}
            <div
              onClick={() => toggleSection(subtopic.id)}
              className="p-5 bg-gradient-to-r from-slate-50 via-indigo-50/20 to-slate-50 dark:from-slate-800/80 dark:via-indigo-950/20 dark:to-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                  {subtopic.number}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
                    {mode !== 'si' && <span>{subtopic.titleEn}</span>}
                    {mode === 'dual' && <span className="text-slate-300 dark:text-slate-600">/</span>}
                    {mode !== 'en' && (
                      <span className="font-sinhala text-indigo-700 dark:text-indigo-400">
                        {subtopic.titleSi}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {mode === 'si' ? subtopic.summarySi : subtopic.summaryEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-xs hidden sm:inline text-slate-400 font-medium">
                  {isExpanded ? 'Collapse' : 'Expand'}
                </span>
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            {/* Section Content */}
            {isExpanded && (
              <div className="p-5 sm:p-6 space-y-6">
                
                {/* Visual Anchor Cards: Split-Screen Dual Column or Single */}
                <div className={`grid gap-6 ${mode === 'dual' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                  
                  {/* LEFT PANEL: English Medium Text */}
                  {mode !== 'si' && (
                    <div className="space-y-4">
                      {mode === 'dual' && (
                        <div className="flex items-center justify-between pb-2 border-b border-blue-100 dark:border-blue-950/80 text-xs font-bold text-blue-600 dark:text-blue-400">
                          <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                            <BookOpen className="w-3.5 h-3.5" />
                            English Medium Textbook
                          </span>
                          <span className="text-[10px] text-slate-400 font-normal">Hover to sync</span>
                        </div>
                      )}

                      {subtopic.blocks.map((block) => {
                        const isHovered = activeHoverBlock === block.id;
                        const isRead = state.completedBlocks.includes(block.id);

                        return (
                          <div
                            key={`en-${block.id}`}
                            onMouseEnter={() => {
                              setActiveHoverBlock(block.id);
                              markBlockRead(block.id);
                            }}
                            onMouseLeave={() => setActiveHoverBlock(null)}
                            className={`p-4 rounded-xl border transition-all text-xs sm:text-sm leading-relaxed ${
                              isHovered
                                ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-400 ring-2 ring-indigo-400/30 text-indigo-950 dark:text-indigo-100 shadow-md'
                                : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              {block.highlightTerm && (
                                <button
                                  onClick={() => handleKeyTermClick(block.highlightTerm!)}
                                  className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline bg-indigo-100/80 dark:bg-indigo-900/60 px-2 py-0.5 rounded-md"
                                >
                                  <span>{block.highlightTerm}</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </button>
                              )}
                              {isRead && (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              )}
                            </div>
                            <p className="whitespace-pre-line font-medium text-slate-800 dark:text-slate-200">
                              {block.en}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* RIGHT PANEL: Sinhala Medium Text */}
                  {mode !== 'en' && (
                    <div className="space-y-4">
                      {mode === 'dual' && (
                        <div className="flex items-center justify-between pb-2 border-b border-emerald-100 dark:border-emerald-950/80 text-xs font-bold text-emerald-600 dark:text-emerald-400 font-sinhala">
                          <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                            <BookOpen className="w-3.5 h-3.5" />
                            සිංහල මාධ්‍ය පෙළපොත
                          </span>
                          <span className="text-[10px] text-slate-400 font-normal">සමමුහුර්ත ඉස්මතු කිරීම</span>
                        </div>
                      )}

                      {subtopic.blocks.map((block) => {
                        const isHovered = activeHoverBlock === block.id;
                        const isRead = state.completedBlocks.includes(block.id);

                        return (
                          <div
                            key={`si-${block.id}`}
                            onMouseEnter={() => {
                              setActiveHoverBlock(block.id);
                              markBlockRead(block.id);
                            }}
                            onMouseLeave={() => setActiveHoverBlock(null)}
                            className={`p-4 rounded-xl border font-sinhala transition-all text-xs sm:text-sm leading-loose ${
                              isHovered
                                ? 'bg-emerald-50/90 dark:bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-400/30 text-emerald-950 dark:text-emerald-100 shadow-md'
                                : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              {block.highlightTerm && (
                                <button
                                  onClick={() => handleKeyTermClick(block.highlightTerm!)}
                                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:underline bg-emerald-100/80 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md"
                                >
                                  <span>{block.highlightTerm}</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </button>
                              )}
                              {isRead && (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              )}
                            </div>
                            <p className="whitespace-pre-line text-slate-800 dark:text-slate-200">
                              {block.si}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>

                {/* Subtopic Examples & Embedded Widgets */}
                {subtopic.examples && subtopic.examples.map((ex) => (
                  <div key={ex.id} className="pt-2">
                    {/* Render Interactive Widgets */}
                    {ex.isInteractiveWidget === 'nic-decoder' && <NICDecoder />}
                    {ex.isInteractiveWidget === 'system-diagram' && <SystemDiagram />}
                    {ex.isInteractiveWidget === 'timeline-slider' && <TimelineExplorer />}

                    {/* Standard Static Example */}
                    {!ex.isInteractiveWidget && (
                      <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-slate-800/60 border border-amber-200/70 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-2 font-bold text-xs text-amber-800 dark:text-amber-300">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>{mode === 'si' ? ex.titleSi : ex.titleEn}</span>
                        </div>
                        <div className={`grid gap-4 ${mode === 'dual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                          {mode !== 'si' && (
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {ex.contentEn}
                            </p>
                          )}
                          {mode !== 'en' && (
                            <p className="text-xs text-slate-700 dark:text-slate-300 font-sinhala leading-loose">
                              {ex.contentSi}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Table Data (e.g. Computer Generations) */}
                {subtopic.tableData && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                        <tr>
                          {subtopic.tableData.headers.map((h, i) => (
                            <th key={i} className="p-3">
                              {mode === 'si' ? h.si : h.en}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                        {subtopic.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            {Object.values(row).map((cell: any, cIdx: number) => (
                              <td key={cIdx} className="p-3 text-slate-800 dark:text-slate-200">
                                {mode === 'si' ? (
                                  <span className="font-sinhala">{cell.si}</span>
                                ) : mode === 'en' ? (
                                  <span>{cell.en}</span>
                                ) : (
                                  <div className="space-y-1">
                                    <div className="font-medium">{cell.en}</div>
                                    <div className="text-[11px] text-slate-500 font-sinhala">{cell.si}</div>
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Checkpoint Knowledge Check Card */}
                {subtopic.checkpointQuiz && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900 shadow-sm mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        <HelpCircle className="w-4 h-4" />
                        <span>Checkpoint Knowledge Check (+10 XP)</span>
                      </span>
                      {quizResults[subtopic.checkpointQuiz.id] !== undefined && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          quizResults[subtopic.checkpointQuiz.id] 
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300'
                        }`}>
                          {quizResults[subtopic.checkpointQuiz.id] ? 'Correct (+10 pts)' : 'Review Needed'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      {subtopic.checkpointQuiz.questionEn}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-sinhala mb-4">
                      {subtopic.checkpointQuiz.questionSi}
                    </p>

                    {/* Radio Options */}
                    <div className="space-y-2">
                      {subtopic.checkpointQuiz.options.map((opt) => {
                        const isSelected = quizAnswers[subtopic.checkpointQuiz!.id] === opt.id;
                        const isAnswered = quizAnswers[subtopic.checkpointQuiz!.id] !== undefined;
                        const isCorrectOption = opt.id === subtopic.checkpointQuiz!.correctOptionId;

                        let borderClass = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900';
                        if (isAnswered) {
                          if (isCorrectOption) {
                            borderClass = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100';
                          } else if (isSelected) {
                            borderClass = 'border-rose-400 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            disabled={isAnswered}
                            onClick={() => handleQuizSelect(subtopic.checkpointQuiz!.id, opt.id, subtopic.checkpointQuiz!.correctOptionId)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${borderClass} hover:border-indigo-400`}
                          >
                            <div className="space-y-0.5">
                              <div className="font-medium">{opt.en}</div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sinhala">{opt.si}</div>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                            }`}>
                              {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Reveal */}
                    {quizAnswers[subtopic.checkpointQuiz.id] && (
                      <div className="mt-3.5 p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-indigo-900 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                        <span className="font-bold text-indigo-700 dark:text-indigo-400 block">
                          Textbook Rationale:
                        </span>
                        <p>{subtopic.checkpointQuiz.explanationEn}</p>
                        <p className="font-sinhala text-slate-600 dark:text-slate-400">{subtopic.checkpointQuiz.explanationSi}</p>
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
