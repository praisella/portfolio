import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'projects');

function read(file) {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  return { ...data, body: content };
}

export function getProjects() {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map(read)
    .sort((a, b) => a.order - b.order);
}

// Splits the markdown body into tabs on "## " headings.
// The first "### " line inside a tab becomes its big heading.
function toSections(body) {
  return body
    .split(/^## /m)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((chunk) => {
      const [labelLine, ...rest] = chunk.split('\n');
      let text = rest.join('\n').trim();
      let heading = '';
      const m = text.match(/^### (.+)$/m);
      if (m) {
        heading = m[1].trim();
        text = text.replace(m[0], '').trim();
      }
      return { label: labelLine.trim(), heading, html: marked.parse(text) };
    });
}

export function getCase(slug) {
  const all = getProjects();
  const withCase = all.filter((p) => p.hasCase);
  const idx = withCase.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  const p = withCase[idx];
  const next = withCase[(idx + 1) % withCase.length];
  return {
    ...p,
    sections: toSections(p.body),
    position: idx + 1,
    total: withCase.length,
    next: { slug: next.slug, company: next.company, title: next.title, cover: next.cover, alt: next.alt },
  };
}
