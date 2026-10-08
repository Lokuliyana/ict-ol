'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  RotateCw,
  Gauge
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface CacheItem {
  address: string;
  data: string;
}

export function CacheMechanismToy() {
  const [cacheItems, setCacheItems] = useState<CacheItem[]>([
    { address: '0x01', data: 'ADD R1, R2' },
    { address: '0x02', data: 'VALUE: 15' },
  ]);

  const [requestedAddress, setRequestedAddress] = useState<string>('0x01');
  const [status, setStatus] = useState<'idle' | 'checking' | 'hit' | 'miss'>('idle');
  const [clockCyclesSaved, setClockCyclesSaved] = useState(0);

  const ramItems: CacheItem[] = [
    { address: '0x01', data: 'ADD R1, R2' },
    { address: '0x02', data: 'VALUE: 15' },
    { address: '0x03', data: 'VALUE: 8' },
    { address: '0x04', data: 'STORE 0x90' },
  ];

  const handleFetch = (addr: string) => {
    sound.playClick(600);
    setRequestedAddress(addr);
    setStatus('checking');

    setTimeout(() => {
      const inCache = cacheItems.some((c) => c.address === addr);
      if (inCache) {
        sound.playSuccessDing();
        setStatus('hit');
        setClockCyclesSaved((prev) => prev + 10);
      } else {
        sound.playBlip(300);
        setStatus('miss');
        // Copy to cache
        const itemInRam = ramItems.find((r) => r.address === addr);
        if (itemInRam) {
          setTimeout(() => {
            setCacheItems((prev) => [itemInRam, ...prev.slice(0, 2)]);
          }, 800);
        }
      }
    }, 500);
  };

  const resetToy = () => {
    sound.playClick();
    setCacheItems([
      { address: '0x01', data: 'ADD R1, R2' },
      { address: '0x02', data: 'VALUE: 15' },
    ]);
    setStatus('idle');
    setClockCyclesSaved(0);
  };

  return (
    <div className="bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-5">
      <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3 flex-wrap gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
            Textbook Figure 2.42: Cache Memory Mediation
          </span>
          <h4 className="text-base font-black text-white">Cache Hit vs. Cache Miss Simulator</h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-emerald-400 font-bold">
            Clock Cycles Saved: {clockCyclesSaved}
          </span>
          <button onClick={resetToy} className="text-xs text-slate-400 hover:text-white">
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-300 font-sinhala">
        CPU විසින් දත්ත ඉල්ලුම් කරන විට ප්‍රථමයෙන් <strong>කෑෂ් මතකය (Cache Memory)</strong> පරීක්ෂා කරයි. එහි දත්ත තිබේ නම් (Cache Hit) ක්ෂණිකව ලබා ගනියි. නොමැති නම් (Cache Miss) RAM වෙතින් ලබාගෙන Cache තුළ තැන්පත් කරයි.
      </p>

      {/* 3-Tier Architecture Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-4">
        {/* Tier 1: CPU */}
        <div className="p-4 rounded-2xl bg-indigo-950/80 border-2 border-indigo-500 text-center space-y-2">
          <div className="text-[10px] font-mono text-indigo-300">REQUESTING UNIT</div>
          <div className="text-base font-black text-white font-mono flex items-center justify-center gap-1.5">
            <Cpu className="w-5 h-5 text-indigo-400" /> CPU Core
          </div>
          <div className="text-xs font-mono px-2 py-1 bg-black/40 rounded text-cyan-300">
            Request: {requestedAddress}
          </div>
        </div>

        {/* Tier 2: Cache Memory */}
        <div
          className={`p-4 rounded-2xl border-2 text-center space-y-2 transition-all ${
            status === 'hit'
              ? 'bg-emerald-950/80 border-emerald-400 shadow-[0_0_20px_#10b981]'
              : status === 'miss'
              ? 'bg-amber-950/80 border-amber-400'
              : 'bg-slate-900 border-slate-700'
          }`}
        >
          <div className="text-[10px] font-mono text-amber-300">INTERMEDIARY HIGH-SPEED</div>
          <div className="text-sm font-black text-white font-mono flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Cache Memory (L1/L2)
          </div>
          <div className="space-y-1 text-[11px] font-mono">
            {cacheItems.map((c) => (
              <div key={c.address} className="p-1 rounded bg-black/40 text-slate-200">
                {c.address}: {c.data}
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: Main Memory RAM */}
        <div className="p-4 rounded-2xl bg-cyan-950/80 border-2 border-cyan-500 text-center space-y-2">
          <div className="text-[10px] font-mono text-cyan-300">PRIMARY STORAGE</div>
          <div className="text-sm font-black text-white font-mono flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" /> Main RAM
          </div>
          <div className="space-y-1 text-[11px] font-mono">
            {ramItems.map((r) => (
              <div key={r.address} className="p-1 rounded bg-black/40 text-slate-300">
                {r.address}: {r.data}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Request Bar */}
      <div className="p-4 bg-slate-900/90 rounded-2xl border border-indigo-900/40 space-y-2">
        <div className="text-xs font-bold text-slate-300">Select address for CPU to read:</div>
        <div className="flex flex-wrap gap-2">
          {ramItems.map((item) => (
            <button
              key={item.address}
              onClick={() => handleFetch(item.address)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 border border-slate-700 text-xs font-mono font-bold transition-all"
            >
              Fetch {item.address} ({item.data})
            </button>
          ))}
        </div>
      </div>

      {/* Status Output Banner */}
      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3.5 rounded-2xl border text-xs font-mono flex items-center justify-between ${
            status === 'hit'
              ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
              : status === 'miss'
              ? 'bg-amber-950/50 border-amber-500 text-amber-200'
              : 'bg-indigo-950/50 border-indigo-500 text-indigo-200'
          }`}
        >
          {status === 'hit' && (
            <span>
              🎯 <strong>CACHE HIT!</strong> Address {requestedAddress} found directly in Cache. High speed transfer completed without accessing slow RAM (+10 cycles saved).
            </span>
          )}
          {status === 'miss' && (
            <span>
              ⚠️ <strong>CACHE MISS!</strong> Address {requestedAddress} not in Cache. CPU fetched from RAM and copied it into Cache for upcoming requests.
            </span>
          )}
          {status === 'checking' && <span>Checking Cache lines...</span>}
        </motion.div>
      )}
    </div>
  );
}
