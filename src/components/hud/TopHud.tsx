'use client';

import React from 'react';
import { WorkspaceNavbar, WorkspaceNavbarProps } from '@/components/navigation/WorkspaceNavbar';

export interface TopHudProps extends WorkspaceNavbarProps {
  onOpenSettings?: () => void;
  onOpenHeartModal?: () => void;
}

/**
 * @deprecated Use WorkspaceNavbar directly. Retained for backwards compatibility.
 */
export function TopHud(props: TopHudProps) {
  return <WorkspaceNavbar {...props} />;
}
