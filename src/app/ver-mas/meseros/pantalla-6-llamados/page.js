import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../control-numerico/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/app/llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export default function VerMasMeserosPantalla6Llamados() {
    return (
        <>
            <ProductGallerySelected />
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