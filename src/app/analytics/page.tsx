'use client';

import React from 'react';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';
import { TrophyCabinet } from '@/components/analytics/TrophyCabinet';
import { PeerLeagueTable } from '@/components/analytics/PeerLeagueTable';

export default function AnalyticsPage() {
  return (
    <div className="w-full">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <AnalyticsDashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrophyCabinet />
          <PeerLeagueTable />
        </div>
      </main>
    </div>
  );
}

