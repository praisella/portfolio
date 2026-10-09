import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import CaseTabs from '@/components/CaseTabs';
import Footer from '@/components/Footer';
import { getProjects, getCase } from '@/lib/projects';

export function generateStaticParams() {
  return getProjects().filter((p) => p.hasCase).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: `${c.company} — ${c.title} · Praisella Yosep`, description: c.summary };
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  // Render the headline with its last word in the accent serif.
  const words = c.headline.split(' ');
  const last = words.pop();

  return (
    <main className="page">
      <div className="wrap case">
        <Header home={false} position={c.position} total={c.total} />

        <section className="case-hero enter">
          <p className="mono accent small">{c.company.toUpperCase()} · {c.tag.toUpperCase()}</p>
          <h1 className="case-title">{words.join(' ')} <span className="serif accent">{last}</span></h1>
          <p className="lede">{c.summary}</p>
          {c.links && (
            <div className="case-links">
              {c.links.map(([label, href]) => (
                <a key={href} href={href} className="btn btn-line" target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          )}
        </section>

        <dl className="meta">
          {c.meta.map(([k, v]) => (
            <div key={k}>
              <dt className="mono xsmall muted">{k.toUpperCase()}</dt>
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
        <CaseTabs sections={c.sections} />

        <Link href={`/work/${c.next.slug}`} className="next-case">
          <div>
            <span className="mono xsmall muted">NEXT CASE</span>
            <span className="next-title">{c.next.company} — {c.next.title} →</span>
          </div>
          <div className="next-img"><img src={c.next.cover} alt={c.next.alt} /></div>
        </Link>

        <Footer />
      </div>
    </main>
  );
}
