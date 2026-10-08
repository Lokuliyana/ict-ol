'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Stamp, 
  HelpCircle, 
  ArrowRight,
  Shield,
  FileSpreadsheet,
  MapPin,
  Image as ImageIcon,
  BookOpen
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface CueCard {
  id: string;
  titleEn: string;
  titleSi: string;
  description: string;
  expectedLayout: 'title_slide' | 'title_content' | 'title_two_content' | 'blank';
  icon: React.ElementType;
}

const CUE_CARDS: CueCard[] = [
  {
    id: 'cue-1',
    titleEn: '1. Opening Slide (හැඳින්වීමේ කදාව)',
    titleSi: 'ශ්‍රී ලංකාව පිළිබඳ ප්‍රධාන මාතෘකාව හා කර්තෘ නම',
    description: 'Title: "Discover Sri Lanka" + Subtitle: "Prepared by Grade 10 ICT Team"',
    expectedLayout: 'title_slide',
    icon: BookOpen
  },
  {
    id: 'cue-2',
    titleEn: '2. Geographic Map (භූගෝලීය සිතියම)',
    titleSi: 'ශීර්ෂයක් සහිතව දකුණු ආසියානු සිතියමක් පමණක් දැක්වීම',
    description: 'Header: "Location in South Asia" + 1 Full Map Image of the Indian Ocean',
    expectedLayout: 'title_content',
    icon: MapPin
  },
  {
    id: 'cue-3',
    titleEn: '3. Provinces & Map (පළාත් හා සිතියම)',
    titleSi: 'වම්පස පළාත් 9 ලැයිස්තුව හා දකුණුපස සිතියම සැසඳීම',
    description: 'Header: "Administrative Divisions" + Left: Bullet List of 9 Provinces + Right: Provincial Map',
    expectedLayout: 'title_two_content',
    icon: Layout
  },
  {
    id: 'cue-4',
    titleEn: '4. Photo Collage (ඡායාරූප එකතුව)',
    titleSi: 'ශීර්ෂ පාඨ රහිත ස්වභාවික සෞන්දර්ය ඡායාරූප 4ක එකතුව',
    description: 'Full-bleed landscape photo collage without any title or text placeholders',
    expectedLayout: 'blank',
    icon: ImageIcon
  }
];

const LAYOUT_OPTIONS = [
  { id: 'title_slide', nameEn: 'Title Slide', nameSi: 'ශීර්ෂ කදාව', desc: 'Title + Subtitle' },
  { id: 'title_content', nameEn: 'Title and Content', nameSi: 'ශීර්ෂය හා අන්තර්ගතය', desc: 'Title + 1 Content zone' },
  { id: 'title_two_content', nameEn: 'Title and Two Content', nameSi: 'ශීර්ෂය හා ද්විත්ව අන්තර්ගතය', desc: 'Title + 2 Side-by-side zones' },
  { id: 'blank', nameEn: 'Blank', nameSi: 'හිස් කදාව', desc: 'Zero placeholders for custom layout' },
] as const;

export function SlideLayoutMatcher() {
  const [activeTab, setActiveTab] = useState<'layout_matcher' | 'slide_master'>('layout_matcher');
  
  // Layout Matcher State
  const [userAssignments, setUserAssignments] = useState<Record<string, string>>({});
  const [checkedResults, setCheckedResults] = useState<Record<string, boolean>>({});
  const [allMatched, setAllMatched] = useState<boolean>(false);

  // Slide Master State
  const [masterCrestPlaced, setMasterCrestPlaced] = useState<boolean>(false);
  const [isStamping, setIsStamping] = useState<boolean>(false);

  const handleAssign = (cardId: string, layoutId: string) => {
    sound.playClick(600);
    const updated = { ...userAssignments, [cardId]: layoutId };
    setUserAssignments(updated);

    // Live validation
    const card = CUE_CARDS.find(c => c.id === cardId);
    if (card) {
      const isCorrect = card.expectedLayout === layoutId;
      setCheckedResults(prev => ({ ...prev, [cardId]: isCorrect }));
      
      const allDone = CUE_CARDS.every(c => updated[c.id] === c.expectedLayout);
      if (allDone) {
        sound.playVictory();
        setAllMatched(true);
      }
    }
  };

  const handleStampMaster = () => {
    sound.playSuccess();
    setIsStamping(true);
    setTimeout(() => {
      setMasterCrestPlaced(true);
      setIsStamping(false);
      sound.playSnap();
    }, 600);
  };

  const handleRemoveMaster = () => {
    sound.playClick(450);
    setMasterCrestPlaced(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Layout className="w-4 h-4" />
              <span>STATION 02 • TEMPLATE ARCHITECT (කදා පිරිසැලසුම් හා ප්‍රධාන කදාව)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Slide Layouts & Slide Master (පිරිසැලසුම් හා Slide Master)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Match standard slide layouts (Title Slide, Title and Content, Comparison, Blank) to real-world scenarios and master batch template automation with Slide Master.
            </p>
          </div>

          {/* Mode Tabs */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('layout_matcher'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'layout_matcher'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              Layout Matcher (2024 O/L)
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('slide_master'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'slide_master'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Stamp className="w-3.5 h-3.5" />
              Slide Master Stamp (ප්‍රධාන කදාව)
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'layout_matcher' ? (
          <motion.div
            key="layout_matcher"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* 2024 Past Paper Challenge Card */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    2024 O/L Paper II • Q01 (vi) Challenge
                  </span>
                  <span className="text-xs text-slate-400">
                    Match each slide scenario to its most appropriate slide layout
                  </span>
                </div>
                {allMatched && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                    <CheckCircle2 className="w-4 h-4" /> 4/4 Perfect Layout Selection!
                  </div>
                )}
              </div>

              {/* 4 Cue Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CUE_CARDS.map((card) => {
                  const Icon = card.icon;
                  const assigned = userAssignments[card.id];
                  const isCorrect = checkedResults[card.id];

                  return (
                    <div
                      key={card.id}
                      className={`p-4 rounded-2xl border-2 transition-all space-y-3 ${
                        isCorrect
                          ? 'bg-emerald-950/20 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                          : assigned && !isCorrect
                          ? 'bg-rose-950/20 border-rose-500/60 shadow-lg shadow-rose-500/10'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white leading-tight">
                              {card.titleEn}
                            </h4>
                            <div className="text-[11px] text-slate-400">
                              {card.titleSi}
                            </div>
                          </div>
                        </div>
                        {isCorrect && (
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                            CORRECT ✓
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                        {card.description}
                      </p>

                      {/* Layout Selector Buttons */}
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        {LAYOUT_OPTIONS.map((layout) => {
                          const isSelected = assigned === layout.id;

                          return (
                            <button
                              key={layout.id}
                              onClick={() => handleAssign(card.id, layout.id)}
                              className={`p-2 rounded-xl text-left border transition-all ${
                                isSelected
                                  ? isCorrect
                                    ? 'bg-emerald-600/30 border-emerald-400 text-white'
                                    : 'bg-rose-600/30 border-rose-400 text-white'
                                  : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              <div className="text-[11px] font-bold truncate">
                                {layout.nameEn}
                              </div>
                              <div className="text-[9px] text-slate-400 truncate">
                                {layout.nameSi}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="slide_master"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Slide Master Studio */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Stamp className="w-5 h-5 text-indigo-400" />
                    The Slide Master Automation Lab (ප්‍රධාන කදා ස්වයංක්‍රීයකරණය)
                  </h3>
                  <p className="text-xs text-slate-300 max-w-2xl mt-1">
                    Instead of manually pasting a school crest or footer across all 20 slides, placing it on the <strong>Slide Master</strong> applies it instantaneously to every single slide in the deck.
                  </p>
                </div>

                <div className="flex gap-2">
                  {!masterCrestPlaced ? (
                    <button
                      onClick={handleStampMaster}
                      disabled={isStamping}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all"
                    >
                      <Stamp className="w-4 h-4" />
                      {isStamping ? 'Stamping All 20 Slides...' : 'Stamp Crest on Slide Master'}
                    </button>
                  ) : (
                    <button
                      onClick={handleRemoveMaster}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold border border-slate-700"
                    >
                      Clear Slide Master
                    </button>
                  )}
                </div>
              </div>

              {/* Master vs Children Visual Deck */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Master Slide */}
                <div className="lg:col-span-4 bg-slate-900/90 border-2 border-indigo-500/50 rounded-2xl p-4 relative shadow-xl shadow-indigo-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-indigo-300 uppercase flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      MASTER SLIDE TEMPLATE
                    </span>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono font-bold">
                      Control Deck
                    </span>
                  </div>

                  <div className="h-44 bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div className="h-4 w-28 bg-slate-800 rounded" />
                      {masterCrestPlaced ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="p-1.5 bg-amber-500/20 border border-amber-400 rounded-lg text-amber-300 flex items-center gap-1 shadow-md shadow-amber-500/20"
                        >
                          <Shield className="w-4 h-4 text-amber-400" />
                          <span className="text-[9px] font-bold">CREST</span>
                        </motion.div>
                      ) : (
                        <div className="w-12 h-6 border-2 border-dashed border-slate-700 rounded flex items-center justify-center text-[9px] text-slate-500 font-mono">
                          Drop Crest
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <div className="h-2.5 w-3/4 bg-slate-800/80 rounded" />
                      <div className="h-2.5 w-1/2 bg-slate-800/80 rounded" />
                    </div>

                    <div className="flex justify-between text-[9px] font-mono text-slate-500 border-t border-slate-900 pt-1">
                      <span>Date: 2026/10/08</span>
                      <span>Footer: Grade 10 ICT</span>
                      <span>&lt;#&gt;</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                    Any element placed here (Logo, Footer, Font, Color Theme) automatically replicates to all child slides.
                  </p>
                </div>

                {/* Right: 6 Thumbnails of the 20-Slide Deck */}
                <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      LIVE DECK THUMBNAILS (20 SLIDES IN TOTAL)
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono">
                      {masterCrestPlaced ? '✓ All 20 Synced from Master' : '○ Default Blank Slides'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 h-28 flex flex-col justify-between relative group hover:border-slate-700 transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500 font-bold">
                            Slide {num}
                          </span>
                          {masterCrestPlaced && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: num * 0.05 }}
                              className="p-1 bg-amber-500/20 border border-amber-400/60 rounded text-amber-300"
                            >
                              <Shield className="w-3 h-3 text-amber-400" />
                            </motion.div>
                          )}
                        </div>

                        <div className="space-y-1">
                          <div className="h-2 w-16 bg-slate-800 rounded" />
                          <div className="h-1.5 w-12 bg-slate-900 rounded" />
                        </div>

                        <div className="text-[8px] font-mono text-slate-600 truncate">
                          Footer: Grade 10 ICT • #{num}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-center text-xs text-slate-400 font-mono">
                    + 14 more slides in deck (all stamped automatically)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
