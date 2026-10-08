'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Share2, 
  Radio, 
  CircleDot, 
  Cpu, 
  Scissors, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Send
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type TopologyType = 'star' | 'bus' | 'ring' | 'mesh';

interface TopologyInfo {
  id: TopologyType;
  nameEn: string;
  nameSi: string;
  summaryEn: string;
  summarySi: string;
  advantagesEn: string[];
  advantagesSi: string[];
  disadvantagesEn: string[];
  disadvantagesSi: string[];
}

const TOPOLOGIES: Record<TopologyType, TopologyInfo> = {
  star: {
    id: 'star',
    nameEn: 'Star Topology',
    nameSi: 'තාරකා ආකෘතිය (Star)',
    summaryEn: 'All devices are connected to a central device (Switch or Hub) via dedicated point-to-point cables.',
    summarySi: 'සියලුම උපාංග මධ්‍යම උපාංගයකට (Switch හෝ Hub) වෙන වෙනම සන්නිවේදන රැහැන් මගින් සම්බන්ධ වේ.',
    advantagesEn: [
      'Easy to install and modify without disrupting other nodes.',
      'Failure of one cable/node does not affect the rest of the network.',
      'Centralized management makes troubleshooting easy.'
    ],
    advantagesSi: [
      'අනෙකුත් පරිගණක වලට බාධාවකින් තොරව නව පරිගණක එකතු කිරීම හෝ ඉවත් කිරීම පහසුය.',
      'එක් රැහැනක් හෝ පරිගණකයක් බිඳ වැටුණද මුළු ජාලයම අඩපණ නොවේ.',
      'මධ්‍යගත පාලනය නිසා දෝෂ හඳුනාගැනීම පහසුය.'
    ],
    disadvantagesEn: [
      'If the central switch/hub fails, the entire network shuts down.',
      'Requires more cabling than a bus topology, increasing cost.'
    ],
    disadvantagesSi: [
      'මධ්‍ය උපාංගය (Switch/Hub) බිඳ වැටුණහොත් මුළු ජාලයම ක්‍රියාවිරහිත වේ.',
      'Bus ආකෘතියට වඩා වැඩි රැහැන් ප්‍රමාණයක් අවශ්‍ය වන බැවින් පිරිවැය වැඩිය.'
    ]
  },
  bus: {
    id: 'bus',
    nameEn: 'Bus Topology',
    nameSi: 'බස් ආකෘතිය (Bus)',
    summaryEn: 'All nodes connect to a single central backbone cable with terminators at both ends.',
    summarySi: 'සියලුම පරිගණක එක් ප්‍රධාන සන්නිවේදන රැහැනකට (Backbone Cable) සම්බන්ධ වන අතර දෙකෙළවර අග්‍රග (Terminators) ඇත.',
    advantagesEn: [
      'Uses minimal cabling, making it inexpensive and easy to set up.',
      'Great for small, temporary local networks.'
    ],
    advantagesSi: [
      'අවම රැහැන් ප්‍රමාණයක් භාවිත වන බැවින් පිරිවැය අඩුය.',
      'කුඩා තාවකාලික ජාල සඳහා ස්ථාපනය කිරීම පහසුය.'
    ],
    disadvantagesEn: [
      'A break in the central backbone cable brings down the ENTIRE network.',
      'Data collisions increase rapidly as more devices are added.',
      'Difficult to isolate faults.'
    ],
    disadvantagesSi: [
      'ප්‍රධාන රැහැනේ කිසියම් තැනක බිඳ වැටීමක් වුවහොත් මුළු ජාලයම සම්පූර්ණයෙන්ම අඩපණ වේ.',
      'පරිගණක වැඩි වන විට දත්ත ගැටුම් (Collisions) ඇති වී වේගය අඩු වේ.',
      'දෝෂ සහිත ස්ථාන සොයා ගැනීම අපහසුය.'
    ]
  },
  ring: {
    id: 'ring',
    nameEn: 'Ring Topology',
    nameSi: 'මුදු ආකෘතිය (Ring)',
    summaryEn: 'Each node is connected to exactly two neighbours, forming a closed continuous loop where data travels in one direction (token ring).',
    summarySi: 'සෑම පරිගණකයක්ම දෙපස ඇති පරිගණක දෙකට සම්බන්ධ වී සංවෘත වළල්ලක් සාදයි. දත්ත ගමන් කරන්නේ එක් දිශාවකට පමණි.',
    advantagesEn: [
      'Data transmission is orderly using tokens, eliminating packet collisions.',
      'Performs better than bus under heavy network load.'
    ],
    advantagesSi: [
      'දත්ත එක් දිශාවකට ටෝකන ක්‍රමයට ගමන් කරන බැවින් දත්ත ගැටුම් ඇති නොවේ.',
      'වැඩි තදබදයක් ඇති විට Bus ආකෘතියට වඩා හොඳින් ක්‍රියා කරයි.'
    ],
    disadvantagesEn: [
      'A break in any single cable or node shuts down the entire ring.',
      'Adding or removing nodes requires pausing network operations.'
    ],
    disadvantagesSi: [
      'එක් පරිගණකයක් හෝ රැහැනක් බිඳ වැටුණහොත් මුළු වළල්ලම අක්‍රිය වේ.',
      'නව පරිගණකයක් එක් කිරීමේදී හෝ ඉවත් කිරීමේදී ජාලයේ ක්‍රියාකාරිත්වය තාවකාලිකව නැවැත්විය යුතුය.'
    ]
  },
  mesh: {
    id: 'mesh',
    nameEn: 'Mesh Topology',
    nameSi: 'දැල ආකෘතිය (Mesh)',
    summaryEn: 'Every node is interconnected with redundant point-to-point links (Full Mesh or Partial Mesh).',
    summarySi: 'ජාලයේ ඇති සෑම පරිගණකයක්ම අනෙකුත් සියලුම පරිගණක සමඟ සෘජුවම සම්බන්ධ වී ඇත.',
    advantagesEn: [
      'Maximum fault tolerance: traffic reroutes automatically if a link breaks.',
      'High security & privacy as data travels on dedicated private channels.'
    ],
    advantagesSi: [
      'උපරිම විශ්වාසනීයත්වය: එක් රැහැනක් කැඩී ගියද විකල්ප මාර්ග ඔස්සේ දත්ත හුවමාරු වේ.',
      'කේබල් මගින් සෘජුව සම්බන්ධ වන බැවින් දත්ත ආරක්ෂාව සහ වේගය ඉහළය.'
    ],
    disadvantagesEn: [
      'Extremely expensive and complex due to massive amounts of cabling & NIC ports.',
      'Difficult installation in large environments.'
    ],
    disadvantagesSi: [
      'අධික රැහැන් ප්‍රමාණයක් අවශ්‍ය වන බැවින් වියදම සහ සංකීර්ණතාව ඉතා අධිකය.',
      'විශාල ජාල සඳහා ස්ථාපනය කිරීම හා නඩත්තුව ඉතා අපහසුය.'
    ]
  }
};

export function TopologyLab() {
  const [selectedTopology, setSelectedTopology] = useState<TopologyType>('star');
  const [cutNode, setCutNode] = useState<number | null>(null);
  const [cutBackbone, setCutBackbone] = useState<boolean>(false);
  const [cutCenter, setCutCenter] = useState<boolean>(false);
  const [activeSubtab, setActiveSubtab] = useState<'topologies' | 'deviceRace'>('topologies');

  // Switch vs Hub simulation state
  const [activeDevice, setActiveDevice] = useState<'hub' | 'switch'>('switch');
  const [transmitting, setTransmitting] = useState<boolean>(false);
  const [sourceNode, setSourceNode] = useState<number>(1);
  const [targetNode, setTargetNode] = useState<number>(3);
  const [packetStatus, setPacketStatus] = useState<string>('');

  const handleSelectTopology = (top: TopologyType) => {
    sound.playClick(600);
    setSelectedTopology(top);
    setCutNode(null);
    setCutBackbone(false);
    setCutCenter(false);
  };

  const handleCutNode = (nodeId: number) => {
    sound.playSnap();
    setCutNode(cutNode === nodeId ? null : nodeId);
  };

  const handleCutBackbone = () => {
    sound.playSnap();
    setCutBackbone(!cutBackbone);
  };

  const handleCutCenter = () => {
    sound.playSnap();
    setCutCenter(!cutCenter);
  };

  const handleResetTopology = () => {
    sound.playClick(500);
    setCutNode(null);
    setCutBackbone(false);
    setCutCenter(false);
  };

  const handleRunTransmission = () => {
    if (transmitting) return;
    sound.playClick(700);
    setTransmitting(true);
    setPacketStatus(
      activeDevice === 'hub'
        ? 'Broadcasting to ALL ports! (Flooding & Security Vulnerability)'
        : `Unicast Routing via MAC Table: Node ${sourceNode} ➔ Node ${targetNode} directly!`
    );

    setTimeout(() => {
      if (activeDevice === 'hub') {
        sound.playError();
      } else {
        sound.playSuccess();
      }
      setTransmitting(false);
    }, 2400);
  };

  const currentTop = TOPOLOGIES[selectedTopology];

  // Determine network status based on cuts
  const isNetworkDown = 
    (selectedTopology === 'bus' && cutBackbone) ||
    (selectedTopology === 'star' && cutCenter) ||
    (selectedTopology === 'ring' && (cutNode !== null || cutBackbone));

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-md mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('topologies');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'topologies'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Network className="w-4 h-4" />
          <span>Topology Sandbox</span>
        </button>
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('deviceRace');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'deviceRace'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Switch vs Hub Duel</span>
        </button>
      </div>

      {activeSubtab === 'topologies' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Interactive Topology Visualizer */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 border border-cyan-500/30 shadow-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              {/* Topology Selector Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(['star', 'bus', 'ring', 'mesh'] as TopologyType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleSelectTopology(type)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 border ${
                      selectedTopology === type
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-cyan-500/50'
                    }`}
                  >
                    {type === 'star' && <CircleDot className="w-3.5 h-3.5" />}
                    {type === 'bus' && <Layers className="w-3.5 h-3.5" />}
                    {type === 'ring' && <Radio className="w-3.5 h-3.5" />}
                    {type === 'mesh' && <Share2 className="w-3.5 h-3.5" />}
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Status Banner */}
              <div className="flex items-center justify-between mb-4 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${isNetworkDown ? 'bg-red-500' : 'bg-emerald-400'}`} />
                  <span className="text-xs font-bold text-slate-200">
                    {isNetworkDown ? 'NETWORK DOWN (ජාලය බිඳවැටී ඇත)' : 'NETWORK ONLINE (ජාලය ක්‍රියාකාරීයි)'}
                  </span>
                </div>
                <button
                  onClick={handleResetTopology}
                  className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Cables</span>
                </button>
              </div>

              {/* The Live Interactive Canvas */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
                {/* SVG Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {selectedTopology === 'star' && (
                    <>
                      {/* Central Switch to nodes */}
                      {[
                        { x: 180, y: 70 },
                        { x: 340, y: 80 },
                        { x: 380, y: 220 },
                        { x: 260, y: 270 },
                        { x: 140, y: 210 }
                      ].map((pos, idx) => {
                        const isCut = cutNode === idx + 1 || cutCenter;
                        return (
                          <line
                            key={idx}
                            x1="260"
                            y1="160"
                            x2={pos.x}
                            y2={pos.y}
                            stroke={isCut ? '#ef4444' : '#06b6d4'}
                            strokeWidth={isCut ? 2 : 3}
                            strokeDasharray={isCut ? '4 4' : 'none'}
                            className={!isCut ? 'transition-all duration-300' : ''}
                          />
                        );
                      })}
                    </>
                  )}

                  {selectedTopology === 'bus' && (
                    <>
                      {/* Main Backbone line */}
                      <line
                        x1="40"
                        y1="160"
                        x2="480"
                        y2="160"
                        stroke={cutBackbone ? '#ef4444' : '#06b6d4'}
                        strokeWidth="5"
                        strokeDasharray={cutBackbone ? '6 6' : 'none'}
                      />
                      {/* Drop lines to nodes */}
                      {[
                        { x: 80, y: 80 },
                        { x: 170, y: 240 },
                        { x: 260, y: 80 },
                        { x: 350, y: 240 },
                        { x: 440, y: 80 }
                      ].map((pos, idx) => {
                        const isCut = cutNode === idx + 1 || cutBackbone;
                        return (
                          <line
                            key={idx}
                            x1={pos.x}
                            y1="160"
                            x2={pos.x}
                            y2={pos.y}
                            stroke={isCut ? '#ef4444' : '#38bdf8'}
                            strokeWidth="2.5"
                            strokeDasharray={isCut ? '4 4' : 'none'}
                          />
                        );
                      })}
                    </>
                  )}

                  {selectedTopology === 'ring' && (
                    <>
                      {/* Polygon loop */}
                      <polygon
                        points="260,60 410,130 350,260 170,260 110,130"
                        fill="none"
                        stroke={cutNode !== null || cutBackbone ? '#ef4444' : '#06b6d4'}
                        strokeWidth="3.5"
                        strokeDasharray={cutNode !== null || cutBackbone ? '6 6' : 'none'}
                      />
                    </>
                  )}

                  {selectedTopology === 'mesh' && (
                    <>
                      {/* Interconnecting mesh lines */}
                      {[
                        [260, 60],
                        [410, 130],
                        [350, 260],
                        [170, 260],
                        [110, 130]
                      ].flatMap((p1, i, arr) =>
                        arr.slice(i + 1).map((p2, j) => {
                          const isSevered = cutNode === i + 1 || cutNode === i + 2 + j;
                          return (
                            <line
                              key={`${i}-${j}`}
                              x1={p1[0]}
                              y1={p1[1]}
                              x2={p2[0]}
                              y2={p2[1]}
                              stroke={isSevered ? '#475569' : '#0ea5e9'}
                              strokeWidth="1.5"
                              opacity={isSevered ? 0.3 : 0.7}
                            />
                          );
                        })
                      )}
                    </>
                  )}
                </svg>

                {/* Star Center Hub/Switch */}
                {selectedTopology === 'star' && (
                  <button
                    onClick={handleCutCenter}
                    className={`absolute z-20 flex flex-col items-center justify-center w-14 h-14 rounded-2xl border-2 transition-all shadow-xl ${
                      cutCenter
                        ? 'bg-red-950/80 border-red-500 text-red-400'
                        : 'bg-indigo-900/90 border-indigo-400 text-white shadow-indigo-500/40 hover:scale-105'
                    }`}
                    style={{ left: 'calc(50% - 28px)', top: 'calc(50% - 28px)' }}
                    title="Click to break central switch"
                  >
                    <Cpu className="w-6 h-6 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold mt-0.5">HUB/SW</span>
                  </button>
                )}

                {/* Bus Backbone Cutter Button */}
                {selectedTopology === 'bus' && (
                  <button
                    onClick={handleCutBackbone}
                    className={`absolute z-20 px-3 py-1 rounded-full text-[10px] font-mono font-black border transition-all ${
                      cutBackbone
                        ? 'bg-red-600 text-white border-red-400 shadow-lg shadow-red-600/50'
                        : 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/40'
                    }`}
                    style={{ left: 'calc(50% - 60px)', top: 'calc(50% - 14px)' }}
                  >
                    <Scissors className="w-3 h-3 inline mr-1" />
                    {cutBackbone ? 'BACKBONE CUT!' : 'CUT BACKBONE'}
                  </button>
                )}

                {/* Nodes on Canvas */}
                {selectedTopology === 'star' && (
                  <>
                    {[
                      { id: 1, x: '35%', y: '22%' },
                      { id: 2, x: '65%', y: '25%' },
                      { id: 3, x: '73%', y: '68%' },
                      { id: 4, x: '50%', y: '84%' },
                      { id: 5, x: '27%', y: '65%' }
                    ].map((n) => {
                      const isIsolated = cutNode === n.id || cutCenter;
                      return (
                        <button
                          key={n.id}
                          onClick={() => handleCutNode(n.id)}
                          style={{ left: n.x, top: n.y, transform: 'translate(-50%, -50%)' }}
                          className={`absolute z-10 w-11 h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            isIsolated
                              ? 'bg-red-950/80 border-red-500 text-red-300'
                              : 'bg-slate-900 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/20 hover:scale-110'
                          }`}
                          title={`Click node ${n.id} to simulate individual cable cut`}
                        >
                          <span className="text-[10px] font-mono font-bold">PC {n.id}</span>
                          <span className="text-[8px]">{isIsolated ? 'OFF' : 'ON'}</span>
                        </button>
                      );
                    })}
                  </>
                )}

                {selectedTopology === 'bus' && (
                  <>
                    {[
                      { id: 1, x: '16%', y: '25%' },
                      { id: 2, x: '34%', y: '75%' },
                      { id: 3, x: '52%', y: '25%' },
                      { id: 4, x: '70%', y: '75%' },
                      { id: 5, x: '88%', y: '25%' }
                    ].map((n) => {
                      const isIsolated = cutNode === n.id || cutBackbone;
                      return (
                        <button
                          key={n.id}
                          onClick={() => handleCutNode(n.id)}
                          style={{ left: n.x, top: n.y, transform: 'translate(-50%, -50%)' }}
                          className={`absolute z-10 w-11 h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            isIsolated
                              ? 'bg-red-950/80 border-red-500 text-red-300'
                              : 'bg-slate-900 border-cyan-400 text-cyan-200 shadow-md hover:scale-110'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold">PC {n.id}</span>
                          <span className="text-[8px]">{isIsolated ? 'OFF' : 'ON'}</span>
                        </button>
                      );
                    })}
                  </>
                )}

                {selectedTopology === 'ring' && (
                  <>
                    {[
                      { id: 1, x: '50%', y: '18%' },
                      { id: 2, x: '79%', y: '40%' },
                      { id: 3, x: '67%', y: '81%' },
                      { id: 4, x: '33%', y: '81%' },
                      { id: 5, x: '21%', y: '40%' }
                    ].map((n) => {
                      const isBroken = cutNode !== null || cutBackbone;
                      return (
                        <button
                          key={n.id}
                          onClick={() => handleCutNode(n.id)}
                          style={{ left: n.x, top: n.y, transform: 'translate(-50%, -50%)' }}
                          className={`absolute z-10 w-11 h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            cutNode === n.id
                              ? 'bg-red-900 border-red-500 text-red-200 ring-2 ring-red-400'
                              : isBroken
                              ? 'bg-slate-900/90 border-red-500/60 text-slate-400'
                              : 'bg-slate-900 border-cyan-400 text-cyan-200 shadow-md hover:scale-110'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold">PC {n.id}</span>
                          <span className="text-[8px]">{isBroken ? 'HALT' : 'TOKEN'}</span>
                        </button>
                      );
                    })}
                  </>
                )}

                {selectedTopology === 'mesh' && (
                  <>
                    {[
                      { id: 1, x: '50%', y: '18%' },
                      { id: 2, x: '79%', y: '40%' },
                      { id: 3, x: '67%', y: '81%' },
                      { id: 4, x: '33%', y: '81%' },
                      { id: 5, x: '21%', y: '40%' }
                    ].map((n) => {
                      const isCut = cutNode === n.id;
                      return (
                        <button
                          key={n.id}
                          onClick={() => handleCutNode(n.id)}
                          style={{ left: n.x, top: n.y, transform: 'translate(-50%, -50%)' }}
                          className={`absolute z-10 w-11 h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            isCut
                              ? 'bg-red-900 border-red-500 text-red-200'
                              : 'bg-slate-900 border-cyan-400 text-cyan-200 shadow-md hover:scale-110'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold">PC {n.id}</span>
                          <span className="text-[8px]">{isCut ? 'CUT' : 'MESH'}</span>
                        </button>
                      );
                    })}
                  </>
                )}
              </div>
            </div>

            {/* Cable Cutter Interactive Prompt */}
            <div className="mt-4 p-3 bg-cyan-950/40 rounded-xl border border-cyan-500/30 flex items-center justify-between text-xs text-cyan-200">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  <strong>Interactive Fault Test:</strong> Click any PC node or backbone line above to sever connection and test network resilience!
                </span>
              </div>
            </div>
          </div>

          {/* Topology Theory & Exam Analysis Deck */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Curriculum Competency 3.1
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {currentTop.nameEn}
                </h3>
                <h4 className="text-sm font-semibold text-cyan-300">
                  {currentTop.nameSi}
                </h4>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentTop.summaryEn}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {currentTop.summarySi}
                </p>
              </div>

              {/* Advantages */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Advantages (වාසි)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentTop.advantagesEn.map((adv, i) => (
                    <li key={i} className="flex items-start gap-1.5 bg-emerald-950/20 p-2 rounded-xl border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold">•</span>
                      <div>
                        <div>{adv}</div>
                        <div className="text-[11px] text-slate-400">{currentTop.advantagesSi[i]}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Disadvantages (අවාසි)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentTop.disadvantagesEn.map((dis, i) => (
                    <li key={i} className="flex items-start gap-1.5 bg-rose-950/20 p-2 rounded-xl border border-rose-500/20">
                      <span className="text-rose-400 font-bold">•</span>
                      <div>
                        <div>{dis}</div>
                        <div className="text-[11px] text-slate-400">{currentTop.disadvantagesSi[i]}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* G.C.E. O/L Exam Tip */}
            <div className="mt-4 p-3 bg-amber-950/30 rounded-2xl border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">O/L Exam Crucial Rule:</strong> Star topology is the most commonly used in modern school ICT labs. If central Switch fails, whole network goes down; if a single PC fails, others continue normally!
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Switch vs Hub Live Duel */
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Network Device Duel: Switch vs Hub (ස්විචය හා හබ් එක)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                G.C.E. O/L frequently tests why a Switch is smarter than a Hub (MAC address learning vs Blind Flooding).
              </p>
            </div>

            {/* Device Switcher */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => {
                  sound.playClick(600);
                  setActiveDevice('switch');
                }}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  activeDevice === 'switch'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Intelligent Switch (ස්විචය)
              </button>
              <button
                onClick={() => {
                  sound.playClick(600);
                  setActiveDevice('hub');
                }}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  activeDevice === 'hub'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Dumb Hub (හබ් එක)
              </button>
            </div>
          </div>

          {/* Interactive Routing Transmission Simulator */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Control Panel */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Source Sender (ප්‍රභවය):</label>
                <select
                  value={sourceNode}
                  onChange={(e) => setSourceNode(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-mono focus:border-cyan-400 outline-none"
                >
                  <option value={1}>Node 1 (MAC: 00:1A:2B:3C:4D:01)</option>
                  <option value={2}>Node 2 (MAC: 00:1A:2B:3C:4D:02)</option>
                  <option value={3}>Node 3 (MAC: 00:1A:2B:3C:4D:03)</option>
                  <option value={4}>Node 4 (MAC: 00:1A:2B:3C:4D:04)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Target Destination (ගමනාන්තය):</label>
                <select
                  value={targetNode}
                  onChange={(e) => setTargetNode(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-mono focus:border-cyan-400 outline-none"
                >
                  <option value={3}>Node 3 (MAC: 00:1A:2B:3C:4D:03)</option>
                  <option value={1}>Node 1 (MAC: 00:1A:2B:3C:4D:01)</option>
                  <option value={2}>Node 2 (MAC: 00:1A:2B:3C:4D:02)</option>
                  <option value={4}>Node 4 (MAC: 00:1A:2B:3C:4D:04)</option>
                </select>
              </div>

              <button
                onClick={handleRunTransmission}
                disabled={transmitting || sourceNode === targetNode}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all ${
                  transmitting || sourceNode === targetNode
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : activeDevice === 'switch'
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/30'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{transmitting ? 'TRANSMITTING PACKET...' : 'FIRE DATA PACKET'}</span>
              </button>

              {sourceNode === targetNode && (
                <p className="text-[11px] text-rose-400 text-center">Source and destination must be different!</p>
              )}
            </div>

            {/* Visualizer Frame */}
            <div className="md:col-span-2 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 min-h-[220px] flex flex-col items-center justify-center relative">
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                {[1, 2, 3, 4].map((node) => {
                  const isSource = sourceNode === node;
                  const isTarget = targetNode === node;
                  const receivesPacket = 
                    transmitting && (activeDevice === 'hub' ? node !== sourceNode : isTarget);

                  return (
                    <motion.div
                      key={node}
                      animate={receivesPacket ? { scale: [1, 1.08, 1], borderColor: ['#06b6d4', '#22c55e', '#06b6d4'] } : {}}
                      className={`p-3.5 rounded-2xl border transition-all text-center ${
                        isSource
                          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200'
                          : isTarget
                          ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold">NODE 0{node}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Port {node}</div>
                      {isSource && <span className="inline-block mt-1 px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[9px]">SENDER</span>}
                      {isTarget && <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[9px]">TARGET</span>}
                      {receivesPacket && activeDevice === 'hub' && !isTarget && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-[9px] animate-pulse">
                          UNWANTED FLOOD!
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Status Message */}
              {packetStatus && (
                <div className="mt-4 p-2.5 bg-slate-950 rounded-xl border border-slate-700 text-xs font-mono text-center text-cyan-300 w-full max-w-md">
                  {packetStatus}
                </div>
              )}
            </div>
          </div>

          {/* Device Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 bg-cyan-950/30 rounded-2xl border border-cyan-500/30 space-y-2">
              <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Network Switch (ස්විචය)
              </h4>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Intelligent:</strong> Inspects destination MAC address and transmits data ONLY to the destination port (Unicast).</li>
                <li>• No unnecessary traffic or bandwidth wastage.</li>
                <li>• High security: other nodes cannot sniff private traffic.</li>
              </ul>
            </div>

            <div className="p-4 bg-amber-950/30 rounded-2xl border border-amber-500/30 space-y-2">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Network Hub (හබ් එක)
              </h4>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Non-intelligent:</strong> Does NOT inspect addresses; blindly broadcasts received signals to ALL connected ports.</li>
                <li>• Causes bandwidth congestion and high collision rates.</li>
                <li>• Low security: any computer on the hub can receive the signal.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
