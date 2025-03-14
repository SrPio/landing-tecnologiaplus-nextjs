import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import LlamadorMeserosBenefitsSection from "./components/BenefitsSection/LlamadorMeserosBenefitsSection";
import LlamadorMeserosClientsSection from "./components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosHeroSection from "./components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosIndustriesSection from "./components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosProductsSection from "./components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosRelatedProducts from "./components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosSecondaryProductsSection from "./components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection";
import StepsSectionLlamadorMeseros from "./components/StepsSection/StepsSectionLlamadorMeseros";


export const metadata = {
    title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
    description:
        "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
        description:
            "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
        url: "https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros",
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
        title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
        description:
            "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
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