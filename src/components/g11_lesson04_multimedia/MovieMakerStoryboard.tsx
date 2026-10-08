'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, 
  Film, 
  Music, 
  Type, 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  RotateCcw, 
  Layers, 
  FileVideo, 
  Zap, 
  ArrowRight,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface StoryboardClip {
  id: string;
  order: number;
  title: string;
  type: 'title' | 'video' | 'animation';
  duration: string;
  bgColor: string;
  icon: React.ElementType;
}

export function MovieMakerStoryboard() {
  const [activeTab, setActiveTab] = useState<'storyboard' | 'transitions' | 'formats'>('storyboard');

  // Storyboard Sequencing State (2022 O/L Paper II Question 05(iii))
  const [clips, setClips] = useState<StoryboardClip[]>([
    { id: 'c1', order: 1, title: 'Title Screen (Grade 11 Intro)', type: 'title', duration: '3.0s', bgColor: 'bg-violet-950 border-violet-500/40', icon: Type },
    { id: 'c2', order: 2, title: 'School Grounds Footage', type: 'video', duration: '8.0s', bgColor: 'bg-blue-950 border-blue-500/40', icon: Video },
    { id: 'c3', order: 3, title: '2D Logo Animation', type: 'animation', duration: '4.0s', bgColor: 'bg-emerald-950 border-emerald-500/40', icon: Film }
  ]);

  const [hasTransition, setHasTransition] = useState<boolean>(false);
  const [hasAudioTrack, setHasAudioTrack] = useState<boolean>(true);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(false);
  const [previewStep, setPreviewStep] = useState<number>(0);

  const handleApplyTransition = () => {
    sound.playVictory();
    setHasTransition(true);
  };

  const handlePlayPreview = () => {
    sound.playClick(600);
    setIsPlayingPreview(true);
    setPreviewStep(0);

    setTimeout(() => setPreviewStep(1), 1200);
    setTimeout(() => setPreviewStep(2), 2400);
    setTimeout(() => {
      setIsPlayingPreview(false);
      setPreviewStep(0);
    }, 3600);
  };

  const handleResetStoryboard = () => {
    sound.playClick(500);
    setHasTransition(false);
    setIsPlayingPreview(false);
    setPreviewStep(0);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('storyboard');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'storyboard'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Storyboard Sequencer</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('transitions');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'transitions'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Video Transitions</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('formats');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'formats'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileVideo className="w-4 h-4" />
          <span>.WLMP vs .MP4</span>
        </button>
      </div>

      {activeTab === 'storyboard' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                WINDOWS MOVIE MAKER • 2022 O/L PAPER II Q05(iii)
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Multi-Track Video Storyboard
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Assemble video footage, title cards, 2D animations, transitions, and audio soundtracks into a unified timeline.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handlePlayPreview}
                disabled={isPlayingPreview}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-mono font-bold transition-all shadow-md shadow-emerald-500/20"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isPlayingPreview ? 'PLAYING...' : 'PLAY PREVIEW'}</span>
              </button>

              <button
                onClick={handleResetStoryboard}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors"
                title="Reset Storyboard"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Master Video Preview Screen */}
          <div className="relative h-48 sm:h-56 bg-slate-900 rounded-2xl border-2 border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl">
                {previewStep === 0 && '🎬'}
                {previewStep === 1 && '🏫'}
                {previewStep === 2 && '⚡'}
              </div>
              <div className="text-base font-bold text-white font-mono">
                {previewStep === 0 && 'SCENE 1: Title Screen (Grade 11 Intro)'}
                {previewStep === 1 && 'SCENE 2: School Grounds Footage'}
                {previewStep === 2 && 'SCENE 3: 2D Logo Reveal'}
              </div>
              <div className="text-xs text-violet-300 font-mono">
                Audio Track: {hasAudioTrack ? 'Background_Music.mp3 (Active)' : 'Muted'}
              </div>
            </div>
          </div>

          {/* Timeline Multi-Tracks */}
          <div className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            {/* Video & Visual Track */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>TRACK 1: VISUAL & VIDEO STORYBOARD</span>
                <span className="text-violet-400">Total Duration: 15.0s</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {clips.map((clip, idx) => (
                  <div
                    key={clip.id}
                    className={`p-4 rounded-xl border relative transition-all ${clip.bgColor} ${
                      isPlayingPreview && previewStep === idx ? 'ring-2 ring-white scale-105' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <clip.icon className="w-4 h-4 text-white" />
                      <span className="text-[10px] font-mono text-slate-400">{clip.duration}</span>
                    </div>
                    <div className="font-bold text-xs text-white mt-2">{clip.title}</div>
                    <div className="text-[9px] font-mono text-slate-400 mt-0.5">Scene 0{clip.order}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transition Injector */}
            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-slate-300">
                  Scene Transition (Dissolve / Fade): {hasTransition ? <strong className="text-emerald-400">APPLIED</strong> : <strong className="text-amber-400">NONE (ABRUPT CUT)</strong>}
                </span>
              </div>
              <button
                onClick={handleApplyTransition}
                disabled={hasTransition}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  hasTransition
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-violet-500 hover:bg-violet-400 text-slate-950 shadow-md'
                }`}
              >
                {hasTransition ? 'TRANSITION ACTIVE' : 'ADD DISSOLVE TRANSITION'}
              </button>
            </div>

            {/* Audio Track */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Music className="w-3.5 h-3.5 text-cyan-400" />
                <span>TRACK 2: AUDIO SOUNDTRACK (Background_Music.mp3)</span>
              </div>
              <div className="h-8 bg-cyan-950/40 rounded-lg border border-cyan-500/30 flex items-center px-3 justify-between font-mono text-[11px] text-cyan-300">
                <span>Synchronized Audio Stream</span>
                <span>Volume: 100% (Fade Out at 14.5s)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'transitions' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400" />
              Video Transitions & Effects (දෘශ්‍ය සංක්‍රාන්ති)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Transitions create visually pleasing blends between two sequential clips instead of jarring abrupt cuts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: '1. Dissolve (දියවීම)', desc: 'Gradually blends the pixels of Scene 1 into Scene 2 until Scene 2 completely dominates.' },
              { name: '2. Fade to Black (කළු පැහැයට මැකී යාම)', desc: 'Dims the outgoing scene to black before brightening into the incoming scene.' },
              { name: '3. Wipe (පිසදැමීම)', desc: 'A geometric line or shape sweeps across the screen, revealing the next scene underneath.' }
            ].map((t, idx) => (
              <div key={idx} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-violet-300 text-sm">{t.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'formats' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <FileVideo className="w-5 h-5 text-violet-400" />
              Project File (.WLMP) vs. Rendered Movie (.MP4 / .WMV)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Crucial O/L exam concept: A movie project file is NOT a video file!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-mono font-bold text-violet-400 text-sm">.WLMP (Windows Live Movie Maker Project)</div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Project Reference File:</strong> Stores file path links, transition timings, and text captions.</li>
                <li>• Does NOT contain actual video frames or audio data inside the file.</li>
                <li>• Moving the source video to another folder will break the project!</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-mono font-bold text-emerald-400 text-sm">.MP4 / .WMV (Exported Rendered Movie)</div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Rendered Video Container:</strong> All video, audio, transitions, and text flattened into a single playable file.</li>
                <li>• Plays universally on YouTube, mobile phones, Smart TVs, and VLC.</li>
                <li>• Individual text overlays or clip splits cannot be undone once rendered.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
