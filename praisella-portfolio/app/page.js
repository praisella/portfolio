import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import WorkIndex from '@/components/WorkIndex';
import Footer from '@/components/Footer';
import { getProjects } from '@/lib/projects';

export default function Home() {
  const projects = getProjects().map(({ body, ...p }) => p);
  return (
    <main className="page">
      <div className="wrap">
        <Header />
        <Hero />
        <Ticker />
        <WorkIndex projects={projects} />

        <section id="about" className="about">
          <div>
            <h2 className="mono xsmall muted label">PATH</h2>
            <p>NucleusBI — Product Manager<br />Atma — Senior Product Manager<br />Lalamove — Product Manager<br />Origami Labs — Marketing → Product</p>
          </div>
          <div>
            <h2 className="mono xsmall muted label">TOOLKIT</h2>
            <p>Jira, Confluence, Figma, Miro, Notion, Airtable, Amplitude<br />Claude, Supabase, Vercel — for building it myself</p>
          </div>
          <div>
            <h2 className="mono xsmall muted label">OFF THE CLOCK</h2>
            <p>I run <a href="https://instagram.com/prais.mov" className="serif accent brand">Prais.MOV</a>, a content brand about discovering Seoul through dance — and co-run HeelsInSeoul, an English heels class for beginners.</p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
