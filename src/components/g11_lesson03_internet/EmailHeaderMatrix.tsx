'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Eye, 
  EyeOff, 
  Users, 
  Reply, 
  ReplyAll, 
  Forward, 
  Trash2, 
  FolderArchive, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  UserCheck, 
  FileText
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type PerspectiveType = 'sender' | 'to_nimal' | 'cc_principal' | 'bcc_teacher';

export function EmailHeaderMatrix() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'actions' | 'folders'>('matrix');
  const [currentPerspective, setCurrentPerspective] = useState<PerspectiveType>('sender');
  const [selectedAction, setSelectedAction] = useState<'reply' | 'replyAll' | 'forward'>('reply');

  // Email Config
  const emailData = {
    sender: 'kamal@ictclass.lk (Kamal - Head Prefect)',
    to: ['nimal@ictclass.lk', 'sunil@ictclass.lk'],
    cc: ['principal@ictclass.lk'],
    bcc: ['it_teacher@ictclass.lk'],
    subject: 'Grade 11 ICT Exhibition Meeting Agenda',
    body: 'Dear Team,\n\nPlease find the agenda for our upcoming meeting scheduled for Friday at 2:00 PM in the Computer Lab.\n\nBest regards,\nKamal'
  };

  const handlePerspectiveChange = (p: PerspectiveType) => {
    sound.playClick(600);
    setCurrentPerspective(p);
  };

  const handleActionSelect = (act: 'reply' | 'replyAll' | 'forward') => {
    sound.playClick(650);
    setSelectedAction(act);
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('matrix');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'matrix'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>To / Cc / Bcc Matrix</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('actions');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'actions'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Reply className="w-4 h-4" />
          <span>Reply vs Reply All</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('folders');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'folders'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FolderArchive className="w-4 h-4" />
          <span>Folders & Netiquette</span>
        </button>
      </div>

      {activeTab === 'matrix' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Mail Client Simulation */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  E-MAIL VISIBILITY LAB • ඊමේල් ශීර්ෂක
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Recipient Perspective Switcher
                </h3>
              </div>

              {/* Perspective Selector Pills */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 flex-wrap gap-1">
                {[
                  { id: 'sender', label: 'Kamal (Sender)' },
                  { id: 'to_nimal', label: 'Nimal (To)' },
                  { id: 'cc_principal', label: 'Principal (Cc)' },
                  { id: 'bcc_teacher', label: 'Teacher (Bcc)' }
                ].map((persp) => (
                  <button
                    key={persp.id}
                    onClick={() => handlePerspectiveChange(persp.id as PerspectiveType)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      currentPerspective === persp.id
                        ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {persp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Header Display */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
              {/* FROM */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-16 font-bold">FROM:</span>
                <span className="px-3 py-1 bg-slate-950 text-cyan-300 rounded-lg border border-slate-800">
                  {emailData.sender}
                </span>
              </div>

              {/* TO */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-16 font-bold">TO:</span>
                <div className="flex flex-wrap gap-1.5">
                  {emailData.to.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-cyan-950/60 text-cyan-200 rounded-lg border border-cyan-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CC */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-16 font-bold">CC:</span>
                <div className="flex flex-wrap gap-1.5">
                  {emailData.cc.map((c, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-purple-950/60 text-purple-200 rounded-lg border border-purple-500/30">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* BCC Field (Conditionally visible based on perspective) */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-16 font-bold">BCC:</span>
                {currentPerspective === 'to_nimal' || currentPerspective === 'cc_principal' ? (
                  <span className="px-3 py-1 bg-rose-950/40 text-rose-300/80 rounded-lg border border-rose-500/30 flex items-center gap-1.5 italic">
                    <EyeOff className="w-3.5 h-3.5 text-rose-400" />
                    HIDDEN & INVISIBLE! (BCC ලිපිනයන් මොවුන්ට නොපෙනේ)
                  </span>
                ) : currentPerspective === 'bcc_teacher' ? (
                  <span className="px-3 py-1 bg-amber-950/60 text-amber-200 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    it_teacher@ictclass.lk (Only visible to you as the Bcc recipient)
                  </span>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {emailData.bcc.map((b, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-amber-950/60 text-amber-200 rounded-lg border border-amber-500/30">
                        {b} (Visible to Kamal as sender)
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* SUBJECT */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <span className="text-slate-400 w-16 font-bold">SUBJECT:</span>
                <span className="font-bold text-white font-sans">{emailData.subject}</span>
              </div>
            </div>

            {/* Email Body Preview */}
            <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400">MESSAGE BODY (පණිවිඩ කොටස):</div>
              <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {emailData.body}
              </div>
            </div>
          </div>

          {/* Perspective Visibility Breakdown Deck */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Visibility Analysis
                </span>
                <h3 className="text-lg font-black text-white mt-1">
                  {currentPerspective === 'sender' && 'Kamal\'s View (Sender)'}
                  {currentPerspective === 'to_nimal' && 'Nimal\'s View (Primary TO)'}
                  {currentPerspective === 'cc_principal' && 'Principal\'s View (Carbon Copy CC)'}
                  {currentPerspective === 'bcc_teacher' && 'Teacher\'s View (Blind Carbon Copy BCC)'}
                </h3>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
                {currentPerspective === 'sender' && (
                  <>
                    <p>• As the sender, Kamal knows all recipients: <strong>To</strong> (Nimal, Sunil), <strong>Cc</strong> (Principal), and <strong>Bcc</strong> (Teacher).</p>
                    <p className="text-slate-400 text-[11px]">යවන්නා හට සියලුම ලිපින පෙනේ.</p>
                  </>
                )}
                {currentPerspective === 'to_nimal' && (
                  <>
                    <p>• Nimal sees Kamal (Sender), Sunil (Co-recipient), and Principal (Cc).</p>
                    <p className="text-rose-300 font-bold">• Nimal CANNOT see that Teacher received a copy!</p>
                    <p className="text-slate-400 text-[11px]">BCC හි සිටින ගුරුවරයාට පිටපතක් යැවූ බව නිමල්ට නොපෙනේ.</p>
                  </>
                )}
                {currentPerspective === 'cc_principal' && (
                  <>
                    <p>• Principal is kept in the loop (Cc). Principal sees Kamal, Nimal, and Sunil.</p>
                    <p className="text-rose-300 font-bold">• Principal has NO idea Teacher was in Bcc!</p>
                    <p className="text-slate-400 text-[11px]">විදුහල්පතිතුමාටද BCC හි සිටින ගුරුවරයා නොපෙනේ.</p>
                  </>
                )}
                {currentPerspective === 'bcc_teacher' && (
                  <>
                    <p>• Teacher secretly receives the email. Teacher sees Kamal, Nimal, Sunil, and Principal.</p>
                    <p className="text-emerald-300 font-bold">• Others have no idea Teacher is reading this!</p>
                    <p className="text-slate-400 text-[11px]">ගුරුවරයාට අනෙක් සියලුම දෙනා පෙනෙන නමුත් අන් කිසිවෙකුට ගුරුවරයා නොපෙනේ.</p>
                  </>
                )}
              </div>

              {/* O/L Exam Tip */}
              <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
                <strong>O/L Exam Golden Rule:</strong> Use BCC when sending a broadcast to many parents/students to prevent their private email addresses from being exposed to everyone!
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT • Unit 3.5
            </div>
          </div>
        </div>
      )}

      {activeTab === 'actions' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Reply className="w-5 h-5 text-cyan-400" />
              Reply vs Reply All vs Forward Simulator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              What happens when Nimal clicks Reply vs Reply All? Who gets the response?
            </p>
          </div>

          {/* Action Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'reply', name: '1. Reply (පිළිතුරු යැවීම)', icon: Reply, desc: 'Responds ONLY to the original sender (Kamal).' },
              { id: 'replyAll', name: '2. Reply All (සියල්ලන්ටම පිළිතුරු)', icon: ReplyAll, desc: 'Responds to Kamal + Nimal + Sunil + Principal.' },
              { id: 'forward', name: '3. Forward (ඉදිරියට යැවීම)', icon: Forward, desc: 'Sends the entire message thread to a completely NEW recipient.' }
            ].map((act) => {
              const isSelected = selectedAction === act.id;
              return (
                <button
                  key={act.id}
                  onClick={() => handleActionSelect(act.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 ring-2 ring-cyan-400 shadow-lg text-cyan-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <act.icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="font-bold text-sm text-white">{act.name}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">{act.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Action Impact Breakdown */}
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase">
              RESULTING OUTGOING RECIPIENTS (පණිවිඩය ලැබෙන්නන්):
            </div>

            {selectedAction === 'reply' && (
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-emerald-400">Target Recipients:</div>
                <div className="font-mono text-xs text-slate-200">
                  TO: <span className="text-cyan-300 font-bold">kamal@ictclass.lk</span>
                </div>
                <p className="text-xs text-slate-400">
                  Sunil, Principal, and Teacher will NOT receive Nimal's reply. Only Kamal gets it!
                </p>
              </div>
            )}

            {selectedAction === 'replyAll' && (
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-purple-400">Target Recipients:</div>
                <div className="font-mono text-xs space-y-1">
                  <div>TO: <span className="text-cyan-300">kamal@ictclass.lk, sunil@ictclass.lk</span></div>
                  <div>CC: <span className="text-purple-300">principal@ictclass.lk</span></div>
                </div>
                <p className="text-xs text-amber-300">
                  Notice: The Bcc recipient (Teacher) is NEVER included automatically in Reply All because their address was masked!
                </p>
              </div>
            )}

            {selectedAction === 'forward' && (
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-blue-400">Target Recipients:</div>
                <div className="font-mono text-xs text-slate-300">
                  TO: <span className="text-slate-500 italic">[Enter New Email Address e.g. kasun@ictclass.lk]</span>
                </div>
                <p className="text-xs text-slate-400">
                  The original message body, headers, and attachments are copied into a fresh composition window.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'folders' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <FolderArchive className="w-5 h-5 text-cyan-400" />
              E-Mail Folders & Netiquette Guidelines
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Standard mailbox folders and ethical communication standards (ඊමේල් ආචාරධර්ම).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard Folders */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">Standard Mailbox Folders (බහලුම්)</h4>
              <div className="space-y-2 text-xs">
                {[
                  { name: 'Inbox (ලැබුණු ලිපි)', desc: 'Stores incoming emails received from mail servers.' },
                  { name: 'Sent (යැවූ ලිපි)', desc: 'Archives copies of emails successfully dispatched.' },
                  { name: 'Drafts (කෙටුම්පත්)', desc: 'Contains saved, unfinished messages not yet sent.' },
                  { name: 'Spam / Junk (අනවශ්‍ය ලිපි)', desc: 'Filters unwanted advertising or malicious scam emails.' },
                  { name: 'Trash / Bin (ඉවතලූ ලිපි)', desc: 'Temporary storage for deleted emails before permanent removal.' }
                ].map((f, i) => (
                  <div key={i} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-white">{f.name}:</strong>
                    <div className="text-slate-400 text-[11px] mt-0.5">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Netiquette Guidelines */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-amber-400">E-Mail Netiquette Rules (ආචාරධර්ම)</h4>
              <div className="space-y-2 text-xs">
                {[
                  { rule: '1. Clear Subject Line', desc: 'Always write a concise summary in the Subject line so the receiver knows what the mail is about.' },
                  { rule: '2. Avoid ALL CAPS', desc: 'Typing in capital letters is interpreted as SHOUTING (කෑගැසීමක් ලෙස සැලකේ) in online communication.' },
                  { rule: '3. Respect Privacy with BCC', desc: 'When emailing large public lists, always put addresses in BCC to prevent exposing contact info.' },
                  { rule: '4. Attachment Size Limit', desc: 'Compress large files before sending to prevent overloading the recipient\'s mailbox quota.' },
                  { rule: '5. Professional Salutation', desc: 'Use polite greetings and a clear sign-off with your name and designation.' }
                ].map((r, i) => (
                  <div key={i} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-amber-300">{r.rule}:</strong>
                    <div className="text-slate-400 text-[11px] mt-0.5">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
