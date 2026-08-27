import './globals.css';

export const metadata = {
  title: 'Kağan Sofoğlu',
  description: 'Kağan Sofoğlu — iOS ve web projeleri.',
  metadataBase: new URL('https://kagansofoglu.tech'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Kağan Sofoğlu',
    description: 'iOS ve web projeleri.',
    url: 'https://kagansofoglu.tech/',
  },
  twitter: {
    card: 'summary',
    title: 'Kağan Sofoğlu',
    description: 'iOS ve web projeleri.',
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
