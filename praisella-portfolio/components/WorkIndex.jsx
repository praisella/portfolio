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
        <h2 className="section-title">Selected <span className="serif accent">work</span></h2>
        <div className="chips" role="group" aria-label="Filter projects">
          {FILTERS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={'chip mono' + (filter === id ? ' on' : '')}
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
                <span className="mono xsmall row-no">{on ? '→' : String(n + 1).padStart(2, '0')}</span>
                <span className="row-main">
                  <span className="mono xsmall muted">{p.company.toUpperCase()}</span>
                  <span className="row-title">{p.title}</span>
                  <span className="row-mobile">
                    <span>{p.line}</span>
                    <span className="accent">{p.metric}</span>
                  </span>
                </span>
                <span className="mono xsmall muted row-tag">{p.tag.toUpperCase()}</span>
                <span className="mono xsmall muted row-year">{p.year}</span>
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
            <div className="stack">
              <div className="card c1" />
              <div className="card c2" />
              <div className="card top" style={{ transform: `rotate(${active.rot})` }}>
                <img src={active.cover} alt={active.alt} />
              </div>
            </div>
            <div className="mono xsmall muted preview-meta">
              <span>{active.role}</span>
              <span>{active.year}</span>
            </div>
            <p className="preview-line">{active.line}</p>
            <p className="preview-metric accent">{active.metric}</p>
            {active.hasCase ? (
              <Link href={`/work/${active.slug}`} className="tap strong">Read the case study →</Link>
            ) : (
              <span className="mono xsmall muted">Brief entry</span>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
