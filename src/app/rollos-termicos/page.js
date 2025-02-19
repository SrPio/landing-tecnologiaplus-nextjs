import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ContactForm from "./components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "./components/TechnicalDetails/TechnicalDetails";

export const metadata = {
    title: "Rollos Térmicos: Somos fabricantes de alta calidad",
    description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
    viewport: "width=device-width, initial-scale=1, minimum-scale=1",
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://tecnologiaplus.com/rollos-termicos/",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Rollos Térmicos - Tecnología Plus",
        description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
        url: "https://tecnologiaplus.com/rollos-termicos/",
        siteName: "Tecnología Plus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2023/06/3-2.png",
                width: 1200,
                height: 630,
                alt: "Rollos térmicos de alta calidad",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rollos Térmicos - Tecnología Plus",
        description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
        images: ["https://tecnologiaplus.com/wp-content/uploads/2023/06/3-2.png"],
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



export default function RollosTermicosLanding() {
    return (
        <>
            <HeroSection />
            <SecondaryHeader />
            <ClientsSection />
            <ProductsSection />
            <BenefitsSection />
            <TechnicalDetails />
            <IndustriesSection />
            <RelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}
