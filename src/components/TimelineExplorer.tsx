'use client';

import React, { useState } from 'react';
import { Clock, Cpu, Zap, Flame, Award, History } from 'lucide-react';

interface GenInfo {
  gen: string;
  genSi: string;
  period: string;
  hardwareEn: string;
  hardwareSi: string;
  softwareEn: string;
  softwareSi: string;
  characteristicsEn: string;
  characteristicsSi: string;
  systemsEn: string;
  systemsSi: string;
  examHighlight: string;
}

const GENERATIONS: GenInfo[] = [
  {
    gen: "1st Generation",
    genSi: "පළමු පරම්පරාව",
    period: "1940 – 1956",
    hardwareEn: "Vacuum Tubes (ශූන්‍ය පයිප්ප), Punch cards for I/O and storage",
    hardwareSi: "ශූන්‍ය පයිප්ප (Vacuum Tubes), හිඩස්පත් (Punch cards)",
    softwareEn: "Machine language (0s and 1s), Assembly language, Stored Program Concept",
    softwareSi: "යන්ත්‍ර භාෂාව (0 සහ 1), එකලස් භාෂාව (Assembly language)",
    characteristicsEn: "Enormous physical size, extreme heat dissipation, high power consumption, frequent failure, slow processing, very expensive",
    characteristicsSi: "කාමරයක් තරම් විශාල ප්‍රමාණය, අධික තාප උත්පාදනය, අධික විදුලි පරිභෝජනය, නිතර දෝෂ ඇතිවීම, අධික පිරිවැය",
    systemsEn: "ENIAC, EDVAC, EDSAC, UNIVAC, IBM 701",
    systemsSi: "ENIAC, EDVAC, EDSAC, UNIVAC, IBM 701",
    examHighlight: "Exam Tip: Transistors were NOT in the 1st gen! Vacuum tubes only."
  },
  {
    gen: "2nd Generation",
    genSi: "දෙවන පරම්පරාව",
    period: "1956 – 1963",
    hardwareEn: "Transistors (ට්‍රාන්සිස්ටර), Magnetic core memory, Magnetic tape/disk",
    hardwareSi: "ට්‍රාන්සිස්ටර (Transistors), චුම්බක මධ්‍ය මතකය, චුම්බක පටි",
    softwareEn: "High-level programming languages (FORTRAN, COBOL), Assembly language",
    softwareSi: "උසස් පෙළ ක්‍රමලේඛන භාෂා (FORTRAN, COBOL), එකලස් භාෂාව",
    characteristicsEn: "Much smaller than 1st Gen, reduced heat, lower power consumption, higher speed and reliability, expensive",
    characteristicsSi: "පළමු පරම්පරාවට වඩා බෙහෙවින් කුඩායි, අඩු තාපයක්, වැඩි වේගයක් සහ විශ්වාසනීයත්වයක්",
    systemsEn: "Honeywell 400, IBM 7030, CDC 1604, UNIVAC LARC",
    systemsSi: "Honeywell 400, IBM 7030, CDC 1604, UNIVAC LARC",
    examHighlight: "Exam Tip: Introduced High-Level Languages (FORTRAN, COBOL) and Transistors."
  },
  {
    gen: "3rd Generation",
    genSi: "තෙවන පරම්පරාව",
    period: "1964 – 1975",
    hardwareEn: "Integrated Circuits (IC - අනුකලිත පරිපථ), Keyboards, Monitors",
    hardwareSi: "අනුකලිත පරිපථ (IC - Integrated Circuits), යතුරුපුවරු, මොනිටර් තිර",
    softwareEn: "Birth of Operating Systems (OS), Time-sharing OS, sophisticated compilers",
    softwareSi: "මෙහෙයුම් පද්ධතිවල (OS) උපත, බහුවිධ ක්‍රමලේඛන පහසුකම්",
    characteristicsEn: "Significant reduction in size and cost, minimal heat, interactive user interface via keyboard and monitor",
    characteristicsSi: "තවත් කුඩා ප්‍රමාණය, විදුලි පරිභෝජනය ඉතා අඩුයි, යතුරුපුවරුව හා තිරය මගින් සෘජු අන්තර්ක්‍රියාකාරීත්වය",
    systemsEn: "IBM System/360, PDP-8, PDP-11, CDC 6600",
    systemsSi: "IBM System/360, PDP-8, PDP-11, CDC 6600",
    examHighlight: "Exam Tip: Operating Systems (OS) and Integrated Circuits (IC) first emerged here."
  },
  {
    gen: "4th Generation",
    genSi: "සිව්වන පරම්පරාව",
    period: "1975 – 1989",
    hardwareEn: "VLSI (Very Large Scale Integration) / Microprocessors, Personal Computers (PC)",
    hardwareSi: "ක්ෂුද්‍ර සකසන (Microprocessors) / VLSI, පුද්ගල පරිගණක (PCs)",
    softwareEn: "Operating Systems with GUI (Graphical User Interface), UNIX, Windows, Macintosh",
    softwareSi: "චිත්‍රක පරිශීලක අතුරුමුහුණත් (GUI) සහිත මෙහෙයුම් පද්ධති, UNIX, Windows",
    characteristicsEn: "Highly compact, portable, affordable for home/office, computer networks (LAN/Internet genesis)",
    characteristicsSi: "පහසුවෙන් එහා මෙහා ගෙන යා හැකි වීම (Portable), පුද්ගලික භාවිතයට සුදුසු වීම, අඩු මිල",
    systemsEn: "IBM PC, Apple II, Macintosh, Commodore",
    systemsSi: "IBM PC, Apple II, Macintosh, Commodore",
    examHighlight: "Exam Tip (2020 Q37): Microprocessors and GUI Operating Systems belong to 4th Gen!"
  },
  {
    gen: "5th Generation",
    genSi: "පස්වන පරම්පරාව",
    period: "1989 – Present",
    hardwareEn: "ULSI (Ultra Large Scale Integration), Multi-core chips, Optical storage, Internet/Cloud",
    hardwareSi: "ULSI (Ultra Large Scale Integration), බහු-හර චිප, අන්තර්ජාලය සහ වලාකුළු පරිගණනය",
    softwareEn: "Artificial Intelligence (AI), Voice recognition, Neural networks, NLP, Multimedia OS",
    softwareSi: "කෘත්‍රිම බුද්ධිය (AI), හඬ හා අත්අකුරු හඳුනාගැනීම, ස්වභාවික භාෂා සැකසුම",
    characteristicsEn: "Superfast processing, cognitive AI capabilities, mobile/wearable devices, omnipresent connectivity",
    characteristicsSi: "ඉහළම වේගය, කෘත්‍රිම බුද්ධිය මඟින් තීරණ ගැනීම, අත්අකුරු සහ කථන හඳුනාගැනීම",
    systemsEn: "Laptops, Smartphones, AI Cloud Clusters, Quantum computing prototypes",
    systemsSi: "ස්මාර්ට්ෆෝන්, සුපිරි පරිගණක, AI පද්ධති",
    examHighlight: "Exam Tip: Characterized by Artificial Intelligence (AI) and Ultra Large Scale Integration (ULSI)."
  }
];

const PIONEERS = [
  { name: "Abacus (ඇබකසය)", year: "5000 years ago", descEn: "First calculating device used for addition and arithmetic operations.", descSi: "සංඛ්‍යා එකතු කිරීම සඳහා භාවිත කළ ලොව ප්‍රථම ගණක උපකරණය." },
  { name: "Blaise Pascal", year: "1642", descEn: "Invented the Adding Machine (Pascaline) - world's first mechanical calculator.", descSi: "ලොව පළමු යාන්ත්‍රික ගණිත කර්ම කරන උපකරණය වන Adding Machine නිපදවන ලදී." },
  { name: "Gottfried Von Leibnitz", year: "1674", descEn: "Enhanced Pascal's machine to perform multiplication and division.", descSi: "පැස්කල්ගේ යන්ත්‍රය වැඩිදියුණු කර ගුණකිරීම් සහ බෙදීම් ද කළ හැකි පරිදි සකසන ලදී." },
  { name: "Joseph Jacquard", year: "1801", descEn: "Invented mechanical loom using Punch Card System.", descSi: "හිඩස්පත් ක්‍රමය (Punch Card System) මගින් ක්‍රියාකරන රෙදි වියන යන්ත්‍රයක් නිර්මාණය කළේය." },
  { name: "Charles Babbage", year: "1837", descEn: "Father of Computing: Designed the Analytical Engine based on Input, Process, Output & Store.", descSi: "පරිගණකයේ පියා: ආදානය, සැකසීම, ප්‍රතිදානය හා ආචයනය සංකල්ප සහිත Analytical Engine නිර්මාණය කළේය." },
  { name: "Ada Augusta Lovelace", year: "1843", descEn: "First Computer Programmer: Wrote the earliest algorithms for Babbage's Analytical Engine.", descSi: "ලොව පළමු පරිගණක ක්‍රමලේඛිකාව: Analytical Engine සඳහා ක්‍රමලේඛ ලිවීම සිදු කළාය." },
  { name: "Howard Aiken", year: "1944", descEn: "Invented Harvard MARK 1 (Automatic Sequence Control Calculator) with IBM.", descSi: "IBM සහයෙන් Harvard Mark 1 (Automatic Sequence Control Calculator) යන්ත්‍රය නිපදවන ලදී." }
];

export function TimelineExplorer() {
  const [activeTab, setActiveTab] = useState<'generations' | 'pioneers'>('generations');
  const [selectedGenIndex, setSelectedGenIndex] = useState<number>(3); // 4th Gen default

  const currentGen = GENERATIONS[selectedGenIndex];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm my-5 transition-all">
      {/* Title & Mode Switcher */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Evolution of Computing Timeline & Generations
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              පරිගණකයේ පරිණාමය සහ පරම්පරා 5 සවිස්තරාත්මක විමර්ශනය
            </p>
          </div>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
          <button
            onClick={() => setActiveTab('generations')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'generations' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 font-semibold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            5 Generations (පරම්පරා 5)
          </button>
          <button
            onClick={() => setActiveTab('pioneers')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pioneers' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 font-semibold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Pioneers & Inventors (පුරෝගාමීන්)
          </button>
        </div>
      </div>

      {activeTab === 'generations' ? (
        <div>
          {/* Generations Slider Buttons */}
          <div className="grid grid-cols-5 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl mb-4">
            {GENERATIONS.map((g, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGenIndex(idx)}
                className={`py-2 px-1 text-center rounded-lg transition-all ${
                  selectedGenIndex === idx
                    ? 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700/60 font-medium'
                }`}
              >
                <div className="text-[11px] sm:text-xs">{idx + 1}st Gen</div>
                <div className="text-[9px] opacity-80 hidden sm:block">{g.period}</div>
              </button>
            ))}
          </div>

          {/* Current Generation Detail Card */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3.5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 pb-2 border-b border-slate-200/80 dark:border-slate-750">
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-900 dark:text-white">
                  {currentGen.gen} ({currentGen.genSi})
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">
                  {currentGen.period}
                </span>
              </div>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                {currentGen.examHighlight}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Hardware */}
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                  Core Hardware Technology (ප්‍රධාන දෘඩාංග තාක්ෂණය)
                </span>
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{currentGen.hardwareEn}</p>
                <p className="text-slate-500 dark:text-slate-400 font-sinhala">{currentGen.hardwareSi}</p>
              </div>

              {/* Software */}
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase text-cyan-600 dark:text-cyan-400 block mb-1">
                  Software Used (භාවිත කළ මෘදුකාංග)
                </span>
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{currentGen.softwareEn}</p>
                <p className="text-slate-500 dark:text-slate-400 font-sinhala">{currentGen.softwareSi}</p>
              </div>

              {/* Characteristics */}
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 block mb-1">
                  Characteristics & Physical Specs (ප්‍රධාන ලක්ෂණ)
                </span>
                <p className="text-slate-700 dark:text-slate-300 mb-1">{currentGen.characteristicsEn}</p>
                <p className="text-slate-500 dark:text-slate-400 font-sinhala">{currentGen.characteristicsSi}</p>
              </div>

              {/* Example Systems */}
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                  Famous Systems Invented (නිර්මාණය වූ පද්ධති)
                </span>
                <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">{currentGen.systemsEn}</p>
                <p className="text-slate-500 dark:text-slate-400 font-sinhala">{currentGen.systemsSi}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Pioneers List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PIONEERS.map((p, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <h5 className="font-bold text-xs text-indigo-700 dark:text-indigo-400">
                  {p.name}
                </h5>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono font-semibold">
                  {p.year}
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-1 leading-snug">
                {p.descEn}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala leading-relaxed">
                {p.descSi}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
