'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FlaskConical, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  HelpCircle, 
  RotateCcw,
  ShieldAlert,
  Boxes
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface TestDataToken {
  val: number;
  expectedType: 'valid' | 'invalid' | 'boundary';
}

const TEST_TOKENS: TestDataToken[] = [
  { val: 75, expectedType: 'valid' },
  { val: 150, expectedType: 'invalid' },
  { val: 0, expectedType: 'boundary' },
  { val: -10, expectedType: 'invalid' },
  { val: 100, expectedType: 'boundary' },
  { val: 99, expectedType: 'valid' },
  { val: 101, expectedType: 'invalid' },
];

interface TestingLevelCard {
  id: string;
  scenarioEn: string;
  scenarioSi: string;
  expectedLevel: 'unit' | 'integration' | 'system' | 'uat';
}

const TESTING_SCENARIOS: TestingLevelCard[] = [
  {
    id: 't1',
    scenarioEn: 'Testing the standalone calculate_tax() subroutine in isolation.',
    scenarioSi: 'calculate_tax() ශ්‍රිතය පමණක් හුදකලාව පරීක්ෂා කිරීම.',
    expectedLevel: 'unit'
  },
  {
    id: 't2',
    scenarioEn: 'Testing if the login module successfully passes User ID to the database module.',
    scenarioSi: 'Login මොඩියුලය මගින් දත්ත සමුදාය වෙත පරිශීලක අංකය හුවමාරු වීම පරීක්ෂාව.',
    expectedLevel: 'integration'
  },
  {
    id: 't3',
    scenarioEn: 'Testing end-to-end security, performance, and server capacity for all 1,000 users.',
    scenarioSi: 'සමස්ත පද්ධතියේ ආරක්ෂාව, වේගය හා ධාරිතාව එකවර පරීක්ෂා කිරීම.',
    expectedLevel: 'system'
  },
  {
    id: 't4',
    scenarioEn: 'Hospital executive board operating the software to approve final acceptance and payment.',
    scenarioSi: 'රෝහල් කළමනාකාරීත්වය සෑහීමකට පත්ව පද්ධතිය නිල වශයෙන් භාරගැනීම.',
    expectedLevel: 'uat'
  },
];

export function StressTestLab() {
  const [activeTab, setActiveTab] = useState<'data_chutes' | 'testing_levels'>('data_chutes');

  // Chutes State
  const [placedData, setPlacedData] = useState<Record<number, 'valid' | 'invalid' | 'boundary'>>({});
  const [chutesComplete, setChutesComplete] = useState<boolean>(false);

  // Testing Level State
  const [levelSelections, setLevelSelections] = useState<Record<string, string>>({});
  const [levelResults, setLevelResults] = useState<Record<string, boolean>>({});
  const [allLevelsCorrect, setAllLevelsCorrect] = useState<boolean>(false);

  const handlePlaceData = (val: number, chute: 'valid' | 'invalid' | 'boundary') => {
    sound.playClick(600);
    const updated = { ...placedData, [val]: chute };
    setPlacedData(updated);

    const token = TEST_TOKENS.find(t => t.val === val);
    if (token) {
      if (token.expectedType === chute) sound.playSuccess();
      else sound.playError();
    }

    const allSorted = TEST_TOKENS.every(t => updated[t.val] === t.expectedType);
    if (allSorted) {
      sound.playVictory();
      setChutesComplete(true);
    }
  };

  const handleSelectLevel = (scenarioId: string, level: string) => {
    sound.playClick(600);
    const updated = { ...levelSelections, [scenarioId]: level };
    setLevelSelections(updated);

    const sc = TESTING_SCENARIOS.find(s => s.id === scenarioId);
    if (sc) {
      const isCorrect = sc.expectedLevel === level;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setLevelResults(prev => ({ ...prev, [scenarioId]: isCorrect }));

      const allDone = TESTING_SCENARIOS.every(s => updated[s.id] === s.expectedLevel);
      if (allDone) {
        sound.playVictory();
        setAllLevelsCorrect(true);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <FlaskConical className="w-4 h-4" />
              <span>STATION 04 • QUALITY ASSURANCE SANDBOX (පරීක්ෂණ දත්ත හා පරීක්ෂණ මට්ටම්)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Test Data Types & 4 Testing Levels (පරීක්ෂණ දත්ත වර්ග හා මට්ටම් 4)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Sort input scores into Valid, Invalid, and Boundary test chutes (Allowed: 0 to 100) and identify the 4 testing levels: Unit, Integration, System, and UAT.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('data_chutes'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'data_chutes'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              Test Data Chutes (0 to 100)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('testing_levels'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'testing_levels'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              4 Testing Levels (Unit &rarr; UAT)
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'data_chutes' && (
          <motion.div
            key="data_chutes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold text-white">
                  Field Rule: Student Term Mark (Allowed Range: 0 to 100)
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Sort all 7 test values into Valid (සාමාන්‍ය), Invalid (අවලංගු), or Boundary (සීමාන්තික) chutes.
                </p>
              </div>

              {chutesComplete && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4" /> 7/7 Perfect Test Data Sorting!
                </div>
              )}
            </div>

            {/* 3 Sorting Chutes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Chute 1: Valid */}
              <div className="bg-slate-900/90 border-2 border-emerald-500/40 rounded-3xl p-5 flex flex-col justify-between min-h-[260px] shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    1. VALID DATA (වලංගු දත්ත)
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">1 to 99</span>
                </div>

                <div className="my-auto py-3 flex flex-wrap gap-2 justify-center">
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'valid').map(t => (
                    <span
                      key={t.val}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                        t.expectedType === 'valid'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {t.val} {t.expectedType === 'valid' ? '✓' : '✗'}
                    </span>
                  ))}
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'valid').length === 0 && (
                    <div className="text-xs text-slate-600 font-mono italic">
                      [Drop Valid marks here]
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                  Values within standard expected range
                </div>
              </div>

              {/* Chute 2: Invalid */}
              <div className="bg-slate-900/90 border-2 border-rose-500/40 rounded-3xl p-5 flex flex-col justify-between min-h-[260px] shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-rose-400">
                    2. INVALID DATA (අවලංගු දත්ත)
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">&lt;0 or &gt;100</span>
                </div>

                <div className="my-auto py-3 flex flex-wrap gap-2 justify-center">
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'invalid').map(t => (
                    <span
                      key={t.val}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                        t.expectedType === 'invalid'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {t.val} {t.expectedType === 'invalid' ? '✓' : '✗'}
                    </span>
                  ))}
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'invalid').length === 0 && (
                    <div className="text-xs text-slate-600 font-mono italic">
                      [Drop Out-of-Range marks here]
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                  Tests error handling and alert prompts
                </div>
              </div>

              {/* Chute 3: Boundary */}
              <div className="bg-slate-900/90 border-2 border-cyan-500/40 rounded-3xl p-5 flex flex-col justify-between min-h-[260px] shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    3. BOUNDARY / EXTREME (සීමාන්තික)
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">0 &amp; 100</span>
                </div>

                <div className="my-auto py-3 flex flex-wrap gap-2 justify-center">
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'boundary').map(t => (
                    <span
                      key={t.val}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                        t.expectedType === 'boundary'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {t.val} {t.expectedType === 'boundary' ? '✓' : '✗'}
                    </span>
                  ))}
                  {TEST_TOKENS.filter(t => placedData[t.val] === 'boundary').length === 0 && (
                    <div className="text-xs text-slate-600 font-mono italic">
                      [Drop Edge-Case marks here]
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                  Values on the exact outer borders (0 and 100)
                </div>
              </div>

            </div>

            {/* Test Value Tokens */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-400">
                DRAG OR ASSIGN TEST DATA VALUES:
              </div>

              <div className="flex flex-wrap gap-3">
                {TEST_TOKENS.map((token) => (
                  <div
                    key={token.val}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-3 shadow-md"
                  >
                    <span className="font-mono font-black text-sm text-white px-2 py-1 bg-slate-900 rounded border border-slate-800">
                      {token.val}
                    </span>
                    <div className="flex gap-1">
                      {(['valid', 'invalid', 'boundary'] as const).map((chute) => (
                        <button
                          key={chute}
                          onClick={() => handlePlaceData(token.val, chute)}
                          className={`px-2 py-1 rounded text-[10px] font-bold border transition-all ${
                            placedData[token.val] === chute
                              ? chute === token.expectedType
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {chute.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'testing_levels' && (
          <motion.div
            key="testing_levels"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  4 Software Testing Levels Stacker
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Match each testing activity to its correct level in the software testing hierarchy.
                </p>
              </div>

              {allLevelsCorrect && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4" /> 4/4 Perfect Testing Level Mapping!
                </div>
              )}
            </div>

            <div className="space-y-4">
              {TESTING_SCENARIOS.map((sc) => {
                const selected = levelSelections[sc.id];
                const isCorrect = levelResults[sc.id];

                return (
                  <div
                    key={sc.id}
                    className={`p-4 rounded-2xl border transition-all space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : selected && !isCorrect
                        ? 'bg-rose-950/20 border-rose-500/50 shadow-md shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {sc.scenarioEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {sc.scenarioSi}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {[
                        { id: 'unit', label: '1. Unit Testing (ඒකක)' },
                        { id: 'integration', label: '2. Integration (අනුකලන)' },
                        { id: 'system', label: '3. System (පද්ධති)' },
                        { id: 'uat', label: '4. UAT (පරිශීලක පිළිගැනීම)' },
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => handleSelectLevel(sc.id, lvl.id)}
                          className={`p-2 rounded-xl text-left border text-[11px] font-bold transition-all truncate ${
                            selected === lvl.id
                              ? lvl.id === sc.expectedLevel
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
