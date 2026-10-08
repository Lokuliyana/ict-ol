'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Key, 
  Link, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Layers, 
  RotateCcw,
  Plus,
  Lock
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type ForgeMode = 'primary_key' | 'duplicate_violation' | 'foreign_key_tether' | 'composite_key';

export function KeymasterForge() {
  const [activeMode, setActiveMode] = useState<ForgeMode>('primary_key');

  // Primary Key Test State
  const [selectedPkCandidate, setSelectedPkCandidate] = useState<string | null>(null);
  const [pkTestResult, setPkTestResult] = useState<{ status: 'idle' | 'success' | 'error'; messageEn: string; messageSi: string }>({
    status: 'idle',
    messageEn: 'Select a candidate column from the STUDENT table to test for Primary Key validity.',
    messageSi: 'ප්‍රාථමික යතුරක් විය හැකි සුදුසු තීරුව තෝරා පරීක්ෂා කරන්න.'
  });

  // Duplicate Violation State
  const [existingIndexNumbers] = useState<string[]>(['S101', 'S102', 'S103']);
  const [inputNewIndex, setInputNewIndex] = useState<string>('S101');
  const [violationTriggered, setViolationTriggered] = useState<boolean>(false);

  // Foreign Key Cables State
  const [isBookTethered, setIsBookTethered] = useState<boolean>(false);
  const [isMemberTethered, setIsMemberTethered] = useState<boolean>(false);

  // Composite Key State
  const [selectedCompositeFields, setSelectedCompositeFields] = useState<string[]>([]);
  const [compositeSuccess, setCompositeSuccess] = useState<boolean>(false);

  // Handlers for PK
  const handleTestPkField = (field: string) => {
    setSelectedPkCandidate(field);
    if (field === 'IndexNo') {
      sound.playVictory();
      setPkTestResult({
        status: 'success',
        messageEn: 'PERFECT! IndexNo is strictly unique for every student and can never be NULL. Valid Primary Key!',
        messageSi: 'නිවැරදියි! IndexNo සෑම ශිෂ්‍යයෙකුටම අනන්‍ය වන අතර කිසි විටෙකත් හිස් (NULL) විය නොහැක.'
      });
    } else if (field === 'StudentName') {
      sound.playError();
      setPkTestResult({
        status: 'error',
        messageEn: 'VIOLATION! Two or more students can have identical names (e.g. K. Silva). Primary Keys cannot have duplicates!',
        messageSi: 'දෝෂයකි! ශිෂ්‍යයන් කිහිප දෙනෙකුට එකම නම තිබිය හැක. ප්‍රාථමික යතුරු අගයන් පුනරාවර්තනය විය නොහැක.'
      });
    } else if (field === 'DOB') {
      sound.playError();
      setPkTestResult({
        status: 'error',
        messageEn: 'VIOLATION! Multiple students can be born on the same date. Non-unique field!',
        messageSi: 'දෝෂයකි! සිසුන් කිහිප දෙනෙකු එකම දිනයේ උපත ලබා තිබිය හැක.'
      });
    } else {
      sound.playError();
      setPkTestResult({
        status: 'error',
        messageEn: 'VIOLATION! ClassCode (e.g. 10-A) repeats for all students in that class!',
        messageSi: 'දෝෂයකි! පන්තියේ සියලු සිසුන්ට එකම ClassCode අගය හිමි වේ.'
      });
    }
  };

  // Handlers for Duplicate Violation
  const handleCheckDuplicate = () => {
    if (existingIndexNumbers.includes(inputNewIndex.trim().toUpperCase())) {
      sound.playError();
      setViolationTriggered(true);
    } else {
      sound.playSuccess();
      setViolationTriggered(false);
    }
  };

  // Handlers for Foreign Key Tether
  const handleToggleBookTether = () => {
    sound.playSnap();
    const next = !isBookTethered;
    setIsBookTethered(next);
    if (next && isMemberTethered) sound.playVictory();
  };

  const handleToggleMemberTether = () => {
    sound.playSnap();
    const next = !isMemberTethered;
    setIsMemberTethered(next);
    if (next && isBookTethered) sound.playVictory();
  };

  // Handlers for Composite Key
  const handleToggleCompositeField = (f: string) => {
    sound.playClick();
    let updated: string[];
    if (selectedCompositeFields.includes(f)) {
      updated = selectedCompositeFields.filter(x => x !== f);
    } else {
      updated = [...selectedCompositeFields, f];
    }
    setSelectedCompositeFields(updated);

    if (updated.includes('IndexNo') && updated.includes('EventCode') && updated.length === 2) {
      setCompositeSuccess(true);
      sound.playVictory();
    } else {
      setCompositeSuccess(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 02 • යතුරු කම්මල
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Primary Key, Foreign Key & Composite Primary Key
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Key className="w-5 h-5 text-amber-400" />
            The Keymaster's Forge (ප්‍රාථමික, විදේශ සහ සංයුක්ත යතුරු)
          </h2>
          <p className="text-xs text-slate-300">
            Forge unbreakable Primary Keys, snap glowing Foreign Key relational cables, and fuse dual fields into Composite Primary Keys.
          </p>
        </div>

        {/* Forge Sub-tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveMode('primary_key'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'primary_key' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Primary Key
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('duplicate_violation'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'duplicate_violation' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Duplicate Alarm
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('foreign_key_tether'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'foreign_key_tether' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Foreign Key Tether
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('composite_key'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'composite_key' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Composite Key
          </button>
        </div>
      </div>

      {/* Mode 1: Primary Key Lock Test */}
      {activeMode === 'primary_key' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white">TEST CANDIDATE FIELDS (STUDENT TABLE)</span>
                <span className="text-xs font-mono text-amber-400">Insert Golden Key 🗝️</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['IndexNo', 'StudentName', 'DOB', 'ClassCode'].map(field => {
                  const isSelected = selectedPkCandidate === field;

                  return (
                    <button
                      key={field}
                      onClick={() => handleTestPkField(field)}
                      className={`p-4 rounded-xl border text-center font-mono text-xs font-bold transition-all space-y-2 flex flex-col items-center justify-center ${
                        isSelected
                          ? pkTestResult.status === 'success'
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-lg shadow-emerald-500/20'
                            : 'bg-rose-950/80 border-rose-500 text-rose-200 shadow-lg shadow-rose-500/20'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500'
                      }`}
                    >
                      <Key className="w-5 h-5 text-amber-400" />
                      <span>{field}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Banner */}
              <div className={`p-4 rounded-xl border text-xs space-y-1 ${
                pkTestResult.status === 'success'
                  ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                  : pkTestResult.status === 'error'
                    ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}>
                <div className="font-bold">{pkTestResult.messageEn}</div>
                <div className="font-sinhala text-[11px] opacity-80">{pkTestResult.messageSi}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                Primary Key Golden Rules (ප්‍රාථමික යතුරේ නීති)
              </h4>
              <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-2">
                <li>
                  <strong className="text-amber-400">1. Uniqueness (අනන්‍යතාව):</strong> Every row must have a distinct, non-repeating value.
                </li>
                <li>
                  <strong className="text-amber-400">2. NOT NULL (හිස් නොවීම):</strong> The primary key cell cannot be left blank.
                </li>
                <li>
                  <strong className="text-amber-400">3. Permanence (ස්ථාවරත්වය):</strong> Values should rarely change over time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Duplicate Violation Alarm */}
      {activeMode === 'duplicate_violation' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-5 shadow-2xl">
              <div className="text-xs font-mono font-bold text-white">DUPLICATE INSERTION SIMULATION</div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="text-xs text-slate-300">
                  Existing Student Index Numbers in Database: <strong className="text-amber-400">S101, S102, S103</strong>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputNewIndex}
                    onChange={(e) => setInputNewIndex(e.target.value)}
                    placeholder="Enter new IndexNo..."
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 font-mono text-xs text-white outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={handleCheckDuplicate}
                    className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400"
                  >
                    Insert Record
                  </button>
                </div>
              </div>

              {violationTriggered ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-rose-950/90 border-2 border-rose-500 text-rose-200 text-xs space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-rose-300 text-sm">
                    <ShieldAlert className="w-5 h-5 text-rose-400" />
                    <span>PRIMARY KEY VIOLATION ERROR!</span>
                  </div>
                  <p>
                    Value <code>'{inputNewIndex}'</code> already exists in the table. The DBMS rejected the insert operation to maintain entity integrity!
                  </p>
                </motion.div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Enter an index number (e.g. S104) and click Insert.</span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                Entity Integrity Constraint
              </h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Relational Database Management Systems (RDBMS) automatically enforce Entity Integrity, instantly rejecting any attempt to insert duplicate or null values into a designated Primary Key column.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Foreign Key Cable Snapper (2020 & 2022 Paper II) */}
      {activeMode === 'foreign_key_tether' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Table BOOK */}
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-blue-500/40 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-mono text-xs font-bold text-white">TABLE: BOOK</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">Master</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/50 text-amber-300 font-bold flex items-center justify-between">
                  <span>BookID [PK]</span>
                  <Key className="w-3.5 h-3.5" />
                </div>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-300">Title</div>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-300">Author</div>
              </div>
            </div>

            {/* Bridge Table LEND */}
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-purple-500/50 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-mono text-xs font-bold text-white">TABLE: LEND (Bridge)</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">Child</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/50 text-amber-300 font-bold">
                  LendID [PK]
                </div>
                {/* FK 1: MemberID */}
                <button
                  onClick={handleToggleMemberTether}
                  className={`w-full p-2 rounded-lg border text-left font-bold flex items-center justify-between transition-all ${
                    isMemberTethered
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-cyan-400'
                  }`}
                >
                  <span>MemberID [FK]</span>
                  <Link className="w-3.5 h-3.5" />
                </button>
                {/* FK 2: BookID */}
                <button
                  onClick={handleToggleBookTether}
                  className={`w-full p-2 rounded-lg border text-left font-bold flex items-center justify-between transition-all ${
                    isBookTethered
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-cyan-400'
                  }`}
                >
                  <span>BookID [FK]</span>
                  <Link className="w-3.5 h-3.5" />
                </button>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-300">IssueDate</div>
              </div>
            </div>

            {/* Table MEMBER */}
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-emerald-500/40 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-mono text-xs font-bold text-white">TABLE: MEMBER</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Master</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/50 text-amber-300 font-bold flex items-center justify-between">
                  <span>MemberID [PK]</span>
                  <Key className="w-3.5 h-3.5" />
                </div>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-300">MemberName</div>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-300">TelephoneNo</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
            <div className="text-slate-300">
              Foreign Key Status: <strong className="text-cyan-300">{isBookTethered && isMemberTethered ? 'Both Relational Cables Connected! (2020 O/L Paper II Solved)' : 'Click MemberID [FK] and BookID [FK] to connect relational cables'}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Mode 4: Composite Key Puzzle (2021 & 2024 Paper II) */}
      {activeMode === 'composite_key' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-4 shadow-2xl">
              <div className="text-xs font-mono font-bold text-white">
                TABLE: PARTICIPATION (ශිෂ්‍ය ක්‍රීඩා සහභාගීත්ව වගුව)
              </div>
              <p className="text-[11px] text-slate-300">
                A student can participate in multiple sports events (100m, Long Jump), so <code>IndexNo</code> repeats. Select two fields to fuse into a <strong>Composite Primary Key</strong>:
              </p>

              <div className="grid grid-cols-3 gap-3">
                {['IndexNo', 'EventCode', 'Place'].map(f => {
                  const isSelected = selectedCompositeFields.includes(f);

                  return (
                    <button
                      key={f}
                      onClick={() => handleToggleCompositeField(f)}
                      className={`p-4 rounded-xl border text-center font-mono text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/30'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-400'
                      }`}
                    >
                      <Key className="w-4 h-4 mx-auto mb-1" />
                      <span>{f}</span>
                    </button>
                  );
                })}
              </div>

              {compositeSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-amber-950/80 border border-amber-500 text-amber-200 text-xs space-y-1"
                >
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <Sparkles className="w-4 h-4" />
                    <span>DUAL COMPOSITE KEY FORGED!</span>
                  </div>
                  <p>
                    <code>(IndexNo + EventCode)</code> together form a strictly unique composite identifier. (2024 O/L Paper II Q04 Solved!)
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
                Definition: Composite Primary Key (සංයුක්ත ප්‍රාථමික යතුර)
              </h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                When no single attribute is unique on its own in a table, two or more attributes are combined together to uniquely identify each record.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
