'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Activity, 
  Layers, 
  HardDrive, 
  Play, 
  Pause, 
  Plus, 
  Trash2, 
  AlertTriangle, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Sliders
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface ProcessItem {
  id: string;
  name: string;
  burstTime: number;
  remainingTime: number;
  ramUsageMb: number;
  state: 'ready' | 'running' | 'blocked' | 'terminated';
  color: string;
}

export function ProcessDispatcher() {
  const [activeTab, setActiveTab] = useState<'cpu_scheduler' | 'virtual_memory' | 'resource_matrix'>('cpu_scheduler');

  // CPU Scheduler State
  const [processes, setProcesses] = useState<ProcessItem[]>([
    { id: 'P1', name: 'Word Processor (Word.exe)', burstTime: 8, remainingTime: 8, ramUsageMb: 800, state: 'ready', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
    { id: 'P2', name: 'Pascal Compiler (FPC)', burstTime: 6, remainingTime: 6, ramUsageMb: 500, state: 'ready', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
    { id: 'P3', name: 'Web Browser (Browser.exe)', burstTime: 12, remainingTime: 12, ramUsageMb: 1400, state: 'ready', color: 'border-purple-500 bg-purple-950/40 text-purple-300' }
  ]);

  const [timeQuantum, setTimeQuantum] = useState(3);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [cpuCurrentProcess, setCpuCurrentProcess] = useState<ProcessItem | null>(null);
  const [quantumTick, setQuantumTick] = useState(0);

  // Virtual Memory & Thrashing State
  const TOTAL_PHYSICAL_RAM_MB = 4096; // 4 GB RAM
  const [installedApps, setInstalledApps] = useState<{ id: string; name: string; sizeMb: number }[]>([
    { id: 'os_kernel', name: 'OS Kernel & System Drivers', sizeMb: 1200 },
    { id: 'app1', name: 'Web Browser (12 Tabs)', sizeMb: 1500 },
    { id: 'app2', name: 'Video Editing Suite', sizeMb: 1800 }
  ]);
  const [isThrashing, setIsThrashing] = useState(false);

  // Scheduler Tick Simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunningSim) {
      timer = setInterval(() => {
        setProcesses(prev => {
          // Find running or ready processes
          const activeList = [...prev];
          let current = activeList.find(p => p.state === 'running');

          if (!current) {
            // Pick first ready process
            const nextReady = activeList.find(p => p.state === 'ready');
            if (nextReady) {
              nextReady.state = 'running';
              setCpuCurrentProcess(nextReady);
              setQuantumTick(1);
              sound.playSnap();
            } else {
              // No ready processes left
              setIsRunningSim(false);
              setCpuCurrentProcess(null);
              sound.playVictory();
            }
            return activeList;
          }

          // Process is currently running
          if (current.remainingTime > 1 && quantumTick < timeQuantum) {
            current.remainingTime -= 1;
            setQuantumTick(t => t + 1);
            sound.playClick(800, 0.02);
          } else if (current.remainingTime <= 1) {
            // Process Finished!
            current.remainingTime = 0;
            current.state = 'terminated';
            setCpuCurrentProcess(null);
            setQuantumTick(0);
            sound.playSuccess();
          } else if (quantumTick >= timeQuantum) {
            // Quantum expired -> Context Switch!
            current.remainingTime -= 1;
            current.state = 'ready';
            // Move to back of ready queue
            const index = activeList.indexOf(current);
            activeList.splice(index, 1);
            activeList.push(current);
            setCpuCurrentProcess(null);
            setQuantumTick(0);
            sound.playCrankTick();
          }

          return activeList;
        });
      }, 700);
    }

    return () => clearInterval(timer);
  }, [isRunningSim, quantumTick, timeQuantum]);

  const handleToggleSim = () => {
    sound.playClick(600);
    setIsRunningSim(!isRunningSim);
  };

  const handleResetScheduler = () => {
    sound.playClick(400);
    setIsRunningSim(false);
    setCpuCurrentProcess(null);
    setQuantumTick(0);
    setProcesses([
      { id: 'P1', name: 'Word Processor (Word.exe)', burstTime: 8, remainingTime: 8, ramUsageMb: 800, state: 'ready', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
      { id: 'P2', name: 'Pascal Compiler (FPC)', burstTime: 6, remainingTime: 6, ramUsageMb: 500, state: 'ready', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
      { id: 'P3', name: 'Web Browser (Browser.exe)', burstTime: 12, remainingTime: 12, ramUsageMb: 1400, state: 'ready', color: 'border-purple-500 bg-purple-950/40 text-purple-300' }
    ]);
  };

  const handleAddNewProcess = () => {
    sound.playSnap();
    const pid = `P${processes.length + 1}`;
    setProcesses(prev => [
      ...prev,
      {
        id: pid,
        name: `User Task (${pid})`,
        burstTime: 5,
        remainingTime: 5,
        ramUsageMb: 600,
        state: 'ready',
        color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
      }
    ]);
  };

  // Virtual Memory calculations
  const totalAllocatedMb = installedApps.reduce((sum, a) => sum + a.sizeMb, 0);
  const physicalRamUsedMb = Math.min(totalAllocatedMb, TOTAL_PHYSICAL_RAM_MB);
  const virtualMemoryUsedMb = Math.max(0, totalAllocatedMb - TOTAL_PHYSICAL_RAM_MB);
  const ramUsagePercent = Math.round((physicalRamUsedMb / TOTAL_PHYSICAL_RAM_MB) * 100);

  const handleAddHeavyApp = () => {
    sound.playSnap();
    const id = `app_${Date.now()}`;
    setInstalledApps(prev => [...prev, { id, name: '3D Simulation / Game Engine', sizeMb: 1600 }]);
    if (totalAllocatedMb + 1600 > TOTAL_PHYSICAL_RAM_MB * 1.3) {
      setIsThrashing(true);
      sound.playError();
    }
  };

  const handleRemoveApp = (id: string) => {
    sound.playClick();
    setInstalledApps(prev => prev.filter(a => a.id !== id));
    setIsThrashing(false);
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              STATION 03 • සම්පත් කළමනාකරණය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              CPU Scheduling, Virtual Memory & Thrashing
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-400" />
            The Resource Control Hub (සම්පත් කළමනාකරණ මධ්‍යස්ථානය)
          </h2>
          <p className="text-xs text-slate-300">
            Simulate Round-Robin CPU time quantum scheduling, monitor RAM allocation, and observe Virtual Memory paging.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveTab('cpu_scheduler'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'cpu_scheduler'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CPU Scheduler (Round-Robin)
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('virtual_memory'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'virtual_memory'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Virtual Memory & Paging
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('resource_matrix'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'resource_matrix'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            6 Core OS Duties
          </button>
        </div>
      </div>

      {/* Tab 1: CPU Round Robin Scheduler */}
      {activeTab === 'cpu_scheduler' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Animated CPU Core & Process Queues */}
          <div className="lg:col-span-8 space-y-4">
            {/* CPU Socket & Execution Reactor */}
            <div className="rounded-2xl bg-slate-950 border-2 border-slate-800 p-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-teal-400" />
                  <span className="text-xs font-mono font-bold text-white">CPU CORE 01 • EXECUTION SOCKET</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-300">Quantum: {quantumTick} / {timeQuantum}s</span>
                </div>
              </div>

              {/* Active Running Process in Core */}
              <div className="min-h-[140px] rounded-xl bg-slate-900/80 border border-teal-500/30 p-4 flex flex-col items-center justify-center text-center relative">
                {cpuCurrentProcess ? (
                  <motion.div
                    key={cpuCurrentProcess.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-2"
                  >
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500 text-slate-950">
                      CURRENTLY RUNNING: {cpuCurrentProcess.id}
                    </div>
                    <h3 className="text-sm font-extrabold text-white">{cpuCurrentProcess.name}</h3>
                    <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-300 pt-1">
                      <span>Remaining Burst: {cpuCurrentProcess.remainingTime}s / {cpuCurrentProcess.burstTime}s</span>
                      <span>RAM: {cpuCurrentProcess.ramUsageMb} MB</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-slate-500 text-xs font-mono flex flex-col items-center gap-1.5">
                    <Activity className="w-8 h-8 text-slate-600 animate-pulse" />
                    <span>CPU IDLE • Waiting for Next Process from Ready Queue</span>
                  </div>
                )}
              </div>

              {/* Process Ready Queue (FIFO / Round-Robin) */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5 text-teal-400">
                    <Layers className="w-4 h-4" />
                    Ready Queue (සූදානම් පෝලිම)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {processes.filter(p => p.state === 'ready').length} Tasks Pending
                  </span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto p-2 rounded-xl bg-slate-900/60 border border-slate-800 min-h-[70px]">
                  {processes.filter(p => p.state === 'ready').map(p => (
                    <motion.div
                      key={p.id}
                      layout
                      className={`px-3 py-2 rounded-lg border text-xs font-bold shrink-0 flex items-center gap-2 ${p.color}`}
                    >
                      <span>{p.id}: {p.name.split(' ')[0]}</span>
                      <span className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono">{p.remainingTime}s</span>
                    </motion.div>
                  ))}
                  {processes.filter(p => p.state === 'ready').length === 0 && (
                    <span className="text-xs text-slate-600 italic px-2">Ready queue is empty</span>
                  )}
                </div>
              </div>

              {/* Terminated Processes */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Terminated: {processes.filter(p => p.state === 'terminated').map(p => p.id).join(', ') || 'None yet'}</span>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSim}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all ${
                    isRunningSim
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/30'
                      : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/30'
                  }`}
                >
                  {isRunningSim ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isRunningSim ? 'Pause Dispatcher' : 'Start Round-Robin Dispatch'}</span>
                </button>

                <button
                  onClick={handleAddNewProcess}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <Plus className="w-3.5 h-3.5 text-teal-400" />
                  <span>Spawn Process</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span>Quantum (q):</span>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={timeQuantum}
                    onChange={(e) => setTimeQuantum(Number(e.target.value))}
                    className="w-20 accent-teal-400"
                  />
                  <span className="font-bold text-teal-400">{timeQuantum}s</span>
                </div>

                <button
                  onClick={handleResetScheduler}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Explainer: Process State Transition Diagram */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-teal-400 uppercase font-mono tracking-wider">
                Process Lifecycle States (ක්‍රියාවලි අවස්ථා 5)
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-300">1. New (නව):</strong> The program is being created or loaded from disk.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-amber-300">2. Ready (සූදානම්):</strong> Waiting in primary memory (RAM) to be assigned CPU time.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-300">3. Running (ක්‍රියාත්මක):</strong> Currently executing instructions inside the CPU core.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-purple-300">4. Blocked / Waiting (අවහිර වූ):</strong> Waiting for an external I/O event (e.g., keyboard input, disk read).
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-slate-400">5. Terminated (අවසන් වූ):</strong> Execution completed; allocated RAM and registers released.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-teal-950/40 border border-teal-500/30 text-[11px] text-teal-200">
                <strong>O/L Concept:</strong> Round-Robin scheduling assigns a fixed <em>Time Quantum</em> to ensure fairness and prevent any single process from hogging the processor.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Virtual Memory & Thrashing */}
      {activeTab === 'virtual_memory' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Memory Meters */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-teal-400" />
                  Primary RAM Allocation vs Secondary Swap
                </h3>
                <span className="text-xs font-mono text-teal-400">{ramUsagePercent}% RAM Used</span>
              </div>

              {/* Physical RAM Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Physical RAM (4096 MB)</span>
                  <span className="font-mono">{physicalRamUsedMb} MB / 4096 MB</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    className={`h-full transition-all duration-500 ${
                      ramUsagePercent > 90 ? 'bg-rose-500' : ramUsagePercent > 70 ? 'bg-amber-500' : 'bg-teal-500'
                    }`}
                    style={{ width: `${Math.min(100, ramUsagePercent)}%` }}
                  />
                </div>
              </div>

              {/* Virtual Memory Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Virtual Memory / Swap File on Hard Disk</span>
                  <span className="font-mono text-amber-400">{virtualMemoryUsedMb} MB Swapped</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-amber-500 transition-all duration-500"
                    style={{ width: `${Math.min(100, (virtualMemoryUsedMb / 2048) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Thrashing Alert Banner */}
              {isThrashing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-rose-300">
                    <AlertTriangle className="w-4 h-4" />
                    <span>SYSTEM ALERT: Thrashing Detected! (තැටි තෙරපුම)</span>
                  </div>
                  <p className="text-[11px] text-rose-300/90 font-sans">
                    The CPU is spending more time swapping memory pages between RAM and Hard Disk than executing user instructions. The system becomes unresponsive.
                  </p>
                </motion.div>
              )}

              {/* Add App Button */}
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handleAddHeavyApp}
                  className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-teal-400"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Launch Heavy App (+1600 MB)</span>
                </button>
              </div>
            </div>

            {/* Active Running Apps List */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-extrabold text-white">Active Resident Applications</h3>
              <div className="space-y-2 max-h-[220px] overflow-y-auto">
                {installedApps.map(app => (
                  <div key={app.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{app.name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{app.sizeMb} MB Memory Footprint</div>
                    </div>
                    {app.id !== 'os_kernel' && (
                      <button
                        onClick={() => handleRemoveApp(app.id)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: 6 Core OS Duties Matrix */}
      {activeTab === 'resource_matrix' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              titleEn: '1. Process Management',
              titleSi: 'ක්‍රියාවලි කළමනාකරණය',
              descEn: 'Allocates CPU time slices, handles multitasking scheduling, and manages process life states.',
              descSi: 'CPU කාලය වෙන් කිරීම, බහුකාර්ය කාලසටහන් හා ක්‍රියාවලි පාලනය.'
            },
            {
              titleEn: '2. Memory Management',
              titleSi: 'මතක කළමනාකරණය',
              descEn: 'Tracks every byte of RAM and provisions Virtual Memory paging when physical RAM runs low.',
              descSi: 'RAM මතකය කාර්යක්ෂමව වෙන් කිරීම සහ අතථ්‍ය මතකය (Virtual Memory) පාලනය.'
            },
            {
              titleEn: '3. Device Management',
              titleSi: 'උපාංග කළමනාකරණය',
              descEn: 'Controls peripherals via Device Controllers (HW) and Device Drivers (SW) with Plug & Play.',
              descSi: 'උපාංග පාලක (Controllers) සහ ධාවක මෘදුකාංග (Drivers) මගින් පර්යන්ත උපාංග මෙහෙයවීම.'
            },
            {
              titleEn: '4. File Management',
              titleSi: 'ගොනු කළමනාකරණය',
              descEn: 'Maintains directory hierarchies, storage drives (C:, D:), file creation, and permission attributes.',
              descSi: 'ෆෝල්ඩර ධූරාවලි, ඩ්‍රයිව්, ගොනු නිර්මාණය සහ ගබඩා කිරීම පාලනය කිරීම.'
            },
            {
              titleEn: '5. Security Management',
              titleSi: 'ආරක්ෂණ කළමනාකරණය',
              descEn: 'Protects system against malware, enforces authentication, user passwords, and access privileges.',
              descSi: 'අනිෂ්ට මෘදුකාංගවලින් සහ අනවසර පිවිසුම්වලින් පරිගණකය ආරක්ෂා කිරීම.'
            },
            {
              titleEn: '6. Network Management',
              titleSi: 'ජාල කළමනාකරණය',
              descEn: 'Coordinates data communication, IP address binding, Wi-Fi connectivity, and remote cloud access.',
              descSi: 'ජාල සන්නිවේදනය, Wi-Fi සහ දුරස්ථ සම්පත් ප්‍රවේශය පාලනය කිරීම.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-extrabold text-white">{item.titleEn}</h4>
              <h5 className="text-xs font-bold text-teal-400 font-sinhala">{item.titleSi}</h5>
              <p className="text-xs text-slate-300">{item.descEn}</p>
              <p className="text-[11px] text-slate-400 font-sinhala">{item.descSi}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
