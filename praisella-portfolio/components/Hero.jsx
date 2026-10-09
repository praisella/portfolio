'use client';
import { useEffect, useState } from 'react';

const WORDS = ['products.', 'systems.', 'workflows.', 'tools teams use.'];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => n + 1), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text enter">
        <p className="mono accent small">Hi, I&apos;m Praisella —</p>
        <h1 className="display">
          I&apos;m a product manager who turns ambiguous problems into{' '}
          <span className="serif accent rotator" key={i} aria-live="polite">
            {WORDS[i % WORDS.length]}
          </span>
        </h1>
        <p className="lede">
          5+ years across startups and global teams — from logistics and job platforms to
          internal tools I build myself with AI. Based between Seoul and Bali.
        </p>
        <div className="ctas">
          <a href="#work" className="btn btn-dark">See the work ↓</a>
          <a href="mailto:praisellayosep@gmail.com" className="btn btn-line">Say hello</a>
        </div>
      </div>
      <div className="collage" aria-hidden="true">
        <div className="frame f1"><img src="/images/atma/cover.jpg" alt="" /></div>
        <div className="frame f2"><img src="/images/prais-mov/cover.jpg" alt="" /></div>
        <div className="frame f3"><img src="/images/planning-tool/cover.jpg" alt="" /></div>
        <span className="serif accent scribble">a few things I&apos;ve shipped ↓</span>
      </div>
    </section>
  );
}
