import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import TurnoExpressBenefitsSection from "./components/BenefitsSection/TurnoExpressBenefitsSection";
import TurnoExpressClientsSection from "./components/ClientsSection/TurnoExpressClientsSection";
import TurnoExpressHeroSection from "./components/HeroSection/TurnoExpressHeroSection";
import TurnoExpressIndustriesSection from "./components/IndustriesSection/TurnoExpressIndustriesSection";
import TurnoExpressProductsSection from "./components/ProductsSection/TurnoExpressProductsSection";
import TurnoExpressRelatedProducts from "./components/RelatedProducts/TurnoExpressRelatedProducts";
import SecondaryTurnoExpressProductsSection from "./components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection";

export default function TurnoExpressLanding() {
    return (
        <>
            <TurnoExpressHeroSection />
            <SecondaryHeader />
            <TurnoExpressClientsSection />
            <TurnoExpressProductsSection />
            <TurnoExpressBenefitsSection />
            <SecondaryTurnoExpressProductsSection />
            <TurnoExpressIndustriesSection />
            <TurnoExpressRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}