import Link from 'next/link';

export default function Header({ home = true, position, total }) {
  return (
    <header className="header mono">
      {home ? (
        <span className="wordmark">PRAISELLA YOSEP</span>
      ) : (
        <Link href="/#work" className="tap">← All work</Link>
      )}
      {home ? (
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      ) : (
        <Link href="/" className="wordmark">PRAISELLA YOSEP</Link>
      )}
      {home ? (
        <span className="muted place"><span className="dot" />Seoul ⇄ Bali</span>
      ) : (
        <span className="muted">CASE {String(position).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      )}
    </header>
  );
}
