import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import WppBtn from "./components/WppBtn/WppBtn";
import SliderHero from "./components/SliderHero/SliderHero";

// Lazy load non-critical components
const HomeClientsSection = dynamic(() => import('./home/components/ClientsSection/HomeClientsSection'), { ssr: true });
const HomeProductsSection = dynamic(() => import('./home/components/ProductsSection/HomeProductsSection'), { ssr: true });
const HomeBenefitsSection = dynamic(() => import('./home/components/BenefitsSection/HomeBenefitsSection'), { ssr: true });
const HomeRecentPostsSection = dynamic(() => import('./home/components/RecentPost/HomeRecentPostsSection'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: true });
const ContactForm = dynamic(() => import('./components/ContactForm/ContactForm'), { ssr: true });
const VideoSection = dynamic(() => import('./home/components/VideoSection/ProductsSection/VideoSection'), { ssr: true });

export const metadata = {
  title: "Sistemas innovadores para Agilizar y potenciar la atención al cliente",
  description: "Lleva tu negocio al siguiente nivel, en Tecnología Plus somos expertos en sistemas para agilizar y potenciar el servicio al cliente ¡Contáctanos ahora!",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs.vercel.app/",
  },
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "Tecnología Plus - Llamadores Inalámbricos y Sistemas de Turnos",
    description: "Mejora la eficiencia de tu negocio con los llamadores inalámbricos y sistemas de turnos de Tecnología Plus. Soluciones innovadoras para un mejor servicio.",
    url: "https://landing-tecnologiaplus-nextjs.vercel.app/",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "/images/logo-tecnologia-plus.jpg",
        width: 831,
        height: 686,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnología Plus - Llamadores Inalámbricos y Sistemas de Turnos",
    description: "Mejora la eficiencia de tu negocio con los llamadores inalámbricos y sistemas de turnos de Tecnología Plus. Soluciones innovadoras para un mejor servicio.",
  }
};

export default function Home() {
  return (
    <>
      <SliderHero
        botonesPorHero={{
          turnoMaster: { href: "/turnomaster", text: "Ver más" },
          dispensadorTiquetes: { href: "/dispensador-tiquetes", text: "Ver más" },
          turnoExpress: { href: "/turnero-turnoexpress", text: "Ver más" },
          calificador: { href: "/calificador", text: "Ver más" },
          rollosTermicos: { href: "/rollos-termicos", text: "Ver más" },
          rollosTurnos: { href: "/rollos-turnos", text: "Ver más" },
          encuestaVirtual: { href: "/encuesta-virtual", text: "Ver más" },
          enfermeria: { href: "/enfermeria", text: "Ver más" },
          llamadorMeseros: { href: "/llamador-meseros", text: "Ver más" },
          localizadores: { href: "/localizadores", text: "Ver más" }
        }}
      />
      <SecondaryHeader />
      <HomeClientsSection />
      <HomeProductsSection />
      <VideoSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}