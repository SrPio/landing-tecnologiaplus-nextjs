import "./styles/main.scss";
import Providers from "./context/Providers";
import { Inter } from 'next/font/google';
import ResourcePreloader from './components/ResourcePreloader';
import SchemaOrg from '../components/SchemaOrg';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';

// Optimize fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    template: '%s | Tecnología Plus',
    default: 'Tecnología Plus - Sistemas de Turnos y Llamadores de Meseros'
  },
  description: "Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia y experiencia en su negocio",
  metadataBase: new URL('https://landing-tecnologiaplus-nextjs.vercel.app'),
  keywords: ['sistemas de turnos', 'llamador de meseros', 'localizadores', 'tecnología para negocios', 'dispositivos para restaurantes'],
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Tecnología Plus - Sistemas para Mejorar su Negocio',
    description: 'Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia de su negocio',
    url: 'https://landing-tecnologiaplus-nextjs.vercel.app',
    siteName: 'Tecnología Plus',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/favicon-192x192.png',
        width: 192,
        height: 192,
        alt: 'Tecnología Plus - Soluciones tecnológicas para su negocio',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Tecnología Plus - Sistemas para Mejorar su Negocio',
    description: 'Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores',
    images: ['/favicon-192x192.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-site-verification',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SchemaOrg />
      </head>
      <body>
        <ResourcePreloader />
        <ServiceWorkerRegistration />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

