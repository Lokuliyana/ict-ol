'use client';

import React, { useState } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { PastPaperQuestion } from '@/data/pastPapersData';
import confetti from 'canvas-confetti';
import { sound } from '@/utils/soundEffects';
import { 
  CheckCircle2, 
  XCircle, 
  Eye, 
  EyeOff, 
  Award, 
  Filter, 
  Calendar, 
  Layers, 
  Send,
  HelpCircle,
  FileText,
  Sparkles
} from 'lucide-react';

interface PastPaperEngineProps {
  questions: PastPaperQuestion[];
}

export function PastPaperEngine({ questions }: PastPaperEngineProps) {
  const { state, recordPastPaperAttempt } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});

  const mode = state.languageMode; // 'dual' | 'en' | 'si'

  // Extract unique topics and years
  const topics = Array.from(new Set(questions.map(q => q.topicId))).sort();
  const years = Array.from(new Set(questions.map(q => q.year))).sort((a, b) => b - a);

  // Filter questions
  const filtered = questions.filter(q => {
    if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
    if (selectedYear !== 'all' && q.year.toString() !== selectedYear) return false;
    if (selectedType === 'mcq' && q.type !== 'mcq') return false;
    if (selectedType === 'structured' && q.type !== 'structured') return false;
    return true;
  });

  const handleMCQSelect = (q: PastPaperQuestion, optionId: string) => {
    const isCorrect = optionId === q.correctOptionId;
    if (isCorrect) {
      sound.playSuccessDing();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#4f46e5', '#10b981', '#f59e0b'],
        });
      } catch {}
    } else {
      sound.playBuzzer();
    }
    recordPastPaperAttempt(q.id, optionId, isCorrect);
  };

  const toggleReveal = (id: string) => {
    sound.playClick(650);
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      
      {/* Engine Controls & Filter Bar */}
      <div className="clay-card p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Past Paper Practice Engine (2020 – 2025)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sinhala">
              අ.පො.ස. සාමාන්‍ය පෙළ පසුගිය විභාග ප්‍රශ්න පත්‍ර (බහුවරණ හා ව්‍යුහගත රචනා)
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Topic Filter */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none font-medium cursor-pointer"
              >
                <option value="all">All Subtopics (සියලු මාතෘකා)</option>
                {topics.map(t => (
                  <option key={t} value={t}>Topic {t}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none font-medium cursor-pointer"
              >
                <option value="all">All Years (2020-2025)</option>
                {years.map(y => (
                  <option key={y} value={y.toString()}>{y} O/L</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none font-medium cursor-pointer"
              >
                <option value="all">All Question Types</option>
                <option value="mcq">Paper I (MCQ)</option>
                <option value="structured">Paper II (Structured)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="p-8 text-center clay-card bg-white dark:bg-slate-900 text-slate-500 text-sm">
            No past paper questions match the selected filter criteria.
          </div>
        ) : (
          filtered.map((q) => {
            const userAttempt = state.pastPaperAnswers[q.id];
            const isRevealed = revealedAnswers[q.id];

            return (
              <div
                key={q.id}
                className="clay-card p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all space-y-4 shadow-sm"
              >
                {/* Question Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white font-mono text-xs font-bold shadow-sm">
                      {q.badgeText}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                      q.type === 'mcq' 
                        ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' 
                        : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                    }`}>
                      {q.type === 'mcq' ? 'Paper I (MCQ)' : 'Paper II (Structured Part A)'}
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      • {q.subtopicTitleEn}
                    </span>
                  </div>

                  {userAttempt && (
                    <div className="flex items-center gap-1 text-xs font-bold">
                      {userAttempt.isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correct (+15 XP)</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-500">
                          <XCircle className="w-4 h-4" />
                          <span>Reviewed</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Optional Scenario Context */}
                {(q.contextEn || q.contextSi) && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750 text-xs sm:text-sm">
                    {mode !== 'si' && q.contextEn && (
                      <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                        {q.contextEn}
                      </p>
                    )}
                    {mode !== 'en' && q.contextSi && (
                      <p className="font-sinhala text-slate-600 dark:text-slate-400 leading-relaxed">
                        {q.contextSi}
                      </p>
                    )}
                  </div>
                )}

                {/* Question Stem (Dual-Medium Synchronized) */}
                <div className={`grid gap-4 ${mode === 'dual' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                  {mode !== 'si' && (
                    <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {q.questionEn}
                    </div>
                  )}
                  {mode !== 'en' && (
                    <div className="text-sm font-semibold text-slate-900 dark:text-white font-sinhala leading-loose">
                      {q.questionSi}
                    </div>
                  )}
                </div>

                {/* Question Type A: Multiple Choice Questions (MCQ) */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2.5 pt-2">
                    {q.options.map((opt) => {
                      const isSelected = userAttempt?.answer === opt.id;
                      const isCorrect = q.correctOptionId === opt.id;

                      let btnStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-200';
                      if (userAttempt) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'border-rose-400 bg-rose-50/90 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleMCQSelect(q, opt.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${btnStyle} hover:border-indigo-400 active:scale-[0.99]`}
                        >
                          <div className={`grid gap-2 flex-1 ${mode === 'dual' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                            {mode !== 'si' && (
                              <div className="text-xs sm:text-sm font-medium">
                                {opt.en}
                              </div>
                            )}
                            {mode !== 'en' && (
                              <div className="text-xs sm:text-sm font-sinhala">
                                {opt.si}
                              </div>
                            )}
                          </div>
                          
                          <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${
                            isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Question Type B: Structured Questions (Paper II) */}
                {q.type === 'structured' && (
                  <div className="space-y-3 pt-2">
                    <div className="relative">
                      <textarea
                        rows={3}
                        value={studentNotes[q.id] || ''}
                        onChange={(e) => setStudentNotes({ ...studentNotes, [q.id]: e.target.value })}
                        placeholder="Type your answer here before revealing the model marking scheme..."
                        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          recordPastPaperAttempt(q.id, studentNotes[q.id] || 'attempted', true);
                          toggleReveal(q.id);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all active:scale-95"
                      >
                        {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        <span>{isRevealed ? 'Hide Model Answer' : 'Reveal Model Answer & Rubric'}</span>
                      </button>

                      <span className="text-[11px] text-slate-400">
                        Official Marking Scheme Verbatim
                      </span>
                    </div>

                    {/* Revealed Model Answer Card */}
                    {isRevealed && (
                      <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 space-y-3 mt-3 animate-fadeIn">
                        <div className="font-bold text-xs uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
                          Official Marking Scheme & Model Answer (නිල ලකුණු දීමේ පටිපාටිය)
                        </div>

                        <div className={`grid gap-4 ${mode === 'dual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                          {mode !== 'si' && q.sampleAnswerEn && (
                            <div className="text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-mono bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                              {q.sampleAnswerEn}
                            </div>
                          )}
                          {mode !== 'en' && q.sampleAnswerSi && (
                            <div className="text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line font-sinhala leading-loose bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                              {q.sampleAnswerSi}
                            </div>
                          )}
                        </div>

                        {q.markingRubricEn && (
                          <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900 text-xs text-slate-600 dark:text-slate-400">
                            <span className="font-semibold block mb-1">Mark Allocation (ලකුණු බෙදීයාම):</span>
                            <ul className="list-disc list-inside space-y-0.5">
                              {q.markingRubricEn.map((rubric, rI) => (
                                <li key={rI}>{rubric}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Explanation Rationale (Shown ONLY after user attempt or reveal) */}
                {(userAttempt || isRevealed) && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 text-xs space-y-1">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
                      Pedagogical Explanation:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">{q.explanationEn}</p>
                    <p className="text-slate-500 dark:text-slate-400 font-sinhala">{q.explanationSi}</p>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

