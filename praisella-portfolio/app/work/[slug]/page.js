import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import CaseBody from '@/components/CaseBody';
import Footer from '@/components/Footer';
import { getProjects, getCase } from '@/lib/projects';

export function generateStaticParams() {
  return getProjects().filter((p) => p.hasCase).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const title = `${c.company} — ${c.title} · Praisella Yosep`;
  return {
    title,
    description: c.summary,
    openGraph: { title, description: c.summary, url: `/work/${c.slug}`, type: 'article' },
    twitter: { card: 'summary_large_image', title, description: c.summary },
  };
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <main className="page">
      <div className="wrap case">
        <Header home={false} position={c.position} total={c.total} />
        <CaseBody c={c} />

        <Link href={`/work/${c.next.slug}`} className="next-case">
          <div>
            <span className="label">Next case</span>
            <span className="next-title">{c.next.title}, {c.next.company}</span>
          </div>
          <div className="next-img"><img src={c.next.cover} alt={c.next.alt} /></div>
        </Link>

        <Footer />
      </div>
    </main>
  );
}
