'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  ShoppingBag, 
  Sprout, 
  Ship, 
  Radio, 
  Send, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Droplets, 
  Fish, 
  ScanLine, 
  RefreshCw,
  Layers,
  Network
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface EGovScenario {
  id: string;
  title: string;
  badgeYear: string;
  descriptionEn: string;
  descriptionSi: string;
  correctModel: 'G2C' | 'G2B' | 'G2G' | 'G2E';
  explanation: string;
}

const EGOV_SCENARIOS: EGovScenario[] = [
  {
    id: 'eg1',
    title: 'Vehicle Revenue License Renewal (2021 P1 Q06)',
    badgeYear: '2021 O/L Past Paper',
    descriptionEn: 'Krishni accesses the government official portal (www.gov.lk) to renew her vehicle revenue license from home.',
    descriptionSi: 'ක්‍රිෂ්ණි තම වාහන ආදායම් බලපත්‍රය අන්තර්ජාලය (www.gov.lk) හරහා නිවසේ සිට අලුත් කර ගනියි.',
    correctModel: 'G2C',
    explanation: 'Government to Citizen (G2C): Public service delivered directly to an individual citizen.',
  },
  {
    id: 'eg2',
    title: 'Inter-Ministry Diplomatic Clearance',
    badgeYear: 'Core Syllabus',
    descriptionEn: 'The Ministry of Foreign Affairs requests secure diplomatic passport records from the Department of Immigration.',
    descriptionSi: 'විදේශ කටයුතු අමාත්‍යාංශය සහ ආගමන විගමන දෙපාර්තමේන්තුව අතර රාජ්‍ය දත්ත හුවමාරු වීම.',
    correctModel: 'G2G',
    explanation: 'Government to Government (G2G): Digital communication and data transfer between state agencies.',
  },
  {
    id: 'eg3',
    title: 'Corporate Tax & Company Registration',
    badgeYear: 'Core Syllabus',
    descriptionEn: 'Lanka Agro Exports Pvt Ltd files its annual corporate tax and company registry papers on the IRD e-Services portal.',
    descriptionSi: 'පෞද්ගලික සමාගමක් තම වාර්ෂික ආයතනික බදු සහ ලියාපදිංචිය රජයේ බදු ද්වාරය ඔස්සේ සිදු කිරීම.',
    correctModel: 'G2B',
    explanation: 'Government to Business (G2B): Transactions and regulatory filings between government and commercial enterprises.',
  },
  {
    id: 'eg4',
    title: 'Teacher Salary Slip & Leave Portal',
    badgeYear: 'Core Syllabus',
    descriptionEn: 'A government school teacher logs into the Ministry of Education intranet to submit digital leave and download their monthly pay slip.',
    descriptionSi: 'රජයේ ගුරුවරයෙකු තම වැටුප් පත්‍රිකා බාගත කර ගැනීමට හා නිවාඩු අයදුම් කිරීමට අභ්‍යන්තර පද්ධතිය භාවිතා කිරීම.',
    correctModel: 'G2E',
    explanation: 'Government to Employee (G2E): Internal personnel administration between the state and public sector employees.',
  },
];

const MEDICAL_CASES = [
  {
    id: 'med1',
    title: 'Case 1: Deep Brain Cross-Section',
    sinhala: 'මස්තිෂ්ක අභ්‍යන්තර ස්කෑන් පරීක්ෂාව',
    symptom: 'Patient requires detailed 3D soft tissue internal imagery to diagnose a suspected cerebral condition.',
    correctTool: 'MRI / CT Scanner',
    tools: ['MRI / CT Scanner', 'ECG Monitor', 'Barcode Scanner', 'Soil Sensor'],
    explanation: 'MRI (Magnetic Resonance Imaging) and CT (Computerized Tomography) generate high-precision cross-sectional slices of internal organs.',
  },
  {
    id: 'med2',
    title: 'Case 2: Heart Rhythm Arrhythmia',
    sinhala: 'හෘද ස්පන්දන රිද්මය පරීක්ෂාව',
    symptom: 'Cardiologist needs to monitor electrical signals and beats of the heart over a continuous timeframe.',
    correctTool: 'ECG Monitor',
    tools: ['CAT Scanner', 'ECG Monitor', 'LMS Terminal', 'RFID Reader'],
    explanation: 'ECG (Electrocardiogram) monitors and records the electrical impulses of the heart.',
  },
  {
    id: 'med3',
    title: 'Case 3: Remote Rural Surgical Consultation',
    sinhala: 'දුරස්ථ ප්‍රදේශයක රෝගියෙකුට කොළඹින් උපදෙස්',
    symptom: 'A patient in a rural dispensary requires emergency advice from a Colombo specialist surgeon via HD video telemetry.',
    correctTool: 'Telemedicine / Telesurgery',
    tools: ['Telemedicine / Telesurgery', 'ATM Network', 'Soil Sensor', 'POS Terminal'],
    explanation: 'Telemedicine connects remote patients with urban specialists, while Telesurgery allows remote robotic surgical assistance.',
  },
];

export function SmartCityMap() {
  const [activeTab, setActiveTab] = useState<'egov' | 'medical' | 'agro_marine'>('egov');
  
  // e-Gov state
  const [eGovIdx, setEGovIdx] = useState(0);
  const [selectedModel, setSelectedModel] = useState<'G2C' | 'G2B' | 'G2G' | 'G2E' | null>(null);
  const [eGovAnswered, setEGovAnswered] = useState(false);
  const [eGovScore, setEGovScore] = useState(0);

  // Medical state
  const [medIdx, setMedIdx] = useState(0);
  const [selectedMedTool, setSelectedMedTool] = useState<string | null>(null);
  const [medAnswered, setMedAnswered] = useState(false);
  const [activePulse, setActivePulse] = useState(false);

  // Agro & Marine interactive toggles
  const [irrigationActive, setIrrigationActive] = useState(false);
  const [sonarActive, setSonarActive] = useState(false);
  const [soilMoisture, setSoilMoisture] = useState(28); // %
  const [detectedFish, setDetectedFish] = useState(3);

  const curEGov = EGOV_SCENARIOS[eGovIdx];
  const curMed = MEDICAL_CASES[medIdx];

  const handleEGovSelect = (model: 'G2C' | 'G2B' | 'G2G' | 'G2E') => {
    if (eGovAnswered) return;
    sound.playClick();
    setSelectedModel(model);
    setEGovAnswered(true);

    if (model === curEGov.correctModel) {
      sound.playSuccessDing();
      setEGovScore((s) => s + 25);
    } else {
      sound.playBuzzer();
    }
  };

  const handleNextEGov = () => {
    sound.playClick();
    setSelectedModel(null);
    setEGovAnswered(false);
    setEGovIdx((prev) => (prev + 1) % EGOV_SCENARIOS.length);
  };

  const handleMedSelect = (tool: string) => {
    if (medAnswered) return;
    sound.playClick();
    setSelectedMedTool(tool);
    setMedAnswered(true);

    if (tool === curMed.correctTool) {
      sound.playSuccessDing();
      setActivePulse(true);
    } else {
      sound.playBuzzer();
    }
  };

  const handleNextMed = () => {
    sound.playClick();
    setSelectedMedTool(null);
    setMedAnswered(false);
    setActivePulse(false);
    setMedIdx((prev) => (prev + 1) % MEDICAL_CASES.length);
  };

  // Trigger Irrigation
  const triggerIrrigation = () => {
    sound.playSnap();
    setIrrigationActive(true);
    setTimeout(() => {
      setSoilMoisture(75);
      setIrrigationActive(false);
      sound.playSuccessDing();
    }, 1200);
  };

  // Trigger Sonar Ping
  const triggerSonar = () => {
    sound.playBlip(1200);
    setSonarActive(true);
    setTimeout(() => {
      setDetectedFish(Math.floor(Math.random() * 5) + 4);
      setSonarActive(false);
      sound.playSuccessDing();
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Station Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              Station 3: The Connected Island
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-mono">
                e-Gov & ICT Domains
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              විවිධ ක්ෂේත්‍ර වල ICT යෙදවුම් (සෞඛ්‍ය, කෘෂිකර්ම, ධීවර, රාජ්‍ය සේවා)
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('egov');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'egov'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🏛️ e-Government Dispatcher
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('medical');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'medical'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🏥 Medical Diagnostic Lab
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('agro_marine');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'agro_marine'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🌾 Smart Agro & Marine
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. E-GOVERNMENT ROUTE DISPATCHER */}
      {/* ========================================================================= */}
      {activeTab === 'egov' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Routing Hub Canvas */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono uppercase text-indigo-200">
                  Government Secretariat Gateway (gov.lk)
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">Score: {eGovScore} XP</span>
            </div>

            {/* Central Node Visualizer */}
            <div className="my-6 relative flex items-center justify-center">
              {/* Central Gov Server */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-900 border-2 border-indigo-400 shadow-2xl flex flex-col items-center justify-center z-10 text-center p-2">
                <Landmark className="w-8 h-8 text-white" />
                <span className="text-[10px] font-black text-white font-mono mt-1">GOV CORE</span>
              </div>

              {/* 4 Satellite Endpoints */}
              {/* G2C: Top Left */}
              <div className="absolute top-0 left-4 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mx-auto transition-all ${
                    selectedModel === 'G2C'
                      ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/40'
                      : 'bg-slate-900/90 border-slate-700 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-black font-mono">G2C</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Citizen (පුරවැසි)</span>
              </div>

              {/* G2B: Top Right */}
              <div className="absolute top-0 right-4 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mx-auto transition-all ${
                    selectedModel === 'G2B'
                      ? 'bg-amber-500/30 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/40'
                      : 'bg-slate-900/90 border-slate-700 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-black font-mono">G2B</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Business (ව්‍යාපාර)</span>
              </div>

              {/* G2G: Bottom Left */}
              <div className="absolute bottom-0 left-4 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mx-auto transition-all ${
                    selectedModel === 'G2G'
                      ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/40'
                      : 'bg-slate-900/90 border-slate-700 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-black font-mono">G2G</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Gov-to-Gov (රාජ්‍ය)</span>
              </div>

              {/* G2E: Bottom Right */}
              <div className="absolute bottom-0 right-4 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mx-auto transition-all ${
                    selectedModel === 'G2E'
                      ? 'bg-fuchsia-500/30 border-fuchsia-400 text-fuchsia-300 shadow-lg shadow-fuchsia-500/40'
                      : 'bg-slate-900/90 border-slate-700 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-black font-mono">G2E</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Employee (සේවක)</span>
              </div>
            </div>

            {/* Packet Status bar */}
            <div className="p-3 bg-slate-900/80 rounded-xl border border-indigo-900/40 text-xs font-mono flex items-center justify-between">
              <span className="text-slate-400">Target Protocol:</span>
              <span className="text-cyan-400 font-bold">
                {selectedModel ? `Routed to: ${selectedModel}` : 'Awaiting Route Dispatch...'}
              </span>
            </div>
          </div>

          {/* Right: Dispatch Deck & Scenario */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono font-bold">
                {curEGov.badgeYear}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {eGovIdx + 1} / {EGOV_SCENARIOS.length}
              </span>
            </div>

            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white">{curEGov.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {curEGov.descriptionEn}
              </p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-sinhala mt-1">
                {curEGov.descriptionSi}
              </p>
            </div>

            {/* Dispatch Buttons */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Route to which e-Government Model?
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {(['G2C', 'G2B', 'G2G', 'G2E'] as const).map((m) => {
                  const isSelected = selectedModel === m;
                  const isCorrect = curEGov.correctModel === m;

                  let style = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400';
                  if (eGovAnswered) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-700 dark:text-red-300';
                    }
                  }

                  return (
                    <button
                      key={m}
                      disabled={eGovAnswered}
                      onClick={() => handleEGovSelect(m)}
                      className={`p-3 rounded-xl border text-center transition-all ${style}`}
                    >
                      <div className="text-base font-black font-mono">{m}</div>
                      <div className="text-[10px] opacity-75">
                        {m === 'G2C' ? 'Gov-to-Citizen' : m === 'G2B' ? 'Gov-to-Business' : m === 'G2G' ? 'Gov-to-Gov' : 'Gov-to-Employee'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback & Next */}
            {eGovAnswered && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div
                  className={`p-3 rounded-xl text-xs ${
                    selectedModel === curEGov.correctModel
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700'
                      : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700'
                  }`}
                >
                  {curEGov.explanation}
                </div>
                <button
                  onClick={handleNextEGov}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                >
                  <span>Next Dispatch Scenario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MEDICAL DIAGNOSTIC LAB */}
      {/* ========================================================================= */}
      {activeTab === 'medical' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Diagnostic Simulator Canvas */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-indigo-500/30 rounded-3xl p-6 text-slate-100 shadow-2xl flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-rose-400" />
                <span className="text-xs font-mono uppercase text-rose-200">
                  Interactive Healthcare Telemetry
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                Case {medIdx + 1} of {MEDICAL_CASES.length}
              </span>
            </div>

            {/* Dynamic Screen Graphic */}
            <div className="my-6 p-5 rounded-2xl bg-black/60 border border-indigo-500/30 relative flex flex-col items-center justify-center min-h-[200px]">
              {curMed.id === 'med1' ? (
                /* MRI / CT cross section visualizer */
                <div className="text-center space-y-3">
                  <div className="relative w-32 h-32 rounded-full border-2 border-cyan-400/40 mx-auto flex items-center justify-center bg-cyan-950/30 overflow-hidden">
                    {activePulse && (
                      <motion.div
                        initial={{ y: -60 }}
                        animate={{ y: 60 }}
                        transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
                        className="w-full h-1 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                      />
                    )}
                    <ScanLine className="w-14 h-14 text-cyan-300 opacity-80" />
                  </div>
                  <div className="text-xs font-mono text-cyan-300">
                    {activePulse ? '✓ High-Resolution 3D MRI Slice Rendered' : 'Awaiting MRI / CT Unit Coupling...'}
                  </div>
                </div>
              ) : curMed.id === 'med2' ? (
                /* ECG wave */
                <div className="w-full space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>LEAD II • 72 BPM</span>
                    <span>NORMAL SINUS RHYTHM</span>
                  </div>
                  <div className="h-24 w-full bg-slate-950 rounded-xl border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-16 text-emerald-400" viewBox="0 0 300 50">
                      <path
                        d="M 0 25 L 50 25 L 60 10 L 70 40 L 80 5 L 90 45 L 100 25 L 150 25 L 160 10 L 170 40 L 180 5 L 190 45 L 200 25 L 300 25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeDasharray={activePulse ? 'none' : '4 4'}
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                /* Telemedicine */
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto">
                        <Building2 className="w-6 h-6 text-slate-300" />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">Rural Clinic</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-8 h-0.5 bg-indigo-500" />
                      <Radio className="w-5 h-5 text-indigo-400 animate-pulse" />
                      <div className="w-8 h-0.5 bg-indigo-500" />
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-400 flex items-center justify-center mx-auto">
                        <HeartPulse className="w-6 h-6 text-indigo-300" />
                      </div>
                      <span className="text-[10px] text-indigo-300 mt-1 block">Colombo Specialist</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-indigo-300">
                    {activePulse ? '✓ Telemedicine & Telesurgery HD Link Established' : 'Awaiting Telemetry Sync...'}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-indigo-900/40 text-xs text-slate-300 font-sinhala">
              {curMed.sinhala}
            </div>
          </div>

          {/* Right Selection Deck */}
          <div className="lg:col-span-5 clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Medical Device Matcher
              </span>
              <h4 className="text-base font-black text-slate-900 dark:text-white mt-1">
                {curMed.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {curMed.symptom}
              </p>
            </div>

            {/* Select Tool Buttons */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Select the appropriate medical ICT solution:
              </div>
              <div className="space-y-2">
                {curMed.tools.map((tool) => {
                  const isSelected = selectedMedTool === tool;
                  const isCorrect = curMed.correctTool === tool;

                  let style = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400';
                  if (medAnswered) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-700 dark:text-red-300';
                    }
                  }

                  return (
                    <button
                      key={tool}
                      disabled={medAnswered}
                      onClick={() => handleMedSelect(tool)}
                      className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${style}`}
                    >
                      <span>{tool}</span>
                      {medAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {medAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation & Next */}
            {medAnswered && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <p className="text-xs p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">
                  {curMed.explanation}
                </p>
                <button
                  onClick={handleNextMed}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                >
                  <span>Next Medical Case</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SMART AGRO & MARINE HOTSPOTS */}
      {/* ========================================================================= */}
      {activeTab === 'agro_marine' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Smart Agriculture Card */}
          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Sprout className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Smart Agriculture & Greenhouse
                  </h4>
                  <p className="text-xs text-slate-500 font-sinhala">ස්වයංක්‍රීය පාංශු තෙතමනය හා බිංදු ජල සම්පාදනය</p>
                </div>
              </div>
            </div>

            {/* Interactive Meter */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Soil Moisture Level:</span>
                <span className={`font-bold ${soilMoisture < 40 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {soilMoisture}% {soilMoisture < 40 ? '(Dry - Irrigation Needed)' : '(Optimal)'}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    soilMoisture < 40 ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${soilMoisture}%` }}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={triggerIrrigation}
                  disabled={irrigationActive}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/30"
                >
                  <Droplets className="w-3.5 h-3.5" />
                  <span>{irrigationActive ? 'Spraying...' : 'Trigger Smart Irrigation'}</span>
                </button>
                <button
                  onClick={() => setSoilMoisture(25)}
                  className="text-[11px] text-slate-400 hover:text-slate-200"
                >
                  Simulate Dry Soil
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>ICT Advantage in Agriculture:</strong> Automated sensors prevent water wastage, detect crop diseases early, and optimize harvest yield.
            </p>
          </div>

          {/* Smart Marine & Fisheries Card */}
          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
                  <Ship className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Marine Sonar & Deep-Sea GPS
                  </h4>
                  <p className="text-xs text-slate-500 font-sinhala">සෝනාර් මත්ස්‍ය ගහන අනාවරණය හා GPS සංචලනය</p>
                </div>
              </div>
            </div>

            {/* Sonar Interactive Screen */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Acoustic Sonar Ping:</span>
                <span className="text-cyan-400 font-bold">{detectedFish} Shoals Detected</span>
              </div>

              <div className="h-16 bg-slate-950 rounded-xl border border-cyan-500/30 flex items-center justify-around px-4 relative overflow-hidden">
                {sonarActive && (
                  <div className="absolute inset-0 bg-cyan-500/10 animate-pulse pointer-events-none" />
                )}
                {[...Array(detectedFish)].map((_, i) => (
                  <Fish key={i} className="w-5 h-5 text-cyan-400 animate-bounce" />
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={triggerSonar}
                  disabled={sonarActive}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-cyan-600/30"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>{sonarActive ? 'Pinging Sonar...' : 'Broadcast Sonar Ping'}</span>
                </button>
                <span className="text-[11px] font-mono text-slate-400">GPS: 06°56'N, 79°51'E</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>ICT Advantage in Marine:</strong> Satellite telemetry and underwater acoustic sonars guide multi-day trawlers safely and locate fish concentrations efficiently.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
