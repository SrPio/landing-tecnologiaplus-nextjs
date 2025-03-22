import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeHeroSection from "./home/components/HeroSection/HomeHeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import HomeClientsSection from "./home/components/ClientsSection/HomeClientsSection";
import HomeProductsSection from "./home/components/ProductsSection/HomeProductsSection";
import HomeBenefitsSection from "./home/components/BenefitsSection/HomeBenefitsSection";
import HomeRecentPostsSection from "./home/components/RecentPost/HomeRecentPostsSection";
import WppBtn from "./components/WppBtn/WppBtn";
import Footer from "./components/Footer/Footer";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import SliderHero from "./components/SliderHero/SliderHero";


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
        url: "https://tecnologiaplus.com/wp-content/uploads/2020/10/Logo-1a1.jpg",
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
  },
  other: {
    "msapplication-TileImage": "https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-270x270.png",
  },
};



export default function Home() {
  return (
    <>
      {/* <HomeHeroSection /> */}
      <SliderHero
        botonesPorHero={{
          turnoMaster: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/turnomaster", text: "Ver más" },
          dispensadorTiquetes: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/dispensador-tiquetes", text: "Ver más" },
          turnoExpress: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress", text: "Ver más" },
          calificador: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/calificador", text: "Ver más" },
          rollosTermicos: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/rollos-termicos", text: "Ver más" },
          rollosTurnos: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/rollos-turnos", text: "Ver más" },
          encuestaVirtual: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/encuesta-virtual", text: "Ver más" },
          enfermeria: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/enfermeria", text: "Ver más" },
          llamadorMeseros: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros", text: "Ver más" },
          localizadores: { href: "https://landing-tecnologiaplus-nextjs.vercel.app/localizadores", text: "Ver más" }
        }}
      />
      <SecondaryHeader />
      <HomeClientsSection />
      <HomeProductsSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}