import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import '@fontsource/instrument-sans/600.css';
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
      <body>
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
