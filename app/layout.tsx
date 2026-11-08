import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ismaiel10.github.io/myPortfolio/'),
  title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
  description:
    'Explore the engineering projects, software products, and creative technology experiments of Syed Ismaiel. BTech in Artificial Intelligence & Machine Learning.',
  authors: [{ name: 'Syed Ismaiel', url: 'https://github.com/ismaiel10' }],
  creator: 'Syed Ismaiel',
  keywords: [
    'Syed Ismaiel',
    'Software Engineer',
    'Product Builder',
    'Founder',
    'FixBazaar',
    'AI & Machine Learning',
    'Vidyavardhaka College of Engineering',
    'Mysuru',
    'Creative Technologist',
    '3D Visualization',
    'Next.js',
    'React Native',
    'Unity',
  ],
  openGraph: {
    title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
    description:
      'Explore the engineering projects, software products, and creative technology experiments of Syed Ismaiel.',
    url: 'https://ismaiel10.github.io/myPortfolio/',
    siteName: 'Syed Ismaiel Portfolio',
    images: [
      {
        url: '/images/black.png',
        width: 768,
        height: 1024,
        alt: 'Syed Ismaiel — Official Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
    description:
      'Explore the engineering projects, software products, and creative technology experiments of Syed Ismaiel.',
    images: ['/images/black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#070709',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#070709] text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
