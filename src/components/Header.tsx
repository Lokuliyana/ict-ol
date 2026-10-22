'use client';

import React from 'react';
import { WorkspaceNavbar, WorkspaceNavbarProps } from '@/components/navigation/WorkspaceNavbar';

export interface HeaderProps extends WorkspaceNavbarProps {
  currentGrade?: string;
  currentLessonTitle?: string;
  currentLessonId?: string;
}

/**
 * @deprecated Use WorkspaceNavbar directly. Retained for backwards compatibility.
 */
export function Header(props: HeaderProps) {
  return <WorkspaceNavbar {...props} />;
}
