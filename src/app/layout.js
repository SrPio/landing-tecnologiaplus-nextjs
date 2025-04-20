import "./styles/critical.scss"; // Critical CSS for first render
import "./styles/main.scss"; // Import main CSS directly
import Providers from "./context/Providers";
import { Inter, Montserrat, Bebas_Neue } from 'next/font/google';
import SchemaOrg from '../components/SchemaOrg';

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

/**
 * Root layout component
 * This layout includes performance optimizations like:
 * - Font optimization with next/font/google
 * - DNS prefetching and preconnect for critical domains
 * - Security headers to prevent third-party cookies
 * - Proper meta tags for dimensions to prevent layout shifts
 */
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Essential resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tecnologiaplus.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        
        {/* Core meta tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Dimension hints for critical LCP images */}
        <meta name="thumbnail:width" content="375" />
        <meta name="thumbnail:height" content="400" /> 
        
        {/* Enhanced security headers */}
        <meta httpEquiv="Feature-Policy" content="autoplay 'none'; camera 'none'; microphone 'none'; geolocation 'none'" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=(), browsing-topics=(), attribution-reporting=()" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://res.cloudinary.com; img-src 'self' data: https://res.cloudinary.com https://i.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src data: 'self' https://fonts.gstatic.com; frame-src https://www.youtube-nocookie.com https://www.youtube.com; object-src 'none'; block-all-mixed-content; base-uri 'self'" />
        
        {/* Prevent tracking */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        <SchemaOrg />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

