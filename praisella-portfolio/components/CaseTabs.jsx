'use client';
import { useState } from 'react';

// Every section is in the page; only the active one shows on screen.
// In print (the PDF) all sections show, one after another.
export default function CaseTabs({ sections, idPrefix = 'case' }) {
  const [t, setT] = useState(0);
  return (
    <section className="case-tabs">
      <div className="tablist" role="tablist" aria-label="Case study sections">
        {sections.map((x, i) => (
          <button
            key={x.label}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${i}`}
            aria-selected={t === i}
            aria-controls={`${idPrefix}-panel-${i}`}
            className={'tab' + (t === i ? ' on' : '')}
            onClick={() => setT(i)}
          >
            <span className="tab-no">{String(i + 1).padStart(2, '0')}</span>
            {x.label}
          </button>
        ))}
      </div>
      <div style={{ minWidth: 0 }}>
        {sections.map((s, i) => (
          <div
            key={s.label}
            className="tabpanel"
            role="tabpanel"
            id={`${idPrefix}-panel-${i}`}
            aria-labelledby={`${idPrefix}-tab-${i}`}
            hidden={t !== i}
            style={{ marginBottom: 32 }}
          >
            <p className="label panel-label">{s.label}</p>
            {s.heading && <h2 className="panel-title">{s.heading}</h2>}
            <div className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
            {i < sections.length - 1 && (
              <button
                type="button"
                className="tap strong next-tab"
                onClick={() => {
                  setT(i + 1);
                  document.getElementById('tabs-top')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Next: {sections[i + 1].label} →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
