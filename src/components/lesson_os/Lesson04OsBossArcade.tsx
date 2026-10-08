'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Swords, 
  ShieldAlert, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Zap,
  Flame,
  HelpCircle,
  HardDrive
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  yearText: string;
  badge: string;
  titleEn: string;
  titleSi: string;
  scenarioEn: string;
  scenarioSi: string;
  options: {
    id: string;
    textEn: string;
    textSi: string;
    isCorrect: boolean;
  }[];
  explanationEn: string;
  explanationSi: string;
  hint: string;
}

const BOSS_QUESTIONS: BossQuestion[] = [
  {
    id: 'bos1-2024-p1-q10',
    yearText: '2024 O/L Paper I - Q10',
    badge: 'System Software Role',
    titleEn: 'Core Role of an Operating System',
    titleSi: 'මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යභාරය',
    scenarioEn: 'Which of the following is the most accurate statement regarding an Operating System in computer systems?',
    scenarioSi: 'පරිගණක පද්ධතියක මෙහෙයුම් පද්ධතිය සම්බන්ධයෙන් වඩාත්ම නිවැරදි ප්‍රකාශය කුමක්ද?',
    options: [
      { id: '1', textEn: 'It solely allows typing letters and creating spreadsheets.', textSi: 'එය ලිපි ලිවීම සහ පැතුරුම්පත් සැකසීම සඳහා පමණක් පහසුකම් සලසයි.', isCorrect: false },
      { id: '2', textEn: 'It acts as the core interface between the user, application software, and computer hardware.', textSi: 'පරිශීලකයා, යෙදුම් මෘදුකාංග සහ දෘඩාංග අතර මූලික පාලක අතුරුමුහුණත ලෙස ක්‍රියා කරයි.', isCorrect: true },
      { id: '3', textEn: 'It only operates when the computer is connected to the World Wide Web.', textSi: 'පරිගණකය අන්තර්ජාලයට සම්බන්ධ වූ විට පමණක් ක්‍රියාත්මක වේ.', isCorrect: false },
      { id: '4', textEn: 'It converts alternating current into direct current inside the power supply.', textSi: 'විදුලි සැපයුම තුළ ප්‍රත්‍යාවර්ත ධාරාව සරල ධාරාව බවට පරිවර්තනය කරයි.', isCorrect: false }
    ],
    explanationEn: 'The Operating System is the primary system software that manages hardware resources (CPU, RAM, Disks) and provides a runtime platform for application software and human users.',
    explanationSi: 'මෙහෙයුම් පද්ධතිය යනු පරිගණක දෘඩාංග සම්පත් (CPU, RAM, Disks) කළමනාකරණය කරමින් පරිශීලකයාට සහ යෙදුම් මෘදුකාංගවලට ක්‍රියාත්මක වීමට පරිසරය සලසන ප්‍රධාන පද්ධති මෘදුකාංගයයි.',
    hint: 'Think: OS is the sole bridge between physical hardware and applications.'
  },
  {
    id: 'bos2-2023-p2-q01',
    yearText: '2023 O/L Paper II - Q01 (i)',
    badge: 'Booting Chronology',
    titleEn: 'Computer Booting Sequence Order',
    titleSi: 'පරිගණකය පණගැන්වීමේ (Booting) නිවැරදි අනුපිළිවෙළ',
    scenarioEn: 'Consider the following operations performed during a cold boot:\nA: ROM BIOS executes POST tests.\nB: Power surge sent to CPU reset registers.\nC: OS Kernel loaded into RAM from Boot Drive.\nD: Control given to OS and User Interface loads.\nWhat is the correct chronological order?',
    scenarioSi: 'සීතල පණගැන්වීමකදී සිදුවන පහත ක්‍රියා සලකන්න:\nA: ROM BIOS මගින් POST දෘඩාංග පරීක්ෂාව සිදු කිරීම.\nB: CPU රෙජිස්ටර් ආරම්භ කිරීමට විදුලි සංඥා සැපයීම.\nC: Boot Drive වෙතින් මෙහෙයුම් පද්ධතිය RAM මතකයට පැටවීම.\nD: පාලනය මෙහෙයුම් පද්ධතියට ලැබී User Interface දර්ශනය වීම.\nනිවැරදි අනුපිළිවෙළ කුමක්ද?',
    options: [
      { id: '1', textEn: 'A ➔ B ➔ C ➔ D', textSi: 'A ➔ B ➔ C ➔ D', isCorrect: false },
      { id: '2', textEn: 'B ➔ A ➔ C ➔ D', textSi: 'B ➔ A ➔ C ➔ D', isCorrect: true },
      { id: '3', textEn: 'C ➔ A ➔ B ➔ D', textSi: 'C ➔ A ➔ B ➔ D', isCorrect: false },
      { id: '4', textEn: 'B ➔ C ➔ A ➔ D', textSi: 'B ➔ C ➔ A ➔ D', isCorrect: false }
    ],
    explanationEn: 'Correct sequence: Power surge / CPU reset (B) ➔ ROM BIOS firmware & POST (A) ➔ Bootloader loads OS into RAM (C) ➔ OS takes control & loads UI (D).',
    explanationSi: 'නිවැරදි අනුපිළිවෙළ: විදුලිය සැපයීම (B) ➔ BIOS හා POST පරීක්ෂාව (A) ➔ මෙහෙයුම් පද්ධතිය RAM මතකයට පැටවීම (C) ➔ UI අතුරුමුහුණත පැමිණීම (D).',
    hint: 'Power must arrive first, then ROM BIOS checks hardware before RAM loads the OS.'
  },
  {
    id: 'bos3-2021-p1-q09',
    yearText: '2021 O/L Paper I - Q09',
    badge: 'Disk Formatting & File Systems',
    titleEn: 'Preparing Storage Media by Formatting',
    titleSi: 'තැටි ආකෘතිකරණය (Disk Formatting)',
    scenarioEn: 'Why is a brand new hard disk drive formatted before storing files and operating system files?',
    scenarioSi: 'නව දෘඩ තැටියක ගොනු තැන්පත් කිරීමට පෙර එය ආකෘතිකරණය (Formatting) කරනු ලබන්නේ ඇයි?',
    options: [
      { id: '1', textEn: 'To clean dust from magnetic platters physically', textSi: 'චුම්භක තැටිවල දූවිලි භෞතිකව පිරිසිදු කිරීමට', isCorrect: false },
      { id: '2', textEn: 'To establish a compatible File System structure (e.g. NTFS/FAT32) and track sectors', textSi: 'මෙහෙයුම් පද්ධතියට ගැලපෙන ගොනු පද්ධතියක් (NTFS/FAT32) සහ ක්ලස්ටර් සකස් කිරීමට', isCorrect: true },
      { id: '3', textEn: 'To permanently increase the clock speed of the CPU', textSi: 'CPU හි ඔරලෝසු වේගය ස්ථිරව වැඩි කිරීමට', isCorrect: false },
      { id: '4', textEn: 'To download games from the internet automatically', textSi: 'අන්තර්ජාලයෙන් ස්වයංක්‍රීයව ක්‍රීඩා බාගත කර ගැනීමට', isCorrect: false }
    ],
    explanationEn: 'Disk Formatting initializes the tracks and sectors according to a specific file system format (FAT32, NTFS, ext4) so that directory structures and data clusters can be addressed.',
    explanationSi: 'තැටි ආකෘතිකරණය මගින් අදාළ මෙහෙයුම් පද්ධතියට අනුකූල ගොනු පද්ධතියක් (FAT32, NTFS) සහ ධාවක ක්ලස්ටර් ව්‍යුහයක් සූදානම් කරයි.',
    hint: 'Formatting prepares the logical file system structure on the drive.'
  },
  {
    id: 'bos4-2025-p2-q01',
    yearText: '2025 O/L Paper II - Q01 (v)',
    badge: 'Defragmentation Benefits',
    titleEn: 'Speeding Up Read Time via Defragmentation',
    titleSi: 'ප්‍රතිභාගීකරණය මගින් කියවීමේ වේගය වැඩිවීම',
    scenarioEn: 'A student notices that opening large files on a mechanical hard drive is taking a very long time. Which utility software tool should be executed to rearrange scattered clusters continuously?',
    scenarioSi: 'දෘඩ තැටියක ඇති විශාල ගොනු විවෘත කිරීමේදී දැඩි ප්‍රමාදයක් පවතී. කැබලි වී ඇති ගොනු කොටස් අඛණ්ඩව පිහිටන සේ නැවත සැකසීමට භාවිත කළ යුතු උපයෝගිතා මෘදුකාංගය කුමක්ද?',
    options: [
      { id: '1', textEn: 'Disk Defragmenter (තැටි ප්‍රතිභාගීකරණ මෙවලම)', textSi: 'තැටි ප්‍රතිභාගීකරණය (Disk Defragmenter)', isCorrect: true },
      { id: '2', textEn: 'Screen Saver (තිර සුරැකුම)', textSi: 'තිර සුරැකුම (Screen Saver)', isCorrect: false },
      { id: '3', textEn: 'Disk Formatting (තැටි ආකෘතිකරණය)', textSi: 'තැටි ආකෘතිකරණය (Disk Formatting)', isCorrect: false },
      { id: '4', textEn: 'Device Driver Uninstaller', textSi: 'උපාංග ධාවක ඉවත් කිරීම', isCorrect: false }
    ],
    explanationEn: 'Disk Defragmentation consolidates fragmented files into contiguous sectors, significantly reducing head seek time and speeding up read access without deleting data.',
    explanationSi: 'ප්‍රතිභාගීකරණය මගින් කැබලි වූ ගොනු කොටස් එක ළඟ අඛණ්ඩ ක්ලස්ටර් ලෙස සකස් කර දෘඩ තැටියේ කියවීමේ වේගය (Seek Time) බෙහෙවින් වැඩි කරයි.',
    hint: 'Rearranging scattered pieces together = Defragmentation.'
  },
  {
    id: 'bos5-2022-p1-q12',
    yearText: '2022 O/L Paper I - Q12',
    badge: 'WIMP Interface Match',
    titleEn: 'WIMP Acronym Decoding',
    titleSi: 'WIMP සංකල්පයේ අකුරු හඳුනාගැනීම',
    scenarioEn: 'Which four elements comprise the WIMP model utilized in Graphical User Interfaces (GUI)?',
    scenarioSi: 'ප්‍රස්ථාරික පරිශීලක අතුරුමුහුණත්වල (GUI) භාවිත වන WIMP සංකල්පයට අයත් සංරචක 4 කුමක්ද?',
    options: [
      { id: '1', textEn: 'Web, Internet, Modem, Protocol', textSi: 'Web, Internet, Modem, Protocol', isCorrect: false },
      { id: '2', textEn: 'Windows, Icons, Menus, Pointer', textSi: 'කවුළු (Windows), නිරූපක (Icons), මෙනු (Menus), දර්ශකය (Pointer)', isCorrect: true },
      { id: '3', textEn: 'Word, Information, Memory, Processor', textSi: 'Word, Information, Memory, Processor', isCorrect: false },
      { id: '4', textEn: 'Wireless, Intranet, Malware, Password', textSi: 'Wireless, Intranet, Malware, Password', isCorrect: false }
    ],
    explanationEn: 'WIMP in GUI stands verbatim for Windows, Icons, Menus, and Pointer/Mouse.',
    explanationSi: 'GUI හි WIMP යනු Windows (කවුළු), Icons (නිරූපක), Menus (මෙනු), Pointer (දර්ශකය / මූසිකය) වේ.',
    hint: 'W = Windows, I = Icons, M = Menus, P = Pointer.'
  },
  {
    id: 'bos6-2020-p1-q18',
    yearText: '2020 O/L Paper I - Q18',
    badge: 'Virtual Memory Paging',
    titleEn: 'Virtual Memory on Secondary Storage',
    titleSi: 'ද්විතීයික ආචයනයේ අතථ්‍ය මතකය (Virtual Memory)',
    scenarioEn: 'When physical Random Access Memory (RAM) is completely full, what does the Operating System utilize to prevent application crashes?',
    scenarioSi: 'පරිගණකයේ සසම්භාවී පිවිසුම් මතකය (RAM) සම්පූර්ණයෙන්ම පිරී ගිය විට, වැඩසටහන් බිඳ වැටීම වැළැක්වීමට මෙහෙයුම් පද්ධතිය භාවිත කරන්නේ කුමක්ද?',
    options: [
      { id: '1', textEn: 'Virtual Memory created on the Hard Disk (Swap File / Paging)', textSi: 'දෘඩ තැටිය තුළ වෙන් කරගන්නා අතථ්‍ය මතකය (Virtual Memory / Swap File)', isCorrect: true },
      { id: '2', textEn: 'Permanent instructions in ROM BIOS', textSi: 'ROM BIOS හි ඇති ස්ථිර උපදෙස්', isCorrect: false },
      { id: '3', textEn: 'Deleting the operating system kernel', textSi: 'මෙහෙයුම් පද්ධති කර්නලය මකා දැමීම', isCorrect: false },
      { id: '4', textEn: 'Increasing the physical monitor resolution', textSi: 'මොනිටරයේ විභේදනය වැඩි කිරීම', isCorrect: false }
    ],
    explanationEn: 'Virtual Memory uses a designated area of the secondary hard drive (paging/swap file) as an extension of physical RAM to hold inactive memory pages.',
    explanationSi: 'භෞතික RAM මතකය මදි වූ විට, මෙහෙයුම් පද්ධතිය දෘඩ තැටියේ කොටසක් අතථ්‍ය මතකය (Virtual Memory) ලෙස භාවිත කර අක්‍රිය දත්ත පිටු (Pages) එහි තැන්පත් කරයි.',
    hint: 'Swap file / Paging on Hard Disk acting as extra RAM.'
  }
];

export function Lesson04OsBossArcade() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [bossDefeated, setBossDefeated] = useState(false);

  const currentQ = BOSS_QUESTIONS[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    sound.playClick(650);
    setSelectedOptionId(optId);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId || isAnswered) return;

    setIsAnswered(true);
    const chosen = currentQ.options.find(o => o.id === selectedOptionId);

    if (chosen?.isCorrect) {
      sound.playSuccess();
      setScore(s => s + 1);
    } else {
      sound.playError();
    }
  };

  const handleNextQuestion = () => {
    sound.playSnap();
    if (currentIndex < BOSS_QUESTIONS.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setBossDefeated(true);
      sound.playVictory();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    sound.playClick(400);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setBossDefeated(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              STATION 06 • විභාග සටන් අංගනය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Authentic 2020 – 2025 Past Paper Battles
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Swords className="w-5 h-5 text-teal-400" />
            The Past Paper Boss Arcade (මෙහෙයුම් පද්ධති විභාග අභියෝගය)
          </h2>
        </div>

        {/* Score Readout */}
        <div className="flex items-center gap-4 bg-slate-800/80 p-2 px-4 rounded-xl border border-slate-700">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Exam Mastery</div>
            <div className="text-sm font-mono font-black text-teal-400">{score} / {BOSS_QUESTIONS.length}</div>
          </div>
          <Trophy className="w-6 h-6 text-amber-400" />
        </div>
      </div>

      {/* Main Arcade Stage */}
      {!bossDefeated ? (
        <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 space-y-6 shadow-2xl">
          {/* Question Header & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-teal-950 border border-teal-500/50 text-xs font-mono font-bold text-teal-300">
                {currentQ.yearText}
              </span>
              <span className="text-xs font-semibold text-slate-400">{currentQ.badge}</span>
            </div>
            <span className="text-xs font-mono text-slate-500">Question {currentIndex + 1} of {BOSS_QUESTIONS.length}</span>
          </div>

          {/* Question Title & Scenario */}
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-white">{currentQ.titleEn}</h3>
            <h4 className="text-xs font-bold text-teal-400 font-sinhala">{currentQ.titleSi}</h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 space-y-2">
              <p className="whitespace-pre-line leading-relaxed">{currentQ.scenarioEn}</p>
              <p className="whitespace-pre-line text-slate-400 font-sinhala text-[11px] leading-relaxed pt-1 border-t border-slate-800/60">
                {currentQ.scenarioSi}
              </p>
            </div>
          </div>

          {/* Options Grid */}
          <div className="space-y-2.5">
            {currentQ.options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isCorrect;

              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800/80';
              if (isSelected && !isAnswered) {
                btnStyle = 'bg-teal-950/80 border-2 border-teal-400 text-white shadow-lg shadow-teal-500/20';
              } else if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-2 border-emerald-400 text-emerald-100';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-2 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-900/50 border-slate-800/50 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="space-y-0.5">
                    <div>{opt.textEn}</div>
                    <div className="text-[11px] opacity-75 font-sinhala">{opt.textSi}</div>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Post-Answer) */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40 space-y-1.5 text-xs text-teal-200"
            >
              <div className="flex items-center gap-1.5 font-bold text-teal-300">
                <Sparkles className="w-4 h-4" />
                <span>Marking Scheme & Syllabus Rationale:</span>
              </div>
              <p>{currentQ.explanationEn}</p>
              <p className="text-slate-400 font-sinhala text-[11px]">{currentQ.explanationSi}</p>
            </motion.div>
          )}

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-300 text-xs flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Hide Clue' : 'Hint Clue'}</span>
            </button>

            <div className="flex items-center gap-2">
              {!isAnswered ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={!selectedOptionId}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20"
                >
                  Confirm Strike
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/20"
                >
                  <span>{currentIndex < BOSS_QUESTIONS.length - 1 ? 'Next Question' : 'Claim Victory'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Hint Drawer */}
          {showHint && (
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
              💡 <strong>Examiner Hint:</strong> {currentQ.hint}
            </div>
          )}
        </div>
      ) : (
        /* Victory Screen */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500/50 text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-teal-500/20 border border-teal-500 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">BOSS GAUNTLET CONQUERED!</h3>
            <p className="text-sm text-teal-400 font-sinhala">මෙහෙයුම් පද්ධති සියලු විභාග ගැටලු සාර්ථකව විසඳන ලදී</p>
            <div className="text-3xl font-black font-mono text-teal-300 pt-2">
              Final Score: {score} / {BOSS_QUESTIONS.length}
            </div>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            {score >= 5 ? (
              <p className="text-emerald-300 font-semibold">
                🌟 Distinction Level! You have mastered the Booting Sequence, WIMP GUI/CLI duels, Round-Robin scheduling, and Disk Defragmentation.
              </p>
            ) : (
              <p className="text-amber-300 font-semibold">
                Good effort! Review the Cold-Boot conveyor and Disk Defragmentation stations to secure an A-grade in the O/L examination.
              </p>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-teal-500/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Boss Arcade</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
