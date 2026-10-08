'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  DollarSign, 
  ShieldAlert, 
  Layers, 
  Wrench, 
  FileText, 
  Stamp,
  HelpCircle
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface Ticket {
  id: string;
  issue: string;
  expectedType: 'corrective' | 'adaptive' | 'perfective' | 'preventive';
}

const SUPPORT_TICKETS: Ticket[] = [
  { id: 't1', issue: 'Bug: System crashes when printing invoices with >10 line items.', expectedType: 'corrective' },
  { id: 't2', issue: 'Legal: Government raised national VAT from 15% to 18%. Update tax engine.', expectedType: 'adaptive' },
  { id: 't3', issue: 'Feature: Users requested an optional Dark Mode user interface theme.', expectedType: 'perfective' },
  { id: 't4', issue: 'Refactor: Re-indexing database and upgrading security certificates to avoid future slowdowns.', expectedType: 'preventive' },
];

export function RolloutCommandMap() {
  const [activeTab, setActiveTab] = useState<'deployment' | 'maintenance'>('deployment');

  // Deployment Strategy State
  const [selectedStrategy, setSelectedStrategy] = useState<'direct' | 'parallel' | 'pilot' | 'phased'>('parallel');

  // Maintenance Ticket Desk State
  const [ticketStamps, setTicketStamps] = useState<Record<string, string>>({});
  const [ticketResults, setTicketResults] = useState<Record<string, boolean>>({});

  const handleStrategySelect = (strat: 'direct' | 'parallel' | 'pilot' | 'phased') => {
    sound.playClick(600);
    setSelectedStrategy(strat);
    if (strat === 'parallel') sound.playSuccess();
    else if (strat === 'direct') sound.playError();
  };

  const handleStampTicket = (ticketId: string, stampType: string) => {
    sound.playClick(600);
    const updated = { ...ticketStamps, [ticketId]: stampType };
    setTicketStamps(updated);

    const ticket = SUPPORT_TICKETS.find(t => t.id === ticketId);
    if (ticket) {
      const isCorrect = ticket.expectedType === stampType;
      if (isCorrect) sound.playSuccess();
      else sound.playError();
      setTicketResults(prev => ({ ...prev, [ticketId]: isCorrect }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Station Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Rocket className="w-4 h-4" />
              <span>STATION 05 • DEPLOYMENT & MAINTENANCE (ස්ථාපන ක්‍රමවේද හා නඩත්තුව)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Rollout Strategies & Maintenance Desk (ස්ථාපන ක්‍රම 4 හා නඩත්තු වර්ග 4)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Simulate Risk vs Cost trade-offs across Direct, Parallel, Pilot, and Phased deployment strategies (2020 P2 Q06) and classify Corrective, Adaptive, Perfective, and Preventive maintenance tickets.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('deployment'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'deployment'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              4 Deployment Strategies
            </button>
            <button
              onClick={() => { sound.playClick(600); setActiveTab('maintenance'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'maintenance'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              4 Maintenance Ticket Types
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'deployment' && (
          <motion.div
            key="deployment"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Interactive Risk vs Cost Gauges */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[380px] shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-orange-400" />
                  DEPLOYMENT RISK & COST DYNAMICS (අවදානම හා පිරිවැය)
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  Strategy: {selectedStrategy}
                </span>
              </div>

              {/* Live Gauges */}
              <div className="my-auto py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Risk Gauge */}
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center justify-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                    OPERATIONAL RISK (අවදානම් මට්ටම)
                  </div>
                  <div className={`text-2xl font-black font-mono ${
                    selectedStrategy === 'direct' ? 'text-rose-500 animate-pulse' : selectedStrategy === 'parallel' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {selectedStrategy === 'direct' && 'EXTREME (Highest)'}
                    {selectedStrategy === 'parallel' && 'MINIMAL (Lowest)'}
                    {selectedStrategy === 'pilot' && 'LOW (Contained)'}
                    {selectedStrategy === 'phased' && 'MODERATE'}
                  </div>
                  <p className="text-[10px] text-slate-400">
                    {selectedStrategy === 'direct' && 'No backup safety net. If new system crashes, business grinds to a halt!'}
                    {selectedStrategy === 'parallel' && 'Zero risk. If new system fails, old operational system takes over instantly.'}
                    {selectedStrategy === 'pilot' && 'Risk is isolated to 1 single branch without endangering headquarters.'}
                    {selectedStrategy === 'phased' && 'Modules are rolled out progressively over time.'}
                  </p>
                </div>

                {/* Cost Gauge */}
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center justify-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                    RUNNING COST (ක්‍රියාත්මක පිරිවැය)
                  </div>
                  <div className={`text-2xl font-black font-mono ${
                    selectedStrategy === 'parallel' ? 'text-rose-400' : selectedStrategy === 'direct' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {selectedStrategy === 'direct' && 'LOWEST ($)'}
                    {selectedStrategy === 'parallel' && 'HIGHEST ($$$$)'}
                    {selectedStrategy === 'pilot' && 'MODERATE ($$)'}
                    {selectedStrategy === 'phased' && 'BALANCED ($$$)'}
                  </div>
                  <p className="text-[10px] text-slate-400">
                    {selectedStrategy === 'direct' && 'Immediate switch saves hardware & double labor expenses.'}
                    {selectedStrategy === 'parallel' && 'Staff must enter data twice into both systems during trial.'}
                    {selectedStrategy === 'pilot' && 'Only 1 branch incurs dual operational expenses.'}
                    {selectedStrategy === 'phased' && 'Expenses spread across sequential module deployment phases.'}
                  </p>
                </div>

              </div>

              <div className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                💡 <strong>Banking & Critical Systems (2020 O/L P2 Q06):</strong> Banks must choose <strong>Parallel Deployment</strong> because financial transactions require 100% continuous uptime and a live safety net.
              </div>
            </div>

            {/* Right: 4 Strategy Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-slate-400 font-bold">
                SELECT DEPLOYMENT STRATEGY:
              </div>

              {[
                { id: 'direct', nameEn: '1. Direct Deployment (සෘජු)', desc: 'Old stops completely; new starts immediately. High risk, lowest cost.' },
                { id: 'parallel', nameEn: '2. Parallel Deployment (සමාන්තර)', desc: 'Old and new run side-by-side for a trial period. Lowest risk, highest cost.' },
                { id: 'pilot', nameEn: '3. Pilot Deployment (නියමු)', desc: 'Deployed in one branch (e.g. Kandy) first as a live test site before company rollout.' },
                { id: 'phased', nameEn: '4. Phased Deployment (අදියරගත)', desc: 'System is introduced module by module over scheduled time periods.' },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => handleStrategySelect(st.id as any)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all space-y-1 ${
                    selectedStrategy === st.id
                      ? 'bg-orange-600/30 border-orange-400 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{st.nameEn}</div>
                  <p className="text-[11px] text-slate-400">{st.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'maintenance' && (
          <motion.div
            key="maintenance"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-indigo-400" />
                Support Ticket Classifier (නඩත්තු වර්ග 4 හඳුනාගැනීම)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Classify incoming customer tickets into Corrective (දෝෂ නිවැරදි කිරීම), Adaptive (අනුවර්තනය), Perfective (පරිපූර්ණ කිරීම), or Preventive (වැළැක්වීම).
              </p>
            </div>

            <div className="space-y-4">
              {SUPPORT_TICKETS.map((ticket) => {
                const stamped = ticketStamps[ticket.id];
                const isCorrect = ticketResults[ticket.id];

                return (
                  <div
                    key={ticket.id}
                    className={`p-4 rounded-2xl border transition-all space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : stamped && !isCorrect
                        ? 'bg-rose-950/20 border-rose-500/50 shadow-md shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="text-xs font-bold text-white">
                        {ticket.issue}
                      </div>
                      {isCorrect && (
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                          CORRECT STAMP ✓
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {[
                        { id: 'corrective', label: '1. Corrective (නිවැරදි කිරීම)' },
                        { id: 'adaptive', label: '2. Adaptive (අනුවර්තනය)' },
                        { id: 'perfective', label: '3. Perfective (පරිපූර්ණ)' },
                        { id: 'preventive', label: '4. Preventive (වැළැක්වීම)' },
                      ].map((btn) => (
                        <button
                          key={btn.id}
                          onClick={() => handleStampTicket(ticket.id, btn.id)}
                          className={`p-2 rounded-xl text-left border text-[10px] font-bold transition-all truncate ${
                            stamped === btn.id
                              ? btn.id === ticket.expectedType
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
