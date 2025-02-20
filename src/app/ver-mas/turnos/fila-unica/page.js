import ContactForm from "@/app/rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../rollos-termicos/components/RelatedProducts/RelatedProducts.module.scss";
import RelatedProducts from "@/app/rollos-termicos/components/RelatedProducts/RelatedProducts";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TurnosFilaUnicaProductGallery from "./components/ProductGallery/TurnosFilaUnicaProductGallery";
import LogosSection from "../../termicos/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";

export default function VerMasTurnosFilaUnica() {
    return (
        <>
            <TurnosFilaUnicaProductGallery />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <RelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}