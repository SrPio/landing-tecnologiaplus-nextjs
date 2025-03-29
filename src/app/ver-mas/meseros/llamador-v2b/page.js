import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import LogosSection from "../control-numerico/components/LogosSection/LogosSection";
import LlamadorMeserosRelatedProducts from "@/app/llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";

export default function VerMasMeserosLlamadorV2b() {
    return (
        <>
            <ProductGallery />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}