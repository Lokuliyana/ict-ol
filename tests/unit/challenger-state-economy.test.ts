/**
 * tests/unit/challenger-state-economy.test.ts
 * Empirical Challenger Stress Tests for State Machine & Game Economy
 * Sri Lankan G.C.E. O/L ICT Micro-Learning Platform
 */

import { expect, TestSuiteRunner } from '../e2e/harness';
import { computeHeartRecharge, computeDailyStreak, MAX_HEARTS, HEART_RECHARGE_SECONDS } from '../../src/lib/heartMath';
import { useGameStore } from '../../src/lib/store';

export const challengerSuite = new TestSuiteRunner('Challenger: State Machine & Economy Empirical Suite');

// ============================================================================
// 1. HEART RECHARGE MATHEMATICAL ENGINE STRESS TESTING
// ============================================================================

// 1.1: 0s Elapsed Boundary
challengerSuite.addTest('Tier 1', 'Heart Recharge: 0s elapsed with full hearts (5) remains capped with 0s timer', () => {
  const t0 = 1770000000000;
  const res = computeHeartRecharge(5, null, t0);
  expect(res.reconciledHearts).toBe(5);
  expect(res.updatedLastHeartLossTime).toBe(null);
  expect(res.secondsUntilNextHeart).toBe(0);
}, 'Heart Recharge Math');

challengerSuite.addTest('Tier 1', 'Heart Recharge: 0s elapsed with depleted hearts (4) preserves 1800s timer', () => {
  const t0 = 1770000000000;
  const res = computeHeartRecharge(4, t0, t0);
  expect(res.reconciledHearts).toBe(4);
  expect(res.updatedLastHeartLossTime).toBe(t0);
  expect(res.secondsUntilNextHeart).toBe(1800);
}, 'Heart Recharge Math');

challengerSuite.addTest('Tier 1', 'Heart Recharge: 0s elapsed with 0 hearts preserves 0 hearts and 1800s countdown', () => {
  const t0 = 1770000000000;
  const res = computeHeartRecharge(0, t0, t0);
  expect(res.reconciledHearts).toBe(0);
  expect(res.updatedLastHeartLossTime).toBe(t0);
  expect(res.secondsUntilNextHeart).toBe(1800);
}, 'Heart Recharge Math');

// 1.2: 1799s Elapsed Boundary (1s before recharge)
challengerSuite.addTest('Tier 2', 'Heart Recharge: 1799s elapsed leaves hearts unchanged with exactly 1s remaining', () => {
  const t0 = 1770000000000;
  const t1799 = t0 + 1799 * 1000;
  
  // From 4 hearts
  const res4 = computeHeartRecharge(4, t0, t1799);
  expect(res4.reconciledHearts).toBe(4);
  expect(res4.secondsUntilNextHeart).toBe(1);
  expect(res4.updatedLastHeartLossTime).toBe(t0);

  // From 0 hearts
  const res0 = computeHeartRecharge(0, t0, t1799);
  expect(res0.reconciledHearts).toBe(0);
  expect(res0.secondsUntilNextHeart).toBe(1);
  expect(res0.updatedLastHeartLossTime).toBe(t0);
}, 'Heart Recharge Math');

// 1.3: 1800s Elapsed Boundary (Exact cycle rollover)
challengerSuite.addTest('Tier 2', 'Heart Recharge: 1800s elapsed recharges 1 heart and correctly resets cycle', () => {
  const t0 = 1770000000000;
  const t1800 = t0 + 1800 * 1000;

  // 4 hearts -> 5 hearts (MAX reached, timer inactive)
  const res4 = computeHeartRecharge(4, t0, t1800);
  expect(res4.reconciledHearts).toBe(5);
  expect(res4.updatedLastHeartLossTime).toBe(null);
  expect(res4.secondsUntilNextHeart).toBe(0);

  // 3 hearts -> 4 hearts (Not max, restarts 1800s countdown for 5th heart)
  const res3 = computeHeartRecharge(3, t0, t1800);
  expect(res3.reconciledHearts).toBe(4);
  expect(res3.secondsUntilNextHeart).toBe(1800);
  expect(res3.updatedLastHeartLossTime).toBe(t1800);

  // 0 hearts -> 1 heart (Restarts 1800s countdown for 2nd heart)
  const res0 = computeHeartRecharge(0, t0, t1800);
  expect(res0.reconciledHearts).toBe(1);
  expect(res0.secondsUntilNextHeart).toBe(1800);
  expect(res0.updatedLastHeartLossTime).toBe(t1800);
}, 'Heart Recharge Math');

// 1.4: 3600s Elapsed Boundary (Exact 2 cycles)
challengerSuite.addTest('Tier 2', 'Heart Recharge: 3600s elapsed awards exactly 2 hearts', () => {
  const t0 = 1770000000000;
  const t3600 = t0 + 3600 * 1000;

  // 3 hearts -> 5 hearts (MAX reached)
  const res3 = computeHeartRecharge(3, t0, t3600);
  expect(res3.reconciledHearts).toBe(5);
  expect(res3.updatedLastHeartLossTime).toBe(null);
  expect(res3.secondsUntilNextHeart).toBe(0);

  // 2 hearts -> 4 hearts (1800s remaining for 5th)
  const res2 = computeHeartRecharge(2, t0, t3600);
  expect(res2.reconciledHearts).toBe(4);
  expect(res2.secondsUntilNextHeart).toBe(1800);
  expect(res2.updatedLastHeartLossTime).toBe(t3600);

  // 0 hearts -> 2 hearts
  const res0 = computeHeartRecharge(0, t0, t3600);
  expect(res0.reconciledHearts).toBe(2);
  expect(res0.secondsUntilNextHeart).toBe(1800);
  expect(res0.updatedLastHeartLossTime).toBe(t3600);
}, 'Heart Recharge Math');

// 1.5: Negative Elapsed Time (System clock skew / backwards time jump)
challengerSuite.addTest('Tier 2', 'Heart Recharge: Negative elapsed time clamps to 0 without NaN or negative hearts', () => {
  const t0 = 1770000000000;
  const pastTime = t0 - 60000; // 1 minute in the past
  const res = computeHeartRecharge(3, t0, pastTime);

  expect(res.reconciledHearts).toBe(3);
  expect(res.secondsUntilNextHeart).toBe(1800);
  expect(res.updatedLastHeartLossTime).toBe(t0);
  expect(Number.isNaN(res.secondsUntilNextHeart)).toBe(false);
  expect(Number.isNaN(res.reconciledHearts)).toBe(false);
}, 'Heart Recharge Math');

// 1.6: Huge Future Time (Years offline / timestamp overflow test)
challengerSuite.addTest('Tier 2', 'Heart Recharge: Huge future time caps smoothly at MAX_HEARTS (5) with null timer', () => {
  const t0 = 1770000000000;
  const tenYearsLater = t0 + 10 * 365 * 24 * 3600 * 1000;
  const res = computeHeartRecharge(0, t0, tenYearsLater);

  expect(res.reconciledHearts).toBe(MAX_HEARTS);
  expect(res.updatedLastHeartLossTime).toBe(null);
  expect(res.secondsUntilNextHeart).toBe(0);
}, 'Heart Recharge Math');

// 1.7: Missing/Corrupt Timestamp Recovery
challengerSuite.addTest('Tier 2', 'Heart Recharge: Null timestamp with depleted hearts initializes timestamp to now', () => {
  const now = 1770000050000;
  const res = computeHeartRecharge(2, null, now);

  expect(res.reconciledHearts).toBe(2);
  expect(res.updatedLastHeartLossTime).toBe(now);
  expect(res.secondsUntilNextHeart).toBe(HEART_RECHARGE_SECONDS);
}, 'Heart Recharge Math');

// ============================================================================
// 2. RAPID HEART DEDUCTIONS TO 0 & STRICT LOCKOUT VERIFICATION
// ============================================================================

challengerSuite.addTest('Tier 1', 'Rapid Deductions: Consecutive deductions drain 5 lives down to 0 and clamp', () => {
  const store = useGameStore.getState();
  store.refillHearts();
  expect(useGameStore.getState().hearts).toBe(5);

  // 1st deduction: 5 -> 4
  const d1 = store.deductHeart();
  expect(d1).toBe(true);
  expect(useGameStore.getState().hearts).toBe(4);

  // 2nd deduction: 4 -> 3
  const d2 = store.deductHeart();
  expect(d2).toBe(true);
  expect(useGameStore.getState().hearts).toBe(3);

  // 3rd deduction: 3 -> 2
  const d3 = store.deductHeart();
  expect(d3).toBe(true);
  expect(useGameStore.getState().hearts).toBe(2);

  // 4th deduction: 2 -> 1
  const d4 = store.deductHeart();
  expect(d4).toBe(true);
  expect(useGameStore.getState().hearts).toBe(1);

  // 5th deduction: 1 -> 0 (returns false: no hearts remaining!)
  const d5 = store.deductHeart();
  expect(d5).toBe(false);
  expect(useGameStore.getState().hearts).toBe(0);

  // 6th deduction: attempt while 0 hearts -> must return false and NOT underflow to -1
  const d6 = store.deductHeart();
  expect(d6).toBe(false);
  expect(useGameStore.getState().hearts).toBe(0);
}, 'State Machine: Economy');

challengerSuite.addTest('Tier 2', 'Strict Lockout: canEnterQuiz is false at 0 hearts and restores after study reward', () => {
  const store = useGameStore.getState();
  // Ensure 0 hearts
  while (useGameStore.getState().hearts > 0) {
    store.deductHeart();
  }
  expect(useGameStore.getState().hearts).toBe(0);

  // Lockout gate verification
  const canEnterQuiz = useGameStore.getState().hearts > 0;
  const isLocked = useGameStore.getState().hearts <= 0;
  expect(canEnterQuiz).toBe(false);
  expect(isLocked).toBe(true);

  // Attempting study session provides study incentive recovery (+1 heart)
  store.recordStudySession('g10-u1-s1');
  expect(useGameStore.getState().hearts).toBe(1);
  expect(useGameStore.getState().hearts > 0).toBe(true);

  // Refill returns to full capacity (5)
  store.refillHearts();
  expect(useGameStore.getState().hearts).toBe(5);
}, 'State Machine: Economy');

// ============================================================================
// 3. STAR CALCULATION ACCURACY & EDGE CASES
// ============================================================================

challengerSuite.addTest('Tier 2', 'Star Precision: 69.99% yields 1 star; 70.0% yields 2 stars', () => {
  // Model from CompletionDrawer: accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1
  const computeStars = (accuracy: number) => (accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1);

  expect(computeStars(69.99)).toBe(1);
  expect(computeStars(70.0)).toBe(2);
  expect(computeStars(70.001)).toBe(2);
}, 'Micro-Learning Engine: Stars');

challengerSuite.addTest('Tier 2', 'Star Precision: 89.99% yields 2 stars; 90.0% yields 3 stars', () => {
  const computeStars = (accuracy: number) => (accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1);

  expect(computeStars(89.99)).toBe(2);
  expect(computeStars(90.0)).toBe(3);
  expect(computeStars(90.001)).toBe(3);
  expect(computeStars(100.0)).toBe(3);
  expect(computeStars(0.0)).toBe(1);
}, 'Micro-Learning Engine: Stars');

challengerSuite.addTest('Tier 2', 'Store completeNode: verifies stars, highAccuracy and monotonic star progression', () => {
  const store = useGameStore.getState();
  store.refillHearts();

  // Test node completion with 70% accuracy -> 2 stars
  const res1 = store.completeNode('g10-u1-s2', 70.0);
  expect(res1.stars).toBe(2);
  expect(useGameStore.getState().completedNodes['g10-u1-s2'].stars).toBe(2);

  // Re-attempting node with lower accuracy (69.99%) must preserve the highest earned 2 stars
  const res2 = store.completeNode('g10-u1-s2', 69.99);
  expect(res2.stars).toBe(2); // monotonic preservation
  expect(useGameStore.getState().completedNodes['g10-u1-s2'].stars).toBe(2);

  // Improving to 90.0% elevates to 3 stars
  const res3 = store.completeNode('g10-u1-s2', 90.0);
  expect(res3.stars).toBe(3);
  expect(useGameStore.getState().completedNodes['g10-u1-s2'].stars).toBe(3);
}, 'State Machine: Progression');

// ============================================================================
// 4. DAILY STREAK UPDATE BOUNDARY CONDITIONS
// ============================================================================

challengerSuite.addTest('Tier 1', 'Streak Boundary: First-ever study session initializes streak to 1', () => {
  const res = computeDailyStreak(0, '', '2026-10-08');
  expect(res.newStreak).toBe(1);
  expect(res.newStudyDate).toBe('2026-10-08');
}, 'Streak Engine');

challengerSuite.addTest('Tier 1', 'Streak Boundary: Multiple study sessions on the same calendar day preserve streak', () => {
  const res = computeDailyStreak(5, '2026-10-08', '2026-10-08');
  expect(res.newStreak).toBe(5);
  expect(res.newStudyDate).toBe('2026-10-08');
}, 'Streak Engine');

challengerSuite.addTest('Tier 1', 'Streak Boundary: Consecutive day session increments streak by 1', () => {
  const res = computeDailyStreak(5, '2026-10-07', '2026-10-08');
  expect(res.newStreak).toBe(6);
  expect(res.newStudyDate).toBe('2026-10-08');
}, 'Streak Engine');

challengerSuite.addTest('Tier 2', 'Streak Boundary: Exactly 2 days elapsed (1 day skipped) resets streak to 1', () => {
  const res = computeDailyStreak(14, '2026-10-06', '2026-10-08');
  expect(res.newStreak).toBe(1);
  expect(res.newStudyDate).toBe('2026-10-08');
}, 'Streak Engine');

challengerSuite.addTest('Tier 2', 'Streak Boundary: Month rollover across 28-day February to March 1 preserves streak', () => {
  // Non-leap year 2025: Feb 28 to March 1
  const res2025 = computeDailyStreak(10, '2025-02-28', '2025-03-01');
  expect(res2025.newStreak).toBe(11);
  expect(res2025.newStudyDate).toBe('2025-03-01');

  // Leap year 2024: Feb 28 to Feb 29
  const resLeap1 = computeDailyStreak(10, '2024-02-28', '2024-02-29');
  expect(resLeap1.newStreak).toBe(11);

  // Leap year 2024: Feb 29 to March 01
  const resLeap2 = computeDailyStreak(11, '2024-02-29', '2024-03-01');
  expect(resLeap2.newStreak).toBe(12);
}, 'Streak Engine');

challengerSuite.addTest('Tier 2', 'Streak Boundary: Month rollover across 30-day month (April 30 to May 1) preserves streak', () => {
  const res = computeDailyStreak(20, '2026-04-30', '2026-05-01');
  expect(res.newStreak).toBe(21);
  expect(res.newStudyDate).toBe('2026-05-01');
}, 'Streak Engine');

challengerSuite.addTest('Tier 2', 'Streak Boundary: Year boundary rollover (December 31 to January 1) increments streak', () => {
  const res = computeDailyStreak(99, '2025-12-31', '2026-01-01');
  expect(res.newStreak).toBe(100);
  expect(res.newStudyDate).toBe('2026-01-01');
}, 'Streak Engine');

challengerSuite.addTest('Tier 2', 'Streak Boundary: Backwards clock jump does not crash or corrupt streak', () => {
  // Clock changed backwards to yesterday
  const res = computeDailyStreak(7, '2026-10-08', '2026-10-07');
  expect(res.newStreak).toBe(7);
  expect(res.newStudyDate).toBe('2026-10-07');
}, 'Streak Engine');

// Runner execution when invoked directly via tsx
if (require.main === module || process.argv[1]?.includes('challenger-state-economy')) {
  challengerSuite.run().then((results) => {
    const failed = results.filter((r) => !r.passed);
    if (failed.length > 0) {
      console.error(`\n❌ CHALLENGER FOUND ${failed.length} DEFECTS!`);
      process.exit(1);
    } else {
      console.log(`\n🎉 ALL ${results.length} CHALLENGER STRESS TESTS PASSED WITH ZERO DEFECTS!`);
      process.exit(0);
    }
  });
}
