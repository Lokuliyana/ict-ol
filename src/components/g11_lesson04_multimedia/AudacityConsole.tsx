'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Square, 
  Circle, 
  Scissors, 
  Volume2, 
  VolumeX, 
  Mic, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Sliders, 
  Radio, 
  FileAudio,
  SkipBack,
  SkipForward
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function AudacityConsole() {
  const [activeTab, setActiveTab] = useState<'surgeon' | 'controls' | 'formats'>('surgeon');

  // Waveform Surgeon States (2022 O/L Paper II Question 05(ii))
  const [silentGapSelected, setSilentGapSelected] = useState<boolean>(false);
  const [gapDeleted, setGapDeleted] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [noiseReduced, setNoiseReduced] = useState<boolean>(false);

  const handleSelectSilentGap = () => {
    sound.playSnap();
    setSilentGapSelected(!silentGapSelected);
  };

  const handleDeleteSilentGap = () => {
    if (!silentGapSelected) return;
    sound.playVictory();
    setGapDeleted(true);
    setSilentGapSelected(false);
  };

  const handlePlayAudio = () => {
    sound.playClick(600);
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 2500);
  };

  const handleApplyNoiseFilter = () => {
    sound.playVictory();
    setNoiseReduced(true);
  };

  const handleResetAudio = () => {
    sound.playClick(500);
    setSilentGapSelected(false);
    setGapDeleted(false);
    setIsPlayingAudio(false);
    setNoiseReduced(false);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('surgeon');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'surgeon'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Scissors className="w-4 h-4" />
          <span>Waveform Surgeon</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('controls');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'controls'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Audacity Controls</span>
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
          <FileAudio className="w-4 h-4" />
          <span>WAV vs MP3</span>
        </button>
      </div>

      {activeTab === 'surgeon' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                AUDACITY WORKBENCH • 2022 O/L PAPER II Q05(ii)
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The Audio Waveform Silent Gap Surgeon
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Highlight the flat silent pause in the speech track and cut it out to produce seamless speech.
              </p>
            </div>

            {/* Transport Toolbar */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-2 rounded-2xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={handlePlayAudio}
                className="p-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl transition-all shadow-md shadow-emerald-500/20"
                title="Green Play Button (2022 Exam Identifier)"
              >
                <Play className="w-4 h-4 fill-slate-950" />
              </button>
              <button
                onClick={() => sound.playClick(500)}
                className="p-2.5 bg-slate-800 text-slate-400 hover:text-white rounded-xl"
                title="Pause"
              >
                <Pause className="w-4 h-4" />
              </button>
              <button
                onClick={() => sound.playClick(500)}
                className="p-2.5 bg-slate-800 text-slate-400 hover:text-white rounded-xl"
                title="Stop"
              >
                <Square className="w-4 h-4" />
              </button>
              <button
                onClick={() => sound.playClick(500)}
                className="p-2.5 bg-red-600 text-white rounded-xl"
                title="Record (Red Circle)"
              >
                <Circle className="w-4 h-4 fill-white" />
              </button>
              <button
                onClick={handleResetAudio}
                className="p-2.5 bg-slate-800 text-slate-400 hover:text-white rounded-xl ml-2"
                title="Reset Audio Track"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Audio Waveform Canvas */}
          <div className="p-6 bg-slate-900 rounded-2xl border-2 border-slate-800 space-y-4 shadow-inner">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">AUDIO TRACK 01: Voice_Recording.wav (44.1 kHz, Stereo)</span>
              <span className="text-violet-300">
                {gapDeleted ? 'Silent Gap Removed (බාධාවකින් තොරයි)' : 'Contains 4-Second Dead Silence'}
              </span>
            </div>

            {/* Waveform Visualization Box */}
            <div className="relative h-32 bg-slate-950 rounded-xl border border-slate-800/80 p-4 flex items-center justify-between overflow-hidden">
              {/* Playback Line Scrubber */}
              {isPlayingAudio && (
                <motion.div
                  initial={{ left: '0%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2.5, ease: 'linear' }}
                  className="absolute top-0 bottom-0 w-0.5 bg-emerald-400 z-20 shadow-[0_0_8px_#34d399]"
                />
              )}

              {/* Segment A: Active Speech */}
              <div className="flex-1 flex items-center justify-around h-full">
                {[40, 75, 90, 60, 30, 85, 100, 70, 45, 80, 65, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-1.5 rounded-full ${
                      isPlayingAudio ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
                    }`}
                  />
                ))}
              </div>

              {/* Segment B: Flat Dead Silence (or Snapped away) */}
              {!gapDeleted ? (
                <button
                  onClick={handleSelectSilentGap}
                  className={`w-36 h-full flex flex-col items-center justify-center transition-all border-2 rounded-lg relative ${
                    silentGapSelected
                      ? 'border-violet-400 bg-violet-500/20 ring-2 ring-violet-400 shadow-lg'
                      : 'border-dashed border-red-500/50 bg-red-500/10 hover:bg-red-500/20'
                  }`}
                  title="Click to select silent gap with I-Beam Selection Tool"
                >
                  <div className="w-full h-0.5 bg-slate-600" />
                  <span className="text-[10px] font-mono text-red-300 font-bold mt-2 bg-slate-950/80 px-2 py-0.5 rounded">
                    {silentGapSelected ? 'GAP SELECTED (CLICK DELETE)' : '1. SELECT SILENT GAP'}
                  </span>
                </button>
              ) : null}

              {/* Segment C: Trailing Speech */}
              <div className="flex-1 flex items-center justify-around h-full">
                {[50, 80, 65, 95, 40, 70, 85, 55, 30, 90, 60, 40].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-1.5 rounded-full ${
                      isPlayingAudio ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Cut / Delete Trigger */}
            {silentGapSelected && !gapDeleted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 bg-violet-950/60 rounded-xl border border-violet-500/40"
              >
                <div className="text-xs text-violet-200">
                  Silent region selected with Selection Tool (I-Beam).
                </div>
                <button
                  onClick={handleDeleteSilentGap}
                  className="px-4 py-1.5 bg-violet-500 hover:bg-violet-400 text-slate-950 font-bold font-mono text-xs rounded-lg transition-all shadow-md shadow-violet-500/30 flex items-center gap-1.5"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>2. CUT / DELETE SILENCE</span>
                </button>
              </motion.div>
            )}

            {/* Success Banner */}
            {gapDeleted && (
              <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Silent gap excised! Audio segments snapped together cleanly. Click the Green Play button to test!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'controls' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-violet-400" />
              Audacity Audio Transport & Editing Tools
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Standard control icons tested in G.C.E. O/L examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Play Button (ධාවනය)', icon: Play, color: 'text-emerald-400', desc: 'Green right-pointing triangle. Starts audio playback at current scrubber position.' },
              { name: 'Record Button (පටිගත කිරීම)', icon: Circle, color: 'text-rose-500', desc: 'Red circle. Begins capturing microphone audio onto a new track.' },
              { name: 'Pause & Stop (විරාමය / නැවතීම)', icon: Pause, color: 'text-amber-400', desc: 'Two vertical bars (Pause) / Square (Stop) halting audio output.' },
              { name: 'Selection Tool / I-Beam', icon: Scissors, color: 'text-violet-400', desc: 'I-shaped cursor used to highlight specific audio segments for cut, copy, or effect filters.' },
              { name: 'Noise Reduction Filter', icon: Sparkles, color: 'text-cyan-400', desc: 'Captures background room hiss profile and subtracts ambient noise.' },
              { name: 'Fade In / Fade Out', icon: Volume2, color: 'text-blue-400', desc: 'Smoothly increases volume from zero at start, or dims volume to zero at track end.' }
            ].map((tool, idx) => (
              <div key={idx} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <tool.icon className={`w-5 h-5 ${tool.color}`} />
                  <h4 className="font-bold text-white text-xs sm:text-sm">{tool.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'formats' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <FileAudio className="w-5 h-5 text-violet-400" />
              Audio File Formats: Uncompressed WAV vs. Compressed MP3
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Audio digitization sampling rates and format comparison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-mono font-bold text-cyan-300 text-sm">WAV (Waveform Audio File)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Uncompressed Lossless
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Sampling Rate:</strong> Standard CD Quality is 44.1 kHz (44,100 samples/sec) at 16-bit stereo.</li>
                <li>• <strong>File Size:</strong> Extremely large (~40 MB for a 4-minute track).</li>
                <li>• <strong>Use:</strong> Professional studio recording and raw audio editing master files.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-mono font-bold text-emerald-300 text-sm">MP3 (MPEG Audio Layer III)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  Lossy Compressed
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Compression:</strong> Removes frequencies outside human hearing range (20 Hz – 20 kHz) using psychoacoustic models.</li>
                <li>• <strong>File Size:</strong> Compact (~3.5 MB for the same 4-minute track, 10:1 reduction).</li>
                <li>• <strong>Use:</strong> Internet streaming, mobile playback, podcasts, web audio.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
