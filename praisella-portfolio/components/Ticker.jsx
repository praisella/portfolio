// Home-page highlights: a static row of numbers.
const ITEMS = [
  ['1k → 10k+', 'Daily active users at Atma'],
  ['13%+', 'Of 4-wheel volume via Lalamove Fleet'],
  ['<10 min', 'Sprint prep, down from 1–2 hours'],
  ['40%+', 'Retention after Atma Academy'],
  ['1 day', 'Idea to live, Prais.MOV'],
];

export default function Ticker() {
  return (
    <dl className="highlights" aria-label="Highlights">
      {ITEMS.map(([big, small]) => (
        <div key={small}>
          <dt className="hl-big">{big}</dt>
          <dd className="hl-small" style={{ margin: 0 }}>{small}</dd>
        </div>
      ))}
    </dl>
  );
}
