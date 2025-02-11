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