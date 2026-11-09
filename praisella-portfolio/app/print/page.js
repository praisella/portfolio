import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';
import CaseBody from '@/components/CaseBody';
import { getProjects, getCase } from '@/lib/projects';

// The whole portfolio on one page, laid out for the PDF export.
// Not linked from the site. Open /print and use the browser's Print → Save as PDF.
export const metadata = {
  title: 'Praisella Yosep — Portfolio (PDF)',
  robots: { index: false, follow: false },
};

export default function PrintPage() {
  const projects = getProjects();
  const cases = projects.filter((p) => p.hasCase).map((p) => getCase(p.slug));

  return (
    <main className="page">
      <div className="wrap">
        <header className="header">
          <span className="wordmark">Praisella Yosep</span>
          <span className="muted">praisellayosep@gmail.com · linkedin.com/in/praisellayosep</span>
        </header>
        <Hero />
        <Ticker />

        <section className="work">
          <h2 className="section-title">Selected work</h2>
          <ol className="rows">
            {projects.map((p, n) => (
              <li key={p.slug} className="row" style={{ alignItems: 'flex-start', cursor: 'default' }}>
                <span className="row-no">{String(n + 1).padStart(2, '0')}</span>
                <span className="row-main">
                  <span className="row-title">{p.title}</span>
                  <span className="row-company">{p.company} · {p.role}</span>
                  <span className="small" style={{ color: 'var(--ink-3)', lineHeight: 1.5, marginTop: 4 }}>{p.line}</span>
                  <span className="small accent strong">{p.metric}</span>
                </span>
                <span className="row-tag">{p.tag}</span>
                <span className="row-year">{p.year}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="about">
          <div>
            <h2 className="label">Path</h2>
            <p>NucleusBI — Product Manager<br />Atma — Senior Product Manager<br />Lalamove — Product Manager<br />Origami Labs — Marketing → Product</p>
          </div>
          <div>
            <h2 className="label">Toolkit</h2>
            <p>Jira, Confluence, Figma, Miro, Notion, Airtable, Amplitude<br />Claude, Supabase, Vercel — for building it myself</p>
          </div>
          <div>
            <h2 className="label">Off the clock</h2>
            <p>I run Prais.MOV, a content brand about discovering Seoul through dance — and co-run HeelsInSeoul, an international heels dancer community based in Seoul.</p>
          </div>
        </section>

        {cases.map((c) => (
          <div key={c.slug} className="print-break" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <p className="label">Case {c.position} of {c.total}</p>
            <CaseBody c={c} />
          </div>
        ))}

        <Footer />
      </div>
    </main>
  );
}
