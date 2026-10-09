const ITEMS = [
  ['1k → 10k+', 'DAU AT ATMA'],
  ['13%+', 'OF 4-WHEEL VOLUME VIA LALAMOVE FLEET'],
  ['<10 min', 'SPRINT PREP, DOWN FROM 1–2 HRS'],
  ['40%+', 'RETENTION AFTER ATMA ACADEMY'],
  ['1 day', 'IDEA TO LIVE, PRAIS.MOV'],
];

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <section className="ticker" aria-label="Highlights">
      <div className="ticker-track">
        {all.map(([big, small], i) => (
          <span className="tick" key={i} aria-hidden={i >= ITEMS.length ? 'true' : undefined}>
            <span className="tick-big">{big}</span>
            <span className="mono muted xsmall">{small}</span>
            <span className="accent tick-star">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
}
