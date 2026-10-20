import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView(0.5);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1200, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{n}{suffix}</span>;
}
