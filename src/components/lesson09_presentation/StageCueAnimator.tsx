'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Clapperboard, 
  Film, 
  MousePointer, 
  Clock, 
  Zap, 
  RotateCw, 
  LogOut, 
  LogIn, 
  MoveRight, 
  RefreshCw, 
  Award,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ClassificationChallenge {
  id: string;
  titleEn: string;
  titleSi: string;
  description: string;
  correctType: 'transition' | 'entrance' | 'emphasis' | 'exit' | 'motion_path';
}

const CLASSIFICATION_CHALLENGES: ClassificationChallenge[] = [
  {
    id: 'c1',
    titleEn: 'Curtain Wipe between Slides',
    titleSi: '1 වන කදාවේ සිට 2 වන කදාවට මාරු වීමේදී තිරය විවර වීම',
    description: 'Visual push/wipe motion when transitioning from Slide 1 to Slide 2',
    correctType: 'transition'
  },
  {
    id: 'c2',
    titleEn: 'Trophy Flying onto Canvas',
    titleSi: 'ජයග්‍රාහී කුසලාන රූපය තිරයේ වම්පස සිට ඇතුළට පාවී ඒම',
    description: 'An image object flies in from off-screen into the center of the slide',
    correctType: 'entrance'
  },
  {
    id: 'c3',
    titleEn: 'Highlight Keyword Pulsing in Yellow',
    titleSi: 'තිරයේ ඇති ප්‍රධාන වචනයක් කහ පැහැයෙන් දිදුලමින් විශාල වීම',
    description: 'An existing heading text spins and pulses to draw audience attention',
    correctType: 'emphasis'
  },
  {
    id: 'c4',
    titleEn: 'Chart Dissolving Away',
    titleSi: 'පැහැදිලි කිරීමෙන් පසු ප්‍රස්ථාරය තිරයෙන් ඉවත්ව යාම',
    description: 'A bar chart gradually fades out and disappears from the slide',
    correctType: 'exit'
  }
];

export function StageCueAnimator() {
  const [activeTab, setActiveTab] = useState<'classifier' | 'chain_reaction'>('classifier');

  // Classifier State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  // Chain Reaction Builder State
  const [triggerB1, setTriggerB1] = useState<'onClick' | 'withPrev' | 'afterPrev'>('onClick');
  const [triggerB2, setTriggerB2] = useState<'onClick' | 'withPrev' | 'afterPrev'>('afterPrev');
  const [triggerB3, setTriggerB3] = useState<'onClick' | 'withPrev' | 'afterPrev'>('afterPrev');
  
  const [isPlayingChain, setIsPlayingChain] = useState<boolean>(false);
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);
  const [clickCountNeeded, setClickCountNeeded] = useState<number>(0);

  const handleClassify = (id: string, type: string) => {
    sound.playClick(600);
    const updated = { ...selectedAnswers, [id]: type };
    setSelectedAnswers(updated);

    const challenge = CLASSIFICATION_CHALLENGES.find(c => c.id === id);
    if (challenge) {
      const isCorrect = challenge.correctType === type;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setResults(prev => ({ ...prev, [id]: isCorrect }));
    }
  };

  const handleRunChainTest = () => {
    sound.playClick(700);
    setIsPlayingChain(true);
    setVisibleBullets([]);
    setClickCountNeeded(0);

    // Sequence Simulation:
    // First trigger: B1 is onClick (1st click)
    setTimeout(() => {
      setVisibleBullets(prev => [...prev, 1]);
      sound.playSnap();
      setClickCountNeeded(1);

      // B2 trigger
      if (triggerB2 === 'afterPrev') {
        setTimeout(() => {
          setVisibleBullets(prev => [...prev, 2]);
          sound.playSnap();

          // B3 trigger
          if (triggerB3 === 'afterPrev') {
            setTimeout(() => {
              setVisibleBullets(prev => [...prev, 3]);
              sound.playVictory();
              setIsPlayingChain(false);
            }, 600);
          } else {
            setIsPlayingChain(false);
          }
        }, 600);
      } else if (triggerB2 === 'withPrev') {
        setVisibleBullets(prev => [...prev, 2]);
        if (triggerB3 === 'afterPrev') {
          setTimeout(() => {
            setVisibleBullets(prev => [...prev, 3]);
            sound.playVictory();
            setIsPlayingChain(false);
          }, 600);
        } else {
          setIsPlayingChain(false);
        }
      } else {
        // onClick
        setIsPlayingChain(false);
      }
    }, 400);
  };

  const isChainOptimal = triggerB1 === 'onClick' && triggerB2 === 'afterPrev' && triggerB3 === 'afterPrev';

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Clapperboard className="w-4 h-4" />
              <span>STATION 03 • ANIMATION DIRECTOR (සංක්‍රාන්ති හා අභිමත සජීවීකරණ)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Transitions vs. Custom Animations (කදා සංක්‍රාන්ති හා සජීවීකරණ)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Differentiate Slide Transitions from Custom Animations (Entrance, Emphasis, Exit, Motion Paths) and build automated chain reaction triggers with On Click vs After Previous.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('classifier'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'classifier'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              Motion Classifier
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('chain_reaction'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'chain_reaction'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Chain Reaction Builder
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Classifier */}
      <AnimatePresence mode="wait">
        {activeTab === 'classifier' ? (
          <motion.div
            key="classifier"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLASSIFICATION_CHALLENGES.map((ch) => {
                const selected = selectedAnswers[ch.id];
                const isCorrect = results[ch.id];

                return (
                  <div
                    key={ch.id}
                    className={`p-5 rounded-3xl border-2 transition-all space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                        : selected && !isCorrect
                        ? 'bg-rose-950/20 border-rose-500/60 shadow-lg shadow-rose-500/10'
                        : 'bg-slate-900/80 border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {ch.titleEn}
                        </h4>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {ch.titleSi}
                        </div>
                      </div>
                      {isCorrect && (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                          CORRECT ✓
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                      {ch.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      <button
                        onClick={() => handleClassify(ch.id, 'transition')}
                        className={`p-2 rounded-xl text-left border text-xs font-bold transition-all ${
                          selected === 'transition'
                            ? isCorrect
                              ? 'bg-emerald-600/30 border-emerald-400 text-white'
                              : 'bg-rose-600/30 border-rose-400 text-white'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[11px]">
                          <Film className="w-3 h-3 text-cyan-400" />
                          Slide Transition
                        </div>
                        <div className="text-[9px] text-slate-500">කදා සංක්‍රාන්තිය</div>
                      </button>

                      <button
                        onClick={() => handleClassify(ch.id, 'entrance')}
                        className={`p-2 rounded-xl text-left border text-xs font-bold transition-all ${
                          selected === 'entrance'
                            ? isCorrect
                              ? 'bg-emerald-600/30 border-emerald-400 text-white'
                              : 'bg-rose-600/30 border-rose-400 text-white'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[11px]">
                          <LogIn className="w-3 h-3 text-emerald-400" />
                          Entrance
                        </div>
                        <div className="text-[9px] text-slate-500">ප්‍රවේශ සජීවීකරණය</div>
                      </button>

                      <button
                        onClick={() => handleClassify(ch.id, 'emphasis')}
                        className={`p-2 rounded-xl text-left border text-xs font-bold transition-all ${
                          selected === 'emphasis'
                            ? isCorrect
                              ? 'bg-emerald-600/30 border-emerald-400 text-white'
                              : 'bg-rose-600/30 border-rose-400 text-white'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[11px]">
                          <RotateCw className="w-3 h-3 text-amber-400" />
                          Emphasis
                        </div>
                        <div className="text-[9px] text-slate-500">අවධාරණ සජීවීකරණය</div>
                      </button>

                      <button
                        onClick={() => handleClassify(ch.id, 'exit')}
                        className={`p-2 rounded-xl text-left border text-xs font-bold transition-all ${
                          selected === 'exit'
                            ? isCorrect
                              ? 'bg-emerald-600/30 border-emerald-400 text-white'
                              : 'bg-rose-600/30 border-rose-400 text-white'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[11px]">
                          <LogOut className="w-3 h-3 text-rose-400" />
                          Exit
                        </div>
                        <div className="text-[9px] text-slate-500">පිටවීමේ සජීවීකරණය</div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chain_reaction"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Stage Visual Canvas */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-emerald-400" />
                  LIVE PRESENTATION STAGE (තථ්‍යකාලීන සජීවීකරණ පරීක්ෂාව)
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {clickCountNeeded === 0 ? 'Waiting for Click' : `${clickCountNeeded} Mouse Click(s)`}
                </span>
              </div>

              {/* Animated Bullets Container */}
              <div className="my-auto space-y-4 py-4">
                <h3 className="text-lg font-black text-white">
                  Benefits of Cloud Computing (වළාකුළු පරිගණකයේ වාසි)
                </h3>

                <div className="space-y-3 pl-4 border-l-2 border-slate-800">
                  {/* Bullet 1 */}
                  <div className="h-10 flex items-center">
                    {visibleBullets.includes(1) ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-2.5 bg-indigo-950/80 border border-indigo-500/40 rounded-xl text-xs font-semibold text-indigo-200 flex items-center gap-2 w-full"
                      >
                        <span className="w-2 h-2 rounded-full bg-indigo-400" />
                        1. Cost Reduction on Physical Hardware (දෘඩාංග පිරිවැය අවම වීම)
                        <span className="ml-auto text-[10px] font-mono text-indigo-400">Trigger: {triggerB1}</span>
                      </motion.div>
                    ) : (
                      <div className="text-xs text-slate-600 font-mono italic">
                        [Bullet 1 Hidden - Waiting for Trigger]
                      </div>
                    )}
                  </div>

                  {/* Bullet 2 */}
                  <div className="h-10 flex items-center">
                    {visibleBullets.includes(2) ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-2.5 bg-purple-950/80 border border-purple-500/40 rounded-xl text-xs font-semibold text-purple-200 flex items-center gap-2 w-full"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        2. Global Accessibility Anywhere (ඕනෑම තැනක සිට ප්‍රවේශ විය හැකි වීම)
                        <span className="ml-auto text-[10px] font-mono text-purple-400">Trigger: {triggerB2}</span>
                      </motion.div>
                    ) : (
                      <div className="text-xs text-slate-600 font-mono italic">
                        [Bullet 2 Hidden - Waiting for Trigger]
                      </div>
                    )}
                  </div>

                  {/* Bullet 3 */}
                  <div className="h-10 flex items-center">
                    {visibleBullets.includes(3) ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-2.5 bg-cyan-950/80 border border-cyan-500/40 rounded-xl text-xs font-semibold text-cyan-200 flex items-center gap-2 w-full"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        3. Automated Backups & High Availability (ස්වයංක්‍රීය උපස්ථ හා ආරක්ෂාව)
                        <span className="ml-auto text-[10px] font-mono text-cyan-400">Trigger: {triggerB3}</span>
                      </motion.div>
                    ) : (
                      <div className="text-xs text-slate-600 font-mono italic">
                        [Bullet 3 Hidden - Waiting for Trigger]
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Stage Trigger Button */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={handleRunChainTest}
                  disabled={isPlayingChain}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-white" />
                  {isPlayingChain ? 'Executing Chain Sequence...' : 'Run 1-Click Show Test'}
                </button>

                {isChainOptimal && visibleBullets.length === 3 && (
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Seamless 1-Click Chain Reaction!
                  </span>
                )}
              </div>
            </div>

            {/* Right: Trigger Control Rack */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
                <Sliders className="w-4 h-4 text-purple-400" />
                TIMELINE CUE BOARD (සජීවීකරණ ප්‍රේරක සැකසුම)
              </div>

              {/* Bullet 1 Trigger */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <MousePointer className="w-3.5 h-3.5 text-indigo-400" />
                  Bullet 1 Trigger (1 වන බුලට් ලක්ෂ්‍යය)
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['onClick', 'withPrev', 'afterPrev'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => { sound.playClick(500); setTriggerB1(mode); }}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-bold border truncate transition-all ${
                        triggerB1 === mode
                          ? 'bg-indigo-600 text-white border-indigo-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {mode === 'onClick' ? 'On Click' : mode === 'withPrev' ? 'With Prev' : 'After Prev'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bullet 2 Trigger */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  Bullet 2 Trigger (2 වන බුලට් ලක්ෂ්‍යය)
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['onClick', 'withPrev', 'afterPrev'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => { sound.playClick(500); setTriggerB2(mode); }}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-bold border truncate transition-all ${
                        triggerB2 === mode
                          ? 'bg-purple-600 text-white border-purple-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {mode === 'onClick' ? 'On Click' : mode === 'withPrev' ? 'With Prev' : 'After Prev'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bullet 3 Trigger */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Bullet 3 Trigger (3 වන බුලට් ලක්ෂ්‍යය)
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['onClick', 'withPrev', 'afterPrev'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => { sound.playClick(500); setTriggerB3(mode); }}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-bold border truncate transition-all ${
                        triggerB3 === mode
                          ? 'bg-cyan-600 text-white border-cyan-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {mode === 'onClick' ? 'On Click' : mode === 'withPrev' ? 'With Prev' : 'After Prev'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-2xl text-[11px] text-slate-400 space-y-1">
                <div className="font-bold text-slate-300">💡 O/L Exam Key Concept:</div>
                <div>• <strong>On Click</strong>: Requires a manual mouse click for every item.</div>
                <div>• <strong>With Previous</strong>: Animates simultaneously alongside prior item.</div>
                <div>• <strong>After Previous</strong>: Automates chain reaction right after prior item finishes.</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
