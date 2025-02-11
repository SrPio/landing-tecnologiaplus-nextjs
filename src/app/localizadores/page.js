import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import LocalizadoresBenefitsSection from "./components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "./components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "./components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "./components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "./components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "./components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "./components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";

export default function LocalizadoresLanding() {
    return (
        <>
            <LocalizadoresHeroSection />
            <SecondaryHeader />
            <LocalizadoresClientsSection />
            <LocalizadoresProductsSection />
            <LocalizadoresBenefitsSection />
            <LocalizadoresSecondaryProductsSection />
            <LocalizadoresIndustriesSection />
            <LocalizadoresRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}