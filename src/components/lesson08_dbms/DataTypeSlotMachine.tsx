'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Sliders, 
  Layers,
  HelpCircle,
  Hash,
  DollarSign,
  Calendar,
  ToggleLeft
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface FieldChallenge {
  id: string;
  fieldName: string;
  sampleVal: string;
  correctType: string;
  trapType?: string;
  trapWarningEn?: string;
  trapWarningSi?: string;
  explanationEn: string;
  explanationSi: string;
}

const CHALLENGES: FieldChallenge[] = [
  {
    id: 'ch1',
    fieldName: 'TelephoneNo',
    sampleVal: '0712345678',
    correctType: 'Short Text / Text',
    trapType: 'Number',
    trapWarningEn: 'TRAP TRIGGERED! Number data type strips the leading zero to 712345678! Telephone numbers are not used for math calculations and must be stored as Text.',
    trapWarningSi: 'දෝෂයකි! Number වර්ගය මගින් මුල් බිංදුව (0) ඉවත් කරයි. දුරකථන අංක ගණනය කිරීම් සඳහා නොගන්නා බැවින් Text ලෙස තැබිය යුතුය.',
    explanationEn: 'Short Text preserves leading zeros and special characters like (+94).',
    explanationSi: 'Short Text මගින් මුල් බිංදුව සහ විශේෂ සංකේත (+94) ආරක්ෂා කරයි.'
  },
  {
    id: 'ch2',
    fieldName: 'NIC_No',
    sampleVal: '200851234567 / 953412345V',
    correctType: 'Short Text / Text',
    trapType: 'Number',
    trapWarningEn: 'TRAP! Old NICs end with letter "V" which causes data type errors in Number fields.',
    trapWarningSi: 'පැරණි ජාතික හැඳුනුම්පත් අංකවල "V" අක්ෂරය ඇති බැවින් Number වර්ගය වලංගු නොවේ.',
    explanationEn: 'Identity numbers contain letters or leading zeros and are alphanumeric strings.',
    explanationSi: 'හැඳුනුම්පත් අංකවල අකුරු හෝ මුල් බිංදු අඩංගු විය හැකි බැවින් Text විය යුතුය.'
  },
  {
    id: 'ch3',
    fieldName: 'UnitPrice',
    sampleVal: 'Rs. 750.50',
    correctType: 'Currency',
    explanationEn: 'Currency automatically formats monetary values with two decimal precision and currency symbols.',
    explanationSi: 'Currency මගින් මුදල් අගයන් දශමස්ථාන 2 ක් සහිතව නිවැරදිව ආකෘතිකරණය කරයි.'
  },
  {
    id: 'ch4',
    fieldName: 'DateOfBirth',
    sampleVal: '2008-04-12',
    correctType: 'Date / Time',
    explanationEn: 'Date/Time validates calendar months (1-12) and leap years automatically.',
    explanationSi: 'Date/Time මගින් දින දර්ශන ආකෘතිය නිවැරදිව පාලනය කරයි.'
  },
  {
    id: 'ch5',
    fieldName: 'Passed_Exam',
    sampleVal: 'True / False (Yes/No)',
    correctType: 'Yes / No (Boolean)',
    explanationEn: 'Yes/No data type stores binary flags taking up minimal 1-bit storage.',
    explanationSi: 'Yes/No මගින් සත්‍ය/අසත්‍ය ද්වීමය අගයන් අවම ඉඩකින් ගබඩා කරයි.'
  }
];

const DATA_TYPES = [
  'Short Text / Text',
  'Number',
  'Currency',
  'Date / Time',
  'AutoNumber',
  'Yes / No (Boolean)'
];

export function DataTypeSlotMachine() {
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isTrapTriggered, setIsTrapTriggered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentCh = CHALLENGES[selectedChallengeIndex];

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    if (type === currentCh.correctType) {
      sound.playSuccess();
      setIsCorrect(true);
      setIsTrapTriggered(false);
    } else if (currentCh.trapType && type === currentCh.trapType) {
      sound.playError();
      setIsCorrect(false);
      setIsTrapTriggered(true);
    } else {
      sound.playError();
      setIsCorrect(false);
      setIsTrapTriggered(false);
    }
  };

  const handleNextChallenge = () => {
    sound.playSnap();
    if (selectedChallengeIndex < CHALLENGES.length - 1) {
      setSelectedChallengeIndex(i => i + 1);
      setSelectedType(null);
      setIsCorrect(null);
      setIsTrapTriggered(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              STATION 03 • දත්ත වර්ග ගැලපීම
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Telephone & NIC Traps, Currency, Date/Time
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            The Data Type Slot Machine (දත්ත සමුදා දත්ත වර්ග)
          </h2>
          <p className="text-xs text-slate-300">
            Avoid the classic O/L trap: why telephone numbers and NIC numbers must be stored as Text instead of Number.
          </p>
        </div>

        <div className="text-xs font-mono text-blue-400 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
          Field {selectedChallengeIndex + 1} of {CHALLENGES.length}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Slot Matcher */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-5 shadow-2xl">
            {/* Field Card Monitor */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Incoming Field Card:</span>
                <h3 className="text-lg font-black font-mono text-white">{currentCh.fieldName}</h3>
                <div className="text-xs font-mono text-cyan-300 pt-1">Sample Data: {currentCh.sampleVal}</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 font-mono font-bold text-lg">
                DATA
              </div>
            </div>

            {/* Data Type Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300">Select Appropriate Data Type:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {DATA_TYPES.map(type => {
                  const isSelected = selectedType === type;
                  let style = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500';

                  if (isSelected) {
                    if (isCorrect) {
                      style = 'bg-emerald-950 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-500/20';
                    } else {
                      style = 'bg-rose-950 border-rose-500 text-rose-200 shadow-md shadow-rose-500/20';
                    }
                  }

                  return (
                    <button
                      key={type}
                      onClick={() => handleSelectType(type)}
                      className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all text-center ${style}`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trap Warning Alert */}
            {isTrapTriggered && currentCh.trapWarningEn && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-amber-950/90 border border-amber-500 text-amber-200 text-xs space-y-1"
              >
                <div className="font-bold flex items-center gap-1.5 text-amber-300">
                  <AlertTriangle className="w-4 h-4" />
                  <span>2022 O/L EXAM TRAP TRIGGERED!</span>
                </div>
                <p>{currentCh.trapWarningEn}</p>
                <p className="text-[11px] text-amber-400 font-sinhala">{currentCh.trapWarningSi}</p>
              </motion.div>
            )}

            {/* Success Banner */}
            {isCorrect && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs space-y-1"
              >
                <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Correct Data Type Selected!</span>
                </div>
                <p>{currentCh.explanationEn}</p>
                <p className="text-[11px] text-emerald-400 font-sinhala">{currentCh.explanationSi}</p>
              </motion.div>
            )}

            {/* Next Field Action */}
            {isCorrect && selectedChallengeIndex < CHALLENGES.length - 1 && (
              <div className="flex justify-end pt-1">
                <button
                  onClick={handleNextChallenge}
                  className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs shadow-lg shadow-blue-500/20"
                >
                  Next Field Card ➔
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Data Type Reference Guide */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
              Common DBMS Data Types (ප්‍රධාන දත්ත වර්ග)
            </h4>

            <div className="space-y-2 text-[11px] text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-cyan-400">Short Text / Text:</strong> Names, Addresses, Phone Numbers, NICs (Alphanumeric strings up to 255 chars).
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-emerald-400">Number:</strong> Marks, Quantity, Age (Used in mathematical operations).
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-amber-400">Currency:</strong> Monetary figures (Formatted with currency symbol & decimals).
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-purple-400">Date / Time:</strong> Calendar dates and timestamps.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-blue-400">AutoNumber:</strong> Unique sequential integers generated automatically.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-rose-400">Yes / No (Boolean):</strong> Binary choice (True/False).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
