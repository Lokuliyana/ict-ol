'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Swords, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal,
  Layers,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BossChallenge {
  id: string;
  year: string;
  paperType: string;
  badgeText: string;
  titleEn: string;
  titleSi: string;
  questionEn: string;
  questionSi: string;
}

export function PresentationBossArcade() {
  const [currentBossIndex, setCurrentBossIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [completedBosses, setCompletedBosses] = useState<Record<number, boolean>>({});

  // Boss 1 State: Software Group Selection (2025 P1 Q18)
  const [boss1Selected, setBoss1Selected] = useState<string | null>(null);
  const [boss1Result, setBoss1Result] = useState<boolean | null>(null);

  // Boss 2 State: True/False Switch Matrix (2023 P2 Q01 iv)
  // Expected: A=True, B=False, C=False, D=True
  const [boss2Answers, setBoss2Answers] = useState<{ A: boolean | null; B: boolean | null; C: boolean | null; D: boolean | null }>({
    A: null,
    B: null,
    C: null,
    D: null
  });
  const [boss2Result, setBoss2Result] = useState<boolean | null>(null);

  // Boss 3 State: 4-Slide Sri Lanka Deck Layouts (2024 P2 Q01 vi)
  const [boss3Assignments, setBoss3Assignments] = useState<Record<string, string>>({
    s1: '',
    s2: '',
    s3: '',
    s4: ''
  });
  const [boss3Result, setBoss3Result] = useState<boolean | null>(null);

  // Boss 4 State: Statistical Table Layout Choice (2025 P2 Q01 x a)
  const [boss4Selected, setBoss4Selected] = useState<string | null>(null);
  const [boss4Result, setBoss4Result] = useState<boolean | null>(null);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  // Boss 1 Check
  const handleBoss1Submit = (groupKey: string) => {
    sound.playClick(600);
    setBoss1Selected(groupKey);
    const isCorrect = groupKey === 'group_c';
    setBoss1Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 0: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  // Boss 2 Check
  const handleBoss2Toggle = (key: 'A' | 'B' | 'C' | 'D', value: boolean) => {
    sound.playClick(500);
    const updated = { ...boss2Answers, [key]: value };
    setBoss2Answers(updated);

    if (updated.A !== null && updated.B !== null && updated.C !== null && updated.D !== null) {
      const isCorrect = updated.A === true && updated.B === false && updated.C === false && updated.D === true;
      setBoss2Result(isCorrect);
      if (isCorrect) {
        sound.playVictory();
        triggerConfetti();
        setScore(prev => prev + 100);
        setStreak(prev => prev + 1);
        setCompletedBosses(prev => ({ ...prev, 1: true }));
      } else {
        sound.playError();
        setStreak(0);
      }
    }
  };

  // Boss 3 Check
  const handleBoss3Assign = (slideKey: string, layout: string) => {
    sound.playClick(600);
    const updated = { ...boss3Assignments, [slideKey]: layout };
    setBoss3Assignments(updated);

    const isAllSelected = updated.s1 && updated.s2 && updated.s3 && updated.s4;
    if (isAllSelected) {
      const isCorrect = 
        updated.s1 === 'title_slide' &&
        updated.s2 === 'title_content' &&
        updated.s3 === 'title_content' &&
        updated.s4 === 'title_two_content';
      
      setBoss3Result(isCorrect);
      if (isCorrect) {
        sound.playVictory();
        triggerConfetti();
        setScore(prev => prev + 100);
        setStreak(prev => prev + 1);
        setCompletedBosses(prev => ({ ...prev, 2: true }));
      } else {
        sound.playError();
        setStreak(0);
      }
    }
  };

  // Boss 4 Check
  const handleBoss4Submit = (layoutKey: string) => {
    sound.playClick(600);
    setBoss4Selected(layoutKey);
    const isCorrect = layoutKey === 'title_and_content';
    setBoss4Result(isCorrect);
    if (isCorrect) {
      sound.playVictory();
      triggerConfetti();
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      setCompletedBosses(prev => ({ ...prev, 3: true }));
    } else {
      sound.playError();
      setStreak(0);
    }
  };

  const totalCompleted = Object.values(completedBosses).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Top Header Arcade HUD */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Swords className="w-4 h-4" />
              <span>STATION 05 • PAST PAPER BOSS ARCADE (2020 – 2025 O/L විභාග සටන්)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Presentation Exam Boss Arena (සමර්පණ විභාග අභියෝග)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
              Test your mastery against actual 2020–2025 G.C.E. O/L Paper I & Paper II presentation questions.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Score</div>
              <div className="text-sm font-black text-amber-400 font-mono">{score} pts</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Streak</div>
              <div className="text-sm font-black text-rose-400 font-mono">{streak} 🔥</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-2xl text-center">
              <div className="text-[10px] uppercase font-mono text-slate-400">Clear Rate</div>
              <div className="text-sm font-black text-emerald-400 font-mono">{totalCompleted}/4 Bosses</div>
            </div>
          </div>
        </div>

        {/* 4 Boss Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
          {[
            { idx: 0, title: 'Boss 1: Software Sorter', year: '2025 P1 Q18' },
            { idx: 1, title: 'Boss 2: True/False Matrix', year: '2023 P2 Q01' },
            { idx: 2, title: 'Boss 3: Sri Lanka Deck', year: '2024 P2 Q01' },
            { idx: 3, title: 'Boss 4: Statistical Table', year: '2025 P2 Q01' },
          ].map((b) => {
            const isSelected = currentBossIndex === b.idx;
            const isDone = completedBosses[b.idx];

            return (
              <button
                key={b.idx}
                onClick={() => { sound.playClick(600); setCurrentBossIndex(b.idx); }}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-rose-600/30 border-rose-400 text-white shadow-lg shadow-rose-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span>{b.year}</span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs font-bold text-white leading-tight truncate">
                  {b.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Boss Stage */}
      <AnimatePresence mode="wait">
        {/* Boss 1: Software Sorter (2025 P1 Q18) */}
        {currentBossIndex === 0 && (
          <motion.div
            key="boss_0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  2025 O/L Paper I • Question 18
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  Which one of the following groups contains <span className="text-amber-400 underline">ONLY</span> electronic presentation software?
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  ඉලෙක්ට්‍රොනික සමර්පණ මෘදුකාංග පමණක් අඩංගු කාණ්ඩය කුමක්ද?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'group_a', label: '(1)', text: 'Microsoft Word, Microsoft Excel, Microsoft PowerPoint', desc: 'Word processor, Spreadsheet, Presentation' },
                { id: 'group_b', label: '(2)', text: 'Audacity, Calc, Impress, Keynote', desc: 'Audio editor, Spreadsheet, Presentation' },
                { id: 'group_c', label: '(3)', text: 'Apple Keynote, Google Slides, Microsoft PowerPoint', desc: 'Pure electronic presentation applications ✓' },
                { id: 'group_d', label: '(4)', text: 'Adobe Photoshop, Google Docs, LibreOffice Impress', desc: 'Graphics editor, Word processor, Presentation' },
              ].map((group) => {
                const isSelected = boss1Selected === group.id;

                return (
                  <button
                    key={group.id}
                    onClick={() => handleBoss1Submit(group.id)}
                    className={`p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                      isSelected
                        ? group.id === 'group_c'
                          ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                          : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-cyan-400">{group.label}</span>
                      <span className="text-xs font-bold text-white">{group.text}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 pl-6">{group.desc}</div>
                  </button>
                );
              })}
            </div>

            {boss1Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss1Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss1Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss1Result
                    ? 'CORRECT (+100 pts)! Apple Keynote, Google Slides, and Microsoft PowerPoint (alongside LibreOffice Impress) are dedicated presentation software.'
                    : 'INCORRECT! Ensure every item in the group is exclusively presentation software (Word/Docs are word processors; Excel/Calc are spreadsheets).'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 2: True/False Matrix (2023 P2 Q01 iv) */}
        {currentBossIndex === 1 && (
          <motion.div
            key="boss_1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                  2023 O/L Paper II • Question 01 (iv)
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  State whether the following statements regarding slide design are True (T) or False (F):
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  පහත ප්‍රකාශ සත්‍ය (T) ද අසත්‍ය (F) ද යන්න තෝරන්න:
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { key: 'A', textEn: 'A - Title and Content layout can contain a title, text bullets, and two images.', textSi: 'Title and Content layout මගින් මාතෘකාවක්, බුලට් ලක්ෂ්‍ය සහ රූප 2ක් ඇතුළත් කළ හැක.', correct: true },
                { key: 'B', textEn: 'B - Video content cannot be added to an electronic presentation.', textSi: 'ඉලෙක්ට්‍රොනික සමර්පණයකට වීඩියෝ දර්ශන එක් කළ නොහැක.', correct: false },
                { key: 'C', textEn: 'C - It is suitable to add large paragraphs of text to each slide.', textSi: 'සෑම කදාවකටම දිගු ඡේද ඇතුළත් කිරීම සුදුසු වේ.', correct: false },
                { key: 'D', textEn: 'D - Planning target audience, duration, and objective before creating slides is suitable.', textSi: 'කදා නිර්මාණයට පෙර අරමුණ, කාලය සහ ප්‍රේක්ෂකයින් සැලසුම් කිරීම යෝග්‍ය වේ.', correct: true },
              ].map((stmt) => {
                const ans = boss2Answers[stmt.key as 'A' | 'B' | 'C' | 'D'];

                return (
                  <div
                    key={stmt.key}
                    className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white">{stmt.textEn}</div>
                      <div className="text-[11px] text-slate-400">{stmt.textSi}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleBoss2Toggle(stmt.key as 'A' | 'B' | 'C' | 'D', true)}
                        className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          ans === true
                            ? 'bg-emerald-600 border-emerald-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        True (සත්‍ය)
                      </button>
                      <button
                        onClick={() => handleBoss2Toggle(stmt.key as 'A' | 'B' | 'C' | 'D', false)}
                        className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          ans === false
                            ? 'bg-rose-600 border-rose-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        False (අසත්‍ය)
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {boss2Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss2Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss2Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss2Result
                    ? 'PERFECT (A: True, B: False, C: False, D: True)! Video is completely supported in presentations, and long paragraphs violate the 6–9 line clarity rule.'
                    : 'Check your selections: Video CAN be inserted (B is False); long paragraphs cause cognitive overload (C is False); planning audience is essential (D is True).'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 3: Sri Lanka Deck Layout Assignment (2024 P2 Q01 vi) */}
        {currentBossIndex === 2 && (
          <motion.div
            key="boss_2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                  2024 O/L Paper II • Question 01 (vi)
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  Select the most suitable slide layout (Title Slide, Title and Content, Title and Two Content, Blank) for each slide in the Sri Lanka presentation:
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  ශ්‍රී ලංකාව පිළිබඳ කදා 4 සඳහා වඩාත් යෝග්‍ය කදා පිරිසැලසුම් තෝරන්න:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 's1', name: 'Slide 1: Main Title & Author', desc: 'Heading: "Sri Lanka", Subtitle: "By Grade 10 ICT"', expected: 'title_slide' },
                { id: 's2', name: 'Slide 2: South Asia Map', desc: 'Heading + 1 large map of South Asian region', expected: 'title_content' },
                { id: 's3', name: 'Slide 3: Historical Highlights', desc: 'Heading + 5 concise bullet facts of ancient kingdoms', expected: 'title_content' },
                { id: 's4', name: 'Slide 4: Provinces & Map Comparison', desc: 'Heading + Left: 9 Provinces List + Right: Map graphic', expected: 'title_two_content' },
              ].map((slide) => (
                <div key={slide.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <div>
                    <div className="text-xs font-bold text-white">{slide.name}</div>
                    <div className="text-[11px] text-slate-400">{slide.desc}</div>
                  </div>

                  <select
                    value={boss3Assignments[slide.id]}
                    onChange={(e) => handleBoss3Assign(slide.id, e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Slide Layout...</option>
                    <option value="title_slide">Title Slide (ශීර්ෂ කදාව)</option>
                    <option value="title_content">Title and Content (ශීර්ෂය හා අන්තර්ගතය)</option>
                    <option value="title_two_content">Title and Two Content (ද්විත්ව අන්තර්ගතය)</option>
                    <option value="blank">Blank (හිස් කදාව)</option>
                  </select>
                </div>
              ))}
            </div>

            {boss3Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss3Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss3Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss3Result
                    ? 'FULL MARKS! Slide 1: Title Slide, Slide 2 & 3: Title and Content, Slide 4: Title and Two Content.'
                    : 'Check your layout matches: Slide 1 is the Title Slide, Single map or bullet list uses Title and Content, side-by-side comparison uses Title and Two Content.'}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Boss 4: Statistical Table Layout Choice (2025 P2 Q01 x a) */}
        {currentBossIndex === 3 && (
          <motion.div
            key="boss_3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  2025 O/L Paper II • Question 01 (x) (a)
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  You need a slide that includes a title along with a statistical data table. Which layout should you choose from the following options?
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  මාතෘකාවක් සහ සංඛ්‍යාන දත්ත වගුවක් ඇතුළත් කිරීමට වඩාත් සුදුසු කදා පිරිසැලසුම කුමක්ද?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'title_only', name: 'Title only', nameSi: 'ශීර්ෂය පමණක්', desc: 'Has a single title placeholder at top; no content box.' },
                { id: 'title_and_content', name: 'Title and content', nameSi: 'ශීර්ෂය හා අන්තර්ගතය', desc: 'Has title + 1 unified zone for table, chart, or list. ✓' },
                { id: 'title_and_two_content', name: 'Title and two content', nameSi: 'ශීර්ෂය හා ද්විත්ව අන්තර්ගතය', desc: 'Two split horizontal boxes side-by-side for comparison.' },
              ].map((opt) => {
                const isSelected = boss4Selected === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleBoss4Submit(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all space-y-2 ${
                      isSelected
                        ? opt.id === 'title_and_content'
                          ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                          : 'bg-rose-950/60 border-rose-400 text-white shadow-lg shadow-rose-500/10'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{opt.name}</div>
                    <div className="text-xs text-slate-400">{opt.nameSi}</div>
                    <p className="text-[11px] text-slate-500 pt-1">{opt.desc}</p>
                  </button>
                );
              })}
            </div>

            {boss4Result !== null && (
              <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
                boss4Result
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
              }`}>
                {boss4Result ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <div>
                  {boss4Result
                    ? 'EXCELLENT! Title and content provides the standard container to cleanly insert a single data table beneath the title.'
                    : 'INCORRECT. Title only has no content placeholder, and Title and two content splits into two separate comparison columns.'}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
