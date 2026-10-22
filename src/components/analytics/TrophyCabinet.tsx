'use client';

import React from 'react';
import { Trophy, Award, Star, Flame, Shield, Swords, CheckCircle2, Lock } from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { CURRICULUM_DATA } from '@/data/curriculum';

export function TrophyCabinet() {
  const badges = useGameStore((s) => s.badges || []);
  const streak = useGameStore((s) => s.streak || 0);
  const xp = useGameStore((s) => s.xp || 0);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const language = useGameStore((s) => s.language);

  // 15 Unit Boss Badges
  const unitBadges = CURRICULUM_DATA.map((unit) => {
    const isUnlocked = badges.includes(`${unit.id}-boss`) || badges.includes(unit.id);
    return {
      id: unit.id,
      titleEn: `Unit ${unit.unitNumber} Master`,
      titleSi: `ඒකකය ${unit.unitNumber} ප්‍රවීණ`,
      unitTitle: unit.titleEn,
      isUnlocked,
      emoji: unit.grade === '10' ? '🛡️' : '⚔️',
    };
  });

  const streakTrophy = streak >= 7;
  const xpCenturyTrophy = xp >= 1000;
  const masterTrophy = Object.keys(completedNodes).length >= 10;

  return (
    <div className="clay-card p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{language === 'si' ? 'O/L කුසලාන ප්‍රදර්ශනාගාරය' : 'O/L Trophy Cabinet'}</span>
              <span className="text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">
                {badges.length + (streakTrophy ? 1 : 0) + (xpCenturyTrophy ? 1 : 0)} Unlocked
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'si'
                ? 'විෂය ඒකක හා අභියෝග සම්පූර්ණ කර කුසලාන දිනාගන්න'
                : 'Conquer unit boss arenas and milestone drills to unlock trophies'}
            </p>
          </div>
        </div>
      </div>

      {/* Special Milestone Trophies */}
      <div className="grid grid-cols-3 gap-3">
        <div
          className={`p-3.5 rounded-2xl border text-center transition-all ${
            streakTrophy
              ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/60 shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
          }`}
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-1.5">
            <Flame className="w-5 h-5 fill-amber-500" />
          </div>
          <span className="text-xs font-bold block text-slate-900 dark:text-white">7-Day Fire</span>
          <span className="text-[10px] text-slate-500">{streakTrophy ? 'Earned' : `${streak}/7 days`}</span>
        </div>

        <div
          className={`p-3.5 rounded-2xl border text-center transition-all ${
            xpCenturyTrophy
              ? 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-800/60 shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
          }`}
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-1.5">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold block text-slate-900 dark:text-white">1K XP Club</span>
          <span className="text-[10px] text-slate-500">{xpCenturyTrophy ? 'Unlocked' : `${xp}/1000`}</span>
        </div>

        <div
          className={`p-3.5 rounded-2xl border text-center transition-all ${
            masterTrophy
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
          }`}
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1.5">
            <Star className="w-5 h-5 fill-emerald-500" />
          </div>
          <span className="text-xs font-bold block text-slate-900 dark:text-white">10 Quest Nodes</span>
          <span className="text-[10px] text-slate-500">{masterTrophy ? 'Achieved' : 'In Progress'}</span>
        </div>
      </div>

      {/* 15 Unit Boss Arena Badges Grid */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
          Syllabus Boss Arena Medals (15 Units)
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
          {unitBadges.map((badge) => (
            <div
              key={badge.id}
              className={`p-2.5 rounded-2xl border text-center transition-all ${
                badge.isUnlocked
                  ? 'bg-gradient-to-b from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 border-amber-300 dark:border-amber-700 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'
              }`}
              title={badge.unitTitle}
            >
              <div className="text-2xl mb-1">{badge.isUnlocked ? badge.emoji : '🔒'}</div>
              <span className="text-[11px] font-bold block truncate text-slate-800 dark:text-slate-200">
                {badge.id.toUpperCase()}
              </span>
              <span className="text-[9px] text-slate-500 block truncate">
                {badge.isUnlocked ? 'Boss Clear' : 'Locked'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
