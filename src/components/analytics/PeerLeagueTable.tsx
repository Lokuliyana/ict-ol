'use client';

import React from 'react';
import { Shield, Sparkles, TrendingUp, Award, User } from 'lucide-react';
import { useGameStore } from '@/lib/store';

interface LeaguePeer {
  id: string;
  name: string;
  schoolDistrict: string;
  avatar: string;
  xp: number;
  streak: number;
  isCurrentUser?: boolean;
}

export function PeerLeagueTable() {
  const userXp = useGameStore((s) => s.xp || 150);
  const userStreak = useGameStore((s) => s.streak || 3);
  const language = useGameStore((s) => s.language);

  // Dynamic simulation of 8 peer students around user XP
  const peers: LeaguePeer[] = [
    { id: 'p1', name: 'Kavindu P.', schoolDistrict: 'Colombo', avatar: '🦁', xp: Math.max(1200, userXp + 350), streak: 8 },
    { id: 'p2', name: 'Nimesha S.', schoolDistrict: 'Kandy', avatar: '🌸', xp: Math.max(980, userXp + 190), streak: 6 },
    { id: 'p3', name: 'Dinuka M.', schoolDistrict: 'Galle', avatar: '🌊', xp: Math.max(850, userXp + 60), streak: 5 },
    { id: 'user', name: 'You (ඔබ)', schoolDistrict: 'Your School', avatar: '⚡', xp: userXp, streak: userStreak, isCurrentUser: true },
    { id: 'p4', name: 'Thisara F.', schoolDistrict: 'Kurunegala', avatar: '🌴', xp: Math.max(200, userXp - 40), streak: 3 },
    { id: 'p5', name: 'Sachini D.', schoolDistrict: 'Matara', avatar: '💎', xp: Math.max(150, userXp - 90), streak: 4 },
    { id: 'p6', name: 'Amila W.', schoolDistrict: 'Gampaha', avatar: '🚀', xp: Math.max(100, userXp - 140), streak: 2 },
    { id: 'p7', name: 'Praveen T.', schoolDistrict: 'Badulla', avatar: '🎯', xp: Math.max(80, userXp - 180), streak: 1 },
  ].sort((a, b) => b.xp - a.xp);

  const userRank = peers.findIndex((p) => p.isCurrentUser) + 1;

  return (
    <div className="clay-card p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{language === 'si' ? 'සතිපතා සම වයස් ලීගය' : 'Weekly Peer XP League'}</span>
              <span className="text-xs bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded-full">
                Gold Tier
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'si'
                ? 'සම වයස් සිසුන් සමඟ තරග කර ඉහළට යන්න'
                : 'Study consistently to climb into the Diamond promotion zone'}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Your Rank</span>
          <span className="text-xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
            #{userRank}
          </span>
        </div>
      </div>

      {/* Peer Rows */}
      <div className="space-y-2 pt-1">
        {peers.map((peer, idx) => {
          const rank = idx + 1;
          const isTop3 = rank <= 3;
          return (
            <div
              key={peer.id}
              className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                peer.isCurrentUser
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-700 shadow-sm ring-1 ring-indigo-500/30'
                  : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 text-center font-mono font-black text-xs ${
                    rank === 1
                      ? 'text-amber-500 font-black text-sm'
                      : rank === 2
                      ? 'text-slate-400 font-black'
                      : rank === 3
                      ? 'text-amber-700 font-black'
                      : 'text-slate-400'
                  }`}
                >
                  {rank}
                </span>

                <div className="text-xl">{peer.avatar}</div>

                <div>
                  <span
                    className={`text-xs block font-bold ${
                      peer.isCurrentUser
                        ? 'text-indigo-700 dark:text-indigo-300 font-black'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {peer.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    {peer.schoolDistrict} • {peer.streak}d streak
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono font-extrabold text-slate-900 dark:text-white block">
                  {peer.xp.toLocaleString()} XP
                </span>
                {isTop3 && (
                  <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400">
                    Promotion Zone
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
