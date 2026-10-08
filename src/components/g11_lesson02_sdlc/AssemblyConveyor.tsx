'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  DollarSign, 
  RotateCcw,
  Play,
  Layers,
  Activity
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface Phase {
  id: string;
  order: number;
  nameEn: string;
  nameSi: string;
  desc: string;
}

const SDLC_PHASES: Phase[] = [
  { id: 'p1', order: 1, nameEn: '1. Identification of Requirements', nameSi: 'අවශ්‍යතා හඳුනාගැනීම', desc: 'Identify problem scope, user needs & feasibility.' },
  { id: 'p2', order: 2, nameEn: '2. System Analysis', nameSi: 'පද්ධති විශ්ලේෂණය', desc: 'Examine current manual/existing system with DFDs.' },
  { id: 'p3', order: 3, nameEn: '3. System Design', nameSi: 'පද්ධති සැලසුම්කරණය', desc: 'Design UI screens, database tables & algorithm flowcharts.' },
  { id: 'p4', order: 4, nameEn: '4. Coding / Software Development', nameSi: 'ක්‍රමලේඛනය / කේතනය', desc: 'Transform design blueprints into executable program code.' },
  { id: 'p5', order: 5, nameEn: '5. Testing', nameSi: 'පද්ධති පරීක්ෂාව', desc: 'Execute Unit, Integration, System & UAT with test data.' },
  { id: 'p6', order: 6, nameEn: '6. Deployment', nameSi: 'පද්ධතිය ස්ථාපනය', desc: 'Rollout to users via Direct, Parallel, Pilot, or Phased.' },
  { id: 'p7', order: 7, nameEn: '7. Maintenance', nameSi: 'නඩත්තුව', desc: 'Ongoing bug fixes (Corrective), updates (Adaptive, Perfective).' },
];

export function AssemblyConveyor() {
  const [activeSubTab, setActiveSubTab] = useState<'conveyor' | 'cost_multiplier'>('conveyor');

  // Assembly Conveyor State
  const [slots, setSlots] = useState<(Phase | null)[]>([null, null, null, null, null, null, null]);
  const [availablePhases, setAvailablePhases] = useState<Phase[]>([
    SDLC_PHASES[4], // Testing
    SDLC_PHASES[3], // Coding
    SDLC_PHASES[0], // Requirements
    SDLC_PHASES[2], // Design
    SDLC_PHASES[5], // Deployment
    SDLC_PHASES[1], // Analysis
    SDLC_PHASES[6], // Maintenance
  ]);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isAssemblyComplete, setIsAssemblyComplete] = useState<boolean>(false);

  // Defect Cost Multiplier Phase State
  const [selectedPhaseCost, setSelectedPhaseCost] = useState<number>(1);

  const handlePlacePhase = (phase: Phase, slotIndex: number) => {
    sound.playClick(600);

    // Rule validation check
    const expectedOrder = slotIndex + 1;
    if (phase.order !== expectedOrder) {
      sound.playError();
      if (phase.id === 'p5' && slotIndex < 3) {
        setValidationError(`Sequence Error! You cannot test software before it has been coded/developed!`);
      } else if (phase.id === 'p4' && slotIndex < 2) {
        setValidationError(`Sequence Error! You cannot code software before creating the system design!`);
      } else {
        setValidationError(`Order Error: "${phase.nameEn}" belongs in Position ${phase.order}, not Position ${expectedOrder}!`);
      }
      return;
    }

    // Valid placement
    sound.playSuccess();
    setValidationError(null);
    const newSlots = [...slots];
    newSlots[slotIndex] = phase;
    setSlots(newSlots);
    setAvailablePhases(prev => prev.filter(p => p.id !== phase.id));

    const isAllFilled = newSlots.every(s => s !== null);
    if (isAllFilled) {
      sound.playVictory();
      setIsAssemblyComplete(true);
    }
  };

  const handleResetConveyor = () => {
    sound.playClick(450);
    setSlots([null, null, null, null, null, null, null]);
    setAvailablePhases([
      SDLC_PHASES[4],
      SDLC_PHASES[3],
      SDLC_PHASES[0],
      SDLC_PHASES[2],
      SDLC_PHASES[5],
      SDLC_PHASES[1],
      SDLC_PHASES[6],
    ]);
    setValidationError(null);
    setIsAssemblyComplete(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Boxes className="w-4 h-4" />
              <span>STATION 01 • 7-PHASE ASSEMBLY LINE (SDLC පියවර 7 අනුපිළිවෙල)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Chronological SDLC Ordering & Defect Cost (පියවර 7 හා දෝෂ පිරිවැය)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Sequence the 7 chronological phases of the System Development Life Cycle (2020 P1 Q11 & 2022 P1 Q34) and examine why early defect detection saves up to 100x repair costs.
            </p>
          </div>

          {/* Sub Tab Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveSubTab('conveyor'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeSubTab === 'conveyor'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              7-Phase Conveyor Rail
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveSubTab('cost_multiplier'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeSubTab === 'cost_multiplier'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Defect Cost Multiplier (100x)
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeSubTab === 'conveyor' ? (
          <motion.div
            key="conveyor"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  2020 P1 Q11 & 2022 P1 Q34
                </span>
                <span className="text-xs text-slate-300">
                  Snap each phase into its exact chronological slot on the assembly conveyor (1 &rarr; 7).
                </span>
              </div>

              <button
                onClick={handleResetConveyor}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Conveyor
              </button>
            </div>

            {/* Error Alert if placed wrong */}
            {validationError && (
              <div className="p-3.5 rounded-2xl bg-rose-950/80 border border-rose-500/60 text-xs font-bold text-rose-200 flex items-center gap-2.5 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Success Banner */}
            {isAssemblyComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-xs text-emerald-200 flex items-center gap-3 shadow-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">
                    🎉 7/7 SDLC Assembly Line Complete!
                  </div>
                  Requirements &rarr; Analysis &rarr; Design &rarr; Coding &rarr; Testing &rarr; Deployment &rarr; Maintenance.
                </div>
              </motion.div>
            )}

            {/* 7-Slot Linear Assembly Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {slots.map((phase, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border-2 flex flex-col justify-between h-44 transition-all ${
                    phase
                      ? 'bg-blue-950/40 border-blue-400 text-white shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 border-dashed border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-slate-800 px-2 py-0.5 rounded text-cyan-400">
                      Phase {idx + 1}
                    </span>
                    {phase && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>

                  <div className="my-auto">
                    {phase ? (
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-white leading-tight">
                          {phase.nameEn}
                        </div>
                        <div className="text-[10px] text-cyan-300 font-medium">
                          {phase.nameSi}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-[11px] font-mono text-slate-600">
                        [Slot {idx + 1} Empty]
                      </div>
                    )}
                  </div>

                  <div className="text-[9px] text-slate-500 truncate border-t border-slate-800/80 pt-1">
                    {phase ? phase.desc : 'Waiting for phase card'}
                  </div>
                </div>
              ))}
            </div>

            {/* Available Phase Cards to Drag / Snap */}
            {availablePhases.length > 0 && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-mono font-bold text-slate-400">
                  AVAILABLE PHASES TRAY (පියවර තෝරා සුදුසු අංකයට ස්ථානගත කරන්න):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {availablePhases.map((phase) => (
                    <div
                      key={phase.id}
                      className="bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-2 hover:border-slate-700 transition-all"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{phase.nameEn}</div>
                        <div className="text-[10px] text-slate-400">{phase.nameSi}</div>
                      </div>

                      <div className="flex gap-1 flex-wrap pt-1 border-t border-slate-900">
                        <span className="text-[9px] font-mono text-slate-500 self-center mr-1">Snap to:</span>
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            onClick={() => handlePlacePhase(phase, num - 1)}
                            disabled={slots[num - 1] !== null}
                            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-blue-600 text-white text-[10px] font-mono font-bold disabled:opacity-30 transition-all"
                          >
                            #{num}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="cost_multiplier"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Interactive Cost Multiplier Needle */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[360px] shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  DEFECT ESCALATION COST GAUGE (දෝෂ නිවැරදි කිරීමේ පිරිවැය)
                </span>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {selectedPhaseCost === 1 && '$100 (1x Baseline)'}
                  {selectedPhaseCost === 2 && '$300 (3x)'}
                  {selectedPhaseCost === 3 && '$600 (6x)'}
                  {selectedPhaseCost === 4 && '$1,500 (15x)'}
                  {selectedPhaseCost === 5 && '$4,000 (40x)'}
                  {selectedPhaseCost === 6 && '$10,000 (100x SPIKE!)'}
                </span>
              </div>

              {/* Visual Cost Needle */}
              <div className="my-auto py-6 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-full max-w-md h-8 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-1">
                  <motion.div
                    className={`h-full rounded-full transition-all ${
                      selectedPhaseCost === 1
                        ? 'w-[10%] bg-emerald-500'
                        : selectedPhaseCost <= 3
                        ? 'w-[35%] bg-amber-500'
                        : selectedPhaseCost === 4
                        ? 'w-[60%] bg-orange-500'
                        : selectedPhaseCost === 5
                        ? 'w-[85%] bg-rose-500'
                        : 'w-[100%] bg-gradient-to-r from-rose-600 to-red-600 animate-pulse'
                    }`}
                  />
                </div>

                <div className="text-center space-y-1">
                  <div className="text-2xl font-black text-white font-mono">
                    {selectedPhaseCost === 1 ? '1x Cost' : `${selectedPhaseCost === 2 ? '3x' : selectedPhaseCost === 3 ? '6x' : selectedPhaseCost === 4 ? '15x' : selectedPhaseCost === 5 ? '40x' : '100x'} Cost Multiplier`}
                  </div>
                  <p className="text-xs text-slate-400 max-w-sm">
                    {selectedPhaseCost === 1 && 'Catching ambiguity in Requirements costs $100 (instant document tweak).'}
                    {selectedPhaseCost === 2 && 'Catching in Analysis requires updating DFD diagrams and models.'}
                    {selectedPhaseCost === 3 && 'Catching in Design requires redesigning UI wireframes and database schemas.'}
                    {selectedPhaseCost === 4 && 'Catching in Coding requires re-writing major code modules.'}
                    {selectedPhaseCost === 5 && 'Catching in Testing requires regression re-testing the whole system.'}
                    {selectedPhaseCost === 6 && 'CRITICAL SPIKE: Post-deployment bug fixes cause customer disruption, emergency patches, data loss, and massive financial liability!'}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                💡 <strong>Software Engineering Axiom:</strong> The earlier a defect is identified, the cheaper and safer it is to remediate.
              </div>
            </div>

            {/* Right: Phase Selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold">
                SELECT DETECTION PHASE:
              </div>

              <div className="space-y-2">
                {[
                  { id: 1, name: '1. Requirements Phase', mult: '1x', color: 'emerald' },
                  { id: 2, name: '2. Analysis Phase', mult: '3x', color: 'emerald' },
                  { id: 3, name: '3. Design Phase', mult: '6x', color: 'amber' },
                  { id: 4, name: '4. Coding Phase', mult: '15x', color: 'orange' },
                  { id: 5, name: '5. Testing Phase', mult: '40x', color: 'rose' },
                  { id: 6, name: '6. Post-Deployment', mult: '100x (Catastrophic)', color: 'red' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick(500 + item.id * 50);
                      setSelectedPhaseCost(item.id);
                    }}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedPhaseCost === item.id
                        ? 'bg-amber-600/30 border-amber-400 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold text-white">{item.name}</span>
                    <span className="text-xs font-mono font-bold text-amber-400">{item.mult}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
