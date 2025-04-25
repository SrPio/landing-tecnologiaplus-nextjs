import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";
import LogosSection from "../alarma-de-luz/components/LogosSection/LogosSection";

export default function VerMasEnfermeriaBotonE1() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <EnfermeriaRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}