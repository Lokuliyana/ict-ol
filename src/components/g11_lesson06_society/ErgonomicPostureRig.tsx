'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Eye, 
  ShieldCheck, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Compass, 
  Smile, 
  Frown,
  TreePine,
  Layers,
  HeartPulse
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function ErgonomicPostureRig() {
  const [activeTab, setActiveTab] = useState<'mannequin' | 'eye2020' | 'hazards'>('mannequin');

  // Workstation Biomechanical States
  const [monitorHeight, setMonitorHeight] = useState<number>(30); // 0 (too low) to 100 (ideal eye level)
  const [hasLumbarSupport, setHasLumbarSupport] = useState<boolean>(false);
  const [hasWristRest, setHasWristRest] = useState<boolean>(false);
  const [hasFootrest, setHasFootrest] = useState<boolean>(false);

  // 20-20-20 Timer Simulation State
  const [timerSeconds, setTimerSeconds] = useState<number>(20);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [lookingAtDistance, setLookingAtDistance] = useState<boolean>(false);
  const [eyeStrainLevel, setEyeStrainLevel] = useState<number>(85); // 0 (perfect) to 100 (strained)

  // Calculations for posture score
  const isMonitorIdeal = monitorHeight >= 70 && monitorHeight <= 90;
  const postureScore = 
    (isMonitorIdeal ? 25 : 0) + 
    (hasLumbarSupport ? 25 : 0) + 
    (hasWristRest ? 25 : 0) + 
    (hasFootrest ? 25 : 0);

  const handleResetMannequin = () => {
    sound.playClick(450);
    setMonitorHeight(30);
    setHasLumbarSupport(false);
    setHasWristRest(false);
    setHasFootrest(false);
  };

  const handleTriggerEyeBreak = () => {
    sound.playVictory();
    setLookingAtDistance(true);
    setEyeStrainLevel(5);
  };

  const handleResetEyeBreak = () => {
    sound.playClick(400);
    setLookingAtDistance(false);
    setEyeStrainLevel(85);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('mannequin');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'mannequin'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4 text-cyan-300" />
          <span>Posture Mannequin</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('eye2020');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'eye2020'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Eye className="w-4 h-4 text-emerald-300" />
          <span>20-20-20 Vision Rule</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(600);
            setActiveTab('hazards');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'hazards'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <HeartPulse className="w-4 h-4 text-rose-300" />
          <span>RSI, CVS & CTS Hazards</span>
        </button>
      </div>

      {/* Tab 1: Mannequin Workstation Studio */}
      {activeTab === 'mannequin' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Workstation Controls */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Ergonomic Workstation Realigner
              </h3>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-mono font-bold">
                Score: {postureScore}%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Adjust ergonomic levers to align the computer workstation. Eliminate spinal hunching, neck strain, and carpal tunnel risk.
            </p>

            {/* Lever 1: Monitor Height */}
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">1. Monitor Height Lever (Screen Top at Eye Level):</span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isMonitorIdeal ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-red-950 text-red-300 border border-red-700'
                }`}>
                  {isMonitorIdeal ? 'Ideal Eye Level' : monitorHeight < 70 ? 'Too Low (Neck Strain)' : 'Too High'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={monitorHeight}
                onChange={(e) => {
                  sound.playClick(400 + Number(e.target.value) * 3);
                  setMonitorHeight(Number(e.target.value));
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Too Low</span>
                <span className="text-cyan-400 font-bold">Ideal (18–24 inches / 45–60 cm)</span>
                <span>Too High</span>
              </div>
            </div>

            {/* Lever 2: Lumbar Support */}
            <div className="flex items-center justify-between bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-200">2. Chair Lumbar Back Support</div>
                <div className="text-[10px] text-slate-400 font-sinhala">කොන්දේ ස්වභාවික වක්‍රතාවයට ආධාරකය</div>
              </div>
              <button
                onClick={() => {
                  sound.playVictory();
                  setHasLumbarSupport(!hasLumbarSupport);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  hasLumbarSupport
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {hasLumbarSupport ? 'Enabled ✅' : 'Enable Support'}
              </button>
            </div>

            {/* Lever 3: Ergonomic Wrist Rest */}
            <div className="flex items-center justify-between bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-200">3. Soft Ergonomic Wrist Rest Pad</div>
                <div className="text-[10px] text-slate-400 font-sinhala">මැණික් කටුව සෘජුව තබා ගැනීම (Anti-CTS)</div>
              </div>
              <button
                onClick={() => {
                  sound.playVictory();
                  setHasWristRest(!hasWristRest);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  hasWristRest
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {hasWristRest ? 'Fitted ✅' : 'Fit Wrist Rest'}
              </button>
            </div>

            {/* Lever 4: Footrest */}
            <div className="flex items-center justify-between bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-200">4. Adjustable Footrest (Feet Flat, 90° Knees)</div>
                <div className="text-[10px] text-slate-400 font-sinhala">පාද පොළොවට තිරස්ව තැබීම</div>
              </div>
              <button
                onClick={() => {
                  sound.playVictory();
                  setHasFootrest(!hasFootrest);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  hasFootrest
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {hasFootrest ? 'Positioned ✅' : 'Position Footrest'}
              </button>
            </div>

            {/* Reset */}
            <div className="flex justify-end">
              <button
                onClick={handleResetMannequin}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Mannequin
              </button>
            </div>
          </div>

          {/* Biomechanical Visual Display */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  Live Biomechanical Posture Scan
                </h4>
                <div className="flex items-center gap-1.5">
                  {postureScore === 100 ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <Smile className="w-4 h-4" /> 100% Ergonomic
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                      <Frown className="w-4 h-4" /> Strain Detected
                    </span>
                  )}
                </div>
              </div>

              {/* Mannequin Diagram Box */}
              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center min-h-[260px] relative">
                {/* SVG Mannequin Representation */}
                <div className="relative w-64 h-52 flex items-center justify-center">
                  {/* Desk & Monitor */}
                  <div className="absolute right-4 bottom-10 w-24 h-2 bg-slate-700 rounded" />
                  {/* Monitor Stand */}
                  <div 
                    style={{ bottom: `${18 + (monitorHeight / 100) * 20}px` }} 
                    className="absolute right-12 transition-all duration-300 flex flex-col items-center"
                  >
                    <div className="w-16 h-12 bg-sky-950 border-2 border-sky-400 rounded-lg flex items-center justify-center text-[10px] text-sky-200 font-mono">
                      Screen
                    </div>
                    <div className="w-2 h-6 bg-slate-600" />
                    <div className="w-8 h-1 bg-slate-500" />
                  </div>

                  {/* Sitting Mannequin Rig */}
                  <div className="absolute left-8 bottom-8 flex flex-col items-center">
                    {/* Head & Neck */}
                    <div className={`w-8 h-8 rounded-full border-2 transition-colors ${
                      isMonitorIdeal ? 'border-emerald-400 bg-emerald-950' : 'border-red-400 bg-red-950'
                    } flex items-center justify-center text-xs font-bold text-white`}>
                      🙂
                    </div>
                    {/* Spine Body */}
                    <div className={`w-3 h-16 rounded-full border-2 my-0.5 transition-colors ${
                      hasLumbarSupport ? 'border-emerald-400 bg-emerald-600' : 'border-red-400 bg-red-600'
                    }`} />
                    {/* Chair & Lumbar */}
                    {hasLumbarSupport && (
                      <div className="absolute -left-3 top-10 w-2 h-8 bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/50" />
                    )}
                    {/* Seat */}
                    <div className="w-14 h-2 bg-slate-700 rounded -mt-1" />
                    {/* Legs & Knees */}
                    <div className="w-12 h-14 border-b-2 border-r-2 border-cyan-400 rounded-br-lg ml-6" />
                    {/* Footrest */}
                    {hasFootrest ? (
                      <div className="absolute left-10 -bottom-2 w-8 h-3 bg-emerald-500 rounded border border-emerald-300" />
                    ) : (
                      <div className="absolute left-10 -bottom-1 w-6 h-1 bg-slate-600 rounded" />
                    )}
                  </div>
                </div>

                {/* Status Telemetry */}
                <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-800 text-[11px]">
                  <div className="text-slate-400">
                    • Spine Alignment: <b className={hasLumbarSupport ? 'text-emerald-400' : 'text-red-400'}>{hasLumbarSupport ? 'Supported' : 'Slouching'}</b>
                  </div>
                  <div className="text-slate-400">
                    • Wrist Posture: <b className={hasWristRest ? 'text-emerald-400' : 'text-amber-400'}>{hasWristRest ? 'Neutral Straight' : 'Bent (CTS Risk)'}</b>
                  </div>
                  <div className="text-slate-400">
                    • Neck Angle: <b className={isMonitorIdeal ? 'text-emerald-400' : 'text-red-400'}>{isMonitorIdeal ? '0° Eye Level' : 'Tilted Down'}</b>
                  </div>
                  <div className="text-slate-400">
                    • Foot Support: <b className={hasFootrest ? 'text-emerald-400' : 'text-amber-400'}>{hasFootrest ? '90° Flat' : 'Dangling'}</b>
                  </div>
                </div>
              </div>

              {postureScore === 100 && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs rounded-xl flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Workstation ergonomically aligned! Maximum human comfort achieved.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 20-20-20 Vision Rule */}
      {activeTab === 'eye2020' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-400" />
                The 20-20-20 Vision Health Rule (CVS වැළැක්වීම)
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-mono font-bold">
                O/L Gold Standard
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To prevent <b className="text-amber-300">Computer Vision Syndrome (CVS)</b>, eye specialists mandate the universal 20-20-20 rule:
            </p>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/30">
                <div className="text-xl font-black text-emerald-400 font-mono">20 Min</div>
                <div className="text-[11px] text-slate-400 mt-1">Every 20 mins of screen work</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/30">
                <div className="text-xl font-black text-emerald-400 font-mono">20 Feet</div>
                <div className="text-[11px] text-slate-400 mt-1">Look at an object 20 feet away</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/30">
                <div className="text-xl font-black text-emerald-400 font-mono">20 Sec</div>
                <div className="text-[11px] text-slate-400 mt-1">Rest eyes for full 20 seconds</div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2">
              {!lookingAtDistance ? (
                <button
                  onClick={handleTriggerEyeBreak}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <TreePine className="w-4 h-4" />
                  Look Away from Monitor at Distant Trees (20 Feet Away)
                </button>
              ) : (
                <button
                  onClick={handleResetEyeBreak}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Return to Workstation Screen
                </button>
              )}
            </div>
          </div>

          {/* Vision Simulator Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Visual Focus Simulator</h4>
                <span className="text-xs font-mono text-emerald-400">
                  Eye Fatigue: {eyeStrainLevel}%
                </span>
              </div>

              <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 min-h-[220px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                {lookingAtDistance ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-2"
                  >
                    <TreePine className="w-16 h-16 text-emerald-400 mx-auto animate-pulse" />
                    <div className="text-sm font-bold text-emerald-300">
                      Gazing at Distant Greenery (20 Feet Away)
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Ciliary eye muscles relax and natural blinking restores tear film moisture over the cornea.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-16 h-12 bg-sky-950 border-2 border-red-500 rounded-lg mx-auto flex items-center justify-center text-red-300 font-mono text-xs">
                      [Screen]
                    </div>
                    <div className="text-xs text-red-400 font-bold">
                      ⚠️ Continuous Near-Point Screen Viewing
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Blink rate drops from 15 times/min to 5 times/min, causing dry eyes, headaches, and blurred vision.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Health Hazards Summary */}
      {activeTab === 'hazards' && (
        <div className="bg-slate-900/80 border border-rose-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-400" />
              Ergonomic Health Hazards & Medical Remedies (2020 Paper II Q06)
            </h3>
            <span className="text-xs bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full font-mono font-bold">
              Medical Reference
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* RSI */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-3">
              <div className="font-bold text-rose-300 text-sm">
                1. RSI (Repetitive Strain Injury)
              </div>
              <div className="text-[11px] text-slate-400 font-sinhala">
                පුනරාවර්තී ආතති තුවාල
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pain and damage to muscles, tendons, and nerves caused by continuous repetitive movements (e.g. typing or mouse clicking for hours).
              </p>
              <div className="p-2.5 bg-slate-900 rounded-xl text-[11px] text-rose-200">
                💡 <b>Remedy:</b> Take scheduled short breaks, perform hand/finger stretches, and maintain relaxed posture.
              </div>
            </div>

            {/* CVS */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
              <div className="font-bold text-emerald-300 text-sm">
                2. CVS (Computer Vision Syndrome)
              </div>
              <div className="text-[11px] text-slate-400 font-sinhala">
                පරිගණක දෘෂ්ටි සංලක්ෂණය
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eye fatigue, dryness, burning sensation, blurred vision, and tension headaches caused by prolonged screen glare and reduced blinking.
              </p>
              <div className="p-2.5 bg-slate-900 rounded-xl text-[11px] text-emerald-200">
                💡 <b>Remedy:</b> Follow the 20-20-20 rule, adjust screen brightness/contrast, and maintain 45–60 cm distance.
              </div>
            </div>

            {/* CTS */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3">
              <div className="font-bold text-amber-300 text-sm">
                3. CTS (Carpal Tunnel Syndrome)
              </div>
              <div className="text-[11px] text-slate-400 font-sinhala">
                කාපල් ටනල් සින්ඩ්‍රෝමය
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Numbness, tingling, and sharp pain in the thumb, index, and middle fingers due to compression of the median nerve in the wrist.
              </p>
              <div className="p-2.5 bg-slate-900 rounded-xl text-[11px] text-amber-200">
                💡 <b>Remedy:</b> Use an ergonomic wrist rest, keep wrists straight and flat (not bent upwards) during typing.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
