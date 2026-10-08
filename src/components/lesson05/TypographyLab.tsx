'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Type, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  FolderDown, 
  Layers,
  FileCode,
  Globe,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type SoftwareCategory = 'foss' | 'proprietary' | 'cloud';

interface SoftwareItem {
  id: string;
  name: string;
  extension: string;
  category: SoftwareCategory;
  desc: string;
}

const SOFTWARE_CHUTE: SoftwareItem[] = [
  { id: 'libre', name: 'LibreOffice Writer', extension: '.odt (OpenDocument)', category: 'foss', desc: 'Free and Open Source (FOSS)' },
  { id: 'word', name: 'Microsoft Word', extension: '.docx (Word Document)', category: 'proprietary', desc: 'Commercial Proprietary Software' },
  { id: 'docs', name: 'Google Docs', extension: 'Cloud Workspace / Web', category: 'cloud', desc: 'Real-time Cloud Collaboration' },
  { id: 'openoffice', name: 'Apache OpenOffice Writer', extension: '.odt (OpenDocument)', category: 'foss', desc: 'FOSS Suite' },
  { id: 'pages', name: 'Apple Pages', extension: '.pages / macOS', category: 'proprietary', desc: 'Proprietary Apple Suite' },
];

export function TypographyLab() {
  const [activeTab, setActiveTab] = useState<'doctor' | 'case' | 'sorter'>('doctor');

  // Subscript / Superscript surgery states
  const [subscriptFixed, setSubscriptFixed] = useState(false);
  const [superscriptFixed, setSuperscriptFixed] = useState(false);

  // Case Cycler state
  // 0: UPPERCASE, 1: lowercase, 2: Capitalize Each Word, 3: Sentence case
  const [caseIndex, setCaseIndex] = useState(0);

  // Software Sorter state
  const [sortedItems, setSortedItems] = useState<Record<string, SoftwareCategory>>({});
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareItem | null>(SOFTWARE_CHUTE[0]);

  const CASE_MODES = [
    { name: 'UPPERCASE', text: 'SRI LANKA G.C.E. O/L ICT EXAMINATION' },
    { name: 'lowercase', text: 'sri lanka g.c.e. o/l ict examination' },
    { name: 'Capitalize Each Word', text: 'Sri Lanka G.C.E. O/L ICT Examination' },
    { name: 'Sentence case', text: 'Sri lanka g.c.e. o/l ict examination.' },
  ];

  const handleFixSubscript = () => {
    sound.playSuccess();
    setSubscriptFixed(true);
  };

  const handleFixSuperscript = () => {
    sound.playSuccess();
    setSuperscriptFixed(true);
  };

  const handleCycleCase = () => {
    sound.playClick(750);
    setCaseIndex((prev) => (prev + 1) % CASE_MODES.length);
  };

  const handleSortSoftware = (item: SoftwareItem, targetCategory: SoftwareCategory) => {
    if (item.category === targetCategory) {
      sound.playSuccess();
    } else {
      sound.playError();
    }
    setSortedItems((prev) => ({ ...prev, [item.id]: targetCategory }));
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Sub-view Switcher */}
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 1: The Typography Lab</span>
              <span className="text-xs font-sinhala text-emerald-400 font-normal">
                (අකුරු හැඩසැසීම සහ මෘදුකාංග වර්ගීකරණය)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Master Subscript ($Ctrl+=)$, Superscript ($Ctrl+Shift++$), Case Cycling ($Shift+F3$), and FOSS software classifications.
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto">
          <button
            onClick={() => {
              sound.playClick(600);
              setActiveTab('doctor');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'doctor'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Formula Doctor (Sub/Super)
          </button>
          <button
            onClick={() => {
              sound.playClick(600);
              setActiveTab('case');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'case'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Case Cycler (Shift+F3)
          </button>
          <button
            onClick={() => {
              sound.playClick(600);
              setActiveTab('sorter');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'sorter'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            FOSS vs. Proprietary Sorter
          </button>
        </div>
      </div>

      {/* Main Grid Content Area */}
      {activeTab === 'doctor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Interactive Formula Surgery Sandbox */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[440px]">
            
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-mono text-emerald-400 font-bold">
                DOCUMENT DOCTOR: FORMULA SURGERY
              </span>
              <span className="text-xs text-slate-500 font-mono">2021 O/L P1 Q06 Benchmark</span>
            </div>

            {/* Central Broken Document Canvas */}
            <div className="relative z-10 my-auto py-6 space-y-6">
              
              {/* CASE 1: Subscript Chemical Formula (H2O) */}
              <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span>Case A: Chemical Formula for Water</span>
                  <span className={subscriptFixed ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                    {subscriptFixed ? '✓ SUB-SURGERY COMPLETE' : '⚠️ BROKEN BASELINE'}
                  </span>
                </div>

                <div className="flex items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-3xl sm:text-4xl font-mono font-bold tracking-wider flex items-baseline">
                    <span className="text-cyan-400">H</span>
                    <motion.span
                      animate={{
                        y: subscriptFixed ? 12 : 0,
                        scale: subscriptFixed ? 0.7 : 1.1,
                        color: subscriptFixed ? '#10b981' : '#f43f5e'
                      }}
                      className="inline-block px-1"
                    >
                      2
                    </motion.span>
                    <span className="text-cyan-400">O</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400 font-mono">
                    Shortcut: <strong>Ctrl + =</strong> (Subscript / යටිලකුණ)
                  </span>
                  <button
                    onClick={handleFixSubscript}
                    className={`px-4 py-1.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${
                      subscriptFixed 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30'
                    }`}
                  >
                    {subscriptFixed ? 'Subscript Applied' : 'Apply Subscript Needle (Ctrl + =)'}
                  </button>
                </div>
              </div>

              {/* CASE 2: Superscript Exponent Formula (X3 + Y3 = Z3) */}
              <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span>Case B: Algebraic Exponent Powers</span>
                  <span className={superscriptFixed ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                    {superscriptFixed ? '✓ SUPER-ELEVATOR COMPLETE' : '⚠️ BROKEN POWERS'}
                  </span>
                </div>

                <div className="flex items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-3xl sm:text-4xl font-mono font-bold tracking-wider flex items-baseline gap-2">
                    <div className="flex items-baseline">
                      <span className="text-violet-400">X</span>
                      <motion.span
                        animate={{
                          y: superscriptFixed ? -14 : 0,
                          scale: superscriptFixed ? 0.7 : 1.1,
                          color: superscriptFixed ? '#10b981' : '#f43f5e'
                        }}
                        className="inline-block px-0.5"
                      >
                        3
                      </motion.span>
                    </div>
                    <span className="text-slate-500">+</span>
                    <div className="flex items-baseline">
                      <span className="text-violet-400">Y</span>
                      <motion.span
                        animate={{
                          y: superscriptFixed ? -14 : 0,
                          scale: superscriptFixed ? 0.7 : 1.1,
                          color: superscriptFixed ? '#10b981' : '#f43f5e'
                        }}
                        className="inline-block px-0.5"
                      >
                        3
                      </motion.span>
                    </div>
                    <span className="text-slate-500">=</span>
                    <div className="flex items-baseline">
                      <span className="text-violet-400">Z</span>
                      <motion.span
                        animate={{
                          y: superscriptFixed ? -14 : 0,
                          scale: superscriptFixed ? 0.7 : 1.1,
                          color: superscriptFixed ? '#10b981' : '#f43f5e'
                        }}
                        className="inline-block px-0.5"
                      >
                        3
                      </motion.span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400 font-mono">
                    Shortcut: <strong>Ctrl + Shift + +</strong> (Superscript / උඩලකුණ)
                  </span>
                  <button
                    onClick={handleFixSuperscript}
                    className={`px-4 py-1.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${
                      superscriptFixed 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30'
                    }`}
                  >
                    {superscriptFixed ? 'Superscript Applied' : 'Elevate Superscripts (Ctrl+Shift++)'}
                  </button>
                </div>
              </div>

            </div>

            <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Text Formatting §6.3</span>
              <span className="text-emerald-400">O/L Past Paper 2021 Paper I Q06</span>
            </div>

          </div>

          {/* Right: Technical Inspector HUD */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Typography Anatomy</span>
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Formatting Specs
                </span>
              </div>

              {/* Subscript Explanation */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                  <span>Subscript (යටිලකුණ):</span>
                  <code className="text-[11px] bg-slate-900 px-2 py-0.5 rounded text-white">Ctrl + =</code>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reduces font size and drops characters below the text baseline. Used universally for chemical formulas ($H_2O, CO_2$) and base notations ($1011_2, 45_{10}$).
                </p>
              </div>

              {/* Superscript Explanation */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                  <span>Superscript (උඩලකුණ):</span>
                  <code className="text-[11px] bg-slate-900 px-2 py-0.5 rounded text-white">Ctrl + Shift + +</code>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reduces font size and elevates characters above the text baseline. Used for mathematical powers (X&sup2; + Y&sup2; = Z&sup2;) and ordinal indicators (1st, 2nd, 3rd).
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
              <strong>Exam Reminder:</strong> 2021 O/L P1 Q06 explicitly asked how to format $H_2O$. Correct Answer: <strong>Subscript (යටිලකුණ)</strong>.
            </div>
          </div>

        </div>
      )}

      {/* CASE CYCLER TAB */}
      {activeTab === 'case' && (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>The Case Transformer Wheel</span>
                <span className="text-xs font-sinhala text-emerald-400 font-normal">
                  (කැපිටල් / සිම්පල් වෙනස් කිරීම - Shift + F3)
                </span>
              </h4>
              <p className="text-xs text-slate-400">
                Cycle text through all 4 standard case transformations instantly without retyping.
              </p>
            </div>

            <button
              onClick={handleCycleCase}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-emerald-500/30 flex items-center gap-2 self-start sm:self-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Press Shift + F3 (Cycle Case)</span>
            </button>
          </div>

          {/* Current Case Display Board */}
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
            <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase">
              ACTIVE CASE MODE: {CASE_MODES[caseIndex].name}
            </div>

            <motion.div
              key={caseIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-lg sm:text-2xl text-white font-bold tracking-wide break-words"
            >
              {CASE_MODES[caseIndex].text}
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              {CASE_MODES.map((m, idx) => (
                <div
                  key={m.name}
                  className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                    caseIndex === idx
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_12px_#10b981]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-500'
                  }`}
                >
                  {m.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOSS VS PROPRIETARY SORTER TAB */}
      {activeTab === 'sorter' && (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Software License Classification Sorter</span>
                <span className="text-xs font-sinhala text-emerald-400 font-normal">
                  (හිමිකාර, නිදහස් හා විවෘත සහ වලාකුළු මෘදුකාංග)
                </span>
              </h4>
              <p className="text-xs text-slate-400">
                Route falling word processors to their correct license categories and file extensions.
              </p>
            </div>

            <span className="text-xs font-mono text-emerald-400">
              Curriculum §6.1 Classification
            </span>
          </div>

          {/* Sorter Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bin 1: FOSS */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-4 text-center">
              <div className="flex flex-col items-center gap-1 pb-3 border-b border-slate-800">
                <FileCode className="w-6 h-6 text-emerald-400" />
                <h5 className="font-mono text-sm font-bold text-white">Free & Open Source (FOSS)</h5>
                <span className="text-[10px] text-emerald-400 font-sinhala">නිදහස් හා විවෘත මෘදුකාංග</span>
                <span className="text-[10px] font-mono text-slate-400">Native format: .odt (OpenDocument)</span>
              </div>

              <div className="space-y-2 min-h-[120px]">
                {SOFTWARE_CHUTE.map(item => {
                  const sorted = sortedItems[item.id] === 'foss';
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSortSoftware(item, 'foss')}
                      className={`w-full p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                        sorted 
                          ? (item.category === 'foss' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-rose-500/20 border-rose-500 text-rose-300')
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {item.name} ({item.extension})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bin 2: Proprietary */}
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-5 space-y-4 text-center">
              <div className="flex flex-col items-center gap-1 pb-3 border-b border-slate-800">
                <Layers className="w-6 h-6 text-cyan-400" />
                <h5 className="font-mono text-sm font-bold text-white">Proprietary / Commercial</h5>
                <span className="text-[10px] text-cyan-400 font-sinhala">හිමිකාර මෘදුකාංග</span>
                <span className="text-[10px] font-mono text-slate-400">Native format: .docx / .pages</span>
              </div>

              <div className="space-y-2 min-h-[120px]">
                {SOFTWARE_CHUTE.map(item => {
                  const sorted = sortedItems[item.id] === 'proprietary';
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSortSoftware(item, 'proprietary')}
                      className={`w-full p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                        sorted 
                          ? (item.category === 'proprietary' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-rose-500/20 border-rose-500 text-rose-300')
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {item.name} ({item.extension})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bin 3: Cloud Web */}
            <div className="bg-slate-900/90 border border-violet-500/30 rounded-2xl p-5 space-y-4 text-center">
              <div className="flex flex-col items-center gap-1 pb-3 border-b border-slate-800">
                <Globe className="w-6 h-6 text-violet-400" />
                <h5 className="font-mono text-sm font-bold text-white">Cloud / Web-Based</h5>
                <span className="text-[10px] text-violet-400 font-sinhala">වලාකුළු ආශ්‍රිත මෘදුකාංග</span>
                <span className="text-[10px] font-mono text-slate-400">Real-time collaboration browser</span>
              </div>

              <div className="space-y-2 min-h-[120px]">
                {SOFTWARE_CHUTE.map(item => {
                  const sorted = sortedItems[item.id] === 'cloud';
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSortSoftware(item, 'cloud')}
                      className={`w-full p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                        sorted 
                          ? (item.category === 'cloud' ? 'bg-violet-500/20 border-violet-500 text-violet-300' : 'bg-rose-500/20 border-rose-500 text-rose-300')
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {item.name} ({item.extension})
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center font-mono">
            Click each software button inside its correct category bin to verify licensing.
          </div>
        </div>
      )}
    </div>
  );
}
