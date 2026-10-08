'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  HardDrive, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  EyeOff, 
  Search,
  Layers,
  FileCode,
  FileSpreadsheet,
  FileBox,
  Image as ImageIcon,
  Video,
  FileArchive
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type StationTab = 'tree_explorer' | 'extension_forge' | 'access_modes';

export function FileHierarchyTree() {
  const [activeTab, setActiveTab] = useState<StationTab>('tree_explorer');

  // Directory Tree State
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'c_drive': true,
    'users': true,
    'student': true,
    'documents': true,
    'ict': true
  });
  const [selectedFilePath, setSelectedFilePath] = useState<string>('C:\\Users\\Student\\Documents\\ICT\\Grade10_Lesson05.docx');

  // Extension Matcher State
  const [matchedExtensions, setMatchedExtensions] = useState<Record<string, string>>({});
  const [extensionScore, setExtensionScore] = useState<number | null>(null);

  // File Attributes State
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const EXTENSION_PUZZLES = [
    { ext: '.docx', app: 'Word Processing', si: 'වචන සකසුම්', icon: FileText, color: 'text-blue-400' },
    { ext: '.xlsx', app: 'Electronic Spreadsheet', si: 'පැතුරුම්පත්', icon: FileSpreadsheet, color: 'text-emerald-400' },
    { ext: '.pptx', app: 'Electronic Presentation', si: 'සමර්පණ මෘදුකාංග', icon: FileBox, color: 'text-orange-400' },
    { ext: '.pas', app: 'Pascal Programming Source', si: 'පැස්කල් ක්‍රමලේඛ', icon: FileCode, color: 'text-cyan-400' },
    { ext: '.jpg', app: 'Bitmap Raster Graphic', si: 'පික්සල් රූප', icon: ImageIcon, color: 'text-purple-400' },
    { ext: '.zip', app: 'Compressed Archive', si: 'සම්පීඩිත ගොනුව', icon: FileArchive, color: 'text-amber-400' },
  ];

  const APP_OPTIONS = [
    'Word Processing',
    'Electronic Spreadsheet',
    'Electronic Presentation',
    'Pascal Programming Source',
    'Bitmap Raster Graphic',
    'Compressed Archive'
  ];

  const toggleFolder = (folderId: string) => {
    sound.playClick(650);
    setExpandedFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const handleSelectFile = (fullPath: string) => {
    sound.playSnap();
    setSelectedFilePath(fullPath);
  };

  const handleMatchExtension = (ext: string, app: string) => {
    sound.playClick();
    setMatchedExtensions(prev => ({ ...prev, [ext]: app }));
  };

  const evaluateExtensions = () => {
    let score = 0;
    EXTENSION_PUZZLES.forEach(p => {
      if (matchedExtensions[p.ext] === p.app) score++;
    });
    setExtensionScore(score);
    if (score === EXTENSION_PUZZLES.length) {
      sound.playVictory();
    } else {
      sound.playSuccess();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              STATION 05 • ගොනු ධූරාවලිය සහ ගොනු ආකෘති
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Directory Tree, File Paths & Extensions
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-teal-400" />
            File Hierarchy & Attributes (ගොනු ධූරාවලිය සහ ගොනු වර්ග)
          </h2>
          <p className="text-xs text-slate-300">
            Navigate the directory path tree from Root to target files, decode primary names and extensions, and inspect file access modes.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveTab('tree_explorer'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'tree_explorer'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Directory Tree Path
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('extension_forge'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'extension_forge'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Extension Matcher
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('access_modes'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'access_modes'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sequential vs Random
          </button>
        </div>
      </div>

      {/* Tab 1: Directory Tree Explorer */}
      {activeTab === 'tree_explorer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Tree Navigator */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <HardDrive className="w-4 h-4 text-teal-400" />
                  FILE SYSTEM DIRECTORY TREE
                </span>
                <span className="text-[10px] text-teal-400 font-mono">NTFS / FAT32</span>
              </div>

              {/* Tree Nodes */}
              <div className="space-y-1 font-mono text-xs text-slate-300 select-none">
                {/* Root Drive */}
                <div 
                  onClick={() => toggleFolder('c_drive')}
                  className="flex items-center gap-1.5 p-1.5 rounded hover:bg-slate-900 cursor-pointer text-teal-300 font-bold"
                >
                  {expandedFolders['c_drive'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  <HardDrive className="w-4 h-4 text-teal-400" />
                  <span>C:\ (Root Directory / මූල ඩිරෙක්ටරිය)</span>
                </div>

                {/* Level 1: Users */}
                {expandedFolders['c_drive'] && (
                  <div className="pl-5 space-y-1">
                    <div 
                      onClick={() => toggleFolder('users')}
                      className="flex items-center gap-1.5 p-1.5 rounded hover:bg-slate-900 cursor-pointer text-slate-300"
                    >
                      {expandedFolders['users'] ? <ChevronDown className="w-3.5 h-3.5 text-amber-400" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-400" />}
                      <Folder className="w-4 h-4 text-amber-400" />
                      <span>Users</span>
                    </div>

                    {/* Level 2: Student */}
                    {expandedFolders['users'] && (
                      <div className="pl-5 space-y-1">
                        <div 
                          onClick={() => toggleFolder('student')}
                          className="flex items-center gap-1.5 p-1.5 rounded hover:bg-slate-900 cursor-pointer text-slate-300"
                        >
                          {expandedFolders['student'] ? <ChevronDown className="w-3.5 h-3.5 text-amber-400" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-400" />}
                          <Folder className="w-4 h-4 text-amber-400" />
                          <span>Student</span>
                        </div>

                        {/* Level 3: Documents */}
                        {expandedFolders['student'] && (
                          <div className="pl-5 space-y-1">
                            <div 
                              onClick={() => toggleFolder('documents')}
                              className="flex items-center gap-1.5 p-1.5 rounded hover:bg-slate-900 cursor-pointer text-slate-300"
                            >
                              {expandedFolders['documents'] ? <ChevronDown className="w-3.5 h-3.5 text-amber-400" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-400" />}
                              <Folder className="w-4 h-4 text-amber-400" />
                              <span>Documents</span>
                            </div>

                            {/* Level 4: ICT Folder */}
                            {expandedFolders['documents'] && (
                              <div className="pl-5 space-y-1">
                                <div 
                                  onClick={() => toggleFolder('ict')}
                                  className="flex items-center gap-1.5 p-1.5 rounded hover:bg-slate-900 cursor-pointer text-slate-300"
                                >
                                  {expandedFolders['ict'] ? <ChevronDown className="w-3.5 h-3.5 text-amber-400" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-400" />}
                                  <Folder className="w-4 h-4 text-amber-400" />
                                  <span>ICT</span>
                                </div>

                                {/* Files Inside ICT */}
                                {expandedFolders['ict'] && (
                                  <div className="pl-5 space-y-1">
                                    <div
                                      onClick={() => handleSelectFile('C:\\Users\\Student\\Documents\\ICT\\Grade10_Lesson05.docx')}
                                      className={`flex items-center gap-1.5 p-1.5 rounded cursor-pointer ${
                                        selectedFilePath.includes('Grade10_Lesson05.docx')
                                          ? 'bg-teal-950/80 border border-teal-500 text-teal-300'
                                          : 'hover:bg-slate-900 text-slate-400'
                                      }`}
                                    >
                                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                                      <span>Grade10_Lesson05.docx</span>
                                    </div>
                                    <div
                                      onClick={() => handleSelectFile('C:\\Users\\Student\\Documents\\ICT\\PastPaper_2024.pdf')}
                                      className={`flex items-center gap-1.5 p-1.5 rounded cursor-pointer ${
                                        selectedFilePath.includes('PastPaper_2024.pdf')
                                          ? 'bg-teal-950/80 border border-teal-500 text-teal-300'
                                          : 'hover:bg-slate-900 text-slate-400'
                                      }`}
                                    >
                                      <FileText className="w-3.5 h-3.5 text-rose-400" />
                                      <span>PastPaper_2024.pdf</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Path Inspector & Anatomy */}
          <div className="lg:col-span-6 space-y-4">
            {/* Live Breadcrumb Path Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-teal-400 uppercase font-mono">
                Full Absolute Directory Path (සම්පූර්ණ ගොනු මග)
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-teal-500/40 font-mono text-xs text-teal-300 break-all select-all">
                {selectedFilePath}
              </div>

              {/* Path Decomposition */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Root Drive:</span>
                  <span className="font-mono font-bold text-white">C:\</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Parent Directory:</span>
                  <span className="font-mono font-bold text-white">ICT</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Target File Name:</span>
                  <span className="font-mono font-bold text-teal-300">Grade10_Lesson05.docx</span>
                </div>
              </div>
            </div>

            {/* File Anatomy Equation */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white">File Anatomy Equation (ගොනුවක ව්‍යුහය)</div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-xs text-slate-300">
                <span className="text-teal-400 font-bold">Grade10_Lesson05</span>
                <span className="text-white font-bold"> . </span>
                <span className="text-cyan-400 font-bold">docx</span>
                <div className="flex justify-around text-[10px] text-slate-400 pt-1">
                  <span>Primary Name (මූලික නම)</span>
                  <span>Dot</span>
                  <span>Extension (ගොනු දිගුව)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Extension Matcher */}
      {activeTab === 'extension_forge' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-white">File Extension Sorter (ගොනු දිගු ගැලපීම)</h3>
              <p className="text-xs text-slate-300">
                Match each standard file extension to its corresponding application software category.
              </p>
            </div>
            {extensionScore !== null && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                Score: {extensionScore} / {EXTENSION_PUZZLES.length}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXTENSION_PUZZLES.map(p => {
              const IconComp = p.icon;
              return (
                <div key={p.ext} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-black text-white">{p.ext}</span>
                    <IconComp className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <div className="text-[11px] text-teal-400 font-sinhala">{p.si}</div>

                  <select
                    value={matchedExtensions[p.ext] || ''}
                    onChange={(e) => handleMatchExtension(p.ext, e.target.value)}
                    className="w-full bg-slate-900 text-xs text-white border border-slate-700 rounded-lg p-2 outline-none"
                  >
                    <option value="">Select Software Application...</option>
                    {APP_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              onClick={evaluateExtensions}
              disabled={Object.keys(matchedExtensions).length < EXTENSION_PUZZLES.length}
              className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20"
            >
              Verify Extensions
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Sequential vs Random Access */}
      {activeTab === 'access_modes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-sm font-extrabold text-white">1. Sequential Access (අනුක්‍රමික ප්‍රවේශය)</h3>
              <span className="text-xs font-mono text-amber-400">e.g. Magnetic Tape</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Data records must be read one after another in chronological order from beginning to end. To access record #50, records 1 through 49 must be passed sequentially.
            </p>
            <p className="text-[11px] text-teal-400 font-sinhala">
              ආරම්භයේ සිට අවසානය දක්වා අනුක්‍රමිකව එකින් එක කියවනු ලබයි (උදා: චුම්භක පටි).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-sm font-extrabold text-white">2. Random / Direct Access (සසම්භාවී ප්‍රවේශය)</h3>
              <span className="text-xs font-mono text-teal-400">e.g. HDD, SSD, RAM, Flash</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The read/write head or memory controller jumps directly to any specific address or sector instantly without reading through previous records.
            </p>
            <p className="text-[11px] text-teal-400 font-sinhala">
              අතරමැදි දත්ත කියවීමෙන් තොරව අවශ්‍ය ඕනෑම ලිපිනයකට ක්ෂණිකව ප්‍රවේශ විය හැක (උදා: RAM, දෘඩ තැටි).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
