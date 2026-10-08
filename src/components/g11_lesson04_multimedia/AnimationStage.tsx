'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Film, 
  Key, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Download, 
  Sliders, 
  FileCode,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function AnimationStage() {
  const [activeSubtab, setActiveSubtab] = useState<'puppeteer' | 'theory' | 'export'>('puppeteer');

  // Animation Timeline States (24 Frames = 1 Second @ 24 fps)
  const totalFrames = 24;
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasKeyframe1, setHasKeyframe1] = useState<boolean>(true);
  const [hasKeyframe24, setHasKeyframe24] = useState<boolean>(false);
  const [hasMotionTween, setHasMotionTween] = useState<boolean>(false);

  // Object Coordinates
  // Keyframe 1: (50, 180)
  // Keyframe 24: (480, 40)
  const startX = 50;
  const startY = 180;
  const endX = 480;
  const endY = 40;

  // Calculate current object position based on frame and tween status
  let currentX = startX;
  let currentY = startY;

  if (hasMotionTween && hasKeyframe24) {
    const progress = (currentFrame - 1) / (totalFrames - 1);
    currentX = startX + (endX - startX) * progress;
    currentY = startY + (endY - startY) * progress;
  } else if (currentFrame === 24 && hasKeyframe24) {
    currentX = endX;
    currentY = endY;
  }

  // Animation Playback Engine
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev >= totalFrames) {
            return 1;
          }
          return prev + 1;
        });
      }, 1000 / 24); // 24 fps
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    sound.playClick(600);
    setIsPlaying(!isPlaying);
  };

  const handleAddKeyframe24 = () => {
    sound.playSnap();
    setHasKeyframe24(true);
    setCurrentFrame(24);
  };

  const handleApplyMotionTween = () => {
    if (!hasKeyframe24) {
      sound.playError();
      return;
    }
    sound.playVictory();
    setHasMotionTween(true);
  };

  const handleResetStage = () => {
    sound.playClick(500);
    setIsPlaying(false);
    setCurrentFrame(1);
    setHasKeyframe24(false);
    setHasMotionTween(false);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-violet-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('puppeteer');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'puppeteer'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Motion Tween Stage</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('theory');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'theory'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Key className="w-4 h-4" />
          <span>Keyframe Concepts</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('export');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'export'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>.VGD vs .SWF</span>
        </button>
      </div>

      {activeSubtab === 'puppeteer' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                VECTORIAN GIOTTO • 2D සජීවීකරණය
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                The 24 FPS Motion Tween Puppeteer
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Set Key Frame 1, insert Key Frame 24, apply Motion Tweening, and watch the software auto-calculate intermediate frames!
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handleTogglePlay}
                disabled={!hasMotionTween}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-md ${
                  !hasMotionTween
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : isPlaying
                    ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY 24 FPS'}</span>
              </button>

              <button
                onClick={handleResetStage}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors"
                title="Reset Stage"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animation Viewport Stage */}
          <div className="relative h-64 bg-slate-900/90 rounded-2xl border-2 border-slate-800 overflow-hidden shadow-inner">
            {/* Stage Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

            {/* Trajectory Guide Line */}
            {hasMotionTween && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line
                  x1={startX + 20}
                  y1={startY + 20}
                  x2={endX + 20}
                  y2={endY + 20}
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            )}

            {/* Moving Football Object */}
            <div
              style={{
                transform: `translate(${currentX}px, ${currentY}px)`
              }}
              className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 border-2 border-white shadow-2xl flex items-center justify-center text-slate-950 font-black text-xs transition-transform duration-75"
            >
              ⚽
            </div>

            {/* Start Keyframe Anchor Pill */}
            <div
              style={{ left: `${startX}px`, top: `${startY + 55}px` }}
              className="absolute text-[10px] font-mono font-bold text-violet-300 bg-slate-950/90 px-2 py-0.5 rounded border border-violet-500/40"
            >
              Keyframe 1 (Start)
            </div>

            {/* End Keyframe Anchor Pill */}
            {hasKeyframe24 && (
              <div
                style={{ left: `${endX - 20}px`, top: `${endY + 55}px` }}
                className="absolute text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/90 px-2 py-0.5 rounded border border-cyan-500/40"
              >
                Keyframe 24 (Target)
              </div>
            )}
          </div>

          {/* 24-Frame Timeline Scrubber Rail */}
          <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">
                TIMELINE: <strong className="text-white">Frame {currentFrame} of 24</strong> (Time: {((currentFrame - 1) / 24).toFixed(2)}s)
              </span>
              <span className="text-violet-400">
                {hasMotionTween ? 'Motion Tween Active (ට්වීන් රාමු සක්‍රියයි)' : 'Awaiting Motion Tween'}
              </span>
            </div>

            {/* 24 Frame Blocks Grid */}
            <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 p-2 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
              {Array.from({ length: totalFrames }, (_, i) => i + 1).map((frameNum) => {
                const isCurrent = currentFrame === frameNum;
                const isKey1 = frameNum === 1;
                const isKey24 = frameNum === 24 && hasKeyframe24;
                const isTween = hasMotionTween && frameNum > 1 && frameNum < 24;

                return (
                  <button
                    key={frameNum}
                    onClick={() => {
                      sound.playSnap();
                      setCurrentFrame(frameNum);
                    }}
                    className={`h-12 rounded flex flex-col items-center justify-between p-1 font-mono text-[9px] transition-all border ${
                      isCurrent
                        ? 'ring-2 ring-white border-white bg-violet-600 text-white z-10 scale-105'
                        : isKey1
                        ? 'bg-violet-950 border-violet-400 text-violet-200 font-bold'
                        : isKey24
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-200 font-bold'
                        : isTween
                        ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-600 hover:border-slate-700'
                    }`}
                  >
                    <span>{frameNum}</span>
                    <div className="text-[8px]">
                      {isKey1 ? '●' : isKey24 ? '●' : isTween ? '➔' : ''}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Construction Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleAddKeyframe24}
              disabled={hasKeyframe24}
              className={`p-4 rounded-xl border text-left font-mono transition-all flex items-center justify-between ${
                hasKeyframe24
                  ? 'bg-slate-900 border-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-cyan-950/60 border-cyan-400 hover:bg-cyan-900/60 text-cyan-200 shadow-lg'
              }`}
            >
              <div>
                <div className="text-xs font-bold text-white">Step 1: Insert Key Frame 24</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Define target position (480, 40)</div>
              </div>
              <Key className="w-5 h-5 text-cyan-400 shrink-0" />
            </button>

            <button
              onClick={handleApplyMotionTween}
              disabled={!hasKeyframe24 || hasMotionTween}
              className={`p-4 rounded-xl border text-left font-mono transition-all flex items-center justify-between ${
                hasMotionTween || !hasKeyframe24
                  ? 'bg-slate-900 border-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-violet-950/60 border-violet-400 hover:bg-violet-900/60 text-violet-200 shadow-lg'
              }`}
            >
              <div>
                <div className="text-xs font-bold text-white">Step 2: Create Motion Tween</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Software auto-populates frames 2 to 23</div>
              </div>
              <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
            </button>
          </div>
        </div>
      )}

      {activeSubtab === 'theory' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-violet-400" />
              Key Frames vs. Blank Key Frames vs. Tween Frames
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Official Sri Lankan G.C.E. O/L 2D Animation Terminology (2023 Paper I Q38 & Paper II Q05).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Key Frame */}
            <div className="p-5 bg-slate-900/90 rounded-2xl border border-violet-500/40 space-y-2">
              <div className="flex items-center gap-2 text-violet-300 font-bold text-sm">
                <Key className="w-4 h-4 text-violet-400" />
                <span>1. Key Frame (මූලික රාමුව)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Critical user-created frames defining starting and ending positions, sizes, orientations, or colors of an animation object.
              </p>
              <p className="text-[11px] text-slate-400 font-sans">
                සජීවීකරණයේ ආරම්භක හා අවසාන පිහිටුම් පරිශීලකයා විසින් අතින් සකසන ප්‍රධාන රාමු.
              </p>
            </div>

            {/* Blank Key Frame */}
            <div className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <Film className="w-4 h-4 text-slate-400" />
                <span>2. Blank Key Frame (වියුක්ත රාමුව)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                An empty frame on the timeline used to insert a brand-new drawing or introduce a scene pause.
              </p>
              <p className="text-[11px] text-slate-400 font-sans">
                නව රූප ඇතුළත් කිරීමට හෝ හිස් විරාමයක් තැබීමට භාවිත කරන හිස් රාමු.
              </p>
            </div>

            {/* Motion Tween */}
            <div className="p-5 bg-slate-900/90 rounded-2xl border border-cyan-500/40 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>3. Motion Tween (ට්වීන් රාමු)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Intermediate in-between frames automatically calculated and interpolated by the computer between two keyframes.
              </p>
              <p className="text-[11px] text-slate-400 font-sans">
                මූලික රාමු දෙකක් අතර සුමට චලනයක් ඇති කිරීමට පරිගණකය මගින් ස්වයංක්‍රීයව ගණනය කර ජනනය කරන අතරමැදි රාමු.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'export' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <FileCode className="w-5 h-5 text-violet-400" />
              Project File (.VGD) vs. Rendered Web Movie (.SWF)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Understanding Vectorian Giotto file outputs for examination answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-mono font-bold text-violet-400 text-sm">.VGD (Vectorian Giotto Document)</div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Editable Project File:</strong> Stores raw vector shapes, timeline keyframes, scripts, and sound layers.</li>
                <li>• Cannot be played directly in standard web browsers.</li>
                <li>• Opens solely inside Vectorian Giotto authoring software.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-mono font-bold text-emerald-400 text-sm">.SWF (Small Web Format Flash Movie)</div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <strong>Exported Web Movie:</strong> Compressed, compiled binary animation ready for web playback.</li>
                <li>• Extremely lightweight vector playback with embedded audio.</li>
                <li>• Cannot easily edit individual motion tweens or layer paths once exported.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
