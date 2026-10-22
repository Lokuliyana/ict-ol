'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, X, BookOpen, CheckCircle, Zap } from 'lucide-react';
import { useGameStore } from '@/lib/store';
import { sound } from '@/utils/soundEffects';
import { triggerHaptic } from '@/utils/haptics';

interface TheoryRefillCard {
  id: string;
  titleEn: string;
  titleSi: string;
  keyRuleEn: string;
  keyRuleSi: string;
  exampleEn: string;
  exampleSi: string;
}

const QUICK_REFILL_CARDS: TheoryRefillCard[] = [
  {
    id: 'c1',
    titleEn: 'Data vs Information',
    titleSi: 'දත්ත සහ තොරතුරු',
    keyRuleEn: 'Data is raw, unorganized facts. Information is processed data with context and meaning.',
    keyRuleSi: 'දත්ත යනු සැකසීමට ලක්නොවූ අමු කරුණුය. තොරතුරු යනු තේරුමක් සහිතව සැකසූ දත්ත වේ.',
    exampleEn: 'e.g. 85, 92, 78 (Data) -> Average marks: 85 (Information)',
    exampleSi: 'උදා: 85, 92, 78 (දත්ත) -> සාමාන්‍ය ලකුණු: 85 (තොරතුරු)',
  },
  {
    id: 'c2',
    titleEn: 'ASCII vs Unicode',
    titleSi: 'ASCII සහ යුනිකෝඩ්',
    keyRuleEn: 'ASCII uses 7 or 8 bits (up to 256 characters). Unicode uses 16/32 bits to represent all global languages including Sinhala.',
    keyRuleSi: 'ASCII බිටු 7/8 කින් අක්ෂර 256 ක් දක්වයි. යුනිකෝඩ් බිටු 16/32 කින් සිංහල ඇතුළු ලොව සියලු භාෂා නිරූපණය කරයි.',
    exampleEn: 'ASCII: "A" = 65 | Unicode: "අ" = U+0D85',
    exampleSi: 'ASCII: "A" = 65 | යුනිකෝඩ්: "අ" = U+0D85',
  },
  {
    id: 'c3',
    titleEn: 'Logic Gates Basics',
    titleSi: 'තාර්කික ද්වාර මූලධර්ම',
    keyRuleEn: 'AND requires both inputs to be 1. OR produces 1 if at least one input is 1. NOT inverts the input bit.',
    keyRuleSi: 'AND ද්වාරයේ ප්‍රතිදානය 1 වීමට ආදාන දෙකම 1 විය යුතුය. OR ද්වාරයේ එක් ආදානයක් හෝ 1 නම් ප්‍රතිදානය 1 වේ. NOT ප්‍රතිලෝම කරයි.',
    exampleEn: '1 AND 0 = 0 | 1 OR 0 = 1 | NOT(1) = 0',
    exampleSi: '1 AND 0 = 0 | 1 OR 0 = 1 | NOT(1) = 0',
  },
];

interface ZeroPenaltyRefillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ZeroPenaltyRefillModal({ isOpen, onClose }: ZeroPenaltyRefillModalProps) {
  const refillHearts = useGameStore((s) => s.refillHearts);
  const language = useGameStore((s) => s.language);
  const addXp = useGameStore((s) => s.addXp);

  const [activeStep, setActiveStep] = useState(0);
  const [completedReview, setCompletedReview] = useState(false);

  if (!isOpen) return null;

  const currentCard = QUICK_REFILL_CARDS[activeStep] || QUICK_REFILL_CARDS[0];

  const handleNextStep = () => {
    sound.playClick(720);
    triggerHaptic('light');
    if (activeStep < QUICK_REFILL_CARDS.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setCompletedReview(true);
    }
  };

  const handleClaimRefill = () => {
    sound.playVictoryFanfare();
    triggerHaptic('success');
    refillHearts();
    addXp(25);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="clay-card w-full max-w-lg p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-rose-100 dark:bg-rose-950/60 rounded-xl text-rose-500">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span>{language === 'si' ? 'ක්ෂණික හෘද පුනර්ජීවනය' : 'Instant Zero-Penalty Refill'}</span>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                  No 30-min wait
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'si'
                  ? 'මතක් කිරීම් 3ක් කියවා සම්පූර්ණ හදවත් 5ම නොමිලේ ලබාගන්න'
                  : 'Review 3 bite-sized theory cards to refill all 5 hearts instantly'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          {QUICK_REFILL_CARDS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                idx <= activeStep ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-slate-200 dark:bg-slate-800'
              }`}
            />
          ))}
        </div>

        {/* Card Content */}
        {!completedReview ? (
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Concept {activeStep + 1} of {QUICK_REFILL_CARDS.length}
              </span>
              <BookOpen className="w-4 h-4 text-indigo-500" />
            </div>

            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              {currentCard.titleEn}
              <span className="block text-xs font-normal text-slate-500 dark:text-slate-400 mt-0.5 si-optical">
                {currentCard.titleSi}
              </span>
            </h4>

            <div className="p-3 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <p className="font-medium leading-relaxed">{currentCard.keyRuleEn}</p>
              <p className="text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2 si-optical">
                {currentCard.keyRuleSi}
              </p>
            </div>

            <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 p-2 rounded-lg">
              {language === 'si' ? currentCard.exampleSi : currentCard.exampleEn}
            </div>

            <button
              onClick={handleNextStep}
              className="w-full min-touch-target py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{activeStep < QUICK_REFILL_CARDS.length - 1 ? 'Next Memory Card' : 'Finish Quick Review'}</span>
              <Zap className="w-4 h-4 fill-white" />
            </button>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-black text-lg text-slate-900 dark:text-white">
                {language === 'si' ? 'හෘද පුනර්ජීවනය සූදානම්!' : 'Hearts Ready to Restore!'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {language === 'si'
                  ? 'ඔබ මතක සටහන් සාර්ථකව සම්පූර්ණ කළා. +25 XP සමඟ හදවත් 5ක් ලැබේ!'
                  : 'You refreshed 3 core concepts. Claim full 5 hearts and +25 bonus XP!'}
              </p>
            </div>
            <button
              onClick={handleClaimRefill}
              className="w-full min-touch-target py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 active:scale-95 text-white font-black text-base shadow-xl flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Claim Full 5 Hearts Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
