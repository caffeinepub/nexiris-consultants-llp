import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  trigger: boolean;
}

/**
 * Animates a number from `start` to `end` over `duration` ms when `trigger` is true.
 * Respects prefers-reduced-motion by instantly showing the final value.
 */
export function useCountUp({ start = 0, end, duration = 1800, trigger }: UseCountUpOptions): number {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    const startVal = start;
    const endVal = end;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (endVal - startVal) * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(step);
  }, [trigger, start, end, duration]);

  return count;
}
