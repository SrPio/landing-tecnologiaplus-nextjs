import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import TermicosProductGallery from "./components/ProductGallery/TermicosProductGallery";
import LogosSection from "./components/LogosSection/LogosSection";
import TurnoMasterRelatedProducts from "@/app/turnomaster/components/RelatedProducts/TurnoMasterRelatedProducts";
import ContactForm from "@/app/rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";

export default function VerMasTermicos() {
    return (
        <>
            <TermicosProductGallery />
            <TechnicalSheet />
            <LogosSection />
            <TurnoMasterRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}