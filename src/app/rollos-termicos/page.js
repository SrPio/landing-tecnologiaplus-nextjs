import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ContactForm from "./components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "./components/TechnicalDetails/TechnicalDetails";


export default function RollosTermicosLanding() {
    return (
        <>
            <HeroSection />
            <SecondaryHeader />
            <ClientsSection />
            <ProductsSection />
            <BenefitsSection />
            <TechnicalDetails />
            <IndustriesSection />
            <RelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}
