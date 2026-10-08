'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  BookOpen,
  Filter,
  Search,
  Sparkles,
  Trophy,
  Layers,
} from 'lucide-react';
import { UNIFIED_PAST_PAPERS, filterPastPapers } from '@/data/unifiedPastPapers';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { PracticeExamRunner } from '@/components/papers/PracticeExamRunner';
import { TimedExamRunner } from '@/components/papers/TimedExamRunner';
import { useGameStore } from '@/lib/store';
import { GradeLevel } from '@/types/store';

const YEARS = ['all', '2020', '2021', '2022', '2023', '2024', '2025'];
const PAPER_TYPES = ['all', 'Paper I', 'Paper II'];

export default function PastPapersPage() {
  const storeGrade = useGameStore((s) => s.grade);
  const setGrade = useGameStore((s) => s.setGrade);
  const language = useGameStore((s) => s.language);

  const [activeMode, setActiveMode] = useState<'practice' | 'timed'>('practice');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedPaperType, setSelectedPaperType] = useState<string>('all');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle grade change and reset unit filter
  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    setSelectedUnit('all');
    if (grade === '10' || grade === '11') {
      setGrade(grade as GradeLevel);
    }
  };

  // Derive available units based on selected grade
  const availableUnits = useMemo(() => {
    if (selectedGrade === 'all') {
      return CURRICULUM_DATA;
    }
    return CURRICULUM_DATA.filter((u) => u.grade === selectedGrade);
  }, [selectedGrade]);

  // Filter questions based on current controls
  const filteredQuestions = useMemo(() => {
    return filterPastPapers({
      year: selectedYear,
      paperType: selectedPaperType,
      grade: selectedGrade,
      unitId: selectedUnit,
      searchQuery,
    });
  }, [selectedYear, selectedPaperType, selectedGrade, selectedUnit, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Page Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Past Paper Arena (2020–2025)
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-mono font-bold">
                  168 Questions
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-sinhala">
                ශ්‍රී ලංකා සාමාන්‍ය පෙළ පසුගිය විභාග ප්‍රශ්න පත්‍ර (ප්‍රශ්න පත්‍ර I හා II) ආදර්ශ ඇගයීම්
              </p>
            </div>
          </div>

          {/* Grade Selector & Mode Tabs */}
          <div className="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
            {/* Grade Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => handleGradeChange('all')}
                className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGrade === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Grades
              </button>
              <button
                type="button"
                onClick={() => handleGradeChange('10')}
                className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGrade === '10' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Grade 10
              </button>
              <button
                type="button"
                onClick={() => handleGradeChange('11')}
                className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGrade === '11' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Grade 11
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveMode('practice')}
                className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeMode === 'practice' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Practice Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('timed')}
                className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeMode === 'timed' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Timed 60-Min Exam</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search past paper questions by keywords..."
                className="w-full min-h-[48px] pl-10 pr-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Question Match Count */}
            <div className="text-xs font-mono text-slate-400 text-right sm:text-left self-center">
              Showing <strong>{filteredQuestions.length}</strong> matching questions
            </div>
          </div>

          {/* Filter Pills - Wrap friendly, zero overflow */}
          <div className="flex flex-col gap-3 text-xs font-mono">
            {/* Row 1: Year and Paper Type */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Year Selector */}
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-slate-400 text-[11px] mr-1">Year:</span>
                {YEARS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setSelectedYear(y)}
                    className={`min-h-[44px] px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      selectedYear === y
                        ? 'bg-indigo-600 text-white font-bold shadow-sm'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {y === 'all' ? 'All' : y}
                  </button>
                ))}
              </div>

              {/* Paper Type Selector */}
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-slate-400 text-[11px] mr-1">Type:</span>
                {PAPER_TYPES.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => setSelectedPaperType(pt)}
                    className={`min-h-[44px] px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      selectedPaperType === pt
                        ? 'bg-cyan-600 text-white font-bold shadow-sm'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {pt === 'all' ? 'All' : pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 2: Curriculum Unit Selector */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Curriculum Unit:</span>
                </span>
                {selectedUnit !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedUnit('all')}
                    className="min-h-[44px] px-2 py-1 text-[11px] text-indigo-400 hover:text-indigo-300 font-mono underline cursor-pointer flex items-center"
                  >
                    Reset Unit Filter
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 flex-wrap overflow-x-auto pb-1">
                {/* All Units Button */}
                <button
                  type="button"
                  onClick={() => setSelectedUnit('all')}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    selectedUnit === 'all'
                      ? 'bg-indigo-600 text-white font-bold shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  All Units ({availableUnits.length})
                </button>

                {/* Individual Unit Buttons */}
                {availableUnits.map((unit) => {
                  const isSelected = selectedUnit === unit.id;
                  const label =
                    selectedGrade === 'all'
                      ? `G${unit.grade} U${unit.unitNumber}`
                      : `Unit ${unit.unitNumber}`;
                  const title = language === 'si' ? unit.titleSi : unit.titleEn;

                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => setSelectedUnit(unit.id)}
                      title={`${label}: ${title}`}
                      aria-label={`${label}: ${title}`}
                      aria-pressed={isSelected}
                      className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold shadow-sm'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      <span className="font-semibold">{label}</span>
                      <span className="text-[11px] opacity-75 hidden md:inline max-w-[130px] truncate">
                        {title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Active Mode Runner */}
        {activeMode === 'practice' ? (
          <PracticeExamRunner questions={filteredQuestions} />
        ) : (
          <TimedExamRunner questions={filteredQuestions} />
        )}
      </div>
    </div>
  );
}
