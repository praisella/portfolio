import './globals.css';
import SmoothAnchors from '@/components/SmoothAnchors';

const description =
  'Product manager with 5+ years across startups and global teams, turning ambiguous problems into scalable products, systems and workflows. Based between Seoul and Bali.';

export const metadata = {
  metadataBase: new URL('https://praisellayosep-portfolio.vercel.app'),
  title: 'Praisella Yosep — Product Manager',
  description,
  openGraph: {
    title: 'Praisella Yosep — Product Manager',
    description,
    url: '/',
    siteName: 'Praisella Yosep',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Praisella Yosep — Product Manager', description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
