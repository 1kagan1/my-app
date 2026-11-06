import './globals.css';

export const metadata = {
  title: 'Kağan Sofoğlu',
  description: 'Kağan Sofoğlu — yazılım projeleri ve HÂL Belgesel. Biraz kod, biraz hikâye.',
  metadataBase: new URL('https://kagansofoglu.tech'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Kağan Sofoğlu',
    description: 'Yazılım projeleri ve HÂL Belgesel — Bir Hakikat Yolculuğu.',
    url: 'https://kagansofoglu.tech/',
  },
  twitter: {
    card: 'summary',
    title: 'Kağan Sofoğlu',
    description: 'Yazılım projeleri ve HÂL Belgesel — Bir Hakikat Yolculuğu.',
  },
};

export const viewport = {
  themeColor: '#12120f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
