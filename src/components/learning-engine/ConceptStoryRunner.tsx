'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Lightbulb,
  Gamepad2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  BrainCircuit,
  Volume2,
  Bookmark,
  Edit3,
  Check,
  X,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { SyllabusTreeNode } from '@/types/treeSyllabus';
import { FormattedText } from '@/components/study/FormattedText';
import { BilingualTermPeek } from '@/components/study/BilingualTermPeek';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { speakTechnicalTerm } from '@/utils/speechUtils';
import { triggerHaptic } from '@/utils/haptics';
import { ScratchpadModal } from '@/components/study/ScratchpadModal';
import { EmbeddedTactileWidget } from './nodes/EmbeddedTactileWidget';
import { EmbeddedRecallCheck } from './nodes/EmbeddedRecallCheck';
import { MascotCompanion, MascotMood } from './MascotCompanion';
import { SessionBottomDrawer } from './SessionBottomDrawer';
import {
  getConceptMasteryQuestion,
  ConceptMasteryQuestion,
} from '@/data/questionBanks/conceptMasteryMatcher';

export type StoryBeat = 'theory' | 'tactile' | 'mastery_challenge' | 'celebration';

export interface ConceptStoryRunnerProps {
  unitId: string;
  leafNode: SyllabusTreeNode;
  leafIndex: number;
  totalLeaves: number;
  parentBranchTitleEn?: string;
  parentBranchTitleSi?: string;
  language?: 'en' | 'si' | 'dual';
  isCompleted?: boolean;
  prevLeaf?: SyllabusTreeNode | null;
  nextLeaf?: SyllabusTreeNode | null;
  checkpointNodeId?: string;
  initialCardStep?: number;
  onSelectNode: (nodeId: string) => void;
  onToggleTree?: () => void;
  isTreeCollapsed?: boolean;
  onOpenWorkbench?: () => void;
  hasWorkbenchLab?: boolean;
  className?: string;
}

export function ConceptStoryRunner({
  unitId,
  leafNode,
  leafIndex,
  totalLeaves,
  parentBranchTitleEn,
  parentBranchTitleSi,
  language = 'dual',
  isCompleted = false,
  prevLeaf,
  nextLeaf,
  checkpointNodeId,
  initialCardStep = 0,
  onSelectNode,
  onToggleTree,
  isTreeCollapsed = false,
  onOpenWorkbench,
  hasWorkbenchLab = false,
  className = '',
}: ConceptStoryRunnerProps) {
  const addXp = useGameStore((s) => s.addXp);
  const completeNode = useGameStore((s) => s.completeNode);
  const completedNodes = useGameStore((s) => s.completedNodes || {});
  const completedParts = useGameStore((s) => s.completedParts || {});
  const bookmarks = useGameStore((s) => s.bookmarks || []);
  const toggleBookmark = useGameStore((s) => s.toggleBookmark);

  const isNodeMastered = isCompleted || !!completedNodes[leafNode.id] || !!completedParts[`${unitId}-${leafNode.id}`];

  // Story Runner active beat & Progressive Card Deck step index
  // Step 0: Card 1 (Atomic Hook)
  // Step 1: Card 2 (Mental Model Graphic)
  // Step 2: Card 3 (15-Second Micro-Sandbox)
  // Step 3: Card 4 (Authentic Mastery Question Gate - Beat 3: Prove)
  // Step 4: Card 5 (Celebration Victory Banner)
  const [activeCardStep, setActiveCardStep] = useState<number>(initialCardStep);
  const [currentBeat, setCurrentBeat] = useState<StoryBeat>(
    initialCardStep === 2
      ? 'tactile'
      : initialCardStep === 3
      ? 'mastery_challenge'
      : initialCardStep === 4
      ? 'celebration'
      : 'theory'
  );
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [dualStreamLang, setDualStreamLang] = useState<'en' | 'si'>('en');
  const lastAdvanceTimeRef = React.useRef<number>(0);

  // Phase 2: Mastery Question Gate State
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  // Phase 3: Mascot Reactive Mood
  const [mascotMood, setMascotMood] = useState<MascotMood>(
    initialCardStep === 2 ? 'tinker' : 'curious'
  );

  // Reset states when changing concept leaf or initialCardStep
  useEffect(() => {
    setActiveCardStep(initialCardStep ?? 0);
    setCurrentBeat(
      initialCardStep === 2
        ? 'tactile'
        : initialCardStep === 3
        ? 'mastery_challenge'
        : initialCardStep === 4
        ? 'celebration'
        : 'theory'
    );
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setMascotMood(initialCardStep === 2 ? 'tinker' : 'curious');
  }, [leafNode.id, initialCardStep]);

  // Synchronize mascot state with current card step / beat
  useEffect(() => {
    if (activeCardStep === 0 || activeCardStep === 1) {
      setMascotMood('curious');
    } else if (activeCardStep === 2) {
      setMascotMood('tinker');
    } else if (activeCardStep === 3) {
      if (isSubmitted) {
        setMascotMood(isCorrect ? 'celebrate' : 'supportive');
      } else {
        setMascotMood(isNodeMastered ? 'celebrate' : 'curious');
      }
    } else if (activeCardStep === 4) {
      setMascotMood('celebrate');
    }
  }, [activeCardStep, isSubmitted, isCorrect, isNodeMastered]);

  // Retrieve authentic targeted multiple-choice question for this concept
  const masteryQuestion: ConceptMasteryQuestion = useMemo(() => {
    return getConceptMasteryQuestion(unitId, leafNode, leafIndex);
  }, [unitId, leafNode, leafIndex]);

  // Handle Option Selection in Beat 3: Mastery Question Gate
  // In Card 4, clicking an option or pressing 1-4 selects without immediately evaluating or locking
  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (isSubmitted && isCorrect) return; // Already passed

      // If an error state was active, selecting a new option clears the error state
      if (isSubmitted && !isCorrect) {
        setIsSubmitted(false);
        setIsCorrect(false);
        setMascotMood('curious');
      }

      sound.playClick(600);
      triggerHaptic('light');
      setSelectedOptionId(optionId);
    },
    [isSubmitted, isCorrect]
  );

  // Evaluate and check answer in Beat 3 (triggered by [ Check ] button or Enter key)
  const handleCheckAnswer = useCallback(() => {
    if (!selectedOptionId) return;
    if (isSubmitted && isCorrect) return;

    const opt = masteryQuestion.options.find((o) => o.id === selectedOptionId);
    if (!opt) return;

    const correct =
      opt.id === masteryQuestion.correctOptionId || opt.key === masteryQuestion.correctKey;

    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      setMascotMood('celebrate');
      sound.playSuccessDing();
      triggerHaptic('medium');

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.65 },
        });
      } catch {
        // resilient in non-canvas environment
      }

      // Award +15 XP and unlock leaf if not already mastered
      if (!isNodeMastered) {
        addXp(15);
        completeNode(leafNode.id, 100);
      }
    } else {
      setMascotMood('supportive');
      sound.playBuzzer();
      triggerHaptic('light');
    }
  }, [
    selectedOptionId,
    isSubmitted,
    isCorrect,
    masteryQuestion,
    isNodeMastered,
    addXp,
    completeNode,
    leafNode.id,
  ]);

  // Retry handler for non-punishing wrong answer recovery
  const handleRetryQuestion = useCallback(() => {
    sound.playClick(500);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setMascotMood('tinker');
  }, []);

  // Compute distractor rationales for selected option
  const selectedOption = useMemo(() => {
    return masteryQuestion.options.find((o) => o.id === selectedOptionId);
  }, [masteryQuestion.options, selectedOptionId]);

  const distractorRationaleEn = useMemo(() => {
    if (!selectedOption) return undefined;
    return (
      selectedOption.rationaleEn ||
      `Option ${selectedOption.key} is a classic exam distractor trap. In G.C.E. O/L exams, remember: ${masteryQuestion.explanationEn}`
    );
  }, [selectedOption, masteryQuestion.explanationEn]);

  const distractorRationaleSi = useMemo(() => {
    if (!selectedOption) return undefined;
    return (
      selectedOption.rationaleSi ||
      `විකල්පය ${selectedOption.key} විභාග උගුලකි. මතක තබා ගන්න: ${masteryQuestion.explanationSi}`
    );
  }, [selectedOption, masteryQuestion.explanationSi]);

  // Forward Navigation: Steps across Hook (0) -> Mental Model (1) -> Micro-Sandbox (2) -> Mastery Gate (3) -> Celebration (4)
  const handleAdvance = useCallback(() => {
    const now = Date.now();
    if (now - lastAdvanceTimeRef.current < 60) return;
    lastAdvanceTimeRef.current = now;

    sound.playClick(650);
    if (activeCardStep === 0) {
      setActiveCardStep(1);
      setCurrentBeat('theory');
    } else if (activeCardStep === 1) {
      setActiveCardStep(2);
      setCurrentBeat('tactile');
    } else if (activeCardStep === 2) {
      setActiveCardStep(3);
      setCurrentBeat('mastery_challenge');
    } else if (activeCardStep === 3) {
      if (isCorrect || isNodeMastered) {
        setActiveCardStep(4);
        setCurrentBeat('celebration');
      }
    } else if (activeCardStep === 4) {
      if (nextLeaf) {
        onSelectNode(nextLeaf.id);
      } else if (checkpointNodeId) {
        onSelectNode(checkpointNodeId);
      }
    }
  }, [activeCardStep, isCorrect, isNodeMastered, nextLeaf, checkpointNodeId, onSelectNode]);

  // Backward Navigation: Steps back through cards
  const handleStepBack = useCallback(() => {
    sound.playClick(550);
    if (activeCardStep === 4) {
      setActiveCardStep(3);
      setCurrentBeat('mastery_challenge');
    } else if (activeCardStep === 3) {
      setActiveCardStep(2);
      setCurrentBeat('tactile');
    } else if (activeCardStep === 2) {
      setActiveCardStep(1);
      setCurrentBeat('theory');
    } else if (activeCardStep === 1) {
      setActiveCardStep(0);
      setCurrentBeat('theory');
    } else if (activeCardStep === 0 && prevLeaf) {
      onSelectNode(prevLeaf.id);
    }
  }, [activeCardStep, prevLeaf, onSelectNode]);

  // Keyboard accessibility:
  // - Space/Enter: Advance through card deck & story beats
  // - Left/Right Arrows: Navigate forward & backward through card steps
  // - 1-4: Select MCQ options in Beat 3
  // - [: Toggle Tree Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.getAttribute('contenteditable') === 'true')
      ) {
        return;
      }

      // Check if target is inside an interactive micro-sandbox simulator
      const isInsideSandbox = !!target?.closest?.('[data-testid="micro-sandbox-container"]');
      if (isInsideSandbox) {
        // Do not intercept keyboard shortcuts when user is interacting with sandbox controls
        return;
      }

      // 1. '[' toggles syllabus tree
      if (e.key === '[') {
        e.preventDefault();
        e.stopImmediatePropagation?.();
        onToggleTree?.();
        return;
      }

      // 2. 'ArrowRight' / '→' advances card step
      if (e.key === 'ArrowRight') {
        if (activeCardStep < 3) {
          e.preventDefault();
          handleAdvance();
          return;
        }
        if (activeCardStep === 3 && (isCorrect || isNodeMastered)) {
          e.preventDefault();
          handleAdvance();
          return;
        }
      }

      // 3. 'ArrowLeft' / '←' steps back through cards
      if (e.key === 'ArrowLeft') {
        if (activeCardStep > 0 || prevLeaf) {
          e.preventDefault();
          handleStepBack();
          return;
        }
      }

      // 4. Space or Enter advances to next step OR triggers [ Check ]
      if (e.key === ' ' || e.key === 'Enter') {
        // If focused on an interactive button, let default click trigger
        if (target && target.tagName === 'BUTTON') {
          return;
        }
        if (activeCardStep < 3 || activeCardStep === 4) {
          e.preventDefault();
          handleAdvance();
          return;
        }
        if (activeCardStep === 3) {
          if (!isSubmitted) {
            if (selectedOptionId) {
              e.preventDefault();
              handleCheckAnswer();
            }
            return;
          }
          if (isSubmitted && isCorrect) {
            e.preventDefault();
            handleAdvance();
            return;
          }
          if (isSubmitted && !isCorrect) {
            e.preventDefault();
            handleRetryQuestion();
            return;
          }
        }
      }

      // 5. '1'-'4' selects MCQ choices in Beat 3
      if (activeCardStep === 3 && ['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key, 10) - 1;
        const opt = masteryQuestion.options[optionIndex];
        if (opt && (!isSubmitted || !isCorrect)) {
          e.preventDefault();
          handleSelectOption(opt.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeCardStep,
    isCorrect,
    isNodeMastered,
    isSubmitted,
    selectedOptionId,
    prevLeaf,
    handleAdvance,
    handleStepBack,
    handleSelectOption,
    handleCheckAnswer,
    handleRetryQuestion,
    masteryQuestion.options,
    onToggleTree,
  ]);

  // Content helpers
  const storeLanguageMode = useGameStore((s) => s.languageMode || (s.language === 'si' ? 'si' : 'en'));
  const effectiveLanguage = language || storeLanguageMode || 'dual';
  const activeStreamLang: 'en' | 'si' = effectiveLanguage === 'dual' ? dualStreamLang : effectiveLanguage;

  const primaryTitle =
    activeStreamLang === 'si' ? leafNode.titleSi || leafNode.titleEn : leafNode.titleEn;
  const secondaryTitle =
    effectiveLanguage === 'dual' && leafNode.titleSi && leafNode.titleSi !== leafNode.titleEn
      ? leafNode.titleSi
      : undefined;

  const leafPayload = leafNode.leafPayload;
  const theoryBite = leafPayload?.theoryBite;
  const analogy = leafPayload?.analogy;
  const tactileWidget = leafPayload?.tactileWidget;
  const activeRecall = leafPayload?.activeRecallCard;

  const isBookmarked = bookmarks.includes(leafNode.id);

  return (
    <div
      data-testid="concept-story-runner"
      className={`w-full flex flex-col space-y-4 sm:space-y-5 ${className}`}
    >
      {/* ============================================================== */}
      {/* 1. TOP CONCEPT HEADER BAR & ACTION CONTROLS                    */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3.5 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1 min-w-0">
          {/* Breadcrumb Pill + Uncollapse Trigger */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            {isTreeCollapsed && (
              <button
                type="button"
                onClick={onToggleTree}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 font-bold hover:bg-indigo-100 transition-colors cursor-pointer mr-1"
                title="Expand Syllabus Tree (Press [)"
              >
                <Compass className="w-3 h-3" />
                <span>Show Tree</span>
              </button>
            )}
            <span>
              Concept {leafIndex + 1} of {totalLeaves}
            </span>
            <span>•</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider truncate">
              {parentBranchTitleEn || 'Core Competency'}
            </span>
          </div>

          {/* Bilingual Title */}
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {primaryTitle}
          </h2>
          {secondaryTitle && (
            <p className="text-xs sm:text-sm font-sinhala text-indigo-600 dark:text-indigo-400 font-medium">
              {secondaryTitle}
            </p>
          )}
        </div>

        {/* Quick Toolbar: Pronounce, Bookmark, Scratchpad, Lab, Status */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Pronounce Term */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(750);
              speakTechnicalTerm(leafNode.titleEn);
            }}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="Pronounce Technical Term"
            aria-label={`Pronounce ${leafNode.titleEn}`}
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>

          {/* Bookmark */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              toggleBookmark(leafNode.id);
            }}
            className={`p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-500 border-amber-300 dark:border-amber-800'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-amber-500'
            }`}
            title="Bookmark Concept"
            aria-label="Bookmark Concept"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Scratchpad */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(600);
              setIsScratchpadOpen(true);
            }}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
            title="Calculation Scratchpad"
            aria-label="Open Scratchpad"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>

          {/* Full Lab Workbench */}
          {hasWorkbenchLab && onOpenWorkbench && (
            <button
              type="button"
              onClick={() => {
                sound.playClick(600);
                onOpenWorkbench();
              }}
              className="p-1.5 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 text-purple-700 dark:text-purple-300 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
              title="Launch Full Sandbox Workbench"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span className="hidden xl:inline">Lab</span>
            </button>
          )}

          {/* Status Badge */}
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1.5 ${
              isNodeMastered
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
            }`}
          >
            {isNodeMastered ? (
              <>
                <Check className="w-3 h-3 stroke-[2.5]" />
                <span>Mastered</span>
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                <span>In Progress</span>
              </>
            )}
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. INSTAGRAM STORY-STYLE SYNCHRONIZED PROGRESS BAR             */}
      {/* ============================================================== */}
      <nav
        aria-label="Micro-Step Story Progress"
        className="w-full bg-slate-50/80 dark:bg-slate-850/60 p-2 sm:p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2 select-none"
      >
        {/* Segmented Track Lines (Synchronized across 4 steps: Hook -> Mental Model -> Sandbox -> Prove) */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {/* Segment 1: The Atomic Hook */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(0);
              setCurrentBeat('theory');
            }}
            aria-label="Step 1: The Atomic Hook"
            aria-current={activeCardStep === 0 ? 'step' : undefined}
            className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden cursor-pointer p-0 border-0 text-left block w-full focus:outline-hidden"
            title="Step 1: The Atomic Hook"
          >
            <div
              className={`h-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 0
                  ? 'w-full bg-indigo-600 shadow-xs'
                  : activeCardStep > 0
                  ? 'w-full bg-emerald-500'
                  : 'w-0'
              }`}
            />
          </button>

          {/* Segment 2: The Mental Model Graphic */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(1);
              setCurrentBeat('theory');
            }}
            aria-label="Step 2: The Mental Model Graphic"
            aria-current={activeCardStep === 1 ? 'step' : undefined}
            className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden cursor-pointer p-0 border-0 text-left block w-full focus:outline-hidden"
            title="Step 2: The Mental Model Graphic"
          >
            <div
              className={`h-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 1
                  ? 'w-full bg-indigo-600 shadow-xs'
                  : activeCardStep > 1
                  ? 'w-full bg-emerald-500'
                  : 'w-0'
              }`}
            />
          </button>

          {/* Segment 3: The 15-Second Micro-Sandbox */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(2);
              setCurrentBeat('tactile');
            }}
            aria-label="Step 3: 15-Second Micro-Sandbox"
            aria-current={activeCardStep === 2 ? 'step' : undefined}
            className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden cursor-pointer p-0 border-0 text-left block w-full focus:outline-hidden"
            title="Step 3: 15-Second Micro-Sandbox"
          >
            <div
              className={`h-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 2
                  ? 'w-full bg-indigo-600 shadow-xs'
                  : activeCardStep > 2
                  ? 'w-full bg-emerald-500'
                  : 'w-0'
              }`}
            />
          </button>

          {/* Segment 4: Prove (Mastery Gate) */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(3);
              setCurrentBeat('mastery_challenge');
            }}
            aria-label="Step 4: Prove Mastery Gate"
            aria-current={activeCardStep === 3 ? 'step' : undefined}
            className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden cursor-pointer p-0 border-0 text-left block w-full focus:outline-hidden"
            title="Step 4: Prove Mastery Gate"
          >
            <div
              className={`h-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 3
                  ? isCorrect || isNodeMastered
                    ? 'w-full bg-emerald-500'
                    : 'w-full bg-indigo-600'
                  : activeCardStep === 4 || isNodeMastered
                  ? 'w-full bg-emerald-500'
                  : 'w-0'
              }`}
            />
          </button>
        </div>

        {/* Interactive Segment Buttons */}
        <div className="flex items-center justify-between text-xs font-mono font-bold">
          {/* Beat 1 Button: Learn (Hook & Model) */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                sound.playClick(500);
                setActiveCardStep(0);
                setCurrentBeat('theory');
              }}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer py-0.5 px-1.5 rounded-md ${
                activeCardStep === 0 || activeCardStep === 1
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 font-black'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Beat 1: Learn</span>
            </button>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(500);
                  setActiveCardStep(0);
                  setCurrentBeat('theory');
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeCardStep === 0
                    ? 'bg-indigo-600 ring-2 ring-indigo-300 dark:ring-indigo-700'
                    : activeCardStep > 0
                    ? 'bg-emerald-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                title="Card 1: Atomic Hook"
              />
              <button
                type="button"
                onClick={() => {
                  sound.playClick(500);
                  setActiveCardStep(1);
                  setCurrentBeat('theory');
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeCardStep === 1
                    ? 'bg-indigo-600 ring-2 ring-indigo-300 dark:ring-indigo-700'
                    : activeCardStep > 1
                    ? 'bg-emerald-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                title="Card 2: Mental Model Graphic"
              />
            </div>
          </div>

          {/* Beat 2 Button: Play (Micro-Sandbox) */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(2);
              setCurrentBeat('tactile');
            }}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer py-0.5 px-1.5 rounded-md ${
              activeCardStep === 2
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 font-black'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Beat 2: Play</span>
          </button>

          {/* Beat 3 Button: Prove (Mastery Gate) */}
          <button
            type="button"
            onClick={() => {
              sound.playClick(500);
              setActiveCardStep(3);
              setCurrentBeat('mastery_challenge');
            }}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer py-0.5 px-1.5 rounded-md ${
              activeCardStep === 3
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 font-black'
                : activeCardStep === 4 || isNodeMastered
                ? 'text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Beat 3: Prove</span>
            {isNodeMastered && <Check className="w-3 h-3 text-emerald-500 stroke-[3]" />}
          </button>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* 3. MASCOT COMPANION REACTIVE BANNER                             */}
      {/* ============================================================== */}
      <div className="w-full">
        <MascotCompanion
          mood={mascotMood}
          language={language}
          variant="mobile-banner"
          conceptTitle={leafNode.titleEn}
        />
      </div>

      {/* ============================================================== */}
      {/* 4. MAIN CARD DECK & BEATS (1-COLUMN CENTERED FOCUS VIEW)       */}
      {/* ============================================================== */}
      <div className="w-full space-y-4">
        {/* ========================================================== */}
        {/* PROGRESSIVE CARD DECK (CARDS 1 - 3: ZERO-SCROLL ATOMIZED)  */}
        {/* ========================================================== */}
        {activeCardStep < 3 && (
          <div
            data-testid="progressive-card-deck"
            role="region"
            aria-label="Progressive Concept Card Deck"
            className="w-full relative transition-all duration-[180ms] ease-out min-h-[360px]"
          >
            {/* -------------------------------------------------------- */}
            {/* CARD 1: THE ATOMIC HOOK                                  */}
            {/* -------------------------------------------------------- */}
            <div
              data-testid="card-atomic-hook"
              data-card-step="0"
              inert={activeCardStep !== 0}
              className={`w-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 0
                  ? 'opacity-100 relative z-10 block visible'
                  : 'opacity-0 absolute inset-0 invisible pointer-events-none'
              }`}
              aria-hidden={activeCardStep !== 0}
            >
              <article className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3">
                {/* Header & Single-Stream Language Switcher */}
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Card 1 of 3 • The Atomic Hook • Micro-Theory Bite</span>
                  </div>

                  {effectiveLanguage === 'dual' && (
                    <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setDualStreamLang('en')}
                        className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                          dualStreamLang === 'en'
                            ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-2xs font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        English
                      </button>
                      <button
                        type="button"
                        onClick={() => setDualStreamLang('si')}
                        className={`px-2 py-0.5 rounded-md font-sinhala transition-all cursor-pointer ${
                          dualStreamLang === 'si'
                            ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-2xs font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        සිංහල
                      </button>
                    </div>
                  )}
                </div>

                {/* Crisp Technical Hook Title */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${
                      activeStreamLang === 'si' ? 'font-sinhala' : ''
                    }`}
                  >
                    {activeStreamLang === 'si'
                      ? theoryBite?.titleSi || theoryBite?.titleEn || leafNode.titleSi || leafNode.titleEn
                      : theoryBite?.titleEn || leafNode.titleEn}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Core Term:</span>
                    <BilingualTermPeek
                      termEn={activeRecall ? activeRecall.termEn : leafNode.titleEn}
                      termSi={activeRecall ? activeRecall.termSi : (leafNode.titleSi || '')}
                      currentLanguage={activeStreamLang}
                    />
                  </div>
                </div>

                {/* Single-stream natural prose with keywords wrapped in BilingualTermPeek */}
                <FormattedText
                  content={
                    activeStreamLang === 'si'
                      ? theoryBite?.contentSi ||
                        theoryBite?.contentEn ||
                        activeRecall?.definitionSi ||
                        `මෙම පාඩම මඟින් ${leafNode.titleSi || leafNode.titleEn} පිළිබඳ මූලික සංකල්ප සහ ප්‍රායෝගික ක්‍රමවේද පැහැදිලි කෙරේ.`
                      : theoryBite?.contentEn ||
                        activeRecall?.definitionEn ||
                        `Master the fundamental architecture and principles of ${leafNode.titleEn}.`
                  }
                  language={activeStreamLang}
                  enableTermPeek={true}
                  className={`text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed ${
                    activeStreamLang === 'si' ? 'font-sinhala' : ''
                  }`}
                />

                {/* Active Recall Key Concept Anchor */}
                {activeRecall && (
                  <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                      <BrainCircuit className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-semibold">
                        Active Recall: Memorize key term &quot;{activeRecall.termEn}&quot; before proving mastery.
                      </span>
                    </div>
                  </div>
                )}

                {/* Card 1 Quick Navigation */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={handleStepBack}
                    disabled={!prevLeaf}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition-all ${
                      prevLeaf
                        ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
                        : 'text-slate-400 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{prevLeaf ? 'Previous Concept' : 'Back'}</span>
                  </button>
                  <button
                    type="button"
                    data-testid="deck-continue-btn"
                    onClick={handleAdvance}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Continue →</span>
                  </button>
                </div>
              </article>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CARD 2: THE MENTAL MODEL GRAPHIC                         */}
            {/* -------------------------------------------------------- */}
            <div
              data-testid="card-mental-model"
              data-card-step="1"
              inert={activeCardStep !== 1}
              className={`w-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 1
                  ? 'opacity-100 relative z-10 block visible'
                  : 'opacity-0 absolute inset-0 invisible pointer-events-none'
              }`}
              aria-hidden={activeCardStep !== 1}
            >
              <article className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Card 2 of 3 • The Mental Model Graphic • Real-World Mental Model Analogy</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    Visual Analogy
                  </span>
                </div>

                {/* Mental Model Architecture Canvas */}
                <div className="w-full bg-gradient-to-br from-amber-50/60 via-indigo-50/30 to-purple-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 p-4 rounded-xl border border-amber-100 dark:border-slate-750 flex flex-col items-center justify-center space-y-3">
                  {/* SVG Architecture Diagram with 3 interactive visual nodes */}
                  <div className="w-full max-w-md mx-auto py-1">
                    <svg
                      viewBox="0 0 380 90"
                      className="w-full h-auto select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label={
                        activeStreamLang === 'si'
                          ? 'මානසික ආකෘති ගැලීම් සටහන: සන්දර්භය, යාන්ත්‍රණය, අන්තර්ඥානය'
                          : 'Mental Model Architecture Flow: Context to Mechanism to Intuition'
                      }
                    >
                      <defs>
                        <linearGradient id={`flowGrad2-${leafNode.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="50%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>

                      {/* Animated connecting dashed flow lines */}
                      <path
                        d="M 80 45 L 155 45"
                        stroke={`url(#flowGrad2-${leafNode.id})`}
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 225 45 L 300 45"
                        stroke={`url(#flowGrad2-${leafNode.id})`}
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />

                      {/* Node 1: Context / Input */}
                      <g transform="translate(45, 45)">
                        <circle
                          r="32"
                          className="fill-indigo-50 dark:fill-indigo-950/80 stroke-indigo-400 dark:stroke-indigo-600"
                          strokeWidth="2"
                        />
                        <text
                          y="-4"
                          textAnchor="middle"
                          className="text-[10px] font-mono font-bold fill-indigo-700 dark:fill-indigo-300"
                        >
                          {activeStreamLang === 'si' ? 'සන්දර්භය' : 'Context'}
                        </text>
                        <text
                          y="10"
                          textAnchor="middle"
                          className="text-[9px] font-sans fill-slate-500 dark:fill-slate-400"
                        >
                          {activeStreamLang === 'si' ? 'ආදානය' : 'Input'}
                        </text>
                      </g>

                      {/* Node 2: Mechanism / Processing Engine */}
                      <g transform="translate(190, 45)">
                        <circle
                          r="35"
                          className="fill-amber-50 dark:fill-amber-950/80 stroke-amber-400 dark:stroke-amber-500 shadow-sm"
                          strokeWidth="2.5"
                        />
                        <text
                          y="-5"
                          textAnchor="middle"
                          className="text-[10px] font-mono font-extrabold fill-amber-800 dark:fill-amber-300"
                        >
                          {activeStreamLang === 'si' ? 'යාන්ත්‍රණය' : 'Mechanism'}
                        </text>
                        <text
                          y="9"
                          textAnchor="middle"
                          className="text-[9px] font-bold fill-amber-950 dark:fill-amber-200"
                        >
                          {activeStreamLang === 'si' ? 'සැකසුම' : 'Process'}
                        </text>
                      </g>

                      {/* Node 3: Intuition / Output */}
                      <g transform="translate(335, 45)">
                        <circle
                          r="32"
                          className="fill-emerald-50 dark:fill-emerald-950/80 stroke-emerald-400 dark:stroke-emerald-600"
                          strokeWidth="2"
                        />
                        <text
                          y="-4"
                          textAnchor="middle"
                          className="text-[10px] font-mono font-bold fill-emerald-700 dark:fill-emerald-300"
                        >
                          {activeStreamLang === 'si' ? 'අන්තර්ඥානය' : 'Intuition'}
                        </text>
                        <text
                          y="10"
                          textAnchor="middle"
                          className="text-[9px] font-sans fill-slate-500 dark:fill-slate-400"
                        >
                          {activeStreamLang === 'si' ? 'ප්‍රතිදානය' : 'Insight'}
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Analogy Story Text (with fallback for leaves without analogy) */}
                  <div className="w-full p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 space-y-1 text-amber-950 dark:text-amber-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Real-World Mental Model Analogy</span>
                    </div>
                    <p
                      className={`text-xs sm:text-sm italic leading-relaxed ${
                        activeStreamLang === 'si' ? 'font-sinhala' : ''
                      }`}
                    >
                      {activeStreamLang === 'si'
                        ? analogy?.analogySi ||
                          analogy?.analogyEn ||
                          theoryBite?.keyTakeawaySi ||
                          activeRecall?.definitionSi ||
                          `මෙම සංකල්පය ආදානයක් ලබාගෙන, මූලික නීති මඟින් සකසා අපේක්ෂිත ප්‍රතිඵලය ලබාදෙන ක්‍රමානුකූල පද්ධතියක් ලෙස සිතන්න.`
                        : analogy?.analogyEn ||
                          theoryBite?.keyTakeawayEn ||
                          activeRecall?.definitionEn ||
                          `Think of this concept as a deterministic system where input context is transformed by core computational rules into reliable real-world outcomes.`}
                    </p>
                  </div>

                  {/* Punchy Takeaway Caption */}
                  <div className="w-full p-2.5 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 flex items-start gap-2 text-xs text-indigo-900 dark:text-indigo-200">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Punchy Takeaway: </span>
                      <span>
                        {analogy?.explanationEn ||
                          theoryBite?.keyTakeawayEn ||
                          `Mastering this concept builds physical intuition for real-world ICT systems and O/L exam scenarios.`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2 Navigation */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={handleStepBack}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>← Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleAdvance}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Continue →</span>
                  </button>
                </div>
              </article>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CARD 3: THE 15-SECOND MICRO-SANDBOX                      */}
            {/* -------------------------------------------------------- */}
            <div
              data-testid="card-micro-sandbox"
              data-card-step="2"
              inert={activeCardStep !== 2}
              className={`w-full transition-all duration-[180ms] ease-out ${
                activeCardStep === 2
                  ? 'opacity-100 relative z-10 block visible'
                  : 'opacity-0 absolute inset-0 invisible pointer-events-none'
              }`}
              aria-hidden={activeCardStep !== 2}
            >
              <article className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Card 3 of 3 • 15-Second Micro-Sandbox</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Tactile Simulation
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Interact with the live mini-sandbox below to build physical intuition in 15–20 seconds without cluttering reading prose.
                </p>

                {/* Micro-Sandbox Interactive Container */}
                <div data-testid="micro-sandbox-container" className="w-full">
                  {tactileWidget ? (
                    <div className="p-1">
                      <EmbeddedTactileWidget config={tactileWidget} language={language} />
                    </div>
                  ) : activeRecall ? (
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>
                          Interactive Memory Lab: Flip the 3D card below to test your recall of mandatory department keywords.
                        </span>
                      </div>
                      <EmbeddedRecallCheck
                        nodeId={leafNode.id}
                        activeRecall={activeRecall}
                        language={language}
                        isCompleted={isNodeMastered}
                      />
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center space-y-2">
                      <Gamepad2 className="w-8 h-8 text-indigo-500 mx-auto" />
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                        Concept Exploration Ready
                      </h4>
                      <p className="text-xs text-slate-500">
                        You have explored the core mechanisms. Advance to Beat 3 to prove mastery with an authentic exam question!
                      </p>
                    </div>
                  )}
                </div>

                {/* Card 3 Navigation */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={handleStepBack}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>← Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleAdvance}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Prove Mastery →</span>
                  </button>
                </div>
              </article>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* BEAT 3: PROVE (AUTHENTIC MASTERY QUESTION GATE - STEP 3)   */}
        {/* ========================================================== */}
        {activeCardStep === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200 pb-28 sm:pb-36">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
              {/* Gate Header with Provenance Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <div
                    data-testid="mastery-provenance-tag"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold shadow-2xs w-fit"
                  >
                    <Trophy className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{masteryQuestion.provenanceBadge}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    • Authentic Mastery Question Gate
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    +15 XP Gate
                  </span>
                  {masteryQuestion.formatType !== 'standard' && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {masteryQuestion.formatType}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Stem (Bilingual) */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                  {language === 'si' ? masteryQuestion.promptSi : masteryQuestion.promptEn}
                </h3>
                {language === 'dual' &&
                  masteryQuestion.promptSi &&
                  masteryQuestion.promptSi !== masteryQuestion.promptEn && (
                    <p className="text-xs sm:text-sm font-sinhala text-slate-600 dark:text-slate-400 leading-relaxed">
                      {masteryQuestion.promptSi}
                    </p>
                  )}
              </div>

              {/* Multiple-Choice Options Grid with [1-4] Shortcut Indicators */}
              <div className="space-y-2.5 pt-1">
                {masteryQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isOptCorrect =
                    opt.id === masteryQuestion.correctOptionId ||
                    opt.key === masteryQuestion.correctKey;

                  let btnStyles =
                    'bg-slate-50/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 text-slate-800 dark:text-slate-200';

                  if (isSubmitted) {
                    if (isOptCorrect) {
                      btnStyles =
                        'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500/20';
                    } else if (isSelected && !isCorrect) {
                      btnStyles =
                        'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/20';
                    }
                  } else if (isSelected) {
                    btnStyles =
                      'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 text-indigo-900 dark:text-indigo-100 font-bold ring-2 ring-indigo-500/20 shadow-xs';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={isSubmitted && isCorrect}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer group ${btnStyles}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Option Key Badge [A/B/C/D] + Number Shortcut [1-4] */}
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono font-bold text-xs flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs group-hover:border-indigo-500">
                            {opt.key}
                          </span>
                          <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400">
                            [{idx + 1}]
                          </span>
                        </div>

                        {/* Option Text */}
                        <div className="text-xs sm:text-sm leading-snug">
                          <div>{language === 'si' ? opt.si || opt.en : opt.en}</div>
                          {language === 'dual' && opt.si && opt.si !== opt.en && (
                            <div className="text-[11px] font-sinhala text-slate-500 dark:text-slate-400 mt-0.5">
                              {opt.si}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Result Icon */}
                      {isSubmitted && (
                        <div className="shrink-0 ml-2">
                          {isOptCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          ) : isSelected && !isCorrect ? (
                            <X className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          ) : null}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* BEAT 4: CELEBRATION (VICTORY BANNER - STEP 4)              */}
        {/* ========================================================== */}
        {activeCardStep === 4 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-indigo-500/10 border border-emerald-300/80 dark:border-emerald-800/60 shadow-md text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center p-3 shadow-inner">
              <Trophy className="w-10 h-10 text-emerald-600 dark:text-emerald-400 animate-bounce" />
            </div>

            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>+15 XP Earned • Competency Unlocked</span>
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                Concept Mastered!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                You successfully mastered{' '}
                <span className="font-bold text-slate-900 dark:text-white">
                  {leafNode.titleEn}
                </span>
                . Your syllabus knowledge graph has been updated.
              </p>
            </div>

            {/* Review or Next Concept CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(500);
                  setActiveCardStep(0);
                  setCurrentBeat('theory');
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Review Concept</span>
              </button>

              {nextLeaf ? (
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(650);
                    onSelectNode(nextLeaf.id);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Next Concept</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(650);
                    if (checkpointNodeId) onSelectNode(checkpointNodeId);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs shadow-md shadow-amber-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enter Checkpoint Gate</span>
                  <Trophy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* 5. STICKY BOTTOM ACTION CONTROLS / SLIDE-UP BOTTOM DRAWER     */}
      {/* ============================================================== */}
      {activeCardStep === 3 ? (
        <SessionBottomDrawer
          state={!isSubmitted ? 'idle' : isCorrect ? 'correct' : 'incorrect'}
          selectedOptionId={selectedOptionId}
          onCheck={handleCheckAnswer}
          onContinue={handleAdvance}
          onTryAgain={handleRetryQuestion}
          onBack={handleStepBack}
          explanationEn={masteryQuestion.explanationEn}
          explanationSi={masteryQuestion.explanationSi}
          distractorRationaleEn={distractorRationaleEn}
          distractorRationaleSi={distractorRationaleSi}
          language={effectiveLanguage}
          activeStreamLang={activeStreamLang}
          isNodeMastered={isNodeMastered}
        />
      ) : (
        <div className="mt-8 p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-md flex items-center justify-between gap-2 sm:gap-3 sticky bottom-4 z-20 pb-safe">
          {/* Step Back / Previous Concept */}
          <button
            type="button"
            data-testid="deck-back-btn"
            onClick={handleStepBack}
            disabled={activeCardStep === 0 && !prevLeaf}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeCardStep > 0 || prevLeaf
                ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 cursor-pointer'
                : 'opacity-40 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
            <span>
              {activeCardStep === 0 ? (
                <>
                  <span className="hidden sm:inline">Previous Concept</span>
                  <span className="sm:hidden">Prev</span>
                </>
              ) : (
                'Back'
              )}
            </span>
          </button>

          {/* Center Card Status Pill */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="font-bold">
              {activeCardStep === 0
                ? 'Card 1: Hook'
                : activeCardStep === 1
                ? 'Card 2: Mental Model'
                : activeCardStep === 2
                ? 'Card 3: Micro-Sandbox'
                : 'Celebration'}
            </span>
            <span className="hidden sm:inline text-slate-400">• Press Space/Enter to advance</span>
          </div>

          {/* Step Forward / Next Beat / Next Concept */}
          {activeCardStep === 0 ? (
            <button
              type="button"
              onClick={handleAdvance}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Continue → (Next Concept Step)</span>
              <span className="sm:hidden">Continue →</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          ) : activeCardStep === 1 ? (
            <button
              type="button"
              onClick={handleAdvance}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Continue to Micro-Sandbox →</span>
              <span className="sm:hidden">Continue →</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          ) : activeCardStep === 2 ? (
            <button
              type="button"
              onClick={handleAdvance}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Prove Mastery →</span>
              <span className="sm:hidden">Prove →</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          ) : nextLeaf ? (
            <button
              type="button"
              onClick={() => onSelectNode(nextLeaf.id)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xs shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Next Concept</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => checkpointNodeId && onSelectNode(checkpointNodeId)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-2xs shadow-amber-600/20 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Enter Checkpoint Gate</span>
              <span className="sm:hidden">Checkpoint</span>
              <Trophy className="w-3.5 h-3.5 shrink-0" />
            </button>
          )}
        </div>
      )}

      {/* Scratchpad Modal */}
      {isScratchpadOpen && (
        <ScratchpadModal
          isOpen={isScratchpadOpen}
          onClose={() => setIsScratchpadOpen(false)}
        />
      )}
    </div>
  );
}
