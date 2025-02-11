import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import EnfermeriaBenefitsSection from "./components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaClientsSection from "./components/ClientsSection/EnfermeriaClientsSection";
import EnfermeriaHeroSection from "./components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaIndustriesSection from "./components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaProductsSection from "./components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaRelatedProducts from "./components/RelatedProducts/EnfermeriaRelatedProducts";
import EnfermeriaSecondaryProductsSection from "./components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "./components/StepsSection/StepsSectionEnfermeria";

export default function EnfermeriaLanding() {
    return (
        <>
            <EnfermeriaHeroSection />
            <SecondaryHeader />
            <EnfermeriaClientsSection />
            <EnfermeriaProductsSection />
            <EnfermeriaBenefitsSection />
            <EnfermeriaSecondaryProductsSection />
            <StepsSectionEnfermeria />
            <EnfermeriaIndustriesSection />
            <EnfermeriaRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}