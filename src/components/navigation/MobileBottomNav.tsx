'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, BookOpen, FileText, BarChart2 } from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { useGameStore } from '@/lib/store';

interface NavItem {
  id: string;
  labelEn: string;
  labelSi: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'map',
    labelEn: 'Map',
    labelSi: 'සිතියම',
    href: '/',
    icon: Map,
  },
  {
    id: 'lessons',
    labelEn: 'Lessons',
    labelSi: 'පාඩම්',
    href: '/#curriculum',
    icon: BookOpen,
  },
  {
    id: 'papers',
    labelEn: 'Papers',
    labelSi: 'ප්‍රශ්න',
    href: '/papers',
    icon: FileText,
  },
  {
    id: 'analytics',
    labelEn: 'Mastery',
    labelSi: 'ප්‍රගතිය',
    href: '/analytics',
    icon: BarChart2,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const language = useGameStore((state) => state.language);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 shadow-2xl safe-bottom select-none"
      aria-label="Mobile Navigation Dock"
    >
      <div className="grid grid-cols-4 h-16 w-full max-w-md mx-auto items-stretch">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href.replace('/#', '/'));
          const label = language === 'si' ? item.labelSi : item.labelEn;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => sound.playClick(600)}
              className={`flex flex-col items-center justify-center min-h-[48px] min-w-[48px] px-1 py-1 transition-all group relative active:scale-95 ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <span className="absolute top-1 w-8 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              )}
              <Icon
                className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                  isActive ? 'stroke-[2.5px]' : 'stroke-2'
                }`}
              />
              <span
                className={`text-[10px] mt-1 font-bold tracking-tight truncate max-w-[64px] ${
                  isActive ? 'font-black' : 'font-medium'
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
