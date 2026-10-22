/**
 * src/utils/haptics.ts
 * Haptic vibration utilities for mobile tactile feedback.
 */

export function triggerHaptic(type: 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' = 'light') {
  if (typeof window === 'undefined' || !navigator.vibrate) return;

  try {
    switch (type) {
      case 'light':
        navigator.vibrate(12);
        break;
      case 'medium':
        navigator.vibrate(25);
        break;
      case 'heavy':
        navigator.vibrate(45);
        break;
      case 'success':
        navigator.vibrate([15, 40, 25]);
        break;
      case 'warning':
        navigator.vibrate([30, 30, 30]);
        break;
      case 'error':
        navigator.vibrate([40, 60, 40]);
        break;
      default:
        navigator.vibrate(15);
    }
  } catch {
    // Vibration API not supported or disallowed by user permissions
  }
}
