import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ismaiel10.github.io/myPortfolio/'),
  title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
  description:
    'Personal portfolio of Syed Ismaiel: engineer, product builder, and founder working across software architecture, artificial intelligence, and creative technology.',
  authors: [{ name: 'Syed Ismaiel', url: 'https://github.com/ismaiel10' }],
  creator: 'Syed Ismaiel',
  keywords: [
    'Syed Ismaiel',
    'Engineer',
    'Product Builder',
    'Founder',
    'FixBazaar',
    'Forgent',
    'AI & Machine Learning',
    'VVCE Mysuru',
    'Creative Technology',
  ],
  openGraph: {
    title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
    description:
      'Personal portfolio of Syed Ismaiel: engineer, product builder, and founder working across software architecture, artificial intelligence, and creative technology.',
    url: 'https://ismaiel10.github.io/myPortfolio/',
    siteName: 'Syed Ismaiel Portfolio',
    images: [
      {
        url: '/images/black.png',
        width: 768,
        height: 1024,
        alt: 'Syed Ismaiel — Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ismaiel — Engineer, Product Builder & Founder',
    description:
      'Personal portfolio of Syed Ismaiel: engineer, product builder, and founder working across software architecture, artificial intelligence, and creative technology.',
    images: ['/images/black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F8F7F4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-charcoal min-h-screen antialiased selection:bg-[#EAE5D9]">
        {children}
      </body>
    </html>
  );
}
