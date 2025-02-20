import ContactForm from "@/app/rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../turnero-turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TurnosFilaUnicaProductGallery from "./components/ProductGallery/TurnosFilaUnicaProductGallery";
import LogosSection from "../../termicos/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero-turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ControlsOptions from "./components/ControlsOptions/ControlsOptions";

export default function VerMasPantallaT1N() {
    return (
        <>
            <TurnosFilaUnicaProductGallery />
            <SecondaryHeader />
            <TechnicalSheet />
            <ControlsOptions />
            <HowItWorks />
            <LogosSection />
            <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}