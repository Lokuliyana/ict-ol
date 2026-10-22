'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { WorkspaceNavbar } from '@/components/navigation/WorkspaceNavbar';
import { MobileBottomNav } from '@/components/navigation/MobileBottomNav';
import { WorkspaceSidebar } from '@/components/navigation/WorkspaceSidebar';
import { useGameStore } from '@/lib/store';

export interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const rawPathname = usePathname();
  const currentPath = rawPathname || '';
  const isSidebarCollapsed = useGameStore((s) => s.isSidebarCollapsed);

  // Routes that require completely isolated, full-screen distraction-free immersion or print layout
  const isImmersive =
    currentPath.startsWith('/study/') ||
    currentPath.startsWith('/quiz/') ||
    currentPath.startsWith('/revision-sheet/') ||
    currentPath.startsWith('/lesson/') ||
    currentPath === '/lesson';

  if (isImmersive) {
    return <main className="min-h-screen bg-canvas">{children}</main>;
  }

  return (
    <div className="min-h-screen bg-canvas text-slate-900 dark:text-slate-100 flex flex-col">
      {/* 56px Unified Top Workspace Navbar */}
      <WorkspaceNavbar />

      {/* Left Syllabus Rail (Desktop >= 1024px) & Off-Canvas Drawer (Mobile < 1024px) */}
      <WorkspaceSidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed
            ? 'lg:pl-20 pb-20 lg:pb-8'
            : 'lg:pl-80 pb-20 lg:pb-8'
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
