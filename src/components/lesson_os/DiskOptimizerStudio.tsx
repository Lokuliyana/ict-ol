'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HardDrive, 
  Sparkles, 
  Trash2, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Layers, 
  Play, 
  Pause,
  FolderOpen,
  PieChart,
  ArrowRight,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type WorkshopMode = 'defrag' | 'partition' | 'recycle_bin' | 'format';

interface DiskBlock {
  id: number;
  fileId: 'free' | 'A' | 'B' | 'C' | 'D';
  color: string;
}

export function DiskOptimizerStudio() {
  const [activeMode, setActiveMode] = useState<WorkshopMode>('defrag');

  // Defrag State
  const initialFragmentedBlocks: DiskBlock[] = [
    { id: 0, fileId: 'A', color: 'bg-rose-500' },
    { id: 1, fileId: 'free', color: 'bg-slate-800' },
    { id: 2, fileId: 'B', color: 'bg-cyan-500' },
    { id: 3, fileId: 'A', color: 'bg-rose-500' },
    { id: 4, fileId: 'C', color: 'bg-emerald-500' },
    { id: 5, fileId: 'free', color: 'bg-slate-800' },
    { id: 6, fileId: 'B', color: 'bg-cyan-500' },
    { id: 7, fileId: 'A', color: 'bg-rose-500' },
    { id: 8, fileId: 'D', color: 'bg-amber-500' },
    { id: 9, fileId: 'free', color: 'bg-slate-800' },
    { id: 10, fileId: 'C', color: 'bg-emerald-500' },
    { id: 11, fileId: 'B', color: 'bg-cyan-500' },
    { id: 12, fileId: 'A', color: 'bg-rose-500' },
    { id: 13, fileId: 'D', color: 'bg-amber-500' },
    { id: 14, fileId: 'free', color: 'bg-slate-800' },
    { id: 15, fileId: 'C', color: 'bg-emerald-500' },
    { id: 16, fileId: 'D', color: 'bg-amber-500' },
    { id: 17, fileId: 'free', color: 'bg-slate-800' },
    { id: 18, fileId: 'B', color: 'bg-cyan-500' },
    { id: 19, fileId: 'free', color: 'bg-slate-800' },
  ];

  const [blocks, setBlocks] = useState<DiskBlock[]>(initialFragmentedBlocks);
  const [isDefragging, setIsDefragging] = useState(false);
  const [defragProgress, setDefragProgress] = useState(0);
  const [seekTimeMs, setSeekTimeMs] = useState(42.5);
  const [isDefragComplete, setIsDefragComplete] = useState(false);

  // Partitioning State (Total 1000 GB)
  const [cDriveSize, setCDriveSize] = useState(300); // System (C:)
  const [dDriveSize, setDDriveSize] = useState(500); // Data (D:)
  const eDriveSize = Math.max(0, 1000 - cDriveSize - dDriveSize); // Backup (E:)

  // Recycle Bin State
  const [activeFiles, setActiveFiles] = useState([
    { id: 'f1', name: 'ICT_Term_Notes.docx', size: '2.4 MB', type: 'Word Document' },
    { id: 'f2', name: 'Marks_Analysis.xlsx', size: '1.1 MB', type: 'Spreadsheet' },
    { id: 'f3', name: 'Draft_Project.pas', size: '45 KB', type: 'Pascal Source' }
  ]);
  const [recycleBin, setRecycleBin] = useState<{ id: string; name: string; size: string; type: string }[]>([]);

  // Defrag Animation Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDefragging) {
      interval = setInterval(() => {
        setDefragProgress(prev => {
          if (prev >= 100) {
            setIsDefragging(false);
            setIsDefragComplete(true);
            setSeekTimeMs(6.2);
            sound.playVictory();

            // Sorted contiguous arrangement
            setBlocks([
              { id: 0, fileId: 'A', color: 'bg-rose-500' },
              { id: 1, fileId: 'A', color: 'bg-rose-500' },
              { id: 2, fileId: 'A', color: 'bg-rose-500' },
              { id: 3, fileId: 'A', color: 'bg-rose-500' },
              { id: 4, fileId: 'B', color: 'bg-cyan-500' },
              { id: 5, fileId: 'B', color: 'bg-cyan-500' },
              { id: 6, fileId: 'B', color: 'bg-cyan-500' },
              { id: 7, fileId: 'B', color: 'bg-cyan-500' },
              { id: 8, fileId: 'C', color: 'bg-emerald-500' },
              { id: 9, fileId: 'C', color: 'bg-emerald-500' },
              { id: 10, fileId: 'C', color: 'bg-emerald-500' },
              { id: 11, fileId: 'D', color: 'bg-amber-500' },
              { id: 12, fileId: 'D', color: 'bg-amber-500' },
              { id: 13, fileId: 'D', color: 'bg-amber-500' },
              { id: 14, fileId: 'free', color: 'bg-slate-800' },
              { id: 15, fileId: 'free', color: 'bg-slate-800' },
              { id: 16, fileId: 'free', color: 'bg-slate-800' },
              { id: 17, fileId: 'free', color: 'bg-slate-800' },
              { id: 18, fileId: 'free', color: 'bg-slate-800' },
              { id: 19, fileId: 'free', color: 'bg-slate-800' },
            ]);
            return 100;
          }
          const nextVal = prev + 10;
          sound.playCrankTick();
          setSeekTimeMs(s => Math.max(6.2, +(s - 3.6).toFixed(1)));
          return nextVal;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isDefragging]);

  const handleStartDefrag = () => {
    sound.playClick(600);
    setIsDefragComplete(false);
    setDefragProgress(0);
    setSeekTimeMs(42.5);
    setIsDefragging(true);
  };

  const handleResetDefrag = () => {
    sound.playClick(400);
    setIsDefragging(false);
    setIsDefragComplete(false);
    setDefragProgress(0);
    setSeekTimeMs(42.5);
    setBlocks(initialFragmentedBlocks);
  };

  // Safe Delete (Moves to Recycle Bin)
  const handleSafeDelete = (file: { id: string; name: string; size: string; type: string }) => {
    sound.playClick();
    setActiveFiles(prev => prev.filter(f => f.id !== file.id));
    setRecycleBin(prev => [...prev, file]);
  };

  // Permanent Delete (Shift + Delete)
  const handlePermanentDelete = (fileId: string) => {
    sound.playError();
    setActiveFiles(prev => prev.filter(f => f.id !== fileId));
  };

  // Restore from Recycle Bin
  const handleRestoreFile = (file: { id: string; name: string; size: string; type: string }) => {
    sound.playSuccess();
    setRecycleBin(prev => prev.filter(f => f.id !== file.id));
    setActiveFiles(prev => [...prev, file]);
  };

  const handleEmptyRecycleBin = () => {
    sound.playError();
    setRecycleBin([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              STATION 04 • තැටි උපයෝගිතා මෘදුකාංග
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Defragmentation, Partitioning & Recycle Bin
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-teal-400" />
            The Disk Maintenance Workshop (තැටි නඩත්තු වැඩබිම)
          </h2>
          <p className="text-xs text-slate-300">
            Learn how Disk Defragmentation groups scattered clusters, partition drives for data safety, and contrast Safe-Delete with Permanent Shredding.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveMode('defrag'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'defrag'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Disk Defragmenter
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('partition'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'partition'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Disk Partitioning
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveMode('recycle_bin'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'recycle_bin'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Recycle Bin vs Shred
          </button>
        </div>
      </div>

      {/* Mode 1: Disk Defragmenter */}
      {activeMode === 'defrag' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Sector Cluster Grid */}
          <div className="lg:col-span-8 space-y-4">
            <div className="rounded-2xl bg-slate-950 border-2 border-slate-800 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-white">HARD DRIVE SECTOR CLUSTERS (SATA HDD)</span>
                  <p className="text-[10px] text-slate-400 font-sinhala">දෘඩ තැටි කැබලි වූ ක්ලස්ටර් සටහන</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-teal-400">Seek Time: {seekTimeMs} ms</div>
                  <div className="text-[10px] text-slate-400">
                    {isDefragComplete ? 'Status: 0% Fragmented (Optimal)' : 'Status: 68% Fragmented'}
                  </div>
                </div>
              </div>

              {/* 20 Cluster Sector Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                {blocks.map((block, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`h-11 rounded-lg flex flex-col items-center justify-center border text-[11px] font-mono font-bold shadow-inner ${
                      block.fileId === 'free'
                        ? 'bg-slate-800/80 border-slate-700/60 text-slate-500'
                        : `${block.color} border-white/20 text-slate-950`
                    }`}
                  >
                    <span>{block.fileId === 'free' ? 'FREE' : `F-${block.fileId}`}</span>
                    <span className="text-[9px] opacity-70">Sec {idx + 1}</span>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-500" /> <span className="text-slate-300">File A</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-cyan-500" /> <span className="text-slate-300">File B</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500" /> <span className="text-slate-300">File C</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500" /> <span className="text-slate-300">File D</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" /> <span className="text-slate-400">Contiguous Free Space</span></div>
                </div>
              </div>

              {/* Progress Bar */}
              {isDefragging && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-teal-400">
                    <span>Defragmenting & Rearranging Sectors...</span>
                    <span>{defragProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${defragProgress}%` }} />
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={handleStartDefrag}
                disabled={isDefragging || isDefragComplete}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isDefragComplete ? 'Drive Defragmented!' : 'Start Defragmentation'}</span>
              </button>

              <button
                onClick={handleResetDefrag}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Fragmented</span>
              </button>
            </div>
          </div>

          {/* Right Theory & Examination Card */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-teal-400 uppercase font-mono tracking-wider">
                Syllabus Definition (ප්‍රතිභාගීකරණය)
              </h4>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>
                  <strong>Disk Defragmentation:</strong> Organizing the hard disk by rearranging fragmented clusters of files together and creating a larger continuous free space.
                </p>
                <p className="text-teal-400 font-sinhala text-[11px]">
                  දෘඩ තැටිය පුරා කැබලි වී පවතින ගොනු කොටස් නැවත එක් කර අඛණ්ඩව පිහිටන පරිදි සකස් කිරීම ප්‍රතිභාගීකරණයයි.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1 text-xs">
                <div className="text-white font-bold">Key Benefits (වාසි):</div>
                <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                  <li>Reduces read/write head movement (Seek Time drops).</li>
                  <li>Increases file access speed & system responsiveness.</li>
                  <li>Consolidates unused sectors into large free blocks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Disk Partitioning */}
      {activeMode === 'partition' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="max-w-2xl space-y-1">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <PieChart className="w-4 h-4 text-teal-400" />
                Physical Drive Partitioning (තැටි පංගු කිරීම)
              </h3>
              <p className="text-xs text-slate-300">
                Divide 1 single physical hard drive (1000 GB) into separate logical partitions to safeguard personal files when the OS needs reinstallation.
              </p>
            </div>

            {/* Visual Partition Bar */}
            <div className="space-y-2">
              <div className="flex h-12 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                <div
                  style={{ width: `${(cDriveSize / 1000) * 100}%` }}
                  className="bg-teal-600 flex flex-col items-center justify-center text-slate-950 font-mono font-bold text-xs p-1 truncate transition-all"
                >
                  <span>C: (System OS)</span>
                  <span className="text-[10px]">{cDriveSize} GB</span>
                </div>
                <div
                  style={{ width: `${(dDriveSize / 1000) * 100}%` }}
                  className="bg-cyan-500 flex flex-col items-center justify-center text-slate-950 font-mono font-bold text-xs p-1 truncate transition-all"
                >
                  <span>D: (Data Files)</span>
                  <span className="text-[10px]">{dDriveSize} GB</span>
                </div>
                <div
                  style={{ width: `${(eDriveSize / 1000) * 100}%` }}
                  className="bg-amber-500 flex flex-col items-center justify-center text-slate-950 font-mono font-bold text-xs p-1 truncate transition-all"
                >
                  <span>E: (Backup)</span>
                  <span className="text-[10px]">{eDriveSize} GB</span>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-teal-400">
                  <span>C: System Partition Size</span>
                  <span className="font-mono text-white">{cDriveSize} GB</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="600"
                  step="50"
                  value={cDriveSize}
                  onChange={(e) => {
                    sound.playClick(700, 0.02);
                    const val = Number(e.target.value);
                    setCDriveSize(val);
                    if (val + dDriveSize > 950) {
                      setDDriveSize(950 - val);
                    }
                  }}
                  className="w-full accent-teal-400"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-cyan-400">
                  <span>D: Data Partition Size</span>
                  <span className="font-mono text-white">{dDriveSize} GB</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="750"
                  step="50"
                  value={dDriveSize}
                  onChange={(e) => {
                    sound.playClick(700, 0.02);
                    const val = Number(e.target.value);
                    if (cDriveSize + val <= 950) {
                      setDDriveSize(val);
                    }
                  }}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>

            {/* Educational takeaway */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <strong className="text-teal-300">O/L Best Practice:</strong> If virus infection damages the operating system on <code>C:\</code>, formatting <code>C:\</code> for a clean OS reinstall does NOT delete personal documents stored on <code>D:\</code>.
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Recycle Bin vs Shredder */}
      {activeMode === 'recycle_bin' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Files Folder */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-bold text-white">Active Folder • C:\Documents</h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{activeFiles.length} files</span>
            </div>

            <div className="space-y-2 min-h-[160px]">
              {activeFiles.map(file => (
                <div key={file.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{file.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{file.type} • {file.size}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleSafeDelete(file)}
                      title="Safe Delete (Move to Recycle Bin)"
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-950 hover:text-amber-400 text-xs font-semibold text-slate-300 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                    <button
                      onClick={() => handlePermanentDelete(file.id)}
                      title="Permanent Wipe (Shift + Delete)"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400"
                    >
                      <Flame className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
              {activeFiles.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-600">All files deleted from active directory.</div>
              )}
            </div>
          </div>

          {/* Recycle Bin Sandbox */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-bold text-white">Recycle Bin (ප්‍රතිචක්‍රීකරණ බඳුන)</h3>
              </div>
              {recycleBin.length > 0 && (
                <button
                  onClick={handleEmptyRecycleBin}
                  className="text-[11px] text-rose-400 hover:underline font-bold"
                >
                  Empty Bin
                </button>
              )}
            </div>

            <div className="space-y-2 min-h-[160px]">
              {recycleBin.map(file => (
                <div key={file.id} className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{file.name}</div>
                    <div className="text-[10px] text-emerald-400 font-mono">In Recycle Bin • Restorable</div>
                  </div>
                  <button
                    onClick={() => handleRestoreFile(file)}
                    className="px-3 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-600 text-emerald-300 text-xs font-bold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Restore</span>
                  </button>
                </div>
              ))}
              {recycleBin.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-600">Recycle Bin is empty.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
