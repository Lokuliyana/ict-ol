'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Database, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  RotateCcw, 
  Layers, 
  ArrowRight,
  Send,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '@/utils/soundEffects';

interface RecipientRecord {
  id: number;
  name: string;
  className: string;
  grade: string;
  marks: number;
}

const RECIPIENTS: RecipientRecord[] = [
  { id: 1, name: 'Kavindu Perera', className: 'Grade 10-A', grade: 'Distinction (A)', marks: 92 },
  { id: 2, name: 'Minuki De Silva', className: 'Grade 10-B', grade: 'Distinction (A)', marks: 88 },
  { id: 3, name: 'Chamidu Fernando', className: 'Grade 10-A', grade: 'Very Good (B)', marks: 76 },
  { id: 4, name: 'Hiruni Bandara', className: 'Grade 10-C', grade: 'Credit (C)', marks: 65 },
  { id: 5, name: 'Sahan Wickrama', className: 'Grade 10-B', grade: 'Distinction (A)', marks: 95 },
];

export function MailMergeMachine() {
  // Step 1: Main Doc with placeholders
  // Fields mapped
  const [nameFieldInserted, setNameFieldInserted] = useState<boolean>(false);
  const [classFieldInserted, setClassFieldInserted] = useState<boolean>(false);
  const [gradeFieldInserted, setGradeFieldInserted] = useState<boolean>(false);

  // Step 2: Merge printing state
  const [isMerged, setIsMerged] = useState<boolean>(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState<number>(0);

  const allFieldsInserted = nameFieldInserted && classFieldInserted && gradeFieldInserted;
  const curRecipient = RECIPIENTS[currentPreviewIndex];

  const handleInsertField = (field: 'name' | 'class' | 'grade') => {
    sound.playClick(750);
    if (field === 'name') setNameFieldInserted(true);
    if (field === 'class') setClassFieldInserted(true);
    if (field === 'grade') setGradeFieldInserted(true);
  };

  const handleRunMerge = () => {
    sound.playVictory();
    setIsMerged(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  const handleNextCertificate = () => {
    sound.playClick(600);
    setCurrentPreviewIndex((prev) => (prev + 1) % RECIPIENTS.length);
  };

  const handleReset = () => {
    sound.playClick(500);
    setNameFieldInserted(false);
    setClassFieldInserted(false);
    setGradeFieldInserted(false);
    setIsMerged(false);
    setCurrentPreviewIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Controls */}
      <div className="bg-slate-900/90 border border-teal-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 5: The Mail Merge Machine</span>
              <span className="text-xs font-sinhala text-teal-400 font-normal">
                (තැපැල් ඒකාබද්ධ කිරීමේ යන්ත්‍රය)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Combine a static <strong>Main Document</strong> with a dynamic <strong>Data Source</strong> to batch-generate hundreds of personalized certificates.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          {allFieldsInserted && !isMerged && (
            <button
              onClick={handleRunMerge}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-teal-500/30 flex items-center gap-2 animate-bounce"
            >
              <Printer className="w-4 h-4" />
              <span>Pull Finish & Merge Lever</span>
            </button>
          )}

          {isMerged && (
            <button
              onClick={handleNextCertificate}
              className="px-3 py-1.5 rounded-xl bg-teal-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <span>Next Record ({currentPreviewIndex + 1}/{RECIPIENTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 text-xs"
            title="Reset Merge Machine"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Split Certificate Workspace (Left) & Recipient Data Table (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Interactive Main Document / Certificate Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[460px]">
          
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs font-mono text-teal-400 font-bold flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              <span>MAIN DOCUMENT TEMPLATE (ප්‍රධාන ලේඛනය)</span>
            </span>

            <span className="text-[11px] font-mono text-slate-400">
              {isMerged ? 'STATUS: MERGED RESULT' : 'STATUS: INSERTING MERGE FIELDS'}
            </span>
          </div>

          {/* Central Certificate Sheet */}
          <div className="relative z-10 my-auto py-6">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 text-center max-w-lg mx-auto relative overflow-hidden">
              
              {/* Ornate Certificate Border Emblem */}
              <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-black tracking-widest text-white uppercase font-sans">
                  Official ICT Achievement Certificate
                </h4>
                <p className="text-[10px] text-teal-400 font-sinhala">
                  තොරතුරු හා සන්නිවේදන තාක්ෂණ විශිෂ්ටතා සහතිකය
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-serif py-2">
                <p>This is to proudly certify that</p>
                
                {/* Recipient Name Field Slot */}
                <div className="py-1">
                  {!isMerged ? (
                    nameFieldInserted ? (
                      <span className="px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-400 text-teal-300 font-mono font-bold text-xs">
                        &laquo;Student_Name&raquo;
                      </span>
                    ) : (
                      <button
                        onClick={() => handleInsertField('name')}
                        className="px-4 py-1.5 rounded-lg border-2 border-dashed border-teal-500/60 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 text-xs font-mono font-bold transition-all"
                      >
                        + Insert &laquo;Student_Name&raquo;
                      </button>
                    )
                  ) : (
                    <motion.span
                      key={curRecipient.id}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-base sm:text-lg font-black text-amber-300 underline font-sans"
                    >
                      {curRecipient.name}
                    </motion.span>
                  )}
                </div>

                <p className="flex items-center justify-center gap-2 flex-wrap">
                  <span>of class</span>
                  {!isMerged ? (
                    classFieldInserted ? (
                      <span className="px-2 py-0.5 rounded bg-teal-500/20 border border-teal-400 text-teal-300 font-mono font-bold text-xs">
                        &laquo;Class&raquo;
                      </span>
                    ) : (
                      <button
                        onClick={() => handleInsertField('class')}
                        className="px-3 py-1 rounded border-2 border-dashed border-teal-500/60 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 text-xs font-mono font-bold"
                      >
                        + &laquo;Class&raquo;
                      </button>
                    )
                  ) : (
                    <span className="font-bold text-white font-mono">{curRecipient.className}</span>
                  )}
                  <span>has achieved</span>
                  {!isMerged ? (
                    gradeFieldInserted ? (
                      <span className="px-2 py-0.5 rounded bg-teal-500/20 border border-teal-400 text-teal-300 font-mono font-bold text-xs">
                        &laquo;Grade_Result&raquo;
                      </span>
                    ) : (
                      <button
                        onClick={() => handleInsertField('grade')}
                        className="px-3 py-1 rounded border-2 border-dashed border-teal-500/60 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 text-xs font-mono font-bold"
                      >
                        + &laquo;Grade_Result&raquo;
                      </button>
                    )
                  ) : (
                    <span className="font-bold text-teal-400 font-mono">{curRecipient.grade} ({curRecipient.marks}%)</span>
                  )}
                </p>

                <p className="text-[11px] text-slate-400 pt-2">
                  Issued on 2026-10-07 • Sri Lankan G.C.E. O/L Examination Board
                </p>
              </div>

            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Mail Merge §6.6</span>
            <span className="text-teal-400">1 Template ➔ Hundreds of Custom Copies</span>
          </div>

        </div>

        {/* Right Side: Data Source Table HUD (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-teal-400" />
                <span>DATA SOURCE TABLE (දත්ත ප්‍රභවය)</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20">
                5 Recipient Records
              </span>
            </div>

            {/* Recipient Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="w-full text-xs font-mono text-left">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-2.5">ID</th>
                    <th className="p-2.5 text-teal-400">&laquo;Student_Name&raquo;</th>
                    <th className="p-2.5">&laquo;Class&raquo;</th>
                    <th className="p-2.5">&laquo;Grade&raquo;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                  {RECIPIENTS.map((rec, idx) => {
                    const isSelected = isMerged && currentPreviewIndex === idx;
                    return (
                      <tr
                        key={rec.id}
                        className={`transition-colors ${
                          isSelected 
                            ? 'bg-teal-500/20 text-white font-bold' 
                            : 'text-slate-400 hover:bg-slate-800/40'
                        }`}
                      >
                        <td className="p-2.5">{rec.id}</td>
                        <td className="p-2.5 font-sans">{rec.name}</td>
                        <td className="p-2.5">{rec.className}</td>
                        <td className="p-2.5 text-teal-400">{rec.marks}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 5-Step Sequence Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <span className="font-mono text-teal-400 font-bold">Mail Merge Sequential Steps (පියවර 5):</span>
              <ol className="text-slate-400 font-mono text-[11px] space-y-1 list-decimal list-inside">
                <li>Create Main Document template</li>
                <li>Select recipient Data Source table</li>
                <li>Insert Merge Fields placeholders</li>
                <li>Preview Merged Results</li>
                <li>Finish & Merge to print/export</li>
              </ol>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs">
            <strong>Exam Case Study:</strong> Tested in 2020 O/L P2 Q01(v) (150-parent sports meet letters) and 2021 O/L P2 Q01(v)!
          </div>
        </div>

      </div>
    </div>
  );
}
