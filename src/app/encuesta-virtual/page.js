import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import EncuestaVirtualBenefitsSection from "./components/BenefitsSection/EncuestaVirtualBenefitsSection";
import EncuestaVirtualClientsSection from "./components/ClientsSection/EncuestaVirtualClientsSection";
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
            <EncuestaVirtualClientsSection />
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