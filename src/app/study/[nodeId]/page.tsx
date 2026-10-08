'use client';

import React, { useState, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getLevelNode } from '@/data/levelNodes';
import { StoryFlashcardRunner } from '@/components/study/StoryFlashcardRunner';
import { SANDBOX_REGISTRY } from '@/components/sandboxes';
import { CompletionDrawer } from '@/components/completion/CompletionDrawer';
import { useGameStore } from '@/lib/store';
import { AlertCircle, ArrowLeft, Cpu, BookOpen } from 'lucide-react';

function StudyPageContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const nodeId = typeof params?.nodeId === 'string'
    ? params.nodeId
    : Array.isArray(params?.nodeId)
    ? params.nodeId[0]
    : '';

  const node = getLevelNode(nodeId);
  const initialIsSandbox = searchParams?.get('sandbox') === 'true' || node?.type === 'interactive_lab';

  const [isSandboxMode, setIsSandboxMode] = useState<boolean>(Boolean(initialIsSandbox));
  const [showCompletion, setShowCompletion] = useState<boolean>(false);

  if (!node) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-rose-500" />
        </div>
        <h1 className="text-xl font-bold mb-2">Lesson Node Not Found</h1>
        <p className="text-sm text-slate-400 mb-6 max-w-sm">
          The requested syllabus unit or node ID (&quot;{nodeId}&quot;) does not exist.
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

  const SandboxComponent = node.sandboxType ? SANDBOX_REGISTRY[node.sandboxType] : null;

  const handleSandboxComplete = (result?: { stars?: number; xp?: number; accuracy?: number }) => {
    const accuracy = result?.accuracy ?? 100;
    useGameStore.getState().completeNode(node.id, accuracy);
    setShowCompletion(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Sandbox Toggle Header if node has a registered sandbox */}
      {SandboxComponent && (
        <div className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white cursor-pointer min-h-[44px] px-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quest Map</span>
          </button>

          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setIsSandboxMode(false)}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                !isSandboxMode ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory Cards</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSandboxMode(true)}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                isSandboxMode ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Practice Sandbox</span>
            </button>
          </div>
        </div>
      )}

      {/* Main View Area */}
      <div className="flex-1 flex flex-col">
        {isSandboxMode && SandboxComponent ? (
          <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
            <SandboxComponent
              nodeId={node.id}
              onComplete={handleSandboxComplete}
              onExit={() => router.push('/')}
            />
          </div>
        ) : (
          <StoryFlashcardRunner node={node} />
        )}
      </div>

      {/* Completion Modal / Drawer on Sandbox Victory */}
      <CompletionDrawer
        isOpen={showCompletion}
        nodeId={node.id}
        nodeTitleEn={node.title.en}
        nodeTitleSi={node.title.si}
        accuracy={100}
        totalQuestions={1}
        correctAnswers={1}
        onClose={() => {
          setShowCompletion(false);
          router.push('/');
        }}
      />
    </div>
  );
}

export default function StudyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 text-sm">Loading lesson...</div>}>
      <StudyPageContent />
    </Suspense>
  );
}
