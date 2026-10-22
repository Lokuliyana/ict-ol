'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type ConnectorStatus = 'completed' | 'active' | 'locked';

export interface TreeSvgConnectorProps {
  id?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  status: ConnectorStatus;
  curvature?: number;
  className?: string;
  animate?: boolean;
}

/**
 * Calculates a smooth cubic Bezier curve path string between (startX, startY) and (endX, endY).
 * Specifically tuned for vertical knowledge tree flow:
 * Leaving downwards from parent bottom center, entering downwards into child top center.
 */
export function calculateCubicBezierPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  curvature: number = 0.5
): string {
  if (
    !Number.isFinite(startX) ||
    !Number.isFinite(startY) ||
    !Number.isFinite(endX) ||
    !Number.isFinite(endY)
  ) {
    return 'M 0 0 C 0 0, 0 0, 0 0';
  }

  const safeCurvature = Number.isFinite(curvature) && curvature >= 0 ? curvature : 0.5;
  const safeStartX = Math.max(0, startX);
  const safeStartY = Math.max(0, startY);
  const safeEndX = Math.max(0, endX);
  const safeEndY = Math.max(0, endY);

  const dy = Math.max(1, Math.abs(safeEndY - safeStartY));
  const verticalOffset = Math.max(20, dy * safeCurvature);

  const isDownward = safeEndY >= safeStartY;
  const cp1X = safeStartX;
  const cp1Y = isDownward ? safeStartY + verticalOffset : Math.max(0, safeStartY - verticalOffset);
  const cp2X = safeEndX;
  const cp2Y = isDownward ? Math.max(0, safeEndY - verticalOffset) : safeEndY + verticalOffset;

  return `M ${safeStartX} ${safeStartY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${safeEndX} ${safeEndY}`;
}

/**
 * Returns visual attributes (stroke, strokeWidth, dasharray, filters) for a given connector status.
 */
export function getConnectorStyle(status: ConnectorStatus, uniqueId: string = 'def') {
  switch (status) {
    case 'completed':
      return {
        stroke: '#10b981', // Tailwind emerald-500
        strokeWidth: 3,
        strokeDasharray: undefined,
        filter: `url(#glow-completed-${uniqueId})`,
        opacity: 0.95,
      };
    case 'active':
      return {
        stroke: `url(#gradient-active-${uniqueId})`,
        strokeWidth: 3,
        strokeDasharray: undefined,
        filter: `url(#glow-active-${uniqueId})`,
        opacity: 1,
      };
    case 'locked':
    default:
      return {
        stroke: '#94a3b8', // Tailwind slate-400 (slate-300/700 in light/dark)
        strokeWidth: 2,
        strokeDasharray: '6 6',
        filter: undefined,
        opacity: 0.55,
      };
  }
}

/**
 * TreeSvgConnector
 * Renders dynamic cubic Bezier curves between parent anchor and child anchor.
 * Supports:
 * - 'completed': stroke-emerald-500 (solid 3px, subtle soft glow)
 * - 'active': stroke-indigo-500 to stroke-sky-400 (animated gradient pulse)
 * - 'locked': stroke-slate-300 dark:stroke-slate-700 (dashed 2px: strokeDasharray="6 6")
 */
export function TreeSvgConnector({
  id = 'tree-connector',
  startX,
  startY,
  endX,
  endY,
  status,
  curvature = 0.5,
  className = '',
  animate = true,
}: TreeSvgConnectorProps) {
  const pathD = calculateCubicBezierPath(startX, startY, endX, endY, curvature);
  const style = getConnectorStyle(status, id);

  return (
    <g className={`tree-svg-connector ${className}`} data-status={status}>
      <defs>
        {/* Glow filter for completed nodes */}
        <filter id={`glow-completed-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10b981" floodOpacity="0.45" />
        </filter>

        {/* Glow filter for active nodes */}
        <filter id={`glow-active-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#6366f1" floodOpacity="0.4" />
        </filter>

        {/* Dynamic gradient for active pulse: indigo-500 to sky-400 aligned with path endpoints */}
        <linearGradient
          id={`gradient-active-${id}`}
          x1={startX}
          y1={startY}
          x2={endX}
          y2={startY === endY ? startY + 1 : endY}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Background shadow path for depth */}
      <path
        d={pathD}
        fill="none"
        stroke={status === 'completed' ? '#047857' : status === 'active' ? '#4338ca' : 'transparent'}
        strokeWidth={style.strokeWidth + 2}
        opacity={0.15}
      />

      {/* Main connector curve */}
      {status === 'active' && animate ? (
        <motion.path
          d={pathD}
          fill="none"
          stroke={style.stroke}
          strokeWidth={style.strokeWidth}
          filter={style.filter}
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{
            pathLength: 1,
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            pathLength: { duration: 0.4, ease: 'easeOut' },
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ) : (
        <path
          d={pathD}
          fill="none"
          stroke={style.stroke}
          strokeWidth={style.strokeWidth}
          strokeDasharray={style.strokeDasharray}
          filter={style.filter}
          opacity={style.opacity}
        />
      )}

      {/* Start anchor dot */}
      <circle
        cx={startX}
        cy={startY}
        r={status === 'locked' ? 2.5 : 3.5}
        fill={status === 'completed' ? '#10b981' : status === 'active' ? '#6366f1' : '#94a3b8'}
        opacity={status === 'locked' ? 0.6 : 1}
      />

      {/* End anchor dot */}
      <circle
        cx={endX}
        cy={endY}
        r={status === 'locked' ? 2.5 : 3.5}
        fill={status === 'completed' ? '#10b981' : status === 'active' ? '#38bdf8' : '#94a3b8'}
        opacity={status === 'locked' ? 0.6 : 1}
      />
    </g>
  );
}

export default TreeSvgConnector;
