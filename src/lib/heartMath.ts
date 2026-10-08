/**
 * src/lib/heartMath.ts
 * Deterministic heart recharge cycle & daily streak algorithms.
 */

export const MAX_HEARTS = 5;
export const HEART_RECHARGE_SECONDS = 1800; // 30 minutes
export const HEART_RECHARGE_MS = HEART_RECHARGE_SECONDS * 1000; // 1,800,000 ms

export interface HeartRechargeResult {
  reconciledHearts: number;
  updatedLastHeartLossTime: number | null;
  secondsUntilNextHeart: number;
}

/**
 * Reconciles heart recovery based on wall-clock time elapsed since lastHeartLossTime.
 * Handles app closure, background throttling, and timezone rollovers.
 */
export function computeHeartRecharge(
  currentHearts: number,
  lastHeartLossTime: number | null,
  now: number = Date.now()
): HeartRechargeResult {
  // If already at or above maximum capacity, recharge timer is inactive
  if (currentHearts >= MAX_HEARTS) {
    return {
      reconciledHearts: MAX_HEARTS,
      updatedLastHeartLossTime: null,
      secondsUntilNextHeart: 0,
    };
  }

  // If hearts are depleted (< 5) but timestamp was null or missing, initialize it now
  if (!lastHeartLossTime) {
    return {
      reconciledHearts: Math.max(0, currentHearts),
      updatedLastHeartLossTime: now,
      secondsUntilNextHeart: HEART_RECHARGE_SECONDS,
    };
  }

  const elapsedMs = Math.max(0, now - lastHeartLossTime);
  const heartsEarned = Math.floor(elapsedMs / HEART_RECHARGE_MS);

  if (heartsEarned > 0) {
    const newHearts = Math.min(MAX_HEARTS, currentHearts + heartsEarned);
    if (newHearts >= MAX_HEARTS) {
      return {
        reconciledHearts: MAX_HEARTS,
        updatedLastHeartLossTime: null,
        secondsUntilNextHeart: 0,
      };
    }

    // Carry over partial progress into the next cycle
    const remainderMs = elapsedMs % HEART_RECHARGE_MS;
    const newTimestamp = now - remainderMs;
    const secondsRemaining = Math.max(0, Math.ceil((HEART_RECHARGE_MS - remainderMs) / 1000));

    return {
      reconciledHearts: newHearts,
      updatedLastHeartLossTime: newTimestamp,
      secondsUntilNextHeart: secondsRemaining,
    };
  }

  const secondsRemaining = Math.max(0, Math.ceil((HEART_RECHARGE_MS - elapsedMs) / 1000));
  return {
    reconciledHearts: Math.max(0, currentHearts),
    updatedLastHeartLossTime: lastHeartLossTime,
    secondsUntilNextHeart: secondsRemaining,
  };
}

/**
 * Computes calendar-based daily streak increments and resets across midnight.
 */
export function computeDailyStreak(
  currentStreak: number,
  lastStudyDate: string,
  today: string = new Date().toISOString().split('T')[0]
): { newStreak: number; newStudyDate: string } {
  if (!lastStudyDate) {
    return { newStreak: 1, newStudyDate: today };
  }

  if (lastStudyDate === today) {
    return { newStreak: currentStreak, newStudyDate: today };
  }

  const lastDateObj = new Date(lastStudyDate);
  const todayDateObj = new Date(today);
  const diffDays = Math.round((todayDateObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    // Consecutive day study session
    return { newStreak: currentStreak + 1, newStudyDate: today };
  } else if (diffDays > 1) {
    // Streak broken: more than 1 day elapsed
    return { newStreak: 1, newStudyDate: today };
  }

  return { newStreak: currentStreak, newStudyDate: today };
}
