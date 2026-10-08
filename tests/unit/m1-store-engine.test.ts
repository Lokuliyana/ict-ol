import { expect, TestSuiteRunner } from '../e2e/harness';
import { useGameStore } from '../../src/lib/store';
import { computeHeartRecharge, computeDailyStreak } from '../../src/lib/heartMath';

export const m1UnitSuite = new TestSuiteRunner('M1: Store & Game Economy Unit Tests');

// 1. Heart recharge mathematical model
m1UnitSuite.addTest('Tier 1', 'Heart Recharge: Full recovery capping at 5 lives', () => {
  const res = computeHeartRecharge(5, null, 1700000000000);
  expect(res.reconciledHearts).toBe(5);
  expect(res.updatedLastHeartLossTime).toBe(null);
  expect(res.secondsUntilNextHeart).toBe(0);
}, 'M1: Heart Math');

m1UnitSuite.addTest('Tier 1', 'Heart Recharge: Dynamic calculation across 75 minutes offline', () => {
  const t0 = 1700000000000;
  // 75 minutes = 4500 seconds (2 full 1800s cycles + 900s remainder)
  const t75 = t0 + 75 * 60 * 1000;
  const res = computeHeartRecharge(2, t0, t75);
  expect(res.reconciledHearts).toBe(4);
  expect(res.secondsUntilNextHeart).toBe(900); // 15 mins left until 5th heart
}, 'M1: Heart Math');

m1UnitSuite.addTest('Tier 1', 'Heart Recharge: Exact 1800s rollover does not flash 0 when under MAX_HEARTS', () => {
  const t0 = 1700000000000;
  const t1800 = t0 + 1800 * 1000;
  const res = computeHeartRecharge(3, t0, t1800);
  expect(res.reconciledHearts).toBe(4);
  expect(res.secondsUntilNextHeart).toBe(1800);
}, 'M1: Heart Math');

m1UnitSuite.addTest('Tier 1', 'Daily Streak: rollover across consecutive days', () => {
  const res1 = computeDailyStreak(3, '2026-10-06', '2026-10-07');
  expect(res1.newStreak).toBe(4);

  const resSame = computeDailyStreak(4, '2026-10-07', '2026-10-07');
  expect(resSame.newStreak).toBe(4);

  const resBroken = computeDailyStreak(10, '2026-10-04', '2026-10-07');
  expect(resBroken.newStreak).toBe(1);
}, 'M1: Daily Streak');

// 2. Zustand Store Actions
m1UnitSuite.addTest('Tier 1', 'Store: Deduct and Restore hearts life cycle', () => {
  useGameStore.getState().refillHearts();
  expect(useGameStore.getState().hearts).toBe(5);

  const deducted = useGameStore.getState().deductHeart();
  expect(deducted).toBe(true);
  expect(useGameStore.getState().hearts).toBe(4);
  expect(useGameStore.getState().lastHeartLossTime !== null).toBe(true);

  useGameStore.getState().restoreHearts(1);
  expect(useGameStore.getState().hearts).toBe(5);
  expect(useGameStore.getState().lastHeartLossTime).toBe(null);
}, 'M1: Store');

m1UnitSuite.addTest('Tier 1', 'Store: completeNode star calculation and XP award', () => {
  useGameStore.getState().refillHearts();
  const initialXp = useGameStore.getState().xp;

  // 95% accuracy => 3 stars (50 + 75 = 125 XP)
  const res = useGameStore.getState().completeNode('g10-u1-s1', 95);
  expect(res.stars).toBe(3);
  expect(res.xpAwarded).toBe(125);
  expect(useGameStore.getState().completedNodes['g10-u1-s1'].stars).toBe(3);
  expect(useGameStore.getState().xp).toBe(initialXp + 125);
}, 'M1: Store');

m1UnitSuite.addTest('Tier 1', 'Store: Grade and Language switches', () => {
  useGameStore.getState().setGrade('11');
  expect(useGameStore.getState().grade).toBe('11');

  useGameStore.getState().setLanguage('si');
  expect(useGameStore.getState().language).toBe('si');

  // Reset back to defaults for clean state
  useGameStore.getState().setGrade('10');
  useGameStore.getState().setLanguage('en');
}, 'M1: Store');
