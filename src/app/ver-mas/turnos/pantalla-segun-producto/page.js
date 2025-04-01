import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../turnero-turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero-turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ControlsOptions from "../pantalla-t1n/components/ControlsOptions/ControlsOptions";
import LogosSection from "../fila-unica/components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export default function VerMasPantallaSegunProducto() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <ControlsOptions />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}