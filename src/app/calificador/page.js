import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import CalificadorBenefitsSection from "./components/BenefitsSection/CalificadorBenefitsSection";
import CalificadorClientsSection from "./components/ClientsSection/CalificadorClientsSection";
import CalificadorHeroSection from "./components/HeroSection/CalificadorHeroSection";
import CalificadorIndustriesSection from "./components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorProductsSection from "./components/ProductsSection/CalificadorProductsSection";
import CalificadorRelatedProducts from "./components/RelatedProducts/CalificadorRelatedProducts";
import SecondaryCalificadorProductsSection from "./components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import StepsSectionCalificador from "./components/StepsSection/StepsSectionCalificador";

export default function CalificadorLanding() {
    return (
        <>
            <CalificadorHeroSection />
            <SecondaryHeader />
            <CalificadorClientsSection />
            <CalificadorProductsSection />
            <CalificadorBenefitsSection />
            <SecondaryCalificadorProductsSection />
            <StepsSectionCalificador />
            <CalificadorIndustriesSection />
            <CalificadorRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}