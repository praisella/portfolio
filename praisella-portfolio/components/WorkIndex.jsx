'use client';
import { useState } from 'react';
import Link from 'next/link';

const FILTERS = [
  ['all', 'All'],
  ['internal', 'Internal tools'],
  ['consumer', 'Apps & platforms'],
  ['personal', 'Personal'],
];

export default function WorkIndex({ projects }) {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(projects[0]?.slug);
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  const active = visible.find((p) => p.slug === hovered) || visible[0];

  return (
    <section id="work" className="work">
      <div className="work-head">
        <h2 className="section-title">Selected work</h2>
        <div className="chips" role="group" aria-label="Filter projects">
          {FILTERS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={'chip' + (filter === id ? ' on' : '')}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-body">
        <ol className="rows">
          {visible.map((p, n) => {
            const on = active && p.slug === active.slug;
            const inner = (
              <>
                <span className="row-no">{String(n + 1).padStart(2, '0')}</span>
                <span className="row-main">
                  <span className="row-title">{p.title}</span>
                  <span className="row-company">{p.company}</span>
                  <span className="row-mobile">
                    <span>{p.line}</span>
                    <span className="accent">{p.metric}</span>
                  </span>
                </span>
                <span className="row-tag">{p.tag}</span>
                <span className="row-year">{p.year}</span>
              </>
            );
            const props = {
              className: 'row' + (on ? ' on' : ''),
              onMouseEnter: () => setHovered(p.slug),
              onFocus: () => setHovered(p.slug),
            };
            return (
              <li key={p.slug}>
                {p.hasCase ? (
                  <Link href={`/work/${p.slug}`} {...props}>{inner}</Link>
                ) : (
                  <div tabIndex={0} {...props}>{inner}</div>
                )}
              </li>
            );
          })}
        </ol>

        {active && (
          <aside className="preview" aria-live="polite">
            <div className="preview-img">
              <img src={active.cover} alt={active.alt} />
            </div>
            <div className="preview-meta">
              <span>{active.role}</span>
              <span>{active.year}</span>
            </div>
            <p className="preview-line">{active.line}</p>
            <p className="preview-metric accent">{active.metric}</p>
            {active.hasCase ? (
              <Link href={`/work/${active.slug}`} className="tap strong">Read the case study →</Link>
            ) : (
              <span className="small muted">Brief entry</span>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
