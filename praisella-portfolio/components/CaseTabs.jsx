'use client';
import { useState } from 'react';

export default function CaseTabs({ sections }) {
  const [t, setT] = useState(0);
  const s = sections[t];
  return (
    <section className="case-tabs">
      <div className="tablist" role="tablist" aria-label="Case study sections">
        {sections.map((x, i) => (
          <button
            key={x.label}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={t === i}
            aria-controls="tabpanel"
            className={'tab mono' + (t === i ? ' on' : '')}
            onClick={() => setT(i)}
          >
            {String(i + 1).padStart(2, '0')}&nbsp;&nbsp;{x.label}
          </button>
        ))}
      </div>
      <div className="tabpanel swap" role="tabpanel" id="tabpanel" aria-labelledby={`tab-${t}`} key={t}>
        {s.heading && <h2 className="panel-title">{s.heading}</h2>}
        <div className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
        {t < sections.length - 1 && (
          <button type="button" className="tap strong next-tab" onClick={() => { setT(t + 1); document.getElementById('tabs-top')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Next: {sections[t + 1].label} →
          </button>
        )}
      </div>
    </section>
  );
}
