'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { TopHud } from '@/components/hud/TopHud';
import { MobileBottomNav } from '@/components/navigation/MobileBottomNav';
import { DesktopSidebar } from '@/components/navigation/DesktopSidebar';
import { useGameStore } from '@/lib/store';

export interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isSidebarCollapsed = useGameStore((s) => s.isSidebarCollapsed);

  // Check if route requires immersive full-screen focus (e.g. flashcards or quizzes)
  const isImmersive =
    pathname.startsWith('/study/') ||
    pathname.startsWith('/quiz/');

  if (isImmersive) {
    return <main className="min-h-screen bg-canvas">{children}</main>;
  }

  return (
    <div className="min-h-screen bg-canvas text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Persistent Top HUD */}
      <TopHud />

      {/* Desktop Left Rail (>= 1024px) */}
      <DesktopSidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 pb-20 lg:pb-8 ${
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        <div className="w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation Dock (< 1024px, 64px height) */}
      <MobileBottomNav />
    </div>
  );
}
