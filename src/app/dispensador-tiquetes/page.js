import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import DispensadorTiquetesBenefitsSection from "./components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "./components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "./components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "./components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "./components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "./components/RelatedProducts/DispensadorTiquetesRelatedProducts";


export const metadata = {
    title: "Dispensador de Tiquetes | Agiliza la Atención",
    description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs.vercel.app/dispensador-tiquetes",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs.vercel.app/dispensador-tiquetes",
        title: "Dispensador de Tiquetes | Agiliza la Atención",
        description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2023/06/Captura-de-pantalla-2023-05-25-210121.png",
                width: 958,
                height: 747,
                alt: "Dispensador de tiquetes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dispensador de Tiquetes | Agiliza la Atención",
        description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
    },
    other: {
        "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
        "article:modified_time": "2025-02-27T15:41:02+00:00",
    },
    icons: {
        other: [
            {
                rel: "msapplication-TileImage",
                url: "https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-270x270.png",
            },
        ],
    },
};


export default function DispensadorTiquetesLanding() {
    return (
        <>
            <DispensadorTiquetesHeroSection />
            <SecondaryHeader />
            <DispensadorTiquetesClientsSection />
            <DispensadorTiquetesProductsSection />
            <DispensadorTiquetesBenefitsSection />
            <DispensadorTiquetesIndustriesSection />
            <DispensadorTiquetesRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}