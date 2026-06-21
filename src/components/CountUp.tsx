"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !ref.current) return;
    let cur = 0;
    const inc = Math.ceil(target / 40);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { cur = target; clearInterval(t); }
      if (ref.current) ref.current.textContent = String(cur);
    }, 30);
    return () => clearInterval(t);
  }, [started, target]);

  return <span ref={ref}>0</span>;
}
