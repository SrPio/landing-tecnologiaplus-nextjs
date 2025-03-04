import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import DispensadorTiquetesBenefitsSection from "./components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "./components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "./components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "./components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "./components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "./components/RelatedProducts/DispensadorTiquetesRelatedProducts";


export const metadata = {
    title: "Dispensador de tiquetes - TecnologiaPlus",
    description: "Descubre nuestro dispensador de tiquetes soluciones eficientes para tu negocio. Encuentra variedad y calidad en Tecnología Plus.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://tecnologiaplus.com/dispensador-de-tiquetes/",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://tecnologiaplus.com/dispensador-de-tiquetes/",
        title: "Dispensador de tiquetes - TecnologiaPlus",
        description: "Descubre nuestro dispensador de tiquetes soluciones eficientes para tu negocio. Encuentra variedad y calidad en Tecnología Plus.",
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
        title: "Dispensador de tiquetes - TecnologiaPlus",
        description: "Descubre nuestro dispensador de tiquetes soluciones eficientes para tu negocio. Encuentra variedad y calidad en Tecnología Plus.",
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