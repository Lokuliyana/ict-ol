'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Map,
  BookOpen,
  FileText,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  Zap,
} from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';

interface SidebarItem {
  id: string;
  labelEn: string;
  labelSi: string;
  href: string;
  icon: React.ElementType;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'map',
    labelEn: 'Quest Map',
    labelSi: 'ක්‍රීඩා සිතියම',
    href: '/',
    icon: Map,
  },
  {
    id: 'lessons',
    labelEn: 'Curriculum Library',
    labelSi: 'විෂය නිර්දේශය',
    href: '/#curriculum',
    icon: BookOpen,
  },
  {
    id: 'papers',
    labelEn: 'Past Paper Arena',
    labelSi: 'පසුගිය විභාග ප්‍රශ්න',
    href: '/papers',
    icon: FileText,
  },
  {
    id: 'analytics',
    labelEn: 'Progress & Mastery',
    labelSi: 'ප්‍රගති වාර්තාව',
    href: '/analytics',
    icon: BarChart2,
  },
];

export function DesktopSidebar() {
  const pathname = usePathname();
  const collapsed = useGameStore((s) => s.isSidebarCollapsed);
  const toggleSidebarCollapsed = useGameStore((s) => s.toggleSidebarCollapsed);
  const streak = useGameStore((s) => s.streak);
  const xp = useGameStore((s) => s.xp);

  // Setup Ctrl+B keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        useGameStore.getState().toggleSidebarCollapsed();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleCollapse = () => {
    sound.playClick(650);
    toggleSidebarCollapsed();
  };

  return (
    <aside
      className={`hidden lg:flex flex-col fixed top-14 bottom-0 left-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 transition-all duration-300 select-none ${
        collapsed ? 'w-20' : 'w-64'
      }`}
      aria-label="Desktop Navigation Rail"
    >
      {/* Rail Collapse Toggle Sub-header */}
      <div className="h-10 flex items-center justify-between px-3 border-b border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-slate-500 dark:text-slate-400">
        {!collapsed && <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Navigation</span>}
        <button
          type="button"
          onClick={toggleCollapse}
          className={`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${collapsed ? 'mx-auto' : ''}`}
          title={collapsed ? 'Expand Sidebar (Ctrl+B)' : 'Collapse Sidebar (Ctrl+B)'}
          aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-4 px-2 space-y-1.5 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href.replace('/#', '/'));

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => sound.playClick(600)}
              className={`flex items-center gap-3.5 px-3 py-3 rounded-2xl min-h-[48px] font-bold text-sm transition-all group ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={collapsed ? item.labelEn : undefined}
            >
              <Icon
                className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-indigo-600'
                }`}
              />
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="leading-tight">{item.labelEn}</span>
                  <span className={`text-[11px] font-normal ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {item.labelSi}
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Profile Summary Card */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-500 font-mono">
                <Flame className="w-4 h-4 fill-amber-500" />
                {streak} Day Streak
              </span>
              <span className="flex items-center gap-1.5 text-indigo-500 font-mono">
                <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                {xp} XP
              </span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
