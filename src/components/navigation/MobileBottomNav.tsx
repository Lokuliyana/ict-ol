import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swords, GitFork, Sparkles, Trophy } from 'lucide-react';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';
import { useGameStore } from '@/lib/store';

interface SpaceTabItem {
  id: string;
  labelEn: string;
  labelSi: string;
  emoji: string;
  href: string;
  icon: React.ElementType;
}

const SPACE_TABS: SpaceTabItem[] = [
  {
    id: 'map',
    labelEn: 'Learn',
    labelSi: 'ඉගෙනුම',
    emoji: '🌳',
    href: '/',
    icon: GitFork,
  },
  {
    id: 'arena',
    labelEn: 'Exam Arena',
    labelSi: 'විභාග අභ්‍යාස',
    emoji: '⚔️',
    href: '/papers',
    icon: Swords,
  },
];

export function MobileBottomNav() {
  const rawPathname = usePathname();
  const pathname = rawPathname || '';
  const language = useGameStore((state) => state.language);

  const isExamArenaActive = pathname.startsWith('/papers');
  const isMapActive = !isExamArenaActive;

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 shadow-2xl pb-safe select-none"
      aria-label="2-Space Mobile Navigation Dock"
    >
      <div className="grid grid-cols-2 h-16 w-full max-w-sm mx-auto items-stretch px-2">
        {SPACE_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === 'arena' ? isExamArenaActive : isMapActive;
          const label = language === 'si' ? tab.labelSi : tab.labelEn;

          return (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => {
                sound.playClick(600);
                triggerHaptic('light');
              }}
              className={`flex flex-col items-center justify-center min-h-[52px] px-2 py-1 transition-all group relative active:scale-95 ${
                isActive
                  ? tab.id === 'arena'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <span
                  className={`absolute top-0 w-16 h-1 rounded-full ${
                    tab.id === 'arena'
                      ? 'bg-amber-500'
                      : 'bg-indigo-600 dark:bg-indigo-400'
                  }`}
                />
              )}
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-sm">{tab.emoji}</span>
                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'stroke-[2.5px]' : 'stroke-2'
                  }`}
                />
              </div>
              <span
                className={`text-xs mt-0.5 tracking-tight truncate ${
                  isActive ? 'font-black' : 'font-semibold'
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

export default MobileBottomNav;

