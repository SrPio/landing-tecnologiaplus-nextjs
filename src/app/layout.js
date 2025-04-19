import "./styles/critical.scss"; // Critical CSS for first render
import "./styles/main.scss"; // Import main CSS directly
import Providers from "./context/Providers";
import { Inter, Montserrat, Bebas_Neue } from 'next/font/google';
import ResourcePreloader from './components/ResourcePreloader';
import DeferNonCriticalJS from './components/DeferNonCriticalJS';
import SchemaOrg from '../components/SchemaOrg';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';

// Optimize fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: '400',
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
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'none',
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
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tecnologiaplus.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Dimension hints for critical LCP images to avoid layout shifts */}
        <meta name="thumbnail" content="https://res.cloudinary.com/ddqh0mkx9/image/upload/f_auto,q_auto/v1744781156/Imagen_portada_4x-8_dfrjjg_1_cg4eew.webp" />
        <meta name="thumbnail:width" content="375" />
        <meta name="thumbnail:height" content="400" /> 
        <SchemaOrg />
      </head>
      <body>
        <ResourcePreloader />
        <ServiceWorkerRegistration />
        <DeferNonCriticalJS />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

