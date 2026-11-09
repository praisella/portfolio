import CaseTabs from '@/components/CaseTabs';

// Everything on a case page between the header and the "next case" link.
// Used by /work/[slug] and by /print (the PDF version).
export default function CaseBody({ c }) {
  return (
    <>
      <section className="case-hero enter">
        <p className="label accent">{c.company} · {c.tag}</p>
        <h1 className="case-title">{c.headline}</h1>
        <p className="lede">{c.summary}</p>
        {c.links && (
          <div className="case-links">
            {c.links.map(([label, href]) => (
              <a key={href} href={href} className="btn btn-line" target="_blank" rel="noreferrer">
                {label}
                <span className="print-only">&nbsp;· {href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </a>
            ))}
          </div>
        )}
      </section>

      <dl className="meta">
        {c.meta.map(([k, v]) => (
          <div key={k}>
            <dt className="label">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <figure className="case-cover">
        <img src={c.cover} alt={c.alt} />
      </figure>

      <section className="stats" aria-label="Results at a glance">
        {c.stats.map(([big, small]) => (
          <div key={small}>
            <span className="stat-big accent">{big}</span>
            <span className="stat-small muted">{small}</span>
          </div>
        ))}
      </section>

      <div id="tabs-top" />
      <CaseTabs sections={c.sections} idPrefix={c.slug} />
    </>
  );
}
