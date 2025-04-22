import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LogosSection from "./components/LogosSection/LogosSection";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../papel-termico/components/RelatedProducts/RelatedProducts.module.scss";
import RelatedProducts from "@/app/papel-termico/components/RelatedProducts/RelatedProducts";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export default function VerMasTermicos() {
    return (
        <>
            <ProductGallerySelected />
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