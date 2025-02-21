import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeHeroSection from "./home/components/HeroSection/HomeHeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import HomeClientsSection from "./home/components/ClientsSection/HomeClientsSection";
import HomeProductsSection from "./home/components/ProductsSection/HomeProductsSection";
import HomeBenefitsSection from "./home/components/BenefitsSection/HomeBenefitsSection";
import HomeRecentPostsSection from "./home/components/RecentPost/HomeRecentPostsSection";
import ContactForm from "./rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "./components/WppBtn/WppBtn";
import Footer from "./components/Footer/Footer";


export const metadata = {
  title: "Sistemas innovadores para Agilizar y potenciar la atención al cliente",
  description: "Lleva tu negocio al siguiente nivel, en Tecnología Plus somos expertos en sistemas para agilizar y potenciar el servicio al cliente ¡Contáctanos ahora!",
  alternates: {
    canonical: "https://tecnologiaplus.com/",
  },
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "Tecnología Plus - Llamadores Inalámbricos y Sistemas de Turnos",
    description: "Mejora la eficiencia de tu negocio con los llamadores inalámbricos y sistemas de turnos de Tecnología Plus. Soluciones innovadoras para un mejor servicio.",
    url: "https://tecnologiaplus.com/",
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
      <HomeHeroSection />
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