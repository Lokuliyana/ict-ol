'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  Layout, 
  MousePointer, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2, 
  Minimize2, 
  X, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Cpu, 
  Server, 
  ShieldAlert, 
  Send,
  Zap
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type ViewMode = 'cli_vs_gui' | 'wimp_inspector' | 'os_taxonomy';

interface CliHistoryEntry {
  command: string;
  output: string;
  isError?: boolean;
}

export function InterfaceArena() {
  const [viewMode, setViewMode] = useState<ViewMode>('cli_vs_gui');

  // CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<CliHistoryEntry[]>([
    { command: 'help', output: 'Available Commands: DIR, MKDIR, CLS, VER, SYSINFO, WIMP, TYPE note.txt, HELP' }
  ]);
  const [virtualFiles, setVirtualFiles] = useState<string[]>(['lesson05.docx', 'notes.txt', 'config.sys']);

  // GUI Mock Window State
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [pointerCoords, setPointerCoords] = useState({ x: 120, y: 80 });

  // WIMP Active inspector element
  const [selectedWimp, setSelectedWimp] = useState<'W' | 'I' | 'M' | 'P'>('W');

  // OS Taxonomy Classifier Game State
  const [classifiedItems, setClassifiedItems] = useState<Record<string, string>>({});
  const [taxonomyScore, setTaxonomyScore] = useState<number | null>(null);

  const TAXONOMY_TARGETS = [
    { id: 'single_single', titleEn: 'Single-User Single-Tasking', titleSi: 'තනි පරිශීලක තනි කාර්ය', desc: 'Runs 1 program for 1 user at a time (e.g., MS-DOS)' },
    { id: 'single_multi', titleEn: 'Single-User Multi-Tasking', titleSi: 'තනි පරිශීලක බහු කාර්ය', desc: 'Runs multiple apps simultaneously on personal PCs (e.g., Windows 10/11, macOS)' },
    { id: 'multi_multi', titleEn: 'Multi-User Multi-Tasking', titleSi: 'බහු පරිශීලක බහු කාර්ය', desc: 'Serves multiple connected users and enterprise workloads (e.g., Linux Server, Windows Server)' },
    { id: 'rtos', titleEn: 'Real-Time OS (RTOS)', titleSi: 'තත්‍ය කාල මෙහෙයුම් පද්ධති', desc: 'Strict guaranteed deadlines for aerospace, medical life support, automated robotics' }
  ];

  const TAXONOMY_OS_CARDS = [
    { id: 'msdos', name: 'MS-DOS', target: 'single_single', tag: 'Text CLI only' },
    { id: 'win11', name: 'Windows 11 Home', target: 'single_multi', tag: 'Desktop GUI' },
    { id: 'linux_server', name: 'Ubuntu Linux Server', target: 'multi_multi', tag: 'Multi-terminal daemon' },
    { id: 'vxworks', name: 'VxWorks / QNX', target: 'rtos', tag: 'Sub-millisecond deadline' },
    { id: 'macos', name: 'Apple macOS Sequoia', target: 'single_multi', tag: 'Desktop Multi-task' },
    { id: 'avionics_rtos', name: 'Flight Control OS', target: 'rtos', tag: 'Mission Critical' }
  ];

  const handleExecuteCli = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;

    sound.playClick(700);
    const upperCmd = cmd.toUpperCase();
    let res = '';
    let isErr = false;

    if (upperCmd === 'CLS' || upperCmd === 'CLEAR') {
      setCliHistory([]);
      setCliInput('');
      return;
    } else if (upperCmd === 'DIR' || upperCmd === 'LS') {
      res = `Directory of C:\\SYSTEM\\WORKSPACE:\n\n<DIR>          ..\n<DIR>          DOCUMENTS\n${virtualFiles.map(f => `FILE     1024 B   ${f}`).join('\n')}\n\n3 Files, 1 Dir. Free: 48,209,152 Bytes.`;
    } else if (upperCmd.startsWith('MKDIR ') || upperCmd.startsWith('MD ')) {
      const folderName = cmd.split(' ')[1] || 'NEW_FOLDER';
      setVirtualFiles(prev => [...prev, `${folderName}.dir`]);
      res = `Directory created: C:\\SYSTEM\\WORKSPACE\\${folderName}`;
    } else if (upperCmd === 'VER') {
      res = 'The System OS [Version 10.0.19045] - CLI Subsystem Sri Lanka O/L Standard';
    } else if (upperCmd === 'SYSINFO') {
      res = 'HOST: Workstation-01 | MEMORY: 8 MB Allocated (Lightweight) | CPU: 0.05% | INTERFACE: CLI Shell';
    } else if (upperCmd === 'WIMP') {
      res = 'WIMP stands for: [W]indows, [I]cons, [M]enus, [P]ointer - standard elements of GUI.';
    } else if (upperCmd === 'HELP') {
      res = 'Commands: DIR (List files), MKDIR <name> (Create folder), CLS (Clear), VER (Version), SYSINFO, WIMP, HELP';
    } else if (upperCmd.startsWith('TYPE ') || upperCmd.startsWith('CAT ')) {
      res = 'Contents of file: "Grade 10 ICT - An Operating System acts as the bridge between hardware and application software."';
    } else {
      res = `'${cmd}' is not recognized as an internal or external command. Type HELP for command reference.`;
      isErr = true;
      sound.playError();
    }

    setCliHistory(prev => [...prev, { command: cmd, output: res, isError: isErr }]);
    setCliInput('');
  };

  const handleWimpClick = (item: 'W' | 'I' | 'M' | 'P') => {
    sound.playSnap();
    setSelectedWimp(item);
  };

  const handleClassifyOs = (cardId: string, targetId: string) => {
    sound.playClick();
    setClassifiedItems(prev => ({ ...prev, [cardId]: targetId }));
  };

  const evaluateTaxonomy = () => {
    let score = 0;
    TAXONOMY_OS_CARDS.forEach(card => {
      if (classifiedItems[card.id] === card.target) {
        score++;
      }
    });
    setTaxonomyScore(score);
    if (score === TAXONOMY_OS_CARDS.length) {
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
              STATION 02 • අතුරුමුහුණත් සහ වර්ගීකරණය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              CLI vs GUI, WIMP Framework & RTOS
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Layout className="w-5 h-5 text-teal-400" />
            The Interface Arena (පරිශීලක අතුරුමුහුණත් සහ OS වර්ගීකරණය)
          </h2>
          <p className="text-xs text-slate-300">
            Compare Command Line Interface (CLI) vs Graphical User Interface (GUI), inspect WIMP elements, and classify Operating System types.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setViewMode('cli_vs_gui'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'cli_vs_gui'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CLI vs GUI Duel
          </button>
          <button
            onClick={() => { sound.playClick(); setViewMode('wimp_inspector'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'wimp_inspector'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            WIMP Inspector
          </button>
          <button
            onClick={() => { sound.playClick(); setViewMode('os_taxonomy'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'os_taxonomy'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            OS Taxonomy Matrix
          </button>
        </div>
      </div>

      {/* Mode 1: CLI vs GUI Duel */}
      {viewMode === 'cli_vs_gui' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: CLI Terminal */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">CLI (Command Line Interface)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-300">
                RAM: ~8 MB • 0.05% CPU
              </span>
            </div>

            <div className="rounded-2xl bg-black border-2 border-slate-800 p-4 font-mono text-xs text-emerald-400 min-h-[380px] flex flex-col justify-between shadow-2xl">
              {/* Terminal Log */}
              <div className="space-y-2 overflow-y-auto max-h-[300px] pr-2">
                <div className="text-slate-500 text-[11px] border-b border-emerald-950 pb-1">
                  MS-DOS / Bash CLI Subsystem [Sri Lanka O/L ICT Mode]
                </div>
                {cliHistory.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-teal-300 flex items-center gap-1">
                      <span className="text-emerald-500">C:\WORKSPACE&gt;</span>
                      <span>{item.command}</span>
                    </div>
                    <pre className={`whitespace-pre-wrap text-[11px] font-mono ${item.isError ? 'text-rose-400 font-bold' : 'text-slate-300'}`}>
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* CLI Command Line Input */}
              <form onSubmit={handleExecuteCli} className="pt-2 border-t border-emerald-950/80 flex items-center gap-2">
                <span className="text-emerald-400 font-bold shrink-0">C:\WORKSPACE&gt;</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="type 'DIR', 'MKDIR test', 'WIMP', or 'HELP'..."
                  className="flex-1 bg-transparent text-emerald-300 text-xs font-mono outline-none border-b border-transparent focus:border-emerald-500/50"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded bg-emerald-950 hover:bg-emerald-900 border border-emerald-700 text-emerald-300 text-[11px] font-bold"
                >
                  RUN
                </button>
              </form>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p><strong className="text-emerald-300">Merits:</strong> Ultra-fast execution, low memory overhead, ideal for automation & remote server management.</p>
              <p><strong className="text-rose-300">Demerits:</strong> Requires memorizing strict command syntax; non-intuitive for novices.</p>
            </div>
          </div>

          {/* Right: GUI WIMP Sandbox */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">GUI (Graphical User Interface)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                RAM: ~512 MB • Visual Icons
              </span>
            </div>

            {/* Virtual Desktop Canvas */}
            <div 
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPointerCoords({
                  x: Math.round(e.clientX - rect.left),
                  y: Math.round(e.clientY - rect.top)
                });
              }}
              className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border-2 border-slate-800 p-4 min-h-[380px] relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Desktop Icons */}
              <div className="grid grid-cols-3 gap-3 w-48">
                <div 
                  onClick={() => { sound.playSnap(); setIsWindowOpen(true); }}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-white/10 cursor-pointer text-center group"
                >
                  <Folder className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-white">My Documents</span>
                </div>
                <div 
                  onClick={() => { sound.playSnap(); }}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-white/10 cursor-pointer text-center group"
                >
                  <FileText className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-white">ICT_Notes.pdf</span>
                </div>
                <div 
                  onClick={() => { sound.playSnap(); }}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-white/10 cursor-pointer text-center group"
                >
                  <Settings className="w-8 h-8 text-slate-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-white">Control Panel</span>
                </div>
              </div>

              {/* Mock Open Window (W in WIMP) */}
              <AnimatePresence>
                {isWindowOpen && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: isMinimized ? 0.2 : 1, opacity: isMinimized ? 0 : 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="absolute top-14 left-16 right-6 bottom-16 bg-slate-900/95 backdrop-blur-md rounded-xl border border-teal-500/40 shadow-2xl flex flex-col overflow-hidden"
                  >
                    {/* Window Title Bar */}
                    <div className="bg-slate-800/90 px-3 py-2 flex items-center justify-between border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <Folder className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-xs font-bold text-white">File Explorer • C:\Documents</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-slate-700 rounded text-slate-400">
                          <Minimize2 className="w-3 h-3" />
                        </button>
                        <button className="p-1 hover:bg-slate-700 rounded text-slate-400">
                          <Maximize2 className="w-3 h-3" />
                        </button>
                        <button onClick={() => setIsWindowOpen(false)} className="p-1 hover:bg-rose-600 rounded text-slate-400 hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Window Content */}
                    <div className="p-4 flex-1 overflow-y-auto space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 border-b border-slate-800 pb-2">
                        <span>Items: {virtualFiles.length} files available</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {virtualFiles.map((file, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-teal-400" />
                            <span className="text-xs text-white truncate">{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop Taskbar (M in WIMP - Menus) */}
              <div className="bg-slate-900/90 border border-slate-700 rounded-xl px-3 py-2 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveMenu(activeMenu === 'start' ? null : 'start');
                    }}
                    className="px-3 py-1 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-teal-400"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Start Menu</span>
                  </button>

                  <div className="text-[11px] text-slate-400 hidden sm:flex items-center gap-1">
                    <MousePointer className="w-3 h-3 text-cyan-400" />
                    <span>Pointer: ({pointerCoords.x}px, {pointerCoords.y}px)</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-teal-400">
                  WIMP GUI Active
                </div>
              </div>

              {/* Start Menu Popup */}
              {activeMenu === 'start' && (
                <div className="absolute bottom-16 left-4 w-52 bg-slate-900 border border-teal-500/50 rounded-xl p-3 shadow-2xl space-y-2 z-20">
                  <div className="text-xs font-bold text-teal-300 border-b border-slate-800 pb-1">Start Menu</div>
                  <div className="space-y-1 text-xs text-slate-300">
                    <div className="p-1.5 rounded hover:bg-slate-800 cursor-pointer">Word Processor (.docx)</div>
                    <div className="p-1.5 rounded hover:bg-slate-800 cursor-pointer">Spreadsheets (.xlsx)</div>
                    <div className="p-1.5 rounded hover:bg-slate-800 cursor-pointer">Command Prompt (CLI)</div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p><strong className="text-cyan-300">Merits:</strong> Highly intuitive (WIMP), no need to remember commands, point-and-click ease.</p>
              <p><strong className="text-amber-300">Demerits:</strong> Requires more RAM, GPU acceleration, and CPU cycles.</p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: WIMP Inspector */}
      {viewMode === 'wimp_inspector' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { letter: 'W', titleEn: 'Windows', titleSi: 'කවුළු', descEn: 'Rectangular screen areas displaying distinct programs or documents.', descSi: 'විවිධ වැඩසටහන් හෝ ලේඛන තිරය මත පෙන්වන සෘජුකෝණාස්‍රාකාර කොටස්.' },
              { letter: 'I', titleEn: 'Icons', titleSi: 'නිරූපක', descEn: 'Small graphic visual symbols representing files, folders, and applications.', descSi: 'ගොනු, ෆෝල්ඩර සහ මෘදුකාංග නිරූපණය කරන කුඩා චිත්‍රක සංකේත.' },
              { letter: 'M', titleEn: 'Menus', titleSi: 'මෙනු', descEn: 'Lists of selectable commands or options (Drop-down, Context menus).', descSi: 'පරිශීලකයාට තෝරාගත හැකි විධාන හෝ විකල්ප ඇතුළත් ලැයිස්තු.' },
              { letter: 'P', titleEn: 'Pointer / Mouse', titleSi: 'දර්ශකය / මූසිකය', descEn: 'An on-screen symbol controlled by mouse/touchpad to click and drag.', descSi: 'මූසිකය හෝ touchpad මගින් තිරය මත මෙහෙයවන සංකේතය.' }
            ].map((item) => (
              <div
                key={item.letter}
                onClick={() => handleWimpClick(item.letter as 'W' | 'I' | 'M' | 'P')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedWimp === item.letter
                    ? 'bg-teal-950/60 border-teal-400 shadow-xl shadow-teal-500/20 scale-105'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 font-mono font-black text-xl flex items-center justify-center border border-teal-500/40">
                    {item.letter}
                  </span>
                  <Sparkles className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-base font-extrabold text-white">{item.titleEn}</h3>
                <h4 className="text-xs font-bold text-teal-400 font-sinhala">{item.titleSi}</h4>
                <p className="mt-2 text-xs text-slate-300">{item.descEn}</p>
                <p className="text-[11px] text-slate-400 font-sinhala mt-1">{item.descSi}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-xs font-bold text-teal-400 uppercase font-mono tracking-wider mb-2">O/L Past Paper Focus Point</h4>
            <p className="text-xs text-slate-200">
              In Sri Lankan G.C.E. O/L ICT, questions frequently test the four core components of the <strong>WIMP concept</strong> in Graphical User Interfaces. Candidates must be able to list all four letters and pair them with their Sinhala medium equivalents.
            </p>
          </div>
        </div>
      )}

      {/* Mode 3: OS Taxonomy Matrix */}
      {viewMode === 'os_taxonomy' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-white">Classification Matcher Game (මෙහෙයුම් පද්ධති වර්ගීකරණය)</h3>
              <p className="text-xs text-slate-300">
                Match each operating system card to its correct syllabus classification category.
              </p>
            </div>
            {taxonomyScore !== null && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                Score: {taxonomyScore} / {TAXONOMY_OS_CARDS.length}
              </span>
            )}
          </div>

          {/* Classification Target Bins */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TAXONOMY_TARGETS.map(target => (
              <div key={target.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-teal-400 mb-1">
                    <Server className="w-4 h-4" />
                    <h4 className="text-xs font-bold text-white">{target.titleEn}</h4>
                  </div>
                  <h5 className="text-[11px] text-teal-400 font-sinhala">{target.titleSi}</h5>
                  <p className="text-[10px] text-slate-400 mt-1">{target.desc}</p>
                </div>

                {/* Assigned Cards in this bin */}
                <div className="min-h-[100px] p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  {TAXONOMY_OS_CARDS.filter(card => classifiedItems[card.id] === target.id).map(card => (
                    <div key={card.id} className="p-2 rounded-lg bg-teal-950/70 border border-teal-500/40 text-xs font-bold text-teal-200 flex items-center justify-between">
                      <span>{card.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                  ))}
                  {TAXONOMY_OS_CARDS.filter(card => classifiedItems[card.id] === target.id).length === 0 && (
                    <span className="text-[10px] text-slate-600 block text-center pt-6">Drop / assign cards here</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Cards Tray */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300">Select an OS and assign to target category:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {TAXONOMY_OS_CARDS.map(card => (
                <div key={card.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-white truncate">{card.name}</div>
                  <div className="text-[9px] text-slate-400 font-mono">{card.tag}</div>
                  <select
                    value={classifiedItems[card.id] || ''}
                    onChange={(e) => handleClassifyOs(card.id, e.target.value)}
                    className="w-full bg-slate-900 text-[10px] text-teal-300 border border-slate-700 rounded p-1 outline-none font-sans"
                  >
                    <option value="">Assign To...</option>
                    <option value="single_single">Single-User Single-Task</option>
                    <option value="single_multi">Single-User Multi-Task</option>
                    <option value="multi_multi">Multi-User Multi-Task</option>
                    <option value="rtos">Real-Time OS (RTOS)</option>
                  </select>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={evaluateTaxonomy}
                disabled={Object.keys(classifiedItems).length < TAXONOMY_OS_CARDS.length}
                className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20"
              >
                Evaluate Classification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
