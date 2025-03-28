import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../enfermeria/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../../termicos/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/enfermeria/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

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