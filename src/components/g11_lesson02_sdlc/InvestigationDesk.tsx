'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Eye, 
  Layers, 
  Sliders, 
  Scale, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ToolScenario {
  id: string;
  scenarioEn: string;
  scenarioSi: string;
  expectedTool: 'interview' | 'questionnaire' | 'observation' | 'document' | 'prototyping';
}

const TOOL_SCENARIOS: ToolScenario[] = [
  {
    id: 's1',
    scenarioEn: 'Need deep, qualitative, in-depth requirements from the Chief Librarian.',
    scenarioSi: 'ප්‍රධාන පුස්තකාලයාධිපතිගෙන් ගැඹුරු හා ගුණාත්මක තොරතුරු ලබාගැනීම.',
    expectedTool: 'interview'
  },
  {
    id: 's2',
    scenarioEn: 'Need feedback from 1,200 students scattered across 9 provinces.',
    scenarioSi: 'පළාත් 9 පුරා විසිරුණු සිසුන් 1,200 දෙනෙකුගෙන් කෙටි කලකින් තොරතුරු ලබාගැනීම.',
    expectedTool: 'questionnaire'
  },
  {
    id: 's3',
    scenarioEn: 'Need to uncover actual daily counter habits and unwritten bottlenecks.',
    scenarioSi: 'දෛනික කවුන්ටර සේවා ක්‍රියාවලිය හා ලිඛිතව නොමැති ගැටලු හඳුනාගැනීම.',
    expectedTool: 'observation'
  },
  {
    id: 's4',
    scenarioEn: 'Client cannot visualize technical jargon and needs an interactive UI model.',
    scenarioSi: 'තාක්ෂණික වචන තේරුම්ගත නොහැකි සේවාදායකයාට අත්හදා බැලිය හැකි මූලික ආකෘතියක්.',
    expectedTool: 'prototyping'
  },
];

export function InvestigationDesk() {
  const [activeTab, setActiveTab] = useState<'gathering_tools' | 'feasibility_scale' | 'req_types'>('gathering_tools');

  // Tool Matcher State
  const [userToolSelections, setUserToolSelections] = useState<Record<string, string>>({});
  const [toolResults, setToolResults] = useState<Record<string, boolean>>({});
  const [allToolsMatched, setAllToolsMatched] = useState<boolean>(false);

  // Feasibility Scale State
  const [techDial, setTechDial] = useState<number>(75);
  const [econScale, setEconScale] = useState<number>(80);
  const [operDial, setOperDial] = useState<number>(70);

  const isProjectFeasible = techDial >= 50 && econScale >= 50 && operDial >= 50;

  const handleToolSelect = (scenarioId: string, toolId: string) => {
    sound.playClick(600);
    const updated = { ...userToolSelections, [scenarioId]: toolId };
    setUserToolSelections(updated);

    const sc = TOOL_SCENARIOS.find(s => s.id === scenarioId);
    if (sc) {
      const isCorrect = sc.expectedTool === toolId;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setToolResults(prev => ({ ...prev, [scenarioId]: isCorrect }));

      const allDone = TOOL_SCENARIOS.every(s => updated[s.id] === s.expectedTool);
      if (allDone) {
        sound.playVictory();
        setAllToolsMatched(true);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Search className="w-4 h-4" />
              <span>STATION 02 • THE INVESTIGATION DESK (අවශ්‍යතා එක්රැස් කිරීම හා ශක්‍යතාව)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Requirement Gathering & Feasibility Study (අවශ්‍යතා හා ශක්‍යතා අධ්‍යයනය)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Evaluate 5 requirement gathering techniques (Interviews, Questionnaires, Observation, Document Review, Prototyping) and balance Technical, Economic, and Operational Feasibility.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('gathering_tools'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'gathering_tools'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              5 Gathering Tools
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('feasibility_scale'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'feasibility_scale'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              Feasibility Balance Scale
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('req_types'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'req_types'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Functional vs Non-Functional
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'gathering_tools' && (
          <motion.div
            key="gathering_tools"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-400" />
                  Requirement Gathering Technique Matcher
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Select the most appropriate gathering tool for each real-world client situation.
                </p>
              </div>

              {allToolsMatched && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4" /> 4/4 Perfect Method Selection!
                </div>
              )}
            </div>

            <div className="space-y-4">
              {TOOL_SCENARIOS.map((sc) => {
                const selected = userToolSelections[sc.id];
                const isCorrect = toolResults[sc.id];

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

                    {/* 5 Tool Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 pt-1">
                      {[
                        { id: 'interview', label: 'Interviews (සම්මුඛ සාකච්ඡා)' },
                        { id: 'questionnaire', label: 'Questionnaires (ප්‍රශ්නාවලි)' },
                        { id: 'observation', label: 'Observation (නිරීක්ෂණ)' },
                        { id: 'document', label: 'Document Review (ලේඛන)' },
                        { id: 'prototyping', label: 'Prototyping (මූලාකෘති)' },
                      ].map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => handleToolSelect(sc.id, tool.id)}
                          className={`p-2 rounded-xl text-left border text-[10px] font-bold transition-all truncate ${
                            selected === tool.id
                              ? tool.id === sc.expectedTool
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {tool.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'feasibility_scale' && (
          <motion.div
            key="feasibility_scale"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: 3 Feasibility Dials */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-400" />
                  3-WAY FEASIBILITY DASHBOARD (ශක්‍යතා අධ්‍යයන උපකරණ පුවරුව)
                </span>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold ${
                  isProjectFeasible ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  {isProjectFeasible ? 'PROJECT GO ✓' : 'NO GO (RISK HIGH) ✗'}
                </span>
              </div>

              {/* Dial 1: Technical */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>1. Technical Feasibility (තාක්ෂණික ශක්‍යතාව):</span>
                  <span className="font-mono text-cyan-400">{techDial}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={techDial}
                  onChange={(e) => {
                    sound.playClick(600);
                    setTechDial(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <p className="text-[10px] text-slate-400">
                  Evaluates hardware, network infrastructure, and in-house technical skill availability.
                </p>
              </div>

              {/* Dial 2: Economic */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>2. Economic Feasibility (ආර්ථික ශක්‍යතාව):</span>
                  <span className="font-mono text-emerald-400">{econScale}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={econScale}
                  onChange={(e) => {
                    sound.playClick(600);
                    setEconScale(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <p className="text-[10px] text-slate-400">
                  Cost-Benefit Analysis: Tangible financial returns vs initial development and operational costs.
                </p>
              </div>

              {/* Dial 3: Operational */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>3. Operational Feasibility (ක්‍රියාකාරී ශක්‍යතාව):</span>
                  <span className="font-mono text-amber-400">{operDial}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={operDial}
                  onChange={(e) => {
                    sound.playClick(600);
                    setOperDial(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <p className="text-[10px] text-slate-400">
                  Assesses staff willingness to adopt the system, training needs, and resistance to change.
                </p>
              </div>
            </div>

            {/* Right: Feasibility Verdict Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold">
                FEASIBILITY VERDICT:
              </div>

              <div className={`p-5 rounded-3xl border-2 space-y-3 ${
                isProjectFeasible
                  ? 'bg-emerald-950/40 border-emerald-500/60 shadow-xl shadow-emerald-500/10'
                  : 'bg-rose-950/40 border-rose-500/60 shadow-xl shadow-rose-500/10'
              }`}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className={`w-5 h-5 ${isProjectFeasible ? 'text-emerald-400' : 'text-rose-400'}`} />
                  <h4 className="text-sm font-bold text-white">
                    {isProjectFeasible ? 'System Approved for Development' : 'Feasibility Blocker Detected'}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isProjectFeasible
                    ? 'All three feasibility criteria (Technical, Economic, Operational) surpass the 50% risk threshold. The startup team is authorized to proceed to System Analysis.'
                    : 'One or more feasibility pillars fall below the safe operational threshold. Rectify budget, server readiness, or staff training before investing development funds.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'req_types' && (
          <motion.div
            key="req_types"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Functional Box */}
            <div className="bg-slate-950 border-2 border-indigo-500/40 rounded-3xl p-5 space-y-3 shadow-xl">
              <div className="text-xs font-mono font-bold text-indigo-400 uppercase">
                FUNCTIONAL REQUIREMENTS (කාර්යබද්ධ අවශ්‍යතා)
              </div>
              <h4 className="text-sm font-bold text-white">
                What the system DOES (පද්ධතියෙන් ඉටුවන කාර්යයන්)
              </h4>
              <p className="text-xs text-slate-400">
                Core services, data transactions, and computational features provided directly to users:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc pl-5">
                <li>Calculate student term test totals and average marks.</li>
                <li>Print printable payment receipts for library book fines.</li>
                <li>Authenticate student login using username and encrypted password.</li>
                <li>Send automated SMS notifications upon attendance check-in.</li>
              </ul>
            </div>

            {/* Non-Functional Box */}
            <div className="bg-slate-950 border-2 border-cyan-500/40 rounded-3xl p-5 space-y-3 shadow-xl">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                NON-FUNCTIONAL REQUIREMENTS (කාර්යබද්ධ නොවන අවශ්‍යතා)
              </div>
              <h4 className="text-sm font-bold text-white">
                How WELL the system performs (කාර්යසාධන ගුණාංග)
              </h4>
              <p className="text-xs text-slate-400">
                Performance standards, security, accessibility, and quality constraints:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc pl-5">
                <li>System response time must be under 2 seconds during peak loads.</li>
                <li>99.9% server availability and uptime throughout the school year.</li>
                <li>Passwords stored using SHA-256 cryptographic hashing.</li>
                <li>User interface must comply with bilingual accessibility standards.</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
