'use client';

import React, { useId } from 'react';
import Image from 'next/image';
import { Sparkles, HeartHandshake, Wrench, Compass, Trophy } from 'lucide-react';

export type MascotMood = 'curious' | 'tinker' | 'supportive' | 'celebrate';

export interface MascotCompanionProps {
  mood: MascotMood;
  language?: 'en' | 'si' | 'dual';
  variant?: 'desktop-side' | 'mobile-banner' | 'embedded';
  conceptTitle?: string;
  customMessageEn?: string;
  customMessageSi?: string;
  className?: string;
}

const MOOD_CONFIG: Record<
  MascotMood,
  {
    titleEn: string;
    titleSi: string;
    badgeIcon: typeof Compass;
    badgeSvg: string;
    bgGradient: string;
    borderCol: string;
    badgeBg: string;
    badgeText: string;
    defaultMsgEn: string;
    defaultMsgSi: string;
  }
> = {
  curious: {
    titleEn: 'Curious Explorer',
    titleSi: 'ගවේෂණශීලී සිසුවා',
    badgeIcon: Compass,
    badgeSvg: '/assets/clay/thumb-theory-openbook.svg',
    bgGradient: 'from-indigo-50/90 via-sky-50/50 to-white dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-slate-900',
    borderCol: 'border-indigo-200/80 dark:border-indigo-800/60',
    badgeBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    badgeText: 'Explore Theory',
    defaultMsgEn: "Let's discover this competency together! Check out the mental model analogy and key syllabus terms.",
    defaultMsgSi: "මූලික සංකල්පය අවබෝධ කරගනිමු! සැබෑ ලෝකයේ උදාහරණ සහ විභාග මූල පද හොඳින් හඳුනාගන්න.",
  },
  tinker: {
    titleEn: 'Lab Tinkerer',
    titleSi: 'ප්‍රායෝගික අත්හදා බැලීම',
    badgeIcon: Wrench,
    badgeSvg: '/assets/clay/thumb-ict-tech.svg',
    bgGradient: 'from-purple-50/90 via-fuchsia-50/40 to-white dark:from-purple-950/40 dark:via-slate-900/60 dark:to-slate-900',
    borderCol: 'border-purple-200/80 dark:border-purple-800/60',
    badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    badgeText: 'Hands-on Lab',
    defaultMsgEn: 'Experiment and test how it behaves! Interactive tactile play cements your memory faster than reading.',
    defaultMsgSi: 'පාලක ක්‍රියාත්මක කර අත්හදා බලන්න! ප්‍රායෝගික පුහුණුවෙන් සංකල්පය තහවුරු කරගන්න.',
  },
  supportive: {
    titleEn: 'Supportive Coach',
    titleSi: 'දිරිමත් සහයකයා',
    badgeIcon: HeartHandshake,
    badgeSvg: '/assets/clay/thumb-revision-screen.svg',
    bgGradient: 'from-amber-50/90 via-orange-50/40 to-white dark:from-amber-950/40 dark:via-slate-900/60 dark:to-slate-900',
    borderCol: 'border-amber-200/80 dark:border-amber-800/60',
    badgeBg: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    badgeText: 'Learning Moment',
    defaultMsgEn: "Common trap spotted! Review the explanation below and give it another try—no penalties, you've got this!",
    defaultMsgSi: 'සුළු වැරදීමක්! පහත පැහැදිලි කිරීම කියවා නැවත උත්සාහ කරන්න—දඬුවම් ලකුණු නොමැත, ඔබට මෙය විසඳිය හැකියි!',
  },
  celebrate: {
    titleEn: 'Mastery Champion',
    titleSi: 'විශිෂ්ට ජයග්‍රහණයක්',
    badgeIcon: Trophy,
    badgeSvg: '/assets/clay/grade-report-trophy.svg',
    bgGradient: 'from-emerald-50/95 via-teal-50/50 to-white dark:from-emerald-950/40 dark:via-slate-900/60 dark:to-slate-900',
    borderCol: 'border-emerald-300/80 dark:border-emerald-800/60',
    badgeBg: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    badgeText: 'Mastery Verified (+15 XP)',
    defaultMsgEn: 'Outstanding! Authentic O/L exam competency unlocked with +15 XP. You are mastering this syllabus!',
    defaultMsgSi: 'විශිෂ්ටයි! +15 XP සමඟ නිල විභාග මට්ටමේ නිපුණතාවය තහවුරු කළා. ඊළඟ පියවරට සූදානම් වන්න!',
  },
};

export function MascotCompanion({
  mood,
  language = 'dual',
  variant = 'desktop-side',
  conceptTitle,
  customMessageEn,
  customMessageSi,
  className = '',
}: MascotCompanionProps) {
  const cfg = MOOD_CONFIG[mood] || MOOD_CONFIG.curious;
  const BadgeIcon = cfg.badgeIcon;
  const elementId = useId();

  const msgEn = customMessageEn || cfg.defaultMsgEn;
  const msgSi = customMessageSi || cfg.defaultMsgSi;

  // ================= MOBILE BANNER COMPONENT =================
  if (variant === 'mobile-banner') {
    return (
      <aside
        aria-labelledby={`mascot-banner-title-${elementId}`}
        className={`w-full rounded-xl p-2.5 sm:p-3 border ${cfg.borderCol} bg-gradient-to-r ${cfg.bgGradient} shadow-2xs flex items-center gap-2.5 sm:gap-3 transition-all duration-300 ${className}`}
      >
        {/* Companion Avatar Thumbnail with Clay Saturn Illustration */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white dark:bg-slate-800 p-1 shadow-2xs border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/clay/banner-student-saturn.svg"
            alt="Study Companion Mascot"
            width={44}
            height={44}
            className="w-full h-full object-contain animate-subtle-float"
            priority={false}
          />
          {/* Mood Badge Corner Pip */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 shadow-xs border border-slate-200/80 dark:border-slate-700 flex items-center justify-center p-0.5">
            <Image
              src={cfg.badgeSvg}
              alt={cfg.titleEn}
              width={16}
              height={16}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Companion Dialogue Speech Bubble */}
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              id={`mascot-banner-title-${elementId}`}
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold border ${cfg.badgeBg}`}
            >
              <BadgeIcon className="w-2.5 h-2.5 shrink-0" />
              <span>{language === 'si' ? cfg.titleSi : cfg.titleEn}</span>
            </span>
            {mood === 'celebrate' && (
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                <Sparkles className="w-2.5 h-2.5" />
                <span>+15 XP</span>
              </span>
            )}
          </div>

          <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-snug line-clamp-2">
            {language === 'si' ? msgSi : msgEn}
          </p>
          {language === 'dual' && msgSi && msgSi !== msgEn && (
            <p className="text-[11px] font-sinhala text-slate-600 dark:text-slate-400 line-clamp-1">
              {msgSi}
            </p>
          )}
        </div>
      </aside>
    );
  }

  // ================= DESKTOP SIDE PANEL / EMBEDDED VARIANT =================
  return (
    <aside
      aria-labelledby={`mascot-side-title-${elementId}`}
      className={`w-full rounded-2xl p-4 border ${cfg.borderCol} bg-gradient-to-b ${cfg.bgGradient} shadow-xs flex flex-col items-center text-center space-y-3 transition-all duration-300 relative overflow-hidden ${className}`}
    >
      {/* Decorative Background Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Companion Avatar Container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/90 dark:bg-slate-800/90 p-2 shadow-sm border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center">
        <Image
          src="/assets/clay/banner-student-saturn.svg"
          alt="Study Companion Mascot"
          width={100}
          height={100}
          className={`w-full h-full object-contain ${
            mood === 'celebrate' ? 'animate-bounce' : 'animate-subtle-float'
          }`}
          priority={false}
        />

        {/* Tactile Mood Badge Chip */}
        <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-700 p-1 flex items-center justify-center">
          <Image
            src={cfg.badgeSvg}
            alt={cfg.titleEn}
            width={28}
            height={28}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Mood Header Badge */}
      <div className="space-y-1 w-full">
        <span
          id={`mascot-side-title-${elementId}`}
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black border ${cfg.badgeBg}`}
        >
          <BadgeIcon className="w-3 h-3" />
          <span>{language === 'si' ? cfg.titleSi : cfg.titleEn}</span>
        </span>
        {conceptTitle && (
          <div className="text-[11px] font-mono text-slate-400 truncate px-2">
            {conceptTitle}
          </div>
        )}
      </div>

      {/* Speech Bubble Card */}
      <div className="relative w-full p-3 rounded-xl bg-white/95 dark:bg-slate-850/95 border border-slate-200/70 dark:border-slate-750 shadow-2xs text-left space-y-1">
        {/* Triangle Pointer */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-850 border-t border-l border-slate-200/70 dark:border-slate-750 rotate-45" />

        {/* English Dialogue */}
        {language !== 'si' && (
          <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            {msgEn}
          </p>
        )}

        {/* Sinhala Dialogue */}
        {language !== 'en' && (
          <p
            className={`text-xs font-sinhala text-slate-700 dark:text-slate-300 leading-relaxed ${
              language === 'dual' ? 'pt-1.5 border-t border-slate-100 dark:border-slate-800' : ''
            }`}
          >
            {msgSi}
          </p>
        )}
      </div>

      {/* Quick Status / Motivation Footer */}
      {mood === 'celebrate' ? (
        <div className="w-full py-1.5 px-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-black flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>+15 XP Earned • Leaf Mastered!</span>
        </div>
      ) : mood === 'supportive' ? (
        <div className="w-full py-1 px-2 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-bold flex items-center justify-center gap-1">
          <span>Zero Penalty Practice</span>
        </div>
      ) : null}
    </aside>
  );
}
