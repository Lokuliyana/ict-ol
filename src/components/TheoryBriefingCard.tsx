'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Zap, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  HelpCircle,
  Award,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { sound } from '@/utils/soundEffects';

interface TheoryBriefingCardProps {
  lessonTitleEn: string;
  lessonTitleSi: string;
  unitNumber: number;
  grade: string;
  summaryEn: string;
  summarySi: string;
  keyPoints?: { en: string; si: string }[];
  onStartQuiz: () => void;
  onOpenFullTheory: () => void;
}

export function TheoryBriefingCard({
  lessonTitleEn,
  lessonTitleSi,
  unitNumber,
  grade,
  summaryEn,
  summarySi,
  keyPoints = [],
  onStartQuiz,
  onOpenFullTheory
}: TheoryBriefingCardProps) {
  const { state } = useProgress();
  const [isExpanded, setIsExpanded] = useState(false);
  const mode = state.languageMode;

  const handleStudy = () => {
    sound.playClick(650);
    setIsExpanded(true);
    onOpenFullTheory();
  };

  const handleSkipToQuiz = () => {
    sound.playSuccessDing();
    onStartQuiz();
  };

  return (
    <div className="clay-card p-5 sm:p-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white border-2 border-indigo-500/40 relative overflow-hidden shadow-2xl">
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between gap-2 border-b border-indigo-800/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
              Concept & Theory Briefing • Grade {grade} Unit 0{unitNumber}
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
              {lessonTitleEn}
            </h3>
          </div>
        </div>

        <span className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 font-mono hidden sm:inline">
          Pre-Challenge Review
        </span>
      </div>

      {/* Brief Summary Box */}
      <div className="space-y-3">
        <div className={`grid gap-3 ${mode === 'dual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
          {mode !== 'si' && (
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {summaryEn}
            </p>
          )}
          {mode !== 'en' && (
            <p className="text-xs sm:text-sm text-indigo-200 font-sinhala leading-relaxed">
              {summarySi}
            </p>
          )}
        </div>

        {/* Key Points Bullet List */}
        {keyPoints.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 mt-3">
            <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Textbook Competencies (මූලික සංකල්ප):</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {keyPoints.slice(0, 3).map((kp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>
                    {mode === 'si' ? kp.si : mode === 'en' ? kp.en : `${kp.en} (${kp.si})`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 2 Obvious, Thumb-Friendly Action Buttons */}
      <div className="mt-5 pt-4 border-t border-indigo-800/60 flex flex-col sm:flex-row items-center gap-3">
        {/* Button 1: Study Theory First */}
        <button
          onClick={handleStudy}
          className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
        >
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Study Full Theory Notes</span>
        </button>

        {/* Button 2: Skip Straight to Quiz (Primary Action) */}
        <button
          onClick={handleSkipToQuiz}
          className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all active:scale-95 group"
        >
          <Zap className="w-4 h-4 fill-slate-950" />
          <span>Skip to Challenge / Quiz</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
