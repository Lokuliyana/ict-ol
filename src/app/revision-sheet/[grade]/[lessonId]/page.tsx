'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { LESSON_01_DATA } from '@/data/lesson01Data';
import { ALL_LESSONS_DATA } from '@/data/allLessonsData';
import { Printer, ArrowLeft, Download, BookOpen, CheckCircle } from 'lucide-react';

export default function RevisionSheetPage() {
  const params = useParams();
  const router = useRouter();
  const grade = (params.grade as string) || '10';
  const lessonId = (params.lessonId as string) || 'g10-u1';

  const lessonMeta = CURRICULUM_DATA.find(l => l.id === lessonId) || CURRICULUM_DATA[0];

  let subtopics = LESSON_01_DATA.subtopics;
  let glossary = LESSON_01_DATA.glossary;

  if (lessonId !== 'g10-u1' && ALL_LESSONS_DATA[lessonId]) {
    const generalData = ALL_LESSONS_DATA[lessonId];
    subtopics = generalData.subtopics.map(st => ({
      id: st.id,
      number: st.number,
      titleEn: st.titleEn,
      titleSi: st.titleSi,
      summaryEn: 'Core syllabus short notes',
      summarySi: 'විෂය නිර්දේශයේ මූලික කෙටි සටහන්',
      blocks: st.blocks
    }));
    glossary = [];
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 print:bg-white print:text-black">
      
      {/* Non-print Top Action Bar */}
      <div className="no-print bg-slate-900 text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href={`/lesson/${grade}/${lessonId}`}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Interactive Canvas</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Optimized for A4 Dual-Column Printing & PDF Export
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Sheet Container */}
      <div className="max-w-5xl mx-auto p-6 sm:p-10 space-y-6">
        
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 print:text-black">
              G.C.E. O/L Examination • Grade {grade} ICT Revision Sheet
            </div>
            <h1 className="text-2xl font-black text-slate-900 print:text-black mt-1">
              {lessonMeta.titleEn}
            </h1>
            <h2 className="text-lg font-bold font-sinhala text-slate-700 print:text-black mt-0.5">
              {lessonMeta.titleSi}
            </h2>
          </div>

          <div className="text-right text-xs text-slate-500 print:text-black font-mono">
            <div>Unit Number: 0{lessonMeta.unitNumber}</div>
            <div>Medium: Dual (ENG / SIN)</div>
            <div>Verbatim Curriculum Standard</div>
          </div>
        </div>

        {/* Competencies Checklist */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 print:border-slate-400 text-xs space-y-1.5">
          <span className="font-bold uppercase tracking-wider text-slate-600 print:text-black block">
            Core Learning Competencies (මූලික විභාග නිපුණතා):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lessonMeta.keyCompetencies.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 print:text-black shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{comp.en}</div>
                  <div className="font-sinhala text-slate-600 print:text-black text-[11px]">{comp.si}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-Column Theory Blocks */}
        <div className="space-y-6 pt-2">
          {subtopics.map((subtopic) => (
            <div key={subtopic.id} className="border border-slate-200 rounded-xl p-4 break-inside-avoid print:border-slate-400">
              <h3 className="font-bold text-sm text-indigo-900 print:text-black border-b border-slate-200 pb-1.5 mb-3 flex items-center justify-between">
                <span>{subtopic.number} {subtopic.titleEn}</span>
                <span className="font-sinhala font-medium">{subtopic.titleSi}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* English Column */}
                <div className="space-y-2 border-r md:pr-3 border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-slate-400 print:text-black block">
                    English Medium Notes
                  </span>
                  {subtopic.blocks.map((b) => (
                    <p key={`en-${b.id}`} className="text-slate-800 print:text-black leading-relaxed">
                      {b.en}
                    </p>
                  ))}
                </div>

                {/* Sinhala Column */}
                <div className="space-y-2 font-sinhala">
                  <span className="text-[10px] font-bold uppercase text-slate-400 print:text-black block">
                    සිංහල මාධ්‍ය සටහන්
                  </span>
                  {subtopic.blocks.map((b) => (
                    <p key={`si-${b.id}`} className="text-slate-800 print:text-black leading-loose">
                      {b.si}
                    </p>
                  ))}
                </div>
              </div>

              {/* Table Data if exists */}
              {subtopic.tableData && (
                <div className="mt-4 pt-3 border-t border-slate-200 overflow-x-auto">
                  <table className="w-full text-left text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-300 font-bold bg-slate-50">
                        {subtopic.tableData.headers.map((h, i) => (
                          <th key={i} className="p-1.5">{h.en} / {h.si}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {subtopic.tableData.rows.map((row, rI) => (
                        <tr key={rI} className="border-b border-slate-200">
                          {Object.values(row).map((c: any, cI: number) => (
                            <td key={cI} className="p-1.5">
                              <div>{c.en}</div>
                              <div className="font-sinhala text-slate-600">{c.si}</div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Terms Glossary if available */}
        {glossary.length > 0 && (
          <div className="border border-slate-200 rounded-xl p-4 break-inside-avoid print:border-slate-400">
            <h3 className="font-bold text-sm text-indigo-900 print:text-black border-b border-slate-200 pb-1.5 mb-3">
              Essential Textbook Glossary & Definitions (ප්‍රධාන පාරිභාෂික පද)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {glossary.map((g, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-indigo-800 print:text-black flex justify-between">
                    <span>{g.termEn}</span>
                    <span className="font-sinhala">{g.termSi}</span>
                  </div>
                  <div className="text-[11px] text-slate-700 mt-1">{g.defEn}</div>
                  <div className="text-[11px] text-slate-600 font-sinhala mt-0.5">{g.defSi}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-slate-300 pt-4 text-center text-xs text-slate-500 print:text-black flex justify-between">
          <span>O/L ICT Master Prep • Sri Lanka Curriculum Study Guide</span>
          <span>Dual-Medium Verbatim Revision Sheet</span>
        </div>

      </div>
    </div>
  );
}
