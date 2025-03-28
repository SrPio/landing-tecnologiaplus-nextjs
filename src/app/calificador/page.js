
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import CalificadorBenefitsSection from "./components/BenefitsSection/CalificadorBenefitsSection";
import CalificadorClientsSection from "./components/ClientsSection/CalificadorClientsSection";
import CalificadorHeroSection from "./components/HeroSection/CalificadorHeroSection";
import CalificadorIndustriesSection from "./components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorProductsSection from "./components/ProductsSection/CalificadorProductsSection";
import CalificadorRelatedProducts from "./components/RelatedProducts/CalificadorRelatedProducts";
import SecondaryCalificadorProductsSection from "./components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import StepsSectionCalificador from "./components/StepsSection/StepsSectionCalificador";


export const metadata = {
    title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
    description:
        "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs.vercel.app/calificador",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        url: "https://tecnologiaplus.com/calificador-de-servicios/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2020/09/Banner.jpg",
            },
        ],
        updatedTime: "2024-12-30T16:34:53-05:00",
    },
    twitter: {
        card: "summary_large_image",
        title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        images: [
            "https://tecnologiaplus.com/wp-content/uploads/2020/09/Banner.jpg",
        ],
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


export default function CalificadorLanding() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://tecnologiaplus.com/calificador-de-servicios/",
        name: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        image: "https://tecnologiaplus.com/wp-content/uploads/2020/09/Banner.jpg",
        datePublished: "2020-08-21T01:24:34+00:00",
        dateModified: "2024-12-30T21:34:53+00:00",
        inLanguage: "es",
        publisher: {
            "@type": "Organization",
            name: "TecnologiaPlus",
            url: "https://tecnologiaplus.com/",
            logo: {
                "@type": "ImageObject",
                url: "https://tecnologiaplus.com/wp-content/uploads/2020/10/Logo-1a1.jpg",
            },
        },
    };



    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CalificadorHeroSection />
            <SecondaryHeader />
            <CalificadorClientsSection />
            <CalificadorProductsSection />
            <CalificadorBenefitsSection />
            <SecondaryCalificadorProductsSection />
            <StepsSectionCalificador />
            <CalificadorIndustriesSection />
            <CalificadorRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}