import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import TermicosProductGallery from "./components/ProductGallery/TermicosProductGallery";
import LogosSection from "./components/LogosSection/LogosSection";
import ContactForm from "@/app/rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../rollos-termicos/components/RelatedProducts/RelatedProducts.module.scss";
import RelatedProducts from "@/app/rollos-termicos/components/RelatedProducts/RelatedProducts";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";

export default function VerMasTermicos() {
    return (
        <>
            <TermicosProductGallery />
            <SecondaryHeader />
            <TechnicalSheet />
            <LogosSection />
            <RelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}