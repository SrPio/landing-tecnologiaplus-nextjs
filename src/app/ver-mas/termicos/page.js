import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import TermicosProductGallery from "./components/ProductGallery/TermicosProductGallery";
import LogosSection from "./components/LogosSection/LogosSection";
import ContactForm from "@/app/rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../rollos-termicos/components/RelatedProducts/RelatedProducts.module.scss";
import RelatedProducts from "@/app/rollos-termicos/components/RelatedProducts/RelatedProducts";

export default function VerMasTermicos() {
    return (
        <>
            <TermicosProductGallery />
            <TechnicalSheet />
            <LogosSection />
            <RelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}