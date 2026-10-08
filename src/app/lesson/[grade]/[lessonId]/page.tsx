'use client';

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { LinearLessonRunner } from '@/components/LinearLessonRunner';
import { MobileBottomDock } from '@/components/MobileBottomDock';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { LESSON_01_DATA } from '@/data/lesson01Data';
import { PAST_PAPER_QUESTIONS } from '@/data/pastPapersData';
import { ALL_LESSONS_DATA } from '@/data/allLessonsData';
import { Lesson01Playground } from '@/components/lesson01/Lesson01Playground';
import { MotherboardWorkbench } from '@/components/lesson02/MotherboardWorkbench';
import { DataRepresentationFoundry } from '@/components/lesson03/DataRepresentationFoundry';
import { LogicWorkbench } from '@/components/lesson04/LogicWorkbench';
import { OsEngineWorkbench } from '@/components/lesson_os/OsEngineWorkbench';
import { WordProcessingStudio } from '@/components/lesson05/WordProcessingStudio';
import { SpreadsheetStudio } from '@/components/lesson07/SpreadsheetStudio';
import { RelationalWarehouse } from '@/components/lesson08_dbms/RelationalWarehouse';
import { StageDirectorStudio } from '@/components/lesson09_presentation/StageDirectorStudio';
import { ProgrammingStudio } from '@/components/g11_lesson01_programming/ProgrammingStudio';
import { SdlcLaunchpad } from '@/components/g11_lesson02_sdlc/SdlcLaunchpad';
import { NetworkPacketStudio } from '@/components/g11_lesson03_internet/NetworkPacketStudio';
import { MultimediaStudio } from '@/components/g11_lesson04_multimedia/MultimediaStudio';
import { WebArtisanStudio } from '@/components/g11_lesson05_webdesign/WebArtisanStudio';
import { CyberCitizenEcoLab } from '@/components/g11_lesson06_society/CyberCitizenEcoLab';

function LessonPageContent() {
  const params = useParams();
  const grade = (params.grade as string) || '10';
  const lessonId = (params.lessonId as string) || 'g10-u1';

  // Find metadata
  const lessonMeta = CURRICULUM_DATA.find(l => l.id === lessonId) || CURRICULUM_DATA[0];

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

  const renderPlayground = () => {
    switch (lessonId) {
      case 'g10-u1': return <Lesson01Playground />;
      case 'g10-u2': return <MotherboardWorkbench />;
      case 'g10-u3': return <DataRepresentationFoundry />;
      case 'g10-u4': return <OsEngineWorkbench />;
      case 'g10-u5': return <WordProcessingStudio />;
      case 'g10-u6': return <SpreadsheetStudio />;
      case 'g10-u7':
      case 'g10-u9': return <StageDirectorStudio />;
      case 'g10-u8': return <RelationalWarehouse />;
      case 'g11-u1': return <ProgrammingStudio />;
      case 'g11-u2': return <SdlcLaunchpad />;
      case 'g11-u3': return <NetworkPacketStudio />;
      case 'g11-u4': return <MultimediaStudio />;
      case 'g11-u5': return <WebArtisanStudio />;
      case 'g11-u6': return <CyberCitizenEcoLab />;
      default: return <Lesson01Playground />;
    }
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Header 
        currentGrade={grade} 
        currentLessonTitle={lessonMeta.titleEn}
        currentLessonId={lessonId}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <LinearLessonRunner
          lessonMeta={lessonMeta}
          grade={grade}
          subtopics={subtopics}
          glossary={glossary}
          pastPapers={pastPapers}
          renderPlayground={renderPlayground}
        />
      </main>

      <MobileBottomDock />
    </div>
  );
}

export default function LessonPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas flex items-center justify-center font-mono text-xs">Loading Quest...</div>}>
      <LessonPageContent />
    </Suspense>
  );
}


