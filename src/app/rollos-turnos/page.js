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
