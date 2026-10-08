'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Swords, 
  Trophy, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Sparkles, 
  Zap, 
  Award, 
  ArrowRight,
  ShieldCheck,
  FileQuestion
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface BossQuestion {
  id: string;
  year: string;
  paper: string;
  questionNumber: string;
  topic: string;
  questionEn: string;
  questionSi: string;
  codeSnippet?: string;
  options: {
    id: string;
    textEn: string;
    textSi: string;
  }[];
  correctId: string;
  explanationEn: string;
  explanationSi: string;
}

const BOSS_QUESTIONS: BossQuestion[] = [
  {
    id: 'boss-1',
    year: '2023',
    paper: 'Paper II',
    questionNumber: 'Question 05 (A)',
    topic: 'URL Component Dissection',
    questionEn: 'Consider the following URL: https://www.doenets.lk/exam/results.php. Identify the Protocol, Domain Name, and File Name respectively:',
    questionSi: 'https://www.doenets.lk/exam/results.php යන URL හි නියමාවලිය, වසම් නාමය සහ ගොනු නාමය පිළිවෙළින් නිවැරදිව දක්වා ඇත්තේ කුමන වරණයේද?',
    codeSnippet: 'https://www.doenets.lk/exam/results.php',
    options: [
      {
        id: '1',
        textEn: 'Protocol: https | Domain: www.doenets.lk | File Name: results.php',
        textSi: 'නියමාවලිය: https | වසම් නාමය: www.doenets.lk | ගොනු නාමය: results.php'
      },
      {
        id: '2',
        textEn: 'Protocol: www | Domain: doenets.lk | File Name: /exam/',
        textSi: 'නියමාවලිය: www | වසම් නාමය: doenets.lk | ගොනු නාමය: /exam/'
      },
      {
        id: '3',
        textEn: 'Protocol: https:// | Domain: exam | File Name: doenets.lk',
        textSi: 'නියමාවලිය: https:// | වසම් නාමය: exam | ගොනු නාමය: doenets.lk'
      },
      {
        id: '4',
        textEn: 'Protocol: http | Domain: doenets | File Name: results',
        textSi: 'නියමාවලිය: http | වසම් නාමය: doenets | ගොනු නාමය: results'
      }
    ],
    correctId: '1',
    explanationEn: 'https is the transmission protocol; www.doenets.lk is the fully qualified domain name (host + domain); results.php is the target file located in the /exam/ folder.',
    explanationSi: 'නියමාවලිය වන්නේ https ය. වසම් නාමය www.doenets.lk වන අතර, /exam/ බහලුම තුළ පිහිටි ඉලක්කගත ගොනුව results.php වේ.'
  },
  {
    id: 'boss-2',
    year: '2022',
    paper: 'Paper I',
    questionNumber: 'MCQ 28',
    topic: 'E-Mail Header Visibility (BCC)',
    questionEn: 'An email is sent by Kasun with the following fields: To: nimal@mail.com, Cc: sunil@mail.com, Bcc: kamal@mail.com. Which of the following statements is TRUE?',
    questionSi: 'කසුන් විසින් යවන ලද ඊමේල් පණිවිඩයක To: nimal@mail.com, Cc: sunil@mail.com, Bcc: kamal@mail.com ලෙස ඇත. පහත සඳහන් ප්‍රකාශ අතරින් සත්‍ය වන්නේ කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: 'Nimal can see that Kamal received a copy of the email.',
        textSi: 'කමල් හට මෙම ලිපියේ පිටපතක් ලැබුණු බව නිමල්ට පෙනේ.'
      },
      {
        id: '2',
        textEn: 'Kamal knows that Nimal and Sunil received the email, but Nimal cannot see Kamal.',
        textSi: 'නිමල් සහ සුනිල්ට ලිපිය ලැබුණු බව කමල් දන්නා නමුත්, කමල්ට ලිපිය ලැබුණු බව නිමල්ට නොපෙනේ.'
      },
      {
        id: '3',
        textEn: 'Sunil can see Kamal\'s email address in the recipient list.',
        textSi: 'ලැබෙන්නන්ගේ ලැයිස්තුවේ කමල්ගේ ලිපිනය සුනිල්ට දැකගත හැක.'
      },
      {
        id: '4',
        textEn: 'Only Nimal receives the email attachment.',
        textSi: 'ඊමේල් ඇමුණුම ලැබෙන්නේ නිමල්ට පමණි.'
      }
    ],
    correctId: '2',
    explanationEn: 'Bcc (Blind Carbon Copy) masks the recipient address from both To and Cc recipients. Therefore, Kamal knows about Nimal and Sunil, but neither Nimal nor Sunil can see Kamal!',
    explanationSi: 'BCC (Blind Carbon Copy) හි සිටින අයගේ ලිපිනයන් To සහ CC හි සිටින අයට නොපෙනේ. එබැවින් නිමල් සහ සුනිල්ට කමල්ගේ ලිපිනය නොපෙනෙන නමුත් කමල්ට ඔවුන් දෙදෙනාවම පෙනේ.'
  },
  {
    id: 'boss-3',
    year: '2021',
    paper: 'Paper I',
    questionNumber: 'MCQ 32',
    topic: 'Internet Protocol Roles',
    questionEn: 'Which pair of protocols is correctly matched with Outgoing Mail transmission and Secure Web Browsing?',
    questionSi: 'විද්‍යුත් තැපැල් පණිවිඩ යැවීම (Outgoing Mail) සහ ආරක්ෂිත වෙබ් ගවේෂණය (Secure Web Browsing) සඳහා පිළිවෙළින් භාවිත වන නියමාවලි යුගලය කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: 'Outgoing Mail: SMTP | Secure Browsing: HTTPS',
        textSi: 'ඊමේල් යැවීම: SMTP | ආරක්ෂිත වෙබ් ගවේෂණය: HTTPS'
      },
      {
        id: '2',
        textEn: 'Outgoing Mail: POP3 | Secure Browsing: HTTP',
        textSi: 'ඊමේල් යැවීම: POP3 | ආරක්ෂිත වෙබ් ගවේෂණය: HTTP'
      },
      {
        id: '3',
        textEn: 'Outgoing Mail: FTP | Secure Browsing: SMTP',
        textSi: 'ඊමේල් යැවීම: FTP | ආරක්ෂිත වෙබ් ගවේෂණය: SMTP'
      },
      {
        id: '4',
        textEn: 'Outgoing Mail: IMAP | Secure Browsing: FTP',
        textSi: 'ඊමේල් යැවීම: IMAP | ආරක්ෂිත වෙබ් ගවේෂණය: FTP'
      }
    ],
    correctId: '1',
    explanationEn: 'SMTP (Simple Mail Transfer Protocol) is universally used for sending outgoing mail. HTTPS encrypts web traffic using SSL/TLS.',
    explanationSi: 'SMTP මගින් පිටතට ඊමේල් යැවීම (Outgoing) සිදු කරන අතර, HTTPS මගින් වෙබ් තොරතුරු සංකේතාංකනය කර ආරක්ෂිතව හුවමාරු කරයි.'
  },
  {
    id: 'boss-4',
    year: '2024',
    paper: 'Paper II',
    questionNumber: 'Question 06 (B)',
    topic: 'Network Topology Failure Analysis',
    questionEn: 'In a school ICT lab with 20 computers, if a single computer is turned off or its cable is unplugged, the other 19 computers continue communicating normally without interruption. What topology is most likely used?',
    questionSi: 'පරිගණක 20කින් යුත් පාසල් විද්‍යාගාරයක එක් පරිගණකයක කේබලය ගැලවී ගියද අනෙක් පරිගණක 19 කිසිදු බාධාවකින් තොරව ක්‍රියා කරයි නම්, එම ජාලය සකස් කර ඇත්තේ කුමන ආකෘතියටද?',
    options: [
      {
        id: '1',
        textEn: 'Star Topology (තාරකා ආකෘතිය)',
        textSi: 'තාරකා ආකෘතිය (Star Topology)'
      },
      {
        id: '2',
        textEn: 'Bus Topology (බස් ආකෘතිය)',
        textSi: 'බස් ආකෘතිය (Bus Topology)'
      },
      {
        id: '3',
        textEn: 'Ring Topology (මුදු ආකෘතිය)',
        textSi: 'මුදු ආකෘතිය (Ring Topology)'
      },
      {
        id: '4',
        textEn: 'Serial Line Topology',
        textSi: 'ශ්‍රේණිගත ආකෘතිය'
      }
    ],
    correctId: '1',
    explanationEn: 'In a Star topology, each node is connected via a dedicated link to a central switch. A failure in an individual node cable leaves all other connections intact.',
    explanationSi: 'තාරකා (Star) ආකෘතියේදී සෑම පරිගණකයක්ම මධ්‍ය ස්විචයට වෙන වෙනම සම්බන්ධ වන බැවින් එක් පරිගණකයක් විසන්ධි වුවද අනෙක් පරිගණක වලට බලපෑමක් ඇති නොවේ.'
  },
  {
    id: 'boss-5',
    year: '2020',
    paper: 'Paper I',
    questionNumber: 'MCQ 19',
    topic: 'IPv4 Address Octet Range',
    questionEn: 'Which of the following represents a syntactically VALID IPv4 address?',
    questionSi: 'පහත සඳහන් ලිපින අතරින් නිවැරදි IPv4 ලිපිනයක් වන්නේ කුමක්ද?',
    options: [
      {
        id: '1',
        textEn: '192.168.1.250',
        textSi: '192.168.1.250'
      },
      {
        id: '2',
        textEn: '192.256.10.1',
        textSi: '192.256.10.1'
      },
      {
        id: '3',
        textEn: '172.16.254.300',
        textSi: '172.16.254.300'
      },
      {
        id: '4',
        textEn: '10.0.0',
        textSi: '10.0.0'
      }
    ],
    correctId: '1',
    explanationEn: 'An IPv4 address consists of 4 octets separated by dots, each strictly between 0 and 255. 192.168.1.250 satisfies all constraints. (256 and 300 exceed 255; 10.0.0 has only 3 octets).',
    explanationSi: 'IPv4 ලිපිනයක තිත් මගින් වෙන් වූ කොටස් 4ක් තිබිය යුතු අතර සෑම කොටසක්ම 0 ත් 255 ත් අතර විය යුතුය. 192.168.1.250 පමණක් එම නීති සපුරයි.'
  },
  {
    id: 'boss-6',
    year: '2023',
    paper: 'Paper II',
    questionNumber: 'Question 06',
    topic: 'Cloud Computing & Cyber Defense',
    questionEn: 'Using Google Docs or Microsoft 365 directly through a web browser without installing local software is an example of which Cloud Computing service model?',
    questionSi: 'දේශීයව මෘදුකාංග ස්ථාපනය නොකර වෙබ් බ්‍රවුසරය ඔස්සේ Google Docs හෝ MS 365 භාවිත කිරීම කුමන වලාකුළු සේවා ආකෘතියට අයත් වේද?',
    options: [
      {
        id: '1',
        textEn: 'SaaS (Software as a Service - සේවාවක් ලෙස මෘදුකාංග)',
        textSi: 'SaaS (Software as a Service)'
      },
      {
        id: '2',
        textEn: 'PaaS (Platform as a Service - සේවාවක් ලෙස වේදිකාව)',
        textSi: 'PaaS (Platform as a Service)'
      },
      {
        id: '3',
        textEn: 'IaaS (Infrastructure as a Service - සේවාවක් ලෙස යටිතල පහසුකම්)',
        textSi: 'IaaS (Infrastructure as a Service)'
      },
      {
        id: '4',
        textEn: 'DaaS (Data as a Service)',
        textSi: 'DaaS (Data as a Service)'
      }
    ],
    correctId: '1',
    explanationEn: 'SaaS (Software as a Service) delivers end-user applications directly over the internet without requiring local installation or server management.',
    explanationSi: 'SaaS (Software as a Service) මගින් පරිශීලකයාට අවශ්‍ය මෘදුකාංග සෘජුවම අන්තර්ජාලය ඔස්සේ භාවිත කිරීමට ලබා දේ.'
  }
];

export function InternetBossArcade() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answeredMap, setAnsweredMap] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

  const currentQ = BOSS_QUESTIONS[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    sound.playClick(600);
    setSelectedOption(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctId;
    if (isCorrect) {
      sound.playSuccess();
      setScore((prev) => prev + 1);
    } else {
      sound.playError();
    }

    setIsAnswerSubmitted(true);
    setAnsweredMap((prev) => ({
      ...prev,
      [currentQ.id]: { selected: selectedOption, isCorrect }
    }));
  };

  const handleNext = () => {
    sound.playClick(500);
    if (currentIdx < BOSS_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      sound.playVictory();
      setIsGameComplete(true);
    }
  };

  const handleRestart = () => {
    sound.playClick(500);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setAnsweredMap({});
    setIsGameComplete(false);
  };

  return (
    <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
      {/* Header & Scoreboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              O/L EXAM BOSS FIGHT (2020 – 2025)
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Unit 03 Mastery Challenge
            </span>
          </div>
          <h3 className="text-xl font-black text-white mt-1">
            G.C.E. O/L Examination Simulator
          </h3>
        </div>

        {/* Live Score Meter */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-2xl border border-slate-800 self-start sm:self-auto">
          <Trophy className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-[10px] font-mono text-slate-400">SCORE:</div>
            <div className="text-sm font-mono font-bold text-amber-300">
              {score} / {BOSS_QUESTIONS.length} Solved
            </div>
          </div>
        </div>
      </div>

      {!isGameComplete ? (
        <div className="space-y-6">
          {/* Question Breadcrumb & Year Tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-500/30 font-bold">
                {currentQ.year} {currentQ.paper}
              </span>
              <span className="text-slate-400 font-semibold">{currentQ.questionNumber}</span>
            </div>
            <span className="text-slate-500">
              Question {currentIdx + 1} of {BOSS_QUESTIONS.length}
            </span>
          </div>

          {/* Question Card */}
          <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Topic: {currentQ.topic}
            </div>

            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.questionEn}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {currentQ.questionSi}
              </p>
            </div>

            {currentQ.codeSnippet && (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300 break-all">
                {currentQ.codeSnippet}
              </div>
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                const isCorrect = opt.id === currentQ.correctId;
                let optStyles = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optStyles = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    optStyles = 'bg-rose-950/80 border-rose-400 text-rose-200 ring-2 ring-rose-400';
                  } else {
                    optStyles = 'bg-slate-950/50 border-slate-900 text-slate-600 opacity-60';
                  }
                } else if (isSelected) {
                  optStyles = 'bg-cyan-950 border-cyan-400 text-cyan-200 ring-2 ring-cyan-400';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${optStyles}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {opt.id}
                    </span>
                    <div className="text-xs sm:text-sm space-y-0.5">
                      <div className="font-semibold text-white">{opt.textEn}</div>
                      <div className="text-slate-400 text-xs font-sans">{opt.textSi}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex items-center justify-between gap-4">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption}
                  className={`w-full py-3 rounded-xl font-bold font-mono text-xs transition-all shadow-md ${
                    selectedOption
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  CONFIRM ANSWER
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 rounded-xl font-bold font-mono text-xs transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
                >
                  <span>{currentIdx < BOSS_QUESTIONS.length - 1 ? 'NEXT QUESTION' : 'VIEW FINAL RESULTS'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Step-by-Step Explanation Banner */}
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Examiner's Detailed Marking Scheme & Breakdown:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-mono">
                  {currentQ.explanationEn}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {currentQ.explanationSi}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        /* Final Victory Screen */
        <div className="text-center p-8 bg-slate-900/80 rounded-2xl border border-cyan-500/30 space-y-6">
          <div className="relative inline-block">
            <Award className="w-20 h-20 text-amber-400 mx-auto animate-bounce" />
            <Sparkles className="w-6 h-6 text-cyan-300 absolute top-0 right-0 animate-spin" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {score === BOSS_QUESTIONS.length
                ? '🏆 PERFECTION! FULL MARKS ACHIEVED!'
                : score >= 4
                ? '🎉 EXCELLENT EXAM READINESS!'
                : '📚 GOOD EFFORT! REVIEW & TRY AGAIN!'}
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              You correctly solved <strong className="text-cyan-300">{score}</strong> out of <strong className="text-white">{BOSS_QUESTIONS.length}</strong> G.C.E. O/L past paper questions.
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-bold font-mono text-xs transition-all shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESTART EXAM BATTLE</span>
          </button>
        </div>
      )}
    </div>
  );
}
