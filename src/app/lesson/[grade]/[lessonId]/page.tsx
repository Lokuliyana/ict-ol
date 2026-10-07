'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { DualCanvas } from '@/components/DualCanvas';
import { PastPaperEngine } from '@/components/PastPaperEngine';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { LESSON_01_DATA } from '@/data/lesson01Data';
import { PAST_PAPER_QUESTIONS } from '@/data/pastPapersData';
import { ALL_LESSONS_DATA } from '@/data/allLessonsData';
import { useProgress } from '@/context/ProgressContext';
import { 
  BookOpen, 
  FileText, 
  ArrowLeft, 
  ArrowRight, 
  Printer, 
  Bookmark, 
  CheckCircle2, 
  Trophy, 
  Share2,
  Sparkles
} from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const grade = (params.grade as string) || '10';
  const lessonId = (params.lessonId as string) || 'g10-u1';

  const [activeTab, setActiveTab] = useState<'theory' | 'pastpapers'>('theory');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { state, getLessonMastery } = useProgress();

  // Find metadata
  const lessonMeta = CURRICULUM_DATA.find(l => l.id === lessonId) || CURRICULUM_DATA[0];
  const allCurriculumLessons = CURRICULUM_DATA.filter(l => l.grade === grade);
  const currentIndex = allCurriculumLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? allCurriculumLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allCurriculumLessons.length - 1 ? allCurriculumLessons[currentIndex + 1] : null;

  const mastery = getLessonMastery(lessonId);

  // Load content
  let subtopics = LESSON_01_DATA.subtopics;
  let glossary = LESSON_01_DATA.glossary;
  let pastPapers = PAST_PAPER_QUESTIONS;

  if (lessonId !== 'g10-u1' && ALL_LESSONS_DATA[lessonId]) {
    const generalData = ALL_LESSONS_DATA[lessonId];
    subtopics = generalData.subtopics.map(st => ({
      id: st.id,
      number: st.number,
      titleEn: st.titleEn,
      titleSi: st.titleSi,
      summaryEn: st.summaryEn || 'Core concepts and examination competencies',
      summarySi: st.summarySi || 'මූලික සංකල්ප හා විභාග නිපුණතා',
      blocks: st.blocks,
      examples: st.examples,
      tableData: st.tableData,
      checkpointQuiz: st.checkpointQuiz
    }));
    glossary = generalData.glossary || [];
    pastPapers = generalData.pastPaperQuestions.map(q => ({
      id: q.id,
      year: q.year,
      paperType: q.paperType,
      questionNumber: q.badgeText,
      topicId: 'general',
      subtopicTitleEn: lessonMeta.titleEn,
      subtopicTitleSi: lessonMeta.titleSi,
      type: q.type,
      badgeText: q.badgeText,
      questionEn: q.questionEn,
      questionSi: q.questionSi,
      options: q.options,
      correctOptionId: q.correctOptionId,
      sampleAnswerEn: q.sampleAnswerEn,
      sampleAnswerSi: q.sampleAnswerSi,
      explanationEn: q.explanationEn,
      explanationSi: q.explanationSi
    }));
  }

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-between">
      <div>
        <Header 
          currentGrade={grade} 
          currentLessonTitle={lessonMeta.titleEn}
          currentLessonId={lessonId}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          
          {/* Top Control Bar: Lesson Title + Mode Switcher + Progress */}
          <div className="clay-card p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Title & Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                  <Image
                    src={lessonMeta.icon}
                    alt="Lesson icon"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-md font-mono font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      Grade {grade} • Unit 0{lessonMeta.unitNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                      Sri Lankan O/L ICT
                    </span>
                  </div>
                  <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {lessonMeta.titleEn}
                  </h1>
                  <h2 className="text-xs text-indigo-700 dark:text-indigo-400 font-sinhala font-medium">
                    {lessonMeta.titleSi}
                  </h2>
                </div>
              </div>

              {/* Progress Bar & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full sm:w-44 space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Lesson Mastery</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{mastery}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${mastery}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    title="Bookmark Lesson"
                    className={`p-2 rounded-xl border transition-all ${
                      isBookmarked
                        ? 'bg-amber-50 dark:bg-amber-950 text-amber-600 border-amber-300'
                        : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <Link
                    href={`/revision-sheet/${grade}/${lessonId}`}
                    title="Print / Export PDF Revision Sheet"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">PDF Summary</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs sm:text-sm">
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeTab === 'theory'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Theory & Short Notes (Canvas)</span>
                </button>
                <button
                  onClick={() => setActiveTab('pastpapers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeTab === 'pastpapers'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Past Papers (2020 – 2025)</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-mono">
                    {pastPapers.length} Qs
                  </span>
                </button>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Synchronized verbatim dual-medium textbook extraction</span>
              </div>
            </div>

          </div>

          {/* Tab Content Display */}
          {activeTab === 'theory' ? (
            <DualCanvas subtopics={subtopics} glossary={glossary} />
          ) : (
            <PastPaperEngine questions={pastPapers} />
          )}

        </main>
      </div>

      {/* Sticky Bottom Navigation Footer */}
      <footer className="sticky bottom-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold">
          {/* Previous Lesson */}
          {prevLesson ? (
            <Link
              href={`/lesson/${grade}/${prevLesson.id}`}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev: {prevLesson.titleEn.slice(0, 22)}...</span>
              <span className="sm:hidden">Prev Lesson</span>
            </Link>
          ) : (
            <div className="text-slate-300 dark:text-slate-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Start of Syllabus</span>
            </div>
          )}

          {/* Center Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hidden sm:inline"
            >
              Back to Top ↑
            </button>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <Link
              href={`/revision-sheet/${grade}/${lessonId}`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Notes</span>
            </Link>
          </div>

          {/* Next Lesson */}
          {nextLesson ? (
            <Link
              href={`/lesson/${grade}/${nextLesson.id}`}
              className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
            >
              <span className="hidden sm:inline">Next: {nextLesson.titleEn.slice(0, 22)}...</span>
              <span className="sm:hidden">Next Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="text-slate-300 dark:text-slate-600 flex items-center gap-1">
              <span>End of Grade {grade}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
