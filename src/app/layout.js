import "./styles/main.scss";
import Providers from "./context/Providers";
import { Inter } from 'next/font/google';
import PreloadResources from './components/PreloadResources';

// Optimize fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Tecnología Plus",
  description: "Página de tecnología plus - Sistemas de turnos, llamador de meseros y localizadores para su negocio",
  metadataBase: new URL('https://landing-tecnologiaplus-nextjs.vercel.app'),
  openGraph: {
    title: 'Tecnología Plus',
    description: 'Sistemas de turnos, llamador de meseros y localizadores para su negocio',
    url: 'https://landing-tecnologiaplus-nextjs.vercel.app',
    siteName: 'Tecnología Plus',
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileImage': '/mstile-270x270.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tecnologiaplus.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <PreloadResources />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

