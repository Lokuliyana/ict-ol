'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { useProgress } from '@/context/ProgressContext';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Layers, 
  Languages, 
  CheckCircle2, 
  Clock, 
  FileText,
  BarChart2
} from 'lucide-react';

export default function HomePage() {
  const [selectedGrade, setSelectedGrade] = useState<'10' | '11'>('10');
  const { state, getLessonMastery } = useProgress();

  const lessons = CURRICULUM_DATA.filter(l => l.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Hero Section */}
        <div className="clay-card p-6 sm:p-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-25 pointer-events-none md:opacity-35">
            <Image
              src="/assets/clay/banner-student-saturn.svg"
              alt="Planet Illustration"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sri Lankan O/L ICT Master Dual-Medium Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Grade 10 & 11 ICT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
                Sinhala & English Medium Prep
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sinhala">
              10 සහ 11 ශ්‍රේණි සඳහා නිල පෙළපොත් ඇසුරින් සකසන ලද ද්විභාෂා කෙටි සටහන්, අන්තර්ක්‍රියාකාරී උපාංග (NIC Decoder, System Diagram, Computer Generations) සහ 2020–2025 පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <Link
                href="/lesson/10/g10-u1"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
              >
                <span>Launch Grade 10 - Lesson 01</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/analytics"
                className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>View Mastery Analytics</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Grade Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Curriculum Units & Syllabus
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sinhala">
              අධ්‍යයනය කිරීමට අවශ්‍ය පාඩම තෝරන්න (ද්විභාෂා සටහන් සහ විභාග ගැටලු)
            </p>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs sm:text-sm">
            <button
              onClick={() => setSelectedGrade('10')}
              className={`px-5 py-2 rounded-lg font-bold transition-all ${
                selectedGrade === '10'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Grade 10 (10 ශ්‍රේණිය)
            </button>
            <button
              onClick={() => setSelectedGrade('11')}
              className={`px-5 py-2 rounded-lg font-bold transition-all ${
                selectedGrade === '11'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Grade 11 (11 ශ්‍රේණිය)
            </button>
          </div>
        </div>

        {/* Lessons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const mastery = getLessonMastery(lesson.id);

            return (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.grade}/${lesson.id}`}
                className="group clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 p-2 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Image
                        src={lesson.icon}
                        alt={lesson.titleEn}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-mono font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      Unit 0{lesson.unitNumber}
                    </span>
                  </div>

                  {/* Bilingual Titles */}
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {lesson.titleEn}
                  </h3>
                  <h4 className="text-xs text-indigo-700 dark:text-indigo-400 font-sinhala font-medium mt-1 leading-relaxed">
                    {lesson.titleSi}
                  </h4>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {lesson.shortDescEn}
                  </p>
                </div>

                {/* Card Footer: Mastery & Stats */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1 font-medium">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{lesson.totalSubtopics} Topics</span>
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <FileText className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{lesson.totalPastPapers} Past Papers</span>
                    </span>
                  </div>

                  {/* Mastery Progress Bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all"
                      style={{ width: `${mastery}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                    <span>Mastery: {mastery}%</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Study Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Languages className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Dual-Medium Split Canvas
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Read Sinhala and English textbook notes side-by-side with synchronized paragraph hover highlighting and glossary terms.
            </p>
          </div>

          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Interactive Micro-Widgets
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Interactive NIC Number Decoder, Information System Simulation, and 5-Generation Computer Timeline slider.
            </p>
          </div>

          <div className="clay-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              2020 – 2025 Past Paper Engine
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Real G.C.E. O/L exam MCQs with instant grading + Paper II structured questions with verbatim marking scheme reveals.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
