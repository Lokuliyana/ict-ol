'use client';

import React, { useState } from 'react';
import { ArrowRight, Database, Cpu, HardDrive, CheckCircle, Play, RotateCcw } from 'lucide-react';

export function SystemDiagram() {
  const [activeScenario, setActiveScenario] = useState<'fingerprint' | 'marks' | 'atm'>('fingerprint');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const scenarios = {
    fingerprint: {
      nameEn: "School Attendance System (2021 O/L Past Paper)",
      nameSi: "පාසල් පැමිණීමේ පද්ධතිය (2021 සා.පෙ. ප්‍රශ්නය)",
      inputEn: "Teacher places thumb on optical scanner (Biometric data / Teacher ID)",
      inputSi: "ගුරුවරයා ඇඟිලි සලකුණු ස්කෑනරය මත තැබීම (ජෛවමිතික ආදානය)",
      storageEn: "Stored teacher biometric profiles & master staff directory",
      storageSi: "තැන්පත් කර ඇති ගුරු ලේඛනය සහ ඇඟිලි සලකුණු දත්ත සමුදාය",
      processEn: "Matcher algorithm validates template, timestamps arrival time",
      processSi: "ඇඟිලි සලකුණ ගලපා බලා පැමිණීමේ වේලාව සටහන් කිරීම",
      outputEn: "Beep sound + Screen confirmation + Monthly Attendance Report",
      outputSi: "තහවුරු කිරීමේ ශබ්දය + තිර සටහන + මාසික පැමිණීමේ වාර්තාව"
    },
    marks: {
      nameEn: "Term Test Mark Processing",
      nameSi: "වාර විභාග ලකුණු සැකසුම් පද්ධතිය",
      inputEn: "Raw test scores (e.g. Ravi: 78, 90, 79, 67, 76, 98)",
      inputSi: "අමු විභාග ලකුණු ඇතුළත් කිරීම (උදා: රවී: 78, 90, 79...)",
      storageEn: "Student profile records & past semester score history",
      storageSi: "ශිෂ්‍ය තොරතුරු හා පෙර වාරවල ලකුණු දත්ත",
      processEn: "Summing total score, computing average, ranking in class",
      processSi: "මුළු එකතුව, සාමාන්‍යය සහ පන්තියේ ස්ථානය ගණනය කිරීම",
      outputEn: "Term report card, class performance analytics, grade ranks",
      outputSi: "වාර විභාග වාර්තා පොත, සාමාන්‍ය ලකුණු සහ ප්‍රගති වාර්තාව"
    },
    atm: {
      nameEn: "ATM Banking Transaction",
      nameSi: "ATM බැංකු ගනුදෙනු පද්ධතිය",
      inputEn: "Insert debit card + enter Secret PIN + select withdrawal amount",
      inputSi: "ඩෙබිට් කාඩ්පත ඇතුළත් කිරීම + රහස්‍ය PIN අංකය + මුදල් ප්‍රමාණය",
      storageEn: "Bank centralized account ledger & available balance",
      storageSi: "බැංකු මධ්‍යම ගිණුම් ශේෂය සහ ගනුදෙනු වාර්තා",
      processEn: "Verifying PIN, checking sufficient balance, deducting amount",
      processSi: "PIN අංකය සහ ප්‍රමාණවත් මුදල් ඇත්දැයි තහවුරු කර ශේෂය අඩු කිරීම",
      outputEn: "Dispensing currency notes + printed transaction receipt",
      outputSi: "මුදල් නෝට්ටු නිකුත් කිරීම + මුද්‍රිත ගනුදෙනු රිසිට්පත"
    }
  };

  const active = scenarios[activeScenario];

  const handleSimulate = () => {
    setIsSimulating(true);
    setCurrentStep(1);
    setTimeout(() => {
      setCurrentStep(2);
      setTimeout(() => {
        setCurrentStep(3);
        setIsSimulating(false);
      }, 900);
    }, 900);
  };

  return (
    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-xl my-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 mb-4 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
            Interactive Architecture Diagram
          </span>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            Information System Data Flow (ආදානය ➔ සැකසීම ➔ ප්‍රතිදානය)
          </h4>
        </div>

        {/* Scenario Switcher */}
        <div className="flex bg-slate-800 p-1 rounded-xl text-xs">
          <button
            onClick={() => { setActiveScenario('fingerprint'); setCurrentStep(0); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'fingerprint' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Fingerprint
          </button>
          <button
            onClick={() => { setActiveScenario('marks'); setCurrentStep(0); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'marks' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Marks
          </button>
          <button
            onClick={() => { setActiveScenario('atm'); setCurrentStep(0); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeScenario === 'atm' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ATM
          </button>
        </div>
      </div>

      <div className="text-xs text-indigo-300 font-medium mb-4 flex items-center justify-between">
        <span>Active Scenario: {active.nameEn} ({active.nameSi})</span>
        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
        </button>
      </div>

      {/* The 3 Connected Columns Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        
        {/* Step 1: INPUT */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep === 1 
            ? 'bg-blue-950/80 border-blue-400 ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20' 
            : 'bg-slate-800/80 border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Stage 1: Input (ආදානය)
            </span>
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
              1
            </div>
          </div>
          <p className="text-xs text-slate-200 font-medium mb-1.5">
            {active.inputEn}
          </p>
          <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
            {active.inputSi}
          </p>
        </div>

        {/* Step 2: PROCESS & STORAGE */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep === 2 
            ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/50 shadow-lg shadow-indigo-500/20' 
            : 'bg-slate-800/80 border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Stage 2: Process & Storage</span>
            </span>
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">
              2
            </div>
          </div>
          <p className="text-xs text-slate-200 font-medium mb-1.5">
            {active.processEn}
          </p>
          <p className="text-xs text-slate-400 font-sinhala leading-relaxed mb-3">
            {active.processSi}
          </p>

          <div className="mt-2 pt-2 border-t border-slate-700/80 flex items-start gap-2">
            <Database className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-amber-300/90 leading-tight">
              <span className="font-semibold block text-amber-300">Storage Component (ආචයනය):</span>
              {active.storageEn}
            </div>
          </div>
        </div>

        {/* Step 3: OUTPUT */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep === 3 
            ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-500/20' 
            : 'bg-slate-800/80 border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Stage 3: Output (ප්‍රතිදානය)
            </span>
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
              3
            </div>
          </div>
          <p className="text-xs text-slate-200 font-medium mb-1.5">
            {active.outputEn}
          </p>
          <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
            {active.outputSi}
          </p>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="font-sinhala text-center sm:text-left">
          💡 විභාග රීතිය: තොරතුරු පද්ධතියක් යනු ආදානය (Input), සැකසීම (Process), ආචයනය (Storage) සහ ප්‍රතිදානය (Output) යන සංරචක එකතුවකි.
        </span>
        <button
          onClick={() => setCurrentStep(0)}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Steps</span>
        </button>
      </div>
    </div>
  );
}
