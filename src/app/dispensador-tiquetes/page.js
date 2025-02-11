import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import DispensadorTiquetesBenefitsSection from "./components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "./components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "./components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "./components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "./components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "./components/RelatedProducts/DispensadorTiquetesRelatedProducts";

export default function DispensadorTiquetesLanding() {
    return (
        <>
            <DispensadorTiquetesHeroSection />
            <SecondaryHeader />
            <DispensadorTiquetesClientsSection />
            <DispensadorTiquetesProductsSection />
            <DispensadorTiquetesBenefitsSection />
            <DispensadorTiquetesIndustriesSection />
            <DispensadorTiquetesRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}