import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <div className="wrap" style={{ minHeight: '60vh', justifyContent: 'center' }}>
        <h1 className="display">This page doesn&apos;t exist.</h1>
        <Link href="/" className="btn btn-dark" style={{ alignSelf: 'flex-start' }}>Back to the home page</Link>
      </div>
    </main>
  );
}
