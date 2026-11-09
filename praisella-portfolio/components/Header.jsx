import Link from 'next/link';

export default function Header({ home = true, position, total }) {
  return (
    <header className="header">
      {home ? (
        <span className="wordmark">Praisella Yosep</span>
      ) : (
        <Link href="/#work" className="tap no-print">← All work</Link>
      )}
      {home ? (
        <nav className="nav no-print">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      ) : (
        <Link href="/" className="wordmark">Praisella Yosep</Link>
      )}
      {home ? (
        <span className="muted place">Seoul and Bali</span>
      ) : (
        <span className="muted">Case {position} of {total}</span>
      )}
    </header>
  );
}
