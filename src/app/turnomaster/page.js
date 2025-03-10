import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import TurnoMasterBenefitsSection from "./components/BenefitsSection/TurnoMasterBenefitsSection";
import TurnoMasterClientsSection from "./components/ClientsSection/TurnoMasterClientsSection";
import TurnoMasterHeroSection from "./components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterIndustriesSection from "./components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterProductsSection from "./components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterRelatedProducts from "./components/RelatedProducts/TurnoMasterRelatedProducts";
import SecondaryTurnoMasterProductsSection from "./components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";

export const metadata = {
    title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
    description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
    viewport: "width=device-width, initial-scale=1, minimum-scale=1",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs.vercel.app/turnomaster",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
        description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
        url: "https://tecnologiaplus.com/software-para-turnos/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2020/09/turnos1.png",
                width: 900,
                height: 514,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
        description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
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


export default function TurnoMasterLanding() {
    return (
        <>
            <TurnoMasterHeroSection />
            <SecondaryHeader />
            <TurnoMasterClientsSection />
            <TurnoMasterProductsSection />
            <TurnoMasterBenefitsSection />
            <SecondaryTurnoMasterProductsSection />
            <TurnoMasterIndustriesSection />
            <TurnoMasterRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}