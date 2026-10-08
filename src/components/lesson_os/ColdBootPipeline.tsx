'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Power, 
  Cpu, 
  HardDrive, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  Zap,
  Play,
  Monitor,
  Microchip,
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BootStep {
  step: number;
  titleEn: string;
  titleSi: string;
  shortCode: string;
  hardware: string;
  descriptionEn: string;
  descriptionSi: string;
  status: 'idle' | 'running' | 'success' | 'error';
  examNoteEn: string;
  examNoteSi: string;
}

export function ColdBootPipeline() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isAutoBooting, setIsAutoBooting] = useState(false);
  const [simulateFault, setSimulateFault] = useState<null | 'ram_fault' | 'disk_fault'>(null);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'post_lab' | 'exam_quiz'>('pipeline');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});

  const defaultSteps: BootStep[] = [
    {
      step: 1,
      titleEn: 'Power Surge & CPU Reset',
      titleSi: 'විදුලිය සැපයීම සහ CPU ආරම්භය',
      shortCode: 'PWR_ON',
      hardware: 'Power Supply Unit (PSU) & CPU',
      descriptionEn: 'User presses power button. Power supply stabilizes voltage (+12V, +5V) and sends Power-Good signal to CPU to initialize registers.',
      descriptionSi: 'පරිශීලකයා බල බොත්තම එබූ විට විදුලි සැපයුම ස්ථායී වී CPU හි රෙජිස්ටර් ආරම්භක තත්වයට පත් කරයි.',
      status: 'idle',
      examNoteEn: 'Hardware level initialization before any firmware executes.',
      examNoteSi: 'කිසිදු ස්ථීරාංගයක් ක්‍රියාත්මක වීමට පෙර සිදුවන දෘඩාංග බලගැන්වීම.'
    },
    {
      step: 2,
      titleEn: 'Execute Firmware (ROM BIOS / UEFI)',
      titleSi: 'ස්ථීරාංග (ROM BIOS) ක්‍රියාත්මක වීම',
      shortCode: 'ROM_BIOS',
      hardware: 'Read Only Memory (ROM)',
      descriptionEn: 'CPU executes the boot instructions permanently stored in ROM (Firmware). BIOS (Basic Input/Output System) takes initial control.',
      descriptionSi: 'CPU මගින් පඨන මාත්‍ර මතකයෙහි (ROM) ස්ථිරව ගබඩා කර ඇති ස්ථීරාංග (Firmware) හෙවත් BIOS උපදෙස් ක්‍රියාත්මක කරයි.',
      status: 'idle',
      examNoteEn: 'Firmware is software permanently etched in ROM chips.',
      examNoteSi: 'ස්ථීරාංග (Firmware) යනු ROM මතකයේ ස්ථිරව තැන්පත් කර ඇති මෘදුකාංගයි.'
    },
    {
      step: 3,
      titleEn: 'Power-On Self-Test (POST)',
      titleSi: 'දෘඩාංග පරීක්ෂාව (POST ක්‍රියාවලිය)',
      shortCode: 'POST_CHK',
      hardware: 'RAM, Keyboard, GPU, Motherboard Bus',
      descriptionEn: 'BIOS performs diagnostic self-tests to verify that core hardware (RAM modules, Display adapter, Keyboard, System clock) are operational.',
      descriptionSi: 'ප්‍රධාන මතකය (RAM), සංදර්ශක කාඩ්පත, යතුරුපුවරුව සහ අනෙකුත් අත්‍යවශ්‍ය උපාංග නිවැරදිව ක්‍රියා කරන්නේ දැයි පරීක්ෂා කෙරේ.',
      status: 'idle',
      examNoteEn: 'POST generates diagnostic beep codes or screen error codes if hardware fails.',
      examNoteSi: 'දෘඩාංග දෝෂයක් ඇත්නම් POST මගින් බීප් නාද (Beep Codes) නිකුත් කරයි.'
    },
    {
      step: 4,
      titleEn: 'Load OS into RAM (The Bootloader)',
      titleSi: 'මෙහෙයුම් පද්ධතිය RAM මතකයට පැටවීම',
      shortCode: 'OS_LOAD',
      hardware: 'Secondary Storage (HDD/SSD) ➔ Primary Memory (RAM)',
      descriptionEn: 'BIOS identifies the Boot Drive (HDD/SSD), reads Master Boot Record (MBR/GPT), and copies core OS Kernel files into RAM.',
      descriptionSi: 'Boot Drive (දෘඩ තැටිය) හඳුනාගෙන, එහි ඇති මෙහෙයුම් පද්ධතියේ ප්‍රධාන ලිපිගොනු සසම්භාවී පිවිසුම් මතකයට (RAM) පිටපත් කරයි.',
      status: 'idle',
      examNoteEn: 'Booting is strictly defined as loading the OS from Secondary Storage into RAM.',
      examNoteSi: 'Booting යනු මෙහෙයුම් පද්ධතියක් ද්විතීයික ආචයනයෙන් ප්‍රධාන මතකයට (RAM) ප්‍රවේශ කර ගැනීමයි.'
    },
    {
      step: 5,
      titleEn: 'Control Handover & User Shell',
      titleSi: 'පාලනය මෙහෙයුම් පද්ධතියට ලැබීම හා UI ආරම්භය',
      shortCode: 'SHELL_OK',
      hardware: 'GPU & Monitor (User Interface)',
      descriptionEn: 'OS initializes device drivers, system services, and launches the User Interface (GUI desktop or CLI login prompt).',
      descriptionSi: 'මෙහෙයුම් පද්ධතිය පරිගණකයේ සම්පූර්ණ පාලනය ලබාගෙන පරිශීලකයාට ප්‍රස්ථාරික (GUI) හෝ විධාන පේළි (CLI) අතුරුමුහුණත ඉදිරිපත් කරයි.',
      status: 'idle',
      examNoteEn: 'At this stage, the computer is ready to execute Application Software.',
      examNoteSi: 'මෙම අවස්ථාවේ දී පරිගණකය යෙදුම් මෘදුකාංග ක්‍රියාත්මක කිරීමට සූදානම් වේ.'
    }
  ];

  const [steps, setSteps] = useState<BootStep[]>(defaultSteps);

  // Auto-boot effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isAutoBooting && isPoweredOn) {
      if (currentStepIndex < steps.length - 1) {
        timeout = setTimeout(() => {
          const nextIndex = currentStepIndex + 1;
          
          // Check for simulated faults
          if (simulateFault === 'ram_fault' && nextIndex === 2) {
            sound.playError();
            setSteps(prev => prev.map((s, idx) => idx === 2 ? { ...s, status: 'error' } : s));
            setIsAutoBooting(false);
            return;
          }
          if (simulateFault === 'disk_fault' && nextIndex === 3) {
            sound.playError();
            setSteps(prev => prev.map((s, idx) => idx === 3 ? { ...s, status: 'error' } : s));
            setIsAutoBooting(false);
            return;
          }

          sound.playSnap();
          setCurrentStepIndex(nextIndex);
          setSteps(prev => prev.map((s, idx) => idx === nextIndex ? { ...s, status: 'success' } : s));

          if (nextIndex === steps.length - 1) {
            sound.playVictory();
            setIsAutoBooting(false);
          }
        }, 1100);
      }
    }
    return () => clearTimeout(timeout);
  }, [isAutoBooting, currentStepIndex, isPoweredOn, simulateFault, steps.length]);

  const handlePowerToggle = () => {
    sound.playClick(500);
    if (!isPoweredOn) {
      setIsPoweredOn(true);
      setCurrentStepIndex(0);
      setSteps(defaultSteps.map((s, i) => i === 0 ? { ...s, status: 'success' } : { ...s, status: 'idle' }));
      setIsAutoBooting(true);
    } else {
      setIsPoweredOn(false);
      setCurrentStepIndex(-1);
      setIsAutoBooting(false);
      setSteps(defaultSteps);
    }
  };

  const handleManualNextStep = () => {
    if (!isPoweredOn) {
      handlePowerToggle();
      return;
    }
    if (currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;

      if (simulateFault === 'ram_fault' && nextIndex === 2) {
        sound.playError();
        setSteps(prev => prev.map((s, idx) => idx === 2 ? { ...s, status: 'error' } : s));
        return;
      }
      if (simulateFault === 'disk_fault' && nextIndex === 3) {
        sound.playError();
        setSteps(prev => prev.map((s, idx) => idx === 3 ? { ...s, status: 'error' } : s));
        return;
      }

      sound.playSnap();
      setCurrentStepIndex(nextIndex);
      setSteps(prev => prev.map((s, idx) => idx === nextIndex ? { ...s, status: 'success' } : s));
      if (nextIndex === steps.length - 1) {
        sound.playVictory();
      }
    }
  };

  const handleReset = () => {
    sound.playClick(400);
    setIsPoweredOn(false);
    setCurrentStepIndex(-1);
    setIsAutoBooting(false);
    setSimulateFault(null);
    setSteps(defaultSteps);
  };

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      qEn: 'Which memory type permanently holds the initial computer booting firmware?',
      qSi: 'පරිගණකයේ මූලික පණගැන්වීමේ ස්ථීරාංග (Firmware) ස්ථිරව ගබඩා කර ඇත්තේ කුමන මතකයේද?',
      options: ['RAM (Random Access Memory)', 'ROM (Read Only Memory)', 'Hard Disk Drive (HDD)', 'Cache Memory'],
      correct: 1,
      explEn: 'ROM contains the permanent BIOS/UEFI firmware required to initiate the boot process.',
      explSi: 'පරිගණකය පණගැන්වීමට අවශ්‍ය BIOS ස්ථීරාංග ස්ථිරව තැන්පත් කර ඇත්තේ ROM මතකයේය.'
    },
    {
      id: 2,
      qEn: 'What is the primary role of the Power-On Self-Test (POST)?',
      qSi: 'POST (Power-On Self-Test) ක්‍රියාවලියේ ප්‍රධාන කාර්යභාරය කුමක්ද?',
      options: [
        'Formatting the secondary storage partitions',
        'Verifying if core hardware devices are functioning properly',
        'Compiling Pascal programming source code',
        'Encrypting the user desktop password'
      ],
      correct: 1,
      explEn: 'POST checks that CPU, RAM, keyboard, and display hardware are working before loading the OS.',
      explSi: 'මෙහෙයුම් පද්ධතිය පැටවීමට පෙර පරිගණකයේ දෘඩාංග නිසි ලෙස ක්‍රියා කරන්නේදැයි POST මගින් තහවුරු කරයි.'
    },
    {
      id: 3,
      qEn: 'What does "Booting" strictly mean in computer science?',
      qSi: 'පරිගණක විද්‍යාවේ දී "Booting" යන්නෙහි නිශ්චිත අර්ථය කුමක්ද?',
      options: [
        'Deleting corrupt files from the recycle bin',
        'Loading an Operating System into the computer\'s RAM',
        'Connecting the computer to the Internet',
        'Converting binary code into hexadecimal colors'
      ],
      correct: 1,
      explEn: 'Booting is the exact process of loading the Operating System into RAM from secondary storage.',
      explSi: 'Booting යනු මෙහෙයුම් පද්ධතියක් ද්විතීයික ආචයනයෙන් පරිගණකයේ ප්‍රධාන මතකයට (RAM) ප්‍රවේශ කර ගැනීමයි.'
    }
  ];

  const handleSelectQuiz = (qId: number, optIdx: number) => {
    sound.playClick();
    setSelectedQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleEvaluateQuiz = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedQuizAnswers[q.id] === q.correct) correct++;
    });
    setQuizScore(correct);
    if (correct === QUIZ_QUESTIONS.length) {
      sound.playVictory();
    } else {
      sound.playSuccess();
    }
  };

  return (
    <div className="space-y-6">
      {/* Station Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              STATION 01 • සීතල පණගැන්වීම
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Firmware, POST & RAM Loading
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-teal-400" />
            The Cold-Boot Pipeline (පරිගණකය පණගැන්වීමේ ක්‍රියාවලිය)
          </h2>
          <p className="text-xs text-slate-300">
            From power surge to ROM BIOS firmware execution, POST diagnostic testing, and loading OS kernel into RAM.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { sound.playClick(); setActiveTab('pipeline'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'pipeline'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Interactive Pipeline
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('post_lab'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'post_lab'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            POST Diagnostic Lab
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('exam_quiz'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'exam_quiz'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Past Paper Check
          </button>
        </div>
      </div>

      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Canvas: Virtual Machine Screen & Visual Architecture */}
          <div className="lg:col-span-7 space-y-4">
            {/* Monitor Screen Frame */}
            <div className="rounded-2xl bg-slate-950 border-2 border-slate-800 p-4 shadow-2xl relative overflow-hidden">
              {/* Screen Top Bezel */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isPoweredOn ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
                  <span>SYSTEM_POWER: {isPoweredOn ? 'ONLINE (+12V ACTIVE)' : 'STANDBY (0V)'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>RAM: {currentStepIndex >= 3 ? '4096MB LOADED' : 'STANDBY'}</span>
                  <span>BIOS v4.19</span>
                </div>
              </div>

              {/* Screen Display Area */}
              <div className="min-h-[260px] my-3 rounded-xl bg-black/90 p-4 font-mono text-xs text-emerald-400 flex flex-col justify-between border border-emerald-950">
                {!isPoweredOn ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-600 py-12 space-y-2">
                    <Power className="w-12 h-12 text-slate-700 animate-pulse" />
                    <p className="font-sans font-semibold text-sm">System Powered Off</p>
                    <p className="text-[11px] text-slate-600">Press "Power Switch" below to initiate Cold Booting</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-emerald-900/50 pb-1">
                      <span>Phoenix-Award BIOS v6.00PG, An Energy Star Ally</span>
                      <span>CPU: 3.40 GHz</span>
                    </div>

                    <div className="space-y-1 pt-1 text-[12px]">
                      {currentStepIndex >= 0 && (
                        <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="text-teal-300">
                          &gt; [01] Power Surge OK. CPU Registers Reset Vector 0xFFFF0 initialized.
                        </motion.div>
                      )}
                      {currentStepIndex >= 1 && (
                        <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="text-cyan-300">
                          &gt; [02] ROM Firmware BIOS Executed. Reading CMOS system settings...
                        </motion.div>
                      )}
                      {currentStepIndex >= 2 && (
                        <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className={steps[2].status === 'error' ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                          {steps[2].status === 'error' ? (
                            <span>&gt; [03] POST ERROR: RAM Integrity Check Failed! Beep Code: 1 Long, 2 Short.</span>
                          ) : (
                            <span>&gt; [03] POST (Power-On Self-Test) Completed: RAM (OK), GPU (OK), Keyboard (OK).</span>
                          )}
                        </motion.div>
                      )}
                      {currentStepIndex >= 3 && (
                        <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className={steps[3].status === 'error' ? 'text-rose-400 font-bold' : 'text-amber-300'}>
                          {steps[3].status === 'error' ? (
                            <span>&gt; [04] BOOT DISK ERROR: No bootable media found in SATA 0!</span>
                          ) : (
                            <span>&gt; [04] Boot Drive Located (SATA SSD). Copying OS Kernel image into RAM [2048 MB]...</span>
                          )}
                        </motion.div>
                      )}
                      {currentStepIndex >= 4 && (
                        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 p-3 rounded-lg bg-teal-950/60 border border-teal-500/40 text-teal-200">
                          <div className="flex items-center gap-2 font-bold text-sm text-teal-300">
                            <Sparkles className="w-4 h-4 text-teal-400" />
                            <span>OPERATING SYSTEM READY: Desktop Shell Initialized!</span>
                          </div>
                          <p className="text-[11px] text-teal-400/80 font-sans mt-0.5">
                            Control transferred to OS GUI. Ready for Application Software (Word, Spreadsheets, Pascal).
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Terminal Status Bar */}
                <div className="pt-2 border-t border-emerald-950 flex items-center justify-between text-[10px] text-slate-500">
                  <span>PRESS DEL FOR SETUP • F12 BOOT MENU</span>
                  <span>STAGE: {currentStepIndex >= 0 ? `${currentStepIndex + 1}/5` : '0/5'}</span>
                </div>
              </div>

              {/* Hardware Status Indicators */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                <div className={`p-2 rounded-lg border ${currentStepIndex >= 0 ? 'bg-teal-950/50 border-teal-500/40 text-teal-300' : 'bg-slate-900 border-slate-800 text-slate-600'}`}>
                  <Microchip className="w-3.5 h-3.5 mx-auto mb-1" />
                  <span>CPU / PWR</span>
                </div>
                <div className={`p-2 rounded-lg border ${currentStepIndex >= 1 ? 'bg-cyan-950/50 border-cyan-500/40 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-600'}`}>
                  <ShieldCheck className="w-3.5 h-3.5 mx-auto mb-1" />
                  <span>ROM BIOS</span>
                </div>
                <div className={`p-2 rounded-lg border ${currentStepIndex >= 2 ? (steps[2].status === 'error' ? 'bg-rose-950/50 border-rose-500 text-rose-300' : 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300') : 'bg-slate-900 border-slate-800 text-slate-600'}`}>
                  <Layers className="w-3.5 h-3.5 mx-auto mb-1" />
                  <span>POST SANITY</span>
                </div>
                <div className={`p-2 rounded-lg border ${currentStepIndex >= 3 ? (steps[3].status === 'error' ? 'bg-rose-950/50 border-rose-500 text-rose-300' : 'bg-amber-950/50 border-amber-500/40 text-amber-300') : 'bg-slate-900 border-slate-800 text-slate-600'}`}>
                  <HardDrive className="w-3.5 h-3.5 mx-auto mb-1" />
                  <span>RAM LOADER</span>
                </div>
              </div>
            </div>

            {/* Tactile Control Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePowerToggle}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all ${
                    isPoweredOn 
                      ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30' 
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                  }`}
                >
                  <Power className="w-4 h-4" />
                  <span>{isPoweredOn ? 'Power OFF' : 'Power ON (Cold Boot)'}</span>
                </button>

                <button
                  onClick={handleManualNextStep}
                  disabled={!isPoweredOn || isAutoBooting || currentStepIndex >= steps.length - 1}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <ChevronRight className="w-4 h-4 text-teal-400" />
                  <span>Next Step</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Control Deck: Step-by-Step Pipeline Explainer */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <Layers className="w-4 h-4" />
                  Chronological Boot Stages (5 පියවර)
                </span>
                <span className="font-mono text-teal-400">O/L Core Syllabus</span>
              </div>

              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {steps.map((s, idx) => {
                  const isActive = currentStepIndex === idx;
                  const isCompleted = currentStepIndex > idx;
                  const isPending = currentStepIndex < idx;

                  return (
                    <motion.div
                      key={s.step}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        borderColor: isActive ? 'rgba(20, 184, 166, 0.6)' : isCompleted ? 'rgba(16, 185, 129, 0.3)' : 'rgba(51, 65, 85, 0.4)'
                      }}
                      className={`p-3 rounded-xl border transition-all ${
                        isActive 
                          ? 'bg-teal-950/40 border-teal-500 shadow-md shadow-teal-500/10' 
                          : isCompleted 
                            ? 'bg-emerald-950/20 border-emerald-500/30' 
                            : 'bg-slate-900/60 border-slate-800/80 opacity-70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full text-[11px] font-mono font-black flex items-center justify-center ${
                            isCompleted ? 'bg-emerald-500 text-slate-950' : isActive ? 'bg-teal-400 text-slate-950 animate-pulse' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {s.step}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-white">{s.titleEn}</h4>
                            <p className="text-[10px] text-teal-400 font-sinhala">{s.titleSi}</p>
                          </div>
                        </div>

                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {isActive && <Zap className="w-4 h-4 text-teal-400 animate-bounce shrink-0" />}
                      </div>

                      <div className="mt-2 text-[11px] text-slate-300 space-y-1">
                        <p>{s.descriptionEn}</p>
                        <p className="text-slate-400 font-sinhala text-[10px]">{s.descriptionSi}</p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="font-mono text-cyan-400">HW: {s.hardware}</span>
                        <span className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-[9px] text-slate-300">{s.shortCode}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POST Diagnostic Lab Tab */}
      {activeTab === 'post_lab' && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              POST (Power-On Self-Test) Hardware Sanity Lab
            </h3>
            <p className="text-xs text-slate-300">
              Test how BIOS detects missing or faulty hardware components before handing over control to the OS bootloader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Standard Healthy Boot */}
            <div 
              onClick={() => { sound.playClick(); setSimulateFault(null); }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                simulateFault === null 
                  ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400">Healthy Hardware</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-300 font-medium">All hardware passes POST successfully. 1 short beep generated. OS boots smoothly.</p>
              <p className="text-[11px] text-emerald-400 font-sinhala mt-1">දෘඩාංග සියල්ල නිවැරදියි. සාමාන්‍ය පණගැන්වීම.</p>
            </div>

            {/* RAM Fault Simulation */}
            <div 
              onClick={() => { sound.playClick(); setSimulateFault('ram_fault'); }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                simulateFault === 'ram_fault' 
                  ? 'bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-500/10' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400">Faulty RAM Module</span>
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </div>
              <p className="text-xs text-slate-300 font-medium">POST detects bad memory address parity. Boot halts with continuous alarm beeps.</p>
              <p className="text-[11px] text-rose-400 font-sinhala mt-1">ප්‍රධාන මතක දෝෂය (RAM Fault). පණගැන්වීම නතර වේ.</p>
            </div>

            {/* No Boot Disk */}
            <div 
              onClick={() => { sound.playClick(); setSimulateFault('disk_fault'); }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                simulateFault === 'disk_fault' 
                  ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/10' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400">Missing Boot Disk</span>
                <XCircle className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xs text-slate-300 font-medium">POST passes, but bootloader fails to locate MBR in HDD/SSD. Displays "Insert System Disk".</p>
              <p className="text-[11px] text-amber-400 font-sinhala mt-1">Boot Drive සොයාගත නොහැක.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-teal-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span>Current Mode: </span>
                <span className="font-bold text-white">
                  {simulateFault === null ? 'All Systems Green (Normal Boot)' : simulateFault === 'ram_fault' ? 'Simulating Faulty RAM Parity' : 'Simulating Disconnected Boot Drive'}
                </span>
              </div>
            </div>
            <button
              onClick={() => { sound.playClick(); setActiveTab('pipeline'); }}
              className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-teal-400"
            >
              <span>Test on Canvas</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Past Paper Check Tab */}
      {activeTab === 'exam_quiz' && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-extrabold text-white">O/L Examination Checkpoint • Booting Sequence</h3>
              <p className="text-xs text-teal-400 font-sinhala">පසුගිය විභාග ප්‍රශ්න පත්‍ර ආශ්‍රිත පුහුණුව</p>
            </div>
            {quizScore !== null && (
              <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-teal-500/20 text-teal-300 border border-teal-500/40">
                Score: {quizScore} / {QUIZ_QUESTIONS.length}
              </span>
            )}
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS.map((q, qIndex) => (
              <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">Q{qIndex + 1}. {q.qEn}</h4>
                  <p className="text-[11px] text-slate-400 font-sinhala">{q.qSi}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = selectedQuizAnswers[q.id] === optIndex;
                    const isEvaluated = quizScore !== null;
                    const isCorrect = q.correct === optIndex;

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelectQuiz(q.id, optIndex)}
                        className={`p-2.5 rounded-lg text-left text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-teal-950/60 border-2 border-teal-400 text-white'
                            : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-slate-800'
                        } ${isEvaluated && isCorrect ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200' : ''}`}
                      >
                        <span>{opt}</span>
                        {isEvaluated && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {quizScore !== null && (
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-teal-300">
                    <p className="font-semibold">{q.explEn}</p>
                    <p className="text-slate-400 font-sinhala text-[10px] mt-0.5">{q.explSi}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleEvaluateQuiz}
              disabled={Object.keys(selectedQuizAnswers).length < QUIZ_QUESTIONS.length}
              className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20"
            >
              Verify All Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
