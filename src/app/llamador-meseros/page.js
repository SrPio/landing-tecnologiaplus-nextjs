import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import LlamadorMeserosBenefitsSection from "./components/BenefitsSection/LlamadorMeserosBenefitsSection";
import LlamadorMeserosClientsSection from "./components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosHeroSection from "./components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosIndustriesSection from "./components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosProductsSection from "./components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosRelatedProducts from "./components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosSecondaryProductsSection from "./components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection";
import StepsSectionLlamadorMeseros from "./components/StepsSection/StepsSectionLlamadorMeseros";

export default function LlamadorMeserosLanding() {
    return (
        <>
            <LlamadorMeserosHeroSection />
            <SecondaryHeader />
            <LlamadorMeserosClientsSection />
            <LlamadorMeserosProductsSection />
            <LlamadorMeserosBenefitsSection />
            <StepsSectionLlamadorMeseros />
            <LlamadorMeserosSecondaryProductsSection />
            <LlamadorMeserosIndustriesSection />
            <LlamadorMeserosRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}