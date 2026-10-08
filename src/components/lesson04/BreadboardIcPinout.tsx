'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  Power, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type IcType = '7400' | '7402' | '7404' | '7408' | '7432' | '7486';

interface IcMeta {
  id: IcType;
  nameEn: string;
  nameSi: string;
  desc: string;
  gateType: string;
  gateCount: number;
}

const IC_MODELS: IcMeta[] = [
  { id: '7400', nameEn: 'IC 7400 (Quad 2-Input NAND)', nameSi: 'NAND ද්වාර 4ක් සහිත IC', desc: 'Standard pinout: 1A,1B➔1Y(Pin 3). Pin 14 Vcc, Pin 7 GND.', gateType: 'NAND', gateCount: 4 },
  { id: '7402', nameEn: 'IC 7402 (Quad 2-Input NOR)', nameSi: 'NOR ද්වාර 4ක් සහිත IC', desc: 'Special reversed pinout: 1Y(Pin 1)  1A,1B(Pins 2,3).', gateType: 'NOR', gateCount: 4 },
  { id: '7404', nameEn: 'IC 7404 (Hex Inverter NOT)', nameSi: 'NOT ද්වාර 6ක් සහිත IC', desc: 'Six independent NOT gates: 1A➔1Y, 2A➔2Y, 3A➔3Y etc.', gateType: 'NOT', gateCount: 6 },
  { id: '7408', nameEn: 'IC 7408 (Quad 2-Input AND)', nameSi: 'AND ද්වාර 4ක් සහිත IC', desc: 'Four 2-input AND gates: 1A,1B➔1Y(Pin 3).', gateType: 'AND', gateCount: 4 },
  { id: '7432', nameEn: 'IC 7432 (Quad 2-Input OR)', nameSi: 'OR ද්වාර 4ක් සහිත IC', desc: 'Four 2-input OR gates: 1A,1B➔1Y(Pin 3).', gateType: 'OR', gateCount: 4 },
  { id: '7486', nameEn: 'IC 7486 (Quad 2-Input XOR)', nameSi: 'XOR ද්වාර 4ක් සහිත IC', desc: 'Four 2-input Exclusive-OR gates: 1A,1B➔1Y(Pin 3).', gateType: 'XOR', gateCount: 4 },
];

export function BreadboardIcPinout() {
  const [selectedIc, setSelectedIc] = useState<IcType>('7400');
  const [vccConnected, setVccConnected] = useState<boolean>(false);
  const [gndConnected, setGndConnected] = useState<boolean>(false);
  
  // Test input signals on Gate 1 (Pin 1 & Pin 2)
  const [pin1Input, setPin1Input] = useState<0 | 1>(0);
  const [pin2Input, setPin2Input] = useState<0 | 1>(0);

  const curIc = IC_MODELS.find(m => m.id === selectedIc) || IC_MODELS[0];
  const isPowered = vccConnected && gndConnected;

  // Compute Gate 1 output (Pin 3 for 7400/7408/7432/7486, Pin 2 for 7404, Pin 1 for 7402)
  const computeGate1Out = (): 0 | 1 => {
    if (!isPowered) return 0;
    switch (selectedIc) {
      case '7400': // NAND: (A.B)'
        return pin1Input === 1 && pin2Input === 1 ? 0 : 1;
      case '7408': // AND: A.B
        return pin1Input === 1 && pin2Input === 1 ? 1 : 0;
      case '7432': // OR: A+B
        return pin1Input === 1 || pin2Input === 1 ? 1 : 0;
      case '7486': // XOR: A!=B
        return pin1Input !== pin2Input ? 1 : 0;
      case '7402': // NOR: (Pin 2 and Pin 3 into Pin 1)
        return pin1Input === 0 && pin2Input === 0 ? 1 : 0;
      case '7404': // NOT: Pin 1 into Pin 2
        return pin1Input === 1 ? 0 : 1;
      default:
        return 0;
    }
  };

  const gate1Out = computeGate1Out();

  const handleSelectIc = (id: IcType) => {
    sound.playClick(650);
    setSelectedIc(id);
  };

  const toggleVcc = () => {
    sound.playClick(vccConnected ? 350 : 850);
    setVccConnected(!vccConnected);
  };

  const toggleGnd = () => {
    sound.playClick(gndConnected ? 350 : 850);
    setGndConnected(!gndConnected);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & IC Selector */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 4: Virtual Breadboard & 14-Pin IC Socket</span>
              <span className="text-xs font-sinhala text-amber-400 font-normal">
                (14-Pin DIP අනුකලිත පරිපථ කෙවෙනි සැකස්ම)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Wire power rails (Pin 14 Vcc & Pin 7 GND) and test real 7400-series TTL IC pin mappings.
            </p>
          </div>
        </div>

        {/* IC Selection Chips */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto flex-wrap">
          {IC_MODELS.map(m => (
            <button
              key={m.id}
              onClick={() => handleSelectIc(m.id)}
              className={`px-2.5 py-1.5 rounded-lg font-mono transition-all ${
                selectedIc === m.id
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {m.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Breadboard Socket (Left) and Pinout Spec Sheet (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: 14-Pin DIP Package Visual Simulator */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[460px]">
          
          {/* Breadboard Dot Matrix BG */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Top Power Rails Strip */}
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              {/* VCC (+5V) Jumper Button */}
              <button
                onClick={toggleVcc}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
                  vccConnected 
                    ? 'bg-rose-600 text-white shadow-[0_0_12px_#f43f5e]' 
                    : 'bg-slate-900 text-rose-400 border border-rose-900/50 hover:border-rose-500'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Pin 14 Vcc (+5V): {vccConnected ? 'CONNECTED' : 'DISCONNECTED'}</span>
              </button>

              {/* GND (0V) Jumper Button */}
              <button
                onClick={toggleGnd}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
                  gndConnected 
                    ? 'bg-slate-700 text-white shadow-[0_0_12px_#64748b]' 
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>Pin 7 GND (0V): {gndConnected ? 'CONNECTED' : 'DISCONNECTED'}</span>
              </button>
            </div>

            {/* Power Status Badge */}
            <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
              isPowered 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse'
            }`}>
              {isPowered ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
              <span>{isPowered ? 'CHIP ENERGIZED (5V)' : 'NO POWER'}</span>
            </div>
          </div>

          {/* Central 14-Pin DIP Package Visual */}
          <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
            
            <div className="relative bg-slate-900 border-2 border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              
              {/* IC Notch at Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-slate-950 border-2 border-slate-700 rounded-b-full" />
              
              {/* IC Model Printed Label */}
              <div className="text-center pb-4 pt-1">
                <span className="font-mono text-sm font-black text-amber-400 tracking-widest block">
                  SN74{selectedIc.slice(2)}N
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {curIc.nameEn}
                </span>
              </div>

              {/* 14 Pins Layout (7 on Left, 7 on Right) */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                
                {/* Left Side: Pins 1 to 7 */}
                <div className="space-y-2 text-left">
                  {[1, 2, 3, 4, 5, 6, 7].map((pin) => {
                    const isVccPin = pin === 14;
                    const isGndPin = pin === 7;
                    const isPin1 = pin === 1;
                    const isPin2 = pin === 2;
                    const isPin3 = pin === 3;

                    return (
                      <div 
                        key={pin}
                        className={`flex items-center gap-2 p-1.5 rounded-lg border text-[11px] ${
                          isGndPin && gndConnected 
                            ? 'bg-slate-800 border-slate-500 text-white font-bold'
                            : isPin1 && pin1Input === 1 && isPowered
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold'
                            : isPin2 && pin2Input === 1 && isPowered
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold'
                            : isPin3 && gate1Out === 1 && isPowered
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold shadow-[0_0_8px_#10b981]'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                          {pin}
                        </span>
                        <span className="truncate">
                          {pin === 1 ? '1A (In 1)' : pin === 2 ? '1B (In 2)' : pin === 3 ? '1Y (Out)' : pin === 7 ? 'GND (0V)' : `Pin ${pin}`}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Right Side: Pins 14 down to 8 */}
                <div className="space-y-2 text-right">
                  {[14, 13, 12, 11, 10, 9, 8].map((pin) => {
                    const isVccPin = pin === 14;

                    return (
                      <div 
                        key={pin}
                        className={`flex items-center justify-end gap-2 p-1.5 rounded-lg border text-[11px] ${
                          isVccPin && vccConnected 
                            ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold shadow-[0_0_8px_#f43f5e]'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="truncate">
                          {pin === 14 ? 'VCC (+5V)' : `Pin ${pin}`}
                        </span>
                        <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                          {pin}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* Test Signals on Gate 1 Inputs */}
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  sound.playClick(pin1Input === 1 ? 400 : 800);
                  setPin1Input(pin1Input === 1 ? 0 : 1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  pin1Input === 1 ? 'bg-amber-500 text-slate-950 shadow-[0_0_8px_#f59e0b]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                Pin 1 (1A): {pin1Input}
              </button>
              <button
                onClick={() => {
                  sound.playClick(pin2Input === 1 ? 400 : 800);
                  setPin2Input(pin2Input === 1 ? 0 : 1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  pin2Input === 1 ? 'bg-amber-500 text-slate-950 shadow-[0_0_8px_#f59e0b]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                Pin 2 (1B): {pin2Input}
              </button>

              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span>Pin 3 (1Y Output):</span>
                <strong className={gate1Out === 1 ? 'text-emerald-400' : 'text-slate-500'}>
                  {isPowered ? gate1Out : '0 (No Power)'}
                </strong>
              </div>
            </div>

          </div>

          {/* Canvas Bottom Warning Strip */}
          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Power Requirement: <strong>Pin 14 (Vcc) + Pin 7 (GND)</strong></span>
            <span className="text-amber-400">14-Pin Dual In-line Package (DIP)</span>
          </div>

        </div>

        {/* Right: Spec Sheet & Pinout Map Details */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>IC Specification Sheet</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Official Pinout Reference
              </span>
            </div>

            {/* Spec Sheet Table */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="font-mono text-amber-400 font-bold flex justify-between items-center">
                <span>{curIc.nameEn}</span>
                <span className="text-[10px] text-slate-400 font-normal">{curIc.gateCount} Gates Inside</span>
              </div>
              
              <p className="text-slate-400 leading-relaxed">
                {curIc.desc}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800/80 font-mono text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>Pin 14:</span>
                  <span className="text-rose-400 font-bold">VCC (+5V Power)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Pin 7:</span>
                  <span className="text-slate-400 font-bold">GND (0V Ground)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Gate 1:</span>
                  <span className="text-cyan-400 font-bold">
                    {selectedIc === '7402' ? 'Pins 2,3 (In) ➔ Pin 1 (Out)' : selectedIc === '7404' ? 'Pin 1 (In) ➔ Pin 2 (Out)' : 'Pins 1,2 (In) ➔ Pin 3 (Out)'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Gate 2:</span>
                  <span className="text-cyan-400 font-bold">
                    {selectedIc === '7402' ? 'Pins 5,6 (In) ➔ Pin 4 (Out)' : selectedIc === '7404' ? 'Pin 3 (In) ➔ Pin 4 (Out)' : 'Pins 4,5 (In) ➔ Pin 6 (Out)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Special Highlight for 7402 NOR */}
            {selectedIc === '7402' && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs space-y-1">
                <p className="font-bold">⚠️ Special IC 7402 Note:</p>
                <p className="text-slate-400 text-[11px]">
                  Unlike 7400/7408, 7402 NOR IC has its outputs on Pins 1, 4, 10, 13 (Inputs are Pins 2,3 and 5,6).
                </p>
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
            <strong>O/L Practical Competency:</strong> Understanding IC pinouts connects abstract Boolean algebra directly to physical electronics breadboarding.
          </div>
        </div>

      </div>
    </div>
  );
}
