'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Lock, 
  CheckCircle2, 
  Play, 
  Flame, 
  Trophy, 
  Sparkles, 
  Swords, 
  BookOpen, 
  Award, 
  ChevronRight,
  Zap,
  Gamepad2
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { sound } from '@/utils/soundEffects';

interface QuestNode {
  id: string;
  lessonId: string;
  stationId: string;
  unitNumber: number;
  questNumber: number;
  titleEn: string;
  titleSi: string;
  type: 'station' | 'boss' | 'theory';
  icon: string;
  xpReward: number;
}

// Generate quest nodes for Grade 10 & Grade 11
const GRADE_10_QUESTS: QuestNode[] = [
  // Unit 1
  {
    id: 'g10-u1-s1',
    lessonId: 'g10-u1',
    stationId: 'station1',
    unitNumber: 1,
    questNumber: 1,
    titleEn: 'Factory Conveyor (Data vs Info)',
    titleSi: 'දත්ත හා තොරතුරු පද්ධති',
    type: 'station',
    icon: '/assets/clay/thumb-ict-tech.svg',
    xpReward: 50,
  },
  {
    id: 'g10-u1-s2',
    lessonId: 'g10-u1',
    stationId: 'station2',
    unitNumber: 1,
    questNumber: 2,
    titleEn: 'Quality Radar (Info Attributes)',
    titleSi: 'ගුණාත්මක තොරතුරු ලක්ෂණ',
    type: 'station',
    icon: '/assets/clay/exam-paper-creation.svg',
    xpReward: 60,
  },
  {
    id: 'g10-u1-s3',
    lessonId: 'g10-u1',
    stationId: 'station3',
    unitNumber: 1,
    questNumber: 3,
    titleEn: 'Connected Island (e-Gov Grid)',
    titleSi: 'ICT යෙදවුම් හා ඊ-රාජ්‍යය',
    type: 'station',
    icon: '/assets/clay/dispatch-courier-van.svg',
    xpReward: 60,
  },
  {
    id: 'g10-u1-s4',
    lessonId: 'g10-u1',
    stationId: 'station4',
    unitNumber: 1,
    questNumber: 4,
    titleEn: 'Time Machine (1st-5th Gen)',
    titleSi: 'පරිගණක පරම්පරා පරිණාමය',
    type: 'station',
    icon: '/assets/clay/banner-student-saturn.svg',
    xpReward: 75,
  },
  {
    id: 'g10-u1-boss',
    lessonId: 'g10-u1',
    stationId: 'station5',
    unitNumber: 1,
    questNumber: 5,
    titleEn: 'Unit 1 Boss: Past Paper Gauntlet',
    titleSi: '2020 – 2025 විභාග සටන්',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 150,
  },
  // Unit 2
  {
    id: 'g10-u2-s1',
    lessonId: 'g10-u2',
    stationId: 'station1',
    unitNumber: 2,
    questNumber: 6,
    titleEn: 'Motherboard Workbench (CPU & Ports)',
    titleSi: 'පරිගණක දෘඩාංග සංරචක',
    type: 'station',
    icon: '/assets/clay/exam-paper-creation.svg',
    xpReward: 60,
  },
  {
    id: 'g10-u2-s2',
    lessonId: 'g10-u2',
    stationId: 'station2',
    unitNumber: 2,
    questNumber: 7,
    titleEn: 'Memory Hierarchy Lab',
    titleSi: 'මතක ධූරාවලිය සහ ප්‍රවේශ වේගය',
    type: 'station',
    icon: '/assets/clay/banner-admin-station.svg',
    xpReward: 70,
  },
  {
    id: 'g10-u2-boss',
    lessonId: 'g10-u2',
    stationId: 'pastpapers',
    unitNumber: 2,
    questNumber: 8,
    titleEn: 'Unit 2 Boss: Hardware Exam Master',
    titleSi: 'දෘඩාංග විභාග ප්‍රශ්න පත්‍ර',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 150,
  },
  // Unit 3
  {
    id: 'g10-u3-s1',
    lessonId: 'g10-u3',
    stationId: 'station1',
    unitNumber: 3,
    questNumber: 9,
    titleEn: 'Data Representation Foundry',
    titleSi: 'ද්වීමය, අෂ්ටමය හා ෂඩ්දශමය',
    type: 'station',
    icon: '/assets/clay/thumb-theory-openbook.svg',
    xpReward: 80,
  },
  {
    id: 'g10-u3-s2',
    lessonId: 'g10-u3',
    stationId: 'station2',
    unitNumber: 3,
    questNumber: 10,
    titleEn: 'Logic Gates & Truth Table Lab',
    titleSi: 'ලොජික් ද්වාර හා සත්‍යතා වගු',
    type: 'station',
    icon: '/assets/clay/branding-paint-palette.svg',
    xpReward: 90,
  },
  {
    id: 'g10-u3-boss',
    lessonId: 'g10-u3',
    stationId: 'pastpapers',
    unitNumber: 3,
    questNumber: 11,
    titleEn: 'Unit 3 Boss: Logic & Binary Citadel',
    titleSi: 'ලොජික් විභාග අභියෝගය',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 200,
  },
  // Unit 4
  {
    id: 'g10-u4-s1',
    lessonId: 'g10-u4',
    stationId: 'station1',
    unitNumber: 4,
    questNumber: 12,
    titleEn: 'Operating System Engine (Booting & CLI)',
    titleSi: 'මෙහෙයුම් පද්ධති හා Booting',
    type: 'station',
    icon: '/assets/clay/banner-admin-station.svg',
    xpReward: 80,
  },
  // Unit 5 & 6 & 7 & 8
  {
    id: 'g10-u5-s1',
    lessonId: 'g10-u5',
    stationId: 'station1',
    unitNumber: 5,
    questNumber: 13,
    titleEn: 'Word Processing & Mail Merge Studio',
    titleSi: 'වචන සකසුම් හා තැපැල් ඒකාබද්ධතාව',
    type: 'station',
    icon: '/assets/clay/branding-paint-palette.svg',
    xpReward: 85,
  },
  {
    id: 'g10-u6-s1',
    lessonId: 'g10-u6',
    stationId: 'station1',
    unitNumber: 6,
    questNumber: 14,
    titleEn: 'Spreadsheet Formulas & Function Matrix',
    titleSi: 'ඉලෙක්ට්‍රොනික පැතුරුම්පත් සූත්‍ර',
    type: 'station',
    icon: '/assets/clay/exam-marks-spreadsheet.svg',
    xpReward: 90,
  },
  {
    id: 'g10-u8-s1',
    lessonId: 'g10-u8',
    stationId: 'station1',
    unitNumber: 8,
    questNumber: 15,
    titleEn: 'Database Warehouse & ER Relations',
    titleSi: 'දත්ත සමුදා කළමනාකරණය',
    type: 'boss',
    icon: '/assets/clay/store-hero-cart.svg',
    xpReward: 250,
  },
];

const GRADE_11_QUESTS: QuestNode[] = [
  // G11 Unit 1
  {
    id: 'g11-u1-s1',
    lessonId: 'g11-u1',
    stationId: 'station1',
    unitNumber: 1,
    questNumber: 1,
    titleEn: 'Flowchart Mason & IPO Conveyor',
    titleSi: 'ගැලීම් සටහන් හා ගැටලු විශ්ලේෂණය',
    type: 'station',
    icon: '/assets/clay/banner-student-saturn.svg',
    xpReward: 70,
  },
  {
    id: 'g11-u1-s2',
    lessonId: 'g11-u1',
    stationId: 'station2',
    unitNumber: 1,
    questNumber: 2,
    titleEn: 'Trace Table Scrubber & Loops',
    titleSi: 'හෝඩුවා වගු හා පුනරාවර්තන',
    type: 'station',
    icon: '/assets/clay/exam-paper-creation.svg',
    xpReward: 80,
  },
  {
    id: 'g11-u1-s3',
    lessonId: 'g11-u1',
    stationId: 'station3',
    unitNumber: 1,
    questNumber: 3,
    titleEn: 'Pascal Code Terminal & Compiler',
    titleSi: 'පැස්කල් ක්‍රමලේඛන පර්යන්තය',
    type: 'station',
    icon: '/assets/clay/thumb-ict-tech.svg',
    xpReward: 90,
  },
  {
    id: 'g11-u1-boss',
    lessonId: 'g11-u1',
    stationId: 'pastpapers',
    unitNumber: 1,
    questNumber: 4,
    titleEn: 'Programming Boss Arcade (2020-2025)',
    titleSi: 'ක්‍රමලේඛන විභාග සටන්',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 200,
  },
  // G11 Unit 2
  {
    id: 'g11-u2-s1',
    lessonId: 'g11-u2',
    stationId: 'station1',
    unitNumber: 2,
    questNumber: 5,
    titleEn: 'SDLC Investigation & DFD Drafter',
    titleSi: 'SDLC අදියර හා දත්ත ගැලීම් සටහන්',
    type: 'station',
    icon: '/assets/clay/thumb-paper-class.svg',
    xpReward: 80,
  },
  {
    id: 'g11-u2-boss',
    lessonId: 'g11-u2',
    stationId: 'pastpapers',
    unitNumber: 2,
    questNumber: 6,
    titleEn: 'SDLC Deployment & Testing Arena',
    titleSi: 'පද්ධති ස්ථාපනය හා පරීක්ෂණ',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 180,
  },
  // G11 Unit 3
  {
    id: 'g11-u3-s1',
    lessonId: 'g11-u3',
    stationId: 'station1',
    unitNumber: 3,
    questNumber: 7,
    titleEn: 'Network Packet & Protocol Switchboard',
    titleSi: 'අන්තර්ජාල ප්‍රොටෝකෝල (HTTP/SMTP)',
    type: 'station',
    icon: '/assets/clay/dispatch-courier-van.svg',
    xpReward: 90,
  },
  // G11 Unit 4 & 5 & 6
  {
    id: 'g11-u4-s1',
    lessonId: 'g11-u4',
    stationId: 'station1',
    unitNumber: 4,
    questNumber: 8,
    titleEn: 'Multimedia Studio (Lossy vs Lossless)',
    titleSi: 'බහුමාධ්‍ය හා රූප සම්පීඩනය',
    type: 'station',
    icon: '/assets/clay/recordings-cinema.svg',
    xpReward: 90,
  },
  {
    id: 'g11-u5-s1',
    lessonId: 'g11-u5',
    stationId: 'station1',
    unitNumber: 5,
    questNumber: 9,
    titleEn: 'HTML & CSS Web Artisan Workbench',
    titleSi: 'HTML5 හා වෙබ් පිටු නිර්මාණය',
    type: 'station',
    icon: '/assets/clay/branding-paint-palette.svg',
    xpReward: 100,
  },
  {
    id: 'g11-u6-boss',
    lessonId: 'g11-u6',
    stationId: 'pastpapers',
    unitNumber: 6,
    questNumber: 10,
    titleEn: 'ICT & Cyber Ethics Grand Finale',
    titleSi: 'සයිබර් නීතිය හා හරිත පරිගණනය',
    type: 'boss',
    icon: '/assets/clay/grade-report-trophy.svg',
    xpReward: 300,
  },
];

interface QuestRoadmapProps {
  grade: '10' | '11';
}

export function QuestRoadmap({ grade }: QuestRoadmapProps) {
  const { state } = useProgress();
  const quests = grade === '10' ? GRADE_10_QUESTS : GRADE_11_QUESTS;

  // Determine which quest is current (first incomplete quest)
  let activeIndex = quests.findIndex(q => !state.completedStations[q.id]);
  if (activeIndex === -1) activeIndex = quests.length - 1;

  return (
    <div className="space-y-6">
      {/* Top Journey Stats Card */}
      <div className="clay-card p-5 sm:p-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white border border-indigo-500/30 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GRADE {grade} ADVENTURE ROADMAP</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Your Learning Quest Path
            </h2>
            <p className="text-xs text-slate-300 font-sinhala">
              මට්ටමෙන් මට්ටම ඉදිරියට යමින් ලකුණු සහ තරු (Stars) එකතු කරන්න
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            <div className="text-center px-2">
              <div className="text-[10px] text-slate-300 uppercase font-mono">Completed</div>
              <div className="text-lg font-black text-emerald-400">
                {Object.keys(state.completedStations).length} / {quests.length}
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center px-2">
              <div className="text-[10px] text-slate-300 uppercase font-mono">Total XP</div>
              <div className="text-lg font-black text-amber-400">
                {state.points}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winding Level Path (Candy Crush / Duolingo Style Nodes) */}
      <div className="relative py-8 px-4 flex flex-col items-center max-w-2xl mx-auto">
        {quests.map((quest, index) => {
          const isCompleted = !!state.completedStations[quest.id];
          const isCurrent = index === activeIndex;
          const isUnlocked = isCompleted || isCurrent || index <= activeIndex;
          const stars = state.questStars[quest.id] || (isCompleted ? 3 : 0);
          const isBoss = quest.type === 'boss';

          // Zig-zag lateral offset
          const offsets = ['translate-x-0', 'sm:translate-x-12', 'translate-x-0', 'sm:-translate-x-12'];
          const offsetClass = offsets[index % offsets.length];

          return (
            <div
              key={quest.id}
              className={`w-full flex flex-col items-center my-3 relative ${offsetClass}`}
            >
              {/* Vertical Path Connector Cable */}
              {index < quests.length - 1 && (
                <div className="w-2.5 h-12 bg-slate-200 dark:bg-slate-800 rounded-full my-1 relative overflow-hidden">
                  <div
                    className={`w-full h-full transition-all duration-500 ${
                      isCompleted ? 'bg-emerald-500' : 'bg-transparent'
                    }`}
                  />
                </div>
              )}

              {/* Node Card / Orb */}
              <div className="relative group">
                {/* Active Level Glowing Beacon Ring */}
                {isCurrent && (
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="absolute -inset-3 rounded-full bg-indigo-500/40 blur-md pointer-events-none"
                  />
                )}

                <Link
                  href={`/lesson/${grade}/${quest.lessonId}?station=${quest.stationId}`}
                  onClick={() => sound.playClick(isBoss ? 500 : 700)}
                  className={`relative flex items-center gap-4 p-4 rounded-3xl border-3 transition-all duration-300 shadow-xl ${
                    isCurrent
                      ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white border-white dark:border-indigo-400 scale-105 shadow-indigo-500/40 ring-4 ring-indigo-500/30'
                      : isCompleted
                      ? 'bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 border-emerald-400 hover:border-emerald-500 hover:scale-102'
                      : isUnlocked
                      ? 'bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:border-indigo-400 hover:scale-102'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed opacity-75'
                  }`}
                  style={{ minWidth: '280px', maxWidth: '360px' }}
                >
                  {/* Left Icon Orb */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 shadow-md relative ${
                      isBoss
                        ? 'bg-gradient-to-tr from-amber-500 to-red-600 text-white border-amber-300 animate-pulse'
                        : isCurrent
                        ? 'bg-white text-indigo-600 border-white'
                        : isCompleted
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 border-emerald-300'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {isBoss ? (
                      <Swords className="w-7 h-7 text-white" />
                    ) : isCompleted ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    ) : isCurrent ? (
                      <Play className="w-7 h-7 text-indigo-600 fill-indigo-600 ml-0.5 animate-bounce" />
                    ) : isUnlocked ? (
                      <Gamepad2 className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    ) : (
                      <Lock className="w-6 h-6 text-slate-400" />
                    )}

                    {/* Quest Number Bubble */}
                    <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center border border-slate-700 shadow-sm">
                      {quest.questNumber}
                    </span>
                  </div>

                  {/* Quest Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-[10px] font-mono font-black uppercase px-1.5 py-0.2 rounded ${
                        isCurrent 
                          ? 'bg-white/20 text-white' 
                          : isBoss 
                          ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                          : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300'
                      }`}>
                        Unit 0{quest.unitNumber} • {isBoss ? 'BOSS GAUNTLET' : 'QUEST'}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-xs sm:text-sm truncate">
                      {quest.titleEn}
                    </h4>
                    <p className={`text-[10px] font-sinhala truncate ${isCurrent ? 'text-indigo-100' : 'text-slate-400'}`}>
                      {quest.titleSi}
                    </p>

                    {/* Star Rating & XP */}
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3].map((starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-3.5 h-3.5 ${
                              starIdx <= stars
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300 dark:text-slate-700'
                            }`}
                          />
                        ))}
                      </div>

                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-amber-300' : 'text-amber-500'}`}>
                        +{quest.xpReward} XP
                      </span>
                    </div>
                  </div>

                  {/* Right Arrow / Action Indicator */}
                  <div className="shrink-0">
                    <ChevronRight className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
