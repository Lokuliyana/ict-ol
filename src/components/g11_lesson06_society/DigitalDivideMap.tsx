'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Wifi, 
  Building2, 
  School, 
  Bot, 
  Cpu, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Layers, 
  Radio,
  MapPin,
  Flame,
  Lightbulb
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface FutureTrendItem {
  id: string;
  scenario: string;
  scenarioSi: string;
  category: 'ai' | 'iot' | 'cloud' | 'robotics';
}

const TREND_SCENARIOS: FutureTrendItem[] = [
  {
    id: 's1',
    scenario: 'Automated soil moisture sensors measuring paddy field dryness and triggering smart water valves without human intervention.',
    scenarioSi: 'ස්වයංක්‍රීය පාංශු තෙතමනය සංවේදක මඟින් කුඹුරුවල තෙතමනය මැන ස්වයංක්‍රීයව ජලය සැපයීම.',
    category: 'iot'
  },
  {
    id: 's2',
    scenario: 'Computer vision algorithm analyzing thousands of chest X-rays to detect early pneumonia with 99% accuracy.',
    scenarioSi: 'පරිගණක පද්ධතියක් මඟින් මිනිස් කථනය හඳුනාගැනීම සහ එක්ස්-රේ ඡායාරූප විශ්ලේෂණය කර රෝග විනිශ්චය කිරීම.',
    category: 'ai'
  },
  {
    id: 's3',
    scenario: 'National hospital network storing patient health records on distributed remote data centers accessible anywhere with high availability.',
    scenarioSi: 'රෝහල් ජාලයක දත්ත දුරස්ථ දත්ත මධ්‍යස්ථානවල ගබඩා කර ඕනෑම තැනක සිට ප්‍රවේශ වීම.',
    category: 'cloud'
  }
];

export function DigitalDivideMap() {
  const [activeTab, setActiveTab] = useState<'map' | 'trends'>('map');

  // Sri Lanka Digital Divide Map States
  const [nenasalaDeployed, setNenasalaDeployed] = useState<boolean>(false);
  const [schoolBroadbandDeployed, setSchoolBroadbandDeployed] = useState<boolean>(false);
  const [eGovDeployed, setEGovDeployed] = useState<boolean>(false);

  // Future Trends Matching State
  const [trendAnswers, setTrendAnswers] = useState<Record<string, string>>({});

  const isDivideBridged = nenasalaDeployed && schoolBroadbandDeployed && eGovDeployed;

  const handleToggleNenasala = () => {
    sound.playVictory();
    setNenasalaDeployed(!nenasalaDeployed);
  };

  const handleToggleBroadband = () => {
    sound.playVictory();
    setSchoolBroadbandDeployed(!schoolBroadbandDeployed);
  };

  const handleToggleEGov = () => {
    sound.playVictory();
    setEGovDeployed(!eGovDeployed);
  };

  const handleResetMap = () => {
    sound.playClick(400);
    setNenasalaDeployed(false);
    setSchoolBroadbandDeployed(false);
    setEGovDeployed(false);
  };

  const handleSelectTrend = (scenarioId: string, chosenCat: string) => {
    const item = TREND_SCENARIOS.find((t) => t.id === scenarioId);
    if (!item) return;

    if (item.category === chosenCat) {
      sound.playVictory();
    } else {
      sound.playError();
    }

    setTrendAnswers((prev) => ({ ...prev, [scenarioId]: chosenCat }));
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-indigo-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('map');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'map'
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4 text-indigo-300" />
          <span>Bridging Digital Divide</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('trends');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'trends'
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Bot className="w-4 h-4 text-cyan-300" />
          <span>Emerging ICT Horizons (AI, IoT)</span>
        </button>
      </div>

      {/* Tab 1: Bridging the Digital Divide */}
      {activeTab === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Policy Toolkit */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                The Digital Divide in Sri Lanka (ඩිජිටල් බෙදීම)
              </h3>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full font-mono font-bold">
                2021 P2 Q06(c)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <b className="text-indigo-300">The Digital Divide</b> is the gap between communities with access to computers/internet and those without. Deploy national solutions to illuminate the entire island with digital access!
            </p>

            {/* Strategic Initiative 1: Nenasala */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>1. Nenasala Rural Telecenters (නැණසල ව්‍යාපෘතිය)</span>
                </div>
                <button
                  onClick={handleToggleNenasala}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    nenasalaDeployed
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                      : 'bg-slate-800 text-amber-300 border-amber-500/40'
                  }`}
                >
                  {nenasalaDeployed ? 'Deployed ✅' : 'Deploy Nenasala'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Establishes community internet hubs in remote rural villages for e-learning, digital literacy, and government services.
              </p>
            </div>

            {/* Strategic Initiative 2: School Broadband */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                  <School className="w-4 h-4 text-emerald-400" />
                  <span>2. Rural School 4G/5G Broadband & Computer Labs</span>
                </div>
                <button
                  onClick={handleToggleBroadband}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    schoolBroadbandDeployed
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black'
                      : 'bg-slate-800 text-emerald-300 border-emerald-500/40'
                  }`}
                >
                  {schoolBroadbandDeployed ? 'Activated ✅' : 'Connect Schools'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Connects school ICT laboratories to high-speed fiber & cellular towers, enabling interactive dual-medium digital education.
              </p>
            </div>

            {/* Strategic Initiative 3: e-Government Portals */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                  <Radio className="w-4 h-4 text-cyan-400" />
                  <span>3. e-Government Services (රාජ්‍ය සේවා ඩිජිටල්කරණය)</span>
                </div>
                <button
                  onClick={handleToggleEGov}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    eGovDeployed
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black'
                      : 'bg-slate-800 text-cyan-300 border-cyan-500/40'
                  }`}
                >
                  {eGovDeployed ? 'Enabled ✅' : 'Enable e-Gov'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Online revenue licensing, electronic pensions, and digital identity allow citizens to receive public services without traveling long distances.
              </p>
            </div>

            {/* Reset */}
            <div className="flex justify-end">
              <button
                onClick={handleResetMap}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset National Grid
              </button>
            </div>
          </div>

          {/* Interactive Sri Lanka Island Map HUD */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  Sri Lanka Connectivity Telemetry
                </h4>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isDivideBridged ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-amber-950 text-amber-300 border border-amber-700'
                }`}>
                  {isDivideBridged ? '100% Island Connected' : 'Divide Active'}
                </span>
              </div>

              {/* Map Canvas Visualizer */}
              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
                <div className="space-y-4 text-center">
                  <div className="w-28 h-40 mx-auto rounded-3xl border-2 border-indigo-500/50 bg-slate-900 flex flex-col items-center justify-between p-3 relative shadow-inner">
                    {/* Northern Province */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-colors ${
                      schoolBroadbandDeployed ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/50' : 'bg-slate-800 text-slate-500'
                    }`}>
                      JFN
                    </div>

                    {/* Central / Rural */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono transition-colors ${
                      nenasalaDeployed ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/50' : 'bg-slate-800 text-slate-500'
                    }`}>
                      KND
                    </div>

                    {/* Western / Colombo */}
                    <div className="w-10 h-10 rounded-full bg-indigo-500 text-white font-bold text-xs flex items-center justify-center shadow-lg shadow-indigo-500/50">
                      CMB
                    </div>
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="font-bold text-slate-200">
                      {isDivideBridged ? '🌴 All 9 Provinces Connected via Broadband!' : '⚠️ Digital Disparity Detected between Western Province and Rural Districts'}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Urban Hubs: 98% Fiber Coverage | Rural Villages: {isDivideBridged ? '95% Connected' : '42% Low Bandwidth'}
                    </p>
                  </div>
                </div>
              </div>

              {isDivideBridged && (
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs font-bold text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Digital Divide Successfully Minimized!
                  </div>
                  <p className="text-[11px] text-emerald-300 font-normal">
                    Equitable digital access achieved across all socio-economic demographics in Sri Lanka.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Emerging ICT Horizons (AI, IoT, Cloud) */}
      {activeTab === 'trends' && (
        <div className="bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo-400" />
              Emerging Trends in ICT (නූතන ප්‍රවණතා - AI, IoT, Cloud)
            </h3>
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-mono font-bold">
              6.4.2 Horizons
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Match real-world Sri Lankan application scenarios to their emerging technology domain: <b>Artificial Intelligence (AI)</b>, <b>Internet of Things (IoT)</b>, or <b>Cloud Computing</b>.
          </p>

          <div className="space-y-4">
            {TREND_SCENARIOS.map((scenario) => {
              const selectedAnswer = trendAnswers[scenario.id];
              const isCorrect = selectedAnswer === scenario.category;
              return (
                <div
                  key={scenario.id}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                >
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                      {scenario.scenario}
                    </p>
                    <p className="text-xs text-amber-200/90 font-sinhala mt-1">
                      {scenario.scenarioSi}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    <button
                      onClick={() => handleSelectTrend(scenario.id, 'iot')}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        selectedAnswer === 'iot'
                          ? isCorrect
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-black'
                            : 'bg-red-500/20 border-red-400 text-red-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" /> Internet of Things (IoT)
                    </button>

                    <button
                      onClick={() => handleSelectTrend(scenario.id, 'ai')}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        selectedAnswer === 'ai'
                          ? isCorrect
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-black'
                            : 'bg-red-500/20 border-red-400 text-red-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5" /> Artificial Intelligence (AI)
                    </button>

                    <button
                      onClick={() => handleSelectTrend(scenario.id, 'cloud')}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        selectedAnswer === 'cloud'
                          ? isCorrect
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-black'
                            : 'bg-red-500/20 border-red-400 text-red-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Cloud className="w-3.5 h-3.5" /> Cloud Computing
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
