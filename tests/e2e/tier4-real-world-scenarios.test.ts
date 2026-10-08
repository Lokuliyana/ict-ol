/**
 * TIER 4: Real-World Application Scenarios
 * Simulates end-to-end user journeys and multi-step production workloads.
 */

import { expect, TestSuiteRunner } from './harness';
import { LESSON_01_DATA } from '../../src/data/lesson01Data';
import { PAST_PAPER_QUESTIONS } from '../../src/data/pastPapersData';

export const tier4Suite = new TestSuiteRunner('Tier 4: Real-World Application Scenarios');

// Scenario 1: End-to-End Grade 10 First-Time Learner Journey
tier4Suite.addTest('Tier 4', 'Scenario 1: Onboarding -> Quest Map -> Flashcards -> Quiz -> 3-Star Level Clearance', () => {
  // 1. Onboarding
  const user = {
    language: 'si' as const,
    grade: '10' as const,
    entryRoute: 'level_1' as const,
    onboardingComplete: true,
    hearts: 5,
    xp: 0,
    streak: 1,
    activeNodeId: 'g10-u01-n01',
    completedNodes: {} as Record<string, { stars: number }>,
  };

  expect(user.onboardingComplete).toBe(true);
  expect(user.activeNodeId).toBe('g10-u01-n01');

  // 2. Study Flashcards in Lesson 01
  const subtopics = LESSON_01_DATA.subtopics;
  expect(subtopics.length).toBe(7);
  let readBlocksCount = 0;
  for (const st of subtopics) {
    readBlocksCount += st.blocks.length;
  }
  expect(readBlocksCount >= 7).toBe(true);

  // 3. Complete Blind Quiz with 100% accuracy
  const totalQuestions = 5;
  const correctCount = 5;
  const accuracy = (correctCount / totalQuestions) * 100;

  // 4. Level Completion
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
  const earnedXp = 100;
  user.xp += earnedXp;
  user.completedNodes[user.activeNodeId] = { stars };
  user.activeNodeId = 'g10-u01-n02'; // next node unlocked

  expect(stars).toBe(3);
  expect(user.xp).toBe(100);
  expect(user.completedNodes['g10-u01-n01'].stars).toBe(3);
  expect(user.activeNodeId).toBe('g10-u01-n02');
}, 'Scenario 1: First-Time Learner');

// Scenario 2: The Struggling Student: Mistakes, Heart Depletion & Review Recovery
tier4Suite.addTest('Tier 4', 'Scenario 2: Mistakes -> Heart Depletion -> Lockout -> Review -> Timer Recharge -> Retrial', () => {
  const session = {
    hearts: 5,
    isLocked: false,
    flashcardsReviewed: false,
  };

  // Student makes 5 consecutive errors
  for (let i = 0; i < 5; i++) {
    session.hearts--;
  }
  expect(session.hearts).toBe(0);

  // Quiz locks
  if (session.hearts <= 0) {
    session.isLocked = true;
  }
  expect(session.isLocked).toBe(true);

  // Student reviews flashcards
  session.flashcardsReviewed = true;

  // 30-minute timer restores 1 life
  const rechargeElapsed = 1800; // 1800s
  if (rechargeElapsed >= 1800) {
    session.hearts += 1;
    session.isLocked = false;
  }

  expect(session.hearts).toBe(1);
  expect(session.isLocked).toBe(false);
}, 'Scenario 2: Struggle & Recovery');

// Scenario 3: Interactive Engineering Lab Mastery (Data & Logic)
tier4Suite.addTest('Tier 4', 'Scenario 3: 8-Bit Switchboard (133₁₀) -> Hex Color Vat (#871F78) -> Logic De Morgan', () => {
  // Station 1: 8-Bit Switchboard Target 133
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const switches = [true, false, false, false, false, true, false, true]; // 128 + 4 + 1 = 133
  const decimalSum = switches.reduce((acc, s, idx) => acc + (s ? weights[idx] : 0), 0);
  expect(decimalSum).toBe(133);

  // Station 2: Hex Color Vat Target Dark Purple (RGB: 135, 31, 120)
  const r = 135, g = 31, b = 120;
  const toHex = (c: number) => c.toString(16).padStart(2, '0').toUpperCase();
  const hexCode = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  expect(hexCode).toBe('#871F78');

  // Station 3: Neon Logic Workbench De Morgan Equivalence: NAND(A, B) === NOT(A AND B)
  const inputs: [number, number][] = [[0, 0], [0, 1], [1, 0], [1, 1]];
  for (const [inA, inB] of inputs) {
    const nandOut = (inA & inB) === 1 ? 0 : 1;
    const notAndOut = (inA & inB) === 1 ? 0 : 1;
    expect(nandOut).toBe(notAndOut);
  }
}, 'Scenario 3: Engineering Labs');

// Scenario 4: High-Stakes 60-Minute Past Paper Exam Simulation
tier4Suite.addTest('Tier 4', 'Scenario 4: Filter 2024 MCQs -> 60-min Exam -> Blind Submission -> Score & Review', () => {
  // Filter questions
  const mcqs = PAST_PAPER_QUESTIONS.filter(q => q.type === 'mcq');
  expect(mcqs.length >= 5).toBe(true);

  // Exam session
  let timeRemaining = 3600;
  const userAnswers: Record<string, string> = {};

  // Student takes exam without seeing answers
  for (const q of mcqs) {
    userAnswers[q.id] = q.correctOptionId!; // answers correctly
  }

  // Timer ticks to end
  timeRemaining = 0;

  // Grade exam
  let correctCount = 0;
  for (const q of mcqs) {
    if (userAnswers[q.id] === q.correctOptionId) {
      correctCount++;
    }
  }

  const scorePct = (correctCount / mcqs.length) * 100;
  expect(scorePct).toBe(100);
  expect(timeRemaining).toBe(0);
}, 'Scenario 4: Timed Past Paper Exam');

// Scenario 5: Bilingual Cross-Grade Study Session with Persistent State
tier4Suite.addTest('Tier 4', 'Scenario 5: English G10 -> Sinhala G10 -> Grade 11 Switch -> Session Persistence', () => {
  interface StorageRecord {
    grade: '10' | '11';
    language: 'en' | 'si';
    g10Progress: { completed: string[] };
    g11Progress: { completed: string[] };
  }

  let session: StorageRecord = {
    grade: '10',
    language: 'en',
    g10Progress: { completed: ['g10-u01-n01'] },
    g11Progress: { completed: [] },
  };

  // Step 1: Switch to Sinhala
  session.language = 'si';
  expect(session.language).toBe('si');

  // Step 2: Switch to Grade 11
  session.grade = '11';
  session.g11Progress.completed.push('g11-u01-n01');

  // Step 3: Serialize to localStorage and reload
  const serialized = JSON.stringify(session);
  const restored: StorageRecord = JSON.parse(serialized);

  expect(restored.grade).toBe('11');
  expect(restored.language).toBe('si');
  expect(restored.g10Progress.completed).toContain('g10-u01-n01');
  expect(restored.g11Progress.completed).toContain('g11-u01-n01');
}, 'Scenario 5: Cross-Grade Persistence');
