'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getLevelNode } from '@/data/levelNodes';
import { BlindQuizRunner } from '@/components/quiz/BlindQuizRunner';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const nodeId = typeof params?.nodeId === 'string' ? params.nodeId : Array.isArray(params?.nodeId) ? params.nodeId[0] : '';

  const node = getLevelNode(nodeId);

  if (!node) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-rose-500" />
        </div>
        <h1 className="text-xl font-bold mb-2">Quiz Node Not Found</h1>
        <p className="text-sm text-slate-400 mb-6 max-w-sm">
          The requested quiz node ID (&quot;{nodeId}&quot;) does not exist.
        </p>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Quest Map</span>
        </button>
      </div>
    );
  }

  return <BlindQuizRunner node={node} />;
}
