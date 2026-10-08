'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Tv, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Printer, 
  Keyboard, 
  Grid3X3, 
  MoveLeft, 
  MoveRight, 
  HelpCircle,
  Play,
  RotateCcw,
  Presentation
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

const INITIAL_SLIDES: SlideItem[] = [
  { id: 1, title: '1. Introduction to AI', subtitle: 'What is Artificial Intelligence?', color: 'from-blue-600 to-indigo-700' },
  { id: 3, title: '3. Machine Learning Algorithms', subtitle: 'Supervised vs Unsupervised Models', color: 'from-purple-600 to-pink-700' },
  { id: 2, title: '2. History of Computing', subtitle: 'From Alan Turing to Deep Learning', color: 'from-amber-600 to-orange-700' },
  { id: 4, title: '4. Ethical Dilemmas', subtitle: 'Privacy, Bias & Autonomy', color: 'from-emerald-600 to-teal-700' },
];

export function PresenterCockpit() {
  const [activeTab, setActiveTab] = useState<'presenter_view' | 'shortcuts' | 'sorter' | 'handouts'>('presenter_view');

  // Presenter View State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(145); // 02:25

  // Sorter State
  const [slides, setSlides] = useState<SlideItem[]>(INITIAL_SLIDES);
  const [isSortedCorrectly, setIsSortedCorrectly] = useState<boolean>(false);

  // Shortcut Duel State
  const [shortcutTestResult, setShortcutTestResult] = useState<string | null>(null);

  // Handout Optimizer State
  const [handoutLayout, setHandoutLayout] = useState<number>(3); // 1, 2, 3, 6, 9
  const totalAudience = 50;
  const totalSlideDeck = 10;
  const paperUsed = Math.ceil(totalSlideDeck / handoutLayout) * totalAudience;
  const defaultFullPaper = totalSlideDeck * totalAudience;
  const paperSaved = defaultFullPaper - paperUsed;

  // Check sorter ordering
  useEffect(() => {
    const isSorted = slides.every((slide, idx) => slide.id === idx + 1);
    setIsSortedCorrectly(isSorted);
    if (isSorted) sound.playVictory();
  }, [slides]);

  const handleSwap = (index1: number, index2: number) => {
    sound.playClick(600);
    const newSlides = [...slides];
    const temp = newSlides[index1];
    newSlides[index1] = newSlides[index2];
    newSlides[index2] = temp;
    setSlides(newSlides);
  };

  const handleShortcutSelect = (shortcut: 'F5' | 'ShiftF5' | 'CtrlM' | 'Esc') => {
    sound.playClick(700);
    if (shortcut === 'ShiftF5') {
      sound.playSuccess();
      setShortcutTestResult('CORRECT: Shift + F5 starts the slide show immediately from the currently selected Slide 4!');
    } else if (shortcut === 'F5') {
      sound.playError();
      setShortcutTestResult('INCORRECT: F5 restarts from Slide 1 (The Beginning). To start from current slide, use Shift + F5.');
    } else if (shortcut === 'CtrlM') {
      sound.playError();
      setShortcutTestResult('INCORRECT: Ctrl + M inserts a new slide into the presentation.');
    } else {
      sound.playError();
      setShortcutTestResult('INCORRECT: Esc exits full-screen slide show mode.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Presentation className="w-4 h-4" />
              <span>STATION 04 • PROJECTION BOOTH (දසුන්, කෙටිමං හා අත්පත්‍රිකා)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Presentation Views, Shortcuts & Handouts (දසුන්, කෙටිමං හා අත්පත්‍රිකා)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Master the 4 core views (Normal, Slide Sorter, Presenter View, Slide Show), vital keyboard shortcuts (F5 vs Shift+F5, Ctrl+M), and multi-slide audience handout printing.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto flex-wrap gap-1">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('presenter_view'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'presenter_view'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              Presenter Dual-Monitor
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('shortcuts'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'shortcuts'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              F5 vs Shift+F5 Duel
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('sorter'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'sorter'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              Slide Sorter View
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('handouts'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'handouts'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              Handout Optimizer
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'presenter_view' && (
          <motion.div
            key="presenter_view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Dual Screen Simulation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Audience Big Projector View */}
              <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between min-h-[340px] shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                    <Tv className="w-4 h-4 text-emerald-400" />
                    AUDIENCE AUDITORIUM PROJECTOR (ප්‍රේක්ෂක තිරය)
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded">
                    Full Screen 16:9
                  </span>
                </div>

                <div className="my-auto py-6 text-center space-y-3">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Grade 10 ICT • Slide {currentSlideIndex + 1} of 4
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {INITIAL_SLIDES[currentSlideIndex].title}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    {INITIAL_SLIDES[currentSlideIndex].subtitle}
                  </p>
                </div>

                <div className="text-center text-[10px] text-slate-600 font-mono">
                  Audience only sees clean slide graphics (No private notes / timers)
                </div>
              </div>

              {/* Right: Presenter Private Laptop Cockpit */}
              <div className="lg:col-span-7 bg-slate-900/90 border-2 border-orange-500/50 rounded-3xl p-5 space-y-4 shadow-xl shadow-orange-500/10">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-orange-400 flex items-center gap-1.5">
                    <Monitor className="w-4 h-4" />
                    PRESENTER VIEW (ඉදිරිපත් කරන්නාගේ පුද්ගලික ලැප්ටොප් තිරය)
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs font-mono text-white font-bold">
                      02:25 Elapsed • 10:45 AM
                    </span>
                  </div>
                </div>

                {/* Sub-grid: Current Slide + Next Slide + Speaker Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Current Mini */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-[10px] font-mono text-slate-400">Current Slide</div>
                    <div className="text-xs font-bold text-white truncate">
                      {INITIAL_SLIDES[currentSlideIndex].title}
                    </div>
                  </div>

                  {/* Next Slide Preview */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/40 space-y-1">
                    <div className="text-[10px] font-mono text-cyan-400">Next Upcoming Slide</div>
                    <div className="text-xs font-bold text-cyan-200 truncate">
                      {currentSlideIndex < 3 ? INITIAL_SLIDES[currentSlideIndex + 1].title : 'End of Deck'}
                    </div>
                  </div>
                </div>

                {/* Speaker Notes Area */}
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    PRIVATE SPEAKER NOTES (ඉදිරිපත් කරන්නාගේ සටහන්):
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Remember to emphasize Alan Turings 1950 seminal paper Computing Machinery and Intelligence and ask the audience for modern examples of recommendation systems (e.g. YouTube & Netflix).
                  </p>
                </div>

                {/* Navigation Bar */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        sound.playClick(500);
                        setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
                      }}
                      disabled={currentSlideIndex === 0}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 disabled:opacity-40"
                    >
                      ◀ Prev Slide
                    </button>
                    <button
                      onClick={() => {
                        sound.playClick(500);
                        setCurrentSlideIndex((prev) => Math.min(3, prev + 1));
                      }}
                      disabled={currentSlideIndex === 3}
                      className="px-3 py-1.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 disabled:opacity-40"
                    >
                      Next Slide ▶
                    </button>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Slide {currentSlideIndex + 1} / 4
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {activeTab === 'shortcuts' && (
          <motion.div
            key="shortcuts"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-indigo-400" />
                  The Presentation Shortcut Duel (විභාග කෙටිමං අභියෝගය)
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Scenario: You are currently editing <strong>Slide 4</strong> of 10. Which keyboard shortcut launches the slide show directly from Slide 4 without rewinding to the beginning?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => handleShortcutSelect('F5')}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-left space-y-2 group transition-all"
              >
                <div className="px-3 py-1 bg-slate-800 text-indigo-400 font-mono font-black text-sm rounded-lg w-fit">
                  F5
                </div>
                <div className="text-xs font-bold text-white">Start from Slide 1</div>
                <div className="text-[11px] text-slate-400">මුල සිට කදා දැක්ම ආරම්භය</div>
              </button>

              <button
                onClick={() => handleShortcutSelect('ShiftF5')}
                className="p-5 rounded-2xl bg-indigo-950/40 border-2 border-indigo-500/60 hover:border-indigo-400 text-left space-y-2 group transition-all shadow-lg shadow-indigo-500/10"
              >
                <div className="px-3 py-1 bg-indigo-600 text-white font-mono font-black text-sm rounded-lg w-fit">
                  Shift + F5
                </div>
                <div className="text-xs font-bold text-indigo-200">Start from Current Slide</div>
                <div className="text-[11px] text-indigo-300">වත්මන් කදාවේ සිට කදා දැක්ම ආරම්භය</div>
              </button>

              <button
                onClick={() => handleShortcutSelect('CtrlM')}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-left space-y-2 group transition-all"
              >
                <div className="px-3 py-1 bg-slate-800 text-slate-300 font-mono font-black text-sm rounded-lg w-fit">
                  Ctrl + M
                </div>
                <div className="text-xs font-bold text-white">Insert New Slide</div>
                <div className="text-[11px] text-slate-400">නව කදාවක් ඇතුළත් කිරීම (Ctrl+N creates new file)</div>
              </button>

              <button
                onClick={() => handleShortcutSelect('Esc')}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-left space-y-2 group transition-all"
              >
                <div className="px-3 py-1 bg-slate-800 text-slate-300 font-mono font-black text-sm rounded-lg w-fit">
                  Esc
                </div>
                <div className="text-xs font-bold text-white">End Slide Show</div>
                <div className="text-[11px] text-slate-400">කදා දැක්මෙන් පිටවීම</div>
              </button>
            </div>

            {shortcutTestResult && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                shortcutTestResult.startsWith('CORRECT')
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {shortcutTestResult.startsWith('CORRECT') ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <span>{shortcutTestResult}</span>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'sorter' && (
          <motion.div
            key="sorter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5 text-cyan-400" />
                  Slide Sorter View Shuffle (කදා පෙළගැසුම් දසුන)
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  In Slide Sorter View, slides appear in a grid for fast rearranging. Reorder Slide 2 and Slide 3 so they run chronologically 1 $\rightarrow$ 2 $\rightarrow$ 3 $\rightarrow$ 4!
                </p>
              </div>

              {isSortedCorrectly && (
                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Correct Chronological Sequence!
                </div>
              )}
            </div>

            {/* Sorter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between h-44 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-slate-800 text-cyan-400 px-2 py-0.5 rounded">
                      Position {idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      slide.id === idx + 1 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      Card #{slide.id}
                    </span>
                  </div>

                  <div className="my-auto">
                    <h5 className="text-xs font-bold text-white leading-tight">
                      {slide.title}
                    </h5>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Move Left / Right Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleSwap(idx, idx - 1)}
                      disabled={idx === 0}
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30"
                    >
                      <MoveLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-500">Swap</span>
                    <button
                      onClick={() => handleSwap(idx, idx + 1)}
                      disabled={idx === slides.length - 1}
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30"
                    >
                      <MoveRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'handouts' && (
          <motion.div
            key="handouts"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Printer className="w-5 h-5 text-emerald-400" />
                  Audience Handout Print Optimizer (අත්පත්‍රිකා මුද්‍රණ කළමනාකරණය)
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Instead of printing 1 slide per full page (500 sheets for 50 students), select a multi-slide handout layout to save paper and provide note-taking lines.
                </p>
              </div>
            </div>

            {/* Handout Layout Picker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { count: 1, name: '1 Slide / Page', desc: 'Full Slide (No Notes)' },
                { count: 2, name: '2 Slides / Page', desc: 'Two Large Horizontal' },
                { count: 3, name: '3 Slides / Page', desc: 'Optimal (With Ruled Note Lines)' },
                { count: 6, name: '6 Slides / Page', desc: 'Thumbnail Grid' },
              ].map((opt) => (
                <button
                  key={opt.count}
                  onClick={() => { sound.playClick(600); setHandoutLayout(opt.count); }}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    handoutLayout === opt.count
                      ? 'bg-emerald-950/50 border-emerald-400 text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-400/50'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{opt.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>

            {/* Paper Savings Stats HUD */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Total Audience</div>
                <div className="text-xl font-black text-white font-mono">{totalAudience} Students</div>
                <div className="text-[10px] text-slate-400">10 slides in deck</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Paper Consumed</div>
                <div className="text-xl font-black text-cyan-400 font-mono">{paperUsed} Sheets</div>
                <div className="text-[10px] text-slate-400">At {handoutLayout} slides / page</div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Paper Saved</div>
                <div className="text-xl font-black text-emerald-400 font-mono">+{paperSaved} Sheets</div>
                <div className="text-[10px] text-emerald-400/80">{(paperSaved / defaultFullPaper * 100).toFixed(0)}% eco-friendly savings!</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
