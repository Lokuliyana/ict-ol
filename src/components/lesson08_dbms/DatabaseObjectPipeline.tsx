'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Table as TableIcon, 
  FileEdit, 
  Search, 
  Printer, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight,
  Filter,
  Send
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface PipelineScenario {
  id: string;
  scenarioEn: string;
  scenarioSi: string;
  correctObject: 'table' | 'form' | 'query' | 'report';
  explanationEn: string;
  explanationSi: string;
}

const SCENARIOS: PipelineScenario[] = [
  {
    id: 'sc1',
    scenarioEn: 'A librarian needs to find all books published after 2020 where Author = "Arthur C. Clarke".',
    scenarioSi: 'කර්තෘ "Arthur C. Clarke" වන සහ 2020 න් පසු ප්‍රකාශිත සියලු පොත් සොයා ගැනීමට අවශ්‍යයි.',
    correctObject: 'query',
    explanationEn: 'Query (විමසුම) filters, searches, and extracts specific data matching user criteria.',
    explanationSi: 'විමසුමක් (Query) මගින් දී ඇති කොන්දේසිවලට ගැලපෙන දත්ත පෙරීම හා ලබා ගැනීම සිදු කරයි.'
  },
  {
    id: 'sc2',
    scenarioEn: 'A supermarket cashier needs a user-friendly screen with input boxes to type customer orders without viewing raw database tables.',
    scenarioSi: 'අයකැමියාට සෘජුව වගුවලට ප්‍රවේශ නොවී දත්ත ඇතුළත් කිරීමට පරිශීලක-හිතකාමී තිරයක් අවශ්‍යයි.',
    correctObject: 'form',
    explanationEn: 'Form (පෝරමය) provides an intuitive GUI interface for secure and easy data entry.',
    explanationSi: 'පෝරමයක් (Form) මගින් පරිශීලකයාට පහසුවෙන් දත්ත ඇතුළත් කිරීමට සහ බැලීමට අතුරුමුහුණතක් සපයයි.'
  },
  {
    id: 'sc3',
    scenarioEn: 'The school principal requires a formal end-of-term summary sheet with headers, logos, and grade totals ready for physical printing.',
    scenarioSi: 'විදුහල්පතිතුමාට මුද්‍රණය කළ හැකි පරිදි සකස් කළ නිල වාර අවසාන සාරාංශ වාර්තාවක් අවශ්‍යයි.',
    correctObject: 'report',
    explanationEn: 'Report (වාර්තාව) summarizes and formats data into a professional printable document.',
    explanationSi: 'වාර්තාවක් (Report) මගින් දත්ත මුද්‍රණයට සුදුසු පරිදි හැඩගස්වා සාරාංශගත කරයි.'
  },
  {
    id: 'sc4',
    scenarioEn: 'The database administrator needs to create rows and columns to store all permanent student records.',
    scenarioSi: 'සියලු ශිෂ්‍ය දත්ත ස්ථිරව ගබඩා කිරීමට පේළි සහ තීරු සහිත මූලික ව්‍යුහය නිර්මාණය කිරීම.',
    correctObject: 'table',
    explanationEn: 'Table (වගුව) is the core fundamental object that physically stores raw data in rows and columns.',
    explanationSi: 'වගුවක් (Table) යනු පේළි සහ තීරු සහිතව අමු දත්ත ගබඩා කරන මූලික සංරචකයයි.'
  }
];

export function DatabaseObjectPipeline() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [evaluationResult, setEvaluationResult] = useState<{ isCorrect: boolean; show: boolean }>({ isCorrect: false, show: false });

  const scenario = SCENARIOS[currentScenarioIndex];

  const handleRouteObject = (obj: 'table' | 'form' | 'query' | 'report') => {
    setSelectedObject(obj);
    if (obj === scenario.correctObject) {
      sound.playSuccess();
      setEvaluationResult({ isCorrect: true, show: true });
    } else {
      sound.playError();
      setEvaluationResult({ isCorrect: false, show: true });
    }
  };

  const handleNextScenario = () => {
    sound.playSnap();
    if (currentScenarioIndex < SCENARIOS.length - 1) {
      setCurrentScenarioIndex(i => i + 1);
      setSelectedObject(null);
      setEvaluationResult({ isCorrect: false, show: false });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 04 • දත්ත සමුදා වස්තු 4
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Tables, Forms, Queries & Reports
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <TableIcon className="w-5 h-5 text-emerald-400" />
            The 4 Database Objects Pipeline (දත්ත සමුදා වස්තු හඳුනාගැනීම)
          </h2>
          <p className="text-xs text-slate-300">
            Route user tasks to the correct database object: Table (Store), Form (Input), Query (Filter), or Report (Print).
          </p>
        </div>

        <div className="text-xs font-mono text-blue-400 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
          Scenario {currentScenarioIndex + 1} of {SCENARIOS.length}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Routing Deck */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-5 shadow-2xl">
            {/* Scenario Card */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Incoming User Request:</span>
              <p className="text-sm font-semibold text-white leading-relaxed">{scenario.scenarioEn}</p>
              <p className="text-xs text-slate-400 font-sinhala leading-relaxed pt-1 border-t border-slate-800">
                {scenario.scenarioSi}
              </p>
            </div>

            {/* 4 Routing Stations */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300">Route Request to Target Database Object:</span>
              <div className="grid grid-cols-2 gap-3">
                {/* 1. Table */}
                <button
                  onClick={() => handleRouteObject('table')}
                  className={`p-4 rounded-xl border text-left transition-all space-y-1 ${
                    selectedObject === 'table'
                      ? evaluationResult.isCorrect
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                        : 'bg-rose-950 border-rose-500 text-rose-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    <TableIcon className="w-4 h-4 text-blue-400" />
                    <span>Table (වගුව)</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Stores structured raw data in rows & columns</p>
                </button>

                {/* 2. Form */}
                <button
                  onClick={() => handleRouteObject('form')}
                  className={`p-4 rounded-xl border text-left transition-all space-y-1 ${
                    selectedObject === 'form'
                      ? evaluationResult.isCorrect
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                        : 'bg-rose-950 border-rose-500 text-rose-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    <FileEdit className="w-4 h-4 text-emerald-400" />
                    <span>Form (පෝරමය)</span>
                  </div>
                  <p className="text-[10px] text-slate-400">User-friendly GUI for data entry & viewing</p>
                </button>

                {/* 3. Query */}
                <button
                  onClick={() => handleRouteObject('query')}
                  className={`p-4 rounded-xl border text-left transition-all space-y-1 ${
                    selectedObject === 'query'
                      ? evaluationResult.isCorrect
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                        : 'bg-rose-950 border-rose-500 text-rose-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    <Search className="w-4 h-4 text-amber-400" />
                    <span>Query (විමසුම)</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Searches, filters & retrieves specific records</p>
                </button>

                {/* 4. Report */}
                <button
                  onClick={() => handleRouteObject('report')}
                  className={`p-4 rounded-xl border text-left transition-all space-y-1 ${
                    selectedObject === 'report'
                      ? evaluationResult.isCorrect
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                        : 'bg-rose-950 border-rose-500 text-rose-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    <Printer className="w-4 h-4 text-purple-400" />
                    <span>Report (වාර්තාව)</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Formats data into a printable summary document</p>
                </button>
              </div>
            </div>

            {/* Explanation Result */}
            {evaluationResult.show && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs space-y-1 ${
                  evaluationResult.isCorrect
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500 text-rose-200'
                }`}
              >
                <div className="font-bold">{scenario.explanationEn}</div>
                <div className="text-[11px] font-sinhala opacity-80">{scenario.explanationSi}</div>
              </motion.div>
            )}

            {/* Next Scenario Button */}
            {evaluationResult.isCorrect && currentScenarioIndex < SCENARIOS.length - 1 && (
              <div className="flex justify-end pt-1">
                <button
                  onClick={handleNextScenario}
                  className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/20"
                >
                  <span>Next Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: 4 Objects Architecture Matrix */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
              4 Core Database Objects Matrix
            </h4>

            <div className="space-y-2.5 text-[11px] text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-blue-400">1. Table (වගුව):</strong> Stores data physically. Primary component of any relational database.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">2. Form (පෝරමය):</strong> Provides input text boxes and buttons for easy record entry.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-amber-400">3. Query (විමසුම):</strong> Searches and extracts information using SQL / criteria.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-purple-400">4. Report (වාර්තාව):</strong> Summarizes records for hard-copy printing with page numbers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
