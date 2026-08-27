import './globals.css';

export const metadata = {
  title: 'Kağan Sofoğlu — Developer',
  description: 'Kağan Sofoğlu — mobil uygulamalar, web ürünleri ve yazılım projeleri geliştiren bağımsız geliştirici.',
  metadataBase: new URL('https://kagansofoglu.tech'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Kağan Sofoğlu — Developer',
    description: 'Mobil uygulamalar, web ürünleri ve bağımsız yazılım projeleri.',
    url: 'https://kagansofoglu.tech/',
  },
  twitter: {
    card: 'summary',
    title: 'Kağan Sofoğlu — Developer',
    description: 'Mobil uygulamalar, web ürünleri ve bağımsız yazılım projeleri.',
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
