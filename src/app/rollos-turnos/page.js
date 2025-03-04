import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import TurnosBenefitsSection from "./components/BenefitsSection/TurnosBenefitsSection";
import TurnosClientsSection from "./components/ClientsSection/TurnosClientsSection";
import TurnosHeroSection from "./components/HeroSection/TurnosHeroSection";
import TurnoIndustriesSection from "./components/IndustriesSection/TurnoIndustriesSection";
import TurnosProductsSection from "./components/ProductsSection/TurnosProductsSection";
import TurnosRelatedProducts from "./components/RelatedProducts/TurnosRelatedProducts";
import TurnosTechnicalDetails from "./components/TechnicalDetails/TurnosTechnicalDetails";

export const metadata = {
    title: "Rollos de turnos - TecnologiaPlus",
    description:
        "Descubre cómo Tecnología Plus optimiza tu negocio con rollos de turnos especializados para una gestión eficiente.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://tecnologiaplus.com/rollos-de-turno/",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://tecnologiaplus.com/rollos-de-turno/",
        title: "Rollos de turnos - TecnologiaPlus",
        description:
            "Descubre cómo Tecnología Plus optimiza tu negocio con rollos de turnos especializados para una gestión eficiente.",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2023/06/Nueva-imagen-rollos-de-turnos-2-1-1.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rollos de turnos - TecnologiaPlus",
        description:
            "Descubre cómo Tecnología Plus optimiza tu negocio con rollos de turnos especializados para una gestión eficiente.",
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


export default function RollosTurnosLanding() {
    return (
        <>
            <TurnosHeroSection />
            <SecondaryHeader />
            <TurnosClientsSection />
            <TurnosProductsSection />
            <TurnosBenefitsSection />
            <TurnosTechnicalDetails />
            <TurnoIndustriesSection />
            <TurnosRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}
