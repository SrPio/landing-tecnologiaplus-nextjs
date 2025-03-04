import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import LlamadorMeserosBenefitsSection from "./components/BenefitsSection/LlamadorMeserosBenefitsSection";
import LlamadorMeserosClientsSection from "./components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosHeroSection from "./components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosIndustriesSection from "./components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosProductsSection from "./components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosRelatedProducts from "./components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosSecondaryProductsSection from "./components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection";
import StepsSectionLlamadorMeseros from "./components/StepsSection/StepsSectionLlamadorMeseros";


export const metadata = {
    title: "Llamadores de meseros - TecnologiaPlus",
    description:
        "Llamadores de meseros inalámbricos y sistemas de llamado de personal. Timbres de servicio y mesas para restaurantes. ¡Contáctanos!",
    viewport: "width=device-width, initial-scale=1, minimum-scale=1",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://tecnologiaplus.com/llamadores-de-meseros/",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Llamadores de meseros - TecnologiaPlus",
        description:
            "Llamadores de meseros inalámbricos y sistemas de llamado de personal. Timbres de servicio y mesas para restaurantes. ¡Contáctanos!",
        url: "https://tecnologiaplus.com/llamadores-de-meseros/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2020/10/BANNER-LLAMADORES-MESEROS-1600X600-2.jpg",
                width: 1600,
                height: 600,
                alt: "Llamadores de meseros",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamadores de meseros - TecnologiaPlus",
        description:
            "Llamadores de meseros inalámbricos y sistemas de llamado de personal. Timbres de servicio y mesas para restaurantes. ¡Contáctanos!",
    },
    other: {
        "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
        "article:modified_time": "2025-02-27T15:50:15+00:00",
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


export default function LlamadorMeserosLanding() {
    return (
        <>
            <LlamadorMeserosHeroSection />
            <SecondaryHeader />
            <LlamadorMeserosClientsSection />
            <LlamadorMeserosProductsSection />
            <LlamadorMeserosBenefitsSection />
            <StepsSectionLlamadorMeseros />
            <LlamadorMeserosSecondaryProductsSection />
            <LlamadorMeserosIndustriesSection />
            <LlamadorMeserosRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}