'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, CheckCircle2, User, Calendar, ShieldCheck, ArrowRight, RefreshCw, Eye } from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface NicDetails {
  year: number;
  gender: 'Male' | 'Female';
  days: number;
  month: string;
  day: number;
  serial: string;
  checkDigit: string;
  format: 'New (12 Digits)' | 'Old (9 Digits + V/X)';
}

const MONTH_DAYS = [
  { name: 'January', days: 31 },
  { name: 'February', days: 29 }, // Leap year allowance in standard NIC logic
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

function decodeSriLankanNic(nicRaw: string): NicDetails | null {
  const nic = nicRaw.trim().toUpperCase();
  
  if (nic.length === 12 && /^\d{12}$/.test(nic)) {
    const year = parseInt(nic.substring(0, 4), 10);
    let dayOfYear = parseInt(nic.substring(4, 7), 10);
    const isFemale = dayOfYear > 500;
    const gender = isFemale ? 'Female' : 'Male';
    const adjustedDays = isFemale ? dayOfYear - 500 : dayOfYear;

    let day = adjustedDays;
    let month = 'January';
    for (const m of MONTH_DAYS) {
      if (day <= m.days) {
        month = m.name;
        break;
      }
      day -= m.days;
    }

    return {
      year,
      gender,
      days: adjustedDays,
      month,
      day: Math.max(1, day),
      serial: nic.substring(7, 11),
      checkDigit: nic.substring(11, 12),
      format: 'New (12 Digits)'
    };
  }

  if (nic.length === 10 && /^\d{9}[VX]$/.test(nic)) {
    const year = 1900 + parseInt(nic.substring(0, 2), 10);
    let dayOfYear = parseInt(nic.substring(2, 5), 10);
    const isFemale = dayOfYear > 500;
    const gender = isFemale ? 'Female' : 'Male';
    const adjustedDays = isFemale ? dayOfYear - 500 : dayOfYear;

    let day = adjustedDays;
    let month = 'January';
    for (const m of MONTH_DAYS) {
      if (day <= m.days) {
        month = m.name;
        break;
      }
      day -= m.days;
    }

    return {
      year,
      gender,
      days: adjustedDays,
      month,
      day: Math.max(1, day),
      serial: nic.substring(5, 9),
      checkDigit: nic.substring(9, 10),
      format: 'Old (9 Digits + V/X)'
    };
  }

  return null;
}

const PRESET_NICS = [
  { nic: '200523401234', label: '2005 (12-digit Male)' },
  { nic: '200874503891', label: '2008 (12-digit Female)' },
  { nic: '982341234V', label: '1998 (9-digit Male)' },
  { nic: '956541890V', label: '1995 (9-digit Female)' },
];

export function NicDecoder() {
  const [nicInput, setNicInput] = useState('200523401234');
  const [activeSegment, setActiveSegment] = useState<'all' | 'year' | 'gender' | 'serial' | 'check'>('all');
  const [isInspecting, setIsInspecting] = useState(false);

  const decoded = decodeSriLankanNic(nicInput);

  const handlePreset = (preset: string) => {
    sound.playClick(750);
    setNicInput(preset);
  };

  const handleSegmentClick = (segment: 'all' | 'year' | 'gender' | 'serial' | 'check') => {
    sound.playBlip(activeSegment === segment ? 500 : 800);
    setActiveSegment(segment);
  };

  const is12Digit = nicInput.trim().length === 12;

  return (
    <div className="bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-4 sm:p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-900/40 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-indigo-200 flex items-center gap-2">
              Sri Lankan NIC Dissector Micro-Toy
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                Data ➔ Information
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-sinhala">
              තනි අංක පේළියක් (දත්ත) ➔ අර්ථවත් පෞද්ගලික තොරතුරු (තොරතුරු) බවට හැරවීම
            </p>
          </div>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400">Presets:</span>
          {PRESET_NICS.map((p) => (
            <button
              key={p.nic}
              onClick={() => handlePreset(p.nic)}
              className={`px-2 py-1 rounded-lg text-xs font-mono transition-all ${
                nicInput === p.nic
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive NIC Card Graphic */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/40 rounded-2xl p-5 shadow-inner overflow-hidden">
        {/* Holographic Watermark Badge */}
        <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between text-[11px] text-indigo-300/70 uppercase tracking-widest font-mono border-b border-indigo-800/30 pb-2 mb-4">
          <span>Democratic Socialist Republic of Sri Lanka</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Official ID Protocol
          </span>
        </div>

        {/* Digit Slice Visualizer */}
        <div className="space-y-2">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Drag Magnifier or Click Slices to inspect:</span>
            <span className="font-mono text-indigo-300">{nicInput.length} Characters</span>
          </div>

          <div className="flex items-center justify-center gap-1 sm:gap-2 p-3 bg-black/40 rounded-xl border border-indigo-500/30 font-mono text-lg sm:text-2xl font-black tracking-wider flex-wrap">
            {is12Digit ? (
              <>
                {/* Year 4 digits */}
                <button
                  onClick={() => handleSegmentClick('year')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'year' || activeSegment === 'all'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent hover:border-slate-700'
                  }`}
                >
                  {nicInput.substring(0, 4)}
                  <span className="block text-[9px] font-sans font-normal text-cyan-400">Year (4D)</span>
                </button>

                {/* Gender & Day 3 digits */}
                <button
                  onClick={() => handleSegmentClick('gender')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'gender' || activeSegment === 'all'
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400 shadow-lg shadow-fuchsia-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent hover:border-slate-700'
                  }`}
                >
                  {nicInput.substring(4, 7)}
                  <span className="block text-[9px] font-sans font-normal text-fuchsia-400">Day+Gender</span>
                </button>

                {/* Serial 4 digits */}
                <button
                  onClick={() => handleSegmentClick('serial')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'serial' || activeSegment === 'all'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-lg shadow-amber-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent hover:border-slate-700'
                  }`}
                >
                  {nicInput.substring(7, 11)}
                  <span className="block text-[9px] font-sans font-normal text-amber-400">Serial No.</span>
                </button>

                {/* Check Digit */}
                <button
                  onClick={() => handleSegmentClick('check')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'check' || activeSegment === 'all'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent hover:border-slate-700'
                  }`}
                >
                  {nicInput.substring(11, 12)}
                  <span className="block text-[9px] font-sans font-normal text-emerald-400">Checksum</span>
                </button>
              </>
            ) : (
              <>
                {/* 9-digit format */}
                <button
                  onClick={() => handleSegmentClick('year')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'year' || activeSegment === 'all'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent'
                  }`}
                >
                  {nicInput.substring(0, 2)}
                  <span className="block text-[9px] font-sans font-normal text-cyan-400">Year (19xx)</span>
                </button>
                <button
                  onClick={() => handleSegmentClick('gender')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'gender' || activeSegment === 'all'
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400 shadow-lg shadow-fuchsia-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent'
                  }`}
                >
                  {nicInput.substring(2, 5)}
                  <span className="block text-[9px] font-sans font-normal text-fuchsia-400">Day+Gender</span>
                </button>
                <button
                  onClick={() => handleSegmentClick('serial')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'serial' || activeSegment === 'all'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-lg shadow-amber-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent'
                  }`}
                >
                  {nicInput.substring(5, 9)}
                  <span className="block text-[9px] font-sans font-normal text-amber-400">Serial</span>
                </button>
                <button
                  onClick={() => handleSegmentClick('check')}
                  className={`px-2 py-1 rounded-lg border transition-all ${
                    activeSegment === 'check' || activeSegment === 'all'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-800/40 text-slate-500 border-transparent'
                  }`}
                >
                  {nicInput.substring(9, 10)}
                  <span className="block text-[9px] font-sans font-normal text-emerald-400">Voter Status</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Custom Input box */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={nicInput}
            onChange={(e) => setNicInput(e.target.value.toUpperCase())}
            placeholder="Enter any NIC (e.g. 200523401234 or 982341234V)"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-mono text-indigo-300 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => {
              sound.playSuccessDing();
              setIsInspecting(true);
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Process</span>
          </button>
        </div>
      </div>

      {/* Decoded Actionable Information HUD */}
      {decoded ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {/* Birth Info */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
              <Calendar className="w-4 h-4" />
              <span>Year & Birthday</span>
            </div>
            <div className="text-xl font-black text-white">
              {decoded.month} {decoded.day}, {decoded.year}
            </div>
            <p className="text-[11px] text-slate-400 font-sinhala">
              උපන් දිනය: {decoded.year} {decoded.month} {decoded.day}
            </p>
          </div>

          {/* Gender */}
          <div className="bg-slate-900/90 border border-fuchsia-500/30 rounded-xl p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-bold">
              <User className="w-4 h-4" />
              <span>Gender Calculation</span>
            </div>
            <div className="text-xl font-black text-white flex items-center gap-2">
              <span>{decoded.gender}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-mono font-normal">
                Day Value: {decoded.days}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {decoded.gender === 'Female' ? 'Day of Year > 500 (Female offset)' : 'Day of Year ≤ 500 (Male)'}
            </p>
          </div>

          {/* System Conclusion */}
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Information Value</span>
            </div>
            <div className="text-sm font-bold text-emerald-300">
              Actionable Legal Profile
            </div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Raw digits alone = <strong>Data</strong>.<br />
              Parsed identity & verified age = <strong>Information</strong>!
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-300 flex items-center gap-2">
          <span>⚠️ Please enter a valid 12-digit (e.g. 200523401234) or 9-digit + V/X NIC.</span>
        </div>
      )}
    </div>
  );
}
