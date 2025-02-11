import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import EnfermeriaClientsSection from "../enfermeria/components/ClientsSection/EnfermeriaClientsSection";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import EncuestaVirtualBenefitsSection from "./components/BenefitsSection/EncuestaVirtualBenefitsSection";
import EncuestaVirtualHeroSection from "./components/HeroSection/EncuestaVirtualHeroSection";
import EncuestaVirtualIndustriesSection from "./components/IndustriesSection/EncuestaVirtualIndustriesSection";
import EncuestaVirtualProductsSection from "./components/ProductsSection/EncuestaVirtualProductsSection";
import EncuestaVirtualRelatedProducts from "./components/RelatedProducts/EncuestaVirtualRelatedProducts";
import SecondaryEncuestaVirtualProductsSection from "./components/SecondaryProductsSection/SecondaryEncuestaVirtualProductsSection";

export default function EncuestaVirtualLanding() {
    return (
        <>
            <EncuestaVirtualHeroSection />
            <SecondaryHeader />
            <EnfermeriaClientsSection />
            <EncuestaVirtualProductsSection />
            <EncuestaVirtualBenefitsSection />
            <SecondaryEncuestaVirtualProductsSection />
            <EncuestaVirtualIndustriesSection />
            <EncuestaVirtualRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}